import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Check,
  Clock3,
  GraduationCap,
  Layers3,
  RefreshCw,
  Search,
  Signal,
  Sparkles,
  Stethoscope,
  Trophy,
  X,
} from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { ConceptNotes } from '@/components/studio/ConceptNotes';
import { FlashcardDeck } from '@/components/studio/FlashcardDeck';
import { McqRail } from '@/components/studio/McqRail';
import { MenstrualCycleSimulator } from '@/components/studio/MenstrualCycleSimulator';
import { PartographSimulator } from '@/components/studio/PartographSimulator';
import { ProgressRing } from '@/components/studio/StudioBits';
import { useStudioModules } from '@/api/useStudioModules';
import { useAppStore } from '@/store/useAppStore';
import { useRecallStore } from '@/store/useRecallStore';
import { useStudioStore } from '@/store/useStudioStore';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { navigate } from '@/lib/router';
import { withFilterTween } from '@/lib/motion';
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

/** PG clinical vaults ship notes + active recall only — no simulator tab. */
const PG_TABS: readonly { id: StudioTabId; label: string; short: string; emoji: string }[] = TABS.filter(
  (entry) => entry.id !== 'simulator',
);

function tabsFor(trackId: TrackId): readonly { id: StudioTabId; label: string; short: string; emoji: string }[] {
  return trackId === 'NEET_PG' ? PG_TABS : TABS;
}

const PG_SEARCH_SUGGESTIONS = [
  'TORCH',
  'CMV',
  'Rubella',
  'Syphilis',
  'FGR',
  'Doppler',
  'Delphi',
  'AEDF',
  'REDF',
  'Ductus Venosus',
  'CPR',
  'PlGF',
  'Placenta Praevia',
  'FIGO PAS',
  'Lacunae',
] as const;

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
    ...(section.diagram ?? []).flatMap((diagram) => [diagram.title, diagram.caption ?? '']),
    ...(section.table?.head ?? []),
    ...(section.table?.rows.flat() ?? []),
  ]);
  const cardText = module.flashcards.flatMap((card) => [card.front, card.back]);
  const mcqText = module.mcqs.flatMap((mcq) => [mcq.stem, ...mcq.options, mcq.explanation]);
  return [
    module.title,
    module.shortTitle,
    module.summary,
    module.tagline ?? '',
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

/** Picks the right bespoke simulator for the UG modules, with an honest fallback. */
function ModuleSimulator({ module, theme }: { module: StudioModule; theme: StudioTrackTheme }): JSX.Element {
  if (module.id === 'ug-menstrual-axis') return <MenstrualCycleSimulator module={module} theme={theme} />;
  if (module.id === 'ug-lactation-parturition') return <PartographSimulator module={module} theme={theme} />;

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

/**
 * Honest index status. The curated corpus renders instantly, so the only real
 * wait is the background reconciliation with `/tracks/:track/modules` — this
 * pill reports exactly that, with a spinner while the request is in flight.
 */
function IndexStatus({
  isFetching,
  source,
}: {
  isFetching: boolean;
  source: 'live' | 'curated';
}): JSX.Element {
  if (isFetching) {
    return (
      <span
        role="status"
        aria-live="polite"
        className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/[0.07] px-2.5 py-[3px] text-[9.5px] font-semibold text-sky-700 dark:border-sky-400/25 dark:bg-sky-400/[0.08] dark:text-sky-300"
      >
        <RefreshCw className="h-2.5 w-2.5 animate-spin motion-reduce:animate-none" strokeWidth={2.4} aria-hidden="true" />
        Syncing index
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-[3px] text-[9.5px] font-semibold',
        source === 'live'
          ? 'border-emerald-500/25 bg-emerald-500/[0.07] text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/[0.08] dark:text-emerald-300'
          : 'border-amber-500/25 bg-amber-500/[0.07] text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/[0.08] dark:text-amber-300',
      )}
    >
      {source === 'live' ? (
        <Check className="h-2.5 w-2.5" strokeWidth={2.8} aria-hidden="true" />
      ) : (
        <Signal className="h-2.5 w-2.5" strokeWidth={2.2} aria-hidden="true" />
      )}
      {source === 'live' ? 'Index synced' : 'Offline ready'}
    </span>
  );
}

/** Cold-load placeholder. Only shown when the corpus itself is genuinely absent. */
function DirectorySkeleton(): JSX.Element {
  return (
    <div className="space-y-2 p-2.5 sm:space-y-2.5 sm:p-3.5" aria-hidden="true">
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="rounded-2xl border border-slate-900/[0.06] bg-white/40 p-3.5 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-4"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="skeleton h-10 w-10 shrink-0 rounded-xl" />
            <div className="min-w-0 flex-1 space-y-2">
              <span className="skeleton block h-3 w-2/3 rounded-full" />
              <span className="skeleton block h-2.5 w-full rounded-full" />
              <span className="skeleton block h-2.5 w-4/5 rounded-full" />
              <div className="flex gap-1.5 pt-0.5">
                <span className="skeleton h-4 w-16 rounded-md" />
                <span className="skeleton h-4 w-14 rounded-md" />
                <span className="skeleton h-4 w-14 rounded-md" />
              </div>
            </div>
            <span className="skeleton hidden h-8 w-20 shrink-0 rounded-full sm:block" />
          </div>
        </div>
      ))}
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
  const percent = Math.round(progress * 100);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-slate-900/85">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2.5 px-4 sm:h-16 sm:gap-4 sm:px-6">
        {/* Back */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to modules"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-slate-900/[0.08] bg-white/70 text-slate-600 transition-colors hover:border-slate-900/[0.14] hover:bg-white hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white sm:w-auto sm:px-3"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
          <span className="hidden text-[11px] font-medium sm:inline">Modules</span>
        </button>

        <span className="hidden h-6 w-px shrink-0 bg-slate-200 dark:bg-white/10 sm:block" aria-hidden="true" />

        {/* Title */}
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
            <span className="shrink-0">Module {number}</span>
            <span className="hidden truncate sm:inline">· {theme.eyebrow}</span>
          </p>
          <div className="flex min-w-0 items-baseline gap-2">
            <h1 className="truncate text-[13.5px] font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[15px]">
              {module.title}
            </h1>
            <span className="hidden shrink-0 text-[10px] font-medium text-slate-400 dark:text-slate-500 md:inline">
              {module.highYield ? `${module.weightage} · ` : ''}
              {module.durationMinutes} min
            </span>
          </div>
        </div>

        {/* Progress */}
        <span
          className="shrink-0"
          title={`${percent}% complete — progress autosaves on this device`}
          aria-label={`${percent}% of this module complete`}
          role="img"
        >
          <ProgressRing value={progress} size={34} strokeWidth={3} colorClassName={theme.ring}>
            <span className="text-[9px] font-bold tabular-nums">{percent}%</span>
          </ProgressRing>
        </span>
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
 * header + back navigation + tabbed workspace) with no inline accordion. Back
 * returns to the directory and restores the exact scroll position.
 */
