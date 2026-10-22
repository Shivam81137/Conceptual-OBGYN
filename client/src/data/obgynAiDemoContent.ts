import type { TrackId } from '@/types/tracks';

/**
 * Curated answer vault for the landing-page "Free OBGYN AI Studio".
 * ---------------------------------------------------------------------------
 * STEP 1 is the front-end experience: this module is the deterministic,
 * dependency-free brain behind the card. It resolves a studio request
 * (question + mode + track depth + optional attachment) into a fully
 * structured answer — pearl callout, tables, stepwise protocols and
 * flashcard decks — so the UI behaves like a live RAG assistant before the
 * `/api/v1/ai/*` pipeline is wired into the composer.
 *
 * The same request/answer shape can later be swapped for the server's
 * `SummariseResponse` without touching `ObgynAiStudioCard`.
 */

export type AiStudioMode = 'ask' | 'summarize' | 'flashcards';
export type StudioTrack = TrackId;
export type AttachmentKind = 'pdf' | 'image' | 'text';

export interface StudioAttachment {
  name: string;
  sizeBytes: number;
  kind: AttachmentKind;
}

/* ------------------------------------------------------------- answer shape */

export interface AnswerTableBlock {
  kind: 'table';
  title: string;
  columns: readonly string[];
  rows: ReadonlyArray<readonly string[]>;
}

export interface AnswerBulletsBlock {
  kind: 'bullets';
  title: string;
  items: readonly string[];
}

export interface AnswerStepsBlock {
  kind: 'steps';
  title: string;
  items: readonly string[];
}

export interface AnswerFlashcardsBlock {
  kind: 'flashcards';
  title: string;
  items: ReadonlyArray<{ q: string; a: string }>;
}

export type AnswerBlock = AnswerTableBlock | AnswerBulletsBlock | AnswerStepsBlock | AnswerFlashcardsBlock;

export interface StudioAnswer {
  pearl: string;
  blocks: readonly AnswerBlock[];
  sources: readonly string[];
}

export interface StudioQuery {
  query: string;
  mode: AiStudioMode;
  track: StudioTrack;
  attachment: StudioAttachment | null;
  attachmentText: string | null;
}

export interface StarterPrompt {
  id: string;
  label: string;
  query: string;
  /** Starter prompts that carry a depth badge also switch the studio track. */
  track?: StudioTrack;
}

export const STUDIO_STARTER_PROMPTS: readonly StarterPrompt[] = [
  {
    id: 'aph-table',
    label: 'Previa vs Abruptio',
    query: 'Placenta previa vs abruptio placentae comparison',
  },
  {
    id: 'menstrual-axis',
    label: 'Menstrual Axis',
    query: 'Explain the menstrual hormonal axis',
    track: 'NEET_UG',
  },
  {
    id: 'pph-protocol',
    label: 'PPH Protocol',
    query: 'Postpartum haemorrhage stepwise management protocol',
    track: 'NEET_PG',
  },
  {
    id: 'figo-endometrial',
    label: 'FIGO Staging',
    query: 'FIGO endometrial cancer staging summary',
  },
];

/* --------------------------------------------------------------- topic kits */

type TopicId = 'aph' | 'axis' | 'pph' | 'figo';

const TOPIC_MATCHERS: ReadonlyArray<{ id: TopicId; terms: readonly string[] }> = [
  {
    id: 'aph',
    terms: ['placenta previa', 'placenta praevia', 'previa', 'abruptio', 'abruption', 'antepartum h', 'aph'],
  },
  {
    id: 'axis',
    terms: ['menstrual', 'hormonal axis', 'hpo axis', 'ovulation', 'lh surge', 'menstruation', 'oestrogen', 'estrogen'],
  },
  {
    id: 'pph',
    terms: ['pph', 'postpartum h', 'atonic', 'uterine atony', 'third stage', 'third-stage'],
  },
  {
    id: 'figo',
    terms: ['figo', 'endometrial', 'endometrium'],
  },
];

