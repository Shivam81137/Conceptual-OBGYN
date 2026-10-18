import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { cn } from '@/lib/utils';

export interface AppBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * AppBrandLogo
 * ---------------------------------------------------------------------------
 * Displays the authentic Conceptual OBGYN brand logo ('logo obygn.png').
 * Features subtle bioluminescent ambient glow and floating micro-motion.
 */
export function AppBrandLogo({ className, size = 'md' }: AppBrandLogoProps): JSX.Element {
  const reduceMotion = usePrefersReducedMotion();

  // Aspect ratio is 421:281 (~1.498) matching the original image emblem
  const sizeClasses = {
    sm: 'w-14 h-9',
    md: 'w-24 h-16 md:w-28 md:h-[4.75rem]',
    lg: 'w-36 h-24 md:w-40 md:h-28',
  }[size];

  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
      className={cn('relative flex items-center justify-center', sizeClasses, className)}
      role="img"
      aria-label="Conceptual OBGYN Logo"
    >
      {/* ── Soft bioluminescent blur glow underneath ──────────────────────── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-500/20 blur-xl dark:bg-cyan-400/25"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-teal-500/20 via-indigo-500/15 to-rose-500/20 blur-2xl opacity-70"
      />

      {/* ── Original Brand Logo Emblem ───────────────────────────────────────── */}
      <img
        src="/brand/logo-mark.png"
        alt="Conceptual OBGYN Logo"
        draggable={false}
        className="h-full w-full select-none object-contain drop-shadow-[0_4px_16px_rgba(13,148,136,0.25)] transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  );
}

export default AppBrandLogo;

