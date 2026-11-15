import { useMemo, useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SheenSweep } from '@/components/ui/GlassCard';
import { HormonalPulseWidget, PartographWidget } from '@/components/landing/TrackWidgets';
import { modulesForTrack } from '@/data/revisionStudio';
import { usePrefersReducedMotion, useMediaQuery } from '@/hooks/useEnvironment';
import { cn } from '@/lib/utils';
import { interceptNavigation } from '@/lib/router';
import type { TrackId } from '@/types/tracks';

export interface TrackCardData {
  id: TrackId;
  /** Editorial index printed beside the title rule — "01", "02". */
  index: string;
  eyebrow: string;
  eyebrowClassName: string;
  badgeDotClass: string;
  title: string;
  scope: string;
  href: string;
  /** Border-hairline illumination colour. */
  ringColor: string;
  /** Soft fill used by the pointer spotlight. */
  spotlightColor: string;
  widget: 'hormonal' | 'partograph';
  topics: readonly string[];
  studioButtonText: string;
  studioButtonGradient: string;
  borderGradient: string;
  auroraGradient: string;
  chipTextClass: string;
  modulePillClass: string;
  moduleDotColor: string;
}

export interface TrackPortalCardProps {
  data: TrackCardData;
}

/** Max tilt in degrees — enough to feel dimensional, never enough to hurt reading. */
const TILT = 3.5;

/**
 * TrackPortalCard
 * ---------------------------------------------------------------------------
 * A precision clinical console rather than a marketing tile.
 *
 * Layers, back to front:
 *   1. dual aurora blooms that breathe on hover;
 *   2. a chromatic hairline border;
 *   3. a pointer-tracked spotlight plus a matching hairline ring;
 *   4. an oversized ghost monogram anchoring the lower right;
 *   5. the content column — eyebrow + live trace widget, editorial title block,
 *      coverage chips, telemetry, and the action footer.
 *
 * Interaction: the card tilts toward the cursor on a damped spring, the
 * spotlight follows the pointer, and both are disabled for coarse pointers and
 * `prefers-reduced-motion`. Nothing animates continuously, so the card is
 * cheap to paint and never distracts from the content.
 */
export function TrackPortalCard({ data }: TrackPortalCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spotlightOpacity = useSpring(0, { stiffness: 260, damping: 30 });
  const rotateX = useSpring(0, { stiffness: 210, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 210, damping: 24 });

  const reduceMotion = usePrefersReducedMotion();
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const interactive = finePointer && !reduceMotion;

  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${pointerX}px ${pointerY}px, ${data.spotlightColor}, transparent 70%)`;
  const ring = useMotionTemplate`radial-gradient(320px circle at ${pointerX}px ${pointerY}px, ${data.ringColor}, transparent 72%)`;

  const moduleCount = useMemo(() => modulesForTrack(data.id).length, [data.id]);

  const trackPointer = (event: ReactPointerEvent<HTMLDivElement>): void => {
    if (!interactive) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    pointerX.set(x);
    pointerY.set(y);
    rotateY.set(((x / rect.width) - 0.5) * TILT * 2);
    rotateX.set((0.5 - y / rect.height) * TILT * 2);
  };

  const resetPointer = (): void => {
    spotlightOpacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={trackPointer}
      onPointerEnter={() => {
        if (interactive) spotlightOpacity.set(1);
      }}
      onPointerLeave={resetPointer}
      role="region"
      aria-label={`${data.title} track portal`}
      style={interactive ? { rotateX, rotateY, transformPerspective: 1400 } : undefined}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[28px] text-left',
        'min-h-[336px] p-5 sm:min-h-[360px] sm:p-7 md:p-8',
        'glass-card glass-card-rigid',
      )}
    >
      <SheenSweep />

      {/* ─── Atmosphere ──────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl transition-all duration-700',
          'group-hover:scale-110 group-hover:opacity-70 motion-reduce:transition-none',
          data.auroraGradient,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity duration-700',
          'group-hover:opacity-55 motion-reduce:transition-none',
          data.auroraGradient,
        )}
      />

      {/* ─── Chromatic hairline border ───────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[28px] p-[1.5px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      >
        <div className={cn('h-full w-full rounded-[26px] bg-gradient-to-r', data.borderGradient)} />
      </div>

      {/* ─── Pointer spotlight + ring ────────────────────────────────────── */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{ background: spotlight, opacity: spotlightOpacity }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          background: ring,
          opacity: spotlightOpacity,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />

      {/* ─── Ghost monogram ──────────────────────────────────────────────── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-14 -right-3 select-none font-display text-[10rem] font-bold leading-[0.75] tracking-[-0.07em] text-slate-900/[0.028] sm:text-[12.5rem] dark:text-white/[0.04]"
      >
        {data.title}
      </span>

      {/* ─── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              'inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] shadow-sm backdrop-blur-md sm:px-3 sm:text-[11px]',
              data.eyebrowClassName,
            )}
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span
                className={cn(
                  'absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 motion-reduce:animate-none',
                  data.badgeDotClass,
                )}
              />
              <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', data.badgeDotClass)} />
            </span>
            {data.eyebrow}
          </span>

          <div className="hidden shrink-0 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:scale-[1.03] motion-reduce:transition-none lg:block">
            {data.widget === 'hormonal' ? (
              <HormonalPulseWidget />
            ) : (
              <PartographWidget />
            )}
          </div>
        </div>

        {/* Title block */}
        <div className="mt-6 sm:mt-7">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500">
              {data.index}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-slate-200/90 via-slate-200/50 to-transparent dark:from-white/15 dark:via-white/5" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Track
            </span>
          </div>

          <h2 className="mt-3 font-display text-[clamp(2.125rem,6.5vw,3rem)] font-bold leading-[0.94] tracking-[-0.045em] text-slate-900 dark:text-white">
            {data.title}
          </h2>
          <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-slate-500 sm:text-sm dark:text-slate-400">
            {data.scope}
          </p>
        </div>

        {/* Coverage */}
        <div className="mt-5 sm:mt-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Coverage
            </span>
            <span className="h-px flex-1 bg-slate-200/70 dark:bg-white/10" />
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {data.topics.map((topic) => (
              <span
                key={topic}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/55 px-2.5 py-1 text-[11px] font-medium shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-md',
                  'dark:border-white/10 dark:bg-white/[0.06]',
                  data.chipTextClass,
                )}
              >
                <span className={cn('h-1 w-1 rounded-full opacity-80', data.badgeDotClass)} aria-hidden="true" />
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1" aria-hidden="true" />

        {/* Footer */}
        <div className="relative mt-6 border-t border-slate-200/60 pt-4 dark:border-white/[0.09]">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md',
                  data.modulePillClass,
                )}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: data.moduleDotColor }}
                  aria-hidden="true"
                />
                {moduleCount === 0 ? 'No modules yet' : `${moduleCount} ${moduleCount === 1 ? 'Module' : 'Modules'}`}
              </span>
            </div>

            <motion.a
              href={data.href}
              onClick={(event) => interceptNavigation(event, data.href)}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className={cn(
                'group/cta inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[12.5px] font-semibold',
                'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                'focus-visible:ring-slate-900/25 focus-visible:ring-offset-white dark:focus-visible:ring-white/50 dark:focus-visible:ring-offset-slate-950',
                'sm:ml-auto sm:w-auto sm:min-w-[176px] sm:text-[13px]',
                data.studioButtonGradient,
              )}
            >
              <span className="whitespace-nowrap">{data.studioButtonText}</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/cta:translate-x-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TrackPortalCard;
