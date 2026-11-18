import { AMBER, EMERALD, INDIGO, INK, MUTED, ROSE, SKY, TEAL, VIOLET, type AtlasDiagram } from '@/data/content/visualAtlas';

/**
 * Visual Atlas — extra plates (hormone-free, exam-threshold focused).
 * Same rules as the core atlas: inline SVG, `currentColor` text, no assets,
 * schematic rather than radiological.
 */

const svgProps = { viewBox: '0 0 480 300', className: 'h-full w-full', 'aria-hidden': true, fontFamily: 'inherit' } as const;

/* ---------------------------------------------------------------- Apgar ---- */

const Apgar = (): JSX.Element => {
  const criteria = ['Appearance (colour)', 'Pulse (heart rate)', 'Grimace (reflex)', 'Activity (tone)', 'Respiration'];
  const bands = [
    { label: '7-10 normal', color: EMERALD, x: 292 },
    { label: '4-6 moderate', color: AMBER, x: 292 },
    { label: '0-3 severe', color: ROSE, x: 292 },
  ];
  return (
    <svg {...svgProps}>
      <text x="24" y="30" fill={INK} fontSize="12" fontWeight="700">Score each 0 · 1 · 2 → total /10</text>
      {criteria.map((name, index) => (
        <g key={name}>
          <rect x="24" y={46 + index * 40} width="238" height="30" rx="10" fill={TEAL} fillOpacity={0.1 + index * 0.02} stroke={TEAL} strokeWidth="1.4" />
          <text x="38" y={66 + index * 40} fill={INK} fontSize="11.5" fontWeight="600">{name}</text>
          <text x="248" y={66 + index * 40} fill={MUTED} fontSize="10" textAnchor="end">0-2</text>
        </g>
      ))}
      {bands.map((band, index) => (
        <g key={band.label}>
          <rect x={band.x} y={60 + index * 54} width="164" height="40" rx="12" fill={band.color} fillOpacity="0.14" stroke={band.color} strokeWidth="1.8" />
          <text x={band.x + 82} y={85 + index * 54} fill={INK} fontSize="12.5" fontWeight="700" textAnchor="middle">{band.label}</text>
        </g>
      ))}
      <text x="292" y="236" fill={MUTED} fontSize="10.5">Assessed at 1 and 5 minutes</text>
      <text x="292" y="252" fill={MUTED} fontSize="10.5">Repeat every 5 min if &lt;7</text>
    </svg>
  );
};

/* ------------------------------------------------------------ PALM-COEIN --- */

const PalmCoein = (): JSX.Element => {
  const palm = [['P', 'Polyp'], ['A', 'Adenomyosis'], ['L', 'Leiomyoma'], ['M', 'Malignancy / hyperplasia']] as const;
  const coein = [['C', 'Coagulopathy'], ['O', 'Ovulatory dysfunction'], ['E', 'Endometrial'], ['I', 'Iatrogenic'], ['N', 'Not yet classified']] as const;
  return (
    <svg {...svgProps}>
      <text x="120" y="28" fill={INK} fontSize="12.5" fontWeight="800" textAnchor="middle">PALM · structural</text>
      <text x="360" y="28" fill={INK} fontSize="12.5" fontWeight="800" textAnchor="middle">COEIN · non-structural</text>
      {palm.map(([letter, label], index) => (
        <g key={letter}>
          <circle cx="40" cy={64 + index * 54} r="19" fill={VIOLET} fillOpacity="0.16" stroke={VIOLET} strokeWidth="2" />
          <text x="40" y={69 + index * 54} fill={INK} fontSize="15" fontWeight="800" textAnchor="middle">{letter}</text>
          <text x="68" y={68 + index * 54} fill={INK} fontSize="11.5" fontWeight="600">{label}</text>
        </g>
      ))}
      {coein.map(([letter, label], index) => (
        <g key={letter}>
          <circle cx="280" cy={52 + index * 46} r="17" fill={SKY} fillOpacity="0.16" stroke={SKY} strokeWidth="2" />
          <text x="280" y={57 + index * 46} fill={INK} fontSize="14" fontWeight="800" textAnchor="middle">{letter}</text>
          <text x="306" y={56 + index * 46} fill={INK} fontSize="11.5" fontWeight="600">{label}</text>
        </g>
      ))}
      <line x1="240" y1="40" x2="240" y2="270" stroke={MUTED} strokeDasharray="4 5" />
    </svg>
  );
};

