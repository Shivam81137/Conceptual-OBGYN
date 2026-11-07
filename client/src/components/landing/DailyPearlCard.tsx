import { useEffect, useState } from 'react';
import { RotateCw } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';
import { CLASSIC_PEARLS, PEARL_BY_ID } from '@/data/classicPearls';
import {
  initialiseRotation,
  loadRotation,
  nextPearl,
  saveRotation,
  type PearlRotationState,
} from '@/lib/pearlRotation';

/**
 * DailyPearlCard
 * ---------------------------------------------------------------------------
 * One classical, exam-accurate line per glance.
 *
 * The bank (`data/classicPearls.ts`) is rotated with a persisted shuffle-bag
 * (`lib/pearlRotation.ts`):
 *   · the first pearl of each day is stable across reloads;
 *   · the refresh button always draws an unseen line, right through the whole
 *     bank before anything repeats;
 *   · a pearl never appears twice in a row, and reloading no longer resets the
 *     card to the same line.
 */
export function DailyPearlCard({ className }: { className?: string }): JSX.Element {
  const [rotation, setRotation] = useState<PearlRotationState>(() =>
    initialiseRotation(CLASSIC_PEARLS, loadRotation(), new Date()),
  );

  /* Persist after render — the updater below stays pure (React StrictMode safe). */
  useEffect(() => {
    saveRotation(rotation);
  }, [rotation]);

  const pearl = PEARL_BY_ID.get(rotation.currentId) ?? CLASSIC_PEARLS[0];

  const advance = (): void => {
    setRotation((current) => nextPearl(CLASSIC_PEARLS, current, new Date()));
  };

  return (
    <GlassCard className={cn('flex h-40 flex-col p-5', className)}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#00796B] dark:text-[#80CBC4]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" aria-hidden="true" />
          DAILY PEARL
        </span>
        <button
          type="button"
          onClick={advance}
          aria-label="Next classical pearl"
          className="group/next grid h-8 w-8 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-slate-500 transition-all duration-150 hover:border-[#4285F4]/30 hover:bg-[#4285F4]/10 hover:text-[#1A73E8] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-400 dark:hover:text-[#8AB4F8]"
        >
          <RotateCw
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover/next:rotate-180"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="mt-2.5 flex-1" role="status" aria-live="polite">
        <p
          key={pearl.id}
          title={pearl.text}
          className="pearl-enter line-clamp-3 text-[12.5px] leading-snug text-slate-600 dark:text-slate-300"
        >
          {pearl.text}
        </p>
      </div>

      <span className="inline-flex w-fit items-center rounded-full border border-[#4285F4]/20 bg-[#4285F4]/08 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-[#1A73E8] dark:border-[#8AB4F8]/20 dark:text-[#8AB4F8]">
        {pearl.tag}
      </span>
    </GlassCard>
  );
}

export default DailyPearlCard;
