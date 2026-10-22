import type { ClinicalPearl, Difficulty, TrackId, TrackMetric, ConceptNode } from '../modules/tracks/tracks.schema.js';

/* ============================================================================
   Seed corpus
   ----------------------------------------------------------------------------
   Single source of truth for: the in-memory repository used when MongoDB is
   absent, the `npm run seed` script, and the offline snapshot shipped inside the
   client bundle. Content is written in the same register as the app's revision
   cards — concise, mechanism-first, exam-oriented.
   ========================================================================== */

export interface TrackBlueprint {
  id: TrackId;
  title: string;
  kicker: string;
  badge: string;
  description: string;
  ctaLabel: string;
  accent: { from: string; to: string; glow: string };
  metrics: TrackMetric[];
  conceptNodes: ConceptNode[];
  counts: {
    topicCount: number;
    revisionModuleCount: number;
    flashcardCount: number;
    ibqCount: number;
    retentionRate: number;
  };
  pearls: ClinicalPearl[];
}

export const TRACK_BLUEPRINTS: Record<TrackId, TrackBlueprint> = {
  NEET_UG: {
    id: 'NEET_UG',
    title: 'Foundational Mastery',
    kicker: 'UG',
    badge: 'UNDERGRADUATE CORE • FOUNDATION & BRIDGING',
    description:
      'Build the anatomical logic once: gametogenesis, the hormonal axis and placentation become a single causal chain you can redraw from memory.',
    ctaLabel: 'Enter UG Revision Studio',
    accent: { from: '#14B8A6', to: '#22D3EE', glow: '#0D9488' },
    metrics: [
      { id: 'flowcharts', value: '120+', label: 'Visual flowcharts' },
      { id: 'ncert', value: 'NCERT++', label: 'Textbook synthesis' },
      { id: 'ibq', value: 'IBQ', label: 'Image-based questions' },
      { id: 'sprints', value: '48', label: 'Axis recall sprints' },
    ],
    conceptNodes: [
      {
        id: 'gametogenesis',
        label: 'Gametogenesis',
        detail:
          'Oogenesis timeline from primordial germ cell → primary oocyte arrest at prophase I (diplotene) → ovulation at metaphase II.',
        kind: 'embryology',
        highYield: true,
      },
      {
        id: 'hypothalamic-axis',
        label: 'GnRH → FSH/LH Axis',
        detail:
          'Pulsatile GnRH from the arcuate nucleus; negative ↔ positive oestrogen feedback switching the surge generator at mid-cycle.',
        kind: 'physiology',
        highYield: true,
      },
      {
        id: 'menstrual-phases',
        label: 'Ovarian & Uterine Phases',
        detail: 'Follicular ⇄ luteal ovarian phases mapped onto menstrual, proliferative and secretory endometrial phases.',
        kind: 'physiology',
        highYield: true,
      },
      {
        id: 'fertilisation',
        label: 'Fertilisation → Implantation',
        detail:
          'Capacitation, acrosome reaction, zona pellucida block, morula → blastocyst and the 6–7 day window of implantation.',
        kind: 'embryology',
        highYield: true,
      },
      {
        id: 'placentation',
        label: 'Placental Development',
        detail:
          'Cytotrophoblast → syncytiotrophoblast invasion, spiral artery remodelling and the two-stage placental circulation.',
        kind: 'embryology',
        highYield: true,
      },
      {
        id: 'mullerian',
        label: 'Müllerian Development',
        detail:
          'Paramesonephric duct fusion → uterus, cervix, upper vagina; failure modes map onto septate, bicornuate and unicornuate uterus.',
        kind: 'anatomy',
        highYield: true,
      },
      {
        id: 'puberty',
        label: 'Puberty & Tanner Staging',
        detail: 'Thelarche → adrenarche → pubarche → menarche sequencing with skeletal age and the leptin-gonadal checkpoint.',
        kind: 'physiology',
        highYield: false,
      },
      {
        id: 'contraception',
        label: 'Contraception Ladder',
        detail:
          'Mechanism-first recall: ovulation suppression, cervical mucus, endometrial receptivity and tubal transport targets.',
        kind: 'pharmacology',
        highYield: true,
      },
    ],
    counts: {
      topicCount: 214,
      revisionModuleCount: 96,
      flashcardCount: 1840,
      ibqCount: 260,
      retentionRate: 0.86,
    },
    pearls: [
      {
        id: 'pearl-ug-lh-surge',
        title: 'The LH surge is an event, not a level',
        body:
          'The mid-cycle LH surge takes roughly 36 h to reach follicular rupture, which follows 10–12 h after the LH peak. Progesterone begins to rise just before rupture — the earliest measurable sign that the luteal switch has begun.',
        tags: ['Ovulation', 'Hormonal axis', 'Physiology'],
        track: 'NEET_UG',
      },
      {
        id: 'pearl-ug-placenta-circulation',
        title: 'Two circulations, one placenta',
        body:
          'Nutrition is histiotrophic (glandular secretions) until about 10 weeks, then haemotrophic once maternal blood perfuses the intervillous space. Complete spiral-artery remodelling finishes near 20–22 weeks — the window that decides preeclampsia risk.',
        tags: ['Placenta', 'Spiral arteries'],
        track: 'NEET_UG',
      },
      {
        id: 'pearl-ug-mullerian',
        title: 'Read Müllerian anomalies structurally',
        body:
          'Fusion failure → bicornuate or didelphys; resorption failure → septate uterus. The septum is fibromuscular with poor decidualisation, which is why it is the anomaly most associated with recurrent loss.',
        tags: ['Embryology', 'Müllerian', 'Recurrent loss'],
        track: 'NEET_UG',
      },
    ],
  },

  NEET_PG: {
    id: 'NEET_PG',
    title: 'Clinical Vault',
    kicker: 'PG',
    badge: 'POSTGRADUATE CLINICAL • PG',
    description:
      'Convert textbook recall into bedside decisions: partograph interpretation, Robson auditing and emergency algorithms rehearsed under time pressure.',
    ctaLabel: 'Enter PG Clinical Vault',
    accent: { from: '#6366F1', to: '#F43F5E', glow: '#4F46E5' },
    metrics: [
      { id: 'algorithms', value: '500+', label: 'Case algorithms' },
      { id: 'williams', value: 'Williams+Shaw', label: 'Condensed notes' },
      { id: 'ai', value: 'AI', label: 'Rapid-fire recall' },
      { id: 'robson', value: 'Robson', label: 'Ten-group drills' },
    ],
    conceptNodes: [
      {
        id: 'preeclampsia',
        label: 'Preeclampsia & MgSO4',
        detail:
          'Pritchard vs Zuspan regimens, toxicity monitoring triad, and the antihypertensive ladder after magnesium loading.',
        kind: 'pharmacology',
        highYield: true,
      },
      {
        id: 'pph',
        label: 'PPH Algorithm (4 T’s)',
        detail:
          'Tone → Trauma → Tissue → Thrombin escalation with uterine massage, uterotonics, balloon tamponade and brace suture thresholds.',
        kind: 'clinical',
        highYield: true,
      },
      {
        id: 'partograph',
        label: 'Partograph & Labour Mechanics',
        detail:
          'WHO partograph action line at 4 h, arrest disorders, and the seven cardinal movements decoded along the pelvic axis.',
        kind: 'clinical',
        highYield: true,
      },
      {
        id: 'robson',
        label: 'Robson Ten-Group Classification',
        detail:
          'Ten mutually exclusive groups from parity and presentation — the audit spine of every caesarean-section rate review.',
        kind: 'clinical',
        highYield: true,
      },
      {
        id: 'bleeding',
        label: 'Previa vs Abruption',
        detail:
          'Pain–bleeding signature triad: painless revealed bleeding with a lax uterus versus painful concealed bleeding with a woody uterus.',
        kind: 'clinical',
        highYield: true,
      },
      {
        id: 'oncology',
        label: 'Radical Hysterectomy Staging',
        detail: 'Piver–Rutledge classes I–III, ureter dissection planes and the sentinel node pathway in early cervical carcinoma.',
        kind: 'anatomy',
        highYield: true,
      },
      {
        id: 'ctg',
        label: 'CTG Interpretation (NICHD)',
        detail:
          'Baseline, variability, accelerations, decelerations — drilled with a live tracing scrubber and management decision trees.',
        kind: 'clinical',
        highYield: true,
      },
      {
        id: 'ectopic',
        label: 'Ectopic Pregnancy Pathways',
        detail:
          'Discriminatory hCG zone, methotrexate criteria (single-dose protocol), and the surgical threshold when rupture is suspected.',
        kind: 'clinical',
        highYield: true,
      },
    ],
    counts: {
      topicCount: 486,
      revisionModuleCount: 318,
      flashcardCount: 5240,
      ibqCount: 910,
      retentionRate: 0.91,
    },
    pearls: [
      {
        id: 'pearl-pg-mgso4',
        title: 'MgSO4 regimen in severe preeclampsia',
        body:
          'Loading 4 g IV over 5–10 min, then 1 g/h for 24 h; eclamptic seizure recurrence gets a 2 g IV bolus. Watch deep tendon reflexes, respiratory rate and hourly urine output — calcium gluconate 1 g IV is the antidote.',
        tags: ['Preeclampsia', 'MgSO4', 'Emergency'],
        track: 'NEET_PG',
      },
      {
        id: 'pearl-pg-pph-sequence',
        title: 'PPH is a sequence, not a diagnosis',
        body:
          'Atony causes 70 % of primary PPH, so massage and uterotonics come first — but never before inspecting the genital tract. Tranexamic acid within 3 h reduces death from bleeding regardless of the cause you eventually name.',
        tags: ['PPH', 'Atony', 'TXA'],
        track: 'NEET_PG',
      },
      {
        id: 'pearl-pg-robson5',
        title: 'Group 5 decides your CS rate',
        body:
          'Women with a previous caesarean who reach 37 weeks cephalic are the largest single contributor to overall caesarean rates. TOLAC counselling and a documented decision — not the uterus itself — is the modifiable step.',
        tags: ['Robson', 'VBAC', 'Audit'],
        track: 'NEET_PG',
      },
      {
        id: 'pearl-pg-ctg-late',
        title: 'Late decelerations are placental insufficiency',
        body:
          'They begin after the contraction peak, mirror it, and recover only after it ends — repetitive late decelerations with reduced variability demand intrauterine resuscitation then delivery, not observation.',
        tags: ['CTG', 'Fetal distress', 'NICHD'],
        track: 'NEET_PG',
      },
    ],
  },
};

