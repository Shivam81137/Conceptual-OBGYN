/**
 * Visual Atlas — curated high-yield OBGYN schematics.
 * ---------------------------------------------------------------------------
 * Every plate is drawn as inline SVG so it stays razor-sharp at any size, works
 * offline, and adapts to light/dark themes (labels inherit `currentColor`).
 * Content is exam-oriented: each plate pairs an accurate schematic with a short
 * clinical caption and the facts examiners actually ask for.
 *
 * Diagrams are intentionally schematic, not radiological — they teach the
 * relationship, sequence or threshold, not a patient's anatomy.
 */

export type AtlasCategory = 'Anatomy' | 'Physiology' | 'Labour' | 'Obstetrics' | 'Oncology' | 'Imaging';

export interface AtlasDiagram {
  id: string;
  title: string;
  category: AtlasCategory;
  track: 'UG' | 'PG' | 'UG · PG';
  caption: string;
  keyPoints: readonly string[];
  Diagram: () => JSX.Element;
}

/* Palette — vivid enough on both the white glass and dark slate surfaces. */
const INK = 'currentColor';
const MUTED = '#94a3b8';
const TEAL = '#0d9488';
const SKY = '#0284c7';
const ROSE = '#e11d48';
const VIOLET = '#7c3aed';
const AMBER = '#d97706';
const EMERALD = '#059669';
const INDIGO = '#4f46e5';

type Pt = readonly [number, number];

/** Catmull-Rom → cubic Bézier, so hormonal curves read as smooth physiology. */
function smooth(points: readonly Pt[]): string {
  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/* ------------------------------------------------------------------ plates -- */

const FetalSkull = (): JSX.Element => {
  const rows = [
    { short: 'SOB', value: 9.5, y: 78, color: TEAL, note: 'complete flexion' },
    { short: 'BPD', value: 9.5, y: 128, color: EMERALD, note: 'transverse' },
    { short: 'OF', value: 11.5, y: 178, color: SKY, note: 'deflexion' },
    { short: 'MV', value: 13.5, y: 228, color: ROSE, note: 'brow' },
  ] as const;

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      <g stroke={INK} strokeWidth="2.4" fill="none">
        <ellipse cx="145" cy="150" rx="86" ry="78" />
        <path d="M88 122 C118 102 180 98 224 110" strokeWidth="1.8" strokeDasharray="4 5" />
        <path d="M214 84 L228 114" strokeWidth="1.8" />
        <path d="M92 194 L126 224" strokeWidth="1.8" />
      </g>
      <circle cx="226" cy="112" r="4.5" fill={TEAL} />
      <circle cx="92" cy="194" r="4.5" fill={TEAL} />
      <text x="238" y="110" fill={INK} fontSize="11" fontWeight="600">Bregma</text>
      <text x="82" y="186" fill={INK} fontSize="11" fontWeight="600" textAnchor="end">Lambda</text>
      <text x="145" y="246" fill={MUTED} fontSize="10.5" textAnchor="middle">Vertex</text>
      <text x="58" y="154" fill={MUTED} fontSize="10.5" textAnchor="end">Occiput</text>

      {rows.map((row) => (
        <g key={row.short}>
          <text x="286" y={row.y - 8} fill={INK} fontSize="11" fontWeight="700">
            {row.short} · {row.value} cm
          </text>
          <rect x="286" y={row.y} width={row.value * 7.6} height="13" rx="6.5" fill={row.color} opacity="0.85" />
          <text x={286 + row.value * 7.6 + 8} y={row.y + 10.5} fill={MUTED} fontSize="9.5">
            {row.note}
          </text>
        </g>
      ))}
    </svg>
  );
};

