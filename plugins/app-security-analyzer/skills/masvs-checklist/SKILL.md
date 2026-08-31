---
name: masvs-checklist
description: Generate a tailored OWASP MASVS v2 compliance checklist with MASTG test mappings and code-derived status for a mobile or cross-platform app. Use when you need a complete security checklist, compliance-tracking document, or gap analysis against MASVS for Android, iOS, or React Native / Expo. Optional artifact step of the app-security-analyzer pipeline.
disable-model-invocation: true
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
  - Write
---

# MASVS Compliance Checklist Generator

You are a mobile application security compliance expert. Generate a comprehensive MASVS v2 compliance
checklist tailored to the target app, with MASTG test mappings and NowSecure best-practice annotations.

## Target

Analyze the codebase at: `$ARGUMENTS` (default: current working directory).

## Procedure

### Step 1: Determine application context
Platform; app category (finance, healthcare, enterprise, consumer, government, gaming); data sensitivity;
compliance requirements (HIPAA, PCI-DSS, SOC 2, GDPR, CCPA); risk profile (Tier 1 / 2 / 3). If a
`THREAT_MODEL.md` from `mobile-threat-model` exists, take the tier from there.

### Step 2: Generate the tailored checklist
Use the template below for each applicable control. Mark Required / Recommended / Optional by risk
profile. Treat the priorities as defaults to adjust for threat model, regulatory obligations, deployment
model, and platform constraints.

## Checklist template

### MASVS-STORAGE
| # | Control | Priority | Status | MASTG Tests | Notes |
|---|---------|----------|--------|-------------|-------|
| STORAGE-1 | Securely stores sensitive data | Required | Pending | MASTG-TEST-0001, 0052, 0200 | |
| STORAGE-2 | Prevents leakage of sensitive data | Required | Pending | MASTG-TEST-0003, 0053, 0011, 0201, 0202 | |

### MASVS-CRYPTO
| CRYPTO-1 | Current strong cryptography | Required | Pending | MASTG-TEST-0013, 0061, 0208 | |
| CRYPTO-2 | Key management per best practice | Required | Pending | MASTG-TEST-0015, 0063, 0212 | |

### MASVS-AUTH
| AUTH-1 | Secure auth/authorization protocols | Required | Pending | MASTG-TEST-0017, 0064 | |
| AUTH-2 | Secure local authentication | Required | Pending | MASTG-TEST-0018, 0326, 0266 | |
| AUTH-3 | Additional auth for sensitive ops | Tier 3 | Pending | MASTG-TEST-0327 | |

### MASVS-NETWORK
| NETWORK-1 | Secures all network traffic | Required | Pending | MASTG-TEST-0019, 0065, 0217, 0233 | |
| NETWORK-2 | Performs identity pinning | Tier 3 | Pending | MASTG-TEST-0020, 0021, 0066 | |

### MASVS-PLATFORM
| PLATFORM-1 | Uses IPC securely | Required | Pending | MASTG-TEST-0007, 0008, 0250, 0251 | |
| PLATFORM-2 | Uses WebViews securely | Required | Pending | MASTG-TEST-0028, 0029, 0075, 0077 | |
| PLATFORM-3 | Uses the UI securely | Tier 3 | Pending | MASTG-TEST-0035, 0289 | |

### MASVS-CODE
| CODE-1 | Up-to-date platform version | Tier 3 | Pending | MASTG-TEST-0272 | |
| CODE-2 | Mechanism for enforcing updates | Tier 3 | Pending | MASTG-TEST-0274 | |
| CODE-3 | No components with known vulns | Required | Pending | MASTG-TEST-0222 | |
| CODE-4 | Validates and sanitizes all inputs | Required | Pending | MASTG-TEST-0025, 0245 | |

### MASVS-RESILIENCE
| RESILIENCE-1 | Platform integrity validation | Tier 3 | Pending | MASTG-TEST-0038 | |
| RESILIENCE-2 | Anti-tampering mechanisms | Tier 3 | Pending | MASTG-TEST-0040, 0224 | |
| RESILIENCE-3 | Anti-static-analysis mechanisms | Tier 3 | Pending | MASTG-TEST-0045, 0247 | |
| RESILIENCE-4 | Anti-dynamic-analysis techniques | Tier 3 | Pending | MASTG-TEST-0039, 0263 | |

### MASVS-PRIVACY
| PRIVACY-1 | Minimizes access to sensitive data | Required | Pending | MASTG-TEST-0254, 0255 | |
| PRIVACY-2 | Prevents user identification | Tier 3 | Pending | MASTG-TEST-0318 | |
| PRIVACY-3 | Transparent data collection/usage | Required | Pending | MASTG-TEST-0256 | |
| PRIVACY-4 | User control over their data | Tier 3 | Pending | MASTG-TEST-0319 | |

### Step 3: Pre-populate status from code analysis
For each item scan for preliminary evidence: "Likely Implemented" (clear evidence in source/config),
"Partial", "No Evidence Found", "N/A". Add `file:line` references. Do not claim full compliance where
dynamic testing, backend behavior, production configuration, or store metadata are required.

For **React Native / Expo**, treat these as evidence pointers: `expo-secure-store` /
`react-native-keychain` (STORAGE-1); `EXPO_PUBLIC_` sensitive vars (CRYPTO-1 fail); `usePKCE: true`
(AUTH-1); `expo-build-properties` cleartext flags (NETWORK-1); `originWhitelist` / deep-link allowlists
(PLATFORM); `npm audit` clean + `react-server-dom-webpack` ≥ 19.1.2 (CODE-3); `updates.codeSigning*`
(RESILIENCE-2); `expo-tracking-transparency` + consent gate (PRIVACY-1/3); in-app account-deletion path
(PRIVACY-4).

### Step 4: Gap analysis
Controls passing / failing (with remediation priority) / partial (with specific gaps); overall
compliance % per category and total.

## Output
Write to `MASVS_CHECKLIST.md` in the project root:
1. **Application Context** — platform, category, risk profile.
2. **Compliance Checklist** — full checklist with code-derived status.
3. **Gap Analysis** — missing / partial controls with priorities.
4. **Remediation Roadmap** — ordered by priority.
5. **Testing Plan** — MASTG tests to execute, ordered by risk.