export interface RevisionModuleSeed {
  slug: string;
  track: TrackId;
  title: string;
  summary: string;
  difficulty: Difficulty;
  highYieldScore: number;
  durationMinutes: number;
  tags: string[];
  conceptNodeIds: string[];
  imageBased: boolean;
  spiralRepetitionStage: number;
  rag: { sourceDocument: string; sourcePages: string; chunkCount: number };
}

export const REVISION_MODULE_SEEDS: RevisionModuleSeed[] = [
  {
    slug: 'neet-ug-hypothalamo-pituitary-ovarian-axis',
    track: 'NEET_UG',
    title: 'Hypothalamo-pituitary-ovarian axis, reconstructed spatially',
    summary:
      'A causal walk from pulsatile GnRH through gonadotrophin feedback switching to the mid-cycle surge — rebuilt on a scrubable cycle timeline.',
    difficulty: 'foundation',
    highYieldScore: 9,
    durationMinutes: 18,
    tags: ['axis', 'ovulation', 'feedback'],
    conceptNodeIds: ['hypothalamic-axis', 'menstrual-phases'],
    imageBased: false,
    spiralRepetitionStage: 2,
    rag: { sourceDocument: 'Dutta’s Textbook of Obstetrics', sourcePages: '38–52', chunkCount: 14 },
  },
  {
    slug: 'neet-ug-gametogenesis-timeline',
    track: 'NEET_UG',
    title: 'Gametogenesis: the two arrests that decide everything',
    summary:
      'Prophase I arrest, metaphase II arrest and fertilisation-triggered resumption mapped against the ovarian cycle and meiotic error risk.',
    difficulty: 'foundation',
    highYieldScore: 8,
    durationMinutes: 14,
    tags: ['oogenesis', 'meiosis', 'aneuploidy'],
    conceptNodeIds: ['gametogenesis', 'fertilisation'],
    imageBased: true,
    spiralRepetitionStage: 1,
    rag: { sourceDocument: 'Human Embryology (Inderbir Singh)', sourcePages: '12–27', chunkCount: 11 },
  },
  {
    slug: 'neet-ug-placentation-two-stage-circulation',
    track: 'NEET_UG',
    title: 'Placentation and the two-stage circulation',
    summary:
      'Cytotrophoblast shell, spiral-artery remodelling and the histiotrophic → haemotrophic switch with the placental barrier drawn to scale.',
    difficulty: 'moderate',
    highYieldScore: 9,
    durationMinutes: 21,
    tags: ['placenta', 'spiral arteries', 'FGR'],
    conceptNodeIds: ['placentation', 'mullerian'],
    imageBased: true,
    spiralRepetitionStage: 3,
    rag: { sourceDocument: 'Langman’s Medical Embryology', sourcePages: '96–118', chunkCount: 17 },
  },
  {
    slug: 'neet-pg-preeclampsia-magnesium-protocol',
    track: 'NEET_PG',
    title: 'Preeclampsia: magnesium loading, monitoring and reversal',
    summary:
      'Severity criteria, Pritchard vs Zuspan regimens, the toxicity triad and antihypertensive sequencing, rehearsed as an emergency algorithm.',
    difficulty: 'clinical',
    highYieldScore: 10,
    durationMinutes: 24,
    tags: ['preeclampsia', 'MgSO4', 'Labetalol'],
    conceptNodeIds: ['preeclampsia'],
    imageBased: false,
    spiralRepetitionStage: 4,
    rag: { sourceDocument: 'Williams Obstetrics, 26e', sourcePages: 'Chapter 40', chunkCount: 22 },
  },
  {
    slug: 'neet-pg-partograph-arrest-disorders',
    track: 'NEET_PG',
    title: 'Partograph literacy and the arrest disorders',
    summary:
      'Alert vs action line, the 4-hour rule, protraction and arrest definitions, plus the safe threshold for augmentation without missing obstruction.',
    difficulty: 'clinical',
    highYieldScore: 10,
    durationMinutes: 22,
    tags: ['labour', 'partograph', 'augmentation'],
    conceptNodeIds: ['partograph'],
    imageBased: true,
    spiralRepetitionStage: 5,
    rag: { sourceDocument: 'WHO Labour Care Guide', sourcePages: '9–31', chunkCount: 19 },
  },
  {
    slug: 'neet-pg-pph-escalation-ladder',
    track: 'NEET_PG',
    title: 'Postpartum haemorrhage: the four-T escalation ladder',
    summary:
      'Tone, trauma, tissue and thrombin management with uterotonic doses, tamponade devices, compression sutures and massive transfusion triggers.',
    difficulty: 'exam-trap',
    highYieldScore: 10,
    durationMinutes: 26,
    tags: ['PPH', 'atony', 'transfusion'],
    conceptNodeIds: ['pph'],
    imageBased: false,
    spiralRepetitionStage: 4,
    rag: { sourceDocument: 'Shaw’s Textbook of Gynaecology', sourcePages: 'Chapter 22', chunkCount: 26 },
  },
  {
    slug: 'neet-pg-robson-ten-group-audit',
    track: 'NEET_PG',
    title: 'Robson ten-group classification as an audit instrument',
    summary:
      'Assign every caesarean to a group, compute group-specific contributions and identify which interventions would actually move your unit’s rate.',
    difficulty: 'clinical',
    highYieldScore: 9,
    durationMinutes: 19,
    tags: ['Robson', 'cesarean audit', 'quality'],
    conceptNodeIds: ['robson'],
    imageBased: false,
    spiralRepetitionStage: 2,
    rag: { sourceDocument: 'FIGO Robson classification implementation manual', sourcePages: '5–24', chunkCount: 16 },
  },
];

