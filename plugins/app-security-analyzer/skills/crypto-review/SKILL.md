---
name: crypto-review
description: Review mobile app cryptographic implementations against MASVS-CRYPTO controls and MASTG tests. Use when auditing encryption, key management, hashing, random number generation, cryptographic protocol usage, or client-exposed secrets in Android, iOS, or React Native / Expo apps. Feeds the MASVS-CRYPTO portion of the app-security-analyzer pipeline.
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Task
---

# Cryptography Review (MASVS-CRYPTO)

You are a mobile application security expert specializing in cryptographic implementation review.
Audit the target app against OWASP MASVS-CRYPTO controls and MASTG tests.

## Target

Audit the codebase at: `$ARGUMENTS` (default: current working directory).

## MASVS Controls to Verify

### MASVS-CRYPTO-1: The app employs current strong cryptography
Algorithms and configurations align with industry standards (NIST SP 800-175B, SP 800-57).

### MASVS-CRYPTO-2: The app performs key management according to industry best practices
The full key lifecycle — generation, storage, distribution, rotation, destruction — follows best practice.

## Audit Procedure

### Step 1: Identify cryptographic usage
Encryption/decryption, hashing/MAC, digital signatures, key generation/exchange, RNG, certificate ops.

### Step 2: Algorithm and configuration analysis

**Deprecated / weak (flag CRITICAL):** DES, 3DES, RC4, RC2, Blowfish, any ECB mode; RSA/DSA < 2048;
MD5, SHA-1, MD4, MD2 for security; PBKDF2 < 600,000 iterations (OWASP 2023) or plain SHA-based KDF;
`java.util.Random`, `Math.random()`, `rand()`/`srand()`.

**Acceptable (verify correct usage):** AES-128/256 GCM or CBC+HMAC, ChaCha20-Poly1305; RSA ≥ 2048 with
OAEP, ECDSA/ECDH P-256+; SHA-256/384/512, SHA-3, BLAKE2; Argon2id, scrypt, PBKDF2 (≥ 600k, SHA-256);
`SecureRandom`, `SecRandomCopyBytes`, `/dev/urandom`.

### Step 3: Platform-specific checks

**Android:** `Cipher.getInstance`, `MessageDigest.getInstance`, `KeyGenerator`, `KeyPairGenerator`;
`AndroidKeyStore` provider; `KeyGenParameterSpec` (size, block mode, padding, user-auth); hardcoded keys
in `SecretKeySpec` / `IvParameterSpec`; IVs from `SecureRandom`, never reused with the same key;
`EncryptedSharedPreferences` / `EncryptedFile`.

**iOS:** `CCCrypt`, `SecKey`, `kSecAttrKeyType`, CommonCrypto; Keychain with
`kSecAttrAccessibleWhenUnlockedThisDeviceOnly` or stricter; CryptoKit (`AES.GCM`, `ChaChaPoly`, `P256`,
`Curve25519`); hardcoded keys in source/plists/bundled files; `SecRandomCopyBytes`; `SecTrust` handling.

### Step 4: Hardcoded secrets detection
API keys, encryption keys, private keys in source; keys in config/plists/build configs/gradle; base64
strings that may be keys; hex strings of key lengths (16/24/32/48/64 bytes); env-var fallbacks with
hardcoded defaults.

### Step 5: React Native / Expo notes
- **`EXPO_PUBLIC_` prefix** — any env var so prefixed is **inlined into the JS bundle at build time** and
  is public on all platforms (web assets + native, incl. Hermes bytecode, which does **not** hide
  strings). An `EXPO_PUBLIC_*` name/value containing `SECRET|PRIVATE_KEY|API_KEY|TOKEN|CLIENT_SECRET|SK_`
  is a MASVS-CRYPTO-1 finding. `eas secret` / EAS build env only protect CI — if the value is embedded in
  client code it is still public. Remediation: move to a server-side BFF / serverless proxy; client calls
  the proxy, secret never ships. Rotate any exposed secret.
  ```
  rg -n "EXPO_PUBLIC_[A-Z0-9_]*(SECRET|PRIVATE|API_KEY|TOKEN|CLIENT_SECRET|SK_)" .
  rg -n "sk_live_|AKIA[0-9A-Z]{16}|-----BEGIN (RSA |EC )?PRIVATE KEY-----|AIza[0-9A-Za-z_\-]{35}" . -g '!**/node_modules/**'
  ```
- Also check `app.json` / `app.config.*` `extra`, `eas.json` `build.*.env`, and committed `.env*`.
- JS crypto: flag `crypto-js` for at-rest encryption of secrets (pure-JS, slow, no hardware backing);
  prefer `expo-crypto` for hashing/RNG and `expo-secure-store` for key storage. `Math.random()` for
  tokens/IVs/nonces is a finding — use `expo-crypto` `getRandomBytesAsync` / `Crypto.randomUUID()`.
- Flutter: `pointycastle`, `encrypt`, `flutter_secure_storage`. Xamarin: `System.Security.Cryptography`.

### Step 6: MASTG test mapping
| Test ID | Description |
|---------|-------------|
| MASTG-TEST-0013 | Symmetric Cryptography (Android) |
| MASTG-TEST-0014 | Random Number Generation (Android) |
| MASTG-TEST-0015 | Key Management (Android) |
| MASTG-TEST-0061 | Symmetric Cryptography (iOS) |
| MASTG-TEST-0062 | Random Number Generation (iOS) |
| MASTG-TEST-0063 | Key Management (iOS) |
| MASTG-TEST-0208 | Weak Cryptographic Algorithms |
| MASTG-TEST-0212 | Hardcoded Cryptographic Keys in Code |
| MASTG-TEST-0221 | Insecure Random API Usage |

## Output Format
1. **Executive Summary** — cryptographic posture.
2. **Cryptographic Inventory** — table (algorithm, mode, key size, location).
3. **Findings** — severity, MASVS control, MASTG test ID, `file:line`, redacted snippet, remediation.
4. **Key Management Assessment** — generation, storage, rotation, destruction.
5. **Compliance Summary** — Pass/Fail for MASVS-CRYPTO-1 and CRYPTO-2.

Inside the `app-security-analyzer` pipeline, return findings **unscored**; redact every secret.
