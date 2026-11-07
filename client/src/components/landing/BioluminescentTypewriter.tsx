import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { cn } from '@/lib/utils';

export interface TypewriterPhrase {
  prefix: string;
  phrase: string;
  gradient: string;
  caretColor: string;
  dotColor: string;
  subtitle: string;
}

/**
 * Clinical headline rotation. Every line is short enough to sit on one row at
 * desktop width and at most two rows on a 320 px phone, so the reserved hero
 * height never has to grow mid-cycle.
 */
export const OBGYN_PHRASES: readonly TypewriterPhrase[] = [
  {
    prefix: 'Decode',
    phrase: 'Labor Curves.',
    gradient: 'from-sky-700 via-cyan-600 to-teal-600 dark:from-sky-400 dark:via-cyan-300 dark:to-teal-300',
    caretColor: '#0284c7',
    dotColor: '#0284c7',
    subtitle: 'Partograph curves, cardinal movements, and intrapartum protocols.',
  },
  {
    prefix: 'Master',
    phrase: 'High-Risk OB.',
    gradient: 'from-rose-700 via-rose-600 to-amber-600 dark:from-rose-400 dark:via-pink-300 dark:to-amber-300',
    caretColor: '#e11d48',
    dotColor: '#e11d48',
    subtitle: 'Preeclampsia regimens, antepartum hemorrhage, and fetal surveillance.',
  },
  {
    prefix: 'Navigate',
    phrase: 'Ovarian Axis.',
    gradient: 'from-emerald-700 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300',
    caretColor: '#059669',
    dotColor: '#059669',
    subtitle: 'GnRH pulsatility, ovarian steroidogenesis, and endometrial histology.',
  },
  {
    prefix: 'Master',
    phrase: 'Gyn Oncology.',
    gradient: 'from-indigo-700 via-violet-600 to-fuchsia-600 dark:from-indigo-400 dark:via-violet-300 dark:to-fuchsia-300',
    caretColor: '#4f46e5',
    dotColor: '#4f46e5',
    subtitle: 'FIGO staging algorithms, surgical anatomy, and tumor biomarkers.',
  },
  {
    prefix: 'Solve',
    phrase: 'Case Vignettes.',
    gradient: 'from-blue-700 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300',
    caretColor: '#2563eb',
    dotColor: '#2563eb',
    subtitle: 'High-yield differential diagnoses engineered for the UG and PG tracks.',
  },
  {
    prefix: 'Read',
    phrase: 'CTG Traces.',
    gradient: 'from-teal-700 via-emerald-600 to-lime-600 dark:from-teal-300 dark:via-emerald-300 dark:to-lime-300',
    caretColor: '#0d9488',
    dotColor: '#0d9488',
    subtitle: 'Baseline rate, variability, decelerations — and when to intervene.',
  },
  {
    prefix: 'Stage',
    phrase: 'Endometriosis.',
    gradient: 'from-fuchsia-700 via-purple-600 to-indigo-600 dark:from-fuchsia-400 dark:via-purple-300 dark:to-indigo-300',
    caretColor: '#c026d3',
    dotColor: '#c026d3',
    subtitle: 'Revised ASRM staging, pain mapping, and fertility planning.',
  },
  {
    prefix: 'Recall',
    phrase: 'Drug Doses.',
    gradient: 'from-amber-700 via-orange-600 to-rose-600 dark:from-amber-300 dark:via-orange-300 dark:to-rose-300',
    caretColor: '#d97706',
    dotColor: '#d97706',
    subtitle: 'MgSO₄, oxytocin, tranexamic acid — the exact numbers examiners ask.',
  },
];

/* Typing cadence — deliberately even, so the caret never stutters. */
const TYPE_HEADLINE_MS = 46;
const HOLD_MS = 2600;
const ERASE_HEADLINE_MS = 18;
const GAP_MS = 360;
const REDUCED_HOLD_MS = 6000;

type Phase = 'headline' | 'hold' | 'erase' | 'gap';

interface BioluminescentTypewriterProps {
  onPhraseChange?: (phrase: TypewriterPhrase, index: number) => void;
  className?: string;
}

/**
 * BioluminescentTypewriter
 * ---------------------------------------------------------------------------
 * The headline types character by character; the supporting line arrives with
 * a blur-to-clear reveal at the very same beat, so both lines always describe
 * the same phrase.
 *
 * The hero reserves its height up front (headline + two subtitle rows), so the
 * cycle can never push the search bar or the cards below it around — the
 * effect stays lively, the page stays still.
 */