/* -------------------------------------------------------- cervical cancer --- */

const FigoCervix = (): JSX.Element => {
  const stages = [
    { s: 'I', note: 'Confined to cervix', color: EMERALD, w: 432 },
    { s: 'II', note: 'Beyond uterus, not pelvic wall / lower 1/3 vagina', color: SKY, w: 432 },
    { s: 'III', note: 'Pelvic wall / lower vagina / hydronephrosis / nodes', color: AMBER, w: 432 },
    { s: 'IV', note: 'Bladder / rectum mucosa or distant spread', color: ROSE, w: 432 },
  ] as const;
  return (
    <svg {...svgProps}>
      {stages.map((stage, index) => (
        <g key={stage.s}>
          <rect x="24" y={26 + index * 62} width={stage.w} height="44" rx="14" fill={stage.color} fillOpacity={0.1 + index * 0.05} stroke={stage.color} strokeWidth="2" />
          <text x="44" y={55 + index * 62} fill={INK} fontSize="17" fontWeight="800">{stage.s}</text>
          <text x="84" y={53 + index * 62} fill={INK} fontSize="11.5" fontWeight="600">{stage.note}</text>
        </g>
      ))}
      <text x="24" y="282" fill={MUTED} fontSize="10">FIGO 2018: stage III adds C1 / C2 for pelvic / para-aortic nodes</text>
    </svg>
  );
};

/* -------------------------------------------------------------- 4 Ts PPH --- */

const FourTs = (): JSX.Element => {
  const rows = [
    { t: 'Tone', note: 'Atony', pct: 70, color: ROSE },
    { t: 'Trauma', note: 'Tears, rupture, inversion', pct: 20, color: AMBER },
    { t: 'Tissue', note: 'Retained products, accreta', pct: 10, color: VIOLET },
    { t: 'Thrombin', note: 'Coagulopathy', pct: 1, color: SKY },
  ] as const;
  return (
    <svg {...svgProps}>
      <text x="24" y="28" fill={INK} fontSize="12" fontWeight="700">Causes of PPH · approximate share of cases</text>
      {rows.map((row, index) => (
        <g key={row.t}>
          <text x="24" y={64 + index * 56} fill={INK} fontSize="13" fontWeight="800">{row.t}</text>
          <text x="24" y={80 + index * 56} fill={MUTED} fontSize="10">{row.note}</text>
          <rect x="150" y={52 + index * 56} width="300" height="26" rx="13" fill={MUTED} fillOpacity="0.15" />
          <rect x="150" y={52 + index * 56} width={Math.max(row.pct * 3, 14)} height="26" rx="13" fill={row.color} fillOpacity="0.85" />
          <text x={158 + Math.max(row.pct * 3, 14)} y={70 + index * 56} fill={INK} fontSize="11" fontWeight="700">{row.pct}%</text>
        </g>
      ))}
    </svg>
  );
};

/* ------------------------------------------------------ pre-eclampsia ---- */

