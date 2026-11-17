import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 27 - Care of Women with Obesity in Pregnancy
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten high-risk obstetric notes (obygn 2 pdf,
 * pages 37-56) and organised around RCOG Green-top Guideline No. 72.
 *
 * Covers:
 * - BMI classification and a non-stigmatising approach
 * - Preconception care, high-dose folic acid and vitamin D
 * - Maternal and fetal risks
 * - Booking risk assessment
 * - Aspirin for pre-eclampsia prevention
 * - VTE risk and LMWH principles
 * - Fetal assessment and antenatal surveillance
 * - Anaesthetic review, moving and handling, birth setting
 * - Intrapartum care
 * - Caesarean technique and wound management
 * - Pregnancy after bariatric surgery
 * - Postpartum care
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const OBESITY_PREGNANCY_MODULE: StudioModule = {
  id: 'pg-mod-27-obesity-pregnancy',
  track: 'NEET_PG',
  title: 'Obesity in Pregnancy: RCOG GTG 72',
  shortTitle: 'Obesity in Pregnancy',
  summary:
    'Complete PG clinical revision module on the care of women with obesity in pregnancy following RCOG Green-top Guideline No. 72. Features BMI classes I-III, a respectful non-stigmatising approach, preconception optimisation, folic acid 5 mg and vitamin D 10 micrograms, the maternal and fetal risk profile, booking risk assessment, aspirin 150 mg for pre-eclampsia prevention when indicated, VTE risk scoring and weight-banded LMWH, fetal imaging and surveillance, early anaesthetic and moving-and-handling review, birth-setting considerations, intrapartum equipment and monitoring, caesarean technique including subcutaneous closure when adipose depth exceeds 2 cm, pregnancy after bariatric surgery with its 12-18 month timing and micronutrient checks, postpartum care, and 15 active-recall flashcards with 10 clinical vignette MCQs.',
  tagline:
    'BMI classes, 5 mg folate, VTE bands and the 2 cm wound rule.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'RCOG GTG 72',
    'BMI Classification',
    'Folic Acid 5 mg',
    'Vitamin D 400 IU',
    'Aspirin 150 mg',
    'VTE Risk Score',
    'Weight-Banded LMWH',
    'Anaesthetic Review',
    'Difficult Airway',
    'Subcutaneous Closure 2 cm',
    'Bariatric Surgery',
    'Postpartum VTE',
  ],
  sourceTag:
    'Handwritten high-risk obstetric revision (obygn 2 pdf, pp. 37-56) • RCOG Green-top Guideline No. 72',
  updatedAtISO: '2026-11-14T16:30:00.000Z',
  notes: [
    {
      id: 'bmi-classification',
      heading: 'Definitions and BMI Classification',
      intro:
        'Body mass index is weight in kilograms divided by height in metres squared. Use measured height and booking weight where possible, and interpret BMI in the appropriate population context. Obesity in pregnancy increases risk, but risk is continuous and modified by age, parity, diabetes, hypertension, smoking, previous obstetric history, weight trajectory and access to care.',
      flow: [
        'Measure height and weight at booking where possible',
        'Calculate BMI = weight (kg) / height (m squared)',
        'Classify obesity using standard adult categories',
        'Assess coexisting medical and obstetric risks',
        'Discuss sensitively and without stigma',
        'Plan risk-based antenatal care',
      ],
      bullets: [
        'Overweight: BMI 25.0-29.9.',
        'Obesity class I: BMI 30.0-34.9.',
        'Obesity class II: BMI 35.0-39.9.',
        'Obesity class III / severe obesity: BMI 40 or more.',
        'Risk Is Continuous: risk rises across the BMI range and is modified by comorbidity and previous history.',
        'Communication: discuss weight respectfully, ask permission and focus on safety and available support.',
      ],
      table: {
        head: ['BMI (kg/m²)', 'Category'],
        rows: [
          ['25.0-29.9', 'Overweight'],
          ['30.0-34.9', 'Obesity class I'],
          ['35.0-39.9', 'Obesity class II'],
          ['40 or more', 'Obesity class III / severe obesity'],
        ],
      },
      pearls: [
        'Golden Pearl: obesity class I is 30.0-34.9, class II is 35.0-39.9 and class III is 40 or more.',
        'Risk is continuous rather than a single threshold effect.',
        'Use a respectful, non-stigmatising approach when discussing weight.',
      ],
      trap: {
        title: 'Examiner trap - treating BMI 30 as a single uniform risk category',
        body: 'Risk increases across the whole BMI range and is modified by diabetes, hypertension, parity, previous obstetric history and weight trajectory. Do not assume every woman with the same BMI has the same risk.',
      },
      traps: [
        {
          title: '• Mixing up the class II and class III BMI cut-offs.',
        },
        {
          title: '• Using self-reported weight when measured weight is available.',
        },
        {
          title: '• Discussing weight in a stigmatising way.',
        },
      ],
    },
    {
      id: 'preconception',
      heading: 'Preconception Care: Folate and Vitamin D',
      intro:
        'Preconception counselling should optimise weight and metabolic health without unnecessarily delaying fertility care. Review blood pressure, diabetes screening, medications, nutrition, smoking, alcohol, sleep apnoea symptoms, physical activity and previous bariatric surgery.',
      flow: [
        'Review weight, metabolic health and comorbidities',
        'Review medicines and screen for diabetes and hypertension',
        'Start folic acid 5 mg daily before conception',
        'Continue folic acid through the first 12 weeks',
        'Give vitamin D 10 micrograms (400 IU) daily',
        'Encourage sustainable nutrition and activity',
        'Avoid crash diets and weight-loss medicines in pregnancy',
      ],
      bullets: [
        'Folic Acid: the notes recommend 5 mg daily for BMI at least 30, starting before conception and continuing through the first 12 weeks.',
        'Other Folate Indications: previous neural tube defect-affected pregnancy, certain medicines and diabetes also warrant high-dose folic acid.',
        'Vitamin D: the notes cite 10 micrograms (400 IU) daily.',
        'Individualise: supplementation should follow national guidance and individual deficiency/risk assessment.',
        'Do Not Overclaim: vitamin D does not prevent all obesity-related pregnancy complications.',
        'Lifestyle: encourage sustainable nutrition and activity; avoid crash diets or weight-loss medicines during pregnancy.',
        'Bariatric History: ask about previous bariatric surgery and micronutrient supplementation.',
      ],
      table: {
        head: ['Supplement', 'Dose in the notes', 'Timing'],
        rows: [
          ['Folic acid', '5 mg daily', 'Before conception through 12 weeks'],
          ['Vitamin D', '10 micrograms (400 IU) daily', 'Follow national guidance'],
        ],
      },
      pearls: [
        'Golden Pearl: folic acid 5 mg daily before conception through 12 weeks when BMI is at least 30.',
        'Vitamin D note: 10 micrograms (400 IU) daily, with individual risk assessment.',
        'Do not recommend crash diets or weight-loss medicines during pregnancy.',
      ],
      trap: {
        title: 'Examiner trap - prescribing standard-dose folic acid for BMI 30 or more',
        body: 'The notes recommend 5 mg daily, not the standard 400 micrograms, for women with BMI at least 30. Start before conception and continue through the first 12 weeks, following current national guidance.',
      },
      traps: [
        {
          title: '• Starting high-dose folic acid only after a positive pregnancy test.',
        },
        {
          title: '• Forgetting that diabetes and previous NTD also warrant 5 mg.',
        },
        {
          title: '• Advising weight loss medicines during pregnancy.',
        },
      ],
    },
    {
      id: 'maternal-fetal-risks',
      heading: 'Maternal and Fetal Risks',
      intro:
        'Obesity is associated with a broad increase in maternal and fetal/neonatal risk. The aim is to identify modifiable risk, not to assume every complication will occur.',
      flow: [
        'Identify maternal metabolic and thromboembolic risks',
        'Identify intrapartum and operative risks',
        'Identify fetal growth, anomaly and monitoring issues',
        'Plan risk-based screening and surveillance',
        'Discuss the plan with the woman',
        'Reassess as pregnancy progresses',
      ],
      bullets: [
        'Metabolic: gestational diabetes and pre-existing type 2 diabetes.',
        'Hypertensive: hypertensive disorders including pre-eclampsia.',
        'Thromboembolic: venous thromboembolism.',
        'Pregnancy Loss: miscarriage and stillbirth, with risk rising with BMI and coexisting factors.',
        'Anaesthetic: difficult airway and challenges with regional anaesthesia.',
        'Operative: caesarean birth, operative difficulty, wound infection and wound dehiscence.',
        'Postpartum: postpartum haemorrhage and prolonged recovery.',
        'Fetal/Neonatal: congenital anomaly (especially with pre-existing diabetes), large-for-gestational-age/macrosomia, shoulder dystocia, preterm birth and stillbirth.',
        'Imaging/Monitoring: difficulties with fetal imaging and monitoring.',
      ],
      table: {
        head: ['Domain', 'Associated risks'],
        rows: [
          ['Metabolic', 'GDM, pre-existing type 2 diabetes'],
          ['Cardiovascular', 'Hypertension, pre-eclampsia, VTE'],
          ['Pregnancy loss', 'Miscarriage, stillbirth'],
          ['Intrapartum', 'Caesarean, shoulder dystocia, PPH'],
          ['Anaesthetic', 'Difficult airway, regional anaesthesia challenges'],
          ['Wound', 'Infection, seroma, dehiscence'],
          ['Fetal/neonatal', 'Anomaly, macrosomia, preterm birth, stillbirth'],
        ],
      },
      pearls: [
        'Golden Pearl: obesity increases GDM, pre-eclampsia, VTE, stillbirth, caesarean and wound complications.',
        'Fetal risks include macrosomia, shoulder dystocia and congenital anomaly, especially with pre-existing diabetes.',
        'Identify modifiable risk rather than assuming complications will occur.',
      ],
      trap: {
        title: 'Examiner trap - attributing every stillbirth to obesity alone',
        body: 'Stillbirth risk rises with BMI but is modified by diabetes, hypertension, parity, previous history and other factors. Assess and document the whole risk profile.',
      },
      traps: [
        {
          title: '• Forgetting VTE as a major maternal risk.',
        },
        {
          title: '• Missing the link between pre-existing diabetes and congenital anomaly.',
        },
        {
          title: '• Assuming obesity mandates caesarean birth.',
        },
      ],
    },
    {
      id: 'booking-assessment',
      heading: 'Antenatal Booking and Risk Assessment',
      intro:
        'Booking is the key opportunity to record BMI, screen for comorbidity and plan risk-based care. Assessment should be repeated when circumstances change.',
      flow: [
        'Record BMI, blood pressure and previous obstetric history',
        'Screen for pre-existing diabetes or arrange early assessment',
        'Plan GDM testing according to national/local criteria',
        'Assess VTE risk at booking',
        'Assess pre-eclampsia risk and aspirin need',
        'Ask about sleep apnoea, reflux, mobility, back pain and previous anaesthetic problems',
        'Discuss anomaly screening and limitations of ultrasound imaging',
      ],
      bullets: [
        'BMI: record at booking and use it to guide risk assessment.',
        'Diabetes: screen for pre-existing diabetes or arrange early assessment according to risk.',
        'GDM: plan testing based on national/local criteria; obesity is an important risk factor.',
        'VTE: assess at booking, after admission/immobility and postpartum.',
        'Pre-eclampsia: assess risk and determine whether aspirin prophylaxis is indicated.',
        'History: ask about obstructive sleep apnoea, reflux, mobility, back pain and previous anaesthetic problems.',
        'Screening: discuss fetal anomaly screening and possible limitations of ultrasound imaging.',
        'Communication: ask permission before discussing weight and focus on safety and support.',
      ],
      table: {
        head: ['Booking domain', 'Action'],
        rows: [
          ['BMI and blood pressure', 'Record and risk-stratify'],
          ['Diabetes', 'Screen or arrange early assessment'],
          ['GDM', 'Test per national/local criteria'],
          ['VTE', 'Formal risk assessment'],
          ['Pre-eclampsia', 'Assess risk and aspirin need'],
          ['Anaesthetic history', 'Document and refer early if needed'],
          ['Fetal screening', 'Discuss limitations of imaging'],
        ],
      },
      pearls: [
        'Golden Pearl: repeat VTE risk assessment at booking, after admission/immobility and postpartum.',
        'Obesity is an important risk factor for GDM, so plan testing accordingly.',
        'Discuss possible limitations of fetal ultrasound imaging.',
      ],
      trap: {
        title: 'Examiner trap - performing VTE risk assessment only once at booking',
        body: 'VTE risk changes with admission, immobility, infection, pre-eclampsia, caesarean and the postpartum period. Reassess whenever circumstances change and after birth.',
      },
      traps: [
        {
          title: '• Omitting GDM testing because the fasting glucose was normal early on.',
        },
        {
          title: '• Forgetting to ask about previous anaesthetic problems.',
        },
        {
          title: '• Failing to discuss limitations of anomaly scanning.',
        },
      ],
    },
    {
      id: 'aspirin',
      heading: 'Aspirin and Pre-eclampsia Prevention',
      intro:
        'The notes cite aspirin 150 mg daily, a dose used in some UK high-risk pre-eclampsia prevention pathways. Obesity can be a moderate risk factor, but aspirin is not automatically indicated solely because BMI is 30 or more in every guideline system.',
      flow: [
        'Assess pre-eclampsia risk factors',
        'Decide whether aspirin is indicated by the local guideline',
        'Start from 12 weeks, ideally before 16 weeks',
        'Use the local protocol dose, for example 150 mg daily',
        'Continue until birth or per local guidance',
        'Check allergy, bleeding risk and peptic ulcer history',
        'Do not mix different protocol doses',
      ],
      bullets: [
        'Dose: the handwritten notes cite aspirin 150 mg daily.',
        'Timing: usually started from 12 weeks, ideally before 16 weeks, and continued until birth or per local guidance.',
        'Indication: prescribe when the patient meets the applicable combination of moderate-risk factors or has a high-risk factor.',
        'Not Automatic: obesity alone does not automatically mean aspirin for everyone.',
        'Contraindications: check allergy, bleeding risk, peptic ulcer history and other contraindications.',
        'Protocol Variation: doses may differ (for example 75-150 mg or 150 mg); do not mix protocols.',
      ],
      table: {
        head: ['Aspirin question', 'Answer'],
        rows: [
          ['Dose in the notes', '150 mg daily'],
          ['Typical start', '12 weeks, ideally before 16 weeks'],
          ['Continue until', 'Birth or per local guidance'],
          ['Obesity alone', 'Not automatically an indication in every guideline'],
          ['Before prescribing', 'Check allergy, bleeding risk and peptic ulcer history'],
        ],
      },
      pearls: [
        'Golden Pearl: the notes cite aspirin 150 mg daily for pre-eclampsia prevention when indicated.',
        'Start from 12 weeks, ideally before 16 weeks.',
        'Obesity alone does not automatically mean aspirin for every patient.',
      ],
      trap: {
        title: 'Examiner trap - prescribing aspirin to every woman with BMI 30 or more',
        body: 'Aspirin is prescribed according to the overall pre-eclampsia risk profile and the applicable local guideline. Obesity can be a moderate risk factor, but it is not an automatic stand-alone indication in every system.',
      },
      traps: [
        {
          title: '• Starting aspirin too late, after 16 weeks, without a specific reason.',
        },
        {
          title: '• Ignoring peptic ulcer or bleeding history.',
        },
        {
          title: '• Mixing 75 mg and 150 mg protocol doses.',
        },
      ],
    },
    {
      id: 'vte-lmwh',
      heading: 'Thromboprophylaxis: LMWH Principles',
      intro:
        'Pregnancy and the puerperium are hypercoagulable states. Obesity adds to VTE risk, particularly with immobility, admission, infection, caesarean, pre-eclampsia, thrombophilia or previous VTE. Use low-molecular-weight heparin when indicated by the overall risk score and local guideline.',
      flow: [
        'Perform formal VTE risk assessment at booking',
        'Repeat the assessment when circumstances change',
        'Reassess after birth',
        'Prescribe LMWH when indicated by the score and local guideline',
        'Use weight-banded dosing per local protocol',
        'Consider mechanical prophylaxis and early mobilisation',
        'Observe the required interval before neuraxial anaesthesia',
      ],
      bullets: [
        'Timing: assess at booking, when circumstances change and postpartum.',
        'Indication: use LMWH when indicated by the overall risk score and local guideline.',
        'Dose: prophylactic dose may be weight-adjusted according to actual booking/current weight, renal function and local protocol.',
        'Mechanical: consider mechanical prophylaxis and early mobilisation where appropriate.',
        'Neuraxial: observe the required interval between LMWH dose and epidural/spinal insertion or catheter removal.',
        'Postpartum: reassess duration according to risk; not all women with obesity require identical duration.',
        'Do Not Invent: do not use one universal enoxaparin dose for all BMI categories.',
      ],
      table: {
        head: ['VTE consideration', 'Principle'],
        rows: [
          ['When to assess', 'Booking, with any change, and postpartum'],
          ['When to treat', 'When the overall risk score and local guideline indicate'],
          ['Dose', 'Weight-banded per local protocol'],
          ['Neuraxial anaesthesia', 'Observe the required LMWH interval'],
          ['Duration', 'Risk-based, not identical for everyone'],
        ],
      },
      pearls: [
        'Golden Pearl: LMWH is based on total VTE risk and weight bands, not a one-size dose.',
        'Reassess VTE risk after caesarean, admission or any new complication.',
        'Observe the LMWH-to-neuraxial interval.',
      ],
      trap: {
        title: 'Examiner trap - quoting one universal enoxaparin dose for all BMI categories',
        body: 'Prophylactic LMWH dosing may be weight-adjusted. The correct preparation and dose depend on actual booking/current weight, renal function and local protocol. Use local weight bands and anaesthetic timing rules.',
      },
      traps: [
        {
          title: '• Using booking weight forever without reassessing.',
        },
        {
          title: '• Ignoring the neuraxial anaesthesia interval.',
        },
        {
          title: '• Giving every woman with obesity the same postpartum duration.',
        },
      ],
    },
    {
      id: 'fetal-surveillance',
      heading: 'Fetal Assessment and Antenatal Surveillance',
      intro:
        'Obesity can make fetal imaging and monitoring technically more difficult, but obesity alone does not mandate one universal intensive surveillance schedule. Tailor surveillance to coexisting risks and local guidance.',
      flow: [
        'Optimise imaging equipment and operator expertise',
        'Repeat imaging if views are incomplete',
        'Assess fetal growth when clinically indicated',
        'Tailor surveillance to coexisting risks',
        'Discuss reduced fetal movement advice',
        'Ensure prompt assessment of reduced movements',
      ],
      bullets: [
        'Anomaly Scanning: detailed fetal anomaly ultrasound may be technically more difficult; optimise equipment, operator expertise and repeat imaging if views are incomplete.',
        'Growth: assess fetal growth as clinically indicated, particularly with diabetes, hypertension or other risk factors.',
        'No Uniform Schedule: obesity alone does not mean every patient needs the same intensive surveillance schedule.',
        'Reduced Movements: discuss advice and the importance of prompt assessment.',
      ],
      table: {
        head: ['Issue', 'Approach'],
        rows: [
          ['Incomplete anomaly views', 'Optimise technique and repeat imaging'],
          ['Growth concern', 'Assess as clinically indicated'],
          ['Coexisting diabetes/hypertension', 'Increase surveillance according to risk'],
          ['Reduced fetal movements', 'Prompt assessment'],
        ],
      },
      pearls: [
        'Golden Pearl: tailor fetal surveillance to coexisting risks rather than BMI alone.',
        'Repeat imaging when anomaly views are incomplete.',
        'Reduced fetal movements require prompt assessment.',
      ],
      trap: {
        title: 'Examiner trap - assuming obesity automatically requires weekly growth scans',
        body: 'There is no single surveillance schedule for every woman with obesity. Tailor growth assessment and monitoring to diabetes, hypertension, previous history and other risk factors, following local guidance.',
      },
      traps: [
        {
          title: '• Accepting incomplete anomaly views without a repeat plan.',
        },
        {
          title: '• Dismissing reduced fetal movements.',
        },
        {
          title: '• Applying the same surveillance to every BMI category.',
        },
      ],
    },
    {
      id: 'anaesthesia-birth-planning',
      heading: 'Anaesthetic Review, Mobility and Birth Planning',
      intro:
        'Women with BMI around 40 or greater may benefit from early obstetric anaesthetic assessment, particularly with additional airway, cardiopulmonary or mobility issues. Birth setting should reflect BMI, comorbidity, anaesthetic need, equipment, staffing and emergency capacity.',
      flow: [
        'Identify women who need early anaesthetic review',
        'Assess airway, sleep apnoea and positioning',
        'Assess venous access, BP cuff fit and monitoring equipment',
        'Assess feasibility of neuraxial analgesia and early epidural',
        'Plan safe moving and handling',
        'Choose birth setting according to needs and resources',
        'Document the plan',
      ],
      bullets: [
        'Anaesthetic Review: BMI around 40 or greater may warrant early assessment, particularly with airway, cardiopulmonary or mobility issues.',
        'Airway: assess neck anatomy, obstructive sleep apnoea and positioning.',
        'Equipment: check venous access, blood pressure cuff fit and monitoring equipment.',
        'Neuraxial: assess feasibility of analgesia/anaesthesia and consider early epidural where appropriate.',
        'Difficult Airway: have a plan and appropriately sized equipment available.',
        'Moving and Handling: assess safe mobilisation, transfer aids, bed capacity and theatre equipment; plan staffing and manual-handling resources.',
        'Dignity: preserve dignity and avoid assumptions about mobility.',
        'Birth Setting: the source notes cite consultant-led-unit birth planning for BMI at least 35, but this is a service-planning threshold rather than a universal stand-alone rule.',
      ],
      table: {
        head: ['Domain', 'Action'],
        rows: [
          ['Airway', 'Assess and plan for difficulty'],
          ['Monitoring', 'Correct BP cuff size and equipment'],
          ['Neuraxial', 'Assess and consider early epidural'],
          ['Moving and handling', 'Plan equipment and staffing'],
          ['Birth setting', 'Individualise by risk, resources and preference'],
        ],
      },
      pearls: [
        'Golden Pearl: consider early anaesthetic and moving/handling assessment when BMI is around 40 or more.',
        'The BMI 35 consultant-led-unit note is a service-planning threshold, not a universal rule.',
        'Preserve dignity and avoid assumptions about mobility.',
      ],
      trap: {
        title: 'Examiner trap - applying the BMI 35 birth-setting note as an absolute rule',
        body: 'The source notes cite consultant-led-unit birth planning for BMI at least 35, but this is a local service-planning threshold. Choose the setting according to BMI, comorbidity, anaesthetic/obstetric needs, equipment, staffing and emergency capacity.',
      },
      traps: [
        {
          title: '• Using a standard BP cuff on a large arm.',
        },
        {
          title: '• Failing to plan moving and handling resources.',
        },
        {
          title: '• Treating the BMI 35 threshold as independent of comorbidity and resources.',
        },
      ],
    },
    {
      id: 'intrapartum',
      heading: 'Intrapartum Care',
      intro:
        'Intrapartum care requires appropriate equipment, monitoring and contingency planning. Obesity alone is not an indication for induction or caesarean in every patient.',
      flow: [
        'Ensure appropriate BP cuff, bed, operating table and transfer equipment',
        'Ensure suitable fetal monitoring',
        'Confirm fetal position by ultrasound when needed',
        'Maintain VTE prevention, hydration and mobilisation',
        'Plan for difficult IV access and regional anaesthesia',
        'Plan for emergency operative birth if risk factors warrant',
        'Provide pressure-area care',
      ],
      bullets: [
        'Equipment: appropriate BP cuff, bed, operating table, transfer equipment and fetal monitoring.',
        'Monitoring: continuous fetal monitoring may be recommended when indicated by standard risks, induction/augmentation, diabetes or concerns.',
        'Position: consider ultrasound confirmation of fetal position.',
        'Scalp Electrode: use only when clinically appropriate and safe.',
        'VTE: maintain prevention, hydration, mobilisation and pressure-area care.',
        'Contingency: plan for difficult IV access, regional anaesthesia and emergency operative birth.',
        'Not Automatic: obesity alone is not an indication for induction or caesarean in every patient.',
      ],
      table: {
        head: ['Intrapartum issue', 'Action'],
        rows: [
          ['BP measurement', 'Correct cuff size'],
          ['Fetal monitoring', 'Continuous when indicated; optimize technique'],
          ['Fetal position', 'Ultrasound when uncertain'],
          ['IV access', 'Anticipate difficulty'],
          ['Mobility', 'Safe mobilisation and pressure care'],
          ['Operative birth', 'Plan contingency and equipment'],
        ],
      },
      pearls: [
        'Golden Pearl: obesity alone is not an indication for induction or caesarean in every patient.',
        'Use an appropriately sized BP cuff and suitable monitoring equipment.',
        'Maintain VTE prevention and pressure-area care in labour.',
      ],
      trap: {
        title: 'Examiner trap - recommending elective caesarean for obesity alone',
        body: 'Obesity increases operative risk but is not by itself an indication for caesarean or induction in every patient. Base the decision on obstetric indication, comorbidity and informed preference.',
      },
      traps: [
        {
          title: '• Using an undersized BP cuff and overestimating blood pressure.',
        },
        {
          title: '• Failing to anticipate difficult IV access.',
        },
        {
          title: '• Assuming external monitoring is always adequate.',
        },
      ],
    },
    {
      id: 'caesarean-wound',
      heading: 'Caesarean Section and Wound Management',
      intro:
        'Caesarean birth in obesity is associated with greater surgical difficulty and higher wound and thromboembolic risk. Prevention relies on weight-adjusted antibiotics, careful technique, tissue closure decisions and postoperative vigilance.',
      flow: [
        'Give weight-adjusted antibiotic prophylaxis before incision per protocol',
        'Use appropriate skin preparation',
        'Achieve meticulous haemostasis and tissue handling',
        'Consider subcutaneous tissue closure when adipose depth exceeds 2 cm',
        'Choose an appropriate dressing strategy',
        'Ensure VTE prophylaxis and early mobilisation',
        'Review the wound in high-risk patients',
      ],
      bullets: [
        'Surgical Challenges: increased subcutaneous tissue, deeper incision, positioning and exposure difficulty.',
        'Wound Risks: higher risk of infection, seroma, dehiscence and thromboembolism.',
        'Antibiotics: weight-adjust prophylaxis according to local protocol and timing before incision.',
        'Technique: appropriate skin preparation, meticulous haemostasis and careful tissue handling.',
        'Subcutaneous Closure: consider closure when adipose depth is more than 2 cm; the source notes specifically highlight this threshold.',
        'Dressing: consider an appropriate dressing strategy and wound review in high-risk patients.',
        'Postoperative: ensure VTE prophylaxis and early mobilisation.',
        'Individualise: drains, negative-pressure dressings and other measures are not mandatory for every patient.',
      ],
      table: {
        head: ['Caesarean issue', 'Action'],
        rows: [
          ['Antibiotic prophylaxis', 'Weight-adjust and give before incision per protocol'],
          ['Adipose depth > 2 cm', 'Consider subcutaneous tissue closure'],
          ['Wound infection risk', 'Appropriate dressing and review'],
          ['VTE risk', 'Prophylaxis and early mobilisation'],
          ['Drains/negative-pressure dressing', 'Individualise, not routine for all'],
        ],
      },
      pearls: [
        'Golden Pearl: consider subcutaneous tissue closure when adipose depth exceeds 2 cm.',
        'Weight-adjust antibiotic prophylaxis according to local protocol.',
        'Drains and negative-pressure dressings are not mandatory for every patient with obesity.',
      ],
      trap: {
        title: 'Examiner trap - applying a single fixed antibiotic dose to every woman with obesity',
        body: 'Antibiotic prophylaxis should be weight-adjusted according to local protocol and given at the correct time before incision. A standard fixed dose may be inadequate in higher BMI.',
      },
      traps: [
        {
          title: '• Closing subcutaneous fat only when it "looks deep" rather than using the 2 cm threshold.',
        },
        {
          title: '• Forgetting VTE prophylaxis after caesarean.',
        },
        {
          title: '• Using drains routinely in every patient.',
        },
      ],
    },
    {
      id: 'bariatric-surgery',
      heading: 'Pregnancy After Bariatric Surgery',
      intro:
        'Pregnancy after bariatric surgery requires preconception and antenatal nutritional review. Defer conception until the rapid weight-loss phase has passed and weight and nutritional status are stable.',
      flow: [
        'Review the bariatric procedure and timing',
        'Defer conception until weight and nutrition are stable',
        'The notes cite approximately 12-18 months after surgery',
        'Check iron, ferritin, folate, B12, vitamin D and calcium',
        'Assess protein intake and overall nutrition',
        'Ask about dumping, hypoglycaemia and internal hernia symptoms',
        'Adapt GDM screening after malabsorptive surgery',
      ],
      bullets: [
        'Timing: the notes cite waiting approximately 12-18 months after bariatric surgery before attempting pregnancy.',
        'General Principle: defer conception until the rapid weight-loss phase has passed and weight/nutritional status are stable; exact interval varies by procedure and course.',
        'Deficiencies: check iron, ferritin, folate, vitamin B12, vitamin D, calcium and other micronutrients according to procedure and local protocol.',
        'Nutrition: assess protein and overall intake.',
        'Symptoms: ask about dumping, hypoglycaemia or internal hernia.',
        'GDM Screening: may need adaptation after malabsorptive surgery because a glucose load can provoke dumping or hypoglycaemia.',
        'Specialist Input: use specialist guidance and alternatives when appropriate.',
      ],
      table: {
        head: ['Bariatric issue', 'Action'],
        rows: [
          ['Conception timing', 'Wait until rapid weight loss has passed; notes cite 12-18 months'],
          ['Iron/ferritin', 'Check and replace as needed'],
          ['Folate/B12/vitamin D/calcium', 'Check per procedure and local protocol'],
          ['Protein intake', 'Assess and support'],
          ['Dumping/hypoglycaemia/internal hernia', 'Ask about symptoms'],
          ['GDM screening', 'Adapt after malabsorptive surgery'],
        ],
      },
      pearls: [
        'Golden Pearl: the notes cite approximately 12-18 months after bariatric surgery before conception.',
        'Check iron, ferritin, folate, B12, vitamin D and calcium after bariatric surgery.',
        'Adapt GDM screening after malabsorptive surgery because a glucose load can cause dumping or hypoglycaemia.',
      ],
      trap: {
        title: 'Examiner trap - applying a standard oral glucose tolerance test after malabsorptive surgery',
        body: 'A glucose load can provoke dumping or hypoglycaemia after malabsorptive surgery. Use specialist guidance and adapted screening alternatives where appropriate.',
      },
      traps: [
        {
          title: '• Advising pregnancy immediately after surgery during rapid weight loss.',
        },
        {
          title: '• Missing micronutrient deficiencies.',
        },
        {
          title: '• Forgetting that internal hernia can present with abdominal pain.',
        },
      ],
    },
    {
      id: 'postpartum',
      heading: 'Postpartum Care',
      intro:
        'The postpartum period carries continued VTE, metabolic and wound risk. Reassess VTE risk, support recovery and arrange follow-up.',
      flow: [
        'Reassess VTE risk and prescribe LMWH when indicated',
        'Support breastfeeding and safe mobilisation',
        'Monitor blood pressure, glucose and wound healing',
        'Provide contraception and interpregnancy advice',
        'Arrange nutritional follow-up after bariatric surgery',
        'Offer sensitive weight-management support after recovery',
      ],
      bullets: [
        'VTE: reassess risk and prescribe postpartum LMWH when indicated.',
        'Recovery: support breastfeeding and safe mobilisation.',
        'Monitoring: check blood pressure, glucose and wound healing according to risk.',
        'Contraception: provide contraception and interpregnancy advice.',
        'Bariatric: arrange nutritional follow-up after bariatric surgery.',
        'Weight Support: offer weight-management support sensitively after recovery, not as a substitute for immediate postpartum care.',
      ],
      table: {
        head: ['Postpartum domain', 'Action'],
        rows: [
          ['VTE', 'Reassess and treat if indicated'],
          ['Wound', 'Review healing and infection'],
          ['Blood pressure/glucose', 'Monitor according to risk'],
          ['Contraception', 'Discuss and provide'],
          ['Bariatric nutrition', 'Arrange follow-up'],
          ['Weight management', 'Offer sensitively after recovery'],
        ],
      },
      pearls: [
        'Golden Pearl: reassess VTE risk postpartum and prescribe LMWH when indicated.',
        'Monitor blood pressure, glucose and wound healing according to risk.',
        'Offer weight-management support sensitively, not as a substitute for immediate care.',
      ],
      trap: {
        title: 'Examiner trap - stopping VTE prophylaxis automatically at discharge',
        body: 'Postpartum VTE risk persists and duration should be reassessed according to the overall risk profile and local guideline. Do not apply a uniform stop date without reassessment.',
      },
      traps: [
        {
          title: '• Missing postpartum pre-eclampsia.',
        },
        {
          title: '• Failing to review the caesarean wound.',
        },
        {
          title: '• Omitting contraception and interpregnancy advice.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'BMI = kg/m²; class I 30-34.9, class II 35-39.9, class III 40 or more.',
        'Source notes: folic acid 5 mg daily before conception through 12 weeks for BMI at least 30.',
        'Vitamin D note: 10 micrograms (400 IU) daily, with individual assessment.',
        'Aspirin 150 mg is used in some pathways, but obesity alone does not automatically mean aspirin.',
        'LMWH is based on total VTE risk and weight bands, not a one-size dose.',
        'Reassess VTE risk at booking, with any change and postpartum.',
        'BMI around 40 or more: consider early anaesthetic and moving/handling assessment.',
        'The BMI 35 consultant-led-unit note is a service-planning threshold, not a universal rule.',
        'Obesity alone is not an indication for induction or caesarean in every patient.',
        'Consider subcutaneous tissue closure when adipose depth exceeds 2 cm.',
        'Weight-adjust antibiotic prophylaxis for caesarean per local protocol.',
        'Drains and negative-pressure dressings are not mandatory for every patient.',
        'After bariatric surgery, defer conception until rapid weight loss has passed; notes cite 12-18 months.',
        'Check iron, ferritin, folate, B12, vitamin D and calcium after bariatric surgery.',
        'Adapt GDM screening after malabsorptive surgery.',
        'Tailor fetal surveillance to coexisting risks rather than BMI alone.',
        'Discuss limitations of fetal imaging and repeat incomplete views.',
        'Use an appropriately sized BP cuff in labour.',
        'Monitor blood pressure, glucose and wound healing postpartum.',
        'Offer weight-management support sensitively after recovery.',
      ],
      traps: [
        {
          title: '• Using standard-dose folic acid instead of 5 mg for BMI 30 or more.',
        },
        {
          title: '• Prescribing aspirin to everyone with obesity.',
        },
        {
          title: '• Quoting one universal LMWH dose.',
        },
        {
          title: '• Treating the BMI 35 birth-setting note as absolute.',
        },
        {
          title: '• Recommending caesarean for obesity alone.',
        },
        {
          title: '• Forgetting the 2 cm subcutaneous closure threshold.',
        },
        {
          title: '• Advising pregnancy during rapid post-bariatric weight loss.',
        },
        {
          title: '• Missing postpartum VTE risk reassessment.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm27-f1',
      front: 'What are the adult BMI categories for overweight and obesity classes I-III?',
      back: 'Overweight 25.0-29.9; obesity class I 30.0-34.9; class II 35.0-39.9; class III/severe obesity 40 or more.',
    },
    {
      id: 'm27-f2',
      front: 'What folic acid dose do the notes recommend for BMI at least 30?',
      back: 'Folic acid 5 mg daily, starting before conception and continuing through the first 12 weeks, following current national guidance.',
    },
    {
      id: 'm27-f3',
      front: 'What vitamin D dose do the notes cite in pregnancy?',
      back: '10 micrograms (400 IU) daily, with supplementation following national guidance and individual deficiency/risk assessment.',
    },
    {
      id: 'm27-f4',
      front: 'List the major maternal risks associated with obesity in pregnancy.',
      back: 'GDM and type 2 diabetes, hypertensive disorders including pre-eclampsia, VTE, miscarriage and stillbirth, anaesthetic difficulty, caesarean and wound complications, PPH and prolonged recovery.',
    },
    {
      id: 'm27-f5',
      front: 'List the fetal/neonatal risks associated with obesity in pregnancy.',
      back: 'Congenital anomaly (especially with pre-existing diabetes), large-for-gestational-age/macrosomia, shoulder dystocia, preterm birth, stillbirth and difficulties with fetal imaging/monitoring.',
    },
    {
      id: 'm27-f6',
      front: 'What aspirin dose and timing do the notes cite for pre-eclampsia prevention?',
      back: 'Aspirin 150 mg daily, usually from 12 weeks (ideally before 16 weeks) until birth or per local guidance, prescribed when the overall risk profile indicates it.',
    },
    {
      id: 'm27-f7',
      front: 'When should VTE risk be assessed in a pregnancy with obesity?',
      back: 'At booking, whenever circumstances change (admission, immobility, infection, pre-eclampsia, caesarean) and postpartum.',
    },
    {
      id: 'm27-f8',
      front: 'How is prophylactic LMWH dosed in obesity?',
      back: 'According to weight bands and local protocol, using actual booking/current weight, renal function and the overall VTE risk score. There is no single universal dose for all BMI categories.',
    },
    {
      id: 'm27-f9',
      front: 'Which anaesthetic and moving-and-handling issues matter in obesity?',
      back: 'Difficult airway, obstructive sleep apnoea, positioning, venous access, BP cuff fit, neuraxial feasibility, transfer aids, bed capacity, staffing and early anaesthetic review when BMI is around 40 or more.',
    },
    {
      id: 'm27-f10',
      front: 'What is the source note on birth setting for BMI at least 35?',
      back: 'The notes cite consultant-led-unit birth planning for BMI at least 35, but this is a service-planning threshold rather than a universal stand-alone RCOG rule. Individualise by comorbidity, resources and preference.',
    },
    {
      id: 'm27-f11',
      front: 'When should subcutaneous tissue be closed at caesarean?',
      back: 'Consider closure when adipose depth is more than 2 cm, according to the source note and surgical judgement.',
    },
    {
      id: 'm27-f12',
      front: 'How should antibiotic prophylaxis be given at caesarean in obesity?',
      back: 'Weight-adjust according to local protocol and give at the correct time before incision.',
    },
    {
      id: 'm27-f13',
      front: 'What is the recommended timing of pregnancy after bariatric surgery?',
      back: 'Defer until the rapid weight-loss phase has passed and weight/nutrition are stable; the notes cite approximately 12-18 months, though the interval varies by procedure and individual course.',
    },
    {
      id: 'm27-f14',
      front: 'Which micronutrients should be checked after bariatric surgery in pregnancy?',
      back: 'Iron, ferritin, folate, vitamin B12, vitamin D, calcium and other micronutrients according to procedure and local protocol, plus protein and overall intake.',
    },
    {
      id: 'm27-f15',
      front: 'Why may GDM screening need adaptation after malabsorptive bariatric surgery?',
      back: 'A glucose load can provoke dumping or hypoglycaemia, so specialist guidance and alternative screening approaches may be needed.',
    },
  ],

  mcqs: [
    {
      id: 'm27-q1',
      stem: 'A woman books at 10 weeks with a BMI of 37. Which folic acid regimen do the notes recommend?',
      options: [
        '400 micrograms daily until 12 weeks',
        '5 mg daily before conception through 12 weeks',
        '5 mg weekly throughout pregnancy',
        'No supplement needed',
      ],
      answerIndex: 1,
      explanation:
        'For BMI at least 30, the notes recommend folic acid 5 mg daily starting before conception and continuing through the first 12 weeks, following current national guidance.',
    },
    {
      id: 'm27-q2',
      stem: 'Which BMI range corresponds to obesity class II?',
      options: ['25.0-29.9', '30.0-34.9', '35.0-39.9', '40 or more'],
      answerIndex: 2,
      explanation:
        'Class I is 30.0-34.9, class II is 35.0-39.9 and class III/severe obesity is 40 or more. Overweight is 25.0-29.9.',
    },
    {
      id: 'm27-q3',
      stem: 'A woman with BMI 32 has no other pre-eclampsia risk factors. What is the correct statement about aspirin?',
      options: [
        'Aspirin 150 mg is mandatory for every woman with BMI 30 or more',
        'Aspirin is prescribed only if the overall risk profile and local guideline indicate it',
        'Aspirin is contraindicated in all obese women',
        'Aspirin should be started at 28 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Obesity can be a moderate risk factor, but aspirin is not automatically indicated solely because BMI is 30 or more in every guideline system. Prescribe when the applicable risk criteria are met.',
    },
    {
      id: 'm27-q4',
      stem: 'Which statement about LMWH prophylaxis in obesity is correct?',
      options: [
        'All women with BMI 30 or more receive the same fixed dose',
        'Dose may be weight-adjusted using local weight bands and the overall VTE risk score',
        'LMWH is never used in pregnancy',
        'Neuraxial timing does not matter',
      ],
      answerIndex: 1,
      explanation:
        'Prophylactic LMWH may be weight-adjusted according to actual weight, renal function and local protocol. Use the overall VTE risk score and observe the required neuraxial interval.',
    },
    {
      id: 'm27-q5',
      stem: 'At caesarean section, the subcutaneous adipose depth is 3 cm. What does the source note recommend?',
      options: [
        'Always place a drain',
        'Consider subcutaneous tissue closure when adipose depth exceeds 2 cm',
        'Leave the skin open',
        'Avoid antibiotic prophylaxis',
      ],
      answerIndex: 1,
      explanation:
        'The source notes specifically highlight considering subcutaneous tissue closure when adipose depth is more than 2 cm. Drains and negative-pressure dressings are individualised, not mandatory.',
    },
    {
      id: 'm27-q6',
      stem: 'A woman with BMI 42 is planning pregnancy. Which antenatal planning step is most appropriate?',
      options: [
        'No additional assessment',
        'Consider early obstetric anaesthetic and moving/handling assessment',
        'Mandatory elective caesarean at 37 weeks',
        'Routine induction at 38 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Women with BMI around 40 or greater may benefit from early anaesthetic assessment, particularly with airway, cardiopulmonary or mobility issues. Obesity alone is not an indication for caesarean or induction.',
    },
    {
      id: 'm27-q7',
      stem: 'A woman conceived 4 months after sleeve gastrectomy. What is the main concern?',
      options: [
        'She is past the recommended interval',
        'Conception during the rapid weight-loss phase, with nutritional and micronutrient risk',
        'Bariatric surgery prevents pregnancy',
        'No concern at all',
      ],
      answerIndex: 1,
      explanation:
        'The notes cite waiting approximately 12-18 months after bariatric surgery. Conception during rapid weight loss raises nutritional and micronutrient concerns; assess and supplement accordingly.',
    },
    {
      id: 'm27-q8',
      stem: 'Which fetal surveillance approach is correct for a woman with obesity but no other risk factors?',
      options: [
        'Weekly growth scans for everyone',
        'Tailor surveillance to coexisting risks and local guidance',
        'No antenatal imaging at all',
        'Immediate delivery at 34 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Obesity alone does not mandate one universal intensive surveillance schedule. Tailor growth assessment and monitoring to diabetes, hypertension, previous history and other risk factors.',
    },
    {
      id: 'm27-q9',
      stem: 'Which postpartum action is most important after a caesarean in a woman with obesity?',
      options: [
        'Stop VTE prophylaxis automatically',
        'Reassess VTE risk, review the wound and support early mobilisation',
        'Avoid breastfeeding',
        'Delay all follow-up for 6 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Reassess VTE risk and prescribe postpartum LMWH when indicated, review wound healing, support breastfeeding and safe mobilisation, and monitor blood pressure and glucose according to risk.',
    },
    {
      id: 'm27-q10',
      stem: 'Which statement about vitamin D in pregnancy with obesity is correct?',
      options: [
        'It prevents all obesity-related complications',
        'The notes cite 10 micrograms (400 IU) daily, with individual risk assessment',
        'It should be avoided in obesity',
        'A single megadose replaces all supplementation',
      ],
      answerIndex: 1,
      explanation:
        'The notes cite 10 micrograms (400 IU) daily. Supplementation should follow national guidance and individual deficiency/risk assessment, and it does not prevent all obesity-related pregnancy complications.',
    },
  ],
};
