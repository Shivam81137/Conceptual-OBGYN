import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  BookOpen,
  Flame,
  GraduationCap,
  Layers3,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { ModuleNavigator } from '@/components/studio/ModuleNavigator';
import { ConceptNotes } from '@/components/studio/ConceptNotes';
import { MenstrualCycleSimulator } from '@/components/studio/MenstrualCycleSimulator';
import { PartographSimulator } from '@/components/studio/PartographSimulator';
import { TorchSimulator } from '@/components/studio/TorchSimulator';
import { FlashcardDeck } from '@/components/studio/FlashcardDeck';
import { McqRail } from '@/components/studio/McqRail';
import { ProgressRing } from '@/components/studio/StudioBits';
import { useStudioModules } from '@/api/useStudioModules';
import { useAppStore } from '@/store/useAppStore';
import { useStudioStore } from '@/store/useStudioStore';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';
import {
  modulesForTrack,
  studioModuleKey,
  STUDIO_TRACK_THEME,
  type StudioModule,
  type StudioTabId,
} from '@/data/revisionStudio';
import type { TrackId } from '@/types/tracks';

const TABS: readonly { id: StudioTabId; label: string; short: string; icon: typeof BookOpen }[] = [
  { id: 'notes', label: 'Visual Concept Notes', short: 'Notes', icon: BookOpen },
  { id: 'simulator', label: 'Interactive Clinical Simulator', short: 'Simulator', icon: Activity },
  { id: 'flashcards', label: 'Active Recall Flashcards', short: 'Flashcards', icon: Layers3 },
];

export interface RevisionStudioPageProps {
  trackId: TrackId;
}

/**
 * RevisionStudioPage (`/track/ug`, `/track/pg`)
 * ---------------------------------------------------------------------------
 * Three-pane spatial glass workspace:
 *   A · searchable high-yield module navigator with completion rings
 *   B · notes / simulator / flashcards canvas
 *   C · contextual three-question MCQ drill with an AI hand-off
 * All study evidence persists locally; the module index reconciles with
 * `/api/v1/tracks/:track/modules` once the API is reachable.
 */
