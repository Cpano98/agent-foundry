# MASVS v2.1.0 detection checklist (Expo / React Native quick patterns)

This file is the **Expo / React Native fast-path**: grep patterns and judgment anchors for a
cross-platform JS codebase. For **native Android/iOS depth and MASTG test-ID mappings**, defer to the
plugin's per-MASVS audit skills — `secure-storage-audit`, `crypto-review`, `auth-assessment`,
`network-security-check`, `platform-interaction-review`, `code-quality-scan`, `resilience-assessment`,
`privacy-audit` — each of which has a "React Native / Expo notes" section plus its own MASTG table.

Each check below: what to look for, how to judge it, CWE, default severity anchor. Grep patterns are
starting points — read the surrounding code before recording a finding, and prefer AST/context over raw
string matches. Redact any secret before it enters a finding.

---

## MASVS-STORAGE — insecure data storage at rest

**Look for:** `@react-native-async-storage/async-storage`, `AsyncStorage`, legacy
`react-native/Libraries/Storage`, `expo-file-system` writes of auth data, `redux-persist` with default
(AsyncStorage) storage.

```
rg -n "async-storage|AsyncStorage|redux-persist" src app
rg -n "(setItem|setItemAsync|multiSet)\s*\(\s*['\"\`][^'\"]*(auth|token|jwt|session|refresh|password|secret|key|pin|otp)" src app
```

**Judge:** a finding when a value stored is a session token, refresh token, JWT, credential, or PII and
the store is not `expo-secure-store` / `react-native-keychain`. Key name matching
`auth|token|jwt|session|refresh|password|secret|pin` is strong signal; also check the *value* expression.
Non-sensitive prefs in AsyncStorage are fine.

**CWE:** CWE-312 (cleartext storage of sensitive information), CWE-922. **Anchor:** HIGH.

---

## MASVS-CRYPTO — client-exposed secrets

**Look for:**
- `EXPO_PUBLIC_` env vars whose name contains `SECRET|PRIVATE|API_KEY|TOKEN|PASSWORD|CLIENT_SECRET|SK_`.
- Hardcoded keys in `app.json` / `app.config.*` `extra`, `eas.json` `build.*.env`, committed `.env*`.
- `process.env.EXPO_PUBLIC_*` read in client code and passed to a third-party SDK.
- Private keys / PEM blocks / `sk_live_` / `AIza…` / AWS `AKIA…` anywhere in tracked files.

```
rg -n "EXPO_PUBLIC_[A-Z0-9_]*(SECRET|PRIVATE|API_KEY|TOKEN|PASSWORD|CLIENT_SECRET|SK_)" .
rg -n "sk_live_|sk_test_|AKIA[0-9A-Z]{16}|-----BEGIN (RSA |EC )?PRIVATE KEY-----|AIza[0-9A-Za-z_\-]{35}" . -g '!**/node_modules/**'
rg -n "\"extra\"|apiKey|clientSecret" app.json app.config.js app.config.ts eas.json
```

**Judge:** anything prefixed `EXPO_PUBLIC_` is inlined into the JS bundle and is public — a sensitive
name or value is a finding. `eas secret` / EAS build env only protects CI; if the value is then embedded
in client code it is still public. Note that Hermes bytecode (`index.android.bundle`, `*.hbc`) does not
hide strings — decompilable in seconds.

**Remediation direction:** move to a server-side BFF / serverless proxy; client calls the proxy, secret
never ships. See `remediation-patterns.md`.

**CWE:** CWE-798 (hardcoded credentials), CWE-200. **Anchor:** CRITICAL for a live third-party secret,
HIGH for a non-privileged key.

---

## MASVS-AUTH — authentication / authorization

**Look for:** `expo-auth-session`, `useAuthRequest`, `AuthRequest`, `exchangeCodeAsync`, `makeRedirectUri`.

```
rg -n "useAuthRequest|AuthRequest\(|expo-auth-session|exchangeCodeAsync|usePKCE|responseType" src app
```

**Judge — finding when:**
- `usePKCE: false` (or PKCE not set while `responseType: 'code'` and a public client).
- No `state` generated / no `state` equality check on the response.
- `responseType: 'token'` (implicit flow) in a mobile app.
- `redirectUri` uses a bare custom scheme with no App Link / Universal Link fallback (interceptable by a
  sibling app registering the same scheme) — MEDIUM, note alongside PLATFORM.

**CWE:** CWE-1275 / CWE-352 (state), CWE-287. **Anchor:** HIGH.

---

## MASVS-NETWORK — transport security

**Look for:**
```
rg -n "rejectUnauthorized\s*:\s*false|NODE_TLS_REJECT_UNAUTHORIZED|Allow arbitrary loads|NSAllowsArbitraryLoads|NSExceptionAllowsInsecureHTTPLoads|cleartextTrafficPermitted|usesCleartextTraffic|http://" .
```
- iOS `Info.plist`: `NSAppTransportSecurity` → `NSAllowsArbitraryLoads = true` or per-domain insecure
  exceptions.
- Android: `android:usesCleartextTraffic="true"`, `cleartextTrafficPermitted="true"` in
  network-security-config, `expo-build-properties` `android.usesCleartextTraffic`.
- `fetch` / `axios` against `http://` non-localhost endpoints.
- Custom `Agent({ rejectUnauthorized: false })`, `fetch` with disabled cert validation.
- No certificate/public-key pinning where the threat model warrants it (informational unless the app
  handles high-value data).

**CWE:** CWE-295 (improper cert validation), CWE-319 (cleartext transmission). **Anchor:** HIGH for
disabled validation, MEDIUM for cleartext-permitted flags.

---