export interface ClinicalCaseSeed {
  slug: string;
  track: TrackId;
  stem: string;
  question: string;
  options: ReadonlyArray<{ id: string; text: string; correct: boolean; rationale: string }>;
  explanation: string;
  robsonGroup?: number;
  difficulty: Difficulty;
  tags: string[];
  conceptNodeIds: string[];
}

export const CLINICAL_CASE_SEEDS: ClinicalCaseSeed[] = [
  {
    slug: 'case-secondary-pph-uterine-inversion',
    track: 'NEET_PG',
    stem:
      'A 27-year-old primigravida delivers vaginally after a 9-hour second stage. Twenty minutes later she has heavy bleeding, a fundus that is not palpable per abdomen, and severe lower abdominal pain in the presence of a small felt mass at the introitus.',
    question: 'What is the most appropriate immediate step?',
    options: [
      { id: 'a', text: 'Start an oxytocin infusion and reassess in 15 minutes', correct: false, rationale: 'Uterotonics before repositioning a prolapsed uterus worsen the inversion.' },
      { id: 'b', text: 'Stop uterotonics and attempt immediate manual repositioning of the uterus', correct: true, rationale: 'Uterine inversion is treated by prompt repositioning before any other uterotonic escalation.' },
      { id: 'c', text: 'Immediate laparotomy with hysterectomy', correct: false, rationale: 'Surgery is reserved for failed manual or hydrostatic repositioning.' },
      { id: 'd', text: 'Insert a balloon tamponade and transfuse', correct: false, rationale: 'Tamponade in an inverted uterus delays the definitive step.' },
    ],
    explanation:
      'Absent fundus with a palpable introital mass is uterine inversion. Stop uterotonics, substitute a relaxant, and reposition — Johnson’s manoeuvre first, hydrostatic or surgical if that fails, always with concurrent resuscitation.',
    difficulty: 'exam-trap',
    tags: ['PPH', 'Inversion', 'Emergency'],
    conceptNodeIds: ['pph'],
  },
  {
    slug: 'case-robson-group5-tolac',
    track: 'NEET_PG',
    stem:
      'A 32-year-old woman with one previous low-transverse caesarean presents at 38 weeks, singleton cephalic, with spontaneous labour and an estimated fetal weight of 3.3 kg. Membranes rupture 2 hours after admission; CTG is reassuring.',
    question: 'Which Robson group does she belong to, and what is the recommended management?',
    options: [
      { id: 'a', text: 'Group 5 — trial of labour with continuous fetal monitoring and immediate theatre access', correct: true, rationale: 'Previous caesarean with a cephalic term singleton: TOLAC is appropriate when monitoring and theatre are available.' },
      { id: 'b', text: 'Group 4 — elective repeat caesarean without a trial of labour', correct: false, rationale: 'Group 4 excludes previous caesarean; her spontaneous labour already excludes the induced/pre-labour group.' },
      { id: 'c', text: 'Group 2 — augmentation with oxytocin to shorten labour', correct: false, rationale: 'Augmentation in a scarred uterus increases rupture risk without evidence-based indication here.' },
      { id: 'd', text: 'Group 10 — deliver at 36 weeks before labour progresses', correct: false, rationale: 'She is already at 38 weeks in established labour; group 10 applies to preterm singleton cephalic deliveries.' },
    ],
    explanation:
      'Previous caesarean with a term cephalic singleton in spontaneous labour is Robson group 5 — the largest single contributor to global caesarean rates. Continuous monitoring, documented consent for possible rupture and theatre availability are the safety envelope.',
    robsonGroup: 5,
    difficulty: 'clinical',
    tags: ['Robson', 'VBAC', 'Labour'],
    conceptNodeIds: ['robson', 'partograph'],
  },
  {
    slug: 'case-late-decelerations',
    track: 'NEET_PG',
    stem:
      'A 24-year-old in the second stage of labour shows repetitive decelerations that begin after each contraction peak, recover only after the contraction ends, with reduced baseline variability for the last 30 minutes.',
    question: 'What do these decelerations indicate?',
    options: [
      { id: 'a', text: 'Head compression; observation is sufficient', correct: false, rationale: 'Early decelerations mirror the contraction and are benign — these do not.' },
      { id: 'b', text: 'Umbilical cord compression requiring position change only', correct: false, rationale: 'Variable decelerations signal cord compression and usually have a rapid, eclectic recovery pattern.' },
      { id: 'c', text: 'Placental insufficiency — intrauterine resuscitation, and deliver if the pattern persists', correct: true, rationale: 'Repetitive late decelerations with reduced variability indicate uteroplacental insufficiency and warrant expedited delivery.' },
      { id: 'd', text: 'Maternal hypotension from epidural top-up only', correct: false, rationale: 'Hypotension can cause late decelerations, but the persistent pattern demands the same escalation regardless of cause.' },
    ],
    explanation:
      'Late decelerations are the classic signature of uteroplacental insufficiency: left lateral position, IV fluids, stop oxytocin and consider tocolysis during resuscitation; if they persist with reduced variability, deliver.',
    difficulty: 'clinical',
    tags: ['CTG', 'Fetal surveillance'],
    conceptNodeIds: ['ctg'],
  },
  {
    slug: 'case-mullerian-septum',
    track: 'NEET_UG',
    stem:
      'A 26-year-old presents with two second-trimester losses. Hysterosalpingography shows a normal external uterine contour with a linear filling defect dividing the cavity, and both ostia are visible.',
    question: 'Which anomaly fits this description?',
    options: [
      { id: 'a', text: 'Bicornuate uterus', correct: false, rationale: 'A bicornuate uterus has an indented external contour.' },
      { id: 'b', text: 'Septate uterus', correct: true, rationale: 'Normal external contour with an internal septum is the defining combination.' },
      { id: 'c', text: 'Unicornuate uterus', correct: false, rationale: 'A unicornuate uterus shows a single ostium and a banana-shaped cavity.' },
      { id: 'd', text: 'Uterus didelphys', correct: false, rationale: 'Didelphys shows two separate cavities and two cervices with an external cleft.' },
    ],
    explanation:
      'Normal external contour + internal division = septate uterus (resorption failure). It carries the strongest association with recurrent pregnancy loss and is the anomaly most likely to benefit from hysteroscopic metroplasty.',
    difficulty: 'moderate',
    tags: ['Müllerian', 'Recurrent loss'],
    conceptNodeIds: ['mullerian'],
  },
];

