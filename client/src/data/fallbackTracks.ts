import type { TrackSummary, TrackSummaryResponse } from '@/types/tracks';

/**
 * Seed snapshot shipped with the bundle.
 * Guarantees an instant first paint for the dual-portal experience and acts as
 * the offline revision vault snapshot whenever `/api/v1/tracks/summary` is
 * unreachable. The shape is validated by the same zod contract as the live API.
 */

const UG_NODES: TrackSummary['conceptNodes'] = [
  {
    id: 'gametogenesis',
    label: 'Gametogenesis',
    detail: 'Oogenesis timeline from primordial germ cell → primary oocyte arrest at prophase I (diplotene) → ovulation at metaphase II.',
    kind: 'embryology',
    highYield: true,
  },
  {
    id: 'hypothalamic-axis',
    label: 'GnRH → FSH/LH Axis',
    detail: 'Pulsatile GnRH from the arcuate nucleus; negative ↔ positive oestrogen feedback switching the surge generator at mid-cycle.',
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
    detail: 'Capacitation, acrosome reaction, zona pellucida block, morula → blastocyst and the 6–7 day window of implantation.',
    kind: 'embryology',
    highYield: true,
  },
  {
    id: 'placentation',
    label: 'Placental Development',
    detail: 'Cytotrophoblast → syncytiotrophoblast invasion, spiral artery remodelling and the two-stage placental circulation.',
    kind: 'embryology',
    highYield: true,
  },
  {
    id: 'mullerian',
    label: 'Müllerian Development',
    detail: 'Paramesonephric duct fusion → uterus, cervix, upper vagina; failure modes map onto septate, bicornuate and unicornuate uterus.',
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
    detail: 'Mechanism-first recall: ovulation suppression, cervical mucus, endometrial receptivity and tubal transport targets.',
    kind: 'pharmacology',
    highYield: true,
  },
];

const UG_METRICS: TrackSummary['metrics'] = [
  { id: 'flowcharts', value: '120+', label: 'Visual flowcharts' },
  { id: 'ncert', value: 'NCERT++', label: 'Textbook synthesis' },
  { id: 'ibq', value: 'IBQ', label: 'Image-based questions' },
  { id: 'sprints', value: '48', label: 'Axis recall sprints' },
];

const PG_NODES: TrackSummary['conceptNodes'] = [
  {
    id: 'preeclampsia',
    label: 'Preeclampsia & MgSO4',
    detail: 'Pritchard vs Zuspan regimens, toxicity monitoring triad, and the antihypertensive ladder after magnesium loading.',
    kind: 'pharmacology',
    highYield: true,
  },
  {
    id: 'pph',
    label: 'PPH Algorithm (4 T’s)',
    detail: 'Tone → Trauma → Tissue → Thrombin escalation with uterine massage, uterotonics, balloon tamponade and brace suture thresholds.',
    kind: 'clinical',
    highYield: true,
  },
  {
    id: 'partograph',
    label: 'Partograph & Labour Mechanics',
    detail: 'WHO partograph action line at 4 h, arrest disorders, and the seven cardinal movements decoded along the pelvic axis.',
    kind: 'clinical',
    highYield: true,
  },
  {
    id: 'robson',
    label: 'Robson Ten-Group Classification',
    detail: 'Ten mutually exclusive groups from parity and presentation — the audit spine of every caesarean-section rate review.',
    kind: 'clinical',
    highYield: true,
  },
  {
    id: 'bleeding',
    label: 'Previa vs Abruption',
    detail: 'Pain–bleeding signature triad: painless revealed bleeding with a lax uterus versus painful concealed bleeding with a woody uterus.',
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
    detail: 'Baseline, variability, accelerations, decelerations — drilled with a live tracing scrubber and management decision trees.',
    kind: 'clinical',
    highYield: true,
  },
  {
    id: 'ectopic',
    label: 'Ectopic Pregnancy Pathways',
    detail: 'Discriminatory hCG zone, methotrexate criteria (single-dose protocol), and the surgical threshold when rupture is suspected.',
    kind: 'clinical',
    highYield: true,
  },
];

