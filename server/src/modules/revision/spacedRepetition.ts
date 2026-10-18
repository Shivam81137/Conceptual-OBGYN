/**
 * SM-2 spaced repetition, tuned for medical image-based questions.
 * Pure functions only: deterministic, trivially unit-testable, and identical on
 * the server (review queue computation) and the client (offline reviews).
 */

export type ReviewGrade = 0 | 1 | 2 | 3 | 4 | 5;

export interface SchedulingState {
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  lapses: number;
}

export interface ScheduledResult extends SchedulingState {
  dueAt: Date;
}

export const MIN_EASE_FACTOR = 1.3;
export const DEFAULT_EASE_FACTOR = 2.5;
/** Image-based questions get a shorter first interval — visual recall decays faster. */
export const IBQ_FIRST_INTERVAL_DAYS = 0.5;

const clampEase = (value: number): number => Math.min(3, Math.max(MIN_EASE_FACTOR, Number(value.toFixed(2))));

const addDays = (from: Date, days: number): Date => new Date(from.getTime() + days * 86_400_000);

export function initialSchedulingState(): SchedulingState {
  return { easeFactor: DEFAULT_EASE_FACTOR, intervalDays: 0, repetitions: 0, lapses: 0 };
}

/**
 * Applies one review.
 *   grade < 3 → lapse: repetitions reset, interval restarts at the lapse interval.
 *   grade ≥ 3 → success: 1 day, then 6 days, then interval × ease factor.
 */
export function scheduleNextReview(
  state: SchedulingState,
  grade: ReviewGrade,
  options: { now?: Date; imageBased?: boolean } = {},
): ScheduledResult {
  const now = options.now ?? new Date();
  const delta = grade - 3;
  const easeFactor = clampEase(state.easeFactor + (0.1 - delta * 0.08 - delta * delta * 0.02));

  if (grade < 3) {
    const lapseInterval = options.imageBased ? IBQ_FIRST_INTERVAL_DAYS : 1;
    return {
      easeFactor,
      intervalDays: lapseInterval,
      repetitions: 0,
      lapses: state.lapses + 1,
      dueAt: addDays(now, lapseInterval),
    };
  }

  const repetitions = state.repetitions + 1;
  const intervalDays =
    repetitions === 1
      ? options.imageBased
        ? IBQ_FIRST_INTERVAL_DAYS * 2
        : 1
      : repetitions === 2
        ? 6
        : Number((state.intervalDays * easeFactor).toFixed(2));

  return { easeFactor, intervalDays, repetitions, lapses: state.lapses, dueAt: addDays(now, intervalDays) };
}

/** Human-readable tray label used by the revision queue UI. */
export function describeInterval(dueAt: Date, now: Date = new Date()): string {
  const days = (dueAt.getTime() - now.getTime()) / 86_400_000;
  if (days <= 0) return 'due now';
  if (days < 1) return `in ${Math.round(days * 24)} h`;
  if (days < 30) return `in ${Math.round(days)} d`;
  return `in ${(days / 30).toFixed(1)} mo`;
}
