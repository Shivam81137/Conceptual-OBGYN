import { useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Bookmark, CheckCircle2, Flame, Layers, X } from 'lucide-react';
import { STUDIO_MODULES, findStudioModule } from '@/data/studio';
import { useAuthStore } from '@/store/useAuthStore';
import { useHistoryStore } from '@/store/useHistoryStore';
import type { StudyEvent } from '@/types/history';
import { withFilterTween } from '@/lib/motion';

/** card id → module title, built once from the studio registry. */
const CARD_TO_MODULE = new Map<string, string>(
  STUDIO_MODULES.flatMap((module) => module.flashcards.map((card) => [card.id, module.shortTitle] as const)),
);

const moduleLabel = (event: StudyEvent): string => {
  if (event.itemId && CARD_TO_MODULE.has(event.itemId)) return CARD_TO_MODULE.get(event.itemId) as string;
  const found = findStudioModule(event.moduleId);
  return found ? found.shortTitle : 'Study module';
};

const describe = (event: StudyEvent): string => {
  switch (event.type) {
    case 'card_rated':
      return `Rated a flashcard “${event.detail ?? ''}”`;
    case 'mcq_answered':
      return 'Answered a practice question';
    case 'module_opened':
      return 'Opened module';
    case 'pearl_saved':
      return 'Saved a pearl';
  }
};

const timeAgo = (iso: string): string => {
  const minutes = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
};

/** "My activity" — the student's study history, restored from their account. */
export function HistoryDialog(): JSX.Element {
  const open = useHistoryStore((state) => state.dialogOpen);
  const setOpen = useHistoryStore((state) => state.setDialogOpen);
  const stats = useHistoryStore((state) => state.stats);
  const events = useHistoryStore((state) => state.events);
  const status = useHistoryStore((state) => state.status);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown, { capture: true });
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true });
      document.body.style.overflow = previous;
    };
  }, [open, setOpen]);

  const tiles = useMemo(
    () =>
      stats
        ? [
            { icon: Flame, label: 'Day streak', value: stats.streakDays },
            { icon: Layers, label: 'Cards rated', value: stats.cardsRated },
            { icon: CheckCircle2, label: 'Questions answered', value: stats.mcqsAnswered },
            { icon: BookOpen, label: 'Modules opened', value: stats.modulesOpened },
            { icon: Bookmark, label: 'Pearls saved', value: stats.pearlsSaved },
          ]
        : [],
    [stats],
  );

  return (
    <AnimatePresence>
      {open && user ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[8vh] sm:px-4 sm:pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm dark:bg-black/50" onClick={() => setOpen(false)} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="My study history"
            initial={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={withFilterTween({ type: 'spring', stiffness: 260, damping: 24 })}
            className="glass-capsule relative w-full max-w-lg rounded-3xl p-6 sm:p-7"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-900/[0.06] hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Your study history</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Saved to your account, {user.displayName.split(' ')[0]}
              {status === 'offline' ? ' · offline — will sync when you reconnect' : status === 'syncing' ? ' · syncing…' : ''}
            </p>

            {stats ? (
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {tiles.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl border border-slate-200/80 bg-white/60 px-3 py-2.5 dark:border-white/[0.10] dark:bg-white/[0.05]">
                    <Icon className="h-4 w-4 text-[#4285F4]" aria-hidden="true" />
                    <p className="mt-1.5 text-xl font-semibold tabular-nums text-slate-900 dark:text-white">{value}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">Loading your history…</p>
            )}

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Recent activity</h3>
            {events.length === 0 ? (
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Nothing yet — open a module and rate a few flashcards. It will show up here on every device.
              </p>
            ) : (
              <ul className="mt-2 max-h-64 divide-y divide-slate-200/70 overflow-y-auto dark:divide-white/[0.08]">
                {events.map((event, index) => (
                  <li key={`${event.atISO}-${event.itemId ?? event.moduleId}-${index}`} className="flex items-baseline justify-between gap-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm text-slate-700 dark:text-slate-200">{describe(event)}</p>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">{moduleLabel(event)}</p>
                    </div>
                    <span className="shrink-0 text-[11px] text-slate-400">{timeAgo(event.atISO)}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default HistoryDialog;