export function BioluminescentTypewriter({
  onPhraseChange,
  className,
}: BioluminescentTypewriterProps): JSX.Element {
  const reduceMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('headline');
  const [headlineCount, setHeadlineCount] = useState(0);

  const active = OBGYN_PHRASES[index];
  const fullHeadline = `${active.prefix} ${active.phrase}`;

  useEffect(() => {
    onPhraseChange?.(active, index);
  }, [active, index, onPhraseChange]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {
      case 'headline':
        if (headlineCount < fullHeadline.length) {
          timer = setTimeout(() => setHeadlineCount((count) => count + 1), TYPE_HEADLINE_MS);
        } else {
          timer = setTimeout(() => setPhase('hold'), 180);
        }
        break;
      case 'hold':
        timer = setTimeout(() => setPhase('erase'), HOLD_MS);
        break;
      case 'erase':
        if (headlineCount > 0) {
          timer = setTimeout(() => setHeadlineCount((count) => count - 1), ERASE_HEADLINE_MS);
        } else {
          timer = setTimeout(() => setPhase('gap'), 60);
        }
        break;
      case 'gap':
        timer = setTimeout(() => {
          setIndex((current) => (current + 1) % OBGYN_PHRASES.length);
          setPhase('headline');
        }, GAP_MS);
        break;
    }

    return () => clearTimeout(timer);
  }, [phase, headlineCount, fullHeadline.length, reduceMotion]);

  /* Reduced motion: one calm, complete phrase at a time — no character churn. */
  useEffect(() => {
    if (!reduceMotion) return undefined;
    const timer = setTimeout(() => setIndex((current) => (current + 1) % OBGYN_PHRASES.length), REDUCED_HOLD_MS);
    return () => clearTimeout(timer);
  }, [reduceMotion, index]);

  const headlineText = reduceMotion ? fullHeadline : fullHeadline.slice(0, headlineCount);
  const prefixText = headlineText.slice(0, Math.min(headlineText.length, active.prefix.length));
  /* Strip the leading space so spacing between prefix and phrase is controlled
     by an explicit gap on the flex container instead of a fragile leading
     whitespace character inside a flex item (which browsers collapse
     inconsistently). */
  const phraseText = headlineText.slice(active.prefix.length).replace(/^\s+/, '');
  const isHolding = reduceMotion || phase === 'hold';
  const isErasing = phase === 'erase' || phase === 'gap';
  const caretVisible = reduceMotion || phase !== 'gap';

  return (
    <div className={cn('relative flex w-full flex-col items-center justify-center px-1 text-center sm:px-2', className)}>
      {/* Headline — height reserved for one row at every width. */}
      <h1 className="flex min-h-[1.2em] w-full max-w-full flex-wrap items-center justify-center text-center font-display text-[clamp(1.35rem,6.2vw,3.5rem)] font-bold leading-[1.14] tracking-tight">
        <span className="sr-only">{fullHeadline}</span>
        <span aria-hidden="true" className="inline-flex flex-wrap items-baseline justify-center gap-x-1.5 sm:gap-x-2">
          <span className="text-slate-900 dark:text-slate-100">{prefixText}</span>
          <span className={cn('bg-gradient-to-r bg-clip-text text-transparent', active.gradient)}>
            {phraseText}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'inline-block h-[0.78em] w-[2px] shrink-0 self-center rounded-full sm:w-[3px]',
              isHolding && 'caret-blink',
              !caretVisible && 'opacity-0',
            )}
            style={{ backgroundColor: active.caretColor }}
          />
        </span>
      </h1>

      {/* Supporting line — blur-to-clear on the same beat as the headline. */}
      <div className="mt-3 flex min-h-[3.4em] w-full max-w-4xl items-start justify-center px-2 sm:mt-4 sm:min-h-[1.8em]">
        <div
          className={cn(
            'transition-[opacity,filter] duration-300 ease-out',
            isErasing && !reduceMotion && 'opacity-0 blur-[6px]',
          )}
        >
          <p
            key={index}
            className={cn(
              'text-[clamp(0.8rem,2.4vw,1.05rem)] font-normal leading-relaxed text-slate-600 dark:text-slate-300',
              !reduceMotion && 'subtitle-reveal',
            )}
          >
            <span className="sr-only">{active.subtitle}</span>
            <span aria-hidden="true">{active.subtitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BioluminescentTypewriter;
