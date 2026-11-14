import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 14 - Ovarian Hyperstimulation Syndrome (RCOG GTG 5)
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 45-56) with RCOG
 * Green-top Guideline No. 5 (2026) and ASRM 2023 prevention guidance.
 *
 * Covers:
 * - The VEGF-mediated capillary-leak model and third-space fluid shift
 * - Early versus late OHSS and the trigger-to-symptom interval
 * - RCOG/HFEA severity grading from mild to critical
 * - Assessment, investigations and the acute differential diagnosis
 * - Outpatient safety-netting, admission criteria and fluid management
 * - Paracentesis, analgesia, albumin, diuretics and thromboprophylaxis
 * - Antagonist protocol, agonist trigger, cabergoline and freeze-all
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const OHSS_RCOG_GTG5_MODULE: StudioModule = {
  id: 'pg-mod-14-ohss-rcog-gtg5',
  track: 'NEET_PG',
  title: 'Ovarian Hyperstimulation Syndrome (OHSS): RCOG GTG 5',
  shortTitle: 'Ovarian Hyperstimulation Syndrome',
  summary:
    'Complete PG clinical revision module on ovarian hyperstimulation syndrome following RCOG Green-top Guideline No. 5 (2026) and ASRM 2023 prevention guidance. Features the VEGF capillary-leak model, early versus late OHSS, the RCOG/HFEA mild-to-critical severity criteria, outpatient safety-netting and admission triggers, drink-to-thirst fluid management, paracentesis indications, LMWH thromboprophylaxis, antagonist-protocol prevention with agonist trigger and freeze-all, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'VEGF capillary leak, early versus late OHSS and the 0.45 haematocrit rule.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'RCOG GTG 5',
    'VEGF Capillary Leak',
    'Early vs Late OHSS',
    'RCOG/HFEA Severity',
    'Haematocrit 0.45',
    'Oliguria Criteria',
    'Drink to Thirst',
    'Avoid NSAIDs',
    'Paracentesis',
    'LMWH Prophylaxis',
    'Agonist Trigger',
    'Freeze-All',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 45-56) • RCOG Green-top Guideline No. 5, 2026 • ASRM 2023 prevention guidance',
  updatedAtISO: '2026-11-14T11:00:00.000Z',
  notes: [
    {
      id: 'ohss-framework',
      heading: 'OHSS & the VEGF Capillary-Leak Model',
      intro:
        'OHSS is a potentially serious iatrogenic complication of ovarian stimulation. Excessive ovarian response and exposure to hCG release vasoactive mediators, above all VEGF, which increase endothelial permeability and shift fluid out of the intravascular space.',
      flow: [
        'Recognise the setting · ovarian stimulation, hCG trigger or embryo transfer',
        'Identify the lesion · VEGF-driven endothelial permeability and third-space shift',
        'Trace the consequences · ascites, effusions, haemoconcentration, oliguria',
        'Grade severity · mild, moderate, severe or critical using RCOG/HFEA',
        'Exclude mimics · torsion, rupture, ectopic, infection, appendicitis, VTE',
        'Decide the setting · outpatient with a safety net or inpatient care',
        'Prevent recurrence · antagonist protocol, agonist trigger, freeze-all',
      ],
      bullets: [
        'Definition: an iatrogenic systemic capillary-leak syndrome triggered by ovarian stimulation and hCG exposure, not merely ovarian enlargement.',
        'Central Mediator: VEGF increases endothelial permeability; other vasoactive mediators contribute to the same leak.',
        'Compartment Paradox: total-body fluid is increased while the intravascular volume is depleted, so the patient can be overloaded and hypovolaemic at once.',
        'Third Spaces: peritoneal ascites, pleural effusions and, rarely, pericardial effusion.',
        'Haemoconcentration: loss of plasma water raises the haematocrit and blood viscosity, predisposing to venous and arterial thrombosis.',
        'Renal Consequence: reduced renal perfusion causes oliguria, electrolyte disturbance and, if uncorrected, renal impairment.',
        'Respiratory Consequence: ascites plus pleural effusion restrict diaphragmatic excursion and can progress to ARDS in critical disease.',
        'Ovarian Size: enlarged ovaries support the diagnosis, but size alone must never be used to grade severity.',
        'Most Cases: mild OHSS is self-limiting, but severity can progress rapidly over hours to days.',
        'Early OHSS: usually begins within 7 days of the ovulatory hCG trigger and reflects the exogenous trigger.',
        'Late OHSS: generally begins 10 or more days after the trigger and is driven by endogenous hCG from an evolving pregnancy.',
        'Severe Pain: always exclude torsion, ruptured cyst, ectopic pregnancy and pelvic infection before escalating the OHSS label.',
        'Communication: maintain contact between the fertility clinic and the acute care team until the episode resolves.',
        'Fresh Transfer: if early OHSS develops before transfer, avoid a fresh transfer and consider freeze-all with interval frozen embryo replacement.',
      ],
      table: {
        head: ['Concept', 'Clinical Meaning'],
        rows: [
          [
            'Core lesion',
            'VEGF-mediated rise in capillary permeability with fluid shift into third spaces',
          ],
          [
            'Compartment paradox',
            'Total-body fluid excess with intravascular depletion and haemoconcentration',
          ],
          [
            'Main third spaces',
            'Peritoneal ascites, pleural effusion and, rarely, pericardial effusion',
          ],
          [
            'Key downstream risks',
            'Oliguria, electrolyte disturbance, thrombosis and ARDS',
          ],
          [
            'Ovarian size',
            'Supports the diagnosis but does not grade severity on its own',
          ],
          [
            'Typical trigger',
            'Exogenous hCG for ovulation, or endogenous hCG from an early pregnancy',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: OHSS is a VEGF-driven capillary-leak syndrome, not simply a large ovary.',
        'The patient can be total-body fluid overloaded and intravascularly depleted at the same time.',
        'Ovarian size supports the diagnosis but never grades severity by itself.',
      ],
      trap: {
        title: 'Examiner trap - describing OHSS as ovarian enlargement alone',
        body: 'Ovarian enlargement is a marker of the underlying stimulation, not the disease mechanism. The morbidity comes from VEGF-mediated capillary leak, third spacing, haemoconcentration, oliguria and thrombosis.',
      },
      traps: [
        {
          title: '• Equating a large ovary with severe OHSS.',
        },
        {
          title: '• Forgetting that ascites and haemoconcentration coexist.',
        },
        {
          title: '• Missing torsion or ectopic pregnancy in a woman with severe pelvic pain.',
        },
      ],
    },
    {
      id: 'early-vs-late-ohss',
      heading: 'Early vs Late OHSS: Trigger hCG vs Pregnancy hCG',
      intro:
        'The interval from the ovulatory trigger separates two clinically distinct forms. Early OHSS is driven by the exogenous hCG trigger and usually settles; late OHSS is driven by endogenous hCG from a pregnancy and is often more prolonged and more severe.',
      flow: [
        'Record the exact date and type of the ovulatory trigger',
        'Symptoms within 7 days · classify as early OHSS',
        'Symptoms at 10 days or more · classify as late OHSS',
        'Check serum or urinary hCG to identify an evolving pregnancy',
        'Anticipate a longer, more severe course in late OHSS',
        'Counsel that late OHSS may persist until the pregnancy stabilises',
      ],
      bullets: [
        'Early OHSS: begins within 7 days of the ovulatory hCG trigger.',
        'Early Driver: the exogenous hCG injection or, in some protocols, endogenous LH activity.',
        'Early Course: often shorter and more responsive to supportive care.',
        'Late OHSS: generally begins 10 or more days after the trigger.',
        'Late Driver: endogenous hCG produced by an implanting or established pregnancy.',
        'Late Course: frequently more prolonged and more severe than early OHSS.',
        'Pregnancy Test: essential whenever late OHSS is suspected, because it changes counselling and thromboprophylaxis duration.',
        'Fresh Transfer: early OHSS before transfer is a reason to cancel fresh transfer and use freeze-all.',
        'Prevention Window: risk-reducing measures are applied before and at the trigger, so they mainly prevent early OHSS.',
        'Documentation: the trigger date is the single most useful historical detail for timing the diagnosis.',
        'Counselling: women with late OHSS need to understand that symptoms may persist for weeks.',
        'Thromboprophylaxis: pregnancy-associated OHSS requires prophylaxis through the first trimester under RCOG 2026.',
      ],
      table: {
        head: ['Feature', 'Early OHSS', 'Late OHSS'],
        rows: [
          [
            'Onset after hCG trigger',
            'Within 7 days',
            'Generally 10 days or more',
          ],
          [
            'Main driver',
            'Exogenous hCG trigger',
            'Endogenous hCG from pregnancy',
          ],
          [
            'Typical course',
            'Often shorter and self-limiting',
            'Often more prolonged and more severe',
          ],
          [
            'Pregnancy test',
            'Not the defining feature',
            'Essential; a positive result supports the diagnosis',
          ],
          [
            'Prevention relevance',
            'Addressed by trigger and transfer strategy',
            'Not prevented by trigger strategy alone',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: early OHSS is within 7 days of hCG; late OHSS is 10 days or more and pregnancy-driven.',
        'Late OHSS is often more prolonged and more severe than early OHSS.',
        'Always check pregnancy status when late OHSS is suspected.',
      ],
      trap: {
        title: 'Examiner trap - calling every OHSS pregnancy-driven',
        body: 'Early OHSS reflects the exogenous hCG trigger. Late OHSS, generally 10 or more days after the trigger, is the form driven by endogenous hCG from an evolving pregnancy.',
      },
      traps: [
        {
          title: '• Labelling symptoms at day 3 as late OHSS.',
        },
        {
          title: '• Forgetting the pregnancy test in late OHSS.',
        },
        {
          title: '• Assuming late OHSS will settle as quickly as early OHSS.',
        },
      ],
    },
    {
      id: 'severity-grading',
      heading: 'RCOG/HFEA Severity: Mild, Moderate, Severe & Critical',
      intro:
        'The RCOG/HFEA classification groups OHSS by symptoms, ovarian size, haematocrit and biochemical or organ dysfunction. The categories overlap and can change quickly, so grading is a snapshot that must be repeated.',
      flow: [
        'Assess pain, bloating, nausea and vomiting',
        'Examine for clinical ascites, hydrothorax and oedema',
        'Measure haematocrit as the central severity marker',
        'Check sodium, potassium, osmolality and albumin',
        'Quantify urine output over 24 hours or per hour',
        'Assign mild, moderate, severe or critical',
        'Reassess frequently because severity can escalate rapidly',
      ],
      bullets: [
        'Mild: mild abdominal pain or discomfort, bloating, ovaries usually under 8 cm and haematocrit under 0.40.',
        'Moderate: moderate pain, nausea with or without vomiting, ultrasound ascites, ovaries usually 8 to 12 cm and haematocrit under 0.45.',
        'Severe: clinical ascites, hydrothorax, haematocrit over 0.45, sodium under 135 mmol/L, osmolality under 282 mOsm/kg, potassium over 5.0 mmol/L, albumin under 35 g/L or oliguria under 300 mL/day or 30 mL/hour.',
        'Critical: tense ascites or pleural effusions, haematocrit over 0.55, white cell count over 25,000, anuria, thrombosis or ARDS.',
        'Haematocrit Rule: over 0.45 is a severe feature; over 0.55 is a critical feature.',
        'Oliguria Rule: under 300 mL/day or under 30 mL/hour defines severe OHSS.',
        'Review Threshold: urine output under 1000 mL/24 h warrants clinical review even before the formal oliguria cutoff.',
        'Ovarian Size Caveat: ovaries often exceed 12 cm in severe disease, but size does not reliably track severity.',
        'Overlap: a patient may satisfy features of more than one category at the same time.',
        'Single Number Caveat: no single laboratory value replaces the overall clinical assessment.',
        'Rapid Change: repeat assessment is essential because deterioration can be abrupt.',
        'Pain Caveat: severe pain demands evaluation for torsion, rupture, ectopic pregnancy or infection, not simply relabelling as critical OHSS.',
      ],
      table: {
        head: ['Grade', 'Clinical & Laboratory Features'],
        rows: [
          [
            'Mild',
            'Mild pain or bloating; ovaries usually under 8 cm; haematocrit under 0.40',
          ],
          [
            'Moderate',
            'Moderate pain, nausea or vomiting, ultrasound ascites; ovaries 8 to 12 cm; haematocrit under 0.45',
          ],
          [
            'Severe',
            'Clinical ascites or hydrothorax; haematocrit over 0.45; sodium under 135; osmolality under 282; potassium over 5.0; albumin under 35; oliguria under 300 mL/day or 30 mL/hour',
          ],
          [
            'Critical',
            'Tense ascites or pleural effusions; haematocrit over 0.55; white cells over 25,000; anuria, thrombosis or ARDS',
          ],
          [
            'Key thresholds',
            'Haematocrit 0.45 separates severe from moderate; 0.55 marks critical disease',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: haematocrit over 0.45 is severe and over 0.55 is critical.',
        'Oliguria under 300 mL/day or under 30 mL/hour defines severe OHSS.',
        'Anuria, thrombosis and ARDS define critical OHSS.',
      ],
      trap: {
        title: 'Examiner trap - grading severity from ovarian size',
        body: 'Ovarian size is supportive only. Severe and critical grades are defined by haematocrit, sodium, osmolality, potassium, albumin, urine output and organ complications such as thrombosis or ARDS.',
      },
      traps: [
        {
          title: '• Calling a 13 cm ovary critical OHSS without systemic features.',
        },
        {
          title: '• Missing oliguria because the patient looks comfortable.',
        },
        {
          title: '• Using 0.55 rather than 0.45 as the severe haematocrit cutoff.',
        },
      ],
    },
    {
      id: 'assessment-investigations',
      heading: 'Assessment, Investigations & the Acute Differential',
      intro:
        'Assessment establishes severity, identifies organ compromise and excludes the surgical and medical mimics that can present with pain, distension or breathlessness after ovarian stimulation.',
      flow: [
        'Take a targeted history including trigger date, follicle count and transfer status',
        'Examine pulse, blood pressure, perfusion, abdomen and chest',
        'Send full blood count, urea and electrolytes, liver function and coagulation',
        'Measure urine output and perform urinalysis',
        'Image with pelvic ultrasound for ovarian size, ascites and free fluid',
        'Add chest imaging, ECG or CTPA only when clinically indicated',
        'Exclude torsion, rupture, ectopic pregnancy, infection and VTE',
      ],
      bullets: [
        'History: trigger date and type, stimulation protocol, follicle and oocyte numbers, transfer status and pregnancy possibility.',
        'Risk History: previous OHSS, polycystic ovary syndrome and high ovarian reserve.',
        'Symptom Screen: pain, distension, nausea, vomiting, breathlessness, urine output, leg swelling, chest pain and syncope.',
        'Examination: pulse, blood pressure, respiratory rate, oxygen saturation, hydration, girth and clinical ascites.',
        'Thrombosis Screen: calf asymmetry or tenderness, plus chest pain or haemoptysis.',
        'First-Line Bloods: full blood count with haematocrit, urea and electrolytes, creatinine, sodium, potassium, osmolality and liver function with albumin.',
        'Additional Bloods: coagulation profile, CRP for monitoring and hCG where pregnancy status matters.',
        'Urine: dipstick and measured output; oliguria is a severity marker and a trigger for escalation.',
        'Ultrasound: pelvic and abdominal views for ovarian size, ascites and free fluid.',
        'Doppler: assess ovarian perfusion when torsion is suspected and limb veins when deep vein thrombosis is suspected.',
        'Chest Imaging: chest radiograph or thoracic ultrasound for pleural effusion; ABG if respiratory compromise.',
        'VTE Imaging: CTPA or ventilation-perfusion imaging when pulmonary embolism is suspected.',
        'D-Dimer Caveat: do not use D-dimer as a stand-alone rule-out test in pregnancy or OHSS; interpret it within a diagnostic pathway.',
        'Differential: torsion, ruptured haemorrhagic cyst, ectopic pregnancy, pelvic inflammatory disease or abscess, appendicitis, bowel pathology, urinary or renal disease, pulmonary embolism and cardiac causes of breathlessness.',
      ],
      table: {
        head: ['Assessment Domain', 'Key Tests & Mimics'],
        rows: [
          [
            'Bedside',
            'Pulse, blood pressure, perfusion, girth, ascites, calf asymmetry, oxygen saturation',
          ],
          [
            'Core laboratory',
            'Full blood count and haematocrit, urea and electrolytes, creatinine, sodium, potassium, osmolality, liver function and albumin',
          ],
          [
            'Supporting laboratory',
            'Coagulation, CRP, hCG, urinalysis and measured urine output',
          ],
          [
            'Imaging',
            'Pelvic and abdominal ultrasound first; chest imaging, ECG or CTPA only when indicated',
          ],
          [
            'Surgical mimics',
            'Ovarian torsion, ruptured haemorrhagic cyst, ectopic pregnancy, appendicitis, bowel pathology',
          ],
          [
            'Medical mimics',
            'Pelvic infection or abscess, urinary or renal disease, pulmonary embolism, cardiac failure',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: haematocrit, renal function, electrolytes and urine output are the core monitoring set.',
        'Ultrasound is first-line imaging; CT pulmonary angiography is reserved for suspected pulmonary embolism.',
        'D-dimer cannot rule out venous thromboembolism on its own in pregnancy or OHSS.',
      ],
      trap: {
        title: 'Examiner trap - treating every severe pelvic pain as worsening OHSS',
        body: 'Severe pain requires exclusion of torsion, ruptured cyst, ectopic pregnancy, infection and appendicitis. Escalating analgesia for OHSS without imaging can miss a surgical emergency.',
      },
      traps: [
        {
          title: '• Ordering CT as the first-line imaging test.',
        },
        {
          title: '• Using D-dimer alone to exclude pulmonary embolism.',
        },
        {
          title: '• Forgetting a pregnancy test in the differential of pelvic pain.',
        },
      ],
    },
    {
      id: 'outpatient-admission',
      heading: 'Outpatient Care, Admission & Fluid Balance',
      intro:
        'Most mild and many moderate cases can be managed at home provided pain is controlled, oral intake is adequate, observations are stable and reliable follow-up is guaranteed. Everything else belongs in hospital.',
      flow: [
        'Decide whether the patient is suitable for outpatient care',
        'Confirm reliable contact, a 24-hour advice route and written return precautions',
        'Confirm adequate oral intake, pain control and ability to record urine output',
        'Schedule review every 2 to 3 days, more often if worsening',
        'Admit if pain is uncontrolled, vomiting prevents intake or markers worsen',
        'Admit immediately for severe or critical disease or any organ complication',
      ],
      bullets: [
        'Outpatient Suitability: mild OHSS, moderate OHSS with stable observations and adequate oral intake, and selected severe cases only where specialist review and monitoring can be delivered safely.',
        'Safety Net: reliable contact, a 24-hour advice route, written return precautions and a clear admission pathway.',
        'Oral Intake: the patient must be able to drink enough to maintain hydration.',
        'Pain Control: appropriate oral analgesia must control symptoms.',
        'Monitoring: ability to measure and record urine output or fluid balance where feasible.',
        'Review Interval: often every 2 to 3 days in stable cases, more frequently if worsening.',
        'Admission - Pain: pain not controlled with appropriate oral medication.',
        'Admission - Intake: nausea or vomiting prevents sufficient oral fluid intake.',
        'Admission - Trajectory: symptoms or laboratory markers worsen despite outpatient care.',
        'Admission - Safety: follow-up cannot be assured.',
        'Admission - Severity: severe or critical OHSS.',
        'Admission - Complications: suspected respiratory, renal, thrombotic or haemodynamic complication.',
        'Return Urgently: increasing pain or distension, breathlessness or inability to lie flat, persistent vomiting, markedly reduced urine output.',
        'Return Urgently: fainting, dizziness, chest pain, palpitations, unilateral leg swelling, severe headache, visual symptoms, neck pain or rapidly increasing weight or girth.',
      ],
      table: {
        head: ['Domain', 'Outpatient', 'Inpatient'],
        rows: [
          [
            'Typical severity',
            'Mild, or moderate with stable observations',
            'Severe, critical or any organ complication',
          ],
          [
            'Pain and intake',
            'Pain controlled orally and drinking adequately',
            'Uncontrolled pain or vomiting prevents intake',
          ],
          [
            'Monitoring',
            'Can record urine output; reviewed every 2 to 3 days',
            'Continuous observation, fluid balance and serial bloods',
          ],
          [
            'Safety',
            'Reliable contact and guaranteed follow-up',
            'Follow-up cannot be assured or patient deteriorating',
          ],
          [
            'Analgesia',
            'Paracetamol first; avoid NSAIDs',
            'Paracetamol and opioids as needed; avoid NSAIDs',
          ],
          [
            'Fluids',
            'Drink to thirst; no fixed volume target',
            'Oral intake plus cautious intravenous crystalloid if depleted',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: outpatient care is safe only with controlled pain, adequate intake, stable observations and guaranteed review.',
        'Drink to thirst; there is no fixed minimum or maximum oral volume in the 2026 RCOG guidance.',
        'Admit for uncontrolled pain, vomiting, worsening markers, critical disease or any organ complication.',
      ],
      trap: {
        title: 'Examiner trap - forcing a fixed fluid target in OHSS',
        body: 'RCOG 2026 advises oral fluids according to thirst, with no fixed minimum or maximum volume. Forcing large volumes does not correct the third-space shift and can worsen discomfort.',
      },
      traps: [
        {
          title: '• Discharging a patient who cannot keep fluids down.',
        },
        {
          title: '• Setting a rigid litres-per-day target.',
        },
        {
          title: '• Failing to provide written return precautions.',
        },
      ],
    },
    {
      id: 'inpatient-management',
      heading: 'Inpatient Management: Pain, Paracentesis & Thromboprophylaxis',
      intro:
        'Inpatient care is supportive and directed at intravascular volume, renal perfusion, pain, nausea, respiratory compromise and thrombosis risk. Paracentesis relieves pressure and improves renal perfusion when medical measures are insufficient.',
      flow: [
        'Control pain with paracetamol and opioids; avoid NSAIDs',
        'Treat nausea and vomiting with antiemetics',
        'Correct intravascular depletion with cautious crystalloid',
        'Consider ultrasound-guided paracentesis for pressure, breathlessness or persistent oliguria',
        'Assess thrombosis risk and start mechanical or low-molecular-weight heparin prophylaxis',
        'Avoid routine diuretics and do not use albumin for routine correction',
        'Reassess symptoms, urine output, fluid balance and haematocrit after drainage',
      ],
      bullets: [
        'Analgesia: paracetamol first, with opioids if needed; antiemetics for nausea and vomiting.',
        'NSAID Avoidance: avoid non-steroidal anti-inflammatory drugs because renal function may be compromised.',
        'Fluid Strategy: encourage oral fluids to thirst; use intravenous crystalloid cautiously for genuine intravascular depletion or dehydration.',
        'Diuretics: not routine; consider only with multidisciplinary monitoring after adequate volume replacement and ascites drainage.',
        'Albumin: reserved for selected specialist volume-expansion indications, not routine correction of low albumin and not routine prevention.',
        'Paracentesis Indication: severe distension or pain, respiratory compromise, or persistent oliguria despite volume replacement.',
        'Paracentesis Technique: ultrasound-guided transabdominal drainage, with reassessment of symptoms, urine output, fluid balance and haematocrit afterwards.',
        'Post-Drainage Support: colloid or volume support if a large volume is drained or selected depletion occurs.',
        'Thromboprophylaxis: assess severity, pregnancy, mobility, body mass index, thrombophilia and admission status.',
        'Prophylaxis Choice: mechanical stockings and low-molecular-weight heparin if not contraindicated for moderate or severe, admitted or otherwise high-risk patients.',
        'Duration: individualised; pregnancy-associated OHSS requires low-molecular-weight heparin through the first trimester under RCOG 2026.',
        'Monitoring: serial haematocrit, electrolytes, renal function and urine output guide escalation.',
        'Critical Care: involve critical care and multidisciplinary teams for critical OHSS or organ failure.',
      ],
      table: {
        head: ['Intervention', 'Position & Caveat'],
        rows: [
          [
            'Paracentesis',
            'For severe pressure symptoms, respiratory compromise or persistent oliguria despite replacement; ultrasound-guided with post-drainage reassessment',
          ],
          [
            'Analgesia',
            'Paracetamol first; opioids if needed; avoid NSAIDs because of renal compromise',
          ],
          [
            'Intravenous fluids',
            'Cautious crystalloid for intravascular depletion or dehydration, not for third-space overload',
          ],
          [
            'Albumin',
            'Selected specialist volume expansion only; not routine correction or routine prevention',
          ],
          [
            'Diuretics',
            'Not routine; only with multidisciplinary monitoring after adequate volume replacement and drainage',
          ],
          [
            'Thromboprophylaxis',
            'Mechanical and low-molecular-weight heparin for moderate or severe, admitted or high-risk disease; individualise duration',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: paracentesis is indicated for pressure symptoms, respiratory compromise or persistent oliguria.',
        'Avoid NSAIDs, and do not use diuretics routinely.',
        'Pregnancy-associated OHSS needs low-molecular-weight heparin through the first trimester.',
      ],
      trap: {
        title: 'Examiner trap - giving a diuretic to a patient with ascites and oliguria',
        body: 'The oliguria reflects intravascular depletion, not fluid overload. Routine diuretics worsen hypovolaemia and are not recommended; treat the third-space shift and consider drainage instead.',
      },
      traps: [
        {
          title: '• Prescribing ibuprofen for OHSS pain.',
        },
        {
          title: '• Using albumin routinely to correct a low serum albumin.',
        },
        {
          title: '• Starting a diuretic before volume replacement and drainage.',
        },
      ],
    },
    {
      id: 'prevention',
      heading: 'Prevention: Antagonist Protocol, Agonist Trigger & Freeze-All',
      intro:
        'Prevention is stratified by ovarian response. High-risk cycles are managed with a GnRH-antagonist protocol, an individualised gonadotrophin dose, a GnRH-agonist trigger, cabergoline around the trigger and a freeze-all strategy.',
      flow: [
        'Identify high-risk women · polycystic ovary syndrome, high ovarian reserve, previous OHSS',
        'Use a GnRH-antagonist protocol rather than a long agonist protocol',
        'Individualise the gonadotrophin starting dose to the predicted response',
        'Consider a GnRH-agonist trigger instead of hCG in high-risk cycles',
        'Give cabergoline around the time of the trigger in at-risk cycles',
        'Freeze all embryos and plan interval frozen embryo replacement',
        'Do not rely on reduced-dose hCG alone or routine albumin prophylaxis',
      ],
      bullets: [
        'Risk Stratification: polycystic ovary syndrome, high antral follicle count or anti-Mullerian hormone, previous OHSS and a predicted excessive response.',
        'Protocol: a GnRH-antagonist protocol reduces OHSS risk compared with a long GnRH-agonist protocol.',
        'Gonadotrophin Dose: individualise the starting dose to predicted ovarian response rather than using a standard high dose.',
        'Trigger: a GnRH-agonist trigger substantially lowers OHSS risk in high-risk cycles and is preferred over hCG where appropriate.',
        'Cabergoline: considered around the time of the hCG trigger in at-risk cycles; it reduces VEGF-mediated permeability.',
        'Freeze-All: avoids the additional hCG exposure of a fresh transfer and allows the ovaries to recover before frozen embryo replacement.',
        'Reduced-Dose hCG: not a reliable stand-alone prevention strategy.',
        'Albumin: routine albumin prophylaxis is not recommended.',
        'Coasting: not a preferred primary prevention strategy; evidence and practice are limited.',
        'Cycle Cancellation: consider cancellation or conversion when the response is extreme and safer alternatives are unavailable.',
        'Counselling: explain the early versus late OHSS distinction and the return precautions before starting stimulation.',
        'Documentation: record the risk assessment, trigger choice and freeze-all decision in the cycle notes.',
        'Local Protocol: follow the fertility unit protocol and current ASRM and RCOG guidance.',
      ],
      table: {
        head: ['Prevention Measure', 'Role & Caveat'],
        rows: [
          [
            'GnRH-antagonist protocol',
            'Preferred in high-risk cycles; lowers OHSS risk compared with a long agonist protocol',
          ],
          [
            'Individualised gonadotrophin dose',
            'Reduces excessive follicular response; base it on predicted response',
          ],
          [
            'GnRH-agonist trigger',
            'Central prevention tool in high-risk cycles; avoids the long hCG effect',
          ],
          [
            'Cabergoline near trigger',
            'Reduces VEGF-mediated permeability in at-risk cycles',
          ],
          [
            'Freeze-all strategy',
            'Avoids fresh-transfer hCG exposure and allows ovarian recovery',
          ],
          [
            'Not recommended routinely',
            'Reduced-dose hCG alone, routine albumin prophylaxis and routine coasting',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: antagonist protocol, agonist trigger and freeze-all are the core prevention triad.',
        'Cabergoline around the trigger reduces VEGF-mediated permeability in at-risk cycles.',
        'Routine albumin prophylaxis is not recommended.',
      ],
      trap: {
        title: 'Examiner trap - using a reduced-dose hCG trigger as sole prevention',
        body: 'Reduced-dose hCG alone is not a reliable prevention strategy. High-risk cycles need a structured approach: antagonist protocol, individualised stimulation, agonist trigger where appropriate, cabergoline and freeze-all.',
      },
      traps: [
        {
          title: '• Choosing a long agonist protocol for a woman with polycystic ovary syndrome.',
        },
        {
          title: '• Giving routine albumin to prevent OHSS.',
        },
        {
          title: '• Performing a fresh transfer after early OHSS has developed.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'OHSS is an iatrogenic systemic capillary-leak syndrome.',
        'VEGF is the key mediator of increased capillary permeability.',
        'Third spacing and intravascular depletion coexist.',
        'Ascites, pleural effusion and rarely pericardial effusion are the third spaces.',
        'Haemoconcentration predisposes to venous and arterial thrombosis.',
        'Early OHSS begins within 7 days of the hCG trigger.',
        'Late OHSS begins at 10 days or more and is pregnancy-driven.',
        'Late OHSS is often more prolonged and more severe.',
        'Mild OHSS has haematocrit under 0.40.',
        'Moderate OHSS has ultrasound ascites and haematocrit under 0.45.',
        'Severe OHSS has haematocrit over 0.45.',
        'Critical OHSS has haematocrit over 0.55.',
        'Severe OHSS includes oliguria under 300 mL/day or 30 mL/hour.',
        'Critical OHSS includes anuria, thrombosis or ARDS.',
        'Sodium under 135, osmolality under 282, potassium over 5.0 and albumin under 35 are severe features.',
        'Ovarian size alone does not determine severity.',
        'Exclude torsion, rupture, ectopic pregnancy and infection in severe pain.',
        'Drink to thirst; there is no fixed oral volume target.',
        'Urine output under 1000 mL/24 h warrants review.',
        'Avoid NSAIDs because renal function may be compromised.',
        'Paracentesis is indicated for pressure symptoms, respiratory compromise or persistent oliguria.',
        'Do not use diuretics routinely.',
        'Routine albumin prophylaxis and routine albumin correction are not recommended.',
        'Pregnancy-associated OHSS needs LMWH through the first trimester.',
        'Antagonist protocol, agonist trigger and freeze-all are the core prevention tools.',
      ],
      traps: [
        {
          title: '• Calling OHSS simply ovarian enlargement.',
        },
        {
          title: '• Saying early OHSS is pregnancy-driven.',
        },
        {
          title: '• Grading severity from ovarian size.',
        },
        {
          title: '• Ignoring a falling urine output because the patient looks well.',
        },
        {
          title: '• Using 0.55 as the severe haematocrit cutoff.',
        },
        {
          title: '• Forcing a fixed daily fluid volume.',
        },
        {
          title: '• Prescribing NSAIDs for pain.',
        },
        {
          title: '• Giving a diuretic for ascites and oliguria.',
        },
        {
          title: '• Using albumin routinely to correct low albumin.',
        },
        {
          title: '• Relying on reduced-dose hCG alone for prevention.',
        },
        {
          title: '• Missing pulmonary embolism because D-dimer was negative.',
        },
        {
          title: '• Forgetting thromboprophylaxis in pregnancy-associated OHSS.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm14-f1',
      front: 'What is the central mediator of capillary leak in OHSS?',
      back: 'VEGF. It increases endothelial permeability, causing fluid to shift from the intravascular space into the peritoneal cavity, pleura and other third spaces.',
    },
    {
      id: 'm14-f2',
      front: 'What is the defining timing of early versus late OHSS?',
      back: 'Early OHSS begins within 7 days of the hCG trigger. Late OHSS generally begins 10 or more days after the trigger and is driven by endogenous hCG from pregnancy.',
    },
    {
      id: 'm14-f3',
      front: 'Why can a patient with OHSS be both overloaded and hypovolaemic?',
      back: 'Total-body fluid is increased in the third spaces while the intravascular volume is depleted. This is the compartment paradox that drives haemoconcentration and oliguria.',
    },
    {
      id: 'm14-f4',
      front: 'What haematocrit values define severe and critical OHSS?',
      back: 'Haematocrit over 0.45 is a severe feature. Haematocrit over 0.55 is a critical feature.',
    },
    {
      id: 'm14-f5',
      front: 'What urine output defines severe OHSS?',
      back: 'Oliguria under 300 mL/day or under 30 mL/hour. Urine output under 1000 mL/24 h warrants clinical review before the formal cutoff is reached.',
    },
    {
      id: 'm14-f6',
      front: 'Which features define critical OHSS?',
      back: 'Tense ascites or pleural effusions, haematocrit over 0.55, white cell count over 25,000, anuria, thrombosis or ARDS.',
    },
    {
      id: 'm14-f7',
      front: 'Does ovarian size grade OHSS severity?',
      back: 'No. Ovaries are usually under 8 cm in mild, 8 to 12 cm in moderate and often over 12 cm in severe disease, but size alone does not reliably track severity.',
    },
    {
      id: 'm14-f8',
      front: 'What are the outpatient requirements for OHSS care?',
      back: 'Controlled pain, adequate oral intake, stable observations, ability to record urine output, reliable contact with a 24-hour advice route and guaranteed review every 2 to 3 days.',
    },
    {
      id: 'm14-f9',
      front: 'When should a patient with OHSS be admitted?',
      back: 'Uncontrolled pain, vomiting that prevents intake, worsening symptoms or markers, severe or critical disease, unassured follow-up or any suspected respiratory, renal, thrombotic or haemodynamic complication.',
    },
    {
      id: 'm14-f10',
      front: 'How should oral fluids be managed in OHSS?',
      back: 'Encourage fluids according to thirst. RCOG 2026 specifies no fixed minimum or maximum volume, and excessive forced intake should be avoided.',
    },
    {
      id: 'm14-f11',
      front: 'Which analgesic should be avoided in OHSS and why?',
      back: 'NSAIDs, because renal function may be compromised. Use paracetamol first, with opioids if needed, and antiemetics for nausea.',
    },
    {
      id: 'm14-f12',
      front: 'When is paracentesis indicated in OHSS?',
      back: 'Severe distension or pain, respiratory compromise, or persistent oliguria despite volume replacement. It is ultrasound-guided with reassessment afterwards.',
    },
    {
      id: 'm14-f13',
      front: 'What is the role of diuretics and albumin in OHSS?',
      back: 'Diuretics are not routine and may worsen hypovolaemia. Albumin is reserved for selected specialist volume expansion, not routine correction of low albumin or routine prevention.',
    },
    {
      id: 'm14-f14',
      front: 'Which prevention measures are central in high-risk ovarian stimulation?',
      back: 'A GnRH-antagonist protocol, individualised gonadotrophin dose, GnRH-agonist trigger, cabergoline around the trigger and a freeze-all strategy.',
    },
    {
      id: 'm14-f15',
      front: 'What thromboprophylaxis applies to pregnancy-associated OHSS?',
      back: 'Low-molecular-weight heparin through the first trimester under RCOG 2026, with duration individualised to severity, mobility, body mass index and other risk factors.',
    },
  ],

  mcqs: [
    {
      id: 'm14-q1',
      stem: 'A woman develops abdominal bloating, ascites and oliguria 5 days after an hCG trigger for IVF. Which mechanism best explains her clinical picture?',
      options: [
        'Direct ovarian capsule rupture with haemoperitoneum',
        'VEGF-mediated capillary leak with third-space fluid shift',
        'Acute urinary tract obstruction by enlarged ovaries',
        'Hyperaldosteronism causing sodium and water retention',
      ],
      answerIndex: 1,
      explanation:
        'OHSS is a VEGF-driven capillary-leak syndrome. Fluid moves into third spaces, producing ascites and intravascular depletion with haemoconcentration and oliguria.',
    },
    {
      id: 'm14-q2',
      stem: 'A woman presents 12 days after her hCG trigger with worsening OHSS and a positive pregnancy test. Which statement is most accurate?',
      options: [
        'This is early OHSS driven by the exogenous trigger',
        'This pattern excludes pregnancy because hCG would suppress symptoms',
        'This is late OHSS driven by endogenous hCG and may be more prolonged',
        'Late OHSS never requires thromboprophylaxis',
      ],
      answerIndex: 2,
      explanation:
        'Onset at 10 days or more after the trigger with a positive pregnancy test indicates late OHSS. Endogenous hCG from the pregnancy drives it, and the course is often more prolonged and severe.',
    },
    {
      id: 'm14-q3',
      stem: 'A woman with OHSS has a haematocrit of 0.48, sodium of 132 mmol/L and urine output of 250 mL in 24 hours. How should this be graded?',
      options: [
        'Severe OHSS',
        'Mild OHSS',
        'Moderate OHSS',
        'Not OHSS because the ovaries are only 9 cm',
      ],
      answerIndex: 0,
      explanation:
        'Haematocrit over 0.45, sodium under 135 mmol/L and oliguria under 300 mL/day are all severe features. Ovarian size does not downgrade the severity.',
    },
    {
      id: 'm14-q4',
      stem: 'Which set of findings best defines critical OHSS?',
      options: [
        'Haematocrit 0.42 with mild bloating',
        'Ovaries 10 cm with ultrasound ascites',
        'Haematocrit 0.46 with sodium 134 mmol/L',
        'Haematocrit 0.58 with anuria and suspected thrombosis',
      ],
      answerIndex: 3,
      explanation:
        'Critical OHSS includes haematocrit over 0.55, anuria, thrombosis or ARDS, and tense ascites or pleural effusions.',
    },
    {
      id: 'm14-q5',
      stem: 'A woman with moderate OHSS is stable, drinking well and has controlled pain. What is the most appropriate fluid instruction?',
      options: [
        'Drink at least 4 litres of water daily',
        'Drink according to thirst with no fixed volume target',
        'Restrict fluids to 1 litre daily',
        'Receive routine intravenous diuretics',
      ],
      answerIndex: 1,
      explanation:
        'RCOG 2026 advises oral fluids according to thirst, with no fixed minimum or maximum volume. Forced intake or restriction is not recommended.',
    },
    {
      id: 'm14-q6',
      stem: 'A woman with severe OHSS has tense ascites, breathlessness and persistent oliguria despite intravenous crystalloid. What is the next most appropriate step?',
      options: [
        'Start furosemide to increase urine output',
        'Give routine albumin to correct the low albumin',
        'Arrange ultrasound-guided paracentesis',
        'Discharge with oral analgesia and review in one week',
      ],
      answerIndex: 2,
      explanation:
        'Paracentesis is indicated for severe pressure symptoms, respiratory compromise or persistent oliguria despite volume replacement. Diuretics are not routine and can worsen hypovolaemia.',
    },
    {
      id: 'm14-q7',
      stem: 'Which analgesic plan is most appropriate for a woman admitted with OHSS?',
      options: [
        'Regular ibuprofen with a proton-pump inhibitor',
        'Diclofenac suppositories for rapid relief',
        'Aspirin plus codeine',
        'Paracetamol first, with opioids if needed, avoiding NSAIDs',
      ],
      answerIndex: 3,
      explanation:
        'NSAIDs should be avoided because renal function may be compromised in OHSS. Paracetamol is first-line, with opioids for additional control and antiemetics as required.',
    },
    {
      id: 'm14-q8',
      stem: 'Which prevention strategy is most appropriate for a woman with polycystic ovary syndrome and a predicted excessive response?',
      options: [
        'GnRH-antagonist protocol with agonist trigger and freeze-all',
        'Long GnRH-agonist protocol with high-dose gonadotrophin',
        'Fresh embryo transfer with routine albumin prophylaxis',
        'Reduced-dose hCG trigger alone',
      ],
      answerIndex: 0,
      explanation:
        'High-risk cycles are managed with an antagonist protocol, individualised gonadotrophin dosing, a GnRH-agonist trigger, cabergoline around the trigger and freeze-all. Reduced-dose hCG alone and routine albumin are not reliable.',
    },
    {
      id: 'm14-q9',
      stem: 'A woman with OHSS is pregnant after fresh transfer. Which thromboprophylaxis statement is correct?',
      options: [
        'No prophylaxis is needed unless she is admitted',
        'Low-molecular-weight heparin should continue through the first trimester under RCOG 2026',
        'Warfarin is the preferred agent in the first trimester',
        'Prophylaxis should be stopped as soon as the ascites resolves',
      ],
      answerIndex: 1,
      explanation:
        'Pregnancy-associated OHSS requires low-molecular-weight heparin through the first trimester, with duration individualised. Warfarin is contraindicated in early pregnancy.',
    },
    {
      id: 'm14-q10',
      stem: 'A woman with severe OHSS develops sudden unilateral calf swelling and pleuritic chest pain. What is the most appropriate interpretation?',
      options: [
        'This is expected third spacing and needs only more fluid',
        'It confirms critical OHSS and requires only paracentesis',
        'Thrombosis must be excluded with appropriate imaging; D-dimer alone cannot rule it out',
        'Symptoms are due to anaemia and require transfusion',
      ],
      answerIndex: 2,
      explanation:
        'Haemoconcentration predisposes to venous thrombosis and pulmonary embolism. Arrange appropriate imaging; D-dimer is not a stand-alone rule-out test in pregnancy or OHSS.',
    },
  ],
};
