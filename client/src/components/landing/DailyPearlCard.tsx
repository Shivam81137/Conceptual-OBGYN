import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

interface Pearl {
  text: string;
  tag: string;
}

/** Four curated one-liners — each fits two lines at reading size. */
const PEARLS: readonly Pearl[] = [
  {
    text: 'Bishop Score ≥ 8 indicates a favorable cervix with high likelihood of successful induction.',
    tag: 'OBSTETRICS',
  },
  {
    text: 'Loss of deep tendon reflexes precedes MgSO4 respiratory depression — antidote: calcium gluconate 10%.',
    tag: 'TOXICITY',
  },
  {
    text: 'Platelets < 1 lakh with rising LDH in severe preeclampsia means HELLP — stabilise, then deliver.',
    tag: 'HIGH-RISK OB',
  },
  {
    text: 'Parametrial spread in cervical carcinoma upgrades to FIGO IIB — chemoradiation, not surgery.',
    tag: 'ONCOLOGY',
  },
];

/**
 * DailyPearlCard
 * ---------------------------------------------------------------------------
 * One high-yield line per glance. Google-style accent chip + glass refresh.
 */
export function DailyPearlCard({ className }: { className?: string }): JSX.Element {
  const [index, setIndex] = useState(0);
  const pearl = PEARLS[index];

  const advance = (): void => setIndex((current) => (current + 1) % PEARLS.length);

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
          aria-label="Next pearl"
          className="group/next grid h-7 w-7 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-slate-500 transition-all duration-150 hover:border-[#4285F4]/30 hover:bg-[#4285F4]/10 hover:text-[#1A73E8] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-400 dark:hover:text-[#8AB4F8]"
        >
          <RotateCw
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover/next:rotate-180"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="mt-2.5 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={pearl.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="line-clamp-2 text-[13px] leading-snug text-slate-600 dark:text-slate-300"
          >
            {pearl.text}
          </motion.p>
        </AnimatePresence>
      </div>

      <span className="inline-flex items-center rounded-full border border-[#4285F4]/20 bg-[#4285F4]/08 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-[#1A73E8] dark:border-[#8AB4F8]/20 dark:text-[#8AB4F8]">
        {pearl.tag}
      </span>
    </GlassCard>
  );
}

export default DailyPearlCard;
