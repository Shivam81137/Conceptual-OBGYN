import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 04 - Endometrial / Uterine Cancer (ECA)
 * ---------------------------------------------------------------------------
 * Koskas et al., Cancer of the corpus uteri: a 2025 update (FIGO/IJGO) and the
 * ESGO–ESTRO–ESP Guidelines Update 2025, distilled for NEET PG / INI-CET /
 * NEET SS: the Type I / II legacy model, the TCGA / ProMisE four molecular
 * groups (POLEmut, MMRd, NSMP, p53abn), FIGO 2009 versus FIGO 2023 staging,
 * PMB and the 5-mm TVS threshold, Pipelle and hysteroscopy sampling, LVSI,
 * cervical-ICG sentinel-node mapping with ultrastaging, TH + BSO surgery,
 * ESGO risk groups, PORTEC and GOG adjuvant trials, Lynch screening,
 * pembrolizumab + lenvatinib and selected fertility-sparing progestin therapy.
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client
 * bundle. The API only reconciles the module index.
 */

export const ENDOMETRIAL_UTERINE_CANCER_MODULE: StudioModule = {
  id: 'pg-mod-04-endometrial-uterine-cancer',
  track: 'NEET_PG',
  title: 'Endometrial / Uterine Cancer (ECA)',
  shortTitle: 'Endometrial Cancer',
  summary:
    'Risk stratification, FIGO staging and molecular classification of endometrial carcinoma: POLEmut / MMRd / NSMP / p53abn, the 5-mm TVS triage threshold in postmenopausal bleeding, Pipelle and hysteroscopic sampling, substantial LVSI, cervical-ICG sentinel-node mapping, TH + BSO surgery, ESGO risk groups, PORTEC-1/2/3 and GOG-99/249/258 adjuvant evidence, Lynch screening, pembrolizumab + lenvatinib and fertility-sparing progestins.',
  tagline: 'Four molecular groups, FIGO 2023 staging and risk-adapted adjuvant therapy.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 60,
  tags: [
    'Type I vs Type II',
    'Four Molecular Groups',
    'FIGO 2009 vs 2023',
    'PMB & TVS 5-mm Threshold',
    'Pipelle & Hysteroscopy',
    'LVSI',
    'Sentinel Node Mapping (Cervical ICG)',
    'PORTEC & GOG Trials',
    'Lynch Syndrome',
    'MMRd vs pMMR',
    'Pembrolizumab + Lenvatinib',
    'Fertility-Sparing Progestins',
  ],
  sourceTag:
    'Koskas et al., Cancer of the corpus uteri: a 2025 update (FIGO/IJGO) • ESGO–ESTRO–ESP Guidelines Update 2025',
  updatedAtISO: '2026-11-13T06:00:00.000Z',
  notes: [
    {
      id: 'epidemiology-molecular',
      heading: 'Epidemiology, Histological Patterns & the Four Molecular Groups',
      intro:
        'Endometrial carcinoma is the most common gynaecological malignancy in many high-income countries, with rising incidence and mortality driven by ageing, obesity and metabolic disease. The classic Type I / Type II split remains a useful teaching model: Type I endometrioid tumours are oestrogen-associated (obesity, chronic anovulation, PTEN/PI3K pathway), whereas Type II serous and clear-cell tumours are high-grade, less oestrogen-driven and frequently p53-abnormal. Contemporary care integrates histology, grade, depth of myometrial invasion, LVSI, FIGO 2023 stage and the four TCGA / ProMisE molecular groups - POLEmut, MMRd, NSMP and p53abn - rather than relying on the two-type model alone.',
      table: {
        head: ['Feature', 'Type I pattern: Endometrioid', 'Type II pattern: Non-endometrioid'],
        rows: [
          ['Typical histology', 'Endometrioid adenocarcinoma', 'Serous, clear-cell and other aggressive histotypes'],
          ['Hormonal association', 'Commonly oestrogen-associated', 'Usually not driven by unopposed oestrogen'],
          ['Differentiation', 'Often low/intermediate grade and well differentiated', 'Often high grade, deeply invasive or extrauterine at presentation'],
          ['Typical patient profile', 'Obesity, metabolic risk, chronic anovulation; mean age around 63 years', 'Older, often non-obese; mean age around 67 years'],
          ['Molecular pattern', 'PTEN, PIK3CA, KRAS, ARID1A, CTNNB1 / beta-catenin and MMR pathway alterations', 'TP53 abnormality, chromosomal instability; HER2 overexpression in a subset'],
          ['Prognosis', 'Often more favourable when low grade and uterus-confined', 'Often less favourable, especially serous / p53abn disease'],
          ['Exam use', 'Think prolonged unopposed oestrogen and metabolic risk', 'Think high-grade morphology, p53 abnormality and aggressive behaviour'],
        ],
      },
      bullets: [
        'Cardinal presentation: abnormal uterine bleeding, especially postmenopausal bleeding (PMB) - about 90% of patients present with abnormal bleeding in the source notes.',
        'Epidemiology: commonest female genital tract malignancy in developed countries; roughly four- to five-fold lower incidence in developing countries / South Asia per the handwritten source (note-level framing, not a current global table).',
        'Risk factors: unopposed oestrogen, obesity (peripheral aromatisation, PI3K/AKT/mTOR signalling), chronic anovulation / PCOS-type physiology, early menarche and late menopause, nulliparity, oestrogen-secreting ovarian tumours, unopposed HRT, tamoxifen (~2–3x relative risk) and Lynch syndrome.',
        'Protective associations: pregnancy / multiparity, combined oral contraceptives, breastfeeding and healthy body weight; LNG-IUS is a selected progestin-based risk-reduction context, not a universal recommendation. Smoking shows an inverse association in the notes but must never be recommended as prevention.',
      ],
    },
    {
      id: 'molecular-classification',
      heading: 'Molecular Classification: TCGA / ProMisE Four Groups',
      intro:
        'The molecular classification provides prognostic and predictive information beyond histology alone. The basic work-up is endometrial carcinoma tissue to MMR IHC + p53 IHC + pathogenic POLE exonuclease-domain testing to add ER IHC. POLE testing may be omitted in selected low-risk Stage I cases when it cannot change adjuvant treatment.',
      table: {
        head: ['Molecular group', 'Core biology / test', 'Note-level estimate', 'Clinical meaning'],
        rows: [
          ['POLE-mutated (POLEmut)', 'Pathogenic exonuclease-domain mutation in DNA polymerase epsilon; ultramutated phenotype', '~7%', 'Excellent prognosis in many early-stage settings despite high mutation burden; molecular annotation may support de-escalation in selected cases'],
          ['MMR-deficient (MMRd)', 'Loss of MMR proteins (MLH1, PMS2, MSH2, MSH6) / MSI-high', '~28%', 'Hypermutated phenotype; raises Lynch screening question; predictive relevance for immune-checkpoint inhibition'],
          ['NSMP', 'No specific molecular profile; copy-number-low / microsatellite-stable', '~39%', 'Heterogeneous intermediate group; grade and ER status help refine risk'],
          ['p53-abnormal (p53abn)', 'Aberrant p53 IHC / TP53 mutation; copy-number-high / chromosomal instability', '~26%', 'Generally poorest prognosis; includes most serous carcinomas and a subset of high-grade endometrioid tumours'],
        ],
      },
      bullets: [
        '2025 FIGO update: population distribution differs from the handwritten estimates - approximately POLEmut 7.3%, MMRd 24%, p53abn 23.7% and NSMP 45%; distribution varies by population, case mix and testing strategy.',
        '2025 ESGO–ESTRO–ESP: perform molecular classification for all endometrial carcinomas - MMR IHC, p53 IHC and pathogenic POLE exonuclease-domain testing, plus ER IHC to refine NSMP and predict endocrine responsiveness (ER positive ~ >=10% staining). POLE testing may be omitted in selected low-risk Stage I cases when it cannot change adjuvant treatment.',
        'Molecular work-up: endometrial carcinoma tissue to MMR IHC + p53 IHC + POLE testing to add ER IHC. Pathogenic POLE mutation to POLEmut. MMR protein loss to MMRd; MLH1 loss (± PMS2) to MLH1 promoter methylation analysis. p53 overexpression / null / abnormal cytoplasmic to p53abn (equivocal to TP53 sequencing). Retained MMR + p53 wild type + no POLE to NSMP; refine with grade and ER.',
        'When several classifiers apply, assign by dominant genomic driver: POLEmut takes precedence over MMRd and/or p53abn; MMRd takes precedence over p53abn.',
      ],
      pearls: [
        'POLE-mutated disease can have an excellent prognosis despite an exceptionally high mutation burden - do not confuse high mutation count with worst prognosis.',
        'Type I and Type II are a legacy teaching model, not substitutes for the four-molecular-group classifier. Serous morphology strongly associates with p53abn, but classification must rest on MMR, p53 and POLE testing.',
        'In high-grade endometrial carcinoma, do not stop at histological subtype and grade: complete molecular testing (MMR, p53, POLE as indicated and ER) because it can change risk allocation and systemic treatment.',
      ],
      trap: {
        title: 'Examiner trap - Type I / II is not the modern classifier',
        body: 'The four molecular groups are POLEmut, MMRd, NSMP and p53abn. A serous tumour is not automatically p53abn on morphology alone, and a POLEmut tumour with abnormal p53 staining is still classified POLEmut because the pathogenic POLE driver takes precedence.',
      },
    },

    {
      id: 'presentation-sampling',
      heading: 'Clinical Presentation, TVS Triage & Tissue Diagnosis',
      intro:
        'Abnormal uterine bleeding (AUB) is the dominant presenting symptom; PMB is the commonest presentation and even a single episode requires assessment. TVS is a first-line triage tool in PMB - at a 5-mm threshold the 2025 FIGO review reports sensitivity 96.2%, negative predictive value 99.3% and specificity 51.5% in the cited setting - but TVS is not histology and a thin stripe never ends the work-up when bleeding persists or recurs.',
      table: {
        head: ['Test / device', 'Use', 'Limitations / key point'],
        rows: [
          ['Pipelle', 'Common office endometrial sampling device; useful for diffuse endometrial pathology', 'May miss focal polyps / focal carcinoma; inadequate samples occur, especially with atrophy or cervical stenosis'],
          ['GynSampler / Vabra aspirator', 'Alternative office sampling devices listed in the source notes', 'Less central to current practice than Pipelle'],
          ['Hysteroscopy + directed biopsy', 'Direct visualisation and targeted sampling; use for focal lesions or discordant results', 'Requires appropriate expertise and access'],
          ['Dilation and curettage (D&C)', 'Used when office sampling is inadequate or further assessment is required', 'Blind curettage can also miss focal pathology'],
        ],
      },

      bullets: [
        'Postmenopausal bleeding: any episode warrants assessment; persistent or recurrent bleeding must not be dismissed because of a thin endometrial stripe or a previous benign blind biopsy.',
        'Premenopausal / perimenopausal presentations: heavy or prolonged menstrual bleeding, intermenstrual bleeding, or oligomenorrhoea with irregular bleeding episodes.',
        'Risk amplifiers: obesity, chronic anovulation, diabetes / metabolic disease, unopposed oestrogen, tamoxifen exposure, hereditary (Lynch) risk.',
        'No validated general-population screening test is recommended for asymptomatic average-risk women.',
        'Pipelle sensitivity in the source notes: ~99.6% in postmenopausal women and ~91% in premenopausal women, ~98% specificity - treat as note-level estimates.',
        '2025 FIGO update: office sampling sensitivity ~90–100%, specificity 98–100%, but inadequate / failure rates may be substantial (up to 42% in some settings).',
        'Histological tissue is mandatory to confirm carcinoma and determine histological type and grade.',
      ],
      pearls: [
        'A benign or inadequate blind endometrial sample does not end the investigation when PMB persists or a focal lesion is suspected - proceed to hysteroscopy-directed biopsy.',
        'TVS is a triage / imaging tool, not a histological diagnosis. "Thin endometrium" does not overrule persistent or recurrent PMB.',
      ],
      trap: {
        title: 'Examiner trap - thin stripe ≠ reassurance',
        body: 'Recurrent PMB with a 3.5 mm endometrium and a scant inactive Pipelle sample still needs further evaluation, commonly hysteroscopy-directed assessment and biopsy. CA-125 is not a diagnostic substitute for histology.',
      },
      flow: [
        'PMB to assess risk, TVS and/or endometrial sampling',
        'Abnormal thickness, focal lesion, inadequate sample or persistent/recurrent bleeding to hysteroscopy-directed biopsy / further tissue assessment',
        'Histology confirmed to selective MRI/CT for preoperative extent and risk stratification',
      ],
    },

    {
      id: 'spread-staging',
      heading: 'Routes of Spread, Prognostic Variables & FIGO Staging',
      intro:
        'Endometrial carcinoma spreads by direct extension (endometrium to myometrium to serosa, cervix, adnexa, vagina, parametrium), lymphatic spread to pelvic and para-aortic nodes, trans-tubal / peritoneal dissemination (relevant in aggressive histotypes), and haematogenous spread - lungs are the commonest extra-pelvic metastatic site, followed by liver, brain and bone.',
      bullets: [
        'Prognostic variables: FIGO stage / anatomic extent; histological type and grade (aggressive histology such as serous is adverse); depth of myometrial invasion, especially >=50%; LVSI - particularly substantial LVSI; pelvic / para-aortic nodal involvement; molecular subtype (POLEmut often favourable, p53abn adverse, MMRd / NSMP interpreted in context); ER/PR expression; age, frailty, comorbidity and performance status.',
        'Substantial LVSI: involvement of at least five vessels/spaces per the 2025 FIGO review; an independent predictor of nodal metastasis, pelvic / vault recurrence and distant relapse.',
        'Highest-risk component rule: a serous component may behave aggressively even alongside an endometrioid component - never overlook the worst component.',
        'Peritoneal cytology: malignant washings are reported but do NOT independently upstage endometrial cancer in FIGO 2009 or FIGO 2023.',
        'Historical markers (DNA ploidy/aneuploidy, beta-catenin loss, PTEN, MMPs, Bcl-2, Ki-67) are not stand-alone decision tests - do not use them outside stage, histology, LVSI and molecular assessment.',
      ],
      table: {
        head: ['Stage', 'FIGO 2009 summary (historical framework)'],
        rows: [
          ['I', 'Tumour confined to the uterine corpus'],
          ['IA', 'No or less than 50% myometrial invasion'],
          ['IB', '50% or more myometrial invasion'],
          ['II', 'Cervical stromal invasion, no extrauterine extension; glandular involvement alone is not stromal invasion'],
          ['IIIA', 'Serosal and/or adnexal invasion by direct extension or metastasis'],
          ['IIIB', 'Vaginal and/or parametrial involvement'],
          ['IIIC1', 'Pelvic lymph-node metastasis'],
          ['IIIC2', 'Para-aortic lymph-node metastasis, with or without pelvic nodes'],
          ['IVA', 'Bladder mucosa and/or bowel mucosal invasion'],
          ['IVB', 'Distant metastasis, including intra-abdominal and/or inguinal nodes'],
        ],
      },
    },
    {
      id: 'figo-2023-staging',
      heading: 'FIGO 2023 Staging (Anatomy + Biology)',
      intro:
        'FIGO 2023 adds tumour biology to the anatomical framework - histological type, grade, LVSI and molecular classification - with molecularly defined stages such as IAm (POLEmut) and IICm (p53abn) in appropriate settings. Isolated tumour cells are documented separately per the pathology/staging protocol.',
      table: {
        head: ['Stage', 'FIGO 2023 definition / subcategory (anatomy + biology)'],
        rows: [
          ['IA1', 'Low-grade endometrioid carcinoma confined to a polyp or endometrium, no myometrial invasion'],
          ['IA2', 'Low-grade endometrioid carcinoma, <50% myometrial invasion, no or focal LVSI'],
          ['IA3', 'Selected low-grade endometrioid involving uterus and one ovary under strict favourable criteria (limited invasion, no substantial LVSI, unilateral ovary without capsule breach/rupture, no other metastases)'],
          ['IB', 'Low-grade endometrioid carcinoma, >=50% myometrial invasion, no or focal LVSI'],
          ['IC', 'Aggressive histological type confined to a polyp or endometrium, no myometrial invasion'],
          ['IIA', 'Low-grade endometrioid carcinoma with cervical stromal invasion'],
          ['IIB', 'Low-grade endometrioid carcinoma with substantial LVSI'],
          ['IIC', 'Aggressive histological type with myometrial invasion'],
          ['IIIA1', 'Spread to ovary or fallopian tube unless strict IA3 criteria met'],
          ['IIIA2', 'Uterine subserosal involvement or spread through the serosa'],
          ['IIIB1', 'Vagina and/or parametrium metastasis or direct spread'],
          ['IIIB2', 'Pelvic peritoneal metastasis'],
          ['IIIC1', 'Pelvic lymph-node metastasis (micrometastasis IIIC1i / macrometastasis IIIC1ii)'],
          ['IIIC2', 'Para-aortic nodal metastasis up to renal vessels (IIIC2i micro / IIIC2ii macro)'],
          ['IVA', 'Bladder and/or intestinal mucosal invasion'],
          ['IVB', 'Peritoneal metastasis beyond the pelvis'],
          ['IVC', 'Distant metastasis'],
        ],
      },
      bullets: [
        'FIGO 2023 adds tumour biology to anatomy - histological type, grade, LVSI and molecular classification - with molecularly defined stages such as IAm (POLEmut) and IICm (p53abn) in appropriate settings.',
        'Isolated tumour cells should be documented separately per the pathology/staging protocol.',
      ],
      pearls: [
        'Cervical stromal invasion - not glandular involvement alone - defines cervical spread; this is a frequent exam point.',
        'Substantial LVSI (>=5 vessels/spaces) upstages risk allocation in FIGO 2023 and drives adjuvant decisions.',
      ],
      trap: {
        title: 'Examiner trap - cytology does not upstage',
        body: 'Positive peritoneal cytology is reported and interpreted with the whole pathological picture, but it does not independently upstage endometrial cancer under FIGO 2009 or FIGO 2023.',
      },
    },

    {
      id: 'surgery-adjuvant',
      heading: 'Surgery, Sentinel Nodes & Risk-Adapted Adjuvant Therapy',
      intro:
        'For most operable cases the surgical backbone is total hysterectomy with bilateral salpingo-oophorectomy (TH + BSO), commonly by a minimally invasive approach. For presumed uterus-confined disease, sentinel lymph-node mapping with cervical indocyanine green (ICG) and ultrastaging is the key staging strategy; routine systematic lymphadenectomy has no established survival benefit in early-stage disease and adds morbidity. Adjuvant treatment is risk-adapted and now integrates molecular subtype.',
      table: {
        head: ['Risk group', 'Main decision inputs', 'General adjuvant principle'],
        rows: [
          ['Low', 'Low-grade, limited stage, favourable molecular profile, no substantial LVSI', 'No adjuvant therapy generally recommended'],
          ['Intermediate', 'Stage / histology / molecular pattern with modest recurrence risk', 'VBT or observation in selected contexts; consider nodal staging and LVSI'],
          ['High-intermediate', 'Adverse uterine risk factors / substantial LVSI / specific stage–molecular combinations', 'EBRT for pelvic control; VBT alternative particularly when nodal staging is pN0 and appropriate'],
          ['High', 'Advanced stage, aggressive histology, nodal disease or adverse molecular-risk combinations', 'EBRT with concurrent/adjuvant chemotherapy or sequential chemotherapy + RT; chemotherapy ± brachytherapy in selected settings'],
          ['Uncertain', 'Rare molecular / stage combinations with sparse evidence', 'Case-by-case specialist MDT review; avoid overconfident automatic rules'],
        ],
      },
      bullets: [
        'Five-year recurrence-risk shorthand from the 2025 extraction: low <8%, intermediate 8–14%, high-intermediate 15–24%, high >=25% - detailed allocation uses the full ESGO matrix.',
        'Sentinel mapping: cervical ICG injection with near-infrared visualisation; ultrastage sentinel nodes with serial sections and IHC; if mapping fails, consider side-specific lymphadenectomy according to risk; remove suspicious nodes.',
      ],
    },
    {
      id: 'portec-gog-trials',
      heading: 'PORTEC & GOG Adjuvant Trials',
      intro:
        'Landmark radiotherapy trials that shape adjuvant decisions.',
      table: {
        head: ['Trial', 'Population / comparison', 'Recurrence control', 'Survival conclusion', 'Take-home'],
        rows: [
          ['PORTEC-1', 'Early-stage / intermediate risk: EBRT vs observation', 'EBRT lowers locoregional recurrence', 'No clear overall-survival benefit', 'Avoid automatic EBRT for every low-risk patient'],
          ['GOG-99', 'Early-stage risk stratification: EBRT vs observation', 'EBRT lowers recurrence in high-intermediate subsets', 'No OS advantage established', 'High-intermediate risk features drive decisions'],
          ['PORTEC-2', 'High-intermediate-risk Stage I: VBT vs EBRT', 'Effective vaginal control with VBT', 'Comparable vaginal control; not proven equivalence for pelvic nodal control', 'VBT has less GI toxicity'],
          ['PORTEC-3', 'High-risk disease: chemoradiotherapy vs RT', 'Improved failure-free outcome in selected groups', 'Updated analysis: OS +5 points, FFS +7 points', 'Higher Grade 3–4 toxicity / neuropathy; benefit especially relevant in Stage III'],
          ['GOG-249', 'High-risk Stage I/II: pelvic RT vs VBT + 3 cycles carboplatin/paclitaxel', 'Pelvic RT gives better pelvic/para-aortic nodal control', 'No RFS/OS improvement from VBT + chemo', 'Chemo arm has more acute toxicity'],
          ['GOG-258', 'Stage III/IVA: chemoradiotherapy vs chemotherapy alone', 'RT reduces pelvic/para-aortic relapse', 'No RFS advantage for CRT over chemotherapy alone', 'Distinguish local control from systemic relapse-free outcome'],
        ],
      },
    },
    {
      id: 'systemic-treatment',
      heading: 'Advanced / Recurrent Systemic Treatment by Biomarker',
      intro:
        'Systemic treatment is selected by biomarker and clinical context; carboplatin + paclitaxel remains the cytotoxic backbone for fit patients.',
      table: {
        head: ['Clinical context', 'Biomarker / phenotype', 'Treatment principle (2025 summary)'],
        rows: [
          ['Unresectable Stage III/IV or recurrent, no prior ICI', 'MMRd', 'ICI + carboplatin/paclitaxel followed by maintenance ICI is a key first-line approach, subject to approved regimen and jurisdiction'],
          ['Recurrent after platinum, ICI-naïve', 'MMRd', 'Pembrolizumab or dostarlimab monotherapy is a preferred option'],
          ['Recurrent after platinum, ICI-naïve', 'Non-MMRd / pMMR', 'Pembrolizumab + lenvatinib is an important option; substantial toxicity requires monitoring'],
          ['Low-grade, ER-positive, low-volume or slow disease', 'ER-positive', 'Progestin-based endocrine therapy; aromatase inhibitors or tamoxifen are alternatives'],
          ['Advanced/recurrent p53abn, serous or carcinosarcoma', 'HER2 overexpression may be relevant', 'Test HER2 in appropriate disease; trastuzumab + carboplatin/paclitaxel may be considered if HER2-positive'],
          ['Fit patient needing cytotoxic systemic therapy', 'Various', 'Carboplatin + paclitaxel is the common backbone'],
        ],
      },

      bullets: [
        'Universal tumour MMR testing identifies possible Lynch syndrome: MLH1 loss (± PMS2) to MLH1 promoter methylation analysis to separate sporadic silencing from inherited MMR deficiency; refer for genetic assessment when appropriate.',
        'Fertility-sparing: best supported for Grade 1 endometrioid carcinoma without myometrial invasion and no extrauterine disease - LNG-IUS and/or oral progestin under specialist supervision with repeated histological assessment; time-limited, then hysterectomy after childbearing or on persistence/progression.',
        'Follow-up: no routine vaginal cytology or routine imaging in asymptomatic survivors (2025 FIGO update) - individualised, symptom-focused review with examination and survivorship / late-effects assessment; image only for clinical suspicion.',
      ],
      pearls: [
        'POLEmut takes precedence over p53abn and/or MMRd when several classifiers coexist.',
        'Pembrolizumab + lenvatinib is for selected non-MMRd / pMMR disease after platinum in ICI-naïve patients - Grade >=3 adverse events were 88.9% in the cited KEYNOTE-775 summary, so toxicity is substantial.',
        'MMRd has the strongest checkpoint-inhibitor relevance; PORTEC-3 improved OS by ~5 points and FFS by ~7 points, whereas GOG-258 found no RFS advantage for CRT over chemotherapy alone despite less pelvic/para-aortic relapse.',
        'In asymptomatic ECA survivors, do not order routine serial imaging or vaginal cytology - focus on symptoms, examination, late effects and survivorship needs.',
      ],
      trap: {
        title: 'Examiner trap - local control is not systemic benefit',
        body: 'GOG-258: CRT reduced pelvic/para-aortic nodal relapse (about 11% vs 20%) but did not improve RFS over chemotherapy alone - do not equate better local control with better survival.',
      },
    },

    {
      id: 'last-minute-pearls',
      heading: 'Last-Minute Examination Pearls',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'PMB is the most important classic presenting symptom of endometrial carcinoma.',
        'Histological tissue diagnosis is required - TVS alone cannot diagnose carcinoma.',
        'Persistent or recurrent PMB requires reassessment even when the endometrial stripe is thin.',
        'Pipelle is a useful office test, but focal disease may require hysteroscopy-directed biopsy.',
        'Tamoxifen can cause cystic "Swiss-cheese" endometrial appearances and reduces TVS specificity.',
        'Type I / II is a legacy framework; the four molecular classes are the modern biologic classifier.',
        'POLEmut generally has the most favourable prognosis; p53abn is generally adverse.',
        'MMR IHC should be performed in all ECA; MLH1 loss triggers MLH1 promoter methylation testing.',
        'FIGO 2023 integrates histology, grade, LVSI and molecular classification; FIGO 2009 remains relevant for older trial literature.',
        'Cervical stromal invasion, not glandular involvement alone, defines cervical stromal spread.',
        'Positive peritoneal cytology is reported but does not independently upstage ECA.',
        'Substantial LVSI (>=5 vessels/spaces) is an important adverse prognostic factor.',
        'Standard surgery for most operable cases is TH + BSO, often by a minimally invasive approach.',
        'Cervical ICG is preferred for SLN mapping in presumed uterus-confined disease; perform ultrastaging.',
        'Routine systematic lymphadenectomy has no established survival benefit in early-stage disease and causes morbidity.',
        'PORTEC-1 / GOG-99: EBRT reduces locoregional recurrence but not overall survival in the studied early-stage populations.',
        'PORTEC-2: VBT provides vaginal control with less GI toxicity than EBRT in high-intermediate-risk Stage I disease.',
        'GOG-258: CRT reduces pelvic/para-aortic relapse but does not improve RFS over chemotherapy alone.',
        'MMRd status has major implications for checkpoint-inhibitor therapy; pembrolizumab + lenvatinib is a high-toxicity option in selected non-MMRd disease after platinum.',
        'Routine vaginal cytology and routine imaging are not recommended in asymptomatic survivors per the 2025 FIGO update.',
      ],
    },
  ],

  flashcards: [
    {
      id: 'eca-f1',
      front: 'Name the four molecular subgroups of endometrial carcinoma and their broad prognostic pattern.',
      back: 'POLEmut: excellent prognosis in many early-stage cases; MMRd: intermediate / immunotherapy-relevant; NSMP: heterogeneous, refine with grade and ER; p53abn: generally worst prognosis.',
    },
    {
      id: 'eca-f2',
      front: 'What is the classic distinction between Type I and Type II endometrial cancer?',
      back: 'Type I: usually endometrioid, oestrogen-associated, often lower grade, linked to obesity and unopposed oestrogen. Type II: serous/clear-cell pattern, usually high grade, less oestrogen-driven, often p53-abnormal. This is a legacy teaching model, not the complete modern classifier.',
    },
    {
      id: 'eca-f3',
      front: 'What is the role of a 5-mm TVS endometrial-thickness threshold in postmenopausal bleeding?',
      back: '2025 FIGO review: at 5 mm, sensitivity 96.2%, NPV 99.3%, specificity 51.5% in the cited context. Persistent or recurrent bleeding still requires assessment; TVS is not histology.',
    },
    {
      id: 'eca-f4',
      front: 'When should hysteroscopy-directed biopsy be considered after Pipelle sampling?',
      back: 'When blind sampling is inadequate, a focal lesion is suspected, or bleeding persists/recurs despite benign sampling - focal lesions may be missed by blind sampling.',
    },
    {
      id: 'eca-f5',
      front: 'Why is routine TVS screening of asymptomatic tamoxifen users unhelpful?',
      back: 'Tamoxifen causes cystic glandular dilatation / stromal change ("Swiss-cheese" appearance), reducing ultrasound specificity. Investigate new bleeding rather than screening with routine TVS.',
    },
    {
      id: 'eca-f6',
      front: 'State the defining Stage II subcategories in FIGO 2023.',
      back: 'IIA: low-grade endometrioid carcinoma with cervical stromal invasion. IIB: low-grade endometrioid carcinoma with substantial LVSI. IIC: aggressive histological type with myometrial invasion.',
    },
    {
      id: 'eca-f7',
      front: 'What does FIGO 2023 add compared with FIGO 2009?',
      back: 'It integrates histological type/grade, LVSI and molecular classification into the anatomical framework, and refines pelvic peritoneal disease, ovarian involvement and nodal micro-/macrometastases.',
    },
    {
      id: 'eca-f8',
      front: 'What does substantial LVSI mean in the 2025 FIGO update?',
      back: 'Involvement of at least five vessels/spaces; an adverse prognostic feature that influences FIGO 2023 stage and risk allocation.',
    },
    {
      id: 'eca-f9',
      front: 'What tracer/injection approach is preferred for sentinel-node mapping, and what is ultrastaging?',
      back: 'Cervical indocyanine green (ICG) with near-infrared imaging is preferred. Ultrastaging uses additional serial sections and immunohistochemistry to detect low-volume metastases.',
    },
    {
      id: 'eca-f10',
      front: 'What did PORTEC-2 establish?',
      back: 'In high-intermediate-risk Stage I disease, vaginal brachytherapy provides effective vaginal control with less GI toxicity than pelvic EBRT - not proof of identical pelvic nodal control in every subgroup.',
    },
    {
      id: 'eca-f11',
      front: 'What were the updated absolute outcome differences in the PORTEC-3 summary?',
      back: 'Chemoradiotherapy improved OS by about 5 percentage points (81% vs 76%) and FFS by about 7 points (76% vs 69%) versus RT alone, with more toxicity.',
    },
    {
      id: 'eca-f12',
      front: 'What is the central GOG-258 conclusion?',
      back: 'In Stage III/IVA disease, chemoradiotherapy did not improve RFS over chemotherapy alone, but reduced pelvic/para-aortic nodal relapse (about 11% vs 20% in the supplied summary).',
    },
    {
      id: 'eca-f13',
      front: 'What additional tumour test is important when IHC shows MLH1 loss, before concluding Lynch syndrome?',
      back: 'MLH1 promoter methylation analysis (with the MLH1/PMS2 loss pattern) helps distinguish sporadic MLH1 silencing from possible Lynch syndrome; consider genetic counselling and germline testing when methylation is absent.',
    },
    {
      id: 'eca-f14',
      front: 'Which biomarker class has the strongest checkpoint-inhibitor relevance, and when is pembrolizumab + lenvatinib used?',
      back: 'MMRd has the greatest checkpoint-inhibitor benefit. Pembrolizumab + lenvatinib is relevant in selected non-MMRd / pMMR disease after platinum in ICI-naïve patients; Grade >=3 adverse events were 88.9% in the cited summary.',
    },
    {
      id: 'eca-f15',
      front: 'What is the best-supported fertility-sparing candidate, and which routine follow-up tests are not recommended in asymptomatic survivors?',
      back: 'Grade 1 endometrioid carcinoma without myometrial invasion or extrauterine disease, managed with LNG-IUS and/or oral progestin under specialist supervision with repeated biopsies. Routine vaginal cytology and routine imaging in asymptomatic survivors are not recommended by the 2025 FIGO update.',
    },
  ],

  mcqs: [
    {
      id: 'eca-q1',
      stem: 'A 58-year-old woman undergoes hysterectomy for Stage I endometrioid endometrial carcinoma with a pathogenic POLE exonuclease-domain mutation. The tumour also shows abnormal p53 staining. Which molecular classifier should be assigned when multiple classifier features are present?',
      options: ['p53-abnormal (p53abn), because abnormal p53 always takes precedence', 'MMR-deficient (MMRd), because molecular instability overrides POLE', 'POLE-mutated (POLEmut), because the pathogenic POLE mutation is the dominant genomic driver', 'NSMP, because more than one classifier is present'],
      answerIndex: 2,
      explanation: 'Multiple-classifier tumours are assigned by their dominant genomic driver: POLEmut takes precedence over p53abn and/or MMRd, and MMRd takes precedence over p53abn. A pathogenic POLE mutation defines the favourable POLEmut group even with abnormal p53 staining.',
    },
    {
      id: 'eca-q2',
      stem: 'A 67-year-old woman has recurrent postmenopausal bleeding. TVS shows a 3.5 mm endometrium and an office Pipelle sample is scant inactive endometrium without malignancy. What is the most appropriate next principle?',
      options: ['Discharge permanently because endometrial thickness is below 4 mm', 'Reassure because a negative Pipelle excludes focal carcinoma with certainty', 'Further evaluate persistent/recurrent bleeding, commonly with hysteroscopy-directed assessment and biopsy', 'Perform serum CA-125 as the definitive diagnostic test'],
      answerIndex: 2,
      explanation: 'A thin endometrial stripe has high negative predictive value in an appropriate PMB evaluation, but persistent or recurrent bleeding still warrants further assessment. Blind sampling can miss focal lesions and may be inadequate; hysteroscopy-directed biopsy is appropriate when symptoms persist. CA-125 is not a histological substitute.',
    },
    {
      id: 'eca-q3',
      stem: 'Low-grade endometrioid endometrial carcinoma shows less than 50% myometrial invasion and no or focal LVSI, with no cervical stromal involvement, nodal disease or extrauterine spread. Which FIGO 2023 stage fits best?',
      options: ['IA2', 'IIB', 'IIC', 'IIIC1'],
      answerIndex: 0,
      explanation: 'FIGO 2023 Stage IA2 is low-grade endometrioid carcinoma with <50% myometrial invasion and no or focal LVSI. IIB is low-grade endometrioid with substantial LVSI; IIC is aggressive histology with myometrial invasion; IIIC1 is pelvic nodal metastasis.',
    },
    {
      id: 'eca-q4',
      stem: 'A 54-year-old woman with endometrial carcinoma shows loss of MLH1 and PMS2 on tumour immunohistochemistry. Which additional tumour test is important before concluding she may have Lynch syndrome?',
      options: ['HER2 in-situ hybridisation in every case', 'MLH1 promoter methylation analysis', 'Serum CA-125', 'Repeat TVS in six months'],
      answerIndex: 1,
      explanation: 'MLH1 promoter methylation analysis helps identify sporadic MLH1 silencing in tumours with MLH1 loss (often with PMS2 loss). If methylation is absent or the pattern suggests inherited deficiency, genetic counselling and germline testing are considered. Universal tumour MMR IHC is recommended, but not every abnormal result is germline Lynch syndrome.',
    },
    {
      id: 'eca-q5',
      stem: 'A woman with presumed uterus-confined endometrial carcinoma is planned for minimally invasive surgical staging. Which sentinel-node mapping approach is preferred in the 2025 ESGO–ESTRO–ESP summary?',
      options: ['Blue dye injected into the uterine cavity without near-infrared imaging', 'Cervical indocyanine green injection with near-infrared visualisation and ultrastaging of sentinel nodes', 'Routine complete para-aortic lymphadenectomy in every patient', 'No nodal assessment in any patient with endometrioid histology'],
      answerIndex: 1,
      explanation: 'The guideline prefers cervical ICG injection with near-infrared imaging for presumed uterus-confined disease, with ultrastaging of sentinel nodes. Failed mapping prompts side-specific lymphadenectomy according to risk; suspicious nodes are removed.',
    },

    {
      id: 'eca-q6',
      stem: 'A 68-year-old woman with high-intermediate-risk Stage I endometrial carcinoma and negative nodal staging is choosing between vaginal brachytherapy and pelvic EBRT. Which statement best reflects PORTEC-2?',
      options: ['VBT is inferior to EBRT for all vaginal recurrences', 'VBT provides effective vaginal control with less gastrointestinal toxicity in the studied high-intermediate-risk Stage I population', 'VBT plus chemotherapy improved overall survival over EBRT', 'EBRT has no role in pelvic control in any risk group'],
      answerIndex: 1,
      explanation: 'PORTEC-2 showed VBT provides effective vaginal-vault control with less acute and chronic GI toxicity than pelvic EBRT in high-intermediate-risk Stage I patients. It does not prove identical pelvic/para-aortic nodal control in every subgroup; EBRT remains important when pelvic recurrence risk is substantial.',
    },
    {
      id: 'eca-q7',
      stem: 'Which statement correctly distinguishes PORTEC-3 from GOG-258?',
      options: ['PORTEC-3 compared VBT with EBRT; GOG-258 compared observation with VBT', 'PORTEC-3 found no survival difference; GOG-258 showed a large RFS benefit from adding EBRT', 'PORTEC-3 showed a modest OS/FFS benefit from adding chemotherapy to RT in high-risk disease, while GOG-258 found no RFS advantage for CRT over chemotherapy alone despite better pelvic/para-aortic control', 'Both trials demonstrated that radiotherapy is unnecessary in Stage III disease'],
      answerIndex: 2,
      explanation: 'PORTEC-3 compared chemoradiotherapy with RT alone in high-risk disease (updated analysis: ~5 points OS and ~7 points FFS benefit, more toxicity). GOG-258 compared CRT with chemotherapy alone in Stage III/IVA and found no RFS advantage for CRT, although pelvic/para-aortic nodal relapse was reduced with RT.',
    },
    {
      id: 'eca-q8',
      stem: 'A patient with recurrent endometrial carcinoma has progressed after platinum-based chemotherapy. Testing shows non-MMRd / pMMR disease and she is checkpoint-inhibitor-naïve. Which regimen is a key option in the 2025 guideline summary?',
      options: ['Pembrolizumab plus lenvatinib', 'Tamoxifen alone for every pMMR tumour', 'Trastuzumab for all endometrioid cancers regardless of HER2 status', 'No systemic therapy can be considered after platinum'],
      answerIndex: 0,
      explanation: 'Pembrolizumab plus lenvatinib is a relevant option for selected non-MMRd / pMMR disease after platinum in patients without prior ICI; Grade >=3 adverse events were 88.9% in the cited KEYNOTE-775 summary. Endocrine therapy suits selected low-grade ER-positive indolent disease, and trastuzumab requires HER2-positive disease in an appropriate setting.',
    },
    {
      id: 'eca-q9',
      stem: 'A 31-year-old woman desires fertility preservation. Expert review confirms Grade 1 endometrioid carcinoma; MRI shows no myometrial invasion and no extrauterine disease. Which plan best reflects the source material?',
      options: ['Fertility-sparing treatment can be considered using LNG-IUS and/or oral progestin with repeated endometrial biopsy under specialist supervision', 'No follow-up biopsy is required after starting progesterone', 'Fertility-sparing treatment is standard for all serous carcinomas', 'Hysterectomy should never be discussed after complete response'],
      answerIndex: 0,
      explanation: 'The best-supported fertility-sparing profile is Grade 1 endometrioid carcinoma confined to the endometrium without myometrial invasion or extrauterine disease. LNG-IUS and oral progestins are options, but repeated histological assessment is mandatory. The strategy is time-limited and specialist-led; definitive hysterectomy is advised after completion of childbearing or if disease persists or progresses.',
    },
    {
      id: 'eca-q10',
      stem: 'A 59-year-old asymptomatic woman has completed treatment for low-risk endometrial carcinoma with no symptoms or abnormal examination findings. Which follow-up approach is most consistent with the 2025 FIGO update?',
      options: ['Routine PET/CT every six months indefinitely', 'Routine vaginal cytology at every visit because it improves survival', 'Individualised symptom-focused follow-up with appropriate examination and survivorship care; reserve imaging for clinical suspicion', 'No follow-up or survivorship assessment is needed'],
      answerIndex: 2,
      explanation: 'The 2025 FIGO update states that high-intensity follow-up has not improved survival and does not recommend routine vaginal cytology or routine imaging in asymptomatic patients. Follow-up should be individualised around symptoms, examination, psychological support, treatment-related harms, cardiovascular/metabolic health and survivorship needs.',
    },
  ],
};

