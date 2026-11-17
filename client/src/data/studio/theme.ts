import type { TrackId } from '@/types/tracks';
import type { StudioTrackTheme } from '@/data/studio/types';

export const STUDIO_TRACK_THEME: Record<TrackId, StudioTrackTheme> = {
  NEET_UG: {
    slug: 'ug',
    label: 'UG',
    title: 'Revision Studio',
    eyebrow: 'UG',
    subtitle: 'NCERT physiology and embryology, distilled to causal chains.',
    gradient: 'from-emerald-500 to-teal-500',
    gradientText: 'from-emerald-600 to-teal-500 dark:from-emerald-300 dark:to-teal-300',
    tint: 'bg-emerald-500/[0.08]',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-500/30',
    ring: 'stroke-emerald-500',
    dot: 'bg-emerald-500',
    chart: '#10B981',
  },
  NEET_PG: {
    slug: 'pg',
    label: 'PG',
    title: 'Clinical Vault',
    eyebrow: 'PG',
    subtitle: 'Congenital infections and placental insufficiency — serology, Doppler staging and delivery timing.',
    gradient: 'from-indigo-600 to-rose-500',
    gradientText: 'from-indigo-600 to-rose-500 dark:from-indigo-300 dark:to-rose-300',
    tint: 'bg-indigo-500/[0.08]',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-500/30',
    ring: 'stroke-indigo-500',
    dot: 'bg-indigo-500',
    chart: '#4F46E5',
  },
};
