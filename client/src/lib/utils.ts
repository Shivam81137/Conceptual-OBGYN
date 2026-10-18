import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind-aware class composer. */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
