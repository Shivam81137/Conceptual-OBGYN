import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 02 — Fetal Growth Restriction (SOGC No. 442)
 * ---------------------------------------------------------------------------
 * Complete clinical vault for SOGC Clinical Practice Guideline No. 442
 * (Kingdom et al.) and the International Gordijn Delphi Consensus:
 * constitutional SGA vs pathological FGR, early (< 32+0 weeks) vs late
 * (≥ 32+0 weeks) criteria, maternal vascular malperfusion and the PlGF /
 * sFlt-1 axis, aspirin prevention, the UtA → UA → MCA/CPR → DV Doppler
 * cascade, the TRUFFLE protocol and the stage-based delivery ladder.
 *
 * Offline-first: every note, diagram blueprint, flashcard and MCQ ships in the
 * client bundle. The API only reconciles the module index.
 */

export const FGR_GUIDELINE_442_MODULE: StudioModule = {
  id: 'pg-mod-02-fgr',
  track: 'NEET_PG',
  title: 'Fetal Growth Restriction (SOGC Guideline No. 442)',
  shortTitle: 'FGR · SOGC 442',
  summary:
    'SOGC No. 442 + Gordijn Delphi in one vault: constitutional SGA vs pathological FGR, early (< 32w) vs late (≥ 32w) criteria, PlGF < 100 pg/mL and sFlt-1/PlGF > 38–85, bedtime aspirin before 16 weeks, the UtA → UA → MCA/CPR → DV Doppler cascade, AEDF/REDF villous thresholds, TRUFFLE cCTG STV and the 30–39-week delivery ladder.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'Delphi Consensus (<32 vs ≥32 Wks)',
    'SGA (<10th) vs Severe FGR (<3rd)',
    'PlGF <100 pg/mL & Aspirin <16 Wks',
    'UA Doppler (AEDF / REDF) & CPR',
    'Ductus Venosus a-Wave & cCTG STV',
    'SOGC Delivery Cutoffs (30 to 39 Wks)',
  ],
  sourceTag: 'SOGC Clinical Practice Guideline No. 442 • Gordijn Delphi Consensus • ISUOG / FIGO',
  updatedAtISO: '2026-10-21T06:00:00.000Z',
  notes: [
    /* ==================================================================== */
    /* 1. Terminology, SGA vs FGR & the Delphi consensus                    */
    /* ==================================================================== */
    {
      id: 'delphi-consensus-sga-vs-fgr',
      heading: 'Terminology, SGA vs FGR & the Gordijn Delphi Consensus',
      intro:
        'FGR affects up to 10% of singleton pregnancies and is a pathological failure to reach genetic growth potential, usually from maternal vascular malperfusion. Modern practice separates the constitutionally small fetus from true FGR at 32+0 weeks: early disease is a severe placentation failure, late disease a milder villous lesion unmasked by term metabolic demand. Exclude aneuploidy, structural anomalies and infection before applying the criteria.',
      flow: [
        'Date the pregnancy · CRL 10–84 mm at 7+0–13+6 weeks · never re-date later',
        'Suspect a small fetus · Hadlock EFW (HC + BPD + AC + FL) or AC < 10th centile',
        'Early < 32+0 wks · EFW/AC < 3rd or UA-AEDF = FGR; < 10th + (UtA-PI > 95th or UA-PI > 95th) = FGR',
        'Late ≥ 32+0 wks · EFW/AC < 3rd = FGR; otherwise ≥ 2 of 3: < 10th, drop > 2 quartiles, CPR < 5th or UA-PI > 95th',
        'No congenital anomaly · then apply the Delphi gate and set surveillance intensity',
      ],
      bullets: [
        'Accurate dating is the prerequisite: first-trimester crown–rump length (CRL 10–84 mm, corresponding to 7+0–13+6 weeks) is the gold standard. Once established by CRL, gestational age must NEVER be recalculated later in pregnancy, because re-dating masks early-onset FGR. If CRL > 84 mm (> 14 weeks), date by head circumference (HC).',
        'EFW uses the multiparametric Hadlock 3- or 4-parameter formula combining HC, BPD, AC and FL. Abdominal circumference (AC) is the single most sensitive biometric parameter for FGR: fetal hypoxia depletes hepatic glycogen, so abdominal girth shrinks first.',
        'Minimum scan interval: serial biometry to assess growth velocity must be performed at least 14 days (2–3 weeks) apart, otherwise the difference measured is smaller than ultrasound inter-observer error.',
        'Constitutional SGA (SOGC No. 442): EFW or AC < 10th percentile (specifically 3rd–9th) for gestational age WITH normal interval growth velocity, normal anatomy, normal umbilical/uterine/MCA Dopplers and normal maternal PlGF. Pathological FGR is a failure to reach genetic growth potential, carrying a 4- to 8-fold increased risk of perinatal morbidity and stillbirth.',
        'Early-onset FGR (< 32+0 weeks), with no congenital anomalies: SOLITARY criterion (any one suffices) = EFW or AC < 3rd percentile OR umbilical artery absent end-diastolic flow (AEDF). CONTRIBUTORY criteria = EFW or AC < 10th percentile PLUS at least one of UtA-PI > 95th percentile or UA-PI > 95th percentile.',
        'Late-onset FGR (≥ 32+0 weeks), with no congenital anomalies: SOLITARY criterion = EFW or AC < 3rd percentile. CONTRIBUTORY criteria require at least 2 of 3: (1) EFW or AC < 10th percentile; (2) growth deceleration crossing > 2 quartiles (> 50 percentiles), e.g. 70th → 15th; (3) cerebroplacental ratio (CPR) < 5th percentile OR UA-PI > 95th percentile.',
      ],
      table: {
        head: ['Feature', 'Early-onset FGR (< 32+0 weeks)', 'Late-onset FGR (≥ 32+0 weeks)'],
        rows: [
          ['Prevalence (% of all FGR)', '20%–30% (rarer, severe phenotype)', '70%–80% (most common phenotype)'],
          ['Delphi solitary criteria', 'EFW/AC < 3rd centile OR UA-AEDF', 'EFW/AC < 3rd centile'],
          [
            'Delphi contributory criteria',
            'EFW/AC < 10th + (UtA-PI > 95th OR UA-PI > 95th)',
            '≥ 2 of 3: EFW/AC < 10th, drop > 2 quartiles (> 50 centiles), CPR < 5th or UA-PI > 95th',
          ],
          ['Underlying placental pathology', 'Severe MVM (> 50–70% villous tree obliteration)', 'Mild/focal villous diffusion impairment (< 30% villous obliteration)'],
          ['Maternal preeclampsia association', 'Very strong (50%–70% develop preeclampsia)', 'Weak to moderate (10%–15%)'],
          ['Angiogenic profile', 'Markedly abnormal: PlGF < 100 pg/mL; sFlt-1/PlGF > 38 to > 85', 'Moderately reduced PlGF; sFlt-1/PlGF > 38 identifies high risk'],
          ['Umbilical artery Doppler', 'Almost always abnormal (PI > 95th → AEDF → REDF)', 'Frequently NORMAL (> 70% have normal UA-PI)'],
          ['Primary surveillance vessels', 'Umbilical artery + Ductus Venosus + cCTG STV', 'MCA-PI < 5th + CPR < 5th'],
          ['Fetal tolerance to hypoxia', 'High cardiovascular adaptation, high prematurity/IUFD risk', 'Low tolerance to acute intrapartum hypoxia — rapid decompensation in labour'],
          ['Primary clinical challenge', 'Timing delivery: extreme prematurity vs stillbirth', 'Detection: often missed without third-trimester biometry + CPR'],
        ],
      },
      diagram: [
        {
          kind: 'delphi-early-vs-late-fgr',
          title: 'Diagram 1 · Gordijn Delphi diagnostic architecture',
          caption:
            'Constitutional SGA (3rd–10th centile, normal Dopplers/PlGF) sits beside two pathological phenotypes: early-onset FGR (< 32+0 weeks) with solitary or contributory criteria, and late-onset FGR (≥ 32+0 weeks) requiring a solitary criterion or 2 of 3 contributory criteria.',
        },
      ],
      pearls: [
        'An EFW or AC < 3rd percentile at any gestational age — or umbilical artery AEDF before 32 weeks — is a standalone diagnostic criterion for FGR even when every other Doppler index is normal (Gordijn Delphi Consensus & SOGC No. 442).',
        'SGA is a statistical descriptor (EFW/AC < 10th centile); FGR is a pathological diagnosis of failed growth potential carrying a 4- to 8-fold rise in perinatal morbidity and stillbirth.',
        'Never repeat biometry (EFW/AC) less than 14 days apart — shorter intervals measure sonographic noise, whereas Doppler and amniotic fluid can be repeated every 24–72 hours in severe FGR.',
      ],
      trap: {
        title: 'Examiner trap — late FGR can sit above the 10th percentile',
        body:
          'In late-onset FGR (≥ 32 weeks), a fetus whose EFW falls from the 75th to the 12th percentile (crossing > 2 quartiles / > 50 centiles) WITH a CPR < 5th percentile meets the Delphi definition of late FGR even though its absolute EFW is slightly above the 10th percentile. Two contributory criteria are enough — do not require EFW < 10th.',
      },
    },

    /* ==================================================================== */
    /* 2. Pathophysiology, PlGF biomarkers & screening                      */
    /* ==================================================================== */
    {
      id: 'mvm-plgf-biomarkers-screening',
      heading: 'Placental Pathophysiology, PlGF Biomarkers & Screening',
      intro:
        'Defective trophoblast invasion leaves the spiral arteries as narrow, muscular, high-resistance vessels. The resulting ischaemia–reperfusion injury, oxidative stress and syncytial knots suppress pro-angiogenic PlGF and overproduce anti-angiogenic sFlt-1 — the biochemical signature that separates placental FGR from a constitutionally small baby.',
      flow: [
        'First wave · extravillous trophoblast invades decidual spiral arteries at 8–10 weeks',
        'Second wave · myometrial invasion at 14–18 weeks destroys the musculoelastic media',
        'Failure · persistent high-resistance vessels → ischaemia–reperfusion, villous infarction, syncytial knots',
        'Biomarker shift · PlGF < 100 pg/mL and sFlt-1/PlGF > 38 (> 85 in severe early disease)',
        'Clinical read-out · placental FGR ± preeclampsia, preterm delivery within 14 days',
      ],
      bullets: [
        'Normal placentation: extravillous cytotrophoblasts invade the maternal spiral arteries in two waves (decidual 8–10 weeks; myometrial 14–18 weeks), destroying the musculoelastic media to create high-capacitance, low-resistance vessels.',
        'In FGR/preeclampsia, impaired trophoblastic invasion and defective spiral-artery remodelling leave persistent high-resistance uteroplacental vessels, causing ischaemia–reperfusion injury, oxidative stress, villous infarction, distal villous hypoplasia and syncytial knots.',
        'Placental growth factor (PlGF) is a pro-angiogenic factor secreted by healthy syncytiotrophoblast. Chronic placental underperfusion causes loss of progenitor cytotrophoblasts and suppresses maternal circulating PlGF (< 100 pg/mL or < 5th percentile).',
        'Soluble fms-like tyrosine kinase-1 (sFlt-1) is an anti-angiogenic decoy receptor over-secreted by hypoxic syncytial knots. It binds free VEGF and PlGF, driving maternal endothelial dysfunction (preeclampsia). The sFlt-1/PlGF ratio rises above 38, and above 85 in severe early disease.',
        'Clinical utility of maternal PlGF at 19–36 weeks: (1) a low PlGF (< 100 pg/mL) or elevated sFlt-1/PlGF ratio (> 38; > 85 in severe early disease) confirms maternal vascular malperfusion (MVM) and predicts delivery within 14 days plus superimposed preeclampsia; (2) a normal PlGF (≥ 100 pg/mL) or ratio ≤ 38 has a > 98% negative predictive value for severe placental dysfunction requiring delivery within 1–2 weeks.',
        'Symphysis–fundal height (SFH) is measured serially from 24 weeks but has low sensitivity (~20–30%) and is unreliable in maternal obesity (BMI ≥ 30), multiple fibroids or polyhydramnios.',
        'Selective third-trimester growth ultrasound (26–28 weeks and/or 32–34 weeks) is recommended for major risk factors: prior FGR or preeclampsia, chronic hypertension, diabetes with vascular disease, renal disease, APS/SLE, smoking or substance use, extremes of maternal age, PAPP-A < 0.4 MoM, low PlGF, an echogenic/thick/globular placenta, or velamentous/marginal cord insertion.',
      ],
      diagram: [
        {
          kind: 'mvm-plgf-aspirin-pathway',
          title: 'Diagram 2 · Spiral-artery remodelling, syncytial knots & the PlGF/sFlt-1 axis',
          caption:
            'Normal remodelled spiral artery: low UtA-PI, high PlGF, low sFlt-1. FGR maternal vascular malperfusion: narrow muscular artery with a persistent bilateral notch beyond 24 weeks, syncytial knots secreting sFlt-1, PlGF < 100 pg/mL and sFlt-1/PlGF > 38–85. Bedtime low-dose aspirin before 16 weeks shifts the balance back toward PGI2.',
        },
      ],
      pearls: [
        'Maternal PlGF (< 100 pg/mL) or an elevated sFlt-1/PlGF ratio (> 38) directly reflects placental maternal vascular malperfusion and separates true placental FGR from a constitutionally small (SGA) fetus (SOGC No. 442).',
        'A normal PlGF (≥ 100 pg/mL) or sFlt-1/PlGF ≤ 38 has a > 98% negative predictive value for severe placental dysfunction requiring delivery within 1–2 weeks — it is a rule-out test, not a rule-in test.',
      ],
      trap: {
        title: 'Examiner trap — the uterine artery notch cutoff is 22–24 weeks',
        body:
          'A bilateral early-diastolic (protodiastolic) notch in the uterine artery waveform is physiological in the first trimester. It becomes pathological only when it persists beyond 22–24 weeks gestation alongside a mean UtA-PI > 95th centile — the classic sonographic hallmark of failed trophoblastic invasion of the spiral arteries.',
      },
    },

    /* ==================================================================== */
    /* 3. Prevention, aspirin, LMWH myth & aetiological workup              */
    /* ==================================================================== */
    {
      id: 'prevention-aspirin-genetic-workup',
      heading: 'Prevention, Aspirin < 16 Weeks & the Genetic/CMV Workup',
      intro:
        'Aspirin prevents; it does not treat. Start 81–162 mg at bedtime before 16+0 weeks in high-risk women and stop at 36 weeks. Once FGR is established, the workup asks a single question: is this placental, genetic or infective? The answer changes counselling, not the aspirin dose.',
      flow: [
        'High-risk woman · prior FGR/preeclampsia, chronic hypertension, renal disease, APS/SLE, positive multimodal screen',
        'Start aspirin 81–162 mg PO at bedtime before 16+0 weeks · continue to 36+0 weeks',
        'Do NOT add LMWH unless antiphospholipid syndrome is confirmed',
        'Established early FGR · detailed anatomy + maternal PlGF + amniocentesis for QF-PCR + CMA + CMV PCR when indicated',
        'Screen for preeclampsia in 30–50% of early FGR · BP, urine PCR, platelets, LFT, creatinine, PlGF ratio',
      ],
      bullets: [
        'Low-dose aspirin: 81–162 mg orally once daily at BEDTIME (100–150 mg/day is the optimal dose–response), started before 16+0 weeks (ideally 11–16 weeks) and continued until 36+0 weeks. Indications: prior preeclampsia or placental FGR, chronic hypertension, pregestational diabetes, chronic kidney disease, SLE/APS, or a positive first-trimester multimodal screen (maternal factors + MAP + UtA-PI + PlGF/PAPP-A).',
        'Aspirin mechanism: irreversible platelet cyclo-oxygenase-1 (COX-1) inhibition suppresses vasoconstrictive thromboxane A2 (TXA2) while sparing endothelial prostacyclin (PGI2), and reduces trophoblast hypoxia-induced sFlt-1 release. Aspirin should NOT be started de novo after 16–20 weeks simply to “treat” established FGR.',
        'LMWH myth: routine prophylactic low-molecular-weight heparin is NOT recommended to prevent recurrent FGR or placental dysfunction in women without confirmed antiphospholipid syndrome (APS). Multicentre RCTs (TIPPS, FRUIT, HEPEPE) show no reduction in FGR or preeclampsia in non-APS patients.',
        'Ineffective or harmful interventions for established FGR: maternal bed rest (contraindicated — increases VTE without improving growth), maternal hyperoxygenation, nitric oxide donors and sildenafil. Sildenafil is contraindicated after the STRIDER trial showed increased neonatal pulmonary hypertension and mortality.',
        'Genetic testing: up to 15–20% of early-onset FGR (< 32 weeks) — especially with structural anomalies, polyhydramnios, short femur or normal uterine/umbilical Dopplers — is caused by aneuploidy (Trisomy 18 [Edwards], Trisomy 13 [Patau], triploidy [69,XXX/XXY], Trisomy 21) or submicroscopic copy-number variants. The gold standard is amniocentesis with QF-PCR/FISH PLUS chromosomal microarray (CMA), which adds 4–10% diagnostic detection over karyotyping in non-anomalous early FGR.',
        'Why cfDNA (NIPT) cannot replace amniocentesis: it screens only common aneuploidies, misses pathogenic microdeletions/duplications detected by CMA, and may instead reflect confined placental mosaicism (e.g. Trisomy 16 CPM causing severe placental FGR in a chromosomally normal fetus).',
        'Infection screening is targeted, not a routine full TORCH panel. Test specifically for cytomegalovirus (maternal IgM, IgG, IgG avidity and amniotic-fluid CMV PCR if amniocentesis is done) in early/severe FGR or when ultrasound shows microcephaly, ventriculomegaly, periventricular calcifications, echogenic bowel, ascites or oligohydramnios/polyhydramnios. Screen toxoplasmosis, syphilis, rubella, Zika or malaria only with specific clinical, epidemiological or sonographic clues.',
        'Preeclampsia surveillance: 30–50% of early-onset FGR develops superimposed preeclampsia. Check blood pressure, urine protein-to-creatinine ratio, CBC/platelets, liver enzymes, creatinine and PlGF or the sFlt-1:PlGF ratio.',
      ],
      table: {
        head: ['Feature', 'Placental insufficiency (MVM)', 'Genetic aneuploidy (e.g. Trisomy 18)', 'Congenital viral infection (e.g. CMV)'],
        rows: [
          ['Proportion of FGR', '70%–80% of all FGR', '15%–20% of early-onset FGR (< 32 weeks)', '~5% of FGR'],
          ['Biometric pattern', 'Asymmetric (head-sparing) first: AC << HC; symmetric only if severe/very early', 'Early symmetric (HC, AC and FL all < 3rd) or isolated short FL', 'Symmetric early FGR + microcephaly (HC < 3rd)'],
          ['Amniotic fluid', 'Oligohydramnios (SDP < 2.0 cm) from renal vasoconstriction', 'Polyhydramnios (SDP > 8.0 cm / AFI > 25 cm) — classic in Trisomy 18', 'Oligo- or polyhydramnios / non-immune hydrops'],
          ['Uterine & umbilical Dopplers', 'Markedly abnormal (UtA-PI > 95th, UA-PI > 95th / AEDF / REDF)', 'Typically NORMAL', 'Usually normal'],
          ['Maternal serum PlGF', 'Low (< 100 pg/mL or < 5th centile)', 'Normal (except triploidy with coexisting placental pathology)', 'Normal'],
          ['Structural ultrasound clues', 'Thick/globular echogenic “jelly-like” placenta, marginal/velamentous cord', 'Clenched hands, rocker-bottom feet, VSD/AVSD, strawberry skull, choroid plexus cysts, omphalocele', 'Periventricular calcifications (CMV), ventriculomegaly, echogenic bowel, hepatosplenomegaly, ascites'],
          ['Definitive diagnostic test', 'PlGF / sFlt-1:PlGF + postnatal Amsterdam placental pathology', 'Amniocentesis for QF-PCR + chromosomal microarray (CMA)', 'Amniocentesis (> 20 weeks) for CMV/Toxoplasma DNA PCR + maternal IgG avidity'],
        ],
      },
      diagram: [
        {
          kind: 'fgr-genetic-cmv-workup',
          title: 'Diagram 3 · Early/severe FGR aetiological workup',
          caption:
            'Three branches from a single diagnosis: placental MVM (asymmetric AC lag, oligohydramnios, abnormal UtA/UA and low PlGF), genetic aneuploidy (symmetric early FGR, polyhydramnios, normal Dopplers/PlGF) and congenital infection (microcephaly, periventricular calcification, echogenic bowel). Amniocentesis with QF-PCR + CMA + CMV PCR is the definitive test for the non-placental branches.',
        },
      ],
      pearls: [
        'Prescribe low-dose aspirin 81–162 mg PO at bedtime before 16+0 weeks and continue to 36 weeks in women at high risk of placental FGR/preeclampsia. Do NOT prescribe LMWH for FGR prevention unless antiphospholipid syndrome is confirmed.',
        'Never prescribe sildenafil or strict maternal bed rest to treat FGR: STRIDER was halted for lethal persistent pulmonary hypertension of the newborn without survival benefit, and bed rest increases maternal VTE.',
      ],
      trap: {
        title: 'Examiner trap — FGR + polyhydramnios + normal Dopplers = Trisomy 18',
        body:
          'Placental insufficiency causes oligohydramnios and abnormal Dopplers. When a severely growth-restricted fetus has POLYHYDRAMNIOS and NORMAL uterine/umbilical Dopplers, immediately suspect fetal aneuploidy (Trisomy 18) or a neuromuscular/GI swallowing defect and offer amniocentesis with chromosomal microarray (CMA).',
      },
      traps: [
        {
          title: 'Examiner trap — aspirin is prevention, not treatment',
          body:
            'Do not start aspirin de novo at 24–28 weeks to “treat” an already growth-restricted fetus. The window closes before 16+0 weeks, when spiral-artery remodelling is still modifiable. After that, the drug is prophylaxis for the next pregnancy, not rescue therapy for this one.',
        },
      ],
    },

    /* ==================================================================== */
    /* 4. Umbilical artery Doppler cascade                                  */
    /* ==================================================================== */
    {
      id: 'umbilical-doppler-cascade',
      heading: 'Umbilical Artery Doppler — Villous Obliteration, AEDF & REDF',
      intro:
        'Umbilical artery Doppler is the only antenatal surveillance modality proven in randomised trials to reduce perinatal mortality in FGR (~29–38%). It is a pressure gauge for the placental villous bed: as tertiary villous arterioles are obliterated, end-diastolic flow falls, disappears and finally reverses.',
      flow: [
        'Normal · continuous forward end-diastolic flow · UA-PI < 95th · < 30% villous loss',
        'Elevated impedance · UA-PI > 95th with positive end-diastolic flow · 30–50% villous loss',
        'AEDF · end-diastolic velocity reaches 0 cm/s · 50–70% villous loss',
        'REDF · diastolic flow reverses below baseline · > 70% villous loss · acidemia within days',
      ],
      bullets: [
        'Umbilical artery (UA) Doppler is the ONLY antenatal fetal surveillance modality proven in randomised controlled trials (Cochrane review) to reduce perinatal mortality in high-risk/FGR pregnancies, by ~29–38%.',
        'Technical standard: sample a free-floating loop of umbilical cord during fetal quiescence/apnoea, with an insonation angle < 30°. Resistance is naturally higher at the fetal abdominal wall insertion and lower at the placental insertion.',
        'Normal UA waveform: continuous, high-velocity forward flow throughout diastole (S/D ratio < 3.0 after 30 weeks; UA-PI < 95th percentile).',
        'Elevated UA impedance (UA-PI > 95th percentile with positive end-diastolic flow, PEDF) occurs when 30–50% of the placental tertiary stem villous arterial bed is obliterated.',
        'Absent end-diastolic flow (AEDF): diastolic velocity reaches the baseline zero line (0 cm/s) at end-diastole, when 50–70% of the placental microvascular bed is obliterated.',
        'Reversed end-diastolic flow (REDF): diastolic flow reverses below the baseline, back toward the fetus, when > 70% of the placental villous tree is obliterated. It signifies impending fetal acidemia and intrauterine demise within days if left undelivered.',
      ],
      diagram: [
        {
          kind: 'ua-doppler-waveforms-aedf-redf',
          title: 'Diagram 4 · Umbilical artery spectral Doppler progression',
          caption:
            'Four-stage waveform atlas: normal PEDF (< 30% villous loss) → elevated UA-PI > 95th centile (30–50% loss) → absent end-diastolic flow (50–70% loss) → reversed end-diastolic flow (> 70% loss). The stage, not the absolute PI, sets the delivery window.',
        },
      ],
      pearls: [
        'Umbilical artery Doppler is the only fetal surveillance modality proven by RCTs to reduce perinatal mortality (~30% reduction) in FGR. AEDF reflects 50–70% placental villous obliteration; REDF reflects > 70%.',
        'UA Doppler is NOT a routine screening test in low-risk, uncomplicated pregnancies. It is indicated for suspected FGR, SGA, preeclampsia or maternal vascular disease.',
      ],
      trap: {
        title: 'Examiner trap — the corticosteroid “Doppler honeymoon”',
        body:
          'After maternal betamethasone or dexamethasone, ~50–60% of fetuses with AEDF show a transient return of positive end-diastolic flow for 48–72 hours because of steroid-induced placental vasodilation. Recognise this as a pharmacological effect and continue intensive surveillance — do not de-escalate or discharge the patient.',
      },
    },

    /* ==================================================================== */
    /* 5. MCA brain-sparing, CPR, ductus venosus & TRUFFLE                  */
    /* ==================================================================== */
    {
      id: 'mca-cpr-ductus-venosus-truffle',
      heading: 'MCA Brain-Sparing, CPR, Ductus Venosus & the TRUFFLE Protocol',
      intro:
        'The fetal circulation defends the brain first. Cerebral vasodilation raises diastolic flow and lowers MCA-PI, while the CPR captures that redistribution against a rising placental resistance. When the heart begins to fail, the ductus venosus a-wave disappears and then reverses — the terminal signal before acidemia.',
      flow: [
        'Hypoxaemia · chemoreceptor-mediated cerebral vasodilation · MCA-PI falls < 5th centile',
        'Combined index · CPR = MCA-PI / UA-PI falls < 5th centile (< 1.08) before either vessel alone',
        'Preterminal · loss of brain-sparing with cerebral oedema pseudo-normalises MCA-PI',
        'Myocardial decompensation · DV-PI > 95th → absent a-wave → reversed a-wave + pulsatile umbilical vein',
        'TRUFFLE · DV a-wave + cCTG STV < 2.6 / 3.0 / 3.5 ms by gestational band governs delivery < 32 weeks',
      ],
      bullets: [
        'Normal fetal cerebral circulation is a high-resistance bed with low diastolic flow and a high MCA pulsatility index. Chronic hypoxaemia and hypercapnia trigger chemoreceptor-mediated cerebral vasodilation that preserves oxygen delivery to brain, heart and adrenals while vasoconstricting renal, splanchnic and peripheral beds — hence oligohydramnios and hepatic shrinkage.',
        'Doppler signature of brain-sparing: increased diastolic flow in the MCA causes a DECREASE in MCA-PI (< 5th percentile). Insonate the proximal third of the MCA just after its origin from the Circle of Willis at an angle close to 0°, avoiding excessive transducer pressure on the fetal head, which artificially lowers diastolic flow and raises MCA-PI.',
        'Preterminal “loss of brain-sparing” trap: in terminal acidemia and severe cerebral oedema, intracranial pressure rises above perfusion pressure, so MCA-PI pseudo-normalises (rises back) just before death. MCA Doppler is therefore NEVER used to time delivery in early-onset FGR (< 32 weeks); its primary utility is late-onset FGR (≥ 32 weeks).',
        'Cerebroplacental ratio: CPR = MCA-PI ÷ UA-PI. Abnormal when < 5th percentile (or an absolute ratio < 1.08 / < 1.0). Because it captures a rising UA-PI and a falling MCA-PI simultaneously, CPR becomes abnormal earlier than either index alone and predicts intrapartum distress, emergency caesarean for non-reassuring fetal heart tracing, neonatal acidemia and NICU admission in late FGR.',
        'Ductus venosus anatomy and waveform: it connects the intra-abdominal umbilical vein to the inferior vena cava/right atrium, shunting well-oxygenated blood through the foramen ovale to the left atrium. The normal triphasic forward waveform is S-wave (ventricular systole, highest velocity), v-descent (end-systolic relaxation), D-wave (early passive ventricular diastole) and a-wave (atrial contraction, normally positive/forward).',
        'Pathological DV progression reflects right ventricular afterload, myocardial hypoxia and rising central venous pressure: elevated DV-PI (> 95th percentile) → absent a-wave (touches baseline) → reversed a-wave (retrograde during atrial contraction) + pulsatile umbilical vein flow. An absent or reversed a-wave indicates advanced myocardial decompensation and metabolic acidemia, heralding intrauterine demise within 48–72 hours (up to 7 days) if undelivered.',
        'Chronological sequence of hypoxic deterioration in early FGR: elevated UtA-PI/UA-PI > 95th → decreased MCA-PI (< 5th) and CPR (< 5th) → UA AEDF → UA REDF → elevated DV-PI (> 95th) → absent/reversed DV a-wave and reduced cCTG STV → loss of fetal tone/movements and late decelerations → stillbirth.',
        'Order of loss of biophysical profile parameters in chronic hypoxia (last to develop in embryology = first to disappear): (1) fetal heart rate reactivity/NST, lost first at pH ~7.20; (2) fetal breathing, lost at pH ~7.15; (3) gross body movements, lost at pH ~7.10; (4) fetal muscle tone, lost last at pH < 7.05. Oligohydramnios (SDP < 2.0 cm) is a chronic marker of renal hypoperfusion that develops alongside brain-sparing.',
        'TRUFFLE gold standard for early FGR (< 32 weeks): combining ductus venosus Doppler with computerised CTG short-term variation (STV < 2.6 ms at 26–28+6 weeks; < 3.0 ms at 29–31+6 weeks; < 3.5 ms at 32–33+6 weeks) yields the highest survival without neurodevelopmental impairment at 2 years (85–95% intact survival).',
      ],
      table: {
        head: ['Vessel / modality', 'Normal finding', 'Pathological cutoff in FGR', 'Haemodynamic mechanism', 'Clinical role'],
        rows: [
          [
            'Uterine artery (UtA-PI)',
            'Low resistance, high diastolic flow, no notch after 24 weeks',
            'Mean UtA-PI > 95th or persistent bilateral notch > 24 weeks',
            'Failed trophoblastic invasion of the maternal spiral arteries (MVM)',
            'Screening and Delphi diagnostic criterion < 32 weeks',
          ],
          [
            'Umbilical artery (UA-PI / AEDF / REDF)',
            'Continuous forward end-diastolic flow (PI < 95th)',
            'PI > 95th (30–50% villous loss); AEDF (50–70%); REDF (> 70%)',
            'Progressive obliteration of tertiary placental villous arterioles',
            'Only modality proven in RCTs to reduce perinatal mortality (~30%); sets 36–37w (PI > 95th), 33–34w (AEDF), 30–32w (REDF)',
          ],
          [
            'Middle cerebral artery (MCA-PI)',
            'High-resistance bed with low diastolic flow (PI > 5th)',
            'MCA-PI < 5th (high diastolic velocity = vasodilation)',
            'Chemoreceptor-mediated cerebral vasodilation in chronic hypoxia (brain-sparing)',
            'Key trigger in late FGR ≥ 32 weeks; do NOT use to time delivery < 32 weeks',
          ],
          [
            'Cerebroplacental ratio (CPR = MCA-PI / UA-PI)',
            '> 5th centile (or > 1.08)',
            'CPR < 5th centile (or < 1.08)',
            'Combined rising placental resistance and falling cerebral resistance',
            'Most sensitive index in late FGR; predicts intrapartum distress and emergency caesarean',
          ],
          [
            'Ductus venosus (DV)',
            'Triphasic forward flow: S, D and positive a-wave',
            'DV-PI > 95th → absent or reversed a-wave',
            'Right heart failure, myocardial hypoxia and raised central venous pressure',
            'Gold-standard delivery trigger in early FGR < 32 weeks; reversed a-wave predicts death within 48–72 hours',
          ],
          [
            'cCTG STV & BPP',
            'STV > 3.5 ms; BPP 8/8 or 10/10; SDP 2–8 cm',
            'STV < 2.6 ms (< 29w) or < 3.0 ms (29–32w); BPP ≤ 4/10; SDP < 2.0 cm',
            'CNS acidemia (pH < 7.15–7.05) and renal hypoperfusion',
            'Immediate delivery trigger alongside DV in the TRUFFLE protocol',
          ],
        ],
      },
      diagram: [
        {
          kind: 'mca-cpr-ductus-venosus-cascade',
          title: 'Diagram 5 · Brain-sparing, CPR and the ductus venosus',
          caption:
            'Left: MCA shifts from a high-resistance waveform to vasodilated brain-sparing (high diastolic flow, MCA-PI < 5th; CPR < 5th). Right: the ductus venosus triphasic S–D–a waveform progresses from a positive a-wave to an absent then reversed a-wave during atrial contraction.',
        },
      ],
      pearls: [
        'Early FGR (< 32 weeks) uses ductus venosus + cCTG STV (TRUFFLE); late FGR (≥ 32 weeks) uses MCA-PI < 5th and CPR < 5th. The phenotype decides the trigger vessel.',
        'Biophysical activities disappear in the reverse order of embryological development: FHR reactivity first → breathing → gross movements → tone last (pH < 7.05).',
      ],
      trap: {
        title: 'Examiner trap — the percentile direction reverses only at the MCA',
        body:
          'In every vascular bed except the MCA, worsening FGR raises the pulsatility index (UtA-PI ↑, UA-PI ↑, DV-PI ↑). In the MCA, compensatory cerebral vasodilation lowers resistance, so MCA-PI DECREASES (< 5th percentile) and CPR DECREASES (< 5th percentile / < 1.08). Distractors love to reverse this.',
      },
      traps: [
        {
          title: 'Examiner trap — MCA pseudo-normalisation is not recovery',
          body:
            'In terminal acidemia, cerebral oedema raises intracranial pressure and MCA-PI drifts back toward normal just before fetal death. A “normalising” MCA in a previously brain-sparing fetus is a preterminal sign, not improvement — never use it to justify delay.',
        },
      ],
    },

    /* ==================================================================== */
    /* 6. Stage-based surveillance & delivery timing                        */
    /* ==================================================================== */
    {
      id: 'sogc-delivery-timing-management',
      heading: 'Stage-Specific Surveillance, Delivery Timing & Peripartum Care',
      intro:
        'The delivery ladder is the highest-yield table in the module. Constitutional SGA waits until 38–39 weeks; severe smallness without Doppler abnormality delivers at 37; abnormal UA-PI or CPR at 36–37; AEDF at 33–34 by caesarean; REDF at 30–32 by caesarean; and a decompensated DV or cCTG at ≥ 26 weeks is an immediate caesarean after steroids and magnesium.',
      flow: [
        'Constitutional SGA 3rd–10th · normal growth/Dopplers/PlGF · 38+0–39+0 wks · vaginal IOL',
        'Isolated EFW/AC < 3rd with normal Dopplers · 37+0 wks (36+0–37+6) · Foley IOL + continuous EFM',
        'UA-PI > 95th (PEDF) or MCA-PI/CPR < 5th · 36+0–37+0 wks · careful IOL or CS',
        'UA-AEDF · 33+0–34+0 wks · planned elective caesarean',
        'UA-REDF · 30+0–32+0 wks · planned elective caesarean',
        'Absent/reversed DV a-wave, abnormal cCTG STV or BPP ≤ 4/10 · ≥ 26+0 wks · immediate caesarean',
      ],
      bullets: [
        'Constitutional SGA (EFW/AC 3rd–10th centile with normal growth velocity, normal Dopplers and normal PlGF): serial biometry + UA/MCA Doppler every 2 weeks; deliver at 38+0 to 39+0 weeks by vaginal delivery/induction of labour with continuous electronic fetal monitoring. Do not let the pregnancy drift past 39–40 weeks.',
        'Stage I — mild/uncomplicated FGR: (a) isolated EFW/AC < 3rd centile with normal Dopplers → deliver at 37+0 weeks (36+0–37+6); (b) FGR with UA-PI > 95th (positive end-diastolic flow) or brain-sparing (MCA-PI < 5th or CPR < 5th) → deliver at 36+0 to 37+0 weeks. Surveillance is weekly or twice-weekly Doppler + NST/BPP. Vaginal birth is possible with continuous intrapartum EFM; prefer mechanical ripening with a transcervical Foley balloon over high-dose prostaglandins to avoid tachysystole, and keep a low threshold for emergency caesarean (intrapartum CS rate ~30–40%).',
        'Stage II — umbilical artery AEDF: inpatient or intensive day-unit monitoring with UA + DV Doppler and cCTG/NST/BPP 2–3 times per week (every 48–72 hours). Deliver at 33+0 to 34+0 weeks (SOGC/ISUOG: by 34+0; SMFM/ACOG: 33+0–34+0) by planned elective caesarean section, because the fetus tolerates repetitive contraction-related cord compression poorly.',
        'Stage III — umbilical artery REDF: hospital admission, antenatal corticosteroids and MgSO4 readiness, with daily (every 24–48 hours) DV Doppler + cCTG/BPP. Deliver at 30+0 to 32+0 weeks (no later than 32+0) by planned elective caesarean section.',
        'Stage IV — preterminal decompensation (absent/reversed DV a-wave, pathological cCTG STV, spontaneous repetitive decelerations, or BPP ≤ 4/10): immediate tertiary perinatal-centre admission (level III NICU). Deliver at 26+0 to 30+0 weeks by urgent caesarean after completing or initiating antenatal corticosteroids and IV magnesium sulfate. Between 24+0 and 25+6 weeks, individualise with neonatology and parents, because intact survival is guarded when EFW < 500 g.',
        'Peripartum care: antenatal corticosteroids (betamethasone 12 mg IM q24h × 2, or dexamethasone 6 mg IM q12h × 4) when delivery is anticipated before 34+6 weeks, and consider up to 36+6 weeks if no prior course was given. Give IV magnesium sulfate (4 g load over 20–30 min ± 1 g/h maintenance) for fetal neuroprotection when delivery is imminent before 32+0 weeks (up to 31+6; reduces cerebral palsy by ~30%). Use delayed cord clamping for 30–60 seconds in vigorous preterm/term FGR neonates.',
        'Mandatory placental histopathology: send every FGR placenta for formal examination using the Amsterdam Placental Workshop Group Consensus Criteria to confirm maternal vascular malperfusion (MVM) versus villitis of unknown aetiology (VUE), chronic histiocytic intervillositis (CHI) or fetal vascular malperfusion (FVM). This is critical for counselling on recurrence risk and future prophylaxis.',
      ],
      table: {
        head: ['Stage / phenotype', 'Biometric & Doppler criteria', 'Surveillance frequency', 'Delivery window', 'Mode of delivery'],
        rows: [
          ['Constitutional SGA', 'EFW/AC 3rd–10th centile + normal growth velocity + normal Dopplers + normal PlGF', 'Growth scan + UA/MCA Doppler every 2 weeks', '38+0 to 39+0 weeks', 'Vaginal delivery / induction of labour'],
          ['Stage I — severe smallness or early redistribution', 'EFW/AC < 3rd centile OR UA-PI > 95th (PEDF) OR MCA-PI < 5th OR CPR < 5th', 'Doppler + NST/BPP 1–2 times per week', 'Isolated < 3rd: 37+0 (36+0–37+6); abnormal UA-PI/MCA/CPR: 36+0–37+0 weeks', 'Careful IOL (Foley preferred + continuous EFM) or CS for obstetric indication'],
          ['Stage II — AEDF', 'Umbilical artery AEDF with normal ductus venosus', 'UA + DV Doppler and cCTG/BPP 2–3 times/week (every 48–72 h)', '33+0 to 34+0 weeks', 'Planned elective caesarean section'],
          ['Stage III — REDF', 'Umbilical artery REDF with positive DV a-wave', 'Inpatient daily (q24–48 h) DV Doppler + cCTG/BPP + steroids + MgSO4', '30+0 to 32+0 weeks', 'Planned elective caesarean section'],
          ['Stage IV — preterminal decompensation', 'Absent/reversed DV a-wave, abnormal cCTG STV, repetitive decelerations or BPP ≤ 4/10', 'Continuous inpatient tertiary care', '≥ 26+0 to 30+0 weeks — immediate delivery after steroids & IV MgSO4', 'Urgent caesarean section'],
        ],
      },
      diagram: [
        {
          kind: 'sogc-442-delivery-timing-matrix',
          title: 'Diagram 6 · SOGC No. 442 delivery-timing ladder',
          caption:
            'Gestational axis from 24 to 40 weeks. Constitutional SGA delivers 38–39; isolated EFW < 3rd at 37; abnormal UA-PI/MCA/CPR at 36–37; AEDF at 33–34 by caesarean; REDF at 30–32 by caesarean; and a decompensated DV or cCTG at ≥ 26 weeks by immediate caesarean after steroids and magnesium.',
        },
      ],
      pearls: [
        'Master delivery ladder: constitutional SGA 38+0–39+0 (IOL) → isolated EFW < 3rd 37+0 → UA-PI > 95th or MCA/CPR < 5th 36+0–37+0 → AEDF 33+0–34+0 (CS) → REDF 30+0–32+0 (CS) → absent/reversed DV a-wave or abnormal cCTG STV ≥ 26+0 (immediate CS).',
        'Always send the FGR placenta for Amsterdam-criteria histopathology: MVM responds to low-dose aspirin in the next pregnancy, whereas chronic histiocytic intervillositis (CHI) or massive perivillous fibrin deposition (MPFD) carries a 40–80% recurrence risk requiring specialist immunomodulatory counselling.',
      ],
      trap: {
        title: 'Examiner trap — do not deliver every FGR at 37 weeks',
        body:
          'The stage, not the label, sets the date. Constitutional SGA waits to 38–39 weeks, isolated EFW < 3rd delivers at 37, abnormal UA-PI/MCA/CPR at 36–37, AEDF at 33–34, REDF at 30–32 and a decompensated DV/cCTG at ≥ 26 weeks. Offering 37 weeks to a constitutionally small fetus, or 39 weeks to AEDF, are both wrong answers.',
      },
    },
  ],

  flashcards: [
    {
      id: 'fc-fgr-01',
      front:
        'What are the solitary and contributory criteria for early-onset FGR (< 32+0 weeks) under the Gordijn Delphi Consensus and SOGC Guideline No. 442?',
      back:
        'Solitary (any 1 suffices): EFW or AC < 3rd percentile OR umbilical artery absent end-diastolic flow (AEDF). Contributory: EFW or AC < 10th percentile PLUS either UtA-PI > 95th percentile OR UA-PI > 95th percentile. Congenital anomalies must be absent.',
    },
    {
      id: 'fc-fgr-02',
      front:
        'What are the solitary and contributory criteria for late-onset FGR (≥ 32+0 weeks) under the Gordijn Delphi Consensus?',
      back:
        'Solitary: EFW or AC < 3rd percentile. Contributory (requires ≥ 2 of 3): (1) EFW or AC < 10th percentile; (2) growth drop crossing > 2 quartiles (> 50 percentiles); (3) CPR < 5th percentile OR UA-PI > 95th percentile. Congenital anomalies must be absent.',
    },
    {
      id: 'fc-fgr-03',
      front:
        'Which single fetal ultrasound biometric parameter is most sensitive for detecting FGR, and what is the minimum interval between serial growth scans?',
      back:
        'Abdominal circumference (AC) is most sensitive, because chronic hypoxia depletes hepatic glycogen and shrinks the liver. Serial biometry must be at least 14 days (2–3 weeks) apart to avoid false-positive differences smaller than sonographic measurement error.',
    },
    {
      id: 'fc-fgr-04',
      front:
        'How do maternal PlGF and the sFlt-1/PlGF ratio help evaluate a small fetus between 19 and 36 weeks?',
      back:
        'Low PlGF (< 100 pg/mL or < 5th centile) or sFlt-1/PlGF > 38 (> 85 in severe early disease) reflects maternal vascular malperfusion, distinguishes placental FGR from constitutional SGA, and predicts delivery within 14 days plus superimposed preeclampsia. Normal PlGF/ratio ≤ 38 has > 98% NPV for severe dysfunction.',
    },
    {
      id: 'fc-fgr-05',
      front:
        'What does SOGC Guideline No. 442 recommend regarding low-dose aspirin and LMWH for preventing placental FGR?',
      back:
        'Aspirin 81–162 mg PO daily at bedtime, started before 16+0 weeks (ideally 11–16) and continued to 36 weeks in high-risk women. Prophylactic LMWH is NOT recommended for recurrent FGR or placental disease unless antiphospholipid syndrome (APS) is confirmed.',
    },
    {
      id: 'fc-fgr-06',
      front:
        'When should invasive genetic testing be offered in FGR, and why is QF-PCR + chromosomal microarray (CMA) preferred over maternal cfDNA?',
      back:
        'Offer amniocentesis for early-onset FGR (< 32 weeks), severe FGR (< 3rd centile), or FGR with structural anomalies, polyhydramnios, short FL or normal uterine/umbilical Dopplers. CMA detects submicroscopic copy-number variants (+4–10% yield over karyotype); cfDNA screens only common trisomies and can reflect confined placental mosaicism.',
    },
    {
      id: 'fc-fgr-07',
      front:
        'A fetus at 26 weeks has severe symmetric FGR (EFW < 1st centile), POLYHYDRAMNIOS, clenched hands and NORMAL umbilical artery Doppler. What is the most likely diagnosis?',
      back:
        'Trisomy 18 (Edwards syndrome). Placental insufficiency causes oligohydramnios and abnormal Dopplers; FGR with polyhydramnios and normal Dopplers points to aneuploidy or a fetal GI/neuromuscular swallowing anomaly. Confirm with amniocentesis for QF-PCR + CMA.',
    },
    {
      id: 'fc-fgr-08',
      front:
        'What percentage of the placental villous arterial bed is obliterated when umbilical artery Doppler shows (1) PI > 95th centile, (2) AEDF and (3) REDF?',
      back:
        '1) UA-PI > 95th with positive end-diastolic flow: 30%–50% villous obliteration. 2) Absent end-diastolic flow (AEDF): 50%–70%. 3) Reversed end-diastolic flow (REDF): > 70%, with acidemia and demise within days if undelivered.',
    },
    {
      id: 'fc-fgr-09',
      front:
        'How do MCA-PI and the cerebroplacental ratio (CPR) change during the fetal brain-sparing effect?',
      back:
        'The normal cerebral bed is high-resistance (high MCA-PI). Chronic hypoxia causes cerebral vasodilation, raising diastolic flow so BOTH MCA-PI (< 5th centile) and CPR (MCA-PI / UA-PI < 5th centile or < 1.08) DECREASE. This is the primary surveillance marker in late-onset FGR (≥ 32 weeks).',
    },
    {
      id: 'fc-fgr-10',
      front:
        'What does an absent or reversed ductus venosus a-wave signify, and how did TRUFFLE optimise delivery timing in early-onset FGR?',
      back:
        'DV a-wave reversal reflects myocardial hypoxia, right ventricular afterload failure and metabolic acidemia, predicting demise within 48–72 hours. TRUFFLE combined DV Doppler with computerised CTG short-term variation (STV < 2.6 / 3.0 / 3.5 ms by gestational band) and achieved 85–95% survival free of neurodevelopmental impairment.',
    },
    {
      id: 'fc-fgr-11',
      front:
        'In what chronological order are biophysical profile (BPP) parameters lost during progressive fetal hypoxia and acidemia?',
      back:
        'Reverse order of embryological development: 1st lost — FHR reactivity/NST (pH ~7.20); 2nd — fetal breathing (pH ~7.15); 3rd — gross body movements (pH ~7.10); 4th and last — fetal muscle tone (pH < 7.05). Oligohydramnios (SDP < 2.0 cm) is a chronic renal-hypoperfusion marker.',
    },
    {
      id: 'fc-fgr-12',
      front:
        'State the SOGC No. 442 delivery cutoffs for (1) constitutional SGA, (2) isolated EFW < 3rd centile, and (3) FGR with UA-PI > 95th or MCA/CPR < 5th centile.',
      back:
        '1) Constitutional SGA (3rd–10th, normal Dopplers/PlGF): 38+0–39+0 weeks, vaginal IOL. 2) Isolated EFW < 3rd with normal Dopplers: 37+0 weeks (36+0–37+6). 3) UA-PI > 95th (PEDF) or brain-sparing (MCA-PI < 5th / CPR < 5th): 36+0–37+0 weeks, careful Foley IOL + continuous EFM.',
    },
    {
      id: 'fc-fgr-13',
      front:
        'State the delivery timing and mode for FGR complicated by (1) UA-AEDF, (2) UA-REDF, and (3) absent/reversed DV a-wave.',
      back:
        '1) AEDF: 33+0–34+0 weeks by planned elective caesarean. 2) REDF: 30+0–32+0 weeks by planned elective caesarean. 3) Absent/reversed DV a-wave (or abnormal cCTG STV / BPP ≤ 4): ≥ 26+0 weeks by immediate caesarean after steroids and IV MgSO4.',
    },
    {
      id: 'fc-fgr-14',
      front:
        'Why is sildenafil contraindicated in FGR, and what transient Doppler effect follows antenatal corticosteroids in AEDF?',
      back:
        'STRIDER showed sildenafil increased neonatal mortality from persistent pulmonary hypertension (PPHN) without improving growth. Betamethasone/dexamethasone causes transient fetoplacental vasodilation, restoring positive end-diastolic flow in ~50–60% of AEDF fetuses for 48–72 hours — a pharmacological effect, not recovery.',
    },
    {
      id: 'fc-fgr-15',
      front:
        'Why should every FGR placenta undergo histopathology using the Amsterdam Consensus Criteria?',
      back:
        'It separates maternal vascular malperfusion (MVM — lower recurrence, responds to bedtime low-dose aspirin < 16 weeks next pregnancy) from immune/inflammatory lesions such as chronic histiocytic intervillositis (CHI) or massive perivillous fibrin deposition (MPFD), which carry a 40–80% recurrence risk.',
    },
  ],

  mcqs: [
    {
      id: 'mcq-fgr-01',
      stem:
        'A 29-year-old primigravida at 34+2 weeks has an EFW at the 14th percentile and AC at the 12th percentile; at 20 and 28 weeks both were at the 78th percentile. Today UA-PI is at the 80th percentile and CPR at the 3rd percentile. According to the Gordijn Delphi Consensus cited in SOGC No. 442, what is the correct diagnosis?',
      options: [
        'Normal appropriately grown for gestational age (AGA) fetus requiring no further follow-up',
        'Constitutional small for gestational age (SGA) fetus',
        'Late-onset fetal growth restriction (FGR)',
        'Early-onset fetal growth restriction (FGR)',
      ],
      answerIndex: 2,
      explanation:
        'Late-onset FGR (≥ 32+0 weeks) needs either EFW/AC < 3rd centile OR at least 2 of 3 contributory criteria: (1) EFW/AC < 10th, (2) growth deceleration crossing > 2 quartiles (> 50 percentiles — here 78th to 12th–14th), (3) CPR < 5th or UA-PI > 95th. This fetus has both deceleration and CPR < 5th, so it meets late FGR criteria despite an EFW above the 10th percentile.',
    },
    {
      id: 'mcq-fgr-02',
      stem:
        'A 32-year-old G2P1 had severe early-onset preeclampsia and FGR requiring delivery at 29 weeks; placental pathology confirmed severe maternal vascular malperfusion, and antiphospholipid antibodies are negative. She presents at 11 weeks in her next pregnancy. According to SOGC No. 442, what is the optimal prophylaxis?',
      options: [
        'Low-dose aspirin 81–162 mg PO daily at bedtime before 16 weeks and continue to 36 weeks, without LMWH',
        'Low-dose aspirin plus prophylactic enoxaparin 40 mg SC daily from 11 weeks until 6 weeks postpartum',
        'Oral sildenafil 25 mg three times daily from 20 weeks with strict inpatient bed rest',
        'Withhold aspirin until 24 weeks and start only if uterine artery Doppler shows bilateral notching',
      ],
      answerIndex: 0,
      explanation:
        'SOGC No. 442 recommends low-dose aspirin 81–162 mg at bedtime, started before 16+0 weeks and continued to 36 weeks in high-risk women (prior MVM-related FGR or preeclampsia). Routine LMWH is not recommended without confirmed APS; sildenafil (STRIDER) and bed rest are contraindicated.',
    },
    {
      id: 'mcq-fgr-03',
      stem:
        'A 27-year-old at 25 weeks has symmetric FGR (HC, AC and FL all < 1st percentile), polyhydramnios (SDP 9.5 cm), bilateral choroid plexus cysts, clenched overlapping fingers and a small VSD. Uterine and umbilical Dopplers are normal and PlGF is 380 pg/mL. What is the most appropriate diagnostic step?',
      options: [
        'Diagnose isolated maternal vascular malperfusion and start twice-daily enoxaparin',
        'Offer amniocentesis for QF-PCR and chromosomal microarray (CMA) to evaluate for aneuploidy such as Trisomy 18',
        'Order maternal cell-free DNA (NIPT) only, as amniocentesis is contraindicated in polyhydramnios',
        'Reassure the patient that normal umbilical artery Doppler rules out serious fetal pathology',
      ],
      answerIndex: 1,
      explanation:
        'Early symmetric FGR with structural anomalies, polyhydramnios, normal uterine/umbilical Dopplers and normal PlGF strongly suggests an intrinsic genetic syndrome, classically Trisomy 18. SOGC No. 442 recommends amniocentesis for QF-PCR and CMA, which adds 4–10% diagnostic yield over karyotyping. cfDNA cannot exclude microdeletions/duplications.',
    },
    {
      id: 'mcq-fgr-04',
      stem:
        'At 31 weeks, Doppler of a free cord loop shows absent end-diastolic flow (AEDF). What percentage of the placental tertiary villous arterial bed is typically obliterated when AEDF appears, and what delivery window is recommended if the ductus venosus and cCTG remain reassuring?',
      options: [
        '10–20% villous obliteration; deliver at 38+0–39+0 weeks by vaginal induction',
        '30–40% villous obliteration; deliver at 36+0–37+0 weeks by vaginal induction',
        '50–70% villous obliteration; deliver at 33+0–34+0 weeks by planned caesarean section',
        '> 90% villous obliteration; deliver immediately at 31+0 weeks without corticosteroids',
      ],
      answerIndex: 2,
      explanation:
        'UA-PI rises above the 95th centile at 30–50% villous obliteration; AEDF occurs at 50–70%; REDF at > 70%. With AEDF, normal DV and reassuring cCTG/BPP, surveillance is 2–3 times weekly and planned caesarean delivery is recommended at 33+0–34+0 weeks.',
    },
    {
      id: 'mcq-fgr-05',
      stem:
        'A 30-year-old at 29+4 weeks is admitted with severe early-onset FGR (EFW < 1st centile) and UA reversed end-diastolic flow (REDF). She received betamethasone 12 hours ago. Doppler remains REDF, the DV a-wave is positive and cCTG STV is 4.2 ms. According to SOGC No. 442 and TRUFFLE, what is the optimal plan?',
      options: [
        'Complete betamethasone, continue daily inpatient DV Doppler and cCTG, and plan elective caesarean at 30+0–32+0 weeks (or earlier if the DV a-wave becomes absent/reversed or STV falls below cutoff)',
        'Wait until MCA-PI drops below the 5th percentile before considering delivery at 37 weeks',
        'Perform immediate induction of labour with vaginal misoprostol today',
        'Discharge home for fortnightly symphysis–fundal height measurements',
      ],
      answerIndex: 0,
      explanation:
        'Stage III FGR with REDF requires inpatient daily DV Doppler and cCTG STV after antenatal corticosteroids. If the DV a-wave remains positive and STV is normal, delivery by elective caesarean is planned at 30+0–32+0 weeks, with IV MgSO4 neuroprotection before delivery at < 32 weeks.',
    },
    {
      id: 'mcq-fgr-06',
      stem:
        'A fetus with early-onset FGR at 28+2 weeks shows reversal of the ductus venosus a-wave during atrial contraction and cCTG STV of 2.1 ms with repetitive late decelerations. What does the reversed a-wave indicate and what is the immediate action?',
      options: [
        'Benign physiological fetal hiccups; repeat ultrasound in 2 weeks',
        'Early cerebral vasodilation (brain-sparing); schedule induction at 36 weeks',
        'Advanced myocardial hypoxia, right heart decompensation and imminent acidemia/demise within 48–72 hours; give IV MgSO4 (and steroids) and proceed to immediate urgent caesarean',
        'Maternal dehydration; give 2 L IV Ringer’s lactate and discharge home',
      ],
      answerIndex: 2,
      explanation:
        'An absent/reversed DV a-wave with reduced cCTG STV (< 2.6 ms at < 29 weeks) indicates myocardial dysfunction, central venous hypertension and metabolic acidemia, with demise within 48–72 hours. At ≥ 26+0 weeks this is an absolute indication for immediate caesarean after stabilisation and IV MgSO4.',
    },
    {
      id: 'mcq-fgr-07',
      stem:
        'Which statement accurately describes MCA Doppler and the cerebroplacental ratio (CPR) in FGR?',
      options: [
        'In chronic hypoxia, cerebral vasoconstriction raises both MCA-PI and CPR above the 95th percentile',
        'In chronic hypoxia, compensatory cerebral vasodilation raises diastolic flow, so MCA-PI (< 5th) and CPR (< 5th) decrease, and this is a primary trigger in late-onset FGR (≥ 32 weeks)',
        'Excessive transducer pressure on the fetal head artificially decreases MCA-PI',
        'MCA-PI is the sole criterion used to time emergency delivery at 26 weeks in early-onset FGR',
      ],
      answerIndex: 1,
      explanation:
        'Brain-sparing vasodilation raises MCA end-diastolic velocity, lowering MCA-PI (< 5th) and CPR (< 5th or < 1.08). It is the cornerstone of diagnosis and delivery timing at 36+0–37+0 weeks in late FGR. Probe pressure artificially raises MCA-PI; early FGR is timed by DV and cCTG, not MCA.',
    },
    {
      id: 'mcq-fgr-08',
      stem:
        'A healthy primigravida has EFW at the 6th percentile and AC at the 7th at 32, 34 and 36 weeks, maintaining parallel growth. Anatomy, amniotic fluid, UtA-PI, UA-PI, MCA-PI, CPR and PlGF (290 pg/mL) are all normal. What is the diagnosis and delivery plan?',
      options: [
        'Severe early-onset FGR; immediate caesarean at 36+0 weeks',
        'Constitutional SGA; continue fortnightly growth/Doppler surveillance and plan vaginal delivery/induction at 38+0–39+0 weeks',
        'Stage II FGR; elective caesarean at 34+0 weeks',
        'Post-term expectancy until 42+0 weeks without fetal monitoring',
      ],
      answerIndex: 1,
      explanation:
        'EFW/AC between the 3rd and 10th percentile with normal interval growth, normal uterine/umbilical/cerebral Dopplers and normal PlGF is constitutional SGA, not pathological FGR. SOGC No. 442 recommends fortnightly surveillance and delivery at 38+0–39+0 weeks by induction of labour.',
    },
    {
      id: 'mcq-fgr-09',
      stem:
        'A 31-year-old at 36+2 weeks has late FGR with EFW at the 2nd percentile, UA-PI at the 97th (positive end-diastolic flow) and CPR at the 3rd. DV and NST are normal; the fetus is cephalic with an unfavourable cervix (Bishop 3). What is the recommended timing and mode of delivery?',
      options: [
        'Expectant management until 40+0 weeks',
        'Deliver now (36+0–37+0 weeks); mechanical transcervical Foley ripening and induction with continuous EFM can be offered, with readiness for emergency caesarean',
        'Contraindicate trial of labour because vaginal birth is only permitted if EFW > 50th percentile',
        'Give IV MgSO4 for neuroprotection and tocolytics until 39 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Stage I FGR with EFW < 3rd and/or UA-PI > 95th or brain-sparing (CPR/MCA-PI < 5th) delivers at 36+0–37+0 weeks. With positive end-diastolic flow and a reassuring NST, trial of labour is reasonable using Foley balloon ripening (avoiding prostaglandin tachysystole) and continuous intrapartum EFM.',
    },
    {
      id: 'mcq-fgr-10',
      stem:
        'As chronic hypoxemia progresses to metabolic acidemia, biophysical profile parameters disappear in a sequence governed by CNS maturation. Which sequence correctly lists the order of loss from FIRST to LAST?',
      options: [
        'Fetal tone → gross body movements → fetal breathing → FHR reactivity (NST)',
        'FHR reactivity (NST) → fetal breathing movements → gross body movements → fetal muscle tone',
        'Gross body movements → FHR reactivity (NST) → fetal tone → fetal breathing',
        'Fetal breathing movements → fetal tone → gross body movements → FHR reactivity (NST)',
      ],
      answerIndex: 1,
      explanation:
        'The center that matures last is most sensitive to hypoxia and disappears first: FHR reactivity (28–32 weeks) is lost first at pH ~7.20, then breathing (~7.15), then gross body movements (~7.10), and fetal tone (matures 7.5–8.5 weeks) is lost last at pH < 7.05.',
    },
  ],
};
