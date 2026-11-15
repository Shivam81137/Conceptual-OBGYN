import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 24 - Premenstrual Syndrome (ISPMD / NAPS framework)
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten benign gynaecology notes (obygn 2 pdf,
 * page 15). That page only identifies ISPMD and NAPS; the clinical framework
 * below is an explicit evidence-based expansion for revision.
 *
 * Covers:
 * - What PMS is, and why timing and impact define it
 * - ISPMD Core Premenstrual Disorder criteria
 * - PMS versus PMDD versus premenstrual exacerbation
 * - Prospective symptom diaries and clinical assessment
 * - Non-pharmacological management
 * - SSRIs, combined oral contraceptives, progestogens, GnRH analogues and supplements
 * - Specialist and refractory care, including the rare role of surgery
 * - NAPS and patient support
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const PREMENSTRUAL_SYNDROME_MODULE: StudioModule = {
  id: 'pg-mod-24-premenstrual-syndrome',
  track: 'NEET_PG',
  title: 'Premenstrual Syndrome: ISPMD & NAPS Framework',
  shortTitle: 'Premenstrual Syndrome',
  summary:
    'Complete PG clinical revision module on premenstrual syndrome using the ISPMD Core Premenstrual Disorder framework and NAPS patient-support context. Features the luteal-phase pattern with a symptom-free follicular interval, prospective daily ratings over at least two cycles, the PMS versus PMDD versus premenstrual exacerbation distinction, DSM-5 PMDD requirements for at least five symptoms including a core mood symptom, why routine hormone levels do not diagnose PMS, the non-pharmacological foundation, continuous or luteal-phase SSRIs, drospirenone-containing 24/4 combined pills, progestogen cautions, GnRH analogues with add-back, vitamin B6 neuropathy risk, the exceptional role of bilateral oophorectomy and the fact that hysterectomy with ovaries retained does not stop ovarian cycling, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Luteal pattern, two-cycle diary, PMDD criteria and the treatment ladder.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 35,
  tags: [
    'ISPMD Core PMD',
    'Two-Cycle Diary',
    'Symptom-Free Follicular',
    'PMDD DSM-5',
    'Premenstrual Exacerbation',
    'No Routine Hormones',
    'SSRI Luteal',
    'Drospirenone 24/4',
    'GnRH + Add-Back',
    'Vitamin B6 Neuropathy',
    'Oophorectomy Exception',
    'NAPS Support',
  ],
  sourceTag:
    'Handwritten benign gynaecology revision (obygn 2 pdf, p. 15) • ISPMD Core Premenstrual Disorder framework • DSM-5 PMDD • NAPS patient support',
  updatedAtISO: '2026-11-14T15:45:00.000Z',
  notes: [
    {
      id: 'what-is-pms',
      heading: 'What Is Premenstrual Syndrome?',
      intro:
        'Premenstrual syndrome describes recurrent physical, psychological and behavioural symptoms occurring in the luteal phase of the menstrual cycle, improving during or shortly after menstruation and causing clinically meaningful distress or impairment.',
      flow: [
        'Symptoms arise in the luteal phase',
        'Symptoms improve during or shortly after menstruation',
        'A symptom-free or relatively symptom-free interval follows menstruation',
        'The pattern recurs in most cycles',
        'The symptoms cause clinically significant distress or impairment',
        'The symptoms are not merely premenstrual worsening of another condition',
        'Confirm the pattern with prospective daily ratings',
      ],
      bullets: [
        'Affective: irritability, mood swings, depressed mood, anxiety, tension and emotional sensitivity.',
        'Cognitive/Behavioural: poor concentration, reduced motivation, feeling overwhelmed, appetite change or cravings.',
        'Physical: breast tenderness, bloating, headache, fatigue, sleep disturbance, muscle/joint aches and fluid retention.',
        'Not One Symptom: PMS is not diagnosed by the presence of a single symptom before a period.',
        'Timing Matters: timing, recurrence, the symptom-free interval and functional impact are essential.',
        'Functional Impact: symptoms must cause clinically meaningful distress or impairment.',
      ],
      table: {
        head: ['Domain', 'Typical symptoms'],
        rows: [
          ['Affective', 'Irritability, mood swings, low mood, anxiety, tension'],
          ['Cognitive/behavioural', 'Poor concentration, reduced motivation, overwhelm, appetite change'],
          ['Physical', 'Breast tenderness, bloating, headache, fatigue, sleep disturbance, aches'],
          ['Timing', 'Luteal phase, improving with menstruation'],
          ['Impact', 'Work, school, social activities or relationships'],
        ],
      },
      pearls: [
        'Golden Pearl: the timing and the symptom-free follicular interval define the pattern, not one premenstrual symptom.',
        'PMS can be mild, moderate or severe and affects several symptom domains.',
        'Functional impairment is part of the clinical definition.',
      ],
      trap: {
        title: 'Examiner trap - diagnosing PMS from a single premenstrual symptom',
        body: 'A single symptom before a period is common and does not establish PMS. The diagnosis depends on recurrent luteal symptoms, improvement with menstruation, a symptom-free interval and meaningful distress or impairment.',
      },
      traps: [
        {
          title: '• Accepting retrospective recall without a diary.',
        },
        {
          title: '• Ignoring functional impact.',
        },
        {
          title: '• Treating premenstrual worsening of another disorder as PMS.',
        },
      ],
    },
    {
      id: 'ispmd-criteria',
      heading: 'ISPMD Core Premenstrual Disorder Criteria',
      intro:
        'The ISPMD framework describes Core Premenstrual Disorder using a cyclic pattern. The diagnosis is confirmed with prospective daily symptom ratings over at least two cycles.',
      flow: [
        'Symptoms occur during all or part of the luteal phase',
        'Symptoms resolve during or shortly after menstruation',
        'A clear symptom-free interval follows menstruation until approximate ovulation',
        'The pattern recurs in most menstrual cycles',
        'Symptoms cause clinically significant distress or impairment',
        'Symptoms are not merely premenstrual worsening of another condition',
        'Prospective daily ratings over at least two cycles confirm the pattern',
      ],
      bullets: [
        'Luteal Timing: symptoms occur during all or part of the luteal phase.',
        'Resolution: symptoms resolve during or shortly after menstruation.',
        'Symptom-Free Interval: a clear symptom-free or relatively symptom-free interval between the end of menstruation and approximate ovulation.',
        'Recurrence: the pattern recurs in most menstrual cycles.',
        'Impact: clinically significant distress or impairment in work, school, social activities or relationships.',
        'Not Another Condition: the symptoms are not merely premenstrual worsening of another medical or psychiatric condition.',
        'Prospective Confirmation: prospective daily symptom ratings over at least two cycles.',
        'Variant: the ISPMD framework also recognises premenstrual exacerbation, in which an underlying disorder is present throughout the cycle but worsens premenstrually.',
      ],
      table: {
        head: ['ISPMD Core PMD criterion', 'Clinical meaning'],
        rows: [
          ['Luteal symptoms', 'Occur in all or part of the luteal phase'],
          ['Resolution with menses', 'Improve during or shortly after menstruation'],
          ['Symptom-free interval', 'Clear or relative freedom between menses and ovulation'],
          ['Recurrence', 'Pattern in most cycles'],
          ['Distress/impairment', 'Significant functional impact'],
          ['Not another disorder', 'Not merely premenstrual worsening of a chronic condition'],
          ['Prospective ratings', 'At least two cycles'],
        ],
      },
      pearls: [
        'Golden Pearl: a symptom-free follicular interval is a key clue for Core PMD.',
        'Prospective daily ratings over at least two cycles confirm the pattern.',
        'Premenstrual exacerbation is a recognised variant, not Core PMD.',
      ],
      trap: {
        title: 'Examiner trap - omitting the symptom-free interval',
        body: 'Core PMD requires a clear or relative symptom-free interval between menstruation and ovulation. A condition that is present throughout the cycle and only worsens premenstrually is premenstrual exacerbation.',
      },
      traps: [
        {
          title: '• Diagnosing Core PMD without a follicular symptom-free interval.',
        },
        {
          title: '• Relying on a single cycle of retrospective recall.',
        },
        {
          title: '• Missing an underlying psychiatric or medical disorder.',
        },
      ],
    },
    {
      id: 'pms-pmdd-pme',
      heading: 'PMS versus PMDD versus Premenstrual Exacerbation',
      intro:
        'PMS is the broad clinical syndrome. PMDD is a severe, predominantly affective disorder defined in DSM-5. Premenstrual exacerbation is worsening of an underlying condition that is present throughout the cycle.',
      flow: [
        'PMS · broad syndrome with physical, affective and behavioural symptoms',
        'PMDD · severe, predominantly affective, defined by DSM-5 symptom counts',
        'PME · underlying disorder present all cycle but worse premenstrually',
        'Check whether at least one core mood symptom is present for PMDD',
        'Check whether there is a symptom-free follicular interval',
        'Confirm with prospective ratings over at least two symptomatic cycles',
        'Manage the underlying disorder in PME',
      ],
      bullets: [
        'PMS: broad clinical syndrome with physical, affective and behavioural symptoms; severity varies from mild to severe.',
        'PMS Diagnosis: depends on cyclicity, impairment and prospective confirmation when needed.',
        'PMDD: severe, predominantly affective premenstrual disorder defined in DSM-5.',
        'PMDD Timing: at least five symptoms in the final week before menses, improving within a few days after menses begins and minimal or absent in the postmenstrual week.',
        'PMDD Core Mood: at least one symptom must be affective lability, irritability/anger, depressed mood/hopelessness, or anxiety/tension.',
        'PMDD Impact: significant distress or interference with work, school, social life or relationships.',
        'PMDD Confirmation: prospective daily ratings over at least two symptomatic cycles; diagnosis should not be based only on retrospective recall.',
        'PME: a condition such as depression, anxiety, migraine, epilepsy or asthma exists throughout the cycle but worsens premenstrually.',
        'PME Interval: there may be no clear symptom-free follicular interval.',
        'PME Management: address the underlying disorder as well as any cyclical worsening.',
      ],
      table: {
        head: ['Entity', 'Core pattern', 'Diagnostic key'],
        rows: [
          ['PMS', 'Broad physical, affective and behavioural luteal symptoms', 'Cyclicity plus impairment; prospective confirmation when needed'],
          ['PMDD', 'Severe predominantly affective symptoms', 'At least 5 symptoms including at least 1 core mood symptom; functional impairment'],
          ['PME', 'Underlying disorder present all cycle, worse premenstrually', 'No clear symptom-free interval; treat the underlying condition'],
        ],
      },
      pearls: [
        'Golden Pearl: PMDD is not simply severe PMS in everyday language; it has defined symptom-number and mood-symptom criteria.',
        'At least five symptoms and at least one core mood symptom are needed for PMDD.',
        'PME has no clear symptom-free follicular interval and needs the underlying disorder treated.',
      ],
      trap: {
        title: 'Examiner trap - labelling every severe PMS as PMDD',
        body: 'PMDD requires at least five symptoms in the final premenstrual week, at least one core affective symptom, improvement after menses and significant functional interference, confirmed prospectively over at least two cycles.',
      },
      traps: [
        {
          title: '• Diagnosing PMDD without a core mood symptom.',
        },
        {
          title: '• Missing premenstrual exacerbation of depression or anxiety.',
        },
        {
          title: '• Using retrospective recall alone for PMDD.',
        },
      ],
    },
    {
      id: 'confirming-diagnosis',
      heading: 'Confirming the Diagnosis: Diary, Clinical Assessment and Impact',
      intro:
        'A prospective symptom diary is the diagnostic cornerstone. Clinical assessment screens for alternative or coexisting conditions and establishes functional impairment. Routine hormone levels do not diagnose PMS.',
      flow: [
        'Ask the patient to record symptoms daily, not just at clinic',
        'Use a validated daily symptom scale where available',
        'Record bleeding days, symptom severity, function, medication and life events',
        'Review at least two cycles; add a cycle if the pattern is unclear',
        'Screen for depression, anxiety, self-harm and suicidality',
        'Consider thyroid disease, anaemia, migraine, endometriosis and perimenopause',
        'Establish impact on work, education, parenting, relationships and safety',
      ],
      bullets: [
        'Daily Recording: ask the patient to record symptoms daily, not just at the clinic visit.',
        'Validated Scale: use a daily symptom scale where available, such as a Daily Record of Severity of Problems.',
        'Content: bleeding days, symptom severity, functional impact, medication use and relevant life events.',
        'Duration: at least two cycles are usually required; if only one of two cycles shows the pattern, an additional cycle may clarify.',
        'Cycle History: ask about cycle regularity, contraception, pregnancy possibility, medication and substance use.',
        'Mood Safety: screen for depression, anxiety, self-harm or suicidality where mood symptoms are severe.',
        'Alternatives: consider thyroid disease, anaemia, migraine, endometriosis, perimenopause, sleep disorder and other medical/psychiatric causes if symptoms are atypical or persist outside the luteal phase.',
        'Hormone Tests: routine hormone levels do not diagnose PMS.',
        'Why Not: the disorder relates to sensitivity to normal cyclic hormonal changes rather than a simple hormone deficiency.',
        'Function: establish effect on attendance, work output, education, parenting, relationships, social activities and safety.',
        'Severity: severe symptoms deserve active treatment and follow-up rather than dismissal as a normal menstrual experience.',
      ],
      table: {
        head: ['Assessment', 'Purpose'],
        rows: [
          ['Daily symptom diary', 'Confirm luteal pattern and follicular interval'],
          ['At least two cycles', 'Establish recurrence; extend if unclear'],
          ['Mood screen', 'Detect depression, anxiety, self-harm or suicidality'],
          ['Alternative diagnoses', 'Thyroid, anaemia, migraine, endometriosis, perimenopause, sleep disorder'],
          ['Functional assessment', 'Quantify work, education, relationship and safety impact'],
          ['Hormone levels', 'Not diagnostic of PMS'],
        ],
      },
      pearls: [
        'Golden Pearl: routine hormone levels do not diagnose PMS.',
        'At least two cycles of prospective daily ratings are usually needed.',
        'Severe mood symptoms require a safety screen, not just a cycle diary.',
      ],
      trap: {
        title: 'Examiner trap - ordering hormone levels to diagnose PMS',
        body: 'PMS reflects sensitivity to normal cyclic hormonal change, not a simple hormone deficiency. Ovarian hormone levels are generally not useful diagnostically; the diary and clinical pattern are.',
      },
      traps: [
        {
          title: '• Diagnosing from a single clinic visit.',
        },
        {
          title: '• Missing suicidal ideation in severe premenstrual mood symptoms.',
        },
        {
          title: '• Attributing persistent non-cyclical symptoms to PMS.',
        },
      ],
    },
    {
      id: 'non-pharmacological',
      heading: 'Non-Pharmacological Management',
      intro:
        'Lifestyle and psychological measures are the foundation for mild symptoms and should usually accompany medical treatment for more severe disease. No single diet or supplement cures PMS.',
      flow: [
        'Explain the biological cyclic pattern and use the diary to identify timing',
        'Encourage regular aerobic activity as tolerated',
        'Support a consistent sleep schedule and sleep hygiene',
        'Encourage balanced meals and avoid prolonged fasting',
        'Reduce caffeine or alcohol if they worsen symptoms',
        'Teach stress reduction, mindfulness and relaxation',
        'Offer CBT for distress, coping and functional impairment',
      ],
      bullets: [
        'Explanation: explain the biological cyclic pattern and use the diary to identify timing and triggers.',
        'Activity: regular aerobic activity and routine physical activity as tolerated.',
        'Sleep: consistent sleep schedule and sleep hygiene.',
        'Nutrition: balanced meals, avoid prolonged fasting and manage individual food triggers.',
        'Caffeine/Alcohol: reduce if they worsen anxiety, sleep, breast tenderness or bloating.',
        'Stress: stress-reduction strategies, mindfulness and relaxation.',
        'CBT: particularly for distress, coping and functional impairment.',
        'Mild Symptoms: lifestyle measures may be sufficient.',
        'Severe Symptoms: lifestyle measures should usually accompany medical treatment.',
        'No Cure Claim: avoid claiming that a particular diet or supplement cures PMS.',
      ],
      table: {
        head: ['Measure', 'Target symptom or goal'],
        rows: [
          ['Aerobic activity', 'General wellbeing and symptom tolerance'],
          ['Sleep hygiene', 'Sleep disturbance and mood'],
          ['Balanced meals', 'Bloating, cravings and energy'],
          ['Caffeine/alcohol reduction', 'Anxiety, sleep, breast tenderness, bloating'],
          ['Mindfulness/relaxation', 'Stress and coping'],
          ['CBT', 'Distress and functional impairment'],
        ],
      },
      pearls: [
        'Golden Pearl: lifestyle measures are the foundation and should accompany medical treatment in severe disease.',
        'CBT is particularly useful for distress and functional impairment.',
        'No diet or supplement cures PMS.',
      ],
      trap: {
        title: 'Examiner trap - promising a supplement cure',
        body: 'Lifestyle measures help but do not cure PMS. Avoid claiming that a particular diet or supplement eliminates the disorder, and continue to assess severe mood symptoms.',
      },
      traps: [
        {
          title: '• Relying on lifestyle alone for severe PMDD.',
        },
        {
          title: '• Missing depression or suicidality behind lifestyle advice.',
        },
        {
          title: '• Encouraging restrictive diets without evidence.',
        },
      ],
    },
    {
      id: 'pharmacological',
      heading: 'Pharmacological Treatment',
      intro:
        'SSRIs are among the best-supported options for moderate-to-severe PMS/PMDD, particularly when affective symptoms predominate. Combined oral contraceptives, progestogens and GnRH analogues have specific roles and caveats.',
      flow: [
        'Choose SSRIs for moderate-to-severe symptoms, especially affective',
        'Decide continuous versus luteal-phase dosing with the patient',
        'Consider a drospirenone-containing 24/4 combined pill if contraception is desired',
        'Screen for oestrogen contraindications before combined pills',
        'Use progestogens cautiously because mood can worsen',
        'Reserve GnRH analogues for severe refractory symptoms under specialist care',
        'Add add-back therapy if ovarian suppression is prolonged',
      ],
      bullets: [
        'SSRIs: among the best-supported pharmacological options for moderate-to-severe PMS/PMDD, especially with predominant affective symptoms.',
        'SSRI Scheduling: continuous throughout the cycle or luteal phase only, depending on symptoms, preference and clinician choice.',
        'SSRI Examples: fluoxetine, sertraline and escitalopram; exact dose and schedule follow current prescribing guidance.',
        'SSRI Counselling: nausea, sleep change, sexual dysfunction, activation, discontinuation symptoms and mood monitoring.',
        'SSRI Safety: screen for bipolar disorder and suicidality where clinically appropriate.',
        'COCs: may be useful when contraception is also desired and ovulation suppression is appropriate.',
        'Drospirenone: drospirenone-containing combined pills in a 24/4 regimen have evidence for some patients with PMDD.',
        'COC Risks: consider venous thromboembolism, migraine with aura, smoking, hypertension and other oestrogen contraindications.',
        'COC Response: not effective or suitable for every patient; assess response prospectively.',
        'Progestogens: a progestogen-only method may help some patients but can worsen mood symptoms in others.',
        'GnRH Analogues: may be considered for severe refractory symptoms under specialist care.',
        'Add-Back: if ovarian suppression is used, add-back hormone therapy may reduce bone loss and hypo-oestrogenic symptoms.',
        'Supplements: calcium and certain supplements have been studied, but product quality, doses and evidence vary.',
        'Vitamin B6: used historically; high-dose or prolonged use can cause sensory peripheral neuropathy. Avoid megadoses and follow safe-dose guidance.',
        'No Substitute: do not use supplements as a substitute for assessment of severe mood symptoms or functional impairment.',
      ],
      table: {
        head: ['Treatment', 'Best role', 'Key caveat'],
        rows: [
          ['SSRI', 'Moderate-to-severe PMS/PMDD, especially affective', 'Continuous or luteal; screen bipolar/suicidality'],
          ['Drospirenone COC 24/4', 'Selected PMDD when contraception is desired', 'Screen oestrogen/VTE contraindications'],
          ['Progestogen-only', 'Selected patients', 'Can worsen mood'],
          ['GnRH analogue', 'Severe refractory symptoms under specialist care', 'Add-back and bone health'],
          ['Calcium/other supplements', 'Selected adjuncts', 'Variable evidence; not a substitute for severe symptom care'],
          ['Vitamin B6', 'Historical use', 'High-dose/prolonged use can cause neuropathy'],
        ],
      },
      pearls: [
        'Golden Pearl: SSRIs may be continuous or luteal-phase treatment.',
        'Drospirenone-containing COC 24/4 is an option for selected patients after screening oestrogen risk.',
        'High-dose vitamin B6 can cause sensory peripheral neuropathy.',
      ],
      trap: {
        title: 'Examiner trap - starting a combined pill without screening for oestrogen contraindications',
        body: 'Migraine with aura, smoking, hypertension, previous VTE and other oestrogen contraindications matter. Drospirenone 24/4 is an option only after appropriate screening and prospective review.',
      },
      traps: [
        {
          title: '• Using high-dose vitamin B6 indefinitely.',
        },
        {
          title: '• Starting an SSRI without screening for bipolar disorder.',
        },
        {
          title: '• Offering a GnRH analogue without add-back planning.',
        },
      ],
    },
    {
      id: 'specialist-surgery',
      heading: 'Specialist and Refractory PMS, and the Role of Surgery',
      intro:
        'For severe symptoms not responding to first-line measures, re-check the diagnosis, adherence and comorbidities before escalating. Bilateral oophorectomy is very rarely considered and is irreversible.',
      flow: [
        'Re-check the diagnosis using prospective symptom records',
        'Assess adherence, comorbid mood disorder, PME and medication effects',
        'Refer to a clinician experienced in severe premenstrual disorders',
        'Consider a GnRH analogue as a diagnostic/therapeutic trial in selected patients',
        'Add add-back therapy and monitor bone health if suppression is prolonged',
        'Reserve bilateral oophorectomy for exceptional, carefully selected patients',
        'Ensure multidisciplinary review and convincing prior response to ovarian suppression',
      ],
      bullets: [
        'Step 1: re-check the diagnosis using prospective symptom records.',
        'Step 2: assess adherence, comorbid mood disorder, PME and possible medication effects.',
        'Step 3: refer to a clinician experienced in severe premenstrual disorders.',
        'Step 4: consider ovarian suppression with a GnRH analogue as a diagnostic/therapeutic trial in selected patients.',
        'Step 5: consider add-back therapy and monitor bone health if prolonged suppression is used.',
        'Oophorectomy: very rarely considered; irreversible and causes surgical menopause with long-term consequences.',
        'Oophorectomy Selection: exceptional, carefully selected patients with severe refractory disease, completed fertility, specialist multidisciplinary review and convincing prior response to ovarian suppression.',
        'Hysterectomy Alone: does not suppress ovarian cycling if the ovaries remain.',
      ],
      table: {
        head: ['Escalation step', 'Action'],
        rows: [
          ['Re-check', 'Prospective diaries and diagnostic review'],
          ['Review', 'Adherence, mood disorder, PME, medication effects'],
          ['Refer', 'Specialist in severe premenstrual disorders'],
          ['Trial', 'GnRH analogue with add-back in selected patients'],
          ['Exceptional', 'Bilateral oophorectomy after multidisciplinary review and prior suppression response'],
        ],
      },
      pearls: [
        'Golden Pearl: bilateral oophorectomy is exceptional, irreversible and causes surgical menopause.',
        'Hysterectomy with ovaries retained does not stop ovarian cycling.',
        'A convincing prior response to ovarian suppression supports an oophorectomy decision.',
      ],
      trap: {
        title: 'Examiner trap - offering hysterectomy alone as PMS treatment',
        body: 'If the ovaries remain, hysterectomy does not suppress ovarian cycling and does not treat the hormonal driver of PMS. Bilateral oophorectomy is the rare surgical option, with major long-term consequences.',
      },
      traps: [
        {
          title: '• Escalating to surgery without re-checking the diagnosis.',
        },
        {
          title: '• Forgetting add-back and bone health with GnRH suppression.',
        },
        {
          title: '• Offering oophorectomy before fertility is complete.',
        },
      ],
    },
    {
      id: 'naps-support',
      heading: 'NAPS and Patient Support',
      intro:
        'NAPS (National Association for Premenstrual Syndrome) is a patient-support and information organisation. Support resources help patients track symptoms, understand treatment choices and seek care when symptoms impair daily life, but they do not replace clinical diagnosis or emergency mental-health assessment.',
      flow: [
        'Provide written information about the cyclic pattern',
        'Encourage use of a daily symptom diary',
        'Discuss treatment choices and realistic expectations',
        'Signpost peer support and reliable information',
        'Screen for severe mood symptoms and safety risk',
        'Escalate to clinical care when function is impaired',
      ],
      bullets: [
        'NAPS Role: patient support and information organisation.',
        'Education: helps patients track symptoms and understand treatment choices.',
        'Care-Seeking: encourages care when symptoms impair daily life.',
        'Not a Diagnosis: support resources do not replace clinical diagnosis.',
        'Not Emergency Care: they do not replace emergency mental-health assessment.',
        'Shared Decision-Making: use the diary and discussion to choose treatment.',
      ],
      table: {
        head: ['Support function', 'What it does not replace'],
        rows: [
          ['Symptom tracking', 'Clinical assessment and prospective diagnosis'],
          ['Treatment information', 'Individualised prescribing and review'],
          ['Peer support', 'Emergency mental-health assessment'],
        ],
      },
      pearls: [
        'Golden Pearl: NAPS is a support and information organisation, not a diagnostic service.',
        'Patient education improves symptom tracking and treatment discussion.',
        'Severe mood symptoms need clinical assessment, not just support resources.',
      ],
      trap: {
        title: 'Examiner trap - treating patient-support information as a diagnosis',
        body: 'NAPS resources help patients understand and track PMS, but the diagnosis still requires a clinical assessment and prospective symptom ratings. Severe depression or suicidality needs urgent clinical care.',
      },
      traps: [
        {
          title: '• Substituting support resources for clinical review.',
        },
        {
          title: '• Missing severe mood symptoms because the patient seems informed.',
        },
        {
          title: '• Failing to give a safety plan when risk is present.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'PMS symptoms are luteal and improve with menstruation.',
        'A symptom-free follicular interval is a key clue for Core PMD.',
        'Prospective daily ratings for at least two cycles confirm the pattern.',
        'PMDD requires at least five symptoms, including at least one core affective symptom.',
        'PMDD must cause functional impairment and improve after menses begins.',
        'Premenstrual exacerbation means the underlying condition persists all cycle and worsens premenstrually.',
        'PME may have no clear symptom-free follicular interval.',
        'Routine hormone blood tests do not diagnose PMS.',
        'SSRIs may be continuous or luteal-phase treatment.',
        'Drospirenone-containing COC 24/4 is an option for selected patients.',
        'Screen for oestrogen contraindications before a combined pill.',
        'Progestogen-only methods can worsen mood in some patients.',
        'GnRH analogues are specialist options for severe refractory symptoms.',
        'Add-back therapy and bone health matter with prolonged GnRH suppression.',
        'High-dose vitamin B6 can cause sensory peripheral neuropathy.',
        'CBT helps distress, coping and functional impairment.',
        'Bilateral oophorectomy is exceptional and irreversible.',
        'Hysterectomy with ovaries retained does not stop ovarian cycling.',
        'A convincing response to ovarian suppression supports surgical selection.',
        'NAPS is a support organisation, not a diagnostic service.',
      ],
      traps: [
        {
          title: '• Diagnosing PMS from one symptom.',
        },
        {
          title: '• Omitting the symptom-free follicular interval.',
        },
        {
          title: '• Labelling severe PMS as PMDD without DSM-5 criteria.',
        },
        {
          title: '• Ordering hormone levels to diagnose PMS.',
        },
        {
          title: '• Missing premenstrual exacerbation of another disorder.',
        },
        {
          title: '• Screening for bipolar disorder only after starting an SSRI.',
        },
        {
          title: '• Using high-dose vitamin B6 indefinitely.',
        },
        {
          title: '• Offering hysterectomy alone as PMS treatment.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm24-f1',
      front: 'What defines the timing of PMS?',
      back: 'Symptoms occur in the luteal phase, improve during or shortly after menstruation, and leave a clear or relative symptom-free interval between menses and approximate ovulation.',
    },
    {
      id: 'm24-f2',
      front: 'List the ISPMD Core PMD criteria in brief.',
      back: 'Luteal symptoms; resolution with menses; symptom-free follicular interval; recurrence in most cycles; significant distress/impairment; not merely worsening of another condition; prospective daily ratings over at least two cycles.',
    },
    {
      id: 'm24-f3',
      front: 'How is the diagnosis of PMS confirmed?',
      back: 'With prospective daily symptom ratings over at least two cycles, plus clinical assessment of cyclicity, functional impact and alternative diagnoses. Retrospective recall alone is insufficient.',
    },
    {
      id: 'm24-f4',
      front: 'What are the DSM-5 requirements for PMDD?',
      back: 'At least five symptoms in the final week before menses, improving within a few days after menses begins and minimal/absent postmenstrually; at least one core mood symptom (affective lability, irritability/anger, depressed mood/hopelessness, anxiety/tension); significant distress or interference.',
    },
    {
      id: 'm24-f5',
      front: 'Name the four core mood symptoms that can satisfy the PMDD mood criterion.',
      back: 'Affective lability, irritability/anger, depressed mood/hopelessness, and anxiety/tension.',
    },
    {
      id: 'm24-f6',
      front: 'What is premenstrual exacerbation?',
      back: 'An underlying disorder such as depression, anxiety, migraine, epilepsy or asthma is present throughout the cycle but worsens premenstrually. There may be no clear symptom-free follicular interval.',
    },
    {
      id: 'm24-f7',
      front: 'Why are routine hormone levels unhelpful in PMS?',
      back: 'PMS relates to sensitivity to normal cyclic hormonal changes rather than a simple hormone deficiency. Ovarian hormone levels are generally not diagnostic.',
    },
    {
      id: 'm24-f8',
      front: 'Which non-pharmacological measures help PMS?',
      back: 'Explanation and symptom diary, aerobic activity, sleep hygiene, balanced meals, reducing caffeine/alcohol if triggering, stress reduction, mindfulness and CBT.',
    },
    {
      id: 'm24-f9',
      front: 'How are SSRIs used in PMS/PMDD?',
      back: 'They are among the best-supported options for moderate-to-severe symptoms, especially affective. They may be taken continuously or only in the luteal phase, depending on symptoms and preference.',
    },
    {
      id: 'm24-f10',
      front: 'Which combined oral contraceptive has evidence in selected PMDD?',
      back: 'Drospirenone-containing combined pills in a 24/4 regimen, after screening for oestrogen contraindications such as migraine with aura, smoking, hypertension and VTE risk.',
    },
    {
      id: 'm24-f11',
      front: 'What is the role of progestogens and GnRH analogues in PMS?',
      back: 'Progestogen-only methods may help some but can worsen mood. GnRH analogues are specialist options for severe refractory symptoms; add-back therapy and bone health monitoring are needed with prolonged suppression.',
    },
    {
      id: 'm24-f12',
      front: 'What is the danger of high-dose vitamin B6?',
      back: 'High-dose or prolonged use can cause sensory peripheral neuropathy. Avoid megadoses and follow safe-dose guidance.',
    },
    {
      id: 'm24-f13',
      front: 'When is bilateral oophorectomy considered for PMS?',
      back: 'Very rarely, in exceptional carefully selected patients with severe refractory disease, completed fertility, multidisciplinary review and a convincing prior response to ovarian suppression. It is irreversible.',
    },
    {
      id: 'm24-f14',
      front: 'Does hysterectomy alone treat PMS?',
      back: 'No. If the ovaries remain, ovarian cycling continues. Hysterectomy alone does not suppress the hormonal driver of PMS.',
    },
    {
      id: 'm24-f15',
      front: 'What is NAPS?',
      back: 'The National Association for Premenstrual Syndrome, a patient-support and information organisation. It does not replace clinical diagnosis or emergency mental-health assessment.',
    },
  ],

  mcqs: [
    {
      id: 'm24-q1',
      stem: 'A 29-year-old woman reports irritability and bloating for 3 days before every period, with complete resolution during menses. What is the most appropriate way to confirm the pattern?',
      options: [
        'Serum oestradiol and progesterone on day 21',
        'Prospective daily symptom ratings over at least two cycles',
        'A single retrospective questionnaire',
        'Immediate laparoscopy',
      ],
      answerIndex: 1,
      explanation:
        'Prospective daily symptom ratings over at least two cycles confirm the cyclical pattern. Routine hormone levels do not diagnose PMS, and retrospective recall alone is insufficient.',
    },
    {
      id: 'm24-q2',
      stem: 'Which feature is required for ISPMD Core Premenstrual Disorder but not for premenstrual exacerbation?',
      options: [
        'Symptoms before menstruation',
        'A clear or relative symptom-free interval between menses and ovulation',
        'Functional impairment',
        'Mood symptoms',
      ],
      answerIndex: 1,
      explanation:
        'Core PMD requires a symptom-free or relatively symptom-free follicular interval. In premenstrual exacerbation an underlying disorder persists throughout the cycle, so this interval may be absent.',
    },
    {
      id: 'm24-q3',
      stem: 'How many symptoms are required for a DSM-5 diagnosis of PMDD, and what must be included?',
      options: [
        'At least 3 symptoms, with no mood requirement',
        'At least 5 symptoms, including at least 1 core mood symptom',
        'At least 10 symptoms, including psychosis',
        'Any 1 symptom causing distress',
      ],
      answerIndex: 1,
      explanation:
        'PMDD requires at least five symptoms in the final premenstrual week, including at least one core mood symptom: affective lability, irritability/anger, depressed mood/hopelessness, or anxiety/tension.',
    },
    {
      id: 'm24-q4',
      stem: 'A patient has depression throughout the cycle that becomes markedly worse premenstrually. What is the best description?',
      options: ['Core PMD', 'PMDD', 'Premenstrual exacerbation', 'Menopausal transition'],
      answerIndex: 2,
      explanation:
        'Premenstrual exacerbation is worsening of an underlying disorder that is present throughout the cycle. Management addresses the underlying condition as well as cyclical worsening.',
    },
    {
      id: 'm24-q5',
      stem: 'Which statement about hormone testing in PMS is correct?',
      options: [
        'A low progesterone level confirms PMS',
        'Routine hormone levels do not diagnose PMS',
        'Oestradiol must be above 500 pmol/L',
        'FSH is the diagnostic test',
      ],
      answerIndex: 1,
      explanation:
        'PMS relates to sensitivity to normal cyclic hormonal changes, not a simple deficiency. Routine ovarian hormone levels are generally not useful diagnostically.',
    },
    {
      id: 'm24-q6',
      stem: 'Which SSRI scheduling is appropriate for PMS/PMDD?',
      options: [
        'Continuous or luteal-phase only, depending on symptoms and preference',
        'Only during menstruation',
        'Only in the first trimester of pregnancy',
        'A single dose at ovulation',
      ],
      answerIndex: 0,
      explanation:
        'SSRIs may be prescribed continuously or during the luteal phase only, depending on symptoms, patient preference and clinician choice. They are among the best-supported options for moderate-to-severe disease.',
    },
    {
      id: 'm24-q7',
      stem: 'A woman with PMDD also wants contraception. Which option has evidence in selected patients?',
      options: [
        'Drospirenone-containing combined pill in a 24/4 regimen',
        'High-dose vitamin B6',
        'Danazol continuously',
        'Long-term opioid analgesia',
      ],
      answerIndex: 0,
      explanation:
        'Drospirenone-containing combined pills in a 24/4 regimen have evidence in some patients with PMDD. Screen for oestrogen contraindications and review response prospectively.',
    },
    {
      id: 'm24-q8',
      stem: 'Which adverse effect is associated with high-dose or prolonged vitamin B6?',
      options: ['Sensory peripheral neuropathy', 'Renal failure', 'Aplastic anaemia', 'Pulmonary fibrosis'],
      answerIndex: 0,
      explanation:
        'High-dose or prolonged vitamin B6 can cause sensory peripheral neuropathy. Avoid megadoses and follow safe-dose guidance.',
    },
    {
      id: 'm24-q9',
      stem: 'A woman with severe refractory PMS has a GnRH analogue. What must be considered with prolonged use?',
      options: [
        'Add-back therapy and bone health monitoring',
        'Routine antibiotics',
        'Immediate oophorectomy',
        'Stopping all mood assessment',
      ],
      answerIndex: 0,
      explanation:
        'Ovarian suppression with a GnRH analogue can cause bone loss and hypo-oestrogenic symptoms. Add-back hormone therapy and bone health monitoring are needed under specialist supervision.',
    },
    {
      id: 'm24-q10',
      stem: 'Which statement about surgery for PMS is correct?',
      options: [
        'Hysterectomy alone reliably cures PMS',
        'Bilateral oophorectomy is a first-line treatment',
        'Bilateral oophorectomy is exceptional, irreversible and reserved for carefully selected refractory cases',
        'Oophorectomy should be offered before completing fertility',
      ],
      answerIndex: 2,
      explanation:
        'Bilateral oophorectomy is very rarely considered, is irreversible and causes surgical menopause. It is reserved for exceptional, carefully selected patients with completed fertility, multidisciplinary review and a convincing response to ovarian suppression. Hysterectomy alone does not stop ovarian cycling.',
    },
  ],
};
