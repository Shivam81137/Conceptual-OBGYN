import { ArrowRight, ArrowUpRight, Bookmark } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { useAppStore } from '@/store/useAppStore';
import { useRecallStore, type SavedPearlKind } from '@/store/useRecallStore';
import { cn } from '@/lib/utils';

const KIND_LABEL: Record<SavedPearlKind, string> = {
  pearl: 'Pearl',
  trap: 'Examiner trap',
  summary: 'Module summary',
  ai: 'AI answer',
};

/**
 * RevisionEngineCard
 * ---------------------------------------------------------------------------
 * A live window into the Offline Vault. Every pearl, examiner trap, summary and
 * AI answer saved anywhere in the app is persisted in `useRecallStore`; this
 * card surfaces the newest entry and opens the full vault. Because the state is
 * shared, the landing page and the module save buttons can never drift apart.
 */
export function RevisionEngineCard({ className }: { className?: string }): JSX.Element {
  const pearls = useRecallStore((state) => state.pearls);
  const setVaultOpen = useAppStore((state) => state.setVaultOpen);
  const latest = pearls[0] ?? null;
  const count = pearls.length;

  return (
    <GlassCard className={cn('flex h-40 flex-col p-5', className)}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#1A73E8] dark:text-[#8AB4F8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" aria-hidden="true" />
          REVISION ENGINE
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34A853]" />
          </span>
          <span className="font-mono text-[9px] text-[#34A853]">{count > 0 ? 'On device' : 'Ready'}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setVaultOpen(true)}
        className="group/vault mt-2 flex min-w-0 flex-1 items-center gap-3 rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/50"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[#4285F4]/20 bg-gradient-to-br from-[#4285F4]/15 to-[#34A853]/10 text-[#1A73E8] shadow-sm dark:border-[#8AB4F8]/20 dark:text-[#8AB4F8]">
          <Bookmark className="h-4.5 w-4.5" strokeWidth={1.8} aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-1.5">
            <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-100">Offline Vault</span>
            <span className="rounded-full border border-slate-900/[0.06] bg-white/60 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-slate-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-400">
              {count} saved
            </span>
          </span>

          {latest ? (
            <>
              <span className="mt-0.5 block truncate text-[10.5px] font-medium text-slate-600 dark:text-slate-300">
                {latest.query || KIND_LABEL[latest.kind ?? 'pearl']}
              </span>
              <span className="mt-0.5 block truncate text-[10px] text-slate-400 dark:text-slate-500">
                {latest.text}
              </span>
            </>
          ) : (
            <span className="mt-0.5 block text-[10.5px] leading-relaxed text-slate-400 dark:text-slate-500">
              Save any pearl or trap from a module to build your vault.
            </span>
          )}
        </span>

        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover/vault:-translate-y-0.5 group-hover/vault:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>

      <div className="mt-1 flex items-center justify-between border-t border-slate-200/60 pt-2 dark:border-white/10">
        <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
          Stored locally · zero-latency recall
        </span>
        <button
          type="button"
          onClick={() => setVaultOpen(true)}
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1A73E8] transition-colors hover:text-[#0B57D0] dark:text-[#8AB4F8] dark:hover:text-[#A8C7FA]"
        >
          Open vault
          <ArrowRight className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
    </GlassCard>
  );
}

export default RevisionEngineCard;