const PelvicPlanes = (): JSX.Element => (
  <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
    <line x1="165" y1="40" x2="165" y2="262" stroke={MUTED} strokeWidth="1" strokeDasharray="4 5" />
    <ellipse cx="165" cy="68" rx="112" ry="30" fill={TEAL} fillOpacity="0.1" stroke={TEAL} strokeWidth="2.4" />
    <ellipse cx="165" cy="152" rx="96" ry="25" fill={SKY} fillOpacity="0.1" stroke={SKY} strokeWidth="2.4" />
    <ellipse cx="165" cy="232" rx="80" ry="22" fill={VIOLET} fillOpacity="0.1" stroke={VIOLET} strokeWidth="2.4" />
    <text x="165" y="72" fill={INK} fontSize="12" fontWeight="700" textAnchor="middle">Inlet</text>
    <text x="165" y="156" fill={INK} fontSize="12" fontWeight="700" textAnchor="middle">Mid-cavity</text>
    <text x="165" y="236" fill={INK} fontSize="12" fontWeight="700" textAnchor="middle">Outlet</text>

    <g fill={MUTED} fontSize="10.5">
      <text x="300" y="56">AP 11 · Transverse 13</text>
      <text x="300" y="70">Oblique 12 · Conjugate 10.5</text>
      <text x="300" y="140">AP 11.5 · Transverse 12</text>
      <text x="300" y="220">AP 13 · Transverse 11</text>
    </g>
    <text x="300" y="268" fill={INK} fontSize="10.5" fontWeight="600">All measurements in cm</text>
  </svg>
);

const Partograph = (): JSX.Element => {
  const X = (t: number): number => 70 + (t / 12) * 370;
  const Y = (d: number): number => 250 - (d / 10) * 210;
  const curve: readonly Pt[] = [
    [0, 4], [1, 4.1], [2, 4.3], [3, 4.6], [4, 5], [5, 5.5], [6, 6],
    [7, 6.7], [8, 7.6], [9, 8.8], [10, 10],
  ].map(([t, d]) => [X(t), Y(d)] as const);

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      {[0, 2, 4, 6, 8, 10].map((d) => (
        <g key={`d${d}`}>
          <line x1="70" y1={Y(d)} x2="440" y2={Y(d)} stroke={MUTED} strokeWidth="0.6" strokeOpacity="0.35" />
          <text x="62" y={Y(d) + 3.5} fill={MUTED} fontSize="9" textAnchor="end">{d}</text>
        </g>
      ))}
      {[0, 2, 4, 6, 8, 10, 12].map((t) => (
        <g key={`t${t}`}>
          <line x1={X(t)} y1="40" x2={X(t)} y2="250" stroke={MUTED} strokeWidth="0.6" strokeOpacity="0.25" />
          <text x={X(t)} y="264" fill={MUTED} fontSize="9" textAnchor="middle">{t}</text>
        </g>
      ))}
      <line x1="70" y1="40" x2="70" y2="250" stroke={INK} strokeWidth="1.6" />
      <line x1="70" y1="250" x2="440" y2="250" stroke={INK} strokeWidth="1.6" />
      <text x="24" y="150" fill={INK} fontSize="10" fontWeight="600" transform="rotate(-90 24 150)" textAnchor="middle">
        Cervical dilatation (cm)
      </text>
      <text x="255" y="286" fill={INK} fontSize="10" fontWeight="600" textAnchor="middle">Time (hours)</text>

      <line x1={X(0)} y1={Y(4)} x2={X(6)} y2={Y(10)} stroke={EMERALD} strokeWidth="2.2" />
      <text x={X(4.7)} y={Y(8.8)} fill={EMERALD} fontSize="9.5" fontWeight="700">Alert</text>
      <line x1={X(4)} y1={Y(4)} x2={X(10)} y2={Y(10)} stroke={ROSE} strokeWidth="2.2" strokeDasharray="5 4" />
      <text x={X(8.9)} y={Y(8.4)} fill={ROSE} fontSize="9.5" fontWeight="700">Action</text>

      <path d={smooth(curve)} fill="none" stroke={SKY} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx={X(7)} cy={Y(6.7)} r="4" fill={SKY} />
      <text x={X(7) + 8} y={Y(6.7) - 8} fill={SKY} fontSize="9.5" fontWeight="700">Action crossed</text>

      <line x1={X(2)} y1={Y(6)} x2={X(6)} y2={Y(6)} stroke={ROSE} strokeWidth="1.4" />
      <text x={(X(2) + X(6)) / 2} y={Y(6) - 6} fill={ROSE} fontSize="9.5" fontWeight="700" textAnchor="middle">4 h</text>
    </svg>
  );
};

