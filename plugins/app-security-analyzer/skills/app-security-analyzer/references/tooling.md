# Tooling map — spec tool → real execution

The specification names abstract tools. This plugin runs on plain Claude Code tools. Below is how each
maps. If a tool is unavailable in the session (no Bash, no network), run what you can with Read/Grep/Glob
and mark the rest `INFO` / "not verified — tool unavailable". Never fabricate a result.

| Spec tool | Real execution |
|-----------|----------------|
| `read_ast_nodes` | `Glob` to enumerate, `Grep` (`-n`, `-A/-B` context, `--type`) to locate patterns, `Read` to pull the full function/component/JSX block with surrounding scope. Optionally `npx tree-sitter parse <file>` if `tree-sitter` is on PATH — otherwise reason structurally from the read source. |
| `audit_dependencies` | `Read` `package.json` + lockfile; `npm audit --json` (or `yarn npm audit --json`, `pnpm audit --json`) run in the target dir; `osv-scanner --lockfile=<lockfile> --format json` if installed. Cross-check `react-server-dom-*` version against the 19.0.0–19.1.1 RCE range by hand. |
| `audit_config_secrets` | `Grep` over `app.json`, `app.config.{js,ts}`, `eas.json`, `.env*`, `.github/workflows/*.yml`, `eas`/CI configs for `EXPO_PUBLIC_*`, key-shaped strings, PEM blocks. `git log -p -- .env` / `git grep` history check only if the user asked for a history scan. |
| `probe_web_endpoint` | `WebFetch` for GET + header inspection; `curl -sS -D - -o /dev/null` for precise header/status and for setting a spoofed `Origin`. Only against user-provided URLs. |
| `simulate_deeplink` | No device. Statically trace each handler found in Step 1: parse → param extraction → sink. Construct the synthetic URL in the finding's `dynamic_proof_of_concept` and describe the code path that does (or does not) validate it. |
| `generate_code_patch` | `Write` the unified diff to `<target>/security-audit/VULN-EXPO-XXXX.diff`. Do not `git apply` to the target. |

## DAST command snippets (user-provided `$URL` only)

Security headers + status:
```
curl -sS -D - -o /dev/null "$URL"
```

CORS origin-reflection test:
```
curl -sS -D - -o /dev/null -H "Origin: https://attacker.example" "$URL"
# CRITICAL if response has:
#   Access-Control-Allow-Origin: https://attacker.example
#   Access-Control-Allow-Credentials: true
```

Preflight:
```
curl -sS -D - -o /dev/null -X OPTIONS \
  -H "Origin: https://attacker.example" \
  -H "Access-Control-Request-Method: POST" "$URL"
```

Bundle secret scan (discover the entry file from the HTML, then):
```
curl -sS "$ORIGIN/_expo/static/js/web/entry-XXXXX.js" \
 | grep -Eo "sk_live_[A-Za-z0-9]+|AIza[0-9A-Za-z_-]{35}|AKIA[0-9A-Z]{16}|eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+"
```
Record only a redacted fingerprint of any match.

TLS / cert (informational):
```
curl -sS -D - -o /dev/null -w "%{ssl_verify_result}\n" "$URL"
```

## Header expectations

| Header | Expected | Missing/weak → |
|--------|----------|----------------|
| `Strict-Transport-Security` | `max-age >= 15552000`, ideally `includeSubDomains; preload` | MEDIUM (WEB) |
| `Content-Security-Policy` | present, no `unsafe-inline`/`*` in `script-src`, `frame-ancestors` set | MEDIUM–HIGH |
| `X-Content-Type-Options` | `nosniff` | LOW–MEDIUM |
| `X-Frame-Options` / CSP `frame-ancestors` | `DENY`/`SAMEORIGIN` or explicit list | MEDIUM |
| `Referrer-Policy` | `strict-origin-when-cross-origin` or stricter | LOW |
| `Access-Control-Allow-Origin` | not `*` with credentials; not reflected arbitrary Origin | CRITICAL if credentialed |
