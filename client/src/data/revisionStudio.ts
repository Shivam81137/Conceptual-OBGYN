import type { TrackId } from '@/types/tracks';
import { TORCH_INFECTIONS_MODULE } from '@/data/torchInfections';
import { FGR_GUIDELINE_442_MODULE } from '@/data/fgrGuideline442';
import { PLACENTA_PRAEVIA_PAS_MODULE } from '@/data/placentaPraeviaPasModule';

/**
 * Revision Studio curated corpus.
 * ---------------------------------------------------------------------------
 * High-yield modules powering the workspace panes — four UG foundations
 * and the PG clinical vault (Module 01: TORCH Infections;
 * Module 02: Fetal Growth Restriction, SOGC No. 442). The content is intentionally
 * offline-first: notes, comparison tables, examiner traps, simulators,
 * flashcards and MCQ drills ship in the bundle, and the API only reconciles
 * the module index (`/tracks/:track/modules`).
 */

export type StudioTabId = 'notes' | 'simulator' | 'flashcards';
export type FlashcardRating = 'again' | 'good' | 'easy';

export interface StudioNoteTable {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}

export interface StudioNoteCode {
  label: string;
  language?: string;
  source: string;
}

/** Bespoke inline SVG diagram rendered inside a concept block. */
export type StudioDiagramKind =
  | 'tvs-distance-cutoffs'
  | 'silver-cs-risk-chart'
  | 'figo-pas-grades'
  | 'scan-timeline-flowchart'
  | 'delivery-timing-matrix'
  | 'usg-doppler-mri-markers'
  | 'hysterectomy-vs-triple-p'
  | 'torch-serology-avidity-pcr'
  | 'torch-usg-signature-map'
  | 'toxoplasmosis-diagnosis-treatment'
  | 'syphilis-treatment-congenital-risk'
  | 'rubella-crs-risk-gradient'
  | 'cmv-avidity-amniocentesis'
  | 'hsv-perinatal-suppression'
  | 'parvovirus-vzv-timeline'
  | 'delphi-early-vs-late-fgr'
  | 'mvm-plgf-aspirin-pathway'
  | 'fgr-genetic-cmv-workup'
  | 'ua-doppler-waveforms-aedf-redf'
  | 'mca-cpr-ductus-venosus-cascade'
  | 'sogc-442-delivery-timing-matrix';

export interface StudioNoteDiagram {
  kind: StudioDiagramKind;
  title: string;
  caption?: string;
  /** Optional key that labels the numbered callouts in the figure. */
  legend?: readonly string[];
}

export interface StudioNoteSection {
  id: string;
  heading: string;
  intro?: string;
  bullets?: readonly string[];
  flow?: readonly string[];
  table?: StudioNoteTable;
  /** Source algorithm (e.g. the extracted Mermaid commands) in a monospace panel. */
  code?: StudioNoteCode;
  /** Interactive/print-safe SVG clinical diagrams rendered with the section. */
  diagram?: readonly StudioNoteDiagram[];
  /** Golden rules rendered with a "Save Pearl to ⌘K" action. */
  pearls?: readonly string[];
  trap?: { title: string; body: string };
  /** Additional examiner traps for blocks that carry more than one. */
  traps?: readonly { title: string; body: string }[];
}

export interface StudioFlashcard {
  id: string;
  front: string;
  back: string;
}