const MenstrualCycle = (): JSX.Element => {
  const X = (day: number): number => 60 + ((day - 1) / 27) * 390;
  const Y = (v: number): number => 250 - v * 190;
  const toPx = (series: readonly Pt[]): Pt[] => series.map(([d, v]) => [X(d), Y(v)] as const);

  const estrogen = toPx([
    [1, 0.15], [4, 0.18], [8, 0.3], [11, 0.62], [13, 0.95], [14.5, 0.9],
    [16, 0.55], [19, 0.62], [21, 0.78], [24, 0.55], [27, 0.3], [28, 0.15],
  ]);
  const progesterone = toPx([
    [1, 0.1], [8, 0.1], [12, 0.12], [14, 0.18], [18, 0.58], [21, 0.9],
    [24, 0.68], [26, 0.4], [28, 0.1],
  ]);
  const lh = toPx([
    [1, 0.12], [9, 0.14], [11, 0.2], [12.5, 0.35], [13.5, 0.95], [14.5, 0.35],
    [16, 0.14], [28, 0.1],
  ]);
  const fsh = toPx([
    [1, 0.2], [7, 0.24], [11, 0.34], [13.5, 0.6], [15, 0.28], [20, 0.2], [28, 0.18],
  ]);

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      <rect x={X(1)} y="36" width={X(5) - X(1)} height="214" fill={ROSE} fillOpacity="0.06" />
      <rect x={X(5)} y="36" width={X(13) - X(5)} height="214" fill={TEAL} fillOpacity="0.05" />
      <rect x={X(14)} y="36" width={X(16) - X(14)} height="214" fill={AMBER} fillOpacity="0.08" />
      <rect x={X(16)} y="36" width={X(28) - X(16)} height="214" fill={VIOLET} fillOpacity="0.05" />

      <line x1="60" y1="250" x2="450" y2="250" stroke={INK} strokeWidth="1.4" />
      <line x1="60" y1="36" x2="60" y2="250" stroke={INK} strokeWidth="1.4" />

      <path d={smooth(estrogen)} fill="none" stroke={TEAL} strokeWidth="2.4" />
      <path d={smooth(progesterone)} fill="none" stroke={VIOLET} strokeWidth="2.4" />
      <path d={smooth(lh)} fill="none" stroke={ROSE} strokeWidth="2.4" />
      <path d={smooth(fsh)} fill="none" stroke={SKY} strokeWidth="2" strokeDasharray="4 3" />

      <text x={X(3)} y="272" fill={MUTED} fontSize="9" textAnchor="middle">Menstrual</text>
      <text x={X(9.5)} y="272" fill={MUTED} fontSize="9" textAnchor="middle">Follicular</text>
      <text x={X(15)} y="272" fill={AMBER} fontSize="9" fontWeight="700" textAnchor="middle">Ovulation</text>
      <text x={X(22)} y="272" fill={MUTED} fontSize="9" textAnchor="middle">Luteal</text>

      <g fontSize="9" fontWeight="600">
        <circle cx="78" cy="24" r="3.5" fill={TEAL} />
        <text x="86" y="27" fill={INK}>Estrogen</text>
        <circle cx="168" cy="24" r="3.5" fill={VIOLET} />
        <text x="176" y="27" fill={INK}>Progesterone</text>
        <circle cx="292" cy="24" r="3.5" fill={ROSE} />
        <text x="300" y="27" fill={INK}>LH</text>
        <circle cx="352" cy="24" r="3.5" fill={SKY} />
        <text x="360" y="27" fill={INK}>FSH</text>
      </g>
    </svg>
  );
};

