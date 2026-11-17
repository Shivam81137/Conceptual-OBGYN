import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 19 - HIV in Pregnancy & Postpartum (BHIVA 2025)
 * ---------------------------------------------------------------------------
 * Distilled from BHIVA 2025 (HIV Medicine 2025;26:1757-1880) with the
 * guideline's own delivery, intrapartum and neonatal prophylaxis thresholds.
 *
 * Covers:
 * - Vertical transmission and the four-point prevention package
 * - Antenatal assessment and multidisciplinary care
 * - Starting or continuing ART, preferred regimens and monitoring
 * - The 36-week viral-load decision and mode of birth
 * - Intrapartum IV zidovudine thresholds and dosing
 * - Neonatal postnatal prophylaxis and infant diagnostic testing
 * - Infant feeding, postpartum ART and HIV/HBV co-infection
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const HIV_PREGNANCY_MODULE: StudioModule = {
  id: 'pg-mod-19-hiv-in-pregnancy-postpartum',
  track: 'NEET_PG',
  title: 'HIV in Pregnancy & Postpartum: BHIVA 2025',
  shortTitle: 'HIV in Pregnancy',
  summary:
    'Complete PG clinical revision module on HIV in pregnancy and the postpartum period following the BHIVA 2025 guideline. Features the four-part prevention package, dolutegravir plus FTC/TDF as the preferred regimen, viral-load monitoring at 36 weeks and delivery, the under-50, 50 to 399 and 400-plus delivery thresholds, intrapartum IV zidovudine at above 1,000 copies/mL, the four low-risk criteria for two weeks of zidovudine monotherapy, standard three-drug neonatal prophylaxis, infant diagnostic testing, shared decision-making about formula versus breast feeding, lifelong postpartum ART and HIV/HBV co-infection, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'The 36-week viral load, IV AZT at 1,000 and PNP within 4 hours.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'BHIVA 2025',
    'Dolutegravir + FTC/TDF',
    'Viral Load <50',
    '50-399 Caesarean',
    'IV AZT >1000',
    'PNP Within 4 Hours',
    'ZDV 2 Weeks',
    'ZDV + 3TC + NVP',
    'Infant PCR Testing',
    'U=U Not Breastfeeding',
    'Lifelong ART',
    'HIV/HBV Coinfection',
  ],
  sourceTag:
    'BHIVA guidelines on the management of HIV in pregnancy and the postpartum period 2025 • HIV Medicine 2025;26:1757-1880',
  updatedAtISO: '2026-11-14T13:30:00.000Z',
  notes: [
    {
      id: 'hiv-framework',
      heading: 'HIV in Pregnancy: Framework & Vertical Transmission',
      intro:
        'HIV in pregnancy needs coordinated maternal HIV care, obstetric care, neonatal care and infant-feeding support. Transmission can occur in utero, during labour and delivery, and postnatally through breastmilk, so prevention must cover all three exposure periods.',
      flow: [
        'Recognise the three periods of vertical transmission',
        'Confirm maternal HIV status and start or continue effective ART',
        'Suppress plasma HIV RNA below 50 copies/mL before delivery',
        'Plan the mode and timing of birth from the latest viral load',
        'Give intrapartum antiretroviral cover when the threshold is met',
        'Start neonatal postnatal prophylaxis without delay',
        'Agree and document an infant-feeding plan',
      ],
      bullets: [
        'Aim One: maintain maternal health with lifelong combination antiretroviral therapy.',
        'Aim Two: achieve and maintain plasma HIV RNA below 50 copies/mL before delivery whenever possible.',
        'Aim Three: choose mode and timing of birth from the latest viral load, its trajectory, ART duration, adherence, obstetric factors and the person\u2019s preferences.',
        'Aim Four: provide intrapartum antiretroviral intervention when indicated.',
        'Aim Five: start neonatal postnatal prophylaxis promptly and match its intensity to transmission risk.',
        'Aim Six: plan infant feeding by shared decision-making, explaining that formula feeding removes postnatal transmission risk while breast feeding risk is greatly reduced by ART but is not zero.',
        'Aim Seven: continue maternal ART after birth and ensure ongoing HIV-service follow-up.',
        'In Utero: transmission may occur before labour, so maternal viral suppression matters throughout pregnancy.',
        'Intrapartum: exposure to maternal blood and secretions during labour and delivery is a major transmission route.',
        'Postnatal: breastmilk and human milk exposure continues after birth and needs its own plan.',
        'Prevention Package: suppressive ART, an appropriately planned birth, neonatal prophylaxis and an informed feeding decision.',
        'Language: use person-centred, non-judgemental language and shared decision-making throughout.',
      ],
      table: {
        head: ['Exposure Period', 'Prevention Lever'],
        rows: [
          [
            'In utero',
            'Effective maternal ART with plasma HIV RNA below 50 copies/mL',
          ],
          [
            'Labour and delivery',
            'Planned mode of birth plus intrapartum IV zidovudine when indicated',
          ],
          [
            'Postnatal',
            'Neonatal prophylaxis and a documented infant-feeding decision',
          ],
          [
            'Maternal health',
            'Lifelong ART continued after delivery without interruption',
          ],
          [
            'Follow-up',
            'Retention in HIV care and infant diagnostic testing',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: vertical transmission can occur in utero, intrapartum and postnatally through breastmilk.',
        'The target is plasma HIV RNA below 50 copies/mL before delivery whenever possible.',
        'Prevention is a package, not a single intervention.',
      ],
      trap: {
        title: 'Examiner trap - treating delivery mode as the whole prevention strategy',
        body: 'Mode of birth is only one lever. Maternal viral suppression, intrapartum cover, neonatal prophylaxis and the feeding decision each address a different exposure period.',
      },
      traps: [
        {
          title: '• Forgetting the postnatal breastmilk route.',
        },
        {
          title: '• Assuming a caesarean alone prevents transmission.',
        },
        {
          title: '• Stopping ART once the pregnancy ends.',
        },
      ],
    },
    {
      id: 'antenatal-assessment',
      heading: 'Antenatal Assessment & Multidisciplinary Care',
      intro:
        'The first assessment establishes whether HIV is new or known, what has been taken before, how adherent the person is and what else is present. Care is coordinated by the HIV multidisciplinary team with obstetrics, specialist midwives, paediatrics, pharmacy and feeding support.',
      flow: [
        'Establish whether HIV is newly diagnosed or known before conception',
        'Record current and previous ART, start dates, resistance and tolerability',
        'Assess adherence, missed doses, access barriers and mental health',
        'Take baseline viral load, CD4 count and resistance profile',
        'Screen renal and hepatic function, HBV, HCV, STIs and tuberculosis risk',
        'Confirm gestational age and obstetric history',
        'Document a birth and neonatal-prophylaxis plan for the delivery unit',
      ],
      bullets: [
        'Diagnosis Timing: distinguish newly diagnosed in pregnancy from known before conception.',
        'ART History: current regimen, start date, previous regimens, resistance history and tolerability.',
        'Adherence: missed doses, access barriers, mental health, social circumstances and safeguarding needs.',
        'Baseline Virology: plasma HIV RNA, CD4 count and resistance profile, including integrase resistance testing where indicated.',
        'Organ Function: renal and hepatic function.',
        'Co-infection Screen: hepatitis B and C status, other sexually transmitted infections and tuberculosis risk.',
        'Obstetric History: gestational age, prior preterm birth and any indication affecting the delivery plan.',
        'New Diagnosis: prompt specialist HIV assessment plus the usual antenatal investigations.',
        'HIV/HBV Co-infection: the regimen must suppress both viruses and must not leave lamivudine or emtricitabine as the only HBV-active agent.',
        'Team: HIV multidisciplinary team, obstetric team, specialist midwives, paediatric/neonatal HIV team, pharmacy and lactation support.',
        'Written Plan: a documented birth and neonatal-prophylaxis plan must be available to the delivery unit and revisited during pregnancy.',
        'Counselling: confidentiality, stigma, adherence, partner testing, sexual health, infant testing, feeding choices and postpartum retention in care.',
      ],
      table: {
        head: ['Domain', 'First-Assessment Action'],
        rows: [
          [
            'Diagnosis',
            'Establish newly diagnosed versus known before conception',
          ],
          [
            'Treatment history',
            'Current and previous regimens, start dates, resistance, tolerability',
          ],
          [
            'Adherence and social',
            'Missed doses, access barriers, mental health, safeguarding',
          ],
          [
            'Baseline virology',
            'HIV RNA, CD4 count, resistance including integrase where indicated',
          ],
          [
            'Co-infection',
            'HBV, HCV, other STIs, tuberculosis risk, opportunistic infection history',
          ],
          [
            'Obstetric',
            'Gestational age, prior preterm birth, delivery-plan influences',
          ],
          [
            'Planning',
            'Written birth and neonatal-prophylaxis plan shared with the delivery unit',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: baseline viral load, CD4 count and resistance testing guide the whole pregnancy plan.',
        'A written birth and neonatal-prophylaxis plan must reach the delivery unit.',
        'In HIV/HBV co-infection, never leave lamivudine or emtricitabine as the only HBV-active drug.',
      ],
      trap: {
        title: 'Examiner trap - treating HIV/HBV co-infection with a single HBV-active drug',
        body: 'The ART backbone must contain tenofovir plus lamivudine or emtricitabine so that two drugs are active against HBV. Lamivudine or emtricitabine alone risks HBV resistance.',
      },
      traps: [
        {
          title: '• Omitting resistance testing before starting ART.',
        },
        {
          title: '• Missing hepatitis B status in a newly diagnosed person.',
        },
        {
          title: '• Leaving the birth plan only in the HIV clinic notes.',
        },
      ],
    },
    {
      id: 'art-in-pregnancy',
      heading: 'Starting or Continuing ART & Monitoring Response',
      intro:
        'All pregnant people living with HIV should start ART as soon as possible in pregnancy. The preferred initial regimen is dolutegravir plus emtricitabine/tenofovir disoproxil, with emtricitabine/tenofovir alafenamide as an alternative. Someone already suppressed on effective ART usually continues it rather than switching automatically.',
      flow: [
        'Start ART as soon as possible in pregnancy',
        'Aim to have started by 18 to 20 weeks and no later than 24 weeks',
        'Select dolutegravir plus FTC/TDF as first choice when there are no renal or bone concerns',
        'Consider FTC/TAF when weight gain is a concern or renal/bone issues favour it',
        'Check HIV RNA about 2 weeks after starting or switching',
        'Repeat monthly until undetectable, then at least every 2 months',
        'Test at 36 weeks and at delivery, and check liver function 2 to 4 weeks after any change',
      ],
      bullets: [
        'Timing: BHIVA 2025 recommends starting ART as soon as possible in pregnancy (Grade 1B).',
        'Early Start: start in the first trimester where possible, particularly when baseline viral load exceeds 100,000 copies/mL or CD4 is below 200 cells/mm\u00b3.',
        'Nausea: if vomiting prevents reliable treatment, treat the symptoms and aim for consistent ART by about 18 to 20 weeks.',
        'Deadline: ART should have been started by 18 to 20 weeks where possible and at the latest by 24 weeks.',
        'Late Presentation: do not delay a high-genetic-barrier regimen while waiting for resistance results when the guideline permits starting first and modifying later.',
        'First Choice: dolutegravir plus emtricitabine/tenofovir disoproxil (FTC/TDF) where there are no renal or bone concerns (Grade 1A).',
        'Alternative: dolutegravir plus emtricitabine/tenofovir alafenamide (FTC/TAF), discussing weight gain and baseline weight (Grade 1A).',
        'Selected Regimens: dolutegravir/lamivudine/abacavir only with HLA-B*5701 negativity and other eligibility conditions; rilpivirine-based therapy, raltegravir 400 mg twice daily and darunavir/ritonavir twice daily are options in selected circumstances.',
        'No Automatic Switch: someone virologically suppressed on a recommended regimen usually continues it, with review of pregnancy pharmacokinetics and interactions.',
        'No Interruption: do not interrupt ART in pregnancy or postpartum without specialist direction.',
        'Early Monitoring: check HIV RNA about 2 weeks after starting or changing ART, then monthly until undetectable.',
        'Stable Monitoring: once suppressed, test at least every 2 months, including at 36 weeks and at delivery.',
        'Preconception Suppression: if already suppressed at conception, test every 2 months, at 36 weeks and at delivery.',
        'CD4: obtain a baseline count in the first trimester; repeat particularly when baseline CD4 is below 350 cells/mm\u00b3.',
        'Liver: check liver function 2 to 4 weeks after initiation or switch and at routine antenatal visits.',
        'Poor Response: a fall of less than 1 log at 4 weeks, or failure to suppress below 200 copies/mL, prompts review of adherence, absorption, interactions and resistance with the HIV team.',
      ],
      table: {
        head: ['Topic', 'BHIVA 2025 Position'],
        rows: [
          [
            'When to start',
            'As soon as possible; by 18 to 20 weeks where possible, at the latest by 24 weeks',
          ],
          [
            'Preferred first line',
            'Dolutegravir plus FTC/TDF where no renal or bone concerns',
          ],
          [
            'Alternative first line',
            'Dolutegravir plus FTC/TAF; discuss weight gain and baseline weight',
          ],
          [
            'Already suppressed',
            'Continue effective ART rather than switching automatically',
          ],
          [
            'After start or switch',
            'HIV RNA at 2 weeks, then monthly until undetectable',
          ],
          [
            'Once suppressed',
            'At least every 2 months, plus 36 weeks and delivery',
          ],
          [
            'Poor response',
            'Less than 1 log fall at 4 weeks or not below 200 copies/mL prompts MDT review',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: dolutegravir plus FTC/TDF is the preferred initial regimen in pregnancy.',
        'Start ART as soon as possible, ideally by 18 to 20 weeks and no later than 24 weeks.',
        'Once suppressed, test viral load every 2 months, at 36 weeks and at delivery.',
      ],
      trap: {
        title: 'Examiner trap - switching a suppressed regimen just because of pregnancy',
        body: 'A person who conceives while virologically suppressed on a recommended regimen usually continues it. Automatic switching is not recommended; review pharmacokinetics and interactions with the HIV specialist.',
      },
      traps: [
        {
          title: '• Delaying ART until after the first trimester in everyone.',
        },
        {
          title: '• Stopping ART temporarily during pregnancy.',
        },
        {
          title: '• Omitting the 36-week and delivery viral-load tests.',
        },
      ],
    },
    {
      id: 'delivery-planning',
      heading: 'Delivery Planning: The 36-Week Viral-Load Decision',
      intro:
        'The latest plasma viral load, usually measured at about 36 weeks, drives the mode-of-birth discussion. Agree and document the plan before the third trimester and finalise it by 36 weeks, considering the value, trend, ART duration, adherence, obstetric factors and the person\u2019s views.',
      flow: [
        'Confirm the latest viral load and its trajectory',
        'Review ART duration, adherence and obstetric factors',
        'Below 50 copies/mL \u00b7 support planned vaginal birth if no obstetric contraindication',
        '50 to 399 copies/mL \u00b7 plan caesarean after individualised discussion',
        '400 copies/mL or above \u00b7 recommend caesarean section',
        'If caesarean is for transmission prevention at above 50 copies/mL \u00b7 consider timing from 38 weeks',
        'Document the agreed plan and share it with the delivery unit',
      ],
      bullets: [
        'Below 50: planned vaginal birth should be supported when there is no obstetric contraindication (Grade 1C).',
        'VBAC: vaginal birth after caesarean can be offered if otherwise obstetrically appropriate.',
        'Obstetric Timing: if induction or prelabour caesarean is needed for obstetric reasons, use usual obstetric timing.',
        'Very Low Risk: suppression below 50 copies/mL is associated with a very low risk of intrapartum transmission when ART is taken effectively.',
        '50 to 399: BHIVA recommends planned caesarean section (Grade 1C), taking account of the measured value and trajectory, time on ART, adherence, obstetric considerations and the individual\u2019s views.',
        'Rising Load: a rising viral load, recent ART initiation, uncertain adherence or additional obstetric issues increases concern.',
        '400 or Above: BHIVA recommends caesarean section (Grade 1C).',
        'Timing: when caesarean is undertaken to reduce transmission at a viral load above 50 copies/mL, consider delivery from 38 weeks.',
        'Preterm Labour: assess viral load urgently on admission and optimise ART if HIV RNA exceeds 50 copies/mL.',
        'Preterm Adjuncts: give antenatal corticosteroids, magnesium sulphate for neuroprotection and GBS prophylaxis according to national guidance and gestational age.',
        'Term Prelabour Rupture: use the latest viral load, aim for delivery within 24 hours and have a low threshold to treat intrapartum pyrexia.',
        'Term Rupture Below 50: prompt induction or augmentation is recommended.',
        'Term Rupture 50 to 399: BHIVA recommends caesarean after individualised assessment.',
        'Term Rupture 400 or Above: urgent category 2 caesarean is recommended.',
        'PPROM: assess viral load on admission and decide with the multidisciplinary team using the latest result, trend, ART duration, adherence, gestation and obstetric factors.',
        'Birth Setting: give birth in a facility with direct access to neonatal care.',
        'Cord Clamping: delayed cord clamping may be supported when HIV RNA is below 50 copies/mL.',
      ],
      table: {
        head: ['Viral Load Near 36 Weeks', 'Recommended Birth Plan'],
        rows: [
          [
            'Below 50 copies/mL',
            'Support planned vaginal birth if no obstetric contraindication; VBAC possible',
          ],
          [
            '50 to 399 copies/mL',
            'Plan caesarean after individualised discussion of value, trend, ART duration and adherence',
          ],
          [
            '400 copies/mL or above',
            'Caesarean section recommended',
          ],
          [
            'Caesarean to prevent transmission at above 50',
            'Consider timing from 38 weeks',
          ],
          [
            'Term rupture below 50',
            'Prompt induction or augmentation; deliver within 24 hours',
          ],
          [
            'Term rupture 400 or above',
            'Urgent category 2 caesarean',
          ],
          [
            'PPROM',
            'Assess viral load on admission and decide with the multidisciplinary team',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: below 50 copies/mL supports planned vaginal birth; 50 to 399 means planned caesarean; 400 or above means caesarean is recommended.',
        'Caesarean for transmission prevention at above 50 copies/mL is considered from 38 weeks.',
        'HIV infection alone is not an indication for caesarean when the viral load is suppressed.',
      ],
      trap: {
        title: 'Examiner trap - merging the 50 to 399 and 400-plus bands',
        body: 'The 50 to 399 band recommends planned caesarean after individualised discussion. The 400-or-above band recommends caesarean outright. The 38-week timing statement applies to caesarean done to prevent transmission at a viral load above 50 copies/mL.',
      },
      traps: [
        {
          title: '• Recommending caesarean for every woman with HIV.',
        },
        {
          title: '• Treating 180 copies/mL as the same band as 900 copies/mL.',
        },
        {
          title: '• Delaying a term rupture beyond 24 hours.',
        },
      ],
    },
    {
      id: 'intrapartum-azt',
      heading: 'Intrapartum IV Zidovudine: A Separate Threshold',
      intro:
        'IV zidovudine is not required for every pregnant person with HIV, nor for every viral load above 400 copies/mL. The intrapartum threshold is above 1,000 copies/mL, or an untreated person with unknown viral load presenting in labour or with ruptured membranes.',
      flow: [
        'Check the latest viral load and whether ART has been taken',
        'Planned caesarean with HIV RNA above 1,000 \u00b7 start the infusion 4 hours before surgery',
        'Labour or rupture with planned vaginal birth and HIV RNA above 1,000 \u00b7 give IV zidovudine',
        'Labour or rupture with planned caesarean and HIV RNA above 1,000 \u00b7 start at presentation but do not delay surgery',
        'Untreated with unknown viral load in labour or rupture \u00b7 give IV zidovudine regardless of intended mode',
        'On ART with 50 to 1,000 \u00b7 individualise with the multidisciplinary team',
        'Stop once the umbilical cord is clamped',
      ],
      bullets: [
        'Not Universal: do not assume IV zidovudine is required for every HIV-positive pregnant person.',
        'Planned Caesarean Above 1,000: start the infusion 4 hours before the planned caesarean section.',
        'Labour or Rupture Above 1,000, Vaginal Birth Planned: give IV zidovudine through labour and delivery.',
        'Labour or Rupture Above 1,000, Caesarean Planned: start at presentation but do not delay the caesarean to complete the infusion.',
        'Untreated Unknown Viral Load: give IV zidovudine when presenting in labour or with ruptured membranes, regardless of intended mode of birth.',
        '50 to 1,000 on ART: IV zidovudine may be considered alongside other interventions; this is an individualised decision, not an automatic threshold rule.',
        'Loading Dose: zidovudine 2 mg/kg over 1 hour.',
        'Maintenance: 1 mg/kg/hour for the duration of labour and delivery.',
        'Stopping: continue until the umbilical cord is clamped, then discontinue.',
        'Threshold Distinction: the delivery-mode threshold is 400 copies/mL; the IV zidovudine threshold is above 1,000 copies/mL or untreated with unknown viral load.',
        'No Delay: never postpone an indicated caesarean to complete 4 hours of infusion.',
        'Documentation: record the start time, dose and time of cord clamping.',
      ],
      table: {
        head: ['Situation', 'IV Zidovudine Action'],
        rows: [
          [
            'Planned caesarean, HIV RNA above 1,000',
            'Start 4 hours before the planned caesarean',
          ],
          [
            'Labour or rupture, vaginal birth planned, above 1,000',
            'Give through labour and delivery',
          ],
          [
            'Labour or rupture, caesarean planned, above 1,000',
            'Start at presentation; do not delay the caesarean',
          ],
          [
            'Untreated, unknown viral load, labour or rupture',
            'Give regardless of intended mode of birth',
          ],
          [
            'On ART, 50 to 1,000 copies/mL',
            'May be considered individually with the MDT',
          ],
          [
            'Dosing',
            '2 mg/kg over 1 hour, then 1 mg/kg/hour until cord clamping',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: the IV zidovudine threshold is above 1,000 copies/mL, not 400.',
        'Dose is 2 mg/kg over 1 hour, then 1 mg/kg/hour until the cord is clamped.',
        'Untreated unknown viral load in labour or rupture always warrants IV zidovudine.',
      ],
      trap: {
        title: 'Examiner trap - starting IV zidovudine at 400 copies/mL',
        body: 'Four hundred copies/mL is the delivery-mode threshold. IV zidovudine is generally recommended above 1,000 copies/mL in the specified circumstances, or in an untreated person with unknown viral load presenting in labour or with ruptured membranes.',
      },
      traps: [
        {
          title: '• Delaying a caesarean to finish the 4-hour infusion.',
        },
        {
          title: '• Withholding IV zidovudine in an untreated person with unknown viral load.',
        },
        {
          title: '• Continuing the infusion after the cord is clamped.',
        },
      ],
    },
    {
      id: 'neonatal-prophylaxis',
      heading: 'Neonatal Postnatal Prophylaxis & Infant Testing',
      intro:
        'Neonatal postnatal prophylaxis is urgent and must start as soon as possible after birth and no later than 4 hours. Low-risk infants receive 2 weeks of zidovudine monotherapy; everyone else receives combination prophylaxis with zidovudine and lamivudine for 4 weeks plus nevirapine for 2 weeks.',
      flow: [
        'Confirm the intended neonatal regimen in the antenatal birth plan',
        'Start prophylaxis as soon as possible and no later than 4 hours',
        'Take maternal and infant HIV RNA PCR samples on the day of delivery',
        'Check whether all four low-risk maternal criteria are met',
        'Low risk \u00b7 zidovudine monotherapy for 2 weeks',
        'Not all criteria met \u00b7 zidovudine plus lamivudine for 4 weeks with nevirapine for 2 weeks',
        'Reassess if the delivery-day maternal viral load returns after prophylaxis started',
      ],
      bullets: [
        'Urgency: start neonatal prophylaxis as soon as possible after birth and no later than 4 hours (Grade 1D).',
        'Birth Plan: the antenatal plan should specify the intended neonatal regimen and be available to the delivery and neonatal teams.',
        'Samples: obtain maternal and infant HIV RNA PCR on the day of delivery and aim for results within 24 hours.',
        'No Delay: do not delay prophylaxis for a laboratory result or because birth occurs outside normal working hours.',
        'Low-Risk Criterion One: ART commenced at least 10 weeks before delivery.',
        'Low-Risk Criterion Two: good engagement with maternity, antenatal and HIV services.',
        'Low-Risk Criterion Three: at least one viral-load measurement in the 6 weeks before delivery.',
        'Low-Risk Criterion Four: every viral-load measurement in the 10 weeks before delivery is below 50 copies/mL.',
        'Low-Risk Regimen: 2 weeks of oral zidovudine monotherapy when all four criteria are met.',
        'Borderline Value: a viral load between 50 and 200 copies/mL may be considered individually, particularly if the next measurement is below 50; this requires expert risk assessment.',
        'High Risk: combination prophylaxis when any criterion fails, particularly with a delivery viral load above 50 copies/mL, uncertain adherence, unknown viral load or ART started too close to delivery.',
        'Combination Regimen: zidovudine plus lamivudine for 4 weeks, with nevirapine for 2 weeks and then stopped while the other two complete 4 weeks.',
        'Dosing: follow the BHIVA neonatal appendix and specialist paediatric HIV guidance, adjusted for gestational age, birth weight, drug exposure and resistance.',
        'Resistance: seek expert advice when maternal resistance is known; if urgent input is unavailable, start standard three-drug prophylaxis while advice is obtained, unless HIV-2 or resistance makes nevirapine unsuitable.',
        'Escalation: if a low-risk infant later has a delivery-day maternal viral load above 50 copies/mL, discuss urgently and consider escalating to three-drug prophylaxis.',
        'De-escalation: if combination prophylaxis was started but the delivery viral load returns below 50 copies/mL, consider simplifying to zidovudine alone to complete 2 weeks in total after expert discussion.',
        'Infant Testing: HIV RNA or DNA PCR at birth or within 24 hours; low-risk infants repeat at 4 to 6 weeks and 10 to 12 weeks; high-risk infants add testing at 2, 6 and 12 weeks.',
        'Serology: antibody testing later documents seroreversion, with testing at 24 months and timing adapted for ongoing breastfeeding exposure.',
        'Positive PCR: urgent specialist paediatric HIV referral for confirmatory testing and full treatment; prophylaxis is not treatment of established infection.',
      ],
      table: {
        head: ['Risk Category', 'Prophylaxis and Testing'],
        rows: [
          [
            'All infants',
            'Start prophylaxis as soon as possible and no later than 4 hours',
          ],
          [
            'Low risk, all four criteria met',
            'Zidovudine monotherapy for 2 weeks',
          ],
          [
            'High risk or any criterion unmet',
            'Zidovudine plus lamivudine for 4 weeks, nevirapine for 2 weeks',
          ],
          [
            'Delivery viral load above 50 in a low-risk infant',
            'Urgent paediatric review; consider escalating to three drugs',
          ],
          [
            'Delivery viral load below 50 after combination start',
            'Consider simplifying to zidovudine to complete 2 weeks',
          ],
          [
            'Low-risk testing',
            'PCR at birth, 4 to 6 weeks and 10 to 12 weeks',
          ],
          [
            'High-risk testing',
            'PCR at birth, 2, 6 and 12 weeks; serology later',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: neonatal prophylaxis must start within 4 hours of birth.',
        'All four low-risk criteria must be met for 2 weeks of zidovudine alone.',
        'Standard high-risk prophylaxis is zidovudine plus lamivudine for 4 weeks with nevirapine for 2 weeks.',
      ],
      trap: {
        title: 'Examiner trap - giving 2 weeks of zidovudine when one low-risk criterion fails',
        body: 'Zidovudine monotherapy requires all four criteria: ART for at least 10 weeks, good engagement, a viral load in the last 6 weeks and every viral load in the last 10 weeks below 50 copies/mL. If any fails, use combination prophylaxis.',
      },
      traps: [
        {
          title: '• Waiting for the maternal viral load before starting prophylaxis.',
        },
        {
          title: '• Continuing nevirapine for the full 4 weeks.',
        },
        {
          title: '• Treating a positive infant PCR as prophylaxis failure rather than infection.',
        },
      ],
    },
    {
      id: 'feeding-postpartum',
      heading: 'Infant Feeding, Postpartum ART & HIV/HBV Co-infection',
      intro:
        'Infant feeding is a shared decision. Formula feeding removes postnatal transmission risk, while breast feeding is greatly safer on suppressive ART but is not zero risk. Maternal ART continues lifelong after birth, and co-infection with HBV changes the regimen requirements.',
      flow: [
        'Discuss infant feeding by the end of the second trimester',
        'Revisit in the third trimester and document the decision in the birth plan',
        'Explain that formula feeding removes postnatal transmission risk',
        'If breast feeding is chosen \u00b7 confirm HIV RNA below 50, adherence and MDT support',
        'Monitor parent and infant HIV RNA monthly during breast feeding and for 2 months after stopping',
        'Continue lifelong maternal ART and arrange HIV follow-up within 4 to 6 weeks',
        'If co-infected with HBV \u00b7 keep two HBV-active drugs and continue postpartum',
      ],
      bullets: [
        'Shared Decision: use a supportive, non-judgemental model, discuss by the end of the second trimester and revisit in the third.',
        'Documentation: record the feeding decision in the antenatal record and birth plan and provide written information.',
        'Formula Feeding: exclusive formula feeding, or another recommended alternative, removes the risk of postnatal transmission through human milk.',
        'Support: provide practical, financial and psychosocial support and access to formula and equipment where needed.',
        'No U=U Extrapolation: undetectable equals untransmittable evidence for sexual transmission must not be extrapolated to breast feeding.',
        'Breast Feeding Conditions: lifelong ART with consistent adherence, exclusive breast feeding especially before 6 months, and no solids before 6 months.',
        'Monitoring: monthly HIV RNA for parent and infant during breast feeding and for 2 months after stopping, where possible.',
        'Duration: stop breast feeding before or soon after 6 months to minimise cumulative transmission risk.',
        'Written Plan: rapid access to expert advice and a clear plan for mastitis, nipple infection, poor adherence or infant gastrointestinal illness.',
        'Detectable Load: if HIV RNA reaches 50 copies/mL or above during breast feeding, stop immediately, switch to formula, repeat testing in parent and infant and start infant post-exposure prophylaxis as advised.',
        'Stop and Seek Advice: bilateral nipple or breast infection, reduced adherence, parental gastrointestinal symptoms, infant gastrointestinal symptoms or infant oral lesions.',
        'Geography: these are UK BHIVA recommendations; follow the current national policy where safe replacement feeding is limited.',
        'Postpartum ART: continue lifelong ART after birth (Grade 1A) and do not stop because pregnancy ended or birth was by caesarean.',
        'Discharge: provide an adequate ART supply and an appointment with a named HIV clinician within 4 to 6 weeks.',
        'Postpartum Review: assess adherence barriers, mental health, stigma, housing, finances, retention in care, feeding, infant testing and contraception.',
        'Co-infection Backbone: use tenofovir plus lamivudine or emtricitabine with an appropriate third agent.',
        'Co-infection Safety: do not use lamivudine or emtricitabine as the only HBV-active drug; check HBV DNA, HBeAg, liver tests and disease stage.',
        'Co-infection Monitoring: repeat liver function tests at 2 and 4 weeks after starting ART to detect hepatotoxicity or immune reconstitution inflammatory syndrome.',
        'Co-infection Postpartum: continue HBV-active ART; do not stop tenofovir plus lamivudine or emtricitabine without specialist planning because of rebound and flare risk.',
      ],
      table: {
        head: ['Topic', 'BHIVA 2025 Position'],
        rows: [
          [
            'Formula feeding',
            'Removes postnatal transmission risk; provide practical and psychosocial support',
          ],
          [
            'Breast feeding',
            'Possible with HIV RNA below 50, good adherence and MDT support; risk is low but not zero',
          ],
          [
            'Breast feeding monitoring',
            'Monthly parent and infant HIV RNA during feeding and for 2 months after stopping',
          ],
          [
            'Detectable load during feeding',
            'Stop immediately, repeat parent and infant testing, start infant PEP',
          ],
          [
            'Postpartum ART',
            'Continue lifelong; never stop because pregnancy has ended',
          ],
          [
            'Discharge planning',
            'ART supply plus a named HIV clinician appointment within 4 to 6 weeks',
          ],
          [
            'HIV/HBV co-infection',
            'Two HBV-active drugs; continue postpartum with liver monitoring',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: formula feeding removes postnatal transmission risk; breast feeding on suppressive ART is low risk but not zero.',
        'A detectable viral load of 50 copies/mL or above during breast feeding means stop immediately and test both parent and infant.',
        'Continue maternal ART lifelong postpartum and never stop HBV-active drugs without specialist planning.',
      ],
      trap: {
        title: 'Examiner trap - applying U=U to breast feeding',
        body: 'Undetectable equals untransmittable applies to sexual transmission. Breast feeding transmission is greatly reduced by ART but is not zero, so it needs exclusive feeding, adherence, monthly monitoring and a written plan.',
      },
      traps: [
        {
          title: '• Telling a parent that breast feeding carries zero risk on ART.',
        },
        {
          title: '• Stopping ART after delivery.',
        },
        {
          title: '• Stopping tenofovir plus lamivudine abruptly in HIV/HBV co-infection.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'Vertical transmission occurs in utero, intrapartum and through breastmilk.',
        'Start ART as soon as possible; aim for 18 to 20 weeks and no later than 24 weeks.',
        'Preferred initial regimen is dolutegravir plus FTC/TDF; FTC/TAF is an alternative.',
        'Continue effective pre-pregnancy ART rather than switching automatically.',
        'Check HIV RNA at 2 weeks after starting or switching, then monthly until undetectable.',
        'Once suppressed, test every 2 months, at 36 weeks and at delivery.',
        'Mode of birth is decided from the viral load near 36 weeks.',
        'Below 50 copies/mL supports planned vaginal birth if there is no obstetric contraindication.',
        '50 to 399 copies/mL means planned caesarean after individualised discussion.',
        '400 copies/mL or above means caesarean section is recommended.',
        'Caesarean to prevent transmission at above 50 copies/mL is considered from 38 weeks.',
        'Term rupture with a load below 50 is managed with prompt induction and delivery within 24 hours.',
        'Term rupture at 400 or above needs an urgent category 2 caesarean.',
        'IV zidovudine threshold is above 1,000 copies/mL, not 400.',
        'Untreated unknown viral load in labour or rupture always warrants IV zidovudine.',
        'IV zidovudine is 2 mg/kg over 1 hour, then 1 mg/kg/hour until cord clamping.',
        'Never delay a caesarean to complete 4 hours of infusion.',
        'Neonatal prophylaxis must start as soon as possible and no later than 4 hours.',
        'Low-risk prophylaxis is 2 weeks of zidovudine when all four criteria are met.',
        'High-risk prophylaxis is zidovudine plus lamivudine for 4 weeks with nevirapine for 2 weeks.',
        'Formula feeding removes postnatal transmission risk.',
        'Breast feeding needs HIV RNA below 50, exclusivity and monthly monitoring.',
        'A load of 50 or above during breast feeding means stop immediately and test both.',
        'Continue ART lifelong postpartum.',
        'HIV/HBV co-infection needs two HBV-active drugs and continued postpartum treatment.',
      ],
      traps: [
        {
          title: '• Recommending caesarean for every woman with HIV.',
        },
        {
          title: '• Merging the 50 to 399 and 400-plus bands.',
        },
        {
          title: '• Starting IV zidovudine at 400 copies/mL.',
        },
        {
          title: '• Delaying caesarean to finish the infusion.',
        },
        {
          title: '• Waiting for a viral-load result before starting neonatal prophylaxis.',
        },
        {
          title: '• Using zidovudine alone when one low-risk criterion fails.',
        },
        {
          title: '• Continuing nevirapine for the full 4 weeks.',
        },
        {
          title: '• Applying U=U to breast feeding.',
        },
        {
          title: '• Stopping ART after delivery.',
        },
        {
          title: '• Stopping HBV-active drugs abruptly in co-infection.',
        },
        {
          title: '• Forgetting that maternal tenofovir does not replace infant vaccine and HBIG.',
        },
        {
          title: '• Missing the 36-week and delivery viral-load tests.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm19-f1',
      front: 'When should ART start in pregnancy and by what gestation at the latest?',
      back: 'As soon as possible, ideally by 18 to 20 weeks and no later than 24 weeks. Earlier start gives more time to suppress the viral load before delivery.',
    },
    {
      id: 'm19-f2',
      front: 'What is the preferred initial ART regimen in pregnancy?',
      back: 'Dolutegravir plus emtricitabine/tenofovir disoproxil (FTC/TDF). Dolutegravir plus FTC/TAF is an alternative, with weight gain discussed.',
    },
    {
      id: 'm19-f3',
      front: 'How is viral load monitored after starting or switching ART?',
      back: 'At about 2 weeks, then monthly until undetectable. Once suppressed, at least every 2 months, including at 36 weeks and at delivery.',
    },
    {
      id: 'm19-f4',
      front: 'What mode of birth is supported when HIV RNA is below 50 copies/mL?',
      back: 'Planned vaginal birth if there is no obstetric contraindication. VBAC is possible if otherwise obstetrically appropriate.',
    },
    {
      id: 'm19-f5',
      front: 'What is recommended when the 36-week HIV RNA is 50 to 399 copies/mL?',
      back: 'Planned caesarean after individualised discussion of the value, trend, ART duration, adherence and obstetric factors. Consider timing from 38 weeks.',
    },
    {
      id: 'm19-f6',
      front: 'What is recommended when HIV RNA is 400 copies/mL or above?',
      back: 'Caesarean section is recommended. When done to prevent transmission at a load above 50 copies/mL, consider delivery from 38 weeks.',
    },
    {
      id: 'm19-f7',
      front: 'When is intrapartum IV zidovudine indicated?',
      back: 'Above 1,000 copies/mL in the specified caesarean or labour situations, or in an untreated person with unknown viral load presenting in labour or with ruptured membranes.',
    },
    {
      id: 'm19-f8',
      front: 'What is the IV zidovudine schedule?',
      back: 'Loading dose 2 mg/kg over 1 hour, then 1 mg/kg/hour during labour and delivery, stopped when the umbilical cord is clamped.',
    },
    {
      id: 'm19-f9',
      front: 'Within what time must neonatal prophylaxis start?',
      back: 'As soon as possible after birth and no later than 4 hours. Do not delay for a laboratory result or out-of-hours birth.',
    },
    {
      id: 'm19-f10',
      front: 'What are the four low-risk criteria for 2 weeks of zidovudine alone?',
      back: 'ART for at least 10 weeks, good service engagement, a viral load within the last 6 weeks and every load in the last 10 weeks below 50 copies/mL.',
    },
    {
      id: 'm19-f11',
      front: 'What is the standard high-risk neonatal prophylaxis regimen?',
      back: 'Zidovudine plus lamivudine for 4 weeks, with nevirapine for 2 weeks and then stopped while the other two complete 4 weeks.',
    },
    {
      id: 'm19-f12',
      front: 'How does formula feeding compare with breast feeding in BHIVA 2025?',
      back: 'Formula feeding removes postnatal transmission risk. Breast feeding is low risk but not zero, needing HIV RNA below 50, exclusivity and monitoring.',
    },
    {
      id: 'm19-f13',
      front: 'What is done if HIV RNA reaches 50 copies/mL or above during breast feeding?',
      back: 'Stop breast feeding immediately, switch to formula, repeat HIV RNA testing in parent and infant and start infant post-exposure prophylaxis as advised.',
    },
    {
      id: 'm19-f14',
      front: 'How long is maternal ART continued after birth?',
      back: 'Lifelong. Do not stop ART because pregnancy ended or because birth was by caesarean section. Arrange HIV follow-up within 4 to 6 weeks.',
    },
    {
      id: 'm19-f15',
      front: 'What ART rule applies in HIV/HBV co-infection?',
      back: 'Use two HBV-active drugs, tenofovir plus lamivudine or emtricitabine, with a third HIV agent. Never leave lamivudine or emtricitabine as the only HBV-active drug.',
    },
  ],

  mcqs: [
    {
      id: 'm19-q1',
      stem: 'A woman is diagnosed with HIV at 14 weeks of gestation. When should antiretroviral therapy be started?',
      options: [
        'After 24 weeks to avoid first-trimester drug exposure',
        'As soon as possible, ideally by 18 to 20 weeks and no later than 24 weeks',
        'Only if the CD4 count falls below 200 cells/mm3',
        'After delivery, to protect the neonate only',
      ],
      answerIndex: 1,
      explanation:
        'BHIVA 2025 recommends starting ART as soon as possible in pregnancy, aiming for 18 to 20 weeks and no later than 24 weeks. Earlier suppression reduces transmission and benefits maternal health.',
    },
    {
      id: 'm19-q2',
      stem: 'Which regimen is the preferred initial ART choice for most pregnant people with HIV and no renal or bone concerns?',
      options: [
        'Zidovudine monotherapy',
        'Darunavir/ritonavir twice daily alone',
        'Dolutegravir plus emtricitabine/tenofovir disoproxil',
        'Raltegravir 400 mg once daily',
      ],
      answerIndex: 2,
      explanation:
        'Dolutegravir plus FTC/TDF is first choice (Grade 1A). Dolutegravir plus FTC/TAF is an alternative, with weight gain discussed.',
    },
    {
      id: 'm19-q3',
      stem: 'A woman on adherent ART has HIV RNA of 30 copies/mL at 36 weeks with no obstetric contraindication. What mode of birth should be supported?',
      options: [
        'Planned vaginal birth',
        'Elective caesarean at 38 weeks',
        'Urgent category 1 caesarean in labour',
        'Caesarean only if membranes rupture',
      ],
      answerIndex: 0,
      explanation:
        'With HIV RNA below 50 copies/mL, planned vaginal birth should be supported when there is no obstetric contraindication. HIV infection alone does not mandate caesarean.',
    },
    {
      id: 'm19-q4',
      stem: 'At 36 weeks the HIV RNA is 180 copies/mL. What is the BHIVA 2025 approach to birth?',
      options: [
        'Planned vaginal birth with no additional precautions',
        'Immediate category 1 caesarean at 36 weeks',
        'Repeat the viral load after delivery and decide then',
        'Planned caesarean after individualised discussion, with timing considered from 38 weeks',
      ],
      answerIndex: 3,
      explanation:
        'The 50 to 399 copies/mL band recommends planned caesarean after considering the value and trajectory, ART duration, adherence, obstetric factors and the person\u2019s views. Timing from 38 weeks is considered when caesarean is for transmission prevention.',
    },
    {
      id: 'm19-q5',
      stem: 'A woman on ART has HIV RNA of 2,500 copies/mL at 36 weeks. What is recommended?',
      options: [
        'Planned vaginal birth with intrapartum IV zidovudine only',
        'Repeat the viral load at 39 weeks before deciding',
        'Caesarean section',
        'Induction at 37 weeks with neonatal prophylaxis alone',
      ],
      answerIndex: 2,
      explanation:
        'At 400 copies/mL or above, BHIVA recommends caesarean section (Grade 1C), with timing from 38 weeks considered when the operation is done to prevent transmission.',
    },
    {
      id: 'm19-q6',
      stem: 'A woman with HIV RNA of 3,000 copies/mL is admitted for a planned caesarean. When should IV zidovudine start?',
      options: [
        'At the time of skin incision',
        'Four hours before the planned caesarean',
        'After delivery of the baby',
        'Only if membranes have ruptured',
      ],
      answerIndex: 1,
      explanation:
        'For a planned caesarean with HIV RNA above 1,000 copies/mL, start the infusion 4 hours before surgery. If she presents in labour or with ruptured membranes, start at presentation but do not delay the caesarean.',
    },
    {
      id: 'm19-q7',
      stem: 'What is the correct IV zidovudine schedule for intrapartum use?',
      options: [
        '2 mg/kg over 1 hour, then 1 mg/kg/hour until cord clamping',
        '5 mg/kg bolus, then 2 mg/kg/hour for 24 hours',
        '1 mg/kg over 4 hours, then 0.5 mg/kg/hour until discharge',
        '10 mg/kg once at diagnosis of labour only',
      ],
      answerIndex: 0,
      explanation:
        'The loading dose is 2 mg/kg over 1 hour, followed by 1 mg/kg/hour for the duration of labour and delivery, continued until the umbilical cord is clamped and then stopped.',
    },
    {
      id: 'm19-q8',
      stem: 'A mother started ART 14 weeks before delivery, engaged well with services, had a viral load checked 4 weeks before birth and all loads in the preceding 10 weeks were below 50 copies/mL. What neonatal prophylaxis is recommended?',
      options: [
        'Zidovudine plus lamivudine for 4 weeks with nevirapine for 2 weeks',
        'Nevirapine alone for 6 weeks',
        'No prophylaxis is needed',
        'Zidovudine monotherapy for 2 weeks',
      ],
      answerIndex: 3,
      explanation:
        'All four low-risk criteria are met, so 2 weeks of oral zidovudine monotherapy is recommended, with infant PCR testing on the low-risk schedule.',
    },
    {
      id: 'm19-q9',
      stem: 'A woman presents in labour with an unknown HIV viral load and uncertain recent adherence. What neonatal prophylaxis is appropriate?',
      options: [
        'Wait for the maternal viral load before starting anything',
        'Zidovudine monotherapy for 4 weeks',
        'Combination prophylaxis with zidovudine and lamivudine for 4 weeks plus nevirapine for 2 weeks',
        'Single-dose nevirapine at birth only',
      ],
      answerIndex: 2,
      explanation:
        'Unknown viral load and uncertain adherence mean high risk. Start standard combination prophylaxis urgently, with expert adjustment if resistance or HIV-2 makes nevirapine unsuitable.',
    },
    {
      id: 'm19-q10',
      stem: 'A parent who is breast feeding has a confirmed HIV RNA of 120 copies/mL. What is the immediate response?',
      options: [
        'Continue breast feeding and repeat the test in 3 months',
        'Stop breast feeding immediately, test parent and infant urgently and start infant post-exposure prophylaxis as advised',
        'Switch the parent to formula top-ups while continuing breast feeding',
        'Give the infant a single dose of nevirapine and continue feeding',
      ],
      answerIndex: 1,
      explanation:
        'A detectable viral load of 50 copies/mL or above during breast feeding requires immediate cessation, urgent repeat parent and infant HIV RNA testing and infant post-exposure prophylaxis as directed by paediatric HIV specialists.',
    },
  ],
};
