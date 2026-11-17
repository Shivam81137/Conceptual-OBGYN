import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 21 - Uterine Pathology & Mesenchymal Sarcomas
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten histopathology notes (cancer pdf, pages 41-46)
 * with molecular terminology expanded where it prevents a classification error.
 *
 * Covers:
 * - The lineage-first approach to a uterine histopathology question
 * - Endometrial hyperplasia, atypia/EIN and endometrioid grading
 * - Serous, clear-cell and the other endometrial carcinoma histotypes
 * - Leiomyoma variants, including FH-deficient leiomyoma and HLRCC
 * - Leiomyosarcoma, the 2-of-3 rule and STUMP
 * - Endometrial stromal tumours and the HG-ESS molecular groups
 * - Adenosarcoma, carcinosarcoma and the mixed epithelial-mesenchymal spectrum
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const UTERINE_PATHOLOGY_SARCOMAS_MODULE: StudioModule = {
  id: 'pg-mod-21-uterine-pathology-mesenchymal-sarcomas',
  track: 'NEET_PG',
  title: 'Uterine Pathology & Mesenchymal Sarcomas',
  shortTitle: 'Uterine Pathology & Sarcomas',
  summary:
    'Complete PG histopathology revision module on uterine tumours, organised by lineage: epithelial, smooth-muscle, endometrial stromal and biphasic lesions. Features the hyperplasia versus atypical hyperplasia/EIN distinction, FIGO endometrioid grading by non-squamous solid growth, serous carcinoma and serous EIC, clear-cell hobnail morphology, the conventional, cellular, bizarre and FH-deficient leiomyoma variants, the 2-of-3 leiomyosarcoma rule and its epithelioid/myxoid exceptions, STUMP, low-grade and high-grade endometrial stromal sarcoma with YWHAE::NUTM2 and BCOR groups, adenosarcoma with sarcomatous overgrowth and carcinosarcoma as a metaplastic carcinoma, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Lineage first, then the 2-of-3 rule, molecular groups and biphasic traps.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'Lineage First',
    'Atypical Hyperplasia / EIN',
    'FIGO Grade 1-3',
    'Serous EIC',
    'Clear-Cell Hobnail',
    'FH-Deficient Leiomyoma',
    'LMS 2-of-3 Rule',
    'STUMP',
    'LG-ESS vs HG-ESS',
    'YWHAE::NUTM2',
    'BCOR ITD',
    'Adenosarcoma vs Carcinosarcoma',
  ],
  sourceTag:
    'Handwritten histopathology revision (cancer pdf, pp. 41-46) • WHO-style lineage classification • FIGO grading and molecular updates',
  updatedAtISO: '2026-11-14T15:00:00.000Z',
  notes: [
    {
      id: 'lineage-framework',
      heading: 'How to Approach a Uterine Histopathology Question',
      intro:
        'Every uterine tumour question starts with lineage, not with a single marker. Identify whether the lesion is epithelial, smooth-muscle, endometrial stromal or biphasic, then assess architecture, cytology, mitotic activity, tumour-cell necrosis, invasion and immunophenotype together.',
      flow: [
        'Epithelial lineage · hyperplasia, endometrioid, serous, clear-cell and other carcinomas',
        'Smooth-muscle lineage · leiomyoma, leiomyosarcoma or STUMP',
        'Endometrial stromal lineage · stromal nodule, LG-ESS or HG-ESS',
        'Biphasic epithelial and stromal · adenofibroma, adenosarcoma or adenomyoma',
        'Biphasic epithelial and sarcomatous · carcinosarcoma (metaplastic carcinoma)',
        'Then assess architecture, cytology, mitoses, tumour-cell necrosis and invasion',
        'Correlate morphology with immunohistochemistry and molecular testing',
      ],
      bullets: [
        'Epithelial: endometrial hyperplasia, endometrioid carcinoma, serous carcinoma, clear-cell carcinoma and other endometrial carcinomas.',
        'Smooth Muscle: leiomyoma, leiomyosarcoma and smooth-muscle tumour of uncertain malignant potential (STUMP).',
        'Endometrial Stroma: endometrial stromal nodule, low-grade ESS and high-grade ESS.',
        'Biphasic Epithelial-Stromal: adenomyoma, adenofibroma, atypical polypoid adenomyoma and adenosarcoma.',
        'Biphasic Epithelial-Sarcomatous: carcinosarcoma, historically called malignant mixed Mullerian tumour (MMT).',
        'Modern View: uterine carcinosarcoma is a metaplastic high-grade carcinoma, not a conventional sarcoma.',
        'No Single Marker: one isolated feature or one immunostain rarely establishes the diagnosis.',
        'Adequate Sampling: classification of smooth-muscle and stromal tumours depends on representative sections.',
        'Correlate: use molecular tests when they genuinely resolve a differential, not as a substitute for morphology.',
      ],
      table: {
        head: ['Lineage', 'Tumour family', 'Defining clue'],
        rows: [
          ['Epithelial', 'Endometrial carcinoma', 'Gland formation, cytology and histotype-specific molecular profile'],
          ['Smooth muscle', 'Leiomyoma / LMS / STUMP', 'Fascicles, atypia, coagulative necrosis and mitoses assessed together'],
          ['Endometrial stroma', 'Stromal nodule / LG-ESS / HG-ESS', 'Uniform stroma, arterioles, infiltrative tongues or high-grade round cells'],
          ['Epithelial + stroma', 'Adenosarcoma', 'Benign glands with malignant stroma and leaf-like architecture'],
          ['Epithelial + sarcoma', 'Carcinosarcoma', 'Both components malignant; treated as metaplastic carcinoma'],
        ],
      },
      pearls: [
        'Golden Pearl: name the lineage before naming the tumour.',
        'Carcinosarcoma is a metaplastic carcinoma in modern classification.',
        'Gland crowding alone does not establish atypia; architecture and cytology must agree.',
      ],
      trap: {
        title: 'Examiner trap - calling every biphasic uterine tumour a sarcoma',
        body: 'Adenosarcoma has benign glands and malignant stroma; carcinosarcoma has two malignant components; adenofibroma is benign. They are not interchangeable, and carcinosarcoma behaves biologically as a carcinoma.',
      },
      traps: [
        {
          title: '• Diagnosing from one immunostain instead of the full morphology.',
        },
        {
          title: '• Treating carcinosarcoma as a conventional uterine sarcoma.',
        },
        {
          title: '• Forgetting that adequate sampling is part of the diagnosis.',
        },
      ],
    },
    {
      id: 'hyperplasia-endometrioid',
      heading: 'Endometrial Hyperplasia & Endometrioid Carcinoma Grading',
      intro:
        'Endometrial hyperplasia is defined by an increased gland-to-stroma ratio with altered glandular architecture. The practical division is hyperplasia without atypia versus atypical hyperplasia/endometrial intraepithelial neoplasia (EIN), because the risk of concurrent or subsequent carcinoma differs substantially.',
      flow: [
        'Assess gland-to-stroma ratio and glandular architecture',
        'Look for cytological atypia relative to the background endometrium',
        'No atypia · hyperplasia without atypia; lower progression risk',
        'Atypia present · atypical hyperplasia/EIN; premalignant',
        'Exclude a concurrent endometrioid carcinoma before calling it isolated precursor',
        'Grade endometrioid carcinoma by non-squamous solid growth',
        'Integrate nuclear atypia, histotype and molecular group into final risk',
      ],
      bullets: [
        'Hyperplasia Without Atypia: crowded, irregular or cystically dilated glands without significant cytological atypia.',
        'Risk Context: prolonged unopposed oestrogen, obesity, chronic anovulation and exogenous oestrogen without adequate progestogen.',
        'Progression Risk: substantially lower than atypical hyperplasia/EIN.',
        'Management Without Atypia: usually progestogen-based with follow-up sampling according to symptoms, risk factors and response.',
        'Atypical Hyperplasia/EIN: crowded glands with cytological features that differ from the background endometrium.',
        'Premalignant: atypical hyperplasia/EIN carries a clinically important risk of concurrent or subsequent endometrioid carcinoma.',
        'Exclude Cancer: sample adequately before assuming the lesion is an isolated precursor.',
        'Definitive Surgery: hysterectomy is definitive when childbearing is complete and the patient is suitable for surgery.',
        'Fertility-Sparing: progestin treatment requires careful selection, exclusion of invasive cancer, repeated histological surveillance and specialist follow-up.',
        'Grade 1: 5 percent or less solid non-squamous growth.',
        'Grade 2: 6 to 50 percent solid non-squamous growth.',
        'Grade 3: more than 50 percent solid non-squamous growth.',
        'Nuclear Upgrade: marked nuclear atypia out of proportion to architectural grade may justify increasing the grade by one in the appropriate setting.',
        'Squamous Differentiation: squamous elements within an endometrioid carcinoma do not convert it into a pure squamous carcinoma.',
        'Villoglandular Pattern: slender papillae may occur while endometrioid cytology and lower-grade features are retained.',
        'Not Serous: do not label a villoglandular endometrioid tumour as serous merely because papillary architecture is present.',
      ],
      table: {
        head: ['Diagnosis', 'Architecture', 'Cytology', 'Clinical meaning'],
        rows: [
          ['Hyperplasia without atypia', 'Crowded or cystically dilated glands', 'No significant atypia', 'Lower progression risk; progestogen and follow-up'],
          ['Atypical hyperplasia / EIN', 'Crowded glands', 'Cytology differs from background', 'Premalignant; exclude concurrent carcinoma'],
          ['Endometrioid grade 1', '5% or less solid non-squamous growth', 'Low-grade', 'Architectural grading'],
          ['Endometrioid grade 2', '6-50% solid non-squamous growth', 'Intermediate', 'Architectural grading'],
          ['Endometrioid grade 3', 'More than 50% solid non-squamous growth', 'High-grade', 'Architectural grading'],
        ],
      },
      pearls: [
        'Golden Pearl: atypical hyperplasia/EIN is a premalignant lesion, not just a more crowded hyperplasia.',
        'FIGO endometrioid grade counts solid non-squamous growth only.',
        'Villoglandular architecture alone does not make a tumour serous.',
      ],
      trap: {
        title: 'Examiner trap - equating gland crowding with atypia',
        body: 'Hyperplasia without atypia can be architecturally crowded. The diagnosis of atypical hyperplasia/EIN requires cytological features that differ from the background endometrium, and a concurrent carcinoma must be excluded.',
      },
      traps: [
        {
          title: '• Calling all complex hyperplasia atypical.',
        },
        {
          title: '• Including squamous areas in the solid-growth grade.',
        },
        {
          title: '• Treating a villoglandular endometrioid tumour as serous.',
        },
      ],
    },
    {
      id: 'serous-clear-other',
      heading: 'Serous, Clear-Cell & Other Endometrial Carcinoma Histotypes',
      intro:
        'Serous carcinoma is an aggressive high-grade endometrial carcinoma that often arises in atrophic endometrium and is strongly associated with abnormal TP53/p53 pathway function. Clear-cell carcinoma is uncommon but high risk. The historical Type I/Type II model is useful teaching shorthand, not a complete modern classification.',
      flow: [
        'Recognise complex papillary, micropapillary, glandular or solid architecture',
        'Identify marked pleomorphism, prominent nucleoli and brisk mitoses',
        'Consider serous carcinoma and assess p53 as part of an immunohistochemical panel',
        'For serous EIC, look for surface/glandular replacement and pagetoid spread',
        'For clear-cell carcinoma, look for hobnail cells and hyalinised papillary cores',
        'Exclude secretory change, Arias-Stella reaction and metastatic clear-cell tumour',
        'Integrate histotype, grade, stage, LVSI and molecular group into risk',
      ],
      bullets: [
        'Serous Morphology: complex papillary, micropapillary, glandular or solid architecture with marked nuclear pleomorphism, prominent nucleoli and brisk mitotic activity.',
        'High Grade by Definition: do not apply the ordinary low-grade endometrioid grading scheme to serous carcinoma.',
        'p53: an abnormal p53 staining pattern is common and supports the serous pathway.',
        'p16: often diffusely positive, but immunohistochemistry must be interpreted as a panel rather than in isolation.',
        'Serous EIC: cytologically malignant serous-type cells replace surface epithelium or line pre-existing glands without obvious destructive stromal invasion in that focus.',
        'Pagetoid Spread: serous EIC may show surface and glandular involvement with pagetoid spread.',
        'Not Harmless: despite the word intraepithelial, serous EIC may be associated with extrauterine disease and requires thorough staging assessment.',
        'Clear-Cell Patterns: tubulocystic, papillary and solid patterns, often in combination.',
        'Hobnail Cells: nuclei protrude into the lumen with cytoplasm tapering toward the basement membrane, giving a tombstone-like appearance.',
        'Hyalinised Cores: may be present in papillary clear-cell carcinoma.',
        'Clear-Cell Cytoplasm: may be clear or eosinophilic; clear cytoplasm alone is not diagnostic.',
        'Clear-Cell Differential: secretory/hormonal change such as Arias-Stella reaction, clear-cell change in other carcinomas and metastatic clear-cell tumours.',
        'Mucinous Carcinoma: confirm a true primary endometrial mucinous carcinoma and exclude a cervical or gastrointestinal primary when relevant.',
        'Mixed Carcinoma: report distinct components and relative proportions; a minor component may still be clinically relevant.',
        'Undifferentiated/Dedifferentiated and Neuroendocrine: uncommon aggressive diagnoses requiring specialist pathology review.',
        'Type I Shorthand: classically endometrioid, oestrogen-linked, ER/PR positive, p53 wild-type and often PI3K/PTEN-pathway altered.',
        'Type II Shorthand: classically serous or clear-cell, arising in atrophic endometrium, high grade, ER/PR negative and p53 abnormal.',
        'Modern Risk: integrates histotype, grade, stage, LVSI and molecular group (POLE-mutated, MMR-deficient, NSMP, p53-abnormal) where testing is available.',
      ],
      table: {
        head: ['Histotype', 'Key morphology', 'Immunophenotype / molecular clue'],
        rows: [
          ['Serous', 'Complex papillary/glandular, high-grade nuclei, brisk mitoses', 'Abnormal p53 common; p16 often diffuse; high grade by definition'],
          ['Serous EIC', 'Malignant serous cells line surface/glands without destructive invasion', 'May have extrauterine spread; not a harmless in-situ lesion'],
          ['Clear cell', 'Tubulocystic/papillary/solid, hobnail cells, hyaline cores', 'Clear or eosinophilic cytoplasm; exclude Arias-Stella and metastasis'],
          ['Mucinous', 'Mucinous glands', 'Exclude cervical and gastrointestinal primary'],
          ['Undifferentiated / neuroendocrine', 'Poorly differentiated or neuroendocrine morphology', 'Aggressive; specialist review'],
          ['Type I (historical)', 'Endometrioid', 'ER/PR positive, p53 wild-type, PI3K/PTEN pathway'],
          ['Type II (historical)', 'Serous or clear cell', 'ER/PR negative, p53 abnormal, higher proliferation'],
        ],
      },
      pearls: [
        'Golden Pearl: serous carcinoma is high grade by definition and commonly p53-abnormal.',
        'Serous EIC can be associated with extrauterine disease; intraepithelial does not mean harmless.',
        'Hobnail cells with tubulocystic or papillary architecture point to clear-cell carcinoma, but clear cytoplasm alone is not enough.',
      ],
      trap: {
        title: 'Examiner trap - diagnosing clear-cell carcinoma from clear cytoplasm alone',
        body: 'Secretory change, Arias-Stella reaction, clear-cell change in other carcinomas and metastatic clear-cell tumours can all mimic it. The diagnosis needs architecture, cytology, clinical context and immunohistochemistry.',
      },
      traps: [
        {
          title: '• Applying the low-grade endometrioid grading scheme to serous carcinoma.',
        },
        {
          title: '• Treating serous EIC as a harmless in-situ lesion.',
        },
        {
          title: '• Ignoring a cervical or gastrointestinal primary for mucinous carcinoma.',
        },
      ],
    },
    {
      id: 'leiomyoma-variants',
      heading: 'Uterine Smooth-Muscle Tumours: Leiomyoma Variants',
      intro:
        'Uterine smooth-muscle tumours are usually intersecting fascicles of spindle cells with eosinophilic cytoplasm and blunt-ended nuclei. The critical distinction from leiomyosarcoma is never made by one isolated mitotic count: assess cytological atypia, coagulative tumour-cell necrosis and mitotic activity together.',
      flow: [
        'Confirm smooth-muscle differentiation with morphology and markers',
        'Assess cellularity, atypia, mitotic activity and tumour-cell necrosis',
        'Ordinary leiomyoma · bland, low mitoses, no tumour-cell necrosis',
        'Cellular leiomyoma · increased cellularity but bland cytology',
        'Bizarre/symplastic leiomyoma · marked atypia without the full LMS set',
        'FH-deficient leiomyoma · eosinophilic globules, prominent nucleoli, FH loss/2SC',
        'Consider HLRCC and genetic counselling when FH deficiency is recognised',
      ],
      bullets: [
        'Conventional Leiomyoma: well-circumscribed, whorled, firm; bland smooth-muscle cells, low mitotic activity, no diffuse significant atypia and no coagulative tumour-cell necrosis.',
        'Benign Degeneration: hyalinisation, calcification, hydropic change, cystic degeneration and red degeneration are not equivalent to malignant tumour-cell necrosis.',
        'Cellular Leiomyoma: increased cellularity compared with ordinary leiomyoma, but cells remain cytologically bland and there is no combination of features establishing LMS.',
        'Stromal Mimic: distinguish cellular leiomyoma from endometrial stromal tumour, which may show arteriolar vasculature, tongue-like infiltration and a different immunophenotype.',
        'Smooth-Muscle Markers: desmin, smooth-muscle actin and h-caldesmon support smooth-muscle differentiation.',
        'CD10: may be expressed in stromal tumours but is not absolutely specific.',
        'Bizarre/Atypical Leiomyoma: marked nuclear atypia or bizarre multinucleated cells may be present, but the tumour does not meet the combined criteria for LMS.',
        'Atypia Alone: atypia by itself does not automatically mean malignancy; absence of coagulative tumour-cell necrosis and the mitotic pattern are essential.',
        'High Mitotic Pitfall: counts above 15 mitoses per 10 high-power fields can occasionally occur in an otherwise bland leiomyoma without significant atypia and coagulative tumour-cell necrosis.',
        'Specialist Judgement: this pitfall is not a reassurance rule based on mitotic count alone.',
        'FH-Deficient Leiomyoma: may be associated with fumarate hydratase deficiency and hereditary leiomyomatosis and renal cell cancer syndrome (HLRCC).',
        'HLRCC: autosomal dominant, with cutaneous leiomyomas, uterine leiomyomas and risk of aggressive renal cancer.',
        'FH Histology: eosinophilic cytoplasmic globules/inclusions, prominent eosinophilic nucleoli with perinucleolar halos and branching vessels; appearances vary.',
        'FH Testing: loss of FH immunostaining and/or positive 2-succinocysteine (2SC) staining supports FH deficiency.',
        'Beyond the Uterus: take a family history and refer for genetic counselling/risk assessment when FH deficiency is recognised.',
      ],
      table: {
        head: ['Variant', 'Cellularity', 'Atypia', 'Tumour-cell necrosis', 'Mitoses', 'Key point'],
        rows: [
          ['Ordinary leiomyoma', 'Usual', 'None/minimal', 'Absent', 'Low', 'Bland fascicles'],
          ['Cellular leiomyoma', 'Increased', 'Bland', 'Absent', 'Variable', 'Cellular but not malignant'],
          ['Bizarre/symplastic', 'Variable', 'Marked/bizarre', 'Absent', 'Variable', 'Atypia alone does not prove LMS'],
          ['FH-deficient', 'Variable', 'Prominent nucleoli', 'Absent', 'Variable', 'FH loss/2SC; consider HLRCC'],
          ['Leiomyosarcoma', 'Variable', 'Moderate-severe', 'Present (coagulative)', 'High', 'At least 2 of 3 features'],
        ],
      },
      pearls: [
        'Golden Pearl: cellular leiomyoma is cellular but cytologically bland.',
        'Bizarre nuclei alone do not prove leiomyosarcoma.',
        'FH-deficient leiomyoma is a systemic clue: think HLRCC and renal cancer risk.',
      ],
      trap: {
        title: 'Examiner trap - diagnosing leiomyosarcoma from mitotic count alone',
        body: 'Very high mitotic activity can occasionally be seen in an otherwise bland leiomyoma when significant atypia and coagulative tumour-cell necrosis are absent. The diagnosis requires the combined features, not one number.',
      },
      traps: [
        {
          title: '• Treating red or hyaline degeneration as tumour-cell necrosis.',
        },
        {
          title: '• Calling a bizarre leiomyoma malignant on atypia alone.',
        },
        {
          title: '• Missing the family history in FH-deficient leiomyoma.',
        },
      ],
    },
    {
      id: 'lms-stump',
      heading: 'Leiomyosarcoma & STUMP',
      intro:
        'Leiomyosarcoma is a malignant smooth-muscle tumour. Rapid growth alone is not a diagnostic test and imaging cannot reliably exclude sarcoma in every case. STUMP is a diagnosis of uncertainty after adequate specialist assessment, not a synonym for atypical leiomyoma or low-grade leiomyosarcoma.',
      flow: [
        'Assess the classic triad: atypia, coagulative tumour-cell necrosis and mitoses',
        'Conventional spindle-cell LMS · at least 2 of the 3 features',
        'Do not mechanically apply the spindle-cell rule to epithelioid or myxoid variants',
        'Distinguish coagulative tumour-cell necrosis from infarct-type/hyaline necrosis',
        'If features are equivocal after adequate sampling · consider STUMP',
        'Avoid uncontained morcellation when malignancy is suspected or cannot be excluded',
        'Plan surgery and adjuvant care in a multidisciplinary setting',
      ],
      bullets: [
        'Triad Feature One: diffuse moderate-to-severe cytological atypia.',
        'Triad Feature Two: coagulative tumour-cell necrosis.',
        'Triad Feature Three: high mitotic activity, conventionally around 10 or more mitoses per 10 high-power fields in the classic framework.',
        '2-of-3 Rule: for conventional spindle-cell LMS, at least two of the three features is a commonly used criterion.',
        'Variant Caution: exact diagnostic rules differ for epithelioid and myxoid variants.',
        'Epithelioid LMS: predominantly round/polygonal cells; use variant-specific morphology and criteria.',
        'Myxoid LMS: abundant myxoid matrix, sometimes with deceptively low mitotic activity; infiltrative growth and cytology may establish malignancy despite a lower count.',
        'Coagulative Tumour-Cell Necrosis: abrupt transition from viable tumour to necrotic tumour, often with a preserved outline of tumour cells and a border of viable tumour.',
        'Infarct-Type/Hyaline Necrosis: often a more gradual transition and may be seen in benign leiomyoma, particularly after degeneration or treatment.',
        'Sampling: the necrosis distinction requires adequate sampling and expert pathology review.',
        'STUMP Definition: a uterine smooth-muscle tumour that cannot be confidently classified as benign leiomyoma or malignant LMS after adequate assessment.',
        'STUMP Is Not: a synonym for atypical leiomyoma, and not the same as low-grade leiomyosarcoma.',
        'STUMP Diagnosis: made after adequate sampling and specialist gynaecological pathology review.',
        'STUMP Follow-Up: recurrence is uncommon but possible and can occur after a prolonged interval; follow-up is individualised.',
        'Morcellation: avoid when STUMP or LMS is suspected.',
        'Unexpected STUMP: if diagnosed after surgery, review the specimen, operative details and follow-up plan in a multidisciplinary setting.',
        'Surgery: hysterectomy with removal of the tumour intact when feasible.',
        'Lymphadenectomy: not automatically required in the absence of suspicious nodes.',
        'Multidisciplinary Care: confirmed LMS management depends on stage, histology, resectability and patient factors.',
      ],
      table: {
        head: ['Diagnosis', 'Atypia', 'Coagulative necrosis', 'Mitoses', 'Interpretation'],
        rows: [
          ['Conventional spindle LMS', 'Moderate-severe', 'Present', 'High', 'At least 2 of 3 features'],
          ['Epithelioid LMS', 'Variant-specific', 'Variant-specific', 'Variant-specific', 'Do not apply spindle rule'],
          ['Myxoid LMS', 'Cytology and infiltrative growth', 'May be present', 'May be deceptively low', 'Variant-specific assessment'],
          ['STUMP', 'Equivocal', 'Equivocal', 'Equivocal', 'Uncertain after adequate review'],
          ['Bizarre leiomyoma', 'Marked', 'Absent', 'Variable', 'Does not meet LMS criteria'],
        ],
      },
      pearls: [
        'Golden Pearl: the classic 2-of-3 rule applies to conventional spindle-cell LMS, not to every variant.',
        'Coagulative tumour-cell necrosis is different from hyaline or infarct-type necrosis.',
        'STUMP means uncertain malignant potential, not proven malignancy.',
      ],
      trap: {
        title: 'Examiner trap - applying the 2-of-3 rule to epithelioid or myxoid LMS',
        body: 'Epithelioid and myxoid variants have their own diagnostic criteria. Myxoid LMS in particular can show deceptively low mitotic activity while infiltrative growth and cytology establish malignancy.',
      },
      traps: [
        {
          title: '• Using rapid growth as a diagnostic test for LMS.',
        },
        {
          title: '• Morcellating an unclassified smooth-muscle tumour.',
        },
        {
          title: '• Treating STUMP as a confirmed low-grade sarcoma.',
        },
      ],
    },
    {
      id: 'endometrial-stromal-tumours',
      heading: 'Endometrial Stromal Tumours & High-Grade ESS',
      intro:
        'The endometrial stromal tumour spectrum runs from the circumscribed stromal nodule through low-grade ESS to high-grade ESS. Infiltrative margins and/or vascular invasion separate stromal sarcoma from a stromal nodule, while high-grade ESS is defined by characteristic morphology and recurrent molecular alterations.',
      flow: [
        'Assess circumscription, infiltrative margins and vascular invasion',
        'Stromal nodule · circumscribed, no infiltrative pattern or vascular invasion',
        'LG-ESS · proliferative-stroma-like cells, delicate arterioles, infiltrative tongues/vascular invasion',
        'HG-ESS · high-grade round-cell component, sometimes with lower-grade spindle areas',
        'YWHAE::NUTM2 · cyclin D1 and BCOR often strong in the high-grade component',
        'BCOR-associated · ZC3H7B::BCOR fusion or BCOR internal tandem duplication',
        'Confirm with molecular testing when morphology and immunophenotype suggest the group',
      ],
      bullets: [
        'Endometrial Stromal Nodule: circumscribed tumour without the infiltrative pattern or vascular invasion that defines stromal sarcoma.',
        'Low-Grade ESS: often resembles proliferative endometrial stroma, with small uniform cells and delicate arterioles.',
        'LG-ESS Definition: infiltrative margins and/or vascular invasion distinguish it from a stromal nodule.',
        'LG-ESS Genetics: JAZF1-related fusions are more characteristic of low-grade ESS.',
        'High-Grade ESS: a biologically aggressive group with characteristic morphology and recurrent molecular alterations.',
        'YWHAE::NUTM2 Morphology: often a high-grade round-cell component, sometimes with a lower-grade spindle-cell component.',
        'YWHAE::NUTM2 Markers: cyclin D1 and BCOR are often strongly expressed in the high-grade component.',
        'YWHAE::NUTM2 CD10: can be variable or absent in the high-grade component.',
        'YWHAE::NUTM2 Confirmation: molecular confirmation of the characteristic fusion is valuable when morphology and immunophenotype suggest the diagnosis.',
        'BCOR-Associated Group: includes ZC3H7B::BCOR fusion and BCOR internal tandem duplication (ITD).',
        'BCOR Markers: BCOR and cyclin D1 are commonly useful immunohistochemical markers but are not independently diagnostic.',
        'BCOR CD10: expression is variable.',
        'Do Not Confuse: YWHAE::NUTM2 is one molecular group; ZC3H7B::BCOR fusion and BCOR ITD are BCOR-associated mechanisms.',
        'JAZF1: more characteristic of low-grade ESS, not the classic high-grade YWHAE/BCOR category.',
      ],
      table: {
        head: ['Entity', 'Morphology', 'Genetics / markers', 'Key discriminator'],
        rows: [
          ['Stromal nodule', 'Circumscribed stromal proliferation', 'JAZF1-related fusions may occur', 'No infiltration or vascular invasion'],
          ['LG-ESS', 'Uniform small cells, delicate arterioles', 'JAZF1-related fusions', 'Infiltrative tongues and/or vascular invasion'],
          ['YWHAE::NUTM2 HG-ESS', 'High-grade round cells ± spindle component', 'YWHAE::NUTM2; cyclin D1/BCOR strong; CD10 variable', 'High-grade round-cell morphology'],
          ['BCOR-associated HG-ESS', 'High-grade morphology', 'ZC3H7B::BCOR or BCOR ITD; BCOR/cyclin D1 supportive', 'BCOR fusion or ITD'],
        ],
      },
      pearls: [
        'Golden Pearl: YWHAE::NUTM2 and BCOR alterations identify important HG-ESS molecular groups.',
        'LG-ESS is separated from a stromal nodule by infiltration and/or vascular invasion.',
        'CD10 is variable and is not a stand-alone diagnostic marker.',
      ],
      trap: {
        title: 'Examiner trap - merging the HG-ESS molecular groups',
        body: 'YWHAE::NUTM2 is a distinct group from BCOR-associated HG-ESS, which includes ZC3H7B::BCOR fusion and BCOR ITD. JAZF1 fusions belong mainly to low-grade ESS.',
      },
      traps: [
        {
          title: '• Calling a stromal nodule an ESS without invasion.',
        },
        {
          title: '• Using CD10 alone to define stromal differentiation.',
        },
        {
          title: '• Assigning a JAZF1 fusion to classic high-grade YWHAE/BCOR ESS.',
        },
      ],
    },
    {
      id: 'adenosarcoma-carcinosarcoma',
      heading: 'Mixed Epithelial-Mesenchymal Lesions, Adenosarcoma & Carcinosarcoma',
      intro:
        'The mixed epithelial-mesenchymal spectrum is not a single disease. Adenomyoma and adenofibroma are benign, atypical polypoid adenomyoma needs adequate sampling and follow-up, adenosarcoma has benign glands with malignant stroma, and carcinosarcoma has two malignant components and is managed as a metaplastic carcinoma.',
      flow: [
        'Identify whether epithelial and stromal components are benign or malignant',
        'Adenomyoma · benign glands and stroma within a smooth-muscle-rich lesion',
        'Adenofibroma · benign epithelial and fibrous stromal components',
        'Atypical polypoid adenomyoma · atypical endometrioid glands with myofibromatous stroma',
        'Adenosarcoma · benign-appearing glands with malignant stroma',
        'Carcinosarcoma · malignant epithelial and malignant mesenchymal-appearing components',
        'Assess sarcomatous overgrowth and heterologous elements in adenosarcoma',
      ],
      bullets: [
        'Adenomyoma: benign endometrial glands and stroma within a smooth-muscle-rich lesion.',
        'Adenofibroma: biphasic lesion with benign epithelial and fibrous stromal components.',
        'Adenofibroma Versus Adenosarcoma: distinguish by stromal cellularity, atypia, mitoses and architecture.',
        'Atypical Polypoid Adenomyoma (APA): uncommon polypoid lesion with atypical endometrioid glands and smooth-muscle/myofibromatous stroma.',
        'APA Associations: may coexist with or be associated with endometrial hyperplasia/carcinoma; requires adequate sampling and follow-up, especially when fertility preservation is considered.',
        'Adenosarcoma Definition: biphasic tumour with benign-appearing epithelial glands and malignant mesenchymal stroma.',
        'Adenosarcoma Morphology: leaf-like (phyllodes-like) architecture, cystic/glandular spaces lined by benign-appearing epithelium, stromal condensation/cuffing around glands and increased stromal cellularity.',
        'Adenosarcoma Stroma: mitotic activity and stromal atypia vary.',
        'Sarcomatous Overgrowth: conventionally a pure sarcomatous component occupying at least 25 percent of the tumour.',
        'Overgrowth Prognosis: associated with a more aggressive clinical course and poorer prognosis.',
        'Heterologous Elements: may be present in the adenosarcoma stromal component.',
        'Carcinosarcoma Definition: highly aggressive biphasic tumour with a malignant epithelial component and a malignant mesenchymal-appearing component.',
        'Carcinosarcoma Epithelium: often serous, endometrioid or another high-grade epithelial type.',
        'Carcinosarcoma Mesenchyme: homologous (resembling native uterine tissue) or heterologous (cartilage, bone or skeletal-muscle differentiation).',
        'Modern Interpretation: MMT is historical; uterine carcinosarcoma is classified and treated biologically as a high-grade metaplastic carcinoma.',
        'Clonal Origin: epithelial and sarcomatous components are considered to share a clonal origin in most cases.',
        'Key Distinction: adenosarcoma has a usually benign glandular component; carcinosarcoma has two malignant components.',
      ],
      table: {
        head: ['Lesion', 'Epithelial component', 'Stromal component', 'Behaviour'],
        rows: [
          ['Adenomyoma', 'Benign glands', 'Benign stroma within smooth muscle', 'Benign'],
          ['Adenofibroma', 'Benign epithelium', 'Benign fibrous stroma', 'Benign'],
          ['Atypical polypoid adenomyoma', 'Atypical endometrioid glands', 'Myofibromatous stroma', 'Associated hyperplasia/carcinoma risk; follow-up'],
          ['Adenosarcoma', 'Benign-appearing glands', 'Malignant stroma', 'Malignant; overgrowth worsens prognosis'],
          ['Carcinosarcoma', 'Malignant carcinoma', 'Malignant mesenchymal-appearing component', 'Highly aggressive metaplastic carcinoma'],
        ],
      },
      pearls: [
        'Golden Pearl: adenosarcoma has benign glands and malignant stroma; carcinosarcoma has two malignant components.',
        'Sarcomatous overgrowth of at least 25 percent is an adverse feature in adenosarcoma.',
        'Carcinosarcoma/MMT is a metaplastic carcinoma in modern classification.',
      ],
      trap: {
        title: 'Examiner trap - confusing adenosarcoma with carcinosarcoma',
        body: 'The glandular epithelium is typically benign in adenosarcoma but malignant in carcinosarcoma. The stromal component is malignant in both, so the epithelial component decides the name.',
      },
      traps: [
        {
          title: '• Calling an adenofibroma an adenosarcoma without stromal atypia or mitoses.',
        },
        {
          title: '• Missing coexistent carcinoma in atypical polypoid adenomyoma.',
        },
        {
          title: '• Treating carcinosarcoma as a conventional sarcoma.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-four rapid-fire points to lock in before the exam.',
      pearls: [
        'Name the lineage before naming the tumour.',
        'Hyperplasia without atypia has a lower progression risk than atypical hyperplasia/EIN.',
        'Atypical hyperplasia/EIN is premalignant; exclude concurrent carcinoma.',
        'FIGO endometrioid grade uses non-squamous solid growth: 5% or less, 6-50%, more than 50%.',
        'Marked nuclear atypia may justify a one-grade upgrade in the appropriate setting.',
        'Squamous differentiation does not turn endometrioid carcinoma into pure squamous carcinoma.',
        'Villoglandular endometrioid carcinoma is not serous carcinoma.',
        'Serous carcinoma is high grade by definition and often p53-abnormal.',
        'Serous EIC can be associated with extrauterine disease.',
        'Hobnail cells and tubulocystic/papillary architecture suggest clear-cell carcinoma.',
        'Clear cytoplasm alone does not diagnose clear-cell carcinoma.',
        'Cellular leiomyoma is cellular but cytologically bland.',
        'Bizarre nuclei alone do not prove LMS.',
        'Coagulative tumour-cell necrosis differs from hyaline/infarct-type necrosis.',
        'The classic 2-of-3 LMS rule applies to conventional spindle-cell tumours.',
        'Epithelioid and myxoid LMS need variant-specific assessment.',
        'STUMP means uncertain malignant potential, not proven malignancy.',
        'Avoid uncontained morcellation when LMS or STUMP is suspected.',
        'FH-deficient leiomyoma can signal HLRCC and aggressive renal cancer risk.',
        'LG-ESS shows infiltrative margins and/or vascular invasion.',
        'YWHAE::NUTM2 and BCOR alterations identify HG-ESS molecular groups.',
        'JAZF1 fusions are more characteristic of low-grade ESS.',
        'Adenosarcoma has benign glands and malignant stroma; overgrowth is adverse.',
        'Carcinosarcoma/MMT is a metaplastic carcinoma in modern classification.',
      ],
      traps: [
        {
          title: '• Diagnosing atypia from crowded glands alone.',
        },
        {
          title: '• Including squamous areas in the solid-growth grade.',
        },
        {
          title: '• Calling a villoglandular tumour serous.',
        },
        {
          title: '• Treating serous EIC as harmless.',
        },
        {
          title: '• Diagnosing clear-cell carcinoma on clear cytoplasm alone.',
        },
        {
          title: '• Calling a bizarre leiomyoma malignant on atypia alone.',
        },
        {
          title: '• Treating degeneration as tumour-cell necrosis.',
        },
        {
          title: '• Applying the 2-of-3 rule to epithelioid or myxoid LMS.',
        },
        {
          title: '• Morcellating an unclassified smooth-muscle tumour.',
        },
        {
          title: '• Merging YWHAE::NUTM2 with BCOR-associated HG-ESS.',
        },
        {
          title: '• Assigning JAZF1 to classic high-grade ESS.',
        },
        {
          title: '• Confusing adenosarcoma with carcinosarcoma.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm21-f1',
      front: 'What is the first step in approaching a uterine histopathology question?',
      back: 'Identify the lineage: epithelial, smooth-muscle, endometrial stromal or biphasic. Then assess architecture, cytology, mitoses, tumour-cell necrosis, invasion and immunophenotype together.',
    },
    {
      id: 'm21-f2',
      front: 'How is endometrial hyperplasia without atypia distinguished from atypical hyperplasia/EIN?',
      back: 'Both show increased gland-to-stroma ratio and altered architecture. Atypical hyperplasia/EIN additionally shows cytological features that differ from the background endometrium and is premalignant.',
    },
    {
      id: 'm21-f3',
      front: 'What are the FIGO architectural grades for endometrioid carcinoma?',
      back: 'Grade 1: 5% or less solid non-squamous growth. Grade 2: 6-50%. Grade 3: more than 50%. Marked nuclear atypia may justify a one-grade upgrade in the appropriate setting.',
    },
    {
      id: 'm21-f4',
      front: 'Why is serous carcinoma always high grade?',
      back: 'It is defined by high-grade cytology with marked pleomorphism, prominent nucleoli and brisk mitoses, and is strongly associated with abnormal p53. The low-grade endometrioid grading scheme does not apply.',
    },
    {
      id: 'm21-f5',
      front: 'Why is serous EIC not a harmless in-situ lesion?',
      back: 'Despite the term intraepithelial, it may be associated with extrauterine disease or dissemination. It requires thorough assessment of the uterus and staging context.',
    },
    {
      id: 'm21-f6',
      front: 'What morphology suggests clear-cell endometrial carcinoma?',
      back: 'Tubulocystic, papillary and solid patterns with hobnail cells (nuclei protruding into the lumen), hyalinised papillary cores and clear or eosinophilic cytoplasm. Clear cytoplasm alone is not diagnostic.',
    },
    {
      id: 'm21-f7',
      front: 'Which leiomyoma variant is cellular but cytologically bland?',
      back: 'Cellular leiomyoma. It has increased cellularity but bland cytology and no combination of features establishing leiomyosarcoma. Distinguish it from endometrial stromal tumour.',
    },
    {
      id: 'm21-f8',
      front: 'What is the classic triad of conventional spindle-cell leiomyosarcoma?',
      back: 'Diffuse moderate-to-severe cytological atypia, coagulative tumour-cell necrosis and high mitotic activity (conventionally around 10 or more per 10 HPF). At least two of three is a commonly used criterion.',
    },
    {
      id: 'm21-f9',
      front: 'Which variants do not follow the conventional 2-of-3 leiomyosarcoma rule?',
      back: 'Epithelioid and myxoid leiomyosarcoma. They require variant-specific morphology and criteria; myxoid LMS can have deceptively low mitotic activity.',
    },
    {
      id: 'm21-f10',
      front: 'Define STUMP in one line.',
      back: 'A uterine smooth-muscle tumour that cannot be confidently classified as benign leiomyoma or malignant leiomyosarcoma after adequate sampling and specialist gynaecological pathology review.',
    },
    {
      id: 'm21-f11',
      front: 'What distinguishes low-grade ESS from an endometrial stromal nodule?',
      back: 'Infiltrative margins and/or vascular invasion. A stromal nodule is circumscribed without these features.',
    },
    {
      id: 'm21-f12',
      front: 'Which molecular groups define high-grade endometrial stromal sarcoma?',
      back: 'YWHAE::NUTM2-rearranged HG-ESS and BCOR-associated HG-ESS (ZC3H7B::BCOR fusion or BCOR internal tandem duplication). JAZF1 fusions are more characteristic of low-grade ESS.',
    },
    {
      id: 'm21-f13',
      front: 'What are the defining components of adenosarcoma?',
      back: 'Benign-appearing epithelial glands with a malignant mesenchymal stroma, often with leaf-like architecture and stromal condensation around glands.',
    },
    {
      id: 'm21-f14',
      front: 'What is sarcomatous overgrowth in adenosarcoma and why does it matter?',
      back: 'A pure sarcomatous component occupying at least 25% of the tumour. It is associated with a more aggressive course and poorer prognosis.',
    },
    {
      id: 'm21-f15',
      front: 'How is uterine carcinosarcoma classified today?',
      back: 'As a high-grade metaplastic carcinoma, not a conventional sarcoma. Both epithelial and mesenchymal-appearing components are malignant and usually share a clonal origin.',
    },
  ],

  mcqs: [
    {
      id: 'm21-q1',
      stem: 'A 58-year-old woman has a curettage showing crowded endometrial glands with cytology that differs from the background endometrium. What is the most important next consideration?',
      options: [
        'Hyperplasia without atypia; reassure and repeat in 12 months',
        'Atypical hyperplasia/EIN; exclude a concurrent endometrioid carcinoma',
        'Serous carcinoma; proceed directly to radiotherapy',
        'Normal secretory endometrium; no follow-up required',
      ],
      answerIndex: 1,
      explanation:
        'Crowded glands with cytology differing from the background endometrium indicate atypical hyperplasia/EIN. It is premalignant and requires adequate sampling to exclude a concurrent endometrioid carcinoma before assuming it is an isolated precursor.',
    },
    {
      id: 'm21-q2',
      stem: 'An endometrioid carcinoma shows 35% solid non-squamous growth with focal squamous differentiation. What is the FIGO architectural grade?',
      options: ['Grade 1', 'Grade 2', 'Grade 3', 'Cannot be graded'],
      answerIndex: 1,
      explanation:
        'Grade 2 is 6-50% solid non-squamous growth. Squamous differentiation is excluded from the solid-growth estimate and does not convert the tumour into a pure squamous carcinoma.',
    },
    {
      id: 'm21-q3',
      stem: 'Which statement about serous endometrial carcinoma is correct?',
      options: [
        'It is graded with the endometrioid 5/50% scheme',
        'It is high grade by definition and often shows abnormal p53',
        'It typically arises in hyperplastic endometrium of young women',
        'It is always p16-negative',
      ],
      answerIndex: 1,
      explanation:
        'Serous carcinoma is high grade by definition, often arises in atrophic postmenopausal endometrium and is strongly associated with abnormal p53. The endometrioid grading scheme is not applied to it.',
    },
    {
      id: 'm21-q4',
      stem: 'A uterine tumour shows fascicles of bland smooth-muscle cells with 18 mitoses per 10 HPF but no significant atypia and no coagulative tumour-cell necrosis. What is the best interpretation?',
      options: [
        'Leiomyosarcoma on the basis of mitotic count alone',
        'A potential pitfall: very high mitoses can occur in an otherwise bland leiomyoma; specialist assessment is required',
        'STUMP by definition',
        'Endometrial stromal sarcoma',
      ],
      answerIndex: 1,
      explanation:
        'The notes specifically flag counts above 15 mitoses per 10 HPF as a potential pitfall in an otherwise bland leiomyoma when significant atypia and coagulative tumour-cell necrosis are absent. This is a specialist pathology judgement, not a mitotic-count-only diagnosis.',
    },
    {
      id: 'm21-q5',
      stem: 'Which set best describes the classic triad used for conventional spindle-cell leiomyosarcoma?',
      options: [
        'Cellularity, hyalinisation and calcification',
        'Atypia, coagulative tumour-cell necrosis and high mitotic activity',
        'Infiltrative margins, vascular invasion and CD10 positivity',
        'Papillary architecture, psammoma bodies and p53 abnormality',
      ],
      answerIndex: 1,
      explanation:
        'The triad is diffuse moderate-to-severe cytological atypia, coagulative tumour-cell necrosis and high mitotic activity. At least two of three is commonly used for conventional spindle-cell LMS.',
    },
    {
      id: 'm21-q6',
      stem: 'A smooth-muscle tumour cannot be confidently classified as benign or malignant after adequate sampling and specialist review. What is the appropriate term?',
      options: ['Atypical leiomyoma', 'STUMP', 'Low-grade leiomyosarcoma', 'Cellular leiomyoma'],
      answerIndex: 1,
      explanation:
        'STUMP means smooth-muscle tumour of uncertain malignant potential. It is not a synonym for atypical leiomyoma and is not the same as low-grade leiomyosarcoma.',
    },
    {
      id: 'm21-q7',
      stem: 'Which finding separates low-grade endometrial stromal sarcoma from an endometrial stromal nodule?',
      options: [
        'CD10 positivity',
        'Infiltrative margins and/or vascular invasion',
        'Presence of JAZF1 fusion',
        'Uniform small cells and delicate arterioles',
      ],
      answerIndex: 1,
      explanation:
        'The stromal nodule is circumscribed. Infiltrative margins and/or vascular invasion define low-grade ESS. Uniform cells, arterioles and JAZF1 fusions can be seen in both.',
    },
    {
      id: 'm21-q8',
      stem: 'A high-grade endometrial stromal sarcoma shows a round-cell component with strong cyclin D1 and BCOR expression. Which molecular group is most likely?',
      options: [
        'JAZF1::SUZ12 low-grade ESS',
        'YWHAE::NUTM2-rearranged HG-ESS',
        'BCOR internal tandem duplication only',
        'POLE-mutated endometrial carcinoma',
      ],
      answerIndex: 1,
      explanation:
        'YWHAE::NUTM2-rearranged HG-ESS often has a high-grade round-cell component with strong cyclin D1 and BCOR expression and variable or absent CD10. BCOR-associated HG-ESS is a separate group.',
    },
    {
      id: 'm21-q9',
      stem: 'A biphasic uterine tumour has benign-appearing glands and a malignant stromal component with leaf-like architecture. What is the diagnosis?',
      options: ['Carcinosarcoma', 'Adenosarcoma', 'Adenofibroma', 'Adenomyoma'],
      answerIndex: 1,
      explanation:
        'Adenosarcoma has benign-appearing epithelial glands with malignant stroma and leaf-like architecture. In carcinosarcoma both components are malignant; adenofibroma and adenomyoma are benign.',
    },
    {
      id: 'm21-q10',
      stem: 'Which statement about uterine carcinosarcoma is correct?',
      options: [
        'It is a conventional sarcoma arising from the myometrium',
        'It is a metaplastic high-grade carcinoma with clonal epithelial and sarcomatous components',
        'Its glandular component is benign',
        'It is synonymous with adenosarcoma',
      ],
      answerIndex: 1,
      explanation:
        'Modern classification treats uterine carcinosarcoma as a high-grade metaplastic carcinoma, not a conventional sarcoma. Both components are malignant and usually share a clonal origin; adenosarcoma has a benign glandular component.',
    },
  ],
};
