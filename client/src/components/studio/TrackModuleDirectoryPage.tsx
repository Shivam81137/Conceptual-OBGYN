import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Layers3,
  Search,
  Signal,
  Sparkles,
  Stethoscope,
  Target,
  Trophy,
} from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { ConceptNotes } from '@/components/studio/ConceptNotes';
import { FgrSimulator } from '@/components/studio/FgrSimulator';
import { FlashcardDeck } from '@/components/studio/FlashcardDeck';
import { McqRail } from '@/components/studio/McqRail';
import { MenstrualCycleSimulator } from '@/components/studio/MenstrualCycleSimulator';
import { PartographSimulator } from '@/components/studio/PartographSimulator';
import { ProgressRing } from '@/components/studio/StudioBits';
import { TorchSimulator } from '@/components/studio/TorchSimulator';
import { useStudioModules } from '@/api/useStudioModules';
import { useAppStore } from '@/store/useAppStore';
import { useRecallStore } from '@/store/useRecallStore';
import { useStudioStore } from '@/store/useStudioStore';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { withFilterTween } from '@/lib/motion';
import { navigate } from '@/lib/router';
import { cn } from '@/lib/utils';
import {
  STUDIO_TRACK_THEME,
  studioModuleKey,
  type StudioModule,
  type StudioTabId,
  type StudioTrackTheme,
} from '@/data/revisionStudio';
import type { TrackId } from '@/types/tracks';

const TABS: readonly { id: StudioTabId; label: string; short: string; emoji: string }[] = [
  { id: 'notes', label: 'Visual Concept Notes', short: 'Notes', emoji: '📖' },
  { id: 'simulator', label: 'Interactive Clinical Simulator', short: 'Simulator', emoji: '📈' },
  { id: 'flashcards', label: 'Flashcards & Rapid MCQs', short: 'Cards & MCQs', emoji: '🃏' },
];

const PG_SEARCH_SUGGESTIONS = ['FGR', 'Doppler', 'Delphi', 'AEDV', 'REDV', 'Ductus Venosus', 'PlGF'] as const;

export interface TrackModuleDirectoryPageProps {
  trackId: TrackId;
}

function Highlight({ text, term }: { text: string; term: string }): JSX.Element {
  const trimmed = term.trim();
  if (trimmed.length === 0) return <>{text}</>;
  const index = text.toLowerCase().indexOf(trimmed.toLowerCase());
  if (index < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded bg-amber-300/60 px-0.5 text-inherit dark:bg-amber-400/30">
        {text.slice(index, index + trimmed.length)}
      </mark>
      {text.slice(index + trimmed.length)}
    </>
  );
}

function moduleHaystack(module: StudioModule): string {
  const noteText = module.notes.flatMap((section) => [
    section.heading,
    section.intro ?? '',
    ...(section.bullets ?? []),
    ...(section.flow ?? []),
    ...(section.pearls ?? []),
    section.trap?.title ?? '',
    section.trap?.body ?? '',
    ...(section.table?.head ?? []),
    ...(section.table?.rows.flat() ?? []),
  ]);
  const cardText = module.flashcards.flatMap((card) => [card.front, card.back]);
  const mcqText = module.mcqs.flatMap((mcq) => [mcq.stem, ...mcq.options, mcq.explanation]);
  return [
    module.title,
    module.shortTitle,
    module.summary,
    module.weightage,
    module.sourceTag,
    ...module.tags,
    ...noteText,
    ...cardText,
    ...mcqText,
  ]
    .join(' ')
    .toLowerCase();
}

function moduleNumberOf(modules: readonly StudioModule[], moduleId: string): string {
  return String(modules.findIndex((entry) => entry.id === moduleId) + 1).padStart(2, '0');
}

/** Topic pills never include the weightage badge copy. */
function topicTagsFor(module: StudioModule): readonly string[] {
  return module.tags.filter((tag) => !/yield/i.test(tag));
}

