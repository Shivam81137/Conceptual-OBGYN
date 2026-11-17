import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 37 - Antenatal Fetal Health Surveillance (SOGC Guideline No. 441)
 * ---------------------------------------------------------------------------
 * Source: SOGC Clinical Practice Guideline No. 441 "Antenatal Fetal Health
 * Surveillance" (J Obstet Gynaecol Can 2023; Venu Jain chair, MFM Committee);
 * supersedes No. 197a (2007).
 *
 * Scope note: the linked ScienceDirect page exposes the abstract, summary
 * statements, recommendations, recommended changes in practice, key messages,
 * introduction and section snippets. The full text is behind a paywall, so this
 * module contains only what is visible there.
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const ANTENATAL_FHS_SOGC_441_MODULE: StudioModule = {
  id: 'pg-mod-37-antenatal-fetal-health-surveillance-sogc-441',
  track: 'NEET_PG',
  title: 'Antenatal Fetal Health Surveillance (SOGC Guideline No. 441)',
  shortTitle: 'SOGC 441 Fetal Surveillance',
  summary:
    'PG revision module on SOGC Clinical Practice Guideline No. 441 on antenatal fetal health surveillance. Features the aim of detecting perinatal risk factors and fetal decompensation, the principle that non-routine modalities (NST, BPP, Doppler) are used only with a clear risk factor, fetal movement monitoring from 26 weeks with immediate assessment for reduced movements, abnormal symphysis-fundal height (≥3 cm behind or below the 10th percentile by INTERGROWTH-21st), the single deepest pocket of at least 2 cm × 1 cm for the BPP amniotic fluid component, the fact that perceived movements are only about 40% of the total at term, shared decision-making, communication and documentation, and GRADE-rated summary statements and recommendations, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline: 'FM counting from 26 weeks; SDP ≥2 × 1 cm; test only with a risk factor.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 30,
  tags: [
    'SOGC 441',
    'Fetal Health Surveillance',
    'Fetal Movements 26 Weeks',
    'SDP 2 × 1 cm',
    'NST',
    'BPP / mBPP',
    'SFH',
    'INTERGROWTH-21st',
    'Reduced Fetal Movements',
    'Stillbirth',
    'GRADE',
  ],
  sourceTag: 'SOGC Clinical Practice Guideline No. 441 (JOGC 2023): abstract, statements and recommendations',
  updatedAtISO: '2026-11-17T15:30:00.000Z',
  notes: [
    {
      id: 'purpose-context',
      heading: 'Purpose, Scope and Context',
      intro:
        'A fetus can be assessed only indirectly: through maternal perception of fetal movements, fetal heart rate patterns and sonography. Antenatal fetal health surveillance (FHS) distinguishes fetuses that are well from those in gradual decline so that delivery can be considered before asphyxia or stillbirth.',
      flow: [
        'Identify perinatal risk factors',
        'Choose basic and/or advanced modalities by risk',
        'Detect fetal decompensation early',
        'Support adaptation or expedite delivery',
        'Weigh benefits against harms of false positives',
      ],
      bullets: [
        'Objective: summarise evidence and make recommendations for antenatal FHS to detect perinatal risk factors and potential fetal decompensation and allow timely intervention to prevent perinatal morbidity/mortality.',
        'Target Population: pregnant individuals with or without maternal, fetal or pregnancy-associated risk factors.',
        'Options: basic and/or advanced testing according to risk factors.',
        'Benefits: FHS in those with identified risk factors may reduce adverse outcomes.',
        'Harms: high false-positive rate may cause unnecessary intervention, parental anxiety, premature or operative birth and resource use.',
        'Stillbirth: about 7-8 per 1000 pregnancies (Canadian definition) and not significantly declined over 30 years.',
        'Evidence Base: limited high-quality research on modality, timing, frequency and test effectiveness; recommendations often rely on expert opinion.',
        'Supersedes: Guideline No. 197a (2007); evidence searched to January 2022; GRADE used.',
        'Audience: MFM specialists, obstetricians, family physicians, midwives, nurses, nurse practitioners, radiologists.',
        'Gestational Age Notation: WHO convention (day 0 of week 0 is first day of LMP).',
      ],
      table: {
        head: ['Item', 'Detail'],
        rows: [
          ['Guideline', 'SOGC No. 441 (supersedes 197a, 2007)'],
          ['Search', 'Medline, PubMed, Embase, Cochrane to Jan 2022'],
          ['Rating', 'GRADE'],
          ['Stillbirth rate', '~7-8 per 1000 (Canadian definition)'],
          ['Main harm', 'False positives → anxiety, preterm/operative birth'],
        ],
      },
      pearls: [
        'Golden Pearl: FHS aims to detect risk factors and decompensation to allow timely intervention; it is not a routine screen for all.',
        'Despite widespread use of FHS, stillbirth has not fallen significantly in 30 years.',
      ],
      trap: {
        title: 'Examiner trap - assuming surveillance guarantees well-being',
        body: 'FHS modalities assess the fetus at a single point in time and may have poor predictive value for ongoing well-being.',
      },
      traps: [
        { title: '• Ignoring the high false-positive rate.' },
        { title: '• Quoting 197a instead of the current No. 441.' },
      ],
    },
    {
      id: 'risk-factors-prenatal-assessment',
      heading: 'Risk Factor Identification and Prenatal Assessment',
      intro:
        'Surveillance is dynamic: risk factors are reviewed at the first visit and updated throughout pregnancy. Pregnancies may have multiple risk factors, producing a complex estimate of risk.',
      flow: [
        'Document prior-pregnancy, fetal, maternal, familial risk factors at first visit',
        'Update through pregnancy',
        'Advise on local resources / transfer of care',
        'Regular visit: FHT, uterine size, concerns, care plan, discussion',
        'Choose additional testing by risk',
      ],
      bullets: [
        'Recommendation 1: review and document perinatal risk factors (prior pregnancy, fetal, maternal, familial) at the initial visit and update (strong, moderate).',
        'Recommendation 2: advise of local resources and need for transfer of care based on risk factors (strong, moderate).',
        'Recommendation 3: regular prenatal visits include fetal heart tones, uterine size, pregnancy concerns/risk factors, plan of care and discussion (strong, moderate).',
        'Risk Factors: necessitate additional testing, interventions such as delivery or transfer to specialised centres or providers.',
        'SFH: abnormally low when ≥3 cm behind gestational age or below the 10th percentile (INTERGROWTH-21st).',
        'Prenatal Visits: in person, virtual or both; revised standards in the Michigan Plan for Appropriate Tailored Healthcare in Pregnancy (MiPATH).',
        'Summary Statement 1: ongoing early identification of risk factors allows an individualised plan (moderate).',
      ],
      table: {
        head: ['Element', 'Recommendation'],
        rows: [
          ['Risk factor review', 'Initial visit and ongoing (strong)'],
          ['Transfer of care', 'Advise by risk (strong)'],
          ['Routine visit', 'FHT, uterine size, concerns, plan'],
          ['Low SFH', '≥3 cm behind GA or <10th centile (INTERGROWTH-21st)'],
        ],
      },
      pearls: [
        'Golden Pearl: SFH is abnormally low when ≥3 cm behind gestational age or below the 10th percentile by INTERGROWTH-21st.',
        'Risk assessment is dynamic, not a one-time exercise.',
      ],
      trap: {
        title: 'Examiner trap - using a single early risk assessment',
        body: 'Risk factors must be documented at the first visit and updated throughout pregnancy.',
      },
      traps: [{ title: '• Failing to document the plan of care at routine visits.' }],
    },
    {
      id: 'fetal-movements',
      heading: 'Maternal Perception of Fetal Movements',
      intro:
        'Fetal movement assessment requires no technology, can be done regularly and longitudinally and is available to all pregnant individuals.',
      flow: [
        'First movements 16-20 weeks',
        'Regular pattern by ~26 weeks',
        'Advise regular movement monitoring from 26 weeks',
        'Reduced movements: present immediately',
        'Assessment (e.g. NST / sonography) per local protocol',
      ],
      bullets: [
        'Recommendation 4: advise all pregnant individuals to regularly monitor fetal movements from 26 weeks (conditional, low).',
        'Recommendation 5: if movements are reduced, regardless of technique, present immediately to the care provider or obstetrical unit (strong, low).',
        'First Perception: usually 16-20 weeks (varies).',
        'Pattern: a regular pattern identifiable by ~26 weeks.',
        'Perceived Proportion: only about 40% of all fetal movements are felt at term.',
        'Technique: the technique used does not alter the advice to present immediately.',
      ],
      table: {
        head: ['Point', 'Detail'],
        rows: [
          ['First felt', '16-20 weeks'],
          ['Start monitoring', '26 weeks (conditional, low)'],
          ['Reduced movements', 'Present immediately (strong, low)'],
          ['Movements felt at term', '~40% of all movements'],
        ],
      },
      pearls: [
        'Golden Pearl: monitor fetal movements from 26 weeks and attend immediately for reduced movements irrespective of method.',
        'Mothers feel only ~40% of fetal movements at term.',
      ],
      trap: {
        title: 'Examiner trap - waiting until the next day',
        body: 'With reduced fetal movements, present immediately; do not wait or rely on a particular counting technique.',
      },
      traps: [{ title: '• Telling the woman to wait if a chosen count method is "normal".' }],
    },
    {
      id: 'nst-sonography',
      heading: 'NST and Sonography in Surveillance',
      intro:
        'The NST infers oxygenation from neurological and cardiovascular reflex responses; sonography adds real-time behaviour, vascular physiology, amniotic fluid assessment and growth.',
      flow: [
        'Indication or risk factor present?',
        'NST (trained professional) ± full clinical picture',
        'Sonography: amniotic fluid, EFW, BPP / mBPP, Doppler',
        'Fluid criterion: SDP ≥2 × 1 cm',
        'Escalate per local protocol',
      ],
      bullets: [
        'NST Basis: external electronic fetal monitoring; fetal movements produce FHR accelerations that are absent in progressive compromise often associated with hypoxia.',
        'Variability: reflects autonomic function; loss most often reflects a fetal sleep cycle but may indicate compromise.',
        'Summary Statement 2: NST used with the whole clinical picture and only with a clear indication or increased risk of hypoxaemia (moderate).',
        'Recommendation 6: NST should be administered and interpreted by appropriately trained health professionals (strong, high).',
        'Summary Statement 3: sonography evaluates amniotic fluid, estimated fetal weight, BPP/mBPP and Doppler in pregnancies at risk of morbidity (moderate).',
        'Recommendation 7: use a ≥2 cm × 1 cm pocket by transabdominal sonography as the amniotic fluid criterion of the BPP (strong, moderate).',
        'Recommendation 9: use non-routine modalities (NST, BPP, Doppler) only with a clear indication or finding associated with increased risk of fetal hypoxaemia (strong, moderate).',
        'BPP Rationale: founded on observational studies; sonography is a cornerstone of FHS.',
      ],
      table: {
        head: ['Modality', 'Key SOGC statement', 'Grade'],
        rows: [
          ['NST', 'Trained interpretation; only with clear indication', 'Strong, high'],
          ['BPP fluid', 'SDP ≥2 cm × 1 cm', 'Strong, moderate'],
          ['Sonography', 'Amniotic fluid, EFW, BPP/mBPP, Doppler for at-risk', 'Moderate'],
          ['Non-routine tests', 'Only with risk factor', 'Strong, moderate'],
        ],
      },
      pearls: [
        'Golden Pearl: SOGC uses a single deepest pocket of ≥2 cm × 1 cm for the BPP fluid component.',
        'Non-routine tests (NST, BPP, Doppler) are for pregnancies with ≥1 risk factor.',
        'Loss of variability often reflects sleep but may signal compromise.',
      ],
      trap: {
        title: 'Examiner trap - routine NST for all low-risk women',
        body: 'NST, BPP and fetal Doppler should be used only when one or more risk factors for fetal decompensation have been identified.',
      },
      traps: [
        { title: '• Interpreting the NST without the whole clinical picture.' },
        { title: '• Using a 2 cm vertical pocket alone without the 1 cm width.' },
      ],
    },
    {
      id: 'communication-protocols',
      heading: 'Communication, Documentation and Shared Decision-Making',
      intro:
        'Communication failures are a major contributor to adverse outcomes; clear terminology, documentation and escalation protocols improve safety.',
      bullets: [
        'Summary Statement 4: interprofessional communication and documentation should be clear using accepted, defined terminology (high).',
        'Recommendation 8: develop local protocols to communicate and document fetal-status changes and escalation of care (strong, moderate).',
        'Key Message 1: use FHS with the whole picture — risk factors, local resources and protocols, urgency, patient preferences — in shared decision-making.',
        'Key Message 2: modalities assess the fetus at one time point and may have poor predictive value for ongoing well-being.',
        'Key Message 3: develop regional protocols for testing, consultation, transfer of care and communication based on resources.',
        'Patient Safety: focus on systems issues and support for providers rather than blame alone.',
      ],
      table: {
        head: ['Key message', 'Takeaway'],
        rows: [
          ['1', 'Whole clinical picture + shared decision-making'],
          ['2', 'Single time point; poor prediction of ongoing well-being'],
          ['3', 'Regional protocols for testing, consultation, transfer, communication'],
        ],
      },
      pearls: [
        'Golden Pearl: develop clear local protocols for communication, documentation and escalation (strong, moderate).',
        'Accepted, defined terminology is graded high-quality evidence.',
      ],
      trap: {
        title: 'Examiner trap - treating FHS as purely technical',
        body: 'Safety depends on communication, documentation and escalation pathways as much as on the tests themselves.',
      },
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Fifteen rapid-fire points to lock in before the exam.',
      pearls: [
        'SOGC 441 supersedes 197a (2007).',
        'Monitor fetal movements from 26 weeks (conditional, low).',
        'Reduced movements: present immediately (strong, low).',
        'Mothers perceive ~40% of movements at term.',
        'SDP ≥2 cm × 1 cm for BPP fluid (strong, moderate).',
        'Low SFH: ≥3 cm behind GA or <10th percentile (INTERGROWTH-21st).',
        'Use NST/BPP/Doppler only with a risk factor.',
        'NST must be done and read by trained staff (strong, high).',
        'Modalities are single time-point assessments.',
        'High false-positive rate → anxiety, premature or operative birth.',
        'Stillbirth ~7-8 per 1000 and not falling.',
        'Document risk factors at first visit and update.',
        'Advise on local resources/transfer of care.',
        'Develop local escalation and communication protocols.',
        'Use shared decision-making.',
      ],
      traps: [
        { title: '• Routine NST in low-risk women.' },
        { title: '• Delaying assessment for reduced fetal movements.' },
        { title: '• Using AFI/other criteria instead of SDP for BPP fluid in SOGC.' },
        { title: '• Forgetting documentation and escalation protocols.' },
      ],
    },
  ],

  flashcards: [
    { id: 'm37-f1', front: 'What is the aim of antenatal FHS per SOGC 441?', back: 'To detect perinatal risk factors and potential fetal decompensation in the antenatal period so timely interventions can prevent perinatal morbidity and mortality.' },
    { id: 'm37-f2', front: 'Which guideline did No. 441 supersede?', back: 'SOGC No. 197a, published September 2007.' },
    { id: 'm37-f3', front: 'How is a fetus assessed antenatally?', back: 'Only indirectly: maternal perception of fetal movements, FHR patterns and sonography.' },
    { id: 'm37-f4', front: 'Recommendation on fetal movement monitoring?', back: 'All pregnant individuals should be advised to regularly monitor fetal movements from 26 weeks (conditional, low).' },
    { id: 'm37-f5', front: 'What to do for reduced fetal movements?', back: 'Present immediately to the care provider or obstetrical unit for further evaluation, regardless of technique used (strong, low).' },
    { id: 'm37-f6', front: 'What proportion of fetal movements do mothers perceive at term?', back: 'About 40%. First movements are felt at 16-20 weeks and a regular pattern by ~26 weeks.' },
    { id: 'm37-f7', front: 'Amniotic fluid criterion for BPP?', back: 'Single deepest pocket ≥2 cm × 1 cm by transabdominal sonography (strong, moderate).' },
    { id: 'm37-f8', front: 'When is symphysis-fundal height abnormally low?', back: '≥3 cm behind gestational age or below the 10th percentile, using INTERGROWTH-21st.' },
    { id: 'm37-f9', front: 'When should NST, BPP or Doppler be used?', back: 'Only when there is a clear indication or finding associated with increased risk of fetal hypoxaemia (≥1 risk factor) (strong, moderate).' },
    { id: 'm37-f10', front: 'Who should perform and interpret the NST?', back: 'Appropriately trained health professionals (strong, high), using the whole clinical picture.' },
    { id: 'm37-f11', front: 'What does loss of FHR variability most often reflect?', back: 'A fetal sleep cycle, but it may also indicate compromise.' },
    { id: 'm37-f12', front: 'What are the main harms of FHS?', back: 'High false-positive rate leading to unnecessary intervention, parental anxiety, premature or operative birth and increased resource use.' },
    { id: 'm37-f13', front: 'Stillbirth rate and trend quoted?', back: 'About 7-8 per 1000 pregnancies (Canadian definition), not significantly declined in 30 years despite widespread FHS.' },
    { id: 'm37-f14', front: 'What do the three key messages say?', back: '1) Use the whole clinical picture with shared decision-making. 2) Modalities assess a single time point and predict ongoing well-being poorly. 3) Develop clear regional protocols for testing, consultation, transfer and communication.' },
    { id: 'm37-f15', front: 'Recommendation on communication and safety?', back: 'Develop clear local protocols to communicate and document changes in fetal status and escalation of care (strong, moderate); use accepted defined terminology (high).' },
  ],

  mcqs: [
    {
      id: 'm37-q1',
      stem: 'From which gestational age should pregnant individuals be advised to monitor fetal movements regularly (SOGC 441)?',
      options: ['20 weeks', '24 weeks', '26 weeks', '32 weeks'],
      answerIndex: 2,
      explanation: 'Regular fetal movement monitoring is advised from 26 weeks (conditional, low).',
    },
    {
      id: 'm37-q2',
      stem: 'A woman at 34 weeks notices reduced fetal movements after trying a different counting method. What is the advice?',
      options: ['Wait 24 hours', 'Present immediately for evaluation', 'Repeat counting tomorrow', 'Increase fluids only'],
      answerIndex: 1,
      explanation: 'Regardless of technique, reduced movements require immediate presentation (strong, low).',
    },
    {
      id: 'm37-q3',
      stem: 'What amniotic fluid criterion does SOGC use for the BPP?',
      options: ['AFI ≥5 cm', 'SDP ≥2 cm × 1 cm', 'SDP ≥8 cm', 'Two pockets of 1 cm'],
      answerIndex: 1,
      explanation: 'A single deepest pocket of at least 2 cm × 1 cm on transabdominal sonography.',
    },
    {
      id: 'm37-q4',
      stem: 'Symphysis-fundal height is considered abnormally low when:',
      options: ['≥1 cm behind GA', '≥3 cm behind GA or <10th percentile', '≥5 cm behind GA', 'Above the 90th percentile'],
      answerIndex: 1,
      explanation: 'Per SOGC 441 using the INTERGROWTH-21st Project.',
    },
    {
      id: 'm37-q5',
      stem: 'Which statement about NST, BPP and Doppler is correct?',
      options: ['Routine in all pregnancies', 'Used only when a risk factor for fetal decompensation is identified', 'Replace fetal movement counting', 'Required weekly from 20 weeks'],
      answerIndex: 1,
      explanation: 'Non-routine modalities should be used only with a clear indication or finding associated with increased risk of hypoxaemia.',
    },
    {
      id: 'm37-q6',
      stem: 'Approximately what proportion of fetal movements are felt by the mother at term?',
      options: ['10%', '40%', '80%', '100%'],
      answerIndex: 1,
      explanation: 'Only about 40% of all fetal movements are perceived at term.',
    },
    {
      id: 'm37-q7',
      stem: 'Which is the principal harm of FHS highlighted by SOGC?',
      options: ['Fetal radiation exposure', 'High false-positive rate with unnecessary interventions', 'Maternal hypotension', 'Fetal arrhythmia'],
      answerIndex: 1,
      explanation: 'False positives may lead to anxiety, premature or operative birth and increased resource use.',
    },
    {
      id: 'm37-q8',
      stem: 'Loss of FHR variability on an NST most often reflects:',
      options: ['Fetal acidosis', 'Fetal sleep cycle', 'Maternal fever', 'Cord prolapse'],
      answerIndex: 1,
      explanation: 'Loss of variability most often reflects a sleep cycle but may also indicate compromise; interpret in context.',
    },
    {
      id: 'm37-q9',
      stem: 'Which best describes the predictive value of FHS modalities?',
      options: ['They guarantee well-being until the next test', 'They assess a single point in time and may predict ongoing well-being poorly', 'They are perfectly sensitive', 'They replace clinical review'],
      answerIndex: 1,
      explanation: 'SOGC key message 2.',
    },
    {
      id: 'm37-q10',
      stem: 'Which guideline did SOGC No. 441 replace?',
      options: ['No. 197a (2007)', 'No. 400 (2019)', 'No. 62 (1997)', 'No. 300 (2014)'],
      answerIndex: 0,
      explanation: 'No. 441 supersedes No. 197a, published in September 2007.',
    },
  ],
};