const Preeclampsia = (): JSX.Element => {
  const severe = ['BP ≥160 / 110', 'Platelets <100,000', 'Creatinine >1.1 mg/dL', 'Transaminases ≥2× normal', 'Pulmonary oedema', 'Headache / visual symptoms'];
  return (
    <svg {...svgProps}>
      <rect x="24" y="24" width="190" height="104" rx="16" fill={AMBER} fillOpacity="0.12" stroke={AMBER} strokeWidth="2" />
      <text x="119" y="52" fill={INK} fontSize="12" fontWeight="800" textAnchor="middle">Pre-eclampsia</text>
      <text x="119" y="76" fill={INK} fontSize="13" fontWeight="700" textAnchor="middle">BP ≥140 / 90</text>
      <text x="119" y="94" fill={MUTED} fontSize="10" textAnchor="middle">after 20 weeks, twice 4 h apart</text>
      <text x="119" y="112" fill={MUTED} fontSize="10" textAnchor="middle">+ proteinuria or organ dysfunction</text>
      <path d="M119 134 v26" stroke={MUTED} strokeWidth="2" markerEnd="url(#arrowPre)" />
      <defs>
        <marker id="arrowPre" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={MUTED} />
        </marker>
      </defs>
      <rect x="24" y="166" width="190" height="108" rx="16" fill={ROSE} fillOpacity="0.12" stroke={ROSE} strokeWidth="2" />
      <text x="119" y="196" fill={INK} fontSize="12" fontWeight="800" textAnchor="middle">Eclampsia</text>
      <text x="119" y="220" fill={INK} fontSize="11" textAnchor="middle">Seizures in pre-eclampsia</text>
      <text x="119" y="240" fill={MUTED} fontSize="10" textAnchor="middle">MgSO4 is the drug of choice</text>
      {severe.map((item, index) => (
        <g key={item}>
          <rect x="246" y={30 + index * 40} width="210" height="30" rx="10" fill={ROSE} fillOpacity="0.1" stroke={ROSE} strokeOpacity="0.5" strokeWidth="1.4" />
          <text x="260" y={50 + index * 40} fill={INK} fontSize="11" fontWeight="600">{item}</text>
        </g>
      ))}
      <text x="246" y="274" fill={MUTED} fontSize="10">Severe features</text>
    </svg>
  );
};

/* ----------------------------------------------------------- MgSO4 ladder --- */

const Mgso4 = (): JSX.Element => {
  const rungs = [
    { label: 'Therapeutic', value: '4-7 mEq/L', color: EMERALD, y: 232 },
    { label: 'Loss of patellar reflex', value: '8-10 mEq/L', color: AMBER, y: 172 },
    { label: 'Respiratory depression', value: '12-15 mEq/L', color: ROSE, y: 112 },
    { label: 'Cardiac arrest', value: '>30 mEq/L', color: VIOLET, y: 52 },
  ] as const;
  return (
    <svg {...svgProps}>
      <line x1="60" y1="270" x2="60" y2="34" stroke={MUTED} strokeWidth="2" />
      {rungs.map((rung) => (
        <g key={rung.label}>
          <circle cx="60" cy={rung.y} r="9" fill={rung.color} />
          <rect x="84" y={rung.y - 22} width="226" height="44" rx="13" fill={rung.color} fillOpacity="0.14" stroke={rung.color} strokeWidth="1.8" />
          <text x="98" y={rung.y - 3} fill={INK} fontSize="12" fontWeight="700">{rung.label}</text>
          <text x="98" y={rung.y + 13} fill={MUTED} fontSize="10.5">{rung.value}</text>
        </g>
      ))}
      <rect x="334" y="120" width="124" height="76" rx="16" fill={SKY} fillOpacity="0.14" stroke={SKY} strokeWidth="2" />
      <text x="396" y="148" fill={INK} fontSize="11" fontWeight="800" textAnchor="middle">Antidote</text>
      <text x="396" y="166" fill={INK} fontSize="10.5" textAnchor="middle">Calcium gluconate</text>
      <text x="396" y="182" fill={MUTED} fontSize="10" textAnchor="middle">1 g IV slowly</text>
    </svg>
  );
};

/* ------------------------------------------------------ contraception ------ */

