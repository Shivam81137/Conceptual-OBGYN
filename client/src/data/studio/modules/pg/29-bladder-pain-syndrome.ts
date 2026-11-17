import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 29 - Bladder Pain Syndrome
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten benign gynaecology notes (obygn pdf,
 * pages 37-38) and organised around RCOG Green-top Guideline No. 70.
 *
 * Covers:
 * - Definition and the AUA vs ESSIC duration frameworks
 * - The symptom pattern and pain related to bladder filling
 * - Dietary/lifestyle triggers and overlapping pain syndromes
 * - History and trauma-informed examination
 * - Investigations and exclusion of mimics
 * - Selective cystoscopy, Hunner lesions and glomerulations
 * - Stepwise multimodal management
 * - Follow-up, referral and red flags
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const BLADDER_PAIN_SYNDROME_MODULE: StudioModule = {
  id: 'pg-mod-29-bladder-pain-syndrome',
  track: 'NEET_PG',
  title: 'Bladder Pain Syndrome: RCOG GTG 70',
  shortTitle: 'Bladder Pain Syndrome',
  summary:
    'Complete PG clinical revision module on bladder pain syndrome following RCOG Green-top Guideline No. 70. Features the definition of bladder-related pain with lower urinary tract symptoms in the absence of infection or another adequate cause, the AUA more-than-6-weeks versus ESSIC at-least-6-months duration frameworks, pain that worsens with filling and may improve after voiding in about 90%, dietary triggers such as caffeine, alcohol, citrus and spicy foods, overlapping IBS, vulvodynia, endometriosis and fibromyalgia, trauma-informed history and examination, urine culture and haematuria evaluation, selective cystoscopy with Hunner lesions versus nonspecific glomerulations, pelvic floor down-training rather than automatic Kegels, oral therapies including amitriptyline, hydroxyzine, cimetidine and pentosan polysulfate with its macular risk, intravesical and specialist options, follow-up and referral red flags, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Pain with filling, culture-negative, multimodal — and GTG 70 not 48.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 35,
  tags: [
    'RCOG GTG 70',
    'Bladder Pain Syndrome',
    'Interstitial Cystitis',
    'AUA 6 Weeks',
    'ESSIC 6 Months',
    'Pain Relieved by Voiding',
    'Hunner Lesion',
    'Glomerulations',
    'Pelvic Floor Down-Training',
    'Amitriptyline',
    'Pentosan Maculopathy',
    'Haematuria Red Flag',
  ],
  sourceTag:
    'Handwritten benign gynaecology revision (obygn pdf, pp. 37-38) • RCOG Green-top Guideline No. 70',
  updatedAtISO: '2026-11-14T17:00:00.000Z',
  notes: [
    {
      id: 'definition',
      heading: 'Definition and Duration Frameworks',
      intro:
        'Bladder pain syndrome (BPS), often discussed with the term interstitial cystitis/bladder pain syndrome (IC/BPS), is a chronic condition characterised by pain, pressure or discomfort perceived to be related to the urinary bladder, usually with lower urinary tract symptoms such as urgency and frequency, in the absence of infection or another identifiable cause that adequately explains the symptoms.',
      flow: [
        'Identify bladder-related pain, pressure or discomfort',
        'Document accompanying urgency and frequency',
        'Exclude infection and other identifiable causes',
        'Note the duration framework being used',
        'Recognise BPS as a clinical syndrome and diagnosis of exclusion',
        'State the framework when answering an exam question',
      ],
      bullets: [
        'Core Definition: bladder-related pain/pressure/discomfort with lower urinary tract symptoms and no infection or other adequate cause.',
        'AUA Framework: symptoms for more than 6 weeks in the absence of infection or another cause.',
        'ESSIC Definition: chronic bladder-related pain for at least 6 months with urinary symptoms and no infection/other obvious cause.',
        'Source Notes: use a duration range of more than 6 weeks to several months.',
        'Diagnosis of Exclusion: there is no single definitive blood test, urine test or cystoscopic finding that confirms every case.',
        'Exam Tip: state which duration framework is being used.',
      ],
      table: {
        head: ['Framework', 'Duration'],
        rows: [
          ['AUA', 'Symptoms for more than 6 weeks'],
          ['ESSIC', 'Chronic bladder-related pain for at least 6 months'],
          ['Source notes', 'More than 6 weeks to several months'],
        ],
      },
      pearls: [
        'Golden Pearl: BPS is bladder-related pain with lower urinary tract symptoms and no infection or other adequate cause.',
        'AUA duration is often more than 6 weeks; ESSIC uses at least 6 months.',
        'BPS is a diagnosis of exclusion.',
      ],
      trap: {
        title: 'Examiner trap - quoting one universal duration criterion',
        body: 'Duration definitions vary. The AUA framework has used more than 6 weeks, while ESSIC uses at least 6 months. State which framework you are using rather than presenting one as universal.',
      },
      traps: [
        {
          title: '• Calling every culture-negative dysuria BPS without excluding other causes.',
        },
        {
          title: '• Mixing the AUA and ESSIC duration criteria.',
        },
        {
          title: '• Expecting one definitive diagnostic test.',
        },
      ],
    },
    {
      id: 'symptom-pattern',
      heading: 'Symptom Pattern',
      intro:
        'The typical patient has suprapubic, pelvic, urethral, vaginal or perineal pain or pressure perceived to be related to bladder filling, together with frequency, urgency and nocturia. Pain may increase as the bladder fills and improve temporarily after voiding.',
      flow: [
        'Characterise pain location, quality and severity',
        'Ask about relation to bladder filling and voiding',
        'Ask about frequency, urgency and nocturia',
        'Ask about dyspareunia and post-coital pain',
        'Note fluctuation with menstruation, stress and diet',
        'Screen for other pain disorders',
      ],
      bullets: [
        'Pain Location: suprapubic, pelvic, urethral, vaginal or perineal pain/pressure.',
        'Filling: pain may increase as the bladder fills.',
        'Voiding: pain may improve temporarily after voiding.',
        'Voiding Pattern: patients may void frequently to avoid pain rather than because the bladder is full.',
        'Urinary Symptoms: frequency, urgency and nocturia.',
        'Sexual: dyspareunia or pain after intercourse may coexist.',
        'Fluctuation: symptoms can vary with menstruation, stress, diet and other pain disorders.',
        'Source Note: pain is relieved by voiding in about 90% of patients; this is a pattern clue, not a required criterion.',
      ],
      table: {
        head: ['Feature', 'Typical BPS pattern'],
        rows: [
          ['Pain', 'Suprapubic/pelvic/urethral/perineal, related to filling'],
          ['Voiding', 'May relieve pain temporarily'],
          ['Frequency', 'Often increased; may be to avoid pain'],
          ['Urgency/nocturia', 'Common'],
          ['Sexual pain', 'Dyspareunia may coexist'],
          ['Course', 'Fluctuating'],
        ],
      },
      pearls: [
        'Golden Pearl: pain commonly worsens with bladder filling and may improve after voiding.',
        'The source notes quote relief by voiding in about 90%.',
        'Pain, not urgency alone, distinguishes BPS from uncomplicated overactive bladder.',
      ],
      trap: {
        title: 'Examiner trap - diagnosing BPS from frequency and urgency alone',
        body: 'Urgency and frequency are common but pain is the defining feature that distinguishes BPS from uncomplicated overactive bladder. A required pain-filling-voiding pattern is a clue, not an absolute criterion.',
      },
      traps: [
        {
          title: '• Ignoring the relation of pain to bladder filling.',
        },
        {
          title: '• Assuming all patients have complete relief after voiding.',
        },
        {
          title: '• Missing dyspareunia and pelvic floor involvement.',
        },
      ],
    },
    {
      id: 'triggers-comorbidities',
      heading: 'Triggers and Associated Conditions',
      intro:
        'Patients commonly report dietary and lifestyle triggers, and BPS frequently overlaps with other chronic pain and functional syndromes. Individual triggers vary, so use a symptom/food diary and test one change at a time.',
      flow: [
        'Ask about caffeine, alcohol, citrus, acidic and spicy foods',
        'Ask about carbonated drinks and artificial sweeteners',
        'Ask about stress, sleep and menstruation',
        'Screen for IBS and bowel symptoms',
        'Screen for vulvodynia, endometriosis and pelvic floor pain',
        'Screen for fibromyalgia, migraine, anxiety and depression',
        'Avoid imposing a highly restrictive diet on every patient',
      ],
      bullets: [
        'Caffeine: coffee, tea and cola.',
        'Other Drinks: carbonated beverages and alcohol.',
        'Foods: citrus fruits/juices, acidic foods, spicy foods and artificial sweeteners.',
        'Other Factors: stress, sleep disruption, menstruation and sexual activity.',
        'IBS: irritable bowel syndrome commonly coexists.',
        'Pelvic Pain: vulvodynia, pelvic floor myalgia, endometriosis and chronic pelvic pain.',
        'Widespread Pain: fibromyalgia and chronic widespread pain.',
        'Other: migraine, fatigue, anxiety, depression and sleep disturbance.',
        'Mechanism: overlapping pain-processing mechanisms may explain coexistence, but do not prove the bladder is the only source.',
      ],
      table: {
        head: ['Domain', 'Examples'],
        rows: [
          ['Drinks', 'Coffee, tea, cola, carbonated drinks, alcohol'],
          ['Foods', 'Citrus, acidic foods, spicy foods, artificial sweeteners'],
          ['Other triggers', 'Stress, sleep disruption, menstruation, sexual activity'],
          ['Comorbidities', 'IBS, vulvodynia, endometriosis, fibromyalgia, migraine, anxiety/depression'],
        ],
      },
      pearls: [
        'Golden Pearl: IBS, vulvodynia, endometriosis and fibromyalgia frequently coexist with BPS.',
        'Coffee, tea, cola, alcohol, citrus and spicy foods may trigger flares in some patients.',
        'Use a diary and change one thing at a time rather than imposing severe restriction.',
      ],
      trap: {
        title: 'Examiner trap - attributing all pelvic pain to the bladder',
        body: 'Overlapping IBS, vulvodynia, endometriosis and fibromyalgia may reflect shared pain-processing mechanisms. Coexistence does not prove that the bladder is the only source of pain.',
      },
      traps: [
        {
          title: '• Placing every patient on a highly restrictive diet.',
        },
        {
          title: '• Missing endometriosis because the bladder symptoms dominate.',
        },
        {
          title: '• Ignoring anxiety, sleep and mood as part of the pain picture.',
        },
      ],
    },
    {
      id: 'history-examination',
      heading: 'History and Examination',
      intro:
        'A careful history characterises the pain, its relationship to bladder function and its impact on life. Examination is targeted and trauma-informed, with consent and without unnecessary painful repetition.',
      flow: [
        'Characterise duration, location, quality and severity of pain',
        'Ask about filling, voiding and urinary frequency',
        'Ask about urgency, nocturia, dysuria, haematuria and recurrent UTI',
        'Ask about sexual, vaginal, menstrual, bowel and pelvic floor symptoms',
        'Review diet, fluids, caffeine, alcohol and stress',
        'Review surgical, obstetric, infection and medication history',
        'Assess functional impact, sleep, work, mental health and goals',
        'Examine abdomen and pelvis with consent',
      ],
      bullets: [
        'Pain: duration, location, quality and severity.',
        'Bladder Relation: filling, voiding and urinary frequency.',
        'Urinary: urgency, nocturia, urge incontinence, dysuria, haematuria and recurrent UTI history.',
        'Associated: sexual pain, vaginal symptoms, menstrual/cyclical symptoms, bowel symptoms and pelvic floor symptoms.',
        'Triggers: dietary, fluid, caffeine, alcohol and stress triggers.',
        'History: previous pelvic surgery, childbirth, infections, catheterisation, trauma and medication.',
        'Impact: function, sleep, work, mental health and patient goals.',
        'Abdominal Examination: suprapubic tenderness, masses, hernia or abdominal wall trigger points.',
        'Pelvic Examination: with consent for atrophy, vulvovaginal conditions, pelvic floor tenderness/hypertonicity, prolapse, cervical/adnexal pathology and pain distribution.',
        'Trauma-Informed: avoid painful or repeated examinations without a clear clinical purpose.',
      ],
      table: {
        head: ['History domain', 'Key questions'],
        rows: [
          ['Pain', 'Duration, location, quality, severity, relation to filling/voiding'],
          ['Urinary', 'Frequency, urgency, nocturia, dysuria, haematuria, UTI history'],
          ['Associated', 'Sexual pain, bowel, menstrual, pelvic floor symptoms'],
          ['Triggers', 'Caffeine, alcohol, citrus, stress'],
          ['Impact', 'Sleep, work, mood, function and goals'],
        ],
      },
      pearls: [
        'Golden Pearl: use a trauma-informed approach and obtain consent for pelvic examination.',
        'Ask about haematuria and recurrent culture-positive UTI because they change the differential.',
        'Avoid painful or repeated examinations without a clear purpose.',
      ],
      trap: {
        title: 'Examiner trap - performing an aggressive pelvic examination on a patient with severe pain',
        body: 'Examination should be targeted, consented and trauma-informed. Avoid painful or repeated examinations without a clear clinical purpose; they can worsen distress and yield little additional information.',
      },
      traps: [
        {
          title: '• Failing to ask about haematuria.',
        },
        {
          title: '• Missing bowel and sexual symptoms.',
        },
        {
          title: '• Forgetting the impact on sleep, work and mood.',
        },
      ],
    },
    {
      id: 'investigations',
      heading: 'Investigations and Excluding Mimics',
      intro:
        'Initial tests aim to exclude infection, stones, malignancy and other structural or inflammatory causes. Cystoscopy is selective rather than mandatory at first assessment.',
      flow: [
        'Perform urinalysis and urine culture',
        'Test for STIs when risk, exposure or symptoms indicate',
        'Perform a pregnancy test when pregnancy is possible',
        'Arrange cytology and haematuria pathway assessment when indicated',
        'Image the renal tract when stones, obstruction or mass is suspected',
        'Consider cystoscopy for diagnostic uncertainty, haematuria, Hunner lesion or treatment planning',
        'Reserve biopsy for suspicious lesions or a specific indication',
      ],
      bullets: [
        'Urine: urinalysis and culture to exclude bacterial UTI.',
        'STI Testing: where risk, exposure or symptoms indicate.',
        'Pregnancy Test: in reproductive-age patients when pregnancy is possible.',
        'Cytology: urine cytology and haematuria pathway assessment when indicated by age, risk factors or visible/persistent microscopic haematuria.',
        'Imaging: renal/bladder ultrasound or other imaging where stones, obstruction, mass or structural disease is suspected.',
        'Differential: recurrent bacterial UTI, urethritis/STI, bladder or ureteric stone, bladder malignancy, overactive bladder, urethral diverticulum, endometriosis, vulvodynia, pelvic floor myofascial pain, genitourinary syndrome of menopause and IBS.',
        'Cystoscopy: not every patient requires it at initial assessment.',
        'Cystoscopy Indications: diagnostic uncertainty, haematuria, suspected Hunner lesion, treatment planning or exclusion of other pathology.',
        'Hunner Lesions: a recognised cystoscopic phenotype that may guide treatment.',
        'Glomerulations: nonspecific; their absence does not exclude BPS.',
        'Biopsy: reserved for suspicious lesions or another specific indication, not routine confirmation of BPS.',
      ],
      table: {
        head: ['Test / finding', 'Role'],
        rows: [
          ['Urine culture', 'Exclude bacterial UTI'],
          ['STI testing', 'When risk, exposure or symptoms indicate'],
          ['Urine cytology', 'When haematuria or risk factors indicate'],
          ['Ultrasound/imaging', 'Suspected stones, obstruction, mass or structural disease'],
          ['Cystoscopy', 'Selective: uncertainty, haematuria, Hunner lesion, treatment planning'],
          ['Hunner lesion', 'Recognised phenotype guiding treatment'],
          ['Glomerulations', 'Nonspecific; absence does not exclude BPS'],
        ],
      },
      pearls: [
        'Golden Pearl: urine culture is important to exclude infection; evaluate haematuria appropriately.',
        'Cystoscopy is selective; Hunner lesions are important, while glomerulations are nonspecific.',
        'Biopsy is not routine for confirming BPS.',
      ],
      trap: {
        title: 'Examiner trap - using glomerulations to diagnose BPS',
        body: 'Glomerulations are nonspecific and their absence does not exclude BPS. There is no single cystoscopic finding that confirms every case; Hunner lesions are a recognised phenotype but are not present in all patients.',
      },
      traps: [
        {
          title: '• Diagnosing BPS without urine culture.',
        },
        {
          title: '• Missing bladder cancer in a patient with haematuria.',
        },
        {
          title: '• Performing cystoscopy on every patient at first visit.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management: Stepwise and Multimodal',
      intro:
        'There is no single curative treatment for all patients. Set goals around pain control, urinary function, sleep and quality of life, use shared decision-making and review response over time.',
      flow: [
        'Explain the condition and set functional goals',
        'Start education, bladder diary and trigger modification',
        'Assess the pelvic floor and consider physiotherapy',
        'Use simple or neuropathic pain strategies as appropriate',
        'Consider oral therapies with attention to adverse effects',
        'Reserve intravesical and invasive options for selected patients',
        'Treat overlapping comorbidities',
      ],
      bullets: [
        'Education: explain that symptoms fluctuate and several mechanisms may contribute.',
        'Diary: maintain a bladder/voiding diary recording pain, fluids, food triggers and flares.',
        'Trigger Reduction: trial individual reductions rather than universal severe restriction.',
        'Fluids: avoid both excessive intake and dehydration; individualise.',
        'Bladder Training: may help frequency but should not force prolonged holding when filling causes severe pain.',
        'Bowel: manage constipation and bowel comorbidity.',
        'Pelvic Floor Physiotherapy: assess hypertonicity, tenderness and trigger points; use myofascial release, relaxation and down-training.',
        'Avoid Automatic Kegels: repeated strengthening may worsen pain in a hypertonic pelvic floor.',
        'Pain Management: simple analgesia or anti-inflammatory medication when safe; consider neuropathic strategies for burning/central sensitisation under supervision.',
        'Opioids: avoid long-term escalation where possible.',
        'Sleep/Mood: treat as part of the pain plan.',
        'Oral Therapies: options may include amitriptyline, hydroxyzine, cimetidine or pentosan polysulfate depending on guideline, availability and patient profile.',
        'Amitriptyline: sedation, dry mouth and constipation.',
        'Hydroxyzine: sedation.',
        'Cimetidine: drug interactions.',
        'Pentosan Polysulfate: associated with pigmentary maculopathy; discuss uncertain benefit, cumulative exposure and eye monitoring.',
        'Intravesical: selected patients may receive lidocaine, heparin, DMSO or other local treatments depending on availability and guideline.',
        'Hunner Lesion Treatment: cystoscopic treatment may help the relevant phenotype.',
        'Invasive: neuromodulation, botulinum toxin and other approaches are reserved for selected refractory patients with specialist counselling.',
        'Comorbidity-Directed Care: manage IBS, endometriosis, vulvodynia/pelvic floor pain and fibromyalgia with appropriate specialist input.',
      ],
      table: {
        head: ['Step', 'Options'],
        rows: [
          ['Education/self-care', 'Explanation, bladder diary, trigger reduction, fluid balance, bowel care'],
          ['Pelvic floor', 'Assessment, myofascial release, relaxation/down-training'],
          ['Pain', 'Simple analgesia, neuropathic strategies, sleep/mood care'],
          ['Oral', 'Amitriptyline, hydroxyzine, cimetidine, pentosan polysulfate'],
          ['Intravesical/specialist', 'Lidocaine, heparin, DMSO, Hunner lesion treatment'],
          ['Refractory', 'Neuromodulation, botulinum toxin and other specialist options'],
        ],
      },
      pearls: [
        'Golden Pearl: treatment is multimodal and individualised; no single therapy cures all BPS.',
        'Pelvic floor relaxation/down-training may help; avoid automatic Kegel strengthening in hypertonicity.',
        'Pentosan polysulfate has been associated with pigmentary maculopathy.',
      ],
      trap: {
        title: 'Examiner trap - prescribing Kegel strengthening for every patient with pelvic pain',
        body: 'In a hypertonic, tender pelvic floor, repeated Kegel strengthening may worsen pain. Assess first and use relaxation, myofascial release and down-training where appropriate.',
      },
      traps: [
        {
          title: '• Forcing prolonged bladder holding despite severe pain.',
        },
        {
          title: '• Escalating long-term opioids.',
        },
        {
          title: '• Ignoring pentosan polysulfate eye safety.',
        },
        {
          title: '• Treating only the bladder and missing comorbidities.',
        },
      ],
    },
    {
      id: 'follow-up-referral',
      heading: 'Follow-Up and Referral',
      intro:
        'Review the symptom diary, urinary frequency, pain, sleep, medication effects and functional goals. Reconsider the diagnosis if new red flags develop and refer when diagnosis is uncertain or symptoms are refractory.',
      flow: [
        'Review diary, symptoms and functional goals',
        'Review medication effects and adherence',
        'Reconsider diagnosis if red flags appear',
        'Refer to urology/urogynaecology when indicated',
        'Provide psychological support where distress is substantial',
        'Coordinate comorbidity care',
      ],
      bullets: [
        'Review: symptom diary, urinary frequency, pain, sleep, medication effects and functional goals.',
        'Reconsider Diagnosis: if haematuria, fever, weight loss, new mass, recurrent culture-positive infection or new neurological symptoms develop.',
        'Refer: when diagnosis is uncertain, haematuria or structural pathology is suspected, symptoms are severe/refractory, Hunner lesions are suspected or invasive treatment is being considered.',
        'Psychological Support: provide where distress is substantial; this is an adjunct to, not a replacement for, physical assessment.',
      ],
      table: {
        head: ['Situation', 'Action'],
        rows: [
          ['Stable symptoms', 'Review diary, goals and medication effects'],
          ['Haematuria or new mass', 'Reconsider diagnosis and refer'],
          ['Fever or recurrent positive cultures', 'Evaluate for infection or other pathology'],
          ['Refractory/severe symptoms', 'Refer to urology/urogynaecology'],
          ['Suspected Hunner lesion', 'Specialist assessment'],
          ['Substantial distress', 'Offer psychological support alongside physical care'],
        ],
      },
      pearls: [
        'Golden Pearl: haematuria, fever, weight loss, new mass or recurrent positive cultures require evaluation for other pathology.',
        'Refer when diagnosis is uncertain or symptoms are severe/refractory.',
        'Psychological support is an adjunct, not a replacement for physical assessment.',
      ],
      trap: {
        title: 'Examiner trap - attributing new haematuria to a known BPS flare',
        body: 'Haematuria, fever, weight loss, a new mass, recurrent culture-positive infection or new neurological symptoms should prompt reconsideration of the diagnosis and appropriate referral, not automatic attribution to BPS.',
      },
      traps: [
        {
          title: '• Failing to review the diagnosis over time.',
        },
        {
          title: '• Omitting psychological support.',
        },
        {
          title: '• Delaying referral for refractory symptoms.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Fifteen rapid-fire points to lock in before the exam.',
      pearls: [
        'BPS is bladder-related pain/pressure with lower urinary tract symptoms and no infection or other adequate cause.',
        'AUA duration is often more than 6 weeks; ESSIC uses at least 6 months.',
        'State the duration framework when answering.',
        'Pain commonly worsens with bladder filling and may improve after voiding.',
        'Source notes quote relief by voiding in about 90%.',
        'Urgency/frequency are common, but pain distinguishes BPS from uncomplicated overactive bladder.',
        'IBS, vulvodynia, endometriosis and fibromyalgia frequently coexist.',
        'Coffee, tea, cola, alcohol, citrus and spicy foods may trigger flares.',
        'Urine culture is important to exclude infection.',
        'Evaluate haematuria appropriately.',
        'Cystoscopy is selective; Hunner lesions are important.',
        'Glomerulations are nonspecific and their absence does not exclude BPS.',
        'Pelvic floor relaxation/down-training may help; avoid automatic Kegels in hypertonicity.',
        'Pentosan polysulfate has been associated with pigmentary maculopathy.',
        'RCOG GTG 70 is BPS; GTG 48 is premenstrual syndrome.',
      ],
      traps: [
        {
          title: '• Quoting one universal duration criterion.',
        },
        {
          title: '• Diagnosing BPS without excluding infection.',
        },
        {
          title: '• Using glomerulations as a diagnostic test.',
        },
        {
          title: '• Prescribing Kegels to a hypertonic pelvic floor.',
        },
        {
          title: '• Forgetting pentosan polysulfate eye risk.',
        },
        {
          title: '• Attributing new haematuria to a BPS flare.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm29-f1',
      front: 'Define bladder pain syndrome.',
      back: 'A chronic condition with pain, pressure or discomfort perceived to be related to the urinary bladder, usually with urgency and frequency, in the absence of infection or another identifiable cause that adequately explains the symptoms.',
    },
    {
      id: 'm29-f2',
      front: 'What duration criteria are used for BPS?',
      back: 'The AUA framework has used more than 6 weeks, while ESSIC uses chronic bladder-related pain for at least 6 months. State which framework is being used.',
    },
    {
      id: 'm29-f3',
      front: 'What is the typical relationship between pain and bladder filling/voiding?',
      back: 'Pain often increases as the bladder fills and may improve temporarily after voiding. The source notes quote relief by voiding in about 90%, but this is a pattern clue rather than a required criterion.',
    },
    {
      id: 'm29-f4',
      front: 'How does BPS differ from uncomplicated overactive bladder?',
      back: 'Both cause urgency and frequency, but pain is the defining feature of BPS. Overactive bladder is characterised by urgency/frequency without primary bladder pain.',
    },
    {
      id: 'm29-f5',
      front: 'Which dietary and lifestyle triggers are commonly reported in BPS?',
      back: 'Coffee, tea, cola, carbonated drinks, alcohol, citrus, acidic foods, spicy foods, artificial sweeteners, stress, sleep disruption, menstruation and sexual activity. Triggers vary between patients.',
    },
    {
      id: 'm29-f6',
      front: 'Which conditions commonly coexist with BPS?',
      back: 'IBS, vulvodynia, pelvic floor myalgia, endometriosis, chronic pelvic pain, fibromyalgia, migraine, fatigue, anxiety, depression and sleep disturbance.',
    },
    {
      id: 'm29-f7',
      front: 'Which initial tests help exclude mimics of BPS?',
      back: 'Urinalysis and urine culture, STI testing when indicated, pregnancy test when relevant, urine cytology and haematuria pathway assessment when indicated, and renal/bladder imaging when stones, obstruction or mass is suspected.',
    },
    {
      id: 'm29-f8',
      front: 'When is cystoscopy indicated in suspected BPS?',
      back: 'Selectively, for diagnostic uncertainty, haematuria, suspected Hunner lesion, treatment planning or exclusion of other pathology. It is not mandatory at initial assessment.',
    },
    {
      id: 'm29-f9',
      front: 'What is the significance of Hunner lesions and glomerulations?',
      back: 'Hunner lesions are a recognised cystoscopic phenotype that may guide treatment. Glomerulations are nonspecific, and their absence does not exclude BPS.',
    },
    {
      id: 'm29-f10',
      front: 'What is the role of pelvic floor physiotherapy in BPS?',
      back: 'Assess for hypertonicity, tenderness and trigger points. Myofascial release, relaxation and down-training may help. Avoid automatic Kegel strengthening in a hypertonic painful pelvic floor, as it may worsen pain.',
    },
    {
      id: 'm29-f11',
      front: 'Which oral therapies may be used in BPS?',
      back: 'Depending on guideline and patient profile: amitriptyline, hydroxyzine, cimetidine or pentosan polysulfate. Each has specific adverse effects and is not appropriate for every patient.',
    },
    {
      id: 'm29-f12',
      front: 'What is the key safety concern with pentosan polysulfate?',
      back: 'It has been associated with pigmentary maculopathy. Discuss uncertain benefit, cumulative exposure and eye monitoring according to current safety advice before use.',
    },
    {
      id: 'm29-f13',
      front: 'Which intravesical and specialist options exist for BPS?',
      back: 'Selected patients may receive intravesical lidocaine, heparin, DMSO or other local treatments. Cystoscopic treatment of Hunner lesions may help that phenotype. Neuromodulation and botulinum toxin are reserved for selected refractory patients.',
    },
    {
      id: 'm29-f14',
      front: 'Which red flags should prompt reconsideration of the BPS diagnosis?',
      back: 'Haematuria, fever, weight loss, new mass, recurrent culture-positive infection or new neurological symptoms.',
    },
    {
      id: 'm29-f15',
      front: 'Which RCOG Green-top Guideline numbers cover BPS and PMS?',
      back: 'RCOG Green-top Guideline No. 70 is bladder pain syndrome; No. 48 is premenstrual syndrome.',
    },
  ],

  mcqs: [
    {
      id: 'm29-q1',
      stem: 'A 32-year-old woman has 8 weeks of suprapubic pain that worsens with bladder filling and improves after voiding, with frequency and urgency. Urine culture is negative. Which diagnosis is most likely?',
      options: ['Acute bacterial cystitis', 'Bladder pain syndrome', 'Bladder carcinoma', 'Overactive bladder without pain'],
      answerIndex: 1,
      explanation:
        'Bladder-related pain worsened by filling and relieved by voiding, with frequency/urgency and negative culture, is typical of BPS. AUA has used a duration of more than 6 weeks. Bladder cancer and infection must still be considered and excluded appropriately.',
    },
    {
      id: 'm29-q2',
      stem: 'Which duration criterion is associated with the ESSIC definition of BPS?',
      options: ['More than 6 weeks', 'At least 6 months', 'At least 2 years', 'More than 10 years'],
      answerIndex: 1,
      explanation:
        'ESSIC uses chronic bladder-related pain for at least 6 months with urinary symptoms and no infection or other obvious cause. The AUA framework has used more than 6 weeks.',
    },
    {
      id: 'm29-q3',
      stem: 'Which symptom best distinguishes BPS from uncomplicated overactive bladder?',
      options: ['Urgency', 'Frequency', 'Nocturia', 'Bladder-related pain'],
      answerIndex: 3,
      explanation:
        'Urgency and frequency occur in both, but pain is the defining feature of BPS. Overactive bladder is characterised by urgency/frequency without primary bladder pain.',
    },
    {
      id: 'm29-q4',
      stem: 'A patient with known BPS develops visible haematuria. What is the most appropriate action?',
      options: [
        'Reassure her that it is part of BPS',
        'Evaluate the haematuria and reconsider the diagnosis',
        'Increase amitriptyline',
        'Start long-term opioids',
      ],
      answerIndex: 1,
      explanation:
        'Haematuria requires appropriate evaluation for other pathology such as bladder malignancy, stones or infection. Do not automatically attribute it to a BPS flare.',
    },
    {
      id: 'm29-q5',
      stem: 'Which cystoscopic finding is most useful in guiding treatment of BPS?',
      options: ['Glomerulations', 'Hunner lesion', 'Trabeculation', 'Normal bladder capacity'],
      answerIndex: 1,
      explanation:
        'Hunner lesions are a recognised cystoscopic phenotype that may guide treatment. Glomerulations are nonspecific, and their absence does not exclude BPS.',
    },
    {
      id: 'm29-q6',
      stem: 'A patient has a tender, hypertonic pelvic floor. Which physiotherapy approach is most appropriate?',
      options: [
        'Intensive Kegel strengthening',
        'Relaxation, myofascial release and down-training',
        'Prolonged bladder holding',
        'No assessment needed',
      ],
      answerIndex: 1,
      explanation:
        'In a hypertonic painful pelvic floor, relaxation, myofascial release and down-training may help. Repeated Kegel strengthening may worsen pain in that phenotype.',
    },
    {
      id: 'm29-q7',
      stem: 'Which oral drug used in BPS is associated with pigmentary maculopathy?',
      options: ['Amitriptyline', 'Hydroxyzine', 'Cimetidine', 'Pentosan polysulfate'],
      answerIndex: 3,
      explanation:
        'Pentosan polysulfate has been associated with pigmentary maculopathy. Discuss uncertain benefit, cumulative exposure and eye monitoring according to current safety advice.',
    },
    {
      id: 'm29-q8',
      stem: 'Which condition commonly coexists with BPS and may explain overlapping pelvic pain?',
      options: ['Irritable bowel syndrome', 'Acute appendicitis', 'Nephrotic syndrome', 'Hyperthyroidism'],
      answerIndex: 0,
      explanation:
        'IBS, vulvodynia, endometriosis, pelvic floor myalgia and fibromyalgia commonly coexist with BPS and may reflect overlapping pain-processing mechanisms.',
    },
    {
      id: 'm29-q9',
      stem: 'Which initial investigation is most important to exclude a mimic before diagnosing BPS?',
      options: ['Urine culture', 'MRI brain', 'Bone scan', 'Colonoscopy in every patient'],
      answerIndex: 0,
      explanation:
        'Urinalysis and urine culture are essential to exclude bacterial UTI. STI testing, cytology, imaging and cystoscopy are added selectively according to risk and symptoms.',
    },
    {
      id: 'm29-q10',
      stem: 'Which statement about treatment of BPS is correct?',
      options: [
        'A single drug cures most patients',
        'Treatment is multimodal and individualised, with no single curative therapy for all',
        'Opioids are first-line long-term therapy',
        'Cystoscopy is mandatory before any treatment',
      ],
      answerIndex: 1,
      explanation:
        'There is no single curative treatment. Management is stepwise and multimodal, including education, self-management, pelvic floor physiotherapy, pain strategies, selected oral or intravesical therapies and comorbidity-directed care.',
    },
  ],
};
