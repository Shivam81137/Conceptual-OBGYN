import type { TrackId } from '@/types/tracks';
import type { StudioModule } from '@/data/studio/types';
import { TORCH_INFECTIONS_MODULE } from '@/data/studio/modules/pg/01-torch-infections';
import { FGR_GUIDELINE_442_MODULE } from '@/data/studio/modules/pg/02-fgr-sogc-442';
import { PLACENTA_PRAEVIA_PAS_MODULE } from '@/data/studio/modules/pg/03-placenta-praevia-pas';
import { ENDOMETRIAL_UTERINE_CANCER_MODULE } from '@/data/studio/modules/pg/04-endometrial-cancer';
import { MODULAR_MOLECULAR_ECA_ADJUVANT_EH_MODULE } from '@/data/studio/modules/pg/05-molecular-eca-adjuvant-eh';
import { CERVICAL_PRECANCER_CIN_EPIGENETICS_MODULE } from '@/data/studio/modules/pg/06-cervical-precancer-cin-epigenetics';
import { TRANSFORMATION_ZONE_COLPOSCOPY_MODULE } from '@/data/studio/modules/pg/07-transformation-zone-colposcopy';
import { HPV_VIROLOGY_VACCINATION_MODULE } from '@/data/studio/modules/pg/08-hpv-virology-vaccination';
import { PRIMARY_HPV_SCREENING_AIS_MODULE } from '@/data/studio/modules/pg/09-primary-hpv-screening-ais';
import { CIN_TREATMENT_MODALITIES_MODULE } from '@/data/studio/modules/pg/10-cin-treatment-modalities';
import { SYMPTOM_RELIEF_PALLIATIVE_CARE_MODULE } from '@/data/studio/modules/pg/11-symptom-relief-palliative-care';
import { PIFU_MIRNA_IMAGING_SLN_MODULE } from '@/data/studio/modules/pg/12-pifu-mirna-imaging-sln';
import { POSTMENOPAUSAL_OVARIAN_CYSTS_MODULE } from '@/data/studio/modules/pg/13-postmenopausal-ovarian-cysts';
import { OHSS_RCOG_GTG5_MODULE } from '@/data/studio/modules/pg/14-ohss-rcog-gtg5';
import { UMBILICAL_CORD_PROLAPSE_MODULE } from '@/data/studio/modules/pg/15-umbilical-cord-prolapse';
import { ANTENATAL_CORTICOSTEROIDS_MODULE } from '@/data/studio/modules/pg/16-antenatal-corticosteroids';
import { NEONATAL_GBS_MODULE } from '@/data/studio/modules/pg/17-prevention-early-onset-neonatal-gbs';
import { AVB_OASIS_MODULE } from '@/data/studio/modules/pg/18-assisted-vaginal-birth-oasis';
import { HIV_PREGNANCY_MODULE } from '@/data/studio/modules/pg/19-hiv-pregnancy-postpartum';
import { HEPATITIS_B_PREGNANCY_MODULE } from '@/data/studio/modules/pg/20-hepatitis-b-pregnancy';
import { UTERINE_PATHOLOGY_SARCOMAS_MODULE } from '@/data/studio/modules/pg/21-uterine-pathology-mesenchymal-sarcomas';
import { GYNAE_ONCO_COMPLICATIONS_PKPD_RT_MODULE } from '@/data/studio/modules/pg/22-gynae-onco-complications-pkpd-modern-rt';
import { CHRONIC_PELVIC_PAIN_MODULE } from '@/data/studio/modules/pg/23-chronic-pelvic-pain';
import { PREMENSTRUAL_SYNDROME_MODULE } from '@/data/studio/modules/pg/24-premenstrual-syndrome';
import { SHOULDER_DYSTOCIA_MODULE } from '@/data/studio/modules/pg/25-shoulder-dystocia';
import { ECV_BREECH_MODULE } from '@/data/studio/modules/pg/26-ecv-breech';
import { OBESITY_PREGNANCY_MODULE } from '@/data/studio/modules/pg/27-obesity-pregnancy';
import { PREGNANCY_BREAST_CANCER_MODULE } from '@/data/studio/modules/pg/28-pregnancy-breast-cancer';
import { BLADDER_PAIN_SYNDROME_MODULE } from '@/data/studio/modules/pg/29-bladder-pain-syndrome';
import { CARDIOVASCULAR_DISEASE_PREGNANCY_ESC_2025_MODULE } from '@/data/studio/modules/pg/30-cardiovascular-disease-pregnancy-esc-2025';
import { HEART_FAILURE_PREGNANCY_SMFM_MODULE } from '@/data/studio/modules/pg/31-heart-failure-pregnancy-smfm';
import { PREGNANCY_HEART_DISEASE_ACOG_MODULE } from '@/data/studio/modules/pg/32-pregnancy-heart-disease-acog-pb212';
import { ANEMIA_PREGNANCY_PPH_FIGO_2025_MODULE } from '@/data/studio/modules/pg/33-anemia-pregnancy-pph-figo-2025';
import { PRECONCEPTION_CARE_PRETERM_BIRTH_FIGO_2025_MODULE } from '@/data/studio/modules/pg/34-preconception-care-preterm-birth-figo-2025';
import { PRECONCEPTION_CARE_CPG_2026_MODULE } from '@/data/studio/modules/pg/35-preconception-care-cpg-2026';
import { NORMAL_LABOR_MODULE } from '@/data/studio/modules/pg/36-normal-labor';
import { ANTENATAL_FHS_SOGC_441_MODULE } from '@/data/studio/modules/pg/37-antenatal-fetal-health-surveillance-sogc-441';
import { ANTENATAL_FETAL_SURVEILLANCE_STATPEARLS_MODULE } from '@/data/studio/modules/pg/38-antenatal-fetal-surveillance-statpearls';
import { NORMAL_ABNORMAL_PUBERTY_ENDOTEXT_MODULE } from '@/data/studio/modules/pg/39-normal-abnormal-puberty-endotext';
import { PHYSIOLOGY_OF_PUBERTY_STATPEARLS_MODULE } from '@/data/studio/modules/pg/40-physiology-of-puberty-statpearls';

