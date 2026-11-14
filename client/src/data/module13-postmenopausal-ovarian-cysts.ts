import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 13 - Ovarian Cysts in Postmenopausal Women (RCOG GTG 34)
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 39-44) with RCOG
 * Green-top Guideline No. 34 as amended in December 2025 and the Renz et al.
 * 2025 ovarian-cancer review.
 *
 * Covers:
 * - The December 2025 RCOG amendment for simple cysts 3 cm or less
 * - Simple versus complex postmenopausal cyst morphology
 * - Initial assessment with TVUS, CA-125 and the Goff symptom index
 * - RMI I calculation, thresholds, performance and limitations
 * - Size-based and risk-based management, aspiration and surgical planning
 * - BRCA1/2, Lynch syndrome and cancer-genetics referral
 * - CA-125, HE4, CEA, CA19-9 and gastrointestinal mimics
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const POSTMENOPAUSAL_OVARIAN_CYSTS_MODULE: StudioModule = {
  id: 'pg-mod-13-postmenopausal-ovarian-cysts',
  track: 'NEET_PG',
  title: 'Ovarian Cysts in Postmenopausal Women: RCOG GTG 34',
  shortTitle: 'Postmenopausal Ovarian Cysts',
  summary:
    'Complete PG clinical revision module on postmenopausal ovarian cysts following RCOG Green-top Guideline No. 34 as amended in December 2025. Features the no-follow-up rule for simple cysts 3 cm or less, simple versus complex morphology, TVUS and CA-125 assessment, RMI I calculation with the 200 threshold, size-based and risk-based management, BRCA1/2 and Lynch syndrome referral, tumour-marker interpretation, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'RCOG GTG 34, the 2025 no-follow-up rule and RMI I at 200.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'RCOG GTG 34',
    'December 2025 Amendment',
    'Simple Cyst ≤3 cm',
    'Simple vs Complex Cyst',
    'TVUS First-Line',
    'CA-125 Interpretation',
    'RMI I Formula',
    'RMI Threshold 200',
    'Aspiration Not Routine',
    'BRCA1/2 & Lynch',
    'HE4 CEA CA19-9',
    'GI Primary Mimic',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 39-44) • RCOG Green-top Guideline No. 34, amended December 2025 • Renz et al. 2025 ovarian review',
  updatedAtISO: '2026-11-14T10:00:00.000Z',
  notes: [
    {
      id: 'rcog-gtg34-framework',
      heading: 'RCOG GTG 34 & the December 2025 Amendment',
      intro:
        'RCOG Green-top Guideline No. 34 governs the assessment of ovarian cysts in postmenopausal women. Its December 2025 amendment changed routine practice for the smallest simple cysts: an asymptomatic, unilateral, unilocular simple cyst measuring 3 cm or less no longer requires routine follow-up.',
      flow: [
        'Confirm postmenopausal status · amenorrhoea, age and clinical context',
        'Characterise the cyst · unilateral or bilateral, unilocular or multilocular, simple or complex',
        'Record symptoms · pelvic pain, distension, early satiety, bowel or bladder change, bleeding',
        'Measure serum CA-125 · the only routine marker recommended for primary RMI assessment',
        'Apply the size-based pathway for simple cysts · 3 cm or less, then over 3 to 5 cm',
        'Calculate RMI I when morphology or CA-125 raises concern · refer if 200 or more',
        'Individualise · symptoms, morphology, patient preference, surgical fitness and local pathway always override a single number',
      ],
      bullets: [
        'Scope: the guideline addresses ovarian cysts in postmenopausal women, including incidental simple cysts and complex or suspicious adnexal masses.',
        'December 2025 Change: asymptomatic, unilateral, unilocular simple ovarian cysts measuring 3 cm or less in postmenopausal women do not require routine follow-up.',
        'Why It Matters: older teaching that every simple cyst needs repeat ultrasound is now outdated; do not apply it to the 3 cm or less asymptomatic simple cyst.',
        'Simple Cyst Over 3 to 5 cm: if asymptomatic, unilateral, unilocular and CA-125 is normal, conservative management may be considered with repeat CA-125 and TVUS in 4 to 6 months.',
        'Discharge After One Year: if the cyst is unchanged or smaller and CA-125 remains normal, discharge from routine follow-up after one year may be considered, taking patient preference and surgical fitness into account.',
        'Symptoms Override Size: a symptomatic cyst requires evaluation regardless of the size-based pathway.',
        'Complex Morphology Overrides Size: multilocular, solid, papillary, bilateral, ascitic or metastatic features require specialist assessment.',
        'Initial Investigations: history, examination, transvaginal ultrasound and serum CA-125.',
        'CA-125 Caveat: a normal CA-125 does not exclude ovarian cancer, and a raised CA-125 does not confirm it.',
        'RMI I: the most widely used and validated triage tool in the guideline, combining ultrasound score, menopausal score and CA-125.',
        'RMI Threshold: RCOG recommends 200; some centres use 250, which trades lower sensitivity for higher specificity.',
        'RMI 200 or More: arrange CT abdomen and pelvis and refer to a gynaecological oncology multidisciplinary team.',
        'Avoid Unplanned Surgery: do not operate on a potentially malignant mass outside an appropriate specialist pathway.',
        'Local Pathway: always check the current local guideline, referral criteria and imaging availability.',
      ],
      table: {
        head: ['Cyst Scenario', 'December 2025 RCOG Position'],
        rows: [
          [
            'Asymptomatic, unilateral, unilocular simple cyst 3 cm or less',
            'No routine follow-up required',
          ],
          [
            'Asymptomatic simple cyst over 3 cm and up to 5 cm with normal CA-125',
            'Consider conservative management; repeat CA-125 and TVUS in 4 to 6 months',
          ],
          [
            'Stable or smaller cyst with normal CA-125 at one year',
            'Discharge from routine follow-up may be considered',
          ],
          [
            'Symptomatic cyst of any size',
            'Further evaluation and surgical assessment as indicated',
          ],
          [
            'Complex or suspicious mass',
            'Specialist assessment; calculate RMI I and image or refer as indicated',
          ],
          [
            'RMI I 200 or more',
            'CT abdomen and pelvis plus gynaecological oncology MDT referral',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: an asymptomatic unilateral unilocular simple cyst 3 cm or less needs no routine follow-up under the December 2025 RCOG amendment.',
        'A simple cyst over 3 and up to 5 cm with normal CA-125 may be reassessed in 4 to 6 months and discharged after one year if stable.',
        'RCOG recommends the RMI I threshold of 200, although some centres use 250.',
      ],
      trap: {
        title: 'Examiner trap - applying the old rule that every simple cyst needs annual follow-up',
        body: 'The December 2025 amendment explicitly states that an asymptomatic, unilateral, unilocular simple cyst measuring 3 cm or less does not require routine follow-up. Older teaching of indefinite annual scanning is outdated for this specific scenario.',
      },
      traps: [
        {
          title: '• Following up a 2.5 cm asymptomatic simple cyst indefinitely.',
        },
        {
          title: '• Applying the no-follow-up rule to a symptomatic or complex cyst.',
        },
        {
          title: '• Using the 250 threshold when the question asks for the RCOG recommendation.',
        },
      ],
    },
    {
      id: 'simple-vs-complex',
      heading: 'Simple vs Complex Postmenopausal Ovarian Cysts',
      intro:
        'Morphology drives risk more than size alone. A simple cyst is unilocular, thin-walled, anechoic and free of solid components, papillary projections and suspicious ascites. Any departure from that description moves the lesion into a complex category that needs specialist interpretation.',
      flow: [
        'Assess laterality · unilateral versus bilateral',
        'Assess locularity · unilocular versus multilocular',
        'Assess the wall · thin and smooth versus thick, irregular or nodular',
        'Assess contents · anechoic versus echogenic, ground-glass or solid',
        'Look for papillary projections and solid areas · measure the largest solid component',
        'Look beyond the ovary · ascites, peritoneal nodules and metastatic deposits',
        'Classify · simple if all benign criteria are met; complex or suspicious if any concerning feature is present',
      ],
      bullets: [
        'Simple Cyst Definition: unilateral, unilocular, thin smooth wall, anechoic contents, no solid component or papillary projection and no suspicious ascites or metastases.',
        'Complex Cyst Definition: multilocular or irregular architecture, solid areas, papillary projections, bilateral lesions, ascites, peritoneal deposits or interval growth and changing morphology.',
        'Size Is Not the Whole Story: a small complex lesion with solid or papillary components is more concerning than a larger simple cyst.',
        'Papillary Projections: any papillary projection is a concerning feature that requires expert ultrasound assessment and usually surgical evaluation.',
        'Solid Component: a solid component under 7 mm can be a benign IOTA feature, but the overall pattern and vascularity still matter.',
        'Ascites: suspicious ascites in a postmenopausal woman with an adnexal mass raises concern for malignancy and peritoneal disease.',
        'Bilateral Lesions: increase concern and may suggest metastatic or systemic disease, although benign causes exist.',
        'Interval Change: increasing size or changing morphology during observation warrants reassessment rather than continued reassurance.',
        'Symptom Correlation: pelvic pain, distension, early satiety and bowel or bladder symptoms raise concern even with apparently simple morphology.',
        'Imaging Limits: ultrasound cannot provide histology, and a simple appearance does not exclude every histological subtype.',
        'Postmenopausal Context: a new or persistent adnexal mass in a postmenopausal woman deserves careful assessment rather than assuming a functional cyst.',
      ],
      table: {
        head: ['Feature', 'Simple Cyst', 'Complex or Suspicious Cyst'],
        rows: [
          [
            'Laterality',
            'Unilateral',
            'Bilateral raises concern',
          ],
          [
            'Locularity',
            'Unilocular',
            'Multilocular or irregular',
          ],
          [
            'Wall',
            'Thin and smooth',
            'Thick, irregular or nodular',
          ],
          [
            'Contents',
            'Anechoic',
            'Echogenic, ground-glass or solid',
          ],
          [
            'Solid or papillary component',
            'Absent',
            'Present',
          ],
          [
            'Ascites or deposits',
            'Absent',
            'Present',
          ],
          [
            'Interval behaviour',
            'Stable or smaller',
            'Increasing size or changing morphology',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: simple means unilateral, unilocular, thin smooth wall, anechoic, no solid or papillary component and no suspicious ascites.',
        'Any papillary projection or solid area makes the cyst complex and requires specialist assessment.',
        'A new adnexal mass in a postmenopausal woman is not a functional cyst until proven otherwise.',
      ],
      trap: {
        title: 'Examiner trap - calling a multilocular cyst simple because it is small',
        body: 'Simple refers to unilocular architecture with a thin smooth wall, anechoic contents and no solid or papillary component. A small multilocular or papillary lesion is complex and needs expert assessment regardless of size.',
      },
      traps: [
        {
          title: '• Calling a cyst with a papillary projection simple.',
        },
        {
          title: '• Ignoring suspicious ascites because the ovarian lesion looks small.',
        },
        {
          title: '• Assuming a postmenopausal cyst is functional.',
        },
      ],
    },
    {
      id: 'initial-investigation',
      heading: 'Initial Assessment: TVUS, CA-125 & the Goff Symptom Index',
      intro:
        'Initial evaluation combines history, examination, transvaginal ultrasound and serum CA-125. Symptoms matter: the Goff symptom index reminds clinicians that persistent abdominal or pelvic symptoms, urinary urgency or frequency, and early satiety can be the presenting feature of ovarian cancer.',
      flow: [
        'Take a focused history · symptoms, menstrual status, family history, personal cancer history and risk factors',
        'Perform examination · abdominal and pelvic examination including bimanual assessment',
        'Perform transvaginal ultrasound · describe morphology using standardised terms',
        'Measure serum CA-125 · interpret against menopausal status, symptoms and morphology',
        'Apply the Goff symptom index · persistent symptoms for more than 12 days per month within the last year',
        'Calculate RMI I if concern persists · combine ultrasound score, menopausal score and CA-125',
        'Decide · reassure and discharge, observe, or refer for specialist assessment',
      ],
      bullets: [
        'First-Line Imaging: transvaginal ultrasound is the single most effective first-line imaging test for postmenopausal ovarian cysts.',
        'TVUS Advantages: high-resolution pelvic detail, real-time assessment, no ionising radiation and availability.',
        'Transabdominal Ultrasound: may complement TVUS for large masses extending beyond the pelvis.',
        'CA-125: the only serum tumour marker recommended by RCOG for primary evaluation and RMI calculation.',
        'CA-125 Reference: approximately 35 U/mL is commonly used as the upper reference limit, but assays and local thresholds vary.',
        'CA-125 False Positives: tuberculosis, cholecystitis, cirrhosis, pancreatitis, pleuritis, endometriosis and other serosal inflammation can raise CA-125.',
        'CA-125 Non-Ovarian Malignancies: pancreatic, breast, colorectal, lung and endometrial cancers may also elevate CA-125.',
        'CA-125 False Negatives: early-stage disease and certain histological subtypes, including some mucinous tumours, may have normal CA-125.',
        'Goff Symptom Index: persistent abdominal or pelvic pain, urinary urgency or frequency, increased abdominal size or bloating, and early satiety or difficulty eating.',
        'Goff Timing: symptoms occurring more than 12 days per month within the last year are considered persistent and warrant evaluation.',
        'Symptom Caveat: the index is a prompt for assessment, not a diagnostic test, and the symptoms are common in benign conditions.',
        'MRI: second-line problem-solving imaging when ultrasound is inconclusive or anatomy is difficult.',
        'CT: used when malignancy is suspected for staging and assessment of intra-abdominal disease, not as a routine first test for every simple cyst.',
        'Risk Factors: increasing age, nulliparity, family history, BRCA or Lynch pathogenic variants, obesity, smoking and personal history of breast or endometrial cancer.',
      ],
      table: {
        head: ['Assessment Element', 'Purpose', 'Key Caveat'],
        rows: [
          [
            'History and examination',
            'Symptoms, risk factors and palpable mass',
            'Symptoms are non-specific and do not diagnose cancer',
          ],
          [
            'Transvaginal ultrasound',
            'First-line morphological assessment of the ovary and pelvis',
            'Operator dependent; cannot provide histology',
          ],
          [
            'Serum CA-125',
            'Supports RMI I calculation and risk triage',
            'Normal does not exclude cancer; raised does not confirm it',
          ],
          [
            'Goff symptom index',
            'Flags persistent symptoms for evaluation',
            'A prompt, not a diagnostic test',
          ],
          [
            'MRI',
            'Second-line problem-solving when ultrasound is inconclusive',
            'Not routine first-line for simple cysts',
          ],
          [
            'CT',
            'Staging and abdominal disease mapping when malignancy is suspected',
            'Not a first-line test for every cyst',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: initial evaluation is history, examination, TVUS and CA-125.',
        'CA-125 is the only routine serum marker RCOG recommends for primary evaluation.',
        'The Goff symptom index uses more than 12 days per month within the last year as the threshold for persistent symptoms.',
      ],
      trap: {
        title: 'Examiner trap - treating CA-125 as a diagnostic test',
        body: 'CA-125 is a triage marker, not a diagnosis. It can be normal in early-stage and some histological subtypes, and it can be raised by tuberculosis, cirrhosis, pancreatitis, pleuritis and other malignancies. Interpret it with morphology, symptoms and menopausal status.',
      },
      traps: [
        {
          title: '• Using CT as the first-line test for a simple postmenopausal cyst.',
        },
        {
          title: '• Excluding cancer because CA-125 is normal.',
        },
        {
          title: '• Diagnosing ovarian cancer from a raised CA-125 alone.',
        },
        {
          title: '• Ignoring persistent bloating and early satiety because the cyst looks simple.',
        },
      ],
    },
    {
      id: 'rmi-i',
      heading: 'RMI I: Calculation, Thresholds & Limitations',
      intro:
        'The Risk of Malignancy Index I multiplies three variables: an ultrasound score, a menopausal score and the serum CA-125 concentration. It is a triage tool, not a histological diagnosis, and it never overrides suspicious morphology or strong clinical concern.',
      flow: [
        'List the five RMI ultrasound features · multilocular cyst, solid areas, bilateral lesions, ascites and intra-abdominal or metastatic deposits',
        'Assign the ultrasound score · U equals 0 for no features, 1 for one feature and 3 for two or more features',
        'Assign the menopausal score · M equals 1 premenopausal and 3 postmenopausal',
        'Multiply · RMI I equals U times M times CA-125 in U/mL',
        'Compare with the threshold · RCOG recommends 200',
        'Act · below 200 follow the lower-risk pathway; 200 or more arrange CT abdomen and pelvis and refer to gynaecological oncology',
        'Reassess clinically · a low RMI does not overrule symptoms or suspicious morphology',
      ],
      bullets: [
        'Formula: RMI I equals U multiplied by M multiplied by serum CA-125 in U/mL.',
        'Ultrasound Feature 1: multilocular cyst.',
        'Ultrasound Feature 2: solid areas.',
        'Ultrasound Feature 3: bilateral lesions.',
        'Ultrasound Feature 4: ascites.',
        'Ultrasound Feature 5: evidence of intra-abdominal or metastatic deposits.',
        'Ultrasound Score: U equals 0 with no features, U equals 1 with one feature and U equals 3 with two or more features.',
        'Menopausal Score: M equals 1 premenopausal and M equals 3 postmenopausal.',
        'Worked Example 1: postmenopausal woman with CA-125 60 U/mL and one ultrasound feature gives RMI I equals 1 times 3 times 60 equals 180, below 200.',
        'Worked Example 2: postmenopausal woman with CA-125 80 U/mL and two ultrasound features gives RMI I equals 3 times 3 times 80 equals 720, above 200.',
        'Threshold: RCOG recommends 200; below 200 is a lower-risk pathway but not zero risk, and 200 or more requires CT and gynaecological oncology MDT referral.',
        'Alternative Threshold: some centres use 250, which lowers sensitivity and raises specificity.',
        'Performance: at a threshold of 200, RCOG reports sensitivity around 78 percent and specificity around 87 percent; published study ranges are approximately 71 to 88 percent sensitivity and 74 to 97 percent specificity.',
        'Strength: combines ultrasound morphology, menopausal status and CA-125; widely used, validated, practical and relatively inexpensive.',
        'Limitation: performance depends on ultrasound interpretation, CA-125 may be normal in some cancers, benign inflammation may elevate CA-125 and some tumour subtypes are poorly captured.',
        'Limitation: threshold choice changes sensitivity and specificity, and RMI does not provide a histological diagnosis.',
        'Not a Rule-Out: a low RMI does not overrule strong clinical suspicion, symptoms or suspicious morphology.',
      ],
      table: {
        head: ['RMI I Component', 'Value'],
        rows: [
          [
            'Ultrasound score with no features',
            'U = 0',
          ],
          [
            'Ultrasound score with one feature',
            'U = 1',
          ],
          [
            'Ultrasound score with two or more features',
            'U = 3',
          ],
          [
            'Premenopausal menopausal score',
            'M = 1',
          ],
          [
            'Postmenopausal menopausal score',
            'M = 3',
          ],
          [
            'Formula',
            'RMI I = U x M x CA-125',
          ],
          [
            'RCOG threshold',
            '200',
          ],
          [
            'Alternative threshold in some centres',
            '250',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: RMI I equals ultrasound score times menopausal score times CA-125.',
        'U is 0, 1 or 3 - one ultrasound feature gives 1, not 3.',
        'RMI I of 200 or more means CT abdomen and pelvis plus gynaecological oncology MDT referral.',
      ],
      trap: {
        title: 'Examiner trap - calculating RMI as CA-125 times menopausal status only',
        body: 'RMI I has three factors: ultrasound score, menopausal score and CA-125. Omitting the ultrasound score, or assigning U equals 3 for a single feature, produces the wrong result.',
      },
      traps: [
        {
          title: '• Assigning U equals 3 when only one ultrasound feature is present.',
        },
        {
          title: '• Using M equals 1 for a postmenopausal woman.',
        },
        {
          title: '• Treating RMI 200 or more as a histological diagnosis of cancer.',
        },
        {
          title: '• Discharging a symptomatic patient because the RMI is below 200.',
        },
      ],
    },
    {
      id: 'management-pathway',
      heading: 'Size-Based & Risk-Based Management',
      intro:
        'Management follows two linked pathways: a size-based pathway for asymptomatic simple cysts and a risk-based pathway driven by morphology, symptoms and RMI. Aspiration is not definitive management, and suspected malignancy should be managed within a gynaecological oncology service.',
      flow: [
        'Is the cyst simple, unilateral, unilocular and asymptomatic? · if yes, apply the size pathway',
        'Size 3 cm or less · no routine follow-up under the December 2025 amendment',
        'Size over 3 and up to 5 cm with normal CA-125 · repeat CA-125 and TVUS in 4 to 6 months',
        'Stable or smaller at one year with normal CA-125 · consider discharge',
        'Symptomatic or complex or persistent mass · surgical evaluation',
        'RMI I 200 or more · CT abdomen and pelvis plus gynaecological oncology MDT referral',
        'Plan surgery according to malignancy risk · avoid unplanned surgery for a potentially malignant mass outside a specialist pathway',
      ],
      bullets: [
        'Simple 3 cm or Less: asymptomatic, unilateral, unilocular and simple means no routine follow-up is required.',
        'Simple Over 3 to 5 cm: if asymptomatic, unilateral, unilocular and CA-125 is normal, conservative management may be considered with repeat CA-125 and TVUS plus or minus transabdominal ultrasound in 4 to 6 months.',
        'Discharge: if unchanged or smaller and CA-125 remains normal, discharge from routine follow-up after one year may be considered, taking patient preference and surgical fitness into account.',
        'Indications for Surgical Evaluation: symptomatic cyst, suspicious or persistent complex mass, bilateral or multilocular lesions with concerning features, solid areas or papillary projections, ascites, metastatic disease, increasing size or changing morphology and elevated RMI or significant clinical concern.',
        'RMI 200 or More Pathway: confirm clinical and ultrasound findings, arrange CT abdomen and pelvis, refer to the gynaecological oncology MDT and avoid unplanned surgery outside an appropriate specialist pathway.',
        'RMI Below 200 Pathway: assess symptoms and morphology; a simple low-risk cyst may follow the size-based pathway, but a symptomatic or complex mass still needs surgical evaluation.',
        'Aspiration: routine aspiration of postmenopausal ovarian cysts is generally not recommended as definitive management.',
        'Why Not Aspiration: cytology has limited sensitivity, fluid sampling can miss malignancy, recurrence is common and rupture or spillage may complicate management if the lesion is malignant.',
        'Surgical Approach: plan according to malignancy risk and specialist advice; if malignancy is suspected, refer to a gynaecological oncology service for staging and cytoreductive planning.',
        'Surgical Fitness: age, comorbidity, performance status and patient preference influence whether observation or surgery is appropriate.',
        'Symptom Control: a symptomatic benign cyst may warrant surgery even when malignancy risk is low.',
        'Documentation: record the size, morphology, CA-125, RMI, symptoms and the agreed plan with the patient.',
      ],
      table: {
        head: ['Risk Category', 'Finding', 'Management'],
        rows: [
          [
            'Very low',
            'Simple, unilateral, unilocular, asymptomatic, 3 cm or less',
            'No routine follow-up',
          ],
          [
            'Low',
            'Simple, unilateral, unilocular, asymptomatic, over 3 to 5 cm, normal CA-125',
            'Repeat CA-125 and TVUS in 4 to 6 months; consider discharge after one year if stable',
          ],
          [
            'Symptomatic or complex',
            'Pain, distension, solid or papillary component, multilocular or bilateral, ascites',
            'Surgical evaluation and specialist assessment',
          ],
          [
            'Elevated risk',
            'RMI I 200 or more',
            'CT abdomen and pelvis plus gynaecological oncology MDT referral',
          ],
          [
            'Suspected malignancy',
            'Complex mass with high RMI or metastatic features',
            'Specialist staging and cytoreductive planning; avoid unplanned surgery',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: size-based observation applies only to asymptomatic simple cysts with normal CA-125.',
        'Symptomatic or complex masses need surgical evaluation even when RMI is low.',
        'Routine aspiration is not definitive management of a postmenopausal ovarian cyst.',
      ],
      trap: {
        title: 'Examiner trap - aspirating a postmenopausal cyst as definitive treatment',
        body: 'Aspiration has limited cytological sensitivity, can miss malignancy, recurs commonly and risks spillage if the lesion is malignant. It is not recommended as routine definitive management.',
      },
      traps: [
        {
          title: '• Discharging a symptomatic cyst because it measures under 5 cm.',
        },
        {
          title: '• Aspirating a complex cyst and assuming benign cytology is definitive.',
        },
        {
          title: '• Operating on a high-RMI mass without gynaecological oncology input.',
        },
        {
          title: '• Applying the 3 cm no-follow-up rule to a multilocular lesion.',
        },
      ],
    },
    {
      id: 'hereditary-risk',
      heading: 'BRCA1/2, Lynch Syndrome & Cancer-Genetics Referral',
      intro:
        'A significant proportion of epithelial ovarian cancers are associated with inherited pathogenic variants, especially in homologous-recombination repair genes and mismatch-repair genes. Family history must include both maternal and paternal relatives, and a variant of uncertain significance is not a pathogenic result.',
      flow: [
        'Take a three-generation family history · both sides, first- and second-degree relatives, cancer type and age at diagnosis',
        'Look for suggestive patterns · ovarian, breast, colorectal and endometrial cancers, bilateral breast cancer and multiple primaries',
        'Check for a known familial pathogenic variant · this determines the testing strategy',
        'Refer to cancer genetics · for counselling and appropriate germline or tumour testing',
        'Discuss implications · for the patient, relatives, risk-reducing strategies and treatment selection',
        'Interpret results carefully · positive, negative, uncertain and uninformative results mean different things',
      ],
      bullets: [
        'Family History Scope: include both maternal and paternal relatives, first- and second-degree relatives, cancer type and age at diagnosis, bilateral breast cancer, multiple primary cancers and known genetic test results.',
        'BRCA1 and BRCA2: tumour-suppressor genes involved in homologous-recombination repair of double-strand DNA breaks.',
        'BRCA Risks: pathogenic variants increase the risk of breast cancer and epithelial ovarian, fallopian tube and peritoneal cancer.',
        'BRCA Implications: variants influence prevention, screening counselling and treatment selection, including PARP-inhibitor sensitivity in appropriate cancer settings.',
        'BRCA1 versus BRCA2: BRCA1 generally confers a higher lifetime ovarian-cancer risk than BRCA2, although estimates vary by population and family history.',
        'Lynch Syndrome Genes: pathogenic variants in mismatch-repair genes MLH1, MSH2, MSH6 and PMS2, or an EPCAM deletion affecting MSH2 expression.',
        'Lynch Cancers: colorectal, endometrial, ovarian, gastric and small bowel, urinary tract, hepatobiliary and selected skin and other cancers.',
        'Lynch Clue: ovarian and endometrial cancers in a family, particularly alongside colorectal cancer and younger ages at diagnosis, should raise suspicion.',
        'Handwritten Patterns: two or more related relatives with ovarian cancer; one individual with both breast and ovarian cancer; ovarian cancer plus young-onset breast cancer in another relative.',
        'Additional Handwritten Patterns: ovarian cancer plus two relatives with breast cancer before about 60 years; multiple relatives with colorectal or endometrial cancers across generations suggesting Lynch syndrome.',
        'Teaching Triggers: these patterns are prompts for referral, not a complete current genetic-testing eligibility checklist; criteria vary by national pathway.',
        'Referral Indications: a known familial pathogenic variant, a personal history suggestive of hereditary breast or ovarian cancer, multiple affected relatives, unusually young ages, multiple primaries or a pattern suggesting BRCA or Lynch syndrome.',
        'Predictive Testing: an unaffected first-degree relative of a known pathogenic-variant carrier may need predictive testing after genetic counselling.',
        'Negative Result Caveat: do not interpret a negative result in an unaffected relative without considering whether the familial variant is known and whether the correct test was performed.',
        'Genetic Counselling: explain implications for the patient and relatives, discuss positive, negative and uncertain results, and clarify that a variant of uncertain significance is not equivalent to a pathogenic variant.',
        'Confidentiality: protect confidentiality and respect patient choice throughout the process.',
      ],
      table: {
        head: ['Syndrome', 'Genes', 'Associated Cancers'],
        rows: [
          [
            'Hereditary breast and ovarian cancer',
            'BRCA1, BRCA2',
            'Breast, epithelial ovarian, fallopian tube and primary peritoneal',
          ],
          [
            'Lynch syndrome',
            'MLH1, MSH2, MSH6, PMS2, EPCAM deletion',
            'Colorectal, endometrial, ovarian, gastric, small bowel, urinary tract, hepatobiliary',
          ],
          [
            'Both syndromes',
            'Homologous-recombination or mismatch-repair pathway',
            'Family history across breast, ovarian, colorectal and endometrial cancers',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: BRCA1 and BRCA2 are homologous-recombination repair genes linked to breast and tubo-ovarian cancer.',
        'Lynch syndrome involves mismatch-repair genes and is associated with colorectal, endometrial and ovarian cancer.',
        'A variant of uncertain significance is not a pathogenic variant and should not drive risk-reducing surgery by itself.',
      ],
      trap: {
        title: 'Examiner trap - treating a variant of uncertain significance as a pathogenic result',
        body: 'A VUS is not the same as a pathogenic variant. It should not be used alone to justify risk-reducing surgery or to reassure relatives that they are unaffected. Genetic counselling and family-specific testing are required.',
      },
      traps: [
        {
          title: '• Taking a family history from the maternal side only.',
        },
        {
          title: '• Calling a VUS pathogenic and proceeding to risk-reducing surgery.',
        },
        {
          title: '• Interpreting a negative result in an unaffected relative without knowing the familial variant.',
        },
      ],
    },
    {
      id: 'tumour-markers',
      heading: 'CA-125, HE4, CEA, CA19-9 & Gastrointestinal Mimics',
      intro:
        'RCOG states that CA-125 should be the only serum tumour marker used for primary evaluation of postmenopausal ovarian cysts to allow RMI calculation. Other markers have selected roles but are not routine first-line tests, and a gastrointestinal primary can metastasise to the ovaries and mimic ovarian cancer.',
      flow: [
        'Measure CA-125 for primary evaluation · the only routine marker recommended for RMI',
        'Interpret against morphology and symptoms · a normal or raised value does not stand alone',
        'Consider HE4 only in selected specialist risk panels · not routine RCOG first-line',
        'Consider CEA and CA19-9 when a mucinous or gastrointestinal primary is suspected',
        'Look for gastrointestinal clues · bowel symptoms, iron deficiency, weight loss and age-appropriate screening',
        'Confirm with imaging, endoscopy when indicated and histology or immunohistochemistry',
        'Do not use a CA-125 to CEA ratio in isolation',
      ],
      bullets: [
        'RCOG Position: CA-125 should be the only serum tumour marker used for primary evaluation of postmenopausal ovarian cysts to allow RMI calculation.',
        'Insufficient Evidence for Routine Use: HE4, CEA, CA19-9, CA72-4, CDX2, AFP, LDH and beta-hCG for routine malignancy-risk assessment of postmenopausal ovarian cysts.',
        'Not Never Useful: these markers may be used selectively when a specialist is evaluating a particular differential diagnosis or tumour subtype.',
        'HE4: human epididymis protein 4 is expressed in several tissues and may be elevated in epithelial ovarian cancer.',
        'HE4 Use: used with CA-125 and menopausal status in the ROMA algorithm in some settings and may be less affected by some benign gynaecological conditions than CA-125.',
        'HE4 Caveats: it is not cancer-specific, renal impairment and age influence it, and RCOG does not recommend it as a routine primary marker for all postmenopausal cysts.',
        'CEA: carcinoembryonic antigen may be elevated in colorectal and other gastrointestinal malignancies.',
        'CEA Use: may be useful when a mucinous ovarian tumour or metastatic gastrointestinal primary is suspected; a raised CEA in an adnexal mass should prompt consideration of a gastrointestinal source.',
        'CA19-9: may be elevated in pancreatic and biliary tract cancers and in some mucinous ovarian tumours, and can rise in benign hepatobiliary and pancreatic disease.',
        'CA-125 to CEA Ratio: a ratio greater than 25 to 1 is described as favouring an ovarian primary over a gastrointestinal primary, but it does not exclude a gastrointestinal primary.',
        'Ratio Caveat: do not use the ratio as a stand-alone diagnostic test or as a replacement for imaging, endoscopy when indicated or histopathology.',
        'Gastrointestinal Mimic: a gastrointestinal malignancy can metastasise to the ovaries and mimic a primary ovarian tumour.',
        'Mimic Assessment: consider CEA and CA19-9 in selected cases, gastrointestinal symptoms, imaging features, age-appropriate colorectal screening, colonoscopy when warranted and histological or immunohistochemical assessment.',
        'ROMA and Other Panels: the 2025 Renz review discusses ROMA, OVA1 and OVERA, but availability, regulatory approval and clinical role vary by jurisdiction.',
        'Guideline Hierarchy: discussion of biomarker panels in a review does not supersede the RCOG recommendation that CA-125 is the only routine marker for primary evaluation under GTG 34.',
        'AFP, LDH and beta-hCG: selected germ-cell tumour work-up in younger patients, not routine in postmenopausal cyst assessment.',
      ],
      table: {
        head: ['Marker', 'Main Association or Use', 'Routine First-Line Under RCOG?'],
        rows: [
          [
            'CA-125',
            'Epithelial ovarian cancer; RMI input',
            'Yes',
          ],
          [
            'HE4',
            'Selected epithelial ovarian risk panels such as ROMA',
            'No',
          ],
          [
            'CEA',
            'Gastrointestinal primary or mucinous differential',
            'No',
          ],
          [
            'CA19-9',
            'Pancreatic-biliary or mucinous differential',
            'No',
          ],
          [
            'AFP',
            'Selected germ-cell tumour work-up in younger patients',
            'No for routine postmenopausal cyst assessment',
          ],
          [
            'LDH',
            'Selected germ-cell tumour work-up',
            'No',
          ],
          [
            'beta-hCG',
            'Selected germ-cell tumour work-up',
            'No',
          ],
          [
            'CA72-4',
            'Selected gastrointestinal or mucinous contexts',
            'No',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: CA-125 is the only routine serum marker RCOG recommends for primary evaluation of postmenopausal ovarian cysts.',
        'CEA and CA19-9 may help when a gastrointestinal or mucinous tumour is suspected, but they are not routine first-line tests.',
        'A gastrointestinal primary can metastasise to the ovaries and mimic ovarian cancer.',
      ],
      trap: {
        title: 'Examiner trap - ordering HE4, CEA and CA19-9 routinely with every CA-125',
        body: 'RCOG does not support routine use of these additional markers for primary assessment of postmenopausal ovarian cysts. They have selected roles in specialist differential diagnosis, such as suspected gastrointestinal or mucinous disease.',
      },
      traps: [
        {
          title: '• Using HE4 as a routine first-line marker for every cyst.',
        },
        {
          title: '• Interpreting a raised CEA as proof of a gastrointestinal primary.',
        },
        {
          title: '• Using the CA-125 to CEA ratio in isolation.',
        },
        {
          title: '• Forgetting that a normal CA-125 does not exclude ovarian cancer.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'Initial evaluation is history, examination, TVUS and CA-125.',
        'TVUS is the single most effective first-line imaging test for postmenopausal ovarian cysts.',
        'CA-125 is the only routine serum marker RCOG recommends for primary evaluation.',
        'CA-125 alone cannot diagnose or exclude ovarian cancer.',
        'RMI I equals U times M times CA-125.',
        'RMI ultrasound features: multilocular, solid, bilateral, ascites and metastases.',
        'U is 0 for none, 1 for one and 3 for two or more features.',
        'M is 1 premenopausal and 3 postmenopausal.',
        'RMI I 200 or more means CT abdomen and pelvis plus gynaecological oncology MDT referral.',
        'Some centres use 250, but the RCOG recommended threshold is 200.',
        'A simple unilateral unilocular asymptomatic cyst 3 cm or less needs no routine follow-up under the December 2025 update.',
        'A simple cyst over 3 and up to 5 cm with normal CA-125 can be reassessed in 4 to 6 months.',
        'Symptomatic or suspicious complex masses need surgical evaluation even if RMI is low.',
        'CA-125 may rise in peritoneal inflammation, tuberculosis, liver disease, pancreatitis and pleural inflammation.',
        'A normal CA-125 does not exclude early-stage or certain histological ovarian cancers.',
        'BRCA1 and BRCA2 are homologous-recombination repair genes.',
        'Lynch syndrome involves mismatch-repair genes and colorectal, endometrial and ovarian cancers.',
        'HE4, CEA and CA19-9 are not routine first-line RCOG markers for every cyst.',
        'CEA and CA19-9 may help when gastrointestinal or mucinous tumour is suspected.',
        'A metastatic gastrointestinal tumour can mimic a primary ovarian tumour.',
        'MRI is second-line for indeterminate cysts when ultrasound is inconclusive.',
        'CT is used when malignancy is suspected, not as routine first-line imaging.',
        'Family history must include both maternal and paternal sides.',
        'A variant of uncertain significance is not a pathogenic variant.',
        'Routine aspiration is not definitive management of a postmenopausal ovarian cyst.',
      ],
      traps: [
        {
          title: '• Saying every postmenopausal ovarian cyst must be removed.',
        },
        {
          title: '• Following up a 2 cm asymptomatic simple cyst forever.',
        },
        {
          title: '• Claiming a normal CA-125 rules out ovarian cancer.',
        },
        {
          title: '• Claiming a raised CA-125 confirms ovarian cancer.',
        },
        {
          title: '• Calculating RMI as CA-125 times menopausal status only.',
        },
        {
          title: '• Using M equals 1 for a postmenopausal woman.',
        },
        {
          title: '• Assigning U equals 3 for a single ultrasound feature.',
        },
        {
          title: '• Treating RMI 200 or more as confirmed cancer.',
        },
        {
          title: '• Ordering HE4, CEA and CA19-9 routinely with CA-125.',
        },
        {
          title: '• Reassuring a patient with a complex cyst because CA-125 is normal.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm13-f1',
      front: 'What are the first-line investigations for a postmenopausal ovarian cyst?',
      back: 'History and examination, transvaginal ultrasound and serum CA-125. TVUS is the single most effective first-line imaging test, and CA-125 is the only routine marker recommended for RMI.',
    },
    {
      id: 'm13-f2',
      front: 'What is the December 2025 RCOG recommendation for an asymptomatic simple cyst 3 cm or less?',
      back: 'An asymptomatic, unilateral, unilocular simple ovarian cyst measuring 3 cm or less in a postmenopausal woman does not require routine follow-up.',
    },
    {
      id: 'm13-f3',
      front: 'How should a simple cyst over 3 cm and up to 5 cm with normal CA-125 be managed?',
      back: 'Consider conservative management with repeat CA-125 and TVUS in 4 to 6 months. If unchanged or smaller with normal CA-125 at one year, discharge from routine follow-up may be considered.',
    },
    {
      id: 'm13-f4',
      front: 'What is the RMI I formula?',
      back: 'RMI I equals ultrasound score (U) multiplied by menopausal score (M) multiplied by serum CA-125 in U/mL.',
    },
    {
      id: 'm13-f5',
      front: 'What are the five RMI ultrasound features?',
      back: 'Multilocular cyst, solid areas, bilateral lesions, ascites and evidence of intra-abdominal or metastatic deposits.',
    },
    {
      id: 'm13-f6',
      front: 'How is the RMI ultrasound score assigned?',
      back: 'U equals 0 with no features, U equals 1 with one feature and U equals 3 with two or more features.',
    },
    {
      id: 'm13-f7',
      front: 'What is the menopausal score in RMI I?',
      back: 'M equals 1 for premenopausal women and M equals 3 for postmenopausal women.',
    },
    {
      id: 'm13-f8',
      front: 'What is the RCOG RMI I referral threshold and what does it trigger?',
      back: 'A threshold of 200. RMI I of 200 or more requires CT abdomen and pelvis and referral to a gynaecological oncology multidisciplinary team.',
    },
    {
      id: 'm13-f9',
      front: 'Does a normal CA-125 exclude ovarian cancer?',
      back: 'No. Early-stage disease and some histological subtypes, including certain mucinous tumours, may have a normal CA-125.',
    },
    {
      id: 'm13-f10',
      front: 'Name benign causes of a raised CA-125.',
      back: 'Peritoneal tuberculosis, cirrhosis or hepatitis, pancreatitis, pleural inflammation, cholecystitis, endometriosis and other serosal inflammation.',
    },
    {
      id: 'm13-f11',
      front: 'Which serum marker does RCOG recommend for primary evaluation of postmenopausal ovarian cysts?',
      back: 'CA-125 only. HE4, CEA, CA19-9, CA72-4, AFP, LDH and beta-hCG are not supported for routine primary risk assessment.',
    },
    {
      id: 'm13-f12',
      front: 'When may CEA and CA19-9 be useful in an adnexal mass?',
      back: 'When a gastrointestinal primary or mucinous ovarian tumour is part of the differential. A raised CEA prompts consideration of a gastrointestinal source but does not prove it.',
    },
    {
      id: 'm13-f13',
      front: 'Which genes are associated with hereditary breast and ovarian cancer?',
      back: 'BRCA1 and BRCA2, tumour-suppressor genes involved in homologous-recombination repair of double-strand DNA breaks.',
    },
    {
      id: 'm13-f14',
      front: 'Which genes are associated with Lynch syndrome?',
      back: 'Mismatch-repair genes MLH1, MSH2, MSH6 and PMS2, plus EPCAM deletions affecting MSH2 expression.',
    },
    {
      id: 'm13-f15',
      front: 'Why is routine aspiration not recommended for postmenopausal ovarian cysts?',
      back: 'Cytology has limited sensitivity, fluid sampling can miss malignancy, recurrence is common and rupture or spillage may complicate management if the lesion is malignant.',
    },
  ],

  mcqs: [
    {
      id: 'm13-q1',
      stem: 'A 67-year-old asymptomatic postmenopausal woman has a unilateral, unilocular, simple ovarian cyst measuring 2.5 cm on TVUS. CA-125 is normal. What is the current RCOG recommendation?',
      options: [
        'Immediate bilateral salpingo-oophorectomy',
        'Routine ultrasound every 3 months',
        'No routine follow-up required',
        'Repeat ultrasound every year for 10 years',
      ],
      answerIndex: 2,
      explanation:
        'Under the December 2025 RCOG amendment, an asymptomatic, unilateral, unilocular simple cyst measuring 3 cm or less in a postmenopausal woman does not require routine follow-up.',
    },
    {
      id: 'm13-q2',
      stem: 'A 70-year-old woman has an asymptomatic simple cyst measuring 4.2 cm with a normal CA-125. What is the most appropriate initial management?',
      options: [
        'Repeat CA-125 and TVUS in 4 to 6 months',
        'Immediate oophorectomy',
        'Routine aspiration of the cyst',
        'CT abdomen and pelvis immediately',
      ],
      answerIndex: 0,
      explanation:
        'For an asymptomatic simple cyst over 3 cm and up to 5 cm with normal CA-125, conservative management with repeat CA-125 and TVUS in 4 to 6 months is appropriate. If stable or smaller at one year, discharge may be considered.',
    },
    {
      id: 'm13-q3',
      stem: 'A postmenopausal woman has a multilocular cyst with a solid area and CA-125 of 80 U/mL. What is the RMI I?',
      options: [
        '80',
        '240',
        '720',
        '1440',
      ],
      answerIndex: 2,
      explanation:
        'Two or more ultrasound features give U equals 3, postmenopausal status gives M equals 3, and CA-125 is 80. RMI I equals 3 times 3 times 80 equals 720.',
    },
    {
      id: 'm13-q4',
      stem: 'A postmenopausal woman has one ultrasound feature and a CA-125 of 60 U/mL. Her RMI I is 180. What is the correct interpretation?',
      options: [
        'Ovarian cancer is excluded',
        'Immediate chemotherapy should be started',
        'The RMI was calculated incorrectly because any solid area gives U equals 3',
        'She is in the lower-risk pathway, but symptoms and suspicious morphology still require assessment',
      ],
      answerIndex: 3,
      explanation:
        'One ultrasound feature gives U equals 1, so RMI I equals 1 times 3 times 60 equals 180, below the threshold of 200. A low RMI does not overrule clinical concern or suspicious morphology.',
    },
    {
      id: 'm13-q5',
      stem: 'Which statement about RMI I is correct?',
      options: [
        'It is calculated as CA-125 multiplied by menopausal status only',
        'It combines ultrasound score, menopausal score and CA-125, and a low result does not exclude cancer',
        'A result of 200 or more confirms ovarian cancer histologically',
        'It is only valid in premenopausal women',
      ],
      answerIndex: 1,
      explanation:
        'RMI I equals U times M times CA-125. It is a triage tool, not a histological diagnosis. A result of 200 or more indicates increased risk requiring CT and specialist referral, while a low result does not exclude cancer.',
    },
    {
      id: 'm13-q6',
      stem: 'A 72-year-old woman has a suspicious complex adnexal mass with ascites and a raised CA-125. What is the most appropriate next step?',
      options: [
        'CT abdomen and pelvis plus referral to the gynaecological oncology MDT',
        'Routine aspiration and cytology',
        'Repeat ultrasound in 12 months',
        'Reassurance because CA-125 can be raised in benign disease',
      ],
      answerIndex: 0,
      explanation:
        'Suspicious morphology with ascites and a raised CA-125 indicates high concern. Under the RCOG pathway, arrange CT abdomen and pelvis and refer to the gynaecological oncology multidisciplinary team, avoiding unplanned surgery outside a specialist pathway.',
    },
    {
      id: 'm13-q7',
      stem: 'A 68-year-old woman has a simple cyst with a normal CA-125 but reports persistent bloating, early satiety and pelvic pain for several months. What is the best approach?',
      options: [
        'Discharge because the cyst is simple and CA-125 is normal',
        'Reassure and repeat ultrasound in one year only',
        'Start antibiotics for pelvic inflammatory disease',
        'Evaluate the symptoms further, as they may indicate ovarian pathology despite simple morphology',
      ],
      answerIndex: 3,
      explanation:
        'Persistent bloating, early satiety and pelvic pain fit the Goff symptom pattern and warrant evaluation even when the cyst appears simple and CA-125 is normal. Symptoms and clinical concern override a reassuring single test.',
    },
    {
      id: 'm13-q8',
      stem: 'A 65-year-old woman has an adnexal mass and a markedly raised CEA with bowel symptoms. What should be considered?',
      options: [
        'CEA proves a primary ovarian cancer',
        'A gastrointestinal primary metastasising to the ovaries should be considered, with appropriate imaging and investigation',
        'CEA is a routine first-line RCOG marker for every ovarian cyst',
        'The CA-125 to CEA ratio alone excludes a gastrointestinal primary',
      ],
      answerIndex: 1,
      explanation:
        'A raised CEA in an adnexal mass should prompt consideration of a gastrointestinal primary or mucinous tumour. It does not prove the diagnosis, and the CA-125 to CEA ratio cannot exclude a gastrointestinal source on its own.',
    },
    {
      id: 'm13-q9',
      stem: 'A 58-year-old woman with ovarian cancer has a family history of breast cancer in her mother and ovarian cancer in her maternal aunt. What is the most appropriate action?',
      options: [
        'No action because the history is on the maternal side only',
        'Reassure because she already has ovarian cancer',
        'Test only her children without counselling',
        'Refer to cancer genetics for counselling and consideration of BRCA testing',
      ],
      answerIndex: 3,
      explanation:
        'A family history of breast and ovarian cancer suggests hereditary breast and ovarian cancer. Refer to cancer genetics for counselling and consideration of germline BRCA1/2 testing, which also has treatment implications.',
    },
    {
      id: 'm13-q10',
      stem: 'A clinician proposes routine aspiration of a 4 cm simple postmenopausal cyst as definitive treatment. Which response is most accurate?',
      options: [
        'Aspiration is the preferred definitive management for all postmenopausal cysts',
        'Aspiration cytology reliably excludes malignancy',
        'Routine aspiration is not recommended because cytology is limited, recurrence is common and spillage may complicate malignancy',
        'Aspiration should be followed by immediate chemotherapy',
      ],
      answerIndex: 2,
      explanation:
        'Routine aspiration of postmenopausal ovarian cysts is generally not recommended as definitive management. Cytology has limited sensitivity, sampling can miss malignancy, recurrence is common and rupture or spillage may complicate management if the lesion is malignant.',
    },
  ],
};
