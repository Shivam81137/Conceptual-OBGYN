import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, EyeOff, Maximize2, Search, Shuffle, Star, X } from 'lucide-react';
import { ALL_ATLAS_PLATES, ATLAS_CATEGORIES } from '@/data/content/atlasPlates';
import type { AtlasCategory, AtlasDiagram } from '@/data/content/visualAtlas';
import { useAtlasStars } from '@/hooks/useAtlasStars';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';

type AtlasFilter = 'All' | 'Starred' | AtlasCategory;

const FILTERS: readonly AtlasFilter[] = ['All', 'Starred', ...ATLAS_CATEGORIES];

const TRACK_STYLES: Record<string, string> = {
  UG: 'border-sky-500/20 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300',
  PG: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300',
  'UG · PG':
    'border-teal-500/20 bg-teal-500/10 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300',
};

interface VisualAtlasDialogProps {
  open: boolean;
  onClose: () => void;
  /** Plate to scroll to and highlight on open (e.g. the plate of the day). */
  focusPlateId?: string | null;
}

const chipClass = (active: boolean): string =>
  cn(
    'shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]/40',
    active
      ? 'border-transparent bg-[#00897B] text-white shadow-sm'
      : 'border-slate-200/80 bg-white/60 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/[0.10] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white',
  );

/**
 * VisualAtlasDialog
 * ---------------------------------------------------------------------------
 * Full-screen atlas of high-yield OBGYN schematics, now with search, starred
 * plates, a recall ("quiz") mode that hides the key points until tapped, a
 * shuffle button, and a full-size viewer with ←/→ navigation. Everything is
 * inline SVG and local state — no extra requests.
 */
