# Conceptual OBGYN

**A quiet, offline-ready obstacle-free revision workspace for Obstetrics & Gynecology — UG and PG.**

The interface is a layered spatial-glass workspace: a living aurora mesh drifts behind true multi-layer frosted surfaces — two track portals and three revision utilities in one bento, with keyboard-first navigation and a ⌘K quick-recall palette. Backed by a modular Express API ready for spaced repetition and RAG pipelines.

---

## What's inside

| Surface | Behaviour |
| --- | --- |
| **Landing (`/`)** | Google-style glass bento: capsule navbar with a sliding segmented track switcher, editorial header, two rich track portals (stacked glass mini-widgets, module-count footer bar, "Open Track" fill) and three revision utilities — **Daily Pearl** (crossfade cycle), **Visual Atlas** (fan-out thumbnails), **Revision Engine** (7-day rhythm + offline pulse). Hover sweeps a diagonal specular sheen across every card; sibling dimming and a pointer-tracked hairline ring keep focus physical; `1`/`2` spotlight a portal, `⌘K` opens quick recall |
| **AI Studio card (`/` hero)** | Free OBGYN AI assistant & PDF summarizer: ask a clinical doubt or drop a lecture PDF/TXT — answers stream back as rich markdown (comparison tables, bold dosages) with a 🎯 High-Yield Exam Pearl banner, three follow-up chips, and one-tap **Save to Quick Recall (⌘K)**. The UG/PG toggle follows the navbar portrait spotlight |
| **Revision Studio (`/track/ug`, `/track/pg`)** | Three-pane glass workspace: searchable high-yield module navigator with completion rings and `🔥 High Yield` weightage; a center canvas with **Visual Concept Notes** (causal flows, comparison tables, 🎯 examiner traps, every golden rule with **Save Pearl to ⌘K**), **Interactive Clinical Simulator** (UG 28-day hormone scrubber; PG partograph + Bishop score), and **Active Recall Flashcards** (3D spring flip, Again / Good / Easy); a contextual 3-question MCQ rail with instant green/red feedback, explanation reveal and **Ask AI Why →** hand-off. Progress persists in `localStorage`, the URL is always shareable, and legacy `/ug` / `/pg` bookmarks redirect |
| **PWA shell** | `autoUpdate` service worker, Workbox runtime caching for the revision API, `navigateFallback: /index.html` so deep links work offline, generated icons, install prompt wired to the header |
| **Intelligence API** | Controller → service → repository layering, zod-validated contracts, SM-2 spaced repetition, RAG summarisation scaffolding (pluggable embedder + vector store, MMR summariser) |

---

## Repository layout

