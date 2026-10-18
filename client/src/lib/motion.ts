import type { Transition } from 'framer-motion';

/**
 * Spring physics overshoot their target: a spring settling on `blur(0px)`
 * briefly produces negative values (e.g. `blur(-0.13px)`), which the browser
 * rejects as invalid keyframes. Any transition that drives a `filter`
 * animation while other properties keep their spring feel should override the
 * `filter` key with this non-overshooting tween.
 */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const FILTER_TWEEN: Transition = {
  type: 'tween',
  duration: 0.55,
  ease: EASE_OUT_EXPO,
};

/** Merges the blur-safe tween into an existing transition as its `filter` override. */
export function withFilterTween<T extends Transition>(transition: T): T {
  return { ...transition, filter: FILTER_TWEEN };
}
