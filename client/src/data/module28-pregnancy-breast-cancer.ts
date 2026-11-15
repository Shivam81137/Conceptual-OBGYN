import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 28 - Pregnancy and Breast Cancer
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten high-risk obstetric / oncology notes
 * (obygn pdf, pages 28-36) and organised around RCOG Green-top Guideline
 * No. 12, including the 2025 revision.
 *
 * Covers:
 * - Pregnancy-associated breast cancer and prompt diagnosis
 * - Presentation, ultrasound-first imaging and core biopsy
 * - Breast surgery in any trimester
 * - Sentinel lymph node biopsy with 99mTc and no blue dye
 * - Chemotherapy by trimester and delivery timing
 * - Radiotherapy deferral and fetal dose
 * - Endocrine and HER2-directed therapy
 * - Breastfeeding during treatment
 * - Delivery and postpartum care
 * - Future pregnancy and the myth of a fixed 2-year wait
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const PREGNANCY_BREAST_CANCER_MODULE: StudioModule = {
  id: 'pg-mod-28-pregnancy-breast-cancer',
  track: 'NEET_PG',
  title: 'Pregnancy & Breast Cancer: RCOG GTG 12',
  shortTitle: 'Pregnancy & Breast Cancer',
  summary:
    'Complete PG clinical revision module on pregnancy-associated breast cancer following RCOG Green-top Guideline No. 12, including the 2025 revision. Features prompt evaluation of a persistent lump, ultrasound as first-line imaging with mammography reserved for specific questions, core needle biopsy with ER/PR/HER2 testing, breast surgery in any trimester, sentinel node biopsy using 99mTc radiocolloid without blue dye, first-trimester contraindication to cytotoxic chemotherapy, anthracycline-based regimens with the longest pregnancy experience, the approximately 35-week or 2-week pre-delivery chemotherapy stop rule, postpartum radiotherapy with fetal dose assessment in exceptional cases, contraindications to tamoxifen, aromatase inhibitors and trastuzumab, breastfeeding restrictions during active therapy, delivery timing around the chemotherapy nadir, and individualised future pregnancy planning rather than a universal 2-year wait, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Ultrasound first, 99mTc without blue dye, no first-trimester chemo.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 12',
    'Pregnancy-Associated Breast Cancer',
    'Ultrasound First',
    'Core Needle Biopsy',
    'Surgery Any Trimester',
    'Sentinel Node 99mTc',
    'No Blue Dye',
    'First-Trimester Chemo',
    '35-Week Stop Rule',
    'Postpartum Radiotherapy',
    'Tamoxifen Contraindicated',
    'Trastuzumab Oligohydramnios',
  ],
  sourceTag:
    'Handwritten high-risk obstetric / oncology revision (obygn pdf, pp. 28-36) • RCOG Green-top Guideline No. 12 (2025 revision)',
  updatedAtISO: '2026-11-14T16:45:00.000Z',
  notes: [
    {
      id: 'overview',
      heading: 'Pregnancy-Associated Breast Cancer',
      intro:
        'Pregnancy-associated breast cancer refers to breast cancer diagnosed during pregnancy or in the postpartum period, with definitions varying across studies. Physiological breast enlargement, nodularity and tenderness can delay recognition, so a persistent or suspicious lump must not be dismissed as a normal pregnancy change.',
      flow: [
        'Recognise that a persistent lump is not normal pregnancy change',
        'Diagnose promptly',
        'Stage appropriately while minimising fetal exposure',
        'Treat the mother effectively without avoidable delay',
        'Choose treatment by gestation, tumour biology, stage and preference',
        'Coordinate the multidisciplinary team',
      ],
      bullets: [
        'Definition: breast cancer diagnosed during pregnancy or in the postpartum period.',
        'Diagnostic Pitfall: physiological breast changes can delay recognition.',
        'Priority One: diagnose promptly.',
        'Priority Two: stage appropriately while minimising fetal exposure.',
        'Priority Three: treat the mother effectively without avoidable delay.',
        'Treatment Choice: guided by gestation, tumour biology, stage and maternal preference.',
        'Team: breast surgery, medical oncology, obstetrics, radiology, pathology, anaesthesia, neonatology and fertility services.',
      ],
      table: {
        head: ['Priority', 'Principle'],
        rows: [
          ['Diagnosis', 'Do not dismiss a persistent lump as physiological'],
          ['Staging', 'Minimise fetal exposure without withholding essential information'],
          ['Treatment', 'Treat the mother effectively without avoidable delay'],
          ['Planning', 'Individualise by gestation, biology, stage and preference'],
          ['Team', 'Coordinated multidisciplinary care'],
        ],
      },
      pearls: [
        'Golden Pearl: a persistent breast lump in pregnancy requires prompt evaluation.',
        'Physiological breast changes can delay diagnosis.',
        'Treat the mother effectively without avoidable delay.',
      ],
      trap: {
        title: 'Examiner trap - reassuring a pregnant woman that a lump is "just hormonal"',
        body: 'Pregnancy causes breast enlargement, nodularity and tenderness, but a persistent or suspicious lump must be assessed. Delay in diagnosis is a recognised harm in pregnancy-associated breast cancer.',
      },
      traps: [
        {
          title: '• Attributing every breast lump to pregnancy changes.',
        },
        {
          title: '• Delaying diagnosis until after delivery.',
        },
        {
          title: '• Failing to coordinate the multidisciplinary team.',
        },
      ],
    },
    {
      id: 'diagnosis',
      heading: 'Presentation and Diagnostic Assessment',
      intro:
        'A suspicious breast lump persisting beyond a short interval, which the source notes describe with a 7-day concern trigger, requires assessment. Also evaluate nipple retraction, skin change, bloody discharge, an axillary mass or inflammatory change.',
      flow: [
        'Take a focused history and examine both breasts and axillae',
        'Arrange breast ultrasound as first-line imaging',
        'Use mammography when needed for extent or a specific diagnostic question',
        'Avoid gadolinium MRI unless a compelling specialist indication exists',
        'Perform core needle biopsy for histology and receptor status',
        'Tailor staging investigations to symptoms and stage',
        'Coordinate with radiology and maternal-fetal medicine',
      ],
      bullets: [
        'Trigger: a suspicious lump persisting for more than a short interval; the source notes use a 7-day concern trigger.',
        'Other Features: nipple retraction, skin change, bloody discharge, axillary mass or inflammatory change.',
        'Ultrasound: usually first-line in pregnancy and useful to assess a palpable lesion and guide biopsy.',
        'Mammography: generally reserved for assessment of the extent of known cancer or a specific diagnostic question after specialist review; fetal exposure is very low because the fetus is outside the primary beam.',
        'MRI: gadolinium is generally avoided during pregnancy unless a compelling specialist indication exists because it crosses the placenta.',
        'Biopsy: core needle biopsy is generally appropriate and can be performed during pregnancy.',
        'Receptors: histology and ER, PR and HER2 testing guide treatment.',
        'FNA: fine-needle aspiration alone may be insufficient for complete diagnosis and biomarker assessment.',
        'Staging: tailor investigations to symptoms and stage; avoid ionising radiation when a suitable alternative exists, but do not withhold essential staging when maternal benefit outweighs fetal risk.',
      ],
      table: {
        head: ['Investigation', 'Role in pregnancy'],
        rows: [
          ['Breast ultrasound', 'First-line for palpable lesion and biopsy guidance'],
          ['Mammography', 'Extent or specific diagnostic question with dose optimisation'],
          ['MRI gadolinium', 'Generally avoided unless compelling specialist indication'],
          ['Core needle biopsy', 'Diagnosis and ER/PR/HER2 testing'],
          ['FNA alone', 'Often insufficient for full diagnosis and biomarkers'],
          ['Staging imaging', 'Tailored; avoid unnecessary ionising radiation'],
        ],
      },
      pearls: [
        'Golden Pearl: ultrasound is usually first-line; mammography is used when indicated with dose optimisation.',
        'Core biopsy establishes diagnosis and receptor status.',
        'Gadolinium MRI is generally avoided in pregnancy.',
      ],
      trap: {
        title: 'Examiner trap - choosing mammography as the first test for every palpable lump',
        body: 'Ultrasound is usually first-line in pregnancy. Mammography is generally reserved for assessing the extent of known cancer or a specific diagnostic question after specialist review, using appropriate technique and dose optimisation.',
      },
      traps: [
        {
          title: '• Using FNA alone and missing receptor status.',
        },
        {
          title: '• Requesting gadolinium MRI routinely.',
        },
        {
          title: '• Withholding essential staging when maternal benefit outweighs fetal risk.',
        },
      ],
    },
    {
      id: 'surgery',
      heading: 'Surgery During Pregnancy',
      intro:
        'Breast surgery can be undertaken in any trimester when clinically required and should not automatically be postponed until delivery.',
      flow: [
        'Assess tumour extent, biology and gestational age',
        'Choose breast-conserving surgery or mastectomy',
        'Plan axillary staging according to nodal status',
        'Coordinate anaesthesia and obstetric care',
        'Assess the fetus before and after surgery according to gestation',
        'Plan for preterm labour risk and monitoring',
      ],
      bullets: [
        'Timing: surgery can be performed in any trimester when clinically required.',
        'Breast-Conserving Surgery: an option in selected patients when postoperative radiotherapy can be appropriately scheduled.',
        'Mastectomy: when dictated by tumour extent, multifocal disease, genetic/risk factors, patient choice or inability to deliver radiotherapy in an appropriate time frame.',
        'Axilla: staging and management according to nodal status and current breast oncology standards.',
        'Anaesthesia: consider positioning, aspiration risk, airway and VTE prevention.',
        'Fetal Assessment: before and after surgery according to gestation and local policy; intraoperative monitoring may be considered when viable and feasible.',
        'Preterm Labour: plan multidisciplinary management and monitoring.',
      ],
      table: {
        head: ['Surgical option', 'When considered'],
        rows: [
          ['Breast-conserving surgery', 'Selected patients when radiotherapy can be scheduled appropriately'],
          ['Mastectomy', 'Extent, multifocality, genetic risk, preference or radiotherapy timing'],
          ['Axillary staging', 'According to nodal status and oncology standards'],
          ['Any trimester', 'Surgery should not be automatically postponed'],
        ],
      },
      pearls: [
        'Golden Pearl: breast surgery can be performed in any trimester when required.',
        'Do not automatically postpone surgery until delivery.',
        'Plan anaesthesia, VTE prevention and fetal assessment according to gestation.',
      ],
      trap: {
        title: 'Examiner trap - postponing all breast cancer surgery until after delivery',
        body: 'Surgery can be undertaken in any trimester when clinically required. Delay may allow tumour progression and should not be automatic; individualise with the multidisciplinary team.',
      },
      traps: [
        {
          title: '• Assuming surgery is contraindicated in the first trimester.',
        },
        {
          title: '• Ignoring aspiration and VTE risk under anaesthesia.',
        },
        {
          title: '• Failing to plan fetal assessment around surgery.',
        },
      ],
    },
    {
      id: 'sentinel-node',
      heading: 'Sentinel Lymph Node Biopsy',
      intro:
        'For clinically node-negative early breast cancer, sentinel lymph node biopsy is an important staging option. In pregnancy, technetium-99m radiocolloid can be used in selected patients after specialist assessment and dose optimisation, while blue dyes are generally avoided.',
      flow: [
        'Confirm clinically node-negative disease',
        'Discuss sentinel node biopsy with the oncology team',
        'Use 99mTc radiocolloid with dose optimisation',
        'Avoid blue dyes in pregnancy',
        'Perform axillary management according to nodal status and guidance',
        'Document the technique and rationale',
      ],
      bullets: [
        'Indication: clinically node-negative early breast cancer.',
        'Radiocolloid: technetium-99m can be used in selected patients following specialist assessment and dose optimisation.',
        'Blue Dyes: isosulfan/Patent Blue and methylene blue are generally avoided in pregnancy because of maternal/fetal safety concerns and potential adverse reactions.',
        'Exam Point: the source notes emphasise 99mTc without blue dye.',
        'Axillary Management: depends on clinical nodal status, tumour subtype and current breast surgery guidance.',
      ],
      table: {
        head: ['Agent', 'Use in pregnancy'],
        rows: [
          ['99mTc radiocolloid', 'Selected patients after specialist assessment and dose optimisation'],
          ['Isosulfan/Patent Blue', 'Generally avoided'],
          ['Methylene blue', 'Generally avoided'],
        ],
      },
      pearls: [
        'Golden Pearl: sentinel node mapping may use 99mTc radiocolloid; blue dye is generally avoided.',
        'Use dose optimisation and specialist assessment.',
        'Axillary management depends on nodal status and tumour biology.',
      ],
      trap: {
        title: 'Examiner trap - using blue dye for sentinel node mapping in pregnancy',
        body: 'Blue dyes, including isosulfan/Patent Blue and methylene blue, are generally avoided in pregnancy. The key exam point is 99mTc radiocolloid without blue dye.',
      },
      traps: [
        {
          title: '• Forgetting dose optimisation for the radiocolloid.',
        },
        {
          title: '• Assuming sentinel node biopsy is absolutely contraindicated.',
        },
        {
          title: '• Ignoring axillary nodal status when planning surgery.',
        },
      ],
    },
    {
      id: 'chemotherapy',
      heading: 'Chemotherapy by Trimester and Delivery Timing',
      intro:
        'Cytotoxic chemotherapy is contraindicated in the first trimester. Selected regimens may be given after the first trimester with maternal-fetal monitoring, but timing before delivery must allow bone marrow recovery.',
      flow: [
        'Confirm gestational age and organogenesis status',
        'Avoid cytotoxic chemotherapy in the first trimester',
        'If needed, defer until the second trimester when oncologically acceptable',
        'Choose a regimen with the best pregnancy evidence',
        'Use actual body weight for dosing with specialist review',
        'Stop chemotherapy before delivery per current guidance',
        'Plan delivery with oncology and obstetrics',
      ],
      bullets: [
        'First Trimester: cytotoxic chemotherapy is contraindicated because organogenesis occurs and the risk of miscarriage and major malformations is higher.',
        'Deferral: if chemotherapy is required, treatment is usually deferred until the second trimester if oncologically acceptable.',
        'Second/Third Trimester: selected cytotoxic regimens may be administered with maternal-fetal monitoring.',
        'Anthracyclines: have the longest established pregnancy experience.',
        'Taxanes/Carboplatin: may be considered in selected cases under current specialist protocols.',
        'Dosing: generally use actual body weight rather than empiric dose reduction solely because of pregnancy, with specialist review.',
        'Delivery Timing: avoid chemotherapy close to planned birth to allow maternal and fetal bone marrow recovery.',
        '2025 RCOG Guidance: chemotherapy should generally not be administered beyond about 35 weeks or within 2 weeks of anticipated delivery, whichever comes first, depending on regimen and circumstances.',
        'Nadir: do not schedule birth during expected maternal nadir.',
        'Fetal Risks: growth restriction, prematurity, transient neonatal myelosuppression, infection and regimen-specific effects; long-term child follow-up is important where available.',
      ],
      table: {
        head: ['Trimester / timing', 'Chemotherapy approach'],
        rows: [
          ['First trimester', 'Contraindicated'],
          ['Second/third trimester', 'Selected regimens with maternal-fetal monitoring'],
          ['Anthracycline', 'Longest established pregnancy experience'],
          ['Beyond about 35 weeks', 'Generally avoid'],
          ['Within 2 weeks of delivery', 'Generally avoid'],
          ['Expected maternal nadir', 'Avoid scheduling birth'],
        ],
      },
      pearls: [
        'Golden Pearl: cytotoxic chemotherapy is contraindicated in the first trimester.',
        'Selected anthracycline/taxane-based chemotherapy can be used after the first trimester under specialist care.',
        'Stop chemotherapy sufficiently before delivery; current guidance uses about 35 weeks or at least 2 weeks before anticipated birth.',
      ],
      trap: {
        title: 'Examiner trap - continuing chemotherapy up to delivery',
        body: 'Chemotherapy should generally not be given beyond about 35 weeks or within 2 weeks of anticipated delivery, whichever comes first, to allow maternal and fetal bone marrow recovery and avoid birth during the maternal nadir.',
      },
      traps: [
        {
          title: '• Giving cytotoxic chemotherapy in the first trimester.',
        },
        {
          title: '• Reducing the dose empirically just because the patient is pregnant.',
        },
        {
          title: '• Scheduling delivery during the expected nadir.',
        },
      ],
    },
    {
      id: 'radiotherapy',
      heading: 'Radiotherapy',
      intro:
        'Radiotherapy is generally deferred until after delivery because the fetus may receive scattered radiation. Fetal dose depends on field, distance, technique and gestation.',
      flow: [
        'Plan radiotherapy after delivery when treatment can be safely delayed',
        'Balance delay against recurrence risk',
        'If an exceptional case is considered, perform specialist dosimetry',
        'Calculate fetal dose with radiation oncology and medical physics',
        'Do not assume any breast radiotherapy plan is safe in pregnancy',
        'Sequence surgery, chemotherapy and radiotherapy with the multidisciplinary team',
      ],
      bullets: [
        'General Rule: radiotherapy is generally deferred until after delivery.',
        'Why: the fetus may receive scattered radiation and fetal dose depends on field, distance, technique and gestation.',
        'Exam Shorthand: the handwritten notes use "RT postpartum".',
        'Exceptional Cases: selected cases may require specialist dosimetry to determine whether treatment can be delivered with fetal exposure below an accepted threshold, but this is not routine.',
        'Do Not Assume: not every breast radiotherapy plan is safe in pregnancy.',
        'Balance: treatment delay must be weighed against tumour recurrence risk and sequencing.',
      ],
      table: {
        head: ['Radiotherapy question', 'Answer'],
        rows: [
          ['Usual timing', 'After delivery'],
          ['Why defer', 'Scattered fetal radiation; dose depends on field, distance, technique and gestation'],
          ['Exceptional pregnancy treatment', 'Specialist dosimetry only; not routine'],
          ['Fetal dose calculation', 'Radiation oncology and medical physics'],
        ],
      },
      pearls: [
        'Golden Pearl: radiotherapy is generally deferred postpartum.',
        'Fetal dose assessment is essential in any exceptional consideration.',
        'Do not assume every breast radiotherapy plan is safe in pregnancy.',
      ],
      trap: {
        title: 'Examiner trap - assuming breast radiotherapy is always safe in pregnancy',
        body: 'Scattered radiation can reach the fetus, and dose depends on field, distance, technique and gestation. Radiotherapy is generally deferred postpartum; any exceptional antenatal treatment requires specialist dosimetry.',
      },
      traps: [
        {
          title: '• Treating "RT postpartum" as optional rather than the usual rule.',
        },
        {
          title: '• Ignoring recurrence risk when delaying treatment.',
        },
        {
          title: '• Failing to involve medical physics in exceptional cases.',
        },
      ],
    },
    {
      id: 'endocrine-her2',
      heading: 'Endocrine and HER2-Directed Therapy',
      intro:
        'Tamoxifen, aromatase inhibitors and trastuzumab are not used during pregnancy because of potential fetal harm. Defer endocrine therapy until after delivery when indicated and use reliable contraception during treatment.',
      flow: [
        'Review receptor status and planned systemic therapy',
        'Avoid tamoxifen and aromatase inhibitors during pregnancy',
        'Defer endocrine therapy until after delivery',
        'Use reliable contraception during endocrine therapy',
        'Avoid trastuzumab during pregnancy',
        'Resume HER2-directed therapy postpartum when indicated',
        'Follow specialist washout advice before conception',
      ],
      bullets: [
        'Tamoxifen: contraindicated during pregnancy because of potential fetal harm.',
        'Aromatase Inhibitors: contraindicated during pregnancy.',
        'Deferral: defer endocrine therapy until after delivery when indicated.',
        'Contraception: use reliable contraception while receiving endocrine therapy.',
        'Tamoxifen Washout: tamoxifen has a prolonged elimination period; some guidance recommends stopping approximately 2 months before attempting conception, with the exact interval confirmed with oncology.',
        'Trastuzumab: not recommended during pregnancy because of risk of oligohydramnios/anhydramnios and fetal renal effects.',
        'Other Anti-HER2 Agents: generally avoided unless a highly exceptional life-threatening circumstance requires specialist discussion.',
        'Postpartum: resume when indicated by tumour biology and treatment plan.',
        'Breastfeeding: generally not advised while receiving trastuzumab or cytotoxic/targeted anticancer drugs.',
      ],
      table: {
        head: ['Agent', 'Pregnancy status'],
        rows: [
          ['Tamoxifen', 'Contraindicated; defer postpartum'],
          ['Aromatase inhibitors', 'Contraindicated; defer postpartum'],
          ['Trastuzumab', 'Not recommended; oligohydramnios and fetal renal effects'],
          ['Other anti-HER2 agents', 'Generally avoided except exceptional specialist discussion'],
        ],
      },
      pearls: [
        'Golden Pearl: tamoxifen and trastuzumab are not used during pregnancy.',
        'Trastuzumab can cause oligohydramnios/anhydramnios and fetal renal effects.',
        'Use reliable contraception during endocrine therapy and follow washout advice.',
      ],
      trap: {
        title: 'Examiner trap - continuing trastuzumab through pregnancy',
        body: 'Trastuzumab is not recommended during pregnancy because of oligohydramnios/anhydramnios and fetal renal effects. Defer and resume postpartum when indicated.',
      },
      traps: [
        {
          title: '• Prescribing tamoxifen during pregnancy.',
        },
        {
          title: '• Forgetting contraception during endocrine therapy.',
        },
        {
          title: '• Missing the trastuzumab amniotic fluid risk.',
        },
      ],
    },
    {
      id: 'breastfeeding',
      heading: 'Breastfeeding',
      intro:
        'Breastfeeding decisions depend on active treatment and maternal breast surgery. Discuss infant feeding plans early and provide lactation support without pressure.',
      flow: [
        'Review the current systemic therapy',
        'Assess breast surgery and radiotherapy history',
        'Explain which drugs are incompatible with breastfeeding',
        'Consider breastfeeding from the unaffected breast if appropriate',
        'Provide lactation support',
        'Document the infant feeding plan',
      ],
      bullets: [
        'Possible: breastfeeding may be possible from the unaffected breast if the mother is not receiving contraindicated systemic anticancer therapy and there are no other clinical restrictions.',
        'Incompatible: cytotoxic chemotherapy, tamoxifen, trastuzumab and many targeted agents are incompatible with breastfeeding during treatment.',
        'Post-Surgery/Radiotherapy: breastfeeding from the affected breast may be limited by milk production, anatomy or pain.',
        'Support: discuss infant feeding plans early and provide lactation support without pressure.',
      ],
      table: {
        head: ['Situation', 'Breastfeeding consideration'],
        rows: [
          ['No contraindicated therapy', 'May breastfeed, including from the unaffected breast'],
          ['Cytotoxic chemotherapy', 'Incompatible during treatment'],
          ['Tamoxifen', 'Incompatible during treatment'],
          ['Trastuzumab/targeted agents', 'Generally incompatible during treatment'],
          ['After breast surgery/radiotherapy', 'Production, anatomy or pain may limit feeding'],
        ],
      },
      pearls: [
        'Golden Pearl: breastfeeding is generally incompatible with active cytotoxic, endocrine or HER2-targeted therapy.',
        'Breastfeeding from the unaffected breast may be possible if no contraindicated therapy is given.',
        'Provide lactation support without pressure.',
      ],
      trap: {
        title: 'Examiner trap - assuming breastfeeding is always contraindicated after breast cancer',
        body: 'Breastfeeding may be possible from the unaffected breast if the mother is not receiving contraindicated systemic therapy. Decisions depend on treatment, surgery and individual circumstances.',
      },
      traps: [
        {
          title: '• Allowing breastfeeding during cytotoxic chemotherapy.',
        },
        {
          title: '• Ignoring reduced milk production after radiotherapy.',
        },
        {
          title: '• Pressuring the mother about infant feeding.',
        },
      ],
    },
    {
      id: 'delivery-postpartum',
      heading: 'Delivery and Postpartum Care',
      intro:
        'Delivery timing should be coordinated to avoid a chemotherapy nadir and allow maternal recovery. Vaginal birth is generally possible unless there is an obstetric or oncological indication for caesarean.',
      flow: [
        'Coordinate delivery timing with oncology and obstetrics',
        'Avoid the expected maternal nadir',
        'Avoid unnecessary preterm delivery solely to start postpartum therapy',
        'Plan vaginal birth unless another indication exists',
        'Arrange neonatal assessment after antenatal chemotherapy',
        'Review postpartum systemic therapy, radiotherapy and endocrine therapy',
        'Address fertility preservation and contraception',
      ],
      bullets: [
        'Timing: coordinate to avoid a chemotherapy nadir and allow maternal recovery.',
        'Mode: vaginal birth is generally possible unless there is an obstetric or maternal oncological indication for caesarean.',
        'Preterm Birth: avoid unnecessary preterm delivery solely to accelerate postpartum therapy when safe treatment can continue during pregnancy.',
        'Postpartum Review: systemic therapy, radiotherapy, endocrine therapy, fertility preservation and contraception.',
        'Neonate: after antenatal chemotherapy, plan assessment of blood counts and clinical wellbeing as appropriate.',
      ],
      table: {
        head: ['Delivery issue', 'Principle'],
        rows: [
          ['Timing', 'Avoid chemotherapy nadir; coordinate with oncology'],
          ['Mode', 'Vaginal birth generally possible unless indicated otherwise'],
          ['Preterm delivery', 'Avoid solely to accelerate postpartum therapy'],
          ['Neonatal assessment', 'Blood counts and wellbeing after antenatal chemotherapy'],
          ['Postpartum', 'Plan systemic, radiation, endocrine, fertility and contraception care'],
        ],
      },
      pearls: [
        'Golden Pearl: avoid scheduling birth during the expected maternal nadir.',
        'Vaginal birth is generally possible unless there is an obstetric or oncological indication for caesarean.',
        'Avoid unnecessary preterm delivery solely to start postpartum therapy.',
      ],
      trap: {
        title: 'Examiner trap - delivering early just to start radiotherapy or endocrine therapy',
        body: 'Avoid unnecessary preterm delivery solely to accelerate postpartum therapy when safe treatment can continue during pregnancy. Coordinate timing with oncology and obstetrics.',
      },
      traps: [
        {
          title: '• Delivering during the maternal nadir.',
        },
        {
          title: '• Assuming caesarean is mandatory after breast cancer treatment.',
        },
        {
          title: '• Forgetting neonatal blood count assessment after antenatal chemotherapy.',
        },
      ],
    },
    {
      id: 'future-pregnancy',
      heading: 'Future Pregnancy After Breast Cancer',
      intro:
        'The handwritten notes cite a minimum 2-year wait before conception. Treat this as historical and individualised counselling shorthand, not a universal current rule.',
      flow: [
        'Assess tumour subtype, stage and recurrence risk',
        'Review treatment completed and endocrine therapy plan',
        'Discuss age, ovarian reserve and fertility goals',
        'Consider fertility preservation before gonadotoxic therapy',
        'Individualise the interval to conception',
        'Plan high-risk obstetric follow-up',
        'Assess cardiac function if anthracycline or trastuzumab exposure warrants it',
      ],
      bullets: [
        'Historical Note: the notes cite a minimum 2-year wait before conception.',
        'Current Principle: timing depends on subtype, stage, recurrence risk, treatment completed, endocrine therapy interruption risks, age, ovarian reserve and fertility goals.',
        'Recurrence: pregnancy after treated early breast cancer has not consistently been shown to worsen recurrence risk in observational data, but individual risk differs.',
        'No Universal Interval: there is no single mandatory 2-year interval for every patient.',
        'Endocrine Interruption: interrupting endocrine therapy to attempt pregnancy requires specialist discussion, including treatment duration already received and when/how it will restart.',
        'Fertility Preservation: discuss before gonadotoxic therapy when possible.',
        'Obstetric Follow-Up: consider high-risk care after systemic treatment.',
        'Cardiac: assess cardiac function where prior anthracycline or trastuzumab exposure warrants it.',
      ],
      table: {
        head: ['Future pregnancy question', 'Answer'],
        rows: [
          ['Fixed 2-year wait', 'Not a universal current rule; individualise'],
          ['Recurrence risk', 'Observational data do not consistently show increased risk; individual variation remains'],
          ['Endocrine therapy interruption', 'Specialist discussion required'],
          ['Fertility preservation', 'Discuss before gonadotoxic therapy'],
          ['Cardiac surveillance', 'Assess after anthracycline or trastuzumab when indicated'],
        ],
      },
      pearls: [
        'Golden Pearl: a fixed 2-year wait to conceive is not a universal current rule.',
        'Individualise with oncology and fertility teams.',
        'Discuss fertility preservation before gonadotoxic therapy.',
      ],
      trap: {
        title: 'Examiner trap - quoting a mandatory 2-year wait for every survivor',
        body: 'The 2-year figure is historical/individualised counselling shorthand. Current practice considers subtype, stage, recurrence risk, treatment, endocrine interruption, age and fertility goals, with no single mandatory interval for everyone.',
      },
      traps: [
        {
          title: '• Forbidding pregnancy for exactly 2 years in every case.',
        },
        {
          title: '• Ignoring the need for specialist advice before interrupting endocrine therapy.',
        },
        {
          title: '• Missing cardiac follow-up after anthracycline or trastuzumab.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'A persistent breast lump in pregnancy requires prompt evaluation.',
        'Do not dismiss a lump as physiological breast change.',
        'Ultrasound is usually first-line imaging.',
        'Mammography can be used when indicated with dose optimisation.',
        'Gadolinium MRI is generally avoided in pregnancy.',
        'Core biopsy establishes diagnosis and receptor status.',
        'Breast surgery can be performed in any trimester when required.',
        'Sentinel-node mapping may use 99mTc radiocolloid.',
        'Blue dye is generally avoided in pregnancy.',
        'Cytotoxic chemotherapy is contraindicated in the first trimester.',
        'Selected anthracycline/taxane-based chemotherapy can be used after the first trimester.',
        'Anthracyclines have the longest established pregnancy experience.',
        'Stop chemotherapy around 35 weeks or at least 2 weeks before anticipated birth.',
        'Radiotherapy is generally deferred postpartum.',
        'Fetal dose assessment is essential in any exceptional antenatal radiotherapy.',
        'Tamoxifen and trastuzumab are not used during pregnancy.',
        'Trastuzumab risks oligohydramnios and fetal renal effects.',
        'Breastfeeding is generally incompatible with active cytotoxic, endocrine or HER2-targeted therapy.',
        'Avoid delivery during the chemotherapy nadir.',
        'A fixed 2-year wait to conceive is not a universal current rule.',
      ],
      traps: [
        {
          title: '• Reassuring a persistent lump as hormonal.',
        },
        {
          title: '• Using mammography as the first test for every palpable lump.',
        },
        {
          title: '• Giving blue dye for sentinel node mapping.',
        },
        {
          title: '• Prescribing chemotherapy in the first trimester.',
        },
        {
          title: '• Continuing chemotherapy to delivery.',
        },
        {
          title: '• Assuming breast radiotherapy is always safe in pregnancy.',
        },
        {
          title: '• Using tamoxifen or trastuzumab antenatally.',
        },
        {
          title: '• Applying a mandatory 2-year wait to every survivor.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm28-f1',
      front: 'What is pregnancy-associated breast cancer?',
      back: 'Breast cancer diagnosed during pregnancy or in the postpartum period, with definitions varying across studies. Physiological breast changes can delay recognition, so a persistent lump must be assessed.',
    },
    {
      id: 'm28-f2',
      front: 'What is the first-line imaging for a palpable breast lump in pregnancy?',
      back: 'Breast ultrasound, which is useful to assess the lesion and guide biopsy. Mammography is reserved for assessing extent or a specific diagnostic question after specialist review, with dose optimisation.',
    },
    {
      id: 'm28-f3',
      front: 'Why is gadolinium MRI generally avoided in pregnancy?',
      back: 'Gadolinium crosses the placenta, so MRI with gadolinium is generally avoided unless a compelling specialist indication exists.',
    },
    {
      id: 'm28-f4',
      front: 'What biopsy technique is appropriate for a breast lump in pregnancy?',
      back: 'Core needle biopsy is generally appropriate and can be performed during pregnancy. It provides histology and ER, PR and HER2 status; FNA alone may be insufficient.',
    },
    {
      id: 'm28-f5',
      front: 'When can breast surgery be performed in pregnancy?',
      back: 'In any trimester when clinically required. Surgery should not automatically be postponed until delivery.',
    },
    {
      id: 'm28-f6',
      front: 'Which tracer and dye are used for sentinel node biopsy in pregnancy?',
      back: 'Technetium-99m radiocolloid can be used in selected patients after specialist assessment and dose optimisation. Blue dyes are generally avoided.',
    },
    {
      id: 'm28-f7',
      front: 'Why is cytotoxic chemotherapy contraindicated in the first trimester?',
      back: 'Organogenesis occurs in the first trimester, and the risk of miscarriage and major fetal malformations is higher. If chemotherapy is required, it is usually deferred until the second trimester if oncologically acceptable.',
    },
    {
      id: 'm28-f8',
      front: 'Which chemotherapy regimens have the longest established pregnancy experience?',
      back: 'Anthracycline-based regimens. Taxanes and carboplatin may be considered in selected cases under current specialist protocols.',
    },
    {
      id: 'm28-f9',
      front: 'When should chemotherapy stop before delivery?',
      back: 'Generally not beyond about 35 weeks or within 2 weeks of anticipated delivery, whichever comes first, depending on regimen and circumstances, to allow maternal and fetal bone marrow recovery.',
    },
    {
      id: 'm28-f10',
      front: 'When is radiotherapy usually given in pregnancy-associated breast cancer?',
      back: 'It is generally deferred until after delivery because of scattered fetal radiation. Exceptional antenatal treatment requires specialist dosimetry and medical physics input.',
    },
    {
      id: 'm28-f11',
      front: 'Why are tamoxifen and aromatase inhibitors avoided in pregnancy?',
      back: 'They are contraindicated because of potential fetal harm. Endocrine therapy is deferred until after delivery when indicated, with reliable contraception during treatment.',
    },
    {
      id: 'm28-f12',
      front: 'What is the main fetal risk of trastuzumab in pregnancy?',
      back: 'Oligohydramnios/anhydramnios and fetal renal effects. Trastuzumab is not recommended during pregnancy and is resumed postpartum when indicated.',
    },
    {
      id: 'm28-f13',
      front: 'When is breastfeeding possible after breast cancer in pregnancy?',
      back: 'Breastfeeding may be possible from the unaffected breast if the mother is not receiving contraindicated systemic therapy and there are no other restrictions. Cytotoxic chemotherapy, tamoxifen, trastuzumab and many targeted agents are incompatible during treatment.',
    },
    {
      id: 'm28-f14',
      front: 'How should delivery be timed after antenatal chemotherapy?',
      back: 'Avoid the expected maternal nadir and allow maternal and fetal bone marrow recovery. Coordinate timing with oncology and obstetrics; vaginal birth is generally possible unless otherwise indicated.',
    },
    {
      id: 'm28-f15',
      front: 'Is a fixed 2-year wait mandatory before pregnancy after breast cancer?',
      back: 'No. The 2-year figure is historical/individualised counselling shorthand. Timing depends on subtype, stage, recurrence risk, treatment, endocrine interruption, age and fertility goals, with specialist input.',
    },
  ],

  mcqs: [
    {
      id: 'm28-q1',
      stem: 'A woman at 24 weeks presents with a persistent breast lump. What is the most appropriate first imaging test?',
      options: ['Mammography', 'Breast ultrasound', 'Gadolinium-enhanced MRI', 'CT chest'],
      answerIndex: 1,
      explanation:
        'Breast ultrasound is usually first-line in pregnancy and can guide biopsy. Mammography is generally reserved for assessing extent or a specific diagnostic question, with dose optimisation.',
    },
    {
      id: 'm28-q2',
      stem: 'Which sentinel lymph node technique is preferred in pregnancy?',
      options: [
        '99mTc radiocolloid without blue dye',
        'Methylene blue alone',
        'Isosulfan blue alone',
        'No staging is ever possible',
      ],
      answerIndex: 0,
      explanation:
        'Technetium-99m radiocolloid can be used in selected patients after specialist assessment and dose optimisation. Blue dyes are generally avoided in pregnancy.',
    },
    {
      id: 'm28-q3',
      stem: 'A woman is diagnosed with breast cancer at 9 weeks gestation and needs chemotherapy. What is the correct approach?',
      options: [
        'Start cytotoxic chemotherapy immediately',
        'Defer until the second trimester if oncologically acceptable',
        'Use tamoxifen instead',
        'Deliver immediately',
      ],
      answerIndex: 1,
      explanation:
        'Cytotoxic chemotherapy is contraindicated in the first trimester because of organogenesis and malformation risk. If required, it is usually deferred until the second trimester if oncologically acceptable.',
    },
    {
      id: 'm28-q4',
      stem: 'Which chemotherapy class has the longest established experience in pregnancy?',
      options: ['Anthracyclines', 'Alkylating agents', 'Platinum agents', 'Taxanes'],
      answerIndex: 0,
      explanation:
        'Anthracycline-based regimens have the longest established pregnancy experience. Taxanes and carboplatin may be considered in selected cases under specialist protocols.',
    },
    {
      id: 'm28-q5',
      stem: 'A woman has her last chemotherapy cycle at 34 weeks. What is the main reason to avoid a further cycle at 36 weeks?',
      options: [
        'It causes immediate fetal malformation',
        'To allow maternal and fetal bone marrow recovery before delivery',
        'It prevents breastfeeding forever',
        'It is illegal after 34 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Chemotherapy should generally not be given beyond about 35 weeks or within 2 weeks of anticipated delivery, whichever comes first, to allow bone marrow recovery and avoid birth during the maternal nadir.',
    },
    {
      id: 'm28-q6',
      stem: 'When is radiotherapy usually delivered in pregnancy-associated breast cancer?',
      options: [
        'During the first trimester',
        'During the second trimester',
        'After delivery',
        'At the same time as chemotherapy in all cases',
      ],
      answerIndex: 2,
      explanation:
        'Radiotherapy is generally deferred until after delivery because of scattered fetal radiation. Exceptional antenatal treatment requires specialist dosimetry.',
    },
    {
      id: 'm28-q7',
      stem: 'Which drug is contraindicated in pregnancy because of oligohydramnios and fetal renal effects?',
      options: ['Tamoxifen', 'Trastuzumab', 'Aromatase inhibitor', 'Goserelin'],
      answerIndex: 1,
      explanation:
        'Trastuzumab is not recommended during pregnancy because of oligohydramnios/anhydramnios and fetal renal effects. Tamoxifen and aromatase inhibitors are also contraindicated but for different reasons.',
    },
    {
      id: 'm28-q8',
      stem: 'A woman on tamoxifen wishes to conceive. What is the appropriate advice?',
      options: [
        'Conceive immediately without stopping',
        'Follow specialist washout advice; some guidance recommends stopping about 2 months before conception',
        'Stop tamoxifen only after conception',
        'Tamoxifen is safe throughout pregnancy',
      ],
      answerIndex: 1,
      explanation:
        'Tamoxifen is contraindicated in pregnancy and has a prolonged elimination period. Patients planning pregnancy should follow specialist washout advice, with some guidance recommending stopping approximately 2 months before attempting conception.',
    },
    {
      id: 'm28-q9',
      stem: 'Which statement about breastfeeding during anticancer treatment is correct?',
      options: [
        'Breastfeeding is safe during cytotoxic chemotherapy',
        'Breastfeeding is generally incompatible with cytotoxic, endocrine or HER2-targeted therapy',
        'Breastfeeding is mandatory from the affected breast',
        'Trastuzumab is compatible with breastfeeding',
      ],
      answerIndex: 1,
      explanation:
        'Cytotoxic chemotherapy, tamoxifen, trastuzumab and many targeted agents are incompatible with breastfeeding during treatment. Breastfeeding from the unaffected breast may be possible if no contraindicated therapy is given.',
    },
    {
      id: 'm28-q10',
      stem: 'A survivor asks how long she must wait before trying to conceive. What is the best response?',
      options: [
        'A mandatory 2-year wait applies to everyone',
        'There is no single mandatory interval; timing is individualised with oncology and fertility input',
        'She should never conceive',
        'She can conceive immediately regardless of treatment',
      ],
      answerIndex: 1,
      explanation:
        'The 2-year figure is historical/individualised counselling shorthand. Current practice considers subtype, stage, recurrence risk, treatment completed, endocrine interruption, age and fertility goals, with specialist input.',
    },
  ],
};
