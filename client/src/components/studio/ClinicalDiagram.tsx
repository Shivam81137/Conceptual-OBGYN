import type { ReactNode } from 'react';
import { ScanLine } from 'lucide-react';
import type { StudioNoteDiagram } from '@/data/revisionStudio';

/**
 * Bespoke clinical SVG diagrams for the Placenta Praevia / PAS module.
 * ---------------------------------------------------------------------------
 * Pure inline SVG (no external assets) so the figures survive offline, print
 * and dark mode. Every diagram is colour-coded and labelled; the figures are
 * schematic teaching drawings, not diagnostic images.
 */

const INK = 'fill-slate-700 dark:fill-slate-200';
const MUTED = 'fill-slate-500 dark:fill-slate-400';
const FAINT = 'fill-slate-400 dark:fill-slate-500';
const PANEL = 'fill-white/70 dark:fill-slate-900/50';
const PANEL_EDGE = 'stroke-slate-900/10 dark:stroke-white/10';

const PLACENTA = '#F9A8D4';
const PLACENTA_EDGE = '#BE185D';
const VILLI = '#EC4899';
const MUSCLE = '#FCA5A5';
const MUSCLE_EDGE = '#B91C1C';
const DECIDUA = '#14B8A6';
const SEROSA = '#64748B';
const BLADDER = '#BAE6FD';
const BLADDER_EDGE = '#0284C7';
const OS = '#DC2626';

function Frame({
  title,
  caption,
  viewBox,
  children,
}: {
  title: string;
  caption?: string;
  viewBox: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <figure className="mt-3 overflow-hidden rounded-2xl border border-slate-900/[0.07] bg-white/55 dark:border-white/[0.08] dark:bg-white/[0.03]">
      <figcaption className="flex items-center gap-1.5 border-b border-slate-900/[0.06] px-3 py-1.5 dark:border-white/[0.06]">
        <ScanLine className="h-3 w-3 text-indigo-500 dark:text-indigo-300" strokeWidth={2} aria-hidden="true" />
        <span className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
          {title}
        </span>
      </figcaption>
      <div className="px-2 py-2">
        <svg viewBox={viewBox} role="img" aria-label={title} className="h-auto w-full">
          {children}
        </svg>
      </div>
      {caption ? (
        <p className="border-t border-slate-900/[0.06] px-3 py-2 text-[10px] leading-relaxed text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}

/* ========================================================================== */
/* Diagram 1 — sagittal TVS distance classification                           */
/* ========================================================================== */

type TvsVariant = 'normal' | 'low' | 'praevia';

const TVS_PANELS: readonly { variant: TvsVariant; title: string; detail: string }[] = [
  { variant: 'normal', title: 'Normal', detail: '≥ 20 mm from os' },
  { variant: 'low', title: 'Low-lying', detail: '1–19 mm from os' },
  { variant: 'praevia', title: 'Praevia', detail: '0 mm · covers os' },
];

function TvsUterus({ x, variant }: { x: number; variant: TvsVariant }): JSX.Element {
  const cx = x + 105;
  const edgeY = variant === 'normal' ? 118 : variant === 'low' ? 150 : 176;
  const tone = variant === 'praevia' ? OS : variant === 'low' ? '#F59E0B' : '#059669';

  return (
    <g>
      {/* bladder (anterior) */}
      <path
        d={`M ${cx - 66} 108 q -12 24 2 38 q 14 14 24 -2 l 0 -36 Z`}
        fill={BLADDER}
        stroke={BLADDER_EDGE}
        strokeWidth={1.2}
        opacity={0.85}
      />
      {/* uterus body + cervix */}
      <path
        d={`M ${cx} 28 C ${cx + 36} 31 ${cx + 45} 70 ${cx + 38} 104 C ${cx + 33} 132 ${cx + 21} 152 ${cx + 14} 170 L ${cx + 14} 214 L ${cx - 14} 214 L ${cx - 14} 170 C ${cx - 21} 152 ${cx - 33} 132 ${cx - 38} 104 C ${cx - 45} 70 ${cx - 36} 31 ${cx} 28 Z`}
        fill="none"
        stroke="#334155"
        strokeWidth={1.8}
        className="dark:stroke-slate-300"
      />
      {/* cavity shading */}
      <path
        d={`M ${cx} 38 C ${cx + 28} 42 ${cx + 34} 74 ${cx + 28} 104 C ${cx + 23} 128 ${cx + 13} 148 ${cx + 7} 166 L ${cx + 7} 208 L ${cx - 7} 208 L ${cx - 7} 166 C ${cx - 13} 148 ${cx - 23} 128 ${cx - 28} 104 C ${cx - 34} 74 ${cx - 28} 42 ${cx} 38 Z`}
        className="fill-slate-100/80 dark:fill-slate-800/60"
      />
      {/* cervical canal */}
      <line x1={cx - 3.5} y1={172} x2={cx - 3} y2={212} stroke="#94A3B8" strokeWidth={1.4} />
      <line x1={cx + 3.5} y1={172} x2={cx + 3} y2={212} stroke="#94A3B8" strokeWidth={1.4} />

      {/* placenta band along the posterior wall */}
      <path
        d={`M ${cx + 8} 44 C ${cx + 27} 50 ${cx + 33} 78 ${cx + 29} 104 C ${cx + 25} 126 ${cx + 18} 140 ${cx + 16} ${edgeY}`}
        fill="none"
        stroke={PLACENTA}
        strokeWidth={13}
        strokeLinecap="round"
      />
      {variant === 'praevia' ? (
        <path d={`M ${cx + 16} 176 L ${cx - 16} 176`} stroke={PLACENTA} strokeWidth={13} strokeLinecap="round" />
      ) : null}
      <path
        d={`M ${cx + 8} 44 C ${cx + 27} 50 ${cx + 33} 78 ${cx + 29} 104 C ${cx + 25} 126 ${cx + 18} 140 ${cx + 16} ${edgeY}`}
        fill="none"
        stroke={PLACENTA_EDGE}
        strokeWidth={0.8}
        opacity={0.55}
      />

      {/* internal os marker */}
      <circle cx={cx} cy={172} r={3.4} fill={OS} />
      <text x={cx} y={226} textAnchor="middle" fontSize={7.5} className={FAINT}>
        internal os
      </text>

      {/* distance caliper */}
      {variant !== 'praevia' ? (
        <g>
          <line x1={cx + 50} y1={edgeY} x2={cx + 50} y2={172} stroke={tone} strokeWidth={1.6} />
          <line x1={cx + 45} y1={edgeY} x2={cx + 55} y2={edgeY} stroke={tone} strokeWidth={1.6} />
          <line x1={cx + 45} y1={172} x2={cx + 55} y2={172} stroke={tone} strokeWidth={1.6} />
          <text x={cx + 58} y={(edgeY + 172) / 2 + 3} fontSize={8} fontWeight={700} fill={tone}>
            {variant === 'normal' ? '≥ 20' : '1–19'}
          </text>
          <text x={cx + 58} y={(edgeY + 172) / 2 + 12} fontSize={7} fill={tone}>
            mm
          </text>
        </g>
      ) : (
        <g>
          <line x1={cx + 26} y1={176} x2={cx + 58} y2={176} stroke={OS} strokeWidth={1.4} strokeDasharray="3 2" />
          <text x={cx + 60} y={179} fontSize={8} fontWeight={700} fill={OS}>
            0 mm
          </text>
        </g>
      )}

      {/* panel title */}
      <text x={cx} y={244} textAnchor="middle" fontSize={9.5} fontWeight={700} className={INK}>
        {variant === 'normal' ? 'Normal' : variant === 'low' ? 'Low-lying placenta' : 'Placenta praevia'}
      </text>
      <text x={cx} y={256} textAnchor="middle" fontSize={8} fill={tone}>
        {variant === 'normal' ? 'edge ≥ 20 mm' : variant === 'low' ? 'edge 1–19 mm' : 'edge 0 mm · covers os'}
      </text>
    </g>
  );
}

function TvsDistanceDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 700 272"
      title="Diagram 1 · Sagittal TVS distance classification (> 16 weeks)"
      caption="Measure the placental edge to the internal os on transvaginal ultrasound. The distance — not a grade — defines normal (≥ 20 mm), low-lying (1–19 mm) and praevia (0 mm, covering the os)."
    >
      {TVS_PANELS.map((panel, index) => (
        <g key={panel.variant}>
          <rect x={8 + index * 232} y={8} width={216} height={258} rx={12} className={PANEL} strokeWidth={1} />
          <rect
            x={8 + index * 232}
            y={8}
            width={216}
            height={258}
            rx={12}
            fill="none"
            className={PANEL_EDGE}
            strokeWidth={1}
          />
          <TvsUterus x={8 + index * 232} variant={panel.variant} />
        </g>
      ))}
    </Frame>
  );
}

/* ========================================================================== */
/* Diagram 2 — Silver prior-caesarean escalation curve                        */
/* ========================================================================== */

const SILVER_WITH = [3.3, 11, 40, 61, 67, 67];
const SILVER_WITHOUT = [0.03, 0.2, 0.1, 0.8, 0.8, 4.7];
const SILVER_LABELS = ['0', '1', '2', '3', '4', '≥ 5'];

function SilverChart(): JSX.Element {
  const barW = 34;
  const step = 100;
  const startX = 108;
  const baseline = 226;
  const top = 42;
  const scale = (baseline - top) / 70;
  const miniBase = 352;
  const miniTop = 286;
  const miniScale = (miniBase - miniTop) / 5;

  return (
    <Frame
      viewBox="0 0 720 398"
      title="Diagram 2 · Silver et al. — prior caesarean sections vs PAS risk"
      caption="Upper panel: PAS risk when placenta praevia is present (3% → 11% → 40% → 61% → 67%). Lower panel: the same ladder when praevia is absent (0.03% → 4.7%). The scar–praevia combination is what drives the curve."
    >
      {/* with-praevia panel */}
      <text x={20} y={26} fontSize={9} fontWeight={700} className={INK}>
        Placenta praevia PRESENT · PAS risk
      </text>
      {[0, 10, 20, 30, 40, 50, 60, 70].map((tick) => (
        <g key={tick}>
          <line x1={70} y1={baseline - tick * scale} x2={676} y2={baseline - tick * scale} stroke="#94A3B8" strokeWidth={0.5} opacity={0.35} />
          <text x={62} y={baseline - tick * scale + 3} textAnchor="end" fontSize={7.5} className={FAINT}>
            {tick}%
          </text>
        </g>
      ))}
      {SILVER_WITH.map((value, index) => {
        const x = startX + index * step - barW / 2;
        const h = value * scale;
        return (
          <g key={`with-${index}`}>
            <rect
              x={x}
              y={baseline - h}
              width={barW}
              height={h}
              rx={4}
              fill={index >= 4 ? '#9F1239' : '#F43F5E'}
              opacity={0.9}
            />
            <text x={x + barW / 2} y={baseline - h - 6} textAnchor="middle" fontSize={9} fontWeight={700} fill="#BE123C">
              {`${value}%`}
            </text>
          </g>
        );
      })}
      <line x1={70} y1={baseline} x2={676} y2={baseline} stroke="#64748B" strokeWidth={1.4} />
      {SILVER_LABELS.map((label, index) => (
        <text key={label} x={startX + index * step} y={baseline + 15} textAnchor="middle" fontSize={8} className={MUTED}>
          {label}
        </text>
      ))}
      <text x={370} y={baseline + 29} textAnchor="middle" fontSize={8} className={FAINT}>
        number of previous caesarean sections
      </text>
      <g>
        <rect x={520} y={12} width={9} height={9} rx={2} fill="#F43F5E" />
        <text x={534} y={20} fontSize={7.5} className={MUTED}>
          with praevia
        </text>
      </g>

      {/* without-praevia mini panel */}
      <line x1={20} y1={258} x2={700} y2={258} stroke="#94A3B8" strokeWidth={0.6} opacity={0.4} />
      <text x={20} y={278} fontSize={9} fontWeight={700} className={INK}>
        Placenta praevia ABSENT · same scale of prior CS
      </text>
      <line x1={70} y1={miniBase} x2={676} y2={miniBase} stroke="#64748B" strokeWidth={1.2} />
      {[0, 1, 2, 3, 4, 5].map((tick) => (
        <g key={`mini-tick-${tick}`}>
          <line
            x1={70}
            y1={miniBase - tick * miniScale}
            x2={676}
            y2={miniBase - tick * miniScale}
            stroke="#94A3B8"
            strokeWidth={0.5}
            opacity={0.25}
          />
          <text x={62} y={miniBase - tick * miniScale + 3} textAnchor="end" fontSize={7} className={FAINT}>
            {tick}%
          </text>
        </g>
      ))}
      <polyline
        fill="none"
        stroke="#0EA5E9"
        strokeWidth={2}
        strokeLinejoin="round"
        points={SILVER_WITHOUT.map((value, index) => `${startX + index * step},${miniBase - value * miniScale}`).join(' ')}
      />
      {SILVER_WITHOUT.map((value, index) => (
        <g key={`without-${index}`}>
          <circle cx={startX + index * step} cy={miniBase - value * miniScale} r={3.2} fill="#0EA5E9" />
          <text
            x={startX + index * step}
            y={miniBase - value * miniScale - 7}
            textAnchor="middle"
            fontSize={7.5}
            fontWeight={600}
            fill="#0369A1"
          >
            {`${value}%`}
          </text>
        </g>
      ))}
      {SILVER_LABELS.map((label, index) => (
        <text key={`mini-label-${label}`} x={startX + index * step} y={miniBase + 13} textAnchor="middle" fontSize={7.5} className={MUTED}>
          {label}
        </text>
      ))}
      <text x={370} y={miniBase + 27} textAnchor="middle" fontSize={7.5} className={FAINT}>
        previous caesarean sections · risk stays &lt; 5% until ≥ 5 prior CS
      </text>
    </Frame>
  );
}

/* ========================================================================== */
/* Diagram 3 — FIGO grades 1 to 3c cross-sections                            */
/* ========================================================================== */

type FigoKind = 'normal' | 'g1' | 'g2' | 'g3a' | 'g3b' | 'g3c' | 'window';

const FIGO_CELLS: readonly { kind: FigoKind; grade: string; name: string }[] = [
  { kind: 'normal', grade: 'Normal', name: 'decidua intact' },
  { kind: 'g1', grade: 'Grade 1', name: 'accreta · adherent' },
  { kind: 'g2', grade: 'Grade 2', name: 'increta · myometrium' },
  { kind: 'g3a', grade: 'Grade 3a', name: 'percreta · serosa' },
  { kind: 'g3b', grade: 'Grade 3b', name: 'percreta · bladder' },
  { kind: 'g3c', grade: 'Grade 3c', name: 'percreta · parametrium' },
  { kind: 'window', grade: 'Window', name: 'scar dehiscence' },
];

function FigoPanel({ cell, x, y }: { cell: { kind: FigoKind; grade: string; name: string }; x: number; y: number }): JSX.Element {
  const { kind } = cell;
  const w = 158;
  const left = x + 7;
  const top = y + 26;
  const placentaH = 30;
  const muscleTop = top + placentaH;
  const muscleH = 34;
  const serosaY = muscleTop + muscleH;
  const bladderY = serosaY + 8;
  const isBladder = kind === 'g3b';
  const hasParametrium = kind === 'g3c';
  const uterusW = hasParametrium ? w - 34 : w;
  const right = left + uterusW;
  const center = left + uterusW / 2;

  const villiDepth =
    kind === 'g2' ? muscleTop + 24 : kind === 'g3a' ? serosaY + 8 : kind === 'g3b' ? bladderY + 14 : kind === 'g3c' ? muscleTop + 30 : muscleTop + 7;

  const villi = Array.from({ length: 6 }, (_, index) => {
    const vx = left + 18 + index * ((uterusW - 34) / 5);
    return `M ${vx} ${muscleTop} L ${vx + 5} ${muscleTop} L ${vx + 2.5} ${villiDepth} Z`;
  }).join(' ');

  const bulge = kind === 'g2' || kind === 'g3a' || kind === 'window';

  return (
    <g>
      <rect x={x + 4} y={y + 4} width={168} height={150} rx={10} className={PANEL} strokeWidth={1} />
      <rect x={x + 4} y={y + 4} width={168} height={150} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />

      {/* placenta */}
      <rect x={left} y={top} width={uterusW} height={placentaH} rx={4} fill={PLACENTA} opacity={0.9} />
      <rect x={left} y={top} width={uterusW} height={placentaH} rx={4} fill="none" stroke={PLACENTA_EDGE} strokeWidth={0.8} />
      {/* lacunae hint */}
      {[0, 1, 2, 3].map((index) => (
        <ellipse
          key={`lacuna-${index}`}
          cx={left + 20 + index * (uterusW / 5)}
          cy={top + 11 + (index % 2) * 6}
          rx={5}
          ry={2.6}
          fill="#FDF2F8"
          opacity={0.8}
        />
      ))}

      {/* decidua */}
      {kind === 'normal' ? (
        <line x1={left} y1={muscleTop} x2={right} y2={muscleTop} stroke={DECIDUA} strokeWidth={3} />
      ) : null}

      {/* myometrium */}
      {kind === 'window' ? (
        <g>
          <rect x={left} y={muscleTop} width={uterusW} height={muscleH} rx={3} fill={MUSCLE} opacity={0.55} />
          <rect x={center - 24} y={muscleTop} width={48} height={muscleH} className="fill-white/80 dark:fill-slate-900/70" />
        </g>
      ) : (
        <g>
          <rect x={left} y={muscleTop} width={uterusW} height={muscleH} rx={3} fill={MUSCLE} />
          <rect x={left} y={muscleTop} width={uterusW} height={muscleH} rx={3} fill="none" stroke={MUSCLE_EDGE} strokeWidth={0.9} />
          {[0, 1, 2].map((index) => (
            <path
              key={`fibre-${index}`}
              d={`M ${left + 6} ${muscleTop + 8 + index * 7} q 20 -4 40 0 t 40 0 t 40 0`}
              fill="none"
              stroke="#DC2626"
              strokeWidth={0.6}
              opacity={0.35}
            />
          ))}
        </g>
      )}

      {/* serosa */}
      {kind === 'g3a' || kind === 'g3b' ? (
        <g>
          <line x1={left} y1={serosaY} x2={center - 22} y2={serosaY} stroke={SEROSA} strokeWidth={2} />
          <line x1={center + 22} y1={serosaY} x2={right} y2={serosaY} stroke={SEROSA} strokeWidth={2} />
        </g>
      ) : bulge ? (
        <path
          d={`M ${left} ${serosaY} L ${center - 30} ${serosaY} Q ${center} ${serosaY + 12} ${center + 30} ${serosaY} L ${right} ${serosaY}`}
          fill="none"
          stroke={SEROSA}
          strokeWidth={2}
          strokeDasharray={kind === 'window' ? '4 3' : undefined}
        />
      ) : (
        <line x1={left} y1={serosaY} x2={right} y2={serosaY} stroke={SEROSA} strokeWidth={2} />
      )}

      {/* villi */}
      <path d={villi} fill={VILLI} opacity={0.95} />
      {kind === 'window' ? (
        <path d={`M ${center - 24} ${muscleTop} q 24 20 48 0 l 0 18 q -24 14 -48 0 Z`} fill={PLACENTA} stroke={PLACENTA_EDGE} strokeWidth={0.7} />
      ) : null}

      {/* bladder */}
      {isBladder ? (
        <g>
          <rect x={left} y={bladderY} width={uterusW} height={24} rx={5} fill={BLADDER} stroke={BLADDER_EDGE} strokeWidth={1.2} />
          <line x1={center - 22} y1={bladderY} x2={center + 22} y2={bladderY} stroke="#E0F2FE" strokeWidth={4} />
        </g>
      ) : null}

      {/* parametrium for 3c */}
      {hasParametrium ? (
        <g>
          <rect x={right} y={muscleTop - 6} width={34} height={muscleH + 14} rx={3} fill="#FDE68A" opacity={0.55} />
          <path d={`M ${right - 6} ${muscleTop + 4} q 22 10 34 22 q -18 6 -34 -4 Z`} fill={VILLI} opacity={0.9} />
        </g>
      ) : null}

      {/* labels */}
      <text x={x + 88} y={y + 18} textAnchor="middle" fontSize={8.5} fontWeight={700} className={INK}>
        {cell.grade}
      </text>
      <text x={x + 88} y={isBladder ? y + 138 : y + 116} textAnchor="middle" fontSize={7} className={MUTED}>
        {cell.name}
      </text>
      {kind === 'g2' ? (
        <text x={center} y={serosaY + 12} textAnchor="middle" fontSize={6.5} fontWeight={700} fill="#B91C1C">
          Dimple sign
        </text>
      ) : null}
    </g>
  );
}

function FigoDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 720 326"
      title="Diagram 3 · FIGO PAS grades 1–3c vs the uterine window"
      caption="Depth of villous invasion defines the grade: accreta rests on myometrium, increta enters it, 3a breaches serosa, 3b invades bladder, 3c invades parametrium. The uterine window is scar dehiscence with no villous invasion."
    >
      {FIGO_CELLS.map((cell, index) => {
        const col = index % 4;
        const row = Math.floor(index / 4);
        return <FigoPanel key={cell.kind} cell={cell} x={4 + col * 178} y={6 + row * 158} />;
      })}
      <g>
        <rect x={536} y={164} width={168} height={150} rx={10} className={PANEL} strokeWidth={1} />
        <rect x={536} y={164} width={168} height={150} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
        <text x={620} y={184} textAnchor="middle" fontSize={8.5} fontWeight={700} className={INK}>
          Reading the figure
        </text>
        {[
          ['■', PLACENTA, 'placenta / villi'],
          ['■', MUSCLE, 'myometrium'],
          ['▬', DECIDUA, 'decidua basalis'],
          ['▬', SEROSA, 'uterine serosa'],
          ['■', BLADDER, 'urinary bladder'],
        ].map(([glyph, colour, label], index) => (
          <g key={label}>
            <text x={552} y={206 + index * 17} fontSize={9} fill={colour}>
              {glyph}
            </text>
            <text x={566} y={206 + index * 17} fontSize={7.5} className={MUTED}>
              {label}
            </text>
          </g>
        ))}
        <text x={552} y={300} fontSize={7} className={FAINT}>
          Grade 3b is the commonest
        </text>
        <text x={552} y={310} fontSize={7} className={FAINT}>
          extrauterine organ invaded.
        </text>
      </g>
    </Frame>
  );
}

