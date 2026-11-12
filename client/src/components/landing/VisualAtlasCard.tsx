import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { VisualAtlasDialog } from '@/components/landing/VisualAtlasDialog';
import { ATLAS_DIAGRAMS } from '@/data/visualAtlas';
import { cn } from '@/lib/utils';

interface AtlasThumb {
  label: string;
  /** Base pose + fan-out pose applied on group hover. */
  fan: string;
  glyph: JSX.Element;
}

const THUMBS: readonly AtlasThumb[] = [
  {
    label: 'Fetal skull diameters',
    fan: '-rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:-rotate-12',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="7.4" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M4.6 12h14.8M12 4.6v14.8M7.2 7.2l9.6 9.6"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    ),
  },
  {
    label: 'Pelvic planes',
    fan: 'z-10 group-hover:-translate-y-1.5',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <ellipse cx="12" cy="6.6" rx="8" ry="2.6" stroke="currentColor" strokeWidth="1.3" />
        <ellipse cx="12" cy="12" rx="6.4" ry="2.2" stroke="currentColor" strokeWidth="1.3" opacity="0.8" />
        <ellipse cx="12" cy="17.2" rx="4.8" ry="1.9" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Partograph 4-hour rule',
    fan: 'rotate-6 group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:rotate-12',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4.5 19.5V4.5M4.5 19.5h15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M6.5 16.5l4-4 3-3 4.5-4.5" stroke="#0d9488" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17l7.5-7.5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.55" />
      </svg>
    ),
  },
];

/**
 * VisualAtlasCard
 * --------------------------------------------------------------------------
 * Landing entry point to the Visual Atlas. Three OBGYN mini-schematics fan out
 * on hover; the whole card opens a full-screen atlas of curated, high-yield
 * plates (anatomy, physiology, labour, obstetrics and oncology).
 */
export function VisualAtlasCard({ className }: { className?: string }): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlassCard className={cn('flex h-40 flex-col', className)}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`Open the visual atlas — ${ATLAS_DIAGRAMS.length} high-yield OBGYN schematics`}
          className="flex h-full w-full flex-col rounded-3xl p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00897B]/50"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#00796B] dark:text-[#80CBC4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00897B]" aria-hidden="true" />
              VISUAL ATLAS
            </span>
            <span className="inline-flex shrink-0 items-center rounded-full border border-[#00897B]/20 bg-[#00897B]/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-[#00796B] dark:border-[#80CBC4]/20 dark:text-[#80CBC4]">
              {ATLAS_DIAGRAMS.length} Schematics
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center text-slate-500 dark:text-slate-300" aria-hidden="true">
            {THUMBS.map((thumb, index) => (
              <div
                key={thumb.label}
                title={thumb.label}
                className={cn(
                  'grid h-16 w-12 place-items-center rounded-xl border border-slate-200/80 bg-white/75 shadow-sm transition-transform duration-300 ease-out-expo hover:border-[#4285F4]/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.08]',
                  index > 0 && '-ml-4',
                  thumb.fan,
                )}
              >
                {thumb.glyph}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-xs font-medium text-slate-500 dark:text-slate-400">
              High-Yield Medical Schematics
            </span>
            <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-semibold text-[#00796B] dark:text-[#80CBC4]">
              Open
              <ArrowUpRight className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
            </span>
          </div>
        </button>
      </GlassCard>

      <VisualAtlasDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default VisualAtlasCard;