const detectTopic = (query: string): TopicId | null => {
  for (const matcher of TOPIC_MATCHERS) {
    if (matcher.terms.some((term) => query.includes(term))) return matcher.id;
  }
  return null;
};

const trackSources = (
  track: StudioTrack,
  ug: readonly string[],
  pg: readonly string[],
): readonly string[] => (track === 'NEET_UG' ? ug : pg);

/* -------------------------------------------------- 1 · previa vs abruptio */

const buildAphAnswer = (track: StudioTrack): StudioAnswer => ({
  pearl:
    track === 'NEET_UG'
      ? 'Painless bright-red bleeding with a soft, relaxed uterus points to placenta previa — never examine vaginally before localising the placenta. Painful dark bleeding with a hard, tender uterus points to abruptio placentae.'
      : 'Previa: painless bright-red bleeding, soft uterus, malpresentation — no PV exam, confirm with TVS. Abruptio: painful dark bleeding, woody-hard uterus — screen coagulation early, DIC is the killer.',
  blocks: [
    {
      kind: 'table',
      title: 'Placenta Previa vs Abruptio Placentae',
      columns: ['Feature', 'Placenta Previa', 'Abruptio Placentae'],
      rows: [
        ['Bleeding', 'Painless, bright red, recurrent', 'Painful, dark, continuous; often concealed'],
        ['Uterine tone', 'Soft, relaxed, non-tender', 'Woody-hard, tender, irritable'],
        ['Fetal part', 'Malpresentation + high head common', 'Usually cephalic; fetal distress common'],
        ['Risk profile', 'Prior LSCS, multiparity, assisted conception', 'Chronic HTN, preeclampsia, trauma, past abruption'],
        ['Imaging', 'TVS: placenta overlying internal os', 'Retroplacental haematoma (± normal scan)'],
        ['First move', 'No PV exam; assess bleeding + fetal status', 'ABC, IV access, cross-match + coagulation'],
        ['Signature complication', 'PPH, placenta accreta spectrum, preterm birth', 'DIC, renal failure, Couvelaire uterus'],
      ],
    },
    {
      kind: 'bullets',
      title: track === 'NEET_UG' ? 'UG Core · The Two-Line Rule' : 'Clinical Anchors',
      items: [
        'Previa = implantation in the lower segment over/near the os; abruptio = premature separation of a normally implanted placenta.',
        'Both threaten mother and fetus — cross-match blood and keep the resuscitation bay ready before you reach for imaging.',
        'Ultrasound anchors the diagnosis, but a normal scan never fully excludes abruptio.',
      ],
    },
    ...(track === 'NEET_PG'
      ? [
          {
            kind: 'bullets' as const,
            title: 'PG Depth · Viva Zingers',
            items: [
              'Couvelaire uterus (uteroplacental apoplexy): blood extravasated into the myometrium — a bruised, boggy uterus at caesarean.',
              'Blakeley: a single PV examination in suspected previa can convert a warning haemorrhage into a catastrophic one — defer to TVS.',
              'Pain and shock out of proportion to visible bleeding = concealed abruption — think retroplacental clot.',
              'Prior LSCS with placenta over the scar → evaluate for placenta accreta spectrum before delivery.',
            ],
          },
        ]
      : []),
  ],
  sources: trackSources(
    track,
    ['Dutta (Basic) · APH chapter', 'NCERT-aligned core'],
    ['Williams Obst 26e', 'RCOG GTG 63', 'FOGSI APH guidance'],
  ),
});

/* ------------------------------------------------------- 2 · hormonal axis */