export function VisualAtlasDialog({ open, onClose, focusPlateId = null }: VisualAtlasDialogProps): JSX.Element | null {
  const reduceMotion = usePrefersReducedMotion();
  const { stars, toggle } = useAtlasStars();
  const [filter, setFilter] = useState<AtlasFilter>('All');
  const [query, setQuery] = useState('');
  const [recall, setRecall] = useState(false);
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(new Set());
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [viewerId, setViewerId] = useState<string | null>(null);

  const plates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_ATLAS_PLATES.filter((plate) => {
      if (filter === 'Starred' && !stars.has(plate.id)) return false;
      if (filter !== 'All' && filter !== 'Starred' && plate.category !== filter) return false;
      if (q.length === 0) return true;
      return [plate.title, plate.caption, plate.category, ...plate.keyPoints].join(' ').toLowerCase().includes(q);
    });
  }, [filter, query, stars]);

  const viewerIndex = viewerId ? plates.findIndex((plate) => plate.id === viewerId) : -1;
  const viewerPlate: AtlasDiagram | null = viewerIndex >= 0 ? (plates[viewerIndex] as AtlasDiagram) : null;

  const stepViewer = useCallback(
    (direction: 1 | -1) => {
      if (plates.length === 0 || viewerIndex < 0) return;
      const next = plates[(viewerIndex + direction + plates.length) % plates.length] as AtlasDiagram;
      setViewerId(next.id);
    },
    [plates, viewerIndex],
  );

  const scrollToPlate = useCallback((id: string) => {
    setHighlightId(id);
    window.requestAnimationFrame(() => {
      document.getElementById(`atlas-plate-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    window.setTimeout(() => setHighlightId((current) => (current === id ? null : current)), 2200);
  }, []);

  const shuffle = (): void => {
    const pool = plates.length > 0 ? plates : ALL_ATLAS_PLATES;
    const pick = pool[Math.floor(Math.random() * pool.length)] as AtlasDiagram;
    if (plates.length === 0) setFilter('All');
    scrollToPlate(pick.id);
  };

  /* Reset transient UI each time the atlas opens; honour a requested plate. */
  useEffect(() => {
    if (!open) return;
    setFilter('All');
    setQuery('');
    setRecall(false);
    setRevealed(new Set());
    setViewerId(null);
    if (focusPlateId) window.setTimeout(() => scrollToPlate(focusPlateId), 350);
  }, [open, focusPlateId, scrollToPlate]);

  /* Escape closes the viewer first, then the atlas; arrows page the viewer. */
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        if (viewerId) setViewerId(null);
        else onClose();
      } else if (viewerId && event.key === 'ArrowRight') stepViewer(1);
      else if (viewerId && event.key === 'ArrowLeft') stepViewer(-1);
    };
    window.addEventListener('keydown', onKeyDown, { capture: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true });
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, viewerId, stepViewer]);

  const reveal = (id: string): void => setRevealed((previous) => new Set(previous).add(id));

  if (typeof document === 'undefined') return null;

  const renderPoints = (plate: AtlasDiagram): JSX.Element => {
    const hidden = recall && !revealed.has(plate.id);
    return (
      <div className="relative mt-2.5">
        <ul className={cn('space-y-1.5 transition-[filter] duration-200', hidden && 'select-none blur-[6px]')} aria-hidden={hidden}>
          {plate.keyPoints.map((point) => (
            <li key={point} className="flex gap-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#00897B]" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {hidden ? (
          <button
            type="button"
            onClick={() => reveal(plate.id)}
            className="absolute inset-0 grid place-items-center rounded-lg text-[11px] font-semibold text-[#00796B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]/50 dark:text-[#80CBC4]"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00897B]/25 bg-white/90 px-3 py-1 shadow-sm dark:bg-slate-900/90">
              <Eye className="h-3.5 w-3.5" aria-hidden="true" /> Recall it, then tap to check
            </span>
          </button>
        ) : null}
      </div>
    );
  };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain px-2 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-4 sm:pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div aria-hidden="true" className="fixed inset-0 bg-slate-900/25 backdrop-blur-sm dark:bg-black/50" onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="visual-atlas-title"
            initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.985, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 26 })}
            className="glass-card relative mx-auto w-full max-w-5xl rounded-3xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 rounded-t-3xl border-b border-slate-900/[0.06] bg-white/85 px-4 py-3.5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-slate-950/80 sm:px-5 sm:py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#00796B] dark:text-[#80CBC4]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00897B]" aria-hidden="true" />
                    VISUAL ATLAS
                  </span>
                  <h2 id="visual-atlas-title" className="mt-0.5 truncate font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                    High-yield OBGYN schematics
                  </h2>
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    {ALL_ATLAS_PLATES.length} plates · {stars.size} starred · search, quiz yourself, shuffle
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close visual atlas"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200/80 bg-white/70 text-slate-500 transition-all duration-150 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]/40 dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white"
                >
                  <X className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <label className="relative min-w-[10rem] flex-1">
                  <span className="sr-only">Search plates</span>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search plates, e.g. MgSO4, Bishop…"
                    className="h-9 w-full rounded-full border border-slate-200/80 bg-white/70 pl-8 pr-3 text-xs text-slate-700 placeholder:text-slate-400 focus:border-[#00897B]/50 focus:outline-none focus:ring-2 focus:ring-[#00897B]/25 dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-100"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setRecall((value) => !value);
                    setRevealed(new Set());
                  }}
                  aria-pressed={recall}
                  className={cn(chipClass(recall), 'inline-flex items-center gap-1.5')}
                >
                  {recall ? <EyeOff className="h-3.5 w-3.5" aria-hidden="true" /> : <Eye className="h-3.5 w-3.5" aria-hidden="true" />}
                  Quiz mode
                </button>
                <button type="button" onClick={shuffle} className={cn(chipClass(false), 'inline-flex items-center gap-1.5')}>
                  <Shuffle className="h-3.5 w-3.5" aria-hidden="true" /> Surprise me
                </button>
              </div>

              <div className="-mx-1 mt-2.5 flex gap-1.5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FILTERS.map((entry) => (
                  <button key={entry} type="button" onClick={() => setFilter(entry)} aria-pressed={filter === entry} className={chipClass(filter === entry)}>
                    {entry === 'Starred' ? (
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" aria-hidden="true" /> Starred
                      </span>
                    ) : (
                      entry
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Plates */}
            {plates.length === 0 ? (
              <p className="px-5 py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                {filter === 'Starred' && query.trim() === ''
                  ? 'No starred plates yet — tap the ☆ on any plate to keep it handy.'
                  : 'No plates match that search.'}
              </p>
            ) : (
              <div className="grid gap-4 px-4 py-4 sm:px-5 md:grid-cols-2">
                {plates.map((plate) => (
                  <article
                    key={plate.id}
                    id={`atlas-plate-${plate.id}`}
                    className={cn(
                      'flex flex-col rounded-2xl border bg-white/70 p-3.5 transition-shadow duration-300 dark:bg-white/[0.035]',
                      highlightId === plate.id
                        ? 'border-[#00897B]/60 shadow-[0_0_0_3px_rgba(0,137,123,0.25)]'
                        : 'border-slate-900/[0.07] dark:border-white/[0.09]',
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">{plate.category}</span>
                      <div className="flex items-center gap-1.5">
                        <span className={cn('rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.08em]', TRACK_STYLES[plate.track])}>{plate.track}</span>
                        <button
                          type="button"
                          onClick={() => toggle(plate.id)}
                          aria-pressed={stars.has(plate.id)}
                          aria-label={stars.has(plate.id) ? `Unstar ${plate.title}` : `Star ${plate.title}`}
                          className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition-colors hover:bg-amber-500/10 hover:text-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]/40"
                        >
                          <Star className={cn('h-3.5 w-3.5', stars.has(plate.id) && 'fill-amber-400 text-amber-500')} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewerId(plate.id)}
                          aria-label={`Open ${plate.title} full size`}
                          className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-900/[0.06] hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]/40 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setViewerId(plate.id)}
                      aria-label={`View ${plate.title}`}
                      className="mt-2.5 rounded-xl border border-slate-900/[0.05] bg-slate-50/80 p-2 text-left text-slate-700 transition-colors hover:border-[#00897B]/30 dark:border-white/[0.06] dark:bg-slate-900/40 dark:text-slate-200"
                    >
                      <div className="aspect-[8/5] w-full">
                        <plate.Diagram />
                      </div>
                    </button>

                    <h3 className="mt-3 text-sm font-bold tracking-tight text-slate-900 dark:text-white">{plate.title}</h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">{plate.caption}</p>
                    {renderPoints(plate)}
                  </article>
                ))}
              </div>
            )}

            <div className="rounded-b-3xl border-t border-slate-900/[0.06] px-4 py-3 text-center font-mono text-[10px] tracking-[0.06em] text-slate-400 dark:border-white/[0.08] dark:text-slate-500 sm:px-5">
              Schematic teaching plates · not a substitute for clinical guidelines
            </div>
          </motion.div>

          {/* Full-size viewer */}
          <AnimatePresence>
            {viewerPlate ? (
              <motion.div
                key="viewer"
                className="fixed inset-0 z-[60] grid place-items-center bg-slate-900/60 p-3 backdrop-blur-sm sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setViewerId(null)}
              >
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label={viewerPlate.title}
                  onClick={(event) => event.stopPropagation()}
                  className="glass-card relative flex max-h-full w-full max-w-3xl flex-col overflow-y-auto rounded-3xl p-4 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="min-w-0 truncate font-display text-base font-bold text-slate-900 dark:text-white sm:text-lg">{viewerPlate.title}</h3>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => toggle(viewerPlate.id)}
                        aria-pressed={stars.has(viewerPlate.id)}
                        aria-label="Star this plate"
                        className="grid h-9 w-9 place-items-center rounded-full border border-slate-200/80 bg-white/70 text-slate-500 hover:text-amber-500 dark:border-white/[0.10] dark:bg-white/[0.06]"
                      >
                        <Star className={cn('h-4 w-4', stars.has(viewerPlate.id) && 'fill-amber-400 text-amber-500')} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewerId(null)}
                        aria-label="Close viewer"
                        className="grid h-9 w-9 place-items-center rounded-full border border-slate-200/80 bg-white/70 text-slate-500 hover:text-slate-900 dark:border-white/[0.10] dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="relative mt-3 rounded-2xl border border-slate-900/[0.05] bg-slate-50/80 p-3 text-slate-700 dark:border-white/[0.06] dark:bg-slate-900/40 dark:text-slate-200">
                    <div className="aspect-[8/5] w-full">
                      <viewerPlate.Diagram />
                    </div>
                    {plates.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={() => stepViewer(-1)}
                          aria-label="Previous plate"
                          className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-sm hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
                        >
                          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => stepViewer(1)}
                          aria-label="Next plate"
                          className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200/80 bg-white/90 text-slate-600 shadow-sm hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
                        >
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </>
                    ) : null}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{viewerPlate.caption}</p>
                  {renderPoints(viewerPlate)}
                  <p className="mt-3 text-center font-mono text-[10px] text-slate-400">
                    {viewerIndex + 1} / {plates.length} · ← → to browse · Esc to close
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

export default VisualAtlasDialog;
