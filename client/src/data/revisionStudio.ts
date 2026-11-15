import type { TrackId } from '@/types/tracks';
import { TORCH_INFECTIONS_MODULE } from '@/data/torchInfections';
import { FGR_GUIDELINE_442_MODULE } from '@/data/fgrGuideline442';
import { PLACENTA_PRAEVIA_PAS_MODULE } from '@/data/placentaPraeviaPasModule';
import { ENDOMETRIAL_UTERINE_CANCER_MODULE } from '@/data/endometrialCancerModule';
import { MODULAR_MOLECULAR_ECA_ADJUVANT_EH_MODULE } from '@/data/module05-molecular-eca-adjuvant-eh';
import { CERVICAL_PRECANCER_CIN_EPIGENETICS_MODULE } from '@/data/module06-cervical-precancer-cin-epigenetics';
import { TRANSFORMATION_ZONE_COLPOSCOPY_MODULE } from '@/data/module07-transformation-zone-colposcopy';
import { HPV_VIROLOGY_VACCINATION_MODULE } from '@/data/module08-hpv-virology-vaccination';
import { PRIMARY_HPV_SCREENING_AIS_MODULE } from '@/data/module09-primary-hpv-screening-ais';
import { CIN_TREATMENT_MODALITIES_MODULE } from '@/data/module10-cin-treatment-modalities';
import { SYMPTOM_RELIEF_PALLIATIVE_CARE_MODULE } from '@/data/module11-symptom-relief-palliative-care';
import { PIFU_MIRNA_IMAGING_SLN_MODULE } from '@/data/module12-pifu-mirna-imaging-sln';
import { POSTMENOPAUSAL_OVARIAN_CYSTS_MODULE } from '@/data/module13-postmenopausal-ovarian-cysts';
import { OHSS_RCOG_GTG5_MODULE } from '@/data/module14-ohss-rcog-gtg5';
import { UMBILICAL_CORD_PROLAPSE_MODULE } from '@/data/module15-umbilical-cord-prolapse';
import { ANTENATAL_CORTICOSTEROIDS_MODULE } from '@/data/module16-antenatal-corticosteroids';
import { NEONATAL_GBS_MODULE } from '@/data/module17-prevention-early-onset-neonatal-gbs';
import { AVB_OASIS_MODULE } from '@/data/module18-assisted-vaginal-birth-oasis';
import { HIV_PREGNANCY_MODULE } from '@/data/module19-hiv-pregnancy-postpartum';
import { HEPATITIS_B_PREGNANCY_MODULE } from '@/data/module20-hepatitis-b-pregnancy';
import { UTERINE_PATHOLOGY_SARCOMAS_MODULE } from '@/data/module21-uterine-pathology-mesenchymal-sarcomas';
import { GYNAE_ONCO_COMPLICATIONS_PKPD_RT_MODULE } from '@/data/module22-gynae-onco-complications-pkpd-modern-rt';
import { CHRONIC_PELVIC_PAIN_MODULE } from '@/data/module23-chronic-pelvic-pain';
import { PREMENSTRUAL_SYNDROME_MODULE } from '@/data/module24-premenstrual-syndrome';
import { SHOULDER_DYSTOCIA_MODULE } from '@/data/module25-shoulder-dystocia';
import { ECV_BREECH_MODULE } from '@/data/module26-ecv-breech';
import { OBESITY_PREGNANCY_MODULE } from '@/data/module27-obesity-pregnancy';
import { PREGNANCY_BREAST_CANCER_MODULE } from '@/data/module28-pregnancy-breast-cancer';
import { BLADDER_PAIN_SYNDROME_MODULE } from '@/data/module29-bladder-pain-syndrome';

/**
 * Revision Studio curated corpus.
 * ---------------------------------------------------------------------------
 * High-yield modules powering the workspace panes — the PG clinical vault
 * (Module 01: TORCH Infections;
 * Module 02: Fetal Growth Restriction, SOGC No. 442;
 * Module 03: Placenta Praevia & Placenta Accreta Spectrum;
 * Module 04: Endometrial / Uterine Cancer). The content is intentionally
 * offline-first: notes, comparison tables, examiner traps, simulators,
 * flashcards and MCQ drills ship in the bundle, and the API only reconciles
 * the module index (`/tracks/:track/modules`).
 */

export type StudioTabId = 'notes' | 'simulator' | 'flashcards';
export type FlashcardRating = 'again' | 'good' | 'easy';

export interface StudioNoteTable {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}

export interface StudioNoteCode {
  label: string;
  language?: string;
  source: string;
}

