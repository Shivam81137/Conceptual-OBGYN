import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Pause, Play, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface MenstrualCycleSimulatorProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

const FSH = [7, 9, 10, 9, 8, 7, 6, 5, 4, 4, 5, 6, 9, 12, 7, 5, 4, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3] as const;
const LH = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 10, 34, 52, 20, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] as const;
const OESTRADIOL = [30, 35, 40, 45, 55, 70, 90, 115, 145, 175, 210, 260, 330, 240, 150, 120, 140, 165, 185, 175, 160, 140, 120, 100, 85, 70, 55, 40] as const;
const PROGESTERONE = [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.8, 3.5, 7, 11, 15, 18, 20, 19, 17, 14, 11, 8, 5, 3, 1.5] as const;
const ENDOMETRIUM = [2, 2, 2, 2.5, 3, 4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 11.5, 11, 10.5, 10, 9.5, 9, 8.5] as const;

const CURVES = [
  { id: 'fsh', label: 'FSH', unit: 'mIU/mL', color: '#F59E0B', values: FSH, max: 12 },
  { id: 'lh', label: 'LH', unit: 'mIU/mL', color: '#F43F5E', values: LH, max: 52 },
  { id: 'e2', label: 'Oestradiol', unit: 'pg/mL', color: '#10B981', values: OESTRADIOL, max: 330 },
  { id: 'p4', label: 'Progesterone', unit: 'ng/mL', color: '#6366F1', values: PROGESTERONE, max: 20 },
] as const;

interface PhaseCopy {
  name: string;
  range: string;
  tone: string;
  pill: string;
  description: string;
  bullets: readonly string[];
}

function phaseFor(day: number): PhaseCopy {
  if (day <= 5) {
    return {
      name: 'Menstrual',
      range: 'Days 1–5',
      tone: 'text-rose-600 dark:text-rose-300',
      pill: 'border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300',
      description:
        'Prostaglandin-driven spiral-artery constriction sheds the functionalis. FSH is already rising to recruit the next follicular cohort.',
      bullets: ['Endometrium 1–4 mm', 'FSH rising, LH low', 'Prostaglandins → cramps'],
    };
  }
  if (day <= 13) {
    return {
      name: 'Follicular',
      range: 'Days 6–13',
      tone: 'text-emerald-600 dark:text-emerald-300',
      pill: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
      description:
        'FSH recruits antral follicles; granulosa aromatase converts theca-derived androgens into oestradiol, rebuilding the trilaminar endometrium.',
      bullets: ['Trilaminar endometrium', 'Oestradiol climbing', 'Inhibin B brakes FSH'],
    };
  }
  if (day === 14) {
    return {
      name: 'Ovulation',
      range: 'Day 14',
      tone: 'text-amber-600 dark:text-amber-300',
      pill: 'border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300',
      description:
        'Sustained oestradiol flips to positive feedback. The LH surge begins ~36 h before rupture; the peak-to-rupture interval is ~10–12 h.',
      bullets: ['LH peak', 'Mittelschmerz possible', 'Fern-leaf cervical mucus'],
    };
  }
  return {
    name: 'Luteal',
    range: 'Days 15–28',
    tone: 'text-indigo-600 dark:text-indigo-300',
    pill: 'border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
    description:
      'The corpus luteum secretes progesterone, stabilising the secretory endometrium. Without hCG it regresses after ~14 days, and withdrawal triggers the next bleed.',
    bullets: ['Progesterone peaks D21', 'Implantation window D19–21', 'Corpus luteum lifespan ~14 d'],
  };
}

const CHART = { width: 380, height: 186, left: 26, right: 12, top: 12, bottom: 24 } as const;
const PLOT_W = CHART.width - CHART.left - CHART.right;
const PLOT_H = CHART.height - CHART.top - CHART.bottom;
const dayToX = (day: number): number => CHART.left + ((day - 1) / 27) * PLOT_W;
const valueToY = (value: number, max: number): number => CHART.top + (1 - value / max) * PLOT_H;

/**
 * Pane B, tab 2 (UG) — the 28-day hormonal scrubber.
 * Every curve is normalised to its own peak for shape readability; the numeric
 * read-outs underneath carry the actual textbook units.
 */