## MASVS-PLATFORM — platform interaction

**Deep links:**
```
rg -n "Linking\.(openURL|addEventListener|getInitialURL)|useURL\(|getInitialURL|expo-linking|scheme" src app app.json
```
For each handler, follow the parameter from parse → use. **Finding when** a URL/host/path param drawn
from the incoming link reaches, without an allowlist / host check:
- `Linking.openURL(...)` or `WebBrowser.openBrowserAsync(...)` → open redirect (CWE-601).
- `router.push` / `navigation.navigate` with a dynamic route → forced navigation.
- `<WebView source={{ uri }} />` → arbitrary content / `javascript:` injection.

**WebView config:**
```
rg -n "<WebView|react-native-webview|originWhitelist|allowFileAccess|allowUniversalAccessFromFileURLs|injectedJavaScript|onMessage|setSupportMultipleWindows" src app
```
Flag `originWhitelist={['*']}`, `allowFileAccess`/`allowFileAccessFromFileURLs`/
`allowUniversalAccessFromFileURLs` true, dynamic `source.uri` from untrusted input, `injectedJavaScript`
built from untrusted strings, `mixedContentMode="always"`.

**Also:** exported Android activities/receivers with `android:exported="true"` + intent filters that are
not intended to be public; `expo-intent-launcher` misuse.

**CWE:** CWE-601, CWE-939, CWE-749. **Anchor:** HIGH for open redirect handling auth callbacks, MEDIUM
otherwise.

---

## MASVS-CODE — code quality & dependency vulnerabilities

**Dependencies:** parse `package.json` + lockfile, then:
```
npm audit --json            # or: yarn npm audit --json / pnpm audit --json
osv-scanner --lockfile=<lockfile>   # if installed
```
Match installed (locked) versions against advisories. **Always explicitly check:**
- `react-server-dom-webpack` / `react-server-dom-turbopack` / `react-server-dom-parcel` in the vulnerable
  **19.0.0 – 19.1.1** range → **CRITICAL** unauthenticated RCE, CVE-2025-55182 / CVE-2025-55183 /
  CVE-2025-55184 (and related RSC advisories). Fixed: ≥ 19.1.2 (confirm against the advisory at audit
  time).
- `react-server-dom-webpack` present at all → note RSC / Server Functions attack surface even if patched.
- Known-bad transitive ranges surfaced by `npm audit` at `high` / `critical`.
- `metro` / `@expo/*` / `expo` advisories for the detected SDK.

**Other code-quality checks:** `eval(`, `Function(`, `child_process` in app code, `dangerouslySetInnerHTML`
(also WEB), unsanitized `JSON.parse` of remote data used as code, `__DEV__` bypasses left enabled.

**CWE:** CWE-1104 (unmaintained/vulnerable component), CWE-94 (code injection). **Anchor:** matches the
advisory severity; RSC RCE = CRITICAL.

---

## MASVS-RESILIENCE — anti-tampering / OTA integrity

**Look for** in `app.json` / `app.config.*`:
```
rg -n "\"updates\"|expo-updates|codeSigningCertificate|codeSigningMetadata|EXPO_UPDATE_URL" app.json app.config.js app.config.ts
```
**Finding when** `expo-updates` is in use (an `updates.url` is set, or `expo-updates` is a dependency and
runtime updates are enabled) but `updates.codeSigningCertificate` and `updates.codeSigningMetadata`
(`keyid`, `alg`) are absent → an MITM / compromised-CDN attacker can swap the JS bundle (remote code
execution on device). Also note missing `expo-updates` `checkAutomatically` hardening and absence of
`fallbackToCacheTimeout` considerations only as INFO.

Related resilience INFO checks: no jailbreak/root detection, no integrity/attestation
(`react-native-device-info` / Play Integrity / DeviceCheck) — informational unless in a high-risk domain.

**CWE:** CWE-494 (download of code without integrity check), CWE-345. **Anchor:** HIGH.

---

## MASVS-PRIVACY — user privacy controls

**Look for:** absence of `expo-screen-capture` (`preventScreenCaptureAsync` / `usePreventScreenCapture`)
on screens rendering PII, payment data, medical data, or auth secrets; `FLAG_SECURE` not set on Android;
analytics/crash SDKs (`sentry`, `segment`, `amplitude`, `firebase/analytics`) capturing full screen
contents or PII without redaction; clipboard writes of sensitive values (`expo-clipboard` /
`Clipboard.setString` with tokens).

```
rg -n "expo-screen-capture|preventScreenCapture|FLAG_SECURE|Clipboard\.setString|setStringAsync" src app
```

**CWE:** CWE-359 (exposure of private information), CWE-200. **Anchor:** MEDIUM.

---

## WEB — Expo web deployment

**Static (SAST):**
```
rg -n "dangerouslySetInnerHTML|Access-Control-Allow-Origin|cors\(|helmet|Content-Security-Policy|Strict-Transport-Security" .
```
- `dangerouslySetInnerHTML` fed from untrusted/remote content → XSS (CWE-79).
- Server / host config (`vercel.json`, `netlify.toml`, `serve.json`, `firebase.json` `headers`, custom
  Express) with `Access-Control-Allow-Origin: *` **plus** credentialed requests, or reflected arbitrary
  Origin.
- Missing `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`,
  frame-ancestors / `X-Frame-Options`.

**Dynamic (DAST) — see SKILL Step 3 / `tooling.md`.**

**CWE:** CWE-79, CWE-942 (permissive CORS), CWE-1021 (framing), CWE-693 (protection mechanism failure).
**Anchor:** CRITICAL for credentialed wildcard/reflected CORS, MEDIUM for missing hardening headers.