export interface StudioMcq {
  id: string;
  stem: string;
  options: readonly [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface StudioModule {
  id: string;
  track: TrackId;
  title: string;
  shortTitle: string;
  summary: string;
  highYield: boolean;
  weightage: string;
  durationMinutes: number;
  tags: readonly string[];
  sourceTag: string;
  updatedAtISO: string;
  notes: readonly StudioNoteSection[];
  flashcards: readonly StudioFlashcard[];
  mcqs: readonly StudioMcq[];
}

export interface StudioTrackTheme {
  slug: 'ug' | 'pg';
  label: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  /** Gradient for accent bars, active tabs and primary buttons. */
  gradient: string;
  gradientText: string;
  tint: string;
  text: string;
  border: string;
  ring: string;
  dot: string;
  /** Hex used by SVG chart strokes. */
  chart: string;
}

export const STUDIO_TRACK_THEME: Record<TrackId, StudioTrackTheme> = {
  NEET_UG: {
    slug: 'ug',
    label: 'UG',
    title: 'Revision Studio',
    eyebrow: 'UG',
    subtitle: 'NCERT physiology and embryology, distilled to causal chains.',
    gradient: 'from-emerald-500 to-teal-500',
    gradientText: 'from-emerald-600 to-teal-500 dark:from-emerald-300 dark:to-teal-300',
    tint: 'bg-emerald-500/[0.08]',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-500/30',
    ring: 'stroke-emerald-500',
    dot: 'bg-emerald-500',
    chart: '#10B981',
  },
  NEET_PG: {
    slug: 'pg',
    label: 'PG',
    title: 'Clinical Vault',
    eyebrow: 'PG',
    subtitle: 'Congenital infections and placental insufficiency — serology, Doppler staging and delivery timing.',
    gradient: 'from-indigo-600 to-rose-500',
    gradientText: 'from-indigo-600 to-rose-500 dark:from-indigo-300 dark:to-rose-300',
    tint: 'bg-indigo-500/[0.08]',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-500/30',
    ring: 'stroke-indigo-500',
    dot: 'bg-indigo-500',
    chart: '#4F46E5',
  },
};

const UPDATED_AT = '2026-10-16T06:00:00.000Z';

export const STUDIO_MODULES: readonly StudioModule[] = [
  /* ====================================================================== */
  /* UG — 1. Menstrual Cycle & Hormonal Axis                           */
  /* ====================================================================== */
  {
    id: 'ug-menstrual-axis',
    track: 'NEET_UG',
    title: 'Menstrual Cycle & Hormonal Axis',
    shortTitle: 'Menstrual Axis',
    summary:
      'The 28-day ovarian and endometrial loop: two-cell two-gonadotropin steroidogenesis, feedback switching, ovulation timing and the endometrial read-out.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 18,
    tags: ['Hormonal axis', 'Ovulation', 'Endometrium'],
    sourceTag: 'NCERT XII • Reproductive Health',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'architecture',
        heading: 'The 28-day architecture',
        intro: 'Two clocks run together: the ovarian cycle (follicle → corpus luteum) and the uterine cycle (shed → proliferate → secrete).',
        flow: [
          'Menstrual D1–5 · endometrial shedding',
          'Follicular D6–13 · FSH recruits, oestradiol thickens',
          'Ovulation D14 · LH surge → follicular rupture',
          'Luteal D15–28 · progesterone stabilises, corpus luteum regresses',
        ],
        bullets: [
          'The follicular phase is variable; the luteal phase is fixed at ~14 days — cycle-length variation lives in the first half.',
          'Low oestradiol suppresses GnRH/FSH/LH; sustained high oestradiol flips to positive feedback and triggers the LH surge.',
          'Progesterone begins to rise just before follicular rupture — the earliest luteal signal, not a post-ovulation-only hormone.',
        ],
        table: {
          head: ['Ovarian phase', 'Dominant hormone', 'Uterine phase', 'Endometrial signature'],
          rows: [
            ['Follicular', 'Oestradiol (FSH-driven)', 'Proliferative', '5–7 mm, trilaminar'],
            ['Ovulatory', 'LH surge + FSH rise', 'Proliferative → secretory', '8–10 mm, triple line'],
            ['Luteal', 'Progesterone', 'Secretory', '8–12 mm, echogenic, cystic spaces'],
            ['Menstrual', 'Prostaglandins, oestrogen/progesterone fall', 'Menstrual', '1–4 mm, shedding'],
          ],
        },
        pearls: [
          'The LH surge is an event: onset → ovulation ≈36 h; peak → rupture ≈10–12 h.',
          'The luteal phase is fixed at ~14 days; a short luteal phase is a progesterone problem, not an FSH problem.',
        ],
      },
      {
        id: 'two-cell',
        heading: 'Two-cell, two-gonadotropin steroidogenesis',
        bullets: [
          'Theca interna responds to LH → synthesises androstenedione.',
          'Granulosa cells respond to FSH → aromatase converts androgen to oestradiol.',
          'Aromatase is the switch: without FSH-driven aromatase, androgens accumulate (the PCOS biochemical signature).',
          'Inhibin B from small antral follicles feeds back to suppress FSH — the follicular selection brake.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'The theca makes androgen, the granulosa makes oestrogen. A stem that swaps the two is the most common steroidogenesis distractor.',
        },
        pearls: [
          'Aromatase lives in granulosa cells and is FSH-induced — oestradiol is the granulosa product, androstenedione the theca product.',
        ],
      },
      {
        id: 'endometrium',
        heading: 'Endometrial read-out and implantation',
        bullets: [
          'Proliferative endometrium is trilaminar on ultrasound; secretory endometrium is homogenous and echogenic.',
          'The implantation window opens ~6–7 days after ovulation (cycle day 19–21).',
          'Withdrawal of progesterone destabilises lysosomes → prostaglandin release → spiral artery constriction → shedding.',
          'A persistent secretory endometrium with bleeding suggests anovulation rather than a true menstrual cycle.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Menstruation is a progesterone-withdrawal event. Anovulatory bleeding is oestrogen breakthrough, not a progesterone withdrawal — the histology differs.',
        },
        pearls: [
          'A trilaminar endometrium is a proliferative-phase signature; a homogenous echogenic cavity is secretory.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'ug-menstrual-f1',
        front: 'Which hormone exerts both negative and positive feedback on the hypothalamic–pituitary axis?',
        back: 'Oestradiol — negative at low/moderate levels, positive when sustained high during the pre-ovulatory window.',
      },
      {
        id: 'ug-menstrual-f2',
        front: 'Which phase of the cycle varies in length, and which is fixed?',
        back: 'Follicular phase varies; the luteal phase is fixed at ~14 days. Cycle-length changes therefore reflect the follicular phase.',
      },
      {
        id: 'ug-menstrual-f3',
        front: 'State the two-cell, two-gonadotropin theory in one line.',
        back: 'Theca interna (LH) → androstenedione; granulosa cells (FSH) → aromatase → oestradiol.',
      },
      {
        id: 'ug-menstrual-f4',
        front: 'How long after the LH surge does ovulation occur?',
        back: '≈36 h after the surge begins, or ≈10–12 h after the LH peak.',
      },
    ],
    mcqs: [
      {
        id: 'ug-menstrual-q1',
        stem: 'A 28-year-old woman has regular 24-day cycles. Which phase is most likely shortened?',
        options: ['Follicular phase', 'Luteal phase', 'Menstrual phase', 'Secretory phase'],
        answerIndex: 0,
        explanation:
          'The luteal phase is fixed at ~14 days. A 24-day cycle therefore implies a ~10-day follicular phase. Luteal shortening is a separate progesterone-defect diagnosis.',
      },
      {
        id: 'ug-menstrual-q2',
        stem: 'Aromatase activity in the ovarian follicle is primarily induced by which hormone?',
        options: ['LH', 'FSH', 'Prolactin', 'Progesterone'],
        answerIndex: 1,
        explanation:
          'FSH drives granulosa-cell aromatase, converting theca-derived androgens into oestradiol. LH acts on theca cells to produce androstenedione.',
      },
      {
        id: 'ug-menstrual-q3',
        stem: 'Which change is detectable immediately before follicular rupture?',
        options: ['A fall in LH', 'A rise in progesterone', 'A fall in FSH', 'Endometrial shedding'],
        answerIndex: 1,
        explanation:
          'Progesterone begins to rise just before rupture as granulosa cells luteinise. It is the earliest measurable sign that the luteal switch has begun.',
      },
    ],
  },

  /* ====================================================================== */
  /* UG — 2. Gametogenesis & Fertilization                             */
  /* ====================================================================== */
  {
    id: 'ug-gametogenesis',
    track: 'NEET_UG',
    title: 'Gametogenesis & Fertilization',
    shortTitle: 'Gametogenesis',
    summary:
      'Oocyte arrest points, spermatogenesis, capacitation and the fertilisation cascade through morula, blastocyst and the implantation window.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 16,
    tags: ['Oogenesis', 'Fertilisation', 'Implantation'],
    sourceTag: 'NCERT XII • Human Reproduction',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'oogenesis',
        heading: 'Oogenesis: three arrests, one timeline',
        flow: [
          'Prenatal · primordial germ cells → oogonia → primary oocyte',
          'Prophase I (diplotene) arrest · present at birth (1–2 million)',
          'Puberty · one oocyte resumes meiosis I each cycle',
          'Metaphase II arrest · secondary oocyte + first polar body',
          'Fertilisation · sperm entry completes meiosis II',
        ],
        bullets: [
          'The primary oocyte is arrested in prophase I; the secondary oocyte is arrested in metaphase II.',
          'Meiosis II completes only after sperm penetration — the secondary oocyte is the fertilisable cell.',
          'Atresia is continuous from birth; the oocyte pool never renews.',
        ],
        table: {
          head: ['Feature', 'Oogenesis', 'Spermatogenesis'],
          rows: [
            ['Starts', 'Prenatal', 'Puberty (continuous)'],
            ['Arrest points', 'Prophase I; metaphase II', 'None'],
            ['Duration', 'Years (arrested)', '~64–74 days per cycle'],
            ['Products per meiosis', '1 ovum + polar bodies', '4 spermatozoa'],
            ['Site', 'Ovary', 'Seminiferous tubules'],
          ],
        },
        pearls: [
          'Primary oocyte = prophase I (diplotene); secondary oocyte = metaphase II. Both are classic one-line exam answers.',
        ],
      },
      {
        id: 'fertilisation',
        heading: 'Fertilisation: five steps that decide the MCQ',
        flow: [
          'Capacitation (≈6 h) · remove glycoprotein coat, acquire hypermotility',
          'Acrosome reaction · ZP3 binding, enzyme release',
          'Cortical reaction · zona pellucida hardening (polyspermy block)',
          'Syngamy · pronuclei fuse → zygote',
          'Cleavage · morula D3–4 → blastocyst D5 → implantation D6–7',
        ],
        bullets: [
          'Capacitation happens in the female tract; the acrosome reaction happens at the zona pellucida.',
          'The cortical reaction is the definitive, immediate polyspermy block; the zona reaction is its structural consequence.',
          'The blastocyst hatches from the zona pellucida before implantation; the trophoblast is the invasive front.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Capacitation is often confused with the acrosome reaction. Capacitation precedes binding; the acrosome reaction follows ZP3 binding at the zona.',
        },
        pearls: [
          'hCG is secreted by the syncytiotrophoblast — it rescues the corpus luteum, it does not come from the maternal pituitary.',
        ],
      },
      {
        id: 'implantation',
        heading: 'Implantation and the first week',
        bullets: [
          'Apposition → adhesion → invasion; the decidual reaction protects and feeds the conceptus.',
          'The implantation window is ~6–7 days after ovulation (cycle day 19–21).',
          'The trophoblast differentiates into cytotrophoblast and syncytiotrophoblast; the syncytium produces hCG.',
          'Ectopic implantation most commonly occurs in the ampullary segment of the tube.',
        ],
        pearls: [
          'Implantation occurs ~6–7 days after ovulation; the morula reaches the cavity on day 4 and the blastocyst hatches on day 5.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'ug-gametogenesis-f1',
        front: 'At which stage is the primary oocyte arrested?',
        back: 'Prophase I of meiosis (diplotene stage) — from before birth until ovulation.',
      },
      {
        id: 'ug-gametogenesis-f2',
        front: 'What completes meiosis II?',
        back: 'Sperm entry during fertilisation — the secondary oocyte is arrested at metaphase II until then.',
      },
      {
        id: 'ug-gametogenesis-f3',
        front: 'Which reaction is the definitive polyspermy block?',
        back: 'The cortical reaction: granules release enzymes that harden the zona pellucida immediately after sperm fusion.',
      },
      {
        id: 'ug-gametogenesis-f4',
        front: 'Give the day-by-day first-week timeline.',
        back: 'Morula D3–4 → blastocyst D5 → hatching → implantation D6–7.',
      },
    ],
    mcqs: [
      {
        id: 'ug-gametogenesis-q1',
        stem: 'A secondary oocyte released at ovulation is arrested at which stage?',
        options: ['Prophase I (diplotene)', 'Metaphase I', 'Metaphase II', 'Telophase II'],
        answerIndex: 2,
        explanation:
          'Ovulation releases the secondary oocyte arrested at metaphase II. Meiosis II completes only when a sperm penetrates.',
      },
      {
        id: 'ug-gametogenesis-q2',
        stem: 'The acrosome reaction is triggered by binding to which structure?',
        options: ['Zona pellucida (ZP3)', 'Corona radiata', 'Endometrial epithelium', 'Cumulus oophorus'],
        answerIndex: 0,
        explanation:
          'ZP3 binding triggers the acrosome reaction. The corona radiata is penetrated earlier by hypermotile, capacitated sperm.',
      },
      {
        id: 'ug-gametogenesis-q3',
        stem: 'Human chorionic gonadotropin in early pregnancy is secreted by which cells?',
        options: ['Maternal pituitary gonadotrophs', 'Cytotrophoblast', 'Syncytiotrophoblast', 'Decidual cells'],
        answerIndex: 2,
        explanation:
          'The syncytiotrophoblast secretes hCG, which maintains the corpus luteum until the placenta takes over progesterone production.',
      },
    ],
  },

