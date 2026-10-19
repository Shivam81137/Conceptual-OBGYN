import type { StudioModuleDto } from '../modules/tracks/tracks.schema.js';

/**
 * Revision Studio module index.
 * ---------------------------------------------------------------------------
 * The interactive notes, simulators, flashcards and MCQ drills live in the
 * client bundle (instant, offline-first). This server index is the canonical
 * module registry the workspace reconciles against once the API is reachable:
 * order, high-yield weightage, durations and content counts.
 *
 * Keep the ids in lockstep with `client/src/data/revisionStudio.ts`.
 */

const UPDATED_AT = '2026-10-16T06:00:00.000Z';

export const STUDIO_MODULE_INDEX: StudioModuleDto[] = [
  {
    id: 'ug-menstrual-axis',
    slug: 'neet-ug-menstrual-axis',
    track: 'NEET_UG',
    title: 'Menstrual Cycle & Hormonal Axis',
    summary:
      'The 28-day ovarian and endometrial loop: two-cell two-gonadotropin steroidogenesis, feedback switching, ovulation timing and the endometrial read-out.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 18,
    tags: ['Hormonal axis', 'Ovulation', 'Endometrium'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'ug-gametogenesis',
    slug: 'neet-ug-gametogenesis-fertilisation',
    track: 'NEET_UG',
    title: 'Gametogenesis & Fertilization',
    summary:
      'Oocyte arrest points, spermatogenesis, capacitation and the fertilisation cascade through morula, blastocyst and the implantation window.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 16,
    tags: ['Oogenesis', 'Fertilisation', 'Implantation'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'ug-placenta',
    slug: 'neet-ug-placental-development',
    track: 'NEET_UG',
    title: 'Placental Development & Functions',
    summary:
      'Trophoblast invasion, spiral-artery remodelling, the histiotrophic-to-haemotrophic switch, placental hormones and barrier function.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 15,
    tags: ['Placentation', 'hCG', 'Spiral arteries'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'ug-lactation-parturition',
    slug: 'neet-ug-lactation-parturition-contraception',
    track: 'NEET_UG',
    title: 'Lactation, Parturition & Contraception',
    summary:
      'Lactogenesis and the milk-ejection reflex, the onset of labour and Ferguson reflex, and the mechanism-first contraception ladder.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 17,
    tags: ['Lactation', 'Parturition', 'Contraception'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'pg-torch-infections',
    slug: 'neet-pg-torch-infections',
    track: 'NEET_PG',
    title: 'TORCH Infections',
    summary:
      'The complete congenital-infection vault: serological timing, amniotic-fluid PCR windows, and toxoplasmosis, syphilis, rubella, CMV, HSV, parvovirus B19 and VZV — with the ten source algorithms and every treatment regimen.',
    highYield: true,
    weightage: 'Very High Yield',
    durationMinutes: 42,
    tags: ['TORCH', 'Congenital infection', 'Serology', 'Antenatal', 'High Yield'],
    flashcardCount: 14,
    mcqCount: 10,
    updatedAtISO: '2026-10-18T06:00:00.000Z',
  },
];
