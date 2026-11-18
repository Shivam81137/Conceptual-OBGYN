# Security model

What protects Conceptual OBGYN, and what to keep in mind when changing it.

## Accounts and sessions

| Control | Where |
|---|---|
| Passwords hashed with scrypt (N = 2^15, r = 8, p = 1), computed off the event loop; parameters stored with the hash so cost can be raised later; older hashes still verify | `server/src/models/User.ts` |
| Login always runs a full hash, even for unknown emails, so timing does not reveal who has an account | `modules/auth/auth.service.ts` |
| Per-account lockout: 5 wrong passwords → 15-minute lock (in addition to the per-IP limit of 30 auth requests / 15 min) | `auth.service.ts`, `middleware/rateLimit.ts` |
| Session tokens: HS256, algorithm pinned, constant-time signature check, issuer/audience/expiry/issued-at validated, size-capped | `modules/auth/auth.tokens.ts` |
| Production refuses to start without `AUTH_JWT_SECRET` of ≥ 32 random characters | `config/env.ts` |
| Every history route requires a valid token and only ever reads/writes the signed-in student's own data | `modules/history/history.routes.ts` |

## Input handling

- Every request body is validated with zod before it reaches business logic.
- Body size: 100 kb by default, 1 MB only for `/history/sync` (`JSON_BODY_LIMIT`, `HISTORY_BODY_LIMIT`).
- History keys are restricted to `[A-Za-z0-9:_-]` and `__proto__` / `constructor` / `prototype` are rejected (no prototype pollution, no Mongo `$`/`.` keys).
- Malformed or oversized JSON returns a clean 400 / 413, never a 500 with parser details.
- Uploads: `.pdf`/`.txt` only, in memory, 10 MB max, PDFs must start with `%PDF-`, parsing is time-boxed (15 s), filenames are sanitised before being echoed or logged.

## HTTP hardening

- API: strict CSP (`default-src 'none'`), `no-referrer`, HSTS in production, no `X-Powered-By`, CORS allowlist (`CORS_ORIGINS`), request ids on every response.
- Web app (Vercel, `vercel.json`): Content-Security-Policy (scripts only from the site itself — no inline scripts), HSTS, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`.
- Production `/health` exposes only `{ success, database.ready }`.
- AI answers render as Markdown without raw HTML; links open with `noopener noreferrer nofollow`.
- The Vite dev server binds to `localhost` only (set `VITE_DEV_HOST` to expose it on a trusted network).

## Known residual risks

- **Session token in `localStorage`.** Mitigated by the strict CSP (no inline or third-party scripts). Moving to an httpOnly cookie needs the API and app on the same site plus CSRF protection.
- **Lockout and rate limits are in memory.** Fine for one server instance; use Redis or MongoDB when running several.
- **No server-side logout / token revocation yet.** Tokens expire after `AUTH_TOKEN_TTL_HOURS` (7 days). Each token carries a `jti` so a deny-list can be added.
- **Dependency advisories that need major upgrades:** `zod` (memory use on oversized collections — mitigated by the body limits), `vite`/`esbuild` (dev server only — mitigated by localhost binding), `serialize-javascript` (build-time only, inputs are our own code). Plan the zod 4 and Vite upgrades as a separate change.
- **`CORS_ORIGINS` default includes `https://*.vercel.app`.** Set it to your exact production domain on Render.

## Deploy checklist

1. Render: set `NODE_ENV=production`, a fresh `AUTH_JWT_SECRET` (`node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`), `MONGODB_URI` (Atlas, with auth + IP allowlist), and `CORS_ORIGINS` = your exact app domain.
2. If the API URL changes, update `connect-src` in both `vercel.json` files.
3. Run `npm audit --omit=dev` before each release.
