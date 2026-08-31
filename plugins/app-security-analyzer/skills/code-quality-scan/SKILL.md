---
name: code-quality-scan
description: Scan mobile app code quality and supply-chain security against MASVS-CODE controls and MASTG tests. Use when checking for vulnerable dependencies (incl. React Server Components RCE), injection flaws, unsafe deserialization, outdated platform requirements, or missing forced-update mechanisms in Android, iOS, or React Native / Expo apps. Feeds the MASVS-CODE portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
---

# Code Quality & Security Scan (MASVS-CODE)

You are a mobile application security expert specializing in code quality and supply-chain security.
Audit the target app against OWASP MASVS-CODE controls and MASTG tests.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

## MASVS Controls to Verify

- **MASVS-CODE-1** — the app requires an up-to-date platform version.
- **MASVS-CODE-2** — the app has a mechanism for enforcing app updates.
- **MASVS-CODE-3** — the app only uses components without known vulnerabilities.
- **MASVS-CODE-4** — the app validates and sanitizes all untrusted inputs.

## Audit Procedure

### Step 1: Platform version requirements
**Android:** `build.gradle[.kts]` — `minSdkVersion` / `targetSdkVersion` / `compileSdk`; flag versions
inappropriate for the security/regulatory/dependency needs or lagging far behind platform security
changes; flag deprecated/removed API usage. **iOS:** minimum deployment target vs support policy;
deprecated APIs (`UIWebView`, legacy crypto/network).

### Step 2: Forced update mechanism
In-app update libraries or custom version-check logic; Android `AppUpdateManager` (Play In-App Updates);
iOS custom check against the App Store API; verify it can't be bypassed and that critical updates can
block usage.

### Step 3: Dependency vulnerability assessment
- **Android:** `build.gradle[.kts]`, `gradle.lockfile` — outdated deps with CVEs; unmaintained (2+ yr);
  untrusted repositories.
- **iOS:** `Podfile` / `Podfile.lock`, `Package.swift` / `Package.resolved`, `Cartfile[.resolved]`.
- **Cross-platform:** React Native — `package.json` + `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml`;
  Flutter — `pubspec.yaml` / `pubspec.lock`; Xamarin — `.csproj` + NuGet.
- Run `npm audit --json` (or `yarn npm audit --json` / `pnpm audit --json`) and, if available,
  `osv-scanner --lockfile=<lockfile> --format json` in the target dir.

**Always explicitly check** `react-server-dom-webpack` / `react-server-dom-turbopack` /
`react-server-dom-parcel` for the vulnerable **19.0.0 – 19.1.1** range → **CRITICAL** unauthenticated RCE
(CVE-2025-55182 / CVE-2025-55183 / CVE-2025-55184 and related RSC / Server Functions advisories; fixed
≥ 19.1.2 — confirm against the advisory at audit time). If the app does not use React Server Components /
Server Functions, also recommend removing the dependency and any `react-server-dom-*` `metro.config.*`
wiring.

### Step 4: Input validation analysis
- **SQL injection** — `rawQuery`, `execSQL` (Android), `sqlite3_exec` (iOS), string-concatenated
  queries; require parameterization / ORM.
- **Path traversal** — `../` handling, `File` constructors with user input; require canonicalization +
  allowlist.
- **JavaScript injection** — `loadUrl("javascript:")`, `evaluateJavascript` with user data.
- **Intent injection** (Android) — untrusted data building Intents.
- **Format string** — `String.format` / `NSString stringWithFormat` with user input.
- **Unsafe deserialization** — `ObjectInputStream`, `Serializable`/`Parcelable`, `NSKeyedUnarchiver`,
  `JSONDecoder` with external data.
- **XXE** — XML parsing with external entities enabled.
- **Log injection** — user input written straight to logs.

### Step 5: React Native / Expo notes
- **JS/TS injection sinks** — `eval(`, `new Function(`, `child_process` in app code, `require()` with a
  dynamic path, `dangerouslySetInnerHTML` (web) from untrusted data, `JSON.parse` of remote data used to
  build code, template strings into `WebView.injectedJavaScript` or `evaluateJavascript`.
- **SQLite** — `expo-sqlite` / `react-native-sqlite-storage` / WatermelonDB / Drizzle raw string SQL;
  require parameterized statements.
- **Supply chain** — `npm audit` at `high`/`critical`; postinstall scripts in dependencies;
  `resolutions`/`overrides` pinning stale vulnerable versions; unpinned Git/tarball deps; typosquat-style
  names. Check `metro`, `expo`, `@expo/*`, `react-native` advisories for the detected SDK.
- **Forced update** — `expo-updates` runtime version + `fallbackToCacheTimeout`; `expo-store-review` is
  not an update gate; look for a min-supported-version check against a remote config that blocks the UI.
- **Platform version** — `app.json` `android.minSdkVersion` / `ios.deploymentTarget` (or
  `expo-build-properties`); Expo SDK itself sets floors — flag an Expo SDK several majors behind current.

### Step 6: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0025 | Injection Flaws (Android) |
| MASTG-TEST-0026 | URL Loading in WebViews (Android) |
| MASTG-TEST-0036 | Object Persistence (Android) |
| MASTG-TEST-0222 | Outdated Third-Party Dependencies |
| MASTG-TEST-0245 | Input Validation Issues |
| MASTG-TEST-0272 | Minimum SDK Version Check |
| MASTG-TEST-0274 | Forced App Update Mechanism |

## Output Format
1. **Platform Version Assessment** — min/target versions and compliance.
2. **Update Mechanism Assessment** — forced-update capability.
3. **Dependency Inventory** — every third-party dep with version, maintenance signal, known CVEs.
4. **Input Validation Findings** — each vector with severity, MASTG test, `file:line`, remediation.
5. **Findings Summary** — consolidated table.
6. **Compliance Summary** — Pass/Fail for MASVS-CODE-1 through CODE-4.

Inside the `app-security-analyzer` pipeline, return findings **unscored**.