const buildAxisAnswer = (track: StudioTrack): StudioAnswer => ({
  pearl:
    track === 'NEET_UG'
      ? 'Ovulation happens 14 days BEFORE the next period — the luteal phase is fixed at ~14 days, so cycle-length variation lives in the follicular phase.'
      : 'Two feedbacks rule the axis: sustained-low oestrogen keeps GnRH suppressed, while sustained-high oestrogen flips to positive feedback → LH surge ≈ 36 h before ovulation.',
  blocks: [
    {
      kind: 'table',
      title: 'Ovarian & Endometrial Phase Map',
      columns: ['Phase', 'Dominant hormone', 'Endometrium'],
      rows: [
        ['Follicular', 'Oestrogen rising (FSH-driven recruitment)', 'Proliferative'],
        ['Mid-cycle', 'Oestrogen peak → LH surge ≈ 36 h pre-ovulation', 'Proliferative → secretory switch'],
        ['Luteal', 'Progesterone peaks ≈ day 21', 'Secretory'],
        ['Menses', 'All hormones at nadir', 'Menstrual shedding'],
      ],
    },
    {
      kind: 'bullets',
      title: track === 'NEET_UG' ? 'UG Core · HPO Axis in One Pass' : 'Clinical Anchors',
      items: [
        'Hypothalamus: pulsatile GnRH from the arcuate nucleus drives the entire axis.',
        'Anterior pituitary: FSH recruits follicles; LH triggers ovulation and forms the corpus luteum.',
        'Follicular phase: oestrogen from the dominant follicle thickens the endometrium (proliferative phase).',
        'Mid-cycle: sustained high oestrogen switches to positive feedback → LH surge ≈ 36 h before ovulation.',
        'Luteal phase: progesterone peaks ≈ day 21; no implantation → corpus luteum regresses → menses.',
      ],
    },
    ...(track === 'NEET_PG'
      ? [
          {
            kind: 'bullets' as const,
            title: 'PG Depth · Clinical Correlates',
            items: [
              'Anovulation (e.g. PCOD) → unopposed oestrogen → endometrial hyperplasia and AUB-O.',
              'A progesterone challenge bleed confirms oestrogen priming plus a patent outflow in secondary amenorrhoea.',
              'Recurrently short cycles signal a short follicular phase (diminished ovarian reserve) — not a short luteal phase.',
            ],
          },
        ]
      : []),
  ],
  sources: trackSources(
    track,
    ['NCERT Biology XI · Human Reproduction', 'Dutta (Basic)'],
    ['Williams 26e · Neuroendocrinology', 'Shaw 18e', 'Speroff (reference)'],
  ),
});

/* --------------------------------------------------------------- 3 · PPH -- */

const buildPphAnswer = (track: StudioTrack): StudioAnswer => ({
  pearl:
    track === 'NEET_UG'
      ? 'Atonic PPH sequence: call for help → rub up the uterus + oxytocin → tranexamic acid 1 g IV within 3 h → escalate mechanically and surgically without delay.'
      : 'Give tranexamic acid 1 g IV within 3 h of birth at the FIRST sign of PPH — before hunting for the cause. Carboprost is contraindicated in asthma; methylergometrine in hypertension.',
  blocks: [
    {
      kind: 'bullets',
      title: 'Think 4 Ts · Why She Is Bleeding',
      items: [
        'Tone — uterine atony (the commonest cause by far).',
        'Trauma — genital lacerations, uterine rupture, inversion.',
        'Tissue — retained placenta or clots.',
        'Thrombin — coagulopathy, pre-existing or consumptive.',
      ],
    },
    {
      kind: 'steps',
      title: 'Stepwise Escalation · The PPH Protocol',
      items: [
        'Call for help + time zero: activate the PPH team, two wide-bore IVs, cross-match blood and send coagulation.',
        'ABC and assess: pulse, BP, shock index; palpate uterine tone; inspect for lacerations and retained tissue.',
        'Uterotonics: oxytocin 10 IU IM/IV slowly, then 20–40 IU in 500 mL infusion; methylergometrine 0.2 mg IM (avoid in hypertension); carboprost 250 µg IM q15 min, max 2 mg (avoid in asthma); misoprostol 800 µg sublingual.',
        'Tranexamic acid 1 g IV over 10 min within 3 h of birth; repeat once if bleeding continues after 30 min.',
        'Mechanical control: bimanual compression → intrauterine balloon (Bakri, ≤ 500 mL) → compression sutures (B-Lynch).',
        'Surgical escalation: stepwise devascularisation → internal iliac ligation → peripartum hysterectomy — never delay definitive control.',
        'Monitor: urine output, repeat haemoglobin, treat DIC; record estimated blood loss for the case sheet.',
      ],
    },
    ...(track === 'NEET_PG'
      ? [
          {
            kind: 'bullets' as const,
            title: 'PG Depth · Numbers That Get Asked',
            items: [
              'Quantify the loss: ≥ 500 mL after vaginal birth, ≥ 1000 mL after caesarean = PPH; ongoing loss or instability = major PPH.',
              'Favourite trap: a relaxed uterus with continuing bleeding = missed trauma or coagulopathy — re-examine the genital tract.',
              'Keep uterotonics running while the Bakri balloon is inflated; document the fill volume.',
            ],
          },
        ]
      : []),
  ],
  sources: trackSources(
    track,
    ['Dutta (Basic) · Third-stage care', 'FOGSI PPH bundle'],
    ['WHO · PPH recommendations', 'RCOG GTG 52', 'WOMAN trial (Lancet 2017)'],
  ),
});

