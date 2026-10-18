import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { cn } from '@/lib/utils';

const CAPSULE_HEIGHTS = [14, 22, 11, 26, 17, 30, 20] as const;

/**
 * RevisionEngineCard
 * ---------------------------------------------------------------------------
 * A seven-day rhythm bar of nested glass capsules with a live emerald pulse
 * confirming the offline vault. Upgraded with Google aesthetic touches.
 */
export function RevisionEngineCard({ className }: { className?: string }): JSX.Element {
  const reduceMotion = usePrefersReducedMotion();
  const lastIndex = CAPSULE_HEIGHTS.length - 1;

  return (
    <GlassCard className={cn('flex h-40 flex-col p-5', className)}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#1A73E8] dark:text-[#8AB4F8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" aria-hidden="true" />
          REVISION ENGINE
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34A853]" />
          </span>
          <span className="font-mono text-[9px] text-[#34A853]">Synced</span>
        </div>
      </div>

      <div className="mt-2 flex flex-1 items-center justify-between gap-4">
        <div className="flex items-end gap-1.5" role="img" aria-label="Seven-day review rhythm">
          {CAPSULE_HEIGHTS.map((height, index) => (
            <motion.span
              key={index}
              initial={reduceMotion ? false : { scaleY: 0.25, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26, delay: 0.15 + index * 0.05 }}
              style={{ height }}
              className={cn(
                'w-2.5 origin-bottom rounded-full border border-slate-200/80 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/[0.08]',
                index === lastIndex && 'border-[#4285F4]/30 bg-[#4285F4]/15 dark:border-[#8AB4F8]/30 dark:bg-[#8AB4F8]/20',
              )}
            />
          ))}
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Offline Vault</span>
          <span className="text-[11px] text-slate-400">Zero-latency recall</span>
        </div>
      </div>

      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Spaced Repetition &amp; Sync</span>
    </GlassCard>
  );
}

export default RevisionEngineCard;
