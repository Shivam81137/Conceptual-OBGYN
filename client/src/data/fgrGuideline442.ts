import type { StudioModule } from '@/data/revisionStudio';

/**
 * NEET PG & INI-CET · Module 02 — Fetal Growth Restriction (SOGC No. 442)
 * ---------------------------------------------------------------------------
 * Complete clinical vault for SOGC Clinical Practice Guideline No. 442
 * (J Obstet Gynaecol Can 2023;45(10):102154): SGA vs pathological FGR,
 * the International Delphi Consensus diagnostic criteria, angiogenic
 * biomarkers, multi-vessel Doppler progression, the TRUFFLE-style delivery
 * ladder and every examiner trap from the source analysis.
 *
 * Offline-first: all notes, simulator inputs, flashcards and MCQs ship in the
 * client bundle. The API only reconciles the module index.
 */

export const FGR_GUIDELINE_442_MODULE: StudioModule = {
  id: 'pg-mod-02-fgr',
  track: 'NEET_PG',
  title: 'Fetal Growth Restriction (SOGC Guideline No. 442)',
  shortTitle: 'FGR · SOGC 442',
  summary:
    'SOGC No. 442 in one vault: SGA vs pathological FGR, Early (<32w) vs Late (≥32w) Delphi criteria, PlGF and sFlt-1/PlGF stratification, the UtA → UA → MCA/CPR → DV Doppler cascade, steroid transient vasodilation and stage-based delivery timing.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 38,
  tags: [
    'FGR',
    'Delphi Consensus',
    'Umbilical & DV Doppler',
    'PlGF',
    'Delivery Timing',
    'Doppler',
    'AEDV',
    'REDV',
    'Ductus Venosus',
  ],
  sourceTag: 'SOGC Clinical Practice Guideline No. 442 • J Obstet Gynaecol Can 2023;45(10):102154',
  updatedAtISO: '2026-10-19T06:00:00.000Z',
  notes: [
    /* ==================================================================== */
    /* 1. SGA vs pathological FGR & biometry thresholds                     */
    /* ==================================================================== */
    {
      id: 'sga-vs-fgr',
      heading: 'SGA vs. Pathological FGR & Biometry Thresholds',
      intro:
        'SGA is a statistical label; FGR is a pathological diagnosis. SOGC No. 442 separates the constitutionally small fetus from the growth-restricted fetus using biometry, growth velocity and placental Doppler — because only the latter carries the stillbirth and long-term morbidity signal.',
      table: {
        head: ['Term', 'Definition', 'Clinical significance'],
        rows: [
          [
            'Small for gestational age (SGA)',
            'EFW or AC < 10th percentile for gestational age on a validated reference chart.',
            'Includes constitutionally small, healthy fetuses (~60–70%) who reach their genetic growth potential without placental pathology.',
          ],
          [
            'Fetal growth restriction (FGR)',
            'Failure to achieve biological growth potential from an underlying pathological process — most often maternal vascular malperfusion (MVM).',
            'Associated with IUFD, intrapartum distress, neonatal acidosis, hypothermia, hypoglycaemia, NEC, and long-term neurodevelopmental and cardiovascular morbidity (Barker hypothesis).',
          ],
          [
            'Severe SGA / extreme biometry',
            'EFW or AC < 3rd percentile.',
            'A standalone FGR criterion at any gestational age regardless of Doppler, because stillbirth risk rises steeply below the 3rd percentile.',
          ],
          [
            'Suboptimal growth velocity',
            'Fall in EFW or AC by > 2 quartiles (> 50 percentiles) on serial scans ≥ 2–3 weeks apart.',
            'Identifies a pathologically decelerating fetus even when the absolute EFW is still ≥ 10th percentile.',
          ],
        ],
      },
      bullets: [
        'AC alone is the single most sensitive biometric parameter of fetal nutritional state — it reflects fetal liver glycogen and subcutaneous fat stores before EFW visibly falls.',
        'Multi-parameter EFW uses the Hadlock formula (HC + AC + FL) and is superior to any single parameter for weight estimation; biometry still needs AC to detect asymmetric placental FGR.',
        'Pregnancy dating is set by first-trimester CRL at 7+0–13+6 weeks (CRL 10–84 mm). Dating by a later scan can mask or manufacture growth restriction.',
        'Repeat growth scans at a MINIMUM interval of 2–3 weeks (ideally 3 weeks). Shorter intervals amplify inter-observer measurement error into false velocity changes.',
        'A fall of > 2 quartiles across serial scans is a Delphi contributory criterion for late-onset FGR even when EFW/AC remains ≥ 10th percentile.',
      ],
      trap: {
        title: 'Examiner trap — the 3-week rescan rule',
        body: 'Never diagnose a growth-velocity disorder on scans less than 2–3 weeks apart. A single AC or EFW below the 10th percentile is SGA, not automatically FGR: the diagnosis needs a pathological process (Doppler, velocity drop, oligohydramnios, preeclampsia or a severe < 3rd centile). Conversely, an EFW/AC < 3rd percentile is FGR on its own — normal Dopplers do not rescue it.',
      },
      pearls: [
        'SGA = EFW/AC < 10th percentile (a statistical descriptor). FGR = failure of biological growth potential from placental, maternal or fetal pathology.',
        'EFW or AC < 3rd percentile is a standalone FGR diagnosis at any gestational age, even with normal Dopplers.',
        'AC is the most sensitive single biometric marker of fetal nutrition; Hadlock EFW combines HC + AC + FL.',
        'Serial growth scans need ≥ 2–3 weeks (ideally 3 weeks) between measurements to avoid false-positive velocity errors.',
      ],
    },

    /* ==================================================================== */
    /* 2. Delphi consensus — early vs late onset                            */
    /* ==================================================================== */
    {
      id: 'delphi-consensus',
      heading: 'Early-Onset (< 32 wks) vs. Late-Onset (≥ 32 wks) FGR — Delphi Consensus',
      intro:
        'SOGC No. 442 adopts the International Delphi Consensus (Gordijn et al.). The 32+0-week boundary is not arbitrary: early-onset disease is a severe implantation/placentation failure, while late-onset disease is a milder villous lesion unmasked by high near-term fetal metabolic demand. Exclude aneuploidy, structural anomalies and congenital infection before applying the criteria.',
      table: {
        head: ['Parameter', 'Early-onset FGR (< 32+0 weeks)', 'Late-onset FGR (≥ 32+0 weeks)'],
        rows: [
          [
            'Prevalence among FGR',
            '~20–30% of all FGR cases',
            '~70–80% of all FGR cases',
          ],
          [
            'Primary pathophysiology',
            'Severe placental implantation failure (> 30–50% villous vascular obliteration); early-onset preeclampsia in ~50–70%.',
            'Milder villous malperfusion / impaired oxygen diffusion with high fetal metabolic demand near term; preeclampsia in ~10–15%.',
          ],
          [
            'Standalone (solitary) criteria — any one is sufficient',
            '1) EFW or AC < 3rd percentile, OR 2) Umbilical artery absent or reversed end-diastolic velocity (AEDV / REDV).',
            '1) EFW or AC < 3rd percentile.',
          ],
          [
            'Contributory criteria — biometry plus Doppler/velocity',
            'EFW or AC < 10th percentile COMBINED WITH at least one of: 1) UtA-PI > 95th percentile, OR 2) UA-PI > 95th percentile.',
            'At least 2 of 3: 1) EFW or AC < 10th percentile; 2) EFW or AC crossing down > 2 quartiles (> 50 percentiles) on serial scans; 3) CPR < 5th percentile OR UA-PI > 95th percentile (or MCA-PI < 5th percentile).',
          ],
          [
            'Classic haemodynamic progression',
            '↑ UtA-PI → ↑ UA-PI → MCA brain-sparing → AEDV → REDV → abnormal ductus venosus → biophysical / cCTG deterioration.',
            'UA-PI is often normal (< 95th percentile) because < 30% of the placental vascular bed is obliterated; manifests primarily as cerebral redistribution (↓ MCA-PI and CPR < 5th percentile).',
          ],
          [
            'Primary clinical challenge',
            'Balancing extreme prematurity against intrauterine hypoxia/acidosis and stillbirth.',
            'Detecting the condition (frequently missed by symphysis-fundal height) and preventing rapid, unexpected term stillbirth or intrapartum asphyxia.',
          ],
        ],
      },
      bullets: [
        'Early-onset (< 32+0 weeks): a low UA-PI does not exclude FGR — the solitary criterion is EFW/AC < 3rd percentile OR UA AEDV/REDV; UtA-PI > 95th plus AC/EFW < 10th is enough without UA abnormality.',
        'Late-onset (≥ 32+0 weeks): the diagnosis needs at least 2 of 3 — < 10th percentile, a > 2-quartile downward crossing, or CPR/MCA < 5th percentile / UA-PI > 95th percentile.',
        'CPR = MCA-PI ÷ UA-PI. It detects the brain-sparing phenotype that a normal UA-PI misses in late FGR.',
        'The 32-week cut-off drives surveillance intensity, delivery timing and the expected preeclampsia association.',
      ],
      trap: {
        title: 'Examiner trap — late FGR with a normal umbilical artery',
        body: 'A normal UA-PI at 34 weeks does not exclude FGR. Late-onset disease often spares the umbilical artery and declares itself through a low CPR or MCA-PI (< 5th percentile), a > 2-quartile growth drop, or EFW/AC < 3rd percentile. The classic wrong answer is "normal UA Doppler, therefore no FGR".',
      },
      pearls: [
        'Delphi / SOGC 442 boundary: early-onset FGR is < 32+0 weeks; late-onset FGR is ≥ 32+0 weeks.',
        'At < 32 weeks, EFW/AC < 3rd percentile OR UA AEDV/REDV is a standalone FGR diagnosis.',
        'At ≥ 32 weeks, diagnose late FGR with ≥ 2 of 3: EFW/AC < 10th, > 2-quartile growth drop, or CPR/MCA-PI < 5th percentile (or UA-PI > 95th).',
        'Late FGR usually has a normal UA-PI — the sensitive marker is the cerebroplacental ratio (CPR < 5th percentile).',
      ],
    },

    /* ==================================================================== */
    /* 3. Etiology, workup & prevention                                     */
    /* ==================================================================== */
    {
      id: 'etiology-workup',
      heading: 'Etiology, Maternal/Fetal Workup & Prevention Rules',
      intro:
        'Uteroplacental disease accounts for 70–80% of non-anomalous FGR. The workup is designed to separate placental MVM from fetal genetic/infectious causes, because the counselling, invasive testing threshold and recurrence risk are completely different.',
      table: {
        head: ['Compartment', 'Specific pathologies & risk factors', 'Clinical / sonographic clues'],
        rows: [
          [
            'Uteroplacental (most common, 70–80%)',
            'Maternal vascular malperfusion (defective spiral-artery remodelling), villitis of unknown etiology (VUE), chronic histiocytic intervillositis (CHIV), massive perivillous fibrin deposition (MPVFD), infarction, circumvallate placenta, chorioangioma, velamentous cord insertion.',
            'Asymmetric biometry (↑ HC/AC ratio, brain-sparing); UtA-PI > 95th with bilateral diastolic notching; thick/globular placenta (> 4 cm) or cord-to-margin abnormality < 10 cm; maternal PlGF < 100 pg/mL.',
          ],
          [
            'Maternal factors',
            'Chronic hypertension, preeclampsia, pregestational diabetes with vascular disease (Class D/F/R), SLE, antiphospholipid syndrome (APS), chronic kidney disease, cyanotic heart disease, severe malnutrition, low pre-pregnancy BMI, smoking, cocaine/substance use, high altitude.',
            'Prior SGA/FGR, prior preeclampsia, prior abruption or stillbirth; positive anticardiolipin, anti-β2-glycoprotein I or lupus anticoagulant in APS.',
          ],
          [
            'Fetal factors (10–20%)',
            'Aneuploidy (T18, T13, T21, Turner 45,X, triploidy), pathogenic copy-number variants on chromosomal microarray (CMA), single-gene/skeletal syndromes (Cornelia de Lange, Russell-Silver, Smith-Lemli-Opitz), confined placental mosaicism (10–16% of unexplained early FGR), congenital TORCH infection.',
            'Very early (< 24 weeks) severe symmetric FGR (EFW < 3rd); structural anomaly (20–25% aneuploidy/CNV risk when FGR + anomaly coexist); normal UtA-PI and PlGF > 100 pg/mL; polyhydramnios + FGR (classic Trisomy 18); echogenic bowel, ventriculomegaly, calcifications (CMV/Toxoplasma).',
          ],
        ],
      },
      bullets: [
        'PAPP-A < 0.4 MoM at 11–13+6 weeks, with MAP, UtA-PI and PlGF, identifies early placental dysfunction and preeclampsia risk.',
        'PlGF < 100 pg/mL (or < 5th percentile) between 20+0 and 36+6 weeks strongly supports placental MVM-mediated FGR; PlGF < 12 pg/mL predicts delivery within 14 days.',
        'A normal PlGF (≥ 100 pg/mL) plus normal UtA-PI in an early severe (< 3rd percentile) FGR raises the probability of a genetic/chromosomal or infectious cause — not placental insufficiency.',
        'Offer amniocentesis with chromosomal microarray (CMA), not conventional karyotype alone, when FGR is early (< 32 weeks, especially < 24–28 weeks), EFW < 3rd percentile, a structural anomaly or polyhydramnios is present, or uteroplacental perfusion is normal in a severely restricted fetus.',
        'CMA adds 4–10% pathogenic CNVs over karyotype in isolated early FGR and up to 10–19% when structural anomalies coexist.',
        'Do not run an unselected full TORCH panel on every late SGA fetus. Target serology plus amniotic-fluid PCR (CMV after 21 weeks and ≥ 6–8 weeks post-maternal infection) when intracranial/hepatic calcifications, ventriculomegaly, microcephaly, echogenic bowel, ascites/hydrops or unexplained severe early symmetric FGR are present.',
        'Low-dose aspirin 81–162 mg at bedtime (SOGC prefers 162 mg/day) is recommended for women at increased risk of placenta-mediated complications (preeclampsia / early FGR). Start before 16+0 weeks (ideally 12–16 weeks) and continue to 36+0 weeks. Isolated FGR without preeclampsia/placental risk factors is not an automatic aspirin indication.',
        'LMWH is NOT recommended for recurrent FGR without confirmed APS (TIPPS, EPPI, HEPEPE, FRUIT). Confirmed obstetric APS is the exception: low-dose aspirin plus prophylactic/therapeutic LMWH.',
        'Sildenafil, nitric-oxide donors, maternal bed rest and hyperoxygenation are NOT recommended. STRIDER showed no survival benefit from sildenafil and a potential signal for neonatal pulmonary hypertension; bed rest increases maternal VTE risk.',
      ],
      trap: {
        title: 'Examiner trap — the "small baby, just add aspirin" reflex',
        body: 'Aspirin is a prevention strategy for placenta-mediated risk (preeclampsia / early FGR), not a treatment for an already isolated small fetus without preeclampsia or placental risk factors. Equally, LMWH and sildenafil are not FGR therapies: LMWH is reserved for confirmed APS, and sildenafil failed in STRIDER. A normal PlGF/UtA-PI in severe early FGR should push you toward CMA and targeted infection testing, not toward more aspirin.',
      },
      pearls: [
        'PlGF < 100 pg/mL supports placental MVM; PlGF < 12 pg/mL predicts preterm delivery within 14 days.',
        'Normal PlGF (≥ 100 pg/mL) + normal UtA-PI in severe early FGR → suspect genetics or infection → offer amniocentesis with CMA + targeted TORCH PCR.',
        'Do not give aspirin for isolated FGR without preeclampsia/placenta-mediated risk factors; LMWH is contraindicated unless APS is confirmed; sildenafil and bed rest are not recommended.',
        'Low-dose aspirin 162 mg at bedtime, started before 16+0 weeks and continued to 36+0 weeks, prevents recurrent placenta-mediated FGR/preeclampsia.',
      ],
    },

    /* ==================================================================== */
    /* 4. Multi-vessel Doppler progression                                  */
    /* ==================================================================== */
    {
      id: 'doppler-sequence',
      heading: 'Multi-Vessel Doppler Progression Sequence',
      intro:
        'Each vessel answers a different physiological question. UtA interrogates the maternal side, UA the placental villous bed, MCA/CPR the fetal cerebral response, and DV the fetal cardiac preload. Reading them in sequence converts a single abnormal number into a stage and a delivery decision.',
      flow: [
        'UtA-PI > 95th percentile · defective spiral-artery remodelling / MVM',
        'UA-PI > 95th percentile · ~30% of villous tree damaged',
        'MCA-PI < 5th / CPR < 5th percentile · brain-sparing (cerebral vasodilation)',
        'UA AEDV · ~50–60% villous damage',
        'UA REDV · > 70% villous obliteration',
        'Ductus venosus absent/reversed a-wave · cardiac decompensation',
        'cCTG STV collapse / BPP ≤ 4 · pre-terminal fetal acidemia',
      ],
      table: {
        head: ['Vessel / test', 'Physiological role', 'Pathological threshold', 'Clinical interpretation'],
        rows: [
          [
            'Uterine artery (UtA-PI)',
            'Maternal spiral-artery trophoblastic invasion and uteroplacental resistance.',
            'UtA-PI > 95th percentile and/or persistent bilateral early diastolic notching at ≥ 20–24 weeks.',
            'Diagnostic marker of MVM and preeclampsia risk. Used for diagnosis/risk stratification — NOT an acute trigger for delivery.',
          ],
          [
            'Umbilical artery (UA-PI)',
            'Fetoplacental villous vascular resistance. The only surveillance modality proven in RCTs to reduce perinatal mortality (~30–38%) in high-risk pregnancy.',
            'Elevated UA-PI > 95th percentile (~30% villous damage); AEDV (~50–60% damage); REDV (> 70% obliteration).',
            'Backbone for staging and delivery timing in early FGR. AEDV → REDV signals severe placental resistance and impending acidemia within days to 1–2 weeks.',
          ],
          [
            'MCA-PI and cerebroplacental ratio (CPR = MCA-PI ÷ UA-PI)',
            'Fetal hypoxia-induced cerebral vasodilation — the brain-sparing effect.',
            'MCA-PI < 5th percentile; CPR < 5th percentile (or < 1.08).',
            'Essential in late FGR (≥ 32 weeks) where UA-PI is often normal. CPR < 5th identifies 3–5× higher risk of intrapartum distress, emergency caesarean and NICU admission. Sudden "normalisation" of MCA-PI with REDV is an ominous pre-terminal sign (cerebral oedema / lost autoregulation).',
          ],
          [
            'Ductus venosus (DV)',
            'Right ventricular preload, myocardial compliance and central venous pressure under severe hypoxia/acidemia.',
            'DV-PI > 95th percentile; absent or reversed a-wave (atrial contraction).',
            'Most powerful short-term predictor of acidemia and imminent stillbirth in early FGR (TRUFFLE). Absent/reversed a-wave precedes demise by ~48–72 hours and mandates delivery after steroid rescue if viable.',
          ],
          [
            'cCTG (STV) and BPP',
            'Acute CNS oxygenation and autonomic regulation.',
            'BPP ≤ 4/10 (or < 6/10 with SDP < 2 cm); STV below gestational threshold: < 2.6 ms at 26–28+6, < 3.0 ms at 29–31+6, < 3.5 ms at 32–33+6, < 4.5 ms at ≥ 34 weeks; repetitive spontaneous late decelerations.',
            'Late/acute safety net. Loss of tone/movement, repetitive decelerations or critically low STV = acute acidemia requiring immediate delivery once above viability.',
          ],
        ],
      },
      bullets: [
        'UtA-PI is a diagnostic/risk marker, not a reason to deliver tomorrow. UA-PI is the mortality-reducing surveillance tool.',
        'UA Doppler becomes abnormal only after ~30% of the villous tree is obliterated — normal UA does not exclude late FGR.',
        'Brain-sparing is an adaptive response, not a benign finding: CPR/MCA < 5th percentile is the late-FGR red flag.',
        'DV interrogation is most useful < 32 weeks, where it outperforms UA in predicting acidemia and stillbirth.',
        'The progression is not always linear; a single normal value must be interpreted in the context of GA, biometry, fluid and maternal blood pressure.',
      ],
      trap: {
        title: 'Examiner trap — "the MCA normalised, so the fetus improved"',
        body: 'In a severely compromised fetus with REDV, a sudden return of MCA-PI to normal is not recovery. It is a pre-terminal sign of cerebral oedema and loss of autoregulation. Likewise, UtA-PI > 95th percentile is not an acute delivery trigger; it establishes MVM and preeclampsia risk while UA/DV/cCTG drive the timing.',
      },
      pearls: [
        'Doppler order: UtA → UA → MCA/CPR → DV → cCTG/BPP. Each step reflects a different level of placental and fetal decompensation.',
        'UA Doppler is the only surveillance modality with RCT-proven reduction in perinatal mortality in high-risk pregnancy.',
        'CPR = MCA-PI / UA-PI; CPR < 5th percentile is the key late-FGR marker when UA-PI is normal.',
        'Absent/reversed DV a-wave is the strongest short-term predictor of fetal acidemia and demise within 48–72 hours.',
      ],
    },

    /* ==================================================================== */
    /* 5. Stage-based surveillance & delivery timing                        */
    /* ==================================================================== */
    {
      id: 'delivery-timing',
      heading: 'Stage-Based Surveillance & Delivery Timing Matrix',
      intro:
        'This master table synthesises SOGC No. 442 with TRUFFLE, DIGITAT, GRIT and FIGO/ISUOG consensus. The stage determines surveillance intensity; the gestational age determines whether you deliver now, after steroids, or expectantly.',
      table: {
        head: ['Stage / phenotype', 'Biometry & Doppler criteria', 'Surveillance', 'Delivery window', 'Mode'],
        rows: [
          [
            'Constitutional SGA (no FGR)',
            'EFW/AC 3rd–9th percentile + normal velocity + normal UA-PI, MCA-PI, CPR and PlGF.',
            'Biometry every 2–3 weeks; UA + MCA Doppler every 1–2 weeks.',
            '38+0 to 39+0 weeks (do not exceed 39+0–40+0).',
            'Induction of labour (IOL) with continuous intrapartum EFM.',
          ],
          [
            'Mild late-onset FGR (normal umbilical flow, no brain-sparing)',
            'EFW/AC < 3rd percentile OR (EFW/AC < 10th + velocity drop > 2 quartiles) with normal UA-PI and normal MCA/CPR.',
            'Biometry every 2 weeks; weekly or twice-weekly UA + MCA Doppler + NST/BPP.',
            '37+0 to 37+6 weeks (DIGITAT: delivery at 36–37 weeks prevents stillbirth without increasing neonatal morbidity).',
            'IOL with mechanical cervical ripening — Foley balloon preferred over prostaglandin — + continuous EFM.',
          ],
          [
            'Late-onset FGR with cerebral redistribution or elevated UA-PI',
            'EFW/AC < 10th with CPR < 5th, MCA-PI < 5th, UA-PI > 95th with positive end-diastolic flow, oligohydramnios (SDP < 2 cm) or maternal hypertension.',
            'Twice-weekly UA/MCA/CPR Doppler + twice-weekly NST/BPP.',
            '36+0 to 37+0 weeks; 34+0–36+6 if severe features, oligohydramnios, static growth > 3 weeks or preeclampsia.',
            'Careful trial of labour with mechanical ripening and continuous EFM if favourable; low threshold for caesarean.',
          ],
          [
            'Early/preterm FGR with UA-AEDV',
            'UA absent end-diastolic velocity with normal DV a-wave and reassuring cCTG/BPP.',
            'Inpatient (or intensive MFM day-unit): UA/MCA/DV 2–3×/week to daily + daily NST/cCTG/BPP. Give antenatal corticosteroids and MgSO4 when delivery is anticipated.',
            '32+0 to 33+6 weeks (deliver earlier if DV becomes abnormal, BPP ≤ 4, STV falls below threshold, or severe maternal preeclampsia).',
            'Planned caesarean section is generally recommended — the fetus rarely tolerates labour contractions.',
          ],
          [
            'Early/preterm FGR with UA-REDV',
            'UA reversed end-diastolic velocity with preserved DV and reassuring cCTG/BPP.',
            'Inpatient tertiary perinatal centre (Level III NICU): daily UA + DV Doppler + 1–2× daily cCTG/NST and BPP.',
            '30+0 to 32+0 weeks (after the 24–48 h corticosteroid window if maternal/fetal status remains stable).',
            'Elective caesarean section is mandatory.',
          ],
          [
            'Critical pre-terminal FGR (abnormal DV or biophysical failure)',
            'Absent/reversed DV a-wave, pulsatile umbilical vein, cCTG STV below cutoff, repetitive spontaneous decelerations, or BPP ≤ 4/10.',
            'Immediate inpatient tertiary MFM + neonatology consultation; continuous monitoring.',
            'Deliver at ≥ 26+0 to 30+0 weeks immediately after steroids (or immediately without waiting for repetitive decelerations / acute maternal indication). At 24+0–25+6 weeks and EFW ≥ 500 g, individualise with neonatology.',
            'Emergency/urgent caesarean section if viable and active resuscitation is planned.',
          ],
        ],
      },
      bullets: [
        'Antenatal corticosteroids: betamethasone 12 mg IM × 2 doses 24 h apart, or dexamethasone 6 mg IM × 4 doses 12 h apart, when delivery is anticipated before 34+0 weeks (consider 34+0–36+6 per late-preterm criteria, weighing neonatal hypoglycaemia in SGA infants).',
        'MgSO4 for fetal neuroprotection: 4 g IV loading over 20–30 min then 1 g/h, when delivery is imminent at < 32+0 weeks (SOGC allows consideration to 33+6 weeks in selected centres).',
        'For late FGR induction with positive end-diastolic flow, mechanical cervical ripening with a transcervical Foley catheter is preferred over misoprostol/dinoprostone — growth-restricted fetuses tolerate tachysystole poorly.',
        'Continuous EFM is mandatory in active labour; collect umbilical arterial and venous cord gases in every FGR delivery.',
        'Send the placenta for synoptic histopathology (Amsterdam criteria) in all FGR, particularly < 34 weeks or < 3rd percentile. MVM recurrence is ~10–15% with aspirin; non-MVM lesions (CHIV, MPVFD, VUE) recur in 30–80% and need specialist MFM immunomodulatory/antithrombotic protocols.',
        'Placental MVM-mediated FGR doubles the mother\'s lifetime risk of chronic hypertension, ischaemic heart disease and stroke — counsel annual BP, lipid and glycaemic screening.',
      ],
      trap: {
        title: 'Examiner trap — transient Doppler improvement after betamethasone',
        body: 'In ~60–70% of UA-AEDV fetuses, betamethasone causes systemic fetoplacental vasodilation and a transient return of positive end-diastolic flow for 48–72 hours. This does NOT mean the placental pathology resolved. The ~30% who fail to improve have a higher risk of rapid acidemic decompensation and need intensive daily DV/cCTG monitoring for 72 hours post-steroids. Do not delay delivery solely because the UA tracing "improved" after steroids.',
      },
      pearls: [
        'Delivery ladder: constitutional SGA 38–39w · late FGR with normal Doppler 37w · brain-sparing/CPR < 5th 36–37w · AEDV 32–33+6w · REDV 30–32w · abnormal DV/cCTG immediate (≥ 26–30w after steroids).',
        'AEDV and REDV are caesarean deliveries — the growth-restricted fetus rarely tolerates labour. Late FGR with positive end-diastolic flow may have a careful trial of labour.',
        'Give MgSO4 neuroprotection if delivery is < 32+0 weeks and antenatal corticosteroids if < 34+6 weeks.',
        'Betamethasone transiently restores end-diastolic flow in ~65% of AEDV fetuses for 48–72 h — improvement is pharmacological, not placental recovery.',
        'Mechanical (Foley) ripening is preferred over prostaglandins in late FGR to avoid tachysystole and intrapartum hypoxia.',
      ],
    },

    /* ==================================================================== */
    /* 6. Golden pearls & examiner traps                                    */
    /* ==================================================================== */
    {
      id: 'golden-pearls',
      heading: 'Every Golden Pearl & Examiner Trap',
      intro:
        'The one-line recall set for SOGC No. 442. Save any pearl to ⌘K and it persists locally in conceptual-obgyn:recall-v1 for rapid revision across the vault.',
      bullets: [
        'SOGC 442 / Delphi cutoff: early-onset FGR is < 32+0 weeks; late-onset FGR is ≥ 32+0 weeks.',
        'Standalone FGR diagnosis: EFW or AC < 3rd percentile alone diagnoses FGR at any gestational age, even with normal Dopplers.',
        'Late-onset FGR key Doppler: UA-PI is often normal; CPR (MCA-PI / UA-PI) < 5th percentile detects brain-sparing.',
        'TRUFFLE gold standard: DV absent/reversed a-wave plus cCTG short-term variation (STV) guide delivery in early FGR < 32 weeks.',
        'Delivery timing ladder: constitutional SGA 38–39w | late FGR normal Doppler 37w | brain-sparing/CPR < 5th 36–37w | UA-AEDV 32–33+6w | UA-REDV 30–32w | abnormal DV a-wave ≥ 26–30w after steroids.',
        'Examiner trap: maternal betamethasone transiently returns end-diastolic flow in ~65% of UA-AEDV fetuses for 48–72 h; failure to improve carries a worse prognosis.',
        'Prevention rule: low-dose aspirin 162 mg/day at bedtime started < 16 weeks prevents placental FGR; LMWH is NOT recommended unless APS is confirmed.',
        'PlGF < 100 pg/mL supports placental MVM; PlGF < 12 pg/mL predicts delivery within 14 days. Normal PlGF + normal UtA-PI in severe early FGR points to genetics or infection.',
        'Severe early FGR with normal uteroplacental perfusion → amniocentesis with CMA + targeted TORCH PCR, not more Doppler observation.',
        'Fetal fibronectin is not part of FGR staging; the acute safety net is cCTG STV + BPP, not a single UA value.',
        'Antenatal corticosteroids < 34+6 weeks; MgSO4 neuroprotection < 32+0 weeks; Foley rather than prostaglandin for late-FGR induction.',
        'Placental histopathology is mandatory: MVM recurs ~10–15% (aspirin-responsive); CHIV/MPVFD/VUE recur 30–80% and need MFM protocols.',
      ],
      trap: {
        title: 'Four classic examiner traps',
        body: '1) Calling a normal UA-PI at 34 weeks "no FGR" — check CPR/MCA and growth velocity. 2) Treating EFW/AC 3rd–9th percentile as FGR without a pathological marker. 3) Interpreting the post-betamethasone return of end-diastolic flow as placental recovery. 4) Giving aspirin/LMWH/sildenafil to an isolated FGR fetus without the right indication — aspirin is prevention for placenta-mediated risk, LMWH is for APS, and sildenafil is contraindicated.',
      },
      pearls: [
        'SOGC 442 is a GRADE-based framework: diagnose the phenotype, stage the placental/fetal compromise, then time delivery by the highest-risk Doppler or biophysical marker.',
        'The two numbers that most often decide the MCQ: 32+0 weeks (early vs late FGR) and the 3rd percentile (standalone severe FGR).',
        'The two numbers that most often decide management: 34+0 weeks (steroids) and 32+0 weeks (MgSO4 neuroprotection).',
        'A normal UA Doppler never excludes late FGR; a normal MCA in REDV may be pre-terminal, not reassuring.',
        'Aspirin 162 mg at bedtime before 16 weeks is prevention; LMWH, sildenafil and bed rest are not FGR treatments.',
      ],
    },
  ],

  flashcards: [
    {
      id: 'pg-fgr-f1',
      front:
        'What gestational age threshold separates early-onset from late-onset FGR according to the Delphi Consensus and SOGC Guideline No. 442?',
      back: '32+0 weeks. < 32+0 weeks = early-onset FGR; ≥ 32+0 weeks = late-onset FGR.',
    },
    {
      id: 'pg-fgr-f2',
      front:
        'What are the two standalone (solitary) ultrasound criteria that diagnose early-onset FGR (< 32 weeks) without requiring additional Doppler abnormalities?',
      back:
        '1) EFW or AC < 3rd percentile, OR 2) umbilical artery absent or reversed end-diastolic velocity (AEDV / REDV).',
    },
    {
      id: 'pg-fgr-f3',
      front:
        'Why is umbilical artery Doppler (UA-PI) frequently normal in late-onset FGR (≥ 32 weeks), and which Doppler index is most sensitive instead?',
      back:
        'UA-PI only becomes abnormal when > 30% of the placental villous vasculature is obliterated. Late-onset FGR has milder villous lesions but high fetal oxygen demand, manifesting as cerebral vasodilation detected by a low cerebroplacental ratio (CPR < 5th percentile) or MCA-PI < 5th percentile.',
    },
    {
      id: 'pg-fgr-f4',
      front:
        'A 25-week fetus has symmetric FGR with EFW < 3rd percentile, normal uterine artery Doppler, normal maternal PlGF (> 100 pg/mL), and polyhydramnios. What is the most likely etiology and next diagnostic step?',
      back:
        'Fetal chromosomal/genetic abnormality (classically Trisomy 18 when FGR + polyhydramnios coexist) or congenital infection. Next step: amniocentesis for chromosomal microarray (CMA) and targeted TORCH PCR.',
    },
    {
      id: 'pg-fgr-f5',
      front:
        'What are the recommended delivery windows and modes for FGR complicated by UA-AEDV vs UA-REDV with a normal ductus venosus?',
      back:
        'UA-AEDV: deliver at 32+0 to 33+6 weeks by caesarean section. UA-REDV: deliver at 30+0 to 32+0 weeks by caesarean section (after antenatal corticosteroids and MgSO4).',
    },
    {
      id: 'pg-fgr-f6',
      front: 'What is the preferred cervical ripening agent for induction of labour in late-onset FGR at 37 weeks, and why?',
      back:
        'Mechanical ripening with a transcervical Foley balloon catheter is preferred over prostaglandins (misoprostol/dinoprostone) to minimise the risk of uterine tachysystole and acute intrapartum hypoxia.',
    },
    {
      id: 'pg-fgr-f7',
      front: 'Which single ultrasound measurement is the most sensitive biometric marker of fetal nutritional state, and which formula produces EFW?',
      back:
        'Abdominal circumference (AC) is the most sensitive single parameter (fetal liver glycogen and subcutaneous fat). EFW uses the Hadlock formula incorporating HC, AC and FL.',
    },
    {
      id: 'pg-fgr-f8',
      front: 'What is the minimum safe interval between serial growth scans, and why?',
      back:
        'At least 2–3 weeks (ideally 3 weeks). Shorter intervals turn inter-observer measurement variation into false growth-velocity changes.',
    },
    {
      id: 'pg-fgr-f9',
      front: 'Which first-trimester biomarkers identify early placental dysfunction, and at what thresholds?',
      back:
        'PAPP-A < 0.4 MoM and PlGF (low) at 11–13+6 weeks, combined with MAP and uterine artery Doppler, identify early placental dysfunction and preeclampsia/FGR risk.',
    },
    {
      id: 'pg-fgr-f10',
      front: 'What do PlGF < 100 pg/mL and PlGF < 12 pg/mL mean in suspected FGR?',
      back:
        'PlGF < 100 pg/mL (or < 5th percentile) supports placental MVM-mediated FGR. PlGF < 12 pg/mL indicates severe placental insufficiency with high risk of preterm delivery within 14 days.',
    },
    {
      id: 'pg-fgr-f11',
      front: 'What is the sFlt-1/PlGF ratio used for in FGR and preeclampsia?',
      back:
        'It quantifies anti-angiogenic imbalance: a high sFlt-1/PlGF ratio supports placental MVM/preeclampsia and helps triage severity and timing; it is interpreted alongside PlGF, UtA-PI and clinical status.',
    },
    {
      id: 'pg-fgr-f12',
      front: 'When is amniocentesis with chromosomal microarray (CMA) indicated in FGR, and what is its incremental yield?',
      back:
        'Offer CMA for early (< 32 weeks, especially < 24–28 weeks) or < 3rd percentile FGR, structural anomalies/polyhydramnios, or normal uteroplacental perfusion in a severely restricted fetus. CMA adds 4–10% pathogenic CNVs over karyotype in isolated early FGR and 10–19% with structural anomalies.',
    },
    {
      id: 'pg-fgr-f13',
      front: 'State the SOGC low-dose aspirin regimen for prevention of placenta-mediated FGR/preeclampsia.',
      back:
        '81–162 mg orally once daily at bedtime (SOGC prefers 162 mg/day), started before 16+0 weeks (ideally 12–16 weeks) and continued until 36+0 weeks.',
    },
    {
      id: 'pg-fgr-f14',
      front: 'What is the "transient Doppler return" phenomenon after betamethasone, and why does it matter?',
      back:
        'In ~60–70% of UA-AEDV fetuses, betamethasone causes fetoplacental vasodilation and transient positive end-diastolic flow for 48–72 hours. It is not placental recovery; the ~30% who fail to improve have a higher risk of rapid acidemic decompensation and need intensive DV/cCTG monitoring.',
    },
    {
      id: 'pg-fgr-f15',
      front: 'State the MgSO4 regimen for fetal neuroprotection and its gestational window.',
      back:
        '4 g IV loading over 20–30 minutes, then 1 g/h maintenance, when delivery is imminent at < 32+0 weeks (consider up to 33+6 weeks in selected centres). It reduces cerebral palsy and severe motor dysfunction.',
    },
    {
      id: 'pg-fgr-f16',
      front: 'How does placental histopathology after FGR change recurrence counselling?',
      back:
        'MVM (decidual arteriopathy, accelerated villous maturation, distal villous hypoplasia, infarcts) recurs ~10–15% and responds to aspirin 162 mg from < 16 weeks. Non-MVM lesions (CHIV, MPVFD/maternal floor infarction, VUE) recur 30–80%, respond poorly to aspirin and need specialist MFM immunomodulatory/antithrombotic protocols.',
    },
  ],

  mcqs: [
    {
      id: 'pg-fgr-q1',
      stem:
        'A 29-year-old primigravida at 30+2 weeks undergoes ultrasound showing fetal AC at the 6th percentile, EFW at the 8th percentile, normal amniotic fluid, uterine artery PI at the 98th percentile, and normal umbilical artery PI (70th percentile). According to SOGC Guideline No. 442 / Delphi Consensus criteria, what is the diagnosis?',
      options: [
        'Constitutionally small for gestational age (SGA) fetus',
        'Early-onset fetal growth restriction (FGR)',
        'Late-onset fetal growth restriction (FGR)',
        'Normal fetal growth; repeat scan at 36 weeks',
      ],
      answerIndex: 1,
      explanation:
        'At < 32 weeks, EFW or AC < 10th percentile combined with EITHER uterine artery PI > 95th percentile OR umbilical artery PI > 95th percentile fulfils the Delphi Consensus criteria for early-onset FGR. The normal UA-PI does not exclude the diagnosis because the UtA criterion is satisfied.',
    },
    {
      id: 'pg-fgr-q2',
      stem:
        'A 32-year-old woman at 31+0 weeks has severe early-onset FGR (EFW 2nd percentile) with umbilical artery absent end-diastolic velocity (AEDV). The ductus venosus shows a positive a-wave, and computerized CTG short-term variation (STV) is 4.2 ms. She receives betamethasone and inpatient daily surveillance. Assuming fetal testing remains unchanged, when should delivery be scheduled?',
      options: [
        'Immediate emergency caesarean section at 31+0 weeks',
        'At 32+0 to 33+6 weeks by caesarean section',
        'At 36+0 to 37+0 weeks by induction of labour',
        'At 37+0 to 38+0 weeks by caesarean section',
      ],
      answerIndex: 1,
      explanation:
        'Per SOGC Guideline No. 442, persistent UA-AEDV with a reassuring ductus venosus and normal cCTG/BPP is managed expectantly as an inpatient until 32+0 to 33+6 weeks, at which point delivery by caesarean section is recommended. Immediate delivery is reserved for abnormal DV, BPP ≤ 4, STV below threshold, or maternal deterioration.',
    },
    {
      id: 'pg-fgr-q3',
      stem:
        'In a fetus at 29+4 weeks with severe FGR and umbilical artery reversed end-diastolic velocity (REDV), which Doppler or biophysical finding is the strongest short-term predictor of fetal acidemia and imminent intrauterine demise within 48–72 hours, mandating immediate delivery after steroid coverage?',
      options: [
        'Bilateral uterine artery early diastolic notching',
        'Middle cerebral artery PI < 5th percentile',
        'Absent or reversed a-wave in the ductus venosus',
        'Cerebroplacental ratio (CPR) < 5th percentile',
      ],
      answerIndex: 2,
      explanation:
        'As demonstrated in the TRUFFLE study and endorsed by SOGC No. 442, an absent or reversed a-wave in the ductus venosus (or reduced cCTG STV) reflects myocardial dysfunction and central venous acidemia, preceding fetal death by ~48–72 hours.',
    },
    {
      id: 'pg-fgr-q4',
      stem:
        'A patient with a history of severe placental-mediated FGR and preeclampsia requiring delivery at 30 weeks in her first pregnancy presents at 11 weeks gestation in her second pregnancy. Her antiphospholipid antibody panel is negative. What prophylaxis is recommended by SOGC Guideline No. 442?',
      options: [
        'Low-dose aspirin (81–162 mg daily at bedtime) initiated before 16 weeks plus prophylactic enoxaparin (LMWH)',
        'Low-dose aspirin (81–162 mg daily at bedtime) initiated before 16 weeks alone; LMWH is NOT recommended',
        'Oral sildenafil 25 mg three times daily starting at 20 weeks',
        'Prophylactic LMWH alone starting at 12 weeks',
      ],
      answerIndex: 1,
      explanation:
        'SOGC Guideline No. 442 strongly recommends low-dose aspirin (81–162 mg at bedtime initiated < 16 weeks until 36 weeks) to prevent recurrent placenta-mediated FGR/preeclampsia, and explicitly recommends AGAINST LMWH in the absence of confirmed antiphospholipid syndrome (APS).',
    },
    {
      id: 'pg-fgr-q5',
      stem:
        'A 24-week fetus is found to have severe symmetric FGR (EFW < 1st percentile), normal amniotic fluid, normal uterine artery PI, and a normal maternal serum PlGF level of 285 pg/mL. What is the most appropriate next step in evaluation?',
      options: [
        'Diagnose maternal vascular malperfusion and start low-dose aspirin',
        'Offer amniocentesis for chromosomal microarray analysis (CMA) and infectious PCR',
        'Schedule immediate caesarean delivery',
        'Reassure the patient that normal PlGF guarantees a constitutionally normal baby',
      ],
      answerIndex: 1,
      explanation:
        'In early/severe FGR (< 3rd percentile), a normal maternal PlGF (≥ 100 pg/mL) and normal uterine artery Doppler argue AGAINST uteroplacental vascular insufficiency (MVM) and strongly increase the probability of a fetal genetic/chromosomal abnormality (detected by CMA) or congenital infection.',
    },
    {
      id: 'pg-fgr-q6',
      stem:
        'A 34-year-old woman at 35+2 weeks has an EFW at the 8th percentile, a fall of more than two quartiles since the 32-week scan, UA-PI at the 60th percentile, and MCA-PI below the 5th percentile with CPR below the 5th percentile. Which statement best fits SOGC No. 442?',
      options: [
        'This is constitutional SGA; UA-PI is normal, so no further Doppler is needed',
        'This meets late-onset FGR criteria and warrants twice-weekly Doppler with delivery around 36+0 to 37+0 weeks',
        'This requires immediate caesarean section at 35+2 weeks',
        'This is early-onset FGR and should be managed with inpatient daily DV Doppler',
      ],
      answerIndex: 1,
      explanation:
        'At ≥ 32 weeks, late-onset FGR requires at least 2 of 3: EFW/AC < 10th percentile, a > 2-quartile growth drop, or CPR/MCA < 5th percentile (or UA-PI > 95th). She satisfies all three. With brain-sparing, surveillance is twice-weekly and delivery is recommended at 36+0 to 37+0 weeks, or 34+0–36+6 if severe features coexist.',
    },
    {
      id: 'pg-fgr-q7',
      stem:
        'A 30-year-old woman at 28 weeks has an EFW below the 3rd percentile with normal UA, MCA and DV Doppler, normal blood pressure, normal urine protein and no preeclampsia risk factors. She asks whether she should start aspirin, LMWH and sildenafil to "make the baby grow". What is the correct counselling?',
      options: [
        'Start all three: aspirin, LMWH and sildenafil have proven benefit in established FGR',
        'Aspirin is not automatically indicated for isolated FGR without preeclampsia/placental risk factors; LMWH is reserved for confirmed APS and sildenafil is not recommended',
        'Start LMWH alone because FGR is a thrombotic placental disease',
        'Start sildenafil because it improves uteroplacental blood flow and neonatal survival',
      ],
      answerIndex: 1,
      explanation:
        'Aspirin is recommended for women at increased risk of placenta-mediated complications (preeclampsia / early FGR), not automatically for isolated FGR without those risk factors. LMWH is not recommended without confirmed APS (TIPPS/EPPI/HEPEPE/FRUIT), and sildenafil failed to improve survival in STRIDER with a potential risk of neonatal pulmonary hypertension.',
    },
    {
      id: 'pg-fgr-q8',
      stem:
        'A 31-week fetus with UA-AEDV receives betamethasone. Twenty-four hours later the umbilical artery shows a return of positive end-diastolic flow. What is the correct interpretation?',
      options: [
        'Placental vascular pathology has resolved; delivery can be deferred to 37 weeks',
        'This is a transient steroid-induced fetoplacental vasodilation lasting 48–72 hours; surveillance must continue and the delivery plan is unchanged',
        'The fetus has developed cerebral oedema and requires immediate delivery',
        'The corticosteroids have caused fetal anaemia and the dose should be repeated',
      ],
      answerIndex: 1,
      explanation:
        'Betamethasone causes transient fetoplacental vasodilation with return of end-diastolic flow in ~60–70% of AEDV fetuses for 48–72 hours. It does not mean placental recovery. The ~30% who fail to improve have a higher risk of rapid acidemic decompensation, so intensive DV/cCTG monitoring continues for 72 hours after steroids.',
    },
    {
      id: 'pg-fgr-q9',
      stem:
        'A 37-week induction is planned for late-onset FGR with UA-PI > 95th percentile but positive end-diastolic flow. The cervix is unfavourable. Which induction strategy is preferred by SOGC No. 442, and why?',
      options: [
        'Misoprostol, because it achieves the fastest cervical ripening',
        'Dinoprostone gel, because prostaglandins are safest in FGR',
        'Transcervical Foley balloon, because mechanical ripening avoids prostaglandin-induced tachysystole in a growth-restricted fetus',
        'Immediate caesarean section without a trial of labour for all late FGR',
      ],
      answerIndex: 2,
      explanation:
        'Mechanical cervical ripening with a Foley balloon is preferred over prostaglandins (misoprostol or dinoprostone) in late FGR. Growth-restricted fetuses have depleted myocardial glycogen reserves and tolerate uterine tachysystole poorly. Continuous EFM is mandatory, with a low threshold for caesarean if the trace deteriorates.',
    },
    {
      id: 'pg-fgr-q10',
      stem:
        'A placenta from a 33-week FGR delivery shows decidual arteriopathy, accelerated villous maturation, distal villous hypoplasia and infarcts. What does this histopathology imply for the next pregnancy?',
      options: [
        'Recurrence risk is 30–80% and aspirin is ineffective, so no prophylaxis is needed',
        'This is maternal vascular malperfusion (MVM), with a ~10–15% recurrence risk that is reduced by aspirin 162 mg started before 16 weeks',
        'This indicates chronic histiocytic intervillositis and requires LMWH alone',
        'Placental histopathology does not alter recurrence counselling in FGR',
      ],
      answerIndex: 1,
      explanation:
        'These are the Amsterdam criteria for maternal vascular malperfusion (MVM). MVM-mediated FGR recurs in ~10–15% and responds to low-dose aspirin 162 mg at bedtime started before 16 weeks. Non-MVM lesions (CHIV, MPVFD/maternal floor infarction, VUE) carry a 30–80% recurrence risk and need specialist MFM protocols.',
    },
  ],
};