export function TrackModuleDirectoryPage({ trackId }: TrackModuleDirectoryPageProps): JSX.Element {
  const theme = STUDIO_TRACK_THEME[trackId];
  const tabs = tabsFor(trackId);
  const { modules, source, isFetching } = useStudioModules(trackId);
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
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  /* Entering a studio track from the hub always lands at the top of the page. */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  /* Guard against a stale id after the module index reconciles. */
  useEffect(() => {
    if (activeModuleId && modules.length > 0 && !modules.some((module) => module.id === activeModuleId)) {
      setActiveModuleId(null);
    }
  }, [modules, activeModuleId]);

  /* "/" focuses the directory filter — the same gesture students use in ⌘K. */
  useEffect(() => {
    if (activeModuleId) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      event.preventDefault();
      searchInputRef.current?.focus();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeModuleId]);

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

      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-[calc(5rem_+_env(safe-area-inset-top))] sm:pt-[calc(6rem_+_env(safe-area-inset-top))]">
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
          className={cn(
            'relative mt-4 grid gap-0.5 rounded-2xl border border-slate-900/[0.07] bg-white/80 p-1 shadow-sm backdrop-blur-xl dark:border-white/[0.09] dark:bg-slate-950/80',
            tabs.length === 3 ? 'grid-cols-3' : 'grid-cols-2',
          )}
        >
          {tabs.map((entry) => {
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
      <main className="relative mx-auto max-w-6xl px-3 pb-14 pt-[calc(6rem_+_env(safe-area-inset-top))] sm:px-5 sm:pt-[calc(7rem_+_env(safe-area-inset-top))] lg:px-8">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 26 })}
          className="px-1"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900/[0.07] pb-3 dark:border-white/[0.08]">
            <button
              type="button"
              onClick={() => navigate('/')}
              aria-label="Back to hub"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/[0.07] bg-white/60 px-2.5 py-1 text-[10px] font-medium text-slate-600 shadow-sm transition-all duration-150 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/40 dark:border-white/[0.10] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
              <span className="hidden sm:inline">Back to Hub</span>
              <span className="sm:hidden">Hub</span>
            </button>
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
            <IndexStatus isFetching={isFetching} source={source} />
          </div>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <div className="min-w-0 max-w-2xl">
              <h1 className="flex items-start gap-2.5 text-[23px] font-semibold leading-[1.15] tracking-[-0.022em] text-slate-900 dark:text-white sm:text-[27px]">
                <span
                  className={cn(
                    'mt-[3px] h-[25px] w-[3px] shrink-0 rounded-full bg-gradient-to-b sm:h-[29px]',
                    theme.gradient,
                  )}
                  aria-hidden="true"
                />
                {theme.title}
              </h1>
              <p className="mt-2 max-w-xl pl-[13px] text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                {theme.subtitle}
              </p>
            </div>

            <div className="w-full shrink-0 rounded-2xl border border-slate-900/[0.07] bg-white/60 p-3.5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] lg:w-[300px]">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[8.5px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                  Track completion
                </p>
                <span className="text-[13px] font-bold tabular-nums text-slate-900 dark:text-white">
                  {Math.round(overallProgress * 100)}%
                </span>
              </div>
              <div
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-900/[0.06] dark:bg-white/[0.08]"
                role="presentation"
              >
                <div
                  className={cn('h-full rounded-full bg-gradient-to-r transition-[width] duration-500', theme.gradient)}
                  style={{ width: `${Math.round(overallProgress * 100)}%` }}
                />
              </div>
              <dl className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { label: 'Modules', value: modules.length },
                  { label: 'Cards', value: totalCards },
                  { label: 'MCQs', value: totalMcqs },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-900/[0.05] bg-white/50 px-2 py-1.5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <dt className="text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500">
                      {stat.label}
                    </dt>
                    <dd className="mt-0.5 text-[12.5px] font-semibold leading-none tabular-nums text-slate-900 dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2.5 text-[9px] font-medium text-slate-400 dark:text-slate-500">
                {totalMinutes} study minutes · autosaves on this device
              </p>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...withFilterTween({ type: 'spring', stiffness: 250, damping: 28 }), delay: 0.05 }}
          className="glass-card glass-card-rigid mt-5 overflow-hidden rounded-[26px]"
          aria-label={`${theme.label} module directory`}
        >
          <div className={cn('h-1 w-full bg-gradient-to-r', theme.gradient)} aria-hidden="true" />

          {/* ── Directory masthead ────────────────────────────────────────── */}
          <div className="border-b border-slate-900/[0.06] px-4 pb-4 pt-4 dark:border-white/[0.06] sm:px-6 sm:pb-5 sm:pt-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                <span
                  className={cn(
                    'grid h-10 w-10 shrink-0 place-items-center rounded-xl border bg-gradient-to-br text-white shadow-sm',
                    theme.border,
                    theme.gradient,
                  )}
                  aria-hidden="true"
                >
                  <Layers3 className="h-4 w-4" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-[9.5px] tracking-[0.2em]">Module Directory</p>
                  <h2 className="mt-0.5 text-[17px] font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">
                    High-Yield Map
                  </h2>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {trackId === 'NEET_PG'
                      ? 'Guideline-grade modules, sequenced for clinical revision.'
                      : 'NCERT foundations, sequenced for concept-first revision.'}
                  </p>
                </div>
              </div>

              <span
                aria-live="polite"
                aria-atomic="true"
                className="inline-flex items-center gap-1 rounded-full border border-slate-900/[0.07] bg-white/70 px-2.5 py-1 text-[9.5px] font-semibold text-slate-500 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-300"
              >
                <span className="tabular-nums text-slate-900 dark:text-white">{filtered.length}</span>
                <span className="text-slate-400" aria-hidden="true">
                  /
                </span>
                <span className="tabular-nums">{modules.length}</span>
                <span className="ml-0.5 font-medium text-slate-400">shown</span>
              </span>
            </div>

            <div className="relative mt-4">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <input
                ref={searchInputRef}
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search modules, topics, guidelines…"
                aria-label="Filter modules"
                className="h-10 w-full rounded-xl border border-slate-900/[0.07] bg-white/70 pl-9 pr-24 text-base text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/[0.04] sm:text-[12.5px] dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-white/20 dark:focus:bg-white/[0.08] dark:focus:ring-white/[0.06]"
              />
              {search.trim() ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    searchInputRef.current?.focus();
                  }}
                  className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-lg border border-slate-900/[0.06] bg-white/80 px-2 py-1 text-[9.5px] font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-slate-400 dark:hover:text-white"
                >
                  <X className="h-2.5 w-2.5" strokeWidth={2.4} aria-hidden="true" />
                  Clear
                </button>
              ) : (
                <span className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 items-center gap-1 sm:inline-flex">
                  <kbd className="kbd">/</kbd>
                  <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500">to filter</span>
                </span>
              )}
            </div>

            <div className="mt-2.5 flex items-center gap-2">
              <span className="shrink-0 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                Suggested
              </span>
              <div className="no-scrollbar -mx-0.5 flex flex-1 gap-1.5 overflow-x-auto px-0.5 py-0.5 sm:flex-wrap sm:overflow-visible">
                {searchSuggestions.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => pickSuggestion(term)}
                    aria-pressed={search.toLowerCase() === term.toLowerCase()}
                    className={cn(
                      'shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-medium transition-colors',
                      search.toLowerCase() === term.toLowerCase()
                        ? cn(theme.border, theme.tint, theme.text)
                        : 'border-slate-900/[0.06] bg-white/55 text-slate-500 hover:border-slate-900/[0.12] hover:text-slate-800 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-white',
                    )}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Honest background-sync line — only while the request is in flight. */}
          {isFetching ? (
            <div
              className="h-0.5 w-full overflow-hidden bg-sky-500/10 dark:bg-sky-400/10"
              role="status"
              aria-label="Syncing module index"
            >
              <div className="sync-indeterminate h-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400" />
            </div>
          ) : null}

          {modules.length === 0 ? (
            <DirectorySkeleton />
          ) : filtered.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-slate-900/[0.07] bg-white/60 text-slate-400 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-500">
                <Search className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="mt-3 text-[12.5px] font-semibold text-slate-700 dark:text-slate-200">
                No module matches “{search}”.
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Try a topic, guideline name or Doppler term.
              </p>
              <button
                type="button"
                onClick={() => setSearch('')}
                className="mt-3 inline-flex items-center gap-1 rounded-full border border-slate-900/[0.08] bg-white/70 px-3 py-1.5 text-[10.5px] font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="space-y-2 p-2.5 sm:space-y-2.5 sm:p-3.5">
              {filtered.map((module, index) => {
                const progress = progressFor(module);
                const percent = Math.round(progress * 100);
                const number = moduleNumberOf(modules, module.id);
                const topicTags = topicTagsFor(module);
                return (
                  <article
                    key={module.id}
                    className="module-row-in group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white transition-all duration-300 hover:border-slate-300/80 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-white/20 dark:hover:-translate-y-1 dark:hover:shadow-xl"
                    style={{ animationDelay: `${Math.min(index, 6) * 35}ms` }}
                  >

                    <button
                      type="button"
                      onClick={() => openStudy(module.id)}
                      aria-label={`Open ${module.title}`}
                      className="relative flex w-full items-start gap-3.5 p-4 text-left sm:gap-4 sm:p-5"
                    >
                      <span
                        className={cn(
                          'grid h-10 w-10 shrink-0 place-items-center rounded-lg',
                          theme.tint,
                          'text-[12px] font-bold',
                          theme.text,
                          'shadow-sm',
                        )}
                        aria-hidden="true"
                      >
                        {number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                          <h3 className="text-[13.5px] font-semibold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-[14.5px]">
                            <span className="sm:hidden">
                              <Highlight text={module.shortTitle} term={search} />
                            </span>
                            <span className="hidden sm:inline">
                              <Highlight text={module.title} term={search} />
                            </span>
                          </h3>
                          {module.highYield ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/60 bg-amber-50 px-2 py-[1px] text-[9px] font-semibold uppercase tracking-[0.04em] text-amber-700 dark:border-amber-900/20 dark:bg-amber-900/10 dark:text-amber-400">
                              {module.weightage}
                            </span>
                          ) : null}
                          {percent >= 100 ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/60 bg-emerald-50 px-2 py-[1px] text-[9px] font-semibold uppercase tracking-[0.04em] text-emerald-700 dark:border-emerald-900/20 dark:bg-emerald-900/10 dark:text-emerald-400">
                              <Check className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" />
                              Completed
                            </span>
                          ) : percent > 0 ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-sky-200/60 bg-sky-50 px-2 py-[1px] text-[9px] font-semibold uppercase tracking-[0.04em] text-sky-700 dark:border-sky-900/20 dark:bg-sky-900/10 dark:text-sky-400">
                              <span className="h-1 w-1 rounded-full bg-sky-500 dark:bg-sky-400" aria-hidden="true" />
                              In progress
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-2 line-clamp-2 sm:line-clamp-1 text-[11.5px] leading-snug text-slate-500 dark:text-slate-400">
                          <Highlight text={module.tagline ?? module.summary} term={search} />
                        </p>

                        {topicTags.length > 0 && (
                          <div className="mt-2.5 flex flex-wrap gap-1 sm:flex">
                            {topicTags
                              .slice(0, 3)
                              .map((tag, tagIndex) => (
                                <span
                                  key={tag}
                                  className={cn(
                                    'rounded-full border border-slate-200/50 bg-white px-2 py-[1.5px] text-[8.5px] font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300',
                                    tagIndex === 0 && cn(theme.border, theme.text),
                                  )}
                                >
                                  <Highlight text={tag} term={search} />
                                </span>
                              ))}
                            {topicTags.length > 3 && (
                              <span className="rounded-full border border-slate-200/50 bg-white px-2 py-[1.5px] text-[8.5px] font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300">
                                +{topicTags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        <div className="mt-3 flex items-center justify-between gap-3 min-w-0">
                          <div className="flex flex-1 items-center gap-2 min-w-0">
                            <div
                              className="h-1 w-full overflow-hidden rounded-full bg-slate-100/60 dark:bg-white/10"
                              role="presentation"
                            >
                              <div
                                className={cn(
                                  'h-full rounded-full transition-[width] duration-500',
                                  theme.text,
                                )}
                                style={{ width: `${percent}%` }}
                              />
                            </div>
                            <span className="w-8 shrink-0 text-right text-[9px] font-semibold tabular-nums text-slate-400 dark:text-slate-500">
                              {percent}%
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[9px] font-medium tabular-nums text-slate-400 dark:text-slate-500">
                            <Clock3 className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                            {module.durationMinutes} min
                            <span aria-hidden="true">·</span>
                            {module.flashcards.length} cards
                            <span aria-hidden="true">·</span>
                            {module.mcqs.length} MCQs
                          </span>
                        </div>
                      </div>

                      <span className="flex shrink-0 items-center self-center">
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-semibold transition-all duration-200',
                            'border-slate-200/60 bg-white text-slate-600 shadow-sm',
                            'dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300',
                            'group-hover:border-slate-300/80 group-hover:-translate-y-px group-hover:shadow-md',
                            percent > 0
                              ? cn(
                                  'border-emerald-200/60 bg-emerald-50 text-emerald-700',
                                  'dark:border-emerald-900/20 dark:bg-emerald-900/10 dark:text-emerald-400',
                                  'group-hover:border-emerald-300/60',
                                )
                              : cn(
                                  'border-indigo-200/60 bg-indigo-50 text-indigo-700',
                                  'dark:border-indigo-900/20 dark:bg-indigo-900/10 dark:text-indigo-400',
                                  'group-hover:border-indigo-300/60',
                                ),
                          )}
                        >
                          <span className="hidden sm:inline">{percent > 0 ? 'Continue' : 'Explore'}</span>
                          <ArrowRight
                            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>
          )}

          <div className="border-t border-slate-900/[0.06] bg-white/30 px-4 py-3 dark:border-white/[0.06] dark:bg-white/[0.02] sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
              <p className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold text-slate-500 dark:text-slate-400">
                <span
                  className={cn('h-1.5 w-1.5 rounded-full', source === 'live' ? 'bg-emerald-500' : 'bg-amber-500')}
                  aria-hidden="true"
                />
                {source === 'live' ? 'Live index synced' : 'Curated · offline ready'}
              </p>
              <p className="text-[9.5px] font-medium tabular-nums text-slate-400 dark:text-slate-500">
                {modules.length} {modules.length === 1 ? 'module' : 'modules'} · {totalCards} flashcards ·{' '}
                {totalMcqs} MCQs · {totalMinutes} study min
              </p>
            </div>
            <p className="mt-1 text-[9px] text-slate-400 dark:text-slate-500">
              Progress autosaves on this device — pick up exactly where you stopped.
            </p>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}

export default TrackModuleDirectoryPage;