const CardinalMovements = (): JSX.Element => {
  const steps = [
    ['1', 'Engagement', 'BPD passes the pelvic inlet'],
    ['2', 'Descent', 'Continuous downward progress'],
    ['3', 'Flexion', 'Chin to chest — smallest diameter'],
    ['4', 'Internal rotation', 'Occiput rotates to the symphysis'],
    ['5', 'Extension', 'Head delivered by extension'],
    ['6', 'Restitution', 'Head untwists back to OA'],
    ['7', 'External rotation', 'Shoulders rotate; head turns'],
    ['8', 'Expulsion', 'Anterior then posterior shoulder'],
  ] as const;
  const palette = [TEAL, SKY, EMERALD, INDIGO, VIOLET, AMBER, ROSE, TEAL];

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      <line x1="46" y1="42" x2="46" y2="266" stroke={MUTED} strokeWidth="1.4" strokeDasharray="4 5" />
      {steps.map(([n, name, detail], i) => {
        const y = 46 + i * 30;
        return (
          <g key={n}>
            <circle cx="46" cy={y} r="12" fill={palette[i]} fillOpacity="0.16" stroke={palette[i]} strokeWidth="1.6" />
            <text x="46" y={y + 3.8} fill={palette[i]} fontSize="10" fontWeight="700" textAnchor="middle">{n}</text>
            <text x="68" y={y + 1} fill={INK} fontSize="11" fontWeight="700">{name}</text>
            <text x="68" y={y + 12} fill={MUTED} fontSize="9">{detail}</text>
          </g>
        );
      })}
    </svg>
  );
};

const CtgDecelerations = (): JSX.Element => {
  const panels = [
    {
      x: 10,
      title: 'Early',
      sub: 'Head compression · benign',
      color: SKY,
      dip: 'M 12 96 L 46 96 C 56 96 58 124 68 124 C 78 124 80 96 92 96 L 138 96',
      contraction: 'M 38 190 Q 62 162 86 190',
    },
    {
      x: 170,
      title: 'Late',
      sub: 'Uteroplacental insufficiency',
      color: ROSE,
      dip: 'M 12 96 L 54 96 C 64 96 66 124 76 124 C 86 124 88 96 100 96 L 138 96',
      contraction: 'M 26 190 Q 50 162 74 190',
    },
    {
      x: 330,
      title: 'Variable',
      sub: 'Cord compression',
      color: AMBER,
      dip: 'M 12 96 L 58 96 L 70 128 L 82 96 L 138 96',
      contraction: 'M 30 190 Q 54 162 78 190',
    },
  ] as const;

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      {panels.map((panel) => (
        <g key={panel.title} transform={`translate(${panel.x}, 0)`}>
          <rect x="4" y="24" width="148" height="238" rx="12" fill={panel.color} fillOpacity="0.05" stroke={panel.color} strokeOpacity="0.2" />
          <text x="78" y="44" fill={panel.color} fontSize="12" fontWeight="700" textAnchor="middle">{panel.title}</text>
          <line x1="12" y1="96" x2="144" y2="96" stroke={MUTED} strokeWidth="1" strokeDasharray="3 4" />
          <path d={panel.dip} fill="none" stroke={panel.color} strokeWidth="2.6" strokeLinejoin="round" />
          <path d={panel.contraction} fill="none" stroke={MUTED} strokeWidth="1.6" />
          <text x="78" y="214" fill={MUTED} fontSize="8.5" textAnchor="middle">contraction</text>
          <text x="78" y="240" fill={INK} fontSize="9" fontWeight="600" textAnchor="middle">{panel.sub}</text>
        </g>
      ))}
    </svg>
  );
};

const PreviaVsAbruption = (): JSX.Element => (
  <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
    {[0, 240].map((offset, index) => (
      <g key={offset} transform={`translate(${offset}, 0)`}>
        <path d="M 62 54 Q 100 34 138 54 L 148 176 Q 100 214 52 176 Z" fill="none" stroke={INK} strokeWidth="2.4" />
        <rect x="88" y="204" width="24" height="30" rx="7" fill="none" stroke={INK} strokeWidth="2.2" />
        {index === 0 ? (
          <>
            <ellipse cx="100" cy="186" rx="40" ry="17" fill={ROSE} fillOpacity="0.75" />
            <text x="100" y="262" fill={ROSE} fontSize="11" fontWeight="700" textAnchor="middle">Placenta previa</text>
            <text x="100" y="278" fill={MUTED} fontSize="9" textAnchor="middle">Painless · bright red</text>
          </>
        ) : (
          <>
            <ellipse cx="78" cy="92" rx="27" ry="19" fill={ROSE} fillOpacity="0.75" />
            <path d="M 66 112 Q 86 130 104 112 Q 96 138 70 132 Z" fill={AMBER} fillOpacity="0.6" />
            <text x="100" y="262" fill={AMBER} fontSize="11" fontWeight="700" textAnchor="middle">Abruptio placentae</text>
            <text x="100" y="278" fill={MUTED} fontSize="9" textAnchor="middle">Painful · woody uterus</text>
          </>
        )}
      </g>
    ))}
  </svg>
);