/** Picks the right bespoke simulator for the module, with an honest fallback. */
function ModuleSimulator({ module, theme }: { module: StudioModule; theme: StudioTrackTheme }): JSX.Element {
  if (module.track === 'NEET_PG') {
    if (module.id === 'pg-torch-infections') return <TorchSimulator module={module} theme={theme} />;
    if (module.id === 'pg-mod-02-fgr') return <FgrSimulator module={module} theme={theme} />;
  } else {
    if (module.id === 'ug-menstrual-axis') return <MenstrualCycleSimulator module={module} theme={theme} />;
    if (module.id === 'ug-lactation-parturition') return <PartographSimulator module={module} theme={theme} />;
  }

  return (
    <div className="rounded-2xl border border-slate-900/[0.07] bg-white/50 px-4 py-8 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
      <Activity className={cn('mx-auto h-5 w-5', theme.text)} strokeWidth={2} aria-hidden="true" />
      <p className="mt-2 text-[12px] font-semibold text-slate-700 dark:text-slate-200">
        A bespoke simulator for {module.shortTitle} is on the way.
      </p>
      <p className="mx-auto mt-1 max-w-md text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
        Use the visual concept notes and the rapid MCQ drill for this module while the interactive model is being built.
      </p>
    </div>
  );
}

/** Sticky glass header for the dedicated module study page. */
function ModuleStudyHeader({
  module,
  number,
  progress,
  theme,
  onBack,
}: {
  module: StudioModule;
  number: string;
  progress: number;
  theme: StudioTrackTheme;
  onBack: () => void;
}): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/[0.08] dark:bg-slate-900/80 sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2">
        {/* Left — back controls */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-all hover:bg-slate-200 dark:bg-white/[0.08] dark:text-slate-200 dark:hover:bg-white/[0.14]"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Back to Modules
          </button>
          <span className="mx-1 hidden h-4 w-[1px] bg-slate-300 dark:bg-white/15 sm:block" aria-hidden="true" />
          <button
            type="button"
            onClick={() => navigate('/')}
            className="hidden text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white sm:inline-flex"
          >
            Main Hub
          </button>
        </div>

        {/* Center — module heading */}
        <div className="order-last flex min-w-0 flex-1 items-center justify-center gap-1.5 sm:order-none">
          <h1 className="truncate text-[13px] font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[15px]">
            {number} · {module.title}
          </h1>
          {module.highYield ? (
            <span className="hidden shrink-0 items-center gap-0.5 rounded-full border border-amber-500/20 bg-amber-500/[0.09] px-1.5 py-[2px] text-[9px] font-semibold text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300 md:inline-flex">
              <span aria-hidden="true">🔥</span>
              {module.weightage}
            </span>
          ) : null}
          <span className="hidden shrink-0 items-center gap-0.5 rounded-full border border-slate-900/[0.06] bg-white/60 px-1.5 py-[2px] text-[9px] font-medium text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.05] dark:text-slate-400 md:inline-flex">
            <span aria-hidden="true">🕒</span>
            {module.durationMinutes}m
          </span>
        </div>

        {/* Right — completion ring + save status */}
        <div className="flex shrink-0 items-center gap-2">
          <span
            className="hidden items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 sm:inline-flex"
            title="Flashcard ratings, MCQ answers and notes autosave to this device"
          >
            <CheckCircle2 className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
            Save Progress
          </span>
          <ProgressRing value={progress} size={38} strokeWidth={3} colorClassName={theme.ring}>
            <span className="text-[9.5px] font-bold tabular-nums">{Math.round(progress * 100)}%</span>
          </ProgressRing>
        </div>
      </div>
    </header>
  );
}

/**
 * Track Workspace (`/track/ug`, `/track/pg`)
 * ---------------------------------------------------------------------------
 * Clean-directory-first architecture with dedicated full-screen study pages.
 * `activeModuleId === null` shows a scannable list of module header cards;
 * clicking "Explore Module" swaps in a dedicated study page (sticky glass
 * header + back navigation + 3-tab workspace) with no inline accordion. Back
 * returns to the directory and restores the exact scroll position.
 */
