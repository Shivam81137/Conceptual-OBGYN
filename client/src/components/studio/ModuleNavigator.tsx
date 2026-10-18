import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock3, Flame, Search, Signal, Sparkles } from 'lucide-react';
import { ProgressRing } from '@/components/studio/StudioBits';
import { cn } from '@/lib/utils';
import type { StudioModule, StudioTrackTheme } from '@/data/revisionStudio';
import type { StudioIndexSource } from '@/api/useStudioModules';

interface ModuleNavigatorProps {
  theme: StudioTrackTheme;
  modules: readonly StudioModule[];
  selectedId: string;
  onSelect: (moduleId: string) => void;
  progressFor: (module: StudioModule) => number;
  overallProgress: number;
  source: StudioIndexSource;
}

/**
 * Pane A — the high-yield module map.
 * Searchable, completion-ringed, and sticky on desktop so the canvas can be
 * read without ever losing the module list.
 */
export function ModuleNavigator({
  theme,
  modules,
  selectedId,
  onSelect,
  progressFor,
  overallProgress,
  source,
}: ModuleNavigatorProps): JSX.Element {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return modules;
    return modules.filter((module) =>
      [module.title, module.summary, module.weightage, ...module.tags]
        .join(' ')
        .toLowerCase()
        .includes(term),
    );
  }, [modules, search]);

  const cardCount = modules.reduce((total, module) => total + module.flashcards.length, 0);

  return (
    <aside className="glass-card flex flex-col overflow-hidden rounded-[26px] xl:sticky xl:top-24 xl:max-h-[calc(100dvh-7.5rem)]">
      <div className="border-b border-slate-900/[0.06] px-4 pb-3.5 pt-4 dark:border-white/[0.06]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow text-[9.5px] tracking-[0.2em]">Module Navigator</p>
            <h2 className="mt-1 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
              High-Yield Map
            </h2>
          </div>
          <ProgressRing value={overallProgress} size={42} strokeWidth={3.5} colorClassName={theme.ring}>
            <span className="text-[9.5px] font-bold tabular-nums">{Math.round(overallProgress * 100)}%</span>
          </ProgressRing>
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
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2.5">
        {filtered.length === 0 ? (
          <div className="px-3 py-8 text-center">
            <p className="text-[12px] font-medium text-slate-600 dark:text-slate-300">No module matches “{search}”.</p>
            <p className="mt-1 text-[11px] text-slate-400">Try “axis”, “labour” or “PCOS”.</p>
          </div>
        ) : (
          <ul className="space-y-1">
            {filtered.map((module) => {
              const index = modules.findIndex((entry) => entry.id === module.id);
              const isSelected = module.id === selectedId;
              const progress = progressFor(module);
              return (
                <li key={module.id}>
                  <motion.button
                    layout="position"
                    type="button"
                    onClick={() => onSelect(module.id)}
                    aria-current={isSelected ? 'true' : undefined}
                    className={cn(
                      'group relative flex w-full items-start gap-2.5 rounded-2xl px-2.5 py-2.5 text-left transition-colors duration-150',
                      isSelected
                        ? theme.tint
                        : 'hover:bg-slate-900/[0.035] dark:hover:bg-white/[0.045]',
                    )}
                  >
                    {isSelected ? (
                      <motion.span
                        layoutId="studioModuleRail"
                        className={cn('absolute inset-y-2 left-0 w-[3px] rounded-full bg-gradient-to-b', theme.gradient)}
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : null}

                    <ProgressRing
                      value={progress}
                      size={34}
                      strokeWidth={2.75}
                      colorClassName={theme.ring}
                      className="mt-0.5"
                    >
                      <span className="text-[9.5px] font-bold tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </ProgressRing>

                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          'line-clamp-2 text-[12.5px] font-semibold leading-snug tracking-tight',
                          isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200',
                        )}
                      >
                        {module.title}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-[10.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {module.tags.join(' · ')}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1">
                        {module.highYield ? (
                          <span className="inline-flex items-center gap-0.5 rounded-full border border-amber-500/20 bg-amber-500/[0.09] px-1.5 py-[2px] text-[9px] font-semibold text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300">
                            <Flame className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                            High Yield
                          </span>
                        ) : null}
                        <span className="inline-flex items-center gap-0.5 rounded-full border border-slate-900/[0.06] bg-white/60 px-1.5 py-[2px] text-[9px] font-medium text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.05] dark:text-slate-400">
                          <Clock3 className="h-2.5 w-2.5" strokeWidth={1.8} aria-hidden="true" />
                          {module.durationMinutes}m
                        </span>
                      </div>
                    </div>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="border-t border-slate-900/[0.06] px-4 py-2.5 dark:border-white/[0.06]">
        <div className="flex items-center justify-between gap-2 text-[9.5px] text-slate-400 dark:text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Signal className="h-2.5 w-2.5" aria-hidden="true" />
            {source === 'live' ? 'Live index synced' : 'Curated · offline ready'}
          </span>
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
            {modules.length} modules · {cardCount} cards
          </span>
        </div>
      </div>
    </aside>
  );
}