const FigoEndometrial = (): JSX.Element => {
  const stages = [
    ['I', 'Confined to the corpus', 'IA <½ myometrium · IB ≥½', EMERALD],
    ['II', 'Cervical stromal invasion', 'Endocervical glands involved', SKY],
    ['III', 'Local / regional spread', 'IIIA serosa/adnexa · IIIB vagina · IIIC nodes', VIOLET],
    ['IV', 'Bladder, bowel or distant', 'IVA bladder/bowel mucosa · IVB distant mets', ROSE],
  ] as const;

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      {stages.map(([roman, title, detail, color], i) => {
        const y = 42 + i * 62;
        return (
          <g key={roman}>
            <rect x="24" y={y} width="432" height="50" rx="12" fill={color} fillOpacity="0.06" stroke={color} strokeOpacity="0.25" />
            <circle cx="52" cy={y + 25} r="16" fill={color} fillOpacity="0.16" stroke={color} strokeWidth="1.6" />
            <text x="52" y={y + 30} fill={color} fontSize="13" fontWeight="800" textAnchor="middle">{roman}</text>
            <text x="82" y={y + 20} fill={INK} fontSize="11.5" fontWeight="700">{title}</text>
            <text x="82" y={y + 36} fill={MUTED} fontSize="9.5">{detail}</text>
          </g>
        );
      })}
    </svg>
  );
};

const EctopicSites = (): JSX.Element => (
  <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
    <path d="M 205 78 Q 240 62 275 78 L 284 168 Q 240 206 196 168 Z" fill={ROSE} fillOpacity="0.06" stroke={INK} strokeWidth="2.4" />
    <rect x="228" y="196" width="24" height="34" rx="7" fill="none" stroke={INK} strokeWidth="2.2" />
    <path d="M 205 88 C 168 72 136 88 116 116" fill="none" stroke={INK} strokeWidth="2.2" />
    <path d="M 275 88 C 312 72 344 88 364 116" fill="none" stroke={INK} strokeWidth="2.2" />
    <ellipse cx="110" cy="132" rx="16" ry="11" fill={SKY} fillOpacity="0.25" stroke={SKY} strokeWidth="1.6" />
    <ellipse cx="370" cy="132" rx="16" ry="11" fill={SKY} fillOpacity="0.25" stroke={SKY} strokeWidth="1.6" />

    <g fontSize="9.5" fontWeight="600">
      <circle cx="150" cy="96" r="4" fill={ROSE} />
      <text x="150" y="84" fill={INK} textAnchor="middle">Ampulla 70%</text>
      <circle cx="196" cy="90" r="4" fill={VIOLET} />
      <text x="176" y="72" fill={INK} textAnchor="middle">Isthmus 12%</text>
      <circle cx="122" cy="114" r="4" fill={EMERALD} />
      <text x="96" y="106" fill={INK} textAnchor="middle">Fimbria 11%</text>
      <circle cx="212" cy="80" r="4" fill={AMBER} />
      <text x="244" y="66" fill={INK} textAnchor="middle">Interstitial 2–3%</text>
    </g>
    <text x="240" y="270" fill={MUTED} fontSize="9.5" textAnchor="middle">Ovarian · cervical · abdominal sites are rare</text>
  </svg>
);

const PcosRotterdam = (): JSX.Element => (
  <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
    <circle cx="185" cy="118" r="74" fill={TEAL} fillOpacity="0.12" stroke={TEAL} strokeWidth="2" />
    <circle cx="295" cy="118" r="74" fill={VIOLET} fillOpacity="0.12" stroke={VIOLET} strokeWidth="2" />
    <circle cx="240" cy="196" r="74" fill={AMBER} fillOpacity="0.12" stroke={AMBER} strokeWidth="2" />
    <text x="240" y="132" fill={INK} fontSize="16" fontWeight="800" textAnchor="middle">2 of 3</text>
    <text x="240" y="150" fill={MUTED} fontSize="9" textAnchor="middle">after excluding other causes</text>

    <g fontSize="9.5" fontWeight="600">
      <text x="126" y="56" fill={TEAL} textAnchor="middle">Oligo / anovulation</text>
      <text x="354" y="56" fill={VIOLET} textAnchor="middle">Hyperandrogenism</text>
      <text x="240" y="288" fill={AMBER} textAnchor="middle">Polycystic ovaries</text>
    </g>
  </svg>
);

