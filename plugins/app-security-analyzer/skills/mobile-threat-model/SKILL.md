---
name: mobile-threat-model
description: Create a comprehensive STRIDE threat model for a mobile or cross-platform app, mapped to OWASP MASVS controls with NowSecure risk tiering. Use when starting a new mobile / Expo project, before a security review, or when designing an app's security architecture. Provides the risk tier that calibrates severity elsewhere in the app-security-analyzer pipeline.
disable-model-invocation: true
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
  - Write
---

# Mobile App Threat Model Generator

You are a mobile application security architect. Generate a comprehensive threat model for the target
app using STRIDE, mapped to OWASP MASVS controls and NowSecure best practices.

## Target

Analyze the codebase at: `$ARGUMENTS` (default: current working directory).

## Procedure

### Phase 1: Application profiling
Determine: platform (Android / iOS / React Native / Expo / Flutter / Xamarin / Cordova); architecture
(client-server, offline-first, P2P, hybrid); **data sensitivity tier**:
- **Tier 1 — No Sensitive Data**: utilities, calculators, games without accounts.
- **Tier 2 — Handles PII**: user accounts, personal data, messaging.
- **Tier 3 — Flagship / High-Value**: banking, healthcare, enterprise, government.

Also: backend integration; third-party SDKs (analytics, ads, payment, social, crash); data types
handled; IPC surface (deep links, URL schemes, content providers, receivers); platform features (camera,
GPS, biometrics, NFC, Bluetooth, push).

### Phase 2: Trust boundary identification
App ↔ OS; App ↔ Network; App ↔ Backend; App ↔ Other Apps (IPC, shared storage, clipboard);
App ↔ User (input validation, sensitive display); App ↔ Third-Party SDKs; App ↔ Physical World
(biometrics, NFC, QR).

### Phase 3: STRIDE threat analysis
For each trust boundary, enumerate:

| Category | Mobile-specific threats |
|----------|------------------------|
| **Spoofing** | fake app clones, certificate spoofing, biometric bypass, deep link hijacking, WebView phishing |
| **Tampering** | APK/IPA repackaging, runtime hooking (Frida/Xposed), memory patching, API request manipulation, OTA bundle swap |
| **Repudiation** | insufficient audit logging, missing server-side transaction logs, client-side log manipulation |
| **Information Disclosure** | insecure storage, cleartext traffic, log leakage, backup extraction, memory dumping, screenshots, clipboard |
| **Denial of Service** | API rate-limit bypass, local DoS via malformed intents, resource exhaustion |
| **Elevation of Privilege** | root/jailbreak exploitation, privilege escalation via IPC, OAuth scope abuse, deep link command injection |

### Phase 4: MASVS control mapping

| MASVS Group | Threat categories addressed |
|-------------|-----------------------------|
| STORAGE | Information Disclosure (at rest) |
| CRYPTO | Information Disclosure, Tampering |
| AUTH | Spoofing, Elevation of Privilege |
| NETWORK | Information Disclosure (in transit), Tampering |
| PLATFORM | Spoofing, Tampering, EoP (IPC, WebView) |
| CODE | Tampering, EoP (injection, dependencies) |
| RESILIENCE | Tampering, Information Disclosure (reverse engineering) |
| PRIVACY | Information Disclosure (tracking, fingerprinting) |

### Phase 5: Risk assessment
Per threat: likelihood (L/M/H), impact (L/M/H/Critical by data tier), risk level (matrix), existing
mitigations in the codebase, recommended additional controls.

### Phase 6: NowSecure risk tiering
- **Tier 1**: MASVS-NETWORK-1, CODE-3, CODE-4.
- **Tier 2**: all Tier 1 + STORAGE-1/2, CRYPTO-1/2, AUTH-1/2, PLATFORM-1/2, PRIVACY-1/3.
- **Tier 3**: all Tier 2 + AUTH-3, NETWORK-2, PLATFORM-3, RESILIENCE-1..4, PRIVACY-2/4, CODE-1/2.

### Phase 7: React Native / Expo notes
- Add an **OTA update** trust boundary (App ↔ Expo Updates CDN): threats = Tampering (unsigned bundle
  swap → RCE), Spoofing (rogue update server). Control = `expo-updates` code signing (RESILIENCE-2).
- Add a **JS bundle** asset: Hermes bytecode is readable — any client secret is disclosed (CRYPTO-1).
  `EXPO_PUBLIC_*` vars are public by design.
- Expo web target adds App ↔ Browser boundary: XSS, CORS, CSP — fold in the WEB checks.
- Note which native modules / config plugins expand the attack surface (WebView, deep-link schemes,
  background location, filesystem).

## Output
Write to `THREAT_MODEL.md` in the project root:
1. **Application Profile** — characteristics + data sensitivity tier.
2. **Data Flow Diagram** — ASCII/Mermaid of components and trust boundaries.
3. **Asset Inventory** — sensitive data and resources to protect.
4. **Threat Catalog** — STRIDE threats with risk ratings and MASVS mappings.
5. **Attack Surface Summary** — prioritized attack vectors.
6. **Security Requirements** — required MASVS controls by risk tier.
7. **Recommended Testing Plan** — prioritized MASTG tests.
8. **Residual Risk** — threats that cannot be fully mitigated + acceptance criteria.

State the resulting **NowSecure tier** prominently — the `app-security-analyzer` pipeline uses it to
calibrate severity for Tier-3 controls.