const PG_METRICS: TrackSummary['metrics'] = [
  { id: 'algorithms', value: '500+', label: 'Case algorithms' },
  { id: 'williams', value: 'Williams+Shaw', label: 'Condensed notes' },
  { id: 'ai', value: 'AI', label: 'Rapid-fire recall' },
  { id: 'robson', value: 'Robson', label: 'Ten-group drills' },
];

export const FALLBACK_TRACK_SUMMARIES: TrackSummary[] = [
  {
    id: 'NEET_UG',
    title: 'Foundational Mastery',
    kicker: 'NEET UG',
    badge: 'UNDERGRADUATE CORE • FOUNDATION & BRIDGING',
    description:
      'Build the anatomical logic once: gametogenesis, the hormonal axis and placentation become a single causal chain you can redraw from memory.',
    ctaLabel: 'Enter NEET UG Revision Studio',
    accent: { from: '#14B8A6', to: '#22D3EE', glow: '#0D9488' },
    metrics: UG_METRICS,
    conceptNodes: UG_NODES,
    topicCount: 214,
    revisionModuleCount: 96,
    flashcardCount: 1840,
    ibqCount: 260,
    retentionRate: 0.86,
    dailyPearl: {
      id: 'pearl-ug-lh-surge',
      title: 'The LH surge is an event, not a level',
      body:
        'The mid-cycle LH surge takes roughly 36 h to reach follicular rupture, which follows 10–12 h after the LH peak. Progesterone begins to rise just before rupture — the earliest measurable sign that the luteal switch has begun.',
      tags: ['Ovulation', 'Hormonal axis', 'Physiology'],
      track: 'NEET_UG',
    },
    updatedAtISO: '2026-10-16T06:00:00.000Z',
  },
  {
    id: 'NEET_PG',
    title: 'Clinical Vault',
    kicker: 'NEET PG',
    badge: 'POSTGRADUATE CLINICAL • NEET PG',
    description:
      'Convert textbook recall into bedside decisions: partograph interpretation, Robson auditing and emergency algorithms rehearsed under time pressure.',
    ctaLabel: 'Enter NEET PG Clinical Vault',
    accent: { from: '#6366F1', to: '#F43F5E', glow: '#4F46E5' },
    metrics: PG_METRICS,
    conceptNodes: PG_NODES,
    topicCount: 486,
    revisionModuleCount: 318,
    flashcardCount: 5240,
    ibqCount: 910,
    retentionRate: 0.91,
    dailyPearl: {
      id: 'pearl-pg-mgso4',
      title: 'MgSO4 regimen in severe preeclampsia',
      body:
        'Loading 4 g IV over 5–10 min, then 1 g/h for 24 h; eclamptic seizure recurrence gets a 2 g IV bolus. Watch deep tendon reflexes, respiratory rate and hourly urine output — calcium gluconate 1 g IV is the antidote.',
      tags: ['Preeclampsia', 'MgSO4', 'Emergency'],
      track: 'NEET_PG',
    },
    updatedAtISO: '2026-10-16T06:00:00.000Z',
  },
];

export const fallbackTrackSummary: TrackSummaryResponse = {
  generatedAtISO: '2026-10-16T06:00:00.000Z',
  source: 'seed',
  tracks: FALLBACK_TRACK_SUMMARIES,
};

export const TRACK_COPY: Record<TrackSummary['id'], { eyebrow: string; gradientFrom: string; gradientTo: string }> = {
  NEET_UG: { eyebrow: 'Foundation & bridging', gradientFrom: '#5EEAD4', gradientTo: '#22D3EE' },
  NEET_PG: { eyebrow: 'Clinical mastery', gradientFrom: '#818CF8', gradientTo: '#FB7185' },
};
