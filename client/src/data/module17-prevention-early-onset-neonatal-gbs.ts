import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 17 - Prevention of Early-Onset Neonatal GBS Disease (RCOG GTG 36)
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 47-60) with RCOG
 * Green-top Guideline No. 36 (2017) and ACOG Committee Opinion No. 797.
 *
 * Covers:
 * - GBS colonisation versus early-onset neonatal disease
 * - The UK risk-factor approach versus the US universal screening approach
 * - Correct lower-vaginal and anorectal specimen collection
 * - Risk factors and indications for intrapartum antibiotic prophylaxis
 * - RCOG and ACOG regimens kept deliberately separate
 * - Term PROM, PPROM, preterm labour and prelabour caesarean
 * - Newborn warning signs and postnatal observation principles
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const NEONATAL_GBS_MODULE: StudioModule = {
  id: 'pg-mod-17-prevention-early-onset-neonatal-gbs',
  track: 'NEET_PG',
  title: 'Prevention of Early-Onset Neonatal GBS Disease: RCOG GTG 36',
  shortTitle: 'Early-Onset Neonatal GBS',
  summary:
    'Complete PG clinical revision module on prevention of early-onset neonatal group B streptococcal disease following RCOG Green-top Guideline No. 36 (2017) with ACOG Committee Opinion No. 797 for comparison. Features GBS colonisation versus EOGBS before 7 days, the UK risk-factor strategy versus universal 36 0/7 to 37 6/7 screening, correct lower-vaginal plus anorectal swab collection in Amies or Stuart medium, indications for intrapartum antibiotic prophylaxis, RCOG benzylpenicillin 3 g then 1.5 g four-hourly versus ACOG penicillin G dosing, term PROM, PPROM, preterm labour, prelabour caesarean, newborn warning signs, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Risk-based IAP, the lower-vagina plus rectal swab and UK doses.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 36',
    'Streptococcus agalactiae',
    'EOGBS Under 7 Days',
    'Risk-Based IAP',
    'ACOG 36-37 Weeks',
    'Lower Vagina + Rectum',
    'Amies Transport',
    'Benzylpenicillin 3 g',
    'GBS Bacteriuria',
    'Preterm Labour',
    'Intrapartum Fever',
    'Neonatal Observation',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 47-60) • RCOG Green-top Guideline No. 36, 2017 • ACOG Committee Opinion No. 797',
  updatedAtISO: '2026-11-14T12:30:00.000Z',
  notes: [
    {
      id: 'gbs-framework',
      heading: 'GBS Colonisation & Early-Onset Neonatal Disease',
      intro:
        'Group B Streptococcus is Streptococcus agalactiae, a common gastrointestinal and lower genital tract coloniser. Colonisation is not the same as maternal infection, and most colonised mothers deliver unaffected babies.',
      flow: [
        'Recognise GBS as a commensal of the bowel and lower genital tract',
        'Distinguish asymptomatic carriage from maternal sepsis',
        'Understand vertical transmission during labour or after membrane rupture',
        'Define early-onset disease as illness before 7 completed days',
        'Recognise sepsis, pneumonia and meningitis as the main presentations',
        'Explain that intrapartum prophylaxis reduces transmission but does not eradicate carriage',
      ],
      bullets: [
        'Organism: Streptococcus agalactiae, a Gram-positive beta-haemolytic coccus.',
        'Carriage: approximately 20 to 40 percent of adults may carry GBS in bowel flora.',
        'Colonisation Pattern: carriage may be intermittent, transient or persistent.',
        'Vertical Transmission: generally occurs during labour or after rupture of membranes.',
        'Early-Onset GBS Disease: neonatal disease presenting during the first 6 days of life, that is before 7 completed days.',
        'Presentations: sepsis, pneumonia and meningitis.',
        'Late-Onset Disease: occurs from 7 days onwards and is not the focus of this module, although a previous affected baby matters for future risk assessment.',
        'Attack Rate: without intrapartum prophylaxis, approximately 1 to 2 percent of infants born to colonised mothers may develop early-onset disease.',
        'Most Babies Are Well: maternal carriage is common but most colonised mothers have an unaffected baby.',
        'Prophylaxis Aim: reduce vertical transmission and early-onset neonatal disease, not permanently eradicate maternal carriage.',
        'Bacteriuria: GBS in urine indicates urinary tract involvement or significant genital colonisation and has separate management implications.',
        'No Confusion: a positive swab or bacteriuria is not the same as established maternal sepsis or proven neonatal infection.',
      ],
      table: {
        head: ['Concept', 'Clinical Meaning'],
        rows: [
          [
            'Organism',
            'Streptococcus agalactiae, a Gram-positive beta-haemolytic coccus',
          ],
          [
            'Carriage',
            'Bowel and lower genital tract colonisation in approximately 20 to 40 percent of adults; may be intermittent',
          ],
          [
            'Early-onset disease',
            'Neonatal sepsis, pneumonia or meningitis before 7 completed days',
          ],
          [
            'Late-onset disease',
            'Disease from 7 days onwards; not prevented by intrapartum prophylaxis',
          ],
          [
            'Transmission',
            'Vertical transmission during labour or after membrane rupture',
          ],
          [
            'Attack rate without IAP',
            'Approximately 1 to 2 percent of infants of colonised mothers',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: GBS is Streptococcus agalactiae, and colonisation is not maternal infection.',
        'Early-onset GBS disease presents before 7 completed days.',
        'Intrapartum prophylaxis reduces vertical transmission but does not eradicate carriage.',
      ],
      trap: {
        title: 'Examiner trap - treating a positive GBS swab as maternal sepsis',
        body: 'A positive vaginal or rectal swab identifies carriage. It does not mean the woman is septic, and it does not mean the baby will be infected. Management is intrapartum prophylaxis when indicated.',
      },
      traps: [
        {
          title: '• Calling GBS carriage a maternal infection.',
        },
        {
          title: '• Defining early-onset disease as the first 7 completed days rather than before day 7.',
        },
        {
          title: '• Forgetting that late-onset disease is not prevented by IAP.',
        },
      ],
    },
    {
      id: 'screening-strategies',
      heading: 'RCOG Risk-Based vs ACOG Universal Screening',
      intro:
        'The United Kingdom and the United States use different strategies. RCOG does not recommend universal antenatal bacteriological screening and instead offers intrapartum prophylaxis to women with defined risk factors. ACOG recommends universal vaginal-rectal culture at 36 0/7 to 37 6/7 weeks.',
      flow: [
        'Identify which national guideline governs the pregnancy',
        'Under RCOG · assess clinical risk factors at labour and offer IAP when indicated',
        'Under RCOG · offer selective late-pregnancy culture only after previous carriage',
        'Under ACOG · perform universal vaginal-rectal culture at 36 0/7 to 37 6/7 weeks',
        'Under ACOG · give IAP for a positive culture or defined risk factors if status is unknown',
        'Do not mix the two policies into a hybrid protocol',
      ],
      bullets: [
        'RCOG Position: the 2017 guideline does not recommend universal antenatal bacteriological screening of every pregnant woman.',
        'RCOG Strategy: identify clinical risk factors and offer intrapartum antibiotic prophylaxis when indicated.',
        'UK Rationale: many women carry GBS but most babies are born safely.',
        'Predictive Limitation: a late-pregnancy culture does not accurately predict which infant will develop disease.',
        'Colonisation Change: 17 to 25 percent of women with a positive 35 to 37 week swab were negative at delivery, while 5 to 7 percent with a negative swab were positive at delivery.',
        'Preterm Gap: many affected infants are born preterm, before routine late-pregnancy screening would occur.',
        'Antibiotic Exposure: screening all women and treating every carrier would expose many mothers and babies to antibiotics without individual benefit.',
        'Previous Carriage: if GBS was detected in a previous pregnancy, the chance of carriage recurring is approximately 50 percent.',
        'Options After Previous Carriage: intrapartum prophylaxis in labour, or late-pregnancy bacteriological testing with prophylaxis if positive.',
        'Timing: test at 35 to 37 weeks, or approximately 3 to 5 weeks before anticipated delivery; earlier testing may be appropriate if preterm birth is expected.',
        'Twin Caveat: the RCOG text gives 32 to 34 weeks for some twin pregnancies when delivery is anticipated earlier.',
        'Declined Testing: if testing is declined, discuss offering intrapartum prophylaxis in labour.',
        'Previous Affected Baby: offer intrapartum prophylaxis in a subsequent pregnancy regardless of current colonisation testing.',
        'ACOG Position: universal vaginal-rectal culture screening at 36 0/7 to 37 6/7 weeks.',
        'ACOG Exceptions: screening may be unnecessary when prophylaxis is already indicated by GBS bacteriuria in the current pregnancy or a previous infant with early-onset disease.',
        'ACOG Unknown Status: if the culture result is unknown at labour, intrapartum risk factors guide prophylaxis.',
      ],
      table: {
        head: ['Domain', 'RCOG / UK GTG 36', 'ACOG / US Opinion 797'],
        rows: [
          [
            'Universal antenatal screening',
            'Not recommended',
            'Recommended for all pregnant women',
          ],
          [
            'Strategy',
            'Risk-factor-based intrapartum prophylaxis',
            'Universal culture-based prophylaxis plus risk factors when status is unknown',
          ],
          [
            'Culture timing',
            'Selective late-pregnancy culture at 35 to 37 weeks after previous carriage',
            'Routine vaginal-rectal culture at 36 0/7 to 37 6/7 weeks',
          ],
          [
            'Positive culture',
            'Offer IAP in labour',
            'Offer IAP in labour',
          ],
          [
            'Unknown status at labour',
            'Assess clinical risk factors',
            'Assess defined intrapartum risk factors',
          ],
          [
            'Prelabour caesarean with intact membranes',
            'No GBS-specific IAP; routine surgical prophylaxis still needed',
            'No GBS-specific IAP; routine surgical prophylaxis still needed',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: RCOG uses risk-based prophylaxis; ACOG uses universal 36 to 37 week culture screening.',
        'Recurrence of carriage after a previous positive pregnancy is approximately 50 percent.',
        'Do not combine the two policies into a hybrid protocol.',
      ],
      trap: {
        title: 'Examiner trap - applying ACOG universal screening as if it were RCOG',
        body: 'Under RCOG GTG 36, universal antenatal bacteriological screening is not recommended. Screening policy, laboratory pathway and antibiotic regimen should follow the governing national guideline and local maternity policy.',
      },
      traps: [
        {
          title: '• Quoting universal screening as the RCOG recommendation.',
        },
        {
          title: '• Using a previous pregnancy swab as a current-pregnancy result.',
        },
        {
          title: '• Mixing UK and US antibiotic doses in one protocol.',
        },
      ],
    },
    {
      id: 'specimen-collection',
      heading: 'Collecting the GBS Swab: Lower Vagina + Anorectum',
      intro:
        'When a culture is indicated, the specimen must come from the lower vagina and the anorectum, not from the cervix or a high vaginal swab. Rectal carriage may be present even when vaginal carriage is not detected.',
      flow: [
        'Confirm that a culture is indicated under the chosen pathway',
        'Sample the lower vagina at the introitus',
        'Sample the anorectum or rectum',
        'Use one swab or two according to the laboratory protocol',
        'Place the swab in Amies or Stuart non-nutrient transport medium',
        'Label the request clearly as a GBS culture with relevant history',
        'Send promptly and refrigerate if processing is delayed',
      ],
      bullets: [
        'Site One: lower vagina, at the vaginal introitus or lower vaginal tract.',
        'Site Two: anorectum or rectum.',
        'Not Recommended: a cervical or high-vaginal swab is not a substitute for the lower-vaginal plus anorectal sample.',
        'Swab Number: one swab or two separate swabs may be used according to the laboratory collection protocol.',
        'Why Rectal Sampling: rectal carriage may be present even when vaginal carriage is not detected.',
        'Transport Medium: use a non-nutrient medium such as Amies or Stuart medium.',
        'Request Label: label clearly as a GBS culture or screen and include relevant history, particularly penicillin allergy.',
        'Transport Timing: send the sample for processing as soon as possible.',
        'Delayed Processing: refrigerate according to the laboratory specimen-handling policy.',
        'Enrichment: selective enrichment culture is important for recovering GBS at low organism concentration.',
        'No Antenatal Eradication: if GBS is detected from a vaginal or rectal swab during pregnancy, routine antenatal eradication treatment is not recommended.',
        'Recurrence: carriage may recur after treatment; record the result and offer intrapartum prophylaxis when labour begins.',
        'Susceptibility: penicillin allergy history matters if the laboratory needs to perform susceptibility testing.',
      ],
      table: {
        head: ['Step', 'Correct Practice'],
        rows: [
          [
            'Vaginal site',
            'Lower vagina or vaginal introitus, not cervix or high vagina',
          ],
          [
            'Rectal site',
            'Anorectum or rectum; rectal carriage may occur without vaginal carriage',
          ],
          [
            'Swab number',
            'One or two swabs according to the laboratory protocol',
          ],
          [
            'Transport medium',
            'Amies or Stuart non-nutrient medium',
          ],
          [
            'Request',
            'Label as GBS culture; include penicillin allergy and relevant history',
          ],
          [
            'Handling',
            'Send promptly; refrigerate if processing is delayed, per laboratory policy',
          ],
          [
            'Antenatal treatment',
            'Do not routinely eradicate asymptomatic vaginal or rectal carriage',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: sample the lower vagina and anorectum, not the cervix or high vagina.',
        'Use Amies or Stuart non-nutrient transport medium.',
        'Do not routinely treat asymptomatic vaginal or rectal carriage antenatally.',
      ],
      trap: {
        title: 'Examiner trap - sending a high vaginal swab for GBS',
        body: 'A cervical or high-vaginal sample is not an acceptable substitute. The recommended specimen is a lower-vaginal plus anorectal swab, because rectal carriage can be present when vaginal carriage is not detected.',
      },
      traps: [
        {
          title: '• Taking only a vaginal swab and omitting the rectum.',
        },
        {
          title: '• Using a cervical swab as the GBS screen.',
        },
        {
          title: '• Treating asymptomatic carriage with antenatal oral antibiotics.',
        },
      ],
    },
    {
      id: 'risk-factors-iap',
      heading: 'Risk Factors & Indications for Intrapartum Prophylaxis',
      intro:
        'Under the RCOG pathway, intrapartum antibiotic prophylaxis is offered for a previous affected baby, current GBS carriage or bacteriuria, confirmed preterm labour, intrapartum fever or suspected intra-amniotic infection, and prolonged rupture of membranes.',
      flow: [
        'Ask about a previous baby with GBS disease',
        'Check for current-pregnancy GBS carriage or bacteriuria',
        'Confirm whether preterm labour is present',
        'Measure maternal temperature and assess for intra-amniotic infection',
        'Assess duration of membrane rupture and other risk factors',
        'Offer IAP when an indication is present',
        'Repeat the risk assessment at labour because a previous pregnancy result is not current',
      ],
      bullets: [
        'Previous Baby: a previous infant with early-onset or late-onset GBS disease is an indication for IAP regardless of current colonisation.',
        'Current Carriage: a positive current-pregnancy vaginal or rectal GBS culture is an indication for IAP.',
        'Bacteriuria: GBS bacteriuria at any concentration in the current pregnancy is an indication for IAP in labour.',
        'Significant UTI: GBS urinary tract infection with greater than 10^5 CFU/mL should be treated at diagnosis and also receive IAP in labour.',
        'No Antenatal Eradication: do not routinely treat incidental vaginal or rectal carriage before labour.',
        'Preterm Labour: confirmed preterm labour before 37 completed weeks is an indication for IAP even if colonisation status is unknown.',
        'Preterm Caesarean Caveat: do not give GBS-specific IAP solely because a preterm caesarean is planned with intact membranes and no labour.',
        'Intrapartum Fever: a temperature of 38 degrees Celsius or above is an important risk factor when GBS status is unknown.',
        'Suspected Infection: if intra-amniotic infection or maternal sepsis is suspected, start broad-spectrum treatment immediately and ensure it includes GBS cover.',
        'Not Prophylaxis Only: do not treat a clinically infected woman with a prophylaxis-only regimen.',
        'Prolonged Rupture: assess prolonged rupture alongside GBS status, maternal observations and fetal status.',
        'Reassessment: repeat the risk assessment when the woman presents in labour; a result from a previous pregnancy is not a current-pregnancy culture.',
        'Unknown Status: carriage may be unknown at presentation, so clinical risk factors still drive the decision.',
        'ACOG Positive Screen: a positive 36 0/7 to 37 6/7 week vaginal-rectal culture is an indication for IAP at labour.',
      ],
      table: {
        head: ['Indication', 'IAP Position'],
        rows: [
          [
            'Previous infant with GBS disease',
            'Offer IAP regardless of current colonisation testing',
          ],
          [
            'Current positive vaginal or rectal culture',
            'Offer IAP in labour',
          ],
          [
            'GBS bacteriuria at any concentration',
            'Offer IAP in labour; treat significant UTI at diagnosis',
          ],
          [
            'Confirmed preterm labour before 37 weeks',
            'Offer IAP even if colonisation status is unknown',
          ],
          [
            'Intrapartum temperature 38 degrees Celsius or above',
            'Assess for infection; treat suspected intra-amniotic infection with broad-spectrum cover including GBS',
          ],
          [
            'Prolonged rupture of membranes',
            'Assess with GBS status and maternal/fetal observations; follow the PROM pathway',
          ],
          [
            'Prelabour caesarean with intact membranes',
            'No GBS-specific IAP; give routine surgical prophylaxis',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: a previous affected baby warrants IAP regardless of current swab status.',
        'GBS bacteriuria at any concentration is an indication for IAP in labour.',
        'Confirmed preterm labour before 37 weeks warrants IAP even when carriage is unknown.',
      ],
      trap: {
        title: 'Examiner trap - using a previous pregnancy swab for the current pregnancy',
        body: 'GBS risk assessment must be repeated at labour. A result from a previous pregnancy is not a current-pregnancy culture, and colonisation may have changed.',
      },
      traps: [
        {
          title: '• Withholding IAP because the current swab is unknown in confirmed preterm labour.',
        },
        {
          title: '• Treating only with narrow GBS prophylaxis when chorioamnionitis is suspected.',
        },
        {
          title: '• Requiring a positive swab before treating a previous affected baby.',
        },
      ],
    },
    {
      id: 'antibiotic-regimens',
      heading: 'Antibiotic Regimens: UK and US Doses Kept Separate',
      intro:
        'RCOG first-line prophylaxis is benzylpenicillin 3 g intravenously, then 1.5 g every 4 hours until delivery. ACOG uses penicillin G 5 million units, then 2.5 to 3 million units every 4 hours. The allergy pathways and doses are not interchangeable.',
      flow: [
        'Confirm the governing guideline and local formulary',
        'Give the first dose as soon as prophylaxis is indicated',
        'RCOG first line · benzylpenicillin 3 g IV, then 1.5 g IV every 4 hours',
        'Assess penicillin allergy type and severity',
        'Non-severe beta-lactam allergy · RCOG cephalosporin option',
        'Severe beta-lactam allergy · RCOG vancomycin 1 g IV every 12 hours',
        'Aim for 4 hours of exposure before birth but never delay indicated birth',
      ],
      bullets: [
        'RCOG First Line: benzylpenicillin (penicillin G) 3 g intravenously as soon as possible after the onset or diagnosis of labour.',
        'RCOG Maintenance: 1.5 g intravenously every 4 hours until delivery.',
        'Timing: start as early as possible; 4 hours of exposure before birth is desirable but some benefit may occur with shorter exposure.',
        'No Delay: do not delay necessary delivery or another obstetric intervention to achieve a 4-hour interval.',
        'Allergy Assessment: clarify the allergy history rather than accepting an unverified label.',
        'Non-Allergic Intolerance: vomiting or gastrointestinal intolerance alone is not usually evidence of an IgE-mediated allergy.',
        'Non-Severe Beta-Lactam Allergy: RCOG gives an intravenous cephalosporin option, for example cefuroxime 1.5 g loading then 750 mg every 8 hours.',
        'Severe Beta-Lactam Allergy: RCOG uses vancomycin 1 g intravenously every 12 hours.',
        'Clindamycin Caveat: RCOG 2017 does not recommend clindamycin as a routine UK alternative because of antimicrobial resistance concerns.',
        'ACOG First Line: penicillin G 5 million units intravenously, then 2.5 to 3 million units every 4 hours until delivery.',
        'ACOG Cefazolin: 2 g intravenously initially, then 1 g every 8 hours for low-risk anaphylaxis or uncertain allergy history.',
        'ACOG Clindamycin: 900 mg intravenously every 8 hours only when the isolate is documented susceptible and inducible resistance has been addressed.',
        'ACOG Vancomycin: 20 mg/kg intravenously every 8 hours, maximum 2 g per dose, for high-risk allergy when clindamycin cannot be used.',
        'Safety: check renal function and local infusion policy for vancomycin and follow antimicrobial stewardship guidance.',
        'Route: maternal prophylaxis is intrapartum intravenous therapy; oral or intramuscular antenatal courses are not equivalent.',
      ],
      table: {
        head: ['Scenario', 'RCOG / UK Regimen', 'ACOG / US Regimen'],
        rows: [
          [
            'First line',
            'Benzylpenicillin 3 g IV, then 1.5 g IV every 4 hours',
            'Penicillin G 5 million units IV, then 2.5 to 3 million units IV every 4 hours',
          ],
          [
            'Non-severe beta-lactam allergy',
            'Cefuroxime 1.5 g IV loading, then 750 mg IV every 8 hours',
            'Cefazolin 2 g IV, then 1 g IV every 8 hours when anaphylaxis risk is low',
          ],
          [
            'Severe beta-lactam allergy',
            'Vancomycin 1 g IV every 12 hours',
            'Vancomycin 20 mg/kg IV every 8 hours, maximum 2 g per dose',
          ],
          [
            'Clindamycin',
            'Not a routine UK alternative in RCOG 2017',
            '900 mg IV every 8 hours only if susceptible and resistance testing addressed',
          ],
          [
            'Duration',
            'Until delivery; 4 hours before birth desirable but never delay birth',
            'Until delivery; follow the ACOG algorithm',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: RCOG benzylpenicillin is 3 g IV loading, then 1.5 g IV every 4 hours.',
        'RCOG severe beta-lactam allergy uses vancomycin 1 g IV every 12 hours.',
        'Do not substitute ACOG weight-based vancomycin for the RCOG regimen.',
      ],
      trap: {
        title: 'Examiner trap - mixing the RCOG and ACOG vancomycin doses',
        body: 'RCOG uses vancomycin 1 g intravenously every 12 hours. ACOG uses 20 mg/kg every 8 hours, maximum 2 g per dose. These are different regimens and must not be interchanged.',
      },
      traps: [
        {
          title: '• Giving clindamycin routinely under the RCOG pathway.',
        },
        {
          title: '• Delaying birth to complete 4 hours of benzylpenicillin.',
        },
        {
          title: '• Using oral antenatal antibiotics instead of intrapartum IV therapy.',
        },
      ],
    },
    {
      id: 'special-situations',
      heading: 'Term PROM, PPROM, Preterm Labour & Caesarean',
      intro:
        'The GBS pathway interacts with the membrane-rupture, preterm-labour and caesarean pathways. The GBS module does not replace the PROM or PPROM guideline, and it does not justify delaying a clinically indicated birth.',
      flow: [
        'Establish gestational age and membrane status',
        'Term PROM with known GBS · give IAP and induce as soon as reasonably possible',
        'Term PROM with negative or unknown status · induce immediately or manage expectantly up to 24 hours',
        'PPROM · follow the PPROM pathway and give IAP once labour is confirmed or induced',
        'Preterm labour · give IAP because confirmed preterm labour is an indication',
        'Prelabour caesarean with intact membranes · no GBS-specific IAP',
        'If labour or rupture occurs before caesarean · apply the GBS and surgical prophylaxis pathways',
      ],
      bullets: [
        'Term PROM Definition: rupture of membranes at 37 weeks or later.',
        'Term PROM with GBS: offer immediate IAP and induction of labour as soon as reasonably possible.',
        'Term PROM Negative or Unknown: RCOG describes induction immediately or expectant management for up to 24 hours.',
        'Beyond 24 Hours: induction is appropriate, subject to the current term PROM guideline and local policy.',
        'Caesarean After Rupture: a known GBS carrier who ruptures membranes and then requires caesarean should receive IAP and the appropriate caesarean category.',
        'PPROM: follow the PPROM guideline for expectant management, latency antibiotics, infection surveillance and timing of birth.',
        'PPROM Testing Caveat: under RCOG GTG 36, GBS testing is not recommended as a means of deciding whether IAP is required after PPROM.',
        'PPROM Prophylaxis: give IAP once labour is confirmed or induced, irrespective of known GBS status.',
        'Preterm Labour: confirmed preterm labour before 37 completed weeks is an indication for IAP.',
        'Preterm Caesarean: if labour is absent and a preterm caesarean is planned with intact membranes, GBS-specific IAP is not indicated.',
        'Maternal Fever: assess observations, fetal heart rate, uterine tenderness, liquor and laboratory findings.',
        'Suspected Infection: use the local intra-amniotic infection or sepsis regimen with GBS and broader Gram-negative cover.',
        'Neonatal Team: notify the neonatal team when maternal infection or significant intrapartum fever is suspected.',
        'Planned Caesarean: a prelabour caesarean with intact membranes does not require GBS-specific IAP even in a known carrier.',
        'Surgical Prophylaxis: routine pre-incision caesarean prophylaxis remains necessary.',
        'Birthing Pool: GBS carriage alone is not an automatic contraindication to water immersion; offer appropriate IAP and follow local pool policy.',
      ],
      table: {
        head: ['Situation', 'GBS Management'],
        rows: [
          [
            'Term PROM, known GBS carrier',
            'Immediate IAP plus induction as soon as reasonably possible',
          ],
          [
            'Term PROM, GBS negative or unknown',
            'Induction immediately or expectant management up to 24 hours; induce beyond 24 hours',
          ],
          [
            'PPROM',
            'Follow the PPROM pathway; give IAP once labour is confirmed or induced irrespective of GBS status',
          ],
          [
            'Confirmed preterm labour before 37 weeks',
            'Give IAP even if colonisation status is unknown',
          ],
          [
            'Planned preterm caesarean, no labour, intact membranes',
            'No GBS-specific IAP',
          ],
          [
            'Prelabour caesarean with intact membranes',
            'No GBS-specific IAP regardless of carrier status; give routine surgical prophylaxis',
          ],
          [
            'Suspected intra-amniotic infection or sepsis',
            'Broad-spectrum treatment including GBS cover; notify the neonatal team',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: term PROM in a known GBS carrier means immediate IAP and induction.',
        'After PPROM, give IAP once labour is confirmed or induced regardless of GBS status.',
        'Prelabour caesarean with intact membranes needs no GBS-specific IAP.',
      ],
      trap: {
        title: 'Examiner trap - using a GBS swab to decide prophylaxis after PPROM',
        body: 'Under RCOG GTG 36, GBS testing is not recommended as a means of deciding whether IAP is required after PPROM. Give IAP once labour is confirmed or induced, irrespective of known status.',
      },
      traps: [
        {
          title: '• Expectant management beyond 24 hours in term PROM with unknown status without inducing.',
        },
        {
          title: '• Giving GBS prophylaxis for a prelabour caesarean with intact membranes.',
        },
        {
          title: '• Delaying a caesarean to complete prophylaxis.',
        },
      ],
    },
    {
      id: 'newborn-assessment',
      heading: 'Newborn Assessment & Postnatal Observation',
      intro:
        'The neonatal team needs the maternal risk profile, culture results, prophylaxis timing and maternal infection status. A well-appearing infant does not automatically need antibiotics, but a symptomatic infant needs urgent assessment and treatment.',
      flow: [
        'Hand over maternal risk factors, swab results and IAP timing',
        'Assess the newborn for feeding, tone, temperature, breathing and perfusion',
        'If symptomatic · arrange urgent neonatal assessment and treatment',
        'If well but at risk · follow the local observation or risk-calculator pathway',
        'Do not give routine antibiotics solely because the mother was a carrier',
        'Advise parents on warning signs and when to seek urgent help',
        'Encourage breastfeeding where clinically appropriate',
      ],
      bullets: [
        'Handover: maternal risk factors, culture results, IAP given, timing of the first dose, duration of exposure, maternal fever or infection and gestational age.',
        'Feeding: poor feeding, reluctance to feed or difficulty feeding.',
        'Behaviour: abnormal cry, marked irritability, lethargy or listlessness.',
        'Tone: reduced tone or an unusually floppy baby.',
        'Temperature: hypothermia, for example below 36 degrees Celsius, or fever, for example 38 degrees Celsius or above.',
        'Respiratory: rapid breathing, grunting, recession, apnoea or respiratory distress.',
        'Colour and Perfusion: pallor, mottling, cyanosis, poor perfusion, cardiovascular instability or seizures.',
        'Symptomatic Infant: requires urgent neonatal assessment and treatment; do not rely on maternal prophylaxis to exclude infection.',
        'Well but At Risk: structured observation and risk assessment according to the local neonatal early-onset infection guideline.',
        'No Routine Antibiotics: do not treat every asymptomatic well-appearing infant solely because the mother was a GBS carrier.',
        'Adequate IAP: a well term infant whose mother received adequate prophylaxis may not need enhanced observation beyond the standard pathway, depending on local policy.',
        'Observation Example: the handwritten source notes serial observations through the first 12 hours for selected at-risk infants; follow the current local pathway for exact frequency and duration.',
        'Breastfeeding: encourage where clinically appropriate.',
        'Parent Advice: explain warning signs and when to seek urgent help, including after discharge.',
      ],
      table: {
        head: ['Neonatal Domain', 'Warning Sign'],
        rows: [
          [
            'Feeding',
            'Poor feeding, reluctance to feed or difficulty feeding',
          ],
          [
            'Behaviour and tone',
            'Abnormal cry, irritability, lethargy, listlessness or floppiness',
          ],
          [
            'Temperature',
            'Hypothermia below 36 degrees Celsius or fever at 38 degrees Celsius or above',
          ],
          [
            'Respiratory',
            'Rapid breathing, grunting, recession, apnoea or distress',
          ],
          [
            'Circulation',
            'Pallor, mottling, cyanosis, poor perfusion or cardiovascular instability',
          ],
          [
            'Neurological',
            'Seizures or marked abnormal behaviour',
          ],
          [
            'Asymptomatic at-risk infant',
            'Structured observation per local pathway; not routine antibiotics for carriage alone',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: a symptomatic newborn needs urgent assessment and treatment regardless of maternal IAP.',
        'Do not give routine postnatal antibiotics to every well infant of a GBS carrier.',
        'Hand over IAP timing, duration and maternal infection status to the neonatal team.',
      ],
      trap: {
        title: 'Examiner trap - assuming maternal IAP rules out neonatal infection',
        body: 'Intrapartum prophylaxis reduces but does not eliminate transmission. A symptomatic infant requires urgent assessment and treatment even when the mother received adequate prophylaxis.',
      },
      traps: [
        {
          title: '• Discharging a poor-feeding, floppy infant because the mother had IAP.',
        },
        {
          title: '• Giving antibiotics to every well infant of a carrier.',
        },
        {
          title: '• Forgetting to tell parents the warning signs.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'GBS is Streptococcus agalactiae.',
        'GBS colonisation is not the same as maternal infection.',
        'Early-onset disease presents before 7 completed days.',
        'Late-onset disease begins at 7 days and is not prevented by IAP.',
        'Approximately 20 to 40 percent of adults may carry GBS in bowel flora.',
        'Without IAP, about 1 to 2 percent of infants of colonised mothers develop early-onset disease.',
        'RCOG 2017 does not recommend universal antenatal screening.',
        'RCOG uses a risk-factor-based intrapartum prophylaxis strategy.',
        'ACOG recommends universal vaginal-rectal culture at 36 0/7 to 37 6/7 weeks.',
        'A previous affected baby warrants IAP regardless of current swab status.',
        'Recurrence of carriage after a previous positive pregnancy is about 50 percent.',
        'Selective culture after previous carriage is taken at 35 to 37 weeks.',
        'Sample the lower vagina and anorectum, not the cervix or high vagina.',
        'Use Amies or Stuart non-nutrient transport medium.',
        'GBS bacteriuria at any concentration is an indication for IAP.',
        'Significant GBS UTI above 10^5 CFU/mL is treated at diagnosis and in labour.',
        'Confirmed preterm labour before 37 weeks is an indication for IAP.',
        'Intrapartum temperature of 38 degrees Celsius or above is a key risk factor.',
        'Suspected intra-amniotic infection needs broad-spectrum treatment, not prophylaxis alone.',
        'RCOG first line is benzylpenicillin 3 g IV, then 1.5 g IV every 4 hours.',
        'RCOG severe beta-lactam allergy uses vancomycin 1 g IV every 12 hours.',
        'Do not confuse RCOG vancomycin 1 g q12h with ACOG 20 mg/kg q8h.',
        'Prelabour caesarean with intact membranes needs no GBS-specific IAP.',
        'Do not delay an indicated birth to complete 4 hours of prophylaxis.',
        'Chlorhexidine vaginal cleansing does not replace IAP.',
      ],
      traps: [
        {
          title: '• Calling universal screening the RCOG recommendation.',
        },
        {
          title: '• Treating a positive swab as maternal sepsis.',
        },
        {
          title: '• Taking a high vaginal or cervical swab for GBS.',
        },
        {
          title: '• Omitting the rectal sample.',
        },
        {
          title: '• Treating asymptomatic carriage with antenatal antibiotics.',
        },
        {
          title: '• Withholding IAP in confirmed preterm labour because the swab is unknown.',
        },
        {
          title: '• Using a previous pregnancy swab as a current result.',
        },
        {
          title: '• Treating chorioamnionitis with a prophylaxis-only regimen.',
        },
        {
          title: '• Mixing RCOG and ACOG antibiotic doses.',
        },
        {
          title: '• Delaying birth to complete 4 hours of IAP.',
        },
        {
          title: '• Giving GBS-specific IAP for a prelabour caesarean with intact membranes.',
        },
        {
          title: '• Assuming maternal IAP excludes neonatal infection.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm17-f1',
      front: 'What organism causes GBS disease and what is early-onset disease?',
      back: 'Streptococcus agalactiae. Early-onset GBS disease presents before 7 completed days, as sepsis, pneumonia or meningitis.',
    },
    {
      id: 'm17-f2',
      front: 'What is the key difference between the RCOG and ACOG screening strategies?',
      back: 'RCOG 2017 does not recommend universal antenatal screening and uses risk-based intrapartum prophylaxis. ACOG recommends universal vaginal-rectal culture at 36 0/7 to 37 6/7 weeks.',
    },
    {
      id: 'm17-f3',
      front: 'Which sites are sampled for a GBS culture?',
      back: 'The lower vagina or vaginal introitus and the anorectum or rectum. A cervical or high-vaginal swab is not an acceptable substitute.',
    },
    {
      id: 'm17-f4',
      front: 'Which transport medium is used for a GBS swab?',
      back: 'A non-nutrient medium such as Amies or Stuart medium. Label the request as a GBS culture and send it promptly.',
    },
    {
      id: 'm17-f5',
      front: 'What is the recurrence risk of GBS carriage after a positive previous pregnancy?',
      back: 'Approximately 50 percent. Discuss intrapartum prophylaxis or selective late-pregnancy culture at 35 to 37 weeks.',
    },
    {
      id: 'm17-f6',
      front: 'Name the RCOG indications for intrapartum antibiotic prophylaxis.',
      back: 'Previous baby with GBS disease, current GBS carriage or bacteriuria, confirmed preterm labour, intrapartum fever or suspected intra-amniotic infection, and prolonged rupture of membranes.',
    },
    {
      id: 'm17-f7',
      front: 'How is GBS bacteriuria managed?',
      back: 'GBS bacteriuria at any concentration is an indication for IAP in labour. Significant UTI above 10^5 CFU/mL is also treated at diagnosis.',
    },
    {
      id: 'm17-f8',
      front: 'What is the RCOG first-line prophylaxis regimen?',
      back: 'Benzylpenicillin 3 g intravenously as soon as possible, then 1.5 g intravenously every 4 hours until delivery.',
    },
    {
      id: 'm17-f9',
      front: 'What is the RCOG regimen for severe beta-lactam allergy?',
      back: 'Vancomycin 1 g intravenously every 12 hours. A non-severe allergy may use a cephalosporin such as cefuroxime 1.5 g then 750 mg every 8 hours.',
    },
    {
      id: 'm17-f10',
      front: 'What is the ACOG first-line prophylaxis regimen?',
      back: 'Penicillin G 5 million units intravenously, then 2.5 to 3 million units every 4 hours until delivery. Do not substitute RCOG doses.',
    },
    {
      id: 'm17-f11',
      front: 'When is GBS-specific IAP not indicated?',
      back: 'Prelabour caesarean birth with intact membranes, regardless of GBS status or gestational age. Routine surgical antibiotic prophylaxis is still required.',
    },
    {
      id: 'm17-f12',
      front: 'How is term PROM managed in a known GBS carrier?',
      back: 'Give immediate IAP and induce labour as soon as reasonably possible, following the term PROM guideline.',
    },
    {
      id: 'm17-f13',
      front: 'How is GBS handled after PPROM?',
      back: 'Follow the PPROM pathway. Give IAP once labour is confirmed or induced, irrespective of known GBS status; GBS testing is not used to decide prophylaxis.',
    },
    {
      id: 'm17-f14',
      front: 'Should birth be delayed to complete 4 hours of IAP?',
      back: 'No. Four hours of exposure is desirable, but a clinically indicated birth or obstetric intervention must not be delayed.',
    },
    {
      id: 'm17-f15',
      front: 'Which newborn signs require urgent assessment after maternal GBS?',
      back: 'Poor feeding, abnormal cry or lethargy, floppiness, temperature instability, respiratory distress, pallor or mottling, poor perfusion or seizures. Maternal IAP does not exclude infection.',
    },
  ],

  mcqs: [
    {
      id: 'm17-q1',
      stem: 'A woman at 30 weeks presents in confirmed preterm labour. Her GBS status is unknown. What is the most appropriate management?',
      options: [
        'Withhold prophylaxis until a swab result is available',
        'Offer intrapartum antibiotic prophylaxis because confirmed preterm labour is an indication',
        'Take a cervical swab and give prophylaxis only if positive',
        'Await the 36-week universal screen',
      ],
      answerIndex: 1,
      explanation:
        'Confirmed preterm labour before 37 completed weeks is an indication for IAP even when GBS colonisation status is unknown. Do not delay for a swab result.',
    },
    {
      id: 'm17-q2',
      stem: 'Which sampling technique is correct for a GBS culture?',
      options: [
        'High vaginal swab only',
        'Cervical swab in saline',
        'Lower vagina and anorectum in Amies or Stuart medium',
        'Rectal swab only in blood culture medium',
      ],
      answerIndex: 2,
      explanation:
        'The recommended specimen is a lower-vaginal plus anorectal swab in a non-nutrient transport medium such as Amies or Stuart. Cervical and high-vaginal samples are not substitutes.',
    },
    {
      id: 'm17-q3',
      stem: 'A woman had a baby with early-onset GBS disease 3 years ago. She is now in labour at 39 weeks and her current swab is negative. What is the correct management?',
      options: [
        'Offer IAP because a previous affected baby is an indication regardless of current status',
        'Withhold IAP because the current swab is negative',
        'Repeat the swab in labour and treat only if positive',
        'Give oral antibiotics after delivery',
      ],
      answerIndex: 0,
      explanation:
        'A previous infant with GBS disease is an indication for IAP in a subsequent pregnancy regardless of current colonisation testing.',
    },
    {
      id: 'm17-q4',
      stem: 'Which statement about RCOG and ACOG screening is correct?',
      options: [
        'Both recommend universal 36-week screening',
        'RCOG recommends universal screening and ACOG uses risk factors',
        'Neither guideline uses culture at any stage',
        'RCOG uses a risk-factor approach, while ACOG recommends universal culture at 36 0/7 to 37 6/7 weeks',
      ],
      answerIndex: 3,
      explanation:
        'RCOG GTG 36 does not recommend universal antenatal bacteriological screening and uses risk-based IAP. ACOG recommends universal vaginal-rectal culture at 36 0/7 to 37 6/7 weeks.',
    },
    {
      id: 'm17-q5',
      stem: 'What is the RCOG first-line antibiotic regimen for GBS prophylaxis?',
      options: [
        'Penicillin G 5 million units then 2.5 to 3 million units every 4 hours',
        'Benzylpenicillin 3 g IV then 1.5 g IV every 4 hours',
        'Cefazolin 2 g IV then 1 g every 8 hours',
        'Vancomycin 20 mg/kg every 8 hours',
      ],
      answerIndex: 1,
      explanation:
        'RCOG uses benzylpenicillin 3 g intravenously as the loading dose, then 1.5 g every 4 hours until delivery. The other options are ACOG regimens.',
    },
    {
      id: 'm17-q6',
      stem: 'A woman in labour has a temperature of 38.5 degrees Celsius, fetal tachycardia and uterine tenderness. What is the most appropriate action?',
      options: [
        'Give narrow-spectrum GBS prophylaxis only',
        'Reassure and repeat the temperature in 4 hours',
        'Start broad-spectrum antibiotics covering GBS and relevant Gram-negative organisms, and notify the neonatal team',
        'Delay antibiotics until blood cultures are positive',
      ],
      answerIndex: 2,
      explanation:
        'Suspected intra-amniotic infection or maternal sepsis requires prompt broad-spectrum treatment including GBS cover, not a prophylaxis-only regimen. Notify the neonatal team.',
    },
    {
      id: 'm17-q7',
      stem: 'A known GBS carrier at 38 weeks has spontaneous rupture of membranes and is not in labour. What is the recommended management?',
      options: [
        'Expectant management for 48 hours',
        'Oral antibiotics and discharge',
        'Wait for contractions before giving antibiotics',
        'Give immediate IAP and induce labour as soon as reasonably possible',
      ],
      answerIndex: 3,
      explanation:
        'In term PROM with known GBS carriage, give immediate IAP and induce labour as soon as reasonably possible under the term PROM pathway.',
    },
    {
      id: 'm17-q8',
      stem: 'Which situation does NOT require GBS-specific intrapartum prophylaxis?',
      options: [
        'Planned prelabour caesarean with intact membranes in a known carrier',
        'Confirmed preterm labour at 34 weeks',
        'GBS bacteriuria in the current pregnancy',
        'Previous infant with GBS disease',
      ],
      answerIndex: 0,
      explanation:
        'A prelabour caesarean with intact membranes does not require GBS-specific IAP even in a known carrier. Routine surgical antibiotic prophylaxis is still given.',
    },
    {
      id: 'm17-q9',
      stem: 'A woman reports a rash and swelling after penicillin. Which RCOG option is appropriate for severe beta-lactam allergy?',
      options: [
        'Benzylpenicillin 3 g IV',
        'Vancomycin 1 g IV every 12 hours',
        'Cefuroxime 1.5 g IV then 750 mg every 8 hours',
        'Clindamycin 900 mg IV every 8 hours routinely',
      ],
      answerIndex: 1,
      explanation:
        'For severe beta-lactam allergy, RCOG uses vancomycin 1 g intravenously every 12 hours. Cefuroxime is the non-severe allergy option, and clindamycin is not a routine UK alternative in RCOG 2017.',
    },
    {
      id: 'm17-q10',
      stem: 'A well-appearing term infant is born to a GBS-positive mother who received adequate IAP. What is the most appropriate postnatal approach?',
      options: [
        'Give routine intravenous antibiotics to every such infant',
        'Admit to the neonatal unit regardless of clinical status',
        'Follow the local neonatal observation pathway; antibiotics are guided by the infant clinical condition',
        'Discharge immediately without advice',
      ],
      answerIndex: 2,
      explanation:
        'A well term infant whose mother received adequate IAP may not need enhanced observation beyond the standard pathway, depending on local policy. Do not give routine antibiotics solely for maternal carriage.',
    },
  ],
};
