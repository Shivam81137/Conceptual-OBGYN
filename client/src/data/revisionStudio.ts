import type { TrackId } from '@/types/tracks';

/**
 * Revision Studio curated corpus.
 * ---------------------------------------------------------------------------
 * Nine high-yield modules (4 UG + 5 PG) powering the workspace panes. The
 * content is intentionally offline-first: notes, comparison tables, examiner
 * traps, simulators, flashcards and MCQ drills ship in the bundle, and the
 * API only reconciles the module index (`/tracks/:track/modules`).
 */

export type StudioTabId = 'notes' | 'simulator' | 'flashcards';
export type FlashcardRating = 'again' | 'good' | 'easy';

export interface StudioNoteTable {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}

export interface StudioNoteSection {
  id: string;
  heading: string;
  intro?: string;
  bullets?: readonly string[];
  flow?: readonly string[];
  table?: StudioNoteTable;
  /** Golden rules rendered with a "Save Pearl to ⌘K" action. */
  pearls?: readonly string[];
  trap?: { title: string; body: string };
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
    label: 'NEET UG',
    title: 'NEET UG Revision Studio',
    eyebrow: 'REVISION STUDIO · NEET UG',
    subtitle: 'NCERT physiology and embryology, redrawn as causal chains you can reproduce under exam pressure.',
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
    label: 'NEET PG & INI-CET',
    title: 'NEET PG Clinical Vault',
    eyebrow: 'CLINICAL VAULT · NEET PG / INI-CET',
    subtitle: 'Bedside algorithms, staging and emergency protocols — rehearsed as decisions, not paragraphs.',
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
  /* NEET UG — 1. Menstrual Cycle & Hormonal Axis                           */
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
  /* NEET UG — 2. Gametogenesis & Fertilization                             */
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
  /* NEET UG — 3. Placental Development & Functions                          */
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
  /* NEET UG — 4. Lactation, Parturition & Contraception                    */
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
  /* NEET PG — 1. Partograph & Labor Mechanics                              */
  /* ====================================================================== */
  {
    id: 'pg-partograph',
    track: 'NEET_PG',
    title: 'Intrapartum Partograph & Labor Mechanics',
    shortTitle: 'Partograph',
    summary:
      'Alert and action lines, active-phase arrest, the seven cardinal movements, and the Bishop score as the gateway to induction.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 22,
    tags: ['Partograph', 'Labour', 'Bishop score'],
    sourceTag: 'WHO Partograph • Williams Obstetrics 26e',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'reading',
        heading: 'Reading the partograph',
        flow: [
          'Confirm active labour · ≥4 cm + regular contractions',
          'Plot dilation, descent, contractions and FHR every 30 min–4 h',
          'Alert line · 1 cm/h from 4 cm',
          'Action line · alert line + 4 h',
          'Cross action line · decision: augment or caesarean',
        ],
        bullets: [
          'The alert line marks expected progress; crossing it mandates reassessment and possible transfer.',
          'The action line sits 4 h to the right; crossing it is a decision point, not another observation.',
          'Active-phase arrest: no cervical change for ≥4 h despite adequate contractions (or <1 cm/h over 4 h).',
          'Descent, caput and moulding matter as much as dilation — a high head with caput at full dilatation signals obstruction.',
        ],
        table: {
          head: ['Line', 'Definition', 'Clinical response'],
          rows: [
            ['Alert line', '1 cm/h from 4 cm', 'Reassess: hydration, bladder, position, contractions'],
            ['Action line', 'Alert line + 4 h', 'Augment if no CPD; LSCS if obstruction/fetal compromise'],
          ],
        },
        pearls: [
          'After 4 cm, expect ≥1 cm/h. A flat curve for 4 h is active-phase arrest until proven otherwise.',
          'The action line is exactly 4 h to the right of the alert line — the most commonly reversed fact in MCQs.',
        ],
      },
      {
        id: 'mechanics',
        heading: 'The cardinal movements of labour',
        flow: [
          'Engagement · head enters the pelvic inlet',
          'Descent · continuous through labour',
          'Flexion · chin to chest, smallest diameter presenting',
          'Internal rotation · occiput rotates to the symphysis',
          'Extension · head delivers under the pubic arch',
          'Restitution · head untwists',
          'External rotation · shoulders rotate into the anteroposterior diameter',
          'Expulsion · shoulders and trunk deliver',
        ],
        bullets: [
          'Flexion converts the occipitofrontal diameter (~11.5 cm) to the suboccipitobregmatic (~9.5 cm).',
          'Internal rotation occurs at the pelvic floor; failure of rotation = persistent occipitotransverse position.',
          'Station 0 is at the ischial spines; engagement is when the biparietal diameter passes the inlet (usually station 0).',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Engagement and station 0 are related but not identical. A floating head at −2 is not engaged even if the cervix is 4 cm.',
        },
      },
      {
        id: 'bishop',
        heading: 'Bishop score: the induction gateway',
        table: {
          head: ['Component', '0', '1', '2', '3'],
          rows: [
            ['Dilatation (cm)', '0', '1–2', '3–4', '≥5'],
            ['Effacement (%)', '0–30', '40–50', '60–70', '≥80'],
            ['Station', '−3', '−2', '−1 / 0', '+1 / +2'],
            ['Consistency', 'Firm', 'Medium', 'Soft', '—'],
            ['Position', 'Posterior', 'Mid', 'Anterior', '—'],
          ],
        },
        bullets: [
          'Score ≥8: favourable cervix — amniotomy + oxytocin is reasonable.',
          'Score 6–7: intermediate — individualise; consider ripening if induction is needed.',
          'Score ≤5: unfavourable — cervical ripening (misoprostol, dinoprostone or balloon) before oxytocin.',
        ],
        pearls: [
          'Bishop ≥8 = favourable → amniotomy + oxytocin. Bishop ≤5 = unfavourable → ripen first.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'pg-partograph-f1',
        front: 'Where is the action line on the partograph?',
        back: 'Four hours to the right of the alert line (the alert line is 1 cm/h from 4 cm).',
      },
      {
        id: 'pg-partograph-f2',
        front: 'Define active-phase arrest.',
        back: 'No cervical dilatation for ≥4 h despite adequate contractions (or <1 cm/h over 4 h) in the active phase.',
      },
      {
        id: 'pg-partograph-f3',
        front: 'List the five Bishop score components.',
        back: 'Dilatation, effacement, station, consistency and position. Score ≥8 is favourable.',
      },
      {
        id: 'pg-partograph-f4',
        front: 'Which cardinal movement converts the presenting diameter to the smallest?',
        back: 'Flexion — converts the occipitofrontal (~11.5 cm) to the suboccipitobregmatic (~9.5 cm).',
      },
    ],
    mcqs: [
      {
        id: 'pg-partograph-q1',
        stem: 'On a WHO partograph, the action line is drawn how far to the right of the alert line?',
        options: ['1 hour', '2 hours', '4 hours', '6 hours'],
        answerIndex: 2,
        explanation:
          'The action line is 4 h to the right of the alert line. Alert = reassess; action = decision (augment or caesarean).',
      },
      {
        id: 'pg-partograph-q2',
        stem: 'A Bishop score of 9 indicates which clinical conclusion?',
        options: ['Unfavourable cervix — ripen first', 'Favourable cervix — induction can proceed', 'Cervical incompetence', 'Obstructed labour'],
        answerIndex: 1,
        explanation:
          'A score ≥8 is favourable. Amniotomy plus oxytocin is appropriate; a score ≤5 would require cervical ripening first.',
      },
      {
        id: 'pg-partograph-q3',
        stem: 'A primigravida at 6 cm has shown no cervical change for 4 hours with adequate contractions. What is the diagnosis?',
        options: ['Prolonged latent phase', 'Active-phase arrest', 'Normal active phase', 'Second-stage arrest'],
        answerIndex: 1,
        explanation:
          'Active-phase arrest is no cervical change for ≥4 h with adequate contractions. Evaluate for CPD, malposition and obstruction before augmentation.',
      },
    ],
  },

  /* ====================================================================== */
  /* NEET PG — 2. Antepartum Hemorrhage                                    */
  /* ====================================================================== */
  {
    id: 'pg-aph',
    track: 'NEET_PG',
    title: 'Antepartum Hemorrhage (Previa vs Abruptio)',
    shortTitle: 'APH: Previa vs Abruptio',
    summary:
      'The pain–tone–fetal-status triad, ultrasound-first diagnosis, resuscitation, steroid timing, and the previa-versus-abruption management split.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 20,
    tags: ['Placenta previa', 'Abruption', 'Obstetric emergency'],
    sourceTag: 'Williams Obstetrics 26e • RCOG Green-top',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'definitions',
        heading: 'Definitions and the first ten minutes',
        bullets: [
          'APH is bleeding from the genital tract after 20–24 weeks and before birth. Previa and abruption account for most cases.',
          'Resuscitate first: two large-bore IV lines, cross-match, crystalloid, blood products early in abruption.',
          'Digital vaginal examination is contraindicated until placenta previa is excluded.',
          'Ultrasound is the first-line localising test; transvaginal ultrasound is safe and more accurate than transabdominal.',
        ],
        table: {
          head: ['Feature', 'Placenta previa', 'Abruptio placentae'],
          rows: [
            ['Bleeding', 'Painless, bright red, recurrent', 'Painful, dark, often concealed'],
            ['Uterus', 'Soft, relaxed', 'Tense, woody, tender'],
            ['Fetal heart', 'Usually normal until maternal shock', 'Often distressed or absent'],
            ['Imaging', 'TVUS localises placenta', 'Ultrasound insensitive; retroplacental clot'],
            ['Complications', 'PPH, placenta accreta spectrum', 'DIC, Couvelaire uterus, fetal death, PPH'],
            ['Delivery', 'Caesarean for complete/major previa', 'Vaginal if mild and stable; CS for fetal distress'],
          ],
        },
        pearls: [
          'Previa: painless, causeless, recurrent bright-red bleeding with a soft uterus.',
          'Abruption: painful bleeding with a tense/woody uterus, fetal distress and DIC risk.',
        ],
      },
      {
        id: 'management',
        heading: 'Management pathway',
        flow: [
          'Resuscitate · IV access, blood, coagulation screen',
          'Localise the placenta · TVUS (no digital exam)',
          'Stabilise · steroids 24–34 weeks, tocolysis only if stable',
          'Decide delivery · maternal/fetal status + gestation',
          'Previa · CS for major previa; abruption · vaginal if mild/stable',
        ],
        bullets: [
          'Give antenatal corticosteroids between 24 and 34 weeks when delivery may occur within 7 days.',
          'Tocolysis is contraindicated in active bleeding, abruption with fetal compromise, or severe preeclampsia.',
          'In previa, the risk of placenta accreta rises with prior caesareans — screen with ultrasound/MRI and plan a specialist team.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'A “painless bleed with a soft uterus” still needs a speculum avoided and a TVUS. Digital examination can provoke catastrophic bleeding in previa.',
        },
        pearls: [
          'Never perform a digital vaginal examination in suspected placenta previa until ultrasound excludes it.',
        ],
      },
      {
        id: 'complications',
        heading: 'Complications to name in the answer',
        bullets: [
          'Abruption: DIC (thromboplastin release), Couvelaire uterus, acute kidney injury, PPH, fetal death.',
          'Previa: antepartum and postpartum haemorrhage, placenta accreta spectrum, preterm delivery, malpresentation.',
          'Both: maternal shock, fetal hypoxia, need for blood transfusion and preterm delivery.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'A Couvelaire uterus is a finding at caesarean, not a cause of bleeding. It does not by itself mandate hysterectomy.',
        },
        pearls: [
          'Abruption is a consumptive coagulopathy until proven otherwise — check platelets, PT/INR, fibrinogen and transfuse early.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'pg-aph-f1',
        front: 'What is the first-line imaging for placenta previa?',
        back: 'Transvaginal ultrasound — safe and more accurate than transabdominal scanning. Avoid digital vaginal examination until previa is excluded.',
      },
      {
        id: 'pg-aph-f2',
        front: 'What is a Couvelaire uterus?',
        back: 'Blood extravasation into the myometrium in abruption, producing a bluish, woody uterus. It is a sign, not an indication for hysterectomy by itself.',
      },
      {
        id: 'pg-aph-f3',
        front: 'Which APH cause is associated with DIC?',
        back: 'Abruptio placentae — thromboplastin release activates coagulation and can cause consumptive coagulopathy.',
      },
      {
        id: 'pg-aph-f4',
        front: 'When is tocolysis contraindicated in APH?',
        back: 'Active bleeding, abruption with fetal compromise, or severe preeclampsia — stabilise and deliver instead.',
      },
    ],
    mcqs: [
      {
        id: 'pg-aph-q1',
        stem: 'A 32-week gravida presents with painless bright-red bleeding and a soft, non-tender uterus. What is the most likely diagnosis?',
        options: ['Placenta previa', 'Abruptio placentae', 'Uterine rupture', 'Cervical ectropion'],
        answerIndex: 0,
        explanation:
          'Painless, recurrent bright-red bleeding with a soft uterus is the classic previa signature. Abruption is painful with a tense uterus.',
      },
      {
        id: 'pg-aph-q2',
        stem: 'Which examination must be avoided until placenta previa is excluded?',
        options: ['Abdominal palpation', 'Digital vaginal examination', 'Transvaginal ultrasound', 'Speculum inspection under anaesthesia'],
        answerIndex: 1,
        explanation:
          'Digital examination can provoke catastrophic bleeding in previa. TVUS is safe and is the imaging test of choice.',
      },
      {
        id: 'pg-aph-q3',
        stem: 'Which complication is most characteristic of abruptio placentae?',
        options: ['Placenta accreta spectrum', 'Disseminated intravascular coagulation', 'Vasa previa', 'Cord prolapse'],
        answerIndex: 1,
        explanation:
          'Abruption releases thromboplastin and can trigger DIC. Accreta spectrum follows previa with prior caesareans; vasa previa is a fetal vessel abnormality.',
      },
    ],
  },

  /* ====================================================================== */
  /* NEET PG — 3. Preeclampsia & MgSO4                                     */
  /* ====================================================================== */
  {
    id: 'pg-preeclampsia',
    track: 'NEET_PG',
    title: 'Hypertensive Disorders (Preeclampsia & MgSO4)',
    shortTitle: 'Preeclampsia & MgSO4',
    summary:
      'Diagnostic thresholds, severe features, HELLP, the Pritchard and Zuspan magnesium regimens, toxicity monitoring and delivery timing.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 21,
    tags: ['Preeclampsia', 'MgSO4', 'HELLP'],
    sourceTag: 'Williams Obstetrics 26e • ACOG 2022',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'diagnosis',
        heading: 'Diagnosis and severe features',
        bullets: [
          'Preeclampsia: BP ≥140/90 on two occasions ≥4 h apart after 20 weeks, plus proteinuria ≥300 mg/24 h or end-organ dysfunction.',
          'Severe features: BP ≥160/110, platelets <100,000, transaminases >2× normal, creatinine >1.1 mg/dL, pulmonary oedema, new cerebral/visual symptoms.',
          'HELLP: haemolysis, elevated liver enzymes, low platelets — a variant with high maternal morbidity.',
          'Eclampsia: new-onset generalised seizures in preeclampsia without another cause.',
        ],
        table: {
          head: ['Severity', 'Blood pressure', 'Proteinuria / organ involvement', 'MgSO4'],
          rows: [
            ['Without severe features', '≥140/90', '≥300 mg/24 h or organ dysfunction', 'Not routinely'],
            ['With severe features', '≥160/110', 'Platelets <100k, AST/ALT >2×, creatinine ↑, symptoms', 'Yes — prophylaxis'],
            ['Eclampsia', 'Variable', 'Seizures', 'Yes — treatment + prophylaxis'],
          ],
        },
        pearls: [
          'Preeclampsia is diagnosed after 20 weeks; before 20 weeks, think molar pregnancy or chronic hypertension.',
        ],
      },
      {
        id: 'magnesium',
        heading: 'MgSO4: load, maintain, monitor, rescue',
        flow: [
          'Load · 4 g IV over 10–20 min (Zuspan) or 4 g IV + 10 g IM (Pritchard)',
          'Maintain · 1 g/h IV (Zuspan) or 5 g IM every 4 h (Pritchard)',
          'Recurrent seizure · 2 g IV bolus',
          'Monitor · deep tendon reflexes, respiratory rate, urine output',
          'Toxicity · stop infusion + calcium gluconate 1 g IV',
        ],
        table: {
          head: ['Regimen', 'Loading', 'Maintenance'],
          rows: [
            ['Zuspan', '4 g IV over 10–20 min', '1 g/h IV infusion'],
            ['Pritchard', '4 g IV + 10 g IM (5 g each buttock)', '5 g IM every 4 h'],
          ],
        },
        bullets: [
          'MgSO4 prevents and treats seizures; it does not lower blood pressure.',
          'Antihypertensives: labetalol, hydralazine or nifedipine — titrate to <160/110.',
          'Monitor urine output (>30 mL/h), reflexes and respiratory rate (>12/min).',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'Loss of deep tendon reflexes is the earliest clinical sign of magnesium toxicity — not respiratory depression, which comes later.',
        },
        pearls: [
          'Loading 4 g + 1 g/h; recurrence 2 g bolus; antidote calcium gluconate 1 g IV.',
          'Definitive treatment is delivery — timing depends on gestation and severity.',
        ],
      },
      {
        id: 'delivery',
        heading: 'Timing of delivery and postpartum care',
        bullets: [
          '≥37 weeks: deliver. 34–36+6 weeks with severe features: deliver. <34 weeks: stabilise, steroids, and deliver if maternal/fetal deterioration.',
          'Do not use diuretics for hypertension; fluid restriction is reserved for pulmonary oedema.',
          'Preeclampsia can worsen postpartum — continue monitoring for at least 48–72 h and counsel about recurrence.',
          'Low-dose aspirin (75–150 mg) from 12–16 weeks reduces recurrence in high-risk women.',
        ],
        pearls: [
          'Delivery is the only cure. Magnesium is prophylaxis, antihypertensives are supportive, and steroids buy fetal time.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'pg-preeclampsia-f1',
        front: 'What three parameters are monitored during MgSO4 infusion?',
        back: 'Deep tendon reflexes, respiratory rate and hourly urine output — plus serum magnesium if available.',
      },
      {
        id: 'pg-preeclampsia-f2',
        front: 'What is the antidote for magnesium toxicity?',
        back: 'Calcium gluconate 1 g IV (10% solution), given slowly with cardiac monitoring.',
      },
      {
        id: 'pg-preeclampsia-f3',
        front: 'Define severe hypertension in preeclampsia.',
        back: 'BP ≥160/110 mmHg on two occasions — requires treatment with labetalol, hydralazine or nifedipine.',
      },
      {
        id: 'pg-preeclampsia-f4',
        front: 'What does HELLP stand for?',
        back: 'Haemolysis, Elevated Liver enzymes, Low Platelets — a severe variant of preeclampsia.',
      },
    ],
    mcqs: [
      {
        id: 'pg-preeclampsia-q1',
        stem: 'Which is the earliest clinical sign of magnesium toxicity?',
        options: ['Respiratory depression', 'Loss of deep tendon reflexes', 'Cardiac arrest', 'Oliguria'],
        answerIndex: 1,
        explanation:
          'Reflexes disappear before respiratory depression. Monitor reflexes hourly; stop the infusion and give calcium gluconate if they are lost.',
      },
      {
        id: 'pg-preeclampsia-q2',
        stem: 'A woman with eclampsia has a recurrent seizure during MgSO4 infusion. What is the next step?',
        options: ['Increase maintenance to 2 g/h', 'Give 2 g IV MgSO4 bolus', 'Give calcium gluconate', 'Immediate caesarean without stabilisation'],
        answerIndex: 1,
        explanation:
          'Recurrent seizures are treated with a 2 g IV magnesium bolus. Calcium gluconate is the antidote for toxicity, not for seizures.',
      },
      {
        id: 'pg-preeclampsia-q3',
        stem: 'Which statement about MgSO4 in preeclampsia is correct?',
        options: [
          'It lowers blood pressure directly',
          'It prevents and treats eclamptic seizures',
          'It is contraindicated in HELLP',
          'It replaces antihypertensive therapy',
        ],
        answerIndex: 1,
        explanation:
          'Magnesium is anticonvulsant, not antihypertensive. Blood pressure control requires labetalol, hydralazine or nifedipine.',
      },
    ],
  },

  /* ====================================================================== */
  /* NEET PG — 4. Gynecologic Oncology                                     */
  /* ====================================================================== */
  {
    id: 'pg-gyn-oncology',
    track: 'NEET_PG',
    title: 'Gynecologic Oncology (FIGO Staging & Management)',
    shortTitle: 'Gyn Oncology',
    summary:
      'FIGO 2023 endometrial staging with molecular groups, cervical cancer treatment thresholds, and the ovarian cancer work-up.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 23,
    tags: ['FIGO', 'Endometrial cancer', 'Cervical cancer'],
    sourceTag: 'FIGO 2023 • Williams Gynecology 4e',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'endometrial',
        heading: 'Endometrial cancer: the molecular FIGO 2023 shift',
        bullets: [
          'The most common gynecologic malignancy; postmenopausal bleeding is the red flag.',
          'Risk factors: unopposed oestrogen, obesity, PCOS, diabetes, tamoxifen, Lynch syndrome.',
          'FIGO 2023 incorporates molecular classification: POLE-mutated (best prognosis), MMR-deficient/MSI-high, p53-abnormal, and NSMP.',
          'Surgery: total hysterectomy + bilateral salpingo-oophorectomy with nodal assessment; fertility-sparing only in selected early grade-1 disease.',
        ],
        table: {
          head: ['FIGO 2023 stage', 'Extent', 'Core management'],
          rows: [
            ['I', 'Confined to corpus (myometrial/lymphovascular detail)', 'Hysterectomy + BSO ± nodes'],
            ['II', 'Cervical stromal invasion', 'Hysterectomy + BSO + nodes ± adjuvant'],
            ['III', 'Local/regional spread (adnexa, serosa, nodes)', 'Surgery + adjuvant chemo/RT'],
            ['IV', 'Bladder/bowel mucosa or distant metastasis', 'Systemic therapy ± surgery/RT'],
          ],
        },
        pearls: [
          'POLE-mutated endometrial cancer has the best prognosis; p53-abnormal has the worst — molecular group now changes staging.',
        ],
      },
      {
        id: 'cervical',
        heading: 'Cervical cancer: stage decides the modality',
        bullets: [
          'HPV 16 and 18 drive most squamous carcinomas; screening is cytology ± HPV DNA testing.',
          'Early stage (IA–IB1) is surgical; locally advanced (≥IB2/IIA2, and all IIB+) is treated with chemoradiation.',
          'FIGO 2018 staging is clinical/imaging-based; examination under anaesthesia and MRI are key.',
          'Fertility-sparing options (cone, radical trachelectomy) are limited to small early lesions.',
        ],
        table: {
          head: ['Stage', 'Finding', 'Treatment principle'],
          rows: [
            ['IA', 'Microscopic invasion', 'Cone or simple hysterectomy'],
            ['IB1', '≤2 cm', 'Radical hysterectomy + nodes or trachelectomy'],
            ['IB2–IIA', '>2 cm, upper vagina', 'Radical surgery or chemoradiation'],
            ['IIB–IVA', 'Parametrial/pelvic wall/bladder', 'Chemoradiation'],
            ['IVB', 'Distant metastasis', 'Systemic therapy + palliation'],
          ],
        },
        trap: {
          title: 'Examiner trap',
          body: 'Stage IIB cervical cancer is treated with chemoradiation, not radical hysterectomy. Offering surgery at IIB is a classic wrong answer.',
        },
        pearls: [
          'Cervical cancer: stage IIB and beyond → chemoradiation. Early ≤IB1 → surgery.',
        ],
      },
      {
        id: 'ovarian',
        heading: 'Ovarian cancer: work-up and debulking',
        bullets: [
          'CA-125 is a monitoring marker, not a screening test — it rises in endometriosis, fibroids and pregnancy too.',
          'Transvaginal ultrasound with risk-of-malignancy index guides referral; CT staging follows.',
          'Epithelial ovarian cancer: staging laparotomy with total hysterectomy, BSO, omentectomy and cytoreduction.',
          'Germ-cell tumours affect younger women; markers are hCG (choriocarcinoma), AFP (yolk sac) and LDH (dysgerminoma).',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'CA-125 is not diagnostic. A normal CA-125 does not exclude ovarian cancer, and an elevated level does not confirm it.',
        },
        pearls: [
          'Ovarian cancer spreads transcoelomically — omentectomy and peritoneal sampling are part of staging, not optional add-ons.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'pg-gyn-oncology-f1',
        front: 'What is the most common gynecologic malignancy?',
        back: 'Endometrial cancer — postmenopausal bleeding is the classic presentation.',
      },
      {
        id: 'pg-gyn-oncology-f2',
        front: 'How is FIGO stage IIB cervical cancer treated?',
        back: 'Chemoradiation — surgery is not the primary modality at IIB or beyond.',
      },
      {
        id: 'pg-gyn-oncology-f3',
        front: 'Name the four molecular groups in FIGO 2023 endometrial staging.',
        back: 'POLE-mutated, MMR-deficient/MSI-high, p53-abnormal, and NSMP (no specific molecular profile).',
      },
      {
        id: 'pg-gyn-oncology-f4',
        front: 'What is CA-125 used for?',
        back: 'Monitoring response and recurrence in ovarian cancer. It is not a screening or diagnostic test.',
      },
    ],
    mcqs: [
      {
        id: 'pg-gyn-oncology-q1',
        stem: 'A 62-year-old presents with postmenopausal bleeding. Which diagnosis must be excluded first?',
        options: ['Endometrial carcinoma', 'Cervical fibroid', 'Ovarian torsion', 'Bartholin cyst'],
        answerIndex: 0,
        explanation:
          'Postmenopausal bleeding is endometrial cancer until proven otherwise. Endometrial biopsy is the next step; ultrasound alone is insufficient.',
      },
      {
        id: 'pg-gyn-oncology-q2',
        stem: 'A cervical cancer is staged as FIGO IIB. What is the standard primary treatment?',
        options: ['Radical hysterectomy', 'Chemoradiation', 'Conisation', 'Fertility-sparing trachelectomy'],
        answerIndex: 1,
        explanation:
          'IIB denotes parametrial involvement; chemoradiation is the standard. Radical hysterectomy is for early disease (≤IB1).',
      },
      {
        id: 'pg-gyn-oncology-q3',
        stem: 'Which tumour marker is most useful in monitoring epithelial ovarian cancer?',
        options: ['CA-125', 'CEA', 'AFP', 'hCG'],
        answerIndex: 0,
        explanation:
          'CA-125 tracks epithelial ovarian cancer. AFP and hCG belong to germ-cell tumours; CEA is more associated with GI tumours.',
      },
    ],
  },

  /* ====================================================================== */
  /* NEET PG — 5. PCOS, Infertility & AUB                                  */
  /* ====================================================================== */
  {
    id: 'pg-pcos-aub',
    track: 'NEET_PG',
    title: 'PCOS, Infertility & AUB (PALM-COEIN)',
    shortTitle: 'PCOS & AUB',
    summary:
      'Rotterdam diagnosis, the ovulation-induction ladder led by letrozole, the infertility work-up, and PALM-COEIN classification of abnormal bleeding.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 19,
    tags: ['PCOS', 'Infertility', 'PALM-COEIN'],
    sourceTag: 'ESHRE 2023 • FIGO PALM-COEIN',
    updatedAtISO: UPDATED_AT,
    notes: [
      {
        id: 'pcos',
        heading: 'PCOS: Rotterdam and the metabolic core',
        bullets: [
          'Rotterdam requires two of three: oligo/anovulation, clinical/biochemical hyperandrogenism, or polycystic ovarian morphology.',
          'Exclude thyroid disease, hyperprolactinaemia, congenital adrenal hyperplasia and androgen-secreting tumours.',
          'Insulin resistance drives ovarian androgen production and lowers SHBG — the metabolic–reproductive link.',
          'Screen for impaired glucose tolerance, dyslipidaemia and endometrial hyperplasia in chronic anovulation.',
        ],
        table: {
          head: ['Phenotype', 'Anovulation', 'Hyperandrogenism', 'PCOM'],
          rows: [
            ['Classic', '✓', '✓', '✓'],
            ['Anovulatory', '✓', '✗', '✓'],
            ['Hyperandrogenic', '✗', '✓', '✓'],
            ['Ovulatory', '✗', '✓', '✓'],
          ],
        },
        pearls: [
          'Rotterdam: 2 of 3 — anovulation, hyperandrogenism, polycystic ovarian morphology. Ultrasound alone is not a diagnosis.',
        ],
      },
      {
        id: 'infertility',
        heading: 'Infertility work-up and ovulation induction',
        flow: [
          'History + semen analysis · first-line partner test',
          'Ovulation assessment · cycle history, mid-luteal progesterone',
          'Ovarian reserve · day 2–5 FSH/LH, AMH, antral follicle count',
          'Tubal/uterine patency · HSG or saline sonography',
          'Laparoscopy · endometriosis, adhesions when indicated',
        ],
        bullets: [
          'Letrozole is first-line ovulation induction in PCOS — superior live-birth rates to clomiphene.',
          'Metformin is used for insulin resistance; it is not first-line for ovulation induction alone.',
          'Gonadotropins and laparoscopic ovarian drilling are second-line; IVF for failed ovulation induction or tubal factor.',
          'Tubal factor: proximal obstruction may be treated by cannulation; distal disease may need surgery or IVF.',
        ],
        pearls: [
          'Letrozole, not clomiphene, is first-line ovulation induction in PCOS (higher live-birth rate, fewer multiple pregnancies).',
        ],
      },
      {
        id: 'aub',
        heading: 'AUB: PALM-COEIN in one table',
        table: {
          head: ['Category', 'Meaning', 'Example'],
          rows: [
            ['P — Polyp', 'AUB-P', 'Endometrial or cervical polyp'],
            ['A — Adenomyosis', 'AUB-A', 'Globular uterus, heavy painful periods'],
            ['L — Leiomyoma', 'AUB-L', 'Submucosal fibroid (Lsm), intramural (Lo)'],
            ['M — Malignancy', 'AUB-M', 'Endometrial hyperplasia/carcinoma'],
            ['C — Coagulopathy', 'AUB-C', 'von Willebrand disease, anticoagulants'],
            ['O — Ovulatory', 'AUB-O', 'PCOS, thyroid, hyperprolactinaemia'],
            ['E — Endometrial', 'AUB-E', 'Primary endometrial dysfunction'],
            ['I — Iatrogenic', 'AUB-I', 'IUD, hormones, drugs'],
            ['N — Not classified', 'AUB-N', 'Rare, unclassified causes'],
          ],
        },
        bullets: [
          'PALM = structural; COEIN = non-structural. The acronym is a classification of symptoms, not a diagnosis.',
          'Endometrial biopsy in AUB if ≥45 years, or younger with risk factors for hyperplasia/cancer.',
          'In acute severe AUB: resuscitate, hormonal control, tranexamic acid, then definitive management.',
        ],
        trap: {
          title: 'Examiner trap',
          body: 'AUB-L is leiomyoma, not “luteal”. AUB-O is ovulatory dysfunction, not “oestrogen”. Knowing the letters prevents avoidable errors.',
        },
        pearls: [
          'Endometrial biopsy in AUB at ≥45 years or with risk factors for hyperplasia — imaging alone does not exclude malignancy.',
        ],
      },
    ],
    flashcards: [
      {
        id: 'pg-pcos-aub-f1',
        front: 'How many Rotterdam criteria are needed for PCOS?',
        back: 'Two of three: anovulation, hyperandrogenism, polycystic ovarian morphology.',
      },
      {
        id: 'pg-pcos-aub-f2',
        front: 'What is first-line ovulation induction in PCOS?',
        back: 'Letrozole — higher live-birth rates than clomiphene with fewer multiple pregnancies.',
      },
      {
        id: 'pg-pcos-aub-f3',
        front: 'What does AUB-L signify?',
        back: 'AUB due to leiomyoma (fibroid) — structural (PALM) category.',
      },
      {
        id: 'pg-pcos-aub-f4',
        front: 'When is endometrial biopsy indicated in AUB?',
        back: 'Age ≥45 years, or younger with risk factors for endometrial hyperplasia/cancer (obesity, PCOS, unopposed oestrogen).',
      },
    ],
    mcqs: [
      {
        id: 'pg-pcos-aub-q1',
        stem: 'How many Rotterdam criteria are required to diagnose PCOS?',
        options: ['One of three', 'Two of three', 'All three', 'Only ovarian morphology'],
        answerIndex: 1,
        explanation:
          'Two of three: anovulation, hyperandrogenism, and polycystic ovarian morphology — after excluding mimics.',
      },
      {
        id: 'pg-pcos-aub-q2',
        stem: 'Which is the first-line ovulation-induction agent in PCOS?',
        options: ['Clomiphene citrate', 'Letrozole', 'Metformin alone', 'Gonadotropins'],
        answerIndex: 1,
        explanation:
          'Letrozole is first-line, with better live-birth rates and fewer multiple pregnancies than clomiphene. Metformin targets insulin resistance, not ovulation directly.',
      },
      {
        id: 'pg-pcos-aub-q3',
        stem: 'AUB-O in the PALM-COEIN classification refers to which cause?',
        options: ['Ovulatory dysfunction', 'Ovarian malignancy', 'Oestrogen excess', 'Obstetric trauma'],
        answerIndex: 0,
        explanation:
          'AUB-O is ovulatory dysfunction (PCOS, thyroid disease, hyperprolactinaemia). AUB-M is malignancy; AUB-L is leiomyoma.',
      },
    ],
  },
] as const;

export const modulesForTrack = (track: TrackId): readonly StudioModule[] =>
  STUDIO_MODULES.filter((module) => module.track === track);

export const findStudioModule = (id: string | null | undefined): StudioModule | null =>
  (id ? STUDIO_MODULES.find((module) => module.id === id) ?? null : null);

export const studioModuleKey = (moduleId: string, itemId: string): string => `${moduleId}:${itemId}`;
