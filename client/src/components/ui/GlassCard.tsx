import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * GlassCard
 * ---------------------------------------------------------------------------
 * The base surface of the layered glass system: 55% white frost at a 40px
 * blur, 1px white outer border, inset specular highlight and a diffused
 * shadow. `overflow-hidden` + `border-radius: inherit` keep the sheen sweep
 * inside the rounded silhouette.
 */

/** Shared surface class — also used on motion anchors that cannot be a GlassCard. */
export const GLASS_CARD_SURFACE = 'glass-card group relative overflow-hidden rounded-3xl';

/** The diagonal specular light band that sweeps on group hover. */
export function SheenSweep(): JSX.Element {
  return <span aria-hidden="true" className="sheen-sweep" />;
}

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Set false for static informational surfaces that should not sweep. */
  sheen?: boolean;
  children: ReactNode;
}

export function GlassCard({ sheen = true, className, children, ...rest }: GlassCardProps): JSX.Element {
  return (
    <div className={cn(GLASS_CARD_SURFACE, className)} {...rest}>
      {sheen ? <SheenSweep /> : null}
      {children}
    </div>
  );
}

export default GlassCard;
