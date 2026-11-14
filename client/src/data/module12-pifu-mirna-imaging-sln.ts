import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 12 - ESGO Follow-Up (PIFU), HPV miRNAs & Oncological Imaging / SLN
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 120-132) with the
 * ESGO 2025 follow-up principles, the Renz et al. 2025 ovarian-cancer review,
 * IETA and IOTA ultrasound standards, and contemporary sentinel lymph-node
 * pathology.
 *
 * Covers:
 * - Patient-initiated follow-up: eligibility, safety net and limits
 * - HPV-associated microRNAs: miR-21, miR-34a and miR-29
 * - Vulvar and cervical cancer imaging, MRI and the ultrasound sliding sign
 * - Endometrial ultrasound: IETA framework and double-layer thickness
 * - Adnexal masses: IOTA Simple Rules and the ADNEX model
 * - Whole-body diffusion-weighted MRI
 * - Sentinel lymph-node mapping, ICG, failed mapping and ultrastaging
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const PIFU_MIRNA_IMAGING_SLN_MODULE: StudioModule = {
  id: 'pg-mod-12-pifu-mirna-imaging-sln',
  track: 'NEET_PG',
  title: 'ESGO Follow-Up (PIFU), HPV miRNAs & Oncological Imaging / SLN',
  shortTitle: 'PIFU, miRNAs, Imaging & SLN',
  summary:
    'Complete PG clinical revision module on survivorship and oncological imaging in gynaecological cancer. Features patient-initiated follow-up eligibility and safety nets, HPV miRNA biology, MRI and ultrasound assessment including the sliding sign, IETA endometrial reporting, IOTA Simple Rules, the ADNEX model, whole-body diffusion-weighted MRI, ICG sentinel lymph-node mapping, failed mapping algorithms and ultrastaging, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'PIFU safety nets, miRNA biology, IOTA/ADNEX and SLN ultrastaging.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 48,
  tags: [
    'Patient-Initiated Follow-Up',
    'PIFU Safety Net',
    'miR-21 OncomiR',
    'miR-34a & miR-29',
    'MRI Pelvic Staging',
    'Ultrasound Sliding Sign',
    'IETA Endometrial Reporting',
    'IOTA Simple Rules',
    'ADNEX Five Categories',
    'Whole-Body DWI MRI',
    'ICG SLN Mapping',
    'Ultrastaging & ITCs',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 120-132) • ESGO 2025 follow-up • Renz et al. 2025 ovarian review • IETA • IOTA',
  updatedAtISO: '2026-11-14T09:30:00.000Z',
  notes: [
    {
      id: 'pifu-model',
      heading: 'Patient-Initiated Follow-Up: Eligibility, Safety Net & Limits',
      intro:
        'Patient-initiated follow-up (PIFU) is a supported survivorship pathway in which selected, clinically well patients contact a named specialist team when symptoms or concerns arise instead of attending automatic routine appointments. It is never discharge without a safety net.',
      flow: [
        'Confirm primary treatment is complete · no active treatment, maintenance or trial requirement that mandates scheduled review',
        'Confirm clinical wellness · no evidence of active or recurrent disease and no toxicity needing scheduled assessment',
        'Assess capability · can the patient recognise warning symptoms, communicate concerns and access the service?',
        'Share the decision · confirm patient preference and understanding of the pathway',
        'Provide the safety net · named contact, written symptom list, response-time expectations and rapid re-entry',
        'Triage any contact · clarify symptoms, review tumour and treatment history, examine and investigate as justified',
        'Return to scheduled care · if risk, toxicity, capability or patient preference changes',
      ],
      bullets: [
        'Definition: PIFU is a model in which a patient who has completed treatment is not automatically booked into routine review for a defined period, but has clear instructions and a direct route back to the specialist team.',
        'Purpose: support self-management and autonomy, provide rapid access when symptoms occur, reduce low-value routine appointments and preserve access to advice and investigation.',
        'Not Discharge: a named contact, written symptom information, response-time expectations and a rapid re-entry pathway are essential.',
        'Eligibility: completed primary treatment, clinically well with no active or recurrent disease, no ongoing toxicity requiring scheduled assessment, understanding of warning symptoms and ability to access the service.',
        'Shared Decision: the patient must agree to the pathway after an informed discussion.',
        'Service Requirement: the oncology service must be able to provide timely assessment when the patient contacts the team.',
        'Factors Against PIFU: high or uncertain recurrence risk, active or maintenance treatment, clinical-trial follow-up, unresolved complications or late effects, and cognitive, communication, psychological, social or access barriers.',
        'Patient Preference: a preference for scheduled appointments is itself a valid reason to continue scheduled review.',
        'Handwritten Note - Ovarian Cancer: ESGO/ESMO guidance is described as not supporting routine PIFU for all ovarian cancer patients because recurrence risk and symptoms matter.',
        'Handwritten Note - Low-Grade Early Ovarian Cancer: recurrence risk may be lower and PIFU may be considered in selected cases.',
        'Handwritten Note - Vulvar Cancer: specifically marked as not suitable for PIFU in the notes; higher-risk disease and patients needing active toxicity management also require scheduled specialist review.',
        'Handwritten Note - Examination: routine clinical examination alone may be insufficient to detect recurrence in some ovarian cancer contexts, so follow-up should be risk- and symptom-directed.',
        'Warning Symptoms: new or persistent abdominal or pelvic pain, increasing distension, early satiety, unexplained weight loss, fatigue, vaginal bleeding or discharge, bowel or bladder symptoms.',
        'Additional Warning Symptoms: persistent cough or breathlessness, new leg swelling or unilateral limb pain, a new vulvar or vaginal lesion, groin or pelvic lump, persistent bone pain, neurological symptoms or unexplained headache.',
        'Symptom Meaning: a symptom is not proof of recurrence; it is a reason for appropriate clinical assessment.',
        'PIFU Contact: triage by the named oncology nurse or specialist team, clarify symptom onset and severity, review the original cancer and treatment, examine where indicated and arrange targeted tests.',
        'Histology: obtain histological confirmation when recurrence or a second primary is suspected and biopsy is feasible.',
        'Documentation: record the contact, assessment, communication and a clear next step.',
        'Cervical Cancer Follow-Up: individualise follow-up by recurrence risk, treatment and survivorship needs; take a relevant history, examine with speculum and bimanual examination when indicated and investigate according to symptoms and findings.',
        'Ovarian Cancer Follow-Up: there is no single evidence-based schedule for every patient; a commonly used approach is more frequent review in the first years with intervals widening over time.',
        'CA-125 at Follow-Up: consider it in context if it was informative at baseline and the patient wishes to use it; do not assume that treating an isolated rise before clinical or radiological recurrence improves survival.',
        'MRC OV05/EORTC 55955: found no overall-survival benefit from starting chemotherapy solely because CA-125 had risen before clinical relapse.',
      ],
      table: {
        head: ['Feature', 'PIFU', 'Scheduled Follow-Up'],
        rows: [
          [
            'Appointment pattern',
            'Patient contacts the team',
            'Pre-booked reviews',
          ],
          [
            'Patient role',
            'Active symptom reporting',
            'Attends planned visits',
          ],
          [
            'Safety requirement',
            'Direct rapid re-entry to specialist care',
            'Planned review pathway',
          ],
          [
            'Best suited to',
            'Selected low-risk, clinically well patients after treatment',
            'Patients needing surveillance, toxicity review or high-risk review',
          ],
          [
            'Investigations',
            'Triggered by concern and recurrence risk',
            'Risk- and protocol-directed',
          ],
          [
            'Not appropriate when',
            'A fixed surveillance or toxicity schedule is required',
            'Not applicable; scheduled care is required',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: PIFU is structured self-management with a named route back into specialist care, never discharge without a safety net.',
        'Vulvar cancer is specifically marked as unsuitable for PIFU in the notes.',
        'An isolated CA-125 rise alone does not justify immediate chemotherapy in an asymptomatic ovarian cancer survivor.',
      ],
      trap: {
        title: 'Examiner trap - reading PIFU as discharge',
        body: 'PIFU requires active patient education, a named contact, written warning symptoms and rapid specialist re-entry. It is suitable only for selected, clinically well patients after treatment, not for everyone with early-stage disease.',
      },
      traps: [
        {
          title: '• Offering PIFU to a patient with active toxicity or unresolved treatment complications.',
        },
        {
          title: '• Assuming every early-stage ovarian cancer is automatically eligible for PIFU.',
        },
        {
          title: '• Using routine vaginal vault cytology as a substitute for clinical assessment.',
        },
        {
          title: '• Treating a rising CA-125 alone as an automatic trigger for chemotherapy.',
        },
      ],
    },
    {
      id: 'mirna-biology',
      heading: 'HPV-Associated microRNAs: miR-21, miR-34a & miR-29',
      intro:
        'MicroRNAs are short non-coding RNAs that regulate gene expression after transcription. In cancer they behave either as oncomiRs that promote oncogenic pathways when overexpressed or as tumour-suppressor miRNAs that restrain proliferation, invasion and survival. All three exam miRNAs remain investigational biomarkers.',
      flow: [
        'Define the miRNA · short non-coding RNA regulating messenger RNA stability or translation',
        'Assign the role · oncomiR when overexpression promotes cancer, tumour suppressor when normal expression restrains it',
        'Interpret the direction · increased miR-21 versus reduced miR-34a and miR-29 in many cancer studies',
        'Link the pathway · survival and invasion for miR-21, p53 responses for miR-34a, extracellular matrix and epigenetic regulation for miR-29',
        'Apply the caveat · tissue, specimen type, assay platform and normalisation all change the result',
        'Do not substitute · miRNA testing does not replace HPV testing, cytology, histopathology or imaging',
      ],
      bullets: [
        'miRNA Biology: microRNAs bind target messenger RNA and promote degradation or inhibit translation; one miRNA can regulate multiple targets and one target may be regulated by multiple miRNAs.',
        'OncomiR: a miRNA that promotes oncogenic pathways when overexpressed.',
        'Tumour-Suppressor miRNA: a miRNA that restrains proliferation, invasion or survival when expressed normally.',
        'miR-21 Role: widely studied as an oncomiR in several solid tumours, including gynaecological cancers.',
        'miR-21 Associations: reduced tumour-suppressor pathway expression, increased proliferation and survival, reduced apoptosis, invasion and migration, metastatic behaviour and treatment resistance in selected cohorts.',
        'miR-21 Caveat: it is not a stand-alone diagnostic test for cervical, endometrial or ovarian cancer; assay method, specimen type, tumour subtype and study population affect results.',
        'miR-34a Role: commonly described as a tumour-suppressor miRNA linked to p53-regulated cellular responses.',
        'miR-34a Effects: cell-cycle arrest, promotion of apoptosis, inhibition of proliferation and modulation of invasion and epithelial-mesenchymal transition pathways.',
        'miR-34a Expression: reduced expression has been described in several malignancies; the relationship with HPV-associated disease is biologically complex and not a single direct pathway.',
        'miR-29 Family: includes miR-29a, miR-29b and miR-29c and is generally described as tumour-suppressive in several cancer settings.',
        'miR-29 Functions: regulation of extracellular matrix and collagen pathways, DNA methylation machinery and epigenetic regulation, proliferation, invasion, metastasis, apoptosis and tumour-microenvironment signalling.',
        'Handwritten Emphasis: the notes specifically identify miR-34a and miR-29 as downregulated or tumour-suppressive and list miR-21 among the relevant miRNAs.',
        'Potential Uses: early detection and triage, prognosis and recurrence-risk estimation, monitoring treatment response and identifying therapeutic targets.',
        'Limitations: no single miRNA signature is universally validated for routine screening, results vary by tissue, blood, exosomes, assay platform and normalisation, and association does not prove causation.',
      ],
      table: {
        head: ['Feature', 'miR-21', 'miR-34a', 'miR-29 Family'],
        rows: [
          [
            'Typical role',
            'OncomiR',
            'Tumour suppressor',
            'Often tumour suppressor',
          ],
          [
            'Common cancer signal',
            'Increased expression',
            'Reduced expression',
            'Reduced expression in several tumour settings',
          ],
          [
            'Pathways',
            'Survival, invasion, proliferation',
            'p53-linked arrest and apoptosis',
            'Extracellular matrix, epigenetic and growth regulation',
          ],
          [
            'Clinical status',
            'Investigational',
            'Investigational',
            'Investigational',
          ],
          [
            'Exam association',
            'Oncogenic miRNA',
            'p53-associated',
            'ECM and DNMT regulation',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: miR-21 is the classic oncomiR; miR-34a and miR-29 are commonly discussed as tumour-suppressive.',
        'No miRNA is a validated stand-alone screening test in routine gynaecological oncology.',
        'miR-29 regulates extracellular matrix, collagen and DNA methylation machinery.',
      ],
      trap: {
        title: 'Examiner trap - presenting an investigational miRNA as a screening test',
        body: 'miR-21, miR-34a and miR-29 are teaching examples of oncomiR versus tumour-suppressor biology. Their clinical role remains investigational, and they do not replace HPV testing, cytology, histopathology or imaging.',
      },
      traps: [
        {
          title: '• Calling miR-21 a tumour suppressor.',
        },
        {
          title: '• Claiming miR-34a or miR-29 are established screening tests.',
        },
        {
          title: '• Treating an expression association as proof of causation.',
        },
      ],
    },
    {
      id: 'pelvic-imaging',
      heading: 'Vulvar & Cervical Cancer: MRI, Ultrasound & the Sliding Sign',
      intro:
        'Pelvic imaging is chosen to answer a defined clinical question: local tumour extent, depth of invasion, parametrial or adjacent-organ involvement, nodal disease, distant metastases, treatment response or suspected recurrence. MRI gives the best soft-tissue detail for local pelvic staging.',
      flow: [
        'Define the clinical question · local extent, nodal disease, distant disease or recurrence',
        'Examine and biopsy first · imaging complements, and does not replace, histological diagnosis',
        'Choose the modality · MRI for local soft-tissue detail, ultrasound for real-time or dynamic assessment, CT or PET-CT for systemic disease',
        'Report the relevant anatomy · size, stromal or parametrial invasion, vaginal extension, urethra, bladder, rectum and pelvic sidewall',
        'Assess nodes · imaging cannot exclude micrometastasis, so suspicious nodes may need tissue confirmation',
        'Avoid routine imaging without indication · repeated scans generate false positives and unnecessary procedures',
      ],
      bullets: [
        'General Principle: imaging is selected according to the clinical question rather than performed as a fixed panel.',
        'MRI Strength: high soft-tissue contrast makes MRI particularly useful for local pelvic staging and treatment planning.',
        'Ultrasound Strength: real-time pelvic assessment by an experienced operator, including dynamic manoeuvres.',
        'CT and PET-CT: more commonly used for systemic disease assessment in selected patients.',
        'Vulvar Cancer Diagnosis: clinical examination and biopsy establish diagnosis; imaging assesses local extent, adjacent structures and nodal or distant disease.',
        'Vulvar MRI: useful for larger lesions or suspected extension beyond the vulva, assessing the relationship to urethra, vagina, anus and adjacent structures and deep soft-tissue involvement.',
        'Vulvar Ultrasound: groin ultrasound can assess inguinofemoral nodes and guide needle sampling of suspicious nodes, but it cannot exclude microscopic nodal disease.',
        'Cervical MRI: assesses tumour size and stromal extent, distance from tumour to internal os when relevant, parametrial invasion, vaginal extension, pelvic sidewall and adjacent-organ involvement.',
        'Cervical Fertility-Sparing Assessment: MRI contributes to treatment planning, including fertility-sparing assessment in selected patients.',
        'Cervical Ultrasound: endovaginal or transrectal ultrasound may be an alternative for local assessment when performed by an appropriately trained expert; MRI is preferred when expertise is unavailable or anatomy is difficult.',
        'Sliding Sign Concept: a dynamic sonographic manoeuvre assessing whether two adjacent structures glide freely or appear fixed by adhesions or deep infiltrating disease.',
        'Positive Sliding Sign: structures move freely relative to each other.',
        'Negative Sliding Sign: structures do not glide freely, suggesting fixation, adhesions and possible pouch-of-Douglas obliteration.',
        'Sliding Sign Caveat: it is an adjunct, not a histological diagnosis; technique, probe pressure, patient position and operator experience affect interpretation.',
        'Imaging Caveats: MRI can overestimate or underestimate microscopic invasion, and a normal-appearing node may contain micrometastasis.',
        'Tissue Confirmation: a suspicious node should be evaluated in the context of the primary tumour and may require tissue confirmation; imaging does not replace histopathology.',
      ],
      table: {
        head: ['Modality', 'Main Strength', 'Main Limitation'],
        rows: [
          [
            'MRI',
            'Best soft-tissue detail for local pelvic extent and treatment planning',
            'Longer scan; availability; may over- or underestimate microscopic invasion',
          ],
          [
            'Ultrasound',
            'Real-time, accessible pelvic assessment; dynamic manoeuvres such as the sliding sign',
            'Operator dependent; cannot exclude microscopic nodal disease',
          ],
          [
            'CT',
            'Rapid systemic staging and abdominal disease mapping',
            'Ionising radiation; lower soft-tissue contrast in the pelvis',
          ],
          [
            'PET-CT',
            'Metabolic assessment in selected staging or recurrence settings',
            'Radiation; inflammatory uptake can mimic malignancy',
          ],
          [
            'WB-DWI/MRI',
            'Whole-body diffusion information without ionising radiation',
            'False positives; protocol and expertise dependent; not universal first-line',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: MRI is the preferred modality for local pelvic soft-tissue staging; CT is for systemic disease mapping.',
        'A negative sliding sign suggests fixation or adhesions and possible pouch-of-Douglas obliteration, but it is not histological proof.',
        'A normal-appearing lymph node on imaging can still contain micrometastasis.',
      ],
      trap: {
        title: 'Examiner trap - treating a negative sliding sign as proof of invasion',
        body: 'The sliding sign is a dynamic ultrasound adjunct. A negative sign suggests fixation or adhesions, but technique, probe pressure, position and operator experience affect interpretation, and histology remains the reference standard.',
      },
      traps: [
        {
          title: '• Using CT as the first-line test for local pelvic soft-tissue staging.',
        },
        {
          title: '• Excluding nodal disease because a node looked normal on imaging.',
        },
        {
          title: '• Reporting the sliding sign as a histological diagnosis.',
        },
      ],
    },
    {
      id: 'endometrial-ieta',
      heading: 'Endometrial Ultrasound: IETA Framework & Double-Layer Thickness',
      intro:
        'The International Endometrial Tumor Analysis group standardised how the endometrium is described on ultrasound. Correct measurement technique matters as much as the number: a double-layer sagittal measurement perpendicular to the midline at the thickest point, or an explicit statement that the endometrium is non-measurable.',
      flow: [
        'Confirm the whole endometrium is visualised · if not, report as non-measurable',
        'Measure in the mid-sagittal plane · double-layer thickness perpendicular to the endometrial midline at the thickest point',
        'Describe morphology · uniform or heterogeneous, echogenicity, midline and endometrial-myometrial junction',
        'Assess vascularity · colour Doppler pattern and any focal lesion',
        'Check for intracavitary fluid · note its appearance and any focal abnormality',
        'Decide on sampling · persistent bleeding, risk factors, focal lesions or inadequate visualisation require further evaluation',
      ],
      bullets: [
        'IETA Purpose: the International Endometrial Tumor Analysis group developed standardised terminology for describing the endometrium on ultrasound.',
        'Structured Report: endometrial thickness, midline, morphology and echogenicity, endometrial-myometrial junction, vascularity and Doppler pattern, intracavitary fluid, focal lesions and whether the endometrium is fully visualised.',
        'Correct Measurement: mid-sagittal plane, double-layer thickness, perpendicular to the endometrial midline at its thickest point.',
        'Non-Measurable: if the endometrium cannot be visualised in its entirety, report it as non-measurable rather than assigning an unreliable value.',
        'Karlsson Ratio: a historical ultrasound approach used in postmenopausal bleeding assessment that compares endometrial thickness with an anteroposterior uterine dimension.',
        'Karlsson Caveat: recognise it as a historical sonographic concept; do not confuse it with double-layer thickness or use it as a substitute for current diagnostic pathways or endometrial sampling.',
        'Postmenopausal Bleeding: transvaginal ultrasound can be an initial test in selected patients; a thin, clearly visualised endometrium lowers the probability of cancer.',
        'Persistent or Recurrent Bleeding: requires further evaluation even if one thickness measurement is reassuring.',
        'Risk Factors and Focal Findings: obesity, unopposed oestrogen, tamoxifen, Lynch syndrome, a focal lesion or inadequate visualisation all push toward sampling or hysteroscopy.',
        'Reporting Checklist: is the whole endometrium seen, what is the double-layer thickness, is it uniform or heterogeneous, is there a focal lesion or fluid, is the junction regular, what is the vascular pattern and is sampling indicated?',
        'Histology Remains Central: endometrial biopsy or hysteroscopy is indicated according to the clinical pathway, not avoided because one measurement is reassuring.',
      ],
      table: {
        head: ['Measurement Element', 'Correct Practice', 'Incorrect Practice'],
        rows: [
          [
            'Plane',
            'Mid-sagittal',
            'Oblique or off-axis',
          ],
          [
            'Thickness type',
            'Double-layer thickness',
            'Measuring only one layer',
          ],
          [
            'Orientation',
            'Perpendicular to the endometrial midline',
            'Angled across the cavity',
          ],
          [
            'Site',
            'Maximum thickness at the thickest point',
            'A convenient but non-maximal point',
          ],
          [
            'Units',
            'Report in millimetres',
            'Unstated or mixed units',
          ],
          [
            'Non-visualisation',
            'Report as non-measurable',
            'Assume non-visualisation equals a thin endometrium',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: endometrial thickness is a double-layer sagittal measurement perpendicular to the midline at the thickest point.',
        'A non-visualised endometrium is non-measurable, not thin.',
        'The Karlsson ratio is historical and does not replace endometrial sampling when indicated.',
      ],
      trap: {
        title: 'Examiner trap - recording a thin endometrium when it was never fully seen',
        body: 'If the endometrium cannot be visualised in its entirety, the correct report is non-measurable. Assigning a thickness in that situation is unreliable and may falsely reassure.',
      },
      traps: [
        {
          title: '• Measuring a single endometrial layer and calling it double-layer thickness.',
        },
        {
          title: '• Using the Karlsson ratio as a substitute for histology.',
        },
        {
          title: '• Reassuring a patient with persistent postmenopausal bleeding because one scan looked thin.',
        },
      ],
    },
    {
      id: 'adnexal-iota-adnex',
      heading: 'Adnexal Masses: IOTA Simple Rules & the ADNEX Model',
      intro:
        'IOTA Simple Rules classify an adnexal mass as benign, malignant or inconclusive using five benign and five malignant ultrasound features. The ADNEX model goes further and estimates probabilities across five tumour categories. Neither replaces histopathology.',
      flow: [
        'Perform a structured expert ultrasound · describe the mass using standardised IOTA terms',
        'Apply the Simple Rules · count B features and M features',
        'Classify · B only means benign, M only means malignant, both or neither means inconclusive',
        'Do not force a category · an inconclusive mass needs expert ultrasound, ADNEX or MRI',
        'Estimate risk when useful · ADNEX uses age, centre type, lesion and solid-component size, papillary count, locules, shadows, ascites and optional CA-125',
        'Refer appropriately · malignant or high-risk masses go to gynaecological oncology; benign features follow the benign pathway',
      ],
      bullets: [
        'IOTA Purpose: the International Ovarian Tumor Analysis Simple Rules use ultrasound morphology to classify an adnexal mass as benign, malignant or inconclusive.',
        'Benign Feature B1: unilocular cyst.',
        'Benign Feature B2: solid component with largest diameter less than 7 mm.',
        'Benign Feature B3: acoustic shadows.',
        'Benign Feature B4: smooth multilocular tumour with largest diameter less than 100 mm.',
        'Benign Feature B5: no blood flow, colour score 1.',
        'Malignant Feature M1: irregular solid tumour.',
        'Malignant Feature M2: ascites.',
        'Malignant Feature M3: at least four papillary structures.',
        'Malignant Feature M4: irregular multilocular-solid tumour with largest diameter at least 100 mm.',
        'Malignant Feature M5: very strong blood flow, colour score 4.',
        'Interpretation: one or more B features and no M features means benign; one or more M features and no B features means malignant; both B and M features, or neither, means inconclusive.',
        'Inconclusive Mass: should not be forced into a benign category; expert ultrasound, ADNEX risk calculation or specialist assessment is appropriate.',
        'ADNEX Definition: Assessment of Different NEoplasias in the adneXa, a multivariable model estimating the probability of benign tumour, borderline tumour, stage I invasive cancer, stage II-IV invasive cancer and secondary metastatic tumour.',
        'ADNEX Variables: age, type of centre, maximum lesion diameter, maximum diameter of the largest solid component, number of papillary projections, more than 10 locules, acoustic shadows, ascites and optional CA-125.',
        'ADNEX CA-125: the model may be calculated with or without CA-125 depending on the available version and clinical setting.',
        'ADNEX Output: probabilities, not a histological diagnosis; a 10 percent risk threshold is often used in referral discussions, but local guidance must be followed.',
        'IOTA versus ADNEX: Simple Rules are rule-based, rapid and three-category; ADNEX is a multivariable model giving five-category probabilities and more detailed risk stratification.',
      ],
      table: {
        head: ['Feature', 'IOTA Simple Rules', 'ADNEX Model'],
        rows: [
          [
            'Method',
            'Rule-based morphology',
            'Multivariable risk model',
          ],
          [
            'Output',
            'Benign, malignant or inconclusive',
            'Probabilities across five tumour categories',
          ],
          [
            'Inputs',
            'Five B and five M ultrasound features',
            'Age, centre type, ultrasound features, optional CA-125',
          ],
          [
            'Strength',
            'Simple and rapid',
            'More detailed risk stratification',
          ],
          [
            'Limitation',
            'Some masses are inconclusive',
            'Requires correct inputs and calculation',
          ],
          [
            'Role',
            'Initial ultrasound classification',
            'Risk estimation and referral support',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: IOTA Simple Rules classify morphology; ADNEX estimates probabilities across five tumour categories.',
        'B features only means benign, M features only means malignant, and both or neither means inconclusive.',
        'CA-125 is an optional ADNEX variable, not a required input in every version.',
      ],
      trap: {
        title: 'Examiner trap - calling an inconclusive IOTA result benign',
        body: 'When both benign and malignant features are present, or neither is present, the Simple Rules result is inconclusive. It requires expert ultrasound, ADNEX or MRI rather than being forced into a benign category.',
      },
      traps: [
        {
          title: '• Forgetting that a solid component under 7 mm is a benign feature.',
        },
        {
          title: '• Counting four papillary structures as a benign finding.',
        },
        {
          title: '• Treating ADNEX output as a histological diagnosis.',
        },
        {
          title: '• Assuming CA-125 is mandatory for every ADNEX calculation.',
        },
      ],
    },
    {
      id: 'wb-dwi',
      heading: 'Whole-Body Diffusion-Weighted MRI: Principle & Limits',
      intro:
        'Diffusion-weighted imaging is sensitive to the microscopic movement of water molecules. Highly cellular tissue may restrict diffusion and appear bright on high-b-value DWI with a low apparent diffusion coefficient, allowing whole-body survey without ionising radiation in selected patients.',
      flow: [
        'Define the question · nodal or distant disease mapping, baseline burden, response or equivocal conventional imaging',
        'Acquire conventional sequences with DWI · interpretation requires correlation with anatomical MRI',
        'Survey the whole body · map suspicious nodal, peritoneal, skeletal or distant disease',
        'Correlate with ADC and morphology · restricted diffusion alone is not malignancy',
        'Confirm tissue where required · DWI does not replace biopsy or standard staging pathways',
        'Use selectively · availability, expertise and protocol determine the local role',
      ],
      bullets: [
        'DWI Principle: diffusion-weighted imaging is sensitive to microscopic water movement; highly cellular tissues may restrict diffusion and show high signal on high-b-value DWI with low ADC.',
        'Interpretation: DWI findings require correlation with conventional MRI sequences rather than being read in isolation.',
        'WB-DWI Advantage: can survey multiple body regions without ionising radiation.',
        'Potential Applications: mapping nodal and distant disease, evaluating peritoneal or skeletal disease, baseline assessment, response assessment after systemic therapy, selected recurrence work-up and problem-solving when conventional imaging is equivocal.',
        'Limitation - Small Lesions: small lesions may be missed.',
        'Limitation - False Positives: inflammation and benign cellular lesions can mimic malignancy.',
        'Limitation - Artefact: motion and susceptibility artefacts affect image quality.',
        'Limitation - ADC Overlap: ADC values overlap between benign and malignant conditions.',
        'Limitation - Access: availability and expertise vary.',
        'Limitation - Histology: it does not replace tissue confirmation when required.',
        'Not Universal: WB-DWI is a selected functional technique, not a universal replacement for standard staging or first-line imaging.',
      ],
      table: {
        head: ['Modality', 'Main Strength', 'Main Limitation'],
        rows: [
          [
            'Ultrasound',
            'Real-time, accessible pelvic detail',
            'Operator dependence',
          ],
          [
            'CT',
            'Rapid systemic staging',
            'Ionising radiation; soft-tissue contrast',
          ],
          [
            'MRI',
            'Excellent pelvic soft-tissue detail',
            'Longer scan; availability',
          ],
          [
            'DWI / WB-DWI',
            'Cellular information and whole-body survey',
            'False positives; protocol dependence',
          ],
          [
            'PET-CT',
            'Metabolic disease assessment',
            'Radiation; inflammatory uptake',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: WB-DWI adds cellular and whole-body information but has false positives and does not replace histology.',
        'Restricted diffusion is not synonymous with malignancy because inflammation and benign cellular lesions can mimic cancer.',
        'DWI is interpreted alongside conventional MRI sequences, not in isolation.',
      ],
      trap: {
        title: 'Examiner trap - treating restricted diffusion as a diagnosis of malignancy',
        body: 'ADC values overlap between benign and malignant conditions, inflammation can restrict diffusion and small lesions may be missed. WB-DWI is a problem-solving and mapping tool, not a histological diagnosis.',
      },
      traps: [
        {
          title: '• Using WB-DWI as a universal first-line staging test.',
        },
        {
          title: '• Diagnosing malignancy from a low ADC value alone.',
        },
        {
          title: '• Skipping biopsy because DWI looked suspicious.',
        },
      ],
    },
    {
      id: 'sln-mapping',
      heading: 'Sentinel Lymph Node Mapping, ICG & Ultrastaging',
      intro:
        'A sentinel lymph node is the first node or group of nodes receiving lymphatic drainage from a primary tumour. Mapping identifies those nodes for targeted removal and ultrastaging, potentially avoiding systematic lymphadenectomy in appropriately selected patients under validated cancer-specific protocols.',
      flow: [
        'Select the patient · apparent uterine-confined endometrial cancer or selected early cervical cancer under the relevant algorithm',
        'Inject tracer by protocol · cervical ICG at multiple sites or quadrants, with superficial and deep components as specified',
        'Follow lymphatic channels · identify fluorescent sentinel nodes using near-infrared imaging',
        'Remove all mapped nodes and any suspicious or enlarged node · regardless of mapping',
        'Assess each pelvic side separately · if mapping fails on one side, perform side-specific lymphadenectomy under the disease-specific algorithm',
        'Send for ultrastaging · serial sections and immunohistochemistry when appropriate',
        'Classify and integrate · macrometastasis, micrometastasis or isolated tumour cells, integrated with histology, grade, LVSI, stage and molecular class',
      ],
      bullets: [
        'SLN Concept: the first node or group of nodes receiving lymphatic drainage from a primary tumour.',
        'Mapping Aim: identify the first draining nodes for removal and examination, potentially avoiding systematic lymphadenectomy in selected patients under validated protocols.',
        'ICG: indocyanine green is a fluorescent dye visualised with near-infrared imaging and is widely used for SLN mapping in endometrial and cervical cancer.',
        'Cervical Injection: commonly injected into the cervix at multiple sites or quadrants, with superficial and deep components according to protocol.',
        'Handwritten Note: the notes specifically mention four-point injection and high-definition or near-infrared visualisation.',
        'Bilateral Mapping: the goal, because a mapped unilateral node does not complete bilateral nodal assessment.',
        'Suspicious Nodes: remove any grossly suspicious or enlarged node regardless of mapping.',
        'Side-Specific Assessment: assess each pelvic side separately and perform side-specific management when mapping fails.',
        'Failed Mapping: perform side-specific lymphadenectomy according to the disease-specific algorithm.',
        'Ultrastaging: enhanced pathological assessment using additional serial sections and immunohistochemistry when appropriate.',
        'Ultrastaging Purpose: detect low-volume nodal metastases, identify micrometastases and isolated tumour cells and improve nodal staging accuracy.',
        'Macrometastasis: deposit greater than 2 mm.',
        'Micrometastasis: deposit greater than 0.2 mm and up to 2 mm.',
        'Isolated Tumour Cells: single cells or small clusters up to 0.2 mm, or a very low cell count according to pathology criteria.',
        'ITC Caveat: clinical significance differs by tumour type and stage, and ITCs should not automatically be equated with macrometastatic nodal disease.',
        'Endometrial Cancer: SLN mapping can be used in selected patients with apparent uterine-confined disease; findings are integrated with histology, grade, LVSI, stage and molecular class.',
        'Cervical Cancer: SLN mapping may be used in selected early cervical cancer patients; bilateral mapping, removal of suspicious nodes, side-specific lymphadenectomy on failed mapping and ultrastaging are key.',
        'SLN versus Systematic Lymphadenectomy: SLN mapping is targeted, less extensive in suitable cases and detects low-volume disease through ultrastaging, but depends on a mapping algorithm and has false negatives.',
        'SLN Complications: mapping failure, false-negative mapping, lymphocele and lymphoedema, vascular, nerve or ureteric injury, rare dye reaction and learning-curve or equipment dependence.',
        'Documentation: record mapping success, laterality, node location and any suspicious nodes.',
      ],
      table: {
        head: ['Step', 'SLN Mapping Checklist'],
        rows: [
          [
            '1',
            'Correct tracer and injection protocol',
          ],
          [
            '2',
            'Bilateral mapping attempted',
          ],
          [
            '3',
            'All mapped nodes removed',
          ],
          [
            '4',
            'All suspicious nodes removed regardless of mapping',
          ],
          [
            '5',
            'Side-specific failed-mapping algorithm followed',
          ],
          [
            '6',
            'Ultrastaging requested',
          ],
          [
            '7',
            'ITCs, micrometastases and macrometastases distinguished',
          ],
          [
            '8',
            'Mapping laterality and node sites documented',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: a mapped unilateral SLN does not complete bilateral nodal assessment - follow the side-specific algorithm.',
        'Remove every suspicious or enlarged node even if it did not map.',
        'Macrometastasis is over 2 mm, micrometastasis is over 0.2 to 2 mm and ITCs are up to 0.2 mm.',
      ],
      trap: {
        title: 'Examiner trap - accepting unilateral mapping as complete nodal assessment',
        body: 'Bilateral detection is the goal. If no sentinel node is found on one side, the relevant disease-specific algorithm generally requires side-specific lymphadenectomy. A unilateral mapped node does not cover the contralateral pelvis.',
      },
      traps: [
        {
          title: '• Ignoring a suspicious node because it was not the mapped sentinel node.',
        },
        {
          title: '• Equating isolated tumour cells with macrometastatic nodal disease.',
        },
        {
          title: '• Omitting ultrastaging after SLN removal.',
        },
        {
          title: '• Documenting only the total number of nodes without laterality or site.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'PIFU is supported self-management with a named route back to specialist care.',
        'PIFU is not suitable for every cancer type or every stage.',
        'Vulvar cancer is marked as unsuitable for PIFU in the notes.',
        'Patient education about recurrence symptoms is mandatory for safe PIFU.',
        'An isolated CA-125 rise alone does not justify immediate chemotherapy.',
        'MRC OV05/EORTC 55955 found no survival benefit from treating CA-125 rise before clinical relapse.',
        'miR-21 is a classic oncomiR.',
        'miR-34a is linked to p53-associated tumour-suppressive effects.',
        'miR-29 family members regulate extracellular matrix and epigenetic pathways.',
        'miRNA assays are not established stand-alone screening tests.',
        'MRI is valuable for local pelvic soft-tissue staging.',
        'A negative sliding sign suggests fixation or adhesions, not histological invasion.',
        'IETA standardises endometrial ultrasound reporting.',
        'Endometrial thickness is a double-layer sagittal measurement.',
        'A non-visualised endometrium is non-measurable, not thin.',
        'IOTA Simple Rules use five benign and five malignant features.',
        'B features only means benign; M features only means malignant.',
        'Both B and M features, or neither, make the IOTA result inconclusive.',
        'ADNEX estimates five categories of adnexal tumour probability.',
        'CA-125 is an optional ADNEX variable, not a required input in every version.',
        'WB-DWI provides diffusion information but has false-positive and protocol limitations.',
        'SLN mapping aims for bilateral detection where the algorithm requires it.',
        'Suspicious nodes should be removed even if they are not mapped.',
        'Failed unilateral mapping requires side-specific management.',
        'Ultrastaging detects low-volume nodal disease, and ITCs are not macrometastases.',
      ],
      traps: [
        {
          title: '• Reading PIFU as discharge without a safety net.',
        },
        {
          title: '• Assuming all early-stage ovarian cancers are suitable for PIFU.',
        },
        {
          title: '• Calling miR-21 a tumour suppressor.',
        },
        {
          title: '• Describing miR-34a or miR-29 as established screening tests.',
        },
        {
          title: '• Reporting a non-visualised endometrium as thin.',
        },
        {
          title: '• Forcing an inconclusive IOTA result into a benign category.',
        },
        {
          title: '• Using WB-DWI as a universal first-line staging test.',
        },
        {
          title: '• Accepting unilateral SLN mapping as bilateral assessment.',
        },
        {
          title: '• Equating isolated tumour cells with macrometastatic disease.',
        },
        {
          title: '• Treating a rising CA-125 alone as an automatic chemotherapy trigger.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm12-f1',
      front: 'What is patient-initiated follow-up and what makes it safe?',
      back: 'A pathway where selected, clinically well patients contact a named specialist team when symptoms arise instead of attending automatic reviews. Safety requires education, a named contact, written warning symptoms and rapid re-entry.',
    },
    {
      id: 'm12-f2',
      front: 'Which gynaecological cancer is specifically marked as unsuitable for PIFU in the notes?',
      back: 'Vulvar cancer. Higher-risk disease and patients needing active toxicity management also require scheduled specialist review rather than PIFU.',
    },
    {
      id: 'm12-f3',
      front: 'What did MRC OV05/EORTC 55955 show about treating a rising CA-125?',
      back: 'Starting chemotherapy solely because CA-125 had risen before clinical or radiological relapse produced no overall-survival benefit in asymptomatic ovarian cancer survivors.',
    },
    {
      id: 'm12-f4',
      front: 'What is the role of miR-21 in cancer biology?',
      back: 'It is a classic oncomiR. Increased expression is associated with reduced tumour-suppressor signalling, increased proliferation and survival, reduced apoptosis, invasion and treatment resistance in selected cohorts.',
    },
    {
      id: 'm12-f5',
      front: 'What is the role of miR-34a?',
      back: 'A tumour-suppressor miRNA linked to p53-regulated responses, including cell-cycle arrest, apoptosis, inhibition of proliferation and modulation of invasion and epithelial-mesenchymal transition.',
    },
    {
      id: 'm12-f6',
      front: 'What pathways does the miR-29 family regulate?',
      back: 'Extracellular matrix and collagen pathways, DNA methylation machinery and epigenetic regulation, proliferation, invasion, metastasis, apoptosis and tumour-microenvironment signalling.',
    },
    {
      id: 'm12-f7',
      front: 'Which imaging modality is best for local pelvic soft-tissue staging and why?',
      back: 'MRI, because of its high soft-tissue contrast. It assesses tumour size and stromal extent, parametrial invasion, vaginal extension and adjacent-organ or pelvic sidewall involvement.',
    },
    {
      id: 'm12-f8',
      front: 'What does a negative ultrasound sliding sign indicate?',
      back: 'Adjacent structures do not glide freely, suggesting fixation, adhesions and possible pouch-of-Douglas obliteration. It is an adjunct, not histological proof of invasion.',
    },
    {
      id: 'm12-f9',
      front: 'How is endometrial thickness correctly measured?',
      back: 'In the mid-sagittal plane as a double-layer measurement, perpendicular to the endometrial midline at its thickest point, and reported in millimetres. If not fully visualised, report as non-measurable.',
    },
    {
      id: 'm12-f10',
      front: 'What is the Karlsson ratio?',
      back: 'A historical ultrasound measurement concept used in postmenopausal bleeding assessment, comparing endometrial thickness with an anteroposterior uterine dimension. It does not replace double-layer thickness or histology.',
    },
    {
      id: 'm12-f11',
      front: 'List the five IOTA benign features.',
      back: 'B1 unilocular cyst; B2 solid component under 7 mm; B3 acoustic shadows; B4 smooth multilocular tumour under 100 mm; B5 no blood flow, colour score 1.',
    },
    {
      id: 'm12-f12',
      front: 'List the five IOTA malignant features.',
      back: 'M1 irregular solid tumour; M2 ascites; M3 at least four papillary structures; M4 irregular multilocular-solid tumour at least 100 mm; M5 very strong blood flow, colour score 4.',
    },
    {
      id: 'm12-f13',
      front: 'What five probabilities does the ADNEX model estimate?',
      back: 'Benign tumour, borderline tumour, stage I invasive ovarian cancer, stage II-IV invasive ovarian cancer and secondary metastatic tumour.',
    },
    {
      id: 'm12-f14',
      front: 'What are the SLN deposit size definitions?',
      back: 'Macrometastasis over 2 mm; micrometastasis over 0.2 mm and up to 2 mm; isolated tumour cells up to 0.2 mm or a very low cell count according to pathology criteria.',
    },
    {
      id: 'm12-f15',
      front: 'What must be done if SLN mapping fails on one pelvic side?',
      back: 'Perform side-specific management according to the disease-specific algorithm, which generally means side-specific lymphadenectomy. A unilateral mapped node does not complete bilateral nodal assessment.',
    },
  ],

  mcqs: [
    {
      id: 'm12-q1',
      stem: 'A 55-year-old woman has completed treatment for stage IA low-grade endometrial cancer. She is clinically well, has no toxicity and understands recurrence warning symptoms. She asks about patient-initiated follow-up. Which statement is correct?',
      options: [
        'PIFU means she will be discharged with no further access to the oncology team',
        'PIFU may be considered if she has a named contact, written symptom guidance and rapid re-entry to specialist care',
        'PIFU is mandatory for all gynaecological cancer survivors',
        'PIFU is unsuitable for every patient with endometrial cancer',
      ],
      answerIndex: 1,
      explanation:
        'PIFU is a supported pathway for selected, clinically well patients after treatment. It requires education, a named contact, written warning symptoms and rapid re-entry. It is not discharge without a safety net and is not mandatory or universally unsuitable.',
    },
    {
      id: 'm12-q2',
      stem: 'A patient with ovarian cancer in remission has a rising CA-125 but no symptoms and no radiological recurrence. What does the evidence from MRC OV05/EORTC 55955 support?',
      options: [
        'Starting chemotherapy solely for a rising CA-125 does not improve overall survival',
        'Immediate chemotherapy improves overall survival',
        'CA-125 should never be measured during follow-up',
        'A rising CA-125 confirms recurrence and mandates surgery',
      ],
      answerIndex: 0,
      explanation:
        'The trial found no overall-survival benefit from starting chemotherapy solely because CA-125 rose before clinical relapse. CA-125 may still be used in context if it was informative at baseline and the patient wishes it.',
    },
    {
      id: 'm12-q3',
      stem: 'A study reports increased expression of a microRNA associated with reduced apoptosis and increased invasion in cervical cancer. Which microRNA is most consistent with this oncomiR profile?',
      options: [
        'miR-34a',
        'miR-29b',
        'miR-21',
        'miR-29c',
      ],
      answerIndex: 2,
      explanation:
        'miR-21 is the classic oncomiR, associated with reduced tumour-suppressor signalling, increased proliferation and survival, reduced apoptosis and invasive behaviour. miR-34a and miR-29 are generally tumour-suppressive.',
    },
    {
      id: 'm12-q4',
      stem: 'A 62-year-old woman has postmenopausal bleeding. TVUS does not fully visualise the endometrium because of a large fibroid. How should the endometrium be reported?',
      options: [
        'As thin because no thickening is seen',
        'As normal because the fibroid explains the bleeding',
        'As 4 mm based on the visible portion',
        'As non-measurable, with further evaluation arranged',
      ],
      answerIndex: 3,
      explanation:
        'If the endometrium cannot be visualised in its entirety, it is non-measurable. Assigning a thickness from a partial view is unreliable, and persistent postmenopausal bleeding requires further evaluation.',
    },
    {
      id: 'm12-q5',
      stem: 'An adnexal mass shows a unilocular cyst with acoustic shadows and no blood flow. There are no malignant features. How should the IOTA Simple Rules result be classified?',
      options: [
        'Malignant because acoustic shadows are suspicious',
        'Inconclusive because more information is needed',
        'Benign, because B features are present and no M features are present',
        'Indeterminate until CA-125 is known',
      ],
      answerIndex: 2,
      explanation:
        'A unilocular cyst and acoustic shadows are benign features, and no blood flow is also benign. With one or more B features and no M features, the Simple Rules classify the mass as benign.',
    },
    {
      id: 'm12-q6',
      stem: 'A mass has both a smooth multilocular appearance under 100 mm and at least four papillary structures. What is the correct IOTA interpretation?',
      options: [
        'Inconclusive, requiring expert ultrasound, ADNEX or MRI',
        'Benign because a B feature is present',
        'Malignant because an M feature overrides all B features',
        'Automatically a borderline tumour',
      ],
      answerIndex: 0,
      explanation:
        'When both benign and malignant features are present, the Simple Rules result is inconclusive. It should not be forced into a benign or malignant category and requires expert assessment, ADNEX or MRI.',
    },
    {
      id: 'm12-q7',
      stem: 'Which statement about the ADNEX model is correct?',
      options: [
        'It gives a single benign-versus-malignant result',
        'It estimates probabilities across five tumour categories and may be calculated with or without CA-125',
        'It replaces histopathology for adnexal masses',
        'CA-125 is mandatory in every version',
      ],
      answerIndex: 1,
      explanation:
        'ADNEX estimates probabilities for benign, borderline, stage I invasive, stage II-IV invasive and secondary metastatic tumours. CA-125 is optional depending on the version, and the output is not a histological diagnosis.',
    },
    {
      id: 'm12-q8',
      stem: 'During sentinel lymph-node mapping for early cervical cancer, a strong fluorescent node is found on the right but no sentinel node is identified on the left. What is the most appropriate action?',
      options: [
        'Consider nodal assessment complete because one sentinel node was found',
        'Abandon surgery and refer for chemoradiotherapy in all cases',
        'Inject more dye and accept the result even if the left side remains unmapped',
        'Perform side-specific lymphadenectomy on the left according to the disease-specific algorithm',
      ],
      answerIndex: 3,
      explanation:
        'Bilateral detection is the goal. If mapping fails on one side, the relevant algorithm generally requires side-specific lymphadenectomy. A unilateral mapped node does not complete bilateral nodal assessment.',
    },
    {
      id: 'm12-q9',
      stem: 'A sentinel node contains a 1.2 mm deposit. How is this classified?',
      options: [
        'Isolated tumour cells',
        'Micrometastasis',
        'Macrometastasis',
        'Not a metastasis because it is under 2 mm',
      ],
      answerIndex: 1,
      explanation:
        'A deposit greater than 0.2 mm and up to 2 mm is a micrometastasis. Macrometastasis is over 2 mm and isolated tumour cells are up to 0.2 mm.',
    },
    {
      id: 'm12-q10',
      stem: 'A clinician proposes whole-body diffusion-weighted MRI as the first-line staging test for every new gynaecological cancer. Which response is most accurate?',
      options: [
        'It is the preferred first-line test because it avoids radiation',
        'It replaces histology when ADC is low',
        'It is a selected functional technique with false positives and protocol limitations, not a universal first-line replacement',
        'It is useful only for bone metastases',
      ],
      answerIndex: 2,
      explanation:
        'WB-DWI can map disease and provide cellular information without ionising radiation, but small lesions may be missed, inflammation can mimic cancer, ADC values overlap and availability varies. It does not replace standard staging or histology.',
    },
  ],
};