```
conceptual-obgyn/
├── package.json                      # npm workspaces root — dev / build / typecheck / seed / icons
├── docker-compose.yml                # MongoDB 7 for local development
├── .editorconfig
├── README.md
│
├── client/                           # React 18 + TS + Vite PWA
│   ├── index.html                    # light-first theme bootstrap + font loading
│   ├── vite.config.ts                # PWA manifest, Workbox caching, /api dev proxy
│   ├── tailwind.config.js            # typography + easing tokens only
│   ├── postcss.config.js
│   ├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
│   ├── .env.example
│   ├── scripts/
│   │   └── generate-icons.mjs        # zero-dependency PNG icon generator (runs on postinstall)
│   ├── public/                       # generated icons, favicon.svg, robots.txt, offline.html
│   └── src/
│       ├── main.tsx  ·  App.tsx      # shell + dependency-free router (/, /track/ug, /track/pg) + ⌘K palette
│       ├── index.css                 # "Layered Spatial Glass" design system (card, capsule, chip, sheen)
│       ├── api/
│       │   ├── client.ts             # fetch wrapper with envelope validation + timeouts
│       │   ├── useTrackSummary.ts    # TanStack Query hook (snapshot first paint → live reconcile)
│       │   └── useStudioModules.ts   # curated-first module index, reconciled with /tracks/:track/modules
│       ├── components/
│       │   ├── canvas/
│       │   │   └── AuroraGlassCanvas.tsx  # living background: 3 Lissajous orbs, veil, dot matrix
│       │   ├── landing/
│       │   │   ├── LandingPage.tsx   # bento composition, cascade entrance, keyboard shortcuts
│       │   │   ├── Navbar.tsx        # glass capsule: emblem, version pill, track switcher, actions
│       │   │   ├── TrackPortalCard.tsx  # portal module: widgets, footer bar, ring, dimming
│       │   │   ├── TrackWidgets.tsx  # stacked-glass mini widgets (GnRH pulse / partograph)
│       │   │   ├── DailyPearlCard.tsx    # 4-pearl AnimatePresence cycle
│       │   │   ├── VisualAtlasCard.tsx   # fan-out glass thumbnails
│       │   │   └── RevisionEngineCard.tsx # 7-day rhythm bar + offline pulse
│       │   ├── studio/
│       │   │   ├── TrackModuleDirectoryPage.tsx # module directory → dedicated full-screen study page (UG + PG)
│       │   │   ├── TorchSimulator.tsx           # PG TORCH serology windows + transmission timing
│       │   │   ├── FgrSimulator.tsx             # PG SOGC No. 442 Doppler staging + delivery timing
│       │   │   ├── ConceptNotes.tsx            # flows, tables, traps, jump bar, topic filter, Save ⌘K
│       │   │   ├── MenstrualCycleSimulator.tsx # UG 28-day FSH/LH/E2/P4 + endometrium
│       │   │   ├── PartographSimulator.tsx     # PG alert/action lines + Bishop score
│       │   │   ├── FlashcardDeck.tsx           # 3D flip cards + Again/Good/Easy
│       │   │   ├── McqRail.tsx                 # 3-question drill + Ask AI Why hand-off
│       │   │   └── StudioBits.tsx              # completion rings, shared labels
│       │   └── ui/
│       │       ├── GlassCard.tsx     # base surface primitive + specular sheen sweep
│       │       ├── QuickRecallModal.tsx  # ⌘K spotlight-style frosted palette
│       │       └── ErrorBoundary.tsx
│       ├── data/
│       │   ├── fallbackTracks.ts     # offline snapshot (instant first paint)
│       │   └── revisionStudio.ts     # curated 9-module notes, simulators, cards, MCQs, themes
│       ├── hooks/
│       │   ├── usePwaInstall.ts      # beforeinstallprompt capture
│       │   ├── useEnvironment.ts     # media queries, reduced motion
│       │   └── useTheme.ts           # DOM class / color-scheme / chrome colour sync
│       ├── lib/
│       │   ├── queryClient.ts
│       │   ├── router.ts             # pushState + popstate pathname hook
│       │   ├── motion.ts             # blur-safe filter tween (springs overshoot → invalid blur)
│       │   └── utils.ts              # cn()
│       ├── store/
│       │   ├── useAppStore.ts        # persisted theme + session spotlight / palette / AI prefill
│       │   ├── useRecallStore.ts     # ⌘K pearls (localStorage)
│       │   └── useStudioStore.ts     # card ratings, MCQ answers, resume points (localStorage)
│       └── types/
│           ├── tracks.ts             # runtime-validated mirror of the server contract
│           └── studio.ts             # /tracks/:track/modules contract
│
└── server/                           # Node + Express (strict TS, ESM)
    ├── package.json
    ├── tsconfig.json
    ├── .env.example
    └── src/
        ├── index.ts                  # lifecycle: connect → listen → graceful shutdown
        ├── app.ts                    # helmet, cors, compression, rate limits, health
        ├── config/
        │   ├── env.ts                # zod-validated environment contract
        │   └── database.ts           # bounded MongoDB retries + readiness probe
        ├── data/
        │   ├── seed-data.ts          # canonical corpus (tracks, modules, flashcards, cases)
        │   └── studio-modules.ts     # Studio index metadata for /tracks/:track/modules
        ├── middleware/
        │   ├── asyncHandler.ts
        │   ├── errorHandler.ts       # envelope errors + 404
        │   ├── rateLimit.ts          # tiered read / AI limiters
        │   ├── requestContext.ts     # request ids
        │   └── validate.ts           # zod request validation
        ├── models/
        │   ├── RevisionModule.ts     # the required model: track, difficulty, RAG provenance
        │   ├── Flashcard.ts
        │   ├── ClinicalCase.ts
        │   └── User.ts               # scrypt password hashing (node:crypto)
        ├── modules/
        │   ├── tracks/
        │   │   ├── tracks.schema.ts      # single source of truth for the API contract
        │   │   ├── tracks.repository.ts  # Mongo + in-memory repository port
        │   │   ├── tracks.service.ts
        │   │   ├── tracks.controller.ts
        │   │   └── tracks.routes.ts
        │   ├── revision/             # SM-2 spaced repetition + review endpoints
        │   └── ai/                   # RAG pipeline (embedder, vector store, summariser)
        ├── routes/
        │   └── index.ts
        ├── scripts/
        │   └── seed.ts               # npm run seed
        ├── types/
        │   └── express.d.ts
        └── utils/
            ├── logger.ts             # leveled JSON logger (zero deps)
            └── httpError.ts
```