/* ------------------------------------------------- 4 · FIGO endometrial ---- */

const buildFigoAnswer = (track: StudioTrack): StudioAnswer => ({
  pearl:
    track === 'NEET_UG'
      ? 'Skeleton first: I = confined to the uterus (IA/IB by myometrial invasion), II = cervix or substantial LVSI, III = local spread or nodes, IV = bladder/bowel or distant spread.'
      : 'FIGO 2023 pairs anatomy with molecular class — substantial LVSI alone upgrades to IIB, while POLEmut behaves like low-risk disease and p53abn is the most aggressive.',
  blocks: [
    {
      kind: 'table',
      title: 'FIGO 2023 · Endometrial Cancer Staging',
      columns: ['Stage', 'Extent'],
      rows: [
        ['IA', 'Non-aggressive histology, < 50% myometrial invasion (or endometrium only)'],
        ['IB', 'Non-aggressive histology, ≥ 50% myometrial invasion'],
        ['IC', 'Aggressive histology (p53abn, serous, clear cell) confined to the uterus'],
        ['IIA', 'Invasion of the cervical stroma'],
        ['IIB', 'Substantial lymphovascular space invasion (LVSI)'],
        ['IIIA', 'Serosa and/or adnexal involvement'],
        ['IIIB', 'Vaginal and/or parametrial involvement'],
        ['IIIC1 / IIIC2', 'Pelvic lymph nodes / para-aortic lymph nodes'],
        ['IVA / IVB', 'Bladder or bowel mucosa / distant metastasis (includes inguinal nodes)'],
      ],
    },
    {
      kind: 'bullets',
      title: 'Molecular Classes · POLE → MMRd → NSMP → p53abn',
      items: [
        'POLEmut — ultra-mutated and immune-hot; the best prognosis, often de-escalated.',
        'MMRd — mismatch-repair deficient; immunotherapy-responsive.',
        'NSMP — no specific molecular profile; the "average" group.',
        'p53abn — the most aggressive; drives adjuvant treatment intensity.',
      ],
    },
    ...(track === 'NEET_PG'
      ? [
          {
            kind: 'bullets' as const,
            title: 'PG Depth · Why the Exam Loves 2023',
            items: [
              'Substantial LVSI alone → IIB: it changes adjuvant planning even for a uterus-confined tumour.',
              'POLEmut confined to the uterus collapses to stage IAm whatever the anatomical stage; non-metastatic p53abn is written IICm.',
              'Any cervical stromal invasion moves surgical planning from simple to radical territory.',
            ],
          },
        ]
      : []),
  ],
  sources: trackSources(
    track,
    ['NCERT-aligned core', 'Dutta (Basic) · Oncology chapter'],
    ['FIGO 2023 (Berek et al.)', 'Shaw 18e · Endometrial carcinoma'],
  ),
});

