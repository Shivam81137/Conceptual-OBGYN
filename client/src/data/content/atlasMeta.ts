/**
 * Tiny index of the Visual Atlas (id + title), kept separate so the landing card
 * can show the count and "plate of the day" without loading the heavy SVG
 * plates. Keep in the same order as `atlasPlates.ts` (a dev warning checks it).
 */
export const ATLAS_PLATE_INDEX: readonly { id: string; title: string }[] = [
  { id: 'fetal-skull', title: 'Fetal skull diameters' },
  { id: 'pelvic-planes', title: 'Pelvic planes & diameters' },
  { id: 'partograph', title: 'Partograph — the 4-hour rule' },
  { id: 'menstrual-cycle', title: 'Menstrual cycle hormonal axis' },
  { id: 'cardinal-movements', title: 'Cardinal movements of labour' },
  { id: 'ctg-decelerations', title: 'CTG deceleration patterns' },
  { id: 'previa-abruption', title: 'Placenta previa vs abruptio' },
  { id: 'figo-endometrial', title: 'FIGO endometrial cancer staging' },
  { id: 'ectopic-sites', title: 'Ectopic pregnancy sites' },
  { id: 'pcos-rotterdam', title: 'PCOS — Rotterdam criteria' },
  { id: 'bishop-score', title: 'Bishop score' },
  { id: 'helperr', title: 'Shoulder dystocia — HELPERR' },
  { id: 'apgar', title: 'Apgar score' },
  { id: 'palm-coein', title: 'PALM-COEIN (FIGO AUB)' },
  { id: 'figo-cervix', title: 'FIGO cervical cancer staging' },
  { id: 'pph-4ts', title: 'PPH — the 4 Ts' },
  { id: 'preeclampsia', title: 'Pre-eclampsia & severe features' },
  { id: 'mgso4-toxicity', title: 'MgSO4 toxicity ladder' },
  { id: 'contraceptive-failure', title: 'Contraceptive failure rates' },
  { id: 'puberty-sequence', title: 'Pubertal sequence in girls' },
];

export const ATLAS_PLATE_COUNT = ATLAS_PLATE_INDEX.length;

/** Deterministic "plate of the day" — same plate all day, rotates daily. */
export const plateOfTheDay = (date = new Date()): { id: string; title: string } => {
  const dayNumber = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
  return ATLAS_PLATE_INDEX[dayNumber % ATLAS_PLATE_INDEX.length] as { id: string; title: string };
};
