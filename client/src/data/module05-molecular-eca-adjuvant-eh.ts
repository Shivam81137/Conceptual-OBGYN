import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 05 - Molecular Endometrial Cancer Adjuvant Therapy & Endometrial Hyperplasia
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten clinical revision (Molecular_ECA_Adjuvant_Therapy_Endometrial_Hyperplasia_Clinical_Revision.txt),
 * integrating the 2025 ESGO–ESTRO–ESP guideline updates, the RCOG/BSGE Green-top 67 guideline,
 * and the FIGO 2023 molecular risk-group framework. Covers MMR/IHC algorithms, four molecular
 * subgroups (POLEmut, MMRd, NSMP, p53abn), adjuvant VBT/EBRT/CT/ICI, endometrial hyperplasia
 * WHO 2014 classification, fertility-sparing management, tamoxifen / HRT endometrial effects,
 * and examiner traps / golden pearls for last-minute revision.
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle. The API only
 * reconciles the module index (`/tracks/:track/modules`).
 */

export const MODULAR_MOLECULAR_ECA_ADJUVANT_EH_MODULE: StudioModule = {
  id: 'pg-mod-05-molecular-eca-adjuvant-eh',
  track: 'NEET_PG',
  title: 'Molecular Endometrial Cancer Adjuvant Therapy & Endometrial Hyperplasia',
  shortTitle: 'Molecular ECA & EH',
  summary:
    'Risk-adapted adjuvant therapy after endometrial carcinoma surgery using FIGO 2023 stage + grade + LVSI + molecular class + ER. Four molecular groups (POLEmut, MMRd, NSMP, p53abn) guide treatment from no adjuvant (low risk) through VBT/EBRT (intermediate/high-intermediate) to chemoradiation + ICI (high risk). Endometrial hyperplasia (EH) WHO 2014 two-category system (without atypia / atypical / EIN), LNG-IUS first-line, surveillance, fertility-sparing options, tamoxifen / HRT endometrial risks, and examiner traps / golden pearls.',
  tagline:
    'Four molecular groups, FIGO 2023 risk allocation, VBT vs EBRT vs CT, EH management LNG-IUS first-line.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 55,
  tags: [
    'MMR IHC / MLH1 methylation',
    'Four molecular groups: POLEmut / MMRd / NSMP / p53abn',
    'FIGO 2023 risk groups: low / intermediate / high-intermediate / high',
    'VBT / EBRT / chemotherapy / immunotherapy',
    'Endometrial hyperplasia: WHO 2014 / EIN',
    'LNG-IUS first-line / oral progestogen alternative',
    'Tamoxifen / HRT endometrial effects',
    'Fertility-sparing atypical EH management',
  ],
  sourceTag:
    'Handwritten clinical revision (Molecular ECA Adjuvant Therapy & Endometrial Hyperplasia) • 2025 ESGO–ESTRO–ESP guideline • RCOG/BSGE Green-top 67 • FIGO 2023',
  updatedAtISO: '2026-11-13T06:00:00.000Z',
  notes: [
    {
      id: 'molecular-classification-and-mmr-ihc',
      heading: 'Molecular Classification & MMR IHC Pre-Screening',
      intro:
        'Universal tumour MMR IHC (four-protein panel: MLH1, PMS2, MSH2, MSH6) is recommended for all endometrial carcinoma patients by the 2025 ESGO–ESTRO–ESP guideline to identify patients at higher risk of Lynch syndrome and triage germline testing. MSI testing is a secondary pre-screening option.',
      bullets: [
        'MLH1 and PMS2 function as a heterodimer; loss of MLH1 commonly produces loss of both MLH1 and PMS2.',
        'MSH2 and MSH6 function as a heterodimer; loss of MSH2 commonly produces loss of both MSH2 and MSH6.',
        'Isolated PMS2 loss can occur with PMS2-related deficiency; isolated MSH6 loss can occur with MSH6-related deficiency.',
        'Interpret staining only when internal non-neoplastic controls are satisfactory.',
        'Complete loss in tumour cells is different from retained staining; weak, heterogeneous or equivocal patterns may need expert pathology review and additional molecular/MSI testing.',
      ],
      table: {
        head: ['Protein', 'Typical partner / pattern', 'Interpretation / next step'],
        rows: [
          ['MLH1', 'Partners with PMS2', 'If MLH1 loss (often with PMS2), test MLH1 promoter hypermethylation.'],
          ['PMS2', 'Partners with MLH1', 'Isolated PMS2 loss can suggest PMS2-related MMR deficiency; consider germline pathway.'],
          ['MSH2', 'Partners with MSH6', 'Loss of MSH2 often accompanies MSH6 loss; refer for Lynch evaluation as appropriate.'],
          ['MSH6', 'Partners with MSH2', 'Isolated MSH6 loss can indicate MSH6-related deficiency; consider germline pathway.'],
        ],
      },
      pearls: [
        'Universal four-panel MMR IHC is not just a prognostic test; it is universal tumour screening for Lynch-risk triage and identifies a therapeutically important MMRd group.',
        'MMRd does not automatically mean germline Lynch syndrome. MLH1 promoter methylation is the key reflex investigation when MLH1 loss is present.',
      ],
      trap: {
        title: 'Examiner trap - calling every MMRd cancer "Lynch syndrome"',
        body: 'Without MLH1 methylation / germline assessment, MMRd may be sporadic (commonly MLH1 promoter hypermethylation). IHC plus methylation and appropriate genetic assessment distinguishes the pathways.',
      },
    },
    {
      id: 'molecular-reflex-and-methylation-algorithm',
      heading: 'MLH1 Methylation Algorithm & Reflex Testing',
      intro:
        'If IHC demonstrates loss of MLH1 (usually with PMS2), perform MLH1 promoter hypermethylation analysis. Methylation supports sporadic MLH1 silencing; absence of methylation raises concern for Lynch syndrome and should trigger genetic counselling / germline evaluation, taking age and family history into account.',
      bullets: [
        'MLH1 promoter methylation detected: most often supports sporadic epigenetic silencing of MLH1.',
        'MLH1 promoter methylation not detected: raises concern for Lynch syndrome and should trigger genetic counselling / germline evaluation, taking age and family history into account.',
        'Important: a positive methylation result is a strong sporadic explanation, not a substitute for clinical judgement. An unusually young patient or strongly suggestive personal/family history may still merit genetics review.',
        'For loss involving MSH2/MSH6, isolated MSH6 or isolated PMS2: MLH1 methylation is not the relevant reflex test; proceed according to the MMR-loss pattern and hereditary-cancer pathway.',
      ],
      table: {
        head: ['IHC Pattern', 'Next Test', 'Interpretation'],
        rows: [
          ['MLH1 loss (usually with PMS2 loss)', 'MLH1 promoter hypermethylation analysis', 'Methylated → sporadic MLH1 silencing more likely; unmethylated → consider Lynch / germline testing.'],
          ['MSH2/MSH6 loss, isolated MSH6, isolated PMS2', 'Not MLH1 methylation; proceed per MMR-loss pattern and hereditary pathway', 'Genetics referral according to IHC pattern, age and family history.'],
        ],
      },
      pearls: [
        'Golden Pearl: MLH1 loss → MLH1 promoter methylation. Methylated = sporadic cause more likely; unmethylated = consider germline Lynch evaluation.',
        'Examiner trap: Ordering MLH1 methylation for MSH2/MSH6-only loss; methylation is relevant when MLH1 is lost.',
      ],
    },
    {
      id: 'four-molecular-groups',
      heading: 'Four Molecular Subgroups — Prognostic and Therapeutic Significance',
      intro:
        'The four molecular groups of endometrial carcinoma are: POLE-mutated (POLEmut), Mismatch repair-deficient (MMRd), No specific molecular profile (NSMP), and p53-abnormal (p53abn). Molecular class should be interpreted with stage, histology, grade and LVSI. It is not a replacement for anatomical staging.',
      bullets: [
        'POLE-mutated (POLEmut): pathogenic exonuclease-domain POLE mutation; ultramutated phenotype; ~7% of cases; very favourable prognosis in early disease; supports treatment de-escalation in defined stage I–II groups.',
        'MMRd: loss of one or more MMR proteins / MSI-high phenotype; ~28% of cases; Lynch triage; important predictor for immune-checkpoint inhibitor benefit; adjuvant risk depends on stage and other features.',
        'NSMP: no pathogenic POLE mutation, MMR intact, p53 wild-type; ~39% of cases; heterogeneous intermediate group; grade and ER expression refine risk and predict likelihood of response to endocrine therapy in advanced/recurrent disease.',
        'p53-abnormal (p53abn): abnormal p53 IHC pattern / TP53-altered biology; ~26% of cases; generally poorest prognosis; includes most serous carcinomas and a subset of high-grade endometrioid tumours.',
      ],
      table: {
        head: ['Molecular group', 'Defining test / biology', 'General clinical interpretation'],
        rows: [
          ['POLEmut', 'Pathogenic POLE exonuclease-domain variant; ultramutated', 'Very favourable prognosis in early disease; supports treatment de-escalation in defined stage I–II groups.'],
          ['MMRd', 'Loss of one or more MMR proteins / MSI-high; hypermutated', 'Lynch triage; important predictor for ICI benefit; adjuvant risk depends on stage and other features.'],
          ['NSMP', 'No POLE mutation, MMR intact, p53 wild-type; copy-number-low', 'Heterogeneous intermediate group; grade and ER expression refine risk and predict endocrine sensitivity.'],
          ['p53abn', 'Abnormal p53 IHC / TP53-driven biology; copy-number-high', 'Generally poorest prognosis; stage, myometrial invasion, histology and molecular classification determine adjuvant pathway.'],
        ],
      },
      pearls: [
        'Golden Pearl: The four molecular groups are POLEmut, MMRd, NSMP and p53abn.',
        'When several classifiers apply, classification follows the dominant genomic driver: POLEmut + MMRd → POLEmut; POLEmut + p53abn → POLEmut; MMRd + p53abn → MMRd.',
        'ER IHC is recommended because it supports diagnosis, refines prognosis in NSMP and predicts likelihood of response to endocrine therapy in advanced/recurrent disease.',
        'HER2 assessment should be considered in advanced or recurrent p53abn disease and in serous carcinoma/carcinosarcoma; IHC 2+ or equivocal should be followed by in-situ hybridisation.',
      ],
      trap: {
        title: 'Examiner trap - MMRd does not automatically equal germline Lynch',
        body: 'MMRd can be sporadic (commonly MLH1 promoter hypermethylation) or germline. IHC plus MLH1 methylation and appropriate genetic assessment distinguishes the pathways. Do not call every MMRd cancer "Lynch syndrome" without further assessment.',
      },
    },
    {
      id: 'molecular-integrated-adjuvant-therapy',
      heading: 'Molecularly Integrated Adjuvant Therapy — VBT, EBRT and Chemotherapy',
      intro:
        'The ESGO–ESTRO–ESP 2025 guideline requires risk-group allocation using FIGO 2023 stage and tumour biology. Factors include: FIGO 2023 stage and anatomical extent, histological type and grade, depth of myometrial invasion, LVSI (absent/focal versus substantial), lymph-node status (pN0 versus nodal metastasis), molecular class (POLEmut, MMRd, NSMP, p53abn) and, for selected NSMP decisions, oestrogen-receptor (ER) status. The guideline describes four principal adjuvant risk groups: low, intermediate, high-intermediate and high. There are also defined uncertain-risk categories where evidence is limited.',
      bullets: [
        'The guideline\'s four principal adjuvant risk groups and their recommendations are detailed in the quick‑recall algorithm (Algorithm 2).',
        'VBT principally reduces vaginal-vault recurrence; it does not provide the same pelvic nodal treatment as EBRT.',
        'EBRT treats pelvic tissues and regional nodal areas; improves pelvic and locoregional control.',
        'Chemotherapy provides systemic treatment against occult distant disease; carboplatin + paclitaxel is a common platinum-taxane backbone.',
        'For selected FIGO stage IIIm–IVAm MMRd cancers, adjuvant chemotherapy combined with an immune-checkpoint inhibitor should be considered, with or without EBRT.',
        'IMMUNOTHERAPY IN THE ADJUVANT / ADVANCED SETTING: For selected FIGO stage IIIm–IVAm MMRd cancers, ESGO 2025 states that adjuvant chemotherapy combined with an immune-checkpoint inhibitor should be considered, with or without EBRT. The precise regimen and local regulatory access depend on the clinical setting and approved indications.',
      ],
      table: {
        head: ['Risk group', 'Typical guideline strategy', 'Clinical purpose / qualification'],
        rows: [
          ['Low risk', 'No adjuvant therapy', 'Surgery alone is adequate in defined favourable molecular-stage groups.'],
          ['Intermediate', 'Consider VBT; observation may also be an option', 'VBT mainly lowers vaginal recurrence; omission is possible in selected younger / low-grade patients.'],
          ['High-intermediate', 'EBRT recommended; VBT alternative in selected pN0', 'EBRT gives optimal pelvic control; observation only in selected node-negative, low-grade, no-substantial-LVSI cases.'],
          ['High risk', 'EBRT + concurrent/adjuvant CT, or sequential CT + RT; CT +/- VBT alternative', 'Systemic and locoregional treatment for higher recurrence risk.'],
          ['Stage IIIm–IVAm MMRd', 'Consider CT + ICI +/- EBRT', 'MMRd-specific immunotherapy integration; MDT decision.'],
        ],
      },
      pearls: [
        'Golden Pearl: Low-risk = no adjuvant treatment; intermediate = consider VBT or observation; high-intermediate = EBRT for pelvic control (VBT / observation in selected pN0 patients); high-risk = chemoradiation or chemotherapy-based treatment.',
        'VBT is primarily vaginal cuff control. It does not mean that pelvic/para-aortic nodal control is equivalent to EBRT.',
        'POLEmut stage I–II disease is often favourable enough for no adjuvant therapy in defined ESGO categories; advanced-stage POLEmut disease remains an evidence-limited area.',
        'Stage IIIm–IVAm MMRd: consider chemotherapy plus an immune-checkpoint inhibitor, with or without EBRT.',
      ],
      trap: {
        title: 'Examiner trap - VBT and EBRT are not interchangeable',
        body: 'VBT principally reduces vaginal-vault recurrence; EBRT treats pelvic tissues / regional nodal areas and improves pelvic control. They are not equivalent for pelvic nodal treatment.',
      },
    },
    {
      id: 'endometrial-hyperplasia-who-2014-classification',
      heading: 'Endometrial Hyperplasia — WHO 2014 Classification',
      intro:
        'The WHO 2014 classification uses two categories based primarily on the presence or absence of cytological atypia: hyperplasia without atypia and atypical hyperplasia (often called EIN in clinical usage). Histology is required for diagnosis. The complexity of glandular architecture is no longer the defining split in the WHO 2014 two-category system.',
      bullets: [
        '1994 WHO classification (four categories based on glandular architecture + nuclear atypia): simple hyperplasia, complex hyperplasia, simple hyperplasia with atypia, complex hyperplasia with atypia. This older classification is no longer the preferred current system.',
        '2003 EIN terminology: Endometrial intraepithelial neoplasia (EIN) proposed to improve prediction of clinical outcome, interobserver reproducibility and reduce subjective bias. Three broad groups: benign endometrial hyperplasia, EIN (premalignant), endometrial carcinoma.',
        'WHO 2014 revised classification: two categories based on cytological atypia — hyperplasia without atypia and atypical hyperplasia (closely aligned with EIN terminology).',
      ],
      table: {
        head: ['Classification', 'Basis / Categories', 'Exam interpretation'],
        rows: [
          ['1994 WHO', 'Simple; complex; simple with atypia; complex with atypia. Based on glandular architecture + nuclear atypia.', 'Historical system; no longer the preferred current two-category system.'],
          ['2003 EIN', 'Benign EH; premalignant EIN; malignant EC. Designed to improve outcome prediction and reproducibility.', 'EIN is a premalignant terminology; often used alongside atypical hyperplasia.'],
          ['WHO 2014', 'Hyperplasia without atypia; atypical hyperplasia. Based on cytological atypia.', 'Current RCOG-recommended classification in Green-top 67.'],
        ],
      },
      pearls: [
        'Golden Pearl: WHO 2014 uses only two EH groups: without atypia and atypical hyperplasia.',
        'Glandular architectural complexity is no longer the defining split in the WHO 2014 two-category system.',
      ],
    },
    {
      id: 'hyperplasia-without-atypia-management',
      heading: 'Endometrial Hyperplasia Without Atypia — Management',
      intro:
        'The RCOG/BSGE guideline advises counselling that progression to endometrial carcinoma is less than 5% over 20 years and that spontaneous regression is common. This is a long-term progression estimate for the group without atypia; it is not a statement that concurrent cancer is impossible. Initial approach: identify and modify reversible risk factors (obesity, unopposed oestrogen, HRT regimen and anovulation where possible). Progestogen treatment has a higher regression rate than observation and is indicated for symptomatic AUB or failure to regress with observation.',
      bullets: [
        'FIRST-LINE MEDICAL TREATMENT: LNG-IUS is the first-line medical treatment because it provides higher regression, a more favourable bleeding profile and fewer adverse effects than oral progestogens.',
        'IF LNG-IUS IS DECLINED: Use continuous (not cyclical) oral progestogens: MPA 10–20 mg orally daily, OR norethisterone 10–15 mg orally daily.',
        'DURATION: Minimum 6 months of oral progestogen or LNG-IUS treatment is recommended to achieve histological regression. If tolerated and fertility is not desired, retain LNG-IUS for up to 5 years to reduce relapse risk, especially when it controls AUB.',
        'SURVEILLANCE: Outpatient endometrial biopsy at a minimum of 6-month intervals; obtain at least two consecutive negative 6-monthly biopsies before discharge from routine follow-up. Higher relapse-risk women (for example BMI ≥35 or treatment with oral progestogens): continue 6-monthly biopsies; after two consecutive negative biopsies, consider long-term annual biopsies. Advise prompt review if abnormal bleeding recurs after treatment.',
        'WHEN HYSTERECTOMY IS APPROPRIATE: Hysterectomy is not first-line treatment for hyperplasia without atypia. In women who do not wish to preserve fertility, it is indicated when: disease progresses to atypical hyperplasia during surveillance; no histological regression after 12 months of treatment; hyperplasia relapses after completing progestogen therapy; bleeding symptoms persist; the patient declines or cannot comply with medical treatment / required endometrial surveillance.',
      ],
      table: {
        head: ['Feature', 'Without atypia', 'Atypical hyperplasia / EIN'],
        rows: [
          ['Cancer risk', '<5% progression over 20 years (RCOG)', 'Higher progression / concurrent carcinoma risk; coexisting EC up to 43% in hysterectomy series cited by RCOG.'],
          ['Initial management', 'Address reversible risk factors; observation in selected cases; progestogen for symptomatic or persistent disease.', 'Total hysterectomy if fertility not required; exclude occult cancer.'],
          ['First-line medical', 'LNG-IUS', 'LNG-IUS for selected fertility-sparing / non-surgical management; oral progestogens second-best.'],
          ['Oral progestogen', 'Continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day if LNG-IUS declined.', 'Individualised regimen under specialist MDT; evidence is weaker.'],
          ['Duration', 'Minimum 6 months; LNG-IUS up to 5 years if appropriate.', 'Time-limited conservative plan; hysterectomy after fertility complete or treatment failure / relapse.'],
          ['Surveillance', 'Biopsy at least every 6 months; two consecutive negative before discharge.', 'Biopsy every 3 months until two consecutive negative; then every 6–12 months until hysterectomy.'],
          ['Surgery', 'Not first-line; indicated for progression, no regression at 12 months, relapse, persistent bleeding or inability to comply.', 'Total hysterectomy; BSO in postmenopausal women; individualise ovaries premenopausal.'],
        ],
      },
      pearls: [
        'Golden Pearl: LNG-IUS is first-line for hyperplasia without atypia and also first-line for selected fertility-sparing atypical EH.',
        'Oral alternative: continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day. Do not use cyclical progestogens for EH without atypia.',
        'Treat EH without atypia for at least 6 months; retain LNG-IUS up to 5 years if appropriate.',
        'Without atypia: biopsy at least every 6 months; aim for two consecutive negative samples before discharge.',
        'Atypical EH may coexist with carcinoma (up to 43% in hysterectomy cohorts cited by RCOG); total hysterectomy is definitive when fertility is not required.',
        'Do not perform routine lymphadenectomy or rely on frozen section for atypical EH alone.',
        'Avoid endometrial ablation in EH when it compromises future histological surveillance.',
      ],
      trap: {
        title: 'Examiner trap - confusing progression risk in EH without atypia with concurrent carcinoma risk in atypical EH',
        body: '<5% progression over 20 years applies to EH without atypia only. Atypical EH carries a substantially higher risk of underlying carcinoma or progression (RCOG cites concurrent carcinoma in up to 43% of women undergoing hysterectomy).',
      },
    },
    {
      id: 'atypical-hyperplasia-management',
      heading: 'Atypical Hyperplasia / EIN — Definitive Management',
      intro:
        'Atypical hyperplasia carries a substantially higher risk of underlying endometrial carcinoma or progression. RCOG cites concurrent carcinoma in up to 43% of women undergoing hysterectomy for atypical hyperplasia. Thus, a biopsy diagnosis of atypical hyperplasia must prompt consideration of occult carcinoma and specialist assessment. Definitive management: total hysterectomy is recommended when fertility is not required. Laparoscopic hysterectomy is preferred when appropriate. Avoid supracervical hysterectomy; the whole endometrium should be removed. Avoid uterine morcellation because of the risk of disseminating an occult malignancy. Routine intraoperative frozen section of the endometrium is not recommended; it is not a reliable basis for final pathology. Routine lymphadenectomy is not recommended for atypical hyperplasia alone. Postmenopausal women should be offered BSO at hysterectomy. In premenopausal women, ovarian removal should be individualised; consider bilateral salpingectomy while balancing risks of surgical menopause and ovarian malignancy. Endometrial ablation is not recommended because complete persistent destruction cannot be guaranteed and adhesions can compromise future histological surveillance.',
      bullets: [
        'FERTILITY-SPARING OR NON-SURGICAL MANAGEMENT: This is a selected option and requires careful counselling and specialist MDT review. Before treatment: exclude invasive endometrial carcinoma and coexisting ovarian cancer as far as possible; confirm histology, ideally with formal hysteroscopy and adequate sampling; review imaging (TVS and/or MRI), histology and tumour markers such as CA-125 where clinically appropriate; establish a written surveillance and treatment-duration plan in an MDT. Treatment: LNG-IUS is first-line. Oral progestogens are a second-best alternative when LNG-IUS is unsuitable or declined. The optimal regimen and long-term safety evidence are less robust than for hyperplasia without atypia. Surveillance: endometrial biopsy every 3 months until two consecutive negative biopsies are obtained. After regression, continue biopsy every 6–12 months until hysterectomy is performed. Consider hysteroscopy if biopsy cannot be obtained satisfactorily or is nondiagnostic. If disease progresses, fails to regress within a reasonable pre-agreed treatment period, or relapses, reassess for definitive surgery. Once fertility is no longer required, offer hysterectomy because relapse and progression risk remain significant.',
        'RCOG cites an observational meta-analysis for fertility-sparing treatment of atypical hyperplasia with approximately 85.6% regression, 26% relapse and 26.3% live birth. These numbers come from small, non-comparative studies and should not be interpreted as guaranteed individual outcomes.',
        'PREGNANCY / ASSISTED REPRODUCTION: Achieve histological regression on at least one sample before attempting conception. Refer to a fertility specialist. Assisted reproduction can be considered after regression; RCOG notes that it may improve live-birth prospects and reduce the interval without progestogen treatment compared with prolonged natural attempts. The decision should be individualised and made with the MDT, considering relapse risk and fertility prognosis.',
      ],
      table: {
        head: ['Feature', 'Without atypia', 'Atypical hyperplasia / EIN'],
        rows: [
          ['Cancer risk', '<5% progression over 20 years (RCOG)', 'Higher progression / concurrent carcinoma risk; coexisting EC up to 43% in hysterectomy series cited by RCOG.'],
          ['First-line medical', 'LNG-IUS', 'LNG-IUS for selected fertility-sparing / non-surgical management; oral progestogens second-best.'],
          ['Oral progestogen', 'Continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day if LNG-IUS declined.', 'Individualised regimen under specialist MDT; evidence is weaker.'],
          ['Duration', 'Minimum 6 months; LNG-IUS up to 5 years if appropriate.', 'Time-limited conservative plan; hysterectomy after fertility complete or treatment failure / relapse.'],
          ['Surveillance', 'Biopsy at least every 6 months; two consecutive negative before discharge.', 'Biopsy every 3 months until two consecutive negative; then every 6–12 months until hysterectomy.'],
          ['Surgery', 'Not first-line; indicated for progression, no regression at 12 months, relapse, persistent bleeding or inability to comply.', 'Total hysterectomy; BSO in postmenopausal women; individualise ovaries premenopausal.'],
        ],
      },
      pearls: [
        'Golden Pearl: Atypical EH definitive treatment: total hysterectomy when fertility not needed; BSO postmenopausal; individualise ovaries premenopausal; avoid routine lymphadenectomy and frozen section for atypical EH alone; avoid endometrial ablation when future histological surveillance is required.',
        'RCOG cites an observational meta-analysis for fertility-sparing treatment of atypical hyperplasia: ~85.6% regression, 26% relapse, 26.3% live birth. These numbers come from small, non-comparative studies.',
        'Fertility-sparing atypical EH: exclude invasive disease, MDT, LNG-IUS first-line, biopsy every 3 months until two negatives; offer hysterectomy after childbearing.',
        'Do not perform routine lymphadenectomy in atypical EH without confirmed carcinoma.',
        'Do not use endometrial ablation when future histological surveillance is required.',
      ],
      trap: {
        title: 'Examiner trap - managing atypical EH as benign without excluding concurrent carcinoma',
        body: 'A biopsy diagnosis of atypical hyperplasia must prompt consideration of occult carcinoma and specialist assessment. Up to 43% of women undergoing hysterectomy for atypical hyperplasia had concurrent carcinoma. Routine lymphadenectomy and frozen section are not recommended for atypical hyperplasia alone.',
      },
    },
    {
      id: 'tamoxifen-hrt-endometrial-effects',
      heading: 'Tamoxifen & HRT — Endometrial Effects',
      intro:
        'Tamoxifen is a selective oestrogen receptor modulator (SERM). Although it is anti-oestrogenic in breast tissue, its partial agonist effect in the uterus can stimulate endometrial tissue. Aromatase inhibitors are not known to increase endometrial hyperplasia/cancer risk in the way tamoxifen does. Systemic oestrogen-only HRT should not be used in women with an intact uterus; unscheduled bleeding requires prompt assessment.',
      bullets: [
        'TAMOXIFEN: Long-term tamoxifen exposure (five years) increases the risk of endometrial polyps, hyperplasia and endometrial carcinoma; risk rises with dose and duration and is more evident after menopause. Women should report abnormal bleeding or discharge promptly. Aromatase inhibitors are not known to increase EH / EC risk in the way tamoxifen does.',
        'LNG-IUS IN TAMOXIFEN USERS: LNG-IUS can reduce endometrial polyp formation and may reduce EH, but its effect on breast-cancer recurrence remains uncertain. Therefore, routine prophylactic LNG-IUS for all tamoxifen users is not recommended because the effect on breast-cancer recurrence remains uncertain.',
        'HRT AND THE ENDOMETRIUM: Core rules: systemic oestrogen-only HRT should not be used in women with an intact uterus. Women using HRT should report any unscheduled vaginal bleeding promptly and undergo appropriate evaluation. Progestogen is required to oppose systemic oestrogen in a woman with a uterus.',
        'IF EH OCCURS ON SEQUENTIAL COMBINED HRT: If the woman wishes to continue HRT, RCOG advises changing to continuous progestogen exposure, either via LNG-IUS or continuous combined HRT. Subsequent treatment and biopsy surveillance should follow the histological EH category.',
        'IF EH OCCURS ON CONTINUOUS COMBINED HRT: Review whether HRT is still needed. Discuss limits of the evidence on optimal progestogen dosing and consider LNG-IUS as the progestogen component. Continue histology-based EH management and surveillance.',
        'AFTER PREMENOPAUSAL TH + BSO: A premenopausal woman undergoing hysterectomy and BSO for EH may consider oestrogen replacement, if no contraindication, until the age of natural menopause to reduce risks of premature surgical menopause. This is a separate situation from a woman with a uterus, in whom systemic oestrogen-only HRT is contraindicated.',
      ],
      table: {
        head: ['Exposure', 'Endometrial effect', 'Surveillance / response'],
        rows: [
          ['Tamoxifen', 'Partial oestrogen agonist; increases polyps, EH and EC risk; risk rises with dose and duration.', 'Explain bleeding red flags; promptly investigate AUB / discharge; reassess tamoxifen if EH develops with oncologist.'],
          ['Aromatase inhibitors', 'Not known to increase EH / EC risk in RCOG guideline.', 'No tamoxifen-like endometrial risk signal in the cited guideline.'],
          ['LNG-IUS in tamoxifen users', 'Reduces polyps and can reduce EH; breast recurrence effect uncertain.', 'Not recommended routinely as prophylaxis for all tamoxifen users.'],
          ['Systemic oestrogen-only HRT', 'Stimulates endometrium; not appropriate in a woman with a uterus.', 'Add adequate progestogen; report unscheduled bleeding promptly.'],
          ['Sequential combined HRT', 'Hyperplasia may occur in some users.', 'If EH develops and HRT continues, change to continuous progestogen / continuous combined HRT and manage histologically.'],
          ['Continuous combined HRT', 'Better endometrial protection than unopposed oestrogen; review if EH develops.', 'Review continuing need; consider LNG-IUS as progestogen source; biopsy surveillance.'],
        ],
      },
      pearls: [
        'Golden Pearl: No systemic oestrogen-only HRT in a woman with a uterus; unscheduled bleeding should be investigated.',
        'LNG-IUS can reduce tamoxifen-associated polyps / EH, but uncertain breast-cancer recurrence effect means it is not routine prophylaxis.',
        'If EH develops during tamoxifen: reassess the ongoing need for tamoxifen with the treating breast oncologist. Consider an alternative breast-cancer endocrine strategy if appropriate to the oncology context. Manage EH according to its histological type.',
        'If EH occurs on sequential combined HRT: change to continuous progestogen exposure (LNG-IUS or continuous combined HRT) if HRT is to continue, and manage according to histology with biopsy follow-up.',
        'If EH occurs on continuous combined HRT: review whether HRT remains necessary; consider LNG-IUS as the progestogen component; continue histology-based EH management and surveillance.',
      ],
      trap: {
        title: 'Examiner trap - prescribing oestrogen-only systemic HRT to a woman with an intact uterus',
        body: 'This is contraindicated. Progestogen is required to oppose systemic oestrogen in a woman with a uterus. Unsure bleeding requires prompt assessment.',
      },
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'All endometrial carcinomas should undergo MMR IHC pre-screening for Lynch syndrome; the standard panel is MLH1, PMS2, MSH2 and MSH6.',
        'MLH1 loss (usually with PMS2 loss) → test MLH1 promoter hypermethylation before germline Lynch interpretation.',
        'MMR deficiency in an endometrial tumour does not prove that the patient has Lynch syndrome.',
        'The four molecular groups are POLE-mutated, mismatch repair-deficient (MMRd), no specific molecular profile (NSMP) and p53-abnormal (p53abn).',
        'POLE-mutated stage I–II disease is often favourable enough for no adjuvant therapy in defined ESGO categories; advanced POLEmut disease has limited data.',
        'VBT is primarily vaginal cuff control; EBRT is pelvic / regional control; chemotherapy is systemic treatment.',
        'Adjuvant treatment is based on FIGO 2023 stage + grade/histology + LVSI + nodes + molecular class, not stage alone.',
        'WHO 2014 uses only two EH groups: without atypia and atypical hyperplasia.',
        'EH diagnosis is histological. TVS supports assessment but cannot replace tissue diagnosis.',
        'Hyperplasia without atypia has a less-than-5% progression risk over 20 years in the RCOG guideline.',
        'LNG-IUS is first-line for hyperplasia without atypia and also first-line for selected fertility-sparing atypical EH.',
        'Continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day is the oral alternative when LNG-IUS is declined; do not use cyclical progestogens for EH without atypia.',
        'Treat EH without atypia for at least 6 months; retain LNG-IUS up to 5 years if appropriate.',
        'Without atypia: biopsy at least every 6 months; aim for two consecutive negative samples before discharge.',
        'Atypical EH may coexist with carcinoma (up to 43% in hysterectomy cohorts cited by RCOG); total hysterectomy is definitive when fertility is not required.',
        'Do not perform routine lymphadenectomy or rely on frozen section for atypical EH alone.',
        'Avoid endometrial ablation in EH when it compromises future histological surveillance.',
        'Tamoxifen has partial uterine agonist activity; abnormal vaginal bleeding or discharge needs prompt evaluation.',
        'LNG-IUS can reduce tamoxifen-associated polyps / EH, but uncertain breast-cancer recurrence effect means it is not routine prophylaxis.',
        'No systemic oestrogen-only HRT in a woman with a uterus; unscheduled bleeding should be investigated.',
        'EH on sequential combined HRT → switch to continuous progestogen regimen if HRT continues; manage according to histology with biopsy follow-up.',
      ],
      traps: [
        {
          title: '• Calling every MMRd cancer "Lynch syndrome" without MLH1 methylation / germline assessment.',
        },
        {
          title: '• Ordering MLH1 methylation for MSH2/MSH6-only loss; methylation is relevant when MLH1 is lost.',
        },
        {
          title: '• Treating all NSMP tumours as one uniform risk group; ER and grade matter.',
        },
        {
          title: '• Giving VBT and EBRT as interchangeable; VBT does not treat pelvic nodes equivalently.',
        },
        {
          title: '• Prescribing adjuvant chemotherapy to every Stage I tumour or withholding it from all Stage III tumours without molecular / histological assessment.',
        },
        {
          title: '• Confusing progression risk (<5% over 20 years) in EH without atypia with the concurrent carcinoma risk in atypical EH.',
        },
        {
          title: '• Using cyclical progestogens for EH without atypia when continuous treatment or LNG-IUS is preferred.',
        },
        {
          title: '• Discharging after a single negative biopsy; RCOG recommends two consecutive negative samples.',
        },
        {
          title: '• Performing hysterectomy as first-line therapy for every woman with EH without atypia.',
        },
        {
          title: '• Managing atypical EH as benign without excluding concurrent carcinoma.',
        },
        {
          title: '• Performing routine lymphadenectomy in atypical EH without confirmed carcinoma.',
        },
        {
          title: '• Using endometrial ablation when future histological surveillance is required.',
        },
        {
          title: '• Screening every asymptomatic tamoxifen user with TVS instead of investigating symptoms and histology.',
        },
        {
          title: '• Prescribing oestrogen-only systemic HRT to a woman with an intact uterus.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm5-f1',
      front: 'Which four proteins are included in the standard MMR IHC panel for endometrial carcinoma?',
      back: 'MLH1, PMS2, MSH2 and MSH6. ESGO 2025 recommends tumour MMR IHC for all endometrial carcinoma patients to triage Lynch syndrome risk.',
    },
    {
      id: 'm5-f2',
      front: 'What is the next test when tumour IHC shows loss of MLH1 (usually with PMS2)?',
      back: 'MLH1 promoter hypermethylation testing. Methylation supports sporadic MLH1 silencing; absence of methylation prompts germline Lynch evaluation according to the clinical context.',
    },
    {
      id: 'm5-f3',
      front: 'Does MMR deficiency in an endometrial tumour prove that the patient has Lynch syndrome?',
      back: 'No. MMRd can be sporadic (commonly MLH1 promoter hypermethylation) or germline. IHC plus MLH1 methylation and appropriate genetic assessment distinguishes the pathways.',
    },
    {
      id: 'm5-f4',
      front: 'Name the four molecular subgroups of endometrial carcinoma.',
      back: 'POLE-mutated, mismatch repair-deficient (MMRd), no specific molecular profile (NSMP) and p53-abnormal (p53abn).',
    },
    {
      id: 'm5-f5',
      front: 'What is the principal difference between vaginal brachytherapy and pelvic EBRT after endometrial cancer surgery?',
      back: 'VBT principally reduces vaginal-vault recurrence; EBRT treats pelvic tissues / regional nodal areas and improves pelvic control.',
    },
    {
      id: 'm5-f6',
      front: 'What is the 2025 ESGO recommendation for low-risk endometrial carcinoma?',
      back: 'No adjuvant therapy is recommended in defined low-risk stage-molecular groups, including selected stage I–II POLEmut and favourable MMRd / low-grade ER-positive NSMP categories.',
    },
    {
      id: 'm5-f7',
      front: 'What adjuvant modality is recommended for optimal pelvic control in high-intermediate-risk endometrial carcinoma?',
      back: 'EBRT is recommended. VBT is an alternative especially after lymph-node staging with pN0 nodes. Observation can be considered only in selected pN0, low-grade, no-substantial-LVSI cases.',
    },
    {
      id: 'm5-f8',
      front: 'What are the two categories in the 2014 WHO classification of endometrial hyperplasia?',
      back: 'Hyperplasia without atypia and atypical hyperplasia. The classification is based on cytological atypia; glandular architectural complexity is not the defining split.',
    },
    {
      id: 'm5-f9',
      front: 'What is the long-term risk of progression to endometrial carcinoma in EH without atypia according to RCOG?',
      back: 'Less than 5% over 20 years. Most cases regress during follow-up; correct reversible risks and use biopsy surveillance.',
    },
    {
      id: 'm5-f10',
      front: 'What is first-line medical treatment for endometrial hyperplasia without atypia?',
      back: 'LNG-IUS. It has higher regression, a more favourable bleeding profile and fewer adverse effects than oral progestogens.',
    },
    {
      id: 'm5-f11',
      front: 'What continuous oral progestogen regimens are recommended if LNG-IUS is declined for EH without atypia?',
      back: 'Medroxyprogesterone acetate 10–20 mg/day or norethisterone 10–15 mg/day. Cyclical progestogens are less effective and should not be used for regression treatment.',
    },
    {
      id: 'm5-f12',
      front: 'How is EH without atypia followed after treatment?',
      back: 'Outpatient endometrial biopsy at least every 6 months; obtain two consecutive negative biopsies before discharge. Higher-relapse-risk women (BMI ≥35 or oral progestogen) may need long-term annual biopsies after two negatives.',
    },
    {
      id: 'm5-f13',
      front: 'What is definitive treatment for atypical hyperplasia when fertility is not required?',
      back: 'Total hysterectomy, preferably laparoscopic when appropriate. Offer BSO to postmenopausal women; individualise ovarian removal in premenopausal women. Routine lymphadenectomy and frozen section are not recommended for atypical hyperplasia alone.',
    },
    {
      id: 'm5-f14',
      front: 'Why must abnormal bleeding in a woman taking tamoxifen be investigated?',
      back: 'Tamoxifen has partial oestrogen agonist activity in the uterus and increases risk of endometrial polyps, hyperplasia and cancer, particularly with longer exposure and after menopause.',
    },
    {
      id: 'm5-f15',
      front: 'What is the key HRT rule for a woman with an intact uterus?',
      back: 'Do not use systemic oestrogen-only HRT. Add adequate progestogen; investigate unscheduled vaginal bleeding promptly. If EH develops on sequential combined HRT, change to continuous progestogen / continuous combined HRT and manage according to histology with biopsy follow-up.',
    },
  ],

  mcqs: [
    {
      id: 'm5-q1',
      stem: 'A 58-year-old woman undergoes hysterectomy for endometrioid endometrial carcinoma. Tumour IHC shows loss of MLH1 and PMS2 with retained MSH2 and MSH6. What is the most appropriate next molecular test to help distinguish sporadic MLH1 silencing from a possible Lynch syndrome pathway?',
      options: ['HER2 IHC', 'MLH1 promoter hypermethylation analysis', 'p16 IHC', 'ER IHC alone'],
      answerIndex: 1,
      explanation: 'MLH1 and PMS2 function as a pair. Loss of MLH1, commonly accompanied by PMS2 loss, should trigger MLH1 promoter hypermethylation testing. Methylation supports a sporadic mechanism; absence of methylation prompts germline evaluation according to clinical history. HER2 is relevant in selected aggressive/advanced histologies; p16 is not the relevant reflex test; ER does not distinguish sporadic from germline MMR loss.',
    },
    {
      id: 'm5-q2',
      stem: 'A 63-year-old patient has an MMR-deficient endometrial carcinoma with MLH1/PMS2 loss. MLH1 promoter hypermethylation is detected. Which interpretation is most appropriate?',
      options: ['Lynch syndrome is proven and germline testing is mandatory in every case', 'Sporadic MLH1 promoter silencing is more likely, although clinical context still matters', 'The tumour is POLE-mutated by definition', 'MMR IHC should be ignored because the patient is older'],
      answerIndex: 1,
      explanation: 'MLH1 promoter hypermethylation is a common sporadic mechanism for MLH1 loss. It therefore reduces the likelihood that the tumour reflects germline Lynch syndrome. Age does not remove the value of universal tumour MMR testing. MMRd and POLEmut are distinct molecular groups.',
    },
    {
      id: 'm5-q3',
      stem: 'A 52-year-old woman has completely resected FIGO 2023 stage I low-grade endometrial carcinoma with a pathogenic POLE exonuclease-domain mutation and no other adverse features. Which broad adjuvant approach is supported by the 2025 ESGO risk framework for defined early-stage POLEmut disease?',
      options: ['Mandatory pelvic EBRT plus six cycles of chemotherapy', 'No adjuvant treatment in the defined low-risk stage I–II POLEmut categories', 'VBT plus tamoxifen', 'Mandatory extended-field para-aortic radiotherapy'],
      answerIndex: 1,
      explanation: 'POLEmut early-stage cancers have favourable prognosis, and the 2025 ESGO framework classifies selected stage I–II POLEmut categories as low risk for which no adjuvant therapy is recommended. Do not extrapolate this de-escalation to every stage III–IV POLEmut tumour because evidence is limited there and MDT discussion is required.',
    },
    {
      id: 'm5-q4',
      stem: 'A 67-year-old woman has high-intermediate-risk endometrial carcinoma after surgery. Pelvic nodes were assessed and are pN0. Which statement best reflects the 2025 ESGO guidance?',
      options: ['VBT and EBRT are identical for pelvic nodal control', 'EBRT is recommended for optimal pelvic control; VBT is an alternative particularly in pN0 patients', 'Chemotherapy is mandatory and radiotherapy is contraindicated', 'No adjuvant treatment is mandatory in all high-intermediate-risk cases'],
      answerIndex: 1,
      explanation: 'EBRT is recommended for optimal pelvic control in high-intermediate-risk disease. VBT can be an alternative, especially after lymph-node staging with pN0 nodes. No adjuvant treatment may be considered in carefully selected pN0, low-grade patients without substantial LVSI. VBT mainly addresses vaginal recurrence, not equivalent pelvic nodal treatment.',
    },
    {
      id: 'm5-q5',
      stem: 'A pathology report describes endometrial hyperplasia and asks for classification according to WHO 2014. Which classification is correct?',
      options: ['Simple, complex, simple atypical and complex atypical', 'Hyperplasia without atypia and atypical hyperplasia', 'Grade 1, Grade 2 and Grade 3 endometrial cancer', 'Benign, borderline and metastatic disease'],
      answerIndex: 1,
      explanation: 'WHO 2014 separates EH into two categories based on cytological atypia: without atypia and atypical hyperplasia. The four-category simple/complex system is the older WHO 1994 framework. EIN is a related premalignant nomenclature and is generally aligned with atypical hyperplasia.',
    },
    {
      id: 'm5-q6',
      stem: 'A 46-year-old woman has biopsy-confirmed endometrial hyperplasia without atypia and persistent heavy menstrual bleeding. She does not currently desire pregnancy and has no contraindication to an intrauterine progestogen system. What is the preferred first-line medical treatment?',
      options: ['Cyclical oral progesterone for 10 days each month', 'LNG-IUS', 'Immediate hysterectomy in every case', 'Endometrial ablation'],
      answerIndex: 1,
      explanation: 'LNG-IUS is the RCOG first-line medical therapy because it achieves higher regression, has a favourable bleeding profile and fewer adverse effects than oral progestogens. Cyclical progestogens are less effective. Hysterectomy is not first-line for EH without atypia, and ablation is not routinely recommended because future histological surveillance can be compromised.',
    },
    {
      id: 'm5-q7',
      stem: 'A woman with hyperplasia without atypia declines LNG-IUS. Which oral regimen and minimum duration are consistent with RCOG Green-top 67?',
      options: ['Cyclical MPA 5 mg/day for 10 days monthly for 2 months', 'Continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day for at least 6 months', 'Tamoxifen 20 mg/day for 5 years', 'Oestrogen-only HRT for 6 months'],
      answerIndex: 1,
      explanation: 'Continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day is recommended if LNG-IUS is declined. Treatment should be given for a minimum of 6 months. Cyclical progestogens are less effective; tamoxifen is not an EH treatment; systemic oestrogen-only HRT is inappropriate in a woman with a uterus.',
    },
    {
      id: 'm5-q8',
      stem: 'A 61-year-old postmenopausal woman has hysteroscopy-directed biopsy showing atypical endometrial hyperplasia. She has completed childbearing. What is the recommended definitive management?',
      options: ['Repeat TVS in 12 months only', 'Total hysterectomy with BSO', 'Endometrial ablation', 'LNG-IUS indefinitely without histological surveillance'],
      answerIndex: 1,
      explanation: 'Atypical hyperplasia has a substantial risk of concurrent carcinoma or progression. Total hysterectomy is recommended when fertility is not required. Postmenopausal women should be offered BSO. Routine lymphadenectomy and frozen section are not recommended for atypical hyperplasia alone. Ablation compromises future histology and is not recommended.',
    },
    {
      id: 'm5-q9',
      stem: 'A 66-year-old woman taking adjuvant tamoxifen for breast cancer reports new postmenopausal spotting. Her ultrasound shows a thickened, cystic endometrium. What is the most appropriate principle of management?',
      options: ['Reassure because cystic change is always benign', 'Investigate the bleeding with appropriate endometrial assessment; if EH is found, reassess tamoxifen with the oncologist and manage by histology', 'Stop tamoxifen without contacting oncology', 'Insert LNG-IUS routinely in every tamoxifen user'],
      answerIndex: 1,
      explanation: 'Tamoxifen has partial oestrogen agonist activity in the uterus and increases risk of polyps, EH and EC. New bleeding requires prompt assessment; ultrasound appearance alone is insufficient. If EH develops, RCOG advises reassessing the need for tamoxifen with the oncologist and managing according to histological class. Routine prophylactic LNG-IUS is not recommended because the effect on breast-cancer recurrence remains uncertain.',
    },
    {
      id: 'm5-q10',
      stem: 'A 55-year-old woman with an intact uterus develops endometrial hyperplasia while taking sequential combined HRT and wishes to continue menopausal therapy. What is the best guideline-based principle?',
      options: ['Continue sequential HRT unchanged and stop all surveillance', 'Change to continuous progestogen exposure, such as LNG-IUS or continuous combined HRT, and manage according to histology with biopsy follow-up', 'Switch to systemic oestrogen-only HRT', 'Treat with tamoxifen'],
      answerIndex: 1,
      explanation: 'RCOG advises women with EH on sequential HRT who wish to continue HRT to change to continuous progestogen intake using LNG-IUS or continuous combined HRT. Histology-based EH treatment and biopsy surveillance still apply. Systemic oestrogen-only HRT must not be used in a woman with a uterus.',
    },
  ],
};