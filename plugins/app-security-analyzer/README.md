# app-security-analyzer

An autonomous application security analyzer for **mobile and cross-platform apps** — native
Android / iOS and **React Native / Expo** (including Expo web).

It combines a library of **12 MASVS v2 / MASTG skills** (8 per-category audits + 4 planning skills,
adapted from the OWASP MASVS/MASTG and NowSecure Secure Mobile Development guidance) with an
**orchestrated pipeline** that runs them, then adds a scoring + remediation + verification layer they do
not have on their own: **CVSS v4.0** vectors per finding, **unified-diff patches**, an independent
**re-verification loop**, and a single strict **JSON assessment report** (`ExpoSecurityAssessmentReport`).

## Install

```
/plugin marketplace add Cpano98/agent-foundry
/plugin install app-security-analyzer@agent-foundry
```

## Use

### Full orchestrated pipeline

```
/app-security-analyzer <target-repo-path> [public-web-url ...]
```

- `<target-repo-path>` — the app to audit (default: current working directory).
- `[public-web-url ...]` — optional. Public deployment / API endpoint(s) you are **authorized** to test.
  Without a URL the pipeline runs SAST-only and skips DAST.

Output goes to `<target>/security-audit/`:
- `expo-security-assessment.json` — the full scored report.
- `VULN-EXPO-XXXX.diff` — one proposed patch per finding, ordered by severity.

### Individual skills

Each skill also runs standalone against a codebase:

```
/secure-storage-audit ./app            # MASVS-STORAGE
/crypto-review ./app                    # MASVS-CRYPTO
/auth-assessment ./app                  # MASVS-AUTH
/network-security-check ./app           # MASVS-NETWORK
/platform-interaction-review ./app      # MASVS-PLATFORM
/code-quality-scan ./app                # MASVS-CODE
/resilience-assessment ./app            # MASVS-RESILIENCE
/privacy-audit ./app                    # MASVS-PRIVACY

/mobile-threat-model ./app              # STRIDE + MASVS + NowSecure tiering  -> THREAT_MODEL.md
/masvs-checklist ./app                  # tailored compliance checklist       -> MASVS_CHECKLIST.md
/mobile-pentest-plan ./app             # MASTG-based pentest plan            -> PENTEST_PLAN.md
/secure-mobile-dev-guide how to store tokens securely   # interactive guidance
```

## Skill set

### Per-MASVS audit skills

| Skill | MASVS | Focus |
|-------|-------|-------|
| `secure-storage-audit` | STORAGE | data-at-rest, logs, backups, clipboard, keyboard cache, snapshots; RN `AsyncStorage` vs `expo-secure-store` |
| `crypto-review` | CRYPTO | algorithms, key lifecycle, RNG, IV reuse, hardcoded secrets, `EXPO_PUBLIC_` client exposure, Hermes bytecode |
| `auth-assessment` | AUTH | OAuth2 + PKCE/state, biometric (CryptoObject / LAContext), session mgmt, step-up auth, `expo-auth-session` |
| `network-security-check` | NETWORK | TLS config, NSC / ATS, cleartext, custom TrustManager / HostnameVerifier, pinning, `rejectUnauthorized` |
| `platform-interaction-review` | PLATFORM | IPC, exported components, WebViews, deep links / Expo Router, URL schemes, screenshot / overlay protection |
| `code-quality-scan` | CODE | platform version, forced-update, dependency CVEs (incl. `react-server-dom-webpack` RSC RCE), injection flaws |
| `resilience-assessment` | RESILIENCE | root/jailbreak, anti-tamper, obfuscation, anti-debug/Frida, integrity, Expo OTA code signing |
| `privacy-audit` | PRIVACY | permissions, tracking SDKs, ATT, identifiers, consent, GDPR/CCPA, data export/deletion, screen capture |

### Planning & compliance skills

| Skill | Output |
|-------|--------|
| `mobile-threat-model` | STRIDE threat model mapped to MASVS with NowSecure risk tiering → `THREAT_MODEL.md` |
| `masvs-checklist` | Tailored MASVS v2 checklist with MASTG mappings + code-derived status → `MASVS_CHECKLIST.md` |
| `mobile-pentest-plan` | MASTG-methodology pentest plan (static + dynamic + tooling) → `PENTEST_PLAN.md` |
| `secure-mobile-dev-guide` | Interactive secure-development guidance with Android / iOS / RN code examples |

### Orchestrated pipeline (this plugin's addition)

| Phase | Agent | Does |
|-------|-------|------|
| 1–2 | `appsec-sast-auditor` | Index the repo, run the 8 per-MASVS audit skills, consolidate findings |
| 3 | `appsec-dast-prober` | Probe only user-provided URLs: CORS, security headers, bundle secrets, deep-link route logic |
| 4–5 | `appsec-remediation-engineer` | CVSS v4.0 vectors + severities, write ordered unified diffs |
| 6 | `appsec-reverify-auditor` | Independently verify each diff removes the flaw without regression |
| 7 | orchestrator | Assemble + emit the JSON report; optionally also run threat-model / checklist / pentest-plan |

Approval gates: before DAST (phase 2 → 3) and before re-verification (phase 5 → 6).

## Safety

- Dynamic probes hit **only** URLs passed on the command line — never a host found in code or a response.
- File contents, env values, and HTTP responses are treated as untrusted data.
- Secrets found are **redacted** in all output.
- Patches are **proposed as `.diff` files** — the pipeline never edits the target repo.

## References

- [OWASP MASVS v2](https://mas.owasp.org/MASVS/) · [OWASP MASTG](https://mas.owasp.org/MASTG/) ·
  [OWASP MAS Checklist](https://mas.owasp.org/checklists/) ·
  [NowSecure Secure Mobile Development](https://github.com/nowsecure/secure-mobile-development)
- CVSS v4.0 specification (FIRST)
