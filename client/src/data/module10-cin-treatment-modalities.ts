import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 10 - Treatment Modalities for CIN
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision, updated with WHO 2014/2019/2021
 * treatment guidance, the WHO 2026 genotyping and treatment algorithm, and the
 * Bhatla et al. 2025 cervical cancer review.
 *
 * Covers:
 * - Ablative versus excisional treatment and WHO ablation eligibility
 * - Cryotherapy double-freeze (3-5-3), ice-ball coverage and probe selection
 * - Thermal ablation (100 degrees C, 20-30 s) and CO2 laser vaporization
 * - LEEP/LLETZ technique, note-level depths and energy settings
 * - Cold-knife conization, AIS and suspected microinvasion
 * - Complications, obstetric risk and post-treatment surveillance
 * - Guideline cross-check and procedure selection algorithms
 * - Golden pearls & examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const CIN_TREATMENT_MODALITIES_MODULE: StudioModule = {
  id: 'pg-mod-10-cin-treatment-modalities',
  track: 'NEET_PG',
  title: 'CIN Treatment Modalities: Ablation, LEEP & Conization',
  shortTitle: 'CIN Treatment Modalities',
  summary:
    'Complete PG clinical revision module on the treatment of cervical intraepithelial neoplasia. Features ablative versus excisional principles, WHO ablation eligibility, cryotherapy double-freeze 3-5-3, thermal ablation at 100 degrees C for 20-30 seconds, CO2 laser vaporization, LEEP/LLETZ depth and energy note values, cold-knife conization for AIS, complication and obstetric risk comparison, post-treatment HPV surveillance, 15 active-recall flashcards, and 10 clinical vignette MCQs.',
  tagline:
    'Ablate or excise, 3-5-3 cryotherapy, LEEP depth and the AIS cone.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'Ablative vs Excisional Treatment',
    'WHO Ablation Eligibility',
    'Cryotherapy Double-Freeze 3-5-3',
    'Thermal Ablation 100°C 20-30 s',
    'CO2 Laser Vaporization',
    'LEEP/LLETZ Depth & Power',
    'Cold-Knife Conization',
    'AIS & Suspected Microinvasion',
    'Cone Complications & Obstetric Risk',
    'Post-Treatment HPV Surveillance',
  ],
  sourceTag:
    'Handwritten clinical revision (CIN Treatment Modalities) • WHO 2014/2019/2021 • WHO 2026 treatment algorithm • Bhatla et al. 2025',
  updatedAtISO: '2026-11-14T08:00:00.000Z',
  notes: [
    {
      id: 'ablative-vs-excisional',
      heading: 'Ablative vs Excisional Treatment: The Core Decision',
      intro:
        'Every treatment for CIN either destroys the abnormal transformation zone in situ or removes it. The choice is driven less by technology than by three questions: can the whole lesion be seen, is invasion or glandular disease suspected, and is a histological specimen needed?',
      flow: [
        'Confirm histology · CIN2+ or a lesion requiring treatment, with cytology and colposcopy reviewed',
        'Exclude cancer · suspected invasion mandates biopsy or excision and referral, never ablation',
        'Exclude glandular disease · AIS or AGC requires an excisional diagnostic specimen',
        'Assess the transformation zone · full visibility and complete lesion coverage are mandatory for ablation',
        'Choose · ablation if all eligibility criteria are met; excision if the canal, margins or histology demand it',
        'Follow up · HPV-based surveillance regardless of which modality was used',
      ],
      bullets: [
        'Ablation: destroys tissue in situ - cryotherapy, thermal ablation and CO2 laser vaporization; no specimen is produced.',
        'Excision: removes the transformation zone - LEEP/LLETZ, laser cone and cold-knife conization; provides a specimen for grade, margins and occult invasion.',
        'Diagnostic Advantage: only excision can assess margin status and exclude microinvasion histologically.',
        'Therapeutic Equivalence: in properly selected CIN2+ lesions, well-performed ablation and excision have comparable cure rates.',
        'Selection Error: the commonest serious mistake is ablating a lesion that harbours occult invasion or AIS.',
        'Type 3 TZ: an unseen upper limit precludes standard ablation because the lesion cannot be fully covered or assessed.',
        'Pregnancy: treatment of CIN2/3 is deferred; ablation is not performed during pregnancy.',
        'Counselling: discuss failure, recurrence, discharge, bleeding, infection, stenosis and future obstetric risk for either approach.',
      ],
      table: {
        head: ['Feature', 'Ablative Methods', 'Excisional Methods'],
        rows: [
          [
            'Examples',
            'Cryotherapy, thermal ablation, CO2 laser vaporization',
            'LEEP/LLETZ, laser cone, cold-knife conization',
          ],
          [
            'What happens',
            'Tissue is destroyed in situ',
            'Abnormal transformation zone is removed',
          ],
          [
            'Specimen for pathology',
            'No',
            'Yes',
          ],
          [
            'Margin assessment',
            'Not possible',
            'Possible on the excised specimen',
          ],
          [
            'Occult invasion',
            'Cannot be assessed directly',
            'Can be assessed within the specimen',
          ],
          [
            'Best suited to',
            'Fully visible lesion and Type 1 TZ, no invasion or glandular suspicion',
            'Canal component, Type 2/3 TZ, discordant tests, AIS concern',
          ],
          [
            'Main advantage',
            'Simpler, shorter, portable and lower resource use in eligible cases',
            'Diagnosis and treatment in one procedure with interpretable margins',
          ],
          [
            'Main limitation',
            'No histology; strict eligibility required',
            'Bleeding, stenosis and obstetric risk',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: ablation treats what you can see; excision also tells you what you could not see.',
        'If invasion or AIS is possible, the answer is excision - never ablation.',
      ],
      trap: {
        title: 'Examiner trap - assuming a fully visible ectocervical lesion makes ablation safe',
        body: 'Visibility is necessary but not sufficient. Ablation also requires no suspicion of invasion or glandular disease, no endocervical extension and a Type 1 transformation zone under standard WHO criteria.',
      },
      traps: [
        {
          title: '• Ablating a lesion with atypical vessels, ulceration or an exophytic component.',
        },
        {
          title: '• Choosing ablation when the cytology-histology discordance is unexplained.',
        },
      ],
    },
    {
      id: 'cryotherapy-technique',
      heading: 'Cryotherapy: Eligibility, Double-Freeze & Technique',
      intro:
        'Cryotherapy freezes the transformation zone with a metal probe cooled by compressed carbon dioxide or nitrous oxide. It is cheap, portable and effective in eligible lesions, but it is unforgiving of poor coverage: if the ice ball does not extend beyond the probe edge, the lesion margin has not been treated.',
      flow: [
        'Confirm eligibility · histology CIN2+, Type 1 TZ, whole lesion visible, no invasion or AIS',
        'Select the probe · the largest flat probe that covers the entire lesion and TZ',
        'Apply · firm, central contact; protect the vaginal walls',
        'Freeze 1 · 3 minutes until the ice ball extends beyond the probe edge',
        'Thaw · 5 minutes, allowing complete thaw',
        'Freeze 2 · 3 minutes, then allow complete thaw before removal',
        'Aftercare · check haemostasis, counsel about discharge and arrange HPV follow-up',
      ],
      bullets: [
        'Double-Freeze Schedule: 3 minutes freeze, 5 minutes thaw, 3 minutes freeze - memorised as 3-5-3.',
        'Probe Temperature: the handwritten estimate is about -65 to -85 degrees C, but device specifications differ between CO2 and N2O systems.',
        'Tissue Lethal Temperature: the handwritten estimate is about -20 to -30 degrees C; probe temperature and tissue temperature are not the same.',
        'Ice-Ball Rule: the ice ball must extend beyond the probe edge to ensure the full lesion margin is treated.',
        'Coverage Failure: if the probe cannot cover the whole lesion, cryotherapy should not proceed; choose excision or refer.',
        'Vaginal Protection: ensure the vaginal walls do not contact the probe; freezing adjacent mucosa causes injury without treating the lesion.',
        'Eligibility: fully visible Type 1 TZ, whole lesion visible, no endocervical extension, no suspicion of invasion or glandular disease.',
        'Not Eligible: Type 3 TZ, suspected AIS or cancer, lesion extending into the canal, lesion larger than any available probe, pregnancy.',
        'Expected Course: cramping and copious watery or blood-stained discharge for days to weeks; warn about fever, offensive discharge and heavy bleeding.',
      ],
      table: {
        head: ['Parameter', 'Value / Principle'],
        rows: [
          ['Cryoprobe temperature', 'Handwritten estimate about -65 to -85 degrees C'],
          ['Tissue lethal temperature', 'Handwritten estimate about -20 to -30 degrees C'],
          ['Freeze-thaw sequence', '3 minutes freeze, 5 minutes thaw, 3 minutes freeze'],
          ['Probe and lesion coverage', 'Entire lesion and TZ covered; ice ball extends beyond the probe edge'],
          ['Eligible TZ', 'Standard WHO eligibility requires a fully visible Type 1 TZ'],
          [
            'Not eligible',
            'Suspected invasion or AIS, hidden TZ, canal extension, lesion beyond probe coverage, pregnancy',
          ],
          [
            'Post-procedure',
            'Watery or blood-stained discharge; counsel about warning signs and follow-up',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: cryotherapy = 3-5-3 with an ice ball beyond the probe edge; incomplete coverage means the treatment has failed before it starts.',
        'Cryotherapy destroys tissue, so it can never be used when invasion or AIS must be excluded.',
      ],
      trap: {
        title: 'Examiner trap - memorising the probe temperature as the tissue lethal temperature',
        body: 'The probe may reach about -65 to -85 degrees C, but cell death occurs around -20 to -30 degrees C. The clinical endpoint is the ice ball, not the machine display.',
      },
      traps: [
        {
          title: '• Proceeding when the probe does not cover the entire lesion.',
        },
        {
          title: '• Using cryotherapy for a Type 3 TZ or suspected AIS.',
        },
        {
          title: '• Removing the probe before complete thaw.',
        },
      ],
    },
    {
      id: 'thermal-ablation-laser',
      heading: 'Thermal Ablation & CO2 Laser Vaporization',
      intro:
        'Thermal ablation uses a heated metallic probe and is the practical alternative to cryotherapy in screen-and-treat programmes. CO2 laser vaporization is precise but expensive and operator-dependent. Both are ablative: neither produces a specimen.',
      flow: [
        'Assess ablation eligibility · fully visible Type 1 TZ and lesion, no invasion or glandular suspicion',
        'Thermal ablation · apply a probe at a minimum of 100 degrees C for 20-30 seconds per application',
        'Overlap · use overlapping applications until the entire transformation zone is covered',
        'Laser vaporization · set power and spot size to vaporize to the intended depth with a visible margin',
        'Haemostasis and aftercare · inspect the treated area and counsel about discharge and follow-up',
      ],
      bullets: [
        'Thermal Ablation Names: also called thermocoagulation or cold coagulation; the historical term cold coagulation refers to the probe, not to low temperature.',
        'WHO Temperature: a minimum of 100 degrees C for 20-30 seconds per application, with overlapping applications to cover the whole TZ.',
        'Earlier WHO Guidance: described a reusable metallic probe at about 100 degrees C with 20-40 second applications and multiple applications as needed.',
        'Handwritten Values: about 90-100 degrees C for 30-45 seconds; the WHO technical specification is the updated reference value.',
        'CO2 Laser Mechanism: focused infrared energy vaporizes tissue with precise control of depth and lateral extent.',
        'Handwritten Laser Values: power figures of about 25 W and more than 60 W both appear, with power density around 750-2,000 W/cm2 and vaporization depth around 7-10 mm; these are inconsistent note-level values, not universal settings.',
        'Laser Limitations: expensive equipment, operator skill, plume extraction and no pathology specimen.',
        'Vaporization vs Conization: vaporization destroys tissue; laser conization cuts out a specimen and is a different procedure.',
        'Programme Role: thermal ablation is portable and fast, making it attractive for screen-and-treat where cryotherapy logistics are difficult.',
      ],
      table: {
        head: ['Modality', 'Principle / Equipment', 'Specimen?', 'Key Advantage', 'Main Limitation'],
        rows: [
          [
            'Cryotherapy',
            'CO2 or N2O cryoprobe; double-freeze',
            'No',
            'Simple, low-cost, no specimen needed',
            'Requires full probe coverage and a visible TZ',
          ],
          [
            'Thermal coagulation',
            'Heated metallic probe at 100 degrees C or more, overlapping fields',
            'No',
            'Portable and fast treatment',
            'No specimen; exact coverage is required',
          ],
          [
            'CO2 laser vaporization',
            'CO2 laser vaporizes tissue',
            'No',
            'Precise ablation with controlled depth',
            'Expensive, operator-dependent, no specimen',
          ],
          [
            'LEEP/LLETZ',
            'Electrosurgical wire loop',
            'Yes',
            'Treats and provides histology',
            'Bleeding, stenosis and obstetric risk',
          ],
          [
            'Cold-knife cone',
            'Scalpel cone excision',
            'Yes',
            'Intact deep cone, useful for AIS',
            'More invasive; bleeding, stenosis and obstetric risk',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: WHO thermal ablation = at least 100 degrees C for 20-30 seconds per application, overlapping to cover the whole TZ.',
        'Laser vaporization is ablative; laser conization is excisional. The word laser does not tell you whether there is a specimen.',
      ],
      trap: {
        title: 'Examiner trap - calling thermal coagulation cold coagulation because it is less cold than cryotherapy',
        body: 'Cold coagulation is a historical name for a probe heated to about 100 degrees C. It is a hot ablative method, not a freezing method, and it is not cryotherapy.',
      },
      traps: [
        {
          title: '• Quoting handwritten laser power values as universal machine settings.',
        },
        {
          title: '• Confusing laser vaporization with laser conization.',
        },
        {
          title: '• Applying a single thermal field and assuming the whole TZ was treated.',
        },
      ],
    },
    {
      id: 'leep-lletz-technique',
      heading: 'LEEP/LLETZ: Depth, Energy Settings & Specimen Quality',
      intro:
        'LEEP and LLETZ use a thin electrosurgical wire loop to excise the transformation zone. The procedure is both diagnostic and therapeutic, and its quality depends on a single intact specimen with interpretable margins rather than on the wattage displayed on the generator.',
      flow: [
        'Assess · review cytology, histology, TZ type and lesion extent; consent for bleeding and obstetric risk',
        'Colposcopy · map the lesion and choose loop size and orientation',
        'Infiltrate · local anaesthetic with vasoconstrictor to reduce bleeding and pain',
        'Excise · cut with the loop in a single pass where possible, including the whole TZ',
        'Haemostasis · ball electrode or sutures; avoid excessive thermal artefact at the margins',
        'Specimen · orient, fix and send as one intact piece with a diagram',
        'Follow up · HPV-based surveillance and wound-healing review',
      ],
      bullets: [
        'LEEP and LLETZ: often used interchangeably; LLETZ explicitly describes excision of the transformation zone.',
        'Diagnostic Value: the specimen allows grading, margin assessment and detection of occult microinvasion.',
        'Loop Selection: choose the largest loop that fits the lesion and cervix; a single pass reduces fragmentation.',
        'Handwritten Depth Categories: Type 1 about 8-10 mm, Type 2 up to less than 15 mm, Type 3 more than 15 mm or a deeper cone.',
        'Depth Caveat: the handwritten ranges overlap and are approximate; tailor excision to TZ anatomy, lesion extent and diagnostic need.',
        'Handwritten Power Values: about 35-55 W for loop cutting or blended current and 40-60 W for ball-electrode coagulation.',
        'Power Caveat: output depends on generator, waveform, electrode size, tissue impedance and technique; these are note-level examples, not universal prescriptions.',
        'Thermal Artefact: excessive coagulation obscures margins; use cutting or blended current for the loop and reserve coagulation for haemostasis.',
        'Specimen Integrity: avoid fragmenting the specimen; a single oriented piece is essential when margins matter.',
        'Obstetric Counselling: deeper and repeated excisions increase the risk of cervical stenosis, insufficiency and preterm birth.',
      ],
      table: {
        head: ['Handwritten Category', 'Approximate Depth as Written', 'Interpretation'],
        rows: [
          ['Type 1', 'About 8-10 mm', 'Shallow excision of an ectocervical TZ'],
          ['Type 2', 'Up to less than 15 mm', 'Intermediate excision with an endocervical component'],
          ['Type 3', 'More than 15 mm or a deeper cone', 'Deeper endocervical TZ or cone excision'],
        ],
      },
      pearls: [
        'Golden Pearl: LEEP treats and diagnoses because it produces a specimen - that is its decisive advantage over cryotherapy.',
        'Depth follows the transformation zone, not a fixed number; the handwritten 8-10 / under 15 / over 15 mm figures are approximate teaching values.',
      ],
      trap: {
        title: 'Examiner trap - treating 35-55 W as a universal WHO setting',
        body: 'Those are note-level values from a handwritten source. Electrosurgical output is device- and operator-dependent; follow the generator protocol and supervised training.',
      },
      traps: [
        {
          title: '• Quoting LEEP depths as fixed prescriptions rather than anatomical guidance.',
        },
        {
          title: '• Using heavy coagulation current on the loop and destroying the margins.',
        },
        {
          title: '• Sending a fragmented specimen when margin status will decide management.',
        },
      ],
    },
    {
      id: 'conization-ais-microinvasion',
      heading: 'Cold-Knife Conization, AIS & Suspected Microinvasion',
      intro:
        'Cold-knife conization removes a cone of cervix with a scalpel, producing an intact specimen with clean margins and minimal thermal artefact. It is the reference procedure when glandular disease or microinvasion must be excluded, and it remains indicated even when hysterectomy is already planned.',
      flow: [
        'Indication · AIS, suspected microinvasion, Type 3 TZ, positive endocervical sampling or unexplained discordance',
        'Plan · assess canal length and lesion extent; consent for bleeding, stenosis and obstetric risk',
        'Technique · place traction sutures, inject vasoconstrictor and excise a cone including the whole TZ',
        'Specimen · mark orientation, keep intact and send for serial margin assessment',
        'Haemostasis · sutures or haemostatic agents; avoid obscuring the specimen',
        'Endocervical sampling · assess residual disease above the excision bed when not pregnant',
        'Definitive plan · hysterectomy after childbearing, or fertility-sparing surveillance with negative margins',
      ],
      bullets: [
        'AIS Rule: AIS requires a diagnostic excisional specimen even when hysterectomy is planned, because biopsy cannot exclude invasive adenocarcinoma.',
        'WHO Preference: WHO 2014 conditionally suggests cold-knife conization over LEEP for histologically confirmed AIS, on low or very low certainty evidence.',
        'Specimen Quality: an intact cone permits assessment of ectocervical, endocervical and deep margins; fragmentation makes interpretation unreliable.',
        'Microinvasion: suspected microinvasion requires excisional biopsy or conization, never ablation.',
        'Canal Disease: a Type 3 TZ or positive endocervical sampling requires excision or referral rather than ablation.',
        'LEEP Alternative: a carefully performed LEEP is acceptable for AIS only if it yields a single, intact, sufficiently deep specimen.',
        'Positive Margins: repeat excision is preferred when feasible; otherwise discuss definitive management with gynaecologic oncology.',
        'Fertility Sparing: requires negative margins, negative endocervical sampling, specialist counselling and strict HPV-based surveillance.',
        'Hysterectomy Timing: simple hysterectomy is generally recommended after childbearing once invasion has been excluded.',
        'Obstetric Risk: cone depth and volume, and repeat procedures, drive the risk of stenosis, insufficiency and preterm birth.',
      ],
      table: {
        head: ['Clinical Situation', 'Preferred Diagnostic Direction'],
        rows: [
          ['AIS on biopsy or cytology', 'Diagnostic excisional specimen; cold-knife conization often preferred'],
          ['AIS with hysterectomy planned', 'Excision first to exclude invasion and assess margins'],
          ['Suspected microinvasion', 'Excisional biopsy or conization, not ablation'],
          ['Type 3 TZ or canal lesion', 'Excision or referral; ablation is not standard eligible'],
          ['Positive endocervical sampling', 'Excisional assessment of the canal'],
          ['Small fully visible ectocervical CIN2+', 'Ablation may be appropriate if all criteria are met'],
        ],
      },
      pearls: [
        'Golden Pearl: AIS means an intact cone, not a biopsy and not ablation - the specimen is the diagnosis.',
        'Cold-knife conization gives the cleanest margins; LEEP is acceptable only when it delivers an intact, adequate specimen.',
      ],
      trap: {
        title: 'Examiner trap - skipping the cone because hysterectomy is already planned',
        body: 'Hysterectomy does not replace diagnostic excision. The cone excludes occult invasive adenocarcinoma and defines endocervical extent and margins, which determine whether a simple hysterectomy is appropriate.',
      },
      traps: [
        {
          title: '• Ablating suspected microinvasion or glandular disease.',
        },
        {
          title: '• Accepting a fragmented top-hat specimen for AIS margins.',
        },
        {
          title: '• Offering fertility-sparing management without negative margins and endocervical sampling.',
        },
      ],
    },
    {
      id: 'complications-surveillance',
      heading: 'Complications, Obstetric Risk & Post-Treatment Surveillance',
      intro:
        'All treatments can fail, and excision carries additional mechanical risk to the cervix. Surveillance after treatment is HPV-based, long-term and independent of whether the cervix was ablated, excised or later removed.',
      flow: [
        'Immediate · bleeding, pain, vasovagal reaction and infection',
        'Early · discharge, secondary haemorrhage and cervical stenosis',
        'Late · recurrence or residual disease, stenosis, insufficiency and preterm birth',
        'Surveillance · HPV-based testing according to the chosen guideline system',
        'Abnormal result · examination, colposcopy and biopsy as indicated',
        'Long term · at least 25 years after CIN2/3 or AIS under ASCCP, including after hysterectomy',
      ],
      bullets: [
        'Cryotherapy Effects: cramping, watery discharge, prolonged discharge, incomplete treatment or recurrence, and rarely infection or bleeding.',
        'Thermal Ablation Effects: cramping, watery discharge, spotting, incomplete coverage and recurrence.',
        'Laser Vaporization Effects: thermal injury, pain, discharge, incomplete ablation and no specimen for margin assessment.',
        'LEEP Effects: immediate or delayed bleeding, infection, cervical stenosis, specimen fragmentation and increased obstetric risk with deeper or repeated excision.',
        'Cold-Knife Cone Effects: bleeding, infection, stenosis, cervical insufficiency and preterm birth risk, related to cone depth and volume.',
        'Recurrence Risk: driven by margin status, HPV persistence, immune status, lesion grade and completeness of treatment.',
        'WHO Follow-Up: HPV DNA testing at 12 months after treatment; if negative, return to the programme routine interval.',
        'ASCCP Follow-Up: HPV-based tests at 6, 18 and 30 months, then every 3 years for at least 25 years after three negative tests.',
        'After Hysterectomy: the 25-year surveillance obligation persists after treatment of CIN2/3 or AIS because vaginal HSIL/VAIN can occur.',
        'Benign Hysterectomy: no routine vaginal screening when there is no history of CIN2+ or other relevant risk.',
      ],
      table: {
        head: ['Procedure', 'Possible Adverse Effects'],
        rows: [
          [
            'Cryotherapy',
            'Cramping, watery discharge, prolonged discharge, incomplete treatment or recurrence, rare infection or bleeding',
          ],
          [
            'Thermal ablation',
            'Cramping, watery discharge, spotting, incomplete coverage or recurrence',
          ],
          [
            'CO2 laser vaporization',
            'Thermal injury, pain, discharge, incomplete ablation, no specimen for margins',
          ],
          [
            'LEEP/LLETZ',
            'Immediate or delayed bleeding, infection, stenosis, specimen fragmentation, obstetric risk with deep or repeated excision',
          ],
          [
            'Cold-knife cone',
            'Bleeding, infection, stenosis, cervical insufficiency and preterm birth risk related to cone depth, volume and repeat procedures',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: after treatment for CIN2/3 or AIS, HPV-based surveillance continues for at least 25 years under ASCCP, even after hysterectomy.',
        'Deeper and repeated excisions increase stenosis and preterm birth risk; adequate treatment is not the same as maximal excision.',
      ],
      trap: {
        title: 'Examiner trap - blending WHO and ASCCP follow-up schedules',
        body: 'WHO public-health programmes use HPV DNA at 12 months. ASCCP risk-based practice uses 6, 18 and 30 months, then three-yearly testing for at least 25 years. State which system is being applied.',
      },
      traps: [
        {
          title: '• Discharging a patient after a single negative post-treatment HPV test.',
        },
        {
          title: '• Assuming hysterectomy ends surveillance after CIN2/3 or AIS.',
        },
        {
          title: '• Ignoring delayed secondary haemorrhage after cone or LEEP.',
        },
      ],
    },
    {
      id: 'guideline-cross-check',
      heading: 'Guideline Cross-Check: WHO 2014 to 2026 & Bhatla 2025',
      intro:
        'The guidelines agree on principles and differ on detail. WHO 2014 compares modalities for CIN2+ and AIS, WHO 2019 and 2021 define thermal ablation and eligibility, WHO 2026 embeds treatment in a genotype-based programme algorithm, and Bhatla 2025 emphasises the whole pathway.',
      bullets: [
        'WHO 2014 CIN2+: treat rather than observe; cryotherapy or LEEP are both acceptable where appropriate and available.',
        'WHO 2014 Preference: when both are suitable, cryotherapy is preferred over cold-knife conization because conization is more invasive, and LEEP is preferred over cold-knife conization for CIN2+.',
        'WHO 2014 AIS: cold-knife conization is conditionally suggested over LEEP because an intact diagnostic specimen and interpretable margins are needed.',
        'WHO 2014 Caveat: these recommendations do not make every CIN2+ lesion suitable for ablation; eligibility still depends on TZ visibility and exclusion of invasion or glandular disease.',
        'WHO 2019 Thermal Ablation: reusable metallic probe heated electrically to about 100 degrees C, with 20-40 second applications and multiple applications as needed.',
        'WHO 2019 Treatment Options: in eligible women with CIN2+, LLETZ, cryotherapy or thermal ablation may be used according to training, resources and quality assurance.',
        'WHO 2021 Ablation Eligibility: no suspicion of invasive cancer or glandular disease, fully visible TZ, whole lesion visible, no endocervical extension and a Type 1 TZ.',
        'WHO 2021 Type 2 Caveat: selected small Type 2 TZs may be a carefully constrained bridging option only where the probe truly reaches the whole lesion and follow-up is assured; this is not routine Type 1 eligibility.',
        'WHO 2026 Algorithm: after a positive screen or triage, visually assess ablation eligibility; eligible women receive cryotherapy or thermal ablation, and those not eligible receive LLETZ or cold-knife conization if LLETZ is unavailable.',
        'WHO 2026 Suspected Cancer: diagnostic evaluation, biopsy and referral rather than any ablative treatment.',
        'WHO 2026 Follow-Up: HPV testing at one year after treatment in the programme algorithm.',
        'Bhatla 2025: a screening programme needs a complete pathway - eligibility, triage, treatment options, referral criteria, infrastructure, trained staff, quality assurance and feasible follow-up.',
        'Bhatla 2025 Screen-and-Treat: reducing loss to follow-up is a major benefit in resource-constrained programmes.',
        'Evidence Caveat: the AIS preference for cold-knife conization rests on low or very low certainty evidence; clinical judgement and specimen adequacy still govern.',
      ],
      table: {
        head: ['Guideline', 'Focus', 'Key Treatment Message'],
        rows: [
          [
            'WHO 2014',
            'CIN2+ and AIS treatment',
            'Treat CIN2+; cryotherapy or LEEP acceptable; LEEP preferred over cold-knife conization for CIN2+; cold-knife conization preferred for AIS.',
          ],
          [
            'WHO 2019',
            'Thermal ablation technique',
            'Metallic probe at about 100 degrees C, 20-40 second applications; LLETZ, cryotherapy or thermal ablation are all options in eligible CIN2+.',
          ],
          [
            'WHO 2021',
            'Ablation eligibility',
            'No invasion or glandular disease, fully visible TZ and lesion, no endocervical extension, Type 1 TZ.',
          ],
          [
            'WHO 2026',
            'Genotype-based programme algorithm',
            'Assess ablation eligibility after a positive screen; eligible women are ablated, others receive LLETZ or cold-knife conization; HPV test at one year.',
          ],
          [
            'Bhatla 2025',
            'Whole-pathway programme review',
            'Screening must be linked to triage, treatment, referral, infrastructure, training, quality assurance and feasible follow-up.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: WHO 2014 prefers LEEP over cold-knife conization for CIN2+, but cold-knife conization over LEEP for AIS.',
        'WHO 2026 does not replace the technical specifications for cryotherapy or LLETZ; it embeds them in a genotype-based programme pathway.',
      ],
      trap: {
        title: 'Examiner trap - reading WHO 2026 as a new cryotherapy or LEEP protocol',
        body: 'The 2026 guideline is about HPV genotyping and risk-based programme pathways. Technical parameters still come from the dedicated WHO treatment guidance, and follow-up remains HPV testing at one year.',
      },
      traps: [
        {
          title: '• Treating the WHO 2014 preferences as absolute contraindications to the alternative procedure.',
        },
        {
          title: '• Forgetting that ablation eligibility is a clinical assessment made before treatment.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'Ablation destroys tissue and yields no specimen; excision removes tissue and yields a specimen.',
        'Ablation and excision have comparable cure rates when the lesion is correctly selected.',
        'WHO ablation eligibility: no invasion, no glandular disease, fully visible TZ and lesion, no endocervical extension, Type 1 TZ.',
        'Type 3 TZ is not eligible for routine ablation because the upper limit is not visible.',
        'Cryotherapy double-freeze = 3 minutes freeze, 5 minutes thaw, 3 minutes freeze.',
        'The cryotherapy ice ball must extend beyond the probe edge.',
        'If the probe cannot cover the lesion, do not proceed with cryotherapy.',
        'Cryoprobe temperature is not the same as tissue lethal temperature.',
        'Thermal ablation = at least 100 degrees C for 20-30 seconds per application, overlapping to cover the TZ.',
        'Cold coagulation is a historical name for a hot thermal probe, not cryotherapy.',
        'CO2 laser vaporization is ablative; laser conization is excisional.',
        'LEEP/LLETZ treats and provides histology, allowing margin and invasion assessment.',
        'Handwritten LEEP depths: Type 1 about 8-10 mm, Type 2 under 15 mm, Type 3 over 15 mm or a deeper cone.',
        'Handwritten LEEP power: about 35-55 W for the loop and 40-60 W for the ball electrode; device-dependent.',
        'LEEP and LLETZ are commonly used interchangeably.',
        'Cold-knife conization gives an intact specimen with minimal thermal artefact.',
        'AIS requires an intact diagnostic excision even if hysterectomy is planned.',
        'WHO 2014 suggests cold-knife conization over LEEP for AIS.',
        'WHO 2014 recommends LEEP over cold-knife conization for CIN2+ when both are suitable.',
        'Suspected microinvasion requires excision, never ablation.',
        'Cone depth and volume, and repeat procedures, increase stenosis and preterm birth risk.',
        'Post-cone bleeding may be immediate or delayed; infection and stenosis are also common.',
        'WHO post-treatment follow-up: HPV DNA at 12 months.',
        'ASCCP post-treatment follow-up: 6, 18 and 30 months, then every 3 years for at least 25 years.',
        'Hysterectomy does not end surveillance after CIN2/3 or AIS.',
      ],
      traps: [
        {
          title: '• Ablating when invasion or AIS is suspected.',
        },
        {
          title: '• Using a Type 3 TZ for routine cryotherapy.',
        },
        {
          title: '• Reversing the 3-5-3 freeze-thaw-freeze sequence.',
        },
        {
          title: '• Removing the cryoprobe before complete thaw.',
        },
        {
          title: '• Quoting 35-55 W as a universal LEEP setting.',
        },
        {
          title: '• Treating handwritten LEEP depths as fixed prescriptions.',
        },
        {
          title: '• Confusing laser vaporization with laser conization.',
        },
        {
          title: '• Skipping diagnostic excision because hysterectomy is planned for AIS.',
        },
        {
          title: '• Discharging a patient after one negative post-treatment HPV test.',
        },
        {
          title: '• Mixing WHO 12-month and ASCCP 6/18/30-month follow-up into one hybrid rule.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm10-f1',
      front: 'What is the fundamental difference between ablative and excisional treatment of CIN?',
      back: 'Ablation destroys abnormal tissue in situ and yields no histological specimen. Excision removes tissue and provides a specimen for grading, margin assessment and detection of occult microinvasion.',
    },
    {
      id: 'm10-f2',
      front: 'State the key WHO criteria for eligibility for ablative treatment.',
      back: 'No suspicion of invasive cancer or glandular disease or AIS; a fully visible transformation zone; the whole lesion visible; no extension into the endocervix; and a Type 1 TZ under standard criteria.',
    },
    {
      id: 'm10-f3',
      front: 'What is the WHO-recommended double-freeze cryotherapy schedule?',
      back: 'Freeze for 3 minutes, thaw for 5 minutes, then freeze again for 3 minutes - the 3-5-3 sequence.',
    },
    {
      id: 'm10-f4',
      front: 'Why must the cryotherapy ice ball extend beyond the edge of the cryoprobe?',
      back: 'To ensure the full lesion margin is adequately frozen. If the entire lesion cannot be covered, cryotherapy should not be performed because incomplete treatment leaves disease behind.',
    },
    {
      id: 'm10-f5',
      front: 'Why is cryotherapy inappropriate for a Type 3 TZ or suspected AIS?',
      back: 'A Type 3 TZ is incompletely visible and may hide canal disease, while AIS needs a diagnostic specimen and margin assessment. Cryotherapy produces no specimen and cannot cover unseen disease.',
    },
    {
      id: 'm10-f6',
      front: 'What is the major diagnostic advantage of LEEP/LLETZ over cryotherapy?',
      back: 'LEEP/LLETZ provides an excised tissue specimen for histopathology, margin assessment and evaluation for occult microinvasion while treating the lesion.',
    },
    {
      id: 'm10-f7',
      front: 'What LEEP power settings appear in the handwritten notes?',
      back: 'About 35-55 W for loop cutting or blended current and 40-60 W for ball-electrode coagulation. These are note-level examples, not universal settings; follow the device protocol.',
    },
    {
      id: 'm10-f8',
      front: 'What approximate Type 1, Type 2 and Type 3 excision depths appear in the handwritten notes?',
      back: 'Type 1 about 8-10 mm; Type 2 up to less than 15 mm; Type 3 more than 15 mm or a deeper cone. The ranges overlap and are teaching values, not fixed prescriptions.',
    },
    {
      id: 'm10-f9',
      front: 'Why is CO2 laser vaporization inappropriate if microinvasion is suspected?',
      back: 'Vaporization destroys tissue and produces no specimen for histopathological assessment. A diagnostic excisional procedure is required when invasion must be excluded.',
    },
    {
      id: 'm10-f10',
      front: 'What is the WHO technical temperature and time recommendation for thermal ablation?',
      back: 'A minimum of 100 degrees C for 20-30 seconds per application, using overlapping applications as needed to cover the entire transformation zone.',
    },
    {
      id: 'm10-f11',
      front: 'Why is thermal coagulation also called cold coagulation even though it uses heat?',
      back: 'Cold coagulation is a historical name. The device uses a heated metallic probe at about 100 degrees C to produce coagulative necrosis; it is a hot ablative method, not cryotherapy.',
    },
    {
      id: 'm10-f12',
      front: 'Which procedure does WHO 2014 suggest for histologically confirmed AIS: LEEP or cold-knife conization?',
      back: 'WHO conditionally suggests cold-knife conization over LEEP. An intact diagnostic specimen with interpretable margins is important to exclude occult invasive adenocarcinoma. Ablation is inappropriate.',
    },
    {
      id: 'm10-f13',
      front: 'Name important complications of cervical conization.',
      back: 'Haemorrhage, infection, cervical stenosis, cervical insufficiency and adverse obstetric outcomes including preterm birth. Risk is influenced by cone depth and volume and by repeat excision.',
    },
    {
      id: 'm10-f14',
      front: 'When does WHO recommend HPV DNA retesting after treatment for cervical precancer?',
      back: 'At 12 months after treatment in its public-health pathway. A negative result permits return to the recommended routine screening interval in that programme.',
    },
    {
      id: 'm10-f15',
      front: 'Does hysterectomy end surveillance after treatment for CIN2/3, HSIL or AIS?',
      back: 'No. Under ASCCP guidance, HPV-based surveillance continues for at least 25 years after treatment, even if hysterectomy is performed, because vaginal HSIL or VAIN can still develop.',
    },
  ],

  mcqs: [
    {
      id: 'm10-q1',
      stem: 'A 42-year-old woman has biopsy-confirmed CIN2. Colposcopy shows a Type 3 transformation zone with the upper limit of the lesion extending into the canal and not fully visible. There is no gross suspicion of invasive cancer. Which treatment is most appropriate?',
      options: [
        'Cryotherapy because CIN2 is always eligible for ablation',
        'Thermal coagulation without further assessment',
        'Excisional assessment with LEEP/LLETZ or an appropriate cone procedure',
        'CO2 laser vaporization of the visible ectocervix only',
      ],
      answerIndex: 2,
      explanation:
        'Ablation requires full visualisation and coverage of the lesion and TZ. A Type 3 TZ with endocervical extension means the upper limit is unseen. Excision supplies a specimen and evaluates the canal component.',
    },
    {
      id: 'm10-q2',
      stem: 'A woman with a small, fully visible ectocervical CIN2 lesion is eligible for cryotherapy. Which double-freeze schedule is recommended?',
      options: [
        '1 minute freeze, 1 minute thaw, 1 minute freeze',
        '3 minutes freeze, 5 minutes thaw, 3 minutes freeze',
        '5 minutes freeze, 3 minutes thaw, 5 minutes freeze',
        'Continuous freezing for 10 minutes without thawing',
      ],
      answerIndex: 1,
      explanation:
        'WHO recommends double-freeze cryotherapy with a 3-minute freeze, 5-minute thaw and second 3-minute freeze. The ice ball must cover the lesion and extend beyond the probe edge, and the probe is removed only after complete thaw.',
    },
    {
      id: 'm10-q3',
      stem: 'During cryotherapy the operator finds that the probe does not cover the entire lesion. What is the best action?',
      options: [
        'Proceed because partial freezing is sufficient for CIN2',
        'Apply a second freeze only to the visible portion and reassure the patient',
        'Do not proceed with incomplete cryotherapy; select an appropriate alternative or refer',
        'Increase freeze time until the ice ball reaches the vaginal wall',
      ],
      answerIndex: 2,
      explanation:
        'Complete coverage is essential. If the probe cannot cover the entire lesion and TZ, cryotherapy is inappropriate. Freezing adjacent vaginal wall causes injury and does not correct incomplete lesion coverage.',
    },
    {
      id: 'm10-q4',
      stem: 'A patient has high-grade cytology, a biopsy showing CIN1, unsatisfactory colposcopy and abnormal endocervical sampling. Why is LEEP/LLETZ preferred over ablation here?',
      options: [
        'It destroys all HPV in the genital tract',
        'It is an ablative procedure that avoids a specimen',
        'It guarantees that cervical cancer will never develop',
        'It provides an excisional specimen for histology and margin assessment',
      ],
      answerIndex: 3,
      explanation:
        'LEEP/LLETZ removes the transformation zone and provides tissue for grading, margins and occult microinvasion. Discordant high-grade cytology, inadequate colposcopy and abnormal endocervical sampling are common reasons to choose excision.',
    },
    {
      id: 'm10-q5',
      stem: 'A trainee reads that loop cutting may use about 35-55 W and ball-electrode coagulation about 40-60 W. Which statement is most accurate?',
      options: [
        'These are device- and operator-dependent note-level examples, not universal prescriptions',
        'These are universal WHO values for all electrosurgical units',
        'Ball-electrode coagulation should always exceed 100 W',
        'Power has no effect on cutting or coagulation',
      ],
      answerIndex: 0,
      explanation:
        'Electrosurgical output depends on the generator, waveform, electrode size, tissue impedance and technique. The handwritten values are source notes, not a universal operating prescription.',
    },
    {
      id: 'm10-q6',
      stem: 'A 36-year-old woman has histologically confirmed AIS and desires future fertility. Which statement is correct?',
      options: [
        'Cryotherapy is preferred because AIS is superficial',
        'Thermal ablation is recommended because it preserves the cervix',
        'A diagnostic excisional procedure is required to exclude invasion and assess margins; cold-knife conization is often preferred',
        'No treatment is needed if the ectocervix appears normal',
      ],
      answerIndex: 2,
      explanation:
        'AIS is glandular disease that may extend into the canal with skip lesions. An intact diagnostic specimen is needed to assess margins and exclude invasive adenocarcinoma. WHO conditionally suggests cold-knife conization over LEEP; ablation is inappropriate.',
    },
    {
      id: 'm10-q7',
      stem: 'A cervical precancer programme adopts WHO technical guidance for thermal ablation. Which parameter set is recommended?',
      options: [
        '60 degrees C for 5 seconds',
        'A minimum of 100 degrees C for 20-30 seconds per application, with overlapping applications covering the entire TZ',
        'Minus 80 degrees C for 3 minutes',
        '150 degrees C for 5 minutes without overlapping applications',
      ],
      answerIndex: 1,
      explanation:
        'WHO thermal-ablation guidance specifies at least 100 degrees C for 20-30 seconds, using as many overlapping applications as needed to cover the whole transformation zone. Cryotherapy uses freezing temperatures instead.',
    },
    {
      id: 'm10-q8',
      stem: 'A patient with CIN3 has a fully visible lesion, but the biopsy raises concern for possible microinvasion. Which statement about CO2 laser vaporization is correct?',
      options: [
        'It is ideal because it produces a specimen with clear margins',
        'It is equivalent to cold-knife conization for histological diagnosis',
        'It is the preferred approach for all glandular lesions',
        'It destroys tissue and provides no specimen; diagnostic excision is required if microinvasion must be excluded',
      ],
      answerIndex: 3,
      explanation:
        'Laser vaporization is ablative and provides no specimen or margin assessment. Suspected microinvasion or glandular disease requires an excisional diagnostic procedure. Laser conization is different because it yields a specimen.',
    },
    {
      id: 'm10-q9',
      stem: 'A 29-year-old woman undergoes a deep repeat cervical cone excision for persistent CIN3. Which complication is most important to discuss regarding future pregnancy?',
      options: [
        'Cervical stenosis and increased risk of insufficiency or preterm birth, related to excision depth and repeat procedures',
        'Ovarian failure',
        'Tubal ectopic pregnancy as an inevitable outcome',
        'Placenta accreta in every subsequent pregnancy',
      ],
      answerIndex: 0,
      explanation:
        'Cervical excision can cause stenosis and increase obstetric risk, particularly preterm birth. Risk relates to the depth and volume removed and to repeat excisions. Ovarian failure and ectopic pregnancy are not consequences of conization.',
    },
    {
      id: 'm10-q10',
      stem: 'A 48-year-old woman had a total hysterectomy for CIN3 two years ago. She asks whether vaginal surveillance can stop because the cervix has been removed. Which answer best reflects ASCCP guidance?',
      options: [
        'Yes; hysterectomy removes all risk of HPV-related lower genital tract disease',
        'No; HPV-based surveillance continues for at least 25 years after CIN2/3, even after hysterectomy',
        'Only a single vaginal cytology test at 10 years is needed',
        'Surveillance is required only if she develops bleeding',
      ],
      answerIndex: 1,
      explanation:
        'High-grade cervical precancer confers ongoing risk of vaginal HSIL/VAIN. ASCCP recommends HPV-based surveillance for at least 25 years after CIN2/3 or AIS, regardless of hysterectomy. Symptom-triggered evaluation does not replace scheduled surveillance.',
    },
  ],
};
