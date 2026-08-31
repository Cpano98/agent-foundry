---
name: platform-interaction-review
description: Review mobile app platform interaction security against MASVS-PLATFORM controls and MASTG tests. Use when auditing IPC, exported components, WebViews, deep links / URL schemes / Expo Router, content providers, or UI security (screenshots, overlays) in Android, iOS, or React Native / Expo apps. Feeds the MASVS-PLATFORM portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
---

# Platform Interaction Review (MASVS-PLATFORM)

You are a mobile application security expert specializing in platform interaction security.
Audit the target app against OWASP MASVS-PLATFORM controls and MASTG tests.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

## MASVS Controls to Verify

- **MASVS-PLATFORM-1** — IPC does not leak sensitive data or introduce attack vectors.
- **MASVS-PLATFORM-2** — WebViews are configured to prevent data exposure and do not bridge unsafe
  native functionality to untrusted web content.
- **MASVS-PLATFORM-3** — the UI prevents exposure of sensitive data via screenshots, screen recording,
  shoulder surfing, or overlay attacks.

## Audit Procedure

### Step 1: IPC mechanism analysis

**Android:** implicit `Intent`s carrying sensitive data; `exported="false"` on components not meant to be
public; overly broad intent filters. Content Providers — `exported="false"` unless intentional;
`permission` / `readPermission` / `writePermission`; SQLi protection in `query/update/delete`; path
traversal in `openFile`. Broadcast Receivers — `permission` on exported receivers. Services — bound
service auth, AIDL. **PendingIntents** — `FLAG_IMMUTABLE`.

**iOS:** `CFBundleURLTypes` scheme handlers validate + sanitize input; no sensitive data in URL params;
prefer Universal Links over custom schemes; App Extension data-sharing boundaries; `UIPasteboard` with
`localOnly` + expiry for sensitive items; App Group container access control.

### Step 2: WebView security analysis

**Android WebView:** `setJavaScriptEnabled(true)` with untrusted content; `addJavascriptInterface`
(needs `@JavascriptInterface` + input validation); `setAllowFileAccess`,
`setAllowFileAccessFromFileURLs`, `setAllowUniversalAccessFromFileURLs` should be `false`; URL allowlist
in `shouldOverrideUrlLoading`; `onReceivedSslError` must not call `handler.proceed()` unconditionally.

**iOS:** `WKWebView` only (no `UIWebView`); JS preferences in `WKWebViewConfiguration`;
`WKScriptMessageHandler` validates messages; `decidePolicyFor navigationAction` URL validation;
`javaScriptCanOpenWindowsAutomatically` disabled for untrusted content.

### Step 3: Deep link / App Link security
All handlers validate + sanitize parameters; no open redirect via deep link; deep links cannot trigger
sensitive operations without additional auth; Android `android:autoVerify="true"` for App Links; iOS
prefer Universal Links.

### Step 4: UI security
Screenshot protection — `FLAG_SECURE` (Android) / background-snapshot masking (iOS); screen-recording
protection; overlay protection — `filterTouchesWhenObscured` / `SYSTEM_ALERT_WINDOW` detection;
sensitive-field masking — `inputType="textPassword"` / `secureTextEntry`; sensitive screens obscured in
the task switcher.

### Step 5: React Native / Expo notes
- **Deep links** — `expo-linking` (`Linking.parse`, `useURL`, `getInitialURL`), Expo Router (the `app/`
  tree + `+native-intent.ts`), or React Navigation `linking` config. For each handler, follow each param
  from parse → sink. Finding when a URL/host/path param reaches, without an allowlist / host check:
  `Linking.openURL(...)` or `WebBrowser.openBrowserAsync(...)` → open redirect (CWE-601);
  `router.push` / `navigation.navigate` with a dynamic route → forced navigation;
  `<WebView source={{ uri }} />` → arbitrary content / `javascript:` injection.
  ```
  rg -n "Linking\.(openURL|parse|getInitialURL)|useURL\(|expo-linking|WebBrowser\.open|\+native-intent" src app
  ```
- **Scheme** — `app.json` `scheme`; a bare custom scheme is hijackable by a sibling app. Recommend
  verified App Links / Universal Links (`ios.associatedDomains`, `android.intentFilters` + `autoVerify`).
- **`react-native-webview`** — flag `originWhitelist={['*']}`, `allowFileAccess`,
  `allowUniversalAccessFromFileURLs`, `allowingReadAccessToURL`, dynamic `source.uri` from untrusted
  input, `injectedJavaScript` built from untrusted strings, `mixedContentMode="always"`,
  `setSupportMultipleWindows={false}` without `onOpenWindow` handling. `onMessage` handlers must validate
  `event.nativeEvent.data`.
- **Screenshot protection** — check for `expo-screen-capture`
  (`preventScreenCaptureAsync` / `usePreventScreenCapture`) on PII / financial / auth screens; its
  absence there is a PLATFORM-3 finding (cross-reference `privacy-audit`).
- **Android exported** — Expo config plugins can add `intentFilters` / receivers; check the generated
  `AndroidManifest.xml` under `android/` (or `expo prebuild` output) for unintended `exported="true"`.

### Step 6: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0007 | Deep Links (Android) |
| MASTG-TEST-0008 | URL Schemes (Android) |
| MASTG-TEST-0028 | WebView Protocol Handlers (Android) |
| MASTG-TEST-0029 | JavaScript Execution in WebViews (Android) |
| MASTG-TEST-0030 | WebView Content (Android) |
| MASTG-TEST-0056 | Universal Links (iOS) |
| MASTG-TEST-0075 | WebView Protocol Handlers (iOS) |
| MASTG-TEST-0077 | JavaScript Execution in WebViews (iOS) |
| MASTG-TEST-0250 | Exported Content Provider (Android) |
| MASTG-TEST-0251 | Exported Broadcast Receiver (Android) |

## Output Format
1. **IPC Surface Map** — all IPC mechanisms and exposure level.
2. **WebView Inventory** — each instance with its configuration.
3. **Deep Link Analysis** — all registered schemes/links and their handlers.
4. **UI Security Assessment** — screenshot, overlay, data-exposure protections.
5. **Findings** — severity, MASVS control, MASTG test ID, `file:line`, redacted snippet, remediation.
6. **Compliance Summary** — Pass/Fail for MASVS-PLATFORM-1, PLATFORM-2, PLATFORM-3.

Inside the `app-security-analyzer` pipeline, return findings **unscored**.
