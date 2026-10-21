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
      'The complete congenital-infection vault: serology and IgG avidity, the 18-20-week amniotic-PCR gateway, the fetal ultrasound signature, and toxoplasmosis, syphilis, rubella, CMV, HSV, parvovirus B19 and VZV - with every treatment regimen, gestational cutoff and examiner trap.',
    highYield: true,
    weightage: 'Very High Yield',
    durationMinutes: 45,
    tags: ['TORCH', 'Serology & Avidity', 'Toxoplasmosis', 'Syphilis', 'Rubella & CMV', 'HSV & Parvovirus B19', 'Antenatal'],
    flashcardCount: 15,
    mcqCount: 10,
    updatedAtISO: '2026-10-21T06:00:00.000Z',
  },
  {
    id: 'pg-mod-02-fgr',
    slug: 'neet-pg-fetal-growth-restriction-sogc-442',
    track: 'NEET_PG',
    title: 'Fetal Growth Restriction (SOGC Guideline No. 442)',
    summary:
      'SOGC No. 442 + Gordijn Delphi in one vault: constitutional SGA vs pathological FGR, early (<32w) vs late (≥32w) criteria, PlGF <100 pg/mL and sFlt-1/PlGF >38–85, bedtime aspirin before 16 weeks, the UtA → UA → MCA/CPR → DV Doppler cascade, AEDF/REDF villous thresholds, TRUFFLE cCTG STV and the 30–39-week delivery ladder.',
    highYield: true,
    weightage: 'Very High Yield',
    durationMinutes: 45,
    tags: [
      'Delphi Consensus (<32 vs ≥32 Wks)',
      'SGA (<10th) vs Severe FGR (<3rd)',
      'PlGF <100 pg/mL & Aspirin <16 Wks',
      'UA Doppler (AEDF / REDF) & CPR',
      'Ductus Venosus a-Wave & cCTG STV',
      'SOGC Delivery Cutoffs (30 to 39 Wks)',
    ],
    flashcardCount: 15,
    mcqCount: 10,
    updatedAtISO: '2026-10-21T06:00:00.000Z',
  },
  {
    id: 'pg-mod-03-placenta-praevia-pas',
    slug: 'neet-pg-placenta-praevia-accreta-spectrum',
    track: 'NEET_PG',
    title: 'Placenta Praevia & Placenta Accreta Spectrum (PAS)',
    summary:
      'RCOG GTG 27a + FIGO in one vault: placenta praevia vs the < 20 mm low-lying placenta, Silver’s 3% → 67% prior-CS escalation, FIGO grades 1–3c, the lacunae/clear-zone/bridging-vessel ultrasound signature, the 18–21 → 32 → 36-week TVS protocol, steroid and delivery windows, and the NPSA 6-element bundle with caesarean hysterectomy or Triple-P.',
    highYield: true,
    weightage: 'Very High Yield',
    durationMinutes: 45,
    tags: [
      'Placenta Praevia',
      'PAS · FIGO 1–3c',
      'TVS <20 mm Cutoff',
      'Silver CS Curve',
      'Lacunae & Bridging Vessels',
      '32 & 36 Week Scans',
      'NPSA Bundle & Triple-P',
    ],
    flashcardCount: 15,
    mcqCount: 10,
    updatedAtISO: '2026-10-21T06:00:00.000Z',
  },
];
