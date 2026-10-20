import {
  type ObgynTopic,
  type ObgynTrack,
  detectObgynTopic,
} from './obgynAiKnowledge.js';

/**
 * Evidence-grounded answer layer for the AI studio.
 * ---------------------------------------------------------------------------
 * The live model is only as accurate as what it is given. This module turns the
 * curated vault into a retrieval packet for the matched topic, and constrains
 * citations to sources that actually exist. It is deliberately deterministic:
 * no model call is needed to decide what evidence is relevant or which
 * references are admissible.
 *
 * Flow:
 *   prompt ──▶ detectObgynTopic ──▶ EvidencePack (verified facts + sources)
 *                                       │
 *                                       ▼
 *                         system prompt + evidence + question
 *                                       │
 *                                       ▼
 *                       generated answer ──▶ sanitiseReferences()
 */

/** Bumped whenever the system instruction or evidence contract changes. */
export const PROMPT_VERSION = 'grounded-v2.2026-10';

/**
 * Real, mainstream sources only. A generated citation must start with one of
 * these prefixes; anything else is dropped before it reaches the UI. That is
 * what stops invented guidelines ("FIGO Guidelines on Fetal Hemodynamics")
 * from ever being shown to a student.
 */
export const APPROVED_REFERENCE_PREFIXES = [
  'williams obstetrics',
  'shaw',
  'dutta',
  'speroff',
  'novak',
  'rcog',
  'acog',
  'figo',
  'who',
  'world health organization',
  'fogsi',
  'nice',
  'national institute for health and care excellence',
  'cochrane',
  'icmr',
  'ncert',
  'unicef',
  'eshre',
] as const;

const TOPIC_REFERENCES: Record<ObgynTopic['id'], readonly string[]> = {
  partograph: ['WHO partograph (modified)', 'Williams Obstetrics', "Dutta's Textbook of Obstetrics"],
  preeclampsia: [
    'Williams Obstetrics',
    'ACOG Practice Bulletin 222',
    'WHO recommendations for pre-eclampsia',
  ],
  pph: [
    'WHO recommendations for postpartum haemorrhage',
    'RCOG Green-top Guideline 52',
    'Williams Obstetrics',
  ],
  aph: ['RCOG Green-top Guideline 63', 'Williams Obstetrics', "Dutta's Textbook of Obstetrics"],
  figo: ['FIGO staging of endometrial cancer', 'Williams Obstetrics', "Shaw's Textbook of Gynaecology"],
  axis: [
    "Speroff's Clinical Gynecologic Endocrinology and Infertility",
    'Williams Obstetrics',
    "Shaw's Textbook of Gynaecology",
  ],
  ectopic: ['RCOG Green-top Guideline 21', 'Williams Obstetrics', "Dutta's Textbook of Obstetrics"],
  shoulder: ['RCOG Green-top Guideline 42', 'ACOG Practice Bulletin 178', 'Williams Obstetrics'],
  pcos: ['ESHRE guideline', 'Williams Obstetrics', "Shaw's Textbook of Gynaecology"],
  fibroid: ['FIGO fibroid classification', 'RCOG guideline', 'Williams Obstetrics'],
  gdm: ['WHO recommendations on gestational diabetes', 'FIGO guideline', "Dutta's Textbook of Obstetrics"],
};

const TRACK_REFERENCES: Record<ObgynTrack, readonly string[]> = {
  UG: ["Dutta's Textbook of Obstetrics", "Dutta's Textbook of Gynaecology", 'NCERT Class 12 Biology'],
  PG: ['Williams Obstetrics', "Shaw's Textbook of Gynaecology", 'FIGO guideline', 'WHO guideline'],
};

/**
 * High-stakes facts that small models routinely get wrong from memory (old
 * first-line drugs, superseded thresholds). They are printed at the very top of
 * the evidence block and override the model's priors.
 */