/* --------------------------------------------------------- flashcard decks */

const FLASHCARDS: Record<TopicId, ReadonlyArray<{ q: string; a: string }>> = {
  aph: [
    {
      q: 'Which pelvic examination is contraindicated in suspected placenta previa — and why?',
      a: 'Digital vaginal examination: it can provoke torrential haemorrhage. Localise the placenta with TVS first.',
    },
    {
      q: 'Which uterine finding separates abruptio placentae from previa?',
      a: 'A woody-hard, tender, irritable uterus in abruption; the uterus stays soft and non-tender in previa.',
    },
    {
      q: 'Most feared haematological complication of abruptio placentae?',
      a: 'Disseminated intravascular coagulation (DIC) — screen coagulation in every significant abruption.',
    },
    {
      q: 'Couvelaire uterus — what exactly is it?',
      a: 'Uteroplacental apoplexy: blood extravasation into the myometrium, giving a bruised, congested uterus at caesarean.',
    },
    {
      q: 'Does a normal ultrasound exclude abruptio placentae?',
      a: 'No — abruption is a clinical diagnosis; a retroplacental echolucency supports it but its absence proves nothing.',
    },
  ],
  axis: [
    {
      q: 'LH surge → ovulation interval?',
      a: '≈ 36 h from surge onset; ovulation itself ≈ 10–12 h after the LH peak.',
    },
    {
      q: 'Why does cycle length vary while the luteal phase does not?',
      a: 'Follicular phase duration varies; the luteal phase is fixed at ~14 days.',
    },
    {
      q: 'Which feedback switch triggers the LH surge?',
      a: 'Sustained high oestrogen from the dominant follicle → positive feedback on the axis.',
    },
    {
      q: 'Peak progesterone day in a 28-day cycle?',
      a: '≈ Day 21 — seven days after ovulation.',
    },
    {
      q: 'What sets the rhythm of the entire cycle?',
      a: 'Pulsatile GnRH secretion from the arcuate nucleus.',
    },
  ],
  pph: [
    {
      q: 'Dose and window for tranexamic acid in PPH?',
      a: '1 g IV over 10 min within 3 h of birth; repeat 1 g if bleeding continues after 30 min.',
    },
    {
      q: 'Which uterotonic is contraindicated in asthma?',
      a: 'Carboprost (prostaglandin F2α) — use oxytocin or misoprostol instead.',
    },
    {
      q: 'Which uterotonic is contraindicated in hypertension?',
      a: 'Methylergometrine — avoid in preeclampsia and hypertensive disease.',
    },
    {
      q: 'Maximum fill volume for a Bakri balloon?',
      a: '≈ 500 mL — tamponade, not distension.',
    },
    {
      q: 'The four Ts of PPH?',
      a: 'Tone (atony), Trauma, Tissue (retained), Thrombin (coagulopathy).',
    },
  ],
  figo: [
    {
      q: 'Which single FIGO 2023 feature upgrades to Stage IIB?',
      a: 'Substantial LVSI alone.',
    },
    {
      q: 'What defines Stage IC?',
      a: 'Aggressive histology (p53abn, serous, clear cell) confined to the uterus.',
    },
    {
      q: 'Split of Stage IIIC?',
      a: 'IIIC1 pelvic nodes; IIIC2 para-aortic nodes.',
    },
    {
      q: 'What is new in Stage IVB?',
      a: 'Distant metastasis — explicitly including inguinal nodes.',
    },
    {
      q: 'Best and worst molecular classes?',
      a: 'POLEmut best; p53abn worst.',
    },
  ],
};

const FLASHCARD_PEARLS: Record<TopicId, string> = {
  aph: 'Bleeding-in-pregnancy stems hinge on pain plus uterine tone — decide previa vs abruption in two lines before management.',
  axis: 'Remember: LH surge 36 h → ovulation 14 days before menses. Everything else is feedback loops.',
  pph: 'The examiner wants ordered thinking: call for help → uterotonics → TXA → tamponade → surgery.',
  figo: 'FIGO 2023 = anatomy + molecular class; substantial LVSI alone = IIB.',
};

