import type { StudioModule } from '@/data/revisionStudio';

/**
 * NEET PG · Module 03 — Placenta Praevia & Placenta Accreta Spectrum
 * ---------------------------------------------------------------------------
 * Complete clinical vault for RCOG Green-top Guideline No. 27a and the FIGO
 * PAS consensus: the < 20 mm low-lying cutoff, Silver's prior-caesarean
 * escalation curve, FIGO grades 1–3c, the EW-AIP/ISUOG ultrasound and MRI
 * descriptors, the 32- and 36-week TVS protocol, the NPSA 6-element care
 * bundle, caesarean hysterectomy with the placenta left in situ and the
 * Triple-P uterine-sparing procedure.
 *
 * Offline-first: every note, diagram blueprint, flashcard and MCQ ships in the
 * client bundle. The API only reconciles the module index.
 */

export const PLACENTA_PRAEVIA_PAS_MODULE: StudioModule = {
  id: 'pg-mod-03-placenta-praevia-pas',
  track: 'NEET_PG',
  title: 'Placenta Praevia & Placenta Accreta Spectrum (PAS)',
  shortTitle: 'Placenta Praevia · PAS',
  summary:
    'RCOG GTG 27a + FIGO in one vault: placenta praevia vs the < 20 mm low-lying placenta, Silver’s 3% → 67% prior-CS escalation, FIGO grades 1–3c, the lacunae/clear-zone/bridging-vessel ultrasound signature, the 18–21 → 32 → 36-week TVS protocol, steroid and delivery windows, and the NPSA 6-element bundle with caesarean hysterectomy or Triple-P.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'Placenta Praevia',
    'PAS · FIGO 1–3c',
    'TVS <20 mm Cutoff',
    'Silver CS Curve',
    'Lacunae & Bridging Vessels',
    '32 & 36 Week Scans',
    'NPSA Bundle & Triple-P',
  ],
  sourceTag: 'RCOG Green-top Guideline No. 27a • FIGO PAS Consensus',
  updatedAtISO: '2026-10-21T06:00:00.000Z',
  notes: [
    /* ==================================================================== */
    /* 1. Terminology, classification & the Silver escalation curve          */
    /* ==================================================================== */
    {
      id: 'terminology-classification',
      heading: 'Modern Terminology, Classification & the Silver Escalation Curve',
      intro:
        'Two questions decide this entire topic: does the placenta cover the internal os (praevia) and is it < 20 mm from it (low-lying)? Beyond 16 weeks the old Grade I–IV and “minor/major” labels are obsolete — and in a woman with praevia, the number of previous caesarean sections converts that anatomical label into a quantitative PAS risk.',
      flow: [
        'Midpregnancy scan > 16 weeks · measure placental edge to internal os on TVS',
        'Edge ≥ 20 mm · Normal placental location',
        'Edge 1–19 mm · Low-Lying Placenta (< 20 mm)',
        'Edge 0 mm / overlapping os · Placenta Praevia',
        'Prior hysterotomy scar + anterior low-lying/praevia · absent decidua basalis & Nitabuch layer → PAS',
      ],
      bullets: [
        'Obsolete terms abolished (AIUM + RCOG GTG 27a): “Grade I–IV”, “minor/major”, “partial” and “marginal” are no longer acceptable — use only Placenta Praevia, Low-Lying Placenta (< 20 mm) and Normal Placenta (≥ 20 mm) beyond 16 weeks.',
        'Placenta Praevia: the placenta lies directly over the internal cervical os. Low-Lying Placenta (> 16 weeks GA): the placental edge does NOT cover the os but lies < 20 mm from it on transabdominal (TAS) or transvaginal (TVS) scanning. Normal: edge ≥ 20 mm from the internal os.',
        'Histopathological definition of PAS (Irving & Hertig): abnormal adherence or invasion of chorionic villi into the myometrium from partial or complete absence of the decidua basalis and defective development of the fibrinoid (Nitabuch’s) layer.',
        'Placenta praevia risk factors: previous placenta praevia (aOR 9.7), ART/IVF (OR 3.76, even in singleton pregnancy), endometriosis (OR 3.31), previous prelabour caesarean (aOR 2.62; incidence rises from 10 per 1,000 after 1 CS to 28 per 1,000 after ≥ 3 CS), maternal smoking (RR 1.7), multiparity, age ≥ 35 years and an interpregnancy interval < 1 year.',
        'PAS risk factors: previous caesarean section + anterior low-lying placenta/praevia (present in > 90% of cases), first-trimester caesarean scar pregnancy (CSP), previous myomectomy, repeated curettage, Asherman syndrome, endometrial ablation, uterine artery embolisation and ART/IVF (OR 2.27).',
        'Silver et al. escalation with praevia: 0 prior CS 3% → 1 CS 11% → 2 CS 40% → 3 CS 61% → 4 CS 67% → ≥ 5 CS 67%. Without praevia the same ladder reads 0.03% → 0.2% → 0.1% → 0.8% → 0.8% → 4.7%.',
        'A live first-trimester caesarean scar pregnancy is the direct precursor of second/third-trimester placenta praevia percreta (FIGO grade 3) — senior consultant counselling at diagnosis is mandatory.',
      ],
      table: {
        head: [
          'Previous caesarean sections',
          'Incidence of placenta praevia',
          'PAS risk WITH praevia',
          'PAS risk WITHOUT praevia',
        ],
        rows: [
          ['0 prior CS (first CS)', 'Baseline (~0.4–0.5%)', '3.3% (~3%)', '0.03%'],
          ['1 prior CS (second CS)', '1.0% (10 per 1,000)', '11%', '0.2%'],
          ['2 prior CS (third CS)', '~1.7%', '40%', '0.1%'],
          ['3 prior CS (fourth CS)', '2.8% (28 per 1,000)', '61%', '0.8%'],
          ['4 prior CS (fifth CS)', '~3.0–5.0%', '67%', '0.8%'],
          ['≥ 5 prior CS (sixth+ CS)', '~5.0–10.0%', '67%', '4.7%'],
        ],
      },
      diagram: [
        {
          kind: 'tvs-distance-cutoffs',
          title: 'Diagram 1 · Sagittal TVS distance classification',
          caption:
            'Normal (edge ≥ 20 mm), low-lying placenta (edge 1–19 mm) and placenta praevia (edge at 0 mm, covering the internal os). The measurement is always placental edge → internal os, never “grade”.',
        },
        {
          kind: 'silver-cs-risk-chart',
          title: 'Diagram 2 · Silver et al. prior-CS escalation curve',
          caption:
            'PAS risk with praevia rises 3% → 11% → 40% → 61% → 67% across 0–4 prior caesarean sections; without praevia the same denominator stays below 5%.',
        },
      ],
      pearls: [
        'In placenta praevia the PAS risk escalates with each prior caesarean: 3% (0), 11% (1), 40% (2), 61% (3), 67% (≥ 4) — the Silver et al. landmark cohort.',
        'The two definitions that replace every old grade: low-lying placenta = edge < 20 mm from the internal os; placenta praevia = placenta covering the internal os.',
        'A prior caesarean scar plus an anterior low-lying placenta or praevia accounts for > 90% of all placenta accreta spectrum — that combination is the referral trigger, not the placental position alone.',
      ],
      trap: {
        title: 'Examiner trap — “Grade II anterior placenta praevia”',
        body:
          'Never classify praevia as Grade I–IV or minor/major in a modern exam. Beyond 16 weeks, any edge < 20 mm from the internal os is a low-lying placenta, and any placenta directly covering the os is placenta praevia. A stem that offers “marginal” or “partial” is testing whether you know those terms were withdrawn.',
      },
    },

    /* ==================================================================== */
    /* 2. FIGO clinical & histopathological staging                          */
    /* ==================================================================== */
    {
      id: 'figo-pas-staging',
      heading: 'FIGO Clinical & Histopathological Staging of PAS (Grades 1 to 3c)',
      intro:
        'FIGO grades describe depth, not severity of bleeding: accreta (adherent), increta (invasive) and percreta (penetrating). The grade is a surgical map — grade 1 may allow focal resection, grade 2 usually needs hysterectomy or Triple-P, grade 3b needs a bladder surgeon, and grade 3c needs a pelvic oncology team.',
      flow: [
        'Previous caesarean hysterotomy scar (niche) · re-epithelialisation failure + defective decidualisation',
        'Absence of decidua basalis & Nitabuch layer · deep extravillous trophoblast invasion',
        'Radial / arcuate / vesical arterial remodelling · serosal neovascularity',
        'Grade 1 accreta → Grade 2 increta → Grade 3a serosal → 3b bladder → 3c parametrium/pelvic sidewall',
      ],
      bullets: [
        'FIGO grade 1 — abnormally adherent placenta (accreta / creta / vera): villi attach directly to superficial myometrium without invading muscle fibres. No cleavage plane exists at manual removal, or heavy bleeding starts from the implantation bed after attempted removal; the outer serosa looks normal (no bulge, no neovascularity).',
        'FIGO grade 2 — abnormally invasive placenta (increta): villi invade deeply into myometrium but do NOT breach the serosa. Laparotomy shows bluish/purple lower-segment discolouration, a placental bulge, dense craniocaudal serosal hypervascularity and a positive “Dimple Sign” — gentle cord traction pulls the uterine wall inward without placental separation.',
        'FIGO grade 3 — abnormally invasive placenta (percreta): villi traverse the full myometrial thickness and breach the uterine serosa. 3a = serosa only; 3b = urinary bladder (the most common extrauterine organ, gross haematuria in ~25% of bladder-invasive cases); 3c = broad ligament, parametrium, pelvic sidewall, cervix, vagina or bowel.',
        'Critical differential — simple uterine scar dehiscence (“uterine window”): the myometrium is stretched thin or absent and the placenta is visible beneath a translucent serosa with dense bladder adhesions, but chorionic villi do NOT invade the serosa or adjacent organs and the placenta separates cleanly after delivery. Up to 43.9% of prenatally labelled “percreta” cases are actually scar dehiscence.',
        'Grade 1 vs grade 2 is decided by histology and by the operative behaviour of the placenta; grade 2 vs grade 3 is decided by whether the serosa is breached. That single sentence answers most staging stems.',
      ],
      table: {
        head: ['FIGO grade', 'Legacy / histological term', 'Depth of villous invasion', 'Macroscopic / laparotomy findings', 'Optimal surgical strategy'],
        rows: [
          [
            'Grade 1',
            'Placenta accreta (creta / vera) — abnormally adherent',
            'Villi attach directly to superficial myometrium (absent decidua basalis and Nitabuch layer) without muscle invasion',
            'No plane of cleavage; serosa over the placental bed looks normal — no bulge or neovascularity',
            'Focal myometrial resection/oversewing if < 50% of the circumference, or caesarean hysterectomy if diffuse',
          ],
          [
            'Grade 2',
            'Placenta increta — abnormally invasive',
            'Villi invade deeply into myometrium but do NOT breach the serosa',
            'Bluish/purple lower segment, placental bulge, dense craniocaudal serosal vessels, positive “Dimple Sign”',
            'Planned total caesarean hysterectomy (placenta left in situ) or Triple-P one-step resection',
          ],
          [
            'Grade 3a',
            'Placenta percreta — serosal',
            'Villi penetrate full myometrial thickness and breach the uterine serosa only',
            'Placental tissue visible through the outer serosal surface; bladder lumen intact',
            'Planned total caesarean hysterectomy with the placenta left in situ',
          ],
          [
            'Grade 3b',
            'Placenta percreta — vesical',
            'Villi breach the serosa and invade the urinary bladder',
            'Dense uterovesical neovascularity, exophytic mass in the bladder, haematuria (~25%)',
            'Total caesarean hysterectomy + intentional cystotomy / partial cystectomy (or leave placenta in situ)',
          ],
          [
            'Grade 3c',
            'Placenta percreta — pelvic',
            'Villi invade broad ligament, parametrium, pelvic sidewall, cervix or bowel',
            'Lateral hourglass uterine bulge extending into parametrium and iliac vessels',
            'Multidisciplinary pelvic oncology resection, or leave the placenta in situ to avoid lethal sidewall bleeding',
          ],
          [
            'Differential',
            'Uterine scar dehiscence (“uterine window”)',
            'NO villous invasion — simple stretching/separation of a prior CS scar',
            'Translucent lower segment showing underlying placenta; zero serosal neovascularity',
            'Normal placental separation after delivery + routine debridement and hysterotomy closure',
          ],
        ],
      },
      diagram: [
        {
          kind: 'figo-pas-grades',
          title: 'Diagram 3 · FIGO grades 1–3c and the uterine window',
          caption:
            'Cross-sectional uterine wall anatomy: decidua basalis (normal), accreta (grade 1), increta (grade 2), serosal percreta (3a), bladder percreta (3b), parametrial percreta (3c) and simple scar dehiscence.',
        },
      ],
      pearls: [
        'The urinary bladder (FIGO grade 3b) is the most frequently invaded extrauterine organ; broad ligament/parametrial invasion is grade 3c.',
        'Grade 2 (increta) is distinguished at laparotomy by bluish/purple serosal bulging, craniocaudal hypervascularity and a positive Dimple Sign on cord traction.',
        'A uterine window is not percreta: the placenta is seen through stretched translucent serosa but villi do not cross it, and the placenta separates normally after delivery.',
      ],
      trap: {
        title: 'Examiner trap — uterine window vs true percreta',
        body:
          'In scar dehiscence the myometrium is thin or absent and the placenta is visible beneath a translucent serosa with dense bladder adhesions, but there are no chaotic craniocaudal serosal vessels, no exophytic mass and no villous invasion — and the placenta separates cleanly once the baby is delivered. Calling every thinned lower segment “percreta” is the commonest staging error.',
      },
    },

    /* ==================================================================== */
    /* 3. Ultrasound schedule, migration & cervical length                   */
    /* ==================================================================== */
    {
      id: 'usg-localisation-migration',
      heading: 'Ultrasound Localisation, Placental “Migration” & Cervical Length Cutoffs',
      intro:
        'Most low-lying placentas at 20 weeks are not low-lying at term. The scan schedule exists to separate the > 90% that migrate from the minority that persist, and the 36-week distance is the number that actually decides vaginal birth versus caesarean.',
      flow: [
        '18+6–21+6 weeks · anomaly scan; suspect low-lying/praevia on TAS → confirm immediately with TVS',
        '32 weeks · follow-up TVS (+ cervical length if < 34 weeks)',
        'Edge ≥ 20 mm at 32 weeks · resolved (> 90%) → routine care',
        'Edge < 20 mm at 32 weeks + asymptomatic · repeat TVS at 36 weeks',
        '36 weeks · edge > 20 mm = vaginal birth · 11–20 mm = trial of labour · ≤ 10 mm or covering os = elective CS',
      ],
      bullets: [
        'Stepwise timetable: 18+6–21+6 week anomaly scan → immediate TVS if TAS suggests a low-lying placenta or praevia (TVS reclassifies 26–60% of false-positive TAS scans) → TVS at 32 weeks → if still < 20 mm at 32 weeks in an asymptomatic woman, a final TVS at 36 weeks to plan mode of delivery.',
        'Apparent “migration” (> 90% resolution): differential growth and elongation of the lower uterine segment plus unidirectional trophotropism toward the richly perfused fundus. It is not true placental movement.',
        'Predictors of failure to migrate: (1) posterior placenta praevia (slower than anterior); (2) previous caesarean scar — fibrous tethering impairs lower-segment stretching and resolution falls to ~50%; (3) thick placental edge (> 1 cm) versus thin (< 1 cm); (4) overlap of the internal os by > 20 mm at 20 weeks, which makes spontaneous migration highly unlikely.',
        '36-week TVS cutoffs: edge > 20 mm = normal, routine vaginal delivery; edge 11–20 mm = trial of vaginal delivery is appropriate after counselling on intrapartum haemorrhage (69–90% vaginal birth rate); edge ≤ 10 mm or covering the os = planned elective caesarean section.',
        'Cervical length on TVS before 34 weeks: a short cervix (< 30 mm, especially < 25 mm) in asymptomatic praevia significantly increases the risk of massive antepartum haemorrhage, emergency preterm CS < 34 weeks and peripartum hysterectomy.',
        'TVS is superior to transabdominal and transperineal scanning and is safe even with active bleeding — the probe rests in the anterior fornix at an angle that cannot enter the internal os. Digital vaginal examination (P/V) is strictly forbidden until praevia is excluded.',
      ],
      table: {
        head: ['Placental edge at 36-week TVS', 'Interpretation', 'Recommended mode of delivery', 'Caveats'],
        rows: [
          ['> 20 mm from the internal os', 'Normal placental location', 'Routine vaginal delivery', 'No praevia precautions required'],
          [
            '11–20 mm from the internal os',
            'Low-lying placenta, borderline',
            'Trial of vaginal delivery after counselling',
            '69–90% vaginal birth; active third stage, IV access, blood availability, low threshold for CS',
          ],
          [
            '≤ 10 mm from the internal os',
            'Low-lying placenta, praevia-equivalent risk',
            'Planned elective caesarean section',
            'Higher risk of intrapartum haemorrhage and PPH; do not induce without senior review',
          ],
          [
            'Covering the internal os (0 mm)',
            'Placenta praevia',
            'Planned elective caesarean section (mandatory)',
            'Never perform a digital vaginal examination; deliver in a unit with blood products',
          ],
        ],
      },
      diagram: [
        {
          kind: 'scan-timeline-flowchart',
          title: 'Diagram 4 · 18–21 → 32 → 36-week TVS pathway',
          caption:
            'The RCOG antenatal localisation timetable with the 36-week distance cutoffs that select vaginal birth, trial of labour or elective caesarean section.',
        },
      ],
      pearls: [
        'TVS is the safe gold standard even in bleeding praevia — the probe sits in the anterior fornix and cannot enter the cervical canal. Digital vaginal examination is contraindicated.',
        'At 36 weeks an edge of 11–20 mm permits a trial of labour (69–90% success) when the head is below the placental edge and there is no bleeding; ≤ 10 mm mandates elective CS.',
        'Migration fails with a posterior placenta, a prior caesarean scar (resolution ~50%), a thick (> 1 cm) placental edge, or > 20 mm os overlap at 20 weeks.',
      ],
      trap: {
        title: 'Examiner trap — “the placenta moved up”',
        body:
          'Placental migration is apparent, not real: the lower uterine segment elongates and the placenta grows toward the fundus (trophotropism). Anterior placentas appear to migrate faster because the anterior lower segment stretches more; a posterior praevia and a scarred anterior lower segment both resolve less often. Never promise resolution at 20 weeks.',
      },
    },

    /* ==================================================================== */
    /* 4. Prenatal imaging of PAS                                            */
    /* ==================================================================== */
    {
      id: 'pas-imaging',
      heading: 'Prenatal Imaging of PAS: Grayscale, Colour Doppler & Pelvic MRI',
      intro:
        'PAS is diagnosed before delivery by a combination of grayscale signs (lacunae, lost clear zone, myometrial thinning, bladder-line interruption, bulge, exophytic mass) and Doppler signs (uterovesical and subplacental hypervascularity, perpendicular bridging vessels, high-velocity lacunar feeders). MRI is a problem-solver, not a routine upgrade.',
      flow: [
        'Prior CS + anterior low-lying/praevia at 18–20 weeks · refer to a specialist PAS diagnostic centre',
        'Targeted grayscale + colour Doppler · lacunae, clear zone, myometrium < 1 mm, bladder line, bridging vessels',
        'Posterior/lateral praevia, suspected grade 3c or equivocal scan · non-contrast T2 MRI',
        'Confirm grade and anatomical extent → plan NPSA bundle, surgical team and delivery site',
      ],
      bullets: [
        'Six standardised 2D grayscale signs (EW-AIP / ISUOG / RCOG 27a): (1) abnormal placental lacunae — “Swiss-cheese”/“moth-eaten” sonolucent spaces with high-velocity (> 10 cm/s), low-resistance turbulent flow, the single most sensitive and predictive sign (Finberg grade 3+ lacunae correlate with increta/percreta); (2) loss or irregularity of the hypoechoic retroplacental “clear zone”; (3) retroplacental myometrial thinning < 1 mm or undetectable myometrium; (4) bladder wall interruption — loss of the bright “railroad track” serosa–bladder line; (5) placental bulge into the posterior bladder wall; (6) focal exophytic mass breaching the serosa.',
        'Four colour Doppler signs: (1) uterovesical hypervascularity — chaotic vascular signal between myometrium and posterior bladder wall; (2) subplacental hypervascularity — dilated plexus in the placental bed; (3) bridging vessels running perpendicular to the uterine wall across the myometrium into the bladder wall/serosa; (4) lacunae feeder vessels — high-velocity (> 10 cm/s) maternal arterial jets from radial/arcuate arteries directly into lacunae.',
        '3D power Doppler: intraplacental hypervascularity with inseparable cotyledonal and intervillous circulations, chaotic tortuous branching and neovascularisation at the serosa–bladder interface.',
        'Pelvic MRI without gadolinium: ultrasound and MRI have comparable accuracy (sensitivity ~90–94%, specificity ~85–95%). MRI is not routinely required when expert TVS is definitive, but is indicated for (1) posterior or lateral praevia obscured by the fetal head, (2) depth of parametrial/lateral sidewall invasion (grade 3c), and (3) equivocal ultrasound or severe maternal obesity.',
        'Five classic MRI signs on T2-weighted HASTE/SSFP: dark intraplacental bands (fibrin from recurrent haemorrhage), abnormal uterine bulge (hourglass uterus), heterogeneous intraplacental signal, focal interruption of the myometrial wall, and tenting of the urinary bladder or direct pelvic invasion.',
        'Intravenous gadolinium should be avoided in pregnancy unless essential — non-contrast T2 sequences delineate dark bands and parametrial invasion perfectly well.',
      ],
      table: {
        head: ['Modality', 'Standardised marker', 'Definition & pathophysiological basis', 'Diagnostic significance'],
        rows: [
          [
            '2D grayscale USG',
            'Abnormal placental lacunae',
            'Multiple large irregular sonolucent spaces (“Swiss-cheese”, Finberg 0–3+) with turbulent flow',
            'Most sensitive and predictive single USG marker (sensitivity ~80–93%)',
          ],
          [
            '2D grayscale USG',
            'Loss of the “clear zone”',
            'Loss/irregularity of the hypoechoic retroplacental decidua–myometrial line',
            'High sensitivity (~80%); false positives with excessive anterior probe pressure',
          ],
          [
            '2D grayscale USG',
            'Myometrial thinning',
            'Retroplacental myometrial thickness < 1 mm or undetectable',
            'Reflects deep myometrial invasion or scar dehiscence',
          ],
          [
            '2D grayscale USG',
            'Bladder wall interruption',
            'Loss/interruption of the hyperechoic “railroad track” bladder–serosa line',
            'High specificity (> 95%) for FIGO grade 3a/3b',
          ],
          [
            '2D grayscale USG',
            'Placental bulge / exophytic mass',
            'Ballooning of the uterine contour or focal placental protrusion into the bladder lumen',
            'Pathognomonic for percreta (grade 3b)',
          ],
          [
            'Colour Doppler',
            'Bridging vessels',
            'Vessels running perpendicular from placenta across myometrium into the bladder wall',
            'Classic Doppler hallmark of neovascular invasion',
          ],
          [
            'Colour Doppler',
            'Lacunae feeder vessels',
            'High-velocity (> 10 cm/s), low-resistance arterial jets entering lacunae',
            'Distinguishes true PAS lacunae from benign placental lakes',
          ],
          [
            'Pelvic MRI (T2)',
            'T2 dark intraplacental bands',
            'Thick nodular dark bands (> 2 cm) extending from the maternal surface on T2 HASTE',
            'Most sensitive MRI marker (fibrin deposition)',
          ],
          [
            'Pelvic MRI (T2)',
            'Hourglass bulge & bladder tenting',
            'Outpouching of the lower segment and upward tenting of the bladder dome',
            'Best modality for posterior PAS and grade 3c parametrial invasion',
          ],
        ],
      },
      diagram: [
        {
          kind: 'usg-doppler-mri-markers',
          title: 'Diagram 5 · Composite grayscale, Doppler & MRI atlas',
          caption:
            'Left: lacunae, lost clear zone, myometrium < 1 mm, interrupted bladder line, exophytic bulge and perpendicular bridging vessels. Right: T2 dark bands, hourglass bulge and bladder tenting.',
        },
      ],
      pearls: [
        'Multiple irregular lacunae with turbulent flow > 10 cm/s are the single most predictive ultrasound marker of PAS; perpendicular bridging vessels across the uterovesical interface are the classic Doppler hallmark.',
        'MRI is complementary, not superior, to expert TVS with colour Doppler — reserve it for posterior/lateral praevia, grade 3c parametrial invasion and equivocal scans.',
        'Bladder-line interruption is highly specific (> 95%) for serosal/bladder invasion, whereas myometrial thinning < 1 mm can also reflect simple scar dehiscence.',
      ],
      trap: {
        title: 'Examiner trap — “MRI is the gold standard, so give gadolinium”',
        body:
          'Expert TVS with colour Doppler is first-line and performs as well as MRI overall. MRI adds value only for posterior/lateral placentas, parametrial invasion and equivocal ultrasound. Intravenous gadolinium is avoided in pregnancy — use T2-weighted HASTE/TrueFISP, which shows dark intraplacental bands and parametrial extension without contrast.',
      },
    },

    /* ==================================================================== */
    /* 5. Antenatal care, steroids & delivery timing                         */
    /* ==================================================================== */
    {
      id: 'antenatal-steroids-timing',
      heading: 'Antenatal Optimisation, Corticosteroids & Exact Delivery Timing',
      intro:
        'The third trimester is a balance between haemorrhage and prematurity. Steroids mature the fetus in the 34+0–35+6 window, tocolysis buys only 48 hours, and the delivery date is set by whether the woman is asymptomatic, symptomatic or has PAS.',
      flow: [
        'Asymptomatic + safe home setup · outpatient care after 32 weeks with 24/7 transport and a companion',
        'Corticosteroids 34+0–35+6 weeks (earlier if preterm birth threatened)',
        'Symptomatic bleeding · admit, resuscitate, steroids, tocolysis ≤ 48 h only to complete steroids',
        'Delivery windows · PAS 35+0–36+6 · symptomatic praevia 34+0–36+6 · uncomplicated praevia 36+0–37+0 (up to 37+6)',
      ],
      bullets: [
        'Outpatient management after 32 weeks is acceptable in asymptomatic women ONLY if they live close to hospital, have 24/7 immediate transport, a companion at home at all times, and understand they must attend immediately for any spotting, bleeding, contractions or vague suprapubic period-like pain.',
        'Recurrent bleeding/high-risk women: individualise admission by clinical stability, haemoglobin (keep ≥ 11 g/dL with oral/IV iron), distance from hospital and consent for blood transfusion.',
        'VTE balance (RCOG GTG 37a): admitted women with praevia are immobile and thrombogenic — use mechanical prophylaxis (graduated compression stockings / intermittent pneumatic compression) and reserve LMWH for high VTE risk once active bleeding has ceased.',
        'Not recommended: cervical cerclage (no reduction in bleeding or prolongation of gestation) and prophylactic tocolysis in asymptomatic women (ineffective).',
        'Antenatal corticosteroids: a single course between 34+0 and 35+6 weeks for all women with a low-lying placenta, placenta praevia or suspected PAS; give before 34+0 weeks when preterm birth is threatened (active bleeding, cervix < 25–30 mm, contractions).',
        'Tocolysis rule — 48-hour window only: in symptomatic praevia/low-lying placenta, nifedipine or atosiban may be used for 48 hours solely to complete corticosteroids. Beta-agonists (terbutaline, ritodrine) are avoided because tachycardia and vasodilation mask hypovolaemia. Tocolysis is contraindicated when delivery is indicated for maternal or fetal compromise.',
        'Delivery timing (RCOG GTG 27a): uncomplicated asymptomatic praevia or low-lying ≤ 10 mm → 36+0–37+0 weeks (37+0–37+6 if completely uncomplicated); complicated/symptomatic praevia → 34+0–36+6 weeks; suspected/confirmed PAS → 35+0–36+6 weeks in a tertiary PAS centre, because unscheduled bleeding occurs in > 50% after 36 weeks.',
        'A short cervix (< 30 mm, especially < 25 mm) before 34 weeks is an independent trigger for earlier steroids, admission and a lower delivery threshold.',
      ],
      table: {
        head: ['Clinical scenario', 'Surveillance scans', 'Corticosteroid window', 'Planned delivery window', 'Mode of delivery'],
        rows: [
          [
            'Low-lying placenta (11–20 mm at 36 weeks)',
            'Anomaly 18–21 wks → 32 wks TVS → 36 wks TVS',
            '34+0 to 35+6 weeks',
            '37+0 to 38+6 weeks (or spontaneous labour if asymptomatic)',
            'Trial of vaginal birth (69–90% success; active third stage)',
          ],
          [
            'Uncomplicated asymptomatic praevia or ≤ 10 mm',
            'Anomaly 18–21 wks → 32 wks TVS → 36 wks TVS',
            '34+0 to 35+6 weeks',
            '36+0 to 37+0 weeks (up to 37+0–37+6 if completely uncomplicated)',
            'Planned elective caesarean section',
          ],
          [
            'Complicated / symptomatic praevia (recurrent APH, CL < 25–30 mm)',
            'Serial TVS + cervical length before 34 weeks',
            '< 34+0 weeks, or 34+0–35+6; tocolysis ≤ 48 h only to complete steroids',
            '34+0 to 36+6 weeks (immediate CS if life-threatening haemorrhage)',
            'Elective / urgent caesarean section',
          ],
          [
            'Suspected or confirmed PAS (grades 1–3c)',
            'Specialist PAS scan 18–20, 26–28 and 32–34 weeks (± MRI)',
            '34+0 to 35+6 weeks (or earlier before a planned 35-week birth)',
            '35+0 to 36+6 weeks in a tertiary PAS centre with the NPSA bundle',
            'Planned caesarean hysterectomy (placenta left in situ) or Triple-P',
          ],
        ],
      },
      diagram: [
        {
          kind: 'delivery-timing-matrix',
          title: 'Diagram 6 · Steroid and delivery windows on the gestational axis',
          caption:
            'The 34+0–35+6 steroid window, symptomatic praevia 34+0–36+6, PAS 35+0–36+6 and uncomplicated praevia 36+0–37+6 — the three delivery windows that must never be confused.',
        },
      ],
      pearls: [
        'Master delivery triad: PAS 35+0–36+6; symptomatic/complicated praevia 34+0–36+6; uncomplicated asymptomatic praevia 36+0–37+0 (up to 37+6 if no risk factors).',
        'Give a single corticosteroid course at 34+0–35+6 weeks (earlier if preterm birth is threatened); tocolysis is permitted for 48 hours only to complete the course.',
        'Cervical cerclage and prophylactic tocolysis are not recommended in praevia; admitted women need mechanical VTE prophylaxis rather than reflex LMWH.',
      ],
      trap: {
        title: 'Examiner trap — terbutaline for “tocolysis until term”',
        body:
          'Tocolysis in praevia is a 48-hour steroid-completion tool, not maintenance therapy. Beta-mimetics are the wrong choice because tachycardia, hypotension and vasodilation mask the earliest signs of haemorrhagic shock; nifedipine or atosiban are preferred. If mother or fetus is compromised, stop tocolysis and deliver.',
      },
    },

    /* ==================================================================== */
    /* 6. Intrapartum & surgical management                                  */
    /* ==================================================================== */
    {
      id: 'surgical-management',
      heading: 'Surgical Management: NPSA Bundle, Caesarean Hysterectomy & Triple-P',
      intro:
        'The operation is won before the skin incision: consultant obstetrician and anaesthetist, blood products on site, multidisciplinary team, written consent for hysterectomy and a critical care bed. Inside the abdomen the rule is simple — never try to remove an accreta placenta.',
      flow: [
        'Planned PAS delivery 35+0–36+6 · NPSA 6-element bundle + regional anaesthesia + cell salvage',
        'High fundal/classical incision clear of the placenta → deliver → clamp cord at its placental insertion',
        'Omit routine uterotonics → close hysterotomy with placenta in situ → total caesarean hysterectomy',
        'Unexpected PAS · pause, call MDT/blood bank, or close and transfer to a PAS centre if stable',
      ],
      bullets: [
        'NPSA / RCOG 6-element care bundle: (1) consultant obstetrician planning and supervising delivery in theatre; (2) consultant anaesthetist planning and supervising anaesthesia; (3) blood and blood products immediately available on site (massive transfusion protocol, cross-matched PRBCs, FFP, cryoprecipitate, platelets); (4) multidisciplinary preoperative involvement (urology, gynaecological oncology, vascular surgery, interventional radiology, neonatology); (5) preoperative discussion and written consent for caesarean hysterectomy, massive transfusion, cell salvage and leaving the placenta in situ; (6) a Level 2 critical care bed (ICU/HDU) available locally.',
        'Anaesthesia: regional (CSE or spinal) is safer than general anaesthesia for both praevia and PAS — significantly lower operative blood loss and transfusion requirements. Volatile halogenated agents cause uterine atony; conversion to GA after fetal delivery is acceptable for a prolonged hysterectomy.',
        'Blood conservation: intraoperative cell salvage and point-of-care viscoelastic testing (TEG/ROTEM) are recommended; give tranexamic acid 1 g IV over 10 minutes (repeat once after 30 minutes if bleeding continues) early with uterotonics.',
        'Prophylactic internal iliac/uterine artery balloon catheters are NOT routinely recommended — no proven efficacy in RCTs and a risk of iliac thrombosis, dissection and limb ischaemia. Therapeutic embolisation remains valuable for persistent postoperative pelvic bleeding.',
        'Incision and haemorrhage control in praevia: consider vertical skin and/or vertical/high uterine incisions with transverse lie, < 28 weeks, or an anterior placenta reaching the umbilicus (preoperative ultrasound maps the upper placental edge). Avoid cutting through the placenta (J- or U-shaped ward-off manoeuvre); if it is transected, clamp the umbilical cord immediately after delivery to prevent fetal exsanguination.',
        'Stepwise control of lower-segment bed bleeding: uterotonics (oxytocin, ergometrine, carboprost) + tranexamic acid 1 g IV → intrauterine hydrostatic balloon (Bakri) → haemostatic compression sutures (B-Lynch, Cho square, Hwu, Hayman) → bilateral uterine/internal iliac artery ligation → peripartum hysterectomy, initiated sooner rather than later.',
        'Gold standard for PAS — planned total caesarean hysterectomy with the placenta left in situ: deliver through a fundal or high classical incision clear of the upper placental margin; do NOT attempt manual removal; do NOT give oxytocin/uterotonics before hysterectomy; ligate the cord close to its placental insertion, close the uterus with the placenta undisturbed, and perform a total hysterectomy (subtotal is inadequate for cervical/low-segment invasion). For grade 3b, perform intentional cystotomy and partial cystectomy of the invaded bladder dome rather than dissecting the obliterated uterovesical plane.',
        'Undiagnosed PAS at routine CS: (A) before uterine incision — bluish bulging lower segment with dense neovascularity: pause, call senior MDT/oncology/anaesthesia/blood bank; if mother and baby are stable and the unit lacks resources, close the abdomen and transfer urgently, or make a high fundal incision once backup arrives. (B) after fetal delivery — placenta fails to separate: leave it in situ, close the hysterotomy and proceed to hysterectomy (or stabilise and transfer).',
        'Uterine-sparing option 1 — leave the placenta in situ (expectant): cord ligated at its base, hysterotomy closed, broad-spectrum antibiotics, await spontaneous resorption/expulsion (median 3–6 months; ~78% success) with a 15–30% risk of secondary PPH, sepsis, DIC and delayed hysterectomy. Adjuvant methotrexate is strictly contraindicated; routine hysteroscopy/curettage to clear retained tissue increases perforation and haemorrhage.',
        'Uterine-sparing option 2 — the “Triple-P” procedure (Chandraharan): P1 perioperative placental localisation with a transverse incision 2 cm above the upper placental edge; P2 pelvic devascularisation with occlusion balloons in the anterior division of the internal iliac arteries inflated immediately after delivery; P3 placental non-separation with en-bloc excision of the invaded anterior myometrium and attached placenta, leaving a 2 cm healthy lower lip above the bladder trigone, followed by single/two-layer myometrial reconstruction.',
      ],
      table: {
        head: ['Surgical strategy', 'Core operative steps', 'Indications', 'Key pitfalls & contraindications'],
        rows: [
          [
            'Total caesarean hysterectomy (gold standard)',
            'High fundal incision → deliver → ligate cord → close uterus with placenta in situ → total hysterectomy',
            'Definitive treatment for most women with PAS (grades 1–3b) who have completed childbearing',
            'Avoid manual placental traction and routine oxytocin; subtotal hysterectomy leaves the invaded cervix and keeps bleeding',
          ],
          [
            'Expectant management (placenta left in situ)',
            'Deliver clear of the placenta → ligate cord flush with placenta → close uterus → antibiotics + serial follow-up (resorption 3–6 months)',
            'Strong desire for fertility, or extensive sidewall/bladder invasion (3b/3c) where resection risks lethal haemorrhage',
            'Methotrexate is contraindicated; 15–30% risk of secondary PPH, sepsis, DIC or delayed hysterectomy',
          ],
          [
            'Triple-P procedure (Chandraharan)',
            'P1 ultrasound-guided incision 2 cm above placenta → P2 internal iliac balloon inflation → P3 en-bloc excision of invaded myometrium + reconstruction',
            'Focal anterior PAS with a 2 cm healthy lower myometrial lip above the bladder trigone',
            'Needs interventional radiology and a preserved lower myometrial margin; not for diffuse or 3c disease',
          ],
        ],
      },
      diagram: [
        {
          kind: 'hysterectomy-vs-triple-p',
          title: 'Diagram 7 · Caesarean hysterectomy vs Triple-P',
          caption:
            'Left: high fundal incision, cord ligated at the placental insertion, placenta left in situ and total hysterectomy. Right: P1 incision 2 cm above the placenta, P2 internal iliac occlusion balloons, P3 en-bloc myometrial–placental excision with a 2 cm margin.',
        },
      ],
      pearls: [
        'In confirmed PAS the gold standard is total caesarean hysterectomy through a high fundal incision with the placenta left undisturbed in situ — never attempt forced manual removal and never give routine uterotonics before closing the hysterotomy.',
        'Subtotal (supracervical) hysterectomy is usually inadequate in praevia accreta: persistent bleeding comes from the invaded cervix and lower segment fed by cervical, vaginal and vesical collaterals.',
        'Adjuvant methotrexate is strictly not recommended when the placenta is left in situ — third-trimester trophoblasts barely divide, so there is no efficacy but real myelosuppression and neutropenic sepsis.',
        'Triple-P = P1 placental localisation (incision 2 cm above), P2 pelvic devascularisation (internal iliac balloons), P3 placental non-separation with en-bloc myometrial excision and reconstruction.',
      ],
      trap: {
        title: 'Examiner trap — subtotal hysterectomy and routine oxytocin',
        body:
          'Two operative reflexes cause catastrophic bleeding in PAS. The first is giving oxytocin before hysterectomy: it partially separates the accreta and opens the placental bed. The second is choosing a subtotal hysterectomy: the invaded cervix and lower segment are left behind, still fed by cervical, vaginal and vesical collaterals. Total hysterectomy with the placenta in situ is the answer.',
      },
    },
  ],
  flashcards: [
    {
      id: 'ppp-f1',
      front: 'How does RCOG GTG 27a define placenta praevia versus a low-lying placenta after 16 weeks?',
      back:
        'Placenta praevia: the placenta lies directly over the internal cervical os. Low-lying placenta (> 16 weeks): the placental edge does not cover the os but lies < 20 mm from it on TAS or TVS. Normal: edge ≥ 20 mm. “Grade I–IV”, “minor/major”, “partial” and “marginal” are abandoned.',
    },
    {
      id: 'ppp-f2',
      front: 'State the Silver et al. PAS risk in women WITH placenta praevia by number of previous caesarean sections.',
      back: '0 CS = 3%; 1 CS = 11%; 2 CS = 40%; 3 CS = 61%; 4 CS = 67%; ≥ 5 CS = 67%. Without praevia: 0.03%, 0.2%, 0.1%, 0.8%, 0.8% and 4.7%.',
    },
    {
      id: 'ppp-f3',
      front: 'What is the primary histopathological defect in PAS, and how are FIGO grades 1, 2, 3a, 3b and 3c defined?',
      back:
        'Partial or complete absence of the decidua basalis with defective Nitabuch fibrinoid layer. Grade 1 accreta = superficial myometrial attachment; grade 2 increta = deep myometrial invasion with intact serosa (bluish bulge + Dimple Sign); grade 3a = serosal breach only; 3b = urinary bladder invasion; 3c = broad ligament/parametrium/pelvic sidewall/cervix/bowel.',
    },
    {
      id: 'ppp-f4',
      front: 'Give the RCOG antenatal TVS schedule after a low-lying placenta or praevia is suspected at the anomaly scan.',
      back:
        '18+6–21+6 weeks anomaly scan → immediate TVS if TAS is suspicious (reclassifies 26–60% of false positives) → TVS at 32 weeks (> 90% resolve) → if still < 20 mm at 32 weeks in an asymptomatic woman, TVS at 36 weeks to decide mode of delivery.',
    },
    {
      id: 'ppp-f5',
      front: 'At the 36-week TVS, how does the placental edge distance determine mode of delivery?',
      back:
        '> 20 mm = normal, routine vaginal birth. 11–20 mm = trial of vaginal delivery may be offered (69–90% success) after counselling on intrapartum haemorrhage. ≤ 10 mm or covering the os = planned elective caesarean section.',
    },
    {
      id: 'ppp-f6',
      front: 'Which factors predict failure of placental “migration”?',
      back:
        'Posterior placenta praevia (slower than anterior); previous caesarean scar (resolution falls to ~50%); thick placental edge > 1 cm; overlap of the internal os by > 20 mm at 20 weeks. Migration is apparent — lower-segment elongation plus trophotropism — not true movement.',
    },
    {
      id: 'ppp-f7',
      front: 'What is the clinical significance of cervical length on TVS before 34 weeks in asymptomatic praevia?',
      back:
        'A cervix < 30 mm (especially < 25 mm) or progressive shortening predicts massive antepartum haemorrhage, emergency preterm caesarean < 34 weeks and peripartum hysterectomy — it triggers earlier steroids, admission and a lower delivery threshold.',
    },
    {
      id: 'ppp-f8',
      front: 'List the six standardised 2D grayscale and four colour Doppler signs of PAS.',
      back:
        'Grayscale: (1) abnormal lacunae (most sensitive), (2) loss of the retroplacental clear zone, (3) myometrial thinning < 1 mm, (4) bladder wall interruption, (5) placental bulge, (6) focal exophytic mass. Doppler: (1) uterovesical hypervascularity, (2) subplacental hypervascularity, (3) perpendicular bridging vessels, (4) lacunar feeder jets > 10 cm/s.',
    },
    {
      id: 'ppp-f9',
      front: 'When is pelvic MRI indicated in suspected PAS, and what are the five classic T2 signs?',
      back:
        'Indications: posterior/lateral praevia obscured by the fetal head, suspected parametrial invasion (grade 3c), equivocal ultrasound or severe obesity — without gadolinium. Signs: dark intraplacental bands, abnormal uterine bulge (hourglass), heterogeneous placental signal, focal myometrial interruption and bladder tenting.',
    },
    {
      id: 'ppp-f10',
      front: 'When should antenatal corticosteroids and tocolysis be given in praevia/PAS?',
      back:
        'A single corticosteroid course at 34+0–35+6 weeks (earlier if preterm birth is threatened). Tocolysis (nifedipine/atosiban, never beta-agonists) for 48 hours only to complete steroids; contraindicated if delivery is indicated for maternal or fetal compromise.',
    },
    {
      id: 'ppp-f11',
      front: 'Compare the planned delivery windows for PAS, symptomatic praevia and uncomplicated praevia.',
      back: 'PAS 35+0–36+6 weeks; symptomatic/complicated praevia 34+0–36+6 weeks; uncomplicated asymptomatic praevia 36+0–37+0 weeks (up to 37+6 if no risk factors).',
    },
    {
      id: 'ppp-f12',
      front: 'What are the six components of the NPSA/RCOG care bundle for PAS and major praevia?',
      back:
        '(1) Consultant obstetrician supervising delivery; (2) consultant anaesthetist supervising anaesthesia; (3) blood and blood products immediately available on site; (4) multidisciplinary preoperative involvement (urology, oncology, vascular, IR, neonatology); (5) documented discussion and consent for hysterectomy, massive transfusion, cell salvage and leaving the placenta in situ; (6) a Level 2 critical care bed.',
    },
    {
      id: 'ppp-f13',
      front: 'Why is regional anaesthesia preferred in praevia/PAS, and what must be done if the placenta is transected during uterine entry?',
      back:
        'Regional (CSE/spinal) anaesthesia reduces operative blood loss and transfusion requirement compared with GA; volatile agents cause atony. If the placenta is inadvertently incised, clamp the umbilical cord immediately after fetal delivery to prevent acute fetal exsanguination.',
    },
    {
      id: 'ppp-f14',
      front: 'Why is total caesarean hysterectomy with the placenta in situ preferred over manual removal or subtotal hysterectomy in PAS?',
      back:
        'Forced manual removal tears the invaded bed and causes torrential haemorrhage; routine uterotonics partially detach the placenta. Subtotal hysterectomy leaves the invaded cervix and lower segment behind, fed by cervical, vaginal and vesical collaterals — total hysterectomy is required.',
    },
    {
      id: 'ppp-f15',
      front: 'In expectant management of PAS (placenta left in situ), why is methotrexate contraindicated, and what are the three “P”s of the Triple-P procedure?',
      back:
        'Third-trimester trophoblasts barely divide, so methotrexate has no efficacy but causes myelosuppression, neutropenic sepsis and hepatorenal toxicity. Triple-P: P1 perioperative placental localisation (incision 2 cm above the placenta); P2 pelvic devascularisation (internal iliac occlusion balloons); P3 placental non-separation with en-bloc myometrial excision and reconstruction.',
    },
  ],
  mcqs: [
    {
      id: 'ppp-q1',
      stem:
        'A 33-year-old G4P3 woman with three previous lower-segment caesarean sections has an anterior placenta completely covering the internal os at 20 weeks. According to the Silver et al. data cited in RCOG GTG 27a, what is her approximate risk of placenta accreta spectrum?',
      options: ['11%', '40%', '61%', '95%'],
      answerIndex: 2,
      explanation:
        'In placenta praevia the PAS risk is 3% (0 prior CS), 11% (1), 40% (2), 61% (3) and 67% (4 or more). Three previous caesarean sections therefore carry a ~61% risk, which mandates referral to a specialist PAS centre and delivery with the NPSA bundle.',
    },
    {
      id: 'ppp-q2',
      stem:
        'A 28-year-old primigravida has a 20-week anomaly scan suggesting the placenta reaches the internal os. TVS shows the leading edge 14 mm from the internal os. She has no bleeding and no prior uterine surgery. What is the correct classification and next step?',
      options: [
        'Grade II minor placenta praevia — elective caesarean at 34 weeks',
        'Low-lying placenta (< 20 mm) — follow-up TVS at 32 weeks',
        'Normal placental location — discharge from ultrasound follow-up',
        'Urgent pelvic MRI with gadolinium at 24 weeks',
      ],
      answerIndex: 1,
      explanation:
        'Beyond 16 weeks, an edge < 20 mm that does not cover the os is a low-lying placenta. In an uncomplicated woman the next step is TVS at 32 weeks (> 90% resolve); if it remains < 20 mm, a final TVS at 36 weeks decides mode of delivery.',
    },
    {
      id: 'ppp-q3',
      stem:
        'The same woman is asymptomatic at 36 weeks. The fetal head is cephalic and engaged below the placental edge, and TVS measures the placental edge at 15 mm from the internal os. What is the most appropriate recommendation?',
      options: [
        'Mandatory classical caesarean at 35+0 weeks',
        'Trial of vaginal delivery after counselling about increased intrapartum haemorrhage risk',
        'Cervical cerclage at 36 weeks followed by induction at 41 weeks',
        'Immediate caesarean hysterectomy under general anaesthesia',
      ],
      answerIndex: 1,
      explanation:
        'A 36-week edge of 11–20 mm in an asymptomatic woman permits a trial of vaginal birth, which achieves 69–90% vaginal delivery with active third-stage management and readiness for haemorrhage. Elective caesarean is mandatory at ≤ 10 mm or when the placenta covers the os.',
    },
    {
      id: 'ppp-q4',
      stem:
        'A 35-year-old G3P2 with two prior caesarean sections and an anterior placenta praevia is referred at 26 weeks. Which finding is the single most sensitive and predictive ultrasound marker of PAS?',
      options: [
        'A single subchorionic haematoma < 1 cm near the fundus',
        'Numerous large irregular intraplacental lacunae with turbulent flow > 10 cm/s',
        'Retroplacental myometrium > 8 mm with an intact clear zone',
        'Absent umbilical artery end-diastolic flow',
      ],
      answerIndex: 1,
      explanation:
        'Multiple irregular lacunae (Finberg grade 3+, “Swiss-cheese”) fed by high-velocity (> 10 cm/s), low-resistance jets are the most sensitive and predictive sign. Loss of the clear zone, myometrial thinning < 1 mm, bladder-line interruption and perpendicular bridging vessels complete the panel.',
    },
    {
      id: 'ppp-q5',
      stem:
        'At laparotomy for suspected PAS at 35+4 weeks, the lower segment shows a bluish-purple placental bulge with dense craniocaudal serosal vessels, but villi have not breached the serosa and the bladder is free. What is the FIGO grade?',
      options: ['Grade 1 accreta', 'Grade 2 increta', 'Grade 3a percreta (serosa only)', 'Grade 3b percreta (bladder)'],
      answerIndex: 1,
      explanation:
        'Deep myometrial invasion with an intact serosa is grade 2 (increta), recognised by bluish discolouration, a placental bulge, craniocaudal neovascularity and a positive Dimple Sign. Grade 1 has a normal serosa, 3a breaches the serosa, 3b invades the bladder and 3c invades the parametrium.',
    },
    {
      id: 'ppp-q6',
      stem:
        'A 31-year-old with confirmed FIGO grade 2 PAS has had no bleeding or contractions. According to RCOG GTG 27a, when should she receive corticosteroids and when should she be delivered?',
      options: [
        'Steroids at 28 weeks; delivery at 32+0–33+6 weeks',
        'Steroids at 34+0–35+6 weeks; delivery at 35+0–36+6 weeks',
        'Steroids at 37 weeks; delivery at 39+0–40+0 weeks',
        'No steroids; await spontaneous labour at term',
      ],
      answerIndex: 1,
      explanation:
        'A single corticosteroid course is given at 34+0–35+6 weeks. Planned delivery for PAS at 35+0–36+6 weeks in a specialist centre balances fetal maturity against unscheduled haemorrhage, which rises sharply after 36 weeks.',
    },
    {
      id: 'ppp-q7',
      stem:
        'A 29-year-old at 31 weeks with known praevia has a moderate painless bleed with mild tightenings. Maternal observations and CTG are reassuring and the bleeding settles. Which statement is correct?',
      options: [
        'Emergency McDonald cerclage should be inserted immediately',
        'Intravenous terbutaline should run continuously until 37 weeks',
        'Tocolysis (avoiding beta-mimetics) may be used for 48 hours to complete corticosteroids; cerclage is not recommended',
        'A digital vaginal examination must be performed before steroids',
      ],
      answerIndex: 2,
      explanation:
        'In stable symptomatic praevia < 34 weeks, give corticosteroids and consider tocolysis for 48 hours only to complete the course, avoiding beta-mimetics that mask hypovolaemia. Maintenance tocolysis and cerclage are not recommended, and digital vaginal examination is contraindicated.',
    },
    {
      id: 'ppp-q8',
      stem:
        'Which combination best represents the gold-standard anaesthetic and operative protocol for planned definitive surgery for FIGO grade 2 PAS at 35+5 weeks?',
      options: [
        'GA with high-dose sevoflurane → low transverse incision through the placenta → manual extraction → oxytocin 40 IU',
        'Regional anaesthesia (CSE) + NPSA bundle → high fundal incision avoiding the placenta → ligate cord, omit routine uterotonics, close uterus with placenta in situ → total caesarean hysterectomy',
        'Spinal anaesthesia → manual removal → subtotal hysterectomy leaving the invaded cervix',
        'Local infiltration → vaginal misoprostol induction → postpartum methotrexate 50 mg/m²',
      ],
      answerIndex: 1,
      explanation:
        'The RCOG bundle, regional anaesthesia, a high incision clear of the placenta, immediate cord ligation without manual removal or routine uterotonics, closure with the placenta in situ and total hysterectomy define definitive PAS surgery.',
    },
    {
      id: 'ppp-q9',
      stem:
        'A 30-year-old with grade 3c percreta extending to the pelvic sidewall strongly desires uterine preservation. After fundal delivery the placenta is left in situ and the uterus closed. Which postoperative agent is strictly contraindicated?',
      options: [
        'Prophylactic broad-spectrum intravenous antibiotics',
        'Adjuvant methotrexate',
        'Oral or intravenous iron',
        'Tranexamic acid for acute bleeding',
      ],
      answerIndex: 1,
      explanation:
        'Methotrexate has no efficacy after delivery because third-trimester trophoblasts are not rapidly dividing, and it causes severe myelosuppression, neutropenic sepsis and hepatorenal toxicity. Expectant management relies on antibiotics, surveillance and readiness for delayed hysterectomy.',
    },
    {
      id: 'ppp-q10',
      stem:
        'During elective caesarean for uncomplicated praevia in a district hospital, the surgeon finds a large bluish-purple lower-segment bulge with dense craniocaudal vessels. Mother and fetus are stable with no bleeding. What is the correct immediate action?',
      options: [
        'Incise directly through the bulge, manually extract the placenta and pack the uterus',
        'Pause, do not incise the uterus or disturb the placenta, summon senior obstetric/anaesthetic/urological support and blood products — or close and transfer urgently if the unit cannot manage PAS',
        'Give intravenous ergometrine and apply forceful cord traction before delivery',
        'Perform bilateral oophorectomy before opening the uterus',
      ],
      answerIndex: 1,
      explanation:
        'Unsuspected PAS in a stable mother and fetus demands a pause: avoid incising the placenta, mobilise the MDT and blood bank, then deliver through a high incision clear of the placenta. If the unit lacks resources, close the abdomen and transfer urgently to a specialist PAS centre.',
    },
  ],
};