export function MenstrualCycleSimulator({ module, theme }: MenstrualCycleSimulatorProps): JSX.Element {
  const [day, setDay] = useState(14);
  const [playing, setPlaying] = useState(false);
  const phase = phaseFor(day);

  useEffect(() => {
    if (!playing) return undefined;
    const timer = window.setInterval(() => {
      setDay((previous) => (previous >= 28 ? 1 : previous + 1));
    }, 280);
    return () => window.clearInterval(timer);
  }, [playing]);

  const markerX = useMemo(() => dayToX(day), [day]);
  const markers = CURVES.map((curve) => ({
    ...curve,
    y: valueToY(curve.values[day - 1], curve.max),
    value: curve.values[day - 1],
  }));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow text-[9.5px] tracking-[0.2em]">Interactive physiology</p>
          <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Menstrual Cycle · 28-Day Scrubber
          </h3>
          <p className="mt-1 max-w-md text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            Linked to <span className="font-medium text-slate-700 dark:text-slate-200">{module.title}</span>. Drag the
            scrubber to watch the four hormones, endometrial thickness and phase logic move together.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className={cn(
              'inline-flex h-8 items-center gap-1.5 rounded-full bg-gradient-to-r px-3 text-[11px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90',
              theme.gradient,
            )}
          >
            {playing ? <Pause className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" /> : <Play className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />}
            {playing ? 'Pause' : 'Play cycle'}
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setDay(1);
            }}
            aria-label="Reset to day 1"
            className="grid h-8 w-8 place-items-center rounded-full border border-slate-900/[0.07] bg-white/70 text-slate-500 transition-colors hover:text-slate-800 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400 dark:hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-2">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] font-semibold leading-none tracking-tight tabular-nums text-slate-900 dark:text-white">
            {String(day).padStart(2, '0')}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">Day</span>
        </div>
        <div className="flex justify-end">
          <span className={cn('rounded-full border px-2.5 py-1 text-[10.5px] font-semibold', phase.pill)}>
            {phase.name} · {phase.range}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-900/[0.06] bg-white/55 px-2 pb-1.5 pt-2 dark:border-white/[0.07] dark:bg-white/[0.03]">
        <svg viewBox={`0 0 ${CHART.width} ${CHART.height}`} className="w-full" role="img" aria-label={`Hormone curves at cycle day ${day}, ${phase.name} phase`}>
          {[0.25, 0.5, 0.75, 1].map((fraction) => (
            <line
              key={fraction}
              x1={CHART.left}
              x2={CHART.width - CHART.right}
              y1={CHART.top + fraction * PLOT_H}
              y2={CHART.top + fraction * PLOT_H}
              className="stroke-slate-900/[0.06] dark:stroke-white/[0.07]"
              strokeWidth={1}
            />
          ))}

          {[1, 7, 14, 21, 28].map((tick) => (
            <g key={tick}>
              <line
                x1={dayToX(tick)}
                x2={dayToX(tick)}
                y1={CHART.top + PLOT_H}
                y2={CHART.top + PLOT_H + 3}
                className="stroke-slate-400/60 dark:stroke-white/30"
                strokeWidth={1}
              />
              <text
                x={dayToX(tick)}
                y={CHART.height - 7}
                textAnchor="middle"
                className="fill-slate-400 text-[7.5px] dark:fill-slate-500"
              >
                D{tick}
              </text>
            </g>
          ))}

          {CURVES.map((curve) => (
            <motion.polyline
              key={curve.id}
              points={curve.values.map((value, index) => `${dayToX(index + 1)},${valueToY(value, curve.max)}`).join(' ')}
              fill="none"
              stroke={curve.color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          ))}

          <motion.g animate={{ x: markerX }} transition={{ type: 'spring', stiffness: 380, damping: 34 }}>
            <line
              x1={0}
              x2={0}
              y1={CHART.top - 2}
              y2={CHART.top + PLOT_H}
              className="stroke-slate-500/50 dark:stroke-white/40"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            {markers.map((marker) => (
              <g key={marker.id}>
                <circle cx={0} cy={marker.y} r={4.5} fill={marker.color} opacity={0.18} />
                <circle cx={0} cy={marker.y} r={2.6} fill={marker.color} stroke="white" strokeWidth={1.2} />
              </g>
            ))}
          </motion.g>
        </svg>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-1 pb-1">
          {CURVES.map((curve) => (
            <span key={curve.id} className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-500 dark:text-slate-400">
              <span className="h-1.5 w-3 rounded-full" style={{ background: curve.color }} aria-hidden="true" />
              {curve.label}
            </span>
          ))}
          <span className="text-[8.5px] italic text-slate-400 dark:text-slate-500">each curve normalised to its peak</span>
        </div>
      </div>

      <div>
        <input
          type="range"
          min={1}
          max={28}
          step={1}
          value={day}
          onChange={(event) => {
            setPlaying(false);
            setDay(Number(event.target.value));
          }}
          aria-label="Cycle day scrubber"
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-900/10 accent-emerald-500 dark:bg-white/10"
          style={{ accentColor: theme.chart, color: theme.chart }}
        />
        <div className="mt-1 flex justify-between px-0.5 text-[8.5px] tabular-nums text-slate-400 dark:text-slate-500">
          {[1, 7, 14, 21, 28].map((tick) => (
            <span key={tick}>D{tick}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="rounded-xl border border-slate-900/[0.06] bg-white/60 px-2.5 py-2 dark:border-white/[0.07] dark:bg-white/[0.04]"
          >
            <p className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-[0.08em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: marker.color }} aria-hidden="true" />
              {marker.label}
            </p>
            <p className="mt-0.5 text-[13px] font-semibold tabular-nums text-slate-900 dark:text-white">
              {marker.value}
              <span className="ml-1 text-[8.5px] font-normal text-slate-400">{marker.unit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-900/[0.06] bg-white/55 px-3 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.03]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
            <Activity className="h-3 w-3" strokeWidth={2} aria-hidden="true" /> Endometrium
          </span>
          <span className="font-semibold tabular-nums text-slate-700 dark:text-slate-200">{ENDOMETRIUM[day - 1].toFixed(1)} mm</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-900/[0.06] dark:bg-white/[0.08]">
          <motion.div
            className={cn('h-full rounded-full bg-gradient-to-r', theme.gradient)}
            animate={{ width: `${(ENDOMETRIUM[day - 1] / 14) * 100}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[8.5px] text-slate-400">
          <span>1 mm</span>
          <span>trilaminar proliferative → echogenic secretory</span>
          <span>14 mm</span>
        </div>
      </div>

      <div className={cn('rounded-2xl border px-3.5 py-3', theme.border, theme.tint)}>
        <div className="flex flex-wrap items-center justify-between gap-1">
          <p className={cn('text-[11px] font-bold uppercase tracking-[0.12em]', phase.tone)}>{phase.name} phase</p>
          <span className="text-[9px] font-medium text-slate-400">{phase.range}</span>
        </div>
        <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-200" aria-live="polite">
          {phase.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {phase.bullets.map((bullet) => (
            <span
              key={bullet}
              className="rounded-full border border-slate-900/[0.06] bg-white/70 px-2 py-0.5 text-[9.5px] font-medium text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-slate-300"
            >
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