/**
 * Revision Studio registry.
 * ---------------------------------------------------------------------------
 * The single ordered list of studio modules. To add a module:
 *   1. Create `studio/modules/pg/NN-slug.ts` exporting a `StudioModule`.
 *   2. Import it above and append it to `STUDIO_MODULES` (keep numeric order).
 *   3. Mirror its id in `server/src/data/studio-modules.ts` when the API
 *      needs to know about it.
 * Content ships in the client bundle (offline-first); the API only reconciles
 * the module index (`/tracks/:track/modules`).
 */

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

  /* ====================================================================== */
  /* PG — 30. Cardiovascular Disease & Pregnancy: 2025 ESC Guidelines
  /* Source: 2025 ESC Guidelines (Eur Heart J 2025)
  /* ====================================================================== */
  CARDIOVASCULAR_DISEASE_PREGNANCY_ESC_2025_MODULE,

  /* ====================================================================== */
  /* PG — 31. Heart Failure in Pregnancy: SMFM Consult Series 73          */
  /* Source: SMFM news summary (Oct 2025)                                */
  /* ====================================================================== */
  HEART_FAILURE_PREGNANCY_SMFM_MODULE,

  /* ====================================================================== */
  /* PG — 32. Pregnancy & Heart Disease: ACOG PB 212 / PQCNC              */
  /* Source: ACOG Practice Bulletin No. 212 (2019)                       */
  /* ====================================================================== */
  PREGNANCY_HEART_DISEASE_ACOG_MODULE,

  /* ====================================================================== */
  /* PG — 33. Anemia in Pregnancy & PPH Prevention: FIGO 2025
  /* Source: FIGO good practice recommendations (IJGO 2025)
  /* ====================================================================== */
  ANEMIA_PREGNANCY_PPH_FIGO_2025_MODULE,

  /* ====================================================================== */
  /* PG — 34. Preconception Care & Preterm Birth: FIGO 2025
  /* Source: FIGO good practice recommendations (IJGO 2025)
  /* ====================================================================== */
  PRECONCEPTION_CARE_PRETERM_BIRTH_FIGO_2025_MODULE,

  /* ====================================================================== */
  /* PG — 35. Preconception Care: SSGO CPG (Arch Gynecol Obstet 2026)     */
  /* Source: Arch Gynecol Obstet 2026 CPG                                */
  /* ====================================================================== */
  PRECONCEPTION_CARE_CPG_2026_MODULE,

  /* ====================================================================== */
  /* PG — 36. Normal Labor: Physiology, Evaluation & Management           */
  /* Source: StatPearls NBK544290                                        */
  /* ====================================================================== */
  NORMAL_LABOR_MODULE,

  /* ====================================================================== */
  /* PG — 37. Antenatal Fetal Health Surveillance: SOGC No. 441           */
  /* Source: SOGC CPG No. 441 (JOGC 2023)                                */
  /* ====================================================================== */
  ANTENATAL_FHS_SOGC_441_MODULE,

  /* ====================================================================== */
  /* PG — 38. Antenatal Fetal Surveillance: StatPearls                    */
  /* Source: StatPearls NBK537123                                        */
  /* ====================================================================== */
  ANTENATAL_FETAL_SURVEILLANCE_STATPEARLS_MODULE,

  /* ====================================================================== */
  /* PG — 39. Normal & Abnormal Puberty: Endotext                         */
  /* Source: Endotext NBK279024                                          */
  /* ====================================================================== */
  NORMAL_ABNORMAL_PUBERTY_ENDOTEXT_MODULE,

  /* ====================================================================== */
  /* PG — 40. Physiology of Puberty: StatPearls                           */
  /* Source: StatPearls NBK534827                                        */
  /* ====================================================================== */
  PHYSIOLOGY_OF_PUBERTY_STATPEARLS_MODULE,
] as const;

export const modulesForTrack = (track: TrackId): readonly StudioModule[] =>
  STUDIO_MODULES.filter((module) => module.track === track);

export const findStudioModule = (id: string | null | undefined): StudioModule | null =>
  (id ? STUDIO_MODULES.find((module) => module.id === id) ?? null : null);

export const studioModuleKey = (moduleId: string, itemId: string): string => `${moduleId}:${itemId}`;