const FACT_LOCKS: Record<ObgynTopic['id'], readonly string[]> = {
  partograph: [
    'Cervical dilatation is plotted every 4 h in the active phase; fetal heart rate every 30 min.',
    'Alert line = 1 cm/hour from 4 cm; action line = 4 h to the right of the alert line.',
  ],
  preeclampsia: [
    'Preeclampsia = BP ≥ 140/90 after 20 weeks + proteinuria (≥ 300 mg/24 h or P/Cr ≥ 0.3) or organ dysfunction.',
    'Severe features: BP ≥ 160/110, platelets < 100,000/µL, creatinine > 1.1 mg/dL, pulmonary oedema, cerebral/visual symptoms.',
    'MgSO4 Pritchard: 4 g IV + 10 g IM loading, then 5 g IM every 4 h; Zuspan: 4 g IV then 1 g/hour. Antidote: calcium gluconate 10%, 10 mL IV.',
  ],
  pph: [
    'PPH = ≥ 500 mL after vaginal birth, ≥ 1,000 mL after caesarean, or any loss causing haemodynamic compromise.',
    'Sequence: uterine massage + oxytocin → tranexamic acid 1 g IV → carboprost/misoprostol → balloon/tamponade → surgery.',
    'MgSO4 has NO role in postpartum haemorrhage.',
  ],
  aph: [
    'Previa: painless bright-red bleeding, soft uterus, no PV examination before placental localisation.',
    'Abruption: painful dark bleeding, woody-hard tender uterus, DIC risk; a normal scan does not exclude it.',
  ],
  figo: [
    'FIGO 2023: IA < 50% myometrial invasion, IB ≥ 50%, IC aggressive histology confined to uterus, IIA cervical stroma, IIB substantial LVSI, IIIC1 pelvic nodes, IIIC2 para-aortic nodes.',
    'Molecular classes: POLEmut, MMRd, NSMP, p53abn; the molecular stage can override the anatomical stage.',
  ],
  axis: [
    'LH surge ≈ 36 h before ovulation; progesterone peaks ≈ day 21; the luteal phase is fixed (~14 days).',
  ],
  ectopic: [
    'Methotrexate 50 mg/m² IM only if stable, β-hCG < 5,000 IU/L, mass < 4 cm, no fetal cardiac activity, normal renal/hepatic function.',
    'Rupture or haemodynamic instability → surgery; salpingectomy is preferred when the contralateral tube is healthy.',
  ],
  shoulder: [
    'First-line: McRoberts + suprapubic pressure; then Rubin II/Woods screw, posterior arm, all-fours.',
    'Never fundal pressure. Episiotomy does not relieve the bony obstruction.',
  ],
  pcos: [
    'Rotterdam = 2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovarian morphology.',
    'First-line ovulation induction is LETROZOLE (superior live birth to clomiphene). Clomiphene is an alternative, NOT first-line.',
    'PCOM (ESHRE 2023) = ≥ 20 follicles per ovary or ovarian volume ≥ 10 mL.',
    'Anovulatory PCOS needs endometrial protection (unopposed oestrogen → hyperplasia/cancer).',
  ],
  fibroid: [
    'Submucosal (FIGO 0-2) fibroids cause the most bleeding and infertility.',
    'Myomectomy for fertility preservation; hysterectomy for completed family; GnRH agonist 3-6 months pre-operatively.',
  ],
  gdm: [
    'Screen at 24-28 weeks with a 75 g OGTT; IADPSG/WHO: fasting ≥ 92, 1 h ≥ 180, 2 h ≥ 153 mg/dL — any ONE diagnoses GDM.',
    'Targets: fasting < 95, 1 h < 140, 2 h < 120 mg/dL.',
  ],
};

/**
 * Deterministic safety net: if a live answer repeats an outdated fact that the
 * curated evidence explicitly overrides, the answer is rejected and the chain
 * falls through to the curated vault.
 */
const FACT_GUARDS: Partial<Record<ObgynTopic['id'], { outdated: RegExp; required: RegExp; note: string }>> = {
  pcos: {
    outdated: /clomiphene|clomifene/i,
    required: /letrozole/i,
    note: 'clomiphene presented without letrozole as first-line',
  },
};

export const contradictsFactLock = (topic: ObgynTopic | null, text: string): string | null => {
  if (!topic) return null;
  const guard = FACT_GUARDS[topic.id];
  if (!guard) return null;
  if (guard.outdated.test(text) && !guard.required.test(text)) return guard.note;
  return null;
};

const isApproved = (reference: string): boolean => {
  const lower = reference.toLowerCase();
  return APPROVED_REFERENCE_PREFIXES.some((prefix) => lower.startsWith(prefix));
};

