import { useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SheenSweep } from '@/components/ui/GlassCard';
import { HormonalPulseWidget, PartographWidget } from '@/components/landing/TrackWidgets';
import { cn } from '@/lib/utils';
import { interceptNavigation } from '@/lib/router';
import type { TrackId } from '@/types/tracks';

export interface TrackCardData {
  id: TrackId;
  eyebrow: string;
  eyebrowClassName: string;
  badgeDotClass: string;
  title: string;
  scope: string;
  moduleLabel: string;
  modulePillClass: string;
  moduleDotColor: string;
  href: string;
  ringColor: string;
  widget: 'hormonal' | 'partograph';
  topics: readonly string[];
  studioButtonText: string;
  studioButtonGradient: string;
  borderGradient: string;
  auroraGradient: string;
}

export interface TrackPortalCardProps {
  data: TrackCardData;
}

/**
 * TrackPortalCard
 * ---------------------------------------------------------------------------
 * A rich but quiet software module: mono eyebrow + stacked glass mini-widget
 * on top, title and one-line scope in the middle, and a glass footer bar with
 * the module count and the track entry actions.
 *
 * The portal is permanently fixed in its rest state — no spotlight scaling,
 * blurring, reordering or layout animation. Only the pointer-following hairline
 * ring and the diagonal specular sweep respond to the cursor.
 */
export function TrackPortalCard({ data }: TrackPortalCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const ringOpacity = useSpring(0, { stiffness: 300, damping: 30 });
  const ringBackground = useMotionTemplate`radial-gradient(280px circle at ${pointerX}px ${pointerY}px, ${data.ringColor}, transparent 72%)`;

  const trackPointer = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={trackPointer}
      onPointerEnter={() => ringOpacity.set(1)}
      onPointerLeave={() => ringOpacity.set(0)}
      role="region"
      aria-label={`${data.title} track portal`}
      className={cn(
        'group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] text-left',
        'min-h-[360px] p-8 sm:p-9 md:p-11',
        'glass-card glass-card-rigid',
      )}
    >
      <SheenSweep />

      {/* ─── 1. Internal Living Aurora Mesh Glow ────────────────────────────── */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full opacity-60 blur-2xl transition-all duration-700',
          'group-hover:scale-125 group-hover:opacity-90',
          data.auroraGradient,
        )}
      />

      {/* ─── 2. Chromatic Gradient Border ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[32px] p-[1.5px] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      >
        <div className={cn('h-full w-full rounded-[30px] bg-gradient-to-r', data.borderGradient)} />
      </div>

      {/* Hairline ring illumination */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[32px]"
        style={{
          background: ringBackground,
          opacity: ringOpacity,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />

      {/* ─── Top: badge + widget ─────────────────────────────────────── */}
      <div>
        <div className="relative flex items-start justify-between gap-4">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.14em] shadow-sm backdrop-blur-md',
              data.eyebrowClassName,
            )}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className={cn('absolute inline-flex h-full w-full animate-ping rounded-full opacity-75', data.badgeDotClass)} />
              <span className={cn('relative inline-flex h-2 w-2 rounded-full', data.badgeDotClass)} />
            </span>
            {data.eyebrow}
          </span>
          {data.widget === 'hormonal' ? (
            <HormonalPulseWidget className="hidden shrink-0 sm:block" />
          ) : (
            <PartographWidget className="hidden shrink-0 sm:block" />
          )}
        </div>

        {/* ─── Middle: title + scope ───────────────────────────────────── */}
        <h2 className="relative mt-7 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
          {data.title}
        </h2>
        <p className="relative mt-2 text-base text-slate-500 dark:text-slate-400">
          {data.scope}
        </p>

        {/* ─── Topic Chips: Colorful Glass Pills ─────────────────────────── */}
        <div className="relative mt-5 flex flex-wrap items-center gap-2">
          {data.topics.map((topic) => (
            <span
              key={topic}
              className={cn(
                'inline-flex items-center rounded-full border border-white/80 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur-md transition-transform duration-200 hover:scale-105',
                'shadow-[0_1px_4px_rgba(0,0,0,0.04)]',
                'dark:border-white/10 dark:bg-white/[0.08]',
                data.id === 'NEET_UG'
                  ? 'text-emerald-700 hover:bg-emerald-50/80 dark:text-emerald-300 dark:hover:bg-emerald-950/40'
                  : 'text-indigo-700 hover:bg-indigo-50/80 dark:text-indigo-300 dark:hover:bg-indigo-950/40',
              )}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Footer bar ─────────────────────────────────────────────── */}
      <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/60 pt-5 dark:border-white/[0.09]">
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md',
            data.modulePillClass,
          )}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: data.moduleDotColor }}
            aria-hidden="true"
          />
          {data.moduleLabel}
        </span>

        <div className="flex items-center gap-2">
          <a
            href={data.href}
            onClick={(event) => interceptNavigation(event, data.href)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95',
              data.studioButtonGradient,
            )}
          >
            <Sparkles className="h-4 w-4" />
            {data.studioButtonText}
          </a>

          <a
            href={data.href}
            onClick={(event) => interceptNavigation(event, data.href)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
              'bg-slate-900/[0.04] text-slate-700 hover:bg-slate-900/[0.08] hover:text-slate-900',
              'dark:bg-white/[0.08] dark:text-slate-200 dark:hover:bg-white/[0.14] dark:hover:text-white',
            )}
          >
            <span>Open Track</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackPortalCard;
