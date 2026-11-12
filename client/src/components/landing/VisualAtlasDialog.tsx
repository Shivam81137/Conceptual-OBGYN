import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import {
  ATLAS_CATEGORIES,
  ATLAS_DIAGRAMS,
  type AtlasCategory,
} from '@/data/visualAtlas';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';

type AtlasFilter = 'All' | AtlasCategory;

const FILTERS: readonly AtlasFilter[] = ['All', ...ATLAS_CATEGORIES];

const TRACK_STYLES: Record<string, string> = {
  UG: 'border-sky-500/20 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300',
  PG: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300',
  'UG · PG':
    'border-teal-500/20 bg-teal-500/10 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300',
};

interface VisualAtlasDialogProps {
  open: boolean;
  onClose: () => void;
}

/**
 * VisualAtlasDialog
 * ---------------------------------------------------------------------------
 * A full-screen, scrollable atlas of curated OBGYN schematics. Opens from the
 * landing Visual Atlas card. Escape and the backdrop close it, and the page
 * behind is scroll-locked while it is open.
 */
export function VisualAtlasDialog({ open, onClose }: VisualAtlasDialogProps): JSX.Element | null {
  const reduceMotion = usePrefersReducedMotion();
  const [filter, setFilter] = useState<AtlasFilter>('All');

  const plates = useMemo(
    () => (filter === 'All' ? ATLAS_DIAGRAMS : ATLAS_DIAGRAMS.filter((plate) => plate.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

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
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-slate-900/25 backdrop-blur-sm dark:bg-black/50"
            onClick={onClose}
          />

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
            <div className="sticky top-0 z-10 flex items-start justify-between gap-3 rounded-t-3xl border-b border-slate-900/[0.06] bg-white/85 px-4 py-3.5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-slate-950/80 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#00796B] dark:text-[#80CBC4]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00897B]" aria-hidden="true" />
                  VISUAL ATLAS
                </span>
                <h2
                  id="visual-atlas-title"
                  className="mt-0.5 truncate font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl"
                >
                  High-yield OBGYN schematics
                </h2>
                <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {ATLAS_DIAGRAMS.length} plates · anatomy, physiology, labour, obstetrics & oncology
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

            {/* Category filters */}
            <div className="flex gap-1.5 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-5 [&::-webkit-scrollbar]:hidden">
              {FILTERS.map((entry) => {
                const active = filter === entry;
                return (
                  <button
                    key={entry}
                    type="button"
                    onClick={() => setFilter(entry)}
                    aria-pressed={active}
                    className={cn(
                      'shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00897B]/40',
                      active
                        ? 'border-transparent bg-[#00897B] text-white shadow-sm'
                        : 'border-slate-200/80 bg-white/60 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/[0.10] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white',
                    )}
                  >
                    {entry}
                  </button>
                );
              })}
            </div>

            {/* Plates */}
            <div className="grid gap-4 px-4 pb-5 sm:px-5 md:grid-cols-2">
              {plates.map((plate) => (
                <article
                  key={plate.id}
                  className="flex flex-col rounded-2xl border border-slate-900/[0.07] bg-white/70 p-3.5 dark:border-white/[0.09] dark:bg-white/[0.035]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                      {plate.category}
                    </span>
                    <span
                      className={cn(
                        'rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.08em]',
                        TRACK_STYLES[plate.track],
                      )}
                    >
                      {plate.track}
                    </span>
                  </div>

                  <div className="mt-2.5 rounded-xl border border-slate-900/[0.05] bg-slate-50/80 p-2 text-slate-700 dark:border-white/[0.06] dark:bg-slate-900/40 dark:text-slate-200">
                    <div className="aspect-[8/5] w-full">
                      <plate.Diagram />
                    </div>
                  </div>

                  <h3 className="mt-3 text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                    {plate.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {plate.caption}
                  </p>

                  <ul className="mt-2.5 space-y-1.5">
                    {plate.keyPoints.map((point) => (
                      <li key={point} className="flex gap-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                        <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#00897B]" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="rounded-b-3xl border-t border-slate-900/[0.06] px-4 py-3 text-center font-mono text-[10px] tracking-[0.06em] text-slate-400 dark:border-white/[0.08] dark:text-slate-500 sm:px-5">
              Schematic teaching plates · not a substitute for clinical guidelines
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

export default VisualAtlasDialog;
