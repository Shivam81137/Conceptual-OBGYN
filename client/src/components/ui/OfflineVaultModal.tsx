import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Bookmark,
  BookmarkCheck,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  TriangleAlert,
  X,
} from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useRecallStore, type SavedPearl, type SavedPearlKind } from '@/store/useRecallStore';
import { navigate } from '@/lib/router';
import { withFilterTween } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { TrackId } from '@/types/tracks';

type TrackFilter = 'ALL' | TrackId;

const KIND_META: Record<
  SavedPearlKind,
  { label: string; iconWrap: string; badge: string }
> = {
  pearl: {
    label: 'Pearl',
    iconWrap: 'border-amber-500/20 bg-amber-500/10 text-amber-600 dark:border-amber-400/20 dark:text-amber-300',
    badge: 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:border-amber-400/20 dark:text-amber-300',
  },
  trap: {
    label: 'Examiner trap',
    iconWrap: 'border-rose-500/20 bg-rose-500/10 text-rose-600 dark:border-rose-400/20 dark:text-rose-300',
    badge: 'border-rose-500/20 bg-rose-500/10 text-rose-700 dark:border-rose-400/20 dark:text-rose-300',
  },
  summary: {
    label: 'Module summary',
    iconWrap: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:border-indigo-400/20 dark:text-indigo-300',
    badge: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400/20 dark:text-indigo-300',
  },
  ai: {
    label: 'AI answer',
    iconWrap: 'border-sky-500/20 bg-sky-500/10 text-sky-600 dark:border-sky-400/20 dark:text-sky-300',
    badge: 'border-sky-500/20 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:text-sky-300',
  },
};

const FILTERS: readonly { id: TrackFilter; label: string }[] = [
  { id: 'ALL', label: 'All' },
  { id: 'NEET_PG', label: 'PG' },
  { id: 'NEET_UG', label: 'UG' },
];

function KindGlyph({ kind }: { kind: SavedPearlKind }): JSX.Element {
  if (kind === 'trap') return <TriangleAlert className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />;
  if (kind === 'summary') return <FileText className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />;
  if (kind === 'ai') return <Sparkles className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />;
  return <Bookmark className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />;
}

const formatSavedAt = (iso: string): string => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return 'Saved';
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

/**
 * OfflineVaultModal
 * ---------------------------------------------------------------------------
 * The full Revision Engine vault. Every pearl, examiner trap, module summary
 * and AI answer saved anywhere in the app lands here. The collection is the
 * same localStorage-backed `useRecallStore` that powers ⌘K, so the two
 * surfaces can never drift apart.
 */