---

## Design system — "Layered Spatial Glass"

- **Layered surfaces.** Three stacked optical layers per screen. The **canvas** is alabaster `#F8FAFC` (deep slate `#0B0F17` at night). The **card body** is `rgba(255,255,255,0.55)` light / `rgba(15,23,42,0.5)` dark at `blur(40px) saturate(1.9)`, with a 1px white outer border (`white/60` / `white/10`), an inset specular highlight and one diffused shadow. **Nested chips** (`rgba(255,255,255,0.7)` / `white/[0.06]` with `white/80` borders) hold every control, so background → body → control reads as physical depth.
- **Living aurora canvas.** Three ultra-soft radial meshes (medical blue `#DBEAFE`, surgical teal `#CCFBF1`, lavender-rose `#FCE7F3`) drift on an infinite figure-8 Lissajous path (24s loop), shifted by cursor parallax (springs, ±18px, opposite direction per orb). A masked 24px dot matrix (`#94a3b8` at 0.22) sits between aurora and a frosted veil — every glass card blurs those dots through `backdrop-filter`, which is what makes the refraction legible.
- **Type.** Inter with optical sizing; JetBrains Mono for eyebrows, statistics, widget labels and keycaps. Hierarchy comes from weight and colour, not size inflation.
- **Motion.** Physical, never theatrical. Entrances cascade with spring `stiffness 260 / damping 24` (`scale 0.97 → 1`, `blur 6px → 0`, 70ms stagger). Hovering any card sweeps a diagonal specular sheen (`0.65s`). The two portals dim their sibling to `opacity 0.55`, `scale 0.99` (spring `300/30`) while a pointer-tracked radial highlight lights the 1px border ring — all through motion values, so pointer movement never re-renders React.

---

## Quick start

**Prerequisites:** Node.js ≥ 20.10 and npm ≥ 10. MongoDB is *optional* — the API boots without it.

```bash
# 1 — install (also generates the PWA icons)
npm install

# 2 — run the client (5173) and the API (5000) together
npm run dev
```

Open **http://localhost:5173** (Vite prints the next free port if 5173 is already occupied). The landing is static and paints instantly; the Revision Studio workspaces (`/track/ug`, `/track/pg`) paint from the curated corpus and then reconcile with the live module index.

### Keyboard

| Key | Action |
| --- | --- |
| `1` / `2` | Spotlight the UG / PG portal on the landing |
| `⌘K` / `Ctrl+K` | Open quick recall — type or click a curated tag (`Esc` closes) |
| `Esc` | Close quick recall |

### With MongoDB (optional)

```bash
# start MongoDB 7 (docker compose) and load the curated corpus
docker compose up -d
npm run seed

# copy the server environment template
cp server/.env.example server/.env
```

When the database is reachable and seeded, `GET /api/v1/tracks/summary` reports `"source": "live"`; otherwise the repository transparently serves the in-memory seed snapshot (`"source": "seed"`). The Studio header and navigator footer reflect the module-index provenance: **Module index synced** when `/tracks/:track/modules` answers, or **Curated · offline ready** while the bundled corpus renders instantly.

### Production build

```bash
npm run build      # client → client/dist (with service worker), server → server/dist
npm run preview    # serve the built PWA on :4173
npm start          # run the compiled API on :5000
```

### Deployment (Vercel + Render)

| Piece | Host | URL / config |
| --- | --- | --- |
| PWA client | Vercel | `https://conceptual-obgyn.vercel.app` — `vercel.json` builds `build:client`, outputs `client/dist` |
| API | Render | `https://conceptual-obgyn.onrender.com` — blueprint in `render.yaml`, health check `/health` |

