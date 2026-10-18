import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bookmark, CornerDownLeft, Trash2 } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useRecallStore, type SavedPearl } from '@/store/useRecallStore';
import { navigate } from '@/lib/router';
import { withFilterTween } from '@/lib/motion';
import type { TrackId } from '@/types/tracks';

interface RecallSuggestion {
  label: string;
  hint: string;
  track: TrackId;
}

/** The three curated instant tags, plus nothing else. */
const SUGGESTIONS: readonly RecallSuggestion[] = [
  { label: 'MgSO4 Toxicity', hint: 'Reflexes → respiration · calcium gluconate', track: 'NEET_PG' },
  { label: 'FIGO Cervical Staging', hint: 'IB1 → IIIC1 · parametrium, nodes', track: 'NEET_PG' },
  { label: 'Ovulation Curve', hint: 'LH surge 36h before ovulation', track: 'NEET_UG' },
];

type RecallItem = { kind: 'pearl'; pearl: SavedPearl } | { kind: 'suggestion'; suggestion: RecallSuggestion };

/**
 * QuickRecallModal
 * ---------------------------------------------------------------------------
 * Google Spotlight-style ⌘K palette. Opens from the navbar pill or
 * Cmd/Ctrl + K and searches two sources: the curated instant tags and every
 * pearl saved from the AI studio (persisted in localStorage). Selecting a
 * saved pearl hands it back to the studio card, which expands it in the glass
 * drawer so the student lands directly inside the full answer. Escape is
 * captured before the page shortcuts so closing the palette never navigates
 * away.
 */
export function QuickRecallModal(): JSX.Element {
  const open = useAppStore((state) => state.commandOpen);
  const setOpen = useAppStore((state) => state.setCommandOpen);
  const pearls = useRecallStore((state) => state.pearls);
  const removePearl = useRecallStore((state) => state.removePearl);
  const setRevealPearl = useRecallStore((state) => state.setRevealPearl);
  const [query, setQuery] = useState('');

  /* Global ⌘K / Ctrl+K toggle. */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        const state = useAppStore.getState();
        state.setCommandOpen(!state.commandOpen);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  /* While open: Escape closes first (captured), query resets, body scroll locks. */
  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown, { capture: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true });
      document.body.style.overflow = previousOverflow;
    };
  }, [open, setOpen]);

  const visibleSaved = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = pearls.filter(
      (pearl) =>
        pearl.text.toLowerCase().includes(q) ||
        pearl.query.toLowerCase().includes(q) ||
        (pearl.sourceTag?.toLowerCase().includes(q) ?? false),
    );
    /* Idle state stays quiet: the six freshest pearls, then the curated tags. */
    return q.length === 0 ? matches.slice(0, 6) : matches.slice(0, 8);
  }, [pearls, query]);

  const visibleSuggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return SUGGESTIONS;
    return SUGGESTIONS.filter(
      (suggestion) =>
        suggestion.label.toLowerCase().includes(q) || suggestion.hint.toLowerCase().includes(q),
    );
  }, [query]);

  const visibleItems = useMemo<RecallItem[]>(
    () => [
      ...visibleSaved.map((pearl) => ({ kind: 'pearl' as const, pearl })),
      ...visibleSuggestions.map((suggestion) => ({ kind: 'suggestion' as const, suggestion })),
    ],
    [visibleSaved, visibleSuggestions],
  );

  const choose = (item: RecallItem): void => {
    setOpen(false);
    if (item.kind === 'suggestion') {
      navigate(item.suggestion.track === 'NEET_UG' ? '/track/ug' : '/track/pg');
      return;
    }
    /* Hand the pearl to the studio card, which expands it in the glass drawer. */
    setRevealPearl(item.pearl);
    navigate('/');
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[16vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Quick recall"
            initial={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24 })}
            className="glass-capsule relative w-full max-w-lg rounded-3xl p-2"
            onKeyDown={(event) => {
              if (event.key === 'Enter' && visibleItems[0]) choose(visibleItems[0]);
            }}
          >
            <div className="flex items-center gap-2.5 px-3 pb-2 pt-2.5">
              <svg className="h-4 w-4 shrink-0 text-[#4285F4]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pearls, 'MgSO4 toxicity', 'FIGO'…"
                aria-label="Search recall topics"
                className="h-8 w-full flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
              <kbd className="kbd">ESC</kbd>
            </div>

            <div className="mx-2 h-px bg-white/70 dark:bg-white/10" />

            <ul className="max-h-[330px] overflow-y-auto overscroll-contain p-2">
              {visibleSaved.length > 0 ? (
                <li aria-hidden="true" className="flex items-center gap-1.5 px-3 pb-1 pt-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  <Bookmark className="h-3 w-3" strokeWidth={2} />
                  Saved pearls
                </li>
              ) : null}
              {visibleSaved.map((pearl) => (
                <li key={pearl.id}>
                  <div className="group flex w-full items-center gap-2.5 rounded-2xl px-3 py-2.5 transition-colors duration-150 hover:bg-white/70 dark:hover:bg-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => choose({ kind: 'pearl', pearl })}
                      className="min-w-0 flex-1 text-left"
                    >
                      <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                        {pearl.query || pearl.text}
                      </span>
                      <span className="block truncate text-xs text-slate-400">{pearl.text}</span>
                    </button>
                    <span className="chip-glass shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                      {pearl.track === 'NEET_UG' ? 'UG' : 'PG'}
                    </span>
                    <button
                      type="button"
                      aria-label="Remove saved pearl"
                      onClick={() => removePearl(pearl.id)}
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-slate-300 transition-colors duration-150 hover:bg-rose-500/10 hover:text-rose-500 dark:text-slate-600 dark:hover:text-rose-400"
                    >
                      <Trash2 className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}

              {visibleSuggestions.length > 0 ? (
                <li aria-hidden="true" className="px-3 pb-1 pt-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  Curated tags
                </li>
              ) : null}
              {visibleSuggestions.map((suggestion) => (
                <li key={suggestion.label}>
                  <button
                    type="button"
                    onClick={() => choose({ kind: 'suggestion', suggestion })}
                    className="flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-white/70 dark:hover:bg-white/[0.06]"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                        {suggestion.label}
                      </span>
                      <span className="block truncate text-xs text-slate-400">{suggestion.hint}</span>
                    </span>
                    <span className="chip-glass shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                      {suggestion.track === 'NEET_UG' ? 'UG' : 'PG'}
                    </span>
                  </button>
                </li>
              ))}

              {visibleItems.length === 0 ? (
                <li className="px-3 py-5 text-center text-sm text-slate-400">
                  No instant match — try another term.
                </li>
              ) : null}
            </ul>

            <div className="flex items-center justify-between px-4 pb-2 pt-0.5 font-mono text-[10px] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CornerDownLeft className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" /> open
              </span>
              <span>
                {pearls.length} saved · {SUGGESTIONS.length} curated tags
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default QuickRecallModal;
