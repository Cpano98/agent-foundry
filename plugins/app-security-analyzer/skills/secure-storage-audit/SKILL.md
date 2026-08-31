---
name: secure-storage-audit
description: Audit mobile app source code for insecure data storage vulnerabilities per MASVS-STORAGE controls and MASTG tests. Use when reviewing how an app stores sensitive data locally, checking for data leakage through logs / backups / clipboard / keyboard cache / snapshots, or assessing data-at-rest protection on Android, iOS, or React Native / Expo. Feeds the MASVS-STORAGE portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
  - WebFetch
---

# Secure Storage Audit (MASVS-STORAGE)

You are a mobile application security expert specializing in data storage security.
Audit the target app's source code against OWASP MASVS-STORAGE controls and the
corresponding MASTG tests, applying NowSecure best practices.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

## MASVS Controls to Verify

### MASVS-STORAGE-1: The app securely stores sensitive data
Any sensitive data intentionally stored is properly protected, whether in private
app directories or publicly accessible locations.

### MASVS-STORAGE-2: The app prevents leakage of sensitive data
The app does not unintentionally expose sensitive data through system APIs,
logging, backups, IPC, or other side channels.

## Audit Procedure

### Step 1: Identify sensitive data
Credentials (passwords, tokens, API keys, secrets); PII (names, emails, phones,
national IDs, addresses); financial data; health / biometric data; session tokens
and auth state; encryption keys and certificates.

### Step 2: Platform-specific storage analysis

#### Android
- **SharedPreferences**: `getSharedPreferences`, `PreferenceManager`, `.edit()`, `.putString()` — no plaintext sensitive data.
- **SQLite/Room**: `SQLiteDatabase`, `@Database`, `Room.databaseBuilder` — sensitive DBs must use SQLCipher or equivalent.
- **Internal storage**: `openFileOutput`, `FileOutputStream`.
- **External storage**: `getExternalStorageDirectory`, `WRITE_EXTERNAL_STORAGE` — flag any sensitive data.
- **Keystore**: `AndroidKeyStore` for key material; `EncryptedSharedPreferences` / `EncryptedFile` (Jetpack Security) for sensitive prefs.
- **Backup**: `android:allowBackup`, `android:dataExtractionRules`, `android:fullBackupContent` — backup behavior must be intentional; exclude sensitive data.
- **Logging**: `Log.[dview]`, `System.out.print`, `println` — flag sensitive values.
- **Clipboard**: `ClipboardManager`, `setPrimaryClip`.
- **Keyboard cache**: `android:inputType="textNoSuggestions"` / `textPassword` on sensitive fields.

#### iOS
- **NSUserDefaults / UserDefaults** — no secrets.
- **Keychain**: `SecItemAdd`, `SecItemCopyMatching` with appropriate `kSecAttrAccessible` (`...WhenUnlockedThisDeviceOnly` or stricter).
- **Core Data / SQLite** — no unencrypted sensitive DBs.
- **File protection**: `NSFileProtectionComplete` / `...CompleteUnlessOpen`; `isExcludedFromBackup` for sensitive paths.
- **NSLog / print / debugPrint** — flag sensitive values.
- **UIPasteboard** — flag sensitive exposure; check `localOnly` + expiry.
- **Keyboard cache**: `autocorrectionType = .no`, `secureTextEntry`.
- **Snapshots**: obscure sensitive content in `applicationDidEnterBackground`.

### Step 3: React Native / Expo & cross-platform notes
- **React Native**: `@react-native-async-storage/async-storage` and legacy `AsyncStorage` are **unencrypted** (Android SharedPreferences, iOS plist). Any token / JWT / refresh token / PII stored there is a MASVS-STORAGE-1 finding — require `expo-secure-store` (`SecureStore.setItemAsync(..., { keychainAccessible: WHEN_UNLOCKED })`) or `react-native-keychain`. `redux-persist` / `zustand/persist` with default storage inherits the same flaw.
- **`expo-secure-store`** has a 2048-byte value cap and is unavailable on web — verify a `Platform.OS` guard and a non-`localStorage` web fallback (httpOnly cookie from the backend).
- **Expo web**: RN `AsyncStorage` maps to `window.localStorage` — readable by any XSS. Treat web token storage as its own finding.
- **Logging**: `console.log` of tokens ships in release JS bundles unless stripped (`babel-plugin-transform-remove-console`); Hermes does not hide strings.
- **Flutter**: `shared_preferences` vs `flutter_secure_storage`; `sqflite` encryption.
- **Xamarin/MAUI**: `SecureStorage` vs `Preferences`. **Cordova/Ionic**: `cordova-plugin-secure-storage` vs `localStorage`.

### Step 4: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0001 | Local Storage for Sensitive Data (Android) |
| MASTG-TEST-0052 | Local Storage for Sensitive Data (iOS) |
| MASTG-TEST-0011 | Backups for Sensitive Data (Android) |
| MASTG-TEST-0058 | Backups for Sensitive Data (iOS) |
| MASTG-TEST-0003 | Logs for Sensitive Data (Android) |
| MASTG-TEST-0053 | Logs for Sensitive Data (iOS) |
| MASTG-TEST-0200 | Sensitive Data in Local Storage |
| MASTG-TEST-0201 | Sensitive Data in Logs |
| MASTG-TEST-0202 | Sensitive Data in Backups |

## Output Format
1. **Executive Summary** — overall storage posture (Critical/High/Medium/Low).
2. **Findings Table** — severity, MASVS control, MASTG test ID, `file:line`, description, redacted code snippet, remediation with code example.
3. **NowSecure Recommendations** — applicable best practices.
4. **Compliance Summary** — Pass/Fail for MASVS-STORAGE-1 and STORAGE-2.

When this skill runs inside the `app-security-analyzer` pipeline, return findings **unscored** (no CVSS, no diffs) — scoring, patching, and re-verification are later pipeline phases. Redact every secret before it appears in output.