- **API routing.** The production build calls the Render API directly (`client/src/api/client.ts`); `vercel.json` additionally rewrites `/api/v1/:path*` to Render so older cached bundles and direct links keep working. Override with `VITE_API_BASE_URL` if the API moves.
- **CORS.** Render must allow the Vercel origin. The default `CORS_ORIGINS` already matches `https://*.vercel.app` (production **and** preview deploys); add a custom domain, or `*` for the public credential-less API.
- **Render environment.** `render.yaml` declares `CORS_ORIGINS`, `MONGODB_URI`, `GEMINI_API_KEY` and `GROQ_API_KEY` as `sync: false`, so their values are entered once in the Render dashboard (they are never committed). `GROQ_MODEL` defaults to `openai/gpt-oss-120b`.
- **Cold starts.** The free Render instance spins down when idle; the client paints from its bundled corpus immediately and reconciles when the API wakes. AI requests use a 90 s budget, well above the wake-up time.

---

## Scripts (root)

| Script | Description |
| --- | --- |
| `npm run dev` | Client + API concurrently (Vite dev server proxying `/api` → `:5000`) |
| `npm run build` | Type-checked production build of both workspaces |
| `npm run typecheck` | Strict TypeScript check for both workspaces |
| `npm run preview` | Preview the built PWA (`:4173`) |
| `npm start` | Start the compiled Express API |
| `npm run seed` | Seed MongoDB with the curated revision corpus |
| `npm run icons` | Regenerate the PWA icon set (`client/scripts/generate-icons.mjs`) |
| `npm run dev:client` / `dev:server` / `build:client` / `build:server` | Workspace shortcuts |

---

## Environment variables

### `client/.env.example`

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `/api/v1` | Base path for API calls. Local dev keeps the Vite proxy; a production build defaults to the Render API unless this is set |
| `VITE_ENABLE_SW_IN_DEV` | `false` | Register the service worker under `vite dev` |

### `server/.env.example`

| Variable | Default | Purpose |
| --- | --- | --- |
| `NODE_ENV` | `development` | `development` \| `test` \| `production` |
| `PORT` | `5000` | HTTP port |
| `API_PREFIX` | `/api/v1` | Route prefix |
| `LOG_LEVEL` | `info` | `debug` \| `info` \| `warn` \| `error` \| `silent` |
| `MONGODB_URI` | — *(empty = seed mode)* | Mongo connection string |
| `MONGODB_CONNECT_TIMEOUT_MS` | `5000` | Server-selection timeout per attempt |
| `MONGODB_MAX_RETRIES` | `5` | Bounded connection attempts before falling back |
| `CORS_ORIGINS` | `http://localhost:5173,http://localhost:4173,https://*.vercel.app` | Comma-separated allowlist; supports exact origins, `*` wildcards and `*` |
| `RATE_LIMIT_WINDOW_MS` / `RATE_LIMIT_MAX` | `60000` / `180` | Global read limiter |
| `JSON_BODY_LIMIT` | `256kb` | Body parser limit |
| `AI_EMBEDDING_DIMENSIONS` | `384` | Deterministic embedder vector width |
| `AI_CHUNK_TOKENS` | `180` | RAG chunk size |
| `AI_SUMMARY_SENTENCES` | `6` | Max sentences in generated summaries |
| `AI_VECTOR_STORE` | `memory` | `memory` \| `mongo` |
| `GEMINI_API_KEY` / `GEMINI_MODEL` / `GEMINI_TIMEOUT_MS` | — / `gemini-3.8-flash` / `30000` | Lead provider for the OBGYN AI Studio |
| `OMNIROUTE_API_KEY` / `OMNIROUTE_BASE_URL` / `OMNIROUTE_MODEL` / `OMNIROUTE_TIMEOUT_MS` | — / `http://localhost:20128/v1` / `auto/best-chat` / `60000` | Self-hosted OmniRoute gateway — primary hop, auto-routes across 350+ providers; pin `agy/gemini-3.8-flash-tiered` for ~14 s answers |
| `OPENROUTER_API_KEY` / `OPENROUTER_MODEL` / `OPENROUTER_TIMEOUT_MS` | — / `google/gemma-4-31b-it:free` / `30000` | Open-source aggregator hop (`:free` tier models) |
| `GROQ_API_KEY` / `GROQ_MODEL` / `GROQ_TIMEOUT_MS` | — / `openai/gpt-oss-120b` / `30000` | Groq GPT-OSS hop (fast LPU inference, prompt-driven JSON with citations) |
| `POLLINATIONS_ENABLED` / `POLLINATIONS_MODEL` / `POLLINATIONS_TIMEOUT_MS` | `1` / `openai-fast` / `55000` | Keyless open-source text hop — the chain still answers live with no keys |
| `AI_UPLOAD_MAX_BYTES` | `10485760` | Upload ceiling for `.pdf`/`.txt` attachments |