const buildFlashcardAnswer = (topic: TopicId, track: StudioTrack): StudioAnswer => {
  const cards = FLASHCARDS[topic];
  return {
    pearl: FLASHCARD_PEARLS[topic],
    blocks: [
      {
        kind: 'flashcards',
        title: `Rapid Deck · 5 High-Yield Q&A Pearls (${track === 'NEET_UG' ? 'UG' : 'PG'})`,
        items: cards,
      },
    ],
    sources: trackSources(track, ['NCERT-aligned core', 'Dutta (Basic)'], ['Williams 26e', 'Shaw 18e', 'RCOG/FOGSI guidelines']),
  };
};

/* ----------------------------------------------------------- upload paths */

const PREECLAMPSIA_NAME_RE = /(pre[-_ ]?eclampsia|preeclampsia|\bpih\b|toxaemia|toxemia)/i;

const buildPreeclampsiaAnswer = (attachment: StudioAttachment, track: StudioTrack): StudioAnswer => ({
  pearl:
    track === 'NEET_UG'
      ? 'Preeclampsia = new hypertension after 20 weeks (≥ 140/90 on two occasions) WITH proteinuria or organ dysfunction — it is a multisystem disease, not just a blood-pressure number.'
      : 'MgSO4 toxicity escalates in a fixed order — loss of deep tendon reflexes → respiratory depression → cardiac arrest. Antidote: calcium gluconate 10%. Check reflexes, respiratory rate and urine output hourly.',
  blocks: [
    {
      kind: 'bullets',
      title: 'Severe Features · The Thresholds That Change Management',
      items: [
        'BP ≥ 160/110 mmHg (two readings 15 min apart).',
        'Platelets < 1 lakh/µL; transaminases ≥ 2× normal (or epigastric/RUQ pain).',
        'Creatinine > 1.1 mg/dL or doubled; urine output < 500 mL/24 h.',
        'Pulmonary oedema; new cerebral or visual symptoms.',
      ],
    },
    {
      kind: 'steps',
      title: 'MgSO4 Protocol · Straight From Your Notes',
      items: [
        'Pritchard: 4 g IV + 10 g IM (5 g in each buttock); maintenance 5 g IM deep alternate buttock every 4 h.',
        'Zuspan alternative: 4 g IV loading dose → 1 g/hour infusion.',
        'Monitor every hour: deep tendon reflexes, respiratory rate > 12/min, urine output > 30 mL/h.',
        'Continue 24 h after delivery or the last fit; antihypertensives: labetalol / nifedipine / hydralazine.',
      ],
    },
  ],
  sources: [
    attachment.name,
    track === 'NEET_PG' ? 'Cross-checked · Williams 26e, RCOG GTG 21' : 'Cross-checked · Dutta (Basic)',
  ],
});

const buildUploadAnswer = (request: StudioQuery): StudioAnswer => {
  const attachment = request.attachment;
  const name = attachment?.name ?? 'your upload';
  return {
    pearl: 'Turn any lecture upload into exam form with one pass: definition → classification → classical sign → management threshold.',
    blocks: [
      {
        kind: 'bullets',
        title: 'Make It Exam-Ready Tonight',
        items: [
          `Map the headings of ${name} into a one-page skeleton before reading a single paragraph.`,
          'Convert every table and flow chart into three viva questions — tables are examiner bait.',
          'Flag every number — dose, cut-off, week — those are the marks.',
          'Recall each heading aloud before reopening the file; patch only the gaps.',
        ],
      },
      {
        kind: 'bullets',
        title: 'Studio Note',
        items: [
          attachment?.kind === 'image'
            ? 'Image OCR streams in with the AI release — meanwhile use Ask mode for any line in the picture.'
            : 'Full PDF text extraction streams in with the AI release — meanwhile type a doubt in Ask mode or drop a .txt export of your notes.',
        ],
      },
    ],
    sources: [
      name,
      attachment?.kind === 'image' ? 'Image OCR · arrives with the AI release' : 'PDF extraction · arrives with the AI release',
    ],
  };
};

