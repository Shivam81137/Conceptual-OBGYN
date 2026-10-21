import { useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  Gauge,
  Hospital,
  ScanLine,
  ShieldAlert,
  Sparkles,
  Waves,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface PlacentaSimulatorProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

const SILVER_WITH = [3.3, 11, 40, 61, 67, 67];

type Classification = 'normal' | 'low' | 'praevia';

interface Plan {
  classification: Classification;
  pasRisk: number | null;
  mode: string;
  window: string;
  detail: string;
  steroids: string;
  site: string;
  urgent: boolean;
  bundle: boolean;
  nextScan: string;
}

function classify(edge: number): Classification {
  if (edge <= 0) return 'praevia';
  if (edge < 20) return 'low';
  return 'normal';
}

function planFor(ga: number, edge: number, priorCs: number, bleeding: boolean): Plan {
  const classification = classify(edge);
  const praevia = classification === 'praevia';
  const pasRisk = praevia && priorCs > 0 ? SILVER_WITH[priorCs] : null;
  const bundle = pasRisk !== null && pasRisk >= 11;

  const nextScan = bundle
    ? ga < 26
      ? 'Specialist PAS grayscale + colour Doppler at 26–28 weeks · then TVS at 32 and 36 weeks'
      : ga < 32
        ? 'Specialist PAS scan now · TVS at 32 weeks'
        : ga < 36
          ? 'TVS at 36 weeks to decide mode of delivery'
          : 'Delivery-planning scan now — no further surveillance scan needed'
    : ga < 32
      ? 'TVS at 32 weeks (then 36 weeks if still < 20 mm)'
      : ga < 36
        ? 'TVS at 36 weeks to decide mode of delivery'
        : 'Delivery-planning scan now — no further surveillance scan needed';

  if (bleeding) {
    return {
      classification,
      pasRisk,
      mode: 'Admit · resuscitate · senior obstetric review',
      window: ga < 34 ? 'Steroids now · deliver only for maternal/fetal compromise' : 'Steroids if not given · plan delivery this admission',
      detail:
        'Active bleeding outranks the elective timetable. Secure IV access, cross-match, give tranexamic acid for PPH, monitor mother and fetus, and use tocolysis for 48 hours ONLY if it is needed to complete corticosteroids in a stable woman.',
      steroids: ga < 34 ? 'Give now (< 34+0 · preterm birth threatened)' : 'Single course if not already given',
      site: 'Inpatient · unit with blood products and theatre',
      urgent: true,
      bundle,
      nextScan,
    };
  }

  if (bundle) {
    return {
      classification,
      pasRisk,
      mode: 'Planned caesarean delivery at a PAS centre · hysterectomy or Triple-P if accreta is confirmed',
      window: '35+0 to 36+6 weeks in a tertiary PAS centre',
      detail:
        'Prior caesarean + praevia with a Silver risk ≥ 11% is suspected PAS until proven otherwise. Refer for a specialist grayscale + colour Doppler scan at 26–28 weeks (± MRI for posterior/3c disease), consent for hysterectomy and massive transfusion, and deliver with the NPSA 6-element bundle.',
      steroids: 'Single course at 34+0–35+6 weeks',
      site: 'Tertiary PAS centre · ICU/HDU bed · multidisciplinary team',
      urgent: false,
      bundle,
      nextScan,
    };
  }

  if (praevia || edge <= 10) {
    return {
      classification,
      pasRisk,
      mode: 'Planned elective caesarean section',
      window: ga >= 37 ? '36+0–37+0 weeks · deliver now' : '36+0 to 37+0 weeks (up to 37+6 if completely uncomplicated)',
      detail:
        'A placental edge ≤ 10 mm or covering the os mandates caesarean. Deliver in a unit with blood products available; avoid digital vaginal examination and never induce or perform a stretch-and-sweep.',
      steroids: 'Single course at 34+0–35+6 weeks',
      site: 'Consultant-led theatre · blood products on site',
      urgent: false,
      bundle,
      nextScan,
    };
  }

  if (classification === 'low') {
    return {
      classification,
      pasRisk,
      mode: 'Trial of vaginal delivery after counselling',
      window: '37+0 to 38+6 weeks (or spontaneous labour)',
      detail:
        'An edge of 11–20 mm at 36 weeks allows a trial of labour when the head lies below the placental edge and there is no bleeding (69–90% vaginal birth). Counsel on intrapartum haemorrhage, secure IV access, and prepare for emergency caesarean.',
      steroids: 'Single course at 34+0–35+6 weeks',
      site: 'Obstetric unit with immediate theatre and blood access',
      urgent: false,
      bundle: false,
      nextScan,
    };
  }

  return {
    classification,
    pasRisk,
    mode: 'Routine vaginal delivery',
    window: 'Await spontaneous labour at term',
    detail:
      'An edge ≥ 20 mm is a normal placental location. No praevia precautions are needed, but repeat the TVS at 36 weeks if the 32-week scan was still < 20 mm.',
    steroids: 'Not indicated for placental location alone',
    site: 'Routine midwifery-led or obstetric care',
    urgent: false,
    bundle: false,
    nextScan,
  };
}

const RISK_COLOURS = ['#10B981', '#F59E0B', '#F97316', '#E11D48', '#BE123C', '#9F1239'];

export function PlacentaPraeviaSimulator({ module, theme }: PlacentaSimulatorProps): JSX.Element {
  const [ga, setGa] = useState(30);
  const [edge, setEdge] = useState(8);
  const [priorCs, setPriorCs] = useState(1);
  const [bleeding, setBleeding] = useState(false);

  const plan = useMemo(() => planFor(ga, edge, priorCs, bleeding), [ga, edge, priorCs, bleeding]);
  const classification = plan.classification;

  const classificationCopy: Record<Classification, { label: string; tone: string }> = {
    normal: { label: 'Normal location (≥ 20 mm)', tone: 'text-emerald-700 dark:text-emerald-300' },
    low: { label: 'Low-lying placenta (1–19 mm)', tone: 'text-amber-700 dark:text-amber-300' },
    praevia: { label: 'Placenta praevia (0 mm · covers os)', tone: 'text-rose-700 dark:text-rose-300' },
  };

  const markerPct = Math.min(100, (edge / 40) * 100);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
          <Activity className={cn('h-3 w-3', theme.text)} strokeWidth={2} aria-hidden="true" />
          {module.shortTitle} · TVS distance → Silver risk → delivery plan
        </p>
        <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400">
          RCOG 27a · live
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {/* ------------------------------------------------------------- inputs */}
        <section className="rounded-2xl border border-slate-900/[0.07] bg-white/55 p-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <Gauge className={cn('h-3.5 w-3.5', theme.text)} strokeWidth={2} aria-hidden="true" />
            <h3 className="text-[12.5px] font-semibold tracking-tight text-slate-900 dark:text-white">Clinical inputs</h3>
          </div>

          {/* GA */}
          <div className="mt-3">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="pp-ga" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                Gestational age
              </label>
              <span className={cn('grid h-8 min-w-20 place-items-center rounded-xl border px-2 text-[12px] font-bold tabular-nums', theme.border, theme.tint, theme.text)}>
                {ga}+0 wks
              </span>
            </div>
            <input
              id="pp-ga"
              type="range"
              min={20}
              max={40}
              step={1}
              value={ga}
              onChange={(event) => setGa(Number(event.target.value))}
              aria-label="Gestational age in weeks"
              className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-900/[0.12] accent-indigo-500 dark:bg-white/[0.15]"
            />
            <div className="mt-1 flex justify-between text-[8.5px] font-medium tabular-nums text-slate-400">
              <span>20+0</span>
              <span>30+0</span>
              <span>40+0</span>
            </div>
          </div>

          {/* edge distance */}
          <div className="mt-3.5">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="pp-edge" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                Placental edge → internal os
              </label>
              <span
                className={cn(
                  'grid h-8 min-w-20 place-items-center rounded-xl border px-2 text-[12px] font-bold tabular-nums',
                  classification === 'normal'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                    : classification === 'low'
                      ? 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                      : 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300',
                )}
              >
                {edge === 0 ? '0 mm' : `${edge} mm`}
              </span>
            </div>
            <input
              id="pp-edge"
              type="range"
              min={0}
              max={40}
              step={1}
              value={edge}
              onChange={(event) => setEdge(Number(event.target.value))}
              aria-label="Placental edge distance from the internal os in millimetres"
              className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-900/[0.12] accent-indigo-500 dark:bg-white/[0.15]"
            />
            <div className="relative mt-2 h-2 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 left-0 w-[50%] bg-rose-400/70" />
              <div className="absolute inset-y-0 left-[50%] w-[25%] bg-amber-400/70" />
              <div className="absolute inset-y-0 left-[75%] w-[25%] bg-emerald-400/70" />
              <span
                className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-900 shadow dark:border-slate-900 dark:bg-white"
                style={{ left: `${markerPct}%` }}
                aria-hidden="true"
              />
            </div>
            <div className="mt-1 flex justify-between text-[8px] font-medium text-slate-400">
              <span>0 · praevia</span>
              <span>10</span>
              <span>20 mm</span>
              <span>40</span>
            </div>
          </div>

          {/* prior CS */}
          <div className="mt-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Previous caesarean sections</p>
            <div className="mt-1.5 grid grid-cols-6 gap-1">
              {[0, 1, 2, 3, 4, 5].map((count) => {
                const active = priorCs === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setPriorCs(count)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-lg border py-1.5 text-[10.5px] font-bold tabular-nums transition-colors',
                      active
                        ? cn('border-transparent bg-gradient-to-r text-white shadow-sm', theme.gradient)
                        : 'border-slate-900/[0.08] bg-white/65 text-slate-600 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white',
                    )}
                  >
                    {count === 5 ? '≥5' : count}
                  </button>
                );
              })}
            </div>
          </div>

          {/* bleeding */}
          <button
            type="button"
            onClick={() => setBleeding((value) => !value)}
            aria-pressed={bleeding}
            className={cn(
              'mt-3.5 flex w-full items-center justify-between gap-2 rounded-xl border px-2.5 py-2 text-left transition-colors',
              bleeding
                ? 'border-rose-500/40 bg-rose-500/10 text-rose-800 dark:text-rose-200'
                : 'border-slate-900/[0.08] bg-white/65 text-slate-600 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300',
            )}
          >
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold">
              <Waves className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              Active vaginal bleeding / contractions
            </span>
            <span className={cn('text-[9px] font-bold', bleeding ? 'text-rose-600 dark:text-rose-300' : 'text-slate-400')}>
              {bleeding ? 'YES' : 'NO'}
            </span>
          </button>
        </section>

        {/* -------------------------------------------------------------- output */}
        <section className="rounded-2xl border border-slate-900/[0.07] bg-white/55 p-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ScanLine className={cn('h-3.5 w-3.5', theme.text)} strokeWidth={2} aria-hidden="true" />
              <h3 className="text-[12.5px] font-semibold tracking-tight text-slate-900 dark:text-white">Live plan</h3>
            </div>
            <span
              className={cn(
                'rounded-full border px-2 py-0.5 text-[9px] font-bold',
                plan.urgent
                  ? 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
              )}
            >
              {plan.urgent ? 'Urgent review' : 'Planned pathway'}
            </span>
          </div>

          <p className={cn('mt-2 text-[12px] font-bold', classificationCopy[classification].tone)}>
            {classificationCopy[classification].label}
          </p>

          <div className="mt-2 rounded-xl border border-slate-900/[0.07] bg-white/70 px-3 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.04]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400">Mode of delivery</p>
            <p className="mt-0.5 text-[12px] font-semibold leading-snug text-slate-900 dark:text-white">{plan.mode}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
              <CalendarClock className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
              {plan.window}
            </p>
          </div>

          <p className="mt-2 text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-300">{plan.detail}</p>

          <dl className="mt-2.5 space-y-1.5">
            <div className="flex items-start gap-1.5 text-[10px]">
              <Sparkles className="mt-0.5 h-2.5 w-2.5 shrink-0 text-amber-500" strokeWidth={2} aria-hidden="true" />
              <dt className="sr-only">Corticosteroids</dt>
              <dd className="text-slate-600 dark:text-slate-300">{plan.steroids}</dd>
            </div>
            <div className="flex items-start gap-1.5 text-[10px]">
              <Hospital className="mt-0.5 h-2.5 w-2.5 shrink-0 text-indigo-500" strokeWidth={2} aria-hidden="true" />
              <dt className="sr-only">Delivery site</dt>
              <dd className="text-slate-600 dark:text-slate-300">{plan.site}</dd>
            </div>
            <div className="flex items-start gap-1.5 text-[10px]">
              <ScanLine className="mt-0.5 h-2.5 w-2.5 shrink-0 text-teal-500" strokeWidth={2} aria-hidden="true" />
              <dt className="sr-only">Next scan</dt>
              <dd className="text-slate-600 dark:text-slate-300">{plan.nextScan}</dd>
            </div>
          </dl>

          {plan.bundle ? (
            <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/25 bg-indigo-500/[0.08] px-2 py-1 text-[9.5px] font-semibold text-indigo-700 dark:text-indigo-200">
              <ShieldAlert className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              NPSA 6-element bundle · consent for hysterectomy · cell salvage
            </p>
          ) : null}
        </section>
      </div>

      {/* ---------------------------------------------------------- silver panel */}
      <section className="rounded-2xl border border-slate-900/[0.07] bg-white/55 p-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className={cn('h-3.5 w-3.5', theme.text)} strokeWidth={2} aria-hidden="true" />
            <h3 className="text-[12.5px] font-semibold tracking-tight text-slate-900 dark:text-white">
              Silver escalation curve · PAS risk with praevia
            </h3>
          </div>
          <span className="text-[9px] font-medium text-slate-400">
            {classification === 'praevia'
              ? `${priorCs === 5 ? '≥ 5' : priorCs} prior CS → ${SILVER_WITH[priorCs]}%`
              : 'No praevia → curve does not apply'}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-6 items-end gap-1.5">
          {SILVER_WITH.map((value, index) => {
            const active = classification === 'praevia' && priorCs === index;
            const height = Math.max(8, (value / 67) * 74);
            return (
              <div key={value} className="flex flex-col items-center gap-1">
                <span className={cn('text-[9px] font-bold tabular-nums', active ? 'text-rose-600 dark:text-rose-300' : 'text-slate-400')}>
                  {value}%
                </span>
                <div className="flex h-[76px] w-full items-end">
                  <div
                    className={cn('w-full rounded-t-md transition-all duration-300', active ? 'opacity-100' : 'opacity-45')}
                    style={{ height, backgroundColor: active ? RISK_COLOURS[Math.min(index, 5)] : '#FB7185' }}
                  />
                </div>
                <span className={cn('text-[9px] font-semibold', active ? 'text-slate-900 dark:text-white' : 'text-slate-400')}>
                  {index === 5 ? '≥ 5' : index}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-[9px] text-slate-400">Prior caesarean sections → risk of PAS when the placenta covers the os (Silver et al.).</p>

        {classification === 'praevia' && priorCs > 0 ? (
          <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-medium text-rose-700 dark:text-rose-300">
            <AlertTriangle className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            {priorCs >= 2
              ? 'High probability of PAS — refer now for specialist grayscale + colour Doppler imaging.'
              : 'Suspected PAS — specialist scan and consultant counselling are mandatory.'}
          </p>
        ) : (
          <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            {classification === 'praevia'
              ? 'No prior caesarean: PAS risk is low but not zero — image the placental bed.'
              : 'No praevia: the Silver escalation curve does not apply.'}
          </p>
        )}
      </section>
    </div>
  );
}
