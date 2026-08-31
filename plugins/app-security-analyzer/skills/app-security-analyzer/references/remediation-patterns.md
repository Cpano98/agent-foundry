# Remediation patterns — defect → patch

Unified-diff templates for the common findings. Adapt paths, line numbers, and identifiers to the actual
code. Keep diffs minimal and syntactically valid; add required imports at top-of-file scope. Never put a
real secret in a diff.

Diff header convention:
```
--- a/<path>
+++ b/<path>
@@ -<old_start>,<old_len> +<new_start>,<new_len> @@
```

---

## 1. Insecure token storage (MASVS-STORAGE)

`AsyncStorage` → `expo-secure-store` (hardware Keychain / KeyStore).

```diff
--- a/src/lib/auth-storage.ts
+++ b/src/lib/auth-storage.ts
@@
-import AsyncStorage from '@react-native-async-storage/async-storage';
+import * as SecureStore from 'expo-secure-store';
@@
-export async function saveToken(jwt: string) {
-  await AsyncStorage.setItem('token', jwt);
-}
+export async function saveToken(jwt: string) {
+  await SecureStore.setItemAsync('token', jwt, {
+    keychainAccessible: SecureStore.WHEN_UNLOCKED,
+  });
+}
@@
-export async function getToken() {
-  return AsyncStorage.getItem('token');
-}
+export async function getToken() {
+  return SecureStore.getItemAsync('token');
+}
@@
-export async function clearToken() {
-  await AsyncStorage.removeItem('token');
-}
+export async function clearToken() {
+  await SecureStore.deleteItemAsync('token');
+}
```

Notes: `expo-secure-store` values are capped at 2048 bytes — for larger blobs store an encrypted payload
and keep the key in SecureStore. On web, `expo-secure-store` is unavailable; gate with `Platform.OS` and
fall back to an httpOnly cookie set by the backend, not `localStorage`.

---

## 2. Client-exposed secret via `EXPO_PUBLIC_` (MASVS-CRYPTO)

Remove the secret from the client; call a backend proxy instead.

```diff
--- a/src/lib/payments.ts
+++ b/src/lib/payments.ts
@@
-const STRIPE_SECRET = process.env.EXPO_PUBLIC_STRIPE_SECRET_KEY;
-
-export async function createCharge(amount: number) {
-  return fetch('https://api.stripe.com/v1/charges', {
-    method: 'POST',
-    headers: { Authorization: `Bearer ${STRIPE_SECRET}` },
-    body: new URLSearchParams({ amount: String(amount), currency: 'usd' }),
-  }).then((r) => r.json());
-}
+export async function createCharge(amount: number) {
+  // Secret lives only in the backend / serverless function.
+  return fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/api/checkout`, {
+    method: 'POST',
+    headers: { 'Content-Type': 'application/json' },
+    credentials: 'include',
+    body: JSON.stringify({ amount, currency: 'usd' }),
+  }).then((r) => r.json());
+}
```

```diff
--- a/.env
+++ b/.env
@@
-EXPO_PUBLIC_STRIPE_SECRET_KEY=sk_live_REDACTED
+# Stripe secret moved to the backend environment (never EXPO_PUBLIC_*).
+EXPO_PUBLIC_API_BASE_URL=https://api.example.com
```

Also add the removed key name to `.gitignore`d server config and rotate the exposed secret.

---

## 3. Missing PKCE / state in OAuth2 (MASVS-AUTH)

```diff
--- a/src/features/auth/useLogin.ts
+++ b/src/features/auth/useLogin.ts
@@
   const [request, response, promptAsync] = useAuthRequest(
     {
       clientId: CLIENT_ID,
       scopes: ['openid', 'profile', 'email'],
       redirectUri,
-      usePKCE: false,
-      responseType: 'token',
+      usePKCE: true,
+      responseType: 'code',
+      state: Crypto.randomUUID(),
     },
     discovery,
   );
