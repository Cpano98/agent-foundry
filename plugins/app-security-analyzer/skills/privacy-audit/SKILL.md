---
name: privacy-audit
description: Audit mobile app privacy practices against MASVS-PRIVACY controls and MASTG tests, with GDPR / CCPA / platform-policy attention. Use when reviewing data minimization, permissions, tracking / analytics SDKs, App Tracking Transparency, device identifiers, consent, or user data control in Android, iOS, or React Native / Expo apps. Feeds the MASVS-PRIVACY portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
---

# Privacy Audit (MASVS-PRIVACY)

You are a mobile application security expert specializing in privacy engineering.
Audit the target app against OWASP MASVS-PRIVACY controls and MASTG tests, with attention to GDPR, CCPA,
COPPA, and platform privacy requirements.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

## MASVS Controls to Verify

- **MASVS-PRIVACY-1** — minimizes access to sensitive data / resources; only necessary permissions and
  data, with informed consent; limited third-party sharing.
- **MASVS-PRIVACY-2** — prevents user identification (anonymization / pseudonymization / abstraction).
- **MASVS-PRIVACY-3** — transparent about data collection and usage; matches store privacy declarations.
- **MASVS-PRIVACY-4** — offers user control (access, modify, delete, adjust preferences).

## Audit Procedure

### Step 1: Permission and data access analysis
**Android:** `AndroidManifest.xml` `<uses-permission>`; flag dangerous perms (`ACCESS_FINE_LOCATION`,
`READ_CONTACTS`, `CAMERA`, `READ_PHONE_STATE`, `RECORD_AUDIO`, `READ_CALL_LOG`, `READ_SMS`); runtime
requests with rationale; `AD_ID` permission; device IDs (`Settings.Secure.ANDROID_ID`, IMEI, serial).
**iOS:** `Info.plist` `NS*UsageDescription` clear and specific; `NSUserTrackingUsageDescription` +
`ATTrackingManager`; `IDFA` / `ASIdentifierManager`; `Privacy - *` keys.

### Step 2: Tracking / analytics SDK assessment
Firebase/Google Analytics (`logEvent`), Facebook SDK (`AppEventsLogger`), Adjust/AppsFlyer/Branch,
Mixpanel/Amplitude/Segment, Crashlytics/Sentry/Bugsnag. Per SDK: data minimization in config; PII in
event params (emails, names, phones); opt-out / consent **before** SDK init; SDK data-sharing settings
(e.g. Firebase `setAnalyticsCollectionEnabled`).

### Step 3: Unique identifier usage
Hardware IDs (IMEI, MAC, serial); advertising IDs without consent; custom fingerprinting (screen + lang +
timezone); cross-app tracking IDs. Verify scoped / resettable identifiers, no cross-context correlation,
no unnecessary third-party transmission.

### Step 4: Data collection transparency
Privacy policy URL in app + store listing; in-app consent dialogs / preference screens; consent obtained
**before** collection; granular (not all-or-nothing); behavior matches the policy.

### Step 5: User data control
Data export (GDPR Art. 20); account / data deletion (GDPR Art. 17); privacy settings screen to opt out
of analytics, manage consent, request deletion, download data.

### Step 6: React Native / Expo notes
- **Permissions** — declared in `app.json` (`ios.infoPlist`, `android.permissions`) and via config
  plugins (`expo-location`, `expo-camera`, `expo-contacts`, `expo-tracking-transparency`, etc.). Flag
  permissions with no corresponding runtime request / feature use. `expo-location` background mode
  (`UIBackgroundModes`, `ACCESS_BACKGROUND_LOCATION`) needs strong justification.
- **ATT** — `expo-tracking-transparency` `requestTrackingPermissionsAsync` must be called **before** any
  IDFA read or ad/attribution SDK init on iOS 14.5+.
- **Analytics SDKs** — `expo-firebase-analytics` (deprecated), `@react-native-firebase/analytics`,
  `expo-application` / `expo-device` identifiers, Segment/Amplitude/PostHog RN SDKs, Sentry
  (`sendDefaultPii`, `attachScreenshot`, `attachViewHierarchy` — flag if on for a PII app). Verify a
  consent gate wraps `init`.
- **Identifiers** — `expo-application.getIosIdForVendorAsync` / `getAndroidId` /
  `Application.getInstallationIdAsync`; `expo-device` fields used together = fingerprinting risk.
- **Session replay** — flag `@sentry/react-native` replay, LogRocket, PostHog session recording without
  input masking on PII / financial screens (cross-reference `platform-interaction-review` screenshot
  protection).
- **Data control** — check for an account-deletion path in-app (Apple & Google both require it for apps
  with account creation) and a data-export path.

### Step 7: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0206 | PII in Network Traffic |
| MASTG-TEST-0254 | Dangerous Permissions Usage |
| MASTG-TEST-0255 | Permission Minimization Assessment |
| MASTG-TEST-0256 | SDK Data Collection Assessment |
| MASTG-TEST-0318 | Tracking Transparency Compliance |
| MASTG-TEST-0319 | User Data Deletion Capability |

## Output Format
1. **Privacy Posture Overview** — maturity level.
2. **Permission Inventory** — all permissions with justification assessment.
3. **Tracking/Analytics Inventory** — SDKs, data collected, consent mechanism.
4. **Identifier Usage Assessment** — all unique identifiers and scope.
5. **Transparency Assessment** — privacy policy, consent UX, declaration accuracy.
6. **User Control Assessment** — data access, deletion, preferences.
7. **Findings** — severity, MASVS control, MASTG test ID, `file:line`, remediation.
8. **Regulatory Considerations** — GDPR, CCPA, COPPA implications.
9. **Compliance Summary** — Pass/Fail for MASVS-PRIVACY-1 through PRIVACY-4.

Inside the `app-security-analyzer` pipeline, return findings **unscored**.