/** Book titles lose the model's casing and phrasing; keep only a certain edition/year. */
const BOOK_SOURCES: ReadonlyArray<readonly [RegExp, string]> = [
  [/^williams obstetrics\b/i, 'Williams Obstetrics'],
  [/^shaw'?s?\b/i, "Shaw's Textbook of Gynaecology"],
  [/^dutta'?s?\b/i, "Dutta's Textbook of Obstetrics and Gynaecology"],
  [/^speroff'?s?\b/i, "Speroff's Clinical Gynecologic Endocrinology and Infertility"],
  [/^novak'?s?\b/i, "Novak's Gynecology"],
];

/** Organisations/guidelines keep their descriptor (bulletin number, year, topic). */
const ORGANISATION_SOURCES: ReadonlyArray<readonly [RegExp, string]> = [
  [/^world health organization\b/i, 'WHO'],
  [/^national institute for health and care excellence\b/i, 'NICE'],
  [/^rcog\b/i, 'RCOG'],
  [/^acog\b/i, 'ACOG'],
  [/^figo\b/i, 'FIGO'],
  [/^who\b/i, 'WHO'],
  [/^fogsi\b/i, 'FOGSI'],
  [/^nice\b/i, 'NICE'],
  [/^cochrane\b/i, 'Cochrane'],
  [/^eshre\b/i, 'ESHRE'],
  [/^icmr\b/i, 'ICMR'],
  [/^ncert\b/i, 'NCERT'],
  [/^unicef\b/i, 'UNICEF'],
];

const EDITION_RE = /\b(\d{1,2}(?:st|nd|rd|th)?\s*(?:ed|edition)|20\d{2})\b/i;

const normalise = (value: string): string =>
  value
    .replace(/[\u2010\u2011\u2012\u2013]/g, '-')
    .replace(/[\u00A0\u2007\u2009\u202F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Same cleanup for human-facing answer text, preserving line breaks. */
export const normaliseAnswerText = (value: string): string =>
  value
    .replace(/[\u2010\u2011\u2012]/g, '-')
    .replace(/[\u00A0\u2007\u2009\u202F]/g, ' ')
    .trim();

const canonicaliseSource = (reference: string): string => {
  for (const [pattern, canonical] of BOOK_SOURCES) {
    if (!pattern.test(reference)) continue;
    const edition = reference.replace(pattern, '').match(EDITION_RE);
    return edition ? `${canonical} ${edition[1]}` : canonical;
  }
  for (const [pattern, canonical] of ORGANISATION_SOURCES) {
    if (!pattern.test(reference)) continue;
    const descriptor = reference.replace(pattern, '').trim();
    return descriptor.length > 0 ? `${canonical} ${descriptor}` : canonical;
  }
  return reference;
};

/**
 * Keeps only verifiable sources, canonicalises their names, deduplicates, and
 * falls back to the topic's curated bibliography when nothing survives.
 */
export const sanitiseReferences = (
  references: readonly string[],
  fallback: readonly string[],
): string[] => {
  const seen = new Set<string>();
  const cleaned: string[] = [];

  for (const raw of references) {
    const reference = canonicaliseSource(normalise(raw).replace(/[.;,]+$/, ''));
    if (reference.length < 3 || reference.length > 120) continue;
    if (!isApproved(reference)) continue;
    const key = reference.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    cleaned.push(reference);
    if (cleaned.length >= 5) break;
  }

  if (cleaned.length > 0) return cleaned;
  return [...new Set(fallback)].slice(0, 3);
};

/** Curated bibliography for offline answers (no model call involved). */
export const getTopicReferences = (topic: ObgynTopic | null, track: ObgynTrack): string[] =>
  topic ? [...TOPIC_REFERENCES[topic.id]] : [...TRACK_REFERENCES[track]];

export interface EvidencePack {
  topic: ObgynTopic | null;
  label: string | null;
  /** Empty string when no curated topic matches the question. */
  markdown: string;
  references: readonly string[];
  sourceTag: string | null;
}

/**
 * Retrieves the curated facts for the question's topic. `hint` is the uploaded
 * filename, which lets "preeclampsia.pdf" find the right block even when the
 * prompt itself is generic.
 */
export const buildEvidencePack = (
  prompt: string,
  track: ObgynTrack,
  hint: string | null = null,
): EvidencePack => {
  const topic = detectObgynTopic(prompt) ?? (hint ? detectObgynTopic(hint) : null);

  if (!topic) {
    return {
      topic: null,
      label: null,
      markdown: '',
      references: TRACK_REFERENCES[track],
      sourceTag: null,
    };
  }

  return {
    topic,
    label: topic.label,
    references: TOPIC_REFERENCES[topic.id],
    sourceTag: topic.sourceTag[track],
    markdown: [
      `TOPIC: ${topic.label}`,
      `FACT LOCK — HIGHEST AUTHORITY (if your training memory disagrees, these win):\n${FACT_LOCKS[
        topic.id
      ]
        .map((fact) => `- ${fact}`)
        .join('\n')}`,
      'FACULTY-CURATED FACTS (reuse these exact values):',
      topic.body[track],
      `EXAM PEARL: ${topic.pearl[track]}`,
      `CURATED SOURCE LINE: ${topic.sourceTag[track]}`,
    ].join('\n\n'),
  };
};