export interface FlashcardSeed {
  deck: string;
  track: TrackId;
  front: string;
  back: string;
  pearl: string;
  tags: string[];
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  lapses: number;
}

export const FLASHCARD_SEEDS: FlashcardSeed[] = [
  {
    deck: 'Antepartum haemorrhage',
    track: 'NEET_PG',
    front: 'Placenta previa',
    back: 'Painless, revealed (bright red) bleeding · soft lax uterus · malpresentation · placenta overlies the os',
    pearl:
      'Never perform a digital exam on suspected previa — confirm with TVS first. Caesarean is mandatory; the lower-segment incision may cross the placenta.',
    tags: ['APH', 'Previa', 'TVS'],
    easeFactor: 2.5,
    intervalDays: 3,
    repetitions: 2,
    lapses: 0,
  },
  {
    deck: 'Antepartum haemorrhage',
    track: 'NEET_PG',
    front: 'Abruptio placentae',
    back: 'Painful, concealed bleeding · woody-hard tender uterus · fetal distress · preeclampsia association',
    pearl: 'Bleeding volume underestimates true loss. Watch for Couvelaire uterus and DIC — check fibrinogen and platelets early.',
    tags: ['APH', 'DIC', 'Concealed'],
    easeFactor: 2.36,
    intervalDays: 2,
    repetitions: 1,
    lapses: 1,
  },
  {
    deck: 'Obstetric emergencies',
    track: 'NEET_PG',
    front: 'MgSO4 toxicity triad',
    back: 'Loss of deep tendon reflexes → respiratory depression (< 12/min) → oliguria (< 30 mL/h) → cardiac arrest',
    pearl: 'Reflexes disappear first: they are your bedside serum-magnesium surrogate. Antidote — calcium gluconate 1 g IV over 10 min.',
    tags: ['MgSO4', 'Preeclampsia'],
    easeFactor: 2.6,
    intervalDays: 7,
    repetitions: 3,
    lapses: 0,
  },
  {
    deck: 'Labour & delivery',
    track: 'NEET_PG',
    front: 'Robson group 1',
    back: 'Nulliparous, singleton, cephalic, ≥ 37 weeks, spontaneous labour',
    pearl: 'Groups 1–2 are the audit target: their caesarean share is where labour-ward practice quality is actually measured.',
    tags: ['Robson', 'Audit'],
    easeFactor: 2.4,
    intervalDays: 4,
    repetitions: 2,
    lapses: 0,
  },
  {
    deck: 'Physiology',
    track: 'NEET_UG',
    front: 'Timing of ovulation',
    back: 'LH surge onset ≈ 36 h before rupture · ovulation 10–12 h after the LH peak',
    pearl: 'Oestrogen switches from negative to positive feedback only when it stays elevated long enough to prime the surge generator.',
    tags: ['Ovulation', 'LH', 'Axis'],
    easeFactor: 2.5,
    intervalDays: 5,
    repetitions: 2,
    lapses: 0,
  },
  {
    deck: 'Embryology',
    track: 'NEET_UG',
    front: 'Two-stage placental circulation',
    back: 'Histiotrophic (glandular) nutrition before ~10 weeks → haemotrophic (maternal blood) circulation afterwards',
    pearl:
      'Spiral-artery remodelling completes near 20–22 weeks — the window in which defective placentation seeds preeclampsia and FGR.',
    tags: ['Placenta', 'Spiral arteries'],
    easeFactor: 2.45,
    intervalDays: 6,
    repetitions: 2,
    lapses: 1,
  },
];