/* ========================================================================== */
/* Diagram 4 — 18–21 → 32 → 36-week TVS pathway                              */
/* ========================================================================== */

function MilestoneCard({
  x,
  y,
  w,
  h,
  eyebrow,
  title,
  detail,
  tone,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  eyebrow: string;
  title: string;
  detail: string;
  tone: string;
}): JSX.Element {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} className={PANEL} strokeWidth={1} />
      <rect x={x} y={y} width={w} height={h} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <rect x={x} y={y} width={4} height={h} rx={2} fill={tone} />
      <text x={x + 14} y={y + 17} fontSize={7.5} fontWeight={700} fill={tone}>
        {eyebrow}
      </text>
      <text x={x + 14} y={y + 34} fontSize={9.5} fontWeight={700} className={INK}>
        {title}
      </text>
      <text x={x + 14} y={y + 49} fontSize={7.5} className={MUTED}>
        {detail}
      </text>
    </g>
  );
}

function ScanTimelineDiagram(): JSX.Element {
  const cards = [
    { x: 16, eyebrow: 'STEP 1', title: '18+6 – 21+6 weeks', detail: 'Anomaly scan → TVS the same visit', tone: '#4F46E5' },
    { x: 260, eyebrow: 'STEP 2', title: '32 weeks', detail: 'TVS + cervical length if < 34 wks', tone: '#0D9488' },
    { x: 504, eyebrow: 'STEP 3', title: '36 weeks', detail: 'Final TVS · decide mode of birth', tone: '#BE123C' },
  ];
  const outcomes = [
    { x: 16, title: '> 20 mm', detail: 'Vaginal birth', tone: '#059669', fill: '#D1FAE5' },
    { x: 260, title: '11–20 mm', detail: 'Trial of labour · 69–90%', tone: '#B45309', fill: '#FEF3C7' },
    { x: 504, title: '≤ 10 mm / os', detail: 'Elective caesarean', tone: '#BE123C', fill: '#FFE4E6' },
  ];

  return (
    <Frame
      viewBox="0 0 720 336"
      title="Diagram 4 · Antenatal TVS localisation pathway & 36-week decision"
      caption="Every low-lying placenta gets a 32-week TVS; only the persistent ones need a 36-week scan. The 36-week distance then selects vaginal birth, a trial of labour or elective caesarean."
    >
      {cards.map((card, index) => (
        <g key={card.title}>
          <MilestoneCard {...card} y={16} w={200} h={62} />
          {index < cards.length - 1 ? (
            <g>
              <line x1={card.x + 204} y1={47} x2={card.x + 236} y2={47} stroke="#94A3B8" strokeWidth={1.6} />
              <path d={`M ${card.x + 236} 47 l -5 -3 l 0 6 Z`} fill="#94A3B8" />
            </g>
          ) : null}
        </g>
      ))}

      {/* resolved-at-32 branch */}
      <rect x={260} y={92} width={200} height={26} rx={13} fill="#D1FAE5" stroke="#059669" strokeWidth={0.9} />
      <text x={360} y={109} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#047857">
        edge ≥ 20 mm at 32 wks → routine care
      </text>

      {/* decision bus from the 36-week card */}
      <line x1={604} y1={78} x2={604} y2={140} stroke="#64748B" strokeWidth={1.4} />
      <line x1={116} y1={140} x2={604} y2={140} stroke="#64748B" strokeWidth={1.4} />
      {outcomes.map((outcome) => (
        <line key={`drop-${outcome.title}`} x1={outcome.x + 100} y1={140} x2={outcome.x + 100} y2={160} stroke="#64748B" strokeWidth={1.4} />
      ))}
      <text x={370} y={134} textAnchor="middle" fontSize={7} className={FAINT}>
        36-week placental edge distance from the internal os
      </text>

      {outcomes.map((outcome) => (
        <g key={outcome.title}>
          <rect x={outcome.x} y={160} width={200} height={62} rx={10} fill={outcome.fill} opacity={0.55} />
          <rect x={outcome.x} y={160} width={200} height={62} rx={10} fill="none" stroke={outcome.tone} strokeWidth={1.2} />
          <text x={outcome.x + 100} y={182} textAnchor="middle" fontSize={11} fontWeight={700} fill={outcome.tone}>
            {outcome.title}
          </text>
          <text x={outcome.x + 100} y={200} textAnchor="middle" fontSize={8} fill={outcome.tone}>
            {outcome.detail}
          </text>
          <text x={outcome.x + 100} y={214} textAnchor="middle" fontSize={6.5} className={FAINT}>
            {outcome.title === '> 20 mm' ? 'normal location' : outcome.title === '11–20 mm' ? 'counsel on APH / PPH' : 'praevia-equivalent'}
          </text>
        </g>
      ))}

      <rect x={16} y={238} width={688} height={86} rx={10} className={PANEL} strokeWidth={1} />
      <rect x={16} y={238} width={688} height={86} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={30} y={256} fontSize={8.5} fontWeight={700} className={INK}>
        Red flags on the same pathway
      </text>
      <text x={30} y={272} fontSize={7.5} className={MUTED}>
        • Prior caesarean + anterior low-lying/praevia at 18–20 wks → specialist PAS scan at 26–28 wks (± MRI), not routine follow-up.
      </text>
      <text x={30} y={286} fontSize={7.5} className={MUTED}>
        • Cervical length &lt; 30 mm (especially &lt; 25 mm) before 34 wks → massive APH / preterm CS / hysterectomy risk.
      </text>
      <text x={30} y={300} fontSize={7.5} className={MUTED}>
        • Any bleeding, contractions or suprapubic pain → immediate review; digital vaginal examination is forbidden.
      </text>
      <text x={30} y={314} fontSize={7.5} fill="#BE123C">
        • Never induce or perform a stretch-and-sweep when the placenta covers the os.
      </text>
    </Frame>
  );
}

/* ========================================================================== */
/* Diagram 5 — delivery timing matrix                                        */
/* ========================================================================== */

const TIMING_ROWS: readonly { label: string; from: number; to: number; colour: string; text: string }[] = [
  { label: 'Corticosteroids', from: 34, to: 35.857, colour: '#D97706', text: '34+0 – 35+6' },
  { label: 'Symptomatic praevia', from: 34, to: 36.857, colour: '#E11D48', text: '34+0 – 36+6' },
  { label: 'PAS', from: 35, to: 36.857, colour: '#4F46E5', text: '35+0 – 36+6' },
  { label: 'Uncomplicated praevia', from: 36, to: 37.857, colour: '#059669', text: '36+0 – 37+6' },
];

function TimingDiagram(): JSX.Element {
  const axisStart = 168;
  const axisEnd = 700;
  const weeks = 8;
  const xFor = (week: number): number => axisStart + ((week - 32) / weeks) * (axisEnd - axisStart);
  const rowY = (index: number): number => 54 + index * 50;

  return (
    <Frame
      viewBox="0 0 720 292"
      title="Diagram 5 · Corticosteroid and planned-delivery windows"
      caption="Read the axis in completed weeks. PAS delivers first (35+0–36+6), symptomatic praevia spans 34+0–36+6, and uncomplicated praevia goes to 36+0–37+0 (up to 37+6). Steroids are always given at 34+0–35+6."
    >
      {[32, 33, 34, 35, 36, 37, 38, 39, 40].map((week) => (
        <g key={week}>
          <line x1={xFor(week)} y1={38} x2={xFor(week)} y2={252} stroke="#94A3B8" strokeWidth={0.5} opacity={0.3} />
          <text x={xFor(week)} y={266} textAnchor="middle" fontSize={7.5} className={FAINT}>
            {`${week}+0`}
          </text>
        </g>
      ))}

      {TIMING_ROWS.map((row, index) => {
        const y = rowY(index);
        const x1 = xFor(row.from);
        const x2 = xFor(row.to);
        return (
          <g key={row.label}>
            <text x={158} y={y + 17} textAnchor="end" fontSize={8.5} fontWeight={600} className={INK}>
              {row.label}
            </text>
            <rect x={x1} y={y} width={x2 - x1} height={26} rx={6} fill={row.colour} opacity={0.9} />
            <text x={x1 + 8} y={y + 17} fontSize={7.5} fontWeight={700} fill="#FFFFFF">
              {row.text}
            </text>
          </g>
        );
      })}

      <line x1={axisStart} y1={252} x2={axisEnd + 6} y2={252} stroke="#64748B" strokeWidth={1.4} />
      <path d={`M ${axisEnd + 6} 252 l -5 -3 l 0 6 Z`} fill="#64748B" />
      <text x={axisEnd} y={282} textAnchor="end" fontSize={7.5} className={FAINT}>
        gestational age (completed weeks)
      </text>
      <text x={axisStart} y={30} fontSize={8} fontWeight={700} className={MUTED}>
        Earlier ← delivery window → later
      </text>
    </Frame>
  );
}

