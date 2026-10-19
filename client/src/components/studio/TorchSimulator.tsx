import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Baby, FlaskConical, Gauge, ShieldAlert, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface TorchSimulatorProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

type SerologyPattern = 'igm-only' | 'both' | 'igg-only' | 'neither';

interface SerologyVerdict {
  label: string;
  verdict: string;
  next: string;
  tone: string;
}

const SEROLOGY: Record<SerologyPattern, SerologyVerdict> = {
  'igm-only': {
    label: 'IgM⁺ / IgG⁻',
    verdict: 'Recent infection — within the last 10 days',
    next: 'Repeat paired serology in 2–3 weeks to watch for IgG seroconversion. Maternal serology does not confirm fetal infection.',
    tone: 'border-amber-500/25 bg-amber-500/[0.09] text-amber-700 dark:text-amber-200',
  },
  both: {
    label: 'IgM⁺ / IgG⁺',
    verdict: 'Recent infection — more than 10 days ago',
    next: 'Run an IgG avidity test. Low avidity (<30%) = infection <3 months; high avidity (>60%) = infection >3 months ago or vaccination.',
    tone: 'border-orange-500/25 bg-orange-500/[0.09] text-orange-700 dark:text-orange-200',
  },
  'igg-only': {
    label: 'IgG⁺ / IgM⁻',
    verdict: 'Past infection — immunity established',
    next: 'Preexisting transplacental IgG protects the fetus; fetal infection is very rare. Reassure.',
    tone: 'border-emerald-500/25 bg-emerald-500/[0.09] text-emerald-700 dark:text-emerald-200',
  },
  neither: {
    label: 'IgM⁻ / IgG⁻',
    verdict: 'Infection excluded — mother is non-immune',
    next: 'No infection. Advise primary prevention (cook meat 63–74°C, freeze ≥72 h, gloves for soil/cat litter) and avoid raw goat milk.',
    tone: 'border-slate-400/25 bg-slate-500/[0.08] text-slate-700 dark:text-slate-200',
  },
};

interface WindowBand {
  from: number;
  to: number;
  title: string;
  rubella: string;
  vzv: string;
  toxo: string;
  cmv: string;
  parvo: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
}

const BANDS: readonly WindowBand[] = [
  {
    from: 2,
    to: 3,
    title: 'Preconception / pre-embryonic (2–3 weeks)',
    rubella: 'Pre-pregnancy immunity makes fetal infection very rare.',
    vzv: 'No congenital risk window yet.',
    toxo: 'Preconception infection protects the fetus via maternal IgG.',
    cmv: 'Pre-pregnancy immunity minimises risk.',
    parvo: 'No teratogenic window.',
    severity: 'low',
  },
  {
    from: 4,
    to: 11,
    title: 'Embryogenesis (4–11 weeks) — highest teratogenic risk',
    rubella: '<12 weeks: 90% transmission, 97% congenital defect risk.',
    vzv: '<13 weeks: 0.5% risk of congenital varicella syndrome.',
    toxo: 'MTCT risk is lowest here, but fetal disease is most severe.',
    cmv: 'Severe neurological and hearing damage is almost exclusively a first-trimester event.',
    parvo: 'Vertical transmission risk 25–32%; severe fetal anemia can occur any trimester.',
    severity: 'critical',
  },
  {
    from: 12,
    to: 16,
    title: 'Early fetal (12–16 weeks)',
    rubella: '12–16 weeks: 55% transmission, 20% congenital defect risk.',
    vzv: '13–20 weeks: 2% risk of CVS — the highest teratogenic window for varicella.',
    toxo: 'MTCT risk rising with advancing gestation.',
    cmv: 'Transmission ~30% early, but brain/hearing damage now less likely.',
    parvo: 'Continue serial Doppler if exposed.',
    severity: 'high',
  },
  {
    from: 17,
    to: 20,
    title: 'Amniocentesis & legal window (17–20 weeks)',
    rubella: '>16 weeks: 45% transmission but minimal defect risk — deafness only.',
    vzv: '>20 weeks: minimal risk of CVS.',
    toxo: 'This is the first window in which amniotic-fluid PCR is technically possible (6–8 weeks after infection + fetal urination).',
    cmv: 'Amniocentesis PCR ideally after 20 weeks and ≥8 weeks after maternal infection.',
    parvo: 'Serial MCA-PSV monitoring; perform IUT if >1.5 MoM or hydropic.',
    severity: 'moderate',
  },
  {
    from: 21,
    to: 34,
    title: 'Late fetal (21–34 weeks)',
    rubella: 'Minimal defect risk (deafness only).',
    vzv: 'Minimal risk of CVS.',
    toxo: 'MTCT risk is highest, but neonatal disease is usually milder.',
    cmv: 'Transmission peaks ~47% in the third trimester; severe damage unlikely.',
    parvo: 'MCA-PSV may miss mild anemia after 33 weeks gestation.',
    severity: 'moderate',
  },
  {
    from: 35,
    to: 42,
    title: 'Peripartum (35–42 weeks)',
    rubella: 'Congenital malformation risk minimal.',
    vzv: '>36 weeks: 50% risk of fetal infection and 25% risk of clinical neonatal varicella.',
    toxo: 'Neonatal disease usually subclinical at birth; follow up for late sequelae.',
    cmv: 'High transmission, low severity — but late-onset SNHL still possible.',
    parvo: 'Hydrops rare; continue surveillance if anemic.',
    severity: 'high',
  },
];

