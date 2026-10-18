import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Gauge, RotateCcw, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface PartographSimulatorProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

type Consistency = 'firm' | 'medium' | 'soft';
type Position = 'posterior' | 'mid' | 'anterior';

const CONSISTENCY_SCORE: Record<Consistency, number> = { firm: 0, medium: 1, soft: 2 };
const POSITION_SCORE: Record<Position, number> = { posterior: 0, mid: 1, anterior: 2 };

const bishopDilation = (cm: number): number => (cm < 1 ? 0 : cm <= 2 ? 1 : cm <= 4 ? 2 : 3);
const bishopEffacement = (percent: number): number => (percent <= 30 ? 0 : percent <= 50 ? 1 : percent <= 70 ? 2 : 3);
const bishopStation = (station: number): number => (station <= -3 ? 0 : station === -2 ? 1 : station <= 0 ? 2 : 3);

const CHART = { width: 380, height: 208, left: 30, right: 14, top: 12, bottom: 28 } as const;
const PLOT_W = CHART.width - CHART.left - CHART.right;
const PLOT_H = CHART.height - CHART.top - CHART.bottom;
const xFor = (hours: number): number => CHART.left + (hours / 12) * PLOT_W;
const yFor = (cm: number): number => CHART.top + (1 - cm / 10) * PLOT_H;

interface ZoneDecision {
  title: string;
  body: string;
  className: string;
  dot: string;
}

function decisionFor(dilation: number, hours: number): ZoneDecision {
  if (dilation < 4) {
    return {
      title: 'Latent phase — do not plot against the alert line',
      body: 'The partograph begins at 4 cm. Plot dilatation, descent, contractions and fetal heart rate, and watch for the transition to active labour.',
      className: 'border-slate-900/[0.06] bg-white/55 dark:border-white/[0.07] dark:bg-white/[0.03]',
      dot: 'bg-slate-400',
    };
  }

  const alertHour = dilation - 4;
  const actionHour = alertHour + 4;

  if (hours <= alertHour) {
    return {
      title: 'Progressing on or ahead of the alert line',
      body: 'Continue supportive care: hydration, bladder emptying, upright positioning and continuous fetal monitoring. Re-plot in 30–60 minutes in the active phase.',
      className: 'border-emerald-500/20 bg-emerald-500/[0.07] dark:border-emerald-400/20 dark:bg-emerald-400/[0.06]',
      dot: 'bg-emerald-500',
    };
  }

  if (hours <= actionHour) {
    return {
      title: 'Alert line crossed — stop and reassess',
      body: 'Exclude obstructed labour before stimulating: assess caput, moulding, station, contractions and fetal status. Consider transfer if the action line is approaching.',
      className: 'border-amber-500/25 bg-amber-500/[0.08] dark:border-amber-400/25 dark:bg-amber-400/[0.07]',
      dot: 'bg-amber-500',
    };
  }

  return {
    title: 'Action line crossed — decision time',
    body: 'Obstructed labour is the working diagnosis until excluded. Augment only if there is no cephalopelvic disproportion or malposition; otherwise proceed to caesarean delivery.',
    className: 'border-rose-500/25 bg-rose-500/[0.08] dark:border-rose-400/25 dark:bg-rose-400/[0.07]',
    dot: 'bg-rose-500',
  };
}

