import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 31 - Heart Failure During Pregnancy and Postpartum (SMFM Guidance)
 * ---------------------------------------------------------------------------
 * Source: SMFM news release (2 Oct 2025) "SMFM Issues New Guidance on Diagnosing
 * and Managing Heart Failure During Pregnancy and Postpartum", summarising
 * SMFM Consult Series #73: Diagnosis and management of right and left heart
 * failure during pregnancy and postpartum (Pregnancy journal; supported by the
 * Heart Rhythm Society).
 *
 * Scope note: the linked page is a recommendation-highlights summary. This module
 * contains only what that page states; it does not add full-guideline detail.
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const HEART_FAILURE_PREGNANCY_SMFM_MODULE: StudioModule = {
  id: 'pg-mod-31-heart-failure-pregnancy-smfm',
  track: 'NEET_PG',
  title: 'Heart Failure During Pregnancy and Postpartum (SMFM)',
  shortTitle: 'Heart Failure in Pregnancy',
  summary:
    'PG revision module on SMFM Consult Series #73 (October 2025) on diagnosis and management of right and left heart failure in pregnancy and postpartum, built from the SMFM recommendation highlights. Features why heart disease is a leading cause of pregnancy-related death, the overlap of heart failure symptoms with normal pregnancy, preconception counselling for all known heart failure, offering abortion care when severe pulmonary arterial hypertension or LVEF below 30%, individualised decisions after peripartum cardiomyopathy, drugs to stop (SGLT2 inhibitors, spironolactone, ACE inhibitors, ARBs, ARNI) with hydralazine as an alternative, continuing beta-blockers (metoprolol, carvedilol, bisoprolol), term delivery with vaginal birth preferred, close postpartum monitoring and breastfeeding medication review, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline: 'Stop ACEi/ARB/ARNI/MRA/SGLT2i; keep beta-blockers; team-based, term vaginal delivery.',
  highYield: true,
  weightage: 'High Yield',
  durationMinutes: 25,
  tags: [
    'SMFM Consult Series 73',
    'Heart Failure',
    'HFrEF',
    'Peripartum Cardiomyopathy',
    'Pregnancy Heart Team',
    'Beta-Blockers',
    'ACE Inhibitors',
    'Hydralazine',
    'Pulmonary Hypertension',
    'EF <30%',
    'Postpartum Monitoring',
  ],
  sourceTag: 'SMFM news release 2 Oct 2025: Consult Series #73, heart failure in pregnancy and postpartum',
  updatedAtISO: '2026-11-17T15:00:00.000Z',
  notes: [
    {
      id: 'burden-diagnosis',
      heading: 'Burden, Definition and Recognition',
      intro:
        'Heart disease is a leading cause of pregnancy-related deaths in the US, with a disproportionate share among non-Hispanic Black individuals. Heart failure is a syndrome in which the heart cannot pump blood effectively and is a major contributor to maternal morbidity and mortality.',
      flow: [
        'Dyspnoea and fatigue in pregnancy',
        'Remember these overlap with normal pregnancy symptoms',
        'Identify which ventricle is affected (left, right or both)',
        'Classify acute vs chronic and consider individual factors',
        'Tailor treatment',
      ],
      bullets: [
        'Burden: heart disease is a leading cause of pregnancy-related death and a growing problem.',
        'Equity: a disproportionate percentage of deaths occur among non-Hispanic Black individuals.',
        'Fetal Outcomes: heart disease including heart failure increases risk of low birthweight, lower Apgar scores, preterm birth and death.',
        'Focus of Guidance: pregnant patients with heart failure with reduced ejection fraction (HFrEF).',
        'Symptoms: shortness of breath and fatigue, which can also be normal in pregnancy, so heart failure may be missed.',
        'Ventricles: heart failure may involve the left, right or both ventricles.',
        'Treatment Depends On: which ventricle is affected, acute versus chronic, and other individual health factors.',
        'Early Diagnosis: accurate diagnosis and treatment before or early in pregnancy is life-prolonging if caught early.',
      ],
      table: {
        head: ['Item', 'Key point'],
        rows: [
          ['Leading cause', 'Heart disease in pregnancy-related deaths (US)'],
          ['Neonatal risks', 'Low birthweight, low Apgar, prematurity, death'],
          ['Guidance focus', 'HFrEF'],
          ['Pitfall', 'Dyspnoea/fatigue overlap with normal pregnancy'],
          ['Management driver', 'Ventricle involved, acute vs chronic'],
        ],
      },
      pearls: [
        'Golden Pearl: heart failure symptoms (dyspnoea, fatigue) mimic normal pregnancy; keep a high index of suspicion.',
        'Treatment is individualised by affected ventricle, acuity and patient factors.',
      ],
      trap: {
        title: 'Examiner trap - attributing all dyspnoea to normal pregnancy',
        body: 'Shortness of breath and fatigue are also symptoms of heart failure; accurate diagnosis before or early in pregnancy is life-prolonging.',
      },
      traps: [
        { title: '• Overlooking right heart failure — both ventricles can be affected.' },
        { title: '• Ignoring the inequity in maternal cardiovascular deaths.' },
      ],
    },
    {
      id: 'counselling',
      heading: 'Preconception Counselling and Pregnancy Decisions',
      intro:
        'Prepregnancy counselling, a multidisciplinary team and referral to centres with expertise are critical to optimise outcomes.',
      flow: [
        'Known heart failure of any severity',
        'Preconception or early-pregnancy consultation to categorise risk',
        'Severe PAH or LVEF <30%: offer abortion care',
        'If continuing: specialised centre with a Pregnancy Heart Team',
        'PPCM history: individualise future pregnancy decisions',
      ],
      bullets: [
        'All Known HF: preconception or early-pregnancy consultation regardless of severity, to categorise risk and identify maternal and perinatal risks.',
        'High-Risk Group: severe pulmonary arterial hypertension and severe left ventricular dysfunction (EF <30%) should be offered abortion care.',
        'Continuing Pregnancy: support at specialised centres with Pregnancy Heart Teams.',
        'Peripartum Cardiomyopathy History: individualise decisions on future pregnancy.',
        'Resolved HF: make patients aware of recurrence rates and the severity if recurrence occurs.',
        'Team: multidisciplinary care is critical.',
      ],
      table: {
        head: ['Situation', 'Recommendation'],
        rows: [
          ['Any known heart failure', 'Preconception / early pregnancy risk consultation'],
          ['Severe PAH or LVEF <30%', 'Offer abortion care; if continuing, Pregnancy Heart Team at specialised centre'],
          ['Prior PPCM', 'Individualise; counsel on recurrence and severity'],
        ],
      },
      pearls: [
        'Golden Pearl: severe PAH or LVEF <30% → offer abortion care and, if she continues, a Pregnancy Heart Team at a specialised centre.',
        'Counselling applies regardless of heart failure severity.',
      ],
      trap: {
        title: 'Examiner trap - counselling only severe disease',
        body: 'Preconception or early-pregnancy consultation is recommended for all known heart failure, not just severe cases.',
      },
      traps: [
        { title: '• Telling women with resolved PPCM that recurrence is not a concern.' },
        { title: '• Failing to refer to a centre with a Pregnancy Heart Team.' },
      ],
    },
    {
      id: 'medications',
      heading: 'Medications in Pregnancy and Breastfeeding',
      intro:
        'Several heart failure drugs must be stopped before or during pregnancy and replaced with alternatives; beta-blockers are continued.',
      flow: [
        'Planning pregnancy or pregnant',
        'Stop SGLT2i, spironolactone, ACEi, ARB, ARNI',
        'Replace with alternatives such as hydralazine',
        'Continue metoprolol, carvedilol or bisoprolol',
        'Breastfeeding: use ACEi, ARB, MRA, SGLT2i with caution',
      ],
      bullets: [
        'Discontinue: SGLT2 inhibitors, spironolactone, ACE inhibitors, ARBs and ARNI in those planning pregnancy or already pregnant.',
        'Alternative: for example hydralazine.',
        'Continue: beta-blockers such as metoprolol, carvedilol and bisoprolol.',
        'Counselling: all medication changes should be discussed with the care provider.',
        'Breastfeeding: ACEi, ARB, aldosterone antagonists and SGLT2i should be used with caution because of potential risk to the newborn.',
        'Review: all postpartum medications should be reviewed for compatibility and safety with breastfeeding.',
      ],
      table: {
        head: ['Drug class', 'In pregnancy', 'Breastfeeding'],
        rows: [
          ['ACE inhibitor / ARB / ARNI', 'Stop', 'Use with caution (ACEi/ARB)'],
          ['Spironolactone', 'Stop', 'Caution (aldosterone antagonists)'],
          ['SGLT2 inhibitor', 'Stop', 'Caution'],
          ['Beta-blockers (metoprolol, carvedilol, bisoprolol)', 'Continue', 'Review compatibility'],
          ['Hydralazine', 'Alternative', 'Review compatibility'],
        ],
      },
      pearls: [
        'Golden Pearl: stop SGLT2i, spironolactone, ACEi, ARB and ARNI; continue beta-blockers; hydralazine is an alternative.',
        'ACEi, ARB, aldosterone antagonists and SGLT2i need caution while breastfeeding.',
      ],
      trap: {
        title: 'Examiner trap - stopping beta-blockers with the other HF drugs',
        body: 'Metoprolol, carvedilol and bisoprolol should be continued; it is the RAAS/ARNI, MRA and SGLT2 inhibitor classes that are discontinued.',
      },
      traps: [
        { title: '• Continuing an ACE inhibitor through pregnancy.' },
        { title: '• Prescribing spironolactone in a pregnant woman with HFrEF.' },
      ],
    },
    {
      id: 'delivery-postpartum',
      heading: 'Delivery Planning and Postpartum Care',
      intro:
        'Delivery planning starts with identifying the healthcare team. Many maternal cardiovascular deaths and severe illnesses occur after hospital discharge.',
      flow: [
        'Assemble team: obstetrics, MFM, cardiology, anaesthesiology, nursing',
        'Plan delivery at term in most uncomplicated patients',
        'Vaginal delivery preferred; caesarean for obstetric indications',
        'Close postpartum monitoring (rapid cardiovascular changes)',
        'Infant-feeding counselling and medication review',
      ],
      bullets: [
        'Team: obstetrics, maternal-fetal medicine, cardiology, anaesthesiology, nursing and others.',
        'Timing: delivery at term is the goal in most uncomplicated patients.',
        'Mode: vaginal delivery preferred unless caesarean is needed for obstetric indications.',
        'Postpartum Risk: many maternal cardiovascular deaths and severe illnesses occur after discharge.',
        'Monitoring: close postpartum monitoring due to substantial and rapid cardiovascular changes after birth.',
        'Feeding: routine counselling about infant feeding and review of all medications for breastfeeding safety.',
      ],
      table: {
        head: ['Aspect', 'Recommendation'],
        rows: [
          ['Team', 'OB, MFM, cardiology, anaesthesia, nursing'],
          ['Timing', 'Term in most uncomplicated cases'],
          ['Mode', 'Vaginal unless obstetric indication for caesarean'],
          ['Postpartum', 'Close monitoring; many events after discharge'],
          ['Breastfeeding', 'Counsel and review all medications'],
        ],
      },
      pearls: [
        'Golden Pearl: term, vaginal delivery is preferred in uncomplicated HF; caesarean is for obstetric indications.',
        'Do not stop vigilance at discharge — many cardiovascular deaths occur after leaving hospital.',
      ],
      trap: {
        title: 'Examiner trap - caesarean for every cardiac patient',
        body: 'The guidance prefers vaginal delivery at term unless caesarean is needed for obstetric indications.',
      },
      traps: [
        { title: '• Discharging without close postpartum cardiac follow-up.' },
        { title: '• Forgetting breastfeeding compatibility of cardiac drugs.' },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Fifteen rapid-fire points to lock in before the exam.',
      pearls: [
        'SMFM Consult Series #73 covers right and left heart failure in pregnancy and postpartum.',
        'Heart disease is a leading cause of pregnancy-related death in the US.',
        'Dyspnoea and fatigue overlap with normal pregnancy.',
        'Guidance focuses on HFrEF.',
        'All known HF: preconception or early-pregnancy consultation.',
        'Severe PAH or EF <30%: offer abortion care.',
        'If continuing: Pregnancy Heart Team at a specialised centre.',
        'PPCM history: individualise future pregnancies.',
        'Stop SGLT2i, spironolactone, ACEi, ARB, ARNI.',
        'Hydralazine is an alternative.',
        'Continue metoprolol, carvedilol, bisoprolol.',
        'Term delivery with vaginal birth preferred.',
        'Caesarean for obstetric indications.',
        'Many cardiovascular deaths occur after discharge.',
        'Review breastfeeding compatibility of all drugs.',
      ],
      traps: [
        { title: '• Stopping beta-blockers.' },
        { title: '• Continuing ACEi/ARB/ARNI/MRA in pregnancy.' },
        { title: '• Counselling only severe disease.' },
        { title: '• Routine caesarean for heart failure.' },
      ],
    },
  ],

  flashcards: [
    { id: 'm31-f1', front: 'What does SMFM Consult Series #73 cover?', back: 'Diagnosis and management of right and left heart failure during pregnancy and postpartum (published in Pregnancy, supported by the Heart Rhythm Society).' },
    { id: 'm31-f2', front: 'Why can heart failure be missed in pregnancy?', back: 'Shortness of breath and fatigue are also normal pregnancy symptoms.' },
    { id: 'm31-f3', front: 'Which type of heart failure does the SMFM guidance focus on?', back: 'Heart failure with reduced ejection fraction (HFrEF).' },
    { id: 'm31-f4', front: 'What determines heart failure treatment in pregnancy?', back: 'Which ventricle is affected (left, right or both), whether it is acute or chronic, and other individual health factors.' },
    { id: 'm31-f5', front: 'Who should get preconception or early-pregnancy consultation?', back: 'All patients with known heart failure, regardless of severity, to categorise risk and identify maternal and perinatal risks.' },
    { id: 'm31-f6', front: 'Which patients should be offered abortion care?', back: 'Those with severe pulmonary arterial hypertension and severe left ventricular dysfunction (EF <30%). Those who continue should be supported at specialised centres with Pregnancy Heart Teams.' },
    { id: 'm31-f7', front: 'How should future pregnancy after PPCM be handled?', back: 'Individualised; patients with fully resolved heart failure should be informed of recurrence rates and severity if it recurs.' },
    { id: 'm31-f8', front: 'Which heart failure drugs are stopped in pregnancy?', back: 'SGLT2 inhibitors, spironolactone, ACE inhibitors, ARBs and ARNI, replaced by alternatives such as hydralazine.' },
    { id: 'm31-f9', front: 'Which drugs should be continued?', back: 'Beta-blockers such as metoprolol, carvedilol and bisoprolol.' },
    { id: 'm31-f10', front: 'Breastfeeding and heart failure drugs?', back: 'ACEi, ARB, aldosterone antagonists and SGLT2i should be used with caution because of potential risk to the newborn; review all medications for compatibility.' },
    { id: 'm31-f11', front: 'Who forms the delivery planning team?', back: 'Obstetrics, maternal-fetal medicine, cardiology, anaesthesiology, nursing and others.' },
    { id: 'm31-f12', front: 'Preferred timing and mode of delivery?', back: 'Term delivery in most uncomplicated patients with vaginal delivery preferred, unless caesarean is needed for obstetric indications.' },
    { id: 'm31-f13', front: 'Why is postpartum monitoring crucial?', back: 'Many maternal cardiovascular deaths and severe illnesses occur after hospital discharge due to rapid cardiovascular changes after birth.' },
    { id: 'm31-f14', front: 'Fetal and neonatal risks from maternal heart disease?', back: 'Low birthweight, lower Apgar scores, premature birth and death.' },
    { id: 'm31-f15', front: 'Equity point in the SMFM statement?', back: 'Heart disease is a leading cause of US pregnancy-related deaths, with a disproportionate share among non-Hispanic Black individuals.' },
  ],

  mcqs: [
    {
      id: 'm31-q1',
      stem: 'A pregnant woman with HFrEF is on carvedilol, lisinopril and spironolactone. Which change is recommended?',
      options: [
        'Stop all three drugs',
        'Continue carvedilol; stop lisinopril and spironolactone and use alternatives such as hydralazine',
        'Continue all three',
        'Stop carvedilol only',
      ],
      answerIndex: 1,
      explanation: 'Beta-blockers (metoprolol, carvedilol, bisoprolol) continue; ACEi, ARB, ARNI, spironolactone and SGLT2i are discontinued, with alternatives like hydralazine.',
    },
    {
      id: 'm31-q2',
      stem: 'A woman with severe pulmonary arterial hypertension asks about pregnancy. What does SMFM recommend?',
      options: ['No counselling needed', 'Offer abortion care; if she continues, care at a specialised centre with a Pregnancy Heart Team', 'Routine antenatal care', 'Start an ARNI'],
      answerIndex: 1,
      explanation: 'Severe PAH and EF <30% warrant being offered abortion care; continuation needs specialised Pregnancy Heart Team care.',
    },
    {
      id: 'm31-q3',
      stem: 'LVEF below which value, with severe left ventricular dysfunction, prompts offering abortion care?',
      options: ['<50%', '<40%', '<30%', '<20%'],
      answerIndex: 2,
      explanation: 'Severe LV dysfunction defined as EF <30%.',
    },
    {
      id: 'm31-q4',
      stem: 'Which is the preferred delivery plan for an uncomplicated pregnant patient with heart failure?',
      options: ['Elective preterm caesarean', 'Delivery at term, vaginal preferred', 'Delivery at 28 weeks', 'Caesarean in all cases'],
      answerIndex: 1,
      explanation: 'Term delivery is the goal in most uncomplicated patients, with vaginal birth preferred unless caesarean is needed for obstetric indications.',
    },
    {
      id: 'm31-q5',
      stem: 'Which class should be continued in a pregnant woman with HFrEF?',
      options: ['ARNI', 'SGLT2 inhibitor', 'Beta-blocker', 'Aldosterone antagonist'],
      answerIndex: 2,
      explanation: 'Metoprolol, carvedilol and bisoprolol should be continued.',
    },
    {
      id: 'm31-q6',
      stem: 'When do many maternal cardiovascular deaths and severe illnesses occur?',
      options: ['During the first trimester', 'During labor only', 'After hospital discharge following delivery', 'Only at term'],
      answerIndex: 2,
      explanation: 'Many occur after discharge; postpartum patients need close monitoring.',
    },
    {
      id: 'm31-q7',
      stem: 'Which statement about women with previous peripartum cardiomyopathy is correct?',
      options: ['Future pregnancy is always contraindicated', 'Future pregnancy is always safe', 'Decisions should be individualised, with counselling on recurrence rates and severity', 'No counselling is required'],
      answerIndex: 2,
      explanation: 'SMFM advises individualised decisions and awareness of recurrence rates and severity even when heart failure resolved.',
    },
    {
      id: 'm31-q8',
      stem: 'Which of these should be used with caution while breastfeeding?',
      options: ['Metoprolol only', 'ACE inhibitors, ARBs, aldosterone antagonists and SGLT2 inhibitors', 'Hydralazine only', 'None'],
      answerIndex: 1,
      explanation: 'ACEi, ARB, aldosterone antagonists and SGLT2i carry potential newborn risk; all medications should be reviewed for lactation compatibility.',
    },
    {
      id: 'm31-q9',
      stem: 'Why is the diagnosis of heart failure in pregnancy challenging?',
      options: ['No symptoms occur', 'Dyspnoea and fatigue overlap with normal pregnancy', 'Only right heart failure occurs', 'Echocardiography is contraindicated'],
      answerIndex: 1,
      explanation: 'Shortness of breath and fatigue are common normal symptoms of pregnancy.',
    },
    {
      id: 'm31-q10',
      stem: 'Which patients should receive preconception or early-pregnancy consultation?',
      options: ['Only those with EF <30%', 'Only NYHA class IV', 'All with known heart failure regardless of severity', 'Only those on ARNI'],
      answerIndex: 2,
      explanation: 'Consultation is recommended for all known heart failure to categorise risk.',
    },
  ],
};
