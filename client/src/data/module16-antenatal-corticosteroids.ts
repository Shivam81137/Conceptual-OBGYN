import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 16 - Antenatal Corticosteroids (RCOG GTG 74)
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 69-80) with RCOG
 * Green-top Guideline No. 74 (2022, reviewed 2025).
 *
 * Covers:
 * - The 7-day lung-maturation window and the probability-based decision
 * - The 24+0 to 34+6 week treatment window and who should be offered ACS
 * - Betamethasone and dexamethasone regimens with the 24 mg total dose
 * - Benefits for RDS, perinatal death and intraventricular haemorrhage
 * - Maternal hyperglycaemia, diabetes and glucose monitoring
 * - Late preterm 35+0 to 36+6 and planned caesarean at 37+0 to 38+6
 * - The 39+0 week rule for planned caesarean without indication
 * - Repeat, rescue and no-serial-course rules
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const ANTENATAL_CORTICOSTEROIDS_MODULE: StudioModule = {
  id: 'pg-mod-16-antenatal-corticosteroids',
  track: 'NEET_PG',
  title: 'Antenatal Corticosteroids (ACS): RCOG GTG 74',
  shortTitle: 'Antenatal Corticosteroids',
  summary:
    'Complete PG clinical revision module on antenatal corticosteroids following RCOG Green-top Guideline No. 74 (2022, reviewed 2025). Features the 7-day lung-maturation window, the 24+0 to 34+6 week treatment window, betamethasone 12 mg and dexamethasone 6 mg regimens with a 24 mg total dose, reductions in RDS, perinatal death and IVH, maternal hyperglycaemia and diabetes, late-preterm 35+0 to 36+6 individualisation, planned caesarean at 37+0 to 38+6, the 39+0 week rule, restricted rescue courses, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    '24+0 to 34+6 weeks, birth within 7 days and a 24 mg total course.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 74',
    '24+0 to 34+6',
    '7-Day Window',
    'Betamethasone 12 mg',
    'Dexamethasone 6 mg',
    'Total Dose 24 mg',
    'Reduces RDS',
    'Reduces IVH',
    'Maternal Hyperglycaemia',
    'Late Preterm',
    'Planned CS 39 Weeks',
    'No Serial Courses',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 69-80) • RCOG Green-top Guideline No. 74, 2022, reviewed 2025',
  updatedAtISO: '2026-11-14T12:00:00.000Z',
  notes: [
    {
      id: 'acs-framework',
      heading: 'ACS & the 7-Day Lung-Maturation Window',
      intro:
        'Antenatal corticosteroids accelerate fetal lung maturation before anticipated preterm birth. The key timing principle is that a course given within the 7 days before preterm birth reduces perinatal and neonatal death and respiratory distress syndrome.',
      flow: [
        'Assess whether preterm birth is anticipated',
        'Estimate the probability that birth will occur within 7 days',
        'Confirm gestational age is within the treatment window',
        'Exclude contraindications and check maternal glucose status',
        'Give the first dose without delaying indicated birth',
        'Complete the course if birth does not intervene',
        'Reassess if the clinical picture changes',
      ],
      bullets: [
        'Purpose: accelerate fetal lung maturation and reduce respiratory and other complications of prematurity.',
        'Key Timing: a course given within the 7 days before preterm birth reduces perinatal and neonatal death and RDS.',
        'Treatment Window: RCOG recommends offering ACS from 24+0 to 34+6 weeks when preterm birth is anticipated.',
        'Anticipated Birth: includes established preterm labour, preterm prelabour rupture of membranes and planned medically indicated preterm birth.',
        'Probability Rule: the 7-day window is a probability-based clinical decision, not a guarantee that birth will occur within 7 days.',
        'Do Not Treat Reflexively: do not give ACS merely because a woman is in a preterm labour assessment unit if birth within 7 days is unlikely.',
        'Benefit Is Time-Limited: the strongest evidence applies when birth follows within 7 days of administration.',
        'Partial Course: if birth becomes imminent before the course is complete, the partial exposure may still help; do not delay birth.',
        'Guideline Status: RCOG Green-top Guideline No. 74 was published in 2022, reviewed in 2025, with an update in development.',
        'Shared Decision: consider maternal preference, fetal condition, neonatal capability and the likely timing of birth.',
        'Documentation: record the indication, gestational age, regimen, times of doses and the reason if the course is incomplete.',
        'Local Protocol: follow the current unit guideline for ACS eligibility and prescribing.',
      ],
      table: {
        head: ['Principle', 'RCOG GTG 74 Position'],
        rows: [
          [
            'Core window',
            'Offer ACS from 24+0 to 34+6 weeks when preterm birth is anticipated',
          ],
          [
            'Timing target',
            'Greatest benefit when birth occurs within 7 days of the course',
          ],
          [
            'Clinical trigger',
            'Established preterm labour, PPROM or a planned medically indicated preterm birth',
          ],
          [
            'Decision style',
            'Probability-based, individualised and documented; not automatic for every preterm assessment',
          ],
          [
            'Incomplete course',
            'Partial exposure may still help; never delay clinically indicated birth to complete it',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: the target is birth within 7 days of antenatal corticosteroid administration.',
        'The RCOG core window is 24+0 to 34+6 weeks when preterm birth is anticipated.',
        'Never delay a clinically indicated birth to complete the course.',
      ],
      trap: {
        title: 'Examiner trap - treating the 7-day window as a guarantee',
        body: 'The 7-day window is a probability-based decision. Give ACS when birth within 7 days is sufficiently likely, not simply because the woman is in a preterm labour assessment area.',
      },
      traps: [
        {
          title: '• Giving ACS to every woman assessed for preterm contractions.',
        },
        {
          title: '• Delaying birth to complete the second dose.',
        },
        {
          title: '• Quoting a window wider than 24+0 to 34+6 weeks.',
        },
      ],
    },
    {
      id: 'who-and-when',
      heading: 'Who to Treat: 24+0 to 34+6 & the Probability Rule',
      intro:
        'The decision balances gestational age, the likelihood of birth within 7 days and the clinical context. Established preterm labour, PPROM and planned medically indicated preterm birth are the three classic indications.',
      flow: [
        'Confirm gestational age and the 24+0 to 34+6 week window',
        'Establish the indication · preterm labour, PPROM or planned preterm birth',
        'Estimate the likelihood of birth within 7 days',
        'Assess maternal and fetal condition and any contraindication',
        'Discuss benefits, risks and the possibility of an incomplete course',
        'Prescribe the first dose and plan the remaining doses',
        'Reassess if labour stops or the delivery plan changes',
      ],
      bullets: [
        'Established Preterm Labour: regular contractions with cervical change at a preterm gestation.',
        'PPROM: preterm prelabour rupture of membranes where birth within 7 days is anticipated.',
        'Planned Preterm Birth: medically indicated delivery for conditions such as severe pre-eclampsia, fetal growth restriction or placental insufficiency.',
        'Lower Limit: 24+0 weeks under RCOG GTG 74.',
        'Upper Limit: 34+6 weeks for the standard recommendation.',
        'Late Preterm: 35+0 to 36+6 weeks is individualised rather than routinely treated.',
        'Probability Assessment: consider cervical dilatation, contraction frequency, membrane status, bleeding and fetal condition.',
        'Low Likelihood: if birth within 7 days is unlikely, ACS may be withheld and the decision revisited if the situation changes.',
        'Maternal Safety: maternal or fetal deterioration takes priority over completing the course.',
        'Multiple Pregnancy: the same regimen is used; do not double the dose for twins.',
        'Contraindications: check for hypersensitivity and assess maternal infection; untreated chorioamnionitis is not a reason to delay antibiotics or birth.',
        'Counselling: explain the reduction in RDS and neonatal death, the possibility of hypoglycaemia and the time-limited benefit.',
      ],
      table: {
        head: ['Clinical Scenario', 'ACS Decision'],
        rows: [
          [
            'Established preterm labour at 28 weeks, birth likely within 24 hours',
            'Give ACS; do not delay birth for the course',
          ],
          [
            'PPROM at 30 weeks with anticipated birth within 7 days',
            'Offer ACS as appropriate',
          ],
          [
            'Severe pre-eclampsia at 31 weeks with planned delivery',
            'Offer ACS if birth is expected within 7 days; maternal and fetal safety take priority',
          ],
          [
            'Threatened labour at 35+5 weeks with low likelihood of delivery',
            'Do not give automatically; reassess the probability and discuss late-preterm trade-offs',
          ],
          [
            'Planned caesarean at 38+0 weeks',
            'Inform of potential risks and benefits; not routine ACS',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: the three classic indications are established preterm labour, PPROM and planned medically indicated preterm birth.',
        'The standard window is 24+0 to 34+6 weeks; late preterm is individualised.',
        'Maternal or fetal deterioration always outranks completing the course.',
      ],
      trap: {
        title: 'Examiner trap - doubling the dose in a twin pregnancy',
        body: 'The standard betamethasone or dexamethasone regimen is used in multiple pregnancy. There is no routine dose doubling for twins.',
      },
      traps: [
        {
          title: '• Treating at 23+5 weeks as if within the standard RCOG window.',
        },
        {
          title: '• Giving ACS routinely at 36 weeks.',
        },
        {
          title: '• Doubling the dose for a twin pregnancy.',
        },
      ],
    },
    {
      id: 'regimens',
      heading: 'Regimens & Total Dose: Betamethasone vs Dexamethasone',
      intro:
        'Both standard regimens deliver a total of 24 mg. Betamethasone is given as two 12 mg intramuscular doses 24 hours apart; dexamethasone as four 6 mg intramuscular doses every 12 hours.',
      flow: [
        'Choose betamethasone or dexamethasone according to local protocol',
        'Betamethasone · 12 mg intramuscularly, repeat after 24 hours',
        'Dexamethasone · 6 mg intramuscularly every 12 hours for four doses',
        'Confirm the total dose is 24 mg',
        'Record the time of each dose',
        'Complete the course unless birth intervenes',
        'If birth intervenes, give the first dose and proceed',
      ],
      bullets: [
        'Betamethasone: 12 mg intramuscularly, repeated once after 24 hours; total 24 mg.',
        'Dexamethasone: 6 mg intramuscularly every 12 hours for four doses; total 24 mg.',
        'Total Dose: both regimens deliver 24 mg of corticosteroid.',
        'Route: intramuscular injection; oral or topical routes are not equivalent.',
        'Alternative RCOG Description: RCOG also describes dexamethasone 12 mg intramuscularly repeated after 24 hours.',
        'Choice: betamethasone and dexamethasone are both acceptable; follow local formulary and protocol.',
        'Timing: aim for the course to be completed at least 24 hours before birth where possible, but never delay birth to achieve this.',
        'Partial Course: a single dose or an incomplete course may still provide benefit when birth is imminent.',
        'Repeat Doses: routine repeat or serial courses are not recommended.',
        'No Taper: no tapering schedule is required for a standard antenatal course.',
        'Record Keeping: document drug, dose, site, time and the planned remaining doses.',
        'Neonatal Team: inform the neonatal team so that hypoglycaemia and respiratory status are anticipated.',
      ],
      table: {
        head: ['Regimen', 'Dose & Schedule', 'Total'],
        rows: [
          [
            'Betamethasone',
            '12 mg intramuscularly, repeated once after 24 hours',
            '24 mg',
          ],
          [
            'Dexamethasone',
            '6 mg intramuscularly every 12 hours for four doses',
            '24 mg',
          ],
          [
            'Dexamethasone alternative',
            '12 mg intramuscularly, repeated after 24 hours as described by RCOG',
            '24 mg',
          ],
          [
            'Route',
            'Intramuscular; oral substitution is not equivalent',
            'Not applicable',
          ],
          [
            'Course completion',
            'Aim to complete before birth where possible, but never delay indicated birth',
            'Not applicable',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: both standard regimens total 24 mg.',
        'Betamethasone is 12 mg twice, 24 hours apart; dexamethasone is 6 mg four times, 12 hours apart.',
        'A partial course may still help, and birth must never be delayed to complete it.',
      ],
      trap: {
        title: 'Examiner trap - mixing up the total dose and schedule',
        body: 'Betamethasone is 12 mg twice (24 mg total). Dexamethasone is 6 mg four times (24 mg total). Neither regimen totals 12 mg or 48 mg.',
      },
      traps: [
        {
          title: '• Prescribing betamethasone 6 mg four times.',
        },
        {
          title: '• Quoting a 12 mg total course.',
        },
        {
          title: '• Giving oral dexamethasone as an equivalent.',
        },
      ],
    },
    {
      id: 'benefits',
      heading: 'Benefits: RDS, Perinatal Death & IVH',
      intro:
        'The evidence is strongest for births before 34 weeks, where ACS reduces respiratory distress syndrome, perinatal and neonatal death and intraventricular haemorrhage. Benefit is greatest when birth occurs between 24 hours and 7 days after treatment.',
      flow: [
        'Identify the gestational era · early preterm, late preterm or early term',
        'Counsel on the expected respiratory benefit',
        'Explain the mortality and IVH reductions in early preterm birth',
        'Acknowledge the weaker and more uncertain evidence later in gestation',
        'Balance respiratory benefit against neonatal hypoglycaemia',
        'Document the discussion and the decision of the woman',
        'Inform the neonatal team of the treatment status',
      ],
      bullets: [
        'Respiratory Distress Syndrome: ACS reduces RDS, the classic surfactant-deficiency complication of prematurity.',
        'Mortality: ACS reduces perinatal and neonatal death when birth occurs before 34 weeks.',
        'Intraventricular Haemorrhage: ACS reduces IVH and other serious prematurity morbidity.',
        'Other Outcomes: reductions in necrotising enterocolitis, need for respiratory support and neonatal unit admission are reported in preterm populations.',
        'Optimal Interval: benefit is greatest when birth occurs between 24 hours and 7 days after the course.',
        'Partial Benefit: some benefit may accrue even when the course is incomplete.',
        'Early Preterm: strong evidence for reduction in perinatal and neonatal death and RDS, with reduced IVH.',
        'Late Preterm: may reduce some respiratory-support outcomes in selected populations, but evidence for RDS, transient tachypnoea and overall admission varies.',
        'Late Preterm Harm: increased neonatal hypoglycaemia is an important concern.',
        'Early Term Caesarean: potential reduction in respiratory-related neonatal unit admission, with uncertainty about RDS, transient tachypnoea and overall admission.',
        'Developmental Uncertainty: possible developmental concerns after early-term exposure require caution and informed discussion.',
        'Counselling Balance: present absolute benefits, the gestational context and the potential harms rather than a single positive endpoint.',
      ],
      table: {
        head: ['Gestational Era', 'Evidence & Balance'],
        rows: [
          [
            'Before 34 weeks',
            'Strong evidence for reduced perinatal and neonatal death, RDS and IVH',
          ],
          [
            '24 hours to 7 days before birth',
            'Greatest respiratory benefit from a completed or partial course',
          ],
          [
            'Late preterm 35+0 to 36+6',
            'May reduce some respiratory-support outcomes; evidence varies and neonatal hypoglycaemia increases',
          ],
          [
            'Planned caesarean 37+0 to 38+6',
            'Possible reduction in respiratory-related neonatal unit admission; uncertainty about RDS, transient tachypnoea and overall admission',
          ],
          [
            'Counselling principle',
            'Weigh absolute respiratory benefit against hypoglycaemia and developmental uncertainty',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: ACS reduces RDS, perinatal and neonatal death and IVH before 34 weeks.',
        'Benefit is greatest when birth occurs between 24 hours and 7 days after treatment.',
        'Late-preterm benefit is less certain and carries a hypoglycaemia trade-off.',
      ],
      trap: {
        title: 'Examiner trap - promising the same benefit at every gestation',
        body: 'Evidence is strongest before 34 weeks. In late preterm and early term, respiratory benefit is less certain and neonatal hypoglycaemia is a real concern, so individualise and counsel accordingly.',
      },
      traps: [
        {
          title: '• Claiming ACS eliminates all respiratory morbidity.',
        },
        {
          title: '• Quoting late-preterm evidence as strongly as early-preterm evidence.',
        },
        {
          title: '• Ignoring neonatal hypoglycaemia in counselling.',
        },
      ],
    },
    {
      id: 'maternal-risks',
      heading: 'Maternal Risks: Hyperglycaemia, Diabetes & Monitoring',
      intro:
        'Corticosteroids raise maternal glucose, and the effect can persist for several days. Diabetes is not an absolute contraindication, but it demands close glucose monitoring and insulin adjustment.',
      flow: [
        'Check maternal glucose status before treatment',
        'Counsel women with diabetes about expected hyperglycaemia',
        'Give ACS if otherwise indicated',
        'Increase glucose monitoring frequency for several days',
        'Adjust insulin according to the local protocol',
        'Watch for ketoacidosis in type 1 diabetes',
        'Inform the neonatal team about maternal diabetes and ACS exposure',
      ],
      bullets: [
        'Maternal Hyperglycaemia: a predictable effect that may persist for several days after the course.',
        'Diabetes: not an absolute contraindication to ACS.',
        'Monitoring: increase capillary glucose monitoring and adjust insulin in women with pre-existing or gestational diabetes.',
        'Type 1 Diabetes: monitor closely for hyperglycaemia and ketoacidosis during and after the course.',
        'Steroid Effect: glucose rises after each dose and can remain elevated for several days.',
        'Neonatal Effect: maternal hyperglycaemia can contribute to neonatal hypoglycaemia, especially in late preterm and early term birth.',
        'Infection: corticosteroids do not treat infection; continue appropriate antibiotics and do not delay birth for untreated chorioamnionitis.',
        'Fluid Retention: monitor for worsening oedema or hypertension in women with pre-eclampsia.',
        'Mood and Sleep: transient insomnia, mood change and dyspepsia may occur.',
        'Documentation: record the glucose monitoring plan and any insulin adjustment.',
        'Multidisciplinary Care: involve the diabetes team and neonatology for women with complex diabetes.',
        'Breastfeeding: a standard antenatal course does not preclude breastfeeding.',
      ],
      table: {
        head: ['Maternal Issue', 'Management'],
        rows: [
          [
            'Hyperglycaemia',
            'Expected for several days; increase glucose monitoring and adjust insulin',
          ],
          [
            'Pre-existing diabetes',
            'Not an absolute contraindication; plan close monitoring and insulin adjustment',
          ],
          [
            'Gestational diabetes',
            'Give if indicated; monitor glucose and escalate diabetes care as needed',
          ],
          [
            'Type 1 diabetes',
            'Watch for ketoacidosis during and after the course',
          ],
          [
            'Pre-eclampsia',
            'Monitor blood pressure, fluid balance and oedema',
          ],
          [
            'Infection',
            'Continue antibiotics; corticosteroids do not treat chorioamnionitis',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: diabetes is not an absolute contraindication to ACS.',
        'Steroid-induced hyperglycaemia may persist for several days and requires insulin adjustment.',
        'Type 1 diabetes needs vigilance for ketoacidosis.',
      ],
      trap: {
        title: 'Examiner trap - withholding ACS because the woman has diabetes',
        body: 'Diabetes is not an automatic contraindication. Give ACS when indicated and manage the predictable hyperglycaemia with close monitoring and insulin adjustment.',
      },
      traps: [
        {
          title: '• Refusing ACS solely because of diabetes.',
        },
        {
          title: '• Checking glucose once and assuming it will normalise immediately.',
        },
        {
          title: '• Treating chorioamnionitis with corticosteroids instead of antibiotics.',
        },
      ],
    },
    {
      id: 'late-preterm-term-cs',
      heading: 'Late Preterm, Planned CS & the 39-Week Rule',
      intro:
        'At 35+0 to 36+6 weeks the decision is individualised: respiratory benefit is less certain and neonatal hypoglycaemia is a concern. For planned caesarean at 37+0 to 38+6 weeks, RCOG recommends informed discussion rather than routine ACS, and planned caesarean should not routinely occur before 39+0 weeks without an indication.',
      flow: [
        'At 35+0 to 36+6 weeks · assess the likelihood of birth within 7 days',
        'Weigh respiratory benefit against neonatal hypoglycaemia',
        'Discuss the uncertainty and the preferences of the woman',
        'For planned caesarean at 37+0 to 38+6 weeks · hold an informed discussion',
        'Do not give ACS routinely before every caesarean',
        'Plan caesarean at 39+0 weeks or later unless an indication requires earlier birth',
        'Document the discussion and the decision',
      ],
      bullets: [
        'Late Preterm Window: 35+0 to 36+6 weeks.',
        'Late Preterm Evidence: may reduce some respiratory-support outcomes in selected populations, but evidence for RDS, transient tachypnoea and overall neonatal unit admission varies.',
        'Late Preterm Harm: increased neonatal hypoglycaemia is the key concern.',
        'Late Preterm Decision: individualise according to the likelihood of birth within 7 days, fetal status and maternal preference.',
        'Planned CS Window: 37+0 to 38+6 weeks.',
        'Planned CS Evidence: potential reduction in respiratory-related neonatal unit admission, with uncertainty about RDS, transient tachypnoea and overall admission.',
        'Planned CS Recommendation: informed discussion of potential risks and benefits, not routine ACS for every caesarean.',
        '39-Week Rule: planned caesarean should not routinely be performed before 39+0 weeks without a clinical indication.',
        'Why 39 Weeks: earlier elective delivery increases respiratory morbidity and neonatal unit admission.',
        'Shared Decision: document the discussion, the preferences of the woman and the clinical indication for earlier delivery.',
        'Steroid Harm: neonatal hypoglycaemia and possible developmental concerns must be part of the conversation.',
        'Local Pathway: follow the unit protocol for late-preterm and early-term ACS.',
      ],
      table: {
        head: ['Gestation & Context', 'RCOG Position'],
        rows: [
          [
            '35+0 to 36+6 weeks, birth likely within 7 days',
            'Individualise; discuss uncertain respiratory benefit and neonatal hypoglycaemia',
          ],
          [
            '35+0 to 36+6 weeks, birth unlikely within 7 days',
            'Do not give automatically; reassess if the clinical picture changes',
          ],
          [
            'Planned caesarean 37+0 to 38+6 weeks',
            'Informed discussion of potential risks and benefits; not routine ACS',
          ],
          [
            'Planned caesarean without indication',
            'Do not routinely perform before 39+0 weeks',
          ],
          [
            'Planned caesarean at 39+0 weeks or later',
            'Appropriate timing when there is no indication for earlier birth',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: late-preterm ACS is individualised, not routine.',
        'For planned caesarean at 37+0 to 38+6 weeks, have an informed discussion rather than giving ACS routinely.',
        'Do not routinely perform planned caesarean before 39+0 weeks without an indication.',
      ],
      trap: {
        title: 'Examiner trap - giving ACS routinely before every planned caesarean',
        body: 'RCOG recommends informed discussion for planned caesarean at 37+0 to 38+6 weeks. Routine ACS for every caesarean is not recommended, and planned caesarean should not routinely occur before 39+0 weeks without an indication.',
      },
      traps: [
        {
          title: '• Treating every 36-week contraction with ACS.',
        },
        {
          title: '• Scheduling an elective caesarean at 37 weeks for convenience.',
        },
        {
          title: '• Ignoring neonatal hypoglycaemia in late-preterm counselling.',
        },
      ],
    },
    {
      id: 'repeat-courses',
      heading: 'Repeat, Rescue & the No-Serial-Course Rule',
      intro:
        'Routine weekly or serial courses are not recommended. RCOG describes only a narrow rescue-course scenario: an initial course before 26+0 weeks followed by a new indication for imminent preterm birth, after senior review.',
      flow: [
        'Establish the date and gestation of the initial course',
        'Ask whether a new indication for imminent preterm birth has arisen',
        'Confirm the initial course was given before 26+0 weeks',
        'Discuss the narrow rescue option at senior level',
        'Do not prescribe routine weekly or serial courses',
        'Document the reasoning and the shared decision',
        'Reassess if the clinical situation changes again',
      ],
      bullets: [
        'No Routine Repeat: routine repeat or serial courses are not recommended.',
        'Why Not: cumulative steroid exposure may reduce fetal growth and has uncertain long-term effects without clear additional benefit.',
        'Narrow Rescue Scenario: consider a single rescue course when the initial course was given before 26+0 weeks and a new indication for imminent preterm birth arises.',
        'Senior Review: the rescue decision requires senior obstetric review.',
        'Timing: the new indication must reflect a genuine likelihood of birth within the next 7 days.',
        'Not Automatic: a previous course does not automatically entitle the woman to another.',
        'Not Weekly: do not give steroids every week until birth.',
        'Documentation: record the original course, the new indication, the senior discussion and the decision.',
        'Counselling: explain the limited evidence and the potential harms of repeated exposure.',
        'Tocolysis Caveat: do not use tocolysis solely to buy time for a repeat course.',
        'Preterm PPROM: follow the unit protocol; routine repeat courses are still not recommended.',
        'Local Protocol: check the current guideline because the evidence and recommendations are evolving.',
      ],
      table: {
        head: ['Scenario', 'Repeat Course Decision'],
        rows: [
          [
            'Initial course at 24 weeks, now 32 weeks with new imminent birth',
            'No routine repeat; the narrow rescue scenario requires the initial course before 26+0 weeks and senior review',
          ],
          [
            'Initial course before 26+0 weeks, new imminent-birth indication later',
            'A single rescue course may be considered after senior review',
          ],
          [
            'Weekly steroids until birth',
            'Not recommended',
          ],
          [
            'Course given months ago with no new indication',
            'Do not repeat automatically',
          ],
          [
            'Tocolysis solely to complete another course',
            'Not appropriate',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: routine serial or weekly courses are not recommended.',
        'A single rescue course is considered only if the initial course was before 26+0 weeks and a new imminent-birth indication arises.',
        'Senior review is mandatory before a rescue course.',
      ],
      trap: {
        title: 'Examiner trap - repeating ACS every week until delivery',
        body: 'Routine serial courses are not recommended. Repeat exposure may reduce fetal growth without clear additional benefit. Only the narrow rescue scenario, after senior review, is described by RCOG.',
      },
      traps: [
        {
          title: '• Prescribing weekly betamethasone until birth.',
        },
        {
          title: '• Giving a rescue course without senior review.',
        },
        {
          title: '• Using tocolysis only to complete another course.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'ACS accelerates fetal lung maturation before anticipated preterm birth.',
        'The core RCOG window is 24+0 to 34+6 weeks.',
        'Give ACS when birth within 7 days is sufficiently likely.',
        'The 7-day window is probability-based, not a guarantee.',
        'Benefit is greatest when birth occurs 24 hours to 7 days after treatment.',
        'Betamethasone is 12 mg intramuscularly twice, 24 hours apart.',
        'Dexamethasone is 6 mg intramuscularly every 12 hours for four doses.',
        'Both standard regimens total 24 mg.',
        'RCOG also describes dexamethasone 12 mg repeated after 24 hours.',
        'ACS reduces RDS, perinatal and neonatal death and IVH before 34 weeks.',
        'A partial course may still help.',
        'Never delay clinically indicated birth to complete the course.',
        'Maternal hyperglycaemia may persist for several days.',
        'Diabetes is not an absolute contraindication to ACS.',
        'Type 1 diabetes requires vigilance for ketoacidosis.',
        'Late preterm is 35+0 to 36+6 weeks and is individualised.',
        'Late-preterm ACS carries a neonatal hypoglycaemia concern.',
        'Planned caesarean at 37+0 to 38+6 weeks needs informed discussion, not routine ACS.',
        'Planned caesarean should not routinely occur before 39+0 weeks without an indication.',
        'Routine repeat or serial courses are not recommended.',
        'A rescue course requires an initial course before 26+0 weeks and senior review.',
        'Do not use tocolysis solely to complete a course.',
        'The same regimen is used in multiple pregnancy; do not double the dose.',
        'Corticosteroids do not treat chorioamnionitis; continue antibiotics.',
        'Document the indication, doses, times and any incomplete course.',
      ],
      traps: [
        {
          title: '• Treating at 23+5 weeks as within the standard window.',
        },
        {
          title: '• Delaying birth to complete the second dose.',
        },
        {
          title: '• Mixing up betamethasone and dexamethasone schedules.',
        },
        {
          title: '• Quoting a 12 mg total course.',
        },
        {
          title: '• Withholding ACS because of diabetes.',
        },
        {
          title: '• Ignoring steroid-induced hyperglycaemia.',
        },
        {
          title: '• Giving ACS routinely at 36 weeks.',
        },
        {
          title: '• Scheduling elective caesarean before 39 weeks without indication.',
        },
        {
          title: '• Prescribing weekly courses until birth.',
        },
        {
          title: '• Doubling the dose for twins.',
        },
        {
          title: '• Using tocolysis only to buy time for steroids.',
        },
        {
          title: '• Failing to inform the neonatal team of ACS exposure.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm16-f1',
      front: 'What is the RCOG gestational window for antenatal corticosteroids?',
      back: 'Offer ACS from 24+0 to 34+6 weeks when preterm birth is anticipated, including established preterm labour, PPROM or planned medically indicated preterm birth.',
    },
    {
      id: 'm16-f2',
      front: 'What is the key timing target for ACS benefit?',
      back: 'Birth within 7 days of administration. Benefit is greatest when birth occurs between 24 hours and 7 days after the course.',
    },
    {
      id: 'm16-f3',
      front: 'What is the standard betamethasone regimen?',
      back: '12 mg intramuscularly, repeated once after 24 hours. The total course dose is 24 mg.',
    },
    {
      id: 'm16-f4',
      front: 'What is the standard dexamethasone regimen?',
      back: '6 mg intramuscularly every 12 hours for four doses. The total course dose is 24 mg.',
    },
    {
      id: 'm16-f5',
      front: 'What total dose does a standard ACS course deliver?',
      back: '24 mg, whether given as betamethasone 12 mg twice or dexamethasone 6 mg four times.',
    },
    {
      id: 'm16-f6',
      front: 'Name three important benefits of ACS before 34 weeks.',
      back: 'Reduced respiratory distress syndrome, reduced perinatal and neonatal death, and reduced intraventricular haemorrhage.',
    },
    {
      id: 'm16-f7',
      front: 'Should clinically indicated birth be delayed to complete ACS?',
      back: 'No. Give the first dose if appropriate, but never delay birth for maternal or fetal indications. A partial course may still help.',
    },
    {
      id: 'm16-f8',
      front: 'What maternal metabolic effect is important after ACS?',
      back: 'Hyperglycaemia, which may persist for several days and requires close glucose monitoring and insulin adjustment.',
    },
    {
      id: 'm16-f9',
      front: 'Is diabetes an absolute contraindication to ACS?',
      back: 'No. Give ACS if indicated and manage the predictable hyperglycaemia with monitoring and insulin adjustment, watching for ketoacidosis in type 1 diabetes.',
    },
    {
      id: 'm16-f10',
      front: 'How is late preterm defined and how is ACS handled?',
      back: 'Late preterm is 35+0 to 36+6 weeks. ACS is individualised, weighing uncertain respiratory benefit against neonatal hypoglycaemia.',
    },
    {
      id: 'm16-f11',
      front: 'What does RCOG recommend for planned caesarean at 37+0 to 38+6 weeks?',
      back: 'Informed discussion of potential risks and benefits. ACS is not routine for every planned caesarean.',
    },
    {
      id: 'm16-f12',
      front: 'When should planned caesarean routinely be scheduled?',
      back: 'At or after 39+0 weeks, unless a clinical indication requires earlier birth.',
    },
    {
      id: 'm16-f13',
      front: 'Which neonatal complication is particularly relevant after late-preterm ACS?',
      back: 'Hypoglycaemia. It should be part of late-preterm counselling and neonatal monitoring.',
    },
    {
      id: 'm16-f14',
      front: 'Are routine repeat or serial ACS courses recommended?',
      back: 'No. A single rescue course may be considered only when the initial course was before 26+0 weeks and a new imminent-birth indication arises, after senior review.',
    },
    {
      id: 'm16-f15',
      front: 'What should be done if birth is expected within hours?',
      back: 'Give the first dose if appropriate, but do not delay birth. Inform the neonatal team and document that the course is incomplete.',
    },
  ],

  mcqs: [
    {
      id: 'm16-q1',
      stem: 'A woman at 29+2 weeks has established preterm labour and is likely to deliver within 48 hours. What is the most appropriate management?',
      options: [
        'Offer ACS and do not delay birth',
        'Withhold ACS because the second dose may not be given',
        'Wait until 32 weeks before treating',
        'Give ACS only after delivery',
      ],
      answerIndex: 0,
      explanation:
        'She is within the 24+0 to 34+6 week window and birth is likely within 7 days. Offer ACS even if the course may be incomplete, but never delay indicated delivery.',
    },
    {
      id: 'm16-q2',
      stem: 'Which is the standard betamethasone regimen?',
      options: [
        '6 mg intramuscularly once',
        '12 mg intramuscularly twice, 24 hours apart',
        '24 mg orally once',
        '4 mg intramuscularly every 6 hours',
      ],
      answerIndex: 1,
      explanation:
        'Betamethasone is given as two 12 mg intramuscular doses 24 hours apart, giving a total course dose of 24 mg.',
    },
    {
      id: 'm16-q3',
      stem: 'A woman at 31 weeks with type 1 diabetes has severe pre-eclampsia requiring delivery within 48 hours. Which statement is correct?',
      options: [
        'Diabetes contraindicates ACS',
        'Delay delivery until glucose normalises',
        'Give ACS if indicated and arrange close glucose and insulin management',
        'Give oral steroids only',
      ],
      answerIndex: 2,
      explanation:
        'Diabetes is not an absolute contraindication. Give ACS when indicated and manage steroid-associated hyperglycaemia with close monitoring and insulin adjustment.',
    },
    {
      id: 'm16-q4',
      stem: 'A woman at 35+5 weeks has irregular contractions, intact membranes and a low assessed likelihood of birth within 7 days. What is most appropriate?',
      options: [
        'Give ACS automatically',
        'Give weekly courses until birth',
        'Give ACS because all births after 35 weeks benefit',
        'Assess the likelihood of delivery and individualise; do not treat routinely without a clear imminent-birth indication',
      ],
      answerIndex: 3,
      explanation:
        'Late-preterm ACS is individualised. Weigh the uncertain respiratory benefit against neonatal hypoglycaemia and reassess if the clinical picture changes.',
    },
    {
      id: 'm16-q5',
      stem: 'A woman is scheduled for planned caesarean at 38+0 weeks. What does RCOG recommend?',
      options: [
        'Informed discussion of potential risks and benefits',
        'Mandatory ACS for every patient',
        'No discussion is needed',
        'Perform the caesarean at 36 weeks with steroids',
      ],
      answerIndex: 0,
      explanation:
        'For planned caesarean at 37+0 to 38+6 weeks, RCOG recommends informed discussion rather than routine ACS. Planned caesarean should not routinely occur before 39+0 weeks without an indication.',
    },
    {
      id: 'm16-q6',
      stem: 'A fetus is compromised and urgent delivery is required before the second steroid dose. What should the team do?',
      options: [
        'Delay birth for 24 hours',
        'Proceed with the indicated birth and do not delay for ACS completion',
        'Delay until the whole course is complete',
        'Give tocolysis to complete the course',
      ],
      answerIndex: 1,
      explanation:
        'Maternal and fetal safety take priority. Give the first dose if appropriate, but proceed with the indicated birth rather than waiting to complete the course.',
    },
    {
      id: 'm16-q7',
      stem: 'Which neonatal complication is particularly relevant after late-preterm ACS?',
      options: [
        'Hypercalcaemia',
        'Polycythaemia',
        'Hypoglycaemia',
        'Congenital heart block',
      ],
      answerIndex: 2,
      explanation:
        'Neonatal hypoglycaemia is a recognised concern after late-preterm ACS and should be included in counselling and neonatal monitoring.',
    },
    {
      id: 'm16-q8',
      stem: 'A woman had an initial ACS course at 25+4 weeks and now has a new indication for imminent preterm birth. Which principle applies?',
      options: [
        'Give weekly courses automatically',
        'Never consider another course under any circumstances',
        'Give steroids at term instead',
        'A single rescue course may be considered after senior review in the narrow RCOG scenario',
      ],
      answerIndex: 3,
      explanation:
        'RCOG describes a narrow rescue-course situation when the initial course was before 26+0 weeks and a new imminent-birth indication arises later. Senior review is essential.',
    },
    {
      id: 'm16-q9',
      stem: 'Which statement about the timing of ACS benefit is correct?',
      options: [
        'The effect lasts throughout pregnancy',
        'The best-supported benefit is when birth occurs within 7 days',
        'ACS works only if birth occurs exactly 24 hours after injection',
        'ACS has no effect if only one dose is received',
      ],
      answerIndex: 1,
      explanation:
        'The clinically relevant window is the 7 days before preterm birth, with greatest benefit between 24 hours and 7 days. Partial exposure may still help when birth is imminent.',
    },
    {
      id: 'm16-q10',
      stem: 'Which is the correct total dose for a standard antenatal corticosteroid course?',
      options: [
        '12 mg',
        '18 mg',
        '24 mg',
        '48 mg',
      ],
      answerIndex: 2,
      explanation:
        'Standard regimens total 24 mg: betamethasone 12 mg twice, or dexamethasone 6 mg four times.',
    },
  ],
};