/* ========================================================================== */
/* Diagram 6 — ultrasound, Doppler and MRI atlas                             */
/* ========================================================================== */

function ImagingDiagram(): JSX.Element {
  const marker = (x: number, y: number, n: number): JSX.Element => (
    <g>
      <circle cx={x} cy={y} r={7} fill="#FFFFFF" stroke="#4F46E5" strokeWidth={1.2} />
      <text x={x} y={y + 2.7} textAnchor="middle" fontSize={7} fontWeight={700} fill="#4338CA">
        {n}
      </text>
    </g>
  );

  return (
    <Frame
      viewBox="0 0 720 404"
      title="Diagram 6 · Grayscale, colour Doppler and T2-MRI markers of PAS"
      caption="Numbered callouts: lacunae, lost clear zone, myometrium < 1 mm, bladder-line interruption, perpendicular bridging vessels and the exophytic bulge. The MRI panel adds T2 dark bands, an hourglass contour and bladder tenting."
    >
      {/* grayscale + doppler panel */}
      <rect x={8} y={8} width={452} height={296} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={8} y={8} width={452} height={296} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={24} y={28} fontSize={8.5} fontWeight={700} className={INK}>
        2D grayscale + colour Doppler
      </text>

      {/* cavity */}
      <rect x={40} y={40} width={388} height={78} rx={8} className="fill-slate-100 dark:fill-slate-800" />
      <text x={54} y={58} fontSize={7} className={FAINT}>
        amniotic cavity
      </text>

      {/* placenta with lacunae */}
      <path
        d="M 40 118 q 34 -12 68 0 t 68 0 t 68 0 t 68 0 t 68 0 t 48 0 L 428 170 L 40 170 Z"
        fill={PLACENTA}
        stroke={PLACENTA_EDGE}
        strokeWidth={1}
      />
      {[
        [76, 138, 13, 7],
        [124, 150, 9, 5],
        [196, 136, 15, 8],
        [262, 150, 10, 6],
        [330, 138, 14, 7],
        [392, 150, 9, 5],
      ].map(([cx, cy, rx, ry], index) => (
        <ellipse key={`lac-${index}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="#FDF2F8" stroke="#DB2777" strokeWidth={0.7} />
      ))}
      <text x={54} y={164} fontSize={6.5} fill="#9D174D">
        “Swiss-cheese” lacunae
      </text>

      {/* myometrium + serosa */}
      <rect x={40} y={170} width={388} height={9} fill={MUSCLE} />
      <line x1={40} y1={179} x2={428} y2={179} stroke={SEROSA} strokeWidth={2} />
      <text x={40} y={196} fontSize={6.5} className={FAINT}>
        thin myometrium
      </text>

      {/* bladder */}
      <rect x={40} y={198} width={388} height={46} rx={6} fill={BLADDER} opacity={0.8} stroke={BLADDER_EDGE} strokeWidth={1} />
      <text x={54} y={238} fontSize={7} fill="#0369A1">
        urinary bladder
      </text>

      {/* clear zone loss */}
      <line x1={44} y1={170} x2={148} y2={170} stroke={DECIDUA} strokeWidth={2.6} strokeDasharray="5 3" />
      <line x1={330} y1={170} x2={424} y2={170} stroke={DECIDUA} strokeWidth={2.6} strokeDasharray="5 3" />
      <text x={250} y={163} textAnchor="middle" fontSize={6.5} fontWeight={700} paintOrder="stroke" strokeWidth={2.4} className="fill-teal-700 stroke-white dark:fill-teal-300 dark:stroke-slate-900">
        clear zone LOST
      </text>

      {/* myometrial thickness caliper */}
      <g>
        <line x1={414} y1={170} x2={414} y2={179} stroke="#B91C1C" strokeWidth={1.4} />
        <line x1={409} y1={170} x2={419} y2={170} stroke="#B91C1C" strokeWidth={1.4} />
        <line x1={409} y1={179} x2={419} y2={179} stroke="#B91C1C" strokeWidth={1.4} />
        <text x={424} y={176} fontSize={7} fontWeight={700} paintOrder="stroke" strokeWidth={2.4} className="fill-rose-700 stroke-white dark:fill-rose-300 dark:stroke-slate-900">
          &lt; 1 mm
        </text>
      </g>

      {/* exophytic bulge + bladder interruption */}
      <path d="M 246 179 q 10 20 26 18 q 20 -2 24 -18 Z" fill={PLACENTA} stroke={PLACENTA_EDGE} strokeWidth={1} />
      <line x1={236} y1={198} x2={264} y2={198} stroke="#FFFFFF" strokeWidth={5} />
      <line x1={264} y1={198} x2={296} y2={198} stroke="#FFFFFF" strokeWidth={5} />

      {/* bridging vessels */}
      {[150, 190, 320].map((x) => (
        <path
          key={`vessel-${x}`}
          d={`M ${x} 172 L ${x + 6} 188 L ${x - 4} 202 L ${x + 8} 220`}
          fill="none"
          stroke="#DC2626"
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      ))}
      <text x={300} y={238} fontSize={6.5} fontWeight={700} paintOrder="stroke" strokeWidth={2.4} className="fill-rose-700 stroke-white dark:fill-rose-300 dark:stroke-slate-900">
        bridging vessels
      </text>

      {marker(76, 126, 1)}
      {marker(240, 158, 2)}
      {marker(400, 158, 3)}
      {marker(286, 194, 4)}
      {marker(196, 230, 5)}
      {marker(272, 196, 6)}

      <text x={40} y={268} fontSize={7} className={MUTED}>
        Bladder-line interruption + exophytic mass → FIGO grade 3b
      </text>
      <text x={40} y={282} fontSize={7} className={MUTED}>
        Lacunae + lost clear zone + bridging vessels → PAS
      </text>

      {/* MRI panel */}
      <rect x={468} y={8} width={244} height={296} rx={12} fill="#0F172A" stroke="#334155" strokeWidth={1} />
      <text x={484} y={28} fontSize={8.5} fontWeight={700} fill="#E2E8F0">
        Pelvic MRI · T2 HASTE
      </text>
      <text x={484} y={41} fontSize={6.5} fill="#94A3B8">
        no gadolinium
      </text>

      {/* hourglass uterus */}
      <path
        d="M 590 58 C 630 58 640 92 624 118 C 612 138 612 156 628 176 C 650 202 640 250 590 256 C 540 250 530 202 552 176 C 568 156 568 138 556 118 C 540 92 550 58 590 58 Z"
        fill="#334155"
        stroke="#94A3B8"
        strokeWidth={1.2}
      />
      {/* placenta on T2 */}
      <path d="M 546 176 q 44 -16 88 0 q 10 34 -8 58 q -36 12 -72 0 q -18 -24 -8 -58 Z" fill="#7F1D1D" opacity={0.75} />
      {[
        'M 560 190 q 30 8 60 -2',
        'M 556 206 q 34 10 68 -2',
        'M 560 222 q 30 8 58 -2',
      ].map((d, index) => (
        <path key={`band-${index}`} d={d} fill="none" stroke="#0F172A" strokeWidth={3.4} strokeLinecap="round" />
      ))}
      <text x={590} y={166} textAnchor="middle" fontSize={6.5} fill="#FCA5A5">
        T2 dark bands
      </text>
      <text x={590} y={122} textAnchor="middle" fontSize={6.5} fill="#CBD5E1">
        hourglass bulge
      </text>

      {/* bladder tenting */}
      <path d="M 552 256 L 590 236 L 628 256 Z" fill="#0C4A6E" stroke="#38BDF8" strokeWidth={1.2} />
      <text x={590} y={272} textAnchor="middle" fontSize={6.5} fill="#7DD3FC">
        bladder tenting
      </text>
      <text x={484} y={290} fontSize={6.5} fill="#94A3B8">
        best for posterior PAS &amp; grade 3c
      </text>

      {/* legend */}
      <g>
        <text x={16} y={322} fontSize={8} fontWeight={700} className={INK}>
          Legend
        </text>
        {[
          '1  Placental lacunae — turbulent flow > 10 cm/s',
          '2  Loss of the retroplacental clear zone',
          '3  Myometrial thinning < 1 mm',
          '4  Bladder wall interruption (“railroad track” lost)',
          '5  Bridging vessels perpendicular to myometrium',
          '6  Placental bulge / exophytic mass into bladder',
        ].map((entry, index) => (
          <text
            key={entry}
            x={index % 2 === 0 ? 16 : 372}
            y={338 + Math.floor(index / 2) * 15}
            fontSize={7.5}
            className={MUTED}
          >
            {entry}
          </text>
        ))}
        <text x={16} y={392} fontSize={7} className={FAINT}>
          MRI adds: T2 dark intraplacental bands, heterogeneous signal, focal myometrial interruption and bladder tenting.
        </text>
      </g>
    </Frame>
  );
}

/* ========================================================================== */
/* Diagram 7 — caesarean hysterectomy vs Triple-P                            */
/* ========================================================================== */

const UTERUS_BODY =
  'M 180 64 C 218 68 228 110 220 146 C 214 176 200 196 192 216 L 192 252 L 168 252 L 168 216 C 160 196 146 176 140 146 C 132 110 142 68 180 64 Z';

function SurgeryDiagram(): JSX.Element {
  const steps = [
    { id: 'P1', title: 'Perioperative placental localisation', detail: 'transverse incision 2 cm above the placental edge', colour: '#4F46E5' },
    { id: 'P2', title: 'Pelvic devascularisation', detail: 'internal iliac balloons inflated after delivery', colour: '#0D9488' },
    { id: 'P3', title: 'Placental non-separation', detail: 'en-bloc myometrial excision + 2 cm margin + reconstruction', colour: '#BE123C' },
  ];

  return (
    <Frame
      viewBox="0 0 760 424"
      title="Diagram 7 · Total caesarean hysterectomy vs the Triple-P procedure"
      caption="Left: the definitive operation — high fundal incision, cord ligated at the placental insertion, placenta left in situ and total hysterectomy. Right: the uterine-sparing Triple-P sequence with a 2 cm margin above the bladder trigone."
    >
      {/* ------------------------------- hysterectomy */}
      <rect x={8} y={8} width={356} height={408} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={8} y={8} width={356} height={408} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={186} y={28} textAnchor="middle" fontSize={9} fontWeight={700} className={INK}>
        Total caesarean hysterectomy
      </text>
      <text x={186} y={41} textAnchor="middle" fontSize={7} className={MUTED}>
        placenta left in situ · gold standard
      </text>

      <path d={UTERUS_BODY} fill="none" stroke="#334155" strokeWidth={1.8} className="dark:stroke-slate-300" />
      <ellipse cx={180} cy={228} rx={25} ry={22} fill={PLACENTA} stroke={PLACENTA_EDGE} strokeWidth={1} />
      <text x={180} y={231} textAnchor="middle" fontSize={6.5} fontWeight={700} fill="#9D174D">
        placenta
      </text>
      <text x={180} y={245} textAnchor="middle" fontSize={6} fill="#9D174D">
        in situ
      </text>

      {/* fundal incision */}
      <line x1={152} y1={98} x2={208} y2={98} stroke="#4F46E5" strokeWidth={2} strokeDasharray="5 3" />
      <path d="M 152 98 l 6 -3 l 0 6 Z" fill="#4F46E5" />
      <path d="M 208 98 l -6 -3 l 0 6 Z" fill="#4F46E5" />
      <text x={186} y={56} textAnchor="middle" fontSize={7} fontWeight={700} fill="#4338CA">
        high fundal incision
      </text>
      <text x={186} y={66} textAnchor="middle" fontSize={6.5} fill="#4338CA">
        clear of the placenta
      </text>

      {/* cord + clamp */}
      <path d="M 180 212 C 164 196 152 176 148 156" fill="none" stroke="#7C3AED" strokeWidth={1.6} />
      <rect x={142} y={148} width={12} height={7} rx={1.5} fill="#A78BFA" stroke="#6D28D9" strokeWidth={0.8} />
      <text x={92} y={140} fontSize={6.5} className={MUTED}>
        cord ligated at
      </text>
      <text x={92} y={149} fontSize={6.5} className={MUTED}>
        placental insertion
      </text>

      {/* arrow */}
      <line x1={180} y1={260} x2={180} y2={282} stroke="#64748B" strokeWidth={1.6} />
      <path d="M 180 284 l -4 -6 l 8 0 Z" fill="#64748B" />

      {/* specimen */}
      <path
        d="M 180 292 C 204 296 210 324 204 346 C 200 362 193 370 190 380 L 190 388 L 170 388 L 170 380 C 167 370 160 362 156 346 C 150 324 156 296 180 292 Z"
        fill="none"
        stroke="#64748B"
        strokeWidth={1.4}
        strokeDasharray="4 3"
      />
      <ellipse cx={180} cy={368} rx={18} ry={12} fill={PLACENTA} stroke={PLACENTA_EDGE} strokeWidth={0.8} />
      <line x1={152} y1={380} x2={208} y2={380} stroke={OS} strokeWidth={1.4} strokeDasharray="4 3" />
      <text x={180} y={302} textAnchor="middle" fontSize={6.5} className={MUTED}>
        specimen
      </text>
      <text x={214} y={368} fontSize={6.5} className={MUTED}>
        placenta still
      </text>
      <text x={214} y={377} fontSize={6.5} className={MUTED}>
        attached
      </text>
      <text x={214} y={392} fontSize={6.5} fontWeight={700} fill="#B91C1C">
        cervix removed
      </text>
      <text x={180} y={406} textAnchor="middle" fontSize={6.5} className={FAINT}>
        total &gt; subtotal
      </text>

      {/* ------------------------------- triple-P */}
      <rect x={372} y={8} width={380} height={408} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={372} y={8} width={380} height={408} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={562} y={28} textAnchor="middle" fontSize={9} fontWeight={700} className={INK}>
        The “Triple-P” procedure
      </text>
      <text x={562} y={41} textAnchor="middle" fontSize={7} className={MUTED}>
        one-step uterine-sparing resection
      </text>

      <g transform="translate(380 0)">
        <path d={UTERUS_BODY} fill="none" stroke="#334155" strokeWidth={1.8} className="dark:stroke-slate-300" />
        <ellipse cx={180} cy={228} rx={25} ry={22} fill={PLACENTA} stroke={PLACENTA_EDGE} strokeWidth={1} />

        {/* P1 incision 2 cm above placenta */}
        <line x1={150} y1={180} x2={210} y2={180} stroke="#4F46E5" strokeWidth={2} strokeDasharray="5 3" />
        <line x1={214} y1={180} x2={214} y2={206} stroke="#4F46E5" strokeWidth={1} />
        <line x1={210} y1={180} x2={218} y2={180} stroke="#4F46E5" strokeWidth={1} />
        <line x1={210} y1={206} x2={218} y2={206} stroke="#4F46E5" strokeWidth={1} />
        <text x={222} y={196} fontSize={7} fontWeight={700} fill="#4338CA">
          2 cm
        </text>

        {/* P2 balloons */}
        <line x1={118} y1={110} x2={118} y2={182} stroke="#0F766E" strokeWidth={1.6} />
        <ellipse cx={118} cy={150} rx={9} ry={16} fill="#5EEAD4" stroke="#0D9488" strokeWidth={1} />
        <line x1={242} y1={110} x2={242} y2={182} stroke="#0F766E" strokeWidth={1.6} />
        <ellipse cx={242} cy={150} rx={9} ry={16} fill="#5EEAD4" stroke="#0D9488" strokeWidth={1} />
        <text x={180} y={100} textAnchor="middle" fontSize={6.5} fontWeight={700} paintOrder="stroke" strokeWidth={2.4} className="fill-teal-700 stroke-white dark:fill-teal-300 dark:stroke-slate-900">
          internal iliac occlusion balloons
        </text>

        {/* P3 excision zone */}
        <rect x={153} y={200} width={54} height={52} rx={4} fill="#F43F5E" opacity={0.14} stroke="#BE123C" strokeWidth={1.2} strokeDasharray="4 3" />
        <text x={180} y={220} textAnchor="middle" fontSize={6.5} fontWeight={700} fill="#9F1239">
          en-bloc
        </text>
        <text x={180} y={230} textAnchor="middle" fontSize={6} fill="#9F1239">
          excision
        </text>
        <path d="M 154 252 q 13 8 26 0 t 26 0" fill="none" stroke="#4F46E5" strokeWidth={1.4} />
        <text x={180} y={266} textAnchor="middle" fontSize={6} fill="#4338CA">
          reconstruction
        </text>
      </g>

      {/* step chips */}
      {steps.map((step, index) => {
        const y = 284 + index * 40;
        return (
          <g key={step.id}>
            <rect x={388} y={y} width={348} height={34} rx={8} className={PANEL} strokeWidth={1} />
            <rect x={388} y={y} width={348} height={34} rx={8} fill="none" className={PANEL_EDGE} strokeWidth={1} />
            <circle cx={404} cy={y + 17} r={9} fill={step.colour} />
            <text x={404} y={y + 20} textAnchor="middle" fontSize={6.5} fontWeight={700} fill="#FFFFFF">
              {step.id}
            </text>
            <text x={420} y={y + 14} fontSize={7.5} fontWeight={700} className={INK}>
              {step.title}
            </text>
            <text x={420} y={y + 25} fontSize={6.5} className={MUTED}>
              {step.detail}
            </text>
          </g>
        );
      })}
    </Frame>
  );
}

/* ========================================================================== */
/* Module 02 — Fetal Growth Restriction (SOGC No. 442)                        */
/* ========================================================================== */

/* -------------------------------------------------------------------------- */
/* FGR Diagram 1 — Gordijn Delphi diagnostic architecture                     */
/* -------------------------------------------------------------------------- */

const DELPHI_COLUMNS: readonly {
  x: number;
  tone: string;
  title: string;
  subtitle: string;
  blocks: readonly { label: string; lines: readonly string[] }[];
  footer: string;
}[] = [
  {
    x: 12,
    tone: '#10B981',
    title: 'CONSTITUTIONAL SGA',
    subtitle: '3rd–10th centile · no pathology',
    blocks: [
      { label: 'BIOMETRY', lines: ['EFW or AC 3rd–10th centile', 'normal growth velocity'] },
      { label: 'DOPPLERS', lines: ['UtA / UA / MCA / CPR normal', 'no bilateral notch > 24 wks'] },
      { label: 'BIOMARKER', lines: ['PlGF ≥ 100 pg/mL', 'sFlt-1/PlGF ≤ 38'] },
    ],
    footer: 'Deliver 38+0–39+0 wks · vaginal IOL',
  },
  {
    x: 264,
    tone: '#F59E0B',
    title: 'EARLY-ONSET FGR',
    subtitle: '< 32+0 weeks · severe phenotype',
    blocks: [
      { label: 'SOLITARY · ANY 1', lines: ['EFW or AC < 3rd centile', 'OR umbilical artery AEDF'] },
      { label: 'CONTRIBUTORY', lines: ['EFW/AC < 10th centile PLUS', 'UtA-PI > 95th OR UA-PI > 95th'] },
    ],
    footer: 'UA + DV + cCTG STV govern delivery',
  },
  {
    x: 516,
    tone: '#8B5CF6',
    title: 'LATE-ONSET FGR',
    subtitle: '≥ 32+0 weeks · 70–80% of FGR',
    blocks: [
      { label: 'SOLITARY', lines: ['EFW or AC < 3rd centile'] },
      { label: 'CONTRIBUTORY · 2 OF 3', lines: ['1 · EFW/AC < 10th centile', '2 · drop > 2 quartiles (> 50 centiles)', '3 · CPR < 5th OR UA-PI > 95th'] },
    ],
    footer: 'UA-PI often normal · CPR < 5th triggers',
  },
];

function DelphiDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 372"
      title="Diagram 1 · Gordijn Delphi Consensus — SGA vs early vs late FGR"
      caption="Constitutional SGA has normal growth velocity, normal Dopplers and normal PlGF. Early FGR (< 32+0 weeks) accepts a solitary EFW/AC < 3rd or UA-AEDF, or a contributory < 10th plus an abnormal uterine/umbilical PI. Late FGR (≥ 32+0 weeks) needs a solitary EFW/AC < 3rd or 2 of 3 contributory criteria. Congenital anomalies must be excluded in both FGR phenotypes."
    >
      {DELPHI_COLUMNS.map((column) => (
        <g key={column.title}>
          <rect x={column.x} y={10} width={232} height={338} rx={12} className={PANEL} strokeWidth={1} />
          <rect x={column.x} y={10} width={232} height={338} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
          <rect x={column.x} y={10} width={232} height={42} rx={12} fill={column.tone} opacity={0.16} />
          <rect x={column.x} y={10} width={232} height={42} rx={12} fill="none" stroke={column.tone} strokeWidth={1.1} />
          <text x={column.x + 112} y={28} textAnchor="middle" fontSize={9.5} fontWeight={700} fill={column.tone}>
            {column.title}
          </text>
          <text x={column.x + 112} y={42} textAnchor="middle" fontSize={7} className={MUTED}>
            {column.subtitle}
          </text>

          {column.blocks.map((block, blockIndex) => {
            const y = 62 + blockIndex * (column.title === 'LATE-ONSET FGR' ? 66 : 72);
            return (
              <g key={block.label}>
                <text x={column.x + 14} y={y} fontSize={6.8} fontWeight={700} fill={column.tone}>
                  {block.label}
                </text>
                {block.lines.map((line, lineIndex) => (
                  <text key={line} x={column.x + 14} y={y + 14 + lineIndex * 13} fontSize={7.6} className={MUTED}>
                    {line}
                  </text>
                ))}
              </g>
            );
          })}

          <rect x={column.x + 12} y={292} width={208} height={44} rx={8} fill={column.tone} opacity={0.1} />
          <text x={column.x + 116} y={309} textAnchor="middle" fontSize={6.5} fontWeight={700} fill={column.tone}>
            DELIVERY READ-OUT
          </text>
          <text x={column.x + 116} y={323} textAnchor="middle" fontSize={7.4} className={INK}>
            {column.footer}
          </text>
        </g>
      ))}

      <text x={380} y={362} textAnchor="middle" fontSize={7.2} className={FAINT}>
        Both FGR phenotypes require the absence of congenital anomalies · 32+0 weeks is the phenotype boundary
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* FGR Diagram 2 — spiral artery remodelling, syncytial knots & PlGF          */
/* -------------------------------------------------------------------------- */

function PlacentalPanel({
  x,
  tone,
  title,
  subtitle,
  vesselWidth,
  vesselLabel,
  biomarkers,
}: {
  x: number;
  tone: string;
  title: string;
  subtitle: string;
  vesselWidth: number;
  vesselLabel: string;
  biomarkers: readonly string[];
}): JSX.Element {
  return (
    <g>
      <rect x={x} y={10} width={360} height={268} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={x} y={10} width={360} height={268} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={x + 16} y={31} fontSize={9.5} fontWeight={700} fill={tone}>
        {title}
      </text>
      <text x={x + 16} y={45} fontSize={7.2} className={MUTED}>
        {subtitle}
      </text>

      {/* placenta disc */}
      <path
        d={`M ${x + 30} 104 Q ${x + 90} 66 ${x + 168} 96 Q ${x + 210} 110 ${x + 214} 122 L ${x + 28} 122 Q ${x + 18} 112 ${x + 30} 104 Z`}
        fill={PLACENTA}
        opacity={0.5}
        stroke={PLACENTA_EDGE}
        strokeWidth={1.2}
      />
      <text x={x + 120} y={108} textAnchor="middle" fontSize={6.5} fontWeight={700} fill={PLACENTA_EDGE}>
        placenta
      </text>

      {/* spiral artery */}
      <path
        d={`M ${x + 30} 158 q 24 -20 48 0 t 48 0 t 48 0 t 40 0`}
        fill="none"
        stroke={tone}
        strokeWidth={vesselWidth}
        strokeLinecap="round"
        opacity={0.75}
      />
      <path
        d={`M ${x + 30} 158 q 24 -20 48 0 t 48 0 t 48 0 t 40 0`}
        fill="none"
        stroke={tone}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.9}
      />
      <text x={x + 180} y={184} textAnchor="middle" fontSize={6.8} className={MUTED}>
        {vesselLabel}
      </text>

      {biomarkers.map((line, index) => (
        <text key={line} x={x + 16} y={212 + index * 15} fontSize={7.6} className={INK}>
          • {line}
        </text>
      ))}
    </g>
  );
}

function MvmPlgfDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 386"
      title="Diagram 2 · Maternal vascular malperfusion & the PlGF / sFlt-1 axis"
      caption="Normal placentation destroys the musculoelastic spiral-artery media, giving low resistance, high PlGF and low sFlt-1. In MVM the vessel stays narrow and muscular, the uterine artery keeps a bilateral notch beyond 24 weeks, and hypoxic syncytial knots pour out sFlt-1 while PlGF falls below 100 pg/mL. Bedtime low-dose aspirin before 16 weeks limits the lesion."
    >
      <PlacentalPanel
        x={12}
        tone="#10B981"
        title="NORMAL REMODELLING"
        subtitle="2 waves (8–10 and 14–18 wks) · media destroyed"
        vesselWidth={18}
        vesselLabel="high-capacitance · low-resistance spiral artery"
        biomarkers={['PlGF ≥ 100 pg/mL', 'sFlt-1/PlGF ≤ 38', 'UtA-PI < 95th · no notch > 24 wks']}
      />

      <PlacentalPanel
        x={388}
        tone="#F43F5E"
        title="MATERNAL VASCULAR MALPERFUSION"
        subtitle="incomplete invasion · muscular media persists"
        vesselWidth={6}
        vesselLabel="narrow · high-resistance · bilateral protodiastolic notch"
        biomarkers={['PlGF < 100 pg/mL (< 5th centile)', 'sFlt-1/PlGF > 38 · > 85 severe early', 'UtA-PI > 95th · syncytial knots secrete sFlt-1']}
      />

      {/* syncytial knots on the MVM placenta */}
      {[58, 86, 118, 152, 186].map((cx) => (
        <circle key={cx} cx={388 + cx} cy={100} r={3.2} fill="#BE123C" opacity={0.75} />
      ))}
      <text x={596} y={88} fontSize={6.4} fill="#BE123C">
        syncytial knots
      </text>

      <rect x={12} y={292} width={736} height={78} rx={10} className={PANEL} strokeWidth={1} />
      <rect x={12} y={292} width={736} height={78} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <circle cx={36} cy={318} r={9} fill="#F59E0B" opacity={0.18} stroke="#F59E0B" strokeWidth={1} />
      <text x={36} y={321} textAnchor="middle" fontSize={8} fontWeight={700} fill="#B45309">
        ASA
      </text>
      <text x={54} y={314} fontSize={8.2} fontWeight={700} className={INK}>
        Low-dose aspirin 81–162 mg PO at bedtime · start before 16+0 wks · continue to 36+0 wks
      </text>
      <text x={54} y={330} fontSize={7.2} className={MUTED}>
        Irreversible COX-1 inhibition → ↓ thromboxane A2, sparing prostacyclin (PGI2) → ↓ hypoxia-induced sFlt-1 release
      </text>
      <text x={54} y={346} fontSize={7.2} className={MUTED}>
        Prevention, not rescue · no LMWH unless APS is confirmed · no sildenafil (STRIDER) and no strict bed rest
      </text>
      <text x={54} y={361} fontSize={6.6} className={FAINT}>
        A normal PlGF or ratio ≤ 38 has &gt; 98% negative predictive value for severe placental dysfunction within 1–2 weeks
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* FGR Diagram 3 — genetic / infectious workup                                */
/* -------------------------------------------------------------------------- */

const WORKUP_BRANCHES: readonly {
  x: number;
  tone: string;
  title: string;
  share: string;
  clues: readonly string[];
  action: readonly string[];
}[] = [
  {
    x: 12,
    tone: '#10B981',
    title: 'PLACENTAL MVM',
    share: '70–80% of FGR',
    clues: ['asymmetric AC << HC', 'oligohydramnios · SDP < 2.0 cm', 'UtA/UA-PI > 95th or AEDF', 'PlGF < 100 pg/mL'],
    action: ['Manage placental FGR', 'Doppler-led surveillance'],
  },
  {
    x: 264,
    tone: '#F59E0B',
    title: 'GENETIC ANEUPLOIDY',
    share: '15–20% of early FGR',
    clues: ['early symmetric FGR', 'polyhydramnios (Trisomy 18)', 'short FL · structural anomaly', 'normal Dopplers + normal PlGF'],
    action: ['Amniocentesis > 20 wks', 'QF-PCR + CMA (+4–10%)'],
  },
  {
    x: 516,
    tone: '#F43F5E',
    title: 'CONGENITAL INFECTION',
    share: '~5% of FGR',
    clues: ['microcephaly < 3rd centile', 'periventricular calcification', 'echogenic bowel · ascites', 'normal Dopplers'],
    action: ['CMV IgM / IgG avidity', 'Amniotic-fluid CMV PCR'],
  },
];

function FgrWorkupDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 390"
      title="Diagram 3 · Early/severe FGR — genetic and infectious workup"
      caption="Start from early-onset FGR (< 32 weeks) or EFW/AC < 3rd centile. Asymmetric growth with oligohydramnios, abnormal Dopplers and low PlGF is placental MVM. Symmetric early FGR with polyhydramnios, normal Dopplers and normal PlGF suggests aneuploidy — offer amniocentesis for QF-PCR + CMA. Microcephaly, periventricular calcification or echogenic bowel suggests CMV — add amniotic-fluid CMV PCR."
    >
      <rect x={180} y={10} width={400} height={44} rx={12} fill="#4F46E5" opacity={0.14} />
      <rect x={180} y={10} width={400} height={44} rx={12} fill="none" stroke="#4F46E5" strokeWidth={1.1} />
      <text x={380} y={28} textAnchor="middle" fontSize={8.6} fontWeight={700} fill="#4F46E5">
        EARLY-ONSET FGR &lt; 32+0 WEEKS · OR EFW/AC &lt; 3rd CENTILE
      </text>
      <text x={380} y={44} textAnchor="middle" fontSize={7} className={MUTED}>
        detailed anatomy + placental re-assessment + maternal PlGF ± preeclampsia screen
      </text>

      <line x1={380} y1={54} x2={380} y2={70} stroke="#64748B" strokeWidth={1.2} />
      <line x1={128} y1={70} x2={632} y2={70} stroke="#64748B" strokeWidth={1.2} />
      {WORKUP_BRANCHES.map((branch) => (
        <line key={`stem-${branch.title}`} x1={branch.x + 116} y1={70} x2={branch.x + 116} y2={86} stroke="#64748B" strokeWidth={1.2} />
      ))}

      {WORKUP_BRANCHES.map((branch) => (
        <g key={branch.title}>
          <rect x={branch.x} y={86} width={232} height={222} rx={12} className={PANEL} strokeWidth={1} />
          <rect x={branch.x} y={86} width={232} height={222} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
          <rect x={branch.x} y={86} width={232} height={38} rx={12} fill={branch.tone} opacity={0.14} />
          <text x={branch.x + 116} y={104} textAnchor="middle" fontSize={8.4} fontWeight={700} fill={branch.tone}>
            {branch.title}
          </text>
          <text x={branch.x + 116} y={118} textAnchor="middle" fontSize={6.6} className={MUTED}>
            {branch.share}
          </text>

          <text x={branch.x + 14} y={140} fontSize={6.4} fontWeight={700} className={FAINT}>
            CLUES
          </text>
          {branch.clues.map((clue, index) => (
            <text key={clue} x={branch.x + 14} y={154 + index * 13} fontSize={7.3} className={MUTED}>
              • {clue}
            </text>
          ))}

          <rect x={branch.x + 10} y={218} width={212} height={54} rx={8} fill={branch.tone} opacity={0.1} />
          <text x={branch.x + 14} y={233} fontSize={6.3} fontWeight={700} fill={branch.tone}>
            NEXT STEP
          </text>
          {branch.action.map((line, index) => (
            <text key={line} x={branch.x + 14} y={246 + index * 12} fontSize={7.2} fontWeight={600} className={INK}>
              {line}
            </text>
          ))}
        </g>
      ))}

      <rect x={12} y={324} width={736} height={52} rx={10} fill="#4F46E5" opacity={0.08} />
      <text x={26} y={343} fontSize={7.8} fontWeight={700} fill="#4F46E5">
        GOLD-STANDARD INVASIVE TEST
      </text>
      <text x={26} y={358} fontSize={7.4} className={INK}>
        Amniocentesis &gt; 20 wks → QF-PCR / FISH + chromosomal microarray (CMA) + amniotic-fluid CMV PCR when indicated
      </text>
      <text x={26} y={370} fontSize={6.6} className={FAINT}>
        cfDNA screens common trisomies only and may reflect confined placental mosaicism · routine full TORCH panels are not indicated
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* FGR Diagram 4 — umbilical artery spectral Doppler                          */
/* -------------------------------------------------------------------------- */

const UA_PANELS: readonly {
  label: string;
  subtitle: string;
  diastolic: number;
  tone: string;
  loss: string;
  plan: string;
}[] = [
  { label: 'NORMAL', subtitle: 'PEDF · PI < 95th', diastolic: 112, tone: '#10B981', loss: '< 30% villous loss', plan: 'surveillance' },
  { label: 'PI > 95th', subtitle: 'positive end-diastolic flow', diastolic: 144, tone: '#F59E0B', loss: '30–50% villous loss', plan: 'deliver 36–37 wks' },
  { label: 'AEDF', subtitle: 'end-diastolic flow = 0', diastolic: 170, tone: '#F43F5E', loss: '50–70% villous loss', plan: 'CS 33–34 wks' },
  { label: 'REDF', subtitle: 'retrograde diastolic flow', diastolic: 194, tone: '#BE123C', loss: '> 70% villous loss', plan: 'CS 30–32 wks' },
];

function UaWaveform({ x, tone, diastolic }: { x: number; tone: string; diastolic: number }): JSX.Element {
  const width = 154;
  const cycle = width / 3;
  const lineSegments: string[] = [];
  let fillPath = `M ${x} 170 `;
  for (let i = 0; i < 3; i += 1) {
    const start = x + i * cycle;
    const curve = `Q ${start + cycle * 0.18} 72 ${start + cycle * 0.34} 62 Q ${start + cycle * 0.55} 92 ${start + cycle * 0.78} ${diastolic} L ${start + cycle} ${diastolic}`;
    lineSegments.push(`M ${start} 170 ${curve}`);
    fillPath += `${curve} `;
  }
  fillPath += `L ${x + width} 170 Z`;

  return (
    <g>
      {diastolic < 170 ? <path d={fillPath} fill={tone} opacity={0.12} /> : null}
      <path d={lineSegments.join(' ')} fill="none" stroke={tone} strokeWidth={1.7} strokeLinecap="round" />
    </g>
  );
}

function UaDopplerDiagram(): JSX.Element {
  const panelW = 178;
  return (
    <Frame
      viewBox="0 0 760 344"
      title="Diagram 4 · Umbilical artery Doppler — the villous obliteration cascade"
      caption="The umbilical artery waveform is a pressure gauge for the placental villous bed. End-diastolic flow falls progressively: normal PEDF (< 30% villous loss), elevated PI > 95th (30–50%), absent end-diastolic flow (50–70%) and reversed end-diastolic flow (> 70%, acidemia within days). The stage sets the delivery window."
    >
      {UA_PANELS.map((panel, index) => {
        const x = 12 + index * 185;
        return (
          <g key={panel.label}>
            <rect x={x} y={10} width={panelW} height={286} rx={12} className={PANEL} strokeWidth={1} />
            <rect x={x} y={10} width={panelW} height={286} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
            <rect x={x} y={10} width={panelW} height={38} rx={12} fill={panel.tone} opacity={0.14} />
            <text x={x + panelW / 2} y={27} textAnchor="middle" fontSize={9} fontWeight={700} fill={panel.tone}>
              {panel.label}
            </text>
            <text x={x + panelW / 2} y={41} textAnchor="middle" fontSize={6.4} className={MUTED}>
              {panel.subtitle}
            </text>

            {/* graph frame */}
            <line x1={x + 12} y1={170} x2={x + panelW - 12} y2={170} stroke="#64748B" strokeWidth={1} strokeDasharray="3 3" />
            <text x={x + 12} y={164} fontSize={5.8} className={FAINT}>
              0
            </text>
            <UaWaveform x={x + 12} tone={panel.tone} diastolic={panel.diastolic} />
            <text x={x + panelW / 2} y={206} textAnchor="middle" fontSize={6.4} className={FAINT}>
              systole → diastole · free loop · angle &lt; 30°
            </text>

            <text x={x + panelW / 2} y={232} textAnchor="middle" fontSize={7.4} fontWeight={700} className={INK}>
              {panel.loss}
            </text>
            <rect x={x + 16} y={244} width={panelW - 32} height={30} rx={7} fill={panel.tone} opacity={0.1} />
            <text x={x + panelW / 2} y={263} textAnchor="middle" fontSize={7} fontWeight={600} fill={panel.tone}>
              {panel.plan}
            </text>
          </g>
        );
      })}

      <text x={380} y={316} textAnchor="middle" fontSize={7.4} className={INK}>
        UA Doppler is the only antenatal test proven by RCTs to reduce perinatal mortality in FGR (~29–38%)
      </text>
      <text x={380} y={331} textAnchor="middle" fontSize={6.5} className={FAINT}>
        Steroids can transiently restore end-diastolic flow for 48–72 h — do not de-escalate surveillance
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* FGR Diagram 5 — MCA brain-sparing, CPR and ductus venosus                  */
/* -------------------------------------------------------------------------- */

function MiniWave({
  x,
  y,
  tone,
  diastolic,
  reverseA,
}: {
  x: number;
  y: number;
  tone: string;
  diastolic: number;
  reverseA?: boolean;
}): JSX.Element {
  const cycle = 48;
  const path: string[] = [];
  for (let i = 0; i < 3; i += 1) {
    const start = x + i * cycle;
    path.push(
      `M ${start} ${y + 40} Q ${start + 8} ${y + 6} ${start + 16} ${y + 4} Q ${start + 28} ${y + 10} ${start + 38} ${y + 40 - diastolic} L ${start + cycle} ${y + 40 - diastolic}`,
    );
  }
  return (
    <g>
      <path d={path.join(' ')} fill="none" stroke={tone} strokeWidth={1.6} strokeLinecap="round" />
      {reverseA ? <path d={`M ${x + 4} ${y + 40} q 10 0 14 14 q 4 -14 14 -14`} fill="none" stroke={tone} strokeWidth={1.4} /> : null}
    </g>
  );
}

function McaCprDvDiagram(): JSX.Element {
  const cascade = [
    { label: 'UtA-PI > 95th', tone: '#0D9488' },
    { label: 'UA-PI > 95th', tone: '#F59E0B' },
    { label: 'MCA-PI < 5th · CPR < 5th', tone: '#F97316' },
    { label: 'UA-AEDF', tone: '#F43F5E' },
    { label: 'UA-REDF', tone: '#BE123C' },
    { label: 'DV-PI > 95th', tone: '#7C3AED' },
    { label: 'Absent / reversed a-wave · ↓ STV', tone: '#6D28D9' },
    { label: 'Acidemia · IUFD 48–72 h', tone: '#4C1D95' },
  ];

  return (
    <Frame
      viewBox="0 0 760 430"
      title="Diagram 5 · Brain-sparing (MCA/CPR) and the ductus venosus"
      caption="Brain-sparing lowers MCA-PI (< 5th) and CPR (< 5th or < 1.08). The ductus venosus keeps a forward a-wave until myocardial decompensation, when the a-wave becomes absent and then reversed. The bottom cascade orders the hypoxic sequence from uterine resistance to acidemia."
    >
      {/* left: MCA */}
      <rect x={12} y={10} width={360} height={206} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={360} height={206} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={26} y={30} fontSize={8.6} fontWeight={700} className={INK}>
        MIDDLE CEREBRAL ARTERY
      </text>
      <text x={26} y={44} fontSize={6.6} className={MUTED}>
        proximal third · angle ~0° · avoid probe pressure
      </text>

      <text x={26} y={70} fontSize={6.5} fontWeight={700} className={FAINT}>
        NORMAL · high resistance
      </text>
      <line x1={26} y1={112} x2={170} y2={112} stroke="#64748B" strokeWidth={0.8} strokeDasharray="3 3" />
      <MiniWave x={30} y={72} tone="#0D9488" diastolic={18} />
      <text x={178} y={100} fontSize={7} fontWeight={700} fill="#0D9488">
        MCA-PI &gt; 5th
      </text>

      <text x={26} y={140} fontSize={6.5} fontWeight={700} className={FAINT}>
        BRAIN-SPARING · vasodilation
      </text>
      <line x1={26} y1={182} x2={170} y2={182} stroke="#64748B" strokeWidth={0.8} strokeDasharray="3 3" />
      <MiniWave x={30} y={142} tone="#F97316" diastolic={34} />
      <text x={178} y={170} fontSize={7} fontWeight={700} fill="#F97316">
        MCA-PI &lt; 5th
      </text>
      <text x={178} y={184} fontSize={6.6} fill="#F97316">
        high diastolic flow
      </text>

      {/* right: ductus venosus */}
      <rect x={388} y={10} width={360} height={206} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={388} y={10} width={360} height={206} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={402} y={30} fontSize={8.6} fontWeight={700} className={INK}>
        DUCTUS VENOSUS
      </text>
      <text x={402} y={44} fontSize={6.6} className={MUTED}>
        S-wave · v-descent · D-wave · a-wave
      </text>

      <text x={402} y={70} fontSize={6.5} fontWeight={700} className={FAINT}>
        NORMAL · positive a-wave
      </text>
      <line x1={402} y1={112} x2={546} y2={112} stroke="#64748B" strokeWidth={0.8} strokeDasharray="3 3" />
      <path d="M 406 112 L 412 112 L 416 76 L 422 92 L 432 104 L 440 112 L 448 92 L 456 112 L 462 76 L 468 92 L 478 104 L 486 112 L 494 92 L 502 112" fill="none" stroke="#4F46E5" strokeWidth={1.6} strokeLinecap="round" />
      <text x={554} y={100} fontSize={7} fontWeight={700} fill="#4F46E5">
        a-wave forward
      </text>

      <text x={402} y={140} fontSize={6.5} fontWeight={700} className={FAINT}>
        DECOMPENSATED · reversed a-wave
      </text>
      <line x1={402} y1={182} x2={546} y2={182} stroke="#64748B" strokeWidth={0.8} strokeDasharray="3 3" />
      <path d="M 406 182 L 412 182 L 416 148 L 422 162 L 432 174 L 440 182 L 448 196 L 456 182 L 462 148 L 468 162 L 478 174 L 486 182 L 494 196 L 502 182" fill="none" stroke="#BE123C" strokeWidth={1.6} strokeLinecap="round" />
      <text x={554} y={170} fontSize={7} fontWeight={700} fill="#BE123C">
        a-wave reversed
      </text>
      <text x={554} y={184} fontSize={6.6} fill="#BE123C">
        demise 48–72 h
      </text>

      {/* CPR formula */}
      <rect x={12} y={226} width={736} height={34} rx={9} fill="#F97316" opacity={0.1} />
      <text x={380} y={247} textAnchor="middle" fontSize={8} fontWeight={700} fill="#C2410C">
        CPR = MCA-PI ÷ UA-PI · abnormal &lt; 5th centile (or &lt; 1.08) · falls earlier than either vessel alone
      </text>

      {/* cascade */}
      {cascade.map((step, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        const x = 12 + col * 185;
        const y = 276 + row * 62;
        return (
          <g key={step.label}>
            <rect x={x} y={y} width={176} height={38} rx={8} fill={step.tone} opacity={0.12} />
            <rect x={x} y={y} width={176} height={38} rx={8} fill="none" stroke={step.tone} strokeWidth={0.9} />
            <text x={x + 88} y={y + 23} textAnchor="middle" fontSize={7} fontWeight={700} fill={step.tone}>
              {step.label}
            </text>
            {col < 3 ? (
              <path d={`M ${x + 178} ${y + 19} l 5 0 l -4 -3 l 0 6 Z`} fill="#94A3B8" />
            ) : null}
          </g>
        );
      })}
      <text x={380} y={414} textAnchor="middle" fontSize={7} className={INK}>
        Early FGR times delivery by DV + cCTG STV (TRUFFLE) · late FGR by MCA-PI and CPR
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* FGR Diagram 6 — SOGC No. 442 delivery-timing ladder                        */
/* -------------------------------------------------------------------------- */

const SOGC_ROWS: readonly { label: string; from: number; to: number; colour: string; text: string; mode: string }[] = [
  { label: 'Constitutional SGA', from: 38, to: 39, colour: '#10B981', text: '38+0–39+0', mode: 'vaginal IOL' },
  { label: 'Isolated EFW < 3rd', from: 36.6, to: 37.4, colour: '#F59E0B', text: '37+0', mode: 'Foley IOL' },
  { label: 'UA-PI > 95th · MCA/CPR < 5th', from: 36, to: 37, colour: '#F97316', text: '36+0–37+0', mode: 'IOL or CS' },
  { label: 'Stage II · UA-AEDF', from: 33, to: 34, colour: '#F43F5E', text: '33+0–34+0', mode: 'elective CS' },
  { label: 'Stage III · UA-REDF', from: 30, to: 32, colour: '#BE123C', text: '30+0–32+0', mode: 'elective CS' },
  { label: 'Stage IV · DV a-wave · ↓ STV', from: 26, to: 30, colour: '#7C3AED', text: '≥ 26+0', mode: 'immediate CS' },
];

function SogcTimingDiagram(): JSX.Element {
  const axisStart = 186;
  const axisEnd = 690;
  const startWeek = 24;
  const endWeek = 40;
  const xFor = (week: number): number => axisStart + ((week - startWeek) / (endWeek - startWeek)) * (axisEnd - axisStart);

  return (
    <Frame
      viewBox="0 0 760 376"
      title="Diagram 6 · SOGC No. 442 surveillance & delivery-timing ladder"
      caption="Read the gestational axis from 24 to 40 weeks. Constitutional SGA delivers at 38+0–39+0; isolated EFW/AC < 3rd at 37+0; abnormal UA-PI, MCA-PI or CPR at 36+0–37+0; AEDF at 33+0–34+0 by caesarean; REDF at 30+0–32+0 by caesarean; and a decompensated DV or cCTG at ≥ 26+0 weeks by immediate caesarean after steroids and magnesium."
    >
      {[24, 26, 28, 30, 32, 34, 36, 38, 40].map((week) => (
        <g key={week}>
          <line x1={xFor(week)} y1={30} x2={xFor(week)} y2={318} stroke="#94A3B8" strokeWidth={0.5} opacity={0.32} />
          <text x={xFor(week)} y={334} textAnchor="middle" fontSize={7.4} className={FAINT}>
            {`${week}+0`}
          </text>
        </g>
      ))}
      <text x={axisEnd} y={352} textAnchor="end" fontSize={6.8} className={FAINT}>
        gestational age (completed weeks)
      </text>

      {SOGC_ROWS.map((row, index) => {
        const y = 34 + index * 46;
        const x1 = xFor(row.from);
        const x2 = xFor(row.to);
        const width = Math.max(46, x2 - x1);
        return (
          <g key={row.label}>
            <text x={axisStart - 12} y={y + 16} textAnchor="end" fontSize={7.6} fontWeight={600} className={INK}>
              {row.label}
            </text>
            <rect x={x1} y={y} width={width} height={26} rx={6} fill={row.colour} opacity={0.88} />
            <text x={x1 + 7} y={y + 17} fontSize={6.8} fontWeight={700} fill="#FFFFFF">
              {row.text}
            </text>
            <text x={x1 + width + 7} y={y + 17} fontSize={6.6} className={MUTED}>
              {row.mode}
            </text>
          </g>
        );
      })}

      <rect x={12} y={314} width={678} height={2} fill="#64748B" />
      <text x={axisStart} y={24} fontSize={7} fontWeight={700} className={MUTED}>
        Earlier ← planned delivery → later
      </text>
      <rect x={xFor(24)} y={30} width={xFor(30) - xFor(24)} height={288} fill="#7C3AED" opacity={0.045} />
      <text x={(xFor(24) + xFor(30)) / 2} y={352} textAnchor="middle" fontSize={6.4} className={FAINT}>
        immediate-delivery zone
      </text>
    </Frame>
  );
}

/* ========================================================================== */
/* TORCH module — eight colour-coded diagrams                                  */
/* ========================================================================== */

const TORCH_AMBER = '#B45309';
const TORCH_ORANGE = '#C2410C';
const TORCH_ROSE = '#BE123C';
const TORCH_VIOLET = '#6D28D9';
const TORCH_TEAL = '#0F766E';
const TORCH_EMERALD = '#047857';
const TORCH_INDIGO = '#4338CA';
const TORCH_SLATE = '#475569';

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 1 — serology matrix, avidity & the PCR gateway                */
/* -------------------------------------------------------------------------- */

const TORCH_QUADRANTS: readonly {
  pattern: string;
  verdict: string;
  lines: readonly [string, string];
  tone: string;
}[] = [
  {
    pattern: 'IgM⁺ / IgG⁻',
    verdict: 'Recent infection < 10 days',
    lines: ['Repeat paired serology', 'in 2–3 weeks'],
    tone: TORCH_AMBER,
  },
  {
    pattern: 'IgM⁺ / IgG⁺',
    verdict: 'Recent infection > 10 days',
    lines: ['Run IgG avidity', 'to date the infection'],
    tone: TORCH_ORANGE,
  },
  {
    pattern: 'IgG⁺ / IgM⁻',
    verdict: 'Past infection',
    lines: ['Lifelong immunity;', 'the fetus is protected'],
    tone: TORCH_EMERALD,
  },
  {
    pattern: 'IgM⁻ / IgG⁻',
    verdict: 'Infection excluded',
    lines: ['Non-immune — give', 'primary prevention advice'],
    tone: TORCH_SLATE,
  },
];

function TorchSerologyDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 330"
      title="Diagram 1 · TORCH serology, avidity & the PCR gateway"
      caption="Paired IgM and IgG read as a two-by-two matrix. When both are positive, IgG avidity dates the infection: < 30% is recent primary infection, > 60% is past infection or vaccination. Amniotic-fluid PCR only becomes meaningful after 18–20 weeks."
    >
      <rect x={12} y={10} width={360} height={310} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={360} height={310} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={32} fontSize={9} fontWeight={700} className={INK}>
        SEROLOGY MATRIX
      </text>
      <text x={28} y={46} fontSize={6.6} className={MUTED}>
        paired virus-specific IgM / IgG · ELISA
      </text>

      {TORCH_QUADRANTS.map((cell, index) => {
        const col = index % 2;
        const row = Math.floor(index / 2);
        const x = 26 + col * 168;
        const y = 62 + row * 110;
        return (
          <g key={cell.pattern}>
            <rect x={x} y={y} width={156} height={98} rx={9} fill={cell.tone} opacity={0.09} />
            <rect x={x} y={y} width={156} height={98} rx={9} fill="none" stroke={cell.tone} strokeWidth={0.9} />
            <text x={x + 10} y={y + 18} fontSize={8} fontWeight={700} fill={cell.tone}>
              {cell.pattern}
            </text>
            <text x={x + 10} y={y + 34} fontSize={6.8} fontWeight={600} className={INK}>
              {cell.verdict}
            </text>
            <text x={x + 10} y={y + 54} fontSize={6.3} className={MUTED}>
              {cell.lines[0]}
            </text>
            <text x={x + 10} y={y + 66} fontSize={6.3} className={MUTED}>
              {cell.lines[1]}
            </text>
          </g>
        );
      })}

      <text x={28} y={302} fontSize={6.5} className={MUTED}>
        IgM never crosses the placenta — it marks maternal, not fetal, infection.
      </text>

      <rect x={388} y={10} width={360} height={310} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={388} y={10} width={360} height={310} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={32} fontSize={9} fontWeight={700} className={INK}>
        IgG AVIDITY
      </text>
      <text x={404} y={46} fontSize={6.6} className={MUTED}>
        the tie-breaker when IgM and IgG are both positive
      </text>

      <rect x={404} y={64} width={98} height={26} rx={5} fill={TORCH_ROSE} opacity={0.85} />
      <rect x={502} y={64} width={98} height={26} rx={5} fill={TORCH_AMBER} opacity={0.85} />
      <rect x={600} y={64} width={132} height={26} rx={5} fill={TORCH_EMERALD} opacity={0.85} />
      <text x={453} y={81} textAnchor="middle" fontSize={7.4} fontWeight={700} fill="#FFFFFF">
        &lt; 30%
      </text>
      <text x={551} y={81} textAnchor="middle" fontSize={7.4} fontWeight={700} fill="#FFFFFF">
        30–60%
      </text>
      <text x={666} y={81} textAnchor="middle" fontSize={7.4} fontWeight={700} fill="#FFFFFF">
        &gt; 60%
      </text>
      <text x={453} y={102} textAnchor="middle" fontSize={6.3} className={FAINT}>
        low · recent
      </text>
      <text x={551} y={102} textAnchor="middle" fontSize={6.3} className={FAINT}>
        equivocal
      </text>
      <text x={666} y={102} textAnchor="middle" fontSize={6.3} className={FAINT}>
        high · past
      </text>

      <rect x={404} y={120} width={328} height={48} rx={8} fill={TORCH_ROSE} opacity={0.08} />
      <text x={416} y={138} fontSize={7} fontWeight={700} fill={TORCH_ROSE}>
        LOW AVIDITY &lt; 30%
      </text>
      <text x={416} y={153} fontSize={6.4} className={MUTED}>
        Primary infection within 3 months → investigate the fetus.
      </text>

      <rect x={404} y={176} width={328} height={48} rx={8} fill={TORCH_EMERALD} opacity={0.08} />
      <text x={416} y={194} fontSize={7} fontWeight={700} fill={TORCH_EMERALD}>
        HIGH AVIDITY &gt; 60%
      </text>
      <text x={416} y={209} fontSize={6.4} className={MUTED}>
        Past infection &gt; 3 months (or vaccination) → reassure.
      </text>

      <rect x={404} y={234} width={328} height={62} rx={8} fill={TORCH_AMBER} opacity={0.08} />
      <text x={416} y={252} fontSize={6.8} fontWeight={700} fill={TORCH_AMBER}>
        CMV cutoffs: &lt; 30% recent · &gt; 60% past
      </text>
      <text x={416} y={268} fontSize={6.3} className={MUTED}>
        Low avidity can persist for years — confirm with a second sample.
      </text>
      <text x={416} y={284} fontSize={6.3} className={MUTED}>
        Amniotic-fluid PCR only after 18–20 weeks.
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 2 — fetal ultrasound signature by compartment                */
/* -------------------------------------------------------------------------- */

const TORCH_USG_GROUPS: readonly {
  title: string;
  tone: string;
  items: readonly string[];
}[] = [
  {
    title: 'CRANIAL',
    tone: TORCH_VIOLET,
    items: [
      'Ventriculomegaly',
      'Intracranial calcifications',
      'Intraventricular synechiae',
      'Cerebellar abnormalities',
      'Periventricular pseudocysts',
      'Cortical malformations',
    ],
  },
  {
    title: 'EXTRACRANIAL',
    tone: TORCH_ORANGE,
    items: [
      'Small for gestational age (SGA)',
      'Hyperechogenic bowel',
      'Liver calcifications',
      'Ascites',
      'Pericardial effusion',
      'Subcutaneous oedema',
      'Hydrops / anaemia (MCA-PSV > 1.5 MoM)',
    ],
  },
  {
    title: 'PLACENTA & FLUID',
    tone: TORCH_TEAL,
    items: [
      'Placentomegaly',
      'Placental calcification',
      'Oligohydramnios / anhydramnios',
      'Polyhydramnios',
    ],
  },
];

function TorchUsgDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 312"
      title="Diagram 2 · The fetal ultrasound signature of TORCH"
      caption="Group the sonographic red flags by compartment. Cranial findings (ventriculomegaly, calcification, synechiae, cerebellar and cortical malformation) sit beside extracranial findings (SGA, echogenic bowel, liver calcification, effusions, hydrops) and placental/fluid findings (placentomegaly, calcification, oligo- or polyhydramnios)."
    >
      {TORCH_USG_GROUPS.map((group, groupIndex) => {
        const x = 12 + groupIndex * 249;
        return (
          <g key={group.title}>
            <rect x={x} y={10} width={238} height={250} rx={11} className={PANEL} strokeWidth={1} />
            <rect x={x} y={10} width={238} height={250} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
            <rect x={x} y={10} width={238} height={34} rx={11} fill={group.tone} opacity={0.14} />
            <text x={x + 12} y={31} fontSize={8} fontWeight={700} fill={group.tone}>
              {group.title}
            </text>
            {group.items.map((item, index) => {
              const y = 54 + index * 28;
              return (
                <g key={item}>
                  <rect x={x + 12} y={y} width={214} height={23} rx={6} fill={group.tone} opacity={0.07} />
                  <text x={x + 21} y={y + 15} fontSize={6.4} className={INK}>
                    {item}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      <rect x={12} y={272} width={736} height={30} rx={7} fill={TORCH_ROSE} opacity={0.1} />
      <text x={380} y={291} textAnchor="middle" fontSize={7.1} fontWeight={700} fill={TORCH_ROSE}>
        Hydrops + MCA-PSV &gt; 1.5 MoM without atypical antibodies → parvovirus B19 / TORCH screen
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 3 — toxoplasmosis diagnosis and treatment                    */
/* -------------------------------------------------------------------------- */

function ToxoplasmosisDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 430"
      title="Diagram 3 · Toxoplasmosis — diagnosis, fetal work-up & the 18-week switch"
      caption="Maternal IgG → IgM → avidity gates the work-up. Fetal diagnosis rests on intracranial calcification with progressive ventriculomegaly and amniotic-fluid PCR after 18 weeks. Treatment switches at 18 weeks from spiramycin to pyrimethamine + sulfadiazine + folinic acid, and steps back down when PCR and ultrasound are both negative."
    >
      <rect x={12} y={10} width={360} height={250} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={360} height={250} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={32} fontSize={8.6} fontWeight={700} className={INK}>
        MATERNAL WORK-UP
      </text>
      <text x={28} y={46} fontSize={6.4} className={MUTED}>
        IgG first — avidity only after a positive IgM
      </text>

      {[
        { label: 'Toxoplasma IgG assay', tone: TORCH_TEAL },
        { label: 'IgG positive → check IgM', tone: TORCH_TEAL },
        { label: 'IgM positive → IgG avidity', tone: TORCH_AMBER },
        { label: 'Low avidity → investigate fetus', tone: TORCH_ROSE },
      ].map((node, index) => {
        const y = 58 + index * 46;
        return (
          <g key={node.label}>
            <rect x={28} y={y} width={216} height={30} rx={7} fill={node.tone} opacity={0.1} />
            <rect x={28} y={y} width={216} height={30} rx={7} fill="none" stroke={node.tone} strokeWidth={0.8} />
            <text x={38} y={y + 19} fontSize={6.7} fontWeight={600} className={INK}>
              {node.label}
            </text>
            {index < 3 ? (
              <path d={`M 136 ${y + 30} l 0 10 l -3 -4 l 6 0 Z`} fill="#94A3B8" />
            ) : null}
          </g>
        );
      })}

      {[
        { y: 58, text: 'IgG negative → prevention advice', tone: TORCH_EMERALD },
        { y: 104, text: 'IgM negative → reassure', tone: TORCH_EMERALD },
        { y: 150, text: 'High avidity → past infection', tone: TORCH_EMERALD },
      ].map((note) => (
        <g key={note.text}>
          <rect x={258} y={note.y} width={98} height={30} rx={6} fill={note.tone} opacity={0.08} />
          <text x={264} y={note.y + 13} fontSize={5.8} fontWeight={600} fill={note.tone}>
            {note.text.split(' → ')[0]}
          </text>
          <text x={264} y={note.y + 24} fontSize={5.8} fill={note.tone}>
            {`→ ${note.text.split(' → ')[1]}`}
          </text>
        </g>
      ))}

      <text x={28} y={246} fontSize={6.2} className={MUTED}>
        Definitive host: cats · humans are intermediate hosts with tissue cysts.
      </text>

      <rect x={388} y={10} width={360} height={250} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={388} y={10} width={360} height={250} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={32} fontSize={8.6} fontWeight={700} className={INK}>
        FETAL DIAGNOSIS
      </text>
      <text x={404} y={46} fontSize={6.4} className={MUTED}>
        ultrasound pattern plus amniotic-fluid PCR
      </text>

      <rect x={404} y={58} width={328} height={44} rx={7} fill={TORCH_VIOLET} opacity={0.09} />
      <text x={414} y={75} fontSize={6.7} fontWeight={700} fill={TORCH_VIOLET}>
        TWO COMMONEST USG FINDINGS
      </text>
      <text x={414} y={90} fontSize={6.3} className={MUTED}>
        Intracranial calcifications + bilateral progressive ventriculomegaly
      </text>

      <rect x={404} y={110} width={328} height={48} rx={7} fill={TORCH_EMERALD} opacity={0.09} />
      <text x={414} y={127} fontSize={6.7} fontWeight={700} fill={TORCH_EMERALD}>
        AMNIOTIC-FLUID PCR ≥ 18 WEEKS
      </text>
      <text x={414} y={142} fontSize={6.3} className={MUTED}>
        PPV 100% · specificity 100% — positive confirms infection, not severity
      </text>

      <rect x={404} y={166} width={328} height={40} rx={7} fill={TORCH_ROSE} opacity={0.09} />
      <text x={414} y={183} fontSize={6.7} fontWeight={700} fill={TORCH_ROSE}>
        DO NOT PUNCTURE IF HIV / HBsAg POSITIVE
      </text>
      <text x={414} y={197} fontSize={6.3} className={MUTED}>
        The needle can seed the fetus with maternal virus.
      </text>

      <text x={404} y={224} fontSize={6.3} className={MUTED}>
        Neonatal: 80% asymptomatic · 20% symptomatic (two-thirds moderate).
      </text>
      <text x={404} y={242} fontSize={6.3} className={MUTED}>
        Monthly ultrasound if the fetal PCR is positive.
      </text>

      <rect x={12} y={274} width={736} height={142} rx={12} className={PANEL} strokeWidth={1} />
      <rect x={12} y={274} width={736} height={142} rx={12} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={294} fontSize={8.4} fontWeight={700} className={INK}>
        TREATMENT SWITCH AT 18 WEEKS
      </text>

      <rect x={24} y={304} width={352} height={84} rx={8} fill={TORCH_TEAL} opacity={0.1} />
      <text x={38} y={322} fontSize={7.2} fontWeight={700} fill={TORCH_TEAL}>
        &lt; 18 WEEKS · SPIROMYCIN 1 g TDS
      </text>
      <text x={38} y={338} fontSize={6.3} className={MUTED}>
        Contraindicated in long QT syndrome.
      </text>
      <text x={38} y={352} fontSize={6.3} className={MUTED}>
        GIT upset and skin reactions · no monitoring required.
      </text>
      <text x={38} y={370} fontSize={6.3} className={MUTED}>
        Continue if PCR and ultrasound are negative.
      </text>

      <rect x={384} y={304} width={352} height={84} rx={8} fill={TORCH_VIOLET} opacity={0.1} />
      <text x={398} y={322} fontSize={7.2} fontWeight={700} fill={TORCH_VIOLET}>
        ≥ 18 WEEKS · PYRIMETHAMINE + SULFADIAZINE
      </text>
      <text x={398} y={338} fontSize={6.3} className={MUTED}>
        Pyrimethamine 50 mg/day + sulfadiazine 1.5 g/day.
      </text>
      <text x={398} y={352} fontSize={6.3} className={MUTED}>
        Folinic acid 25 mg twice weekly + 2 L water/day.
      </text>
      <text x={398} y={370} fontSize={6.3} className={MUTED}>
        Weekly CBC · contraindicated in G6PD deficiency.
      </text>

      <text x={380} y={406} textAnchor="middle" fontSize={6.3} className={FAINT}>
        PCR/USG positive on spiramycin → switch up · both negative on the combination → step down to spiramycin
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 4 — syphilis screening, treatment ladder & congenital risk   */
/* -------------------------------------------------------------------------- */

function SyphilisDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 400"
      title="Diagram 4 · Syphilis — screening, treatment ladder & congenital risk"
      caption="Universal RST screening at booking; in high-prevalence areas the first penicillin dose follows a positive RST on the same day. The ladder runs from single-dose benzathine penicillin for early disease to three weekly doses for late disease and a 14-day neurosyphilis regimen with steroid cover. The neonate is then classified as no risk, low risk or high risk, and as a possible, probable or confirmed congenital case."
    >
      <rect x={12} y={10} width={360} height={160} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={360} height={160} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={32} fontSize={8.4} fontWeight={700} className={INK}>
        UNIVERSAL SCREENING
      </text>
      <text x={28} y={50} fontSize={6.5} fontWeight={600} className={MUTED}>
        First antenatal visit — regardless of prevalence or prior results
      </text>
      <text x={28} y={74} fontSize={6.5} className={INK}>
        Low prevalence &lt; 5% → single on-site RST preferred over RPR
      </text>
      <text x={28} y={98} fontSize={6.5} fontWeight={700} fill={TORCH_ROSE}>
        High prevalence &gt; 5% → RST positive
      </text>
      <text x={28} y={114} fontSize={6.5} fill={TORCH_ROSE}>
        → give the first dose SAME DAY, then RPR for duration
      </text>
      <text x={28} y={138} fontSize={6.3} className={MUTED}>
        Repeat only if reinfection risk, STI symptoms or HIV-positive.
      </text>
      <text x={28} y={156} fontSize={6.3} className={MUTED}>
        Syphilis does not confer lifelong immunity.
      </text>

      <rect x={388} y={10} width={360} height={160} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={388} y={10} width={360} height={160} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={32} fontSize={8.4} fontWeight={700} className={INK}>
        TREATMENT LADDER
      </text>
      {[
        'Early ≤ 27+6 wks · benzathine penicillin 2.4 MU IM × 1',
        'Early 28 wks–term · 2.4 MU IM Day 1 + Day 8',
        'Late/cardiovascular · 2.4 MU IM weekly × 3 (D1, 8, 15)',
        'Neurosyphilis · procaine penicillin 1.8–2.4 MU IM + probenecid × 14 d',
        'Allergy → desensitize (penicillin is the only fetal drug)',
      ].map((line, index) => (
        <text
          key={line}
          x={404}
          y={54 + index * 22}
          fontSize={6.3}
          fontWeight={index === 4 ? 700 : 400}
          fill={index === 4 ? TORCH_ROSE : undefined}
          className={index === 4 ? undefined : MUTED}
        >
          {line}
        </text>
      ))}

      <rect x={12} y={182} width={360} height={120} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={12} y={182} width={360} height={120} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={204} fontSize={8.4} fontWeight={700} className={INK}>
        NEONATAL RISK
      </text>
      <text x={28} y={224} fontSize={6.4} fill={TORCH_EMERALD}>
        No risk · treated before the index pregnancy + no reinfection
      </text>
      <text x={28} y={246} fontSize={6.4} fill={TORCH_AMBER}>
        Low risk · normal exam + adequate treatment &gt; 4 wks pre-delivery
      </text>
      <text x={28} y={268} fontSize={6.4} fill={TORCH_ROSE}>
        High risk · treatment &lt; 4 wks pre-delivery, non-beta-lactam or inadequate
      </text>
      <text x={28} y={288} fontSize={6.4} fontWeight={700} fill={TORCH_ROSE}>
        High risk → treat the neonate for congenital syphilis
      </text>

      <rect x={388} y={182} width={360} height={120} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={388} y={182} width={360} height={120} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={204} fontSize={8.4} fontWeight={700} className={INK}>
        CASE CLASSIFICATION
      </text>
      <text x={404} y={224} fontSize={6.4} className={MUTED}>
        Possible · untreated mother + positive infant RPR
      </text>
      <text x={404} y={244} fontSize={6.4} className={MUTED}>
        Probable · + X-ray signs or RPR &gt; 4× normal
      </text>
      <text x={404} y={264} fontSize={6.4} className={MUTED}>
        Confirmed · + dark-field microscopy or PCR
      </text>
      <text x={404} y={288} fontSize={6.2} fill={TORCH_VIOLET}>
        Steroid cover: prednisolone 40–60 mg × 3 d, 24 h before antibiotics.
      </text>

      <rect x={12} y={316} width={736} height={54} rx={9} fill={TORCH_ROSE} opacity={0.09} />
      <text x={380} y={336} textAnchor="middle" fontSize={7} fontWeight={700} fill={TORCH_ROSE}>
        Penicillin is the only drug proven to cross the placenta and treat the fetus
      </text>
      <text x={380} y={354} textAnchor="middle" fontSize={6.3} className={MUTED}>
        Other agents treat the mother only → treat the neonate · retreatment if &lt; 4-fold RPR/VDRL fall
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 5 — rubella CRS risk gradient                                */
/* -------------------------------------------------------------------------- */

const RUBELLA_BANDS: readonly {
  band: string;
  transmission: number;
  defect: number;
  note: string;
}[] = [
  { band: '< 12 weeks', transmission: 90, defect: 97, note: '97% defect' },
  { band: '12–16 weeks', transmission: 55, defect: 20, note: '20% defect' },
  { band: '> 16 weeks', transmission: 45, defect: 0, note: 'deafness only' },
];

function RubellaDiagram(): JSX.Element {
  const x0 = 160;
  const scale = 2;
  return (
    <Frame
      viewBox="0 0 760 352"
      title="Diagram 5 · Rubella — the CRS transmission-versus-defect gradient"
      caption="Transmission falls only modestly across pregnancy (90% → 55% → 45%), whereas the congenital defect risk collapses from 97% before 12 weeks to 20% at 12–16 weeks and to deafness alone after 16 weeks. The CRS triad is sensorineural deafness, cataracts and cardiac defects (PDA/VSD)."
    >
      <rect x={12} y={10} width={430} height={270} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={430} height={270} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={32} fontSize={8.4} fontWeight={700} className={INK}>
        CRS RISK GRADIENT
      </text>

      {RUBELLA_BANDS.map((row, index) => {
        const y = 64 + index * 72;
        const transmissionWidth = row.transmission * scale;
        const defectWidth = row.defect * scale;
        return (
          <g key={row.band}>
            <text x={28} y={y + 14} fontSize={7.4} fontWeight={600} className={INK}>
              {row.band}
            </text>
            <rect x={x0} y={y + 2} width={transmissionWidth} height={13} rx={4} fill={TORCH_TEAL} opacity={0.85} />
            <text x={x0 + transmissionWidth + 6} y={y + 12} fontSize={6.3} fontWeight={600} fill={TORCH_TEAL}>
              {`${row.transmission}%`}
            </text>
            {row.defect > 0 ? (
              <>
                <rect x={x0} y={y + 20} width={defectWidth} height={13} rx={4} fill={TORCH_ROSE} opacity={0.85} />
                <text x={x0 + defectWidth + 6} y={y + 30} fontSize={6.3} fontWeight={600} fill={TORCH_ROSE}>
                  {`${row.defect}%`}
                </text>
              </>
            ) : (
              <text x={x0 + 4} y={y + 30} fontSize={6.3} fontWeight={700} fill={TORCH_ROSE}>
                minimal — deafness only
              </text>
            )}
          </g>
        );
      })}

      <rect x={28} y={248} width={8} height={8} rx={2} fill={TORCH_TEAL} />
      <text x={42} y={255} fontSize={6.3} className={MUTED}>
        fetal transmission
      </text>
      <rect x={130} y={248} width={8} height={8} rx={2} fill={TORCH_ROSE} />
      <text x={144} y={255} fontSize={6.3} className={MUTED}>
        congenital defect
      </text>

      <rect x={454} y={10} width={294} height={270} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={454} y={10} width={294} height={270} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={470} y={32} fontSize={8.4} fontWeight={700} className={INK}>
        MANAGEMENT
      </text>

      <rect x={470} y={44} width={262} height={38} rx={7} fill={TORCH_AMBER} opacity={0.09} />
      <text x={480} y={59} fontSize={6.5} fontWeight={700} fill={TORCH_AMBER}>
        IgM has a 15–20% false-positive rate
      </text>
      <text x={480} y={73} fontSize={6.2} className={MUTED}>
        Confirm with IgG avidity or pharyngeal RT-PCR.
      </text>

      <text x={470} y={104} fontSize={6.5} fill={TORCH_ROSE}>
        &lt; 12 weeks · 97% defect → offer TOP without testing
      </text>
      <text x={470} y={130} fontSize={6.5} className={MUTED}>
        12–20 weeks · amniotic RNA PCR, wait ≥ 6 weeks
      </text>
      <text x={470} y={156} fontSize={6.5} className={MUTED}>
        after maternal infection to avoid false negatives
      </text>
      <text x={470} y={182} fontSize={6.5} fill={TORCH_EMERALD}>
        &gt; 16 weeks · deafness is the only expected sequela
      </text>
      <text x={470} y={210} fontSize={6.5} className={MUTED}>
        MMR is live → avoid conception for 1 month;
      </text>
      <text x={470} y={226} fontSize={6.5} className={MUTED}>
        safe during breastfeeding.
      </text>
      <text x={470} y={252} fontSize={6.5} className={MUTED}>
        Herd immunity 98–99% → no routine antenatal screening.
      </text>
      <text x={470} y={270} fontSize={6.5} className={MUTED}>
        Incubation 14 days · infectious ±7 days around the rash.
      </text>

      <rect x={12} y={296} width={736} height={46} rx={8} fill={TORCH_VIOLET} opacity={0.09} />
      <text x={380} y={314} textAnchor="middle" fontSize={7} fontWeight={700} fill={TORCH_VIOLET}>
        CRS triad: sensorineural deafness · cataracts · PDA / VSD
      </text>
      <text x={380} y={330} textAnchor="middle" fontSize={6.3} className={MUTED}>
        Also hepatosplenomegaly, FGR, jaundice, anaemia, rash, neurodevelopmental delay and endocrinopathy
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 6 — CMV transmission, avidity & the diagnostic ladder        */
/* -------------------------------------------------------------------------- */

function CmvDiagram(): JSX.Element {
  const bars = [
    { label: '1st trimester', value: 30, tone: TORCH_TEAL },
    { label: '3rd trimester', value: 47, tone: TORCH_INDIGO },
  ];
  const steps = [
    'IgG avidity — dates a primary infection',
    'Amniotic-fluid PCR ≥ 20 weeks + ≥ 8 weeks after infection',
    'Fetal brain ultrasound / MRI — cerebral abnormality is the key marker',
    'Neonatal saliva or urine PCR within 3 weeks of birth',
    'Valganciclovir within the first 4 weeks if symptomatic',
  ];

  return (
    <Frame
      viewBox="0 0 760 354"
      title="Diagram 6 · CMV — transmission, severity & the diagnostic ladder"
      caption="Transmission climbs from ~30% early to ~47% in the third trimester, while severe damage concentrates in the first trimester. The ladder runs from IgG avidity to amniotic-fluid PCR after 20 weeks and at least 8 weeks after infection, then fetal brain imaging, neonatal PCR within 3 weeks, and valganciclovir within 4 weeks if symptomatic."
    >
      <rect x={12} y={10} width={360} height={252} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={360} height={252} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={32} fontSize={8.4} fontWeight={700} className={INK}>
        TRANSMISSION vs SEVERITY
      </text>

      <text x={28} y={56} fontSize={6.4} fontWeight={700} className={FAINT}>
        FETAL TRANSMISSION
      </text>
      {bars.map((bar, index) => {
        const y = 68 + index * 32;
        return (
          <g key={bar.label}>
            <text x={28} y={y + 11} fontSize={6.4} className={MUTED}>
              {bar.label}
            </text>
            <rect x={110} y={y} width={bar.value * 4.2} height={14} rx={4} fill={bar.tone} opacity={0.85} />
            <text x={110 + bar.value * 4.2 + 6} y={y + 11} fontSize={6.4} fontWeight={600} fill={bar.tone}>
              {`~${bar.value}%`}
            </text>
          </g>
        );
      })}

      <text x={28} y={146} fontSize={6.4} fontWeight={700} className={FAINT}>
        SEVERE NEUROLOGICAL / HEARING DAMAGE
      </text>
      <rect x={28} y={156} width={328} height={26} rx={6} fill={TORCH_ROSE} opacity={0.1} />
      <text x={38} y={173} fontSize={6.4} fontWeight={600} fill={TORCH_ROSE}>
        1st trimester — almost exclusively
      </text>
      <rect x={28} y={188} width={328} height={26} rx={6} fill={TORCH_EMERALD} opacity={0.1} />
      <text x={38} y={205} fontSize={6.4} fontWeight={600} fill={TORCH_EMERALD}>
        3rd trimester — unlikely, but late-onset SNHL still possible
      </text>

      <text x={28} y={236} fontSize={6.3} className={MUTED}>
        IgG avidity: &lt; 30% recent · &gt; 60% past (&gt; 3 months).
      </text>
      <text x={28} y={252} fontSize={6.3} className={MUTED}>
        Ultrasound every 2–4 weeks in confirmed fetal CMV.
      </text>

      <rect x={388} y={10} width={360} height={252} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={388} y={10} width={360} height={252} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={32} fontSize={8.4} fontWeight={700} className={INK}>
        DIAGNOSTIC LADDER
      </text>

      {steps.map((step, index) => {
        const y = 52 + index * 38;
        return (
          <g key={step}>
            <rect x={410} y={y} width={316} height={28} rx={7} fill={TORCH_VIOLET} opacity={0.08} />
            <rect x={410} y={y} width={316} height={28} rx={7} fill="none" stroke={TORCH_VIOLET} strokeWidth={0.6} opacity={0.5} />
            <circle cx={424} cy={y + 14} r={7} fill={TORCH_VIOLET} opacity={0.9} />
            <text x={424} y={y + 16.5} textAnchor="middle" fontSize={6.2} fontWeight={700} fill="#FFFFFF">
              {index + 1}
            </text>
            <text x={438} y={y + 17} fontSize={6.2} className={INK}>
              {step}
            </text>
          </g>
        );
      })}

      <rect x={12} y={276} width={736} height={66} rx={8} fill={TORCH_ROSE} opacity={0.08} />
      <text x={380} y={294} textAnchor="middle" fontSize={7} fontWeight={700} fill={TORCH_ROSE}>
        Cerebral abnormality on ultrasound is the single most important prognostic indicator
      </text>
      <text x={380} y={312} textAnchor="middle" fontSize={6.3} className={MUTED}>
        A normal brain ultrasound + MRI lowers but does not exclude hearing impairment
      </text>
      <text x={380} y={328} textAnchor="middle" fontSize={6.3} className={MUTED}>
        Congenital CMV = neonatal PCR within 3 weeks · treatment window = first 4 weeks of life
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 7 — HSV perinatal routes and suppression                     */
/* -------------------------------------------------------------------------- */

function HsvDiagram(): JSX.Element {
  return (
    <Frame
      viewBox="0 0 760 356"
      title="Diagram 7 · HSV — perinatal routes, risk order & suppression at 36 weeks"
      caption="Perinatal HSV is 5% congenital, 85% neonatal and 10% postnatally acquired, with risk highest after primary genital infection and lowest after recurrence. Suppressive oral acyclovir or valaciclovir from > 36 weeks cuts recurrences and caesarean need; active lesions at delivery still mandate caesarean section."
    >
      {[
        {
          title: '5% · CONGENITAL',
          lines: ['Mostly asymptomatic · little teratogenic', 'capacity · may cause skin, ocular and CNS lesions'],
          tone: TORCH_VIOLET,
        },
        {
          title: '85% · NEONATAL',
          lines: ['Dominant route · risk order: primary', 'genital > first nonprimary > recurrent'],
          tone: TORCH_ROSE,
        },
        {
          title: '10% · POSTNATAL',
          lines: ['Horizontal transmission after birth ·', 'maternal or nosocomial source'],
          tone: TORCH_ORANGE,
        },
      ].map((card, index) => {
        const x = 12 + index * 249;
        return (
          <g key={card.title}>
            <rect x={x} y={10} width={238} height={100} rx={10} className={PANEL} strokeWidth={1} />
            <rect x={x} y={10} width={238} height={100} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
            <rect x={x} y={10} width={238} height={30} rx={10} fill={card.tone} opacity={0.15} />
            <text x={x + 12} y={30} fontSize={8} fontWeight={700} fill={card.tone}>
              {card.title}
            </text>
            <text x={x + 12} y={56} fontSize={6.2} className={MUTED}>
              {card.lines[0]}
            </text>
            <text x={x + 12} y={70} fontSize={6.2} className={MUTED}>
              {card.lines[1]}
            </text>
          </g>
        );
      })}

      <text x={28} y={138} fontSize={6.5} fontWeight={700} className={FAINT}>
        NEONATAL RISK ORDER
      </text>
      {['Primary genital', 'First nonprimary', 'Recurrent'].map((label, index) => {
        const x = 28 + index * 246;
        const tone = index === 0 ? TORCH_ROSE : index === 1 ? TORCH_AMBER : TORCH_EMERALD;
        return (
          <g key={label}>
            <rect x={x} y={148} width={214} height={30} rx={7} fill={tone} opacity={0.12} />
            <text x={x + 107} y={167} textAnchor="middle" fontSize={7} fontWeight={700} fill={tone}>
              {label}
            </text>
            {index < 2 ? (
              <path d={`M ${x + 218} 163 l 20 0 l -5 -4 l 0 8 Z`} fill="#94A3B8" />
            ) : null}
          </g>
        );
      })}

      <rect x={12} y={194} width={360} height={130} rx={10} className={PANEL} strokeWidth={1} />
      <rect x={12} y={194} width={360} height={130} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={216} fontSize={8.2} fontWeight={700} className={INK}>
        SUPPRESSION FROM &gt; 36 WEEKS
      </text>
      <text x={28} y={238} fontSize={6.4} className={MUTED}>
        Acyclovir 400 mg every 8 h · valaciclovir 500 mg every 12 h
      </text>
      <text x={28} y={258} fontSize={6.4} className={MUTED}>
        Cuts recurrence and the need for caesarean section.
      </text>
      <text x={28} y={282} fontSize={6.4} className={MUTED}>
        Lesion swab is the gold standard: culture is 80–90% sensitive
      </text>
      <text x={28} y={298} fontSize={6.4} className={MUTED}>
        in primary active infection; PCR from the lesion base.
      </text>
      <text x={28} y={318} fontSize={6.3} fill={TORCH_VIOLET}>
        Type-specific serology only for a first episode in late pregnancy.
      </text>

      <rect x={388} y={194} width={360} height={130} rx={10} className={PANEL} strokeWidth={1} />
      <rect x={388} y={194} width={360} height={130} rx={10} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={216} fontSize={8.2} fontWeight={700} className={INK}>
        DELIVERY & SEVERE DISEASE
      </text>
      <text x={404} y={238} fontSize={6.4} fill={TORCH_ROSE}>
        Active lesions at delivery → elective lower-segment caesarean
      </text>
      <text x={404} y={258} fontSize={6.4} className={MUTED}>
        Severe/disseminated maternal herpes: IV acyclovir
      </text>
      <text x={404} y={274} fontSize={6.4} className={MUTED}>
        5–10 mg/kg every 8 h × 2–7 days, then oral therapy × 10 days.
      </text>
      <text x={404} y={298} fontSize={6.4} className={MUTED}>
        Recurrent episode: paracetamol + topical lidocaine 2% gel.
      </text>
      <text x={404} y={318} fontSize={6.3} fill={TORCH_AMBER}>
        Highest vertical risk: primary infection within 6 weeks of delivery.
      </text>

      <text x={380} y={342} textAnchor="middle" fontSize={6.3} className={FAINT}>
        Neonatal risk is driven by maternal immune status at delivery, not by the presence of a visible lesion alone.
      </text>
    </Frame>
  );
}

/* -------------------------------------------------------------------------- */
/* TORCH Diagram 8 — parvovirus B19 versus varicella-zoster                   */
/* -------------------------------------------------------------------------- */

function ParvovirusVzvDiagram(): JSX.Element {
  const vzvBands = [
    { label: '< 13 weeks', risk: 'CVS 0.5%', tone: TORCH_EMERALD },
    { label: '13–20 weeks', risk: 'CVS 2% — peak teratogenic window', tone: TORCH_ROSE },
    { label: '> 20 weeks', risk: 'Minimal CVS risk', tone: TORCH_AMBER },
    { label: '> 36 weeks', risk: '50% fetal infection · 25% neonatal varicella', tone: TORCH_VIOLET },
  ];

  return (
    <Frame
      viewBox="0 0 760 412"
      title="Diagram 8 · Parvovirus B19 versus varicella-zoster"
      caption="Left: B19 targets P antigen on erythroid precursors, so serial MCA-PSV > 1.5 MoM is the monitor and intrauterine transfusion is the treatment. Right: congenital varicella syndrome risk peaks at 13–20 weeks (2%), collapses after 20 weeks, then reverses at term into neonatal varicella (50% infection, 25% clinical disease after 36 weeks)."
    >
      <rect x={12} y={10} width={360} height={260} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={12} y={10} width={360} height={260} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={32} fontSize={8.6} fontWeight={700} className={INK}>
        PARVOVIRUS B19
      </text>
      <text x={28} y={46} fontSize={6.4} className={MUTED}>
        ssDNA · Parvoviridae · no vaccine
      </text>

      {[
        { text: 'P antigen on erythroid precursors, myocardium, placenta', tone: TORCH_TEAL },
        { text: 'Erythropoiesis arrest → anaemia → hydrops (4–6 weeks)', tone: TORCH_TEAL },
        { text: 'Vertical transmission 25–32% — any trimester', tone: TORCH_AMBER },
        { text: 'Monitor MCA-PSV > 1.5 MoM (95% sensitivity)', tone: TORCH_ROSE },
        { text: 'Treat: intrauterine transfusion for anaemia or hydrops', tone: TORCH_EMERALD },
      ].map((node, index) => {
        const y = 58 + index * 38;
        return (
          <g key={node.text}>
            <rect x={28} y={y} width={328} height={30} rx={7} fill={node.tone} opacity={0.09} />
            <rect x={28} y={y} width={328} height={30} rx={7} fill="none" stroke={node.tone} strokeWidth={0.7} />
            <text x={38} y={y + 19} fontSize={6.4} fontWeight={index >= 3 ? 700 : 500} fill={index >= 3 ? node.tone : undefined} className={index >= 3 ? undefined : MUTED}>
              {node.text}
            </text>
          </g>
        );
      })}

      <text x={28} y={258} fontSize={6.2} className={FAINT}>
        Maternal IgM false-negative rate 20–40% · MCA-PSV can miss mild anaemia after 33 weeks.
      </text>

      <rect x={388} y={10} width={360} height={260} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={388} y={10} width={360} height={260} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={404} y={32} fontSize={8.6} fontWeight={700} className={INK}>
        VARICELLA-ZOSTER
      </text>
      <text x={404} y={46} fontSize={6.4} className={MUTED}>
        dsDNA herpes virus · primary chickenpox is the risk
      </text>

      {vzvBands.map((band, index) => {
        const y = 58 + index * 40;
        return (
          <g key={band.label}>
            <rect x={404} y={y} width={328} height={32} rx={7} fill={band.tone} opacity={0.09} />
            <rect x={404} y={y} width={5} height={32} rx={2.5} fill={band.tone} />
            <text x={418} y={y + 13} fontSize={6.5} fontWeight={700} className={INK}>
              {band.label}
            </text>
            <text x={418} y={y + 25} fontSize={6.2} fill={band.tone}>
              {band.risk}
            </text>
          </g>
        );
      })}

      <rect x={404} y={222} width={328} height={32} rx={7} fill={TORCH_EMERALD} opacity={0.09} />
      <text x={418} y={235} fontSize={6.5} fontWeight={700} className={INK}>
        Maternal shingles
      </text>
      <text x={418} y={247} fontSize={6.2} fill={TORCH_EMERALD}>
        0% risk of congenital varicella syndrome
      </text>

      <rect x={12} y={286} width={736} height={112} rx={11} className={PANEL} strokeWidth={1} />
      <rect x={12} y={286} width={736} height={112} rx={11} fill="none" className={PANEL_EDGE} strokeWidth={1} />
      <text x={28} y={308} fontSize={8.4} fontWeight={700} className={INK}>
        TWO DIFFERENT INTERVENTIONS
      </text>

      <rect x={24} y={318} width={230} height={66} rx={8} fill={TORCH_EMERALD} opacity={0.1} />
      <text x={38} y={335} fontSize={6.8} fontWeight={700} fill={TORCH_EMERALD}>
        VZIG within 10 days of exposure
      </text>
      <text x={38} y={351} fontSize={6.2} className={MUTED}>
        Passive prophylaxis in a non-immune
      </text>
      <text x={38} y={365} fontSize={6.2} className={MUTED}>
        pregnant woman · vaccine is live.
      </text>

      <rect x={266} y={318} width={230} height={66} rx={8} fill={TORCH_AMBER} opacity={0.1} />
      <text x={280} y={335} fontSize={6.8} fontWeight={700} fill={TORCH_AMBER}>
        Oral acyclovir within 24 h of rash
      </text>
      <text x={280} y={351} fontSize={6.2} className={MUTED}>
        Treats active maternal varicella;
      </text>
      <text x={280} y={365} fontSize={6.2} className={MUTED}>
        IV therapy if pneumonia or dissemination.
      </text>

      <rect x={508} y={318} width={228} height={66} rx={8} fill={TORCH_VIOLET} opacity={0.1} />
      <text x={522} y={335} fontSize={6.8} fontWeight={700} fill={TORCH_VIOLET}>
        Delay delivery 5–7 days after rash
      </text>
      <text x={522} y={351} fontSize={6.2} className={MUTED}>
        Lets maternal antibody cross before
      </text>
      <text x={522} y={365} fontSize={6.2} className={MUTED}>
        birth · avoid iatrogenic neonatal varicella.
      </text>

      <text x={380} y={400} textAnchor="middle" fontSize={6.3} className={FAINT}>
        Parvovirus: MCA-PSV is the monitor · VZV: VZIG is passive prophylaxis, not the live vaccine
      </text>
    </Frame>
  );
}

export function ClinicalDiagram({ diagram }: { diagram: StudioNoteDiagram }): JSX.Element {
  switch (diagram.kind) {
    case 'tvs-distance-cutoffs':
      return <TvsDistanceDiagram />;
    case 'silver-cs-risk-chart':
      return <SilverChart />;
    case 'figo-pas-grades':
      return <FigoDiagram />;
    case 'scan-timeline-flowchart':
      return <ScanTimelineDiagram />;
    case 'delivery-timing-matrix':
      return <TimingDiagram />;
    case 'usg-doppler-mri-markers':
      return <ImagingDiagram />;
    case 'hysterectomy-vs-triple-p':
      return <SurgeryDiagram />;
    case 'torch-serology-avidity-pcr':
      return <TorchSerologyDiagram />;
    case 'torch-usg-signature-map':
      return <TorchUsgDiagram />;
    case 'toxoplasmosis-diagnosis-treatment':
      return <ToxoplasmosisDiagram />;
    case 'syphilis-treatment-congenital-risk':
      return <SyphilisDiagram />;
    case 'rubella-crs-risk-gradient':
      return <RubellaDiagram />;
    case 'cmv-avidity-amniocentesis':
      return <CmvDiagram />;
    case 'hsv-perinatal-suppression':
      return <HsvDiagram />;
    case 'parvovirus-vzv-timeline':
      return <ParvovirusVzvDiagram />;
    case 'delphi-early-vs-late-fgr':
      return <DelphiDiagram />;
    case 'mvm-plgf-aspirin-pathway':
      return <MvmPlgfDiagram />;
    case 'fgr-genetic-cmv-workup':
      return <FgrWorkupDiagram />;
    case 'ua-doppler-waveforms-aedf-redf':
      return <UaDopplerDiagram />;
    case 'mca-cpr-ductus-venosus-cascade':
      return <McaCprDvDiagram />;
    case 'sogc-442-delivery-timing-matrix':
      return <SogcTimingDiagram />;
  }
}

