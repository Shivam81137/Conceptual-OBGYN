import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { AppBrandLogo } from '@/components/brand/AppBrandLogo';
import { TrackPortalCard, type TrackCardData } from '@/components/landing/TrackPortalCard';
import {
  BioluminescentTypewriter,
  OBGYN_PHRASES,
  type TypewriterPhrase,
} from '@/components/landing/BioluminescentTypewriter';
import { DailyPearlCard } from '@/components/landing/DailyPearlCard';
import { VisualAtlasCard } from '@/components/landing/VisualAtlasCard';
import { RevisionEngineCard } from '@/components/landing/RevisionEngineCard';
import { ObgynAiStudioCard } from '@/components/landing/ObgynAiStudioCard';
import { useAppStore } from '@/store/useAppStore';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { withFilterTween } from '@/lib/motion';

const TRACK_CARDS: readonly TrackCardData[] = [
  {
    id: 'NEET_PG',
    eyebrow: 'PG CLINICAL',
    eyebrowClassName: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300',
    badgeDotClass: 'bg-indigo-500',
    title: 'NEET PG',
    scope: 'Clinical vignettes, labor & staging.',
    moduleLabel: '28 Clinical Vaults',
    modulePillClass: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-800 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300',
    moduleDotColor: '#4F46E5',
    href: '/pg',
    ringColor: 'rgba(79,70,229,0.35)',
    widget: 'partograph',
    topics: ['Partograph', 'High-Risk OB', 'Oncology'],
    studioButtonText: 'Enter NEET PG Studio →',
    studioButtonGradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)]',
    borderGradient: 'from-blue-500 via-indigo-500 to-rose-500',
    auroraGradient: 'bg-gradient-to-br from-blue-500/25 via-indigo-400/20 to-rose-400/25',
  },
  {
    id: 'NEET_UG',
    eyebrow: 'UG CORE',
    eyebrowClassName: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300',
    badgeDotClass: 'bg-emerald-500',
    title: 'NEET UG',
    scope: 'NCERT physiology & core concepts.',
    moduleLabel: '14 Modules',
    modulePillClass: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300',
    moduleDotColor: '#10B981',
    href: '/ug',
    ringColor: 'rgba(16,185,129,0.35)',
    widget: 'hormonal',
    topics: ['Menstrual Axis', 'Gametogenesis', 'Placenta'],
    studioButtonText: 'Enter NEET UG Studio →',
    studioButtonGradient: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)]',
    borderGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    auroraGradient: 'bg-gradient-to-br from-emerald-400/25 via-teal-300/20 to-cyan-400/25',
  },
];

interface CascadeDivProps {
  /** Position in the entrance cascade (drives the stagger delay). */
  order: number;
  reduceMotion: boolean;
  className?: string;
  children: ReactNode;
}

/** One staggered cascade item: spring 260/24, scale 0.97 → 1, blur 6px → 0. */
function CascadeDiv({ order, reduceMotion, className, children }: CascadeDivProps): JSX.Element {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.97, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24, delay: 0.04 + order * 0.07 })}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * LandingPage
 * ---------------------------------------------------------------------------
 * One bento workspace: the capsule navbar, an editorial header, two track
 * portals (tier 2), and three revision utilities (tier 3). Text stays
 * minimal — the layered glass, mini-widgets and spring physics carry the
 * richness. Keyboard: 1 → /ug, 2 → /pg, ⌘K → quick recall.
 */
