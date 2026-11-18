import { ATLAS_CATEGORIES, ATLAS_DIAGRAMS, type AtlasDiagram } from '@/data/content/visualAtlas';
import { EXTRA_PLATES } from '@/data/content/visualAtlasExtra';
import { ATLAS_PLATE_INDEX } from '@/data/content/atlasMeta';

/** Every plate, core first. Import this (not the two source files) in the UI. */
export const ALL_ATLAS_PLATES: readonly AtlasDiagram[] = [...ATLAS_DIAGRAMS, ...EXTRA_PLATES];
export { ATLAS_CATEGORIES };

if (import.meta.env.DEV) {
  const same =
    ALL_ATLAS_PLATES.length === ATLAS_PLATE_INDEX.length &&
    ALL_ATLAS_PLATES.every((plate, index) => plate.id === ATLAS_PLATE_INDEX[index]?.id);
  if (!same) console.warn('[atlas] atlasMeta.ts is out of sync with the plates — update ATLAS_PLATE_INDEX.');
}
