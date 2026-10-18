import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

interface AtlasThumb {
  label: string;
  /** Base pose + fan-out pose applied on group hover. */
  fan: string;
  glyph: JSX.Element;
}

const THUMBS: readonly AtlasThumb[] = [
  {
    label: 'Fetal Skull Diameters',
    fan: '-rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:-rotate-12',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-slate-400" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.5 12h11M12 5.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Robson's 10-Group",
    fan: 'z-10 group-hover:-translate-y-1.5',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-slate-400" aria-hidden="true">
        {[7, 12, 17].map((cy) =>
          [7, 12, 17].map((cx) => (
            <circle key={cx + '-' + cy} cx={cx} cy={cy} r="1.4" fill="currentColor" />
          )),
        )}
      </svg>
    ),
  },
  {
    label: 'Pelvic Planes',
    fan: 'rotate-6 group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:rotate-12',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-slate-400" aria-hidden="true">
        <path
          d="M7 8h10M5.5 12h13M4 16h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

/**
 * VisualAtlasCard
 * --------------------------------------------------------------------------
 * Three overlapping miniature glass thumbnails that fan out with rotation
 * and lift when the card is hovered. Upgraded with Google aesthetic touches.
 */
export function VisualAtlasCard({ className }: { className?: string }): JSX.Element {
  return (
    <GlassCard className={cn('flex h-40 flex-col p-5', className)}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#00796B] dark:text-[#80CBC4]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00897B]" aria-hidden="true" />
          VISUAL ATLAS
        </span>
        <span className="inline-flex items-center rounded-full border border-[#00897B]/20 bg-[#00897B]/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-[#00796B] dark:border-[#80CBC4]/20 dark:text-[#80CBC4]">
          45+ Schematics
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center" aria-hidden="true">
        {THUMBS.map((thumb, index) => (
          <div
            key={thumb.label}
            title={thumb.label}
            className={cn(
              'grid h-16 w-12 place-items-center rounded-xl border border-slate-200/80 bg-white/75 text-slate-600 shadow-sm transition-transform duration-300 ease-out-expo hover:border-[#4285F4]/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300',
              index > 0 && '-ml-4',
              thumb.fan,
            )}
          >
            {thumb.glyph}
          </div>
        ))}
      </div>

      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">High-Yield Medical Schematics</span>
    </GlassCard>
  );
}

export default VisualAtlasCard;