const BishopScore = (): JSX.Element => {
  const cols = [30, 180, 240, 300, 370, 450];
  const rows = [40, 70, 110, 150, 190, 230, 270];
  const body = [
    ['Dilatation (cm)', '0', '1–2', '3–4', '≥5'],
    ['Effacement (%)', '0–30', '40–50', '60–70', '≥80'],
    ['Station', '−3', '−2', '−1 / 0', '+1 / +2'],
    ['Consistency', 'Firm', 'Medium', 'Soft', '—'],
    ['Position', 'Posterior', 'Mid', 'Anterior', '—'],
  ] as const;

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      {rows.map((y) => (
        <line key={`h${y}`} x1="30" y1={y} x2="450" y2={y} stroke={MUTED} strokeWidth="0.8" strokeOpacity="0.5" />
      ))}
      {cols.map((x) => (
        <line key={`v${x}`} x1={x} y1="40" x2={x} y2="270" stroke={MUTED} strokeWidth="0.8" strokeOpacity="0.5" />
      ))}
      <rect x="30" y="40" width="420" height="30" fill={TEAL} fillOpacity="0.08" />
      {['Parameter', '0', '1', '2', '3'].map((label, i) => (
        <text
          key={label}
          x={cols[i] + (i === 0 ? 10 : (cols[i + 1] - cols[i]) / 2)}
          y="60"
          fill={INK}
          fontSize="10"
          fontWeight="700"
          textAnchor={i === 0 ? 'start' : 'middle'}
        >
          {label}
        </text>
      ))}
      {body.map((row, r) => {
        const y = 70 + r * 40;
        return row.map((cell, c) => (
          <text
            key={`${r}-${c}`}
            x={c === 0 ? cols[0] + 10 : (cols[c] + cols[c + 1]) / 2}
            y={y + 24}
            fill={c === 0 ? INK : MUTED}
            fontSize={c === 0 ? '9.5' : '9'}
            fontWeight={c === 0 ? '600' : '400'}
            textAnchor={c === 0 ? 'start' : 'middle'}
          >
            {cell}
          </text>
        ));
      })}
      <text x="240" y="290" fill={MUTED} fontSize="9.5" textAnchor="middle">Score ≥8 favourable · ≤6 needs cervical ripening</text>
    </svg>
  );
};