const ContraceptiveFailure = (): JSX.Element => {
  const rows = [
    { m: 'Implant', perfect: 0.05, typical: 0.05 },
    { m: 'LNG-IUS', perfect: 0.2, typical: 0.2 },
    { m: 'Copper IUD', perfect: 0.6, typical: 0.8 },
    { m: 'Injectable', perfect: 0.2, typical: 4 },
    { m: 'Pill', perfect: 0.3, typical: 7 },
    { m: 'Condom', perfect: 2, typical: 13 },
  ] as const;
  const scale = 17;
  return (
    <svg {...svgProps}>
      <text x="24" y="22" fill={INK} fontSize="11.5" fontWeight="700">First-year failure per 100 women</text>
      <rect x="318" y="10" width="9" height="9" rx="2" fill={EMERALD} />
      <text x="331" y="18" fill={MUTED} fontSize="9.5">perfect</text>
      <rect x="378" y="10" width="9" height="9" rx="2" fill={ROSE} />
      <text x="391" y="18" fill={MUTED} fontSize="9.5">typical</text>
      {rows.map((row, index) => (
        <g key={row.m}>
          <text x="24" y={60 + index * 40} fill={INK} fontSize="11" fontWeight="600">{row.m}</text>
          <rect x="116" y={44 + index * 40} width={Math.max(row.typical * scale, 4)} height="12" rx="6" fill={ROSE} fillOpacity="0.85" />
          <rect x="116" y={44 + index * 40} width={Math.max(row.perfect * scale, 4)} height="12" rx="6" fill={EMERALD} />
          <text x={124 + Math.max(row.typical * scale, 4)} y={55 + index * 40} fill={MUTED} fontSize="10">{row.typical}%</text>
        </g>
      ))}
      <text x="24" y="290" fill={MUTED} fontSize="9.5">Long-acting methods have the smallest gap between perfect and typical use</text>
    </svg>
  );
};

/* ----------------------------------------------------- pubertal sequence --- */

const PubertySequence = (): JSX.Element => {
  const events = [
    { label: 'Thelarche', note: '~9-10 y', x: 40, color: ROSE },
    { label: 'Pubarche', note: '+6 months', x: 140, color: AMBER },
    { label: 'Growth spurt', note: 'early (B2-B3)', x: 240, color: EMERALD },
    { label: 'Menarche', note: '1.5-3 y after B2', x: 340, color: VIOLET },
    { label: 'Ovulation', note: '6-9 m after', x: 430, color: INDIGO },
  ] as const;
  return (
    <svg {...svgProps}>
      <text x="24" y="28" fill={INK} fontSize="12" fontWeight="700">Female pubertal sequence</text>
      <line x1="40" y1="130" x2="430" y2="130" stroke={MUTED} strokeWidth="3" strokeLinecap="round" />
      {events.map((event, index) => (
        <g key={event.label}>
          <circle cx={event.x} cy="130" r="11" fill={event.color} />
          <text x={event.x} y="134" fill="#fff" fontSize="10" fontWeight="800" textAnchor="middle">{index + 1}</text>
          <text x={event.x} y={index % 2 === 0 ? 104 : 168} fill={INK} fontSize="11.5" fontWeight="700" textAnchor="middle">{event.label}</text>
          <text x={event.x} y={index % 2 === 0 ? 90 : 184} fill={MUTED} fontSize="10" textAnchor="middle">{event.note}</text>
        </g>
      ))}
      <rect x="24" y="214" width="432" height="62" rx="14" fill={TEAL} fillOpacity="0.1" stroke={TEAL} strokeWidth="1.6" />
      <text x="40" y="238" fill={INK} fontSize="11" fontWeight="700">Boys: testicular volume ≥4 mL is the first sign</text>
      <text x="40" y="258" fill={MUTED} fontSize="10.5">Growth spurt is late (testis stage 3-4); precocious &lt;8 y girls, &lt;9 y boys</text>
    </svg>
  );
};