@@
   useEffect(() => {
     if (response?.type === 'success') {
+      if (response.params.state !== request?.state) {
+        throw new Error('OAuth state mismatch — possible CSRF');
+      }
       exchangeCodeAsync(
-        { clientId: CLIENT_ID, code: response.params.code, redirectUri },
+        {
+          clientId: CLIENT_ID,
+          code: response.params.code,
+          redirectUri,
+          extraParams: { code_verifier: request!.codeVerifier! },
+        },
         discovery,
       );
     }
   }, [response]);
```

Add `import * as Crypto from 'expo-crypto';` if not present.

---

## 4. Unsigned Expo OTA updates (MASVS-RESILIENCE)

```diff
--- a/app.json
+++ b/app.json
@@
     "updates": {
-      "url": "https://u.expo.dev/00000000-0000-0000-0000-000000000000"
+      "url": "https://u.expo.dev/00000000-0000-0000-0000-000000000000",
+      "codeSigningCertificate": "./certs/certificate.pem",
+      "codeSigningMetadata": {
+        "keyid": "main",
+        "alg": "rsa-v1_5-sha256"
+      }
     },
```

Generate the keypair/cert with `npx expo-updates codesigning:generate` and
`npx expo-updates codesigning:configure`; keep the private key in EAS secrets, commit only the public
certificate.

---

## 5. Unvalidated deep link → open redirect / navigation (MASVS-PLATFORM)

```diff
--- a/src/navigation/handleDeepLink.ts
+++ b/src/navigation/handleDeepLink.ts
@@
+const ALLOWED_REDIRECT_HOSTS = new Set(['app.example.com', 'example.com']);
+
+function isAllowedRedirect(raw: string): boolean {
+  try {
+    const u = new URL(raw);
+    return (u.protocol === 'https:') && ALLOWED_REDIRECT_HOSTS.has(u.hostname);
+  } catch {
+    return false;
+  }
+}
+
 export function handleDeepLink(url: string) {
   const { queryParams } = Linking.parse(url);
   const redirect = String(queryParams?.redirect ?? '');
-  if (redirect) {
-    Linking.openURL(redirect);
-  }
+  if (redirect && isAllowedRedirect(redirect)) {
+    Linking.openURL(redirect);
+  }
 }
```

For `<WebView>`: constrain `source={{ uri }}` to an allowlist the same way, set
`originWhitelist={['https://app.example.com']}`, and disable `allowFileAccess` /
`allowUniversalAccessFromFileURLs`.

---

## 6. Vulnerable dependency — RSC RCE / transitive CVE (MASVS-CODE)

Force a patched version with a package-manager override.

npm (`package.json`):
```diff
--- a/package.json
+++ b/package.json
@@
   "dependencies": {
     ...
   },
+  "overrides": {
+    "react-server-dom-webpack": ">=19.1.2"
+  }
```

Yarn (`package.json`): use `"resolutions": { "react-server-dom-webpack": ">=19.1.2" }`.
pnpm: `"pnpm": { "overrides": { "react-server-dom-webpack": ">=19.1.2" } }`.

Then reinstall and re-run `npm audit` / `osv-scanner` to confirm the advisory clears. If the app does not
use React Server Components / Server Functions at all, also remove the dependency and any
`react-server-dom-*` config from `metro.config.*`.

---

## 7. Web deployment — CORS / security headers (WEB)

Example `firebase.json` / static host headers:
```diff
--- a/firebase.json
+++ b/firebase.json
@@
       "headers": [
+        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
+        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'" },
+        { "key": "X-Content-Type-Options", "value": "nosniff" },
+        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
       ]
```

Express/API:
```diff
-app.use(cors({ origin: '*', credentials: true }));
+const ALLOWED_ORIGINS = ['https://app.example.com'];
+app.use(cors({
+  origin: (origin, cb) => cb(null, !origin || ALLOWED_ORIGINS.includes(origin)),
+  credentials: true,
+}));
```

Never combine `Access-Control-Allow-Origin: *` (or reflected arbitrary Origin) with
`Access-Control-Allow-Credentials: true`.
