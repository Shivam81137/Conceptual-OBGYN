import { useCallback, useState } from 'react';

const KEY = 'conceptual-obgyn:atlas-stars-v1';

const read = (): string[] => {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
};

/** Starred atlas plates, persisted on the device. */
export function useAtlasStars(): { stars: ReadonlySet<string>; toggle: (id: string) => void } {
  const [stars, setStars] = useState<Set<string>>(() => new Set(read()));

  const toggle = useCallback((id: string) => {
    setStars((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(KEY, JSON.stringify([...next]));
      } catch {
        /* storage unavailable — stars last for this session only */
      }
      return next;
    });
  }, []);

  return { stars, toggle };
}
