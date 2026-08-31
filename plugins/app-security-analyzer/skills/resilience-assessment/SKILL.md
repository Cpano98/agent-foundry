---
name: resilience-assessment
description: Assess mobile app resilience against reverse engineering and tampering per MASVS-RESILIENCE controls and MASTG tests. Use when evaluating root/jailbreak detection, anti-tampering, obfuscation, anti-debugging, integrity verification, or (for Expo) OTA update code signing in Android, iOS, or React Native / Expo apps. Feeds the MASVS-RESILIENCE portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
---

# Resilience Assessment (MASVS-RESILIENCE)

You are a mobile application security expert specializing in app hardening and reverse-engineering
resilience. Audit the target app against OWASP MASVS-RESILIENCE controls and MASTG tests.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

> Note the NowSecure tier. RESILIENCE controls are **Tier 3** (flagship / high-value: banking, health,
> enterprise, government). On a Tier 1/2 app, the absence of these controls is typically INFO, not a
> finding — see `mobile-threat-model`.

## MASVS Controls to Verify

- **MASVS-RESILIENCE-1** — validates platform integrity (root/jailbreak detection + appropriate response).
- **MASVS-RESILIENCE-2** — anti-tampering (detects repackaging, code patching, hooking).
- **MASVS-RESILIENCE-3** — anti-static-analysis (obfuscation and related).
- **MASVS-RESILIENCE-4** — anti-dynamic-analysis (detects debugging, instrumentation, runtime
  manipulation).

## Audit Procedure

### Step 1: Root / jailbreak detection (RESILIENCE-1)
**Android:** Play Integrity / SafetyNet (`SafetyNet.getClient`, `PlayIntegrity`); RootBeer; custom checks
for `su`, `Superuser.apk`, `Magisk`, `busybox`, test-keys in `Build.TAGS`, writable `/system`; detection
spread across locations, not one boolean; app takes real action (not just logging).
**iOS:** Cydia/Sileo (`cydia://`, `/Applications/Cydia.app`); jailbreak files (`/private/var/lib/apt/`,
`/bin/bash`, `/usr/sbin/sshd`); writable system paths; `fork()` capability; checks in multiple locations.

### Step 2: Anti-tampering (RESILIENCE-2)
**Android:** runtime APK signature verification (`PackageManager.GET_SIGNATURES` / `GET_SIGNING_CERTIFICATES`);
DEX / native-lib / resource checksum verification; Play Integrity attestation; v2/v3 signing scheme.
**iOS:** runtime code-signing verification; hash verification of binary/frameworks/resources; App Store
receipt validation.

### Step 3: Anti-static-analysis (RESILIENCE-3)
**Android:** `proguard-rules.pro` / R8 — no `-dontobfuscate` in release; class/method obfuscation; string
encryption of sensitive constants; DexGuard/iXGuard; sensitive logic in native (JNI); release builds
strip debug info. **iOS:** `STRIP_INSTALLED_PRODUCT = YES`; no unnecessary debug symbols / diagnostics in
release; string obfuscation; minimized Swift reflection metadata.

### Step 4: Anti-dynamic-analysis (RESILIENCE-4)
**Android:** `Debug.isDebuggerConnected()`, `android:debuggable="false"`; Frida detection (port 27042,
`/data/local/tmp/frida-server`, `frida-gadget`); Xposed detection; emulator indicators; hook detection.
**iOS:** `sysctl` `P_TRACED`, `ptrace(PT_DENY_ATTACH, …)`; Frida detection; MobileSubstrate/Cycript
detection; simulator detection.
Recommend Frida / `r2frida` / `radare2` to validate whether these controls are actually effective or
trivially bypassable; document the exact bypass path.

### Step 5: React Native / Expo notes
- **Expo OTA code signing (RESILIENCE-2)** — if `expo-updates` is in use (an `updates.url` is set, or the
  dependency is present with runtime updates enabled) but `app.json` `updates.codeSigningCertificate` and
  `updates.codeSigningMetadata` (`keyid`, `alg`) are **absent**, an MITM / compromised-CDN attacker can
  swap the JS bundle → remote code execution on device. Flag as a RESILIENCE-2 finding (HIGH). Remediate
  with `npx expo-updates codesigning:generate` + `:configure`; keep the private key in EAS secrets.
  ```
  rg -n "\"updates\"|expo-updates|codeSigningCertificate|codeSigningMetadata" app.json app.config.js app.config.ts
  ```
- **JS bundle is inspectable** — Hermes bytecode (`index.android.bundle`, `*.hbc`) decompiles to readable
  strings in seconds; there is no JS-level obfuscation in a default Expo build. For a Tier-3 app, note
  this and recommend moving secrets/logic server-side rather than relying on client obfuscation.
- **Root/jailbreak & hook detection** — no Expo API; look for `jail-monkey`,
  `react-native-device-info` (`isEmulator`), `freerasp-react-native`, or a custom native module. Absence
  is only a finding for Tier-3.
- **`android:debuggable`** — ensure release builds (`eas.json` `production` profile) are not
  `developmentClient` / dev-mode; check `expo-build-properties` for `enableProguardInReleaseBuilds` /
  `enableShrinkResourcesInReleaseBuilds`.

### Step 6: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0038 | Root Detection (Android) |
| MASTG-TEST-0039 | Anti-Debugging Detection (Android) |
| MASTG-TEST-0040 | File Integrity Checks (Android) |
| MASTG-TEST-0041 | Reverse Engineering Tools Detection (Android) |
| MASTG-TEST-0045 | Obfuscation (Android) |
| MASTG-TEST-0224 | Runtime Integrity Checks |
| MASTG-TEST-0225 | Emulator Detection |
| MASTG-TEST-0247 | Code Obfuscation Assessment |
| MASTG-TEST-0263 | Debugger Detection |

## Output Format
1. **Resilience Posture Overview** — None / Basic / Moderate / Advanced.
2. **Root/Jailbreak Detection** — methods found, bypass resistance.
3. **Anti-Tampering Assessment** — integrity mechanisms and coverage (incl. Expo OTA signing).
4. **Obfuscation Assessment** — static-analysis resistance.
5. **Anti-Debug/Instrumentation** — dynamic-analysis protections found.
6. **Findings** — severity, MASVS control, MASTG test ID, `file:line`, remediation.
7. **Hardening Recommendations** — prioritized.
8. **Compliance Summary** — Pass/Fail for MASVS-RESILIENCE-1 through RESILIENCE-4 (note the tier).

Inside the `app-security-analyzer` pipeline, return findings **unscored**.
