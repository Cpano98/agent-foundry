# CVSS v4.0 scoring quick reference

Use this to build a `cvss_vector` string and a `cvss_v4_score` (0.0–10.0) for every finding, then map to
`severity`. When unsure between two values, pick the more conservative (higher) one and say why in
`attack_vector_description`.

## Base metrics (all required in the vector, prefix `CVSS:4.0`)

| Metric | Values | Meaning |
|--------|--------|---------|
| `AV` Attack Vector | N / A / L / P | Network, Adjacent, Local, Physical |
| `AC` Attack Complexity | L / H | H = attacker must defeat a security mechanism / win a race |
| `AT` Attack Requirements | N / P | P = needs a specific deployment/runtime precondition |
| `PR` Privileges Required | N / L / H | privileges on the vulnerable system |
| `UI` User Interaction | N / P / A | None, Passive, Active |
| `VC` `VI` `VA` | H / L / N | confidentiality / integrity / availability impact on the **vulnerable** system |
| `SC` `SI` `SA` | H / L / N | impact on **subsequent** / downstream systems |

Optional groups (append when relevant): Threat `E:` (Attacked/POC/Unreported), Environmental `CR/IR/AR`
and modified base `MAV…`, Supplemental `S:`, `AU:`, `R:`, `V:`, `RE:`, `U:`. For most findings the base
group alone is enough.

## Severity bands (CVSS v4.0 nomenclature)

| Score | Severity |
|-------|----------|
| 0.0 | NONE / INFO |
| 0.1 – 3.9 | LOW |
| 4.0 – 6.9 | MEDIUM |
| 7.0 – 8.9 | HIGH |
| 9.0 – 10.0 | CRITICAL |

Report `severity` in the schema's enum (`CRITICAL/HIGH/MEDIUM/LOW/INFO`).

## Worked vectors per finding type

These are calibrated anchors — adjust per the concrete code, don't just copy the score.

| Finding | Vector | Score | Severity |
|---------|--------|-------|----------|
| Session/refresh token in AsyncStorage (cleartext) | `CVSS:4.0/AV:P/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:N/SC:H/SI:H/SA:N` | 8.6 | HIGH |
| Live third-party secret via `EXPO_PUBLIC_` (in web bundle + native) | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:H/SI:H/SA:L` | 9.3 | CRITICAL |
| Non-privileged API key exposed client-side | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:L/VI:L/VA:N/SC:L/SI:N/SA:N` | 6.9 | MEDIUM |
| OAuth2 auth' code interception — missing PKCE | `CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:H/VI:H/VA:N/SC:H/SI:H/SA:N` | 8.7 | HIGH |
| Unsigned Expo OTA update (MITM/CDN bundle swap → RCE on device) | `CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H` | 9.3 | CRITICAL |
| Open redirect in deep-link auth callback handler | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:A/VC:L/VI:L/VA:N/SC:L/SI:L/SA:N` | 5.3 | MEDIUM |
| Deep-link param → `<WebView source>` injection | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:A/VC:H/VI:L/VA:N/SC:L/SI:L/SA:N` | 7.0 | HIGH |
| `react-server-dom-webpack` 19.0.0–19.1.1 unauth RCE (CVE-2025-55182) | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H` | 10.0 | CRITICAL |
| Credentialed reflected/wildcard CORS on web API | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:L/VA:N/SC:H/SI:L/SA:N` | 8.7 | HIGH |
| `rejectUnauthorized: false` / disabled TLS validation | `CVSS:4.0/AV:A/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:N/SC:H/SI:H/SA:N` | 8.3 | HIGH |
| Cleartext traffic permitted (no active cleartext endpoint found) | `CVSS:4.0/AV:A/AC:L/AT:P/PR:N/UI:N/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N` | 5.1 | MEDIUM |
| Missing CSP / HSTS on web deployment | `CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:A/VC:L/VI:L/VA:N/SC:N/SI:N/SA:N` | 4.8 | MEDIUM |
| No screenshot protection on PII/financial screen | `CVSS:4.0/AV:P/AC:L/AT:P/PR:L/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N` | 2.1 | LOW |

## Procedure
1. Pick `AV` from how the attacker reaches it (bundle download = N; on-device artifact = P; same-Wi-Fi
   MITM = A).
2. Set `AT:P` when exploitation needs a precondition the defender might not have (a MITM position, a
   malicious sibling app installed, RSC/Server Functions enabled).
3. Impacts: a stolen long-lived token = `VC:H/VI:H`; RCE = `VC:H/VI:H/VA:H` + subsequent `SC/SI/SA:H`.
4. Compute the score with the official CVSS v4.0 rubric/calculator logic; record both `cvss_vector` and
   `cvss_v4_score`.
5. Map score → `severity` band above.