/** Bespoke inline SVG diagram rendered inside a concept block. */
export type StudioDiagramKind =
  | 'tvs-distance-cutoffs'
  | 'silver-cs-risk-chart'
  | 'figo-pas-grades'
  | 'scan-timeline-flowchart'
  | 'delivery-timing-matrix'
  | 'usg-doppler-mri-markers'
  | 'hysterectomy-vs-triple-p'
  | 'torch-serology-avidity-pcr'
  | 'torch-usg-signature-map'
  | 'toxoplasmosis-diagnosis-treatment'
  | 'syphilis-treatment-congenital-risk'
  | 'rubella-crs-risk-gradient'
  | 'cmv-avidity-amniocentesis'
  | 'hsv-perinatal-suppression'
  | 'parvovirus-vzv-timeline'
  | 'delphi-early-vs-late-fgr'
  | 'mvm-plgf-aspirin-pathway'
  | 'fgr-genetic-cmv-workup'
  | 'ua-doppler-waveforms-aedf-redf'
  | 'mca-cpr-ductus-venosus-cascade'
  | 'sogc-442-delivery-timing-matrix'
  | 'fgr-master-sheet-numbers'
  | 'fgr-bpp-loss-cascade';

export interface StudioNoteDiagram {
  kind: StudioDiagramKind;
  title: string;
  caption?: string;
  /** Optional key that labels the numbered callouts in the figure. */
  legend?: readonly string[];
}

export interface StudioNoteSection {
  id: string;
  heading: string;
  intro?: string;
  bullets?: readonly string[];
  flow?: readonly string[];
  table?: StudioNoteTable;
  /** Source algorithm (e.g. the extracted Mermaid commands) in a monospace panel. */
  code?: StudioNoteCode;
  /** Interactive/print-safe SVG clinical diagrams rendered with the section. */
  diagram?: readonly StudioNoteDiagram[];
  /** Golden rules rendered with a "Save Pearl to Vault" action. */
  pearls?: readonly string[];
  trap?: { title: string; body: string };
  /** Additional examiner traps for blocks that carry more than one. */
  traps?: readonly { title: string; body?: string }[];
}

export interface StudioFlashcard {
  id: string;
  front: string;
  back: string;
}

