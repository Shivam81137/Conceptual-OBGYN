import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ProgressRingProps {
  /** 0 → 1. */
  value: number;
  size?: number;
  strokeWidth?: number;
  /** Tailwind stroke class, e.g. `stroke-emerald-500`. */
  colorClassName: string;
  className?: string;
  children?: ReactNode;
}

/** Quiet completion ring used by the navigator and the overall header. */
export function ProgressRing({
  value,
  size = 34,
  strokeWidth = 3,
  colorClassName,
  className,
  children,
}: ProgressRingProps): JSX.Element {
  const clamped = Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped);

  return (
    <span
      className={cn('relative inline-grid shrink-0 place-items-center', className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-slate-900/10 dark:stroke-white/10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn('transition-[stroke-dashoffset] duration-500 ease-out', colorClassName)}
        />
      </svg>
      <span className="relative text-[9px] font-semibold tabular-nums text-slate-600 dark:text-slate-300">
        {children ?? `${Math.round(clamped * 100)}%`}
      </span>
    </span>
  );
}

/** Shared tiny label used inside notes and simulator panels. */
export function StudioKicker({ children, className }: { children: ReactNode; className?: string }): JSX.Element {
  return <p className={cn('eyebrow text-[10px] tracking-[0.18em]', className)}>{children}</p>;
}