export function LandingPage(): JSX.Element {
  const [activePhrase, setActivePhrase] = useState<TypewriterPhrase>(OBGYN_PHRASES[0]);
  const setSpotlightTrack = useAppStore((state) => state.setSpotlightTrack);
  const setCommandOpen = useAppStore((state) => state.setCommandOpen);
  const reduceMotion = usePrefersReducedMotion();

  /* Number-key shortcuts: 1 → UG, 2 → PG (ignored while typing in the ⌘K palette). */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === '1') setSpotlightTrack('NEET_UG');
      if (event.key === '2') setSpotlightTrack('NEET_PG');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setSpotlightTrack]);

  return (
    <div className="relative flex min-h-dvh flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-8 pt-20 sm:px-6 sm:pt-24">
        <div className="my-auto w-full">
          {/* ─── Flagship Bioluminescent Hero Header ──────────────────────────── */}
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24, delay: 0.04 })}
            className="flex flex-col items-center text-center"
          >
            {/* ── App Brand Graphical Logo Mark ── */}
            <div className="mb-4 flex justify-center">
              <AppBrandLogo size="md" />
            </div>

            {/* Eyebrow Pill with live pulsating indicator dot synchronized with active typewriter phrase */}
            <div className="inline-flex max-w-[90vw] items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 shadow-sm backdrop-blur-md sm:gap-2.5 sm:px-4 sm:py-1.5 dark:border-white/10 dark:bg-white/[0.06]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: activePhrase.dotColor }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full transition-colors duration-500"
                  style={{ backgroundColor: activePhrase.dotColor }}
                />
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-tight sm:text-sm">
                <span className="text-gradient font-display font-bold">Conceptual</span>
                <span className="font-display font-bold text-slate-800 dark:text-slate-100">OBGYN</span>
              </span>
              <span className="h-3 w-px bg-slate-300 dark:bg-white/20" aria-hidden="true" />
              <span className="truncate font-mono text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-500 sm:text-[10px] sm:tracking-[0.16em] dark:text-slate-400">
                Revision
              </span>
            </div>

            {/* Flagship Typewriter (Heading + Subtitle) */}
            <div className="mt-4 w-full sm:mt-5">
              <BioluminescentTypewriter onPhraseChange={setActivePhrase} />
            </div>

            {/* ── ⌘K Quick Recall Search Bar in Hero ── */}
            <div className="mt-5 flex w-full justify-center px-4 sm:mt-6">
              <button
                type="button"
                onClick={() => setCommandOpen(true)}
                aria-label="Open ⌘K quick recall search"
                className="group flex h-10 w-full max-w-md items-center justify-between rounded-full border border-slate-200/80 bg-white/75 px-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-200 hover:border-[#4285F4]/40 hover:bg-white/90 hover:shadow-[0_8px_28px_-6px_rgba(66,133,244,0.18)] dark:border-white/[0.12] dark:bg-white/[0.06] dark:hover:border-white/25 dark:hover:bg-white/[0.10]"
              >
                <div className="flex items-center gap-2.5 text-slate-400 dark:text-slate-400">
                  <Search className="h-4 w-4 text-[#4285F4] transition-transform duration-200 group-hover:scale-110" strokeWidth={2} aria-hidden="true" />
                  <span className="text-xs text-slate-500 sm:text-sm dark:text-slate-300">
                    Search clinical pearls, protocols & guidelines...
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-slate-400 dark:text-slate-400">
                  <kbd className="kbd px-1.5 py-0.5 text-[10px]">⌘K</kbd>
                </div>
              </button>
            </div>
          </motion.header>

          {/* ─── Track portal cards ──────────────────────────────────────── */}
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
            {TRACK_CARDS.map((card) => (
              <div key={card.id} className="w-full min-w-0">
                <TrackPortalCard data={card} />
              </div>
            ))}
          </div>

          {/* ─── Flagship OBGYN AI Studio Composer ──────────────────────── */}
          <CascadeDiv order={3} reduceMotion={reduceMotion} className="my-8 w-full">
            <ObgynAiStudioCard className="w-full" />
          </CascadeDiv>

          {/* ─── Revision utilities ──────────────────────────────────────── */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <CascadeDiv order={4} reduceMotion={reduceMotion} className="min-w-0">
              <DailyPearlCard />
            </CascadeDiv>
            <CascadeDiv order={5} reduceMotion={reduceMotion} className="min-w-0">
              <VisualAtlasCard />
            </CascadeDiv>
            <CascadeDiv order={6} reduceMotion={reduceMotion} className="min-w-0">
              <RevisionEngineCard />
            </CascadeDiv>
          </div>
        </div>
      </main>

      <motion.footer
        initial={reduceMotion ? false : { opacity: 0, y: 6, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24, delay: 0.44 })}
        className="px-6 pb-7 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/50 px-4 py-1.5 font-mono text-[10px] tracking-[0.08em] text-slate-400 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" aria-hidden="true" />
          Offline-ready PWA
          <span className="text-[#4285F4]">·</span>
          Press 1 for UG · 2 for PG
        </span>
      </motion.footer>
    </div>
  );
}

export default LandingPage;
