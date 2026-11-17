# Architecture & navigation guide

Monorepo (npm workspaces): `client/` (React PWA) and `server/` (Express API).

## Client (`client/src`)

| Folder | What lives here |
|---|---|
| `main.tsx`, `App.tsx` | Entry point and top-level routing |
| `components/landing/` | Landing page widgets (navbar, track portals, daily pearl, AI studio card…) |
| `components/studio/` | Revision Studio UI (notes, flashcards, MCQs, simulators, diagrams) |
| `components/ui/`, `brand/`, `canvas/` | Shared primitives, logo, background canvas |
| `data/studio/` | **Revision Studio content layer** (see below) |
| `data/content/` | Landing content: classic pearls, AI demo answers, visual atlas |
| `api/` | The only place that talks to the backend (`client.ts` + hooks) |
| `store/` | Zustand stores (app, recall, studio progress) |
| `hooks/`, `lib/`, `types/` | Hooks, utilities/router, shared types |

### Revision Studio content (`data/studio/`)

```
studio/
├── types.ts       StudioModule, notes, flashcards, MCQ, theme types
├── theme.ts       UG / PG colour themes
├── registry.ts    ordered STUDIO_MODULES list + lookup helpers
├── index.ts       barrel: import everything via '@/data/studio'
└── modules/pg/    one file per module: NN-slug.ts
```

**Add a module:** create `modules/pg/NN-slug.ts` exporting a `StudioModule`
(copy the previous one), import it in `registry.ts` and append it to
`STUDIO_MODULES`. If the API should know about it, mirror the id in
`server/src/data/studio-modules.ts`.

## Server (`server/src`)

| Folder | What lives here |
|---|---|
| `index.ts`, `app.ts` | Boot and Express app wiring |
| `config/` | Env validation, database connection |
| `routes/index.ts` | Single place where module routers are mounted under `/api` |
| `modules/<feature>/` | Feature slices: `*.routes` → `*.controller` → `*.service` → `*.repository`, `*.schema` (zod) |
| `models/` | Mongoose schemas |
| `middleware/`, `utils/` | Cross-cutting concerns |
| `data/` | Seed data and curated knowledge |
| `scripts/` | CLI jobs (e.g. `seed.ts`) |

### Student accounts (auth)

`modules/auth/` — `POST /auth/signup`, `POST /auth/login`, `GET /auth/me`.
Passwords are scrypt-hashed (`models/User.ts`); sessions are HS256 tokens
(`auth.tokens.ts`, no extra dependency) signed with `AUTH_JWT_SECRET`.
Accounts live in MongoDB when connected, otherwise in `server/.data/users.json`
(git-ignored) so signup works locally without a database. Protect any route
with `requireAuth` (`auth.middleware.ts`) to get `req.user`.
Client: `api/auth.ts`, `store/useAuthStore.ts`, `components/auth/AuthDialog.tsx`
(opened from the navbar **Sign up / Sign in** buttons).

### Study history (per-student database)

`modules/history/` — `GET /history`, `POST /history/sync` (both need a Bearer token).
Stored per student in MongoDB (`models/StudyHistory.ts`: `StudyState` snapshot +
append-only `StudyEvent` log); without MongoDB it falls back to
`server/.data/history.json`. The first sync after sign-in *merges* the device and
account data; later syncs *replace*, so resets stick. Stats (streak, counts) and the
activity timeline are derived server-side.
Client: `hooks/useHistorySync.ts` (auto-sync), `store/useHistoryStore.ts`,
`components/auth/HistoryDialog.tsx` ("My study history" in the account menu).
Run a real database locally: `docker compose up -d` and keep `MONGODB_URI` in `server/.env`.

**Add a backend feature** (e.g. accounts, progress sync):
1. `server/src/modules/<feature>/` with routes, controller, service, repository, schema.
2. Mount the router in `server/src/routes/index.ts`.
3. Add a Mongoose model under `models/` if it persists data.
4. Call it from the client via a hook in `client/src/api/` (never `fetch` in components).
5. Replace the matching `localStorage` store in `client/src/store/` when it should sync.

## Commands

`npm run dev` · `npm run typecheck` · `npm run build` · `npm run seed`