/* ------------------------------------------ local extractive note summary */

const NOTE_STOPWORDS = new Set([
  'the', 'and', 'with', 'from', 'that', 'this', 'these', 'those', 'into', 'after', 'before', 'during', 'should',
  'would', 'could', 'must', 'are', 'was', 'were', 'been', 'have', 'has', 'had', 'its', 'in', 'on', 'of', 'or',
  'as', 'at', 'to', 'for', 'by', 'not', 'but', 'can', 'may', 'most', 'more', 'than', 'then', 'there', 'their',
  'which', 'when', 'while', 'also', 'per', 'use', 'used', 'using', 'give', 'given', 'upto', 'about', 'each',
]);

const NOTE_NUMBER_RE = /\b\d+(?:[.,]\d+)?\s?(?:%|mg|g|mcg|µg|ml|mm|cm|iu|hours?|weeks?|days?|min)\b/gi;

const splitNoteSentences = (text: string): string[] =>
  text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?;])\s+(?=[A-Z0-9(])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 55);

const wordsOf = (sentence: string): string[] =>
  sentence
    .toLowerCase()
    .replace(/[^a-z0-9\s%-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 4 && !NOTE_STOPWORDS.has(word));

const trimSentence = (sentence: string, max = 240): string =>
  sentence.length > max ? `${sentence.slice(0, max - 1).trimEnd()}…` : sentence;

const buildNotesAnswer = (request: StudioQuery): StudioAnswer | null => {
  const attachment = request.attachment;
  const text = request.attachmentText;
  if (!attachment || !text) return null;

  const sentences = splitNoteSentences(text);
  if (sentences.length < 3) return null;

  const frequency = new Map<string, number>();
  for (const sentence of sentences) {
    for (const word of wordsOf(sentence)) frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }
  const topTerms = [...frequency.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);

  const scored = sentences.map((sentence, index) => ({
    sentence,
    index,
    score: (sentence.match(NOTE_NUMBER_RE)?.length ?? 0) * 2 + wordsOf(sentence).filter((word) => topTerms.includes(word)).length,
  }));
  const ranked = [...scored].sort((a, b) => b.score - a.score);
  const headline = ranked[0]?.sentence ?? sentences[0];
  const keyLines = ranked
    .slice(0, 5)
    .sort((a, b) => a.index - b.index)
    .filter((entry) => entry.sentence !== headline)
    .slice(0, 4)
    .map((entry) => trimSentence(entry.sentence));

  return {
    pearl: trimSentence(headline, 230),
    blocks: [
      {
        kind: 'bullets',
        title: `Key Lines the Studio Pulled · ${attachment.name}`,
        items: keyLines.length > 0 ? keyLines : [trimSentence(headline)],
      },
      {
        kind: 'steps',
        title: 'Suggested 20-Minute Drill',
        items: [
          'Read each key line once, then close the file and recall it aloud.',
          'Convert the three boldest numbers into one-line questions.',
          'Cross-check against the textbook heading and patch only the gaps.',
        ],
      },
    ],
    sources: [attachment.name, 'Processed locally · extractive pass'],
  };
};

/* ------------------------------------------------------ cloze flash cards */

const CLOZE_TARGET_RE = {
  dosage: /\b\d+(?:[.,]\d+)?\s?(?:%|mg|g|mcg|µg|mL|ml|IU|hours?|weeks?|days?|min|cm|mm)\b/i,
  term: /\b[A-Za-z][a-z]{7,}\b/,
} as const;

const buildClozeAnswer = (request: StudioQuery): StudioAnswer | null => {
  const attachment = request.attachment;
  const text = request.attachmentText;
  if (!attachment || !text) return null;

  const cards: Array<{ q: string; a: string }> = [];
  for (const sentence of splitNoteSentences(text)) {
    if (cards.length >= 5) break;
    const target = sentence.match(CLOZE_TARGET_RE.dosage)?.[0] ?? sentence.match(CLOZE_TARGET_RE.term)?.[0];
    if (!target) continue;
    cards.push({
      q: trimSentence(sentence.replace(target, '______'), 180),
      a: trimSentence(sentence, 220),
    });
  }

  if (cards.length < 3) return null;

  return {
    pearl: 'Cloze-first retrieval: say every blank aloud before you check — recall beats rereading.',
    blocks: [
      {
        kind: 'flashcards',
        title: `Recall Drill · ${attachment.name}`,
        items: cards,
      },
    ],
    sources: [attachment.name, 'Processed locally · cloze pass'],
  };
};

/* ----------------------------------------------------------- scaffold ---- */

const buildScaffoldAnswer = (request: StudioQuery): StudioAnswer => {
  const topic = request.query.trim() || 'the topic';
  const blocks: AnswerBlock[] = [];

  if (request.attachment) {
    blocks.push({
      kind: 'bullets',
      title: 'Grounded in Your Upload',
      items: [
        `Context attached: ${request.attachment.name} (${request.attachment.kind.toUpperCase()}).`,
        'Switch to Summarize mode to distil it into key lines, or keep asking follow-up doubts here.',
      ],
    });
  }

  blocks.push(
    {
      kind: 'bullets',
      title: `Structure “${topic}” the Examiner’s Way`,
      items: [
        'Definition: one line, with the threshold that defines it (age, weeks, cut-off).',
        'Classification: reproduce the exam-relevant system as a two-column table.',
        'Classical sign: name the single most specific finding and its closest differential.',
        'Management: first-line → escalate → definitive, always with doses and timings.',
      ],
    },
    {
      kind: 'bullets',
      title: 'Curated Vault · High-Yield Coverage',
      items: [
        'Partograph · preeclampsia & MgSO4 · PPH protocol.',
        'Placenta previa vs abruptio · FIGO 2023 endometrial staging.',
        'Menstrual hormonal axis · PCOS · uterine fibroids.',
        'Ectopic pregnancy · shoulder dystocia · gestational diabetes.',
      ],
    },
    {
      kind: 'steps',
      title: 'Next Moves in the Studio',
      items: [
        'Ask the same question after flipping the track toggle to compare NCERT vs Williams depth.',
        'Switch to Generate Rapid Flashcards to self-test the topic.',
        'Drop your lecture PDF in Summarize mode to merge your notes with this answer.',
      ],
    },
  );

  const trackLabel = request.track === 'NEET_UG' ? 'UG' : 'PG';
  return {
    pearl: `Frame “${topic}” the clinical way: definition → classification → classical sign → first-line management — in that order, every time.`,
    blocks,
    sources: [`Conceptual OBGYN · revision framework (${trackLabel})`],
  };
};

/* ------------------------------------------------------------- resolver -- */

export function resolveStudioAnswer(request: StudioQuery): StudioAnswer {
  const normalised = request.query.toLowerCase();
  const topic = detectTopic(normalised);

  if (request.mode === 'flashcards') {
    if (topic) return buildFlashcardAnswer(topic, request.track);
    const cloze = buildClozeAnswer(request);
    if (cloze) return cloze;
    return buildScaffoldAnswer(request);
  }

  if (request.attachment && (request.mode === 'summarize' || !topic)) {
    const notes = buildNotesAnswer(request);
    if (notes) return notes;
    if (request.attachment.kind !== 'text' && PREECLAMPSIA_NAME_RE.test(request.attachment.name)) {
      return buildPreeclampsiaAnswer(request.attachment, request.track);
    }
    return buildUploadAnswer(request);
  }

  if (topic) {
    switch (topic) {
      case 'aph':
        return buildAphAnswer(request.track);
      case 'axis':
        return buildAxisAnswer(request.track);
      case 'pph':
        return buildPphAnswer(request.track);
      case 'figo':
        return buildFigoAnswer(request.track);
    }
  }

  return buildScaffoldAnswer(request);
}