export interface StudioMcq {
  id: string;
  stem: string;
  options: readonly [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface StudioModule {
  id: string;
  track: TrackId;
  title: string;
  shortTitle: string;
  summary: string;
  /** One-line directory tagline — shorter and sharper than the full summary. */
  tagline?: string;
  highYield: boolean;
  weightage: string;
  durationMinutes: number;
  tags: readonly string[];
  sourceTag: string;
  updatedAtISO: string;
  notes: readonly StudioNoteSection[];
  flashcards: readonly StudioFlashcard[];
  mcqs: readonly StudioMcq[];
}

export interface StudioTrackTheme {
  slug: 'ug' | 'pg';
  label: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  /** Gradient for accent bars, active tabs and primary buttons. */
  gradient: string;
  gradientText: string;
  tint: string;
  text: string;
  border: string;
  ring: string;
  dot: string;
  /** Hex used by SVG chart strokes. */
  chart: string;
}

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

export const STUDIO_MODULES: readonly StudioModule[] = [
  /* ====================================================================== */
  /* PG — 1. TORCH Infections                                        */
  /* Source: Chapter 20 · Pavika Lal, Renu Gupta, Prativa Verma             */
  /* ====================================================================== */
  TORCH_INFECTIONS_MODULE,

  /* ====================================================================== */
  /* PG — 2. Fetal Growth Restriction (SOGC No. 442)                  */
  /* Source: SOGC CPG No. 442 · J Obstet Gynaecol Can 2023;45(10):102154    */
  /* ====================================================================== */
  FGR_GUIDELINE_442_MODULE,

  /* ====================================================================== */
  /* PG — 3. Placenta Praevia & Placenta Accreta Spectrum             */
  /* Source: RCOG Green-top Guideline No. 27a · FIGO PAS Consensus          */
  /* ====================================================================== */
  PLACENTA_PRAEVIA_PAS_MODULE,

  /* ====================================================================== */
  /* PG — 4. Endometrial / Uterine Cancer                                   */
  /* Source: Koskas et al. 2025 FIGO/IJGO update • ESGO–ESTRO–ESP 2025      */
  /* ====================================================================== */
  ENDOMETRIAL_UTERINE_CANCER_MODULE,

  /* ====================================================================== */
  /* PG — 5. Molecular ECA Adjuvant Therapy & Endometrial Hyperplasia       */
  /* Source: Handwritten clinical revision • 2025 ESGO–ESTRO–ESP • RCOG 67  */
  /* ====================================================================== */
  MODULAR_MOLECULAR_ECA_ADJUVANT_EH_MODULE,

  /* ====================================================================== */
  /* PG — 6. Cervical Precancer (CIN), Epigenetics & HPV-Associated Lesions  */
  /* Source: Handwritten clinical revision • 2012 LAST • WHO 2026 HPV DNA   */
  /*         genotyping guideline • Bhatla et al. 2025 FIGO update           */
  /* ====================================================================== */
  CERVICAL_PRECANCER_CIN_EPIGENETICS_MODULE,

  /* ====================================================================== */
  /* PG — 7. Transformation Zone Anatomy & Diagnostic Colposcopy             */
  /* Source: Handwritten clinical revision • IFCPC/IARC • ASCCP 2019/2023   */
  /*         • WHO 2026 HPV DNA genotyping guideline • Bhatla et al. 2025    */
  /* ====================================================================== */
  TRANSFORMATION_ZONE_COLPOSCOPY_MODULE,

  /* ====================================================================== */
  /* PG — 8. HPV Virology (E6/E7) & Prophylactic Vaccination                 */
  /* Source: Handwritten clinical revision • Bhatla et al. 2025 FIGO        */
  /*         • WHO 2022 position paper • WHO SAGE October 2026              */
  /* ====================================================================== */
  HPV_VIROLOGY_VACCINATION_MODULE,

  /* ====================================================================== */
  /* PG — 9. Primary HPV Screening, LSIL/HSIL & Glandular AIS                */
  /* Source: Handwritten clinical revision • WHO 2021 screening             */
  /*         • WHO 2026 HPV DNA genotyping • Bhatla 2025 • BHIVA 2025/2026   */
  /* ====================================================================== */
  PRIMARY_HPV_SCREENING_AIS_MODULE,

  /* ====================================================================== */
  /* PG — 10. CIN Treatment Modalities: Ablation, LEEP & Conization          */
  /* Source: Handwritten clinical revision • WHO 2014/2019/2021             */
  /*         • WHO 2026 treatment algorithm • Bhatla et al. 2025            */
  /* ====================================================================== */
  CIN_TREATMENT_MODALITIES_MODULE,

  /* ====================================================================== */
  /* PG — 11. Symptom Relief, Cancer Pain Ladder & Palliative Care           */
  /* Source: Handwritten clinical revision • ESGO/ESTRO/ESP cervical cancer  */
  /*         • ESGO resource-stratified 2025 • ASCO/ESMO cancer pain         */
  /* ====================================================================== */
  SYMPTOM_RELIEF_PALLIATIVE_CARE_MODULE,

  /* ====================================================================== */
  /* PG — 12. ESGO Follow-Up (PIFU), HPV miRNAs & Oncological Imaging / SLN  */
  /* Source: Handwritten clinical revision • ESGO 2025 follow-up             */
  /*         • Renz et al. 2025 ovarian review • IETA • IOTA                 */
  /* ====================================================================== */
  PIFU_MIRNA_IMAGING_SLN_MODULE,

  /* ====================================================================== */
  /* PG — 13. Ovarian Cysts in Postmenopausal Women: RCOG GTG 34             */
  /* Source: Handwritten clinical revision • RCOG GTG 34, amended Dec 2025   */
  /*         • Renz et al. 2025 ovarian review                               */
  /* ====================================================================== */
  POSTMENOPAUSAL_OVARIAN_CYSTS_MODULE,

  /* ====================================================================== */
  /* PG — 14. Ovarian Hyperstimulation Syndrome: RCOG GTG 5                  */
  /* Source: Handwritten clinical revision • RCOG GTG 5, 2026               */
  /*         • ASRM 2023 prevention guidance                                */
  /* ====================================================================== */
  OHSS_RCOG_GTG5_MODULE,

  /* ====================================================================== */
  /* PG — 15. Umbilical Cord Prolapse: RCOG GTG 50                           */
  /* Source: Handwritten clinical revision • RCOG GTG 50                    */
  /* ====================================================================== */
  UMBILICAL_CORD_PROLAPSE_MODULE,

  /* ====================================================================== */
  /* PG — 16. Antenatal Corticosteroids: RCOG GTG 74                         */
  /* Source: Handwritten clinical revision • RCOG GTG 74, reviewed 2025     */
  /* ====================================================================== */
  ANTENATAL_CORTICOSTEROIDS_MODULE,

  /* ====================================================================== */
  /* PG — 17. Prevention of Early-Onset Neonatal GBS Disease: RCOG GTG 36   */
  /* Source: Handwritten clinical revision • RCOG GTG 36, 2017              */
  /*         • ACOG Committee Opinion No. 797                               */
  /* ====================================================================== */
  NEONATAL_GBS_MODULE,

  /* ====================================================================== */
  /* PG — 18. Assisted Vaginal Birth & OASIS: RCOG GTG 26 & 29              */
  /* Source: Handwritten clinical revision • RCOG GTG 26 (2020)             */
  /*         • RCOG GTG 29 • FIGO 2025 • IUGA 2026                          */
  /* ====================================================================== */
  AVB_OASIS_MODULE,

  /* ====================================================================== */
  /* PG — 19. HIV in Pregnancy & Postpartum: BHIVA 2025                     */
  /* Source: BHIVA 2025 • HIV Medicine 2025;26:1757-1880                    */
  /* ====================================================================== */
  HIV_PREGNANCY_MODULE,

  /* ====================================================================== */
  /* PG — 20. Hepatitis B in Pregnancy: SMFM Consult #69                    */
  /* Source: SMFM Consult Series #69, AJOG April 2024 • ACOG-endorsed       */
  /* ====================================================================== */
  HEPATITIS_B_PREGNANCY_MODULE,

  /* ====================================================================== */
  /* PG — 21. Uterine Pathology & Mesenchymal Sarcomas                      */
  /* Source: Handwritten gynae-onco revision • WHO 2020 classification      */
  /* ====================================================================== */
  UTERINE_PATHOLOGY_SARCOMAS_MODULE,

  /* ====================================================================== */
  /* PG — 22. Gynae-Onco Surgical Complications, PKPD & Modern RT           */
  /* Source: Handwritten gynae-onco revision • FIGO/ESGO 2025               */
  /* ====================================================================== */
  GYNAE_ONCO_COMPLICATIONS_PKPD_RT_MODULE,

  /* ====================================================================== */
  /* PG — 23. Chronic Pelvic Pain: RCOG GTG 41                              */
  /* Source: Handwritten benign gynaecology revision • RCOG GTG 41          */
  /* ====================================================================== */
  CHRONIC_PELVIC_PAIN_MODULE,

  /* ====================================================================== */
  /* PG — 24. Premenstrual Syndrome: ISPMD / NAPS                           */
  /* Source: Handwritten benign gynaecology revision • ISPMD • NAPS         */
  /* ====================================================================== */
  PREMENSTRUAL_SYNDROME_MODULE,

  /* ====================================================================== */
  /* PG — 25. Shoulder Dystocia: RCOG GTG 42                                */
  /* Source: Handwritten intrapartum revision • RCOG GTG 42                 */
  /* ====================================================================== */
  SHOULDER_DYSTOCIA_MODULE,

  /* ====================================================================== */
  /* PG — 26. External Cephalic Version & Breech: RCOG GTG 20a/20b          */
  /* Source: Handwritten intrapartum revision • RCOG GTG 20a and 20b        */
  /* ====================================================================== */
  ECV_BREECH_MODULE,

  /* ====================================================================== */
  /* PG — 27. Obesity in Pregnancy: RCOG GTG 72                             */
  /* Source: Handwritten high-risk obstetric revision • RCOG GTG 72         */
  /* ====================================================================== */
  OBESITY_PREGNANCY_MODULE,

  /* ====================================================================== */
  /* PG — 28. Pregnancy & Breast Cancer: RCOG GTG 12                        */
  /* Source: Handwritten obstetric oncology revision • RCOG GTG 12 (2025)   */
  /* ====================================================================== */
  PREGNANCY_BREAST_CANCER_MODULE,

  /* ====================================================================== */
  /* PG — 29. Bladder Pain Syndrome: RCOG GTG 70                            */
  /* Source: Handwritten benign gynaecology revision • RCOG GTG 70          */
  /* ====================================================================== */
  BLADDER_PAIN_SYNDROME_MODULE,
] as const;

export const modulesForTrack = (track: TrackId): readonly StudioModule[] =>
  STUDIO_MODULES.filter((module) => module.track === track);

export const findStudioModule = (id: string | null | undefined): StudioModule | null =>
  (id ? STUDIO_MODULES.find((module) => module.id === id) ?? null : null);

export const studioModuleKey = (moduleId: string, itemId: string): string => `${moduleId}:${itemId}`;