export function OfflineVaultModal(): JSX.Element {
  const open = useAppStore((state) => state.vaultOpen);
  const setOpen = useAppStore((state) => state.setVaultOpen);
  const signedIn = useAuthStore((state) => state.user !== null);
  const pearls = useRecallStore((state) => state.pearls);
  const removePearl = useRecallStore((state) => state.removePearl);
  const setRevealPearl = useRecallStore((state) => state.setRevealPearl);
  const [query, setQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState<TrackFilter>('ALL');

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setTrackFilter('ALL');
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

  const counts = useMemo(
    () => ({
      ALL: pearls.length,
      NEET_PG: pearls.filter((pearl) => pearl.track === 'NEET_PG').length,
      NEET_UG: pearls.filter((pearl) => pearl.track === 'NEET_UG').length,
    }),
    [pearls],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pearls.filter((pearl) => {
      if (trackFilter !== 'ALL' && pearl.track !== trackFilter) return false;
      if (q.length === 0) return true;
      return [pearl.text, pearl.query, pearl.sourceTag ?? '', pearl.moduleId ?? '']
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [pearls, query, trackFilter]);

  const openItem = (pearl: SavedPearl): void => {
    setOpen(false);
    if (pearl.kind === 'ai') {
      setRevealPearl(pearl);
      navigate('/');
      return;
    }
    const base = pearl.track === 'NEET_UG' ? '/track/ug' : '/track/pg';
    navigate(pearl.moduleId ? `${base}?module=${encodeURIComponent(pearl.moduleId)}` : base);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[8vh] sm:px-4 sm:pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm dark:bg-black/45"
            onClick={() => setOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Offline vault"
            initial={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24 })}
            className="glass-capsule relative flex max-h-[calc(100dvh_-_2rem)] w-full max-w-2xl flex-col rounded-3xl p-2"
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-3 px-3 pb-2 pt-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-[#4285F4]/20 bg-[#4285F4]/10 text-[#1A73E8] dark:border-[#8AB4F8]/20 dark:bg-[#8AB4F8]/10 dark:text-[#8AB4F8]">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                    Offline Vault
                  </p>
                  <p className="truncate text-[10.5px] text-slate-500 dark:text-slate-400">
                    Revision Engine · {signedIn ? 'synced to your account' : 'saved on this device'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close offline vault"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200/70 bg-white/60 text-slate-400 transition-colors hover:text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-500 dark:hover:text-white"
              >
                <X className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            {/* Search */}
            <div className="mx-2 flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/65 px-3 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]">
              <Search className="h-3.5 w-3.5 shrink-0 text-[#4285F4] dark:text-[#8AB4F8]" strokeWidth={2} aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search saved pearls, traps and modules…"
                aria-label="Search saved vault items"
                className="h-5 w-full flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
              {query.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear vault search"
                  className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-900/[0.05] hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <X className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                </button>
              ) : (
                <kbd className="kbd shrink-0">ESC</kbd>
              )}
            </div>

            {/* Track filters */}
            <div className="flex shrink-0 items-center gap-1.5 px-2 pt-2">
              {FILTERS.map((filter) => {
                const active = trackFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setTrackFilter(filter.id)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-full border px-2.5 py-1 text-[10px] font-semibold transition-colors',
                      active
                        ? 'border-[#4285F4]/30 bg-[#4285F4]/10 text-[#1A73E8] dark:border-[#8AB4F8]/30 dark:bg-[#8AB4F8]/10 dark:text-[#8AB4F8]'
                        : 'border-slate-200/70 bg-white/55 text-slate-500 hover:text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-white',
                    )}
                  >
                    {filter.label}
                    <span className="ml-1.5 font-mono text-[9px] opacity-70">{counts[filter.id]}</span>
                  </button>
                );
              })}
              <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                {filtered.length} shown
              </span>
            </div>

            {/* Saved items */}
            <ul className="mt-1 max-h-[clamp(220px,calc(100dvh_-_19rem),520px)] min-h-0 flex-1 space-y-0.5 overflow-y-auto overscroll-contain p-2">
              {filtered.map((pearl) => {
                const kind = pearl.kind ?? 'pearl';
                const meta = KIND_META[kind];
                return (
                  <li
                    key={pearl.id}
                    className="group flex items-start gap-2.5 rounded-2xl px-2.5 py-2.5 transition-colors duration-150 hover:bg-white/70 dark:hover:bg-white/[0.06]"
                  >
                    <span
                      className={cn(
                        'mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border',
                        meta.iconWrap,
                      )}
                    >
                      <KindGlyph kind={kind} />
                    </span>

                    <button
                      type="button"
                      onClick={() => openItem(pearl)}
                      className="min-w-0 flex-1 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/50"
                    >
                      <span className="flex items-center gap-2">
                        <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-slate-800 dark:text-slate-100">
                          {pearl.query || meta.label}
                        </span>
                        <span className="chip-glass shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[9px] text-slate-500 dark:text-slate-400">
                          {pearl.track === 'NEET_UG' ? 'UG' : 'PG'}
                        </span>
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-[11.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {pearl.text}
                      </span>
                      <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span className={cn('rounded-full border px-1.5 py-0.5 text-[9px] font-semibold', meta.badge)}>
                          {meta.label}
                        </span>
                        {pearl.moduleId ? (
                          <span className="rounded-full border border-slate-200/70 bg-white/55 px-1.5 py-0.5 text-[9px] text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                            Revision Studio
                          </span>
                        ) : null}
                        <span className="text-[9px] text-slate-400 dark:text-slate-500">
                          {formatSavedAt(pearl.savedAtISO)}
                        </span>
                      </span>
                    </button>

                    <div className="flex shrink-0 flex-col items-center gap-1">
                      <button
                        type="button"
                        onClick={() => openItem(pearl)}
                        aria-label={`Open saved item: ${pearl.query || pearl.text}`}
                        className="grid h-6 w-6 place-items-center rounded-full text-slate-300 transition-colors hover:bg-[#4285F4]/10 hover:text-[#1A73E8] dark:text-slate-600 dark:hover:text-[#8AB4F8]"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removePearl(pearl.id)}
                        aria-label={`Remove saved item: ${pearl.query || pearl.text}`}
                        className="grid h-6 w-6 place-items-center rounded-full text-slate-300 transition-colors hover:bg-rose-500/10 hover:text-rose-500 dark:text-slate-600 dark:hover:text-rose-400"
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                );
              })}

              {filtered.length === 0 ? (
                <li className="px-4 py-10 text-center">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl border border-slate-200/70 bg-white/60 text-slate-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-500">
                    <Bookmark className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <p className="mt-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {pearls.length === 0 ? 'Your vault is empty' : 'No saved item matches'}
                  </p>
                  <p className="mx-auto mt-1 max-w-sm text-[11.5px] leading-relaxed text-slate-400 dark:text-slate-500">
                    {pearls.length === 0
                      ? 'Open any module and tap “Save to Vault” on a pearl or examiner trap. It will appear here instantly.'
                      : 'Try a different search, or switch the PG / UG filter.'}
                  </p>
                  {pearls.length > 0 && query.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      className="mt-3 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-[10px] font-semibold text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-white"
                    >
                      Clear search
                    </button>
                  ) : null}
                </li>
              ) : null}
            </ul>

            {/* Footer */}
            <div className="flex shrink-0 items-center justify-between border-t border-white/70 px-4 py-2.5 font-mono text-[10px] text-slate-400 dark:border-white/10 dark:text-slate-500">
              <span>{pearls.length} saved · stored locally</span>
              <span className="inline-flex items-center gap-1">
                <BookmarkCheck className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
                offline ready
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default OfflineVaultModal;