  /* ====================================================================== */
  /* UG — 3. Placental Development & Functions                          */
  /* ====================================================================== */
  {
    id: 'ug-placenta',
    track: 'NEET_UG',
    title: 'Placental Development & Functions',
    shortTitle: 'Placenta',
    summary:
      'Trophoblast invasion, spiral-artery remodelling, the histiotrophic-to-haemotrophic switch, placental hormones and barrier function.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 15,
    tags: ['Placentation', 'hCG', 'Spiral arteries'],
    sourceTag: 'NCERT XII • Placenta',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'development',
        heading: 'From trophoblast to placenta',
        flow: [
          'Blastocyst implantation · cytotrophoblast + syncytiotrophoblast',
          'Lacunar stage · maternal blood enters the intervillous space',
          'Villous remodelling · spiral artery invasion deepens',
          'Histiotrophic → haemotrophic nutrition at ~10 weeks',
          'Spiral-artery remodelling complete ~20–22 weeks',
        ],
        bullets: [
          'Hormonal support is corpus-luteal until 8–10 weeks; the placenta takes over progesterone production after that.',
          'The trophoblast invades maternal spiral arteries to create a low-resistance circulation — failure of this step is the preeclampsia/FGR pathway.',
          'The placental membrane thins progressively, increasing transfer capacity toward term.',
        ],
        pearls: [
          'hCG peaks at 8–10 weeks; the fall after 10 weeks is normal and reflects the placental hand-over.',
          'Spiral-artery remodelling completes near 20–22 weeks — the anatomical window that sets preeclampsia risk.',
        ],
      },
      {
        id: 'hormones',
        heading: 'Placental hormones and their read-outs',
        table: {
          head: ['Hormone', 'Source', 'Core action / exam link'],
          rows: [
            ['hCG', 'Syncytiotrophoblast', 'Rescues corpus luteum; peaks 8–10 weeks; marker of trophoblastic disease'],
            ['hPL', 'Syncytiotrophoblast', 'Maternal insulin resistance, lipolysis; gestational diabetes physiology'],
            ['Progesterone', 'Placenta (after 8–10 wk)', 'Maintains decidua, quietens myometrium'],
            ['Oestriol', 'Placental–fetal unit', 'Fetal adrenal/ liver contribution; rises with gestation'],
            ['Relaxin', 'Corpus luteum / placenta', 'Pelvic remodelling, cervical ripening'],
          ],
        },
        bullets: [
          'hCG, hPL and progesterone are the three hormones most often tested in placental physiology.',
          'The fetal adrenal zone supplies DHEA-S, the substrate for placental oestrogen — hence oestriol reflects fetal wellbeing.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Progesterone does not come from the placenta from day one. Until 8–10 weeks it is corpus-luteal; only then does the placenta take over.',
        },
      },
      {
        id: 'functions',
        heading: 'Functions, barrier and clinical hooks',
        bullets: [
          'Exchange: gases, nutrients, waste — driven by maternal–fetal gradients, not active transport for oxygen.',
          'Barrier: IgG crosses by active transport; IgM does not. Most drugs cross by simple diffusion.',
          'Endocrine: hCG, hPL, progesterone, oestrogen, relaxin.',
          'Immunology: the trophoblast avoids rejection without classical MHC expression; the decidua contributes regulatory T cells.',
          'Twin placentation: monochorionic twins share a placenta and carry the TTTS risk; dichorionic twins do not.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'IgG crosses the placenta (passive immunity); IgM is too large. A stem offering IgM as the transferred antibody is a classic negative.',
        },
        pearls: [
          'The placenta is a three-layered barrier (syncytiotrophoblast, cytotrophoblast, fetal endothelium) — each layer thins toward term.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'ug-placenta-f1',
        front: 'When does haemotrophic nutrition begin?',
        back: '~10 weeks, when maternal blood fully perfuses the intervillous space. Before that, nutrition is histiotrophic (glandular).',
      },
      {
        id: 'ug-placenta-f2',
        front: 'Which immunoglobulin crosses the placenta, and which does not?',
        back: 'IgG crosses by active transport; IgM does not. This is why neonates are protected against IgG-opsonised pathogens only.',
      },
      {
        id: 'ug-placenta-f3',
        front: 'When does hCG peak?',
        back: '8–10 weeks. Falling levels after that are physiological, not a sign of failing pregnancy.',
      },
      {
        id: 'ug-placenta-f4',
        front: 'When does spiral-artery remodelling finish?',
        back: '~20–22 weeks. Incomplete remodelling is the anatomical substrate of preeclampsia and FGR.',
      },
    ],
    mcqs: [
      {
        id: 'ug-placenta-q1',
        stem: 'Placental progesterone production becomes the dominant source at which gestation?',
        options: ['4–6 weeks', '8–10 weeks', '14–16 weeks', '20–22 weeks'],
        answerIndex: 1,
        explanation:
          'The corpus luteum supports progesterone until 8–10 weeks; the placenta then takes over. This is the physiological basis of luteal support in early ART pregnancies.',
      },
      {
        id: 'ug-placenta-q2',
        stem: 'Which immunoglobulin does NOT cross the placental barrier?',
        options: ['IgG', 'IgA', 'IgM', 'IgE'],
        answerIndex: 2,
        explanation:
          'IgM is a pentamer and does not cross. IgG crosses by active transport; IgA and IgE are not transferred in meaningful amounts.',
      },
      {
        id: 'ug-placenta-q3',
        stem: 'Spiral-artery remodelling is normally complete by which gestational window?',
        options: ['6–8 weeks', '10–12 weeks', '20–22 weeks', '32–34 weeks'],
        answerIndex: 2,
        explanation:
          'Remodelling is largely complete by 20–22 weeks. Failure of trophoblast invasion leaves high-resistance vessels and predisposes to preeclampsia/FGR.',
      },
    ],
  },

  /* ====================================================================== */
  /* UG — 4. Lactation, Parturition & Contraception                    */
  /* ====================================================================== */
  {
    id: 'ug-lactation-parturition',
    track: 'NEET_UG',
    title: 'Lactation, Parturition & Contraception',
    shortTitle: 'Lactation & Labour',
    summary:
      'Lactogenesis and the milk-ejection reflex, the onset of labour and Ferguson reflex, and the mechanism-first contraception ladder.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 17,
    tags: ['Lactation', 'Parturition', 'Contraception'],
    sourceTag: 'NCERT XII • Reproductive Health',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'lactation',
        heading: 'Lactation: two hormones, two jobs',
        bullets: [
          'Prolactin (anterior pituitary) drives milk synthesis; dopamine is the prolactin-inhibiting factor.',
          'Oxytocin (posterior pituitary) drives milk ejection by contracting myoepithelial cells — the let-down reflex.',
          'Lactogenesis I begins mid-pregnancy; lactogenesis II (copious milk) follows progesterone withdrawal at delivery.',
          'Suckling sustains prolactin and oxytocin; stress and dopamine agonists suppress lactation.',
        ],
        table: {
          head: ['Reflex', 'Afferent', 'Efferent', 'Effect'],
          rows: [
            ['Milk ejection (let-down)', 'Nipple/areola mechanoreceptors', 'Oxytocin → myoepithelial cells', 'Milk expressed into ducts'],
            ['Prolactin surge', 'Suckling', 'Prolactin → alveolar cells', 'Milk synthesis'],
            ['Lactational amenorrhoea', 'Suckling', '↓ GnRH → ↓ FSH/LH', 'Anovulation'],
          ],
        },
        pearls: [
          'Prolactin makes milk; oxytocin ejects it. Both are released in response to suckling, but only oxytocin acts on myoepithelial cells.',
        ],
      },
      {
        id: 'parturition',
        heading: 'Parturition: the switch to labour',
        flow: [
          'Fetal HPA → CRH surge → placental oestrogen ↑',
          'Progesterone withdrawal + oxytocin receptor up-regulation',
          'Cervical stretch → Ferguson reflex (oxytocin positive feedback)',
          'Effacement → dilatation → expulsion → placental delivery',
        ],
        bullets: [
          'Labour onset is an inflammatory switch: prostaglandins, cytokines and oxytocin receptors rise together.',
          'First stage: latent (0–5 cm) then active (≥5 cm, faster). Second stage: full dilatation to birth. Third stage: placental separation and expulsion.',
          'The Ferguson reflex is a positive-feedback loop — the only one in obstetric physiology tested this way.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Progesterone withdrawal initiates labour, but oestrogen rises first. A stem that says “progesterone rises to start labour” is reversed.',
        },
        pearls: [
          'Ferguson reflex = cervical/uterine stretch → oxytocin → stronger contractions → more stretch (positive feedback).',
        ],
      },
      {
        id: 'contraception',
        heading: 'Contraception: mechanism before brand names',
        table: {
          head: ['Method', 'Primary mechanism', 'Exam pearl'],
          rows: [
            ['Combined OCP', 'Ovulation suppression + cervical mucus', 'Efficacy depends on adherence; VTE risk rises with smoking/age'],
            ['Progestogen-only pill', 'Cervical mucus, endometrial atrophy', 'Taken daily at the same time; ovulation may persist'],
            ['Copper IUD', 'Spermicidal copper, inflammatory endometrium', 'Emergency contraception up to 5 days; heavier periods'],
            ['LNG-IUS', 'Endometrial atrophy + cervical mucus', 'Reduces menstrual bleeding; also treats AUB'],
            ['Barrier (condom)', 'Physical barrier', 'Only method that reduces STI transmission'],
            ['Emergency pill', 'Delays ovulation (LNG) / anti-gonadotropic (UPA)', 'Ineffective after implantation; earlier is better'],
          ],
        },
        bullets: [
          'LAM requires all three: exclusive breastfeeding, amenorrhoea and <6 months postpartum.',
          'Tubal ligation and vasectomy are permanent; vasectomy is not immediately effective (needs follow-up semen analysis).',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Combined pills suppress ovulation via negative feedback on GnRH/FSH/LH. A stem that describes them as “killing sperm” is wrong.',
        },
        pearls: [
          'LAM = exclusive breastfeeding + amenorrhoea + <6 months postpartum — all three, or it is not reliable.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'ug-lactation-f1',
        front: 'What is the prolactin-inhibiting factor?',
        back: 'Dopamine from the arcuate nucleus. Dopamine agonists suppress prolactin; antagonists (e.g. metoclopramide) raise it.',
      },
      {
        id: 'ug-lactation-f2',
        front: 'Which hormone ejects milk, and on which cells does it act?',
        back: 'Oxytocin, acting on myoepithelial cells around the alveoli — the let-down reflex.',
      },
      {
        id: 'ug-lactation-f3',
        front: 'State the three LAM criteria.',
        back: 'Exclusive breastfeeding, amenorrhoea, and less than 6 months postpartum — all three must hold.',
      },
      {
        id: 'ug-lactation-f4',
        front: 'What is the Ferguson reflex?',
        back: 'Cervical/uterine stretch → oxytocin release → stronger contractions → further stretch: a positive-feedback loop.',
      },
    ],
    mcqs: [
      {
        id: 'ug-lactation-q1',
        stem: 'The Ferguson reflex is best described as which type of feedback?',
        options: ['Negative feedback on oxytocin', 'Positive feedback on oxytocin', 'Negative feedback on prolactin', 'Positive feedback on progesterone'],
        answerIndex: 1,
        explanation:
          'Uterine/cervical stretch triggers oxytocin release, which intensifies contractions and further stretch — a positive-feedback loop.',
      },
      {
        id: 'ug-lactation-q2',
        stem: 'Oxytocin causes milk ejection by acting on which cells?',
        options: ['Alveolar secretory cells', 'Myoepithelial cells', 'Ductal epithelial cells', 'Pituitary lactotrophs'],
        answerIndex: 1,
        explanation:
          'Oxytocin contracts myoepithelial cells surrounding the alveoli, forcing milk into the ducts. Prolactin drives synthesis in alveolar cells.',
      },
      {
        id: 'ug-lactation-q3',
        stem: 'Which statement about combined oral contraceptives is correct?',
        options: [
          'They primarily act by killing sperm in the vagina',
          'They suppress ovulation through negative feedback on the hypothalamic–pituitary axis',
          'They are the only method that protects against STIs',
          'They are immediately effective after the first pill',
        ],
        answerIndex: 1,
        explanation:
          'Combined pills suppress ovulation via negative feedback, with added cervical-mucus and endometrial effects. Only barrier methods protect against STIs.',
      },
    ],
  },

  /* ====================================================================== */
  /* PG — 1. TORCH Infections                                        */
  /* Source: Chapter 20 · Pavika Lal, Renu Gupta, Prativa Verma             */
  /* ====================================================================== */
  TORCH_INFECTIONS_MODULE,

  /* ====================================================================== */
  /* PG — 2. Fetal Growth Restriction (SOGC No. 442)                  */
  /* Source: SOGC CPG No. 442 · J Obstet Gynaecol Can 2023;45(10):102154    */
  /* ====================================================================== */
  FGR_GUIDELINE_442_MODULE,

  /* ====================================================================== */
  /* PG — 3. Placenta Praevia & Placenta Accreta Spectrum             */
  /* Source: RCOG Green-top Guideline No. 27a · FIGO PAS Consensus          */
  /* ====================================================================== */
  PLACENTA_PRAEVIA_PAS_MODULE,
] as const;

export const modulesForTrack = (track: TrackId): readonly StudioModule[] =>
  STUDIO_MODULES.filter((module) => module.track === track);

export const findStudioModule = (id: string | null | undefined): StudioModule | null =>
  (id ? STUDIO_MODULES.find((module) => module.id === id) ?? null : null);

export const studioModuleKey = (moduleId: string, itemId: string): string => `${moduleId}:${itemId}`;