function SliderRow({
  label,
  value,
  display,
  min,
  max,
  step = 1,
  onChange,
  theme,
  hint,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  theme: StudioTrackTheme;
  hint?: string;
}): JSX.Element {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-[10.5px] font-medium text-slate-600 dark:text-slate-300">
        {label}
        <span className="font-semibold tabular-nums text-slate-900 dark:text-white">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-1.5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-900/10 dark:bg-white/10"
        style={{ accentColor: theme.chart, color: theme.chart }}
      />
      {hint ? <span className="mt-0.5 block text-[8.5px] text-slate-400">{hint}</span> : null}
    </label>
  );
}

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
  theme,
}: {
  label: string;
  value: T;
  options: readonly { id: T; label: string }[];
  onChange: (value: T) => void;
  theme: StudioTrackTheme;
}): JSX.Element {
  return (
    <div>
      <p className="text-[10.5px] font-medium text-slate-600 dark:text-slate-300">{label}</p>
      <div className="mt-1 flex rounded-xl bg-slate-900/[0.05] p-0.5 dark:bg-white/[0.06]">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={value === option.id}
            className={cn(
              'relative flex-1 rounded-[10px] px-1 py-1 text-[9.5px] font-medium capitalize transition-colors',
              value === option.id ? 'text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white',
            )}
          >
            {value === option.id ? (
              <motion.span
                layoutId={`bishop-${label}`}
                className={cn('absolute inset-0 rounded-[10px] bg-gradient-to-r shadow-sm', theme.gradient)}
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative z-10">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Pane B, tab 2 (NEET PG) — partograph + Bishop score sandbox.
 * Plot dilatation against hours since 4 cm, then read the alert/action-line
 * logic and the Bishop-based induction decision in real time.
 */
export function PartographSimulator({ module, theme }: PartographSimulatorProps): JSX.Element {
  const [dilation, setDilation] = useState(6);
  const [hours, setHours] = useState(4);
  const [station, setStation] = useState(-1);
  const [effacement, setEffacement] = useState(60);
  const [consistency, setConsistency] = useState<Consistency>('medium');
  const [position, setPosition] = useState<Position>('mid');
  const [showAlert, setShowAlert] = useState(true);
  const [showAction, setShowAction] = useState(true);

  const bishop = useMemo(() => {
    const components = [
      { label: 'Dilatation', score: bishopDilation(dilation), max: 3 },
      { label: 'Effacement', score: bishopEffacement(effacement), max: 3 },
      { label: 'Station', score: bishopStation(station), max: 3 },
      { label: 'Consistency', score: CONSISTENCY_SCORE[consistency], max: 2 },
      { label: 'Position', score: POSITION_SCORE[position], max: 2 },
    ];
    const total = components.reduce((sum, component) => sum + component.score, 0);
    const band =
      total >= 8
        ? {
            label: 'Favourable',
            tone: 'text-emerald-700 dark:text-emerald-300',
            bar: 'bg-emerald-500',
            action: 'Bishop ≥8: amniotomy + oxytocin is reasonable if induction is indicated.',
          }
        : total >= 6
          ? {
              label: 'Intermediate',
              tone: 'text-amber-700 dark:text-amber-300',
              bar: 'bg-amber-500',
              action: 'Bishop 6–7: individualise. Consider cervical ripening before oxytocin.',
            }
          : {
              label: 'Unfavourable',
              tone: 'text-rose-700 dark:text-rose-300',
              bar: 'bg-rose-500',
              action: 'Bishop ≤5: ripen the cervix first (misoprostol, dinoprostone or balloon) — avoid immediate oxytocin.',
            };
    return { components, total, band };
  }, [consistency, dilation, effacement, position, station]);

  const decision = decisionFor(dilation, hours);
  const pointX = xFor(hours);
  const pointY = yFor(dilation);

  const reset = (): void => {
    setDilation(6);
    setHours(4);
    setStation(-1);
    setEffacement(60);
    setConsistency('medium');
    setPosition('mid');
    setShowAlert(true);
    setShowAction(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow text-[9.5px] tracking-[0.2em]">Interactive obstetrics</p>
          <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Partograph & Bishop Score Simulator
          </h3>
          <p className="mt-1 max-w-md text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            Linked to <span className="font-medium text-slate-700 dark:text-slate-200">{module.title}</span>. Move the
            labour plot and cervical findings to watch the alert/action logic and induction decision change.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          aria-label="Reset simulator"
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-900/[0.07] bg-white/70 text-slate-500 transition-colors hover:text-slate-800 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400 dark:hover:text-white"
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />
        </button>
      </div>

      <div className="rounded-2xl border border-slate-900/[0.06] bg-white/55 px-2 pb-1.5 pt-2 dark:border-white/[0.07] dark:bg-white/[0.03]">
        <svg viewBox={`0 0 ${CHART.width} ${CHART.height}`} className="w-full" role="img" aria-label={`Partograph at ${dilation} cm and ${hours} hours since 4 cm`}>
          {[0, 2, 4, 6, 8, 10].map((cm) => (
            <g key={cm}>
              <line
                x1={CHART.left}
                x2={CHART.width - CHART.right}
                y1={yFor(cm)}
                y2={yFor(cm)}
                className="stroke-slate-900/[0.06] dark:stroke-white/[0.07]"
                strokeWidth={1}
              />
              <text x={CHART.left - 5} y={yFor(cm) + 2.5} textAnchor="end" className="fill-slate-400 text-[7px] dark:fill-slate-500">
                {cm}
              </text>
            </g>
          ))}

          {[0, 2, 4, 6, 8, 10, 12].map((hour) => (
            <g key={hour}>
              <line
                x1={xFor(hour)}
                x2={xFor(hour)}
                y1={CHART.top}
                y2={CHART.top + PLOT_H}
                className="stroke-slate-900/[0.035] dark:stroke-white/[0.04]"
                strokeWidth={1}
              />
              <text
                x={xFor(hour)}
                y={CHART.height - 9}
                textAnchor="middle"
                className="fill-slate-400 text-[7px] dark:fill-slate-500"
              >
                {hour}h
              </text>
            </g>
          ))}

          <text
            x={CHART.left - 20}
            y={CHART.top + PLOT_H / 2}
            transform={`rotate(-90 ${CHART.left - 20} ${CHART.top + PLOT_H / 2})`}
            textAnchor="middle"
            className="fill-slate-400 text-[7.5px] dark:fill-slate-500"
          >
            Dilatation (cm)
          </text>
          <text x={CHART.width / 2} y={CHART.height - 1} textAnchor="middle" className="fill-slate-400 text-[7.5px] dark:fill-slate-500">
            Hours since 4 cm
          </text>

          {showAlert ? (
            <>
              <motion.line
                x1={xFor(0)}
                y1={yFor(4)}
                x2={xFor(6)}
                y2={yFor(10)}
                stroke="#F59E0B"
                strokeWidth={1.8}
                strokeDasharray="5 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <text x={xFor(4.8)} y={yFor(8.9)} className="fill-amber-600 text-[7px] font-semibold dark:fill-amber-400">
                Alert
              </text>
            </>
          ) : null}

          {showAction ? (
            <>
              <motion.line
                x1={xFor(4)}
                y1={yFor(4)}
                x2={xFor(10)}
                y2={yFor(10)}
                stroke="#F43F5E"
                strokeWidth={1.8}
                strokeDasharray="5 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              />
              <text x={xFor(8.7)} y={yFor(8.6)} className="fill-rose-600 text-[7px] font-semibold dark:fill-rose-400">
                Action
              </text>
            </>
          ) : null}

          <motion.g animate={{ x: pointX, y: pointY }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}>
            <circle cx={0} cy={0} r={11} fill={theme.chart} opacity={0.12} />
            <circle cx={0} cy={0} r={5} fill={theme.chart} stroke="white" strokeWidth={1.5} />
            <text x={9} y={-7} className="fill-slate-600 text-[7.5px] font-semibold dark:fill-slate-300">
              S{station > 0 ? `+${station}` : station}
            </text>
          </motion.g>
        </svg>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pb-1 text-[8.5px] text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-0.5 w-3 bg-amber-500" aria-hidden="true" /> Alert line · 1 cm/h from 4 cm
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-0.5 w-3 bg-rose-500" aria-hidden="true" /> Action line · +4 h
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-2xl border border-slate-900/[0.06] bg-white/50 px-3 py-3 dark:border-white/[0.07] dark:bg-white/[0.03]">
        <SliderRow
          label="Cervical dilatation"
          value={dilation}
          display={`${dilation} cm`}
          min={0}
          max={10}
          onChange={setDilation}
          theme={theme}
          hint="Plot only after 4 cm"
        />
        <SliderRow
          label="Hours since 4 cm"
          value={hours}
          display={`${hours} h`}
          min={0}
          max={12}
          onChange={setHours}
          theme={theme}
          hint="Alert at dilatation ≥4 cm"
        />
        <SliderRow
          label="Station"
          value={station}
          display={station > 0 ? `+${station}` : String(station)}
          min={-3}
          max={3}
          onChange={setStation}
          theme={theme}
          hint="0 = ischial spines"
        />
        <SliderRow
          label="Effacement"
          value={effacement}
          display={`${effacement}%`}
          min={0}
          max={100}
          step={10}
          onChange={setEffacement}
          theme={theme}
          hint="Bishop component"
        />
        <Segmented
          label="Consistency"
          value={consistency}
          options={[
            { id: 'firm', label: 'Firm' },
            { id: 'medium', label: 'Medium' },
            { id: 'soft', label: 'Soft' },
          ]}
          onChange={setConsistency}
          theme={theme}
        />
        <Segmented
          label="Position"
          value={position}
          options={[
            { id: 'posterior', label: 'Posterior' },
            { id: 'mid', label: 'Mid' },
            { id: 'anterior', label: 'Anterior' },
          ]}
          onChange={setPosition}
          theme={theme}
        />
        <div className="col-span-2 flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-slate-400">Plot lines</span>
          <button
            type="button"
            role="switch"
            aria-checked={showAlert}
            onClick={() => setShowAlert((value) => !value)}
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold transition-colors',
              showAlert
                ? 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                : 'border-slate-900/[0.08] bg-white/50 text-slate-400 dark:border-white/[0.08] dark:bg-white/[0.04]',
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full', showAlert ? 'bg-amber-500' : 'bg-slate-300')} aria-hidden="true" />
            Alert line
          </button>
          <button
            type="button"
            role="switch"
            aria-checked={showAction}
            onClick={() => setShowAction((value) => !value)}
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold transition-colors',
              showAction
                ? 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                : 'border-slate-900/[0.08] bg-white/50 text-slate-400 dark:border-white/[0.08] dark:bg-white/[0.04]',
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full', showAction ? 'bg-rose-500' : 'bg-slate-300')} aria-hidden="true" />
            Action line
          </button>
        </div>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-900/[0.06] bg-white/55 px-3 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.03]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="inline-flex items-center gap-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                <Gauge className="h-3 w-3" strokeWidth={2} aria-hidden="true" /> Bishop score
              </p>
              <p className={cn('mt-0.5 text-[11px] font-semibold', bishop.band.tone)}>{bishop.band.label} cervix</p>
            </div>
            <p className="text-[24px] font-semibold leading-none tabular-nums text-slate-900 dark:text-white">
              {bishop.total}
              <span className="text-[10px] font-normal text-slate-400">/13</span>
            </p>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-900/[0.07] dark:bg-white/[0.08]">
            <motion.div
              className={cn('h-full rounded-full', bishop.band.bar)}
              animate={{ width: `${(bishop.total / 13) * 100}%` }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            />
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1">
            {bishop.components.map((component) => (
              <div key={component.label} className="text-center">
                <p className="truncate text-[7.5px] text-slate-400">{component.label}</p>
                <p className="text-[10px] font-semibold tabular-nums text-slate-700 dark:text-slate-200">
                  {component.score}
                  <span className="text-[7.5px] font-normal text-slate-400">/{component.max}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[9.5px] leading-relaxed text-slate-500 dark:text-slate-400">{bishop.band.action}</p>
        </div>

        <div className={cn('rounded-2xl border px-3 py-2.5', decision.className)}>
          <p className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-slate-800 dark:text-white">
            <span className={cn('h-1.5 w-1.5 shrink-0 rounded-full', decision.dot)} aria-hidden="true" />
            {decision.title}
          </p>
          <p className="mt-1 text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-300">{decision.body}</p>
          <div className="mt-2 flex items-center gap-1 text-[8.5px] font-medium text-slate-400">
            <Stethoscope className="h-2.5 w-2.5" aria-hidden="true" />
            {dilation < 4 ? 'Latent phase · plot from 4 cm' : `Alert at ${dilation - 4}h · action at ${dilation}h`}
          </div>
        </div>
      </div>

      <div className={cn('flex items-start gap-2 rounded-2xl border px-3 py-2', theme.border, theme.tint)}>
        <Activity className={cn('mt-0.5 h-3 w-3 shrink-0', theme.text)} strokeWidth={2} aria-hidden="true" />
        <p className="text-[10px] leading-relaxed text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-slate-800 dark:text-slate-100">Exam link:</span> the action line is four
          hours to the right of the alert line. Crossing it is a decision, not an observation — augment if there is no
          obstruction, otherwise caesarean.
        </p>
      </div>
    </div>
  );
}
