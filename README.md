# Conceptual OBGYN

**A next-generation, offline-ready revision workspace for Obstetrics & Gynaecology — UG and PG aspirants.**

A layered spatial-glass PWA with two track portals (UG / PG) and three revision utilities: a searchable high-yield module navigator, an interactive clinical simulator, and an active-recall flashcard engine. Backed by a modular Express API with SM-2 spaced repetition and a RAG AI studio.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/Node-%3E%3D20.10-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React 18](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![PWA](https://img.shields.io/badge/PWA-Workbox-purple)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

---

## What it is

Conceptual OBGYN is a distraction-free, keyboard-first revision surface for medical students. It paints instantly offline, persists progress in `localStorage`, and reconciles with a live module index when the API is reachable.

| Surface | What it does |
|---------|-------------|
| **Landing (`/`)** | Glass bento workspace: capsule navbar, editorial header, two rich track portals (UG · PG), and three revision utilities — Daily Pearl (crossfade cycle), Visual Atlas (fan-out thumbnails), Revision Engine (7-day rhythm + offline pulse). Keyboard shortcuts: `1`/`2` spotlight a portal, `⌘K` opens quick recall. |
| **Revision Studio (`/track/ug`, `/track/pg`)** | Three-pane glass workspace: searchable module navigator with completion rings and `🔥 High Yield` weightage; center canvas with Visual Concept Notes (causal flows, comparison tables, examiner traps), Interactive Clinical Simulator (UG menstrual-cycle scrubber; PG partograph + Bishop score), and Active Recall Flashcards (3D flip, Again / Good / Easy); a 3-question MCQ rail with instant feedback and an **Ask AI Why →** hand-off. |
| **AI Studio** | Free OBGYN AI assistant + PDF/TXT summariser. Answers stream back as rich markdown (comparison tables, bold dosages) with a High-Yield Exam Pearl banner, follow-up chips, and one-tap **Save to Quick Recall (⌘K)**. Provider chain with curated-vault fallback — always answers. |
| **PWA shell** | Workbox service worker, runtime caching, `navigateFallback: /index.html` for deep links offline, auto-generated icons, install prompt. |
| **Intelligence API** | Controller → service → repository layering, zod-validated contracts, SM-2 spaced repetition, RAG summarisation scaffolding (pluggable embedder + vector store, MMR summariser). |

---

## Tech stack

**Client** — React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, TanStack Query, Zustand, Lucide React, React Markdown, Workbox PWA.

**Server** — Node.js, Express (strict TS, ESM), Mongoose/MongoDB 7, Zod, Helmet, CORS, Express Rate Limit, Multer, pdf-parse, @google/genai.

---

## Screenshots

> Add screenshots here — landing bento, studio directory, AI studio card, simulator views.

---

## Quick start

### Prerequisites

- Node.js ≥ 20.10
- npm ≥ 10
- MongoDB 7 (optional — the API boots without it and serves a seed snapshot)

### Run locally

```bash
# 1 — clone and install (also generates PWA icons via postinstall)
git clone https://github.com/Shivam81137/Conceptual-OBGYN.git
cd Conceptual-OBGYN
npm install

# 2 — run client (5173) and API (5000) together
npm run dev
```

Open **http://localhost:5173**. The landing is static and paints instantly; the Revision Studio workspaces paint from the curated corpus and then reconcile with the live module index.

### With MongoDB (optional, for live data)

```bash
# start MongoDB 7 via docker compose
docker compose up -d

# load the curated revision corpus
npm run seed

# configure server environment
cp server/.env.example server/.env
```

When MongoDB is reachable and seeded, `GET /api/v1/tracks/summary` reports `"source": "live"`; otherwise the repository transparently serves the in-memory seed snapshot (`"source": "seed"`).

### Production build

```bash
npm run build      # client → client/dist (with service worker), server → server/dist
npm run preview    # serve the built PWA on :4173
npm start          # run the compiled API on :5000
```

---

## Deployment

| Piece | Host | Config |
|-------|------|--------|
| PWA client | Vercel | `vercel.json` builds `build:client`, outputs `client/dist` |
| API | Render | `render.yaml`, health check `/health` |

**Environment variables (Render, `sync: false` — set in dashboard, never commit):**

- `MONGODB_URI`, `CORS_ORIGINS`, `GEMINI_API_KEY`, `GROQ_API_KEY`
- `GROQ_MODEL` defaults to `openai/gpt-oss-120b`

**API routing:** The client calls the Render API directly; `vercel.json` rewrites `/api/v1/:path*` to Render so older cached bundles and direct links keep working. Override with `VITE_API_BASE_URL` if the API moves.

---

## Scripts (root)

| Script | Description |
|--------|-------------|
| `npm run dev` | Client + API concurrently (Vite proxying `/api` → `:5000`) |
| `npm run dev:client` / `dev:server` | Workspace shortcuts |
| `npm run build` | Type-checked production build of both workspaces |
| `npm run build:client` / `build:server` | Workspace builds |
| `npm run typecheck` | Strict TypeScript check for both workspaces |
| `npm run preview` | Preview the built PWA (`:4173`) |
| `npm start` | Start the compiled Express API |
| `npm run seed` | Seed MongoDB with the curated revision corpus |
| `npm run icons` | Regenerate the PWA icon set |

---

## Environment variables

### Client (`client/.env.example`)

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_API_BASE_URL` | `/api/v1` | Base path for API calls |
| `VITE_ENABLE_SW_IN_DEV` | `false` | Register service worker under `vite dev` |

### Server (`server/.env.example`)

| Variable | Default | Purpose |
|----------|---------|---------|
| `NODE_ENV` | `development` | `development` \| `test` \| `production` |
| `PORT` | `5000` | HTTP port |
| `API_PREFIX` | `/api/v1` | Route prefix |
| `LOG_LEVEL` | `info` | `debug` \| `info` \| `warn` \| `error` \| `silent` |
| `MONGODB_URI` | *(empty = seed mode)* | Mongo connection string |
| `CORS_ORIGINS` | `http://localhost:5173,http://localhost:4173,https://*.vercel.app` | Comma-separated allowlist |
| `RATE_LIMIT_WINDOW_MS` / `RATE_LIMIT_MAX` | `60000` / `180` | Global read limiter |
| `GEMINI_API_KEY` / `GEMINI_MODEL` / `GEMINI_TIMEOUT_MS` | — / `gemini-3.8-flash` / `30000` | Lead provider for AI Studio |
| `GROQ_API_KEY` / `GROQ_MODEL` / `GROQ_TIMEOUT_MS` | — / `openai/gpt-oss-120b` / `30000` | Groq GPT-OSS hop |
| `OPENROUTER_API_KEY` / `OPENROUTER_MODEL` / `OPENROUTER_TIMEOUT_MS` | — / `google/gemma-4-31b-it:free` / `30000` | Open-source aggregator hop |
| `POLLINATIONS_ENABLED` / `POLLINATIONS_MODEL` / `POLLINATIONS_TIMEOUT_MS` | `1` / `openai-fast` / `55000` | Keyless open-source text hop |

Every AI hop is optional — a missing or failing provider is parked by a circuit breaker and the next one answers, ending at the curated clinical vault. `POST /ai/obgyn-assist` always responds.

---

## API surface (`/api/v1`)

| Method | Route | Purpose |
|--------|-------|---------|
| `GET` | `/tracks/summary` | Both track summaries: metadata, concept nodes, metrics, counts, daily pearl |
| `GET` | `/tracks/health` | Track-data liveness + repository kind |
| `GET` | `/tracks/:track` | Single track (`NEET_UG` \| `NEET_PG`) |
| `GET` | `/tracks/:track/modules` | Curated Revision Studio module index |
| `GET` | `/revision/modules` | Paginated revision vault filtered by track / difficulty / image-based |
| `POST` | `/revision/reviews` | Record a review, returns the updated SM-2 schedule |
| `POST` | `/ai/summarise` | RAG pipeline: retrieve → rank (MMR) → summarise with provenance |
| `POST` | `/ai/obgyn-assist` | OBGYN AI Studio: clinical Q&A + PDF/TXT summarisation |
| `GET` | `/ai/obgyn-assist/status` | Provider + vault capabilities for the studio card |
| `GET` | `/ai/search` | Semantic-ish search over the indexed corpus |
| `GET` | `/health` | Service + database status (root, outside the prefix) |

Responses use a stable envelope: `{ success: true, requestId, data }`. The client re-validates every payload with zod.

---

## Project structure

```
conceptual-obgyn/
├── package.json              # npm workspaces root
├── docker-compose.yml        # MongoDB 7 for local development
├── vercel.json               # Vercel client config
├── render.yaml               # Render API blueprint
├── README.md
│
├── client/                   # React 18 + TS + Vite PWA
│   ├── src/
│   │   ├── components/       # Landing, Studio, UI primitives
│   │   ├── data/             # Curated corpus, pearls, module data
│   │   ├── api/              # API client hooks
│   │   ├── store/            # Zustand stores (theme, recall, studio)
│   │   ├── hooks/            # PWA install, environment, theme
│   │   └── lib/              # Router, motion, utils
│   └── ...
│
└── server/                   # Node + Express (strict TS, ESM)
    ├── src/
    │   ├── modules/          # Tracks, revision (SM-2), AI (RAG + OBGYN studio)
    │   ├── models/           # Mongoose schemas
    │   ├── routes/           # Express route wiring (single API index)
    │   ├── data/             # Curated corpus, evidence, knowledge base
    │   └── middleware/       # Validation, rate limits, errors
    └── ...
```

---

## Architecture notes

- **Routing** — dependency-free `lib/router.ts` (`pushState` + `popstate`). Routes: `/`, `/track/ug`, `/track/pg`; legacy `/ug` and `/pg` rewrite via `replaceState`.
- **Contracts** — zod schemas are the source of truth; the client mirrors and validates responses at the edge.
- **Degradation** — `TracksRepository` is a port with Mongo and in-memory adapters, so the API, PWA, and offline snapshot all work with zero infrastructure.
- **Offline-first** — both Studio workspaces ship the full curated corpus for instant first paint; Workbox caches API responses; `offline.html` covers cold offline starts.
- **Persistence** — flashcard ratings, MCQ answers, and resume points live in `localStorage` (`conceptual-obgyn:studio-v1`); ⌘K recall vault in `conceptual-obgyn:recall-v1`.
- **Reduced motion** — all entrances are skipped when `prefers-reduced-motion: reduce` is set.
- **Security** — helmet CSP, strict CORS allowlist, tiered rate limits, `node:crypto` scrypt password hashing, zod-validated env/inputs.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `MongoServerError` on boot | Not fatal — API serves the seed snapshot. Run `docker compose up -d` and `npm run seed` for live data. |
| Studio shows "Curated · offline ready" | The client can't reach `/api/v1/tracks/:track/modules`. The workspace still works from the bundled corpus. Confirm the API is running on `:5000`. |
| Port already in use | Client: Vite picks the next port (or set `--port`). API: change `PORT` in `server/.env`. |
| Service worker serves stale assets | Disabled under `vite dev` unless `VITE_ENABLE_SW_IN_DEV=true`. In preview, clear site data once after a fresh build. |

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-feature`).
3. Commit your changes (`git commit -m "feat: ..."`).
4. Push to the branch (`git push origin feat/your-feature`).
5. Open a Pull Request.

Please ensure `npm run typecheck` and `npm run build:client` pass before opening a PR.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

*Conceptual OBGYN — layered glass, a living aurora, two portals, three utilities — zero noise.*