const SEVERITY: Record<WindowBand['severity'], { label: string; className: string; dot: string }> = {
  low: { label: 'Low fetal risk', className: 'border-emerald-500/25 bg-emerald-500/[0.08]', dot: 'bg-emerald-500' },
  moderate: { label: 'Moderate fetal risk', className: 'border-amber-500/25 bg-amber-500/[0.09]', dot: 'bg-amber-500' },
  high: { label: 'High fetal risk', className: 'border-orange-500/25 bg-orange-500/[0.10]', dot: 'bg-orange-500' },
  critical: { label: 'Critical teratogenic window', className: 'border-rose-500/25 bg-rose-500/[0.10]', dot: 'bg-rose-500' },
};

function bandFor(week: number): WindowBand {
  return BANDS.find((band) => week >= band.from && week <= band.to) ?? BANDS[BANDS.length - 1];
}

/**
 * Pane B, tab 2 (NEET PG · TORCH) — serology interpreter + gestational-week
 * severity timeline. Turns Algorithm 1 and the trimester-severity rule into a
 * live decision aid.
 */
export function TorchSimulator({ module, theme }: TorchSimulatorProps): JSX.Element {
  const [pattern, setPattern] = useState<SerologyPattern>('both');
  const [week, setWeek] = useState(10);

  const verdict = SEROLOGY[pattern];
  const band = useMemo(() => bandFor(week), [week]);
  const severity = SEVERITY[band.severity];

  const clean = WEEK_LABEL(week);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
          <FlaskConical className={cn('h-3 w-3', theme.text)} strokeWidth={2} aria-hidden="true" />
          {module.shortTitle} clinical sandbox · serology + trimester severity
        </p>
        <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400">
          Algorithms 1 & 2 · live
        </span>
      </div>

      {/* Serology interpreter */}
      <section className="rounded-2xl border border-slate-900/[0.07] bg-white/55 p-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <FlaskConical className={cn('h-3.5 w-3.5', theme.text)} strokeWidth={2} aria-hidden="true" />
          <h3 className="text-[12.5px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Serology interpreter
          </h3>
        </div>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          Paired virus-specific IgM and IgG — tap a pattern to read the timing and the next step.
        </p>

        <div className="mt-2.5 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {(Object.keys(SEROLOGY) as SerologyPattern[]).map((key) => {
            const option = SEROLOGY[key];
            const active = pattern === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPattern(key)}
                aria-pressed={active}
                className={cn(
                  'relative rounded-xl border px-2 py-1.5 text-[10.5px] font-semibold transition-colors',
                  active
                    ? cn('bg-gradient-to-r text-white shadow-sm', theme.gradient, 'border-transparent')
                    : 'border-slate-900/[0.08] bg-white/70 text-slate-600 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white',
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={pattern}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={cn('mt-2.5 rounded-xl border px-3 py-2.5', verdict.tone)}
        >
          <p className="text-[11.5px] font-semibold">{verdict.verdict}</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">{verdict.next}</p>
        </motion.div>
      </section>

      {/* Gestational severity timeline */}
      <section className="rounded-2xl border border-slate-900/[0.07] bg-white/55 p-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <Gauge className={cn('h-3.5 w-3.5', theme.text)} strokeWidth={2} aria-hidden="true" />
          <h3 className="text-[12.5px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Gestational-week severity
          </h3>
        </div>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          The same infection behaves differently by week — scrub to place it on the teratogenic timeline.
        </p>

        <div className="mt-3 flex items-center gap-3">
          <input
            type="range"
            min={2}
            max={42}
            step={1}
            value={week}
            onChange={(event) => setWeek(Number(event.target.value))}
            aria-label="Gestational week"
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-900/[0.12] accent-indigo-500 dark:bg-white/[0.15]"
          />
          <span className={cn('grid h-10 w-14 shrink-0 place-items-center rounded-xl border text-[13px] font-bold tabular-nums', theme.border, theme.tint, theme.text)}>
            {clean}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[9.5px] font-semibold', severity.className)}>
            <span className={cn('h-1.5 w-1.5 rounded-full', severity.dot)} aria-hidden="true" />
            {severity.label}
          </span>
          <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-2 py-0.5 text-[9.5px] font-medium text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400">
            {band.title}
          </span>
        </div>

        <div className="mt-3 space-y-2">
          <RiskLine icon={<Baby className="h-3 w-3" strokeWidth={2} aria-hidden="true" />} name="Rubella" text={band.rubella} theme={theme} />
          <RiskLine icon={<Baby className="h-3 w-3" strokeWidth={2} aria-hidden="true" />} name="Toxoplasma" text={band.toxo} theme={theme} />
          <RiskLine icon={<Baby className="h-3 w-3" strokeWidth={2} aria-hidden="true" />} name="CMV" text={band.cmv} theme={theme} />
          <RiskLine icon={<Baby className="h-3 w-3" strokeWidth={2} aria-hidden="true" />} name="Parvovirus B19" text={band.parvo} theme={theme} />
          <RiskLine icon={<ShieldAlert className="h-3 w-3" strokeWidth={2} aria-hidden="true" />} name="Varicella zoster" text={band.vzv} theme={theme} />
        </div>

        <p className="mt-3 flex items-start gap-1.5 rounded-xl border border-amber-500/20 bg-amber-500/[0.07] px-3 py-2 text-[10.5px] leading-relaxed text-amber-800 dark:text-amber-200">
          <Sparkles className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={2} aria-hidden="true" />
          With the exception of HSV, first-trimester infection carries the worst fetal outcome — the fetus is most vulnerable between week 3 and
          weeks 8–12 postfertilization.
        </p>
      </section>
    </div>
  );
}

function RiskLine({
  icon,
  name,
  text,
  theme,
}: {
  icon: JSX.Element;
  name: string;
  text: string;
  theme: StudioTrackTheme;
}): JSX.Element {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-slate-900/[0.05] bg-white/45 px-2.5 py-2 dark:border-white/[0.06] dark:bg-white/[0.02]">
      <span className={cn('mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full', theme.tint, theme.text)}>
        {icon}
      </span>
      <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
        <span className="font-semibold text-slate-800 dark:text-slate-100">{name}: </span>
        {text}
      </p>
    </div>
  );
}

function WEEK_LABEL(week: number): string {
  return `${week}w`;
}
