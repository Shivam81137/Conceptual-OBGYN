import { useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Baby,
  CalendarClock,
  CheckCircle2,
  Gauge,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  Waves,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface FgrSimulatorProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

type Biometry = 'p3to9' | 'lt3';
type Umbilical = 'normal' | 'elevated' | 'aedf' | 'redf';
type Cerebral = 'normal' | 'brain' | 'dv';
type Stage = 0 | 1 | 2 | 3 | 4;

const BIOMETRY: readonly { id: Biometry; label: string; hint: string }[] = [
  { id: 'p3to9', label: 'EFW/AC 3rd–9th centile', hint: 'SGA range' },
  { id: 'lt3', label: 'EFW/AC < 3rd centile', hint: 'Severe · standalone FGR' },
];

const UMBILICAL: readonly { id: Umbilical; label: string; hint: string }[] = [
  { id: 'normal', label: 'Normal UA PI', hint: '< 95th percentile' },
  { id: 'elevated', label: 'Elevated UA PI', hint: '> 95th · positive EDF' },
  { id: 'aedf', label: 'AEDF', hint: 'Absent end-diastolic flow' },
  { id: 'redf', label: 'REDF', hint: 'Reversed end-diastolic flow' },
];

const CEREBRAL: readonly { id: Cerebral; label: string; hint: string }[] = [
  { id: 'normal', label: 'Normal MCA & DV', hint: 'MCA/CPR ≥ 5th · positive a-wave' },
  { id: 'brain', label: 'Brain-sparing', hint: 'MCA PI < 5th / CPR < 5th' },
  { id: 'dv', label: 'Abnormal DV / cCTG', hint: 'Absent/reversed a-wave or pathological cCTG' },
];

const STAGES: Record<
  Stage,
  { title: string; short: string; tone: string; dot: string; surveillance: string; surveillanceTone: string }
> = {
  0: {
    title: 'Constitutional SGA · no placental insufficiency',
    short: 'SGA',
    tone: 'border-emerald-500/30 bg-emerald-500/[0.10] text-emerald-800 dark:text-emerald-200',
    dot: 'bg-emerald-500',
    surveillance: 'Biometry + UA/MCA Doppler every 2 weeks · normal growth velocity, Dopplers and PlGF',
    surveillanceTone: 'border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-700 dark:text-emerald-200',
  },
  1: {
    title: 'Stage I · Severe smallness or early redistribution',
    short: 'Stage I',
    tone: 'border-amber-500/30 bg-amber-500/[0.12] text-amber-800 dark:text-amber-200',
    dot: 'bg-amber-500',
    surveillance: 'Doppler + NST/BPP 1–2 times per week · twice-weekly UA/MCA/CPR assessment',
    surveillanceTone: 'border-amber-500/25 bg-amber-500/[0.09] text-amber-700 dark:text-amber-200',
  },
  2: {
    title: 'Stage II · Absent end-diastolic flow (AEDF)',
    short: 'Stage II',
    tone: 'border-orange-500/30 bg-orange-500/[0.12] text-orange-800 dark:text-orange-200',
    dot: 'bg-orange-500',
    surveillance: 'UA + DV Doppler and cCTG/BPP 2–3 times per week (every 48–72 h)',
    surveillanceTone: 'border-orange-500/25 bg-orange-500/[0.09] text-orange-700 dark:text-orange-200',
  },
  3: {
    title: 'Stage III · Reversed end-diastolic flow (REDF)',
    short: 'Stage III',
    tone: 'border-rose-500/30 bg-rose-500/[0.12] text-rose-800 dark:text-rose-200',
    dot: 'bg-rose-500',
    surveillance: 'Inpatient daily (every 24–48 h) DV Doppler + cCTG/BPP · steroids + MgSO4 readiness',
    surveillanceTone: 'border-rose-500/25 bg-rose-500/[0.09] text-rose-700 dark:text-rose-200',
  },
  4: {
    title: 'Stage IV · Pre-terminal decompensation',
    short: 'Stage IV',
    tone: 'border-fuchsia-500/30 bg-fuchsia-500/[0.13] text-fuchsia-800 dark:text-fuchsia-200',
    dot: 'bg-fuchsia-500',
    surveillance: 'Immediate delivery · continuous monitoring + tertiary MFM / neonatology',
    surveillanceTone: 'border-fuchsia-500/25 bg-fuchsia-500/[0.10] text-fuchsia-700 dark:text-fuchsia-200',
  },
};

interface Plan {
  stage: Stage;
  deliveryWindow: string;
  deliveryDetail: string;
  mode: string;
  urgent: boolean;
  expectant: boolean;
  phenotype: string;
}

function formatGa(value: number): string {
  return `${value}+0 weeks`;
}

function stageFor(biometry: Biometry, ua: Umbilical, cerebral: Cerebral): Stage {
  if (cerebral === 'dv') return 4;
  if (ua === 'redf') return 3;
  if (ua === 'aedf') return 2;
  if (ua === 'elevated' || cerebral === 'brain' || biometry === 'lt3') return 1;
  return 0;
}

function planFor(ga: number, biometry: Biometry, ua: Umbilical, cerebral: Cerebral): Plan {
  const stage = stageFor(biometry, ua, cerebral);

  if (stage === 4) {
    const periviable = ga < 26;
    return {
      stage,
      deliveryWindow: periviable ? 'Immediate · individualise at 24+0–25+6' : 'Immediate delivery (≥ 26+0)',
      deliveryDetail: periviable
        ? 'Shared decision-making with neonatology at 24+0–25+6 weeks (EFW ≥ 500 g); deliver immediately if active resuscitation is planned.'
        : 'Absent/reversed DV a-wave or pathological cCTG precedes demise by 48–72 hours. Deliver immediately after the steroid window; do not wait for a further fall in STV.',
      mode: 'Emergency / urgent caesarean section',
      urgent: true,
      expectant: false,
      phenotype: 'Pre-terminal FGR · DV/cCTG decompensation',
    };
  }

  if (stage === 3) {
    if (ga < 30) {
      return {
        stage,
        deliveryWindow: 'Expectant inpatient → deliver at 30+0–32+0 wks',
        deliveryDetail: 'Admit to a tertiary centre, give antenatal corticosteroids now and daily DV/cCTG surveillance. Deliver at 30+0–32+0 weeks if the DV a-wave remains positive and STV is reassuring; deliver immediately for DV abnormality, repetitive decelerations or cCTG decompensation.',
        mode: 'Planned elective caesarean section',
        urgent: false,
        expectant: true,
        phenotype: 'Early-onset FGR · UA-REDF',
      };
    }
    if (ga > 32) {
      return {
        stage,
        deliveryWindow: 'Deliver now · beyond the 30+0–32+0 window',
        deliveryDetail: 'UA-REDF with a preserved DV is delivered at 30+0–32+0 weeks. At this gestation the fetus is already beyond the recommended window — proceed to delivery after steroids and IV MgSO4.',
        mode: 'Planned elective caesarean section',
        urgent: true,
        expectant: false,
        phenotype: 'Early-onset FGR · UA-REDF',
      };
    }
    return {
      stage,
      deliveryWindow: '30+0–32+0 weeks · deliver now',
      deliveryDetail: 'UA-REDF with a preserved DV and reassuring cCTG/BPP: deliver after the 24–48 h corticosteroid window with IV MgSO4 neuroprotection if < 32+0 weeks.',
      mode: 'Planned elective caesarean section',
      urgent: true,
      expectant: false,
      phenotype: 'Early-onset FGR · UA-REDF',
    };
  }

  if (stage === 2) {
    if (ga < 33) {
      return {
        stage,
        deliveryWindow: 'Expectant inpatient → deliver at 33+0–34+0 wks',
        deliveryDetail: 'UA-AEDF with a normal DV a-wave and reassuring cCTG/BPP: admit, give corticosteroids, and continue 48–72 h Doppler/cCTG surveillance until 33+0–34+0 weeks. Deliver earlier for DV abnormality, BPP ≤ 4, STV below threshold or severe preeclampsia.',
        mode: 'Planned elective caesarean section',
        urgent: false,
        expectant: true,
        phenotype: 'Early-onset FGR · UA-AEDF',
      };
    }
    return {
      stage,
      deliveryWindow: ga > 34 ? 'Deliver now · beyond the 33+0–34+0 window' : '33+0–34+0 weeks · deliver now',
      deliveryDetail: 'Persistent UA-AEDF at 33+0–34+0 weeks is delivered by planned caesarean section. The growth-restricted fetus rarely tolerates uterine contractions.',
      mode: 'Planned elective caesarean section',
      urgent: true,
      expectant: false,
      phenotype: 'Early-onset FGR · UA-AEDF',
    };
  }

  // Stage I — severe smallness or early redistribution.
  if (ua === 'normal' && cerebral === 'normal' && biometry === 'lt3') {
    if (ga < 37) {
      return {
        stage,
        deliveryWindow: 'Expectant → deliver at 37+0 wks (36+0–37+6)',
        deliveryDetail: 'Isolated EFW/AC < 3rd percentile with normal Dopplers: twice-weekly surveillance and delivery at 37+0 weeks (36+0–37+6). Use a Foley balloon for mechanical ripening if the cervix is unfavourable.',
        mode: 'Induction of labour · continuous EFM',
        urgent: false,
        expectant: true,
        phenotype: 'Isolated EFW/AC < 3rd · normal Dopplers',
      };
    }
    return {
      stage,
      deliveryWindow: ga > 37 ? 'Deliver now · beyond the 37+0 (36+0–37+6) window' : '37+0 weeks · deliver now',
      deliveryDetail: 'Isolated EFW/AC < 3rd percentile with normal Dopplers is delivered at 37+0 weeks. Mechanical ripening with a Foley balloon is preferred over prostaglandins, with continuous EFM.',
      mode: 'Induction of labour · continuous EFM',
      urgent: true,
      expectant: false,
      phenotype: 'Isolated EFW/AC < 3rd · normal Dopplers',
    };
  }

  if (stage === 1) {
    if (ga < 36) {
      return {
        stage,
        deliveryWindow: 'Expectant → deliver at 36+0–37+0 wks',
        deliveryDetail: 'FGR with UA-PI > 95th (positive end-diastolic flow) or brain-sparing (MCA-PI < 5th / CPR < 5th): weekly or twice-weekly Doppler + NST/BPP, then deliver at 36+0–37+0 weeks. Use mechanical ripening and continuous EFM; keep a low threshold for caesarean.',
        mode: 'Careful IOL (Foley) or CS · continuous EFM',
        urgent: false,
        expectant: true,
        phenotype: 'FGR · elevated UA-PI / brain-sparing',
      };
    }
    return {
      stage,
      deliveryWindow: ga > 37 ? 'Deliver now · beyond the 36+0–37+0 window' : '36+0–37+0 weeks · deliver now',
      deliveryDetail: 'FGR with UA-PI > 95th (PEDF) or brain-sparing is delivered at 36+0–37+0 weeks. Mechanical Foley ripening and continuous EFM are preferred; proceed to caesarean for obstetric indication.',
      mode: 'Careful IOL (Foley) or CS · continuous EFM',
      urgent: true,
      expectant: false,
      phenotype: 'FGR · elevated UA-PI / brain-sparing',
    };
  }

  // Stage 0 — constitutional SGA with normal growth, Dopplers and PlGF.
  if (ga < 38) {
    return {
      stage,
      deliveryWindow: 'Expectant → deliver at 38+0–39+0 wks',
      deliveryDetail: 'Constitutional SGA (3rd–9th centile) with normal growth velocity, normal UA/MCA/CPR and normal PlGF: biometry every 2 weeks and Doppler every 1–2 weeks. Do not exceed 39+0–40+0 weeks.',
      mode: 'Induction of labour · continuous EFM',
      urgent: false,
      expectant: true,
      phenotype: 'Constitutional SGA · normal Dopplers/PlGF',
    };
  }

  return {
    stage,
    deliveryWindow: ga > 39 ? 'Deliver now · beyond the 38+0–39+0 window' : '38+0–39+0 weeks · deliver now',
    deliveryDetail: 'Constitutional SGA with normal Dopplers is delivered at 38+0–39+0 weeks. Do not exceed 39+0–40+0 weeks; continuous intrapartum EFM is mandatory.',
    mode: 'Induction of labour · continuous EFM',
    urgent: true,
    expectant: false,
    phenotype: 'Constitutional SGA · normal Dopplers/PlGF',
  };
}

/** Builds one cardiac cycle of an umbilical-artery waveform. */
function umbilicalCycle(x: number, diastolic: number): string {
  return `C ${x + 2} 58 ${x + 4} 24 ${x + 10} 18 C ${x + 16} 12 ${x + 20} ${diastolic} ${x + 26} ${diastolic} C ${x + 38} ${diastolic} ${x + 48} 58 ${x + 64} 58`;
}

function umbilicalPath(kind: Umbilical): string {
  const diastolic = kind === 'normal' ? 42 : kind === 'elevated' ? 50 : kind === 'aedf' ? 58 : 74;
  let path = 'M 0 58';
  for (let cycle = 0; cycle < 7; cycle += 1) {
    path += ` ${umbilicalCycle(cycle * 64, diastolic)}`;
  }
  return path;
}

function ductusPath(kind: 'normal' | 'abnormal'): string {
  const aWave = kind === 'normal' ? 48 : 72;
  let path = 'M 0 58';
  for (let cycle = 0; cycle < 7; cycle += 1) {
    const x = cycle * 64;
    path += ` C ${x + 2} 58 ${x + 4} 26 ${x + 10} 20 C ${x + 16} 14 ${x + 18} 32 ${x + 24} 34 C ${x + 30} 36 ${x + 32} ${aWave} ${x + 38} ${aWave} C ${x + 46} ${aWave} ${x + 52} 58 ${x + 64} 58`;
  }
  return path;
}

export function FgrSimulator({ module, theme }: FgrSimulatorProps): JSX.Element {
  const [ga, setGa] = useState(31);
  const [biometry, setBiometry] = useState<Biometry>('lt3');
  const [umbilical, setUmbilical] = useState<Umbilical>('elevated');
  const [cerebral, setCerebral] = useState<Cerebral>('brain');

  const plan = useMemo(() => planFor(ga, biometry, umbilical, cerebral), [ga, biometry, umbilical, cerebral]);
  const stage = STAGES[plan.stage];
  const dvKind: 'normal' | 'abnormal' = cerebral === 'dv' ? 'abnormal' : 'normal';
  const waveformTone =
    plan.stage === 4 ? '#E879F9' : plan.stage === 3 ? '#FB7185' : plan.stage === 2 ? '#FB923C' : plan.stage === 1 ? '#F59E0B' : '#10B981';

  const steroids = ga < 35;
  const magnesium = ga < 32;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
          <Activity className={cn('h-3 w-3', theme.text)} strokeWidth={2} aria-hidden="true" />
          {module.shortTitle} · Delphi classifier + multi-vessel Doppler engine
        </p>
        <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400">
          SGA + Stage I–IV · live
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {/* ------------------------------------------------------------ inputs */}
        <section className="rounded-2xl border border-slate-900/[0.07] bg-white/55 p-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <Gauge className={cn('h-3.5 w-3.5', theme.text)} strokeWidth={2} aria-hidden="true" />
            <h3 className="text-[12.5px] font-semibold tracking-tight text-slate-900 dark:text-white">
              Clinical inputs
            </h3>
          </div>

          {/* Gestational age */}
          <div className="mt-3">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="fgr-ga" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                Gestational age
              </label>
              <span className={cn('grid h-8 min-w-20 place-items-center rounded-xl border px-2 text-[12px] font-bold tabular-nums', theme.border, theme.tint, theme.text)}>
                {formatGa(ga)}
              </span>
            </div>
            <input
              id="fgr-ga"
              type="range"
              min={24}
              max={40}
              step={1}
              value={ga}
              onChange={(event) => setGa(Number(event.target.value))}
              aria-label="Gestational age in weeks"
              className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-900/[0.12] accent-indigo-500 dark:bg-white/[0.15]"
            />
            <div className="mt-1 flex justify-between text-[8.5px] font-medium tabular-nums text-slate-400">
              <span>24+0</span>
              <span>32+0</span>
              <span>40+0</span>
            </div>
          </div>

          {/* Biometry */}
          <div className="mt-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Biometry</p>
            <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {BIOMETRY.map((option) => {
                const active = biometry === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setBiometry(option.id)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-xl border px-2.5 py-2 text-left transition-colors',
                      active
                        ? cn('bg-gradient-to-r text-white shadow-sm', theme.gradient, 'border-transparent')
                        : 'border-slate-900/[0.08] bg-white/65 text-slate-600 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white',
                    )}
                  >
                    <span className="block text-[10.5px] font-semibold leading-tight">{option.label}</span>
                    <span className={cn('mt-0.5 block text-[8.5px]', active ? 'text-white/75' : 'text-slate-400')}>
                      {option.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Umbilical artery */}
          <div className="mt-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Umbilical artery Doppler</p>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              {UMBILICAL.map((option) => {
                const active = umbilical === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setUmbilical(option.id)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-xl border px-2.5 py-2 text-left transition-colors',
                      active
                        ? cn('bg-gradient-to-r text-white shadow-sm', theme.gradient, 'border-transparent')
                        : 'border-slate-900/[0.08] bg-white/65 text-slate-600 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white',
                    )}
                  >
                    <span className="block text-[10.5px] font-semibold leading-tight">{option.label}</span>
                    <span className={cn('mt-0.5 block text-[8.5px]', active ? 'text-white/75' : 'text-slate-400')}>
                      {option.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cerebral / venous */}
          <div className="mt-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Cerebral &amp; venous Doppler</p>
            <div className="mt-1.5 space-y-1.5">
              {CEREBRAL.map((option) => {
                const active = cerebral === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setCerebral(option.id)}
                    aria-pressed={active}
                    className={cn(
                      'flex w-full items-center justify-between gap-2 rounded-xl border px-2.5 py-2 text-left transition-colors',
                      active
                        ? cn('bg-gradient-to-r text-white shadow-sm', theme.gradient, 'border-transparent')
                        : 'border-slate-900/[0.08] bg-white/65 text-slate-600 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white',
                    )}
                  >
                    <span className="text-[10.5px] font-semibold leading-tight">{option.label}</span>
                    <span className={cn('text-right text-[8.5px]', active ? 'text-white/75' : 'text-slate-400')}>
                      {option.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- outputs */}
        <section className="space-y-2.5">
          {/* Waveforms */}
          <div className="overflow-hidden rounded-2xl border border-slate-900/[0.07] bg-slate-950/[0.96] p-3 dark:border-white/[0.1]">
            <div className="flex items-center justify-between gap-2">
              <p className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
                <Waves className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                Live Doppler waveform
              </p>
              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[8.5px] font-semibold text-slate-200">
                UA · DV
              </span>
            </div>

            <svg viewBox="0 0 452 148" role="img" aria-label={`Umbilical artery ${umbilical} waveform with ${dvKind} ductus venosus a-wave`} className="mt-1.5 h-auto w-full">
              <defs>
                <linearGradient id="fgr-wave-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={waveformTone} stopOpacity="0.30" />
                  <stop offset="100%" stopColor={waveformTone} stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* UA panel */}
              <text x="4" y="11" fill="#A5B4FC" fontSize="8.5" fontWeight="700" letterSpacing="0.08em">
                UMBILICAL ARTERY
              </text>
              <line x1="0" y1="58" x2="452" y2="58" stroke="#475569" strokeDasharray="3 5" strokeWidth="0.8" />
              <path d={umbilicalPath(umbilical)} fill="none" stroke={waveformTone} strokeWidth="2.1" strokeLinejoin="round" strokeLinecap="round" />
              <text x="405" y="11" fill="#94A3B8" fontSize="7.5">
                {umbilical === 'normal' ? 'positive EDF' : umbilical === 'elevated' ? '↓ EDF' : umbilical === 'aedf' ? 'AEDF' : 'REDF'}
              </text>
              <text x="4" y="74" fill="#64748B" fontSize="7.5">
                {umbilical === 'redf' ? 'diastolic flow below baseline' : umbilical === 'aedf' ? 'diastolic flow reaches baseline' : 'diastolic flow remains positive'}
              </text>

              {/* DV panel */}
              <line x1="0" y1="132" x2="452" y2="132" stroke="#475569" strokeDasharray="3 5" strokeWidth="0.8" />
              <text x="4" y="86" fill="#F9A8D4" fontSize="8.5" fontWeight="700" letterSpacing="0.08em">
                DUCTUS VENOSUS
              </text>
              <path
                d={ductusPath(dvKind)}
                fill="none"
                stroke={dvKind === 'abnormal' ? '#FB7185' : '#F472B6'}
                strokeWidth="2.1"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <text x="380" y="86" fill="#94A3B8" fontSize="7.5">
                {dvKind === 'abnormal' ? 'absent / reversed a-wave' : 'positive a-wave'}
              </text>
              <text x="4" y="146" fill="#64748B" fontSize="7.5">
                S · ventricular systole · D · early diastole · a · atrial contraction
              </text>
            </svg>
          </div>

          {/* Stage + phenotype */}
          <div className={cn('rounded-2xl border px-3 py-2.5', stage.tone)}>
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <p className="inline-flex items-center gap-1.5 text-[12px] font-bold">
                <span className={cn('h-2 w-2 rounded-full', stage.dot)} aria-hidden="true" />
                {stage.title}
              </p>
              <span className="rounded-full border border-current/20 bg-white/40 px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.08em] dark:bg-white/[0.08]">
                {plan.phenotype}
              </span>
            </div>
            <p className="mt-1 text-[10.5px] leading-relaxed opacity-85">
              {biometry === 'lt3' ? 'EFW/AC < 3rd centile' : 'EFW/AC 3rd–9th centile'} ·{' '}
              {UMBILICAL.find((entry) => entry.id === umbilical)?.label} · {CEREBRAL.find((entry) => entry.id === cerebral)?.label}
            </p>
          </div>

          {/* Surveillance */}
          <div className={cn('rounded-2xl border px-3 py-2.5', stage.surveillanceTone)}>
            <p className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em]">
              <HeartPulse className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
              Surveillance protocol
            </p>
            <p className="mt-1 text-[11px] font-medium leading-relaxed">{stage.surveillance}</p>
          </div>

          {/* Delivery */}
          <div
            className={cn(
              'rounded-2xl border px-3 py-2.5',
              plan.urgent
                ? 'border-rose-500/30 bg-rose-500/[0.10] text-rose-900 dark:text-rose-100'
                : 'border-slate-900/[0.07] bg-white/55 text-slate-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-200',
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <p className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em]">
                <CalendarClock className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
                Delivery window &amp; mode
              </p>
              <span
                className={cn(
                  'rounded-full border px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.08em]',
                  plan.urgent
                    ? 'border-rose-500/30 bg-rose-500/[0.12] text-rose-700 dark:text-rose-200'
                    : plan.expectant
                      ? 'border-amber-500/25 bg-amber-500/[0.10] text-amber-700 dark:text-amber-200'
                      : 'border-emerald-500/25 bg-emerald-500/[0.10] text-emerald-700 dark:text-emerald-200',
                )}
              >
                {plan.urgent ? 'Deliver now' : plan.expectant ? 'Expectant management' : 'Planned delivery'}
              </span>
            </div>
            <p className="mt-1.5 text-[12px] font-bold leading-snug">{plan.deliveryWindow}</p>
            <p className="mt-0.5 text-[10.5px] leading-relaxed opacity-85">{plan.deliveryDetail}</p>
            <p className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-slate-900/[0.07] bg-white/60 px-2 py-0.5 text-[9.5px] font-semibold dark:border-white/[0.1] dark:bg-white/[0.06]">
              <Baby className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
              {plan.mode}
            </p>
          </div>

          {/* Alerts */}
          <div className="grid gap-1.5 sm:grid-cols-2">
            <div
              className={cn(
                'flex items-start gap-2 rounded-xl border px-2.5 py-2',
                magnesium
                  ? 'border-emerald-500/30 bg-emerald-500/[0.10] text-emerald-800 dark:text-emerald-200'
                  : 'border-slate-900/[0.06] bg-white/45 text-slate-400 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-500',
              )}
            >
              <Sparkles className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              <p className="text-[10px] leading-relaxed">
                <span className="font-bold">MgSO4 neuroprotection</span>
                <span className="block text-[8.5px] opacity-80">
                  {magnesium
                    ? plan.urgent
                      ? 'Give now · delivery < 32+0 weeks'
                      : 'Give if delivery occurs before 32+0 weeks'
                    : 'Not indicated at this gestation (≥ 32+0)'}
                </span>
              </p>
            </div>
            <div
              className={cn(
                'flex items-start gap-2 rounded-xl border px-2.5 py-2',
                steroids
                  ? 'border-indigo-500/30 bg-indigo-500/[0.10] text-indigo-800 dark:text-indigo-200'
                  : 'border-slate-900/[0.06] bg-white/45 text-slate-400 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-500',
              )}
            >
              <ShieldAlert className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              <p className="text-[10px] leading-relaxed">
                <span className="font-bold">Antenatal corticosteroids</span>
                <span className="block text-[8.5px] opacity-80">
                  {steroids
                    ? plan.urgent
                      ? 'Give now · delivery ≤ 34+6 weeks'
                      : 'Give if delivery is planned before 34+6 weeks'
                    : 'Not indicated at this gestation (≥ 35+0)'}
                </span>
              </p>
            </div>
          </div>

          {!magnesium && !steroids ? (
            <p className="flex items-start gap-1.5 rounded-xl border border-slate-900/[0.06] bg-white/45 px-2.5 py-2 text-[9.5px] leading-relaxed text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-400">
              <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              At this gestation the focus shifts to delivery timing, intrapartum EFM and neonatal team readiness.
            </p>
          ) : null}

          {plan.urgent ? (
            <p className="flex items-start gap-1.5 rounded-xl border border-rose-500/25 bg-rose-500/[0.08] px-2.5 py-2 text-[9.5px] leading-relaxed text-rose-800 dark:text-rose-200">
              <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              Do not delay delivery for a transient post-betamethasone return of end-diastolic flow — it lasts 48–72 h and does not mean placental recovery.
            </p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
