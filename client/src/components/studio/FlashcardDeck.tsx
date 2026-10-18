import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Layers3, RotateCcw, Sparkles, Zap } from 'lucide-react';
import { useStudioStore } from '@/store/useStudioStore';
import { cn } from '@/lib/utils';
import type { FlashcardRating, StudioModule, StudioTrackTheme } from '@/data/revisionStudio';

interface FlashcardDeckProps {
  module: StudioModule;
  theme: StudioTrackTheme;
}

const RATINGS: readonly { id: FlashcardRating; label: string; hint: string; className: string; icon: typeof Check }[] = [
  {
    id: 'again',
    label: 'Again',
    hint: 'Revisit soon',
    className:
      'border-rose-500/25 bg-rose-500/[0.08] text-rose-700 hover:bg-rose-500/[0.14] dark:border-rose-400/25 dark:text-rose-300',
    icon: RotateCcw,
  },
  {
    id: 'good',
    label: 'Good',
    hint: 'Solid recall',
    className:
      'border-amber-500/25 bg-amber-500/[0.08] text-amber-700 hover:bg-amber-500/[0.14] dark:border-amber-400/25 dark:text-amber-300',
    icon: Check,
  },
  {
    id: 'easy',
    label: 'Easy',
    hint: 'Exam-ready',
    className:
      'border-emerald-500/25 bg-emerald-500/[0.08] text-emerald-700 hover:bg-emerald-500/[0.14] dark:border-emerald-400/25 dark:text-emerald-300',
    icon: Zap,
  },
];

const RATING_DOT: Record<FlashcardRating, string> = {
  again: 'bg-rose-500',
  good: 'bg-amber-500',
  easy: 'bg-emerald-500',
};

/**
 * Pane B, tab 3 — spring-physics 3D flashcards.
 * Self-ratings persist in `conceptual-obgyn:studio-v1`, feed the module
 * completion rings, and survive reloads without a backend.
 */
export function FlashcardDeck({ module, theme }: FlashcardDeckProps): JSX.Element {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const advanceTimer = useRef<number | null>(null);
  const ratings = useStudioStore((state) => state.cardRatings);
  const rateCard = useStudioStore((state) => state.rateCard);
  const resetCards = useStudioStore((state) => state.resetCards);

  const cards = module.flashcards;
  const card = cards[Math.min(index, cards.length - 1)];

  useEffect(() => {
    if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    setIndex(0);
    setFlipped(false);
  }, [module.id]);

  useEffect(
    () => () => {
      if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    },
    [],
  );

  if (!card) {
    return <p className="text-[12px] text-slate-500">No flashcards in this module yet.</p>;
  }

  const ratedCount = cards.filter((entry) => ratings[entry.id]).length;
  const currentRating = ratings[card.id]?.rating ?? null;

  const rate = (rating: FlashcardRating): void => {
    rateCard(card.id, rating);
    setFlipped(false);
    if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      setIndex((previous) => (previous + 1) % cards.length);
    }, 240);
  };

  return (
    <div className="space-y-3.5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="eyebrow text-[9.5px] tracking-[0.2em]">Active recall</p>
          <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Flashcard Deck
          </h3>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Tap the card to flip · rate yourself to advance · {ratedCount}/{cards.length} rated
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            resetCards(cards.map((entry) => entry.id));
            setFlipped(false);
          }}
          className="inline-flex items-center gap-1 rounded-full border border-slate-900/[0.07] bg-white/60 px-2.5 py-1 text-[9.5px] font-medium text-slate-500 transition-colors hover:text-slate-800 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-400 dark:hover:text-white"
        >
          <RotateCcw className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
          Reset deck
        </button>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          {cards.map((entry, cardIndex) => {
            const rating = ratings[entry.id]?.rating;
            const isCurrent = cardIndex === index;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => {
                  setIndex(cardIndex);
                  setFlipped(false);
                }}
                aria-label={`Go to card ${cardIndex + 1}${rating ? `, rated ${rating}` : ''}`}
                aria-current={isCurrent ? 'true' : undefined}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-200',
                  isCurrent ? 'w-5' : 'w-1.5',
                  rating ? RATING_DOT[rating] : isCurrent ? 'bg-slate-400 dark:bg-slate-500' : 'bg-slate-900/15 dark:bg-white/15',
                )}
              />
            );
          })}
        </div>
        <span className="text-[9.5px] font-medium tabular-nums text-slate-400">
          {index + 1} / {cards.length}
        </span>
      </div>

      <div className="[perspective:1400px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          >
            <motion.button
              type="button"
              onClick={() => setFlipped((value) => !value)}
              aria-pressed={flipped}
              aria-label={flipped ? 'Hide answer' : 'Reveal answer'}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 230, damping: 21 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative block h-[232px] w-full cursor-pointer select-none rounded-2xl text-left focus-visible:outline-none"
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-4 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/[0.12] dark:bg-white/[0.07]"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <span className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', theme.gradient)} aria-hidden="true" />
                <div className="flex items-center justify-between gap-2">
                  <span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.12em]', theme.tint, theme.text)}>
                    <Layers3 className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                    Question {String(index + 1).padStart(2, '0')}
                  </span>
                  {currentRating ? (
                    <span className="inline-flex items-center gap-1 text-[8.5px] font-medium text-slate-400">
                      <span className={cn('h-1.5 w-1.5 rounded-full', RATING_DOT[currentRating])} aria-hidden="true" />
                      last rated {currentRating}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 flex-1 text-[15px] font-semibold leading-relaxed tracking-tight text-slate-800 dark:text-slate-100">
                  {card.front}
                </p>
                <span className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-400">
                  <Sparkles className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                  Tap to reveal the answer
                </span>
              </div>

              {/* Back */}
              <div
                className={cn(
                  'absolute inset-0 flex flex-col overflow-hidden rounded-2xl border p-4 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.5)]',
                  theme.border,
                  theme.tint,
                )}
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <span className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', theme.gradient)} aria-hidden="true" />
                <span className={cn('inline-flex w-fit items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] dark:bg-white/[0.08]', theme.text)}>
                  <Check className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" />
                  Answer
                </span>
                <p className="mt-3 flex-1 text-[13px] font-medium leading-relaxed text-slate-800 dark:text-slate-100">
                  {card.back}
                </p>
                <span className="text-[8.5px] text-slate-400">{module.sourceTag}</span>
              </div>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {RATINGS.map((rating) => {
          const Icon = rating.icon;
          return (
            <button
              key={rating.id}
              type="button"
              onClick={() => rate(rating.id)}
              className={cn(
                'flex flex-col items-center gap-0.5 rounded-xl border px-2 py-2 transition-colors duration-150',
                rating.className,
              )}
            >
              <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold">
                <Icon className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
                {rating.label}
              </span>
              <span className="text-[8px] opacity-70">{rating.hint}</span>
            </button>
          );
        })}
      </div>

      <p className="text-center text-[9px] text-slate-400 dark:text-slate-500">
        Ratings are stored locally and feed the completion rings in the navigator.
      </p>
    </div>
  );
}
