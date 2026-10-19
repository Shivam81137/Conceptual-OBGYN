import type { StudioModule } from '@/data/revisionStudio';

/**
 * NEET PG & INI-CET · Module 01 — TORCH Infections
 * ---------------------------------------------------------------------------
 * Complete extracted knowledge base (Chapter 20: TORCH Infections — Pavika Lal,
 * Renu Gupta, Prativa Verma) rendered as mechanism-first revision notes:
 * serological algorithms, clinical tables, the ten extracted Mermaid
 * algorithms verbatim, examiner traps and save-to-⌘K golden rules.
 *
 * Zero data loss: every percentage, week cutoff, sensitivity/specificity value
 * and drug dosage from the source is retained.
 */

export const TORCH_INFECTIONS_MODULE: StudioModule = {
  id: 'pg-torch-infections',
  track: 'NEET_PG',
  title: 'TORCH Infections',
  shortTitle: 'TORCH',
  summary:
    'The complete congenital-infection vault: serological timing, amniotic-fluid PCR windows, and toxoplasmosis, syphilis, rubella, CMV, HSV, parvovirus B19 and VZV — with the ten source algorithms and every treatment regimen.',
  highYield: true,
  weightage: 'High Yield',
  durationMinutes: 42,
  tags: ['TORCH', 'Congenital infection', 'Serology', 'Antenatal', 'High Yield'],
  sourceTag: 'Pavika Lal, Renu Gupta, Prativa Verma • Chapter 20: TORCH Infections',
  updatedAtISO: '2026-10-18T06:00:00.000Z',
  notes: [
    /* ==================================================================== */
    /* 1. Overview                                                          */
    /* ==================================================================== */
    {
      id: 'overview',
      heading: 'Overview & the TORCH complex',
      intro:
        'TORCHes (Toxoplasmosis, Rubella, Cytomegalovirus, Herpes, and Other diseases) are congenital fetal infections that cause diverse neonatal sequelae — ranging from severe heart and brain defects to long-term neurodevelopmental delay.',
      table: {
        head: ['Infection', 'Causative organism', 'Type of organism'],
        rows: [
          ['Toxoplasmosis', 'Toxoplasma gondii', 'Protozoan parasite'],
          [
            'Others (Syphilis, Chickenpox, Parvovirus)',
            'Treponema pallidum, Varicella zoster, Parvovirus B19',
            'Treponema: spirochaete bacterium · Varicella zoster: herpes virus member (dsDNA) · Parvovirus: ssDNA virus (Parvoviridae family)',
          ],
          ['Rubella', 'Rubella virus', 'ssRNA virus (Togaviridae)'],
          ['Cytomegalovirus (CMV)', 'Cytomegalovirus', 'dsDNA virus'],
          ['Herpes simplex (1 & 2)', 'Herpes simplex virus', 'DNA virus'],
        ],
      },
      pearls: [
        'TORCH is an acronym for the common congenital infections — Toxoplasma, Rubella, CMV, Herpes (and Others: Syphilis, Varicella, Parvovirus B19).',
        'Congenital sequelae span severe heart and brain defects through to long-term neurodevelopmental delay.',
      ],
    },

    /* ==================================================================== */
    /* 2. Serology                                                          */
    /* ==================================================================== */
    {
      id: 'serology',
      heading: 'Serological principles & avidity testing',
      intro:
        'ELISA is the most commonly employed modality: paired virus-specific IgG and IgM time the infection against gestational age.',
      bullets: [
        'IgM kinetics: produced within 1 week of primary infection; cannot cross the placenta (large molecular weight) — so a raised IgM is the fetal-unaffected marker of recent maternal infection.',
        'IgG kinetics: produced after 1 week as a secondary response or due to reinfection; crosses the placenta (small size) and confers lifelong immunity.',
        'Immune maturation (avidity): IgG undergoes a conformational change after 3 months, replacing low avidity with high avidity. Avidity testing resolves the diagnostic dilemma between acute/recent (<3 months) and prior (>3 months) infection.',
      ],
      code: {
        label: 'Algorithm 1 — General principles of serological tests',
        language: 'mermaid',
        source: `graph TD
  A[Serological Tests: IgM & IgG] --> B[IgM+ / IgG-]
  A --> C[IgM+ / IgG+]
  A --> D[IgG+ / IgM-]
  A --> E[IgM- / IgG-]
  B --> B1[Recent infection: < 10 days]
  C --> C1[Recent infection: > 10 days]
  D --> D1[Past infection]
  E --> E1[Infection excluded]
  C1 --> F[Avidity Test]
  F --> G[High IgG Avidity: infection > 3 months ago or vaccination]
  F --> H[Low IgG Avidity: infection < 3 months ago]`,
      },
      trap: {
        title: 'Examiner trap',
        body: 'IgM is the recent-infection marker but never crosses the placenta; IgG is the immunity marker and is the only one that crosses. A stem that asks "fetal infection marker" is contrasting IgM (maternal recent) against IgG (protective/transplacental).',
      },
      pearls: [
        'IgM⁺ / IgG⁻ → recent infection (<10 days). IgM⁺ / IgG⁺ → recent infection (>10 days) → run avidity.',
        'High IgG avidity = infection >3 months ago (or vaccination); low IgG avidity = infection <3 months ago.',
      ],
    },

    /* ==================================================================== */
    /* 3. Timing & amniotic PCR                                             */
    /* ==================================================================== */
    {
      id: 'timing',
      heading: 'Timing of maternal exposure & amniotic-fluid PCR',
      bullets: [
        'Pre-pregnancy infection: protects the fetus via preexisting transplacental maternal IgG; fetal infection is very rare.',
        'Acute primary infection in pregnancy: causes severe fetal outcomes due to the absence of protective maternal IgG.',
        'Recurrent Pregnancy Loss (RPL) rule: because TORCHes infections occur once in a lifetime and confer immunity (except syphilis, and very rarely reinfection with another strain of CMV or Toxoplasma), TORCH testing is NOT recommended in recurrent pregnancy loss.',
        'Trimester severity rule: with the exception of HSV, infections during the first trimester have the worst fetal outcomes. The fetus is most vulnerable between week 3 and weeks 8–12 postfertilization.',
      ],
      code: {
        label: 'Algorithm 2 — Severity of fetal affection vs timing',
        language: 'mermaid',
        source: `graph LR
  A[Preconception: 2-5 weeks] -->|No affection| B[Embryogenesis: 3 to 12 weeks]
  B -->|Neural tube formation & active organogenesis: MOST severe affection| C
  C -->|Less severe affection| D[Fetal period]`,
      },
      table: {
        head: ['Amniotic-fluid PCR rule', 'Detail'],
        rows: [
          [
            'What serology proves',
            'Maternal serology only confirms maternal infection, not fetal infection.',
          ],
          [
            'Why not before 18–20 weeks',
            '(1) Amniotic-fluid PCR turns positive only 6–8 weeks after initial maternal infection; (2) fetal urination (which excretes the pathogen into amniotic fluid) is fully established only by 18–20 weeks.',
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
      pearls: [
        'Amniocentesis for TORCH PCR is only meaningful after 18–20 weeks — because PCR needs 6–8 weeks to turn positive and fetal urination must be established.',
        'TORCH serology is NOT indicated in recurrent pregnancy loss — these infections confer lifelong immunity.',
      ],
    },

    /* ==================================================================== */
    /* 4. Fetal USG signs                                                   */
    /* ==================================================================== */
    {
      id: 'usg',
      heading: 'Ultrasonography (USG) signs presumptive of TORCH',
      intro:
        'These are the sonographic red flags that trigger a TORCH work-up — grouped by anatomical compartment.',
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
      pearls: [
        'Intracranial calcifications and ventriculomegaly are the two most common cranial USG findings in fetal TORCH.',
        'Hydrops + fetal anemia (MCA-PSV > 1.5 MoM) with no maternal atypical antibodies should prompt a parvovirus B19 and TORCH screen.',
      ],
    },

    /* ==================================================================== */
    /* 5. Toxoplasmosis — epidemiology                                      */
    /* ==================================================================== */
    {
      id: 'toxo-epi',
      heading: 'Toxoplasmosis — epidemiology & life cycle',
      bullets: [
        'Prevalence: 10–55% in temperate areas; up to 80% in tropical areas.',
        'Definitive host: cats and felines — sexual reproduction produces oocytes passed in cat feces, contaminating soil and water.',
        'Intermediate hosts: humans, pigs, and lambs — ingest oocytes → parasitemia lasting up to 10 days → transforms into lifelong dormant tissue cysts.',
        'Transmission kinetics: transplacental transfer increases with placental maturation and advancing gestational age (MTCT risk is lower in early gestation, higher in late gestation). No transmission occurs via breastfeeding or direct human-to-human contact.',
        'MTCT risk factors: acute primary infection during pregnancy or within 3 months preconception; reactivation in immunocompromised mothers (HIV/immunosuppressants); lack of antepartum treatment; or virulent-strain reinfection.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'The risk of transmission rises with gestational age, but the risk of severe fetal disease falls. That is why first-trimester toxoplasmosis is managed for severity and third-trimester infection is managed for transmission.',
      },
      pearls: [
        'Only the cat is the definitive host (sexual reproduction); humans are intermediate hosts that form dormant tissue cysts.',
        'Transplacental toxoplasma transfer increases with advancing gestation — unlike most teratogens, where early equals worse.',
      ],
    },

    /* ==================================================================== */
    /* 6. Toxoplasmosis — clinical                                          */
    /* ==================================================================== */
    {
      id: 'toxo-clinical',
      heading: 'Toxoplasmosis — clinical presentation & maternal diagnosis',
      bullets: [
        'Maternal: asymptomatic in ~80%; symptomatic in ~20% — fever, chills, sweats, headache, myalgia, pharyngitis; hepatosplenomegaly and maculopapular rash.',
        'Most common sign: bilateral nontender cervical lymphadenopathy.',
        'Severe/reactivation disease: chorioretinitis with floaters and vision loss.',
        'Fetal USG — two most common findings: intracranial calcifications and bilateral progressive ventricular dilatation.',
        'Maternal diagnosis (Algorithm 4): start with toxoplasma IgG; if negative run a PCR, if positive check IgM; when IgM is positive run an IgG avidity test.',
      ],
      code: {
        label: 'Algorithms 3A, 3B & 4 — clinical presentation & maternal diagnosis',
        language: 'mermaid',
        source: `graph TD
  subgraph Alg3A [Algorithm 3A: Maternal Toxoplasmosis]
    M[Maternal Toxoplasmosis] --> M1[Asymptomatic: 80%]
    M --> M2[Symptomatic: 20% - Fever, chills, sweats, headache, myalgia, pharyngitis, hepatosplenomegaly, maculopapular rash<br>Most common: Bilateral nontender cervical lymphadenopathy<br>Severe/Reactivation: Chorioretinitis with floaters/vision loss]
  end
  subgraph Alg3B [Algorithm 3B: Fetal USG Findings]
    F[Two Most Common Fetal USG Findings] --> F1[Intracranial calcifications]
    F --> F2[Bilateral progressive ventricular dilatation]
  end
  subgraph Alg4 [Algorithm 4: Maternal Diagnostic Workup]
    S[Suspected Toxoplasma Infection] --> IGG[IgG Assay]
    IGG -->|Negative| PREV[Advise preventive strategies]
    IGG -->|Positive| IGM[Check IgM]
    IGM -->|Negative| RE[Reassurance]
    IGM -->|Positive| AVID[IgG Avidity Test]
    AVID -->|High Avidity| PAST[Past Infection -> Reassurance]
    AVID -->|Low Avidity| REC[Recent Infection -> Consider Fetal Investigation]
  end`,
      },
      pearls: [
        'Bilateral nontender cervical lymphadenopathy is the commonest maternal sign of acute toxoplasmosis.',
        'Intracranial calcifications + bilateral progressive ventricular dilatation are the two most common fetal USG findings.',
      ],
    },

    /* ==================================================================== */
    /* 7. Toxoplasmosis — neonatal                                          */
    /* ==================================================================== */
    {
      id: 'toxo-neonatal',
      heading: 'Toxoplasmosis — neonatal features & diagnosis',
      bullets: [
        'Asymptomatic: 80%.',
        'Symptomatic: 20% — two-thirds have moderate disease (intracranial calcifications, peripheral retinochoroiditis); one-third have disseminated disease (hydrocephalus, macular chorioretinitis).',
        'Poor prognostic factors on USG: severe ventriculomegaly, brain necrosis, gyration disorders, and microcephaly.',
        'Amniotic fluid / fetal blood PCR: most reliable prenatal method with PPV = 100% and specificity = 100%.',
        'Contraindication to amniocentesis: do NOT perform in HIV-positive or HBsAg-positive mothers due to the procedural risk of fetal viral transmission.',
        'Serological caveats: universal screening is not recommended; screen only for abnormal USG findings. Low IgG avidity can persist for years in some women. Positive IgG + IgM requires a confirmatory second sample.',
        'Newborn work-up: exam by neonatologist, retinal specialist, and pediatric neurologist + neonatal IgM, IgG, IgA serology and PCR of blood, urine, and CSF at birth.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'Amniocentesis is contraindicated in HIV-positive and HBsAg-positive mothers because the needle can seed the fetus with maternal virus — a procedural risk, not a serological one.',
      },
      pearls: [
        'Amniotic-fluid / fetal-blood PCR has PPV 100% and specificity 100% — the most reliable prenatal test for fetal toxoplasmosis.',
        'Do not perform amniocentesis in HIV-positive or HBsAg-positive mothers.',
      ],
    },

    /* ==================================================================== */
    /* 8. Toxoplasmosis — treatment                                         */
    /* ==================================================================== */
    {
      id: 'toxo-treatment',
      heading: 'Toxoplasmosis — treatment in pregnancy',
      intro:
        'The regimen is decided by gestational age: spiramycin before 18 weeks, pyrimethamine + sulfadiazine + folinic acid at or after 18 weeks.',
      table: {
        head: ['Parameter', '<18 weeks of gestation', '≥18 weeks of gestation'],
        rows: [
          [
            'Drug regimen',
            'Spiramycin: 1 g TDS (three times daily)',
            'Pyrimethamine 50 mg/day + Sulfadiazine three 500 mg tablets/day (1.5 g/day) + Folinic acid two 25 mg capsules/week + Hydration 2 L water/day to alkalinize urine',
          ],
          ['Contraindications (C/I)', 'Long QT syndrome', 'G6PD deficiency'],
          [
            'Side effects (S/E)',
            'GIT symptoms (nausea, vomiting), skin reactions',
            'Skin reactions, bone marrow suppression, reversible acute kidney injury',
          ],
          ['Monitoring', 'No monitoring required', 'Weekly complete blood count (CBC)'],
        ],
      },
      code: {
        label: 'Algorithm 5 — treatment according to fetal toxoplasmosis diagnosis',
        language: 'mermaid',
        source: `graph TD
  A[Fetal USG + Amniotic Fluid PCR at >18 Weeks] --> B[Presented < 18 Weeks: Started on Spiramycin]
  A --> C[Presented > 18 Weeks: Started on Pyrimethamine + Sulfadiazine + Folinic Acid]
  B -->|PCR Negative & USG Negative| B1[Continue Spiramycin]
  B -->|PCR Positive and/or USG Positive| B2[Switch to Pyrimethamine + Sulfadiazine + Folinic Acid]
  C -->|PCR Negative & USG Negative| C1[Change to Spiramycin]
  C -->|PCR Positive and/or USG Positive| C2[Continue Pyrimethamine + Sulfadiazine + Folinic Acid]`,
      },
      pearls: [
        'Spiramycin is the <18-week drug; pyrimethamine + sulfadiazine + folinic acid is the ≥18-week drug.',
        'Pyrimethamine causes bone marrow suppression — add folinic acid and monitor weekly CBC; it is contraindicated in G6PD deficiency.',
        'Spiramycin is contraindicated in long QT syndrome; pyrimethamine is contraindicated in G6PD deficiency.',
      ],
    },

    /* ==================================================================== */
    /* 9. Toxoplasmosis — prevention                                        */
    /* ==================================================================== */
    {
      id: 'toxo-prevention',
      heading: 'Toxoplasmosis — obstetric rules & primary prevention',
      bullets: [
        'Perform monthly fetal USG if fetal PCR is positive.',
        'Congenital toxoplasmosis does NOT alter the timing or mode of delivery, and breastfeeding is not contraindicated (exercise caution if nipples are cracked or bleeding).',
        'Primary prevention: cook meat to 63–74°C; refrigerate meat for at least 72 hours; avoid unpasteurized goat milk, bare-hand meat handling, skinning animals without gloves, and cat feces.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'Congenital toxoplasmosis is not an indication for caesarean delivery, nor a contraindication to breastfeeding — a favourite "does it change management?" distractor.',
      },
      pearls: [
        'Congenital toxoplasmosis does not change timing or mode of delivery, and does not contraindicate breastfeeding.',
        'Primary prevention is dietary and hygiene-based: cook meat to 63–74°C, freeze ≥72 h, avoid raw goat milk, gloves for soil/cat litter.',
      ],
    },

    /* ==================================================================== */
    /* 10. Syphilis — screening                                             */
    /* ==================================================================== */
    {
      id: 'syph-screening',
      heading: 'Syphilis — transmission & WHO universal screening',
      bullets: [
        'Transmitted via direct lesion contact, sexual contact (1/3 of cases), or vertical transmission (highest in early-stage disease and the third trimester).',
        'Universal screening: recommended for all pregnant women at the first antenatal visit, regardless of prevalence or prior pregnancy results.',
        'Low-prevalence areas (<5%): single on-site Rapid Syphilis Test (RST) is preferred over Rapid Plasma Reagin (RPR).',
        'High-prevalence areas (>5%): perform RST — if positive, administer the first treatment dose immediately, then perform RPR to guide further duration-based therapy.',
        'Repeat screening is indicated only if at risk of reinfection, presenting with STI symptoms, or HIV-positive.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'In high-prevalence settings the first benzathine penicillin dose is given on the same day as a positive RST, before awaiting RPR — do not delay treatment for confirmatory titres.',
      },
      pearls: [
        'Universal syphilis screening at the first antenatal visit — irrespective of prevalence or previous results.',
        'In high-prevalence areas, treat on the positive RST immediately, then titrate with RPR.',
      ],
    },

    /* ==================================================================== */
    /* 11. Syphilis — stages                                                */
    /* ==================================================================== */
    {
      id: 'syph-stages',
      heading: 'Syphilis — clinical features & pregnancy outcomes',
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
      pearls: [
        'The classic chancre is a single painless papule that ulcerates, with regional lymphadenopathy — incubation 9–90 days (avg 21).',
        'Syphilis is the one TORCH infection that does not confer lifelong immunity — reinfection is possible.',
      ],
    },

    /* ==================================================================== */
    /* 12. Syphilis — treatment                                             */
    /* ==================================================================== */
    {
      id: 'syph-treatment',
      heading: 'Syphilis — treatment regimens in pregnancy',
      bullets: [
        'Early syphilis, till 27+6 weeks: Benzathine penicillin G 2.4 MU IM single dose (preferred over procaine penicillin).',
        'Early syphilis, 28 weeks till term: Benzathine penicillin G 2.4 MU IM on Day 1 and Day 8, with careful neonatal assessment at birth.',
        'Penicillin allergy (early): attempt desensitization first. If impossible — Erythromycin 500 mg PO QID for 14 days, OR Ceftriaxone 1 g IM OD for 10–14 days, OR Azithromycin 2 g PO once (these carry treatment-failure risk and require treating the neonate for congenital syphilis).',
        'Late / cardiovascular / gummatous: Benzathine penicillin G 2.4 MU IM weekly on Days 1, 8 and 15 (3 doses), preferred over Procaine penicillin 1.2 MU IM OD for 20 days. Penicillin allergy: Erythromycin 500 mg PO QID for 30 days.',
        'Neurosyphilis: Procaine penicillin G 1.8–2.4 MU IM OD + Probenecid 500 mg PO QID for 14 days, OR Benzyl penicillin 10.8–14.4 g daily (1.8–2.4 g IV every 4 hours) for 14 days.',
        'Mandatory steroid cover: for both neurosyphilis and cardiovascular syphilis, administer Prednisolone 40–60 mg OD for 3 days, starting 24 hours prior to antibiotics.',
        'Retreatment indications: inadequate prior therapy or failure to achieve a fourfold drop in RPR/VDRL titre.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'Penicillin is the only drug proven to treat the fetus. Other agents (erythromycin, ceftriaxone, azithromycin) treat the mother but not reliably the fetus — the neonate must then be treated for congenital syphilis.',
      },
      pearls: [
        'Penicillin is the only therapy proven to cross the placenta and treat the fetus — desensitize rather than substitute.',
        'Neurosyphilis and cardiovascular syphilis need steroid cover: prednisolone 40–60 mg OD for 3 days, starting 24 h before antibiotics.',
      ],
    },

    /* ==================================================================== */
    /* 13. Syphilis — classification                                        */
    /* ==================================================================== */
    {
      id: 'syph-classification',
      heading: 'Syphilis — risk stratification & case classification',
      intro:
        'Algorithms 6 and 7 separate the neonate who needs nothing, the neonate who needs serological follow-up, and the neonate who must be treated for congenital syphilis.',
      code: {
        label: 'Algorithms 6 & 7 — congenital syphilis risk and case classification',
        language: 'mermaid',
        source: `graph TD
  subgraph Alg6 [Algorithm 6: Risk of Congenital Syphilis]
    R[Risk of Congenital Syphilis] --> NR[No Risk: Treated prior to index pregnancy + no reinfection risk]
    R --> LR[Low Risk: Normal neonate exam + adequate treatment >4 wks before delivery]
    R --> HR[High Risk: Maternal treatment <4 wks before delivery OR non-beta-lactam drug OR inadequate treatment]
    NR --> NR1[No further investigation required]
    LR --> LR1[Mother & infant treponemal + nontreponemal IgM serology; rule out reinfection; evaluate neonate at 3 months]
    HR --> HR1[Treat neonate for Congenital Syphilis]
  end
  subgraph Alg7 [Algorithm 7: Types of Congenital Syphilis]
    P1[Possible Case: Untreated/inadequately treated mother at delivery + positive infant RPR] --> P2[Probable Case: Possible Case + physical/long-bone X-ray signs OR RPR titre > 4x normal]
    P2 --> P3[Confirmed Case: Probable Case + T. pallidum on dark-field microscopy OR positive PCR of urine/blood/placenta/skin]
  end`,
      },
      pearls: [
        'Maternal treatment <4 weeks before delivery = high-risk neonate → treat for congenital syphilis.',
        'Possible → Probable → Confirmed case ladder: add physical/long-bone X-ray or RPR >4× titre (probable), then dark-field microscopy or PCR (confirmed).',
      ],
    },

    /* ==================================================================== */
    /* 14. Rubella                                                          */
    /* ==================================================================== */
    {
      id: 'rubella',
      heading: 'Rubella — virology & maternal disease',
      bullets: [
        'Togaviridae family (ssRNA); incubation period 14 days (range 12–23 days).',
        'Infectivity period: from 7 days before rash onset to 7–10 days after rash onset.',
        'High community herd immunity (98–99%) from MMR vaccination makes routine antenatal screening unnecessary.',
        'Adult clinical manifestations: diffuse fine maculopapular rash (3-day rash) with cephalocaudal spread from face to trunk and limbs.',
        'Characteristic suboccipital, postauricular, and cervical lymphadenopathy.',
        'Occasional migratory, symmetrical, nonerosive small-joint arthritis, or mild flu-like illness.',
      ],
      pearls: [
        'Rubella: Togaviridae ssRNA; incubation 14 days; infectious from 7 days before to 7–10 days after the rash.',
        'The 3-day maculopapular rash spreads cephalocaudally, with suboccipital, postauricular and cervical lymphadenopathy.',
      ],
    },

    /* ==================================================================== */
    /* 15. Rubella — CRS                                                    */
    /* ==================================================================== */
    {
      id: 'rubella-crs',
      heading: 'Rubella — congenital rubella syndrome (CRS)',
      table: {
        head: ['Gestational age', 'Fetal transmission risk', 'Congenital defect risk'],
        rows: [
          ['<12 weeks', '90%', '97%'],
          ['12–16 weeks', '55%', '20%'],
          ['>16 weeks', '45%', 'Minimal — risk of deafness only'],
        ],
      },
      bullets: [
        'Classic CRS triad: sensorineural hearing loss, cataracts, and congenital heart disease (patent ductus arteriosus [PDA] and ventricular septal defect [VSD]).',
        'Other features: hepatosplenomegaly, FGR, jaundice, anemia, rash, neurodevelopmental delay, and endocrinopathies.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'Transmission risk stays substantial throughout pregnancy, but the defect risk collapses after 16 weeks — after which the only expected sequela is deafness.',
      },
      pearls: [
        'CRS transmission vs defect risk — <12 weeks: 90% / 97%; 12–16 weeks: 55% / 20%; >16 weeks: 45% / deafness only.',
        'Classic CRS triad: sensorineural deafness + cataracts + congenital heart disease (PDA, VSD).',
      ],
    },

    /* ==================================================================== */
    /* 16. Rubella — management                                             */
    /* ==================================================================== */
    {
      id: 'rubella-mgmt',
      heading: 'Rubella — diagnosis & management',
      bullets: [
        'Maternal rubella IgM has a 15–20% false-positive rate (cross-reactivity, post-vaccine persistence, autoantibodies); confirm positive IgG + IgM with IgG avidity or pharyngeal exudate RT-PCR.',
        '<12 weeks infection: consider Termination of Pregnancy (TOP) without invasive testing, due to the 97% defect rate.',
        '12–20 weeks infection: perform amniocentesis for viral RNA PCR (wait at least 6 weeks after maternal infection to avoid false negatives).',
        'Vaccination rules: MMR is a live-attenuated vaccine (contraindicated in pregnancy); avoid conception for 1 month post-vaccine; safe during breastfeeding.',
      ],
      trap: {
        title: 'Examiner trap',
        body: 'Ignore a low-positive rubella IgM in isolation — the 15–20% false-positive rate means you confirm with IgG avidity or pharyngeal RT-PCR before acting.',
      },
      pearls: [
        'Rubella IgM has a 15–20% false-positive rate — confirm with IgG avidity or pharyngeal exudate RT-PCR.',
        'For 12–20-week infection, wait ≥6 weeks after maternal infection before amniotic-fluid RNA PCR to avoid false negatives.',
      ],
    },

    /* ==================================================================== */
    /* 17. CMV — epidemiology                                               */
    /* ==================================================================== */
    {
      id: 'cmv',
      heading: 'Cytomegalovirus (CMV) — epidemiology & transmission',
      bullets: [
        'Most common perinatal viral infection, affecting 0.2–2.2% of all live births.',
        'Most common cause of nongenetic sensorineural hearing loss (SNHL) and a major cause of neurological disability.',
        'Remains dormant lifelong in salivary glands; the primary source is saliva/urine of young children.',
        'Maternal presentation: asymptomatic in 85–90%; symptomatic in 10–15% (mononucleosis-like fever, malaise, cervical lymphadenopathy, or non-A/B/C hepatitis).',
        'Primary vs nonprimary transmission: 30–40% fetal transmission in primary maternal CMV vs 1–2% in nonprimary/reactivated CMV.',
        'Gestational-age dynamics: transmission increases from ~30% in early pregnancy to ~47% in the third trimester, but severe neurological and hearing damage occurs almost exclusively with first-trimester infection.',
        'Congenital features at birth: SGA, microcephaly, jaundice, hepatosplenomegaly, hypotonia, "blueberry muffin" rash, chorioretinitis, and late-onset SNHL.',
      ],
      pearls: [
        'CMV is the most common congenital viral infection AND the most common cause of nongenetic sensorineural hearing loss.',
        'Transmission rises with gestation (~30% → ~47%), but severe neuro/hearing damage is almost exclusively a first-trimester event.',
      ],
    },

    /* ==================================================================== */
    /* 18. CMV — diagnosis & management                                     */
    /* ==================================================================== */
    {
      id: 'cmv-mgmt',
      heading: 'CMV — diagnosis, prognosis & treatment',
      bullets: [
        'CMV IgG avidity: <30% avidity indicates recent primary infection; >60% avidity indicates past infection (>3 months).',
        'Amniocentesis PCR: performed ideally after 20 weeks gestation and at least 8 weeks after maternal infection. It is the only way to confirm fetal transmission from nonprimary/different strains.',
        'Prognosis: cerebral abnormality on USG is the single most important prognostic indicator. Normal fetal brain USG + MRI indicates minimal neurodevelopmental disability risk, though it does not exclude hearing impairment.',
        'Confirm congenital CMV within 3 weeks of birth using neonatal saliva or urine PCR (to distinguish congenital from natal transmission).',
        'Initiate Valganciclovir within the first 4 weeks of life for symptomatic neonates to prevent symptom progression and improve long-term outcomes.',
      ],
      code: {
        label: 'Algorithm 8 — treatment approach in confirmed fetal CMV',
        language: 'mermaid',
        source: `graph TD
  A[Confirmed Fetal CMV Infection] --> B[Mandatory USG every 2-4 weeks<br>Note: Fetal brain MRI & fetal blood sampling not compulsory]
  B --> C[Asymptomatic Fetus]
  B --> D[Mild-to-Moderate Fetus]
  B --> E[Severely Symptomatic Fetus]
  C --> C1[Conservative Management]
  C1 --> C2[Clinical, neurodevelopmental, ophthalmic & lab evaluation of neonate]
  C2 --> C3[Long-term follow-up & consider Valganciclovir]
  D --> D1[In-utero treatment with Valaciclovir can be considered]
  D1 --> C
  D1 --> E
  E --> E1[Termination of Pregnancy]
  E1 --> E2[Fetal autopsy + placental examination]`,
      },
      trap: {
        title: 'Examiner trap',
        body: 'A normal fetal brain USG + MRI lowers but does not abolish risk — hearing impairment can still occur, so neonatal hearing surveillance is mandatory.',
      },
      pearls: [
        'CMV avidity <30% = recent primary infection; >60% = past infection (>3 months).',
        'Congenital CMV is confirmed within 3 weeks of birth by neonatal saliva or urine PCR; start Valganciclovir within the first 4 weeks of life in symptomatic neonates.',
      ],
    },

    /* ==================================================================== */
    /* 19. HSV — epidemiology & classification                              */
    /* ==================================================================== */
    {
      id: 'hsv',
      heading: 'Herpes simplex virus (HSV-1 & HSV-2) — epidemiology & classification',
      bullets: [
        'Most common STI in the reproductive age group; seroprevalence is 60–75% for HSV-1 and 11–30% for HSV-2.',
        'Share 40% genomic similarity (producing cross-neutralizing heterologous antibodies); incubation period is 2–12 days.',
        'Vertical transmission risk is highest with primary infection in the third trimester (especially within 6 weeks of delivery) due to active viral shedding and lack of protective maternal antibodies.',
      ],
      code: {
        label: 'Algorithm 9 — types of genital herpes',
        language: 'mermaid',
        source: `graph TD
  subgraph Alg9 [Algorithm 9: Types of Genital Herpes]
    GH[Genital Herpes] --> IE[Initial Episode: HSV-1 or HSV-2]
    GH --> RE[Recurrent Episode: Few lesions, resolve in days, no systemic illness, high reactivation tendency]
    IE --> PG[Primary Genital Infection: Occurs in absence of both HSV-1 & HSV-2 antibodies; asymptomatic to severe lesions + inguinal lymphadenopathy]
    IE --> NPG[Nonprimary Genital Infection: Occurs in patient with preexisting heterologous antibodies]
  end`,
      },
      pearls: [
        'Primary genital herpes = no antibodies to either HSV type; nonprimary = preexisting heterologous antibodies; recurrent = preexisting homologous antibodies.',
        'Vertical transmission risk is highest with primary infection in the third trimester, especially within 6 weeks of delivery.',
      ],
    },

    /* ==================================================================== */
    /* 20. HSV — perinatal transmission                                     */
    /* ==================================================================== */
    {
      id: 'hsv-perinatal',
      heading: 'HSV — perinatal transmission (Algorithm 10)',
      code: {
        label: 'Algorithm 10 — three types of perinatal HSV transmission',
        language: 'mermaid',
        source: `graph TD
  subgraph Alg10 [Algorithm 10: Three Types of Perinatal HSV Transmission]
    PT[Perinatal HSV Transmission] --> T1[5% Congenital: Mostly asymptomatic, little teratogenic capacity; may cause disseminated skin, ocular & CNS lesions]
    PT --> T2[85% Neonatal: Risk order = Primary genital > 1st nonprimary > Recurrent infection]
    PT --> T3[10% Postnatally Acquired: Horizontal transmission]
  end`,
      },
      trap: {
        title: 'Examiner trap',
        body: 'Neonatal HSV (85%) is overwhelmingly the dominant perinatal route, and the neonatal risk order is primary genital > first nonprimary > recurrent. Congenital HSV is only 5% and has little teratogenic capacity.',
      },
      pearls: [
        'Perinatal HSV split: 5% congenital, 85% neonatal, 10% postnatally acquired.',
        'Neonatal risk order: primary genital > first nonprimary > recurrent infection.',
      ],
    },

    /* ==================================================================== */
    /* 21. HSV — diagnosis & MTCT prevention                                */
    /* ==================================================================== */
    {
      id: 'hsv-mtct',
      heading: 'HSV — diagnosis & prevention of mother-to-child transmission',
      bullets: [
        'Lesion swab (gold standard): cell culture (sensitivity 80–90% in primary active infection) or PCR taken from the base of the lesion with a nylon swab, placed in transport media, and stored at 4°C.',
        'Type-specific serology: indicated only in women presenting with a first episode of genital herpes in the final weeks of pregnancy, to confirm the absence of homologous antibodies and guide the delivery mode.',
      ],
      table: {
        head: ['Phase / intervention', 'Primary infection', 'Recurrent infection'],
        rows: [
          [
            'Acute episode regimen',
            '7–10 days · Oral Acyclovir 400 mg every 8 h · Oral Valaciclovir 500 mg–1 g every 12 h',
            '3–5 days · Oral Acyclovir 400 mg every 8 h · Oral Valaciclovir 500 mg–1 g every 12 h',
          ],
          [
            'Suppressive regimen (from >36 weeks until delivery)',
            'Start at >36 weeks until delivery · Oral Acyclovir 400 mg every 8 h · Oral Valaciclovir 500 mg every 12 h',
            'Start at >36 weeks until delivery · Oral Acyclovir 400 mg every 8 h · Oral Valaciclovir 500 mg every 12 h',
          ],
          [
            'Cesarean section (elective LSCS)',
            'Indicated if infection is present at the time of delivery',
            'Indicated if an active episode/lesions are present',
          ],
          [
            'Severe / disseminated maternal herpes',
            'IV Acyclovir 5–10 mg/kg every 8 h for 2–7 days, followed by oral therapy for 10 days',
            'Supportive care: paracetamol + topical lidocaine 2% gel or 5% ointment',
          ],
        ],
      },
      pearls: [
        'Lesion swab is the gold standard — culture (80–90% sensitive in primary active infection) or PCR from the base of the lesion.',
        'Suppressive acyclovir/valaciclovir from >36 weeks until delivery reduces recurrence and the need for caesarean.',
      ],
    },
  ],
  flashcards: [
    {
      id: 'pg-torch-f1',
      front: 'Which immunoglobulin crosses the placenta — and which one marks recent infection?',
      back: 'IgG crosses the placenta (small size) and confers lifelong immunity; IgM is the recent-infection marker (<10 days) but cannot cross the placenta due to its large molecular weight.',
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
      front: 'Rubella CRS — transmission vs defect risk at <12 weeks, 12–16 weeks, >16 weeks?',
      back: '<12 weeks: 90% transmission / 97% defect. 12–16 weeks: 55% / 20%. >16 weeks: 45% transmission / deafness only.',
    },
    {
      id: 'pg-torch-f8',
      front: 'Classic congenital rubella syndrome triad?',
      back: 'Sensorineural hearing loss, cataracts, and congenital heart disease (PDA and VSD).',
    },
    {
      id: 'pg-torch-f9',
      front: 'CMV IgG avidity cutoffs for recent vs past infection?',
      back: '<30% avidity = recent primary infection; >60% avidity = past infection (>3 months).',
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
      back: 'From >36 weeks until delivery (acyclovir or valaciclovir) — to suppress recurrence and reduce the need for caesarean section.',
    },
    {
      id: 'pg-torch-f13',
      front: 'Parvovirus B19 — which antigen does it target, and how is severe fetal anemia detected?',
      back: 'It targets blood-group antigen "P" on erythroid precursors (and myocardium/placenta) → inhibits erythropoiesis. Severe anemia is detected by MCA-PSV > 1.5 MoM (95% sensitivity).',
    },
    {
      id: 'pg-torch-f14',
      front: 'VZV — risk of congenital varicella syndrome by gestational age?',
      back: '<13 weeks: 0.5%. 13–20 weeks: 2% (highest teratogenic window). >20 weeks: minimal. >36 weeks: 50% fetal infection, 25% clinical neonatal varicella. Maternal shingles: 0% risk.',
    },
  ],
  mcqs: [
    {
      id: 'pg-torch-q1',
      stem: 'A pregnant woman is IgM-positive and IgG-negative for toxoplasma. How is this interpreted?',
      options: ['Past infection', 'Recent infection (<10 days)', 'Infection excluded', 'Recent infection (>10 days)'],
      answerIndex: 1,
      explanation:
        'IgM⁺ / IgG⁻ indicates recent infection within 10 days. IgM⁺/IgG⁺ indicates recent infection >10 days and needs an IgG avidity test; IgG⁺/IgM⁻ is past infection; IgM⁻/IgG⁻ excludes infection.',
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
      stem: 'A woman at 22 weeks has confirmed fetal toxoplasmosis. Which regimen is correct?',
      options: [
        'Spiramycin 1 g TDS',
        'Pyrimethamine + sulfadiazine + folinic acid with weekly CBC',
        'Nifurtimox for 14 days',
        'Acyclovir 400 mg TDS',
      ],
      answerIndex: 1,
      explanation:
        'At/after 18 weeks the regimen is pyrimethamine 50 mg/day + sulfadiazine 1.5 g/day + folinic acid 25 mg twice weekly, with weekly CBC (bone-marrow suppression). Spiramycin is the <18-week drug.',
    },
    {
      id: 'pg-torch-q4',
      stem: 'Which is the only anti-treponemal drug proven to treat the fetus in syphilis?',
      options: ['Erythromycin', 'Azithromycin', 'Benzathine penicillin G', 'Ceftriaxone'],
      answerIndex: 2,
      explanation:
        'Penicillin is the only drug proven to cross the placenta and treat the fetus. Alternatives carry treatment-failure risk and require treating the neonate for congenital syphilis.',
    },
    {
      id: 'pg-torch-q5',
      stem: 'A neonate of a mother treated for syphilis 2 weeks before delivery — which risk group and action?',
      options: [
        'No risk — no further investigation',
        'Low risk — serology and review at 3 months',
        'High risk — treat the neonate for congenital syphilis',
        'High risk — only observe for 1 month',
      ],
      answerIndex: 2,
      explanation:
        'Maternal treatment <4 weeks before delivery (or a non-beta-lactam drug or inadequate therapy) = high risk → treat the neonate for congenital syphilis.',
    },
    {
      id: 'pg-torch-q6',
      stem: 'Primary maternal rubella infection at 10 weeks carries what congenital defect risk?',
      options: ['20%', '45%', '55%', '97%'],
      answerIndex: 3,
      explanation:
        '<12 weeks: 90% transmission and 97% congenital defect risk — the era of maximal teratogenicity. Defect risk falls to ~20% at 12–16 weeks.',
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
        'CMV is the most common congenital viral infection and the most common cause of nongenetic SNHL. Transmission rises with gestation, but severe neuro/hearing damage is almost exclusively first-trimester.',
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
        'Serial MCA-PSV (>1.5 MoM) is measured during fetal inactivity and predicts severe fetal anemia with 95% sensitivity. Maternal IgM has a 20–40% false-negative rate.',
    },
    {
      id: 'pg-torch-q10',
      stem: 'VZV exposure in a nonimmune pregnant woman — what is the post-exposure prophylaxis?',
      options: [
        'Oral acyclovir within 24 hours',
        'Varicella Zoster Immunoglobulin (VZIG) within 10 days',
        'Varicella vaccine immediately',
        'No prophylaxis; observe only',
      ],
      answerIndex: 1,
      explanation:
        'VZIG is given within 10 days of exposure to nonimmune pregnant women. Active maternal rash is treated with oral acyclovir within 24 hours of rash onset.',
    },
  ],
};
