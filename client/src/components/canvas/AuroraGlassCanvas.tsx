import { useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring, type MotionValue } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useEnvironment';
import { cn } from '@/lib/utils';

/**
 * AuroraGlassCanvas
 * ---------------------------------------------------------------------------
 * The living background: three ultra-soft radial meshes (medical blue, soft
 * surgical teal, warm lavender-rose) drifting on an infinite figure-8
 * Lissajous path (24s loop). The pointer shifts them in gentle opposite
 * parallax through springs, so the glass above visibly refracts a moving
 * field. A masked architectural dot matrix sits between the aurora and the
 * frosted veil — every glass card blurs those dots through `backdrop-filter`,
 * which is what makes the refraction legible.
 *
 * All motion is transform-only (compositor friendly) and fully skipped under
 * `prefers-reduced-motion`.
 */

const LOOP_SECONDS = 24;
const PARALLAX_X = 18;
const PARALLAX_Y = 12;

interface OrbSpec {
  key: string;
  color: string;
  className: string;
  ampX: number;
  ampY: number;
  phase: number;
  /** Multiplier for the opposite-parallax offset — larger reads as closer. */
  depth: number;
}

const ORBS: readonly OrbSpec[] = [
  {
    key: 'google-blue',
    color: '#C5D8FC',
    className: '-left-[12%] -top-[26%] h-[68vmax] w-[68vmax] blur-[110px] opacity-95 dark:opacity-[0.32]',
    ampX: 64,
    ampY: 42,
    phase: 0,
    depth: 1,
  },
  {
    key: 'google-teal',
    color: '#B2DDD9',
    className: 'right-[-14%] top-[2%] h-[60vmax] w-[60vmax] blur-[115px] opacity-90 dark:opacity-[0.28]',
    ampX: 54,
    ampY: 58,
    phase: 2.1,
    depth: 0.7,
  },
  {
    key: 'google-green',
    color: '#C8E6C9',
    className: 'bottom-[-28%] left-[16%] h-[64vmax] w-[64vmax] blur-[120px] opacity-85 dark:opacity-[0.26]',
    ampX: 72,
    ampY: 40,
    phase: 4.2,
    depth: 1.3,
  },
];

interface AuroraOrbProps {
  spec: OrbSpec;
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  reduceMotion: boolean;
}

function AuroraOrb({ spec, parallaxX, parallaxY, reduceMotion }: AuroraOrbProps): JSX.Element {
  const x = useMotionValue(Math.sin(spec.phase) * spec.ampX);
  const y = useMotionValue(Math.sin(spec.phase * 1.4) * spec.ampY);
  const omega = (2 * Math.PI) / LOOP_SECONDS;

  useAnimationFrame((time) => {
    if (reduceMotion) return;
    const t = time / 1000;
    /* Figure-8: x oscillates at ω, y at 2ω. */
    x.set(Math.sin(omega * t + spec.phase) * spec.ampX - parallaxX.get() * spec.depth);
    y.set(Math.sin(2 * omega * t + spec.phase * 0.7) * spec.ampY - parallaxY.get() * spec.depth);
  });

  return (
    <motion.div
      aria-hidden="true"
      className={cn('absolute rounded-full will-change-transform', spec.className)}
      style={{
        x,
        y,
        background: `radial-gradient(circle at center, ${spec.color} 0%, ${spec.color}00 72%)`,
      }}
    />
  );
}

export function AuroraGlassCanvas(): JSX.Element {
  const reduceMotion = usePrefersReducedMotion();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const parallaxX = useSpring(targetX, { stiffness: 46, damping: 18, mass: 0.7 });
  const parallaxY = useSpring(targetY, { stiffness: 46, damping: 18, mass: 0.7 });

  useEffect(() => {
    if (reduceMotion) return undefined;
    const onPointerMove = (event: PointerEvent): void => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      targetX.set(nx * PARALLAX_X);
      targetY.set(ny * PARALLAX_Y);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [reduceMotion, targetX, targetY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ORBS.map((spec) => (
        <AuroraOrb
          key={spec.key}
          spec={spec}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          reduceMotion={reduceMotion}
        />
      ))}

      {/* Frosted refractive veil — Google daylight wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/50 dark:from-[#0B0F17]/55 dark:via-transparent dark:to-[#0B0F17]/65" />

      {/* Architectural dot matrix: cards visibly blur these dots behind them. */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.10]"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />
    </div>
  );
}

export default AuroraGlassCanvas;
