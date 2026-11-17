import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 20 - Hepatitis B in Pregnancy (SMFM Consult #69)
 * ---------------------------------------------------------------------------
 * Distilled from SMFM Consult Series #69 (AJOG April 2024), which replaced
 * Consult #38 and is endorsed by ACOG, with clearly identified CDC/AASLD
 * supporting updates.
 *
 * Covers:
 * - Why perinatal hepatitis B prevention matters
 * - Universal antenatal screening and triple-panel interpretation
 * - Maternal evaluation and maternal-health treatment thresholds
 * - Third-trimester tenofovir at HBV DNA above 200,000 IU/mL
 * - Intrapartum and obstetric management
 * - Neonatal vaccine plus HBIG within 12 hours and PVST
 * - Breastfeeding, household contacts and postpartum care
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const HEPATITIS_B_PREGNANCY_MODULE: StudioModule = {
  id: 'pg-mod-20-hepatitis-b-pregnancy',
  track: 'NEET_PG',
  title: 'Hepatitis B in Pregnancy',
  shortTitle: 'Hepatitis B in Pregnancy',
  summary:
    'Complete PG clinical revision module on hepatitis B in pregnancy following SMFM Consult Series #69 (2024), which replaced Consult #38 and is endorsed by ACOG. Features universal antenatal triple-panel screening, HBsAg, anti-HBs and total anti-HBc interpretation, maternal-health treatment thresholds distinct from perinatal prophylaxis, tenofovir disoproxil 300 mg or tenofovir alafenamide 25 mg from 28 to 32 weeks when HBV DNA exceeds 200,000 IU/mL, unchanged intrapartum care with no caesarean for hepatitis B alone, hepatitis B vaccine plus HBIG within 12 hours of birth, post-vaccination serology with HBsAg and anti-HBs only at 9 to 12 months, breastfeeding after immunoprophylaxis, postpartum flare risk when tenofovir is stopped, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Triple panel, the 200,000 threshold and vaccine plus HBIG in 12 hours.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'SMFM Consult 69',
    'Universal HBsAg',
    'Triple Panel',
    'HBV DNA 200000',
    'Tenofovir 28-32 Weeks',
    'TDF 300 mg',
    'TAF 25 mg',
    'Vaccine + HBIG 12 h',
    'PVST 9-12 Months',
    'No Caesarean for HBV',
    'Breastfeeding Allowed',
    'Postpartum Flare',
  ],
  sourceTag:
    'SMFM Consult Series #69, Hepatitis B in pregnancy: updated guidelines, AJOG April 2024 • ACOG-endorsed • CDC/AASLD updates',
  updatedAtISO: '2026-11-14T14:00:00.000Z',
  notes: [
    {
      id: 'hbv-framework',
      heading: 'Hepatitis B in Pregnancy: Why Prevention Matters',
      intro:
        'Hepatitis B virus is transmitted through blood and body fluids, including sexual, percutaneous and vertical exposure. Perinatal transmission can occur in utero, during labour and delivery through maternal blood and secretions, and after birth through close contact.',
      flow: [
        'Identify maternal infection through antenatal screening',
        'Characterise maternal infection and liver disease',
        'Measure quantitative HBV DNA to find a high viral load',
        'Add maternal tenofovir in the third trimester when HBV DNA exceeds 200,000 IU/mL',
        'Give the newborn vaccine and HBIG within 12 hours',
        'Complete the infant vaccine series and verify response with serology',
        'Maintain maternal liver follow-up, especially postpartum',
      ],
      bullets: [
        'Transmission: blood and body fluids, including sexual exposure, percutaneous exposure and vertical transmission.',
        'In Utero: transmission may occur before labour.',
        'Intrapartum: exposure to maternal blood and secretions during labour and delivery.',
        'Postnatal: close contact after birth, including through human milk exposure.',
        'Screening: the first step is identifying maternal infection in every pregnancy.',
        'Characterisation: define the infection pattern, liver disease and quantitative HBV DNA.',
        'Maternal Antiviral: tenofovir in the third trimester when HBV DNA exceeds 200,000 IU/mL for prevention of perinatal transmission.',
        'Neonatal Immunoprophylaxis: hepatitis B vaccine plus HBIG within 12 hours of birth.',
        'Series Completion: complete the infant vaccine series and verify the response.',
        'Maternal Follow-Up: maintain liver follow-up, especially postpartum and after stopping prophylaxis.',
        'Chronic Infection Risk: without appropriate immunoprophylaxis, up to 90 percent of perinatally infected infants may develop chronic HBV infection.',
        'Adjunct Not Replacement: maternal tenofovir is an adjunct and never replaces neonatal immunoprophylaxis.',
      ],
      table: {
        head: ['Step', 'Prevention Action'],
        rows: [
          [
            'Identify',
            'Universal antenatal hepatitis B screening in every pregnancy',
          ],
          [
            'Characterise',
            'Define infection pattern, liver disease and quantitative HBV DNA',
          ],
          [
            'Maternal antiviral',
            'Tenofovir from 28 to 32 weeks when HBV DNA exceeds 200,000 IU/mL',
          ],
          [
            'Neonatal passive and active',
            'Hepatitis B vaccine plus HBIG within 12 hours of birth',
          ],
          [
            'Complete series',
            'Finish the infant vaccine schedule and confirm response',
          ],
          [
            'Maternal follow-up',
            'Ongoing liver care, especially postpartum and after stopping antivirals',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: without immunoprophylaxis, up to 90 percent of perinatally infected infants develop chronic HBV.',
        'Vaccine plus HBIG within 12 hours is the cornerstone of prevention.',
        'Maternal tenofovir is an adjunct, not a replacement for neonatal immunoprophylaxis.',
      ],
      trap: {
        title: 'Examiner trap - treating maternal tenofovir as sufficient neonatal prevention',
        body: 'Tenofovir lowers maternal viraemia and improves the success of immunoprophylaxis, but the newborn still needs vaccine plus HBIG within 12 hours. Maternal antiviral therapy never replaces the birth-dose immunisation.',
      },
      traps: [
        {
          title: '• Relying on maternal tenofovir instead of neonatal vaccine and HBIG.',
        },
        {
          title: '• Forgetting the postnatal close-contact route.',
        },
        {
          title: '• Missing the maternal liver follow-up after pregnancy.',
        },
      ],
    },
    {
      id: 'antenatal-screening',
      heading: 'Universal Antenatal Screening & Triple-Panel Interpretation',
      intro:
        'SMFM recommends universal antenatal screening, not risk-factor-only screening. If no previous adult triple panel is documented, perform HBsAg, anti-HBs and total anti-HBc at the initial prenatal visit; if a previous negative triple panel is documented, screen HBsAg in every pregnancy.',
      flow: [
        'Ask whether an adult triple panel has ever been documented',
        'No documented panel \u00b7 request HBsAg, anti-HBs and total anti-HBc',
        'Documented negative panel \u00b7 request HBsAg at the initial prenatal visit',
        'Unknown status at any antenatal presentation \u00b7 test now',
        'Clinical hepatitis or acute-HBV risk at admission \u00b7 test at the birthing facility',
        'Interpret the pattern of the three markers together',
        'Record HBsAg status in the notes, birth plan and neonatal handover',
      ],
      bullets: [
        'Universal: screen every pregnancy; this is not risk-factor-only screening.',
        'Vaccination History: a vaccination history does not remove the need for the pregnancy screening pathway.',
        'No Prior Panel: perform HBsAg, anti-HBs and total anti-HBc at the initial prenatal visit.',
        'Prior Negative Panel: perform HBsAg at the initial prenatal visit in every pregnancy.',
        'Unknown Status: test at any presentation for care during pregnancy.',
        'Admission Testing: test again on admission for delivery when there is clinical hepatitis or a risk factor for acute HBV, even if earlier status is unavailable.',
        'HBsAg: indicates current infection, acute or chronic, interpreted with the clinical and serologic pattern.',
        'Anti-HBs: indicates immunity from vaccination or resolved infection.',
        'Total Anti-HBc: indicates natural exposure and is not produced by vaccination.',
        'IgM Anti-HBc: supports recent or acute infection when acute hepatitis is suspected.',
        'HBeAg: often correlates with active replication and higher infectivity, but HBV DNA is the key quantitative marker for prophylaxis decisions.',
        'Anti-HBe: may appear after HBeAg seroconversion; interpret with the full profile.',
        'HBV DNA: measures replication and determines eligibility for third-trimester antiviral prophylaxis.',
        'All Negative: susceptible; offer vaccination if there is no documented complete vaccine history.',
        'HBsAg Positive, Anti-HBs Negative, Total Anti-HBc Positive: current infection; assess for maternal treatment and refer to hepatology.',
        'Anti-HBs Positive With Total Anti-HBc Positive: immunity after previous natural infection.',
        'Anti-HBs Positive With Total Anti-HBc Negative: immunity from vaccination.',
        'Isolated Total Anti-HBc Positive: indeterminate pattern; possible resolved infection with waning anti-HBs, false positive, occult infection or an HBsAg mutant; refer for interpretation.',
        'Positive HBsAg: confirm according to laboratory policy and arrange maternal evaluation without waiting until labour.',
      ],
      table: {
        head: ['HBsAg', 'Anti-HBs', 'Total Anti-HBc', 'Interpretation'],
        rows: [
          ['Negative', 'Negative', 'Negative', 'Susceptible; offer vaccination if no documented course'],
          ['Positive', 'Negative', 'Positive', 'Current infection; assess treatment and refer'],
          ['Negative', 'Positive', 'Positive', 'Immunity after previous natural infection'],
          ['Negative', 'Positive', 'Negative', 'Immunity from vaccination'],
          ['Negative', 'Negative', 'Positive', 'Indeterminate isolated anti-HBc; refer for interpretation'],
        ],
      },
      pearls: [
        'Golden Pearl: no documented triple panel means HBsAg, anti-HBs and total anti-HBc; a documented negative panel means HBsAg alone each pregnancy.',
        'Total anti-HBc marks natural exposure and is never produced by vaccination.',
        'Isolated anti-HBc is indeterminate, not automatically susceptible or immune.',
      ],
      trap: {
        title: 'Examiner trap - calling isolated anti-HBc immunity from vaccination',
        body: 'Vaccination produces anti-HBs, not anti-HBc. Isolated total anti-HBc positivity is an indeterminate pattern that may reflect resolved infection with waning anti-HBs, a false positive, occult infection or an HBsAg mutant, and needs referral.',
      },
      traps: [
        {
          title: '• Screening only women with risk factors.',
        },
        {
          title: '• Using anti-HBc to prove vaccine immunity.',
        },
        {
          title: '• Treating isolated anti-HBc as fully immune.',
        },
      ],
    },
    {
      id: 'maternal-evaluation',
      heading: 'Maternal Evaluation, Treatment Thresholds & Vaccination',
      intro:
        'After a positive HBsAg, establish whether the person needs treatment for their own health or only prophylaxis to prevent perinatal transmission. These are separate decisions with separate thresholds, and pregnancy is not a reason to withhold indicated hepatitis B vaccination in a susceptible person.',
      flow: [
        'Take baseline liver function tests, HBV DNA and HBeAg',
        'Assess for cirrhosis, portal hypertension and advanced liver disease',
        'Screen for HIV, HCV and HDV and check hepatitis A immunity',
        'Decide whether a maternal-health treatment indication exists',
        'Apply the separate perinatal prophylaxis threshold of 200,000 IU/mL',
        'Refer to hepatology or infectious diseases if not already in specialist care',
        'Offer hepatitis B vaccination to susceptible pregnant people',
      ],
      bullets: [
        'Baseline: liver function tests, HBV DNA and HBeAg unless recently assessed by the treating specialist.',
        'Purpose: establish whether treatment is for maternal health or only for prevention of perinatal transmission.',
        'Virology: quantitative HBV DNA reported in IU/mL where possible, with HBeAg and anti-HBe.',
        'Liver Tests: ALT, AST, bilirubin, albumin and platelet count; add coagulation if clinically indicated.',
        'Disease Stage: assess for cirrhosis, portal hypertension or advanced liver disease.',
        'History: prior HBV diagnosis, previous antiviral exposure and family history of cirrhosis or hepatocellular carcinoma.',
        'Co-infection: test for HIV, HCV and HDV and assess hepatitis A immunity, vaccinating if susceptible.',
        'Exposures: review alcohol, medicines and hepatotoxic exposures and counsel on household and contact testing.',
        'Referral: refer to hepatology or infectious diseases; advanced cirrhosis needs tertiary management.',
        'Maternal Treatment: given for chronic hepatitis B based on liver disease, cirrhosis, HBV DNA, ALT and HBeAg, may continue long term and is not stopped automatically after delivery.',
        'Perinatal Prophylaxis: an additional third-trimester course for HBV DNA above 200,000 IU/mL to reduce transmission, added to neonatal vaccine plus HBIG.',
        'HBeAg-Negative Threshold: HBV DNA above 2,000 IU/mL with ALT above 2 times the upper limit of normal.',
        'HBeAg-Positive Threshold: HBV DNA above 20,000 IU/mL with ALT above 2 times the upper limit of normal.',
        'Cirrhosis: cirrhosis or other significant liver disease may independently establish a treatment indication.',
        'Vaccination: offer hepatitis B vaccination during pregnancy to people without serologic evidence of immunity or a documented vaccination history (Grade 1C).',
        'No Withholding: pregnancy is not a reason to withhold indicated hepatitis B vaccination.',
        'Not Treatment: do not vaccinate as treatment for established HBsAg-positive infection.',
        'Hepatitis A: review immunity in chronic HBV and vaccinate if susceptible according to specialist advice.',
      ],
      table: {
        head: ['Decision', 'Threshold or Action'],
        rows: [
          [
            'Perinatal prophylaxis',
            'HBV DNA above 200,000 IU/mL (above 5.3 log10 IU/mL)',
          ],
          [
            'Maternal treatment, HBeAg negative',
            'HBV DNA above 2,000 IU/mL with ALT above 2 times normal',
          ],
          [
            'Maternal treatment, HBeAg positive',
            'HBV DNA above 20,000 IU/mL with ALT above 2 times normal',
          ],
          [
            'Cirrhosis or significant liver disease',
            'May independently establish a treatment indication',
          ],
          [
            'Susceptible pregnant person',
            'Offer hepatitis B vaccination; pregnancy is not a contraindication',
          ],
          [
            'Established HBsAg-positive infection',
            'Do not vaccinate as treatment; refer for HBV care',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: 200,000 IU/mL is the perinatal prophylaxis threshold, not the maternal-health treatment threshold.',
        'HBeAg-negative disease uses 2,000 IU/mL with ALT above twice normal; HBeAg-positive uses 20,000 IU/mL.',
        'Offer hepatitis B vaccination in pregnancy when the person is susceptible.',
      ],
      trap: {
        title: 'Examiner trap - using 200,000 IU/mL as the maternal treatment threshold',
        body: 'The 200,000 IU/mL cut-off decides additional third-trimester prophylaxis to prevent transmission. Chronic hepatitis B treatment for the mother\u2019s own health uses separate criteria such as 2,000 or 20,000 IU/mL with elevated ALT, or cirrhosis.',
      },
      traps: [
        {
          title: '• Confusing maternal-health and perinatal-prophylaxis thresholds.',
        },
        {
          title: '• Withholding hepatitis B vaccine because the patient is pregnant.',
        },
        {
          title: '• Vaccinating an HBsAg-positive person as treatment.',
        },
      ],
    },
    {
      id: 'tenofovir-prophylaxis',
      heading: 'Third-Trimester Tenofovir: The 200,000 IU/mL Threshold',
      intro:
        'When maternal HBV DNA exceeds 200,000 IU/mL, SMFM recommends tenofovir in the third trimester, started at 28 to 32 weeks, as an adjunct to neonatal immunoprophylaxis. Below that threshold, tenofovir is not started solely for perinatal prevention.',
      flow: [
        'Measure quantitative HBV DNA in the third trimester',
        'Above 200,000 IU/mL \u00b7 start tenofovir at 28 to 32 weeks',
        'Choose TDF 300 mg daily or TAF 25 mg daily by shared decision-making',
        'Confirm the maternal-health indication separately',
        'Check renal function and adverse effects during therapy',
        'Confirm adherence and document the antiviral plan in maternal and neonatal records',
        'Below 200,000 IU/mL \u00b7 do not start tenofovir solely for prevention',
      ],
      bullets: [
        'Threshold: tenofovir when HBV DNA exceeds 200,000 IU/mL, equivalent to above 5.3 log10 IU/mL (GRADE 1B).',
        'Timing: initiate at 28 to 32 weeks of gestation.',
        'Purpose: an adjunct to neonatal immunoprophylaxis, not a replacement.',
        'Option One: tenofovir disoproxil fumarate 300 mg orally once daily.',
        'Option Two: tenofovir alafenamide 25 mg orally once daily.',
        'Choice: shared decision-making with specialist input, considering renal and bone risk, prior treatment and likely long-term therapy.',
        'Experience: TDF has the more extensive historical pregnancy safety experience; TAF is included as an option based on accumulating data.',
        'Why It Works: maternal HBV DNA is the strongest predictor of immunoprophylaxis failure, and effectiveness falls as viral load rises.',
        'Below Threshold: do not start tenofovir solely for perinatal prophylaxis when HBV DNA is below 200,000 IU/mL.',
        'Not Excluded: a separate maternal-health indication may still warrant treatment below that threshold.',
        'Already on TAF: continue TAF through pregnancy according to SMFM.',
        'New Maternal Indication: individualise TDF or TAF with the treating specialist.',
        'Do Not Stop: ongoing chronic hepatitis B treatment is not stopped just because the neonatal prophylaxis question is settled.',
        'Monitoring: for those without a maternal indication, repeat liver function tests and HBV DNA in the early third trimester at 28 to 32 weeks.',
        'Safety: check renal function and relevant adverse effects when tenofovir is prescribed.',
        'Documentation: confirm adherence and record the antiviral plan in the maternal and neonatal records.',
      ],
      table: {
        head: ['Maternal HBV DNA', 'Management'],
        rows: [
          [
            '200,000 IU/mL or below',
            'No tenofovir solely for perinatal prevention; still give neonatal vaccine plus HBIG',
          ],
          [
            'Above 200,000 IU/mL',
            'Start TDF 300 mg daily or TAF 25 mg daily at 28 to 32 weeks',
          ],
          [
            'Already on TAF before pregnancy',
            'Continue TAF through pregnancy',
          ],
          [
            'Maternal-health indication',
            'Treat on hepatology criteria, which are separate from the 200,000 threshold',
          ],
          [
            'Monitoring without treatment',
            'Repeat liver function tests and HBV DNA at 28 to 32 weeks',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: tenofovir starts at 28 to 32 weeks when HBV DNA exceeds 200,000 IU/mL.',
        'Both TDF 300 mg daily and TAF 25 mg daily are listed options.',
        'Below 200,000 IU/mL, tenofovir is not started solely to prevent transmission.',
      ],
      trap: {
        title: 'Examiner trap - starting tenofovir in the first trimester for prevention alone',
        body: 'For perinatal prophylaxis under SMFM #69, tenofovir starts at 28 to 32 weeks, not in the first trimester. Earlier treatment belongs to a maternal-health indication decided with hepatology.',
      },
      traps: [
        {
          title: '• Starting tenofovir at booking for prevention alone.',
        },
        {
          title: '• Believing TDF is the only listed tenofovir option.',
        },
        {
          title: '• Stopping long-term treatment because delivery is near.',
        },
      ],
    },
    {
      id: 'intrapartum-management',
      heading: 'Intrapartum & Obstetric Management',
      intro:
        'Chronic hepatitis B alone is not an indication for caesarean delivery, and routine intrapartum care does not need to change. The intervention that matters most is timely neonatal immunoprophylaxis, not the mode of birth.',
      flow: [
        'Confirm that the indication for birth mode is obstetric, not hepatitis B',
        'Proceed with routine intrapartum care under standard precautions',
        'Assess whether invasive procedures are clinically necessary',
        'Do not deny indicated obstetric care because of hepatitis B',
        'Ensure vaccine and HBIG are available before delivery',
        'Record HBsAg status on the neonatal handover',
        'Give the newborn vaccine and HBIG within 12 hours',
      ],
      bullets: [
        'Mode of Birth: chronic HBV infection alone is not an indication for caesarean delivery.',
        'No Transmission Caesarean: SMFM does not recommend caesarean solely to reduce perinatal HBV transmission (GRADE 1B).',
        'Decision Basis: mode of birth follows ordinary obstetric indications and shared decision-making.',
        'Routine Care: routine intrapartum care does not need to be altered solely because of chronic HBV infection (GRADE 1B).',
        'Isolation: no routine special isolation or separate labour pathway is required beyond standard infection-prevention precautions.',
        'Key Action: timely neonatal immunoprophylaxis matters most.',
        'Invasive Procedures: fetal scalp electrodes, episiotomy and operative vaginal birth may theoretically increase fetal exposure to maternal blood and secretions.',
        'Individualise: assess whether such procedures are clinically necessary, but do not deny indicated obstetric care solely because of HBV.',
        'Prenatal Diagnosis: for chorionic villus sampling, amniocentesis or other invasive procedures, discuss transmission risk and the value of the procedure, particularly with a high viral load.',
        'Shared Decision: SMFM recommends informed shared decision-making rather than an absolute prohibition (GRADE 2C).',
        'Preparedness: arrange vaccine and HBIG before delivery and treat the birth dose as time-critical.',
      ],
      table: {
        head: ['Intrapartum Issue', 'SMFM Position'],
        rows: [
          [
            'Caesarean for HBV alone',
            'Not recommended; mode follows obstetric indications',
          ],
          [
            'Routine intrapartum care',
            'No alteration needed solely for chronic HBV',
          ],
          [
            'Isolation',
            'Standard infection-prevention precautions only',
          ],
          [
            'Fetal scalp electrode, episiotomy, operative birth',
            'Assess clinical necessity; do not deny indicated care for HBV alone',
          ],
          [
            'Amniocentesis or CVS',
            'Discuss risk and value; shared decision-making, not absolute prohibition',
          ],
          [
            'Most important action',
            'Neonatal vaccine plus HBIG within 12 hours',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: do not perform caesarean solely to prevent hepatitis B transmission.',
        'Routine intrapartum care does not change because of chronic HBV.',
        'The birth-room priority is vaccine plus HBIG within 12 hours.',
      ],
      trap: {
        title: 'Examiner trap - offering caesarean because the mother is HBsAg positive',
        body: 'SMFM does not recommend caesarean delivery solely to reduce perinatal HBV transmission. Mode of birth is decided by ordinary obstetric indications; prevention depends on neonatal immunoprophylaxis.',
      },
      traps: [
        {
          title: '• Recommending caesarean for a high HBV DNA alone.',
        },
        {
          title: '• Placing the woman in isolation during labour.',
        },
        {
          title: '• Refusing an indicated operative vaginal birth because of HBV.',
        },
      ],
    },
    {
      id: 'neonatal-immunoprophylaxis',
      heading: 'Neonatal Immunoprophylaxis & Post-Vaccination Serology',
      intro:
        'Every newborn of an HBsAg-positive mother, or a mother whose status is unknown or undocumented, must receive hepatitis B vaccine and HBIG within 12 hours of birth. The birth dose is only the first step; the series must be completed and the response verified.',
      flow: [
        'Check maternal HBsAg status and the neonatal handover',
        'Prepare vaccine and HBIG before delivery',
        'Give both within 12 hours of birth at separate sites',
        'Record time, product, dose, batch and site',
        'Complete the age-appropriate vaccine series',
        'Test HBsAg and anti-HBs at 9 to 12 months',
        'Recall and revaccinate if the response is inadequate',
      ],
      bullets: [
        'Both Agents: every newborn of an HBsAg-positive mother needs hepatitis B vaccine and HBIG (GRADE 1B).',
        'Unknown Status: the same vaccine plus HBIG pathway applies when maternal HBsAg is unknown or undocumented, while testing is urgently completed.',
        'Timing: give both within 12 hours of birth.',
        'Regardless of Tenofovir: maternal antiviral therapy does not remove the need for vaccine or HBIG.',
        'Time-Critical: treat this as a time-critical neonatal intervention and arrange both before delivery.',
        'Separate Sites: administer at separate injection sites or limbs according to the local neonatal immunisation protocol.',
        'Documentation: record the exact time, product, dose, batch and injection site in the newborn record.',
        'No Waiting: if maternal status is unknown at delivery, do not delay prophylaxis while waiting for a late result.',
        'Series: ensure the infant receives the remaining age-appropriate doses in the national schedule.',
        'Recall: missed or delayed doses reduce protection and must be actively recalled.',
        'PVST Timing: CDC recommends testing after series completion at 9 to 12 months, or 1 to 2 months after the final dose if the series is delayed.',
        'PVST Markers: use only HBsAg to identify infection and anti-HBs to assess protective response.',
        'No Anti-HBc: do not use anti-HBc for routine infant testing because passively transferred maternal antibody may persist up to 24 months.',
        'Interpretation: an anti-HBs level indicating protection confirms success; a positive HBsAg requires specialist assessment.',
      ],
      table: {
        head: ['Maternal Status', 'Newborn Action'],
        rows: [
          [
            'HBsAg positive',
            'Hepatitis B vaccine plus HBIG within 12 hours',
          ],
          [
            'HBsAg unknown or undocumented',
            'Vaccine plus HBIG within 12 hours while urgently clarifying status',
          ],
          [
            'Maternal tenofovir given',
            'Still requires vaccine plus HBIG',
          ],
          [
            'Administration',
            'Separate injection sites; record time, product, dose, batch and site',
          ],
          [
            'After the birth dose',
            'Complete the vaccine series',
          ],
          [
            'Post-vaccination serology',
            'HBsAg and anti-HBs at 9 to 12 months; never anti-HBc routinely',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: vaccine plus HBIG within 12 hours for every newborn of an HBsAg-positive or unknown-status mother.',
        'Post-vaccination serology uses only HBsAg and anti-HBs at 9 to 12 months.',
        'Do not use anti-HBc for routine infant testing.',
      ],
      trap: {
        title: 'Examiner trap - including anti-HBc in infant post-vaccination serology',
        body: 'Passively transferred maternal anti-HBc can persist for up to 24 months and confuses interpretation. Routine infant PVST uses only HBsAg and anti-HBs.',
      },
      traps: [
        {
          title: '• Giving vaccine but omitting HBIG.',
        },
        {
          title: '• Waiting for an unknown maternal result before protecting the newborn.',
        },
        {
          title: '• Checking anti-HBc in the infant.',
        },
      ],
    },
    {
      id: 'feeding-postpartum',
      heading: 'Breastfeeding, Household Contacts & Postpartum Care',
      intro:
        'Breastfeeding is not contraindicated once the infant has received immunoprophylaxis at birth. Postpartum care focuses on deciding whether tenofovir continues for maternal health or can be stopped, and on monitoring for withdrawal flares.',
      flow: [
        'Confirm the infant received vaccine and HBIG',
        'Support breastfeeding, with precautions for bleeding nipples',
        'Reassess why tenofovir was started',
        'Maternal indication \u00b7 continue under hepatology guidance',
        'Prevention only \u00b7 plan discontinuation with the specialist',
        'Monitor ALT and HBV DNA every 1 to 3 months for up to 6 months',
        'Arrange long-term HBV care and vaccinate susceptible contacts',
      ],
      bullets: [
        'Breastfeeding: not contraindicated in HBV infection when the infant has received immunoprophylaxis at birth (GRADE 1C).',
        'Evidence: no clear increase in infection among breastfed versus formula-fed infants who received appropriate immunoprophylaxis.',
        'Bleeding Nipples: discard milk from the affected breast while continuing to feed or express from the unaffected breast until the nipple heals.',
        'Tenofovir and Feeding: treatment or third-trimester prophylaxis does not automatically require avoiding breastfeeding.',
        'Drug Choice: discuss breastfeeding and drug choice with hepatology and current lactation guidance; AASLD considers TDF or TAF compatible with breastfeeding.',
        'Household Contacts: assess household and sexual contacts for infection and immunity and vaccinate susceptible contacts.',
        'Blood Exposure: counsel against sharing razors, toothbrushes or other blood-contaminated items.',
        'No Isolation: ordinary social contact and shared meals are not reasons for isolation.',
        'Reassess at Delivery: establish why tenofovir was being taken.',
        'Maternal Indication: continue treatment according to hepatology advice when started for active disease, cirrhosis or significant liver disease.',
        'Prevention Only: discontinuation after delivery may be appropriate when there is no independent maternal indication, but it must be planned with the specialist.',
        'Flare Risk: stopping antiviral treatment and the postpartum immune transition can cause hepatitis flares during the first 6 months.',
        'Counselling: explain follow-up and warning symptoms and document a plan with hepatology or infectious diseases.',
        'Monitoring: AASLD suggests HBV DNA and ALT every 1 to 3 months for up to 6 months after discontinuation.',
        'Prompt Review: reassess promptly if ALT rises significantly, symptoms develop or HBV DNA rebounds.',
        'Long-Term Care: all HBsAg-positive patients need ongoing HBV care, fibrosis assessment, hepatocellular carcinoma surveillance when indicated and preconception counselling.',
      ],
      table: {
        head: ['Topic', 'Postpartum Position'],
        rows: [
          [
            'Breastfeeding',
            'Not contraindicated after neonatal immunoprophylaxis',
          ],
          [
            'Bleeding nipple',
            'Discard milk from the affected breast until healed; continue the other side',
          ],
          [
            'Tenofovir and feeding',
            'TDF or TAF considered compatible with breastfeeding',
          ],
          [
            'Maternal-health treatment',
            'Continue under hepatology guidance',
          ],
          [
            'Prevention-only tenofovir',
            'May stop after delivery with a specialist plan',
          ],
          [
            'After stopping',
            'HBV DNA and ALT every 1 to 3 months for up to 6 months',
          ],
          [
            'Household contacts',
            'Screen and vaccinate susceptible contacts',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: breastfeeding is allowed once the infant has received vaccine and HBIG.',
        'With bleeding nipples, discard milk from the affected breast until it heals.',
        'Stopping tenofovir can trigger a flare; monitor ALT and HBV DNA every 1 to 3 months for up to 6 months.',
      ],
      trap: {
        title: 'Examiner trap - stopping long-term tenofovir automatically at delivery',
        body: 'Only prevention-only tenofovir may be stopped after delivery, and even then with a specialist plan. Treatment given for maternal health must continue, because stopping can precipitate a hepatitis flare.',
      },
      traps: [
        {
          title: '• Advising against breastfeeding after immunoprophylaxis.',
        },
        {
          title: '• Stopping maternal-health treatment at delivery.',
        },
        {
          title: '• Omitting post-discontinuation liver monitoring.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'Hepatitis B is transmitted by blood and body fluids, including vertically.',
        'Without immunoprophylaxis, up to 90 percent of perinatally infected infants develop chronic HBV.',
        'Screening is universal in every pregnancy, not risk-factor based.',
        'No documented triple panel means HBsAg, anti-HBs and total anti-HBc.',
        'A documented negative triple panel means HBsAg alone each pregnancy.',
        'Total anti-HBc indicates natural exposure, not vaccination.',
        'Isolated anti-HBc is indeterminate and needs referral.',
        'The perinatal prophylaxis threshold is HBV DNA above 200,000 IU/mL.',
        'Start tenofovir at 28 to 32 weeks for perinatal prophylaxis.',
        'Both TDF 300 mg daily and TAF 25 mg daily are listed options.',
        'Below 200,000 IU/mL, no tenofovir solely for perinatal prevention.',
        'Maternal-health treatment thresholds are separate: 2,000 or 20,000 IU/mL with raised ALT.',
        'Hepatitis B vaccination is recommended in pregnancy when the person is susceptible.',
        'HBV infection alone is not an indication for caesarean.',
        'Routine intrapartum care does not change because of chronic HBV.',
        'Amniocentesis and CVS need shared decision-making, not absolute prohibition.',
        'Every exposed newborn needs vaccine plus HBIG within 12 hours.',
        'Unknown maternal status still means vaccine plus HBIG within 12 hours.',
        'Maternal tenofovir never replaces neonatal immunoprophylaxis.',
        'Complete the infant vaccine series and actively recall missed doses.',
        'PVST uses HBsAg and anti-HBs at 9 to 12 months.',
        'Never use anti-HBc for routine infant PVST.',
        'Breastfeeding is allowed after immunoprophylaxis.',
        'Prevention-only tenofovir may stop after delivery with specialist planning.',
        'Monitor ALT and HBV DNA every 1 to 3 months for up to 6 months after stopping.',
      ],
      traps: [
        {
          title: '• Screening only high-risk women.',
        },
        {
          title: '• Treating isolated anti-HBc as vaccine immunity.',
        },
        {
          title: '• Using 200,000 IU/mL as the maternal treatment threshold.',
        },
        {
          title: '• Starting tenofovir at booking for prevention alone.',
        },
        {
          title: '• Believing TDF is the only tenofovir option.',
        },
        {
          title: '• Offering caesarean because of HBV alone.',
        },
        {
          title: '• Placing the woman in isolation in labour.',
        },
        {
          title: '• Giving vaccine but omitting HBIG.',
        },
        {
          title: '• Waiting for an unknown maternal result before protecting the newborn.',
        },
        {
          title: '• Checking anti-HBc in the infant.',
        },
        {
          title: '• Advising against breastfeeding after immunoprophylaxis.',
        },
        {
          title: '• Stopping maternal-health tenofovir automatically at delivery.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm20-f1',
      front: 'What is the risk of chronic infection after perinatal HBV exposure without immunoprophylaxis?',
      back: 'Up to 90 percent of perinatally infected infants may develop chronic HBV infection. Vaccine plus HBIG within 12 hours is the cornerstone of prevention.',
    },
    {
      id: 'm20-f2',
      front: 'Which screening tests are done when no prior adult triple panel is documented?',
      back: 'HBsAg, anti-HBs and total anti-HBc at the initial prenatal visit. If a prior negative triple panel is documented, screen HBsAg in every pregnancy.',
    },
    {
      id: 'm20-f3',
      front: 'What does total anti-HBc indicate?',
      back: 'Natural exposure to HBV. It is not produced by vaccination, so isolated anti-HBc positivity is indeterminate and needs referral.',
    },
    {
      id: 'm20-f4',
      front: 'What is the HBV DNA threshold for third-trimester tenofovir prophylaxis?',
      back: 'Above 200,000 IU/mL, equivalent to above 5.3 log10 IU/mL. Below this level tenofovir is not started solely for perinatal prevention.',
    },
    {
      id: 'm20-f5',
      front: 'When is tenofovir started for perinatal prophylaxis and at what doses?',
      back: 'At 28 to 32 weeks. TDF 300 mg orally once daily or TAF 25 mg orally once daily, chosen by shared decision-making with specialist input.',
    },
    {
      id: 'm20-f6',
      front: 'What are the maternal-health treatment thresholds in chronic HBV without cirrhosis?',
      back: 'HBeAg negative: HBV DNA above 2,000 IU/mL with ALT above 2 times normal. HBeAg positive: above 20,000 IU/mL with ALT above 2 times normal.',
    },
    {
      id: 'm20-f7',
      front: 'Does maternal tenofovir replace neonatal immunoprophylaxis?',
      back: 'No. Every exposed newborn still needs hepatitis B vaccine plus HBIG within 12 hours, regardless of maternal antiviral therapy.',
    },
    {
      id: 'm20-f8',
      front: 'What is the neonatal immunoprophylaxis for an HBsAg-positive or unknown-status mother?',
      back: 'Hepatitis B vaccine and HBIG, both within 12 hours of birth, at separate injection sites, with time, product, dose, batch and site recorded.',
    },
    {
      id: 'm20-f9',
      front: 'Is caesarean indicated to prevent perinatal HBV transmission?',
      back: 'No. SMFM does not recommend caesarean solely to reduce perinatal HBV transmission; mode of birth follows ordinary obstetric indications.',
    },
    {
      id: 'm20-f10',
      front: 'Does chronic HBV change routine intrapartum care?',
      back: 'No. Routine intrapartum care does not need alteration beyond standard infection-prevention precautions; no special isolation is required.',
    },
    {
      id: 'm20-f11',
      front: 'How is post-vaccination serology performed in the infant?',
      back: 'At 9 to 12 months, using only HBsAg and anti-HBs. Anti-HBc is not used because maternal antibody may persist up to 24 months.',
    },
    {
      id: 'm20-f12',
      front: 'Is breastfeeding allowed in a mother with hepatitis B?',
      back: 'Yes, once the infant has received immunoprophylaxis at birth. With bleeding nipples, discard milk from the affected breast until it heals.',
    },
    {
      id: 'm20-f13',
      front: 'Which tenofovir formulations are compatible with breastfeeding?',
      back: 'Both TDF and TAF are considered compatible with breastfeeding under updated AASLD guidance; discuss drug choice with hepatology and lactation guidance.',
    },
    {
      id: 'm20-f14',
      front: 'When can tenofovir be stopped after delivery?',
      back: 'Only when it was started solely for perinatal prophylaxis and there is no maternal-health indication, and only with a specialist plan.',
    },
    {
      id: 'm20-f15',
      front: 'How is the mother monitored after stopping tenofovir?',
      back: 'HBV DNA and ALT every 1 to 3 months for up to 6 months to detect withdrawal flares, with prompt review if ALT rises or symptoms develop.',
    },
  ],

  mcqs: [
    {
      id: 'm20-q1',
      stem: 'A pregnant woman has no documented adult triple-panel test. What should be requested at the initial prenatal visit?',
      options: [
        'HBsAg alone',
        'HBsAg, anti-HBs and total anti-HBc',
        'IgM anti-HBc and HBV DNA only',
        'Anti-HBs and HBeAg only',
      ],
      answerIndex: 1,
      explanation:
        'When no prior adult triple panel is documented, SMFM recommends HBsAg, anti-HBs and total anti-HBc at the initial prenatal visit. If a prior negative panel is documented, HBsAg alone is screened each pregnancy.',
    },
    {
      id: 'm20-q2',
      stem: 'A woman has a documented negative triple panel from 3 years ago. What screening is recommended in this pregnancy?',
      options: [
        'No further testing is needed',
        'HBsAg, anti-HBs and total anti-HBc again',
        'HBsAg at the initial prenatal visit',
        'HBV DNA at 28 weeks only',
      ],
      answerIndex: 2,
      explanation:
        'With a prior documented negative triple panel, universal HBsAg screening is performed at the initial prenatal visit in every pregnancy.',
    },
    {
      id: 'm20-q3',
      stem: 'A woman is HBsAg positive with HBV DNA of 800,000 IU/mL and no independent maternal treatment indication. What additional therapy is recommended?',
      options: [
        'Tenofovir from 28 to 32 weeks',
        'Tenofovir from the first trimester',
        'Interferon alfa in the third trimester',
        'No antiviral therapy; neonatal prophylaxis alone',
      ],
      answerIndex: 0,
      explanation:
        'With HBV DNA above 200,000 IU/mL, SMFM recommends tenofovir in the third trimester, initiated at 28 to 32 weeks, as an adjunct to neonatal vaccine plus HBIG.',
    },
    {
      id: 'm20-q4',
      stem: 'Which tenofovir regimens are listed by SMFM #69 for perinatal prophylaxis?',
      options: [
        'TDF 300 mg weekly only',
        'TAF 25 mg weekly only',
        'TDF 300 mg twice daily or TAF 50 mg daily',
        'TDF 300 mg once daily or TAF 25 mg once daily',
      ],
      answerIndex: 3,
      explanation:
        'SMFM lists tenofovir disoproxil fumarate 300 mg orally once daily or tenofovir alafenamide 25 mg orally once daily, chosen by shared decision-making and specialist input.',
    },
    {
      id: 'm20-q5',
      stem: 'A woman is HBsAg positive with HBV DNA of 80,000 IU/mL and no maternal-health treatment indication. Should tenofovir be started solely to prevent perinatal transmission?',
      options: [
        'Yes, at any detectable viral load',
        'Yes, but only from 36 weeks',
        'No; neonatal immunoprophylaxis is highly effective at this level',
        'Yes, with interferon added',
      ],
      answerIndex: 2,
      explanation:
        'Below 200,000 IU/mL, tenofovir should not be started solely for perinatal prophylaxis because neonatal immunoprophylaxis is highly effective and antiviral exposure has potential adverse effects.',
    },
    {
      id: 'm20-q6',
      stem: 'A baby is born to an HBsAg-positive mother who took tenofovir from 28 weeks. What does the newborn require?',
      options: [
        'Hepatitis B vaccine only',
        'Hepatitis B vaccine and HBIG within 12 hours',
        'HBIG only, because maternal antiviral cover is adequate',
        'No prophylaxis; test at 9 months instead',
      ],
      answerIndex: 1,
      explanation:
        'Maternal antiviral therapy does not replace neonatal immunoprophylaxis. The infant needs both hepatitis B vaccine and HBIG within 12 hours of birth.',
    },
    {
      id: 'm20-q7',
      stem: 'A woman has chronic hepatitis B, no obstetric contraindication to vaginal birth and has received appropriate antenatal care. Should caesarean be performed solely to prevent HBV transmission?',
      options: [
        'Yes, at 38 weeks',
        'Yes, if HBV DNA is above 200,000 IU/mL',
        'Only if membranes rupture before labour',
        'No; HBV alone is not an indication for caesarean',
      ],
      answerIndex: 3,
      explanation:
        'SMFM does not recommend caesarean delivery solely to reduce perinatal HBV transmission. Mode of birth follows ordinary obstetric indications.',
    },
    {
      id: 'm20-q8',
      stem: 'How should post-vaccination serology be performed in an infant born to an HBsAg-positive mother?',
      options: [
        'HBsAg and anti-HBs at 9 to 12 months',
        'HBsAg and anti-HBc at 6 months',
        'Anti-HBc and HBV DNA at 12 months',
        'Anti-HBs alone at 4 weeks',
      ],
      answerIndex: 0,
      explanation:
        'CDC recommends HBsAg and anti-HBs at 9 to 12 months, or 1 to 2 months after the final dose if the series is delayed. Anti-HBc is not used because maternal antibody may persist up to 24 months.',
    },
    {
      id: 'm20-q9',
      stem: 'An HBsAg-positive mother asks whether she can breastfeed after her baby receives vaccine and HBIG. What is the recommendation?',
      options: [
        'Breastfeeding is contraindicated until HBV DNA is undetectable',
        'Breastfeeding is not contraindicated once the infant has received immunoprophylaxis',
        'Breastfeeding is allowed only if she is on tenofovir',
        'Breastfeeding is allowed only after 6 months',
      ],
      answerIndex: 1,
      explanation:
        'SMFM states that breastfeeding is not contraindicated in HBV infection when the infant has received immunoprophylaxis at birth. Bleeding nipples require discarding milk from the affected breast until healed.',
    },
    {
      id: 'm20-q10',
      stem: 'A woman received tenofovir only for perinatal prophylaxis and has no separate maternal treatment indication. What must be arranged if therapy is stopped?',
      options: [
        'No follow-up is needed once the baby is immunised',
        'Immediate re-treatment for 12 months',
        'A specialist plan with ALT and HBV DNA every 1 to 3 months for up to 6 months',
        'Liver biopsy before any monitoring',
      ],
      answerIndex: 2,
      explanation:
        'Discontinuation must be planned with the specialist. AASLD guidance suggests monitoring HBV DNA and ALT every 1 to 3 months for up to 6 months to detect withdrawal flares.',
    },
  ],
};
