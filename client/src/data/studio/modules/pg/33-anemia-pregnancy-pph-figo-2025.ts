import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 33 - Anemia in Pregnancy and Prevention of PPH (FIGO 2025)
 * ---------------------------------------------------------------------------
 * Source: Ubom AE et al. "FIGO good practice recommendations on anemia in
 * pregnancy, to reduce the incidence and impact of postpartum hemorrhage (PPH)".
 * Int J Gynecol Obstet 2025;171:993-1007 (DOI 10.1002/ijgo.70529).
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const ANEMIA_PREGNANCY_PPH_FIGO_2025_MODULE: StudioModule = {
  id: 'pg-mod-33-anemia-pregnancy-pph-figo-2025',
  track: 'NEET_PG',
  title: 'Anemia in Pregnancy and Prevention of PPH (FIGO 2025)',
  shortTitle: 'Anemia in Pregnancy & PPH',
  summary:
    'Complete PG revision module on the FIGO 2025 good practice recommendations on anemia in pregnancy and postpartum haemorrhage. Features the global burden (32 million pregnant women, 36%), the universal haemoglobin cutoff below 11.0 g/dL versus the 2024 WHO trimester-specific cutoff (10.5 g/dL in the second trimester), severity classes, screening at booking and 28 weeks, ferritin below 30 µg/L, iron prophylaxis 30-60 mg and treatment 60-120 mg, intermittent 120 mg weekly, parenteral iron indications, transfusion, folic acid regimens (400 µg, 2.8 mg weekly, 5 mg), vitamin B12, multiple micronutrients with 15 nutrients, malaria IPTp-SP with the high-dose folic acid interaction, anthelminthics, hemoglobinopathy care and how anaemia raises PPH risk, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline: 'Hb <11 g/dL everywhere; ferritin <30; screen at booking + 28 w; fix anaemia to prevent PPH.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'FIGO 2025',
    'Anemia in Pregnancy',
    'Hb <11 g/dL',
    'Ferritin <30',
    'Oral Iron',
    'Parenteral Iron',
    'Folic Acid 5 mg',
    'Multiple Micronutrients',
    'IPTp-SP',
    'Sickle Cell / Thalassemia',
    'PPH Prevention',
    'Hepcidin',
  ],
  sourceTag: 'FIGO good practice recommendations: anemia in pregnancy and PPH (IJGO 2025;171:993-1007)',
  updatedAtISO: '2026-11-17T18:00:00.000Z',
  notes: [
    {
      id: 'burden-definition',
      heading: 'Burden, Definition and Screening',
      intro:
        'Anaemia affects 32 million (36%) pregnant women globally and contributes yearly to more than 115,000 maternal and 591,000 perinatal deaths. FIGO recommends a single haemoglobin cutoff of <11.0 g/dL for all trimesters, the postpartum period, settings and populations.',
      flow: [
        'Screen all women: FBC at booking',
        'Repeat FBC at 28 weeks',
        'Hb <11.0 g/dL = anaemia',
        'Classify severity',
        'Look for the cause; ferritin <30 µg/L = iron deficiency',
        'Treat; recheck',
      ],
      bullets: [
        'Burden: 32 million (36%) pregnant women; LMICs 48.7%; Africa 57.1%, South-East Asia 48.2%, Americas 24.1%; HIC ~15%.',
        'WHO Target: 50% reduction by 2025 (to 15%) missed; prevalence fell only from 43% (1995) to 36% (2019).',
        'Screening: FBC at booking and 28 weeks (strong, low); Hb or haematocrit in resource-limited settings (conditional, low).',
        'FIGO Definition: Hb <11.0 g/dL in all trimesters and postpartum, universally (strong, low).',
        'Severity: mild 10.0-10.9, moderate 7.0-9.9, severe <7.0 g/dL (conditional, low).',
        'WHO 2024: <11.0 g/dL in T1 and T3, <10.5 g/dL in T2 (mild 9.5-10.4, moderate 7.0-9.4 in T2) because of haemodilution; ACOG/CDC same.',
        'UK: <11.0 T1, <10.5 T2/T3, <10.0 postpartum; some African settings use <10.0 g/dL.',
        'Causes: iron, folate, B12, vitamin A deficiency; hemoglobinopathy; haemorrhage; HIV/TB; haemolytic/aplastic anaemia; malaria, schistosomiasis, hookworm.',
        'Iron Deficiency: causes ~50% of anaemia in pregnancy.',
        'Diagnosis of IDA: serum ferritin <30 µg/L; if no ferritin, Hb rise ≥1 g/dL after 2 weeks oral iron is diagnostic; may presume IDA if Hb <11 without comorbidity.',
      ],
      table: {
        head: ['Classification', 'FIGO (all)', 'WHO 2024 T2'],
        rows: [
          ['Anaemia', '<11.0 g/dL', '<10.5 g/dL (T1/T3 <11.0)'],
          ['Mild', '10.0-10.9', '9.5-10.4'],
          ['Moderate', '7.0-9.9', '7.0-9.4'],
          ['Severe', '<7.0', '<7.0'],
        ],
      },
      pearls: [
        'Golden Pearl: FIGO — screen with FBC at booking and 28 weeks; Hb <11.0 g/dL defines anaemia in every trimester.',
        'Serum ferritin <30 µg/L diagnoses iron deficiency anaemia.',
        'Hb rise ≥1 g/dL after 2 weeks of iron confirms IDA when ferritin unavailable.',
      ],
      trap: {
        title: 'Examiner trap - quoting the WHO 10.5 g/dL second-trimester cutoff as FIGO',
        body: 'WHO 2024 uses <10.5 g/dL in T2, but FIGO recommends a single universal cutoff of <11.0 g/dL (including postpartum) for uniformity and to lower PPH risk.',
      },
      traps: [
        { title: '• Using <10 g/dL as anaemia (as in some African settings).' },
        { title: '• Screening only at booking.' },
      ],
    },
    {
      id: 'iron-prophylaxis-treatment',
      heading: 'Iron: Requirements, Prophylaxis and Treatment',
      intro:
        'Iron needs rise ~10-fold (total ~1200 mg); diet alone cannot meet them and up to 40% start pregnancy with depleted stores.',
      flow: [
        'Prophylaxis: 30-60 mg elemental iron daily',
        'Not tolerated: 120 mg weekly',
        'IDA: oral 60-120 mg daily',
        'Poor response / late / severe: parenteral iron (after T1)',
        'Severe/decompensated: transfusion',
        'After Hb ≥11: 30-60 mg for ≥3 months or 6 weeks postpartum',
      ],
      bullets: [
        'Requirements: ~4.4 mg/day average; 0.8 mg (T1), 4-5 mg (T2), 7.5 mg (T3), up to 10 mg in last 6-8 weeks.',
        'Absorption: heme iron (Fe2+) 15-35%, non-heme (Fe3+) 1-15%; absorption rises to ~30% in pregnancy.',
        'Enhancers: gastric acid, vitamin C, retinol, carotenes. Inhibitors: phytates, calcium, antacids, PPIs, tea/coffee, soy, milk, eggs, thyroxine.',
        'Prophylaxis: 30-60 mg elemental iron daily for all (strong, high); 60 mg where IDA affects ≥40%, or with previous anaemia, multiple pregnancy, interval <1 year, vegetarians.',
        'Intermittent: 120 mg weekly if daily not tolerated (strong, high) or where IDA <20%.',
        'Taking Iron: morning on an empty stomach (1 h before or 2 h after food), 1 h before/2 h after inhibitors; vitamin C optional (conditional, low).',
        'Treatment: oral iron first line 60-120 mg/day (strong, low) until Hb ≥11 g/dL, then 30-60 mg/day for ≥3 months or 6 weeks postpartum, whichever is longer.',
        'Hepcidin: rises for up to 48 h after a dose; doses >60 mg amplify it and reduce absorption; alternate-day lower dosing improves tolerability.',
        'Parenteral Iron: oral failure (<1 g/dL rise at 2 weeks or <2 g/dL at 4 weeks), intolerance, non-compliance, moderate-severe IDA, IDA within 4-6 weeks of delivery, malabsorption (gastric surgery, IBD) (strong, high); not in first trimester.',
        'Transfusion: severe anaemia near term, acute severe bleeding or risk of further bleeding, symptomatic anaemia with haemodynamic/cardiac compromise (strong, low).',
      ],
      table: {
        head: ['Scenario', 'Iron regimen'],
        rows: [
          ['Prophylaxis', '30-60 mg elemental iron daily'],
          ['High risk / ≥40% prevalence', '60 mg daily'],
          ['Intolerance', '120 mg weekly'],
          ['Treat IDA', '60-120 mg daily until Hb ≥11'],
          ['Maintenance', '30-60 mg for ≥3 months or 6 weeks postpartum'],
          ['Parenteral', 'After T1: failure, intolerance, late/severe, malabsorption'],
        ],
      },
      pearls: [
        'Golden Pearl: prophylaxis 30-60 mg; treatment 60-120 mg; continue until stores replete (≥3 months or 6 weeks postpartum).',
        'Parenteral iron is avoided in the first trimester.',
        'Take iron away from tea, coffee, calcium and antacids.',
      ],
      trap: {
        title: 'Examiner trap - old FIGO treatment dose of 100-200 mg',
        body: 'The 2025 recommendation is 60-120 mg/day because hepcidin rises after dosing and higher doses reduce fractional absorption.',
      },
      traps: [
        { title: '• Giving IV iron in the first trimester.' },
        { title: '• Stopping iron as soon as Hb normalises.' },
      ],
    },
    {
      id: 'folate-b12-micronutrients',
      heading: 'Folic Acid, Vitamin B12 and Multiple Micronutrients',
      intro:
        'Folic acid prevents neural tube defects and maternal anaemia; dose depends on risk. Routine B12 is not recommended; multiple micronutrients are preferred in LMICs.',
      flow: [
        'All women of childbearing age: 400 µg ≥2-3 months pre-pregnancy to 12 weeks',
        'Continue 400 µg with iron through pregnancy',
        'High risk: 5 mg from 2-3 months pre-pregnancy to 12 weeks, then 400 µg',
        'Hemoglobinopathy, BMI ≥30, anti-folate drugs: 5 mg',
      ],
      bullets: [
        'Daily Folic Acid: 400 µg (strong, high) with iron for all pregnant women.',
        'NTD Prevention: 400 µg daily at least 2-3 months before pregnancy until 12 weeks, continued through pregnancy.',
        'Intermittent: 2.8 mg weekly is effective (strong, high); consider if daily iron/folic acid not tolerated or anaemia prevalence <20%.',
        'High-Dose 5 mg: women at high risk of NTD (from 2-3 months before to 12 weeks, then 400 µg); women with hemoglobinopathy, BMI ≥30 or anti-folate drugs need 5 mg/day throughout pregnancy; intermittent dosing not for them.',
        'Folic Acid Timing: empty stomach gives highest bioavailability.',
        'Vitamin B12: not enough evidence for routine supplementation (conditional, low).',
        'MMS Preference: multiple micronutrient supplements (with iron and folic acid) over iron-folic acid alone in LMICs and high-deficiency populations (strong, high).',
        'MMS Content: 15 micronutrients — folic acid, iron, copper, iodine, selenium, vitamins A, B1, B2, B3, B6, B12, C, D, E and zinc.',
        'MMS Dosing: once daily throughout pregnancy; weekly dosing not recommended; avoid products with >30 mg iron (add extra iron tablets if 60-120 mg needed).',
        'MMS and NTD: 400 µg folic acid for low risk; 5 mg for high risk (add extra tablet if needed).',
      ],
      table: {
        head: ['Group', 'Folic acid'],
        rows: [
          ['All women of childbearing age', '400 µg daily, ≥2-3 months before to 12 weeks, then with iron throughout'],
          ['Intermittent option', '2.8 mg weekly'],
          ['High NTD risk', '5 mg from 2-3 months before to 12 weeks, then 400 µg'],
          ['Hemoglobinopathy / BMI ≥30 / anti-folate drugs', '5 mg daily throughout'],
          ['MMS iron limit', '≤30 mg per tablet'],
        ],
      },
      pearls: [
        'Golden Pearl: 400 µg for all; 5 mg for high-risk and for hemoglobinopathy, BMI ≥30 or anti-folate drugs.',
        'MMS contains 15 micronutrients and should replace IFA alone in LMICs.',
        'Routine vitamin B12 supplementation is not recommended.',
      ],
      trap: {
        title: 'Examiner trap - weekly folic acid for sickle cell or obesity',
        body: 'Intermittent 2.8 mg weekly is not recommended for women with hemoglobinopathy, BMI ≥30 or on anti-folate drugs, who need 5 mg daily.',
      },
      traps: [
        { title: '• Using MMS with >30 mg iron for treatment.' },
        { title: '• Routine B12 in all pregnant women.' },
      ],
    },
    {
      id: 'malaria-helminths',
      heading: 'Malaria and Helminth Prophylaxis',
      intro:
        'In endemic areas intermittent preventive treatment with sulfadoxine-pyrimethamine (IPTp-SP) and anthelminthics reduce anaemia.',
      flow: [
        'Endemic area: IPTp-SP from early second trimester',
        'Doses ≥4 weeks apart; ≥3 doses before birth',
        'Directly observed in clinic',
        'Avoid 5 mg folic acid with SP',
        'Helminths: single albendazole/mebendazole after T1 if criteria met',
      ],
      bullets: [
        'IPTp-SP: all pregnant women in endemic areas, start early in T2, ≥4 weeks apart, at least 3 doses before birth (strong, high).',
        'Administration: DOT in ANC, 3 tablets SP (1500 mg sulfadoxine/75 mg pyrimethamine).',
        'Folic Acid Interaction: 5 mg folic acid must not be co-administered with SP (counteracts efficacy); consider 400 µg-1.5 mg for 14 days after SP.',
        'Contraindications to SP: <13 weeks, other sulfa-containing prophylaxis (e.g. co-trimoxazole), allergy.',
        'Allergy: LLINs and prompt treatment; limited evidence for alternatives.',
        'Anthelminthic: single 400 mg albendazole or 500 mg mebendazole after first trimester where helminthiasis prevalence ≥20% and anaemia ≥40% (conditional, low).',
      ],
      table: {
        head: ['Intervention', 'Key point'],
        rows: [
          ['IPTp-SP', 'From T2, ≥3 doses, ≥4 weeks apart, DOT'],
          ['SP contraindicated', '<13 weeks, sulfa drugs, allergy'],
          ['Folic acid 5 mg', 'Not with SP'],
          ['Albendazole 400 mg / mebendazole 500 mg', 'After T1 if helminths ≥20% and anaemia ≥40%'],
        ],
      },
      pearls: [
        'Golden Pearl: high-dose folic acid (5 mg) blunts SP efficacy; switch to low-dose for 14 days after SP.',
        'SP is not given before 13 weeks.',
      ],
      trap: {
        title: 'Examiner trap - giving 5 mg folic acid with IPTp-SP',
        body: 'It counteracts SP; use lower-dose folic acid for 14 days after IPT.',
      },
    },
    {
      id: 'hemoglobinopathy',
      heading: 'Hemoglobinopathy in Pregnancy',
      intro:
        'All pregnant women should be screened with FBC and haemoglobin electrophoresis at booking. Care differs from nutritional anaemia.',
      bullets: [
        'Screening: FBC + Hb electrophoresis at booking (strong, low).',
        'Folic Acid: 5 mg/day from 2-3 months before and throughout pregnancy; intermittent dosing not recommended in sickle cell disease.',
        'Iron: only if laboratory iron deficiency (ferritin <30 µg/L); where ferritin unavailable, 30 mg/day is safe in SCD without repeated transfusion; contraindicated with repeated transfusions; intermittent 120 mg weekly if intolerant.',
        'MMS: beneficial in SCD (malnutrition risk).',
        'Transfusion in SCD: acute anaemia if Hb <5-7 g/dL, or >2 g/dL below steady state, or >20% fall; no routine prophylactic transfusion.',
        'Thalassaemia: maintain Hb at target 10 g/dL with transfusion.',
        'Malaria: daily proguanil prophylaxis for SCD in endemic areas (strong, high).',
      ],
      table: {
        head: ['Item', 'Recommendation'],
        rows: [
          ['Screening', 'FBC + Hb electrophoresis at booking'],
          ['Folic acid', '5 mg daily'],
          ['Iron', 'Only if ferritin <30 µg/L'],
          ['Prophylactic transfusion in SCD', 'Not recommended'],
          ['Thalassaemia target Hb', '10 g/dL'],
          ['Malaria prophylaxis in SCD', 'Daily proguanil'],
        ],
      },
      pearls: [
        'Golden Pearl: iron only if deficient in hemoglobinopathy; folic acid 5 mg daily; no routine prophylactic transfusion in SCD.',
        'Iron is contraindicated with repeated transfusions.',
      ],
      trap: {
        title: 'Examiner trap - routine iron in all sickle cell pregnancies',
        body: 'Iron should be given only with laboratory evidence of deficiency (or low-dose 30 mg when ferritin is unavailable and no repeated transfusion).',
      },
    },
    {
      id: 'anemia-pph',
      heading: 'Anaemia and Postpartum Haemorrhage',
      intro:
        'Maternal anaemia is a significant risk factor for PPH morbidity and mortality; preventing and correcting antepartum anaemia is an effective strategy to reduce PPH.',
      flow: [
        'Antepartum anaemia',
        'Reduced oxygen-carrying capacity; low viscosity, tachycardia, high output',
        'Fragile clots prone to fibrinolysis; uterine hypoxia',
        'Uterine atony',
        'PPH with poor tolerance of blood loss',
      ],
      bullets: [
        'Tolerance: in severe anaemia as little as 250 mL blood loss may compromise haemodynamics; healthy women tolerate up to ~1000 mL.',
        'Mechanisms: lower viscosity and haematocrit with compensatory tachycardia and increased cardiac output increase flow from bleeding vessels.',
        'Clot Quality: anaemic clots are fragile and more susceptible to fibrinolysis.',
        'Atony: uterine hypoxia impairs myometrial contractility; atony is the commonest cause of PPH.',
        'Recommendation 45: universal Hb <11.0 g/dL to diagnose anaemia reduces PPH risk (strong, low); women starting pregnancy with Hb ≥11 tolerate more blood loss than those at 10 g/dL.',
        'Recommendation 46: prevention, screening and correction of antepartum anaemia is an effective strategy to reduce PPH (strong, high).',
      ],
      table: {
        head: ['Link between anaemia and PPH', 'Detail'],
        rows: [
          ['Blood loss tolerance', '~250 mL in severe anaemia vs ~1000 mL in healthy'],
          ['Mechanism 1', 'Low viscosity + tachycardia → greater flow'],
          ['Mechanism 2', 'Fragile clots, fibrinolysis'],
          ['Mechanism 3', 'Uterine hypoxia → atony'],
          ['Strategy', 'Prevent/screen/correct antepartum anaemia (strong, high)'],
        ],
      },
      pearls: [
        'Golden Pearl: correcting antepartum anaemia is an effective strategy against PPH (strong, high).',
        'Uterine hypoxia from anaemia contributes to atony.',
      ],
      trap: {
        title: 'Examiner trap - treating anaemia only after birth',
        body: 'Anaemia must be prevented, screened for and corrected antepartum; waiting until after delivery leaves the woman vulnerable to PPH.',
      },
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Fifteen rapid-fire points to lock in before the exam.',
      pearls: [
        'Anaemia affects 36% of pregnant women worldwide.',
        'FIGO: Hb <11.0 g/dL in all trimesters and postpartum.',
        'Screen at booking and 28 weeks.',
        'Mild 10-10.9, moderate 7-9.9, severe <7 g/dL.',
        'Ferritin <30 µg/L = iron deficiency.',
        'Prophylaxis 30-60 mg; treatment 60-120 mg elemental iron.',
        '120 mg weekly if daily iron not tolerated.',
        'Parenteral iron after first trimester for failure, intolerance, late/severe anaemia.',
        'Folic acid 400 µg for all; 5 mg for high risk, BMI ≥30, hemoglobinopathy, anti-folate drugs.',
        'Weekly folic acid 2.8 mg is an option for low-risk women.',
        'No routine B12 supplementation.',
        'MMS: 15 micronutrients, ≤30 mg iron.',
        'IPTp-SP from T2, ≥3 doses; not <13 weeks; not with 5 mg folic acid.',
        'Hemoglobinopathy: iron only if ferritin <30; no prophylactic transfusion in SCD.',
        'Correcting antepartum anaemia reduces PPH.',
      ],
      traps: [
        { title: '• Using the WHO trimester-specific cutoff as FIGO.' },
        { title: '• 5 mg folic acid together with SP.' },
        { title: '• Routine iron in sickle cell without deficiency.' },
        { title: '• IV iron in the first trimester.' },
      ],
    },
  ],

  flashcards: [
    { id: 'm33-f1', front: 'Global burden of anaemia in pregnancy?', back: '32 million (36%) pregnant women; >115,000 maternal and 591,000 perinatal deaths yearly; LMICs 48.7%, Africa 57.1%. WHO target of 15% by 2025 missed.' },
    { id: 'm33-f2', front: 'FIGO definition of anaemia in pregnancy?', back: 'Hb <11.0 g/dL in all trimesters, postpartum, in all settings and populations (strong, low).' },
    { id: 'm33-f3', front: 'Severity classification?', back: 'Mild 10.0-10.9, moderate 7.0-9.9, severe <7.0 g/dL.' },
    { id: 'm33-f4', front: 'How does WHO 2024 differ from FIGO?', back: 'WHO: <11.0 g/dL in T1 and T3 and <10.5 g/dL in T2 (hemodilution). FIGO keeps a single cutoff of <11.0 g/dL.' },
    { id: 'm33-f5', front: 'When to screen and how to diagnose iron deficiency?', back: 'FBC at booking and 28 weeks. Serum ferritin <30 µg/L diagnoses IDA; or Hb rise ≥1 g/dL after 2 weeks of oral iron.' },
    { id: 'm33-f6', front: 'Iron requirements across pregnancy?', back: 'Total ~1200 mg; 0.8 mg/day T1, 4-5 mg T2, 7.5 mg T3, up to 10 mg in last 6-8 weeks.' },
    { id: 'm33-f7', front: 'Iron prophylaxis dosing?', back: '30-60 mg elemental iron daily; 60 mg if IDA affects ≥40%, previous anaemia, twins, interval <1 year or vegetarian; 120 mg weekly if not tolerated.' },
    { id: 'm33-f8', front: 'Iron treatment regimen?', back: 'Oral 60-120 mg/day until Hb ≥11, then 30-60 mg/day for ≥3 months or 6 weeks postpartum. Hepcidin limits absorption of higher doses.' },
    { id: 'm33-f9', front: 'Indications for parenteral iron?', back: 'Poor response (<1 g/dL at 2 weeks or <2 g/dL at 4 weeks), intolerance, non-compliance, moderate-severe IDA, IDA within 4-6 weeks of delivery, malabsorption; not in T1.' },
    { id: 'm33-f10', front: 'Folic acid recommendations?', back: '400 µg for all from 2-3 months pre-pregnancy; 2.8 mg weekly alternative for low risk; 5 mg for high NTD risk (to 12 weeks) and for hemoglobinopathy, BMI ≥30 or anti-folate drugs (throughout).' },
    { id: 'm33-f11', front: 'MMS vs IFA?', back: 'MMS with iron and folic acid preferred in LMICs; 15 micronutrients; once daily; ≤30 mg iron per tablet; no weekly dosing.' },
    { id: 'm33-f12', front: 'IPTp-SP rules?', back: 'From early T2, ≥3 doses ≥4 weeks apart, DOT; contraindicated <13 weeks, with other sulfa drugs or allergy; 5 mg folic acid counteracts SP.' },
    { id: 'm33-f13', front: 'Hemoglobinopathy care?', back: 'FBC + electrophoresis at booking; folic acid 5 mg; iron only if ferritin <30 µg/L; no routine prophylactic transfusion in SCD; thalassaemia Hb target 10 g/dL; proguanil in endemic SCD.' },
    { id: 'm33-f14', front: 'Transfusion threshold in SCD?', back: 'Acute anaemia with Hb <5-7 g/dL, >2 g/dL below steady state, or >20% fall.' },
    { id: 'm33-f15', front: 'How does anaemia increase PPH risk?', back: 'Lower viscosity with tachycardia raises bleeding, fragile clots with fibrinolysis, uterine hypoxia causing atony, and poor tolerance (250 mL in severe anaemia vs ~1000 mL). Correct antepartum anaemia (strong, high).' },
  ],

  mcqs: [
    {
      id: 'm33-q1',
      stem: 'What haemoglobin cutoff does FIGO recommend for diagnosing anaemia in pregnancy?',
      options: ['<10.0 g/dL', '<10.5 g/dL', '<11.0 g/dL in all trimesters', '<12.0 g/dL'],
      answerIndex: 2,
      explanation: 'FIGO recommends a universal <11.0 g/dL in all trimesters and postpartum.',
    },
    {
      id: 'm33-q2',
      stem: 'When should all pregnant women be screened for anaemia?',
      options: ['At booking only', 'At booking and 28 weeks', 'At 36 weeks only', 'Only if symptomatic'],
      answerIndex: 1,
      explanation: 'FBC at booking and 28 weeks (strong, low).',
    },
    {
      id: 'm33-q3',
      stem: 'A pregnant woman has Hb 8.5 g/dL. How is this classified?',
      options: ['Mild', 'Moderate', 'Severe', 'Normal'],
      answerIndex: 1,
      explanation: 'Moderate anaemia is 7.0-9.9 g/dL.',
    },
    {
      id: 'm33-q4',
      stem: 'What serum ferritin level is diagnostic of iron deficiency anaemia in pregnancy?',
      options: ['<30 µg/L', '<100 µg/L', '<200 µg/L', '<300 µg/L'],
      answerIndex: 0,
      explanation: 'Ferritin <30 µg/L.',
    },
    {
      id: 'm33-q5',
      stem: 'A woman cannot tolerate daily oral iron. What is the recommended alternative?',
      options: ['Stop iron', '120 mg elemental iron weekly', '500 mg daily', 'Routine IV iron in first trimester'],
      answerIndex: 1,
      explanation: 'Intermittent supplementation with 120 mg elemental iron weekly (strong, high).',
    },
    {
      id: 'm33-q6',
      stem: 'Which woman should receive parenteral iron?',
      options: ['Mild anaemia at 8 weeks', 'Moderate IDA at 35 weeks', 'Normal Hb', 'Anaemia responding well to oral iron'],
      answerIndex: 1,
      explanation: 'IDA within 4-6 weeks of anticipated delivery (and moderate-severe disease) warrants parenteral iron; avoid in the first trimester.',
    },
    {
      id: 'm33-q7',
      stem: 'A woman with BMI 34 plans pregnancy. What folic acid dose is recommended?',
      options: ['400 µg daily', '2.8 mg weekly', '5 mg daily from 2-3 months before pregnancy', 'None'],
      answerIndex: 2,
      explanation: 'BMI ≥30, hemoglobinopathy or anti-folate drugs need 5 mg daily; intermittent dosing is not recommended.',
    },
    {
      id: 'm33-q8',
      stem: 'Why should 5 mg folic acid not be given on the day of IPTp-SP?',
      options: ['It causes hypotension', 'It counteracts SP efficacy', 'It causes kernicterus', 'It binds iron'],
      answerIndex: 1,
      explanation: 'High-dose folic acid counteracts sulfadoxine-pyrimethamine; low-dose for 14 days after SP may be considered.',
    },
    {
      id: 'm33-q9',
      stem: 'IPTp-SP is contraindicated before:',
      options: ['8 weeks', '13 weeks', '20 weeks', '28 weeks'],
      answerIndex: 1,
      explanation: 'SP is contraindicated before 13 weeks, with other sulfa drugs and in allergy.',
    },
    {
      id: 'm33-q10',
      stem: 'Which statement about anaemia and PPH is correct?',
      options: ['Anaemia has no effect on PPH', 'Correcting antepartum anaemia is an effective strategy to reduce PPH', 'Only postpartum iron matters', 'Uterine atony is rare in anaemia'],
      answerIndex: 1,
      explanation: 'Anaemia increases PPH risk (atony, fragile clots, poor tolerance); antepartum correction is strongly recommended (strong, high).',
    },
  ],
};
