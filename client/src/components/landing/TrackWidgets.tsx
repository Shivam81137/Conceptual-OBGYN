import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * TrackWidgets
 * ---------------------------------------------------------------------------
 * The stacked glass micro-widgets that make the two track portals read like
 * interactive software modules: three offset glass sheets behind a face
 * holding a labelled trace line with a live status dot. Trace lines carry the
 * travelling `trace-run` dash and freeze under reduced motion.
 */

function LiveDot({ tone = 'teal' }: { tone?: 'teal' | 'rose' | 'emerald' }): JSX.Element {
  const solid =
    tone === 'teal' ? 'bg-teal-400' : tone === 'rose' ? 'bg-rose-400' : 'bg-emerald-400';
  const ping =
    tone === 'teal' ? 'bg-teal-400/70' : tone === 'rose' ? 'bg-rose-400/70' : 'bg-emerald-400/70';
  return (
    <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
      <span
        className={cn('absolute inline-flex h-full w-full animate-ping rounded-full motion-reduce:animate-none', ping)}
      />
      <span className={cn('relative inline-flex h-2 w-2 rounded-full', solid)} />
    </span>
  );
}

export { LiveDot };

interface StackedGlassProps {
  children: ReactNode;
  className?: string;
}

/** Three offset sheets of chip glass behind a frosted widget face. */
function StackedGlass({ children, className }: StackedGlassProps): JSX.Element {
  return (
    <div className={cn('relative w-44', className)}>
      <span aria-hidden="true" className="chip-glass absolute -left-2 -top-2 h-full w-full rounded-2xl opacity-60" />
      <span aria-hidden="true" className="chip-glass absolute -left-1 -top-1 h-full w-full rounded-2xl opacity-80" />
      <div className="chip-glass relative rounded-2xl px-3 py-2.5 backdrop-blur-md">{children}</div>
    </div>
  );
}

const PULSE_PATH =
  'M 2 24 C 12 24, 16 24, 24 24 S 34 6, 44 6 S 54 24, 64 24 S 74 2, 84 2 S 96 20, 106 20 S 116 12, 122 12';
const PULSE_AREA =
  'M 2 24 C 12 24, 16 24, 24 24 S 34 6, 44 6 S 54 24, 64 24 S 74 2, 84 2 S 96 20, 106 20 S 116 12, 122 12 L 122 28 L 2 28 Z';

/** UG — GnRH → LH surge with a live status dot, vibrant Emerald-to-Cyan gradient waveform and area fill. */
export function HormonalPulseWidget({ className }: { className?: string }): JSX.Element {
  return (
    <StackedGlass className={className}>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[9px] font-semibold tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
          GNRH → LH SURGE
        </span>
        <LiveDot tone="emerald" />
      </div>
      <svg viewBox="0 0 124 30" fill="none" className="mt-1.5 h-8 w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="ugStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="ugAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <path d={PULSE_AREA} fill="url(#ugAreaGradient)" />
        <path
          d={PULSE_PATH}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-emerald-900/10 dark:stroke-emerald-400/20"
        />
        <path
          d={PULSE_PATH}
          stroke="url(#ugStrokeGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={PULSE_PATH}
          stroke="#5EEAD4"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="trace-run"
        />
        <circle cx="84" cy="2" r="3" fill="#14B8A6" className="animate-pulse" />
        <circle cx="84" cy="2" r="1.5" fill="#FFFFFF" />
      </svg>
    </StackedGlass>
  );
}

const PARTOGRAPH_PATH = 'M 2 26 L 16 26 L 28 22 L 40 18 L 52 14 L 64 11 L 76 9 L 88 8 L 122 8';
const PARTOGRAPH_AREA = 'M 2 26 L 16 26 L 28 22 L 40 18 L 52 14 L 64 11 L 76 9 L 88 8 L 122 8 L 122 28 L 2 28 Z';

/** PG — partograph active-phase waveform with Indigo-to-Rose gradient and area fill. */
export function PartographWidget({ className }: { className?: string }): JSX.Element {
  return (
    <StackedGlass className={className}>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[9px] font-semibold tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
          PARTOGRAPH • ACTIVE
        </span>
        <LiveDot tone="rose" />
      </div>
      <svg viewBox="0 0 124 30" fill="none" className="mt-1.5 h-8 w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="pgStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="45%" stopColor="#6366F1" />
            <stop offset="80%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="pgAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <path d={PARTOGRAPH_AREA} fill="url(#pgAreaGradient)" />
        <path
          d={PARTOGRAPH_PATH}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-indigo-900/10 dark:stroke-indigo-400/20"
        />
        <path
          d={PARTOGRAPH_PATH}
          stroke="url(#pgStrokeGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={PARTOGRAPH_PATH}
          stroke="#F472B6"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="trace-run"
        />
        <circle cx="88" cy="8" r="3" fill="#F43F5E" className="animate-pulse" />
        <circle cx="88" cy="8" r="1.5" fill="#FFFFFF" />
      </svg>
    </StackedGlass>
  );
}