const Helperr = (): JSX.Element => {
  const steps = [
    ['H', 'Call for Help'],
    ['E', 'Evaluate for Episiotomy'],
    ['L', 'Legs — McRoberts manoeuvre'],
    ['P', 'Suprapubic Pressure'],
    ['E', 'Enter — internal rotation'],
    ['R', 'Remove the posterior arm'],
    ['R', 'Roll the patient'],
  ] as const;
  const palette = [ROSE, AMBER, EMERALD, SKY, INDIGO, VIOLET, TEAL];

  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily="inherit">
      {steps.map(([letter, text], i) => {
        const y = 44 + i * 35;
        return (
          <g key={`${letter}-${i}`}>
            <circle cx="52" cy={y} r="14" fill={palette[i]} fillOpacity="0.16" stroke={palette[i]} strokeWidth="1.6" />
            <text x="52" y={y + 5} fill={palette[i]} fontSize="13" fontWeight="800" textAnchor="middle">{letter}</text>
            <text x="80" y={y + 4} fill={INK} fontSize="12" fontWeight="600">{text}</text>
            {i < steps.length - 1 ? (
              <line x1="52" y1={y + 16} x2="52" y2={y + 19} stroke={MUTED} strokeWidth="1.4" />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------------------ export -- */

export const ATLAS_DIAGRAMS: readonly AtlasDiagram[] = [
  {
    id: 'fetal-skull',
    title: 'Fetal skull diameters',
    category: 'Anatomy',
    track: 'UG · PG',
    caption:
      'Attitude decides which diameter presents. Complete flexion offers the smallest suboccipitobregmatic diameter; deflexion and extension present progressively larger diameters and more obstructed labour.',
    keyPoints: [
      'Suboccipitobregmatic 9.5 cm — complete flexion, ideal vertex.',
      'Biparietal 9.5 cm is the transverse diameter that must negotiate the inlet.',
      'Occipitofrontal 11.5 cm — deflexed (military) attitude.',
      'Mentovertical 13.5 cm is the largest AP diameter; brow presentation obstructs.',
    ],
    Diagram: FetalSkull,
  },
  {
    id: 'pelvic-planes',
    title: 'Pelvic planes & diameters',
    category: 'Anatomy',
    track: 'UG · PG',
    caption:
      'The pelvic inlet, mid-cavity and outlet form a curved birth canal. The inlet is widest transversely, the outlet widest anteroposteriorly — the head must rotate to negotiate both.',
    keyPoints: [
      'Inlet: AP 11 cm, transverse 13 cm, oblique 12 cm.',
      'Obstetric conjugate (sacral promontory → symphysis) ≈ 10.5 cm.',
      'Mid-cavity: AP 11.5 cm, transverse 12 cm.',
      'Outlet: AP 13 cm, transverse 11 cm.',
    ],
    Diagram: PelvicPlanes,
  },
  {
    id: 'partograph',
    title: 'Partograph — the 4-hour rule',
    category: 'Labour',
    track: 'PG',
    caption:
      'Plot cervical dilatation against time from 4 cm. The alert line runs at 1 cm/hour; the action line sits 4 hours to its right. A curve that crosses the action line signals obstructed labour and the need to intervene or transfer.',
    keyPoints: [
      'Start plotting at 4 cm dilatation.',
      'Alert line = 1 cm/hour progress.',
      'Action line = alert line shifted 4 hours right.',
      'Crossing the action line mandates reassessment and intervention.',
    ],
    Diagram: Partograph,
  },
  {
    id: 'menstrual-cycle',
    title: 'Menstrual cycle hormonal axis',
    category: 'Physiology',
    track: 'UG',
    caption:
      'The hypothalamic–pituitary–ovarian loop drives the 28-day cycle. A rising oestrogen peak switches feedback from negative to positive, triggering the LH surge and ovulation about 36 hours later.',
    keyPoints: [
      'LH surge ≈ 36 h before ovulation.',
      'Oestrogen peak triggers the LH surge (positive feedback).',
      'Progesterone peaks ~7 days after ovulation (mid-luteal).',
      'Menstruation follows progesterone withdrawal.',
    ],
    Diagram: MenstrualCycle,
  },
  {
    id: 'cardinal-movements',
    title: 'Cardinal movements of labour',
    category: 'Labour',
    track: 'UG · PG',
    caption:
      'The fetal head negotiates the birth canal through a fixed sequence of movements. Internal rotation aligns the occiput with the symphysis; restitution and external rotation restore the shoulders to the oblique diameter.',
    keyPoints: [
      'Engagement → descent → flexion → internal rotation.',
      'Extension delivers the head; restitution untwists the neck.',
      'External rotation aligns the shoulders with the outlet.',
      'Expulsion delivers the anterior, then posterior, shoulder.',
    ],
    Diagram: CardinalMovements,
  },
  {
    id: 'ctg-decelerations',
    title: 'CTG deceleration patterns',
    category: 'Imaging',
    track: 'PG',
    caption:
      'Deceleration timing relative to contractions separates benign head compression from hypoxia and cord compression. Early dips mirror the contraction; late dips lag behind it; variable dips are abrupt and unrelated.',
    keyPoints: [
      'Early: mirror contractions, head compression, usually benign.',
      'Late: onset after contraction, uteroplacental insufficiency — act.',
      'Variable: abrupt V-shaped dips from cord compression — reposition.',
      'Always read the baseline and variability alongside the decelerations.',
    ],
    Diagram: CtgDecelerations,
  },
  {
    id: 'previa-abruption',
    title: 'Placenta previa vs abruptio',
    category: 'Obstetrics',
    track: 'PG',
    caption:
      'Both cause antepartum haemorrhage but differ sharply. Previa is painless bright-red bleeding with a soft uterus; abruption is painful, often dark bleeding with a woody, tender uterus and fetal compromise.',
    keyPoints: [
      'Previa: painless bleeding, soft uterus — avoid digital vaginal examination.',
      'Abruption: painful bleeding, woody uterus, fetal distress.',
      'Confirm previa by ultrasound before any pelvic examination.',
      'Abruption can be concealed; maternal shock may exceed visible loss.',
    ],
    Diagram: PreviaVsAbruption,
  },
  {
    id: 'figo-endometrial',
    title: 'FIGO endometrial cancer staging',
    category: 'Oncology',
    track: 'PG',
    caption:
      'FIGO 2023 staging moves from anatomy alone toward biologic risk. Stage I is confined to the corpus, II invades cervical stroma, III spreads locally or to nodes, and IV involves bladder/bowel mucosa or distant disease.',
    keyPoints: [
      'I: confined to corpus (IA <½ myometrium, IB ≥½).',
      'II: cervical stromal invasion.',
      'III: serosa/adnexa, vagina or pelvic nodes.',
      'IV: bladder/bowel mucosa or distant metastasis.',
    ],
    Diagram: FigoEndometrial,
  },
  {
    id: 'ectopic-sites',
    title: 'Ectopic pregnancy sites',
    category: 'Obstetrics',
    track: 'UG · PG',
    caption:
      'The ampulla is the commonest site because the fertilised ovum is delayed there. Any woman of reproductive age with pain, amenorrhoea and bleeding needs a pregnancy test and transvaginal scan.',
    keyPoints: [
      'Ampulla ~70%, isthmus ~12%, fimbria ~11%.',
      'Interstitial/cornual ~2–3% — ruptures later, with severe bleeding.',
      'Classic triad: pain, amenorrhoea, vaginal bleeding.',
      'Methotrexate for stable, unruptured, hCG <5000 with no cardiac activity.',
    ],
    Diagram: EctopicSites,
  },
  {
    id: 'pcos-rotterdam',
    title: 'PCOS — Rotterdam criteria',
    category: 'Physiology',
    track: 'PG',
    caption:
      'PCOS is diagnosed by two of three Rotterdam criteria after excluding other causes. It is a diagnosis of exclusion, so thyroid disease, hyperprolactinaemia and congenital adrenal hyperplasia must be ruled out.',
    keyPoints: [
      'Two of three: oligo/anovulation, hyperandrogenism, polycystic ovaries.',
      'Exclude thyroid disease, hyperprolactinaemia and CAH.',
      'Screen for insulin resistance, dyslipidaemia and endometrial risk.',
      'Lifestyle change is first-line; letrozole is preferred for ovulation induction.',
    ],
    Diagram: PcosRotterdam,
  },
  {
    id: 'bishop-score',
    title: 'Bishop score',
    category: 'Labour',
    track: 'PG',
    caption:
      'The Bishop score predicts the likelihood of successful induction. Five components are scored 0–3; a score of 8 or more indicates a favourable cervix, while 6 or less usually warrants cervical ripening first.',
    keyPoints: [
      'Components: dilatation, effacement, station, consistency, position.',
      'Maximum score 13; ≥8 is favourable.',
      '≤6 suggests ripening with prostaglandin or a balloon catheter.',
      'Document the score before and after ripening.',
    ],
    Diagram: BishopScore,
  },
  {
    id: 'helperr',
    title: 'Shoulder dystocia — HELPERR',
    category: 'Labour',
    track: 'PG',
    caption:
      'Shoulder dystocia is an obstetric emergency: call for help, then work through the HELPERR sequence while documenting times. Avoid fundal pressure and excessive traction on the head.',
    keyPoints: [
      'H — Help; E — Evaluate for episiotomy.',
      'L — Legs (McRoberts); P — suprapubic pressure.',
      'E — Enter for internal rotation; R — remove posterior arm.',
      'R — Roll the patient; never apply fundal pressure.',
    ],
    Diagram: Helperr,
  },
];

export const ATLAS_CATEGORIES: readonly AtlasCategory[] = [
  'Anatomy',
  'Physiology',
  'Labour',
  'Obstetrics',
  'Oncology',
  'Imaging',
];
