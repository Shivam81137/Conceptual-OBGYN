import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 07 - Transformation Zone (TZ) Anatomy & Diagnostic Colposcopy
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (cancer pdf.pdf, pages 54-69),
 * incorporating the 2026 WHO HPV DNA genotyping guideline, Bhatla et al. 2025
 * FIGO cervical cancer update, ESGO cervical cancer pocket guidelines, the
 * IFCPC/IARC colposcopy terminology and ASCCP risk-based and ECC standards.
 *
 * Covers:
 * - Original vs new SCJ, ectropion, reserve cells and squamous metaplasia
 * - IFCPC transformation-zone types 1, 2 and 3
 * - ASCCP risk-based colposcopy, the 4% immediate CIN3+ threshold and targeted biopsy
 * - Acetic acid 3-5%, Lugol iodine / Schiller test and the IFCPC reporting framework
 * - Reid Colposcopic Index (four parameters, 0-8) vs Swede score (five parameters, 0-10)
 * - Suspicious invasion, ECC indications, WHO 2026 genotyping groups and programme pathways
 * - Golden pearls & examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const TRANSFORMATION_ZONE_COLPOSCOPY_MODULE: StudioModule = {
  id: 'pg-mod-07-transformation-zone-colposcopy',
  track: 'NEET_PG',
  title: 'Transformation Zone Anatomy & Diagnostic Colposcopy',
  shortTitle: 'Transformation Zone & Colposcopy',
  summary:
    'Complete PG clinical revision module on cervical transformation-zone anatomy and diagnostic colposcopy. Features original vs new SCJ, ectropion and squamous metaplasia, IFCPC Type 1/2/3 classification, ASCCP risk-based thresholds, targeted biopsy and ECC, acetic acid and Lugol iodine, the IFCPC reporting framework, Reid index vs Swede score, suspicious invasion, WHO 2026 HPV genotyping groups, 15 active-recall flashcards, and 10 clinical vignette MCQs.',
  tagline:
    'IFCPC TZ types, acetic acid, Lugol iodine, Reid index and Swede score.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'Original vs New SCJ & Transformation Zone',
    'IFCPC Type 1 / 2 / 3 Transformation Zone',
    'Acetic Acid 3-5% & Acetowhite Change',
    'Lugol Iodine / Schiller Test',
    'ASCCP 4% Immediate CIN3+ Threshold',
    'Targeted Biopsy 2-4 & ASCCP ECC',
    'Reid Index 0-8 vs Swede Score 0-10',
    'Suspicion of Invasion / Ablation Contraindication',
    'WHO 2026 HPV Genotyping 1a-1d',
  ],
  sourceTag:
    'Handwritten clinical revision (TZ Anatomy & Diagnostic Colposcopy) • WHO 2026 HPV Genotyping Guideline • Bhatla et al. 2025 FIGO • IFCPC/IARC • ASCCP 2019/2023',
  updatedAtISO: '2026-11-14T06:00:00.000Z',
  notes: [
    {
      id: 'tz-scj-anatomy',
      heading: 'Cervical SCJ Anatomy, Ectropion & Squamous Metaplasia',
      intro:
        'The transformation zone is the dynamic strip of cervix between the original and new squamocolumnar junctions. Understanding how it forms explains why it is the birthplace of almost all cervical precancer, why its position changes with age, and why colposcopic visibility determines management.',
      flow: [
        'Original SCJ · developmental junction between ectocervical stratified squamous and endocervical columnar epithelium',
        'Ectropion · oestrogen at puberty and pregnancy everts columnar epithelium onto the ectocervix',
        'Acid stress · vaginal acidity triggers reserve-cell proliferation beneath the columnar layer',
        'Squamous metaplasia · reserve cells mature into stratified squamous epithelium, creating the new SCJ at its advancing edge',
        'Transformation zone · the tissue between the original and new SCJ; the target of colposcopy and HPV-driven neoplasia',
      ],
      bullets: [
        'Original SCJ: formed in fetal life between ectocervical squamous epithelium and endocervical columnar epithelium; a relatively stable landmark.',
        'New SCJ: the advancing border between newly formed metaplastic squamous epithelium and residual columnar epithelium; its position is not fixed.',
        'Transformation Zone: the region between the original and new SCJ where squamous metaplasia is active and most cervical precancers arise.',
        'Ectropion (ectopy): oestrogen-driven eversion of columnar epithelium at puberty, pregnancy and oral-contraceptive use; appears red and granular.',
        'Reserve Cells: subcolumnar cells that proliferate and differentiate into immature squamous metaplasia, then mature under acid exposure.',
        'HPV Susceptibility: microabrasions expose the basal and reserve-cell compartment, allowing high-risk HPV access to dividing cells.',
        'Age-Related Recession: after menopause the new SCJ commonly recedes into the endocervical canal, so the TZ becomes progressively less visible.',
        'Immature Metaplasia: biologically active and visually difficult to distinguish from dysplasia; it may acetowhiten and remain iodine-negative.',
        'Clinical Consequence: an unseen upper TZ margin is not a completely visualised TZ and may require endocervical assessment or excisional evaluation.',
      ],
      table: {
        head: ['Landmark', 'Definition', 'Behaviour & Clinical Relevance'],
        rows: [
          [
            'Original SCJ',
            'Developmental junction between original ectocervical squamous and endocervical columnar epithelium',
            'Relatively stable anatomical landmark; marks the outer boundary of the TZ.',
          ],
          [
            'New SCJ',
            'Junction between metaplastic squamous epithelium and residual columnar epithelium',
            'Moves with squamous metaplasia and hormonal state; recedes into the canal with age.',
          ],
          [
            'Transformation Zone',
            'Region between the original and new SCJ',
            'Site of most cervical precancers and the great majority of cervical cancers; target of colposcopy.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: original SCJ = original squamocolumnar boundary; new SCJ = advancing metaplastic front; the TZ is the tissue between them.',
        'The SCJ is the inner margin of the TZ, not a synonym for it - reports must state both SCJ visibility and TZ type.',
      ],
      trap: {
        title: 'Examiner trap - using SCJ and TZ interchangeably',
        body: 'The SCJ is a junction; the TZ is the area between the original and new SCJ. A report that says only "SCJ visible" has not described the transformation zone.',
      },
      traps: [
        {
          title: '• Assuming the new SCJ is fixed - it migrates with metaplasia, pregnancy and menopause.',
        },
        {
          title: '• Treating immature metaplasia as dysplasia on visual appearance alone.',
        },
      ],
    },
    {
      id: 'ifcpc-tz-classification',
      heading: 'IFCPC Transformation-Zone Classification: Types 1, 2 & 3',
      intro:
        'The 2011 IFCPC nomenclature grades the transformation zone by whether its upper limit can be seen, not simply by whether it lies in the canal. The type predicts whether the whole lesion is assessable and whether ablative treatment is safe.',
      bullets: [
        'Type 1 TZ: entirely ectocervical; the whole TZ and SCJ are visible, with no endocervical component.',
        'Type 2 TZ: has a partial or complete endocervical component, but the entire TZ and SCJ remain visible with the colposcope.',
        'Type 3 TZ: has an endocervical component whose upper limit is not fully visible; disease may extend beyond the visual field.',
        'Reporting Variables: examination adequacy, SCJ visibility (complete, partial or not visible) and TZ type are recorded separately.',
        'Type 1 Management: full visual assessment usually permits directed biopsy and, if eligible, ablation.',
        'Type 2 Management: the endocervical extension can be assessed colposcopically; ablation may still be possible if fully seen and non-invasive.',
        'Type 3 Management: an unvisualised upper margin may hide disease and usually precludes ablation; endocervical sampling or excision is required by risk.',
        'Reproducibility: standardised TZ typing reduces inconsistent descriptions between colposcopists and improves audit.',
      ],
      table: {
        head: ['IFCPC TZ Type', 'Location', 'Visibility of Upper Limit', 'Clinical Implication'],
        rows: [
          [
            'Type 1',
            'Entirely ectocervical',
            'Fully visible; no endocervical component',
            'Whole TZ assessable; ablation may be appropriate if other criteria are met.',
          ],
          [
            'Type 2',
            'Partial or complete endocervical component',
            'Fully visible with the colposcope',
            'Endocervical extension assessable; ablation possible only if entirely seen and non-invasive.',
          ],
          [
            'Type 3',
            'Partial or complete endocervical component',
            'Upper limit not fully visible',
            'Occult canal disease possible; endocervical assessment or excision; ablation usually inappropriate.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: Type 2 is endocervical but fully visible; Type 3 is endocervical and not fully visible. Visibility, not location alone, defines the type.',
        'Type 3 TZ is the commonest reason a colposcopic examination is inadequate in a postmenopausal woman.',
      ],
      trap: {
        title: 'Examiner trap - calling every endocervical TZ a Type 3',
        body: 'Type 2 also has an endocervical component; it becomes Type 3 only when the upper limit cannot be fully visualised. The distinction is completeness of visibility.',
      },
      traps: [
        {
          title: '• Equating SCJ visibility with TZ type - they are separate report elements.',
        },
        {
          title: '• Assuming a Type 2 TZ automatically requires excision.',
        },
      ],
    },
    {
      id: 'colposcopy-asccp-risk-thresholds',
      heading: 'Colposcopy, ASCCP Risk Thresholds & Targeted Biopsy',
      intro:
        'Colposcopy is a magnified diagnostic examination triggered by an abnormal screen or a clinically suspected lesion. Modern practice is risk-based: current and prior results are combined to estimate immediate CIN3+ risk, and that estimate - not a cytology label alone - selects colposcopy, biopsy, treatment or surveillance.',
      flow: [
        'Current result + prior history · estimate immediate CIN3+ risk from the full screening record',
        'Immediate risk <4% · colposcopy threshold not met; use 5-year risk to set the surveillance interval',
        'Immediate risk 4% to <25% · colposcopy with directed biopsy recommended',
        'Immediate risk 25% to <60% · expedited treatment or colposcopy/biopsy both acceptable in selected nonpregnant patients ≥25 years',
        'Immediate risk ≥60% · expedited treatment preferred after counselling in selected nonpregnant patients ≥25 years',
      ],
      bullets: [
        'Colposcopy Threshold: an immediate CIN3+ risk of at least 4% meets the 2019 ASCCP action threshold for colposcopy.',
        'Expedited-Treatment Window: 25% to <60% immediate risk makes treatment or colposcopy/biopsy acceptable; ≥60% makes expedited treatment preferred.',
        'Low-Risk Branch: immediate risk <4% is managed by 5-year CIN3+ risk - 1-year surveillance at ≥0.55%, 3-year at 0.15-0.55%, routine 5-year screening below 0.15%.',
        'Targeted Biopsy: take at least 2 and up to 4 directed biopsies from all acetowhite areas when the patient is not in the lowest-risk group.',
        'Lowest-Risk Group: less than HSIL cytology, no HPV16/18, a completely normal colposcopic impression and a fully visualised SCJ; random biopsy is not recommended.',
        'Negative Impression: a normal-looking ectocervix does not exclude endocervical disease when the SCJ is not fully visible or the screening history is high risk.',
        'Special Populations: pregnancy, age under 25, immunosuppression, prior treatment, glandular abnormality and suspected cancer follow dedicated pathways; never use expedited treatment in pregnancy.',
        'Documentation: record adequacy, SCJ visibility, TZ type, lesion site and extent, impression and the sampling performed.',
      ],
      table: {
        head: ['Immediate CIN3+ Risk', 'ASCCP Action', 'Comment'],
        rows: [
          [
            '<4%',
            'No colposcopy threshold; use 5-year risk',
            '1-year surveillance if 5-year risk ≥0.55%; 3-year if 0.15-<0.55%; 5-year screening if <0.15%.',
          ],
          [
            '4% to <25%',
            'Colposcopy with biopsy',
            'The standard diagnostic band; sample all acetowhite areas.',
          ],
          [
            '25% to <60%',
            'Expedited treatment or colposcopy/biopsy',
            'Either is acceptable in selected nonpregnant patients aged ≥25 years.',
          ],
          [
            '≥60%',
            'Expedited treatment preferred',
            'After counselling; not during pregnancy.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: the 2019 ASCCP colposcopy threshold is an immediate CIN3+ risk of ≥4%, calculated from current plus prior results.',
        'At least 2 and up to 4 targeted biopsies are taken from acetowhite areas in patients who are not in the narrow lowest-risk group.',
      ],
      trap: {
        title: 'Examiner trap - treating a low-grade cytology label as low risk',
        body: 'The same ASC-US or LSIL result carries different risk with HPV16/18 positivity, persistence or prior high-grade disease. Risk is calculated from the whole history, not the cytology label alone.',
      },
      traps: [
        {
          title: '• Forgetting that a negative colposcopic impression does not neutralise a high-risk HPV/cytology history.',
        },
        {
          title: '• Applying U.S. ASCCP thresholds as stand-alone rules to every national programme.',
        },
      ],
    },
    {
      id: 'colposcopic-technique-acetic-lugol',
      heading: 'Stepwise Colposcopic Technique: Acetic Acid & Lugol Iodine',
      intro:
        'A reproducible colposcopy follows a fixed sequence: inspect, clear the field, grade the TZ, study the vessels, apply acetic acid, then use iodine as an adjunct. Each step answers a different question, and no single appearance is diagnostic on its own.',
      flow: [
        'Prepare · review indication, HPV genotype, cytology and history; consent; speculum examination',
        'Inspect · clear mucus and blood with saline; examine cervix, fornices and visible lower genital tract',
        'Assess · record adequacy, SCJ visibility and TZ type; study vessels with a green filter',
        'Acetic acid · apply 3-5% freshly prepared solution and reassess after about one minute',
        'Iodine · apply Lugol solution; record mahogany-brown uptake versus yellow/patchy non-uptake',
        'Sample · map the lesion, take directed biopsies and perform ECC when indicated and not pregnant',
      ],
      bullets: [
        'Acetic Acid Concentration: 3-5%, freshly prepared, applied to the cervix and reassessed after approximately one minute.',
        'Mechanism: reversible protein coagulation and altered light scattering in cells with increased nuclear density produce acetowhitening.',
        'High-Grade Whitening: dense, opaque, rapidly appearing, well-demarcated and persistent change suggests HSIL.',
        'Low-Grade Whitening: thin, translucent, faint or poorly demarcated change is less concerning but still requires risk-based sampling.',
        'Green Filter: applied before acetic acid to accentuate the vascular pattern and improve recognition of punctation and mosaic.',
        'Lugol Iodine (Schiller Test): iodine binds glycogen in mature squamous epithelium, producing mahogany-brown staining.',
        'Iodine-Negative Epithelium: columnar epithelium, immature metaplasia, atrophy, inflammation and dysplasia may all remain yellow or mustard-coloured.',
        'Specificity Caveat: iodine non-uptake outlines an abnormal area but cannot diagnose CIN or determine grade; always correlate with acetowhitening, vessels, margins and risk.',
        'Full TZ Inspection: after acetic acid, inspect the entire TZ and the upper lesion margin, not just the most obvious patch.',
      ],
      table: {
        head: ['Test', 'Mechanism', 'Positive / Concerning Finding', 'Limitation'],
        rows: [
          [
            '3-5% Acetic acid',
            'Protein coagulation and altered light scattering in nuclei-dense cells',
            'Dense, opaque, persistent, sharply marginated acetowhite change',
            'Metaplasia and inflammation also whiten; not specific for CIN.',
          ],
          [
            'Lugol iodine (Schiller)',
            'Iodine binds glycogen in mature squamous epithelium',
            'Mahogany-brown uptake is normal; distinct yellow non-uptake outlines abnormal epithelium',
            'Non-uptake also occurs in immature metaplasia, atrophy, columnar epithelium and inflammation.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: judge the quality and persistence of acetowhitening, not simply whether a patch turns white.',
        'Mature glycogenated squamous epithelium stains mahogany-brown with Lugol iodine; iodine-negative is not synonymous with CIN.',
      ],
      trap: {
        title: 'Examiner trap - diagnosing CIN from an iodine-negative area',
        body: 'Immature metaplasia, atrophy and inflammation remain iodine-negative without dysplasia. Iodine staining alone cannot diagnose CIN or assign a grade.',
      },
    },
    {
      id: 'ifcpc-reporting-lesion-grading',
      heading: 'IFCPC Reporting Framework & Minor vs Major Lesion Grading',
      intro:
        'The IFCPC report converts a visual examination into a structured, reproducible record. It separates what was seen (normal, abnormal, suspicious for invasion) from how abnormal it looked (Grade 1/minor versus Grade 2/major) and from whether the examination was adequate.',
      bullets: [
        'General Assessment: state whether the examination is adequate or inadequate and, if inadequate, why - bleeding, inflammation, scarring, atrophy or stenosis.',
        'SCJ and TZ: record SCJ visibility as complete, partial or not visible, then assign TZ type 1, 2 or 3.',
        'Normal Findings: mature squamous, atrophic squamous, columnar/ectopy, metaplastic squamous, Nabothian cysts, crypt openings and deciduosis in pregnancy.',
        'Abnormal Findings: record clock-face position, quadrants involved, percentage of cervix, and whether the lesion lies inside or outside the TZ.',
        'Grade 1 / Minor: thin acetowhite epithelium, fine mosaic, fine punctation and irregular or geographic borders.',
        'Grade 2 / Major: dense acetowhite epithelium, coarse mosaic or punctation, sharp borders, inner border sign, ridge sign and cuffed gland openings.',
        'Suspicious for Invasion: atypical or fragile vessels, irregular or exophytic surface, ulceration, necrosis and gross tumour.',
        'Miscellaneous: condyloma, polyp, inflammation, stenosis, congenital anomaly, post-treatment change and endometriosis are recorded separately.',
        'Photography: digital images aid comparison and audit but require consent, secure storage and privacy safeguards.',
      ],
      table: {
        head: ['Category', 'Colposcopic Features', 'Interpretation'],
        rows: [
          [
            'Grade 1 / minor',
            'Thin or translucent acetowhite epithelium; fine mosaic or punctation; irregular/geographic border',
            'Lower probability of high-grade disease; biopsy decision still depends on overall risk.',
          ],
          [
            'Grade 2 / major',
            'Dense opaque acetowhite; coarse mosaic/punctation; sharp border; inner border or ridge sign; cuffed gland openings',
            'Higher suspicion for HSIL/CIN2+; directed biopsy required.',
          ],
          [
            'Suspicious for invasion',
            'Atypical/fragile vessels; irregular or exophytic surface; ulceration; necrosis; gross tumour',
            'Biopsy and cancer-pathway referral; ablation is inappropriate.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: Grade 1 is thin, fine and geographic; Grade 2 is dense, coarse and sharply bordered - the descriptors move together.',
        'Atypia of vessels, ulceration, necrosis or an exophytic mass overrides any colposcopic score and mandates biopsy and referral.',
      ],
      trap: {
        title: 'Examiner trap - omitting examination adequacy from the report',
        body: 'An inadequate examination is a distinct finding, not a normal one. If bleeding, stenosis or scarring prevents full assessment, state it and act on the unvisualised risk.',
      },
      traps: [
        {
          title: '• Recording only the lesion and not its clock position, quadrants and relationship to the TZ.',
        },
        {
          title: '• Labelling metaplasia or atrophy as CIN because it acetowhitens.',
        },
      ],
    },
    {
      id: 'reid-colposcopic-index',
      heading: 'Reid Colposcopic Index: Four Parameters, 0-8',
      intro:
        'The Reid Colposcopic Index turns a visual impression into a semi-quantitative score. Four criteria - margin/surface, colour, vessels and iodine uptake - are each scored 0, 1 or 2, giving a total from 0 to 8 that estimates the probability of high-grade disease.',
      bullets: [
        'Criterion 1 - Margin/Surface: 0 = condylomatous/micropapillary, indistinct or geographic; 1 = regular, smooth, clearly defined; 2 = rolled/peeling edge or sharp internal border.',
        'Criterion 2 - Colour: 0 = shiny, snow-white, faint or transient; 1 = intermediate off-white or grey-white; 2 = dull, dense, oyster-grey or opaque persistent white.',
        'Criterion 3 - Vessels: 0 = fine regular vessels, fine punctation or mosaic; 1 = no clearly visible surface vessels; 2 = coarse punctation/mosaic with dilated vessels and wide intercapillary distance.',
        'Criterion 4 - Iodine: 0 = uniform mahogany-brown or an otherwise clearly low-grade non-staining area; 1 = partial or patchy uptake; 2 = distinct mustard-yellow non-uptake with other high-grade features.',
        'Total Score: 0-8; teaching bands are 0-2 low grade, 3-5 intermediate and 6-8 high grade, though published tables vary slightly.',
        'Lesion Size: not a Reid parameter; adding it is what distinguishes the Swede score from the classic Reid index.',
        'Interpretation: a higher score raises the probability of CIN2/3 and helps choose which area to biopsy, but histology remains decisive.',
      ],
      table: {
        head: ['RCI Criterion', '0 Points', '1 Point', '2 Points'],
        rows: [
          [
            'Margin / surface',
            'Condylomatous/micropapillary, indistinct or geographic border',
            'Regular lesion with smooth, clearly defined outline',
            'Rolled/peeling edge or sharp internal border',
          ],
          [
            'Colour',
            'Shiny snow-white, faint or transient whitening',
            'Intermediate off-white or grey-white',
            'Dull, dense, oyster-grey, opaque persistent white',
          ],
          [
            'Vessels',
            'Fine regular vessels, fine punctation or mosaic',
            'No clearly visible surface vessels',
            'Coarse punctation/mosaic, dilated vessels, wide intercapillary distance',
          ],
          [
            'Iodine uptake',
            'Uniform mahogany-brown or clearly low-grade non-uptake',
            'Partial, patchy or variegated uptake',
            'Distinct mustard-yellow non-uptake with other high-grade features',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: RCI = margin + colour + vessels + iodine; four parameters, each 0-2, maximum 8. Lesion size is not included.',
        'A high RCI supports suspicion of high-grade disease but cannot establish CIN2 or CIN3 without histology.',
      ],
      trap: {
        title: 'Examiner trap - using a low RCI to overrule a high-risk history',
        body: 'A low score must not neutralise an unvisualised TZ, a high-grade glandular result, HPV16/18 positivity or a lesion suspicious for invasion. The score is an aid, not a verdict.',
      },
    },
    {
      id: 'swede-score-and-invasion',
      heading: 'Swede Score, Lesion Size & Suspicion of Invasion',
      intro:
        'The Swede score extends the Reid concept by adding lesion size, producing a five-parameter, 0-10 scale. It was designed for training and standardised communication, and it is most useful for deciding which lesion to biopsy - never for deciding treatment on its own.',
      bullets: [
        'Parameter 1 - Acetowhite Density: 0 = none/transparent; 1 = thin milky or shady; 2 = distinct dense opaque stearin-like white.',
        'Parameter 2 - Margin/Surface: 0 = no clear or diffuse margin; 1 = sharp but irregular, jagged or geographic with satellites; 2 = sharp even border with surface-level difference or cuffing.',
        'Parameter 3 - Vessels: 0 = fine regular vessels; 1 = vessels absent/not visible; 2 = coarse or atypical vessels.',
        'Parameter 4 - Lesion Size: 0 = <5 mm; 1 = 5-15 mm or about two quadrants; 2 = >15 mm, three to four quadrants, or undefined endocervical extent.',
        'Parameter 5 - Iodine: 0 = brown staining; 1 = faint or patchy yellow; 2 = distinct yellow non-staining area.',
        'Total and Bands: 0-10; IARC teaching bands are 0-4 normal/CIN1, 5-6 CIN2/CIN3 and 7-10 CIN3/suspected cancer.',
        'Swede versus Reid: Swede adds lesion size and uses a different vascular convention; absent vessels score 1, coarse/atypical vessels score 2.',
        'Decision Limits: age, HPV/cytology risk, TZ visibility, pregnancy, lesion location and suspicion of invasion remain essential alongside the score.',
        'Invasion Red Flags: atypical/fragile vessels, contact bleeding, irregular or exophytic surface, ulceration, necrosis and gross tumour require biopsy and referral.',
      ],
      table: {
        head: ['Feature', 'Reid Colposcopic Index', 'Swede Score'],
        rows: [
          [
            'Criteria',
            'Margin/surface, colour, vessels, iodine',
            'Acetowhite density, margin/surface, vessels, lesion size, iodine',
          ],
          ['Number of parameters', 'Four', 'Five'],
          ['Maximum score', '8', '10'],
          [
            'Lesion size',
            'Not included',
            'Included (0 = <5 mm; 1 = 5-15 mm; 2 = >15 mm or undefined extent)',
          ],
          [
            'Teaching bands',
            '0-2 low grade; 3-5 intermediate; 6-8 high grade',
            '0-4 normal/CIN1; 5-6 CIN2/CIN3; 7-10 CIN3/suspected cancer',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: Swede = Reid + lesion size, with five parameters and a maximum of 10; Reid has four parameters and a maximum of 8.',
        'In the IARC Swede table, absent vessels score 1 and coarse/atypical vessels score 2 - a different convention from the Reid vascular criterion.',
      ],
      trap: {
        title: 'Examiner trap - treating a high Swede score as a histological diagnosis',
        body: 'A score of 7-10 raises suspicion of CIN3 or cancer but cannot confirm it. Suspicious invasion still requires directed biopsy and specialist referral, not ablation.',
      },
      traps: [
        {
          title: '• Adding lesion size to the classic Reid index - it belongs to the Swede score.',
        },
        {
          title: '• Using the Swede score alone to justify treatment without histology or risk context.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'TZ = the area between the original and new SCJ; most cervical precancers arise here.',
        'Original SCJ = developmental squamocolumnar boundary; new SCJ = advancing edge of squamous metaplasia.',
        'Ectropion is oestrogen-driven eversion of columnar epithelium at puberty and pregnancy.',
        'Reserve cells beneath columnar epithelium proliferate into immature metaplasia and then mature squamous epithelium.',
        'Type 1 TZ is entirely ectocervical and fully visible.',
        'Type 2 TZ has an endocervical component but is fully visible.',
        'Type 3 TZ has an endocervical component whose upper limit is not fully visible.',
        'With age and menopause the new SCJ commonly recedes into the endocervical canal.',
        'Acetic acid 3-5% is assessed after about one minute.',
        'Dense, opaque and persistent acetowhite change is more concerning for HSIL than faint translucent whitening.',
        'Mature glycogenated squamous epithelium stains mahogany-brown with Lugol iodine.',
        'Iodine-negative areas are not specific for CIN; metaplasia, atrophy and columnar epithelium also fail to stain.',
        'IFCPC Grade 1/minor = thin acetowhite, fine mosaic/punctation and geographic borders.',
        'IFCPC Grade 2/major = dense acetowhite, coarse mosaic/punctation, sharp borders, inner border/ridge sign and cuffed glands.',
        'Atypical vessels, ulceration, necrosis and exophytic growth suggest invasion and mandate biopsy and referral.',
        'ASCCP 2019 colposcopy threshold = immediate CIN3+ risk ≥4%.',
        'ASCCP targeted biopsy = at least 2 and up to 4 biopsies from acetowhite areas in patients not at lowest risk.',
        'ECC is recommended for high-grade cytology, HPV16/18, positive p16/Ki-67 dual stain, prior treatment, CIN2 observation and an unvisualised SCJ.',
        'ECC is preferred at age ≥40 years and unacceptable in pregnancy.',
        'RCI has four parameters and a maximum of 8; Swede has five parameters including lesion size and a maximum of 10.',
        'WHO 2026 groups: 1a = HPV16; 1b = HPV18/45; 1c = HPV31/33/35/52/58; 1d = HPV39/51/56/59.',
        'High programme follow-up capacity = ≥60% completion at every step of the care continuum.',
      ],
      traps: [
        {
          title: '• Calling a Type 2 TZ a Type 3 - Type 2 remains fully visible.',
        },
        {
          title: '• Using SCJ visibility and TZ type as if they were the same report element.',
        },
        {
          title: '• Diagnosing CIN from an iodine-negative area alone.',
        },
        {
          title: '• Believing a high RCI or Swede score replaces biopsy.',
        },
        {
          title: '• Adding lesion size to the classic Reid index instead of the Swede score.',
        },
        {
          title: '• Ablating a lesion with atypical vessels, ulceration, necrosis or exophytic growth.',
        },
        {
          title: '• Omitting ECC when high-grade cytology or HPV16/18 coexists with a modest ectocervical impression.',
        },
        {
          title: '• Performing ECC during pregnancy - it is unacceptable.',
        },
        {
          title: '• Letting a negative colposcopic impression neutralise a high-risk HPV/cytology history.',
        },
        {
          title: '• Treating WHO genotype groups as individual histological diagnoses rather than programme pathways.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm7-f1',
      front: 'Differentiate the original SCJ from the new SCJ.',
      back: 'Original SCJ = developmental junction between ectocervical squamous and endocervical columnar epithelium. New SCJ = advancing border between metaplastic squamous and residual columnar epithelium. The TZ lies between them.',
    },
    {
      id: 'm7-f2',
      front: 'What is the cervical transformation zone and why is it important?',
      back: 'The area between the original and new SCJ. Squamous metaplasia occurs here, so most cervical precancers and the great majority of cervical cancers arise in or near this zone.',
    },
    {
      id: 'm7-f3',
      front: 'What defines an IFCPC Type 1 transformation zone?',
      back: 'An entirely ectocervical TZ with the whole TZ and SCJ visible, and no endocervical component.',
    },
    {
      id: 'm7-f4',
      front: 'What defines an IFCPC Type 2 transformation zone?',
      back: 'The TZ has an endocervical component, but the entire TZ and SCJ are still fully visible with the colposcope.',
    },
    {
      id: 'm7-f5',
      front: 'What defines an IFCPC Type 3 transformation zone?',
      back: 'The TZ extends into the endocervical canal and its upper limit is not fully visible; occult endocervical disease may escape ectocervical inspection.',
    },
    {
      id: 'm7-f6',
      front: 'What happens to the SCJ and TZ with increasing age and menopause?',
      back: 'The new SCJ commonly recedes into the endocervical canal after menopause, making a Type 3 TZ more likely and endocervical assessment more often necessary.',
    },
    {
      id: 'm7-f7',
      front: 'What concentration of acetic acid is used in colposcopy and when is the response assessed?',
      back: 'Apply 3-5% acetic acid and reassess after about one minute. Dense, opaque, persistent acetowhitening is more concerning for high-grade disease than faint, translucent whitening.',
    },
    {
      id: 'm7-f8',
      front: 'Why does normal mature squamous epithelium stain brown with Lugol iodine?',
      back: 'Mature glycogen-rich squamous epithelium takes up iodine and stains mahogany-brown. Columnar, immature metaplastic, atrophic or dysplastic epithelium may stay yellow; non-uptake is not specific for CIN.',
    },
    {
      id: 'm7-f9',
      front: 'Name the IFCPC major (Grade 2) colposcopic features.',
      back: 'Dense acetowhite epithelium, coarse mosaic/punctation, sharp borders, inner border or ridge sign and cuffed gland openings. Atypical vessels, ulceration, necrosis and exophytic growth suggest invasion.',
    },
    {
      id: 'm7-f10',
      front: 'What immediate CIN3+ risk triggers colposcopy in the 2019 ASCCP framework?',
      back: 'An immediate CIN3+ risk of at least 4%. Risk integrates the current result with prior HPV/cytology, histology and treatment history - not a cytology label alone.',
    },
    {
      id: 'm7-f11',
      front: 'How many targeted biopsies are recommended from acetowhite areas when the patient is not at lowest risk?',
      back: 'At least 2 and up to 4 targeted biopsies from all acetowhite areas to improve CIN2+ detection. Random biopsies are not advised in the narrow lowest-risk group.',
    },
    {
      id: 'm7-f12',
      front: 'List the key ASCCP indications for endocervical curettage at colposcopy.',
      back: 'HSIL/ASC-H/AGC/carcinoma cytology, HPV16/18, positive p16/Ki-67 dual stain, prior precancer treatment, CIN2 observation and an unvisualised SCJ. Preferred at age ≥40; unacceptable in pregnancy.',
    },
    {
      id: 'm7-f13',
      front: 'What are the four parameters and maximum score of the Reid Colposcopic Index?',
      back: 'Margin/surface, colour, vessels and iodine uptake; each scores 0-2, total 0-8. Higher scores suggest higher-grade disease, but the index never replaces directed biopsy.',
    },
    {
      id: 'm7-f14',
      front: 'What distinguishes the Swede score from the Reid index?',
      back: 'Five parameters - acetowhite density, margin/surface, vessels, lesion size and iodine uptake - each 0-2, total 0-10. Lesion size is the feature absent from the Reid index.',
    },
    {
      id: 'm7-f15',
      front: 'Recall the WHO 2026 extended HPV genotype groups.',
      back: '1a = HPV16; 1b = HPV18/45; 1c = HPV31/33/35/52/58; 1d = HPV39/51/56/59. Pathways depend on programme follow-up and treatment capacity.',
    },
  ],

  mcqs: [
    {
      id: 'm7-q1',
      stem: 'A 24-year-old woman undergoes colposcopy for persistent high-risk HPV. The entire transformation zone is seen on the ectocervix and no portion extends into the canal. Which IFCPC transformation-zone type is present?',
      options: ['Type 1', 'Type 2', 'Type 3', 'Unsatisfactory by definition'],
      answerIndex: 0,
      explanation:
        'Type 1 is entirely ectocervical and fully visible. Type 2 has an endocervical component but remains fully visible. Type 3 has an endocervical component with an unseen upper limit.',
    },
    {
      id: 'm7-q2',
      stem: 'A 39-year-old patient has an endocervical component of the transformation zone. The entire SCJ and upper margin are visible with an endocervical speculum. What is the transformation-zone type?',
      options: ['Type 1', 'Type 2', 'Type 3', 'Cannot be classified if any part is endocervical'],
      answerIndex: 1,
      explanation:
        'Type 2 is partly or fully endocervical but completely visible. Endocervical location alone does not make the TZ Type 3; Type 3 requires an upper limit that is not fully visualised.',
    },
    {
      id: 'm7-q3',
      stem: 'A 56-year-old postmenopausal woman has an SCJ that has receded into the canal and cannot be completely visualised. Which statement is most accurate?',
      options: [
        'This is a Type 1 TZ because the ectocervix is visible',
        'This is a Type 2 TZ because every endocervical TZ is Type 2',
        'This is a Type 3 TZ; endocervical disease may not be fully assessed visually',
        'The SCJ is unrelated to TZ classification',
      ],
      answerIndex: 2,
      explanation:
        'Type 3 describes an endocervical TZ whose upper limit is not fully visible. The SCJ commonly recedes into the canal with age and menopause, so endocervical assessment may be indicated by risk.',
    },
    {
      id: 'm7-q4',
      stem: 'During colposcopy, a lesion becomes dense, opaque white and remains acetowhite after one minute. Which interpretation is most appropriate?',
      options: [
        'This is diagnostic of invasive carcinoma',
        'It excludes CIN3',
        'Acetowhitening is unrelated to nuclear density',
        'It is more suspicious for high-grade disease than a faint, transient translucent patch',
      ],
      answerIndex: 3,
      explanation:
        'Dense, opaque and persistent whitening reflects increased nuclear density and is more concerning for high-grade lesions. It is not diagnostic by itself; directed biopsy is required according to risk.',
    },
    {
      id: 'm7-q5',
      stem: 'A yellow, iodine-negative area is seen after Lugol iodine application. Which statement is correct?',
      options: [
        'Iodine-negative staining can occur in dysplasia, immature metaplasia, columnar epithelium and atrophy',
        'All iodine-negative areas are CIN2+',
        'Mature glycogenated squamous epithelium is iodine-negative',
        'Iodine staining alone determines histological grade',
      ],
      answerIndex: 0,
      explanation:
        'Mature glycogen-rich squamous epithelium stains brown. Other epithelial types or abnormal epithelium may remain yellow, so non-uptake is nonspecific and must be correlated with the rest of the colposcopic examination.',
    },
    {
      id: 'm7-q6',
      stem: 'A nonpregnant 32-year-old patient has an estimated immediate CIN3+ risk of 5% based on her current test and screening history. Under the 2019 ASCCP framework, which action threshold has been reached?',
      options: [
        'Routine 5-year screening',
        '3-year surveillance',
        'Colposcopy with biopsy',
        'Immediate hysterectomy',
      ],
      answerIndex: 2,
      explanation:
        'Immediate CIN3+ risk ≥4% reaches the ASCCP colposcopy threshold. A risk of 5% is below the 25% band where expedited treatment becomes acceptable, and far below the ≥60% preferred threshold.',
    },
    {
      id: 'm7-q7',
      stem: 'A 44-year-old patient is referred for colposcopy with HSIL cytology. The SCJ is not completely visible. She is not pregnant. Which additional assessment is recommended by ASCCP ECC guidance?',
      options: [
        'No sampling because the ectocervix looks normal',
        'Endocervical curettage',
        'Repeat cytology only after five years',
        'Ablation without histology',
      ],
      answerIndex: 1,
      explanation:
        'ECC is recommended for high-grade cytology and when the SCJ is not fully visualised; it is also preferred at age ≥40 years. The canal may harbour disease not visible ectocervically.',
    },
    {
      id: 'm7-q8',
      stem: 'A pregnant patient with abnormal cytology undergoes colposcopy. Which statement regarding ECC is correct?',
      options: [
        'ECC is mandatory in every pregnant patient',
        'ECC is acceptable if acetic acid is not used',
        'ECC is required before any directed biopsy',
        'ECC is unacceptable in pregnancy',
      ],
      answerIndex: 3,
      explanation:
        'ASCCP ECC guidance states that ECC is unacceptable in pregnancy because of potential injury to membranes or placenta and pregnancy loss. Colposcopy-directed biopsy may still be considered when indicated.',
    },
    {
      id: 'm7-q9',
      stem: 'A trainee calculates a score using acetowhite density, margin/surface, vessels, lesion size and iodine uptake. Which scoring system is being used?',
      options: ['Reid Colposcopic Index', 'Swede score', 'FIGO staging', 'Bethesda cytology score'],
      answerIndex: 1,
      explanation:
        'The Swede score has five parameters and includes lesion size. The classic Reid index has four parameters - margin/surface, colour, vessels and iodine uptake - with a total of 0-8.',
    },
    {
      id: 'm7-q10',
      stem: 'A woman with HPV-positive screening has a large irregular exophytic cervical lesion with atypical vessels and contact bleeding. The upper margin cannot be visualised. What is the most appropriate next step?',
      options: [
        'Perform thermal ablation immediately',
        'Assign a low Swede score because the upper margin is not visible',
        'Obtain directed biopsy and refer for evaluation of possible invasive cancer',
        'Repeat HPV testing after five years',
      ],
      answerIndex: 2,
      explanation:
        'Atypical vessels, exophytic growth, contact bleeding and an unvisualised upper margin raise concern for invasion. Ablation is inappropriate when invasion is suspected; biopsy and specialist referral are required.',
    },
  ],
};