Every hop is optional: a missing or failing provider is parked by a circuit breaker and the next one answers, ending at the curated clinical vault — `POST /ai/obgyn-assist` always responds.

---

## API surface (`/api/v1`)

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/tracks/summary` | Both track summaries: metadata, concept nodes, metrics, counts, daily pearl |
| `GET` | `/tracks/health` | Track-data liveness + repository kind |
| `GET` | `/tracks/:track` | Single track (`NEET_UG` \| `NEET_PG`) |
| `GET` | `/tracks/:track/modules` | Curated Revision Studio module index for UG (4) / PG (5): order, high-yield weightage, duration, tags, counts |
| `GET` | `/revision/modules` | Paginated revision vault filtered by track / difficulty / image-based |
| `POST` | `/revision/reviews` | Record a review, returns the updated SM-2 schedule |
| `POST` | `/ai/summarise` | RAG pipeline: retrieve → rank (MMR) → summarise with provenance |
| `POST` | `/ai/obgyn-assist` | OBGYN AI Studio: clinical Q&A + PDF/TXT summarisation (multipart or JSON) with the provider chain and curated-vault fallback |
| `GET` | `/ai/obgyn-assist/status` | Provider + vault capabilities for the studio card |
| `GET` | `/ai/search` | Semantic-ish search over the indexed corpus |
| `GET` | `/health` | Service + database status (root, outside the prefix) |

Responses use a stable envelope: `{ success: true, requestId, data }`. The client re-validates every payload with zod (`client/src/types/tracks.ts`), so a stale service-worker cache can never poison the UI.

---

## Architecture notes

- **Routing** — dependency-free `lib/router.ts` (`pushState` + `popstate`). Routes: `/`, `/track/ug`, `/track/pg`; legacy `/ug` and `/pg` are rewritten with `replaceState` so old bookmarks never dead-end. On the landing the navbar's segmented switcher spotlights the portal; in the Studio it switches tracks and keeps the URL authoritative. Workbox's `navigateFallback` keeps deep links working offline; the manifest exposes both Studio tracks as PWA shortcuts.
- **Contracts** — `server/src/modules/tracks/tracks.schema.ts` (zod) is the source of truth; the client mirrors it and validates responses at the edge.
- **Degradation** — `TracksRepository` is a port with Mongo and in-memory adapters selected per call via readiness, so the API, the PWA and the offline snapshot all work with zero infrastructure.
- **Animation physics** — motion stays on `transform` / `opacity` / `filter` (compositor-friendly). Springs never drive `filter: blur()` directly — `lib/motion.ts` pins the `filter` key to a non-overshooting tween so browsers never receive invalid negative blur values. The aurora is transform-only (one rAF updates three motion values); the sheen sweep is a pure CSS transition; the ring uses motion values + `useMotionTemplate`, so hover never re-renders React.
- **Reduced motion** — every entrance is skipped (`initial={false}`) when `prefers-reduced-motion: reduce` is set.
- **Offline-first** — both Studio workspaces ship the full curated corpus as `initialData` for instant first paint and interactive use; `/api/v1/tracks/:track/modules` only reconciles metadata. Workbox caches `/api/v1/revision/*` network-first and `/api/v1/tracks*` stale-while-revalidate; `offline.html` covers cold offline starts.
- **Studio persistence** — `useStudioStore` keeps flashcard ratings, MCQ choices and the last-opened module per track under `conceptual-obgyn:studio-v1`, so completion rings resume across reloads. The ⌘K recall vault remains separate under `conceptual-obgyn:recall-v1`.
- **Security** — helmet with a production CSP, strict CORS allowlist, tiered rate limits, `node:crypto` scrypt password hashing, zod-validated env/inputs.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `MongoServerError` on boot | Not fatal — the API logs a warning and serves the seed snapshot. Start Mongo (`docker compose up -d`) and `npm run seed` for live data. |
| Studio shows "Curated · offline ready" | The client could not reach `/api/v1/tracks/:track/modules`. The workspace still works from the bundled corpus. Confirm the API is running on `:5000` (`npm run dev:server`). |
| Port already in use | Client: Vite picks the next port (or set `--port`). API: change `PORT` in `server/.env`. |
| Service worker serves stale assets after a rebuild | It is disabled under `vite dev` unless `VITE_ENABLE_SW_IN_DEV=true`; in preview, clear site data once after a fresh build. |

---

*Layered glass, a living aurora, two portals, three utilities — zero noise.*
