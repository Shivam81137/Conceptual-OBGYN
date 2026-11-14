import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 09 - Primary HPV Screening, LSIL/HSIL & Glandular AIS
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pages 79-102), updated with
 * the WHO 2021 screening guideline, the WHO 2026 HPV DNA genotyping guideline,
 * Bhatla et al. 2025, ASCCP risk-based standards and BHIVA/BASHH UK guidance.
 *
 * Covers:
 * - Primary HPV screening principles, test choice and the 90-70-90 framework
 * - Partial genotyping, reflex LBC, self-collection and discordant results
 * - WHO 2021 intervals and the 2026 extended genotyping groups 1a-1d
 * - Programme follow-up capacity, the 60% threshold and triage options
 * - Histological LSIL/CIN1 observation versus HSIL/CIN2-3 treatment and p16
 * - AGC and AIS work-up, intact cone specimens and margin assessment
 * - Pregnancy, HIV, immunosuppression and the BHIVA 2025/2026 updates
 * - Post-treatment surveillance, recurrence and return to screening
 * - Golden pearls & examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const PRIMARY_HPV_SCREENING_AIS_MODULE: StudioModule = {
  id: 'pg-mod-09-primary-hpv-screening-ais',
  track: 'NEET_PG',
  title: 'Primary HPV Screening, LSIL/HSIL & Glandular AIS',
  shortTitle: 'HPV Screening & AIS',
  summary:
    'Complete PG clinical revision module on primary HPV screening and the management of squamous and glandular cervical abnormalities. Features primary HPV DNA testing, partial versus extended genotyping, WHO 2021 intervals, WHO 2026 groups 1a-1d and the 60% follow-up capacity threshold, reflex LBC and discordant results, LSIL/CIN1 observation versus HSIL/CIN2-3 treatment, p16 immunohistochemistry, AGC and AIS work-up with intact cone requirements, pregnancy and HIV pathways, BHIVA 2025/2026 updates, 15 active-recall flashcards, and 10 clinical vignette MCQs.',
  tagline:
    'Primary HPV, genotype groups, CIN1 vs CIN3 and the AIS cone.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 50,
  tags: [
    'Primary HPV DNA Screening',
    'Partial vs Extended Genotyping',
    'WHO 2021 Intervals',
    'WHO 2026 Groups 1a-1d',
    '60% Follow-Up Capacity',
    'Reflex LBC & Discordance',
    'CIN1 Observation vs CIN3 Treatment',
    'p16 Immunohistochemistry',
    'AGC & AIS Work-Up',
    'Pregnancy & HIV Pathways',
  ],
  sourceTag:
    'Handwritten clinical revision (Primary HPV Screening & AIS) • WHO 2021 screening • WHO 2026 genotyping • Bhatla et al. 2025 • ASCCP • BHIVA 2025/2026',
  updatedAtISO: '2026-11-14T07:30:00.000Z',
  notes: [
    {
      id: 'screening-principles-test-choice',
      heading: 'Screening Principles, Test Choice & Cytology Terminology',
      intro:
        'Cervical screening has shifted from cytology-first to HPV-first. A validated HPV DNA test is more sensitive and more reproducible, and a negative result gives stronger reassurance - but it generates more positive screens, so the programme must fund triage, colposcopy, treatment and recall.',
      flow: [
        'Target population · define start age, exit age and interval from the national programme',
        'Primary test · validated HPV DNA assay on a provider-collected or validated self-collected sample',
        'Triage · partial genotyping and/or reflex cytology according to programme capacity',
        'Diagnosis · colposcopy with directed biopsy when the risk threshold is met',
        'Treatment · ablation or excision according to lesion and transformation-zone criteria',
        'Surveillance · post-treatment HPV testing and return to routine interval when criteria are met',
      ],
      bullets: [
        'Sensitivity: HPV DNA testing detects carcinogenic infection before cytological change and has a higher sensitivity and negative predictive value than cytology.',
        'Reproducibility: HPV testing shows lower inter-observer variability than conventional or liquid-based cytology.',
        'Trade-Off: greater sensitivity means more HPV-positive screens requiring triage; programme benefit depends on completing follow-up and treatment.',
        'Cytology Categories: NILM, ASC-US, LSIL, HSIL, AGC and AIS describe exfoliated cells, not tissue architecture.',
        'Histology Grades: CIN1, CIN2 and CIN3 describe tissue; histological HSIL should carry a CIN2 or CIN3 qualifier where possible.',
        'Start Age: screening very young women detects transient infection and regressive low-grade lesions, causing unnecessary colposcopy and treatment.',
        'Self-Collection: a validated self-collected vaginal sample is acceptable for HPV DNA testing and improves coverage, but a positive result still requires the programme triage pathway.',
        'Cytology from Self-Samples: LBC usually needs a clinician-collected cervical sample unless the assay and pathway validate an alternative.',
        'Programme Equity: recall systems, transport, colposcopy access and treatment capacity determine outcomes as much as test choice.',
      ],
      table: {
        head: ['Term', 'What It Describes', 'Key Interpretation'],
        rows: [
          [
            'NILM',
            'Cytology',
            'Negative for intraepithelial lesion or malignancy; the HPV result may still be positive.',
          ],
          [
            'ASC-US',
            'Cytology',
            'Atypical squamous cells of undetermined significance; requires HPV or risk-based triage.',
          ],
          [
            'LSIL',
            'Cytology',
            'Low-grade squamous change, commonly reflecting productive HPV infection.',
          ],
          [
            'HSIL',
            'Cytology',
            'High-grade squamous abnormality; requires colposcopic or risk-based assessment.',
          ],
          [
            'AGC',
            'Cytology',
            'Atypical glandular cells; evaluate cervical and, when indicated, endometrial sources.',
          ],
          [
            'AIS',
            'Cytology or histology',
            'Adenocarcinoma in situ; a glandular precursor requiring diagnostic excision.',
          ],
          [
            'CIN1 / LSIL',
            'Histology',
            'Low-grade tissue lesion; observation is usually preferred.',
          ],
          [
            'CIN2 / HSIL',
            'Histology',
            'Intermediate/high-grade lesion; selected cases may be observed, otherwise treated.',
          ],
          [
            'CIN3 / HSIL',
            'Histology',
            'High-grade direct precursor; treatment is generally recommended.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: cytology describes cells and histology describes tissue - LSIL/HSIL are cytology terms while CIN1/2/3 are histological grades.',
        'Primary HPV testing buys sensitivity and reproducibility at the cost of more positive screens; the programme must be able to complete the pathway.',
      ],
      trap: {
        title: 'Examiner trap - using LSIL and CIN1 as synonyms',
        body: 'Cytologic LSIL and histologic CIN1 are related but not interchangeable. A cytology result cannot establish tissue grade, and a CIN1 biopsy after HSIL cytology carries a discordance problem.',
      },
      traps: [
        {
          title: '• Starting routine screening in very young women and treating transient low-grade change.',
        },
        {
          title: '• Assuming a self-collected positive HPV test completes the assessment.',
        },
      ],
    },
    {
      id: 'primary-hpv-pathway-genotyping',
      heading: 'Primary HPV Pathway, Partial Genotyping & Discordant Results',
      intro:
        'The screening pathway is a decision tree, not a single test. HPV16/18 positivity goes to colposcopy, other carcinogenic types are triaged with reflex cytology, and persistence rather than a single positive result drives escalation.',
      flow: [
        'HPV negative · return to the national routine screening interval',
        'HPV16/18 positive · refer for colposcopy; reflex LBC may be added but must not delay referral',
        'Other carcinogenic HPV positive · obtain reflex LBC or the programme-specified triage test',
        'LBC HSIL, ASC-H or glandular · refer for colposcopy',
        'LBC NILM or low-grade · repeat HPV at the programme interval, commonly about 12 months',
        'Persistent positivity or worsening cytology · colposcopy and biopsy',
      ],
      bullets: [
        'Genotyping Value: HPV16/18 account for a disproportionate share of cervical cancers and carry higher risk than most other carcinogenic types.',
        'Partial Genotyping: separates HPV16 and HPV18 (some assays add 45) from a pooled group of other carcinogenic types.',
        'Reflex LBC: uses the original clinician-collected sample where the assay allows, avoiding a second visit; it should not delay a referral that the pathway already requires.',
        'Persistence: repeated detection of the same type over about 24 months is more concerning than a single non-16/18 positive result.',
        'Discordance: HPV16/18 positive with NILM, or persistent HPV with negative cytology, needs risk-based management rather than reassurance from the cytology alone.',
        'Symptom Override: a visible lesion, postcoital bleeding or suspicious appearance requires diagnostic assessment regardless of screening recall.',
        'Prior History: previous CIN2/3, positive margins, treatment or high-grade cytology changes the pathway and may preclude a simple return to routine screening.',
        'Assay Specificity: pathways are validated per assay and per programme; do not extrapolate one country algorithm to a different test platform.',
      ],
      table: {
        head: ['Result', 'Source Pathway', 'WHO 2026 Programme Context'],
        rows: [
          [
            'HPV16/18 positive',
            'Colposcopy; reflex LBC may be added but must not delay referral',
            'Groups 1a and 1b are highest risk; eligible women may be treated or triaged by capacity',
          ],
          [
            'Non-16/18 carcinogenic positive',
            'Reflex LBC; high-grade or glandular leads to colposcopy, low-grade to repeat HPV',
            'Groups 1c and 1d are further risk-stratified within the programme algorithm',
          ],
          [
            'HPV positive, LBC negative',
            'Repeat HPV at the programme interval; persistence triggers evaluation',
            'WHO 2021 general population repeats HPV at about 24 months after negative triage',
          ],
          [
            'Persistent carcinogenic HPV',
            'Review prior results; colposcopy when persistence or cytology reaches threshold',
            'Use the selected genotype-and-capacity algorithm and complete every step',
          ],
          [
            'Self-collected HPV positive',
            'Needs triage; clinician-collected LBC may be required',
            'Self-collection is acceptable for validated HPV DNA assays; triage depends on the pathway',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: HPV16/18 positive goes to colposcopy even with NILM cytology; other types are triaged, and persistence escalates.',
        'A negative cytology result never neutralises HPV16/18 positivity or documented persistence.',
      ],
      trap: {
        title: 'Examiner trap - saying HPV positive plus NILM always means routine recall',
        body: 'That is only true for lower-risk genotypes in a pathway that permits it. HPV16/18 positivity, persistence and prior high-grade history all override a negative cytology result.',
      },
      traps: [
        {
          title: '• Delaying a required colposcopy referral while waiting for reflex cytology.',
        },
        {
          title: '• Treating every HPV-positive result immediately in a programme designed for triage.',
        },
      ],
    },
    {
      id: 'who-intervals-genotyping-capacity',
      heading: 'WHO 2021 & 2026: Intervals, Genotype Groups & Programme Capacity',
      intro:
        'WHO separates the general population from women living with HIV and makes the 2026 genotyping algorithm conditional on whether the programme can actually complete follow-up and deliver ablation. Programme capacity is part of the recommendation, not an administrative afterthought.',
      flow: [
        'General population · HPV DNA from age 30 every 5-10 years',
        'Women living with HIV · HPV DNA with triage from age 25 every 3-5 years',
        'Assess capacity · at least 60% completion at every step defines high follow-up capacity',
        'High capacity · use limited or extended genotyping and risk-stratified treat-or-triage options',
        'Low capacity · favour broader treat-all-positive or simplified algorithms to reduce loss to follow-up',
        'Before treatment · visually assess ablation eligibility; otherwise LLETZ or referral',
      ],
      bullets: [
        'WHO 2021 General Population: HPV DNA as the preferred primary test from age 30, repeated every 5-10 years.',
        'WHO 2021 HIV: HPV DNA with triage from age 25 every 3-5 years; if HPV positive and triage negative, repeat HPV at 12 months.',
        'Elimination Framework: ages 35 and 45 are the two key lifetime screening ages in the 90-70-90 strategy, a coverage target rather than the only acceptable schedule.',
        'Negative Triage Interval: in the general population WHO 2021 suggests repeat HPV at about 24 months after a positive HPV test with negative triage.',
        'Group 1a: HPV16 - the highest-priority genotype group.',
        'Group 1b: HPV18 and HPV45 - high-risk group prioritised for treatment or triage.',
        'Group 1c: HPV31, 33, 35, 52 and 58 - intermediate-risk group.',
        'Group 1d: HPV39, 51, 56 and 59 - lower relative risk among the specified genotypes.',
        'Multi-Group Output: if a result matches more than one group, classify it in the highest applicable risk group.',
        'High Follow-Up Capacity: at least 60% completion at every stage of triage, treatment and follow-up, with loss to follow-up below 40% at each step.',
        'Low Follow-Up Capacity: below 60% completion at any single step; one weak link makes the whole programme low-capacity.',
        'High-Capacity Options: treat groups 1a-1c and triage 1d; or treat 1a-1b and triage 1c-1d; or treat 1a-1b, triage 1c and return 1d to routine screening.',
        'Triage Test Choice: WHO 2026 suggests VIA or colposcopic impression rather than cytology or dual-stain cytology in programme algorithms, regardless of capacity.',
        'HIV Exclusion: WHO 2026 did not extend the new extended-genotyping recommendation to women living with HIV because outcomes in that group had not been evaluated.',
      ],
      table: {
        head: ['Setting', 'Screening Start', 'Primary Test', 'Interval / Recall', 'Important Note'],
        rows: [
          [
            'WHO general population (2021)',
            'Age 30',
            'HPV DNA',
            'Every 5-10 years',
            'Implementation and test availability vary by country.',
          ],
          [
            'WHO elimination framework',
            'Ages 35 and 45',
            'High-performance test',
            'Two key lifetime screening ages',
            'A coverage target within 90-70-90, not the only valid schedule.',
          ],
          [
            'WHO women living with HIV',
            'Age 25',
            'HPV DNA plus triage',
            'Every 3-5 years',
            'HPV positive with negative triage: repeat HPV at 12 months.',
          ],
          [
            'Australian programme in handwritten notes',
            'About age 25 to programme exit',
            'HPV DNA with partial genotyping and reflex LBC',
            'About 5 years after a negative result',
            'Historical 2017-era pathway; use the current NCSP version.',
          ],
          [
            'Bhatla 2025 review',
            'Programme-dependent, often 25-30',
            'HPV testing increasingly preferred',
            'Many guidelines use about 5 years',
            'A review of international programmes, not a single rule.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: general population = age 30 every 5-10 years; women living with HIV = age 25 every 3-5 years with triage.',
        'High follow-up capacity = at least 60% completion at every step; a single step below 60% makes the programme low-capacity.',
      ],
      trap: {
        title: 'Examiner trap - applying WHO 2026 extended genotyping to women living with HIV',
        body: 'WHO explicitly did not make that recommendation for women living with HIV. Continue limited genotyping, colposcopy, VIA or cytology for triage in that group.',
      },
      traps: [
        {
          title: '• Quoting 5-10 years as a universal interval for every population and programme.',
        },
        {
          title: '• Treating the 60% capacity threshold as a target rather than a definition of capacity.',
        },
        {
          title: '• Ignoring that the 2026 recommendations are conditional and low-certainty.',
        },
      ],
    },
    {
      id: 'lsil-cin1-hsil-cin2-3-p16',
      heading: 'Histological LSIL/CIN1, HSIL/CIN2-3 & p16 Immunohistochemistry',
      intro:
        'CIN1 is usually a manifestation of productive HPV infection and regresses; CIN3 is a direct precursor and is treated; CIN2 sits in between and is managed individually. p16 clarifies equivocal histology but is not a screening test and must not be used to upgrade every low-grade lesion.',
      flow: [
        'Biopsy result · grade as CIN1, CIN2 or CIN3 with a comment on transformation-zone visibility',
        'CIN1 · observe unless high-grade cytology persists, the TZ is inadequate or follow-up is unreliable',
        'CIN2 · treat, or observe only with a fully visible lesion, no invasion and reliable follow-up',
        'CIN3 · excisional treatment generally recommended; exclude invasion',
        'Equivocal histology · apply p16; block-positive staining supports HSIL',
        'Discordance · high-grade cytology with CIN1 or negative biopsy requires review and possibly excision',
      ],
      bullets: [
        'CIN1 Biology: often a productive HPV infection rather than an immediate cancer precursor, with a high spontaneous regression rate.',
        'CIN1 Management: observation and HPV-based surveillance; diagnostic excision is not justified by a low-grade result alone when the rest of the assessment is reassuring.',
        'CIN1 Exceptions: persistent high-grade cytology, a Type 3 transformation zone, prior treatment or unreliable follow-up change the decision.',
        'CIN2 Heterogeneity: meaningful regression occurs, especially in younger women, but persistence and progression remain possible.',
        'CIN2 Observation Criteria: fully visible lesion and transformation zone, no suspicion of invasion, no endocervical disease, reliable follow-up and informed patient preference.',
        'CIN3 Management: a direct cancer precursor with a substantially higher progression risk; treatment is generally recommended.',
        'p16 Interpretation: block-positive p16 supports HSIL when morphology is equivocal, particularly around the CIN2 category; patchy or negative staining may support a lower grade.',
        'p16 Limits: not a stand-alone screening test, not for indiscriminate use on unequivocal CIN1, and different from p16/Ki-67 dual-stain cytology used in triage.',
        'Discordant High-Grade Cytology: review cytology and histology, confirm colposcopy adequacy and TZ visibility, consider endocervical sampling and diagnostic excision if the discordance persists.',
        'Excision Principle: remove the transformation-zone lesion adequately while preserving cervical tissue where possible, especially in women planning pregnancy.',
      ],
      table: {
        head: ['Finding', 'Usual Approach', 'Key Cautions'],
        rows: [
          [
            'LSIL cytology',
            'HPV-based risk assessment; colposcopy or surveillance per programme',
            'Age, genotype, persistence and prior history alter risk.',
          ],
          [
            'Histological CIN1',
            'Observation and surveillance generally preferred',
            'Reassess if high-grade cytology persists or colposcopy is inadequate.',
          ],
          [
            'HSIL cytology',
            'Colposcopy with directed biopsy; expedited treatment only in selected non-pregnant patients',
            'Pregnancy changes treatment options; do not treat CIN2/3 during pregnancy.',
          ],
          [
            'Histological CIN2',
            'Treat, or observe in carefully selected cases',
            'Observation requires a visible lesion/TZ, no invasion suspicion and reliable follow-up.',
          ],
          [
            'Histological CIN3',
            'Excisional treatment generally recommended',
            'Exclude invasion and ensure the specimen is adequate.',
          ],
          [
            'High-grade cytology with CIN1 or negative biopsy',
            'Review cytology, histology, colposcopy adequacy and endocervical sampling; consider excision',
            'A low-grade biopsy may miss an endocervical HSIL lesion.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: CIN1 is observed, CIN3 is treated, and CIN2 is the individualised middle ground with strict observation criteria.',
        'p16 block positivity supports HSIL in equivocal histology; it is an adjunct, never a screening test.',
      ],
      trap: {
        title: 'Examiner trap - treating CIN2 and CIN3 as one entity',
        body: 'CIN2 can regress and may be observed in carefully selected patients; CIN3 is a direct precursor and is generally treated. A stem that offers observation for CIN3 is usually wrong.',
      },
      traps: [
        {
          title: '• Excisional treatment of CIN1 solely because of a low-grade biopsy result.',
        },
        {
          title: '• Using p16 to upgrade unequivocal CIN1 or as a primary screening test.',
        },
        {
          title: '• Accepting a CIN1 biopsy after persistent HSIL cytology without review.',
        },
      ],
    },
    {
      id: 'agc-ais-glandular-workup',
      heading: 'AGC, AIS & the Glandular Work-Up',
      intro:
        'Glandular abnormalities follow a separate, more aggressive pathway. AGC may arise in the cervix or the endometrium, and AIS may be multifocal with skip lesions in the canal, so a biopsy alone cannot exclude invasive adenocarcinoma - an intact diagnostic excision is required.',
      flow: [
        'AGC or AIS on cytology · colposcopy regardless of the HPV result',
        'Endocervical sampling · in all non-pregnant patients',
        'Endometrial sampling · age 35 or older, or younger with bleeding, anovulation, obesity or other risk',
        'AGC-favour neoplasia or AIS with no explanatory lesion · diagnostic excisional procedure',
        'Specimen · single intact cone preferred; avoid fragmented or top-hat excisions',
        'Margins and endocervical sampling · assess residual disease above the excision bed',
        'Definitive plan · hysterectomy after childbearing, or strict fertility-sparing surveillance with negative margins',
      ],
      bullets: [
        'AGC Is Not Low Grade: it requires colposcopic evaluation and endocervical assessment even when HPV is negative, because endometrial and non-HPV glandular pathology can produce it.',
        'Endometrial Sampling: recommended at age 35 or older with AGC, and in younger patients with abnormal uterine bleeding, chronic anovulation, obesity or other endometrial risk factors.',
        'Atypical Endometrial Cells: require endometrial evaluation; the work-up must not be limited to the cervix.',
        'AIS Biology: a pre-invasive glandular lesion usually associated with HPV18 and also HPV16, arising in the endocervical canal and often multifocal.',
        'Biopsy Insufficiency: a colposcopy-directed biopsy showing AIS does not exclude invasive adenocarcinoma; diagnostic excision is required even when hysterectomy is planned.',
        'Intact Specimen: a single intact cone allows assessment of ectocervical, endocervical and deep margins; fragmentation makes margin interpretation unreliable.',
        'Technique: cold-knife conization is often favoured for a deep intact specimen; LEEP is acceptable if it yields a single adequate intact specimen.',
        'Endocervical Sampling: sampling above the excision bed helps detect residual AIS in the canal in non-pregnant patients.',
        'Positive Margins: repeat excision is preferred when feasible to exclude invasion and reduce residual disease; otherwise discuss definitive management with gynaecologic oncology.',
        'Definitive Surgery: simple hysterectomy is generally recommended after childbearing once excision has excluded invasion.',
        'Fertility Sparing: only with negative margins, negative endocervical sampling, specialist counselling and strict long-term HPV-based surveillance.',
        'Ablation Contraindication: AIS is never an ablation diagnosis because no specimen is available to exclude invasion or assess margins.',
      ],
      table: {
        head: ['Result', 'Colposcopy', 'Endocervical Sampling', 'Endometrial Sampling', 'Diagnostic Excision'],
        rows: [
          [
            'AGC-NOS',
            'Yes, regardless of HPV',
            'Usually in the non-pregnant patient',
            'Age 35 or older, or younger with bleeding or risk factors',
            'If persistent or high-risk findings, or no explanatory pathology',
          ],
          [
            'AGC-favour neoplasia',
            'Yes',
            'Yes',
            'According to age and risk',
            'Yes if no explanatory high-grade pathology',
          ],
          [
            'Atypical endometrial cells',
            'Cervical evaluation as appropriate',
            'As indicated',
            'Endometrial evaluation is central',
            'Depends on findings',
          ],
          [
            'AIS cytology or biopsy',
            'Yes',
            'Yes, but not in pregnancy',
            'Based on age, risk and differential',
            'Required even if hysterectomy is planned',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: AGC means colposcopy plus endocervical sampling, plus endometrial sampling at age 35 or with risk factors - even if HPV is negative.',
        'AIS requires an intact diagnostic excision before any hysterectomy; a biopsy alone cannot exclude invasion.',
      ],
      trap: {
        title: 'Examiner trap - stopping at a biopsy that shows AIS',
        body: 'A biopsy showing AIS does not rule out invasive adenocarcinoma and does not define endocervical extent or margins. A diagnostic cone is required even when hysterectomy is already planned.',
      },
      traps: [
        {
          title: '• Omitting endometrial sampling in a woman aged 35 or older with AGC.',
        },
        {
          title: '• Accepting a fragmented top-hat specimen for AIS margin assessment.',
        },
        {
          title: '• Offering ablation for AIS because the ectocervix looks normal.',
        },
      ],
    },
    {
      id: 'pregnancy-hiv-immunocompromise',
      heading: 'Pregnancy, HIV & Immunocompromised Patients',
      intro:
        'Pregnancy changes which procedures are safe, not whether a suspicious lesion must be assessed. HIV and other immunosuppression change the start age, interval and triage pathway, and the 2025/2026 UK guidance separates routine recall from diagnostic work-up.',
      flow: [
        'Pregnancy with abnormal screen · colposcopy by an experienced clinician when the threshold is met',
        'Suspected invasion · directed biopsy and urgent specialist assessment, regardless of gestation',
        'Histological CIN2/3 without invasion · surveillance and defer treatment until postpartum',
        'AIS in pregnancy · gynaecologic oncology review with an individualised plan',
        'HIV · HPV DNA from age 25, screen-triage-treat every 3-5 years',
        'Positive HPV with negative triage · repeat HPV at 12 months, not immediate treatment',
      ],
      bullets: [
        'Pregnancy Does Not Exclude Cancer: a suspicious lesion or possible invasion must be evaluated; deferring everything until postpartum is unsafe.',
        'Colposcopy in Pregnancy: perform only when indicated, by a clinician experienced in pregnancy-related cervical change, with the aim of excluding invasion.',
        'Biopsy in Pregnancy: directed biopsy is appropriate when invasion is suspected or the lesion is concerning; pregnancy vascularity may increase bleeding.',
        'Absolute Avoidance: endocervical curettage and endometrial biopsy are unacceptable during pregnancy.',
        'CIN2/3 in Pregnancy: treatment is generally deferred; surveillance colposcopy or testing at 12-24-week intervals may be used for HSIL depending on risk.',
        'Excision in Pregnancy: reserved for suspected cancer that cannot otherwise be excluded.',
        'Postpartum Review: ASCCP suggests colposcopy no earlier than four weeks after delivery; screening resumption follows the national programme.',
        'WHO HIV Pathway: HPV DNA from age 25, screen-triage-treat, every 3-5 years; positive HPV with negative triage repeats at 12 months.',
        'Post-Treatment HIV: after CIN2/3 or AIS, HPV at 12 months and again at 12 months if negative before returning to routine interval.',
        'BHIVA 2025 Pregnancy: routine cervical screening is not recommended during pregnancy and cytology is scheduled 3 months after delivery in the UK HIV context.',
        'BHIVA/BASHH September 2026: in NHS England, well-controlled HIV follows the national screening programme rather than automatic annual screening; annual testing may be considered for poorly controlled HIV, low CD4 or significant immunosuppression.',
        'Other Immunocompromise: transplant recipients and people on immunosuppressive therapy may have prolonged persistence; individualise the interval and do not skip diagnostic work-up.',
      ],
      table: {
        head: ['Situation', 'Do', 'Avoid'],
        rows: [
          [
            'Pregnancy with a low-grade result',
            'Apply the local risk threshold; postpartum reassessment may be acceptable',
            'Reflex excision or treatment of CIN2/3 during pregnancy',
          ],
          [
            'Pregnancy with suspected invasion',
            'Experienced colposcopy, directed biopsy and an urgent specialist pathway',
            'Deferring suspected cancer solely because the patient is pregnant',
          ],
          [
            'Pregnancy and endocervical assessment',
            'Defer endocervical curettage until after pregnancy',
            'ECC or endometrial biopsy during pregnancy',
          ],
          [
            'HIV with an HPV-positive screen',
            'Screen-triage-treat; repeat HPV at 12 months if triage is negative',
            'Automatically applying general-population extended-genotype rules',
          ],
          [
            'HIV in pregnancy (BHIVA 2025)',
            'Plan cytology 3 months postpartum; individualise known abnormalities',
            'Treating routine recall and diagnostic work-up as the same decision',
          ],
          [
            'Poorly controlled HIV (NHS England 2026)',
            'Consider specialist additional annual screening',
            'Assuming every person with well-controlled HIV needs annual tests',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: in pregnancy, no ECC, no endometrial biopsy and no routine treatment of CIN2/3 - but suspected invasion is always investigated.',
        'WHO HIV screening starts at 25 every 3-5 years; general population screening starts at 30 every 5-10 years.',
      ],
      trap: {
        title: 'Examiner trap - extending the BHIVA postpartum rule to everyone',
        body: 'BHIVA 2025 is UK guidance for pregnancy in the HIV context, and the 2026 change to annual screening applies specifically to NHS England. Other countries and other risk groups follow their own programmes.',
      },
      traps: [
        {
          title: '• Performing ECC during pregnancy.',
        },
        {
          title: '• Deferring assessment of a suspicious cervical lesion until after delivery.',
        },
        {
          title: '• Applying the 2026 extended-genotype algorithm to women living with HIV.',
        },
      ],
    },
    {
      id: 'post-treatment-surveillance',
      heading: 'Post-Treatment Surveillance & Return to Screening',
      intro:
        'Treatment removes the lesion, not the risk. HPV-based surveillance after CIN2/3 or AIS continues for decades, persists after hysterectomy, and is never replaced by a single negative test.',
      bullets: [
        'Recurrence Risk: residual or recurrent disease depends on margin status, HPV persistence, immune status, lesion grade and completeness of excision.',
        'WHO Programme Pathway: HPV DNA testing at 12 months after treatment; if negative, return to the recommended routine interval.',
        'ASCCP High-Grade Pathway: HPV-based tests at 6, 18 and 30 months, then every 3 years for at least 25 years after three negative tests.',
        'Hysterectomy Does Not End Surveillance: the 25-year obligation persists after hysterectomy for CIN2/3 or AIS because vaginal HSIL/VAIN can occur.',
        'Benign Hysterectomy: no routine vaginal screening if there is no history of CIN2+ or other relevant cancer risk.',
        'AIS After Hysterectomy: continue vaginal and HPV-based surveillance according to the specialist pathway.',
        'Positive Margins: higher residual disease risk; repeat excision or close specialist follow-up depending on lesion and feasibility.',
        'Abnormal Surveillance: any abnormal HPV or cytology, or new symptoms, triggers examination, colposcopy and biopsy as indicated.',
        'Counselling: explain that surveillance is long-term, that vaccination does not replace it, and that attendance is the main modifiable factor.',
      ],
      table: {
        head: ['Guideline / Context', 'Initial Follow-Up', 'Long-Term Approach'],
        rows: [
          [
            'WHO public-health programme',
            'HPV DNA test at 12 months',
            'If negative, resume the recommended routine programme interval',
          ],
          [
            'ASCCP after HSIL/CIN2-3 or AIS',
            'HPV-based tests at 6, 18 and 30 months',
            'After three negative tests, HPV-based testing every 3 years for at least 25 years',
          ],
          [
            'After hysterectomy for CIN2+',
            'Continue vaginal and HPV-based surveillance',
            'The 25-year surveillance period still applies after hysterectomy',
          ],
          [
            'Benign hysterectomy without CIN2+',
            'No routine vaginal screening',
            'Unless another cervical or vaginal cancer risk history exists',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: after CIN2/3 or AIS, HPV-based surveillance continues for at least 25 years under ASCCP, including after hysterectomy.',
        'WHO programme follow-up after treatment is HPV DNA at 12 months; do not blend WHO and ASCCP schedules without naming the system.',
      ],
      trap: {
        title: 'Examiner trap - discharging a patient after one negative post-treatment test',
        body: 'A single negative HPV test does not close the surveillance period after high-grade disease. ASCCP requires a series of negative tests before moving to three-yearly long-term surveillance.',
      },
      traps: [
        {
          title: '• Assuming hysterectomy removes the need for vaginal surveillance after CIN2/3 or AIS.',
        },
        {
          title: '• Mixing WHO 12-month and ASCCP 6/18/30-month schedules into one hybrid rule.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-four rapid-fire points to lock in before the exam.',
      pearls: [
        'Primary HPV DNA testing is more sensitive and reproducible than cytology.',
        'A negative HPV test supports a longer interval than a negative cytology test.',
        'Cytology describes cells; histology describes tissue.',
        'LSIL/HSIL are cytology terms; CIN1/2/3 are histological grades.',
        'WHO 2021 general population: HPV DNA from age 30 every 5-10 years.',
        'WHO 2021 women living with HIV: HPV DNA with triage from age 25 every 3-5 years.',
        'HPV positive with negative triage in the general population: repeat HPV at about 24 months.',
        'HPV positive with negative triage in women living with HIV: repeat HPV at 12 months.',
        'WHO 2026 groups: 1a = HPV16; 1b = HPV18/45; 1c = HPV31/33/35/52/58; 1d = HPV39/51/56/59.',
        'A result matching multiple groups is classified in the highest applicable risk group.',
        'High follow-up capacity = at least 60% completion at every step.',
        'WHO 2026 triage preference is VIA or colposcopic impression, not cytology.',
        'WHO 2026 extended genotyping was not recommended for women living with HIV.',
        'CIN1 is usually observed; excision is not justified by a low-grade result alone.',
        'CIN2 may be observed only with a fully visible lesion/TZ, no invasion and reliable follow-up.',
        'CIN3 is a direct precursor and is generally treated.',
        'p16 block positivity supports HSIL in equivocal histology; it is not a screening test.',
        'High-grade cytology with CIN1 biopsy requires review and possibly diagnostic excision.',
        'AGC requires colposcopy regardless of HPV status.',
        'Endometrial sampling is recommended for AGC at age 35 or older, or younger with risk factors.',
        'AIS requires an intact diagnostic excision even if hysterectomy is planned.',
        'AIS: negative margins are required before fertility-sparing management.',
        'In pregnancy: no ECC, no endometrial biopsy, no routine treatment of CIN2/3; investigate suspected invasion.',
        'After CIN2/3 or AIS, ASCCP surveillance continues for at least 25 years, including after hysterectomy.',
      ],
      traps: [
        {
          title: '• Using LSIL and CIN1 interchangeably.',
        },
        {
          title: '• Treating HPV positive plus NILM as automatically routine.',
        },
        {
          title: '• Quoting 5-10 years as a universal screening interval.',
        },
        {
          title: '• Applying WHO 2026 extended genotyping to women living with HIV.',
        },
        {
          title: '• Observing CIN3 outside specific exceptions such as pregnancy.',
        },
        {
          title: '• Using p16 to upgrade unequivocal CIN1.',
        },
        {
          title: '• Ignoring persistent HSIL cytology because the biopsy showed CIN1.',
        },
        {
          title: '• Omitting endometrial sampling in AGC at age 35 or older.',
        },
        {
          title: '• Performing ECC during pregnancy.',
        },
        {
          title: '• Discharging a patient after a single negative post-treatment HPV test.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm9-f1',
      front: 'Why is primary HPV DNA testing preferred over cytology for cervical screening?',
      back: 'It has higher sensitivity and a stronger negative predictive value, with lower variability and better reproducibility. A negative validated test supports a longer interval than cytology-only screening.',
    },
    {
      id: 'm9-f2',
      front: 'State the WHO 2021 screening recommendation for the general population using HPV DNA.',
      back: 'Start at age 30 and screen every 5-10 years. National programmes may adapt implementation and interval, and the 35/45 ages apply to the elimination framework.',
    },
    {
      id: 'm9-f3',
      front: 'State the WHO 2021 HPV screening recommendation for women living with HIV.',
      back: 'Start at age 25, use screen-triage-and-treat, and repeat every 3-5 years. If HPV is positive but triage is negative, repeat HPV DNA at 12 months.',
    },
    {
      id: 'm9-f4',
      front: 'What is the difference between limited and extended HPV genotyping?',
      back: 'Limited genotyping separates HPV16 and HPV18 (sometimes HPV45) from pooled other carcinogenic types. Extended genotyping further separates risk groups 1a, 1b, 1c and 1d.',
    },
    {
      id: 'm9-f5',
      front: 'List the WHO 2026 extended HPV genotype groups.',
      back: '1a = HPV16; 1b = HPV18/45; 1c = HPV31/33/35/52/58; 1d = HPV39/51/56/59. A result matching several groups is classified in the highest applicable group.',
    },
    {
      id: 'm9-f6',
      front: 'How does WHO 2026 define high programme follow-up capacity?',
      back: 'At least 60% completion at every stage of the care continuum - triage, treatment and follow-up - with loss to follow-up below 40% at each step. One step below 60% makes the programme low-capacity.',
    },
    {
      id: 'm9-f7',
      front: 'How should HPV16/18 positivity with NILM cytology be managed?',
      back: 'Refer for colposcopy. A negative cytology result does not neutralise a high-risk genotype; reflex LBC may be added but must not delay the indicated referral.',
    },
    {
      id: 'm9-f8',
      front: 'What is the usual management of histologically confirmed CIN1?',
      back: 'Observation with HPV-based surveillance, because regression is common and progression is uncommon. Reassess if high-grade cytology persists, the TZ is inadequate or follow-up is unreliable.',
    },
    {
      id: 'm9-f9',
      front: 'Under what conditions may CIN2 be observed rather than treated?',
      back: 'A fully visible lesion and transformation zone, no suspicion of invasion or endocervical disease, reliable follow-up and informed patient preference - typically a younger patient prioritising fertility.',
    },
    {
      id: 'm9-f10',
      front: 'Why is CIN3 treated rather than observed?',
      back: 'CIN3 is a direct precursor with a substantially higher progression risk than CIN1 or CIN2. Observation is generally inappropriate outside specific situations such as pregnancy, where treatment is deferred.',
    },
    {
      id: 'm9-f11',
      front: 'What is the role of p16 immunohistochemistry in cervical histology?',
      back: 'Block-positive p16 supports HSIL when morphology is equivocal, especially around CIN2. It is a diagnostic adjunct, not a screening test, and should not be used to upgrade unequivocal CIN1.',
    },
    {
      id: 'm9-f12',
      front: 'Outline the initial work-up of AGC on cervical cytology.',
      back: 'Colposcopy regardless of HPV result, endocervical sampling in non-pregnant patients, and endometrial sampling at age 35 or older or with bleeding, anovulation, obesity or other risk factors.',
    },
    {
      id: 'm9-f13',
      front: 'Why does AIS require an intact diagnostic excision rather than a biopsy alone?',
      back: 'AIS may be multifocal with skip lesions, and a biopsy cannot exclude invasive adenocarcinoma or define endocervical extent and margins. A single intact cone allows full margin assessment.',
    },
    {
      id: 'm9-f14',
      front: 'What is forbidden during pregnancy in the cervical screening pathway?',
      back: 'Endocervical curettage and endometrial biopsy are unacceptable, and routine treatment of CIN2/3 is deferred. Suspected invasion is still investigated with colposcopy and directed biopsy.',
    },
    {
      id: 'm9-f15',
      front: 'How long does ASCCP surveillance continue after treatment of CIN2/3 or AIS?',
      back: 'At least 25 years with HPV-based testing, starting with tests at 6, 18 and 30 months before three-yearly long-term surveillance. It continues even after hysterectomy.',
    },
  ],

  mcqs: [
    {
      id: 'm9-q1',
      stem: 'A 32-year-old woman has a positive HPV DNA test that separately identifies HPV16. Cytology is NILM. What is the most appropriate next step?',
      options: [
        'Repeat HPV testing in 5 years',
        'Repeat cytology in 12 months only',
        'Refer for colposcopy',
        'Reassure and return to routine screening',
      ],
      answerIndex: 2,
      explanation:
        'HPV16 positivity carries high risk and warrants colposcopy even with NILM cytology. A negative cytology result does not neutralise a high-risk genotype, and routine recall would delay assessment.',
    },
    {
      id: 'm9-q2',
      stem: 'A national programme has 72% completion of triage but only 45% completion of treatment after a positive screen. How should its follow-up capacity be classified under WHO 2026?',
      options: [
        'Low capacity, because at least one step is below 60%',
        'High capacity, because the average across steps exceeds 60%',
        'High capacity, because triage is the only step that matters',
        'Capacity cannot be assessed without genotype data',
      ],
      answerIndex: 0,
      explanation:
        'High follow-up capacity requires at least 60% completion at every stage. A single step below 60% makes the programme low-capacity, which favours simplified algorithms that reduce loss to follow-up.',
    },
    {
      id: 'm9-q3',
      stem: 'A 29-year-old woman has a cervical biopsy showing CIN1 after LSIL cytology. The transformation zone is fully visible and she attends follow-up reliably. What is the preferred management?',
      options: [
        'Immediate cold-knife conization',
        'Observation with HPV-based surveillance',
        'Hysterectomy',
        'Cryotherapy without further assessment',
      ],
      answerIndex: 1,
      explanation:
        'Histological CIN1 usually reflects productive HPV infection and regresses. Observation with HPV-based surveillance is preferred when the TZ is fully visible and follow-up is reliable; excision is not justified by a low-grade result alone.',
    },
    {
      id: 'm9-q4',
      stem: 'A 41-year-old woman has HSIL cytology but the colposcopic biopsy shows only CIN1. The transformation zone is Type 3 and endocervical sampling was not performed. What is the most appropriate action?',
      options: [
        'Reassure and repeat cytology in 5 years',
        'Treat with thermal ablation of the visible ectocervix',
        'Discharge to routine screening because the biopsy is low grade',
        'Review the specimens and colposcopy adequacy, obtain endocervical sampling and consider diagnostic excision',
      ],
      answerIndex: 3,
      explanation:
        'High-grade cytology with a low-grade biopsy is a discordance that may hide endocervical HSIL, especially with a Type 3 TZ. Review, endocervical sampling and consideration of diagnostic excision are required; ablation would destroy the evidence.',
    },
    {
      id: 'm9-q5',
      stem: 'A 46-year-old woman has AGC on cytology and a negative HPV test. What is the correct approach?',
      options: [
        'Colposcopy with endocervical and endometrial sampling as indicated',
        'Routine recall in 5 years because HPV is negative',
        'Immediate hysterectomy',
        'Repeat cytology in 12 months only',
      ],
      answerIndex: 0,
      explanation:
        'AGC requires colposcopy regardless of HPV status because it may reflect cervical glandular neoplasia or endometrial pathology. At age 35 or older, endometrial sampling is also indicated.',
    },
    {
      id: 'm9-q6',
      stem: 'A 37-year-old woman has AIS on colposcopic biopsy and is scheduled for hysterectomy. What is the essential next step?',
      options: [
        'Proceed directly to hysterectomy',
        'Ablate the transformation zone first',
        'Perform a diagnostic excisional procedure with an intact specimen before hysterectomy',
        'Repeat the biopsy in 12 months',
      ],
      answerIndex: 2,
      explanation:
        'A biopsy showing AIS does not exclude invasive adenocarcinoma or define endocervical extent and margins. An intact diagnostic cone is required even when hysterectomy is planned.',
    },
    {
      id: 'm9-q7',
      stem: 'A 30-year-old woman at 20 weeks of gestation has HSIL cytology. Colposcopy by an experienced clinician shows CIN2/3 without features of invasion. What is the preferred management?',
      options: [
        'Immediate LLETZ during pregnancy',
        'Endocervical curettage to define the canal',
        'Hysterectomy after viability',
        'Surveillance during pregnancy and treatment after delivery',
      ],
      answerIndex: 3,
      explanation:
        'Treatment of CIN2/3 is generally deferred during pregnancy, with colposcopic surveillance and postpartum reassessment. ECC is unacceptable in pregnancy, and excision is reserved for suspected cancer that cannot otherwise be excluded.',
    },
    {
      id: 'm9-q8',
      stem: 'A 28-year-old woman with HIV has a positive HPV DNA test and negative triage. What does WHO recommend next?',
      options: [
        'Immediate LLETZ',
        'Repeat HPV DNA testing at 12 months',
        'Return to routine screening in 10 years',
        'Apply the general-population extended-genotype treatment algorithm',
      ],
      answerIndex: 1,
      explanation:
        'For women living with HIV, WHO recommends repeating HPV DNA at 12 months after a positive test with negative triage. WHO 2026 did not extend its new extended-genotyping recommendation to this group.',
    },
    {
      id: 'm9-q9',
      stem: 'A 52-year-old woman had a hysterectomy for CIN3 three years ago. She asks whether surveillance can stop. What is the best answer?',
      options: [
        'No; HPV-based surveillance continues for at least 25 years after CIN2/3, even after hysterectomy',
        'Yes; removing the cervix removes all HPV-related risk',
        'Only if she has never been HPV positive',
        'Surveillance is needed only if she develops bleeding',
      ],
      answerIndex: 0,
      explanation:
        'Vaginal HSIL/VAIN can occur after hysterectomy for high-grade cervical disease. ASCCP recommends HPV-based surveillance for at least 25 years after treatment of CIN2/3 or AIS, regardless of hysterectomy.',
    },
    {
      id: 'm9-q10',
      stem: 'A 33-year-old woman has a positive HPV test for a non-16/18 carcinogenic type with reflex LSIL cytology. She has no prior abnormal results. Which principle best guides management?',
      options: [
        'Immediate conization for all non-16/18 positive results',
        'Hysterectomy because LSIL is present',
        'Repeat HPV testing at the programme interval with escalation if persistence occurs',
        'No further testing because LSIL always regresses',
      ],
      answerIndex: 2,
      explanation:
        'Non-16/18 positivity with low-grade cytology is usually managed by repeat HPV testing at the programme interval, commonly about 12 months. Persistence or worsening cytology prompts colposcopy; immediate excision is not indicated.',
    },
  ],
};