export const EXTRA_PLATES: readonly AtlasDiagram[] = [
  {
    id: 'apgar',
    title: 'Apgar score',
    category: 'Labour',
    track: 'UG · PG',
    caption: 'A quick five-item assessment of the newborn at 1 and 5 minutes. It guides resuscitation but never delays it.',
    keyPoints: [
      'Five items scored 0-2: appearance, pulse, grimace, activity, respiration.',
      '7-10 normal · 4-6 moderately depressed · 0-3 severely depressed.',
      'Repeat every 5 minutes while the score stays below 7.',
    ],
    Diagram: Apgar,
  },
  {
    id: 'palm-coein',
    title: 'PALM-COEIN (FIGO AUB)',
    category: 'Physiology',
    track: 'UG · PG',
    caption: 'FIGO classification of abnormal uterine bleeding in the reproductive years: structural causes (PALM) versus non-structural (COEIN).',
    keyPoints: [
      'PALM: Polyp, Adenomyosis, Leiomyoma, Malignancy/hyperplasia.',
      'COEIN: Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not yet classified.',
      'Ovulatory dysfunction is the commonest non-structural cause.',
    ],
    Diagram: PalmCoein,
  },
  {
    id: 'figo-cervix',
    title: 'FIGO cervical cancer staging',
    category: 'Oncology',
    track: 'PG',
    caption: 'Stage rises as disease spreads outward from the cervix. The 2018 revision allows imaging and pathology to assign stage and adds nodal substages.',
    keyPoints: [
      'I confined to cervix · II beyond uterus, spares pelvic wall and lower third of vagina.',
      'III involves pelvic wall, lower vagina, hydronephrosis or nodes (IIIC1 pelvic, IIIC2 para-aortic).',
      'IV bladder/rectal mucosa or distant spread.',
    ],
    Diagram: FigoCervix,
  },
  {
    id: 'pph-4ts',
    title: 'PPH — the 4 Ts',
    category: 'Obstetrics',
    track: 'UG · PG',
    caption: 'Four causes explain almost all postpartum haemorrhage. Tone (atony) dominates, so start with uterine massage and uterotonics while searching for the rest.',
    keyPoints: [
      'Tone ~70%: atony — massage, oxytocin, ergometrine, carboprost, misoprostol.',
      'Trauma ~20%: tears, rupture, inversion · Tissue ~10% · Thrombin ~1%.',
      'Always check for retained tissue and coagulopathy if bleeding persists.',
    ],
    Diagram: FourTs,
  },
  {
    id: 'preeclampsia',
    title: 'Pre-eclampsia & severe features',
    category: 'Obstetrics',
    track: 'UG · PG',
    caption: 'Hypertension after 20 weeks with organ involvement. Severe features change management: magnesium sulphate, antihypertensives and delivery planning.',
    keyPoints: [
      'BP ≥140/90 on two readings 4 hours apart after 20 weeks.',
      'Severe: BP ≥160/110, platelets <100,000, creatinine >1.1, transaminases 2× normal, pulmonary oedema, cerebral or visual symptoms.',
      'Eclampsia = seizures; MgSO4 is the drug of choice.',
    ],
    Diagram: Preeclampsia,
  },
  {
    id: 'mgso4-toxicity',
    title: 'MgSO4 toxicity ladder',
    category: 'Obstetrics',
    track: 'UG · PG',
    caption: 'Toxicity appears in a predictable order as serum magnesium rises. Monitor reflexes, respiratory rate and urine output, and stop the infusion if reflexes vanish.',
    keyPoints: [
      'Therapeutic 4-7 mEq/L · loss of patellar reflex 8-10 · respiratory depression 12-15 · cardiac arrest >30.',
      'Check patellar reflex, RR >16/min and urine output >30 mL/h before each dose.',
      'Antidote: 10% calcium gluconate 1 g IV slowly.',
    ],
    Diagram: Mgso4,
  },
  {
    id: 'contraceptive-failure',
    title: 'Contraceptive failure rates',
    category: 'Physiology',
    track: 'UG · PG',
    caption: 'First-year failure with perfect versus typical use. The gap shows how much a method depends on the user: long-acting methods barely depend on her at all.',
    keyPoints: [
      'Implant and LNG-IUS ≈0.05-0.2% — the most effective reversible methods.',
      'Pill 0.3% perfect but ~7% typical use; condom 2% vs ~13%.',
      'Counsel LARC first for women who want highly effective reversible contraception.',
    ],
    Diagram: ContraceptiveFailure,
  },
  {
    id: 'puberty-sequence',
    title: 'Pubertal sequence in girls',
    category: 'Physiology',
    track: 'UG · PG',
    caption: 'Puberty follows a predictable order. Breast budding comes first and menarche arrives late; the first cycles are usually anovulatory.',
    keyPoints: [
      'Thelarche ~9-10 y → pubarche ~6 months later → menarche 1.5-3 years after thelarche.',
      'Girls\' growth spurt is early; boys\' is late (testis stage 3-4).',
      'Precocious puberty: before 8 years (girls) or 9 years (boys).',
    ],
    Diagram: PubertySequence,
  },
];
