---
name: auth-assessment
description: Assess mobile app authentication and authorization mechanisms against MASVS-AUTH controls and MASTG tests. Use when reviewing login flows, OAuth2 / PKCE, biometric auth, session management, MFA, or access control in Android, iOS, or React Native / Expo apps. Feeds the MASVS-AUTH portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
---

# Authentication & Authorization Assessment (MASVS-AUTH)

You are a mobile application security expert specializing in authentication and authorization.
Audit the target app against OWASP MASVS-AUTH controls and MASTG tests.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

## MASVS Controls to Verify

- **MASVS-AUTH-1** — remote authentication/authorization uses secure protocols with server-side
  enforcement (OAuth 2.0, OpenID Connect).
- **MASVS-AUTH-2** — biometric / local PIN authentication follows platform best practice and cannot be
  trivially bypassed.
- **MASVS-AUTH-3** — step-up authentication is required for high-risk operations (payments, account
  changes, data export).

## Audit Procedure

### Step 1: Authentication flow analysis
Map: login mechanisms (password, social, SSO, passwordless); token model (JWT, OAuth, session cookies);
token storage location and protection; refresh / expiration logic; logout and session invalidation;
account recovery.

### Step 2: Remote authentication checks
- **Credential handling** — passwords never stored locally; only tokens persisted.
- **OAuth 2.0 / OIDC** — PKCE mandatory for mobile; strict redirect-URI validation; `state` parameter
  generated and verified on the response.
- **Token storage** — platform secure storage (Keychain / KeyStore), not SharedPreferences /
  UserDefaults / local storage.
- **Token expiration** — short-lived access tokens; refresh-token rotation.
- **Session management** — server-side invalidation on logout; token revocation.
- **Transport** — strong TLS and cert validation for auth endpoints; assess pinning for first-party
  high-risk endpoints rather than treating it as universally required.

### Step 3: Local authentication checks

**Android biometric:** `BiometricPrompt` (not deprecated `FingerprintManager`);
`setAllowedAuthenticators` → `BIOMETRIC_STRONG`; `CryptoObject` used so biometric unlocks a key, not just
returns a boolean; `setNegativeButtonText` fallback; `KeyGenParameterSpec.setUserAuthenticationRequired(true)`;
no "check a boolean after the prompt" bypass.

**iOS biometric:** `LAContext`, `evaluatePolicy`, `canEvaluatePolicy`;
`deviceOwnerAuthenticationWithBiometrics` vs `deviceOwnerAuthentication`; Keychain item gated with
`kSecAccessControlBiometryCurrentSet`; `evaluatedPolicyDomainState` checked for enrollment changes; not
bypassable by hooking the `evaluatePolicy` callback.

Where local-auth strength is security-critical, recommend dynamic validation (Frida / `r2frida`) to
confirm biometric callbacks, Keychain gates, and step-up flows cannot be hooked away.

### Step 4: Step-up authentication
Identify sensitive operations — payments, password/email change, account deletion, data export, privilege
escalation, adding devices/trusted contacts — and verify each requires re-authentication.

### Step 5: React Native / Expo notes
- **`expo-auth-session`** — inspect `useAuthRequest` / `AuthRequest`: `usePKCE` must be `true` (finding
  if `false`, or unset while `responseType: 'code'` for a public client); `state` must be generated and
  checked; `responseType: 'token'` (implicit flow) is a finding; `exchangeCodeAsync` must pass
  `code_verifier`.
  ```
  rg -n "useAuthRequest|expo-auth-session|exchangeCodeAsync|usePKCE|responseType|makeRedirectUri" src app
  ```
- **Redirect URI** — a bare custom scheme with no App Link / Universal Link (`--proxy` in dev is fine;
  production should use `scheme` + verified associated domains) is interceptable by a sibling app
  registering the same scheme → MEDIUM, cross-reference `platform-interaction-review`.
- **Token storage** — see `secure-storage-audit`: tokens in `AsyncStorage` / `localStorage` (web) are a
  MASVS-AUTH-1 + STORAGE-1 finding; require `expo-secure-store` / `react-native-keychain` (native) and an
  httpOnly cookie on web.
- **Biometric** — `expo-local-authentication` `authenticateAsync` that only returns `{ success: true }`
  with no key unlock is the "boolean gate" anti-pattern; on native, gate a `SecureStore` item with
  `requireAuthentication: true` instead.
- Firebase Auth / Auth0 / Clerk RN SDKs — verify persistence layer is the secure store, not default
  AsyncStorage.

### Step 6: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0017 | Biometric Authentication (Android) |
| MASTG-TEST-0018 | Confirm Credentials (Android) |
| MASTG-TEST-0064 | Local Authentication (iOS) |
| MASTG-TEST-0326 | Biometric Authentication Without CryptoObject |
| MASTG-TEST-0327 | Biometric Key Not Invalidated on Enrollment |
| MASTG-TEST-0266 | Local Auth with Biometry Without Keychain |

## Output Format
1. **Authentication Architecture Overview** — auth flows identified.
2. **Findings** — severity, MASVS control, MASTG test ID, `file:line`, redacted snippet, remediation.
3. **Session Management Assessment** — token lifecycle, storage, invalidation.
4. **Local Auth Assessment** — biometric quality and bypass resistance.
5. **Step-Up Auth Coverage** — which sensitive operations are / aren't protected.
6. **Compliance Summary** — Pass/Fail for MASVS-AUTH-1, AUTH-2, AUTH-3.

Inside the `app-security-analyzer` pipeline, return findings **unscored**; redact every secret.