export function TrackModuleDirectoryPage({ trackId }: TrackModuleDirectoryPageProps): JSX.Element {
  const theme = STUDIO_TRACK_THEME[trackId];
  const { modules, source } = useStudioModules(trackId);
  const setSpotlightTrack = useAppStore((state) => state.setSpotlightTrack);
  const cardRatings = useStudioStore((state) => state.cardRatings);
  const mcqAnswers = useStudioStore((state) => state.mcqAnswers);
  const openModule = useStudioStore((state) => state.openModule);
  const pearls = useRecallStore((state) => state.pearls);
  const savePearl = useRecallStore((state) => state.savePearl);
  const removePearl = useRecallStore((state) => state.removePearl);
  const reduceMotion = usePrefersReducedMotion();

  /* Directory ↔ dedicated study page routing. */
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [tabsByModule, setTabsByModule] = useState<Record<string, StudioTabId>>({});
  const [topicsByModule, setTopicsByModule] = useState<Record<string, string | null>>({});
  const [search, setSearch] = useState('');
  const directoryScrollRef = useRef(0);
  const restoreScrollRef = useRef(false);

  const activeModule = activeModuleId ? (modules.find((module) => module.id === activeModuleId) ?? null) : null;

  /* Keep the hub/AI spotlight in sync with the active workspace track. */
  useEffect(() => {
    setSpotlightTrack(trackId);
  }, [trackId, setSpotlightTrack]);

  /* Remember the module the student last opened. */
  useEffect(() => {
    if (activeModule) openModule(activeModule.id, trackId);
  }, [activeModule, trackId, openModule]);

  /* Study pages open at the top; returning restores the directory scroll. */
  useEffect(() => {
    if (activeModuleId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    if (restoreScrollRef.current) {
      restoreScrollRef.current = false;
      window.scrollTo({ top: directoryScrollRef.current, behavior: 'auto' });
    }
  }, [activeModuleId]);

  /* Guard against a stale id after the module index reconciles. */
  useEffect(() => {
    if (activeModuleId && modules.length > 0 && !modules.some((module) => module.id === activeModuleId)) {
      setActiveModuleId(null);
    }
  }, [modules, activeModuleId]);

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

  const totalCards = modules.reduce((total, module) => total + module.flashcards.length, 0);
  const totalMcqs = modules.reduce((total, module) => total + module.mcqs.length, 0);
  const totalMinutes = modules.reduce((total, module) => total + module.durationMinutes, 0);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return modules;
    return modules.filter((module) => moduleHaystack(module).includes(term));
  }, [modules, search]);

  const searchSuggestions = useMemo<readonly string[]>(() => {
    if (trackId === 'NEET_PG') return PG_SEARCH_SUGGESTIONS;
    const seen = new Set<string>();
    const derived: string[] = [];
    modules.forEach((module) =>
      module.tags.forEach((tag) => {
        if (/yield/i.test(tag) || seen.has(tag)) return;
        seen.add(tag);
        derived.push(tag);
      }),
    );
    return derived.slice(0, 6);
  }, [trackId, modules]);

  const openStudy = (moduleId: string): void => {
    directoryScrollRef.current = window.scrollY;
    restoreScrollRef.current = false;
    setActiveModuleId(moduleId);
  };

  const backToModules = (): void => {
    restoreScrollRef.current = true;
    setActiveModuleId(null);
  };

  const goToModule = (moduleId: string): void => {
    setSearch('');
    setActiveModuleId(moduleId);
  };

  const setTab = (moduleId: string, tab: StudioTabId): void => {
    setTabsByModule((previous) => ({ ...previous, [moduleId]: tab }));
  };

  const toggleTopic = (moduleId: string, topic: string): void => {
    setTopicsByModule((previous) => ({
      ...previous,
      [moduleId]: previous[moduleId] === topic ? null : topic,
    }));
  };

  const pickSuggestion = (term: string): void => {
    setSearch(term);
    const matches = modules.filter((module) => moduleHaystack(module).includes(term.toLowerCase()));
    if (matches.length === 1) openStudy(matches[0].id);
  };

  return activeModule ? (
    <motion.div
      key={`study-${activeModule.id}`}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <ModuleStudyHeader
        module={activeModule}
        number={moduleNumberOf(modules, activeModule.id)}
        progress={progressFor(activeModule)}
        theme={theme}
        onBack={backToModules}
      />

      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-28">
        {/* Overview — summary, topic filters, Save Module Summary to ⌘K */}
        <section className="glass-card rounded-2xl p-4 sm:p-5" aria-label={`${activeModule.title} overview`}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">Module overview</p>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-600 dark:text-slate-300">
                {activeModule.summary}
              </p>
              <p className="mt-1.5 inline-flex items-center gap-1 text-[9.5px] text-slate-400 dark:text-slate-500">
                <Sparkles className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                {activeModule.sourceTag}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const summaryText = `${activeModule.title} — ${activeModule.summary}`;
                const saved = pearls.find((pearl) => pearl.text === summaryText);
                if (saved) {
                  removePearl(saved.id);
                  return;
                }
                savePearl({
                  text: summaryText,
                  query: `${activeModule.title} — module summary`,
                  track: activeModule.track,
                  sourceTag: `${activeModule.sourceTag} · Module summary`,
                });
              }}
              aria-pressed={pearls.some((pearl) => pearl.text === `${activeModule.title} — ${activeModule.summary}`)}
              className={cn(
                'inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[9.5px] font-semibold transition-colors',
                pearls.some((pearl) => pearl.text === `${activeModule.title} — ${activeModule.summary}`)
                  ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/25 dark:text-emerald-300'
                  : 'border-slate-900/[0.08] bg-white/70 text-slate-600 hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white',
              )}
            >
              {pearls.some((pearl) => pearl.text === `${activeModule.title} — ${activeModule.summary}`) ? (
                <BookmarkCheck className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Bookmark className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              )}
              <span className="hidden sm:inline">
                {pearls.some((pearl) => pearl.text === `${activeModule.title} — ${activeModule.summary}`)
                  ? 'Saved to ⌘K'
                  : 'Save Module Summary to ⌘K'}
              </span>
              <span className="sm:hidden">
                {pearls.some((pearl) => pearl.text === `${activeModule.title} — ${activeModule.summary}`)
                  ? 'Saved'
                  : 'Save'}
              </span>
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-1">
            <span className="mr-0.5 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">Topics</span>
            <button
              type="button"
              onClick={() => setTopicsByModule((previous) => ({ ...previous, [activeModule.id]: null }))}
              aria-pressed={(topicsByModule[activeModule.id] ?? null) === null}
              className={cn(
                'rounded-full border px-2 py-0.5 text-[9px] font-medium transition-colors',
                (topicsByModule[activeModule.id] ?? null) === null
                  ? cn(theme.border, theme.tint, theme.text)
                  : 'border-slate-900/[0.06] bg-white/55 text-slate-500 hover:text-slate-800 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-white',
              )}
            >
              All
            </button>
            {topicTagsFor(activeModule).map((tag) => {
              const active = (topicsByModule[activeModule.id] ?? null)?.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTopic(activeModule.id, tag)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-full border px-2 py-0.5 text-[9px] font-medium transition-colors',
                    active
                      ? cn(theme.border, theme.tint, theme.text)
                      : 'border-slate-900/[0.06] bg-white/55 text-slate-500 hover:text-slate-800 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-white',
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </section>

        {/* Segmented mode switcher */}
        <div
          role="tablist"
          aria-label={`${activeModule.title} views`}
          className="relative mt-4 grid grid-cols-3 gap-0.5 rounded-2xl border border-slate-900/[0.07] bg-white/80 p-1 shadow-sm backdrop-blur-xl dark:border-white/[0.09] dark:bg-slate-950/80"
        >
          {TABS.map((entry) => {
            const active = (tabsByModule[activeModule.id] ?? 'notes') === entry.id;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={entry.label}
                onClick={() => setTab(activeModule.id, entry.id)}
                className={cn(
                  'relative rounded-xl px-1.5 py-2 text-[10px] font-semibold transition-colors duration-150 sm:text-[10.5px]',
                  active
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white',
                )}
              >
                {active ? (
                  <motion.span
                    layoutId={`module-tab-${activeModule.id}`}
                    className={cn('absolute inset-0 rounded-xl bg-gradient-to-r shadow-sm', theme.gradient)}
                    transition={{ type: 'spring', stiffness: 430, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
                  <span className="text-[11px] leading-none" aria-hidden="true">
                    {entry.emoji}
                  </span>
                  <span className="hidden sm:inline">{entry.label}</span>
                  <span className="sm:hidden">{entry.short}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Active tab canvas */}
        <motion.div
          key={`${activeModule.id}:${tabsByModule[activeModule.id] ?? 'notes'}`}
          initial={reduceMotion ? false : { opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={withFilterTween({ duration: 0.24, ease: 'easeOut' })}
          className="mt-4"
        >
          {(tabsByModule[activeModule.id] ?? 'notes') === 'notes' ? (
            <ConceptNotes
              module={activeModule}
              theme={theme}
              topicFilter={topicsByModule[activeModule.id] ?? null}
              onClearTopic={() => setTopicsByModule((previous) => ({ ...previous, [activeModule.id]: null }))}
            />
          ) : null}

          {(tabsByModule[activeModule.id] ?? 'notes') === 'simulator' ? (
            <ModuleSimulator module={activeModule} theme={theme} />
          ) : null}

          {(tabsByModule[activeModule.id] ?? 'notes') === 'flashcards' ? (
            <div className="space-y-3.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/[0.09] px-2 py-0.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <Trophy className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                  Mastered{' '}
                  {
                    activeModule.flashcards.filter((card) => {
                      const rating = cardRatings[card.id]?.rating;
                      return rating === 'good' || rating === 'easy';
                    }).length
                  }
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/25 bg-amber-500/[0.09] px-2 py-0.5 text-[9px] font-semibold text-amber-700 dark:text-amber-300">
                  <Clock3 className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                  Needs review{' '}
                  {activeModule.flashcards.filter((card) => cardRatings[card.id]?.rating === 'again').length}
                </span>
                <span className="ml-auto text-[9px] text-slate-400">Saved locally · conceptual-obgyn:studio-v1</span>
              </div>

              <FlashcardDeck module={activeModule} theme={theme} />

              <div className="border-t border-slate-900/[0.06] pt-3 dark:border-white/[0.06]">
                <McqRail module={activeModule} theme={theme} variant="inline" />
              </div>
            </div>
          ) : null}
        </motion.div>

        {/* Footer pagination */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-900/[0.06] pt-4 dark:border-white/[0.06]">
          <button
            type="button"
            onClick={backToModules}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-all hover:bg-slate-200 dark:bg-white/[0.08] dark:text-slate-200 dark:hover:bg-white/[0.14]"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Back to Modules
          </button>

          {(() => {
            const index = modules.findIndex((module) => module.id === activeModule.id);
            const next = index >= 0 ? (modules[index + 1] ?? null) : null;
            if (!next) {
              return (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-900/[0.06] bg-white/50 px-3 py-1.5 text-[10px] font-medium text-slate-400 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-500">
                  You are at the last module
                </span>
              );
            }
            return (
              <button
                type="button"
                onClick={() => goToModule(next.id)}
                className={cn(
                  'inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors',
                  theme.border,
                  theme.tint,
                  theme.text,
                )}
              >
                Next Module: <span className="hidden sm:inline">{next.title}</span>
                <span className="sm:hidden">{next.shortTitle}</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
              </button>
            );
          })()}
        </div>
      </main>
    </motion.div>
  ) : (
    <motion.div
      key="directory"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Navbar />
      <main className="relative mx-auto max-w-6xl px-3 pb-14 pt-24 sm:px-5 sm:pt-28 lg:px-8">
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
              <ProgressRing value={overallProgress} size={44} strokeWidth={3.25} colorClassName={theme.ring}>
                <span className="text-[9.5px] font-bold tabular-nums">{Math.round(overallProgress * 100)}%</span>
              </ProgressRing>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">Track completion</p>
                <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                  {modules.length} {modules.length === 1 ? 'module' : 'modules'} · {totalCards} cards · {totalMinutes}{' '}
                  min
                </p>
                <p className="mt-0.5 text-[9px] text-slate-400 dark:text-slate-500">{totalMcqs} high-yield MCQs</p>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...withFilterTween({ type: 'spring', stiffness: 250, damping: 28 }), delay: 0.05 }}
          className="glass-card glass-card-rigid mt-5 rounded-[26px]"
          aria-label={`${theme.label} module directory`}
        >
          <div className={cn('h-1 w-full rounded-t-[26px] bg-gradient-to-r', theme.gradient)} aria-hidden="true" />

          <div className="border-b border-slate-900/[0.06] px-4 pb-3.5 pt-4 dark:border-white/[0.06] sm:px-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="eyebrow text-[9.5px] tracking-[0.2em]">Module Directory</p>
                <h2 className="mt-1 text-[16px] font-semibold tracking-tight text-slate-900 dark:text-white">
                  High-Yield Map
                </h2>
                <p className="mt-1 text-[10.5px] text-slate-500 dark:text-slate-400">
                  Open a module to enter its dedicated study page.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden rounded-full border border-slate-900/[0.06] bg-white/60 px-2.5 py-1 text-[9.5px] font-semibold text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-300 sm:inline-flex">
                  {filtered.length} / {modules.length} shown
                </span>
                <ProgressRing value={overallProgress} size={42} strokeWidth={3.5} colorClassName={theme.ring}>
                  <span className="text-[9.5px] font-bold tabular-nums">{Math.round(overallProgress * 100)}%</span>
                </ProgressRing>
              </div>
            </div>

            <div className="relative mt-3">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Filter modules, topics…"
                aria-label="Filter modules"
                className="h-9 w-full rounded-xl border border-slate-900/[0.07] bg-white/70 pl-9 pr-3 text-[12px] text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:outline-none dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-white/20 dark:focus:bg-white/[0.08]"
              />
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-1">
              <span className="mr-0.5 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">Try</span>
              {searchSuggestions.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => pickSuggestion(term)}
                  className={cn(
                    'rounded-full border px-2 py-0.5 text-[9px] font-medium transition-colors',
                    search.toLowerCase() === term.toLowerCase()
                      ? cn(theme.border, theme.tint, theme.text)
                      : 'border-slate-900/[0.06] bg-white/55 text-slate-500 hover:text-slate-800 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-white',
                  )}
                >
                  {term}
                </button>
              ))}
              {search.trim() ? (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="ml-auto rounded-full px-2 py-0.5 text-[9px] font-medium text-slate-400 transition-colors hover:text-slate-700 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              ) : null}
            </div>
          </div>

          <div className="space-y-2 p-2 sm:p-3">
            {filtered.length === 0 ? (
              <div className="px-3 py-10 text-center">
                <p className="text-[12px] font-medium text-slate-600 dark:text-slate-300">
                  No module matches “{search}”.
                </p>
                <p className="mt-1 text-[11px] text-slate-400">Try a topic, guideline name or Doppler term.</p>
              </div>
            ) : (
              filtered.map((module) => {
                const progress = progressFor(module);
                const number = moduleNumberOf(modules, module.id);
                return (
                  <article
                    key={module.id}
                    className="rounded-2xl border border-slate-900/[0.06] bg-white/35 transition-colors duration-200 hover:border-slate-900/[0.12] dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-white/[0.14]"
                  >
                    <button
                      type="button"
                      onClick={() => openStudy(module.id)}
                      className="group flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left sm:px-4"
                    >
                      <span
                        className={cn(
                          'relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-[11px] font-bold text-white shadow-sm',
                          theme.gradient,
                        )}
                        aria-hidden="true"
                      >
                        {number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[12.5px] font-semibold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-[13.5px]">
                          <Highlight text={module.title} term={search} />
                        </h3>
                        <p className="mt-0.5 line-clamp-2 text-[10.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                          <Highlight text={module.tags.slice(0, 5).join(' · ')} term={search} />
                        </p>

                        <div className="mt-1.5 flex flex-wrap items-center gap-1">
                          {module.highYield ? (
                            <span className="inline-flex items-center gap-0.5 rounded-full border border-amber-500/20 bg-amber-500/[0.09] px-1.5 py-[2px] text-[9px] font-semibold text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300">
                              <span aria-hidden="true">🔥</span>
                              {module.weightage}
                            </span>
                          ) : null}
                          <span className="inline-flex items-center gap-0.5 rounded-full border border-slate-900/[0.06] bg-white/60 px-1.5 py-[2px] text-[9px] font-medium text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.05] dark:text-slate-400">
                            <span aria-hidden="true">🕒</span>
                            {module.durationMinutes}m
                          </span>
                          <span className="hidden items-center gap-0.5 rounded-full border border-slate-900/[0.06] bg-white/60 px-1.5 py-[2px] text-[9px] font-medium text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.05] dark:text-slate-400 sm:inline-flex">
                            <Layers3 className="h-2.5 w-2.5" strokeWidth={1.8} aria-hidden="true" />
                            {module.flashcards.length} cards
                          </span>
                          <span className="hidden items-center gap-0.5 rounded-full border border-slate-900/[0.06] bg-white/60 px-1.5 py-[2px] text-[9px] font-medium text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.05] dark:text-slate-400 sm:inline-flex">
                            <Target className="h-2.5 w-2.5" strokeWidth={1.8} aria-hidden="true" />
                            {module.mcqs.length} MCQs
                          </span>
                        </div>
                      </div>

                      <span className="flex shrink-0 items-center gap-2">
                        <ProgressRing
                          value={progress}
                          size={34}
                          strokeWidth={2.75}
                          colorClassName={theme.ring}
                          className="hidden sm:inline-grid"
                        >
                          <span className="text-[9px] font-bold tabular-nums">{Math.round(progress * 100)}%</span>
                        </ProgressRing>
                        <span
                          className={cn(
                            'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold transition-colors',
                            theme.border,
                            theme.tint,
                            theme.text,
                          )}
                        >
                          <span className="hidden sm:inline">Explore Module</span>
                          <span className="sm:hidden">Explore</span>
                          <ArrowRight className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
                        </span>
                      </span>
                    </button>
                  </article>
                );
              })
            )}
          </div>

          <div className="border-t border-slate-900/[0.06] px-4 py-3 dark:border-white/[0.06] sm:px-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                <Sparkles className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                Module directory
              </p>
              <p className="text-[9.5px] font-medium text-slate-500 dark:text-slate-400">
                {modules.length} {modules.length === 1 ? 'module' : 'modules'} · {totalCards} flashcards · {totalMcqs}{' '}
                MCQs · {totalMinutes} study minutes
              </p>
            </div>
            <p className="mt-1 flex flex-wrap items-center gap-1 text-[9px] text-slate-400 dark:text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Signal className="h-2.5 w-2.5" aria-hidden="true" />
                {source === 'live' ? 'Live index synced' : 'Curated · offline ready'}
              </span>
              <span aria-hidden="true">·</span>
              <span>Progress autosaves on this device</span>
            </p>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}

export default TrackModuleDirectoryPage;
