import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 23 - Chronic Pelvic Pain (RCOG Green-top Guideline No. 41)
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten benign gynaecology notes (obygn 2 pdf,
 * pages 4-14) and organised around the RCOG GTG 41 clinical framework.
 *
 * Covers:
 * - Definition, impact and the multifactorial model
 * - Visceral, somatic, neuropathic and nociplastic pain mechanisms
 * - Cyclical and non-cyclical gynaecological and non-gynaecological causes
 * - Residual ovary syndrome versus trapped ovary syndrome
 * - Ilioinguinal and iliohypogastric nerve entrapment
 * - Irritable bowel syndrome and Rome III versus Rome IV
 * - History, examination and red flags
 * - Investigations, including the place of laparoscopy
 * - Multidisciplinary, stepwise management
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const CHRONIC_PELVIC_PAIN_MODULE: StudioModule = {
  id: 'pg-mod-23-chronic-pelvic-pain',
  track: 'NEET_PG',
  title: 'Chronic Pelvic Pain: RCOG GTG 41',
  shortTitle: 'Chronic Pelvic Pain',
  summary:
    'Complete PG clinical revision module on chronic pelvic pain following RCOG Green-top Guideline No. 41. Features the six-month definition, the four overlapping pain mechanisms, cyclical and non-cyclical causes including endometriosis, adenomyosis and pelvic venous disorder, the residual versus trapped ovary distinction, ilioinguinal and iliohypogastric entrapment, Rome III and Rome IV criteria for IBS, a red-flag-led history and examination, the limited role of reflexive laparoscopy, a three to six month hormonal trial for cyclical pain, opioid-sparing neuropathic analgesia, pelvic floor physiotherapy and multidisciplinary function-based goals, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Four pain mechanisms, residual versus trapped ovary and the 3-6 month trial.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 41',
    '6-Month Definition',
    'Visceral vs Neuropathic',
    'Central Sensitisation',
    'Residual Ovary',
    'Trapped Ovary',
    'Nerve Entrapment',
    'Rome III vs Rome IV',
    'Laparoscopy Limits',
    'Hormonal Trial',
    'Pelvic Floor Physio',
    'Multidisciplinary Care',
  ],
  sourceTag:
    'Handwritten benign gynaecology revision (obygn 2 pdf, pp. 4-14) • RCOG Green-top Guideline No. 41 • Rome III/IV frameworks',
  updatedAtISO: '2026-11-14T15:30:00.000Z',
  notes: [
    {
      id: 'definition-framework',
      heading: 'Definition and Clinical Framework',
      intro:
        'Chronic pelvic pain is persistent or recurrent pelvic or lower abdominal pain in a woman, generally present for at least 6 months, that is not exclusively related to menstruation, intercourse or pregnancy. It is a symptom complex, not a single diagnosis.',
      flow: [
        'Establish that pain is persistent or recurrent for at least 6 months',
        'Confirm it is not exclusively menstrual, coital or pregnancy-related',
        'Screen for impact on function, sleep, sexual health, work and relationships',
        'Look for more than one coexisting contributor',
        'Assess for red flags that require a different pathway',
        'Build a mechanism-based, multidisciplinary management plan',
        'Set function-focused goals rather than promising complete cure',
      ],
      bullets: [
        'Definition: persistent or recurrent pelvic/lower abdominal pain for at least 6 months, not exclusively related to menstruation, intercourse or pregnancy.',
        'Symptom Complex: it is not a single diagnosis.',
        'Function: can impair physical function, sleep, sexual health, work and relationships.',
        'Consultations: repeated consultations and sometimes repeated investigations or surgery are common.',
        'Psychological Distress: may coexist with pain; it does not mean the pain is imaginary.',
        'Persistence: the original tissue trigger can resolve while nervous-system sensitisation maintains pain.',
        'Multifactorial: endometriosis, adenomyosis, pelvic floor dysfunction, bladder pain syndrome, IBS, adhesions, neuropathic pain, pelvic venous disease and musculoskeletal disorders may coexist.',
        'No Single-Organ Forcing: do not force a single-organ explanation when the history suggests overlapping generators.',
      ],
      table: {
        head: ['Domain', 'Why it matters'],
        rows: [
          ['Duration', 'At least 6 months defines the chronic pathway'],
          ['Pattern', 'Not exclusively menstrual, coital or pregnancy-related'],
          ['Impact', 'Function, sleep, sex, work and relationships'],
          ['Mechanism', 'Visceral, somatic, neuropathic and central components may overlap'],
          ['Red flags', 'New acute pain, bleeding, mass, fever or systemic features change the pathway'],
        ],
      },
      pearls: [
        'Golden Pearl: chronic pelvic pain is a symptom complex, not a diagnosis.',
        'Psychological distress can coexist with real pain and does not make it imaginary.',
        'The original tissue trigger may resolve while central sensitisation maintains the pain.',
      ],
      trap: {
        title: 'Examiner trap - assuming one organ must explain all the pain',
        body: 'Endometriosis, adenomyosis, bladder pain syndrome, IBS, pelvic floor dysfunction, adhesions and neuropathic pain frequently coexist. A single-organ explanation may miss important contributors.',
      },
      traps: [
        {
          title: '• Dismissing pain because examinations or scans are normal.',
        },
        {
          title: '• Forcing a single diagnosis onto a multifactorial presentation.',
        },
        {
          title: '• Ignoring functional and psychological impact.',
        },
      ],
    },
    {
      id: 'pain-mechanisms',
      heading: 'Pain Mechanisms: Four Overlapping Patterns',
      intro:
        'The history and examination should suggest which mechanisms are contributing. Visceral, somatic/musculoskeletal, neuropathic and nociplastic/central sensitisation pain can coexist, and each points to a different part of the management plan.',
      flow: [
        'Visceral · poorly localised, cramping or deep, with autonomic features',
        'Somatic/musculoskeletal · reproducible by movement, posture, palpation or contraction',
        'Neuropathic · burning, electric, shooting or tingling, with allodynia or numbness',
        'Nociplastic/central · amplified processing, widespread pain and overlapping syndromes',
        'Map the contributors rather than choosing one',
        'Match treatment to the mechanisms identified',
      ],
      bullets: [
        'Visceral Pain: arises from pelvic organs such as uterus, ovaries, bladder or bowel.',
        'Visceral Features: may be poorly localised, cramping or deep, and may be associated with autonomic symptoms.',
        'Somatic/Musculoskeletal Pain: arises from abdominal wall, pelvic floor muscles, hip, sacroiliac region, spine or myofascial trigger points.',
        'Somatic Features: often reproducible by movement, posture, muscle palpation or contraction.',
        'Neuropathic Pain: results from nerve injury, compression, entrapment or disease.',
        'Neuropathic Features: burning, electric, shooting or tingling pain, often with allodynia, numbness or altered sensation.',
        'Neuropathic Context: may follow abdominal incision, port placement, pelvic surgery or scar formation.',
        'Nociplastic/Central Sensitisation: altered central processing can amplify pain and make it persist beyond the original tissue insult.',
        'Central Associations: IBS, migraine, fibromyalgia, bladder pain syndrome, sleep disturbance and fatigue.',
      ],
      table: {
        head: ['Mechanism', 'Typical description', 'Clinical clue'],
        rows: [
          ['Visceral', 'Deep, cramping, poorly localised', 'Associated autonomic symptoms'],
          ['Somatic/musculoskeletal', 'Movement- or posture-related', 'Reproduced by palpation or contraction'],
          ['Neuropathic', 'Burning, electric, shooting', 'Allodynia, numbness, prior surgery'],
          ['Nociplastic/central', 'Amplified, widespread, persistent', 'Overlapping IBS, migraine, fibromyalgia, poor sleep'],
        ],
      },
      pearls: [
        'Golden Pearl: neuropathic pain is burning, electric or shooting, often after surgery or scar formation.',
        'Somatic pain is often reproducible by movement, posture or muscle contraction.',
        'Central sensitisation may persist after the original tissue insult has resolved.',
      ],
      trap: {
        title: 'Examiner trap - labelling all pelvic pain as visceral',
        body: 'Abdominal wall, pelvic floor, hip and spinal sources can produce pelvic pain. A Carnett-type assessment, pelvic floor examination and movement-based examination may reveal a somatic contributor.',
      },
      traps: [
        {
          title: '• Missing abdominal wall or pelvic floor pain.',
        },
        {
          title: '• Treating neuropathic pain as infection or inflammation.',
        },
        {
          title: '• Ignoring sleep, mood and widespread pain in central sensitisation.',
        },
      ],
    },
    {
      id: 'causes',
      heading: 'Cyclical and Non-Cyclical Causes',
      intro:
        'Cyclical pain suggests hormonally responsive causes such as endometriosis or adenomyosis, but does not exclude other disease. Non-gynaecological causes are common and may coexist with gynaecological ones.',
      flow: [
        'Characterise the relationship to menstruation, ovulation and intercourse',
        'Consider endometriosis and adenomyosis for cyclical pain',
        'Consider pelvic venous congestion for positional or postcoital heaviness',
        'Consider fibroids, PID, cysts, adhesions, malignancy and postoperative complications',
        'Screen for IBS, urinary disease, abdominal wall, hernia, hip/spine and pelvic floor causes',
        'Exclude acute emergencies when pain changes suddenly',
        'Investigate according to the clinical question',
      ],
      bullets: [
        'Endometriosis: ectopic endometrial-like tissue can cause cyclical or non-cyclical pain, dysmenorrhoea, deep dyspareunia, dyschezia, dysuria and infertility.',
        'Endometriosis Severity: pain severity does not reliably correlate with visible disease burden.',
        'Normal Ultrasound: does not exclude superficial peritoneal endometriosis.',
        'Adenomyosis: endometrial glands/stroma within the myometrium.',
        'Adenomyosis Features: heavy menstrual bleeding, dysmenorrhoea, chronic pelvic pain and a bulky/tender uterus.',
        'Adenomyosis Imaging: transvaginal ultrasound is often first-line; MRI may help in selected uncertain cases.',
        'Pelvic Venous Congestion: dull, heavy pelvic ache, often worse after prolonged standing, late in the day or after intercourse.',
        'Venous Caveat: imaging findings alone do not prove that venous dilatation is the pain cause; clinical correlation is essential.',
        'Other Gynaecological Causes: fibroids, pelvic inflammatory disease, ovarian cysts/masses, adhesions, pelvic malignancy and postoperative complications.',
        'Acute Change: consider ectopic pregnancy and acute emergencies in any patient with a new acute change in pain.',
        'Non-Gynaecological Causes: IBS, inflammatory bowel disease, constipation, urinary tract infection, bladder pain syndrome, ureteric stone, abdominal wall pain, hernia, hip/spinal disease and pelvic floor dysfunction.',
      ],
      table: {
        head: ['Cause', 'Pain pattern', 'Key point'],
        rows: [
          ['Endometriosis', 'Cyclical or non-cyclical; dyspareunia, dyschezia', 'Normal ultrasound does not exclude superficial disease'],
          ['Adenomyosis', 'Cyclical, heavy bleeding, bulky tender uterus', 'TVS first-line; MRI in selected cases'],
          ['Pelvic venous disorder', 'Dull heaviness, standing, late day, postcoital', 'Imaging alone does not prove causation'],
          ['Fibroids/PID/cysts/adhesions', 'Variable', 'Consider according to history and examination'],
          ['IBS/bladder/musculoskeletal', 'Variable, often non-cyclical', 'Common and may coexist with gynaecological pain'],
        ],
      },
      pearls: [
        'Golden Pearl: cyclical pain suggests endometriosis or adenomyosis but does not exclude other disease.',
        'Pain severity in endometriosis does not correlate reliably with visible disease burden.',
        'Pelvic venous congestion causes positional or postcoital heaviness; imaging alone does not establish causation.',
      ],
      trap: {
        title: 'Examiner trap - excluding endometriosis because the ultrasound is normal',
        body: 'A normal pelvic ultrasound does not exclude superficial peritoneal endometriosis. Laparoscopy may be needed when the clinical picture is convincing and management is not adequate.',
      },
      traps: [
        {
          title: '• Missing a non-gynaecological cause because the patient is in a gynaecology clinic.',
        },
        {
          title: '• Treating pelvic varicosities on imaging alone without clinical correlation.',
        },
        {
          title: '• Forgetting ectopic pregnancy in a new acute pain presentation.',
        },
      ],
    },
    {
      id: 'residual-trapped-ovary',
      heading: 'Residual Ovary Syndrome versus Trapped Ovary Syndrome',
      intro:
        'These two postoperative ovarian pain syndromes are easy to confuse. The distinction is whether ovarian tissue was unintentionally left behind after an attempted oophorectomy or an ovary was intentionally retained and then trapped by adhesions.',
      flow: [
        'Review the surgical history: was oophorectomy attempted or an ovary retained?',
        'Residual ovary · remnant unintentionally left after attempted removal',
        'Trapped ovary · retained ovary enclosed or buried in dense adhesions',
        'Assess symptoms, imaging and hormonal status',
        'Consider operative confirmation when needed',
        'Weigh further surgery against adhesion and pain risk',
        'Offer multidisciplinary pain management where appropriate',
      ],
      bullets: [
        'Residual Ovary Syndrome: ovarian tissue remains unintentionally after an attempted oophorectomy, often because dense adhesions or distorted anatomy made complete removal difficult.',
        'ROS Behaviour: the remnant may become cystic, hormonally active or adherent, causing pelvic pain, mass symptoms or dyspareunia.',
        'ROS Diagnosis: surgical history, symptoms, imaging/hormonal assessment and sometimes operative confirmation.',
        'Trapped Ovary Syndrome: an ovary is intentionally retained after hysterectomy or pelvic surgery but becomes enclosed or buried in dense adhesions.',
        'TOS Mechanism: adhesions may tether the ovary to the pelvic sidewall, bowel or vaginal cuff, producing pain or dyspareunia.',
        'Exam Distinction: residual means remnant left after attempted removal; trapped means retained ovary trapped by adhesions.',
        'Management: individualised; further surgery may help selected patients but can worsen adhesions and chronic pain.',
        'Decision: weigh likely benefit against risk and consider multidisciplinary pain management.',
      ],
      table: {
        head: ['Feature', 'Residual ovary syndrome', 'Trapped ovary syndrome'],
        rows: [
          ['Surgical context', 'Attempted oophorectomy with incomplete removal', 'Ovary intentionally retained'],
          ['Mechanism', 'Remnant tissue left behind', 'Retained ovary enclosed by adhesions'],
          ['Symptoms', 'Pain, mass symptoms, dyspareunia', 'Pain or dyspareunia from tethering'],
          ['Diagnosis', 'History, imaging, hormones, sometimes surgery', 'History, imaging, operative findings'],
          ['Surgery', 'Individualised; benefit versus adhesion risk', 'Individualised; benefit versus adhesion risk'],
        ],
      },
      pearls: [
        'Golden Pearl: residual ovary is tissue unintentionally left after attempted oophorectomy; trapped ovary is a retained ovary buried in adhesions.',
        'Further surgery can worsen adhesions and chronic pain.',
        'Hormonal activity in a presumed post-oophorectomy patient suggests residual ovarian tissue.',
      ],
      trap: {
        title: 'Examiner trap - swapping residual and trapped ovary syndrome',
        body: 'Residual means a remnant was left behind after attempted removal. Trapped means the ovary was deliberately retained but became enclosed by adhesions.',
      },
      traps: [
        {
          title: '• Calling a retained adherent ovary residual.',
        },
        {
          title: '• Reoperating without weighing adhesion and pain risk.',
        },
        {
          title: '• Forgetting hormonal assessment in suspected residual tissue.',
        },
      ],
    },
    {
      id: 'nerve-entrapment',
      heading: 'Nerve Entrapment: Ilioinguinal and Iliohypogastric Nerves',
      intro:
        'The ilioinguinal and iliohypogastric nerves may be injured or entrapped by lower abdominal incisions, fascial sutures, port sites, scar tissue or postoperative fibrosis. This is a neuropathic cause of chronic pelvic pain after surgery.',
      flow: [
        'Map the pain and sensory change over the lower abdomen, groin and medial thigh',
        'Examine the incision, abdominal wall and scars',
        'Look for a focal trigger point or Tinel-like reproduction',
        'Differentiate from hernia, hip/spinal disease, pelvic floor and visceral pain',
        'Consider a local anaesthetic nerve block to support the diagnosis',
        'Use physiotherapy and neuropathic pain medication according to context',
        'Refer refractory cases to specialist pain or peripheral nerve surgery',
      ],
      bullets: [
        'Mechanism: injury or entrapment by lower abdominal incisions, fascial sutures, port sites, scar tissue or postoperative fibrosis.',
        'Distribution: burning, shooting or stabbing pain in the lower abdominal wall, groin, mons/labia majora or upper medial thigh; distribution varies by nerve and anatomy.',
        'Aggravators: coughing, hip extension, movement, tight clothing or pressure over a scar.',
        'Sensory Features: paraesthesia, numbness or hypersensitivity.',
        'Focal Sign: a trigger point or Tinel-like reproduction of pain near the incision.',
        'Assessment: map pain and sensory change and examine the incision and abdominal wall.',
        'Differential: hernia, hip/spinal disease, pelvic floor pain and visceral pain.',
        'Nerve Block: a local anaesthetic block can support the diagnosis when a clear nerve distribution is suspected.',
        'Initial Care: avoid further scar trauma where possible; consider physiotherapy and neuropathic pain medication.',
        'Guided Block: image-guided or ultrasound-guided local anaesthetic with or without steroid may be considered.',
        'Refractory: selected cases may need specialist pain or peripheral nerve surgical assessment.',
        'Neurectomy: not a first-line intervention.',
      ],
      table: {
        head: ['Feature', 'Ilioinguinal / iliohypogastric entrapment'],
        rows: [
          ['Context', 'Lower abdominal incision, port site or scar'],
          ['Pain', 'Burning, shooting or stabbing'],
          ['Distribution', 'Lower abdomen, groin, mons/labia, upper medial thigh'],
          ['Provocation', 'Coughing, hip extension, tight clothing, scar pressure'],
          ['Diagnostic support', 'Local anaesthetic nerve block'],
          ['First-line care', 'Physiotherapy and neuropathic analgesia; avoid scar trauma'],
        ],
      },
      pearls: [
        'Golden Pearl: ilioinguinal/iliohypogastric entrapment is a neuropathic cause after lower abdominal surgery.',
        'A Tinel-like response near the scar supports the diagnosis.',
        'Neurectomy is not first-line.',
      ],
      trap: {
        title: 'Examiner trap - attributing post-incision groin pain to recurrent hernia or gynaecological disease',
        body: 'A burning, shooting pain with a focal trigger point near a lower abdominal scar suggests nerve entrapment. A local anaesthetic block can support the diagnosis and help avoid unnecessary repeat surgery.',
      },
      traps: [
        {
          title: '• Missing a nerve entrapment after caesarean or port surgery.',
        },
        {
          title: '• Offering neurectomy before conservative care.',
        },
        {
          title: '• Confusing the pain with hip or spinal disease without examining.',
        },
      ],
    },
    {
      id: 'ibs-rome',
      heading: 'Irritable Bowel Syndrome and Rome Criteria',
      intro:
        'IBS is a disorder of gut-brain interaction and may be an important contributor to pelvic pain. Symptoms include abdominal pain or discomfort, altered stool frequency or form, bloating and relation to defecation.',
      flow: [
        'Ask about abdominal pain, stool frequency, stool form and bloating',
        'Check the relationship to defecation',
        'Apply Rome III if that is the framework asked',
        'Apply Rome IV for current clinical classification',
        'Look for alarm features rather than attributing everything to IBS',
        'Offer dietary, fibre, lifestyle, antispasmodic and psychological options',
        'Coordinate with gastroenterology when red flags or refractory symptoms exist',
      ],
      bullets: [
        'Rome III Framework: recurrent abdominal pain or discomfort for at least 3 days per month during the preceding 3 months.',
        'Rome III Associations: at least 2 of improvement with defecation, onset with a change in stool frequency, or onset with a change in stool form/appearance.',
        'Rome III Duration: symptom onset at least 6 months before diagnosis.',
        'Rome IV Change: recurrent abdominal pain on average at least 1 day per week in the last 3 months.',
        'Rome IV Associations: two of the same associations.',
        'Rome IV Duration: symptom onset at least 6 months earlier.',
        'Exam Choice: use Rome III when the handwritten notes or question specifically ask for it; use Rome IV for current clinical classification.',
        'Management: dietary advice, soluble fibre where appropriate, regular meals, exercise, stress management, antispasmodics, laxatives/antidiarrhoeals and psychological therapies.',
        'Alarm Features: evaluate rather than attributing all bowel symptoms to IBS.',
      ],
      table: {
        head: ['Criterion', 'Rome III', 'Rome IV'],
        rows: [
          ['Pain frequency', 'At least 3 days per month in the preceding 3 months', 'On average at least 1 day per week in the last 3 months'],
          ['Associated features', 'At least 2 of 3 stool-related associations', 'Two of the same associations'],
          ['Onset', 'At least 6 months before diagnosis', 'At least 6 months earlier'],
          ['Wording', 'Pain or discomfort', 'Recurrent abdominal pain'],
        ],
      },
      pearls: [
        'Golden Pearl: Rome III uses pain/discomfort at least 3 days per month and 2 of 3 stool-related associations.',
        'Rome IV uses pain on average at least 1 day per week.',
        'Both require symptom onset at least 6 months earlier.',
      ],
      trap: {
        title: 'Examiner trap - applying Rome IV numbers to a Rome III question',
        body: 'The frequency criterion changed between Rome III and Rome IV. State the framework you are using, especially when the notes specifically ask for Rome III.',
      },
      traps: [
        {
          title: '• Mixing Rome III and Rome IV thresholds.',
        },
        {
          title: '• Missing alarm features such as weight loss or rectal bleeding.',
        },
        {
          title: '• Treating IBS as a diagnosis of exclusion without assessment.',
        },
      ],
    },
    {
      id: 'history-examination',
      heading: 'History, Examination and Red Flags',
      intro:
        'History should characterise the pain and its relationships, screen for gynaecological and non-gynaecological contributors, and establish functional impact. Examination is targeted and trauma-informed, with consent for each component.',
      flow: [
        'Characterise location, duration, onset, severity and pattern',
        'Ask about cyclical, ovulatory, coital, bladder, bowel, postural and exercise relationships',
        'Review bleeding, discharge, dyspareunia, dyschezia and urinary symptoms',
        'Review surgery, caesarean, endometriosis, infection, trauma and pregnancy history',
        'Screen for red flags and systemic features',
        'Examine abdomen, scars, hernias and abdominal wall',
        'Perform a consented pelvic and musculoskeletal assessment as indicated',
      ],
      bullets: [
        'Pain: location, duration, onset, severity and pattern.',
        'Cycle: relationship to menstruation, ovulation or intercourse.',
        'Function: relation to bladder filling/voiding, bowel movements, food, posture and exercise.',
        'Gynaecological: bleeding pattern, vaginal discharge, dyspareunia, dyschezia, dysuria, urgency/frequency.',
        'Surgical History: previous pelvic surgery, caesarean section, endometriosis, infection, trauma and pregnancy history.',
        'Systemic: bowel and urinary symptoms, weight loss, rectal bleeding, haematuria, fever or systemic features.',
        'Impact: sleep, fatigue, mood, sexual function, daily life and prior treatment response.',
        'Abdominal Examination: general assessment, scars, hernias, focal trigger points and Carnett-type abdominal wall assessment where appropriate.',
        'Pelvic Examination: with consent, assess vulva, vaginal walls, cervix, pelvic floor tone/tenderness, uterine mobility, adnexal masses/tenderness and posterior fornix/nodularity.',
        'Musculoskeletal: assess hips, spine and pelvic girdle as indicated.',
        'Trauma-Informed Care: allow the patient to pause or decline parts of the examination.',
        'Red Flags: acute severe pain, pregnancy possibility, fever/sepsis, palpable mass, postmenopausal bleeding, unexplained weight loss, haematuria, rectal bleeding or suspected malignancy.',
      ],
      table: {
        head: ['Red flag', 'Why it matters'],
        rows: [
          ['Acute severe pain', 'Ectopic pregnancy, torsion, rupture, infection or other emergency'],
          ['Fever/sepsis', 'Pelvic inflammatory disease or abscess'],
          ['Palpable mass', 'Tumour, abscess or complex adnexal pathology'],
          ['Postmenopausal bleeding', 'Endometrial malignancy pathway'],
          ['Unexplained weight loss', 'Malignancy, chronic infection or systemic disease'],
          ['Haematuria or rectal bleeding', 'Urological or gastrointestinal pathology'],
        ],
      },
      pearls: [
        'Golden Pearl: red flags take the patient out of the routine chronic-pain pathway.',
        'A normal pelvic examination does not exclude endometriosis or non-gynaecological pain.',
        'Use a trauma-informed approach and allow the patient to decline parts of the examination.',
      ],
      trap: {
        title: 'Examiner trap - treating chronic pelvic pain as automatically benign',
        body: 'Acute severe pain, pregnancy possibility, fever, a mass, postmenopausal bleeding, weight loss, haematuria or rectal bleeding require prompt investigation rather than routine chronic-pain management.',
      },
      traps: [
        {
          title: '• Omitting a pregnancy test in a reproductive-age patient.',
        },
        {
          title: '• Forgetting the abdominal wall examination.',
        },
        {
          title: '• Performing an examination without consent or trauma awareness.',
        },
      ],
    },
    {
      id: 'investigations',
      heading: 'Investigations and the Place of Laparoscopy',
      intro:
        'Tests should answer a clinical question rather than be ordered as a fixed panel. Transvaginal ultrasound is a useful first-line pelvic investigation, but a normal scan does not exclude superficial endometriosis, pelvic floor dysfunction, IBS or neuropathic pain.',
      flow: [
        'Pregnancy test when pregnancy is possible',
        'Urinalysis/culture and STI testing where indicated',
        'Blood tests when infection, anaemia, inflammation or systemic disease is suspected',
        'Transvaginal ultrasound for uterine/adnexal pathology, adenomyosis, endometrioma and selected deep endometriosis',
        'MRI for selected deep endometriosis, adenomyosis, complex masses or unclear anatomy',
        'Cystoscopy or bowel investigation for red flags and the clinical differential',
        'Laparoscopy only when clinically indicated, with realistic counselling',
      ],
      bullets: [
        'Pregnancy Test: in reproductive-age patients when pregnancy is possible.',
        'Urine: urinalysis/culture for urinary symptoms; STI testing where risk or symptoms indicate.',
        'Bloods: CBC, inflammatory markers or other tests when infection, anaemia, inflammation or systemic disease is suspected.',
        'TVS: useful first-line pelvic investigation for uterine/adnexal pathology, adenomyosis, endometrioma and selected deep endometriosis.',
        'Normal TVS: does not exclude superficial endometriosis, pelvic floor dysfunction, IBS or neuropathic pain.',
        'MRI: may be useful for selected deep endometriosis, adenomyosis, complex masses or unclear anatomy.',
        'Cystoscopy/Bowel Tests: driven by urinary/bowel red flags and the clinical differential.',
        'Laparoscopy Role: may diagnose and treat endometriosis or selected pathology when clinically indicated.',
        'Not Reflexive: should not be offered to every woman with chronic pelvic pain; it can be negative and may create further adhesions.',
        'Counselling: explain benefits, risks, the possibility of no visible pathology and the chance that pain may persist after surgery.',
      ],
      table: {
        head: ['Investigation', 'Best use', 'Limitation'],
        rows: [
          ['Pregnancy test', 'Reproductive-age patient with possible pregnancy', 'Must not be omitted'],
          ['Urinalysis/culture', 'Urinary symptoms; exclude infection', 'Negative culture does not exclude BPS'],
          ['TVS', 'Uterine/adnexal pathology, adenomyosis, endometrioma', 'Does not exclude superficial endometriosis'],
          ['MRI', 'Selected deep endometriosis, complex masses, unclear anatomy', 'Not a routine first-line test for all'],
          ['Laparoscopy', 'Diagnosis and treatment when clinically indicated', 'Can be negative; may create adhesions'],
        ],
      },
      pearls: [
        'Golden Pearl: a normal TVS does not exclude superficial endometriosis or non-gynaecological pain.',
        'Laparoscopy is not a reflex test for every woman with chronic pelvic pain.',
        'A negative laparoscopy does not invalidate the pain.',
      ],
      trap: {
        title: 'Examiner trap - offering laparoscopy to every patient with chronic pelvic pain',
        body: 'Laparoscopy can be negative, may create adhesions and may not relieve centrally maintained pain. Reserve it for a clear clinical indication and counsel realistically about the possibility of no visible pathology.',
      },
      traps: [
        {
          title: '• Ordering a fixed panel of tests without a clinical question.',
        },
        {
          title: '• Excluding endometriosis on a normal ultrasound.',
        },
        {
          title: '• Repeating negative laparoscopies without a new indication.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Multidisciplinary and Stepwise Management',
      intro:
        'Management begins with explaining the pain model and agreeing realistic, function-focused goals. Treat identifiable causes, trial hormonal suppression for cyclical pain when appropriate, use opioid-sparing analgesia and address psychological, pelvic floor and musculoskeletal contributors.',
      flow: [
        'Explain the pain model and validate the pain',
        'Agree goals around function, sleep, mobility and sexual wellbeing',
        'Treat identifiable causes such as endometriosis, PID, IBS or bladder pain syndrome',
        'Consider a 3-6 month hormonal trial for cyclical pain before laparoscopy when appropriate',
        'Use NSAIDs and neuropathic agents according to phenotype and safety',
        'Add pelvic floor physiotherapy, graded activity, sleep care and CBT',
        'Refer complex or refractory patients to a multidisciplinary team',
      ],
      bullets: [
        'Explanation: validate the pain and explain that several mechanisms may contribute.',
        'Goals: function, sleep, mobility, sexual wellbeing and reduced flare severity, not always complete elimination of pain.',
        'Diary: use a symptom/pain and menstrual diary where helpful.',
        'Endometriosis/Adenomyosis: appropriate hormonal suppression, analgesia and specialist review.',
        'PID: antibiotics according to current infection guidance and partner management where indicated.',
        'IBS: bowel-directed management.',
        'Bladder Pain Syndrome: bladder/pelvic-floor-directed care.',
        'Musculoskeletal/Pelvic Floor: specialised physiotherapy.',
        'Hormonal Trial: in cyclical pain with suspected endometriosis, a 3-6 month trial may be considered before diagnostic laparoscopy when appropriate and no red flags require earlier investigation.',
        'Hormonal Options: combined hormonal contraception or progestogen therapy, selected according to contraindications and preference.',
        'Response Caveat: treatment response does not prove a specific diagnosis, and lack of response does not exclude endometriosis.',
        'NSAIDs: may help dysmenorrhoea/inflammatory pain when safe.',
        'Opioids: avoid long-term escalation where possible because of dependence, tolerance, constipation and opioid-induced hyperalgesia.',
        'Neuropathic Agents: amitriptyline, gabapentin/pregabalin or duloxetine may be considered in selected patients according to pain phenotype and prescribing guidance.',
        'Psychological/Physical: pelvic floor physiotherapy, graded activity, pacing, sleep interventions and CBT/psychological pain therapy may improve function.',
        'Pain Programmes: may help where pain is persistent and disabling.',
        'Botulinum Toxin: reserved for selected refractory pelvic floor disorders; not routine treatment for all chronic pelvic pain.',
        'Referral: suspected malignancy, complex endometriosis, significant bladder/bowel disease, severe neuropathic pain, persistent unexplained pain or major functional impairment.',
        'Team: gynaecology, pain medicine, pelvic floor physiotherapy, urology, gastroenterology and psychological support.',
      ],
      table: {
        head: ['Target', 'Intervention'],
        rows: [
          ['Explanation and goals', 'Validate pain; focus on function and flare reduction'],
          ['Identifiable cause', 'Treat endometriosis, PID, IBS, BPS or musculoskeletal pain'],
          ['Cyclical pain', '3-6 month hormonal trial when appropriate'],
          ['Pain phenotype', 'NSAIDs; neuropathic agents in selected patients; avoid opioid escalation'],
          ['Function and distress', 'Pelvic floor physiotherapy, graded activity, sleep care and CBT'],
          ['Complex/refractory', 'Multidisciplinary referral'],
        ],
      },
      pearls: [
        'Golden Pearl: a 3-6 month hormonal trial may precede laparoscopy for cyclical pain when appropriate.',
        'Treatment response does not prove a diagnosis, and lack of response does not exclude endometriosis.',
        'Function-based goals and multidisciplinary care are central.',
      ],
      trap: {
        title: 'Examiner trap - escalating opioids for chronic pelvic pain',
        body: 'Long-term opioid escalation risks dependence, tolerance, constipation and opioid-induced hyperalgesia. Use opioid-sparing strategies and phenotype-appropriate neuropathic agents instead.',
      },
      traps: [
        {
          title: '• Promising complete pain elimination as the only success.',
        },
        {
          title: '• Using hormonal response as a diagnostic test.',
        },
        {
          title: '• Offering botulinum toxin routinely to every patient.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'Chronic pelvic pain is a symptom, commonly defined as pain for at least 6 months.',
        'It is not exclusively related to menstruation, intercourse or pregnancy.',
        'Cyclical pain suggests endometriosis or adenomyosis but does not exclude other disease.',
        'Pain severity in endometriosis does not correlate reliably with disease burden.',
        'A normal TVS does not exclude superficial endometriosis.',
        'Pelvic venous congestion may cause positional/postcoital heaviness.',
        'Imaging alone does not establish pelvic venous pain causation.',
        'Residual ovary = tissue unintentionally left after attempted oophorectomy.',
        'Trapped ovary = retained ovary buried in adhesions.',
        'Ilioinguinal/iliohypogastric entrapment is a neuropathic cause after lower abdominal surgery.',
        'Rome III uses pain/discomfort at least 3 days/month and 2 of 3 stool associations.',
        'Rome IV uses pain on average at least 1 day/week and onset at least 6 months earlier.',
        'A 3-6 month hormonal trial may precede laparoscopy for cyclical pain when appropriate.',
        'A negative laparoscopy does not invalidate pain.',
        'Avoid repeated surgery without a clear indication.',
        'Avoid long-term opioid escalation.',
        'Neuropathic agents are selected by pain phenotype.',
        'Pelvic floor physiotherapy and graded activity can improve function.',
        'Multidisciplinary treatment and function-based goals are central.',
        'Red flags require prompt assessment, not the routine chronic-pain pathway.',
      ],
      traps: [
        {
          title: '• Dismissing pain because scans are normal.',
        },
        {
          title: '• Forcing a single-organ diagnosis.',
        },
        {
          title: '• Swapping residual and trapped ovary syndromes.',
        },
        {
          title: '• Mixing Rome III and Rome IV.',
        },
        {
          title: '• Offering laparoscopy reflexively.',
        },
        {
          title: '• Reoperating without a clear indication.',
        },
        {
          title: '• Escalating opioids long term.',
        },
        {
          title: '• Missing red flags such as postmenopausal bleeding or haematuria.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm23-f1',
      front: 'How is chronic pelvic pain defined?',
      back: 'Persistent or recurrent pelvic/lower abdominal pain in a woman, generally for at least 6 months, not exclusively related to menstruation, intercourse or pregnancy. It is a symptom complex, not a single diagnosis.',
    },
    {
      id: 'm23-f2',
      front: 'Name the four overlapping pain mechanisms in chronic pelvic pain.',
      back: 'Visceral, somatic/musculoskeletal, neuropathic and nociplastic/central sensitisation.',
    },
    {
      id: 'm23-f3',
      front: 'What clinical features suggest neuropathic pelvic pain?',
      back: 'Burning, electric, shooting or tingling pain, often with allodynia, numbness or altered sensation, and sometimes following abdominal incision, port placement, pelvic surgery or scar formation.',
    },
    {
      id: 'm23-f4',
      front: 'Which imaging finding does NOT exclude superficial peritoneal endometriosis?',
      back: 'A normal pelvic ultrasound. TVS is useful for endometrioma and adenomyosis but cannot exclude superficial peritoneal disease.',
    },
    {
      id: 'm23-f5',
      front: 'Distinguish residual ovary syndrome from trapped ovary syndrome.',
      back: 'Residual ovary = ovarian tissue unintentionally left after an attempted oophorectomy. Trapped ovary = an intentionally retained ovary enclosed or buried in dense adhesions.',
    },
    {
      id: 'm23-f6',
      front: 'Which nerves are commonly entrapped after lower abdominal surgery, and what is the clue?',
      back: 'Ilioinguinal and iliohypogastric nerves. Clues include burning/shooting pain in the lower abdomen, groin, mons/labia or upper medial thigh, worsened by coughing, hip extension or scar pressure, with a Tinel-like trigger point.',
    },
    {
      id: 'm23-f7',
      front: 'State the Rome III criteria for IBS.',
      back: 'Recurrent abdominal pain or discomfort at least 3 days per month during the preceding 3 months, with at least 2 of: improvement with defecation, onset with changed stool frequency, or onset with changed stool form. Onset at least 6 months earlier.',
    },
    {
      id: 'm23-f8',
      front: 'How does Rome IV differ from Rome III for IBS?',
      back: 'Rome IV uses recurrent abdominal pain on average at least 1 day per week in the last 3 months with two of the same associations, and onset at least 6 months earlier. Rome III uses pain/discomfort at least 3 days per month.',
    },
    {
      id: 'm23-f9',
      front: 'What is a Carnett-type assessment used for?',
      back: 'To help distinguish abdominal wall pain from visceral pain by assessing whether tenderness worsens with abdominal wall contraction.',
    },
    {
      id: 'm23-f10',
      front: 'What is the role of laparoscopy in chronic pelvic pain?',
      back: 'It may diagnose and treat endometriosis or selected pathology when clinically indicated. It should not be offered reflexively, can be negative, may create adhesions and may not relieve centrally maintained pain.',
    },
    {
      id: 'm23-f11',
      front: 'When may a hormonal trial be used before laparoscopy?',
      back: 'In women with cyclical pain and suspected endometriosis, a 3-6 month trial of combined hormonal contraception or progestogen may be considered when appropriate and no red flags require earlier investigation.',
    },
    {
      id: 'm23-f12',
      front: 'Does a response to hormonal treatment prove endometriosis?',
      back: 'No. Treatment response does not prove a specific diagnosis, and lack of response does not exclude endometriosis.',
    },
    {
      id: 'm23-f13',
      front: 'Why should long-term opioid escalation be avoided?',
      back: 'Because of dependence, tolerance, constipation and opioid-induced hyperalgesia. Opioid-sparing and phenotype-appropriate strategies are preferred.',
    },
    {
      id: 'm23-f14',
      front: 'Which non-pharmacological interventions help chronic pelvic pain?',
      back: 'Pelvic floor physiotherapy, graded activity, pacing, sleep interventions and CBT/psychological pain therapy. Pain management programmes help selected patients with persistent disabling pain.',
    },
    {
      id: 'm23-f15',
      front: 'List red flags in chronic pelvic pain.',
      back: 'Acute severe pain, pregnancy possibility, fever/sepsis, palpable mass, postmenopausal bleeding, unexplained weight loss, haematuria, rectal bleeding or suspected malignancy.',
    },
  ],

  mcqs: [
    {
      id: 'm23-q1',
      stem: 'A 32-year-old woman has recurrent pelvic pain for 8 months, unrelated to menstruation, with normal examination and ultrasound. Which statement best describes chronic pelvic pain?',
      options: [
        'It is a single diagnosis that requires laparoscopy',
        'It is a symptom complex and may have overlapping mechanisms',
        'Normal investigations exclude a real pain problem',
        'It is defined as pain present for at least 3 months',
      ],
      answerIndex: 1,
      explanation:
        'Chronic pelvic pain is a symptom complex, generally defined as pain for at least 6 months and not exclusively related to menstruation, intercourse or pregnancy. Normal investigations do not exclude it, and multiple mechanisms may coexist.',
    },
    {
      id: 'm23-q2',
      stem: 'A patient describes burning and electric pain in the groin and upper medial thigh after a caesarean section, with a trigger point near the scar. Which mechanism is most likely?',
      options: ['Visceral pain', 'Neuropathic nerve entrapment', 'Nociplastic pain only', 'Pelvic venous congestion'],
      answerIndex: 1,
      explanation:
        'Burning/electric pain in an ilioinguinal or iliohypogastric distribution with a trigger point after lower abdominal surgery suggests neuropathic nerve entrapment. A local anaesthetic block can support the diagnosis.',
    },
    {
      id: 'm23-q3',
      stem: 'A woman has cyclic pelvic pain and suspected endometriosis with no red flags. What is a reasonable next step before diagnostic laparoscopy?',
      options: [
        'Immediate hysterectomy',
        'A 3-6 month trial of hormonal suppression',
        'Long-term opioid therapy',
        'Repeated ultrasound every week',
      ],
      answerIndex: 1,
      explanation:
        'A 3-6 month hormonal trial may be considered for cyclical pain with suspected endometriosis before laparoscopy when appropriate. Response does not prove the diagnosis, and lack of response does not exclude it.',
    },
    {
      id: 'm23-q4',
      stem: 'A woman had an attempted oophorectomy 4 years ago and now has a painful cystic pelvic mass with persistent hormonal activity. What is the most likely diagnosis?',
      options: ['Trapped ovary syndrome', 'Residual ovary syndrome', 'Adenomyosis', 'Bladder pain syndrome'],
      answerIndex: 1,
      explanation:
        'Residual ovary syndrome is ovarian tissue unintentionally left after an attempted oophorectomy. The remnant may become cystic, hormonally active or adherent. Trapped ovary syndrome refers to a deliberately retained ovary enclosed by adhesions.',
    },
    {
      id: 'm23-q5',
      stem: 'A retained ovary after hysterectomy becomes tethered to the vaginal cuff by dense adhesions. What is this called?',
      options: ['Residual ovary syndrome', 'Trapped ovary syndrome', 'Ovarian remnant syndrome', 'Asherman syndrome'],
      answerIndex: 1,
      explanation:
        'Trapped ovary syndrome is an intentionally retained ovary that becomes enclosed or buried in adhesions, sometimes tethering to the pelvic sidewall, bowel or vaginal cuff.',
    },
    {
      id: 'm23-q6',
      stem: 'Which set of features fits Rome III rather than Rome IV for IBS?',
      options: [
        'Pain at least 1 day per week for 3 months',
        'Pain or discomfort at least 3 days per month for 3 months with 2 of 3 stool associations',
        'Pain only with defecation',
        'Pain lasting less than 6 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Rome III uses recurrent abdominal pain or discomfort at least 3 days per month during the preceding 3 months with at least 2 of 3 stool-related associations and onset at least 6 months earlier. Rome IV uses pain on average at least 1 day per week.',
    },
    {
      id: 'm23-q7',
      stem: 'Which investigation is most appropriate first-line for suspected adenomyosis and endometrioma?',
      options: ['CT abdomen', 'Transvaginal ultrasound', 'Diagnostic laparoscopy', 'MRI in every patient'],
      answerIndex: 1,
      explanation:
        'Transvaginal ultrasound is a useful first-line pelvic investigation for uterine/adnexal pathology, adenomyosis and endometrioma. MRI is reserved for selected cases, and laparoscopy is not reflexive.',
    },
    {
      id: 'm23-q8',
      stem: 'A 45-year-old woman has chronic pelvic pain with new postmenopausal bleeding. What is the most appropriate approach?',
      options: [
        'Reassure and continue chronic pain management',
        'Investigate the postmenopausal bleeding promptly for endometrial pathology',
        'Start a 6-month hormonal trial',
        'Repeat ultrasound in 12 months',
      ],
      answerIndex: 1,
      explanation:
        'Postmenopausal bleeding is a red flag requiring prompt investigation for endometrial pathology, rather than routine chronic-pain management.',
    },
    {
      id: 'm23-q9',
      stem: 'Which statement about pelvic venous congestion is correct?',
      options: [
        'Imaging evidence of varicosities alone proves it is the pain cause',
        'It may cause dull heaviness worse on standing or after intercourse, but clinical correlation is essential',
        'It is diagnosed by laparoscopy only',
        'It is always an indication for hysterectomy',
      ],
      answerIndex: 1,
      explanation:
        'Pelvic venous congestion may cause dull, heavy pelvic ache worse after prolonged standing, late in the day or after intercourse. Imaging findings alone do not prove causation; clinical correlation is essential.',
    },
    {
      id: 'm23-q10',
      stem: 'Which management principle is central to chronic pelvic pain?',
      options: [
        'Complete elimination of pain is the only acceptable goal',
        'Multidisciplinary, function-based care with opioid-sparing analgesia',
        'Laparoscopy for every patient before any medical treatment',
        'Long-term escalating opioids',
      ],
      answerIndex: 1,
      explanation:
        'Care is multidisciplinary and stepwise, with goals around function, sleep, mobility and sexual wellbeing. Opioid escalation is avoided; hormonal, neuropathic, physical and psychological approaches are selected by phenotype.',
    },
  ],
};