export function RevisionStudioPage({ trackId }: RevisionStudioPageProps): JSX.Element {
  const theme = STUDIO_TRACK_THEME[trackId];
  const { modules, source } = useStudioModules(trackId);
  const setSpotlightTrack = useAppStore((state) => state.setSpotlightTrack);
  const lastModuleByTrack = useStudioStore((state) => state.lastModuleByTrack);
  const openModule = useStudioStore((state) => state.openModule);
  const cardRatings = useStudioStore((state) => state.cardRatings);
  const mcqAnswers = useStudioStore((state) => state.mcqAnswers);
  const reduceMotion = usePrefersReducedMotion();

  const [selectedId, setSelectedId] = useState<string>(() => {
    const resume = lastModuleByTrack[trackId];
    const trackModules = modulesForTrack(trackId);
    if (resume && trackModules.some((module) => module.id === resume)) return resume;
    return trackModules[0]?.id ?? '';
  });
  const [tab, setTab] = useState<StudioTabId>('notes');

  const selected = modules.find((module) => module.id === selectedId) ?? modules[0] ?? null;

  /* Keep the navbar/hub/AI in sync with the active workspace track. */
  useEffect(() => {
    setSpotlightTrack(trackId);
  }, [trackId, setSpotlightTrack]);

  /* Remember the module the student was last inside. */
  useEffect(() => {
    if (selected) openModule(selected.id, trackId);
  }, [selected?.id, trackId, openModule]);

  const progressFor = useMemo(
    () =>
      (module: StudioModule): number => {
        const rated = module.flashcards.filter((card) => cardRatings[card.id]).length;
        const answered = module.mcqs.filter(
          (mcq) => mcqAnswers[studioModuleKey(module.id, mcq.id)] !== undefined,
        ).length;
        const total = module.flashcards.length + module.mcqs.length;
        return total === 0 ? 0 : (rated + answered) / total;
      },
    [cardRatings, mcqAnswers],
  );

  const overallProgress = useMemo(() => {
    if (modules.length === 0) return 0;
    return modules.reduce((total, module) => total + progressFor(module), 0) / modules.length;
  }, [modules, progressFor]);

  const selectedProgress = selected ? progressFor(selected) : 0;
  const totalCards = modules.reduce((total, module) => total + module.flashcards.length, 0);
  const totalMcqs = modules.reduce((total, module) => total + module.mcqs.length, 0);
  const selectedIndex = selected ? modules.findIndex((module) => module.id === selected.id) : 0;

  return (
    <>
      <Navbar />
      <main className="relative mx-auto max-w-7xl px-3 pb-14 pt-24 sm:px-5 sm:pt-28 lg:px-8">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 26 })}
          className="px-1"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]',
                theme.border,
                theme.tint,
                theme.text,
              )}
            >
              {trackId === 'NEET_UG' ? (
                <GraduationCap className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Stethoscope className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              )}
              {theme.eyebrow}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400 dark:text-slate-500">
              <span
                className={cn('h-1.5 w-1.5 rounded-full', source === 'live' ? 'bg-emerald-500' : 'bg-amber-500')}
                aria-hidden="true"
              />
              {source === 'live' ? 'Synced' : 'Offline ready'}
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-[26px] font-semibold leading-tight tracking-[-0.03em] sm:text-[32px]">
                <span className={cn('bg-gradient-to-r bg-clip-text text-transparent', theme.gradientText)}>
                  {theme.title}
                </span>
              </h1>
              <p className="mt-1.5 max-w-xl text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                {theme.subtitle}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <ProgressRing value={overallProgress} size={40} strokeWidth={3.25} colorClassName={theme.ring}>
                <span className="text-[9px] font-bold tabular-nums">{Math.round(overallProgress * 100)}%</span>
              </ProgressRing>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">Track completion</p>
                <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                  {modules.length} {modules.length === 1 ? 'module' : 'modules'} · {totalCards} cards
                </p>
              </div>
            </div>
          </div>

          <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-medium text-slate-400 dark:text-slate-500">
            {selected?.highYield ? (
              <>
                <span className="text-amber-600 dark:text-amber-400">High-yield</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
                  ·
                </span>
              </>
            ) : null}
            <span>{selected?.durationMinutes ?? 0} min</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
              ·
            </span>
            <span>{totalMcqs} MCQs</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
              ·
            </span>
            <span>Progress saved on this device</span>
          </p>
        </motion.header>

        <div className="mt-5 grid grid-cols-1 items-start gap-3.5 xl:grid-cols-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...withFilterTween({ type: 'spring', stiffness: 250, damping: 28 }), delay: 0.04 }}
            className="xl:col-span-3"
          >
            <ModuleNavigator
              theme={theme}
              modules={modules}
              selectedId={selected?.id ?? ''}
              onSelect={setSelectedId}
              progressFor={progressFor}
              overallProgress={overallProgress}
              source={source}
            />
          </motion.div>

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...withFilterTween({ type: 'spring', stiffness: 250, damping: 28 }), delay: 0.08 }}
            className="glass-card overflow-hidden rounded-[26px] xl:col-span-6"
            aria-label="Revision studio canvas"
          >
            <div className={cn('h-1 w-full bg-gradient-to-r', theme.gradient)} aria-hidden="true" />
            {selected ? (
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Module {String(selectedIndex + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                      </span>
                      {selected.highYield ? (
                        <span className="inline-flex items-center gap-0.5 rounded-full border border-amber-500/20 bg-amber-500/[0.09] px-1.5 py-[2px] text-[8.5px] font-semibold text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300">
                          <Flame className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                          {selected.weightage}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-1 text-[18px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 dark:text-white sm:text-[20px]">
                      {selected.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                      {selected.summary}
                    </p>
                  </div>
                  <div className="hidden shrink-0 flex-col items-center gap-1 sm:flex">
                    <ProgressRing value={selectedProgress} size={46} strokeWidth={3.5} colorClassName={theme.ring}>
                      <span className="text-[9.5px] font-bold tabular-nums">{Math.round(selectedProgress * 100)}%</span>
                    </ProgressRing>
                    <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-slate-400">module</span>
                  </div>
                </div>

                <div className="mt-2.5 flex flex-wrap gap-1">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-900/[0.06] bg-white/55 px-2 py-0.5 text-[9px] font-medium text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  role="tablist"
                  aria-label="Studio view"
                  className="relative mt-4 grid grid-cols-3 gap-0.5 rounded-2xl bg-slate-900/[0.05] p-1 dark:bg-white/[0.06]"
                >
                  {TABS.map((entry) => {
                    const Icon = entry.icon;
                    const active = tab === entry.id;
                    return (
                      <button
                        key={entry.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setTab(entry.id)}
                        className={cn(
                          'relative rounded-xl px-1.5 py-2 text-[10px] font-semibold transition-colors duration-150 sm:text-[10.5px]',
                          active ? 'text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white',
                        )}
                      >
                        {active ? (
                          <motion.span
                            layoutId="studioTab"
                            className={cn('absolute inset-0 rounded-xl bg-gradient-to-r shadow-sm', theme.gradient)}
                            transition={{ type: 'spring', stiffness: 430, damping: 34 }}
                          />
                        ) : null}
                        <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
                          <Icon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                          <span className="hidden sm:inline">{entry.label}</span>
                          <span className="sm:hidden">{entry.short}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <motion.div
                  key={`${selected.id}:${tab}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={withFilterTween({ duration: 0.24, ease: 'easeOut' })}
                  className="mt-4"
                >
                  {tab === 'notes' ? <ConceptNotes module={selected} theme={theme} /> : null}
                  {tab === 'simulator' ? (
                    selected.track === 'NEET_UG' ? (
                      <MenstrualCycleSimulator module={selected} theme={theme} />
                    ) : selected.id === 'pg-torch-infections' ? (
                      <TorchSimulator module={selected} theme={theme} />
                    ) : (
                      <PartographSimulator module={selected} theme={theme} />
                    )
                  ) : null}
                  {tab === 'flashcards' ? <FlashcardDeck module={selected} theme={theme} /> : null}
                </motion.div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-900/[0.06] pt-3 text-[9px] text-slate-400 dark:border-white/[0.06] dark:text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                    {selected.sourceTag}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="kbd text-[8px]">⌘K</span>
                    saves pearls · progress persists locally
                  </span>
                </div>
              </div>
            ) : (
              <div className="px-5 py-16 text-center">
                <p className="text-[13px] font-medium text-slate-600 dark:text-slate-300">No module selected.</p>
                <p className="mt-1 text-[11px] text-slate-400">Return to the hub and reopen the track.</p>
              </div>
            )}
          </motion.section>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...withFilterTween({ type: 'spring', stiffness: 250, damping: 28 }), delay: 0.12 }}
            className="xl:col-span-3"
          >
            {selected ? <McqRail module={selected} theme={theme} /> : null}
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default RevisionStudioPage;
