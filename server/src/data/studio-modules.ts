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
    id: 'pg-partograph',
    slug: 'neet-pg-partograph-labour',
    track: 'NEET_PG',
    title: 'Intrapartum Partograph & Labor Mechanics',
    summary:
      'Alert and action lines, active-phase arrest, the seven cardinal movements, and the Bishop score as the gateway to induction.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 22,
    tags: ['Partograph', 'Labour', 'Bishop score'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'pg-aph',
    slug: 'neet-pg-antepartum-haemorrhage',
    track: 'NEET_PG',
    title: 'Antepartum Hemorrhage (Previa vs Abruptio)',
    summary:
      'The pain–tone–fetal-status triad, ultrasound-first diagnosis, resuscitation, steroid timing, and the previa-versus-abruption management split.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 20,
    tags: ['Placenta previa', 'Abruption', 'Obstetric emergency'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'pg-preeclampsia',
    slug: 'neet-pg-preeclampsia-magnesium',
    track: 'NEET_PG',
    title: 'Hypertensive Disorders (Preeclampsia & MgSO4)',
    summary:
      'Diagnostic thresholds, severe features, HELLP, the Pritchard and Zuspan magnesium regimens, toxicity monitoring and delivery timing.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 21,
    tags: ['Preeclampsia', 'MgSO4', 'HELLP'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'pg-gyn-oncology',
    slug: 'neet-pg-gynaecologic-oncology',
    track: 'NEET_PG',
    title: 'Gynecologic Oncology (FIGO Staging & Management)',
    summary:
      'FIGO 2023 endometrial staging with molecular groups, cervical cancer treatment thresholds, and the ovarian cancer work-up.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 23,
    tags: ['FIGO', 'Endometrial cancer', 'Cervical cancer'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
  {
    id: 'pg-pcos-aub',
    slug: 'neet-pg-pcos-infertility-aub',
    track: 'NEET_PG',
    title: 'PCOS, Infertility & AUB (PALM-COEIN)',
    summary:
      'Rotterdam diagnosis, the ovulation-induction ladder led by letrozole, the infertility work-up, and PALM-COEIN classification of abnormal bleeding.',
    highYield: true,
    weightage: 'High Yield',
    durationMinutes: 19,
    tags: ['PCOS', 'Infertility', 'PALM-COEIN'],
    flashcardCount: 4,
    mcqCount: 3,
    updatedAtISO: UPDATED_AT,
  },
];
