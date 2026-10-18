import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { withFilterTween } from '@/lib/motion';
import { usePathname } from '@/lib/router';
import { cn } from '@/lib/utils';

export interface BrandMarkProps {
  /** Rendered width in px. Height follows the mark's 516:328 aspect ratio. */
  width?: number;
  className?: string;
  imgClassName?: string;
  /** Soft aurora halo behind the mark. */
  glow?: boolean;
  /** Replay the 3D entrance whenever the route changes. */
  animateOnRoute?: boolean;
  /** Subtle hover / tap response. */
  hover?: boolean;
  /** Decorative marks are hidden from assistive tech. */
  decorative?: boolean;
  priority?: boolean;
}

const MARK_RATIO = 281 / 421;

/**
 * BrandMark
 * ---------------------------------------------------------------------------
 * The interlocking-ring + heart emblem, rendered from the same transparent
 * vector used by the PWA icon, offline shell and favicon. The SVG carries its
 * own heartbeat / twinkle / light-sweep animation; this wrapper adds the shared
 * route transition, hover spring and optional halo.
 */
export function BrandMark({
  width = 34,
  className,
  imgClassName,
  glow = false,
  animateOnRoute = true,
  hover = true,
  decorative = true,
  priority = false,
}: BrandMarkProps): JSX.Element {
  const reduceMotion = usePrefersReducedMotion();
  const pathname = usePathname();
  const height = Math.round(width * MARK_RATIO);

  return (
    <motion.span
      key={animateOnRoute ? pathname : 'brand-mark'}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 3, scale: 0.74, rotateY: -28, filter: 'blur(7px)' }
      }
      animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
      whileHover={hover && !reduceMotion ? { scale: 1.06, rotate: 1.2 } : undefined}
      whileTap={hover && !reduceMotion ? { scale: 0.94 } : undefined}
      transition={withFilterTween({ type: 'spring', stiffness: 300, damping: 22 })}
      className={cn('relative inline-flex shrink-0 items-center justify-center', className)}
      style={{ width, height, transformPerspective: 900 }}
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : 'Conceptual OBGYN'}
    >
      {glow ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(34,211,238,0.20), rgba(217,70,239,0.11) 46%, transparent 72%)',
          }}
        />
      ) : null}
      <img
        src="/brand/logo-mark.svg"
        alt=""
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className={cn(
          'pointer-events-none relative h-full w-full select-none object-contain drop-shadow-[0_5px_14px_rgba(8,145,178,0.16)]',
          imgClassName,
        )}
      />
    </motion.span>
  );
}

export default BrandMark;
