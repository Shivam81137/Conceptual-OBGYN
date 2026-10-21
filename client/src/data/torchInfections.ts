import type { StudioModule } from '@/data/revisionStudio';

/**
 * NEET PG · Module 01 — TORCH Infections
 * ---------------------------------------------------------------------------
 * Complete congenital-infection vault rebuilt from Chapter 20 (Pavika Lal,
 * Renu Gupta, Prativa Verma) and standard obstetric practice:
 * the TORCH complex, serology and IgG avidity, the fetal-infection clock,
 * amniotic-fluid PCR windows, the fetal ultrasound signature, and the six
 * infections — toxoplasmosis, syphilis, rubella, CMV, HSV, parvovirus B19
 * and varicella-zoster.
 *
 * Eleven numbered concept blocks, eight colour-coded SVG diagrams and every
 * percentage, week cutoff, sensitivity/specificity value, drug dose and
 * treatment-failure caveat from the source are retained. The ten source
 * algorithms are rendered as readable flow chains inside the relevant block.
 *
 * Offline-first: notes, diagrams, flashcards and MCQs all ship in the client
 * bundle; the API only reconciles the module index.
 */

export const TORCH_INFECTIONS_MODULE: StudioModule = {
  id: 'pg-torch-infections',
  track: 'NEET_PG',
  title: 'TORCH Infections',
  shortTitle: 'TORCH',
  summary:
    'The complete congenital-infection vault: serology and IgG avidity, the 18–20-week amniotic-PCR gateway, the fetal ultrasound signature, and toxoplasmosis, syphilis, rubella, CMV, HSV, parvovirus B19 and VZV — with every treatment regimen, gestational cutoff and examiner trap.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'TORCH',
    'Serology & Avidity',
    'Toxoplasmosis',
    'Syphilis',
    'Rubella & CMV',
    'HSV & Parvovirus B19',
    'Antenatal',
  ],
  sourceTag: 'Pavika Lal, Renu Gupta, Prativa Verma • Chapter 20: TORCH Infections',
  updatedAtISO: '2026-10-21T06:00:00.000Z',
  notes: [
    /* ==================================================================== */
    /* 1. The TORCH complex & serology                                      */
    /* ==================================================================== */
    {
      id: 'torch-complex-serology',
      heading: 'The TORCH complex & serological principles',
      intro:
        'TORCHes (Toxoplasmosis, Rubella, Cytomegalovirus, Herpes, and Other diseases) are congenital fetal infections that cause diverse neonatal sequelae — ranging from severe heart and brain defects to long-term neurodevelopmental delay. ELISA is the workhorse: paired virus-specific IgG and IgM time the infection against gestational age, and IgG avidity breaks the tie.',
      bullets: [
        'TORCH is an acronym for the common congenital infections — Toxoplasma, Rubella, CMV, Herpes (and Others: syphilis, varicella, parvovirus B19).',
        'ELISA is the most commonly employed serological modality: paired virus-specific IgG and IgM time the infection against gestational age.',
        'IgM kinetics: produced within 1 week of primary infection; cannot cross the placenta (large molecular weight) — a raised IgM is the marker of recent maternal infection, not of fetal infection.',
        'IgG kinetics: produced after 1 week as a secondary response or after reinfection; crosses the placenta (small size) and confers lifelong immunity.',
        'Immune maturation (avidity): IgG undergoes a conformational change after 3 months, replacing low avidity with high avidity. Avidity testing resolves the diagnostic dilemma between acute/recent (< 3 months) and prior (> 3 months) infection.',
        'Pattern reading: IgM⁺ / IgG⁻ = recent infection (< 10 days); IgM⁺ / IgG⁺ = recent infection (> 10 days) → run avidity; IgG⁺ / IgM⁻ = past infection; IgM⁻ / IgG⁻ = infection excluded.',
        'Maternal serology only confirms maternal infection — fetal infection requires amniotic-fluid PCR or neonatal PCR.',
      ],
      table: {
        head: ['Infection', 'Causative organism', 'Type of organism'],
        rows: [
          ['Toxoplasmosis', 'Toxoplasma gondii', 'Protozoan parasite'],
          [
            'Others (syphilis, chickenpox, parvovirus)',
            'Treponema pallidum, varicella zoster, parvovirus B19',
            'Treponema: spirochaete bacterium · Varicella zoster: herpes virus member (dsDNA) · Parvovirus: ssDNA virus (Parvoviridae family)',
          ],
          ['Rubella', 'Rubella virus', 'ssRNA virus (Togaviridae)'],
          ['Cytomegalovirus (CMV)', 'Cytomegalovirus', 'dsDNA virus'],
          ['Herpes simplex (1 & 2)', 'Herpes simplex virus', 'DNA virus'],
        ],
      },
      diagram: [
        {
          kind: 'torch-serology-avidity-pcr',
          title: 'Diagram 1 · Serology matrix, IgG avidity & the PCR gateway',
          caption:
            'Read paired IgM and IgG as a two-by-two matrix, then use IgG avidity to date an IgM-positive result: low avidity (< 30%) means primary infection within 3 months, high avidity (> 60%) means past infection or vaccination. Amniotic-fluid PCR only becomes meaningful after 18–20 weeks — 6–8 weeks after maternal infection and after fetal urination is established.',
        },
      ],
      trap: {
        title: 'Examiner trap · IgM versus IgG',
        body: 'IgM is the recent-infection marker but never crosses the placenta; IgG is the immunity marker and is the only one that crosses. A stem that asks for the "fetal infection marker" is contrasting IgM (maternal, recent) against IgG (protective, transplacental).',
      },
      traps: [
        {
          title: 'Examiner trap · low avidity is not always recent',
          body: 'Low IgG avidity can persist for years in some women. A positive IgG + IgM needs a confirmatory second sample before you commit to recent infection — never act on a single low-avidity result alone.',
        },
      ],
      pearls: [
        'IgM⁺ / IgG⁻ → recent infection (< 10 days). IgM⁺ / IgG⁺ → recent infection (> 10 days) → run avidity. High avidity = infection > 3 months ago (or vaccination); low avidity = infection < 3 months ago.',
        'Serology proves maternal infection only. Fetal infection needs amniotic-fluid PCR at ≥ 18–20 weeks, or neonatal saliva/urine PCR after birth.',
      ],
    },

    /* ==================================================================== */
    /* 2. Timing, severity & amniotic PCR                                   */
    /* ==================================================================== */
    {
      id: 'torch-timing-amniotic-pcr',
      heading: 'Timing of maternal exposure & the amniotic-fluid PCR window',
      intro:
        'The same infection is a different disease at different gestational ages. With the exception of HSV, first-trimester infection carries the worst fetal outcome, while late infection transmits more often but damages less.',
      flow: [
        'Preconception · 2–5 weeks — pre-existing maternal IgG protects, fetal affection is very rare',
        'Embryogenesis · 3–12 weeks — neural-tube formation and active organogenesis, the MOST severe affection',
        'Fetal period · after organogenesis — less severe affection, but higher transmission',
      ],
      bullets: [
        'Pre-pregnancy infection protects the fetus via pre-existing transplacental maternal IgG; fetal infection is very rare.',
        'Acute primary infection in pregnancy causes severe fetal outcomes because protective maternal IgG is absent.',
        'Recurrent pregnancy loss (RPL) rule: because TORCH infections occur once in a lifetime and confer immunity (except syphilis, and very rarely reinfection with another strain of CMV or Toxoplasma), TORCH testing is NOT recommended in recurrent pregnancy loss.',
        'Trimester severity rule: with the exception of HSV, infections during the first trimester have the worst fetal outcomes. The fetus is most vulnerable between week 3 and weeks 8–12 postfertilization.',
        'Amniotic-fluid PCR is only meaningful after 18–20 weeks: the PCR turns positive 6–8 weeks after initial maternal infection, and fetal urination (which excretes the pathogen into amniotic fluid) is fully established only by 18–20 weeks.',
        'Legal window constraint: MTP is legally not performed beyond 20 weeks (or beyond 24 weeks for lethal fetal malformations) — the result must be back inside that window to be actionable.',
        'Interpretation: a positive PCR confirms fetal infection (but not necessarily fetal disease); a negative PCR does not exclude infection because sensitivity is never 100%.',
      ],
      table: {
        head: ['Amniotic-fluid PCR rule', 'Detail'],
        rows: [
          ['What serology proves', 'Maternal serology only confirms maternal infection, not fetal infection.'],
          [
            'Why not before 18–20 weeks',
            '(1) Amniotic-fluid PCR turns positive only 6–8 weeks after initial maternal infection; (2) fetal urination (which excretes the pathogen) is fully established only by 18–20 weeks.',
          ],
          [
            'Legal window constraint',
            'A narrow decision window — MTP is legally not performed beyond 20 weeks (or beyond 24 weeks for lethal fetal malformations).',
          ],
          [
            'Interpretation',
            'Positive PCR confirms fetal infection (but not necessarily fetal disease); negative PCR does not exclude infection because sensitivity is never 100%.',
          ],
        ],
      },
      trap: {
        title: 'Examiner trap · transmission is not severity',
        body: 'Transplacental transmission rises with advancing gestation for most TORCH agents, but the risk of severe fetal disease falls. Do not answer "worse outcome" just because third-trimester transmission is highest — the first trimester is the teratogenic window.',
      },
      pearls: [
        'Amniocentesis for TORCH PCR is only meaningful after 18–20 weeks — PCR needs 6–8 weeks to turn positive and fetal urination must be established.',
        'TORCH serology is NOT indicated in recurrent pregnancy loss — these infections confer lifelong immunity.',
      ],
    },

    /* ==================================================================== */
    /* 3. Fetal ultrasound signature                                        */
    /* ==================================================================== */
    {
      id: 'torch-usg-signature',
      heading: 'The fetal ultrasound signature of TORCH',
      intro:
        'These are the sonographic red flags that trigger a TORCH work-up — grouped by anatomical compartment. No single finding is pathognomonic, so the diagnosis is pattern-plus-serology.',
      bullets: [
        'Intracranial calcifications and ventriculomegaly are the two most common cranial ultrasound findings in fetal TORCH.',
        'Hydrops with fetal anemia (MCA-PSV > 1.5 MoM) and no maternal atypical antibodies should prompt a parvovirus B19 and TORCH screen.',
        'Placentomegaly, placental calcification and either oligohydramnios or polyhydramnios complete the extracranial picture.',
        'A normal ultrasound does not exclude infection — especially CMV, where brain findings may evolve through the third trimester.',
        'Pattern clues: toxoplasmosis → scattered intracranial calcifications with hydrocephalus; CMV → periventricular calcifications with microcephaly; rubella → deafness, cataract and cardiac defects; HSV → skin vesicles and encephalitis.',
      ],
      table: {
        head: ['Cranial abnormalities', 'Extracranial abnormalities', 'Placental / amniotic fluid'],
        rows: [
          ['Ventriculomegaly', 'Small for gestational age (SGA)', 'Placentomegaly'],
          ['Calcifications', 'Hyperechogenic bowel', 'Placental calcification'],
          ['Intraventricular synechiae', 'Liver calcifications', 'Oligohydramnios / anhydramnios'],
          [
            'Cerebellar abnormalities (vermian hypoplasia, hemorrhage, calcifications, cysts)',
            'Ascites',
            'Polyhydramnios',
          ],
          ['Periventricular pseudocysts', 'Pericardial effusion', '—'],
          [
            'Cortical development malformations (lissencephaly, polymicrogyria, schizencephaly)',
            'Subcutaneous edema',
            '—',
          ],
          [
            '—',
            'Hydrops or fetal anemia (MCA-PSV > 1.5 MoM) without maternal atypical antibodies',
            '—',
          ],
        ],
      },
      diagram: [
        {
          kind: 'torch-usg-signature-map',
          title: 'Diagram 2 · Fetal ultrasound signature by compartment',
          caption:
            'Three compartments, one work-up. Cranial findings (ventriculomegaly, calcification, synechiae, cerebellar and cortical malformation) sit beside extracranial findings (SGA, echogenic bowel, liver calcification, effusions, hydrops) and placental/fluid findings (placentomegaly, calcification, oligo- or polyhydramnios).',
        },
      ],
      trap: {
        title: 'Examiner trap · hydrops is not always immune',
        body: 'Hydrops plus fetal anemia (MCA-PSV > 1.5 MoM) with a negative maternal antibody screen is parvovirus B19 until proven otherwise — not "idiopathic hydrops" and not automatically a TORCH serology panel.',
      },
      pearls: [
        'Intracranial calcifications + ventriculomegaly are the two most common cranial USG findings in fetal TORCH.',
        'Hydrops + fetal anemia (MCA-PSV > 1.5 MoM) with no maternal atypical antibodies → parvovirus B19 and TORCH screen.',
      ],
    },

    /* ==================================================================== */
    /* 4. Toxoplasmosis — epidemiology, maternal & fetal diagnosis          */
    /* ==================================================================== */
    {
      id: 'toxoplasmosis-diagnosis',
      heading: 'Toxoplasmosis — epidemiology, maternal & fetal diagnosis',
      intro:
        'Toxoplasma gondii is an obligate intracellular protozoan with a cat definitive host. Transmission rises with placental maturation, but disease severity falls — so first-trimester infection is managed for severity and third-trimester infection for transmission.',
      bullets: [
        'Prevalence: 10–55% in temperate areas; up to 80% in tropical areas.',
        'Definitive host: cats and felines — sexual reproduction produces oocysts passed in cat feces, contaminating soil and water.',
        'Intermediate hosts: humans, pigs and lambs — ingest oocysts → parasitemia lasting up to 10 days → transforms into lifelong dormant tissue cysts.',
        'Transmission kinetics: transplacental transfer increases with placental maturation and advancing gestational age (MTCT risk is lower in early gestation, higher in late gestation). No transmission occurs via breastfeeding or direct human-to-human contact.',
        'MTCT risk factors: acute primary infection during pregnancy or within 3 months preconception; reactivation in immunocompromised mothers (HIV/immunosuppressants); lack of antepartum treatment; or virulent-strain reinfection.',
        'Maternal infection: asymptomatic in ~80%; symptomatic in ~20% — fever, chills, sweats, headache, myalgia, pharyngitis; hepatosplenomegaly and maculopapular rash.',
        'Most common maternal sign: bilateral nontender cervical lymphadenopathy. Severe/reactivation disease causes chorioretinitis with floaters and vision loss.',
        'Fetal ultrasound — the two most common findings: intracranial calcifications and bilateral progressive ventricular dilatation.',
        'Poor prognostic fetal findings: severe ventriculomegaly, brain necrosis, gyration disorders and microcephaly.',
        'Neonatal infection: asymptomatic in 80%; symptomatic in 20% — two-thirds have moderate disease (intracranial calcifications, peripheral retinochoroiditis), one-third have disseminated disease (hydrocephalus, macular chorioretinitis).',
        'Newborn work-up: examination by a neonatologist, retinal specialist and pediatric neurologist, plus neonatal IgM, IgG and IgA serology and PCR of blood, urine and CSF at birth.',
      ],
      table: {
        head: ['Test / situation', 'Interpretation & rule'],
        rows: [
          ['Maternal IgG', 'Negative = non-immune → give prevention advice. Positive → check IgM.'],
          [
            'IgM positive',
            'Run IgG avidity: high avidity = past infection (> 3 months) → reassure; low avidity = recent infection → investigate the fetus.',
          ],
          [
            'Amniotic-fluid / fetal-blood PCR',
            'Most reliable prenatal method: PPV 100% and specificity 100%. Positive confirms fetal infection, not the severity of fetal disease.',
          ],
          [
            'Amniocentesis contraindication',
            'Do NOT perform in HIV-positive or HBsAg-positive mothers — the needle can seed the fetus with maternal virus.',
          ],
          ['Universal screening', 'NOT recommended; screen only for abnormal ultrasound findings.'],
          [
            'Serological caveats',
            'Low IgG avidity can persist for years in some women. A positive IgG + IgM requires a confirmatory second sample.',
          ],
        ],
      },
      flow: [
        'Suspected toxoplasma · IgG assay — negative → preventive strategies, positive → check IgM',
        'IgM negative · reassurance (past infection), IgM positive → IgG avidity test',
        'High avidity · past infection → reassure; low avidity · recent infection → investigate the fetus',
        'Fetal investigation · detailed USG + amniotic-fluid PCR at ≥ 18 weeks (PPV 100%, specificity 100%)',
      ],
      diagram: [
        {
          kind: 'toxoplasmosis-diagnosis-treatment',
          title: 'Diagram 3 · Toxoplasmosis — diagnosis, fetal work-up & the 18-week treatment switch',
          caption:
            'Maternal IgG → IgM → avidity gates the work-up; fetal diagnosis rests on intracranial calcification with progressive ventriculomegaly and amniotic-fluid PCR after 18 weeks. Treatment switches at 18 weeks from spiramycin to pyrimethamine + sulfadiazine + folinic acid, and switches back if the PCR and ultrasound are negative.',
        },
      ],
      trap: {
        title: 'Examiner trap · amniocentesis in HIV or HBsAg',
        body: 'Amniocentesis is contraindicated in HIV-positive and HBsAg-positive mothers because the needle can seed the fetus with maternal virus — a procedural risk, not a serological one.',
      },
      traps: [
        {
          title: 'Examiner trap · transmission rises, severity falls',
          body: 'The risk of transmission rises with gestational age, but the risk of severe fetal disease falls. That is why first-trimester toxoplasmosis is managed for severity and third-trimester infection is managed for transmission.',
        },
      ],
      pearls: [
        'Bilateral nontender cervical lymphadenopathy is the commonest maternal sign; intracranial calcifications + bilateral progressive ventricular dilatation are the two commonest fetal ultrasound findings.',
        'Amniotic-fluid / fetal-blood PCR has PPV 100% and specificity 100% — the most reliable prenatal test for fetal toxoplasmosis.',
        'Only the cat is the definitive host (sexual reproduction); humans are intermediate hosts that form dormant tissue cysts.',
      ],
    },

    /* ==================================================================== */
    /* 5. Toxoplasmosis — treatment, neonatal care & prevention             */
    /* ==================================================================== */
    {
      id: 'toxoplasmosis-treatment',
      heading: 'Toxoplasmosis — treatment, neonatal care & prevention',
      intro:
        'The regimen is decided by gestational age: spiramycin before 18 weeks, pyrimethamine + sulfadiazine + folinic acid at or after 18 weeks. The choice then follows the fetal PCR and ultrasound result.',
      flow: [
        'Fetal USG + amniotic-fluid PCR at ≥ 18 weeks → decides the switch, not the start date',
        'Started < 18 weeks on spiramycin · PCR negative and USG negative → continue spiramycin',
        'Started < 18 weeks on spiramycin · PCR positive and/or USG positive → switch to pyrimethamine + sulfadiazine + folinic acid',
        'Started > 18 weeks on pyrimethamine + sulfadiazine · PCR negative and USG negative → change to spiramycin',
        'Started > 18 weeks · PCR positive and/or USG positive → continue pyrimethamine + sulfadiazine + folinic acid',
      ],
      table: {
        head: ['Parameter', '< 18 weeks of gestation', '≥ 18 weeks of gestation'],
        rows: [
          [
            'Drug regimen',
            'Spiramycin: 1 g TDS (three times daily)',
            'Pyrimethamine 50 mg/day + sulfadiazine three 500 mg tablets/day (1.5 g/day) + folinic acid two 25 mg capsules/week + hydration 2 L water/day to alkalinize urine',
          ],
          ['Contraindications (C/I)', 'Long QT syndrome', 'G6PD deficiency'],
          [
            'Side effects (S/E)',
            'GIT symptoms (nausea, vomiting), skin reactions',
            'Skin reactions, bone-marrow suppression, reversible acute kidney injury',
          ],
          ['Monitoring', 'No monitoring required', 'Weekly complete blood count (CBC)'],
        ],
      },
      bullets: [
        'Perform monthly fetal ultrasound if the fetal PCR is positive.',
        'Congenital toxoplasmosis does NOT alter the timing or mode of delivery, and breastfeeding is not contraindicated (exercise caution if nipples are cracked or bleeding).',
        'Primary prevention: cook meat to 63–74°C; refrigerate meat for at least 72 hours; avoid unpasteurized goat milk, bare-hand meat handling, skinning animals without gloves, and cat feces.',
        'Serological caveats: universal screening is not recommended — screen only for abnormal ultrasound findings. Positive IgG + IgM requires a confirmatory second sample, and low avidity can persist for years.',
      ],
      trap: {
        title: 'Examiner trap · toxoplasmosis does not change delivery',
        body: 'Congenital toxoplasmosis is not an indication for caesarean delivery, nor a contraindication to breastfeeding — a favourite "does it change management?" distractor.',
      },
      traps: [
        {
          title: 'Examiner trap · folinic acid is not folic acid',
          body: 'Pyrimethamine blocks dihydrofolate reductase and causes bone-marrow suppression. Rescue the marrow with folinic acid (two 25 mg capsules/week) and monitor a weekly CBC — folic acid is not a substitute. Pyrimethamine is contraindicated in G6PD deficiency.',
        },
      ],
      pearls: [
        'Spiramycin is the < 18-week drug; pyrimethamine + sulfadiazine + folinic acid is the ≥ 18-week drug. Switch to the combination if PCR/USG turns positive, and back to spiramycin if both are negative.',
        'Spiramycin is contraindicated in long QT syndrome; pyrimethamine is contraindicated in G6PD deficiency and needs weekly CBC.',
      ],
    },

    /* ==================================================================== */
    /* 6. Syphilis — screening & staging                                    */
    /* ==================================================================== */
    {
      id: 'syphilis-screening-staging',
      heading: 'Syphilis — transmission, universal screening & clinical stages',
      intro:
        'Syphilis is the TORCH infection that does not confer lifelong immunity. Vertical transmission is highest in early-stage disease and in the third trimester, so screening is universal at the first antenatal visit and treatment is never delayed for confirmatory titres in high-prevalence settings.',
      bullets: [
        'Transmitted via direct lesion contact, sexual contact (one-third of cases), or vertical transmission (highest in early-stage disease and the third trimester).',
        'Universal screening is recommended for all pregnant women at the first antenatal visit, regardless of prevalence or prior pregnancy results.',
        'Low-prevalence areas (< 5%): a single on-site Rapid Syphilis Test (RST) is preferred over Rapid Plasma Reagin (RPR).',
        'High-prevalence areas (> 5%): perform RST — if positive, administer the first treatment dose immediately, then perform RPR to guide further duration-based therapy.',
        'Repeat screening is indicated only if at risk of reinfection, presenting with STI symptoms, or HIV-positive.',
        'Early syphilis: incubation 9–90 days (average 21 days); pregnancy cutoff till 27 weeks. A single painless papule with regional lymphadenopathy ulcerates into the classic chancre.',
        'Latent / secondary syphilis: occurs after months in 25% of patients; pregnancy cutoff 28 weeks till term. Widespread mucocutaneous papular rash with generalized lymphadenopathy.',
        'Tertiary syphilis: occurs after 20–40 years (in one-third of patients) — neurosyphilis and cardiovascular syphilis.',
        'Adverse fetal outcomes: fetal anemia, FGR, hepatosplenomegaly, intrahepatic calcification, fetal hydrops and stillbirth.',
      ],
      table: {
        head: ['Stage', 'Timing / incubation', 'Clinical presentation & outcomes'],
        rows: [
          [
            'Early syphilis',
            'Incubation 9–90 days (avg 21 days) · Pregnancy cutoff: till 27 weeks',
            'Single painless papule with regional lymphadenopathy that ulcerates into a classic chancre',
          ],
          [
            'Latent / secondary',
            'Occurs after months in 25% of patients · Pregnancy cutoff: 28 weeks till term',
            'Widespread mucocutaneous papular rash with generalized lymphadenopathy',
          ],
          ['Tertiary syphilis', 'Occurs after 20–40 years (in 1/3 of patients)', 'Neurosyphilis, cardiovascular syphilis'],
          [
            'Adverse fetal outcomes',
            'Transplacental / peripartum',
            'Fetal anemia, FGR, hepatosplenomegaly, intrahepatic calcification, fetal hydrops, stillbirth',
          ],
        ],
      },
      trap: {
        title: 'Examiner trap · do not wait for RPR',
        body: 'In high-prevalence settings the first benzathine penicillin dose is given on the same day as a positive RST, before awaiting RPR — do not delay treatment for confirmatory titres. In low-prevalence settings, a single on-site RST is preferred over RPR.',
      },
      pearls: [
        'Universal syphilis screening at the first antenatal visit — irrespective of prevalence or previous results.',
        'In high-prevalence areas, treat on the positive RST immediately, then titrate with RPR.',
        'Syphilis is the one TORCH infection that does not confer lifelong immunity — reinfection is possible.',
      ],
    },

    /* ==================================================================== */
    /* 7. Syphilis — treatment & congenital classification                  */
    /* ==================================================================== */
    {
      id: 'syphilis-treatment-classification',
      heading: 'Syphilis — treatment regimens & congenital-syphilis classification',
      intro:
        'Penicillin is the only drug proven to treat the fetus. The regimen is set by stage, and the neonate is then risk-stratified by how recently the mother was treated and with which drug.',
      table: {
        head: ['Clinical scenario', 'Regimen in pregnancy'],
        rows: [
          [
            'Early syphilis, up to 27+6 weeks',
            'Benzathine penicillin G 2.4 MU IM single dose (preferred over procaine penicillin).',
          ],
          [
            'Early syphilis, 28 weeks to term',
            'Benzathine penicillin G 2.4 MU IM on Day 1 and Day 8, with careful neonatal assessment at birth.',
          ],
          [
            'Penicillin allergy (early syphilis)',
            'Desensitize first. If impossible: erythromycin 500 mg PO QID × 14 days, OR ceftriaxone 1 g IM OD × 10–14 days, OR azithromycin 2 g PO once — all carry treatment-failure risk and require treating the neonate for congenital syphilis.',
          ],
          [
            'Late / cardiovascular / gummatous',
            'Benzathine penicillin G 2.4 MU IM weekly on Days 1, 8 and 15 (3 doses), preferred over procaine penicillin 1.2 MU IM OD × 20 days. Penicillin allergy: erythromycin 500 mg PO QID × 30 days.',
          ],
          [
            'Neurosyphilis',
            'Procaine penicillin G 1.8–2.4 MU IM OD + probenecid 500 mg PO QID × 14 days, OR benzyl penicillin 10.8–14.4 g/day (1.8–2.4 g IV every 4 hours) × 14 days.',
          ],
          [
            'Steroid cover',
            'For neurosyphilis and cardiovascular syphilis: prednisolone 40–60 mg OD × 3 days, starting 24 hours before antibiotics.',
          ],
          [
            'Retreatment',
            'Inadequate prior therapy, or failure to achieve a fourfold drop in RPR/VDRL titre.',
          ],
        ],
      },
      flow: [
        'Risk of congenital syphilis · no risk = treated before the index pregnancy and no reinfection risk → no further investigation',
        'Low risk · normal neonatal exam + adequate treatment > 4 weeks before delivery → maternal and infant treponemal/nontreponemal IgM serology, rule out reinfection, review at 3 months',
        'High risk · maternal treatment < 4 weeks before delivery, a non-beta-lactam drug, or inadequate treatment → treat the neonate for congenital syphilis',
        'Possible case · untreated/inadequately treated mother at delivery + positive infant RPR',
        'Probable case · possible case + physical or long-bone X-ray signs, or RPR titre > 4× normal',
        'Confirmed case · probable case + T. pallidum on dark-field microscopy, or positive PCR of urine/blood/placenta/skin',
      ],
      diagram: [
        {
          kind: 'syphilis-treatment-congenital-risk',
          title: 'Diagram 4 · Syphilis — screening, treatment ladder & congenital risk',
          caption:
            'Universal RST screening at booking; in high-prevalence areas the first penicillin dose follows a positive RST on the same day. The treatment ladder runs from single-dose benzathine penicillin for early disease to three weekly doses for late disease and a 14-day neurosyphilis regimen with steroid cover. The neonate is then classified as no risk, low risk or high risk, and as a possible, probable or confirmed congenital case.',
        },
      ],
      trap: {
        title: 'Examiner trap · penicillin is the only fetal drug',
        body: 'Penicillin is the only drug proven to cross the placenta and treat the fetus. Erythromycin, ceftriaxone and azithromycin treat the mother but not reliably the fetus — the neonate must then be treated for congenital syphilis. Desensitize rather than substitute.',
      },
      traps: [
        {
          title: 'Examiner trap · the 4-week rule',
          body: 'Maternal treatment less than 4 weeks before delivery defines a high-risk neonate regardless of how "adequate" the regimen looked — treat the neonate for congenital syphilis.',
        },
      ],
      pearls: [
        'Penicillin is the only therapy proven to cross the placenta and treat the fetus — desensitize rather than substitute.',
        'Neurosyphilis and cardiovascular syphilis need steroid cover: prednisolone 40–60 mg OD for 3 days, starting 24 hours before antibiotics.',
        'Congenital case ladder: possible (untreated mother + positive infant RPR) → probable (add X-ray signs or RPR > 4×) → confirmed (dark-field or PCR).',
      ],
    },

    /* ==================================================================== */
    /* 8. Rubella                                                           */
    /* ==================================================================== */
    {
      id: 'rubella-crs',
      heading: 'Rubella — maternal disease & congenital rubella syndrome',
      intro:
        'Rubella is a Togaviridae ssRNA virus with a 14-day incubation. Transmission stays high throughout pregnancy, but the defect risk collapses after 16 weeks — after which the only expected sequela is deafness.',
      bullets: [
        'Togaviridae family (ssRNA); incubation period 14 days (range 12–23 days).',
        'Infectivity period: from 7 days before rash onset to 7–10 days after rash onset.',
        'High community herd immunity (98–99%) from MMR vaccination makes routine antenatal screening unnecessary.',
        'Adult clinical manifestations: diffuse fine maculopapular rash (3-day rash) with cephalocaudal spread from face to trunk and limbs.',
        'Characteristic suboccipital, postauricular and cervical lymphadenopathy.',
        'Occasional migratory, symmetrical, nonerosive small-joint arthritis, or mild flu-like illness.',
        'Classic CRS triad: sensorineural hearing loss, cataracts and congenital heart disease (patent ductus arteriosus and ventricular septal defect).',
        'Other features: hepatosplenomegaly, FGR, jaundice, anemia, rash, neurodevelopmental delay and endocrinopathies.',
        'Maternal rubella IgM has a 15–20% false-positive rate (cross-reactivity, post-vaccine persistence, autoantibodies); confirm a positive IgG + IgM with IgG avidity or pharyngeal exudate RT-PCR.',
        'Management: < 12 weeks infection → consider termination of pregnancy without invasive testing, because the defect rate is 97%. 12–20 weeks infection → amniocentesis for viral RNA PCR, waiting at least 6 weeks after maternal infection to avoid false negatives.',
        'Vaccination rules: MMR is a live-attenuated vaccine (contraindicated in pregnancy); avoid conception for 1 month post-vaccine; safe during breastfeeding.',
      ],
      table: {
        head: ['Gestational age', 'Fetal transmission risk', 'Congenital defect risk'],
        rows: [
          ['< 12 weeks', '90%', '97%'],
          ['12–16 weeks', '55%', '20%'],
          ['> 16 weeks', '45%', 'Minimal — risk of deafness only'],
        ],
      },
      diagram: [
        {
          kind: 'rubella-crs-risk-gradient',
          title: 'Diagram 5 · Rubella — the CRS transmission-versus-defect gradient',
          caption:
            'Transmission falls only modestly across pregnancy (90% → 55% → 45%), whereas the congenital defect risk collapses from 97% before 12 weeks to 20% at 12–16 weeks and to deafness alone after 16 weeks. The CRS triad is sensorineural deafness, cataracts and cardiac defects (PDA/VSD).',
        },
      ],
      trap: {
        title: 'Examiner trap · a low-positive IgM is not a diagnosis',
        body: 'Ignore a low-positive rubella IgM in isolation — the 15–20% false-positive rate means you confirm with IgG avidity or pharyngeal RT-PCR before acting, and never terminate on IgM alone.',
      },
      traps: [
        {
          title: 'Examiner trap · MMR is live',
          body: 'MMR is live-attenuated and contraindicated during pregnancy. Avoid conception for 1 month after vaccination; breastfeeding is not a contraindication. Give the vaccine postpartum to a non-immune woman before discharge.',
        },
      ],
      pearls: [
        'CRS transmission versus defect risk — < 12 weeks: 90% / 97%; 12–16 weeks: 55% / 20%; > 16 weeks: 45% / deafness only.',
        'Classic CRS triad: sensorineural deafness + cataracts + congenital heart disease (PDA, VSD).',
        'For 12–20-week infection, wait ≥ 6 weeks after maternal infection before amniotic-fluid RNA PCR to avoid false negatives.',
      ],
    },

    /* ==================================================================== */
    /* 9. Cytomegalovirus                                                   */
    /* ==================================================================== */
    {
      id: 'cmv',
      heading: 'Cytomegalovirus — transmission, diagnosis & treatment',
      intro:
        'CMV is the most common perinatal viral infection and the most common cause of nongenetic sensorineural hearing loss. Transmission rises with gestation, but severe neurological and hearing damage is almost exclusively a first-trimester event.',
      bullets: [
        'Most common perinatal viral infection, affecting 0.2–2.2% of all live births.',
        'Most common cause of nongenetic sensorineural hearing loss (SNHL) and a major cause of neurological disability.',
        'Remains dormant lifelong in salivary glands; the primary source is saliva/urine of young children.',
        'Maternal presentation: asymptomatic in 85–90%; symptomatic in 10–15% (mononucleosis-like fever, malaise, cervical lymphadenopathy, or non-A/B/C hepatitis).',
        'Primary versus nonprimary transmission: 30–40% fetal transmission in primary maternal CMV versus 1–2% in nonprimary/reactivated CMV.',
        'Gestational-age dynamics: transmission increases from ~30% in early pregnancy to ~47% in the third trimester, but severe neurological and hearing damage occurs almost exclusively with first-trimester infection.',
        'Congenital features at birth: SGA, microcephaly, jaundice, hepatosplenomegaly, hypotonia, "blueberry muffin" rash, chorioretinitis and late-onset SNHL.',
        'CMV IgG avidity: < 30% avidity indicates recent primary infection; > 60% avidity indicates past infection (> 3 months).',
        'Amniocentesis PCR: ideally after 20 weeks gestation and at least 8 weeks after maternal infection. It is the only way to confirm fetal transmission from nonprimary/different strains.',
        'Prognosis: cerebral abnormality on ultrasound is the single most important prognostic indicator. A normal fetal brain ultrasound + MRI indicates minimal neurodevelopmental disability risk, though it does not exclude hearing impairment.',
        'Confirm congenital CMV within 3 weeks of birth using neonatal saliva or urine PCR (to distinguish congenital from natal transmission).',
        'Initiate valganciclovir within the first 4 weeks of life for symptomatic neonates to prevent symptom progression and improve long-term outcomes.',
      ],
      table: {
        head: ['CMV parameter', 'Value / rule'],
        rows: [
          [
            'Most common perinatal viral infection',
            '0.2–2.2% of live births; most common cause of nongenetic sensorineural hearing loss.',
          ],
          ['Primary maternal CMV', '30–40% fetal transmission.'],
          ['Nonprimary / reactivated CMV', '1–2% fetal transmission.'],
          [
            'Gestational transmission',
            'Rises from ~30% in early pregnancy to ~47% in the third trimester.',
          ],
          [
            'Severity by gestation',
            'Severe neurological and hearing damage is almost exclusively first-trimester infection.',
          ],
          ['IgG avidity', '< 30% = recent primary infection; > 60% = past infection (> 3 months).'],
          [
            'Amniotic-fluid PCR',
            'After 20 weeks and ≥ 8 weeks after maternal infection; the only way to confirm transmission with a different strain.',
          ],
          [
            'Neonatal confirmation',
            'Saliva or urine PCR within 3 weeks of birth; valganciclovir within the first 4 weeks of life if symptomatic.',
          ],
        ],
      },
      flow: [
        'Confirmed fetal CMV → mandatory ultrasound every 2–4 weeks (fetal brain MRI and fetal blood sampling are not compulsory)',
        'Asymptomatic fetus → conservative management → clinical, neurodevelopmental, ophthalmic and laboratory evaluation of the neonate → long-term follow-up, consider valganciclovir',
        'Mild-to-moderate fetus → in-utero valaciclovir can be considered → re-enter the ultrasound loop, escalate if severe',
        'Severely symptomatic fetus → termination of pregnancy → fetal autopsy + placental examination',
      ],
      diagram: [
        {
          kind: 'cmv-avidity-amniocentesis',
          title: 'Diagram 6 · CMV — transmission, severity & the diagnostic ladder',
          caption:
            'Transmission climbs from ~30% early to ~47% in the third trimester while severe damage concentrates in the first trimester. The diagnostic ladder runs IgG avidity (< 30% recent, > 60% past) → amniotic-fluid PCR after 20 weeks and ≥ 8 weeks after infection → fetal brain ultrasound/MRI → neonatal saliva/urine PCR within 3 weeks → valganciclovir within 4 weeks if symptomatic.',
        },
      ],
      trap: {
        title: 'Examiner trap · a normal MRI does not exclude deafness',
        body: 'A normal fetal brain ultrasound + MRI lowers but does not abolish risk — hearing impairment can still occur, so neonatal hearing surveillance is mandatory. Cerebral abnormality on ultrasound remains the strongest prognostic marker.',
      },
      traps: [
        {
          title: 'Examiner trap · transmission versus severity again',
          body: 'The commonest exam distractor is "severe damage is most likely with third-trimester infection" because transmission is highest then. It is false: severe neuro/hearing damage is almost exclusively first-trimester.',
        },
      ],
      pearls: [
        'CMV avidity < 30% = recent primary infection; > 60% = past infection (> 3 months).',
        'Congenital CMV is confirmed within 3 weeks of birth by neonatal saliva or urine PCR; start valganciclovir within the first 4 weeks of life in symptomatic neonates.',
        'Amniotic-fluid PCR for CMV: after 20 weeks and ≥ 8 weeks after maternal infection.',
      ],
    },

    /* ==================================================================== */
    /* 10. Herpes simplex virus                                             */
    /* ==================================================================== */
    {
      id: 'hsv',
      heading: 'Herpes simplex — classification, perinatal transmission & prevention',
      intro:
        'HSV is the most common STI in the reproductive age group. The neonatal risk is driven by the maternal immune status at delivery — primary genital infection carries the highest risk because no homologous antibody crosses to the fetus.',
      bullets: [
        'Most common STI in the reproductive age group; seroprevalence is 60–75% for HSV-1 and 11–30% for HSV-2.',
        'The two types share 40% genomic similarity (producing cross-neutralizing heterologous antibodies); incubation period is 2–12 days.',
        'Vertical transmission risk is highest with primary infection in the third trimester (especially within 6 weeks of delivery) due to active viral shedding and lack of protective maternal antibodies.',
        'Genital herpes classification: initial episode (HSV-1 or HSV-2) versus recurrent episode (few lesions, resolution in days, no systemic illness, high reactivation tendency).',
        'Initial episode splits into primary genital infection (no HSV-1 or HSV-2 antibodies; asymptomatic to severe lesions with inguinal lymphadenopathy) and nonprimary genital infection (pre-existing heterologous antibodies).',
        'Perinatal transmission split: 5% congenital (mostly asymptomatic, little teratogenic capacity), 85% neonatal, 10% postnatally acquired (horizontal).',
        'Neonatal risk order: primary genital > first nonprimary > recurrent infection.',
        'Diagnosis — lesion swab is the gold standard: cell culture (sensitivity 80–90% in primary active infection) or PCR taken from the base of the lesion with a nylon swab, placed in transport media and stored at 4°C.',
        'Type-specific serology is indicated only in women presenting with a first episode of genital herpes in the final weeks of pregnancy, to confirm the absence of homologous antibodies and guide the mode of delivery.',
      ],
      table: {
        head: ['Phase / intervention', 'Primary infection', 'Recurrent infection'],
        rows: [
          [
            'Acute episode regimen',
            '7–10 days · Oral acyclovir 400 mg every 8 h · Oral valaciclovir 500 mg–1 g every 12 h',
            '3–5 days · Oral acyclovir 400 mg every 8 h · Oral valaciclovir 500 mg–1 g every 12 h',
          ],
          [
            'Suppressive regimen (from > 36 weeks until delivery)',
            'Start at > 36 weeks until delivery · Oral acyclovir 400 mg every 8 h · Oral valaciclovir 500 mg every 12 h',
            'Start at > 36 weeks until delivery · Oral acyclovir 400 mg every 8 h · Oral valaciclovir 500 mg every 12 h',
          ],
          [
            'Cesarean section (elective LSCS)',
            'Indicated if infection is present at the time of delivery',
            'Indicated if an active episode/lesions are present',
          ],
          [
            'Severe / disseminated maternal herpes',
            'IV acyclovir 5–10 mg/kg every 8 h for 2–7 days, followed by oral therapy for 10 days',
            'Supportive care: paracetamol + topical lidocaine 2% gel or 5% ointment',
          ],
        ],
      },
      diagram: [
        {
          kind: 'hsv-perinatal-suppression',
          title: 'Diagram 7 · HSV — perinatal routes, risk order & suppression at 36 weeks',
          caption:
            'Perinatal HSV is 5% congenital, 85% neonatal and 10% postnatally acquired, with risk highest after primary genital infection and lowest after recurrence. Suppressive oral acyclovir or valaciclovir from > 36 weeks cuts recurrences and caesarean need; active lesions at delivery still mandate caesarean section.',
        },
      ],
      trap: {
        title: 'Examiner trap · the 85% neonatal route',
        body: 'Neonatal HSV (85%) is overwhelmingly the dominant perinatal route, and the neonatal risk order is primary genital > first nonprimary > recurrent. Congenital HSV is only 5% and has little teratogenic capacity.',
      },
      traps: [
        {
          title: 'Examiner trap · suppression is not treatment',
          body: 'Suppressive acyclovir/valaciclovir starts at > 36 weeks and continues until delivery; it does not replace caesarean section when active genital lesions are present at the time of labour.',
        },
      ],
      pearls: [
        'Perinatal HSV split: 5% congenital, 85% neonatal, 10% postnatally acquired. Neonatal risk order: primary genital > first nonprimary > recurrent.',
        'Suppressive acyclovir/valaciclovir from > 36 weeks until delivery reduces recurrence and the need for caesarean.',
        'Lesion swab is the gold standard — culture (80–90% sensitive in primary active infection) or PCR from the base of the lesion.',
      ],
    },

    /* ==================================================================== */
    /* 11. Parvovirus B19 & varicella-zoster                                */
    /* ==================================================================== */
    {
      id: 'parvovirus-vzv',
      heading: 'Parvovirus B19 & varicella-zoster — the "Other" emergencies',
      intro:
        'The "O" of TORCH is not a single disease. Parvovirus B19 causes fetal anemia and hydrops through erythroid aplasia, while varicella-zoster causes congenital varicella syndrome early and neonatal varicella at term — two different clocks, two different interventions.',
      bullets: [
        'Parvovirus B19 is a small ssDNA virus (Parvoviridae) that targets blood-group antigen "P" on erythroid precursors, myocardium and placenta — arresting erythropoiesis.',
        'Vertical transmission is 25–32%. Maternal infection may be asymptomatic or present as erythema infectiosum ("slapped cheek") with arthralgia; the fetus can develop severe anemia, myocarditis, hepatitis, thrombocytopenia and hydrops within 4–6 weeks.',
        'Fetal anemia is monitored by serial middle cerebral artery peak systolic velocity (MCA-PSV): > 1.5 MoM predicts severe anemia with 95% sensitivity. MCA-PSV may miss mild anemia after 33 weeks.',
        'Maternal IgM has a 20–40% false-negative rate; pair it with IgG and PCR. There is no vaccine — management is intrauterine transfusion for MCA-PSV > 1.5 MoM or hydrops.',
        'Varicella-zoster is a herpes virus (dsDNA). Primary chickenpox in pregnancy can cause maternal pneumonia; herpes zoster (shingles) in pregnancy carries 0% risk of congenital varicella syndrome.',
        'Congenital varicella syndrome risk: < 13 weeks 0.5%; 13–20 weeks 2% (the highest teratogenic window); > 20 weeks minimal. Features include limb hypoplasia, dermatomal cicatricial scarring, chorioretinitis and cortical atrophy.',
        'Late gestation: > 36 weeks carries a 50% risk of fetal infection and a 25% risk of clinical neonatal varicella. Delivery is delayed 5–7 days after maternal rash onset when possible, so maternal antibody can cross before birth.',
        'Post-exposure prophylaxis: varicella-zoster immunoglobulin (VZIG) within 10 days of exposure in a non-immune pregnant woman. Active maternal varicella is treated with oral acyclovir within 24 hours of rash onset.',
        'Neonatal varicella: give VZIG and/or IV acyclovir to the exposed neonate; isolate the mother and baby if maternal lesions are active.',
      ],
      table: {
        head: ['Feature', 'Parvovirus B19', 'Varicella-zoster virus'],
        rows: [
          ['Organism', 'ssDNA virus (Parvoviridae)', 'Herpes virus (dsDNA)'],
          [
            'Maternal illness',
            'Erythema infectiosum ("slapped cheek"), arthralgia; often asymptomatic',
            'Chickenpox — fever and vesicular rash; pneumonia is the maternal danger',
          ],
          [
            'Fetal target',
            'Blood-group P antigen on erythroid precursors, myocardium and placenta → aplastic crisis, hydrops',
            'Congenital varicella syndrome — limb hypoplasia, dermatomal scarring, chorioretinitis, cortical atrophy',
          ],
          [
            'Risk window',
            'Any trimester; vertical transmission 25–32%; hydrops within 4–6 weeks',
            '< 13 weeks 0.5%; 13–20 weeks 2%; > 20 weeks minimal; > 36 weeks 50% fetal infection / 25% neonatal varicella',
          ],
          [
            'Fetal diagnosis',
            'Serial MCA-PSV > 1.5 MoM (95% sensitivity)',
            'Ultrasound for congenital varicella syndrome; amniotic-fluid VZV PCR',
          ],
          [
            'Intervention',
            'Intrauterine transfusion for MCA-PSV > 1.5 MoM or hydrops',
            'VZIG within 10 days of exposure; oral acyclovir within 24 hours of rash',
          ],
          ['Maternal shingles', '—', '0% risk of congenital varicella syndrome'],
        ],
      },
      diagram: [
        {
          kind: 'parvovirus-vzv-timeline',
          title: 'Diagram 8 · Parvovirus B19 versus varicella-zoster',
          caption:
            'Left: B19 targets P antigen on erythroid precursors, so serial MCA-PSV > 1.5 MoM is the monitor and intrauterine transfusion is the treatment. Right: the congenital varicella syndrome risk peaks at 13–20 weeks (2%), collapses after 20 weeks, then reverses at term into neonatal varicella (50% infection, 25% clinical disease after 36 weeks).',
        },
      ],
      trap: {
        title: 'Examiner trap · shingles is not chickenpox',
        body: 'Maternal herpes zoster (shingles) carries a 0% risk of congenital varicella syndrome because maternal IgG is already present. Only primary varicella in a non-immune woman carries the congenital and neonatal risk.',
      },
      traps: [
        {
          title: 'Examiner trap · VZIG is not a vaccine',
          body: 'Varicella vaccine is live and contraindicated in pregnancy. Post-exposure protection is passive: VZIG within 10 days. Active maternal chickenpox is treated with oral acyclovir within 24 hours of rash onset.',
        },
      ],
      pearls: [
        'Parvovirus B19 targets blood-group antigen "P" on erythroid precursors; severe fetal anemia is detected by MCA-PSV > 1.5 MoM (95% sensitivity) and treated by intrauterine transfusion.',
        'VZV congenital varicella syndrome risk: < 13 weeks 0.5%; 13–20 weeks 2%; > 20 weeks minimal; > 36 weeks 50% fetal infection and 25% clinical neonatal varicella.',
        'VZIG within 10 days of exposure in a non-immune pregnant woman; oral acyclovir within 24 hours of rash onset for active varicella.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'pg-torch-f1',
      front: 'Which immunoglobulin crosses the placenta — and which one marks recent infection?',
      back: 'IgG crosses the placenta (small size) and confers lifelong immunity; IgM is the recent-infection marker (< 10 days) but cannot cross the placenta due to its large molecular weight.',
    },
    {
      id: 'pg-torch-f2',
      front: 'Why is amniocentesis for TORCH PCR only possible after 18–20 weeks?',
      back: 'Two reasons: PCR turns positive only 6–8 weeks after maternal infection, and fetal urination (which excretes the pathogen) is fully established only by 18–20 weeks. MTP is also legally not done beyond 20 weeks.',
    },
    {
      id: 'pg-torch-f3',
      front: 'TORCH testing in recurrent pregnancy loss — recommended or not?',
      back: 'NOT recommended. TORCH infections occur once in a lifetime and confer immunity (except syphilis, and rarely CMV/Toxoplasma strain reinfection).',
    },
    {
      id: 'pg-torch-f4',
      front: 'Drug of choice for toxoplasmosis before and after 18 weeks?',
      back: 'Before 18 weeks: Spiramycin 1 g TDS. At/after 18 weeks: Pyrimethamine 50 mg/day + Sulfadiazine 1.5 g/day + Folinic acid 25 mg twice weekly (G6PD deficiency is a contraindication).',
    },
    {
      id: 'pg-torch-f5',
      front: 'Two most common fetal USG findings in toxoplasmosis?',
      back: 'Intracranial calcifications and bilateral progressive ventricular dilatation.',
    },
    {
      id: 'pg-torch-f6',
      front: 'Penicillin allergy in a pregnant woman with syphilis — what is the correct step?',
      back: 'Attempt penicillin desensitization first. Only if that is impossible use erythromycin/ceftriaxone/azithromycin — and then treat the neonate for congenital syphilis.',
    },
    {
      id: 'pg-torch-f7',
      front: 'Rubella CRS — transmission vs defect risk at < 12 weeks, 12–16 weeks, > 16 weeks?',
      back: '< 12 weeks: 90% transmission / 97% defect. 12–16 weeks: 55% / 20%. > 16 weeks: 45% transmission / deafness only.',
    },
    {
      id: 'pg-torch-f8',
      front: 'Classic congenital rubella syndrome triad?',
      back: 'Sensorineural hearing loss, cataracts, and congenital heart disease (PDA and VSD).',
    },
    {
      id: 'pg-torch-f9',
      front: 'CMV IgG avidity cutoffs for recent vs past infection?',
      back: '< 30% avidity = recent primary infection; > 60% avidity = past infection (> 3 months).',
    },
    {
      id: 'pg-torch-f10',
      front: 'When is neonatal CMV diagnosed, and what is the antiviral window?',
      back: 'Confirm within 3 weeks of birth by neonatal saliva/urine PCR; start Valganciclovir within the first 4 weeks of life in symptomatic neonates.',
    },
    {
      id: 'pg-torch-f11',
      front: 'Perinatal HSV transmission split (congenital / neonatal / postnatal)?',
      back: '5% congenital, 85% neonatal, 10% postnatally acquired. Neonatal risk order: primary genital > first nonprimary > recurrent.',
    },
    {
      id: 'pg-torch-f12',
      front: 'At what gestational age do you start HSV suppressive therapy, and why?',
      back: 'From > 36 weeks until delivery (acyclovir or valaciclovir) — to suppress recurrence and reduce the need for caesarean section.',
    },
    {
      id: 'pg-torch-f13',
      front: 'Parvovirus B19 — which antigen does it target, and how is severe fetal anemia detected?',
      back: 'It targets blood-group antigen "P" on erythroid precursors (and myocardium/placenta) → inhibits erythropoiesis. Severe anemia is detected by MCA-PSV > 1.5 MoM (95% sensitivity).',
    },
    {
      id: 'pg-torch-f14',
      front: 'VZV — risk of congenital varicella syndrome by gestational age?',
      back: '< 13 weeks: 0.5%. 13–20 weeks: 2% (highest teratogenic window). > 20 weeks: minimal. > 36 weeks: 50% fetal infection, 25% clinical neonatal varicella. Maternal shingles: 0% risk.',
    },
    {
      id: 'pg-torch-f15',
      front: 'Syphilis screening in a high-prevalence area (> 5%) — what happens on the day of a positive RST?',
      back: 'Give the first benzathine penicillin G 2.4 MU IM dose immediately on the positive Rapid Syphilis Test, then perform RPR to guide duration-based therapy. Never delay treatment for confirmatory titres.',
    },
  ],
  mcqs: [
    {
      id: 'pg-torch-q1',
      stem: 'A 27-year-old primigravida at 12 weeks has a rubella IgM-positive, IgG-positive serology. She is asymptomatic and has no rash. What is the next best step?',
      options: [
        'Reassure her that she is immune and needs no further testing',
        'Perform an IgG avidity test to distinguish recent from past infection',
        'Arrange immediate termination of pregnancy',
        'Repeat IgM in 6 months',
      ],
      answerIndex: 1,
      explanation:
        'IgM⁺/IgG⁺ indicates infection more than 10 days ago, but does not by itself date it. An IgG avidity test resolves the dilemma: high avidity means infection > 3 months ago (or vaccination), low avidity means infection < 3 months ago. Rubella IgM also has a 15–20% false-positive rate, so a single result is never acted on alone.',
    },
    {
      id: 'pg-torch-q2',
      stem: 'Amniocentesis for fetal TORCH PCR should not be performed before which gestational age?',
      options: ['10–12 weeks', '14–16 weeks', '18–20 weeks', '24 weeks'],
      answerIndex: 2,
      explanation:
        'PCR turns positive only 6–8 weeks after maternal infection and fetal urination is established only by 18–20 weeks. MTP is also legally not performed beyond 20 weeks.',
    },
    {
      id: 'pg-torch-q3',
      stem: 'A woman at 22 weeks has confirmed fetal toxoplasmosis on amniotic-fluid PCR and ultrasound. Which regimen is correct?',
      options: [
        'Spiramycin 1 g TDS',
        'Pyrimethamine + sulfadiazine + folinic acid with weekly CBC',
        'Nifurtimox for 14 days',
        'Acyclovir 400 mg TDS',
      ],
      answerIndex: 1,
      explanation:
        'At/after 18 weeks the regimen is pyrimethamine 50 mg/day + sulfadiazine 1.5 g/day + folinic acid 25 mg twice weekly, with weekly CBC (bone-marrow suppression). Spiramycin is the < 18-week drug and is used only when both PCR and ultrasound are negative at ≥ 18 weeks.',
    },
    {
      id: 'pg-torch-q4',
      stem: 'A pregnant woman with early syphilis has a documented anaphylactic penicillin allergy. What is the correct management?',
      options: [
        'Give erythromycin 500 mg QID for 14 days and no neonatal treatment',
        'Attempt penicillin desensitization and treat with benzathine penicillin G',
        'Give azithromycin 2 g once and discharge',
        'Defer treatment until after delivery',
      ],
      answerIndex: 1,
      explanation:
        'Penicillin is the only drug proven to cross the placenta and treat the fetus, so desensitization is the preferred path. If desensitization is impossible, erythromycin/ceftriaxone/azithromycin treat the mother but not reliably the fetus — the neonate must then be treated for congenital syphilis.',
    },
    {
      id: 'pg-torch-q5',
      stem: 'A neonate is born to a mother treated for early syphilis 2 weeks before delivery. Which risk group and action are correct?',
      options: [
        'No risk — no further investigation',
        'Low risk — serology and review at 3 months',
        'High risk — treat the neonate for congenital syphilis',
        'High risk — only observe for 1 month',
      ],
      answerIndex: 2,
      explanation:
        'Maternal treatment < 4 weeks before delivery (or a non-beta-lactam drug or inadequate therapy) defines a high-risk neonate → treat for congenital syphilis. Low risk requires normal neonatal examination plus adequate treatment more than 4 weeks before delivery.',
    },
    {
      id: 'pg-torch-q6',
      stem: 'Primary maternal rubella infection at 10 weeks carries what congenital defect risk?',
      options: ['20%', '45%', '55%', '97%'],
      answerIndex: 3,
      explanation:
        '< 12 weeks: 90% transmission and 97% congenital defect risk — the era of maximal teratogenicity. Defect risk falls to ~20% at 12–16 weeks and to deafness alone after 16 weeks.',
    },
    {
      id: 'pg-torch-q7',
      stem: 'Which statement about congenital CMV is correct?',
      options: [
        'Severe damage is most likely with third-trimester infection',
        'It is the most common cause of nongenetic sensorineural hearing loss',
        'Universal antenatal screening is recommended',
        'Fetal brain MRI is compulsory in all confirmed infections',
      ],
      answerIndex: 1,
      explanation:
        'CMV is the most common congenital viral infection and the most common cause of nongenetic SNHL. Transmission rises with gestation, but severe neuro/hearing damage is almost exclusively first-trimester. Ultrasound every 2–4 weeks is mandatory; MRI and fetal blood sampling are not compulsory.',
    },
    {
      id: 'pg-torch-q8',
      stem: 'Which accurately describes the perinatal HSV transmission distribution?',
      options: [
        '85% congenital, 5% neonatal, 10% postnatal',
        '5% congenital, 85% neonatal, 10% postnatal',
        '50% congenital, 25% neonatal, 25% postnatal',
        '10% congenital, 45% neonatal, 45% postnatal',
      ],
      answerIndex: 1,
      explanation:
        'Perinatal HSV is 5% congenital (little teratogenic capacity), 85% neonatal (risk order: primary > first nonprimary > recurrent), and 10% postnatally acquired (horizontal).',
    },
    {
      id: 'pg-torch-q9',
      stem: 'Parvovirus B19 in pregnancy — which test best detects severe fetal anemia?',
      options: [
        'Maternal IgM alone',
        'Middle cerebral artery peak systolic velocity > 1.5 MoM',
        'Amniotic-fluid alpha-fetoprotein',
        'Fetal scalp blood sampling',
      ],
      answerIndex: 1,
      explanation:
        'Serial MCA-PSV (> 1.5 MoM) measured during fetal inactivity predicts severe fetal anemia with 95% sensitivity and is the trigger for intrauterine transfusion. Maternal IgM has a 20–40% false-negative rate and cannot grade fetal anemia.',
    },
    {
      id: 'pg-torch-q10',
      stem: 'A non-immune pregnant woman is exposed to chickenpox at 16 weeks. What is the correct post-exposure management?',
      options: [
        'Oral acyclovir within 24 hours',
        'Varicella-zoster immunoglobulin (VZIG) within 10 days',
        'Varicella vaccine immediately',
        'No prophylaxis; observe only',
      ],
      answerIndex: 1,
      explanation:
        'VZIG is given within 10 days of exposure to non-immune pregnant women; the vaccine is live and contraindicated in pregnancy. Active maternal varicella is treated with oral acyclovir within 24 hours of rash onset. At 13–20 weeks the congenital varicella syndrome risk is 2%, the highest teratogenic window.',
    },
  ],
};
