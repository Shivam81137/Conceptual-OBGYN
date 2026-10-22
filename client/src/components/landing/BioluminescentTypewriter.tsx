import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TypewriterPhrase {
  prefix: string;
  phrase: string;
  gradient: string;
  caretColor: string;
  dotColor: string;
  subtitle: string;
}

// Mobile-optimized clinical phrases: concise high-yield headings that fit cleanly on small viewports
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
];

interface BioluminescentTypewriterProps {
  onPhraseChange?: (phrase: TypewriterPhrase, index: number) => void;
  className?: string;
}

export function BioluminescentTypewriter({
  onPhraseChange,
  className,
}: BioluminescentTypewriterProps): JSX.Element {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activePhrase = OBGYN_PHRASES[phraseIndex];

  useEffect(() => {
    onPhraseChange?.(activePhrase, phraseIndex);
  }, [activePhrase, phraseIndex, onPhraseChange]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2400);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (displayedText.length < activePhrase.phrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(activePhrase.phrase.slice(0, displayedText.length + 1));
        }, 55);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 22);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % OBGYN_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isPaused, activePhrase.phrase]);

  const characters = displayedText.split('');

  return (
    <div className={cn('relative flex w-full flex-col items-center justify-center px-1 text-center sm:px-2', className)}>
      {/* ── Main Big Display Heading (Zero layout jitter, responsive typography) ── */}
      <h1 className="relative flex min-h-[1.3em] w-full max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center font-display text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {/* Dynamic Contextual Action Prefix */}
        <span className="shrink-0 text-slate-900 select-none dark:text-slate-100">
          {activePhrase.prefix}{' '}
        </span>

        {/* Crisp typographic phrase without overflowing */}
        <span className="relative inline-flex max-w-full items-center">
          <span className="relative z-10 inline-flex flex-wrap items-baseline justify-center">
            {characters.map((char, index) => {
              const isNewlyTyped = !isDeleting && !isPaused && index === characters.length - 1;

              return (
                <motion.span
                  key={`${phraseIndex}-${index}-${char}`}
                  initial={
                    isNewlyTyped
                      ? { opacity: 0, y: 3 }
                      : false
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.12, ease: 'easeOut' }}
                  className={cn(
                    'inline-block bg-gradient-to-r bg-clip-text font-bold text-transparent',
                    activePhrase.gradient,
                  )}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              );
            })}
          </span>

          {/* Crisp, professional clinical cursor */}
          <motion.span
            animate={
              isPaused
                ? { opacity: [1, 0.15, 1] }
                : { opacity: 1 }
            }
            transition={
              isPaused
                ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.1 }
            }
            className="ml-1 inline-block h-[0.8em] w-[2.5px] self-center rounded-full sm:ml-1.5 sm:w-[3.5px] md:w-[4px]"
            style={{ backgroundColor: activePhrase.caretColor }}
            aria-hidden="true"
          />
        </span>
      </h1>

      {/* ── Synchronized Professional Clinical Subtitle ── */}
      <div className="relative mt-2.5 min-h-[2.5rem] w-full max-w-xl px-2 sm:mt-3.5">
        <AnimatePresence mode="wait">
          <motion.p
            key={activePhrase.phrase}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="text-xs font-normal leading-relaxed text-slate-600 sm:text-base md:text-lg dark:text-slate-300"
          >
            {activePhrase.subtitle}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BioluminescentTypewriter;
