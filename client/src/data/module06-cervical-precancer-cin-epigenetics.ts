import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 06 - Cervical Precancer (CIN), Epigenetics & HPV-Associated Lesions
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision notes (Cervical_Precancer_CIN_Epigenetics_Clinical_Revision.txt),
 * incorporating the 2026 WHO HPV Genotyping Guideline, the 2025 FIGO Cervical Cancer Update (Bhatla et al.),
 * CAP-ASCCP 2012 LAST Consensus Recommendations, and WHO 2021 Screening Framework.
 *
 * Covers:
 * - Richart 3-tier CIN vs LAST 2012 2-tier LSIL/HSIL nomenclature
 * - Productive vs persistent transforming HPV infection (E6/p53, E7/pRB)
 * - Epigenetics & DNMT enzymes (DNMT1 maintenance vs DNMT3A/3B de novo, promoter methylation)
 * - p16 IHC block positivity vs p16/Ki-67 dual-stain cytology triage
 * - WHO 2026 HPV DNA genotyping levels & risk groups (1a, 1b, 1c, 1d)
 * - Screening algorithms based on follow-up capacity (≥60% vs <60%)
 * - Ablation eligibility criteria vs LLETZ/referral, FIGO/WHO 90-70-90 targets
 * - Golden pearls & examiner traps for NEET PG / SS.
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const CERVICAL_PRECANCER_CIN_EPIGENETICS_MODULE: StudioModule = {
  id: 'pg-mod-06-cervical-precancer-cin-epigenetics',
  track: 'NEET_PG',
  title: 'Cervical Precancer (CIN), Epigenetics & HPV-Associated Lesions',
  shortTitle: 'Cervical Precancer & CIN',
  summary:
    'Comprehensive PG clinical revision module on cervical intraepithelial neoplasia (CIN) and HPV carcinogenesis. Features Richart vs LAST 2012 two-tier histology, productive vs transforming HPV E6/E7 pathways, DNMT1/DNMT3A/DNMT3B epigenetics, tissue p16 IHC block positivity vs p16/Ki-67 dual-stain cytology, WHO 2026 HPV DNA genotyping risk groups (1a-1d), high vs low follow-up capacity algorithms, ablation eligibility rules, natural history, 15 active-recall flashcards, and 10 clinical vignette MCQs.',
  tagline:
    'LAST 2012 LSIL/HSIL, p16 IHC block positivity, DNMT epigenetics, WHO 2026 HPV genotyping 1a-1d.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'Richart CIN 1-3 vs LAST 2012 LSIL/HSIL',
    'Productive vs Transforming HPV (E6-p53, E7-pRB)',
    'DNMT1 maintenance / DNMT3A/3B de novo methylation',
    'p16 IHC block positivity / CIN 2 triage trap',
    'p16 IHC tissue vs p16/Ki-67 dual-stain cytology',
    'WHO 2026 HPV Genotyping Groups 1a-1d',
    'High (≥60%) vs Low (<60%) follow-up capacity',
    'Ablation eligibility vs LLETZ / WHO 90-70-90',
  ],
  sourceTag:
    'Handwritten clinical revision (Cervical Precancer, CIN & Epigenetics) • WHO 2026 HPV Genotyping Guideline • 2025 FIGO (Bhatla et al.) • CAP-ASCCP 2012 LAST Consensus',
  updatedAtISO: '2026-11-13T06:00:00.000Z',
  notes: [
    {
      id: 'cin-transformation-zone-richart-grading',
      heading: 'Cervical Transformation Zone, CIN Definition & Richart Grading',
      intro:
        'Cervical intraepithelial neoplasia (CIN) describes HPV-associated dysplastic changes in the cervical squamous epithelium, classically arising in the transformation zone around the squamocolumnar junction (SCJ) where columnar epithelium undergoes squamous metaplasia.',
      bullets: [
        'Anatomical Site: The transformation zone is the clinically critical region because HPV-associated cervical precancers arise predominantly here during active squamous metaplasia.',
        'Richart 3-Tier Model: Classifies lesions as CIN 1 (mild dysplasia), CIN 2 (moderate dysplasia), and CIN 3 (severe dysplasia / carcinoma in situ).',
        'CIN 1 (Mild Dysplasia): Atypia confined largely to the lower one-third of the epithelium; koilocytosis present in upper layers; represents productive HPV infection with high spontaneous regression.',
        'CIN 2 (Moderate Dysplasia): Atypia extends into the middle two-thirds of the epithelium; biologically heterogeneous category with poor interobserver and intraobserver reproducibility.',
        'CIN 3 (Severe Dysplasia / CIS): Atypia extends through more than two-thirds up to full epithelial thickness; basement membrane remains intact; true high-grade precursor requiring treatment.',
        'Progression Timeline: Invasive carcinoma takes an estimated 10–12 years to develop from a precursor lesion on average, though individual natural history varies substantially.',
      ],
      table: {
        head: ['Historical Richart Category', 'Approximate Morphology', 'LAST 2012 Terminology', 'Clinical Concept'],
        rows: [
          ['CIN 1', 'Atypia in lower 1/3; koilocytosis present in upper maturing layers', 'LSIL (CIN 1)', 'Productive HPV infection; ~60% regress spontaneously within 2 years.'],
          ['CIN 2', 'Atypia extends into middle 2/3; intermediate/heterogeneous pattern', 'HSIL (CIN 2) if p16 block-positive', 'Biologically equivocal; poor interobserver agreement; candidate for p16 IHC.'],
          ['CIN 3', 'Atypia >2/3 to full thickness; basement membrane intact', 'HSIL (CIN 3)', 'Definite high-grade precursor; treatment generally indicated.'],
        ],
      },
      pearls: [
        'Golden Pearl: CIN 2 is the category with the poorest diagnostic reproducibility between pathologists. This is the primary rationale for using p16 IHC as an ancillary stain.',
        'All dysplastic changes in CIN remain above the intact basement membrane; penetration into stroma defines invasive carcinoma.',
      ],
      trap: {
        title: 'Examiner trap - confusing CIN 2 and CIN 3 progression potential',
        body: 'CIN 2 is heterogeneous and can regress in over 50% of cases (especially in younger women), whereas CIN 3 is a committed high-grade precursor with high persistence (~67%) requiring treatment in non-pregnant patients.',
      },
    },
    {
      id: 'hpv-productive-vs-transforming-last-2012',
      heading: 'Productive vs Transforming HPV Infection & LAST 2012 Terminology',
      intro:
        'The crucial biological distinction in cervical pathology is between transient productive HPV infection and persistent transforming high-risk HPV infection. The 2012 LAST consensus standardises lower anogenital terminology into a unified two-tier system.',
      bullets: [
        'Productive / Transient Infection: Viral replication occurs in maturing squamous cells; associated with low-grade lesions (LSIL / CIN 1); 90% clear spontaneously within 2 years (FIGO 2025).',
        'Persistent Transforming Infection: High-risk HPV (especially 16/18) persists (>6–12 months); high-level E6/E7 oncoprotein expression disrupts host cell-cycle checkpoints.',
        'HPV E6 Oncoprotein: Binds p53 and promotes its ubiquitin-mediated proteasomal degradation, abolishing p53-dependent apoptosis and DNA repair.',
        'HPV E7 Oncoprotein: Binds and functionally inactivates retinoblastoma protein (pRB), releasing E2F transcription factors to drive continuous S-phase entry.',
        'LAST 2012 Two-Tier System: Standardises terminology across lower anogenital sites into LSIL (low-grade squamous intraepithelial lesion) and HSIL (high-grade squamous intraepithelial lesion).',
        'Qualifier Retention: The site-specific intraepithelial neoplasia qualifier may be appended: e.g., LSIL (CIN 1), HSIL (CIN 2), or HSIL (CIN 3).',
      ],
      table: {
        head: ['Feature', 'Productive / Transient HPV Infection', 'Persistent Transforming HPV Infection'],
        rows: [
          ['HPV Behaviour', 'Viral replication in differentiating/maturing cells', 'Persistent high-risk HPV with E6/E7 overexpression'],
          ['Typical Lesion', 'LSIL / CIN 1', 'HSIL / CIN 2–3 and invasive cancer risk'],
          ['Epithelial Maturation', 'Preserved towards upper surface', 'Disrupted; atypia extends through middle/upper layers'],
          ['Cell-Cycle Control', 'Relatively preserved', 'E6–p53 degradation & E7–pRB inactivation'],
          ['p16 IHC Pattern', 'Negative or focal/patchy (non-block)', 'Strong, diffuse, continuous block-positivity'],
          ['Natural History', '90% clearance within 24 months', 'High risk of persistence & malignant transformation'],
        ],
      },
      pearls: [
        'Golden Pearl: High-risk HPV E6 targets p53 for degradation; HPV E7 inactivates pRB releasing E2F.',
        'LAST 2012 unifies cervical, vaginal, vulvar, anal, and penile HPV pre-cancers under two histological tiers: LSIL and HSIL.',
      ],
      trap: {
        title: 'Examiner trap - pairing E6 and E7 targets incorrectly',
        body: 'E6 = p53 degradation (mnemonic: "Six = p53"). E7 = pRB inactivation ("Seven = Rb"). Swapping these is a classic MCQ distractor.',
      },
    },
    {
      id: 'epigenetics-dnmt-promoter-methylation',
      heading: 'Epigenetics & DNMT-Mediated DNA Methylation',
      intro:
        'Epigenetic changes provide an additional layer of carcinogenesis. Aberrant DNA methylation mediated by DNA methyltransferases (DNMTs) leads to promoter hypermethylation and silencing of host tumour-suppressor genes in persistent high-risk HPV infection.',
      bullets: [
        'DNA Methylation: Addition of a methyl group to cytosine in CpG dinucleotides (CpG islands in gene promoters). Hypermethylation silences transcription.',
        'DNMT1 (Maintenance Methyltransferase): Preserves existing DNA methylation patterns during DNA replication.',
        'DNMT3A & DNMT3B (De Novo Methyltransferases): Establish new DNA methylation patterns on unmethylated DNA.',
        'DNMT3L: Regulatory cofactor that lacks catalytic activity; must not be grouped as a catalytic methyltransferase.',
        'HPV Oncoprotein Epigenetic Cross-talk: HPV E7 directly binds and stimulates DNMT1, and upregulates DNMT1 via pRB/E2F signaling. HPV E6 increases DNMT1 activity through p53 degradation.',
        'Host Methylation Biomarkers: Promising triage/monitoring markers (e.g., FAM19A4, miR-124-2, PAX1, CADM1, MAL, EPB41L3). They indicate transforming disease but do not yet replace validated screening/histology.',
      ],
      table: {
        head: ['Enzyme / Factor', 'Primary Biological Function', 'Relevance in Cervical Carcinogenesis'],
        rows: [
          ['DNMT1', 'Maintenance DNA methylation during replication', 'Stimuated by HPV E7 & E6; maintains silencing of host tumour-suppressor genes.'],
          ['DNMT3A', 'De novo DNA methylation', 'Upregulated in HPV-positive lesions; establishes new promoter hypermethylation.'],
          ['DNMT3B', 'De novo DNA methylation', 'Upregulated in HPV-positive lesions; contributes to promoter hypermethylation.'],
          ['DNMT3L', 'Regulatory cofactor without catalytic activity', 'Facilitates DNMT3A/3B function; lacks independent methyltransferase activity.'],
        ],
      },
      pearls: [
        'Golden Pearl: DNMT1 = maintenance methyltransferase; DNMT3A & DNMT3B = de novo methyltransferases.',
        'HPV E7 interacts directly with DNMT1, linking viral oncogene expression to host genome epigenetic silencing.',
      ],
      trap: {
        title: 'Examiner trap - misclassifying DNMT3L',
        body: 'DNMT3L is a regulatory cofactor, NOT a catalytic methyltransferase. Do not list it alongside DNMT1/3A/3B as a functional DNA methylating enzyme.',
      },
    },
    {
      id: 'p16-ihc-ki67-pathology-triage',
      heading: 'p16 IHC, Ki-67 & Pathology Triage (LAST Guidelines)',
      intro:
        'The 2012 CAP-ASCCP LAST consensus defines strict recommendations for p16 immunohistochemistry (IHC) on tissue biopsies. p16 is a surrogate marker for high-risk HPV E7-driven pRB inactivation.',
      bullets: [
        'p16 Mechanism: Inactivation of pRB by E7 releases negative feedback on p16INK4a, leading to marked intracellular accumulation of p16 protein.',
        'Block Positivity Definition: Strong, diffuse, continuous nuclear AND cytoplasmic staining involving the basal layer and extending into at least the lower one-third to one-half of the epithelium.',
        'LAST Approved Indications for p16 IHC:',
        '1. Adjudication of H&E CIN 2 (morphologically equivocal intermediate lesions).',
        '2. Differential diagnosis between HSIL (CIN 2/3) and morphologic mimics (immature squamous metaplasia, atrophy, reparative atypia, tangential sectioning).',
        '3. Disagreement between pathologists when the differential includes a high-grade precancerous lesion.',
        '4. Biopsies with ≤CIN 1 morphology but preceding high-risk cytology (HSIL, ASC-H, ASC-US/HPV16+), to search for a missed focal high-grade lesion.',
        'Contraindications: p16 IHC is NOT recommended routinely for unequivocal negative, unequivocal CIN 1, or unequivocal CIN 3 biopsies.',
        'Critical Distinction — Tissue p16 IHC vs Dual-Stain Cytology: Tissue p16 IHC (LAST) is a histopathological stain on a biopsy. p16/Ki-67 dual-stain cytology is a separate screening/triage liquid cytology assay detecting co-expression of p16 (cell-cycle arrest marker) and Ki-67 (proliferation marker) within the same single cell.',
      ],
      table: {
        head: ['Test / Assay', 'Specimen Type', 'Clinical Role', 'Key Interpretation Rule'],
        rows: [
          ['p16 IHC', 'Tissue biopsy', 'Adjudicate equivocal CIN 2; differentiate HSIL from mimics', 'Strong diffuse block-positive supports HSIL ONLY if H&E morphology is compatible.'],
          ['Ki-67 IHC', 'Tissue biopsy', 'Proliferation marker', 'Suprabasal nuclear staining indicates abnormal proliferation.'],
          ['p16/Ki-67 Dual Stain', 'Liquid cytology', 'Screening / triage biomarker assay', 'Single-cell co-expression indicates deregulated cell cycle.'],
        ],
      },
      pearls: [
        'Golden Pearl: Block-positive p16 supports HSIL ONLY when H&E morphology is compatible with CIN 2 or CIN 3.',
        'Examiner Trap: NEVER upgrade an unequivocal morphologic CIN 1 to HSIL based solely on p16 positivity.',
      ],
      trap: {
        title: 'Examiner trap - overusing p16 IHC on clear CIN 1 or clear CIN 3',
        body: 'p16 IHC is NOT recommended for routine use on unequivocal CIN 1 or CIN 3 biopsies. A positive p16 stain in morphologic CIN 1 does NOT convert it into HSIL.',
      },
    },
    {
      id: 'who-2026-hpv-genotyping-framework',
      heading: 'WHO 2026 HPV DNA Genotyping Framework & Risk Groups',
      intro:
        'The May 2026 WHO guideline provides a major update on using HPV DNA genotyping to risk-stratify HPV-positive women in screening programmes based on follow-up capacity.',
      bullets: [
        'Genotyping Output Levels:',
        '• No Genotyping: Pooled positive/negative result for carcinogenic HPV types.',
        '• Limited Genotyping: Separately identifies HPV 16 and HPV 18 (±45); pools remaining carcinogenic types.',
        '• Extended Genotyping: Identifies HPV 16, 18/45 separately and categorises remaining high-risk types into risk groups.',
        '• Full Genotyping: Reports each individual high-risk type separately.',
        'WHO 2026 Extended-Genotype Risk Groups:',
        '• Group 1a: HPV 16 (highest risk).',
        '• Group 1b: HPV 18 and HPV 45.',
        '• Group 1c: HPV 31, 33, 35, 52, and 58.',
        '• Group 1d: HPV 39, 51, 56, and 59.',
        'Follow-Up Capacity Threshold (60% Rule):',
        '• High Follow-Up Capacity: At least 60% completion at EVERY step of the care continuum (screening follow-up, triage/treatment, post-treatment follow-up).',
        '• Low Follow-Up Capacity: Less than 60% completion at any step (≥40% loss to follow-up).',
        'Programme Recommendations:',
        '• High Follow-Up Capacity + Adequate Ablation: WHO suggests extended or limited genotyping to risk-stratify treatment (e.g., treat Groups 1a/1b/1c and triage 1d).',
        '• Low Follow-Up Capacity: WHO suggests simpler screen-and-treat strategies (e.g., treat all carcinogenic HPV positive women or treat 1a/1b directly) to minimise loss to follow-up.',
        'Women Living with HIV: Start primary HPV DNA screening at age 25 (every 3–5 years). Extended genotyping is NOT specifically recommended for WLHIV due to unassessed evidence.',
      ],
      table: {
        head: ['WHO 2026 Genotype Group', 'High-Risk HPV Types Included', 'Clinical Risk Level & Management Concept'],
        rows: [
          ['Group 1a', 'HPV 16', 'Highest risk; priority for immediate treatment/colposcopy.'],
          ['Group 1b', 'HPV 18, HPV 45', 'High risk; high association with adenocarcinoma (HPV 18/45).'],
          ['Group 1c', 'HPV 31, 33, 35, 52, 58', 'Intermediate-high risk; treat or triage based on capacity.'],
          ['Group 1d', 'HPV 39, 51, 56, 59', 'Lower relative risk among carcinogenic types; candidate for triage or return to routine screen.'],
        ],
      },
      pearls: [
        'Golden Pearl: High follow-up capacity is defined operationally by WHO as ≥60% completion at every single stage of the care pathway.',
        'WHO 2026 Group 1a = 16; Group 1b = 18/45; Group 1c = 31/33/35/52/58; Group 1d = 39/51/56/59.',
      ],
      trap: {
        title: 'Examiner trap - mixing up WHO Group 1c and Group 1d types',
        body: 'Group 1c contains 31, 33, 35, 52, 58. Group 1d contains 39, 51, 56, 59. Do not mix these groups in genotyping triage questions.',
      },
    },
    {
      id: 'ablation-eligibility-natural-history',
      heading: 'Ablation Eligibility, Single-Visit Approaches & Natural History',
      intro:
        'Ablative treatment (thermal ablation or cryotherapy) requires strict visual eligibility evaluation. Ineligible patients must receive excisional treatment (LLETZ/LEEP) or referral.',
      bullets: [
        'Ablation Eligibility Criteria:',
        '1. Entire transformation zone and upper limit of lesion fully visible.',
        '2. Type 1 or Type 2 transformation zone (no endocervical extension beyond reach).',
        '3. No suspicion of invasive or microinvasive carcinoma.',
        '4. Lesion covers <75% of the ectocervix and does not extend onto the vagina.',
        'Ablation Ineligibility Management: If ineligible, perform LLETZ (Large Loop Excision of Transformation Zone) / cone biopsy or refer. Suspected invasive cancer MUST be referred for diagnostic evaluation, NEVER ablated.',
        'WHO 90-70-90 Targets for 2030:',
        '• 90% of girls fully vaccinated with HPV vaccine by age 15.',
        '• 70% of women screened with high-performance test by ages 35 and 45.',
        '• 90% of women identified with cervical disease receive treatment (90% precancer treated, 90% invasive cancer managed).',
        'FIGO 2025 Meta-Analytic Natural History Data:',
        '• CIN 1: ~60% regression, 25% persistence, 11% progression to CIN 2+, ~2% to CIN 3+.',
        '• CIN 2: ~55% regression, 23% persistence, ~19% progression to CIN 3+.',
        '• CIN 3: ~28% regression, ~67% persistence; treatment indicated in non-pregnant women.',
      ],
      table: {
        head: ['Parameter', 'Eligible for Thermal Ablation / Cryotherapy', 'Ineligible for Ablation (Requires LLETZ / Referral)'],
        rows: [
          ['Transformation Zone', 'Type 1 or Type 2 (fully visible SCJ)', 'Type 3 (SCJ extends into endocervical canal)'],
          ['Lesion Extent', 'Covers <75% of ectocervix; no vaginal extension', 'Covers >75% of ectocervix or extends into vagina/endocervix'],
          ['Cancer Suspicion', 'No suspicion of invasive disease', 'Suspected microinvasive or invasive carcinoma → Diagnostic Referral'],
          ['Treatment Modality', 'Thermal ablation or Cryotherapy', 'LLETZ / CKC / Gynecologic Oncology Referral'],
        ],
      },
      pearls: [
        'Golden Pearl: Suspected invasive cervical cancer is an ABSOLUTE CONTRAINDICATION to ablative therapy. Diagnostic biopsy and referral are required.',
        'WHO 90-70-90 targets: 90% vaccinated by 15 y, 70% screened by 35 & 45 y, 90% treated.',
      ],
      trap: {
        title: 'Examiner trap - ablating an endocervical lesion',
        body: 'If the lesion or SCJ extends into the endocervical canal (Type 3 TZ), ablation is contraindicated because the active disease cannot be visually verified or adequately treated. LLETZ/conization is required.',
      },
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'Richart 3-tier: CIN 1 (mild), CIN 2 (moderate), CIN 3 (severe/CIS).',
        'LAST 2012 2-tier: LSIL and HSIL, with optional site-specific qualifier e.g., HSIL (CIN 2).',
        'CIN 2 is the least reproducible histological category, making it the primary indication for p16 IHC.',
        'Transformation zone around the squamocolumnar junction is the primary site for HPV precancers.',
        'High-risk HPV E6 promotes p53 degradation via ubiquitin ligase pathway.',
        'High-risk HPV E7 inactivates pRB, releasing E2F to drive S-phase entry.',
        'HPV E7 directly binds and stimulates DNMT1, linking viral infection to promoter hypermethylation.',
        'DNMT1 maintains DNA methylation; DNMT3A and DNMT3B mediate de novo methylation.',
        'DNMT3L is a regulatory cofactor without catalytic methyltransferase activity.',
        'p16 IHC block positivity = strong, diffuse, continuous nuclear/cytoplasmic staining of basal layer extending ≥1/3 to 1/2 of epithelium.',
        'p16 IHC is recommended to adjudicate morphologic CIN 2, but NOT for routine use on unequivocal CIN 1 or CIN 3.',
        'NEVER upgrade an unequivocal morphologic CIN 1 to HSIL based solely on p16 positivity.',
        'p16 tissue IHC (LAST biopsy adjunct) is distinct from p16/Ki-67 dual-stain cytology (liquid cytology triage assay).',
        'FIGO 2025: ~90% of incident HPV infections clear spontaneously within 2 years.',
        'HPV 16 and 18 cause ~78% of cervical cancers globally.',
        'WHO 2026 Genotype Groups: 1a (16), 1b (18/45), 1c (31/33/35/52/58), 1d (39/51/56/59).',
        'WHO High Follow-Up Capacity = ≥60% completion at every stage of the care continuum.',
        'Visual assessment of SCJ and lesion is mandatory before thermal ablation or cryotherapy.',
        'Invasive cancer suspicion or Type 3 TZ (endocervical extension) prohibits ablation → perform LLETZ or refer.',
        'WHO 2030 targets: 90% vaccinated by 15 y, 70% screened twice (35 & 45 y), 90% treated.',
      ],
      traps: [
        {
          title: '• Upgrading morphologic CIN 1 to HSIL based on p16 positivity alone.',
        },
        {
          title: '• Swapping HPV E6 (p53) and E7 (pRB) targets.',
        },
        {
          title: '• Classifying DNMT3L as a catalytic methyltransferase alongside DNMT1/3A/3B.',
        },
        {
          title: '• Conflating tissue p16 IHC with p16/Ki-67 dual-stain cytology.',
        },
        {
          title: '• Ordering p16 IHC routinely for clear CIN 1 or clear CIN 3 biopsies.',
        },
        {
          title: '• Performing ablation on a Type 3 transformation zone or suspected invasive carcinoma.',
        },
        {
          title: '• Confusing WHO 2026 Extended Genotype Group 1c (31/33/35/52/58) with Group 1d (39/51/56/59).',
        },
        {
          title: '• Assuming 100% of HPV infections lead to CIN 3 (90% clear within 24 months).',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm6-f1',
      front: 'What are the three historical Richart CIN grades and their epithelial thickness extents?',
      back: 'CIN 1 = mild dysplasia (lower 1/3); CIN 2 = moderate dysplasia (middle 2/3); CIN 3 = severe dysplasia / carcinoma in situ (>2/3 to full thickness).',
    },
    {
      id: 'm6-f2',
      front: 'What terminology was recommended by the 2012 CAP-ASCCP LAST consensus?',
      back: 'A two-tier histopathological system: LSIL and HSIL, with optional site-specific qualifiers e.g., LSIL (CIN 1), HSIL (CIN 2), or HSIL (CIN 3).',
    },
    {
      id: 'm6-f3',
      front: 'Which CIN grade exhibits the lowest diagnostic interobserver reproducibility?',
      back: 'CIN 2. Because it is a heterogeneous intermediate category, p16 IHC is recommended to help resolve equivocal cases.',
    },
    {
      id: 'm6-f4',
      front: 'Which host cellular proteins are targeted by high-risk HPV oncoproteins E6 and E7?',
      back: 'E6 promotes p53 degradation via the ubiquitin ligase pathway; E7 binds and inactivates retinoblastoma protein (pRB), releasing E2F.',
    },
    {
      id: 'm6-f5',
      front: 'What are the distinct functions of DNMT1 vs DNMT3A and DNMT3B?',
      back: 'DNMT1 maintains existing DNA methylation patterns after replication; DNMT3A and DNMT3B catalyze de novo methylation.',
    },
    {
      id: 'm6-f6',
      front: 'How does HPV E7 alter host DNA methylation?',
      back: 'HPV E7 directly binds and stimulates DNMT1 activity, and upregulates DNMT1 via pRB/E2F signaling, promoting promoter hypermethylation.',
    },
    {
      id: 'm6-f7',
      front: 'What defines p16 IHC block positivity on a cervical tissue biopsy?',
      back: 'Strong, diffuse, continuous nuclear and cytoplasmic staining involving the basal layer and extending into at least the lower 1/3 to 1/2 of the epithelium.',
    },
    {
      id: 'm6-f8',
      front: 'Can a p16-positive stain upgrade an unequivocal morphologic CIN 1 biopsy to HSIL?',
      back: 'No! LAST explicitly states that p16 positivity alone must NOT upgrade morphologic CIN 1 to HSIL; H&E morphology must be compatible.',
    },
    {
      id: 'm6-f9',
      front: 'What is the key difference between tissue p16 IHC and p16/Ki-67 dual-stain cytology?',
      back: 'Tissue p16 IHC is a histopathology biopsy adjunct for H&E dilemmas; p16/Ki-67 dual-stain cytology is a liquid cytology triage assay detecting single-cell co-expression.',
    },
    {
      id: 'm6-f10',
      front: 'According to the 2025 FIGO update, what proportion of incident HPV infections clear within 2 years?',
      back: 'Approximately 90% clear spontaneously within 24 months. Only ~10% persist beyond 12–24 months.',
    },
    {
      id: 'm6-f11',
      front: 'What are the WHO 2026 Extended-Genotype Risk Groups 1a, 1b, 1c, and 1d?',
      back: 'Group 1a = HPV 16; Group 1b = HPV 18 and 45; Group 1c = HPV 31, 33, 35, 52, 58; Group 1d = HPV 39, 51, 56, 59.',
    },
    {
      id: 'm6-f12',
      front: 'How does WHO 2026 define high follow-up capacity in a screening programme?',
      back: 'At least 60% completion at every single step of the care continuum (screening follow-up, triage/treatment, post-treatment follow-up).',
    },
    {
      id: 'm6-f13',
      front: 'What is an absolute contraindication to thermal ablation or cryotherapy for cervical precancer?',
      back: 'Suspected microinvasive/invasive carcinoma, or an endocervical/Type 3 transformation zone where the lesion is not fully visible.',
    },
    {
      id: 'm6-f14',
      front: 'What management is required if a patient is ineligible for ablative treatment?',
      back: 'Excisional treatment (LLETZ / LEEP or cold knife conization) or formal diagnostic referral to gynecologic oncology.',
    },
    {
      id: 'm6-f15',
      front: 'What are the three WHO 2030 elimination targets (90-70-90)?',
      back: '90% of girls fully vaccinated by age 15; 70% of women screened by 35 and 45 years; 90% of identified cervical lesions treated/managed.',
    },
  ],

  mcqs: [
    {
      id: 'm6-q1',
      stem: 'A cervical punch biopsy demonstrates dysplastic cell proliferation, nuclear atypia, and loss of polarity limited to the lower one-third of the squamous epithelium. Upper epithelial layers show koilocytotic vacuolation. How is this lesion classified under the 2012 LAST consensus?',
      options: ['LSIL (CIN 1)', 'HSIL (CIN 2)', 'HSIL (CIN 3)', 'Invasive squamous cell carcinoma'],
      answerIndex: 0,
      explanation:
        'Atypia confined to the lower third with upper-layer koilocytosis corresponds to Richart CIN 1, which maps to LSIL (CIN 1) in the 2012 LAST two-tier system. CIN 2 and 3 represent HSIL.',
    },
    {
      id: 'm6-q2',
      stem: 'A pathologist evaluates a cervical biopsy with morphologic features suggestive of CIN 2. p16 IHC displays strong, continuous, diffuse nuclear and cytoplasmic staining from the basal layer through the middle third of the epithelium. What is the correct interpretation under LAST guidelines?',
      options: [
        'Negative result because p16 is a tumour suppressor',
        'HSIL (CIN 2), as block p16 positivity supports a transforming lesion when morphology is compatible',
        'LSIL, because p16 positivity is present in all productive HPV infections',
        'Invasive carcinoma',
      ],
      answerIndex: 1,
      explanation:
        'Under LAST 2012, strong diffuse block-positive p16 in a morphologically compatible CIN 2 biopsy supports classification as a transforming high-grade lesion, HSIL (CIN 2). p16 does not establish stromal invasion.',
    },
    {
      id: 'm6-q3',
      stem: 'A cervical biopsy shows unequivocal H&E features of CIN 1. p16 IHC is performed and shows focal staining. What is the correct diagnostic management under LAST 2012 guidelines?',
      options: [
        'Upgrade the diagnosis to HSIL (CIN 2) based on p16 positivity',
        'Diagnose invasive carcinoma',
        'Retain the morphologic CIN 1 (LSIL) diagnosis; p16 must not upgrade an unequivocal CIN 1',
        'Order DNMT3L gene sequencing',
      ],
      answerIndex: 2,
      explanation:
        'LAST 2012 explicitly warns that p16 positivity alone must NOT upgrade an unequivocal morphologic CIN 1 to HSIL. H&E architecture remains the primary determinant.',
    },
    {
      id: 'm6-q4',
      stem: 'During high-risk HPV carcinogenesis, the viral E7 oncoprotein promotes unconstrained cell-cycle progression through which specific mechanism?',
      options: [
        'Binding and inactivating pRB, causing release of E2F transcription factors',
        'Promoting p53 degradation via E6-AP ubiquitin ligase',
        'Inhibiting DNMT1 maintenance methylation',
        'Directly activating p21 cyclin-dependent kinase inhibitor',
      ],
      answerIndex: 0,
      explanation:
        'HPV E7 binds and inactivates retinoblastoma protein (pRB), causing release of E2F transcription factors to drive S-phase entry. HPV E6 targets p53 for degradation.',
    },
    {
      id: 'm6-q5',
      stem: 'In epigenetic regulation of host tumour-suppressor genes, which enzyme is primarily responsible for maintaining DNA methylation patterns during DNA replication?',
      options: ['DNMT1', 'DNMT3A', 'DNMT3B', 'DNMT3L'],
      answerIndex: 0,
      explanation:
        'DNMT1 is the maintenance DNA methyltransferase. DNMT3A and DNMT3B mediate de novo methylation. DNMT3L is a non-catalytic regulatory cofactor.',
    },
    {
      id: 'm6-q6',
      stem: 'A 24-year-old asymptomatic woman tests positive for high-risk HPV on screening. According to the 2025 FIGO update, what is the expected 2-year natural history of incident HPV infection in this age group?',
      options: [
        '100% will progress to CIN 3',
        'Approximately 90% of incident infections will clear spontaneously within 2 years',
        'All patients require immediate cryotherapy',
        'Persistent infection is diagnosed after 2 weeks of positivity',
      ],
      answerIndex: 1,
      explanation:
        'FIGO 2025 reports that ~90% of incident high-risk HPV infections clear spontaneously within 24 months. Persistence is defined as repeated detection of the same type over 6–12 months.',
    },
    {
      id: 'm6-q7',
      stem: 'An extended HPV DNA genotyping assay detects HPV types 31, 33, 52, and 58. Under the WHO 2026 framework, to which extended-genotype risk group do these types belong?',
      options: ['Group 1a', 'Group 1b', 'Group 1c', 'Group 1d'],
      answerIndex: 2,
      explanation:
        'WHO 2026 Extended-Genotype Risk Groups: Group 1a = HPV 16; Group 1b = HPV 18/45; Group 1c = HPV 31, 33, 35, 52, 58; Group 1d = HPV 39, 51, 56, 59.',
    },
    {
      id: 'm6-q8',
      stem: 'A regional cervical screening programme tracks 100 HPV-positive women: 80% complete colposcopy, but only 45% of those needing treatment complete their procedure. Under WHO 2026 operational definitions, how is this programme classified?',
      options: [
        'High follow-up capacity',
        'Low follow-up capacity',
        'Full operational capacity',
        'Zero follow-up capacity',
      ],
      answerIndex: 1,
      explanation:
        'WHO 2026 defines High Follow-Up Capacity as ≥60% completion at EVERY step of the continuum. Because treatment completion fell to 45% (<60%), the programme is classified as Low Follow-Up Capacity.',
    },
    {
      id: 'm6-q9',
      stem: 'A 38-year-old woman is evaluated for treatment of a biopsy-confirmed cervical precancerous lesion. Visual inspection demonstrates that the lesion extends 1.5 cm into the endocervical canal beyond visual reach (Type 3 transformation zone). Which treatment is indicated?',
      options: [
        'Thermal ablation',
        'Cryotherapy',
        'Excisional treatment (LLETZ / conization)',
        'Hysterectomy without biopsy',
      ],
      answerIndex: 2,
      explanation:
        'Extension of the lesion or transformation zone into the endocervical canal (Type 3 TZ) is an absolute contraindication to ablative therapy (thermal ablation/cryotherapy). Excisional treatment (LLETZ / conization) is required.',
    },
    {
      id: 'm6-q10',
      stem: 'What is the key diagnostic distinction between tissue p16 IHC and liquid p16/Ki-67 dual-stain testing?',
      options: [
        'Tissue p16 IHC is performed on cytology slides; dual-stain is performed on frozen tissue sections',
        'Tissue p16 IHC is a LAST biopsy adjunct for H&E diagnostic dilemmas; dual-stain cytology detects single-cell co-expression as a screening/triage biomarker',
        'Dual-stain testing proves invasive cervical cancer',
        'Both tests are identical and interchangeable in pathology reports',
      ],
      answerIndex: 1,
      explanation:
        'Tissue p16 IHC is an immunohistochemical adjunct on tissue biopsies used under LAST guidelines. p16/Ki-67 dual-stain cytology is a liquid cytology triage assay detecting co-expression of p16 and Ki-67 in the same individual cell.',
    },
  ],
};
