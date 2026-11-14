import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 08 - HPV Virology (E6/E7) & Prophylactic HPV Vaccination
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pages 69-79), updated with
 * the 2025 Bhatla FIGO cervical cancer review, the WHO 2022 position paper and
 * the WHO SAGE single-dose update reported in October 2026.
 *
 * Covers:
 * - HPV structure, genome organisation and Alpha-9 / Alpha-7 species groups
 * - E6 -> E6AP -> p53 degradation, hTERT activation and E7 -> pRb -> E2F
 * - E2 restraint, viral integration and episomal vs integrated disease
 * - Type-specific risk, natural history and host cofactors for persistence
 * - L1 virus-like particle vaccines, product coverage and immunology
 * - WHO 2022 / SAGE 2026 dose schedules, safety and screening after vaccination
 * - WHO 90-70-90 elimination strategy and the <4/100,000 incidence threshold
 * - Golden pearls & examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const HPV_VIROLOGY_VACCINATION_MODULE: StudioModule = {
  id: 'pg-mod-08-hpv-virology-vaccination',
  track: 'NEET_PG',
  title: 'HPV Virology (E6/E7) & Prophylactic Vaccination',
  shortTitle: 'HPV Virology & Vaccines',
  summary:
    'Complete PG clinical revision module on HPV molecular oncology and primary prevention. Features HPV structure and genome organisation, Alpha-9 HPV16 versus Alpha-7 HPV18, E6-E6AP-p53 degradation and hTERT activation, E7-pRb-E2F release, E2 disruption and integration, type-specific natural history, L1 virus-like particle vaccines, Cervarix versus Gardasil versus Gardasil 9, WHO 2022 and SAGE 2026 dose schedules, screening after vaccination, WHO 90-70-90, 15 active-recall flashcards, and 10 clinical vignette MCQs.',
  tagline:
    'E6-p53, E7-pRb, L1 VLPs, vaccine schedules and 90-70-90.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 45,
  tags: [
    'HPV Structure & Genome',
    'Alpha-9 HPV16 vs Alpha-7 HPV18',
    'E6-E6AP-p53 & hTERT',
    'E7-pRb-E2F Release',
    'E2 Disruption & Integration',
    'L1 Virus-Like Particles',
    'Cervarix vs Gardasil vs Gardasil 9',
    'WHO 2022 & SAGE 2026 Schedules',
    'Screening After Vaccination',
    'WHO 90-70-90 Elimination',
  ],
  sourceTag:
    'Handwritten clinical revision (HPV Virology & Vaccination) • Bhatla et al. 2025 FIGO • WHO 2022 position paper • WHO SAGE October 2026',
  updatedAtISO: '2026-11-14T07:00:00.000Z',
  notes: [
    {
      id: 'hpv-structure-genome-genotypes',
      heading: 'HPV Structure, Genome Organisation & Oncogenic Genotypes',
      intro:
        'Human papillomavirus is a small, non-enveloped, circular double-stranded DNA virus with an icosahedral capsid. More than 200 genotypes are recognised. It infects basal epithelial cells after microscopic epithelial disruption, and the great majority of infections are transient - but persistent carcinogenic infection is the central prerequisite for cervical cancer.',
      flow: [
        'Exposure · intimate skin-to-skin or mucosal contact delivers virions to the genital epithelium',
        'Microabrasion · small epithelial breaches expose basal keratinocytes and basement-membrane ligands',
        'Basal infection · the circular dsDNA genome is maintained as a low-copy episome in dividing basal cells',
        'Differentiation-dependent cycle · E6/E7 drive proliferation while E1/E2/E4 replicate and package the genome in upper layers',
        'Outcome · immune clearance in most people, or persistence with progressive E6/E7 deregulation in a minority',
      ],
      bullets: [
        'Virion: small, non-enveloped, icosahedral capsid surrounding a circular double-stranded DNA genome; no lipid envelope, so it is relatively resistant in the environment.',
        'Taxonomy: more than 200 HPV genotypes are recognised; the older handwritten count of about 100 fully sequenced types should not be quoted as the current total.',
        'Early Genes: E1, E2, E4, E5, E6 and E7 support replication, transcription, epithelial differentiation, immune modulation and transformation.',
        'Late Genes: L1 encodes the major capsid protein and L2 the minor capsid protein; L1 is the antigen used in licensed prophylactic vaccines.',
        'Alpha-9 Species: includes HPV16 plus 31, 33, 35, 52 and 58; HPV16 is the most potent single genotype and drives most squamous cervical cancer.',
        'Alpha-7 Species: includes HPV18 plus 39, 45, 59 and 68; HPV18 is disproportionately associated with cervical adenocarcinoma.',
        'Genotype Contribution: HPV16 and 18 together account for approximately 78% of cervical cancers in the 2025 Bhatla review, with 31, 33, 45, 52 and 58 adding about a further 18%.',
        'Low-Risk Types: HPV6 and HPV11 cause most anogenital condylomata and have much weaker p53/pRb transforming activity.',
        'Clinical Caveat: detecting a carcinogenic genotype is not a diagnosis of CIN or cancer; management depends on cytology, histology, age, persistence and programme rules.',
      ],
      table: {
        head: ['Gene / Region', 'Main Function', 'Examination Hook'],
        rows: [
          [
            'E1',
            'Viral DNA replication helicase and replication initiation',
            'Replication enzyme; not a transforming oncoprotein.',
          ],
          [
            'E2',
            'Viral transcriptional regulation and replication control; restrains E6/E7',
            'Loss of E2 on integration derepresses E6/E7.',
          ],
          [
            'E4',
            'Productive infection, epithelial differentiation and virion release',
            'Expressed late in the productive cycle, not in latency.',
          ],
          [
            'E5',
            'Growth signalling and immune modulation',
            'Contributes to immune evasion; importance varies by genotype.',
          ],
          [
            'E6',
            'E6AP-mediated p53 degradation, hTERT activation and PDZ-protein effects',
            'Targets p53 and telomerase.',
          ],
          [
            'E7',
            'pRb binding and functional inactivation with E2F release',
            'Drives inappropriate G1-to-S progression.',
          ],
          [
            'L1',
            'Major capsid protein; self-assembles into virus-like particles',
            'The vaccine antigen; VLPs contain no genome.',
          ],
          [
            'L2',
            'Minor capsid protein; assists genome packaging and entry',
            'Not the principal antigen in licensed L1-VLP vaccines.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: HPV = non-enveloped circular dsDNA virus with an icosahedral L1 capsid; E6 targets p53, E7 targets pRb, and L1 is the vaccine antigen.',
        'Alpha-9 = HPV16 family; Alpha-7 = HPV18 family. HPV18 carries the stronger adenocarcinoma association.',
      ],
      trap: {
        title: 'Examiner trap - quoting an outdated genotype count',
        body: 'The handwritten note says more than 100 sequenced types; current taxonomy recognises more than 200 genotypes. The number of genotypes is not the same as the number of carcinogenic types.',
      },
      traps: [
        {
          title: '• Confusing L1 with L2 - L1 is the major capsid protein and the VLP antigen.',
        },
        {
          title: '• Treating a positive carcinogenic HPV test as a diagnosis of CIN or cancer.',
        },
      ],
    },
    {
      id: 'e6-e7-molecular-pathogenesis',
      heading: 'E6/E7 Oncoproteins: p53, hTERT, pRb & E2 Deregulation',
      intro:
        'E6 and E7 are the principal transforming proteins of carcinogenic HPV. They are not interchangeable: E6 dismantles the p53 damage-response and activates telomerase, while E7 releases E2F by inactivating pRb. Together they permit damaged cells to survive, divide and escape senescence.',
      flow: [
        'E6 · binds the cellular ubiquitin ligase E6AP and forms an E6-E6AP complex',
        'p53 degradation · ubiquitination targets p53 for proteasomal destruction',
        'Checkpoint loss · DNA-damage arrest, senescence and apoptosis are weakened',
        'hTERT activation · E6 increases telomerase transcription and telomere maintenance',
        'E7 · binds and functionally inactivates pRb-family proteins',
        'E2F release · inappropriate G1-to-S entry and DNA synthesis',
        'Cooperation · immortalisation, genomic instability and clonal expansion',
      ],
      bullets: [
        'E6-p53 Axis: high-risk E6 recruits E6AP, a cellular ubiquitin ligase, producing ubiquitination and proteasomal degradation of p53.',
        'Consequence of p53 Loss: cells with damaged DNA escape arrest, senescence and apoptosis, allowing mutations to accumulate.',
        'E6-hTERT Axis: E6 promotes transcription of the telomerase catalytic subunit gene, raising telomerase activity and supporting immortalisation.',
        'Supplementary Mechanisms: c-MYC-related hTERT transactivation and antagonism of BRCA-mediated hTERT repression are note-level additions, not the core exam definition.',
        'E7-pRb Axis: high-risk E7 binds and inactivates pRb, releasing E2F transcription factors that drive S-phase genes.',
        'p16 Overexpression: compensatory p16INK4a upregulation follows pRb pathway disruption, producing diffuse block-positive p16 immunohistochemistry in transforming lesions.',
        'E2 Restraint: E2 regulates viral transcription and normally restrains E6/E7; integration may delete or disrupt E2 and derepress both oncoproteins.',
        'Integration Status: integration is common in high-grade lesions and cancers but is not obligatory - some cancers retain episomal or mixed viral DNA.',
        'Cooperativity: p53 loss plus pRb inactivation plus telomerase activation is the minimal conceptual triad of HPV transformation.',
      ],
      table: {
        head: ['Feature', 'E6', 'E7'],
        rows: [
          ['Primary host target', 'p53', 'pRb'],
          [
            'Mechanism',
            'E6AP-mediated ubiquitination and proteasomal degradation of p53',
            'Binds and functionally inactivates pRb',
          ],
          [
            'Cell-cycle consequence',
            'Loss of DNA-damage arrest, senescence and apoptosis',
            'E2F release and inappropriate S-phase entry',
          ],
          [
            'Additional action',
            'Increases hTERT transcription and telomerase activity',
            'Drives abnormal proliferation and genomic instability',
          ],
          [
            'High-yield phrase',
            'E6 eats p53 and extends telomeres',
            'E7 releases the pRb brake and lets E2F drive S phase',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: E6 = p53 degradation + hTERT; E7 = pRb inactivation + E2F release. Reverse them and the vignette collapses.',
        'Diffuse block p16 positivity is a surrogate for pRb pathway disruption by a transforming HPV infection, not a direct measure of viral load.',
      ],
      trap: {
        title: 'Examiner trap - swapping the E6 and E7 targets',
        body: 'E6 is tested with p53 and telomerase; E7 with pRb and E2F. Both cooperate, but a question that asks for the direct target wants the one-to-one mapping.',
      },
      traps: [
        {
          title: '• Claiming integration is required for every cervical cancer - episomal cancers occur.',
        },
        {
          title: '• Reading p16 positivity as proof of CIN3 rather than a diagnostic adjunct in context.',
        },
      ],
    },
    {
      id: 'type-specific-risk-natural-history',
      heading: 'Species Groups, Type-Specific Risk & Natural History',
      intro:
        'Genotype is the strongest viral determinant of persistence and progression. HPV16 carries the highest per-infection risk, other carcinogenic types are intermediate, and HPV-negative women have the lowest risk - a gradient that underpins genotype-stratified screening.',
      flow: [
        'Acquisition · most sexually active people are exposed to HPV at some point',
        'Transient infection · about 90% of incident infections clear within 2 years',
        'Persistence · same carcinogenic type detected over time, especially HPV16',
        'Low-grade lesion · productive infection with CIN1 histology, often regressing',
        'High-grade lesion · CIN2/3 or AIS with deregulated E6/E7',
        'Invasion · a subset progresses after additional host and viral changes',
      ],
      bullets: [
        '16-Year CIN3+ Risk: handwritten cohort estimates of about 6% with baseline HPV16, 2.0% with another carcinogenic type and 0.8% with no HPV detected - note-level historical figures, not lifetime risks.',
        'Viral Load: absolute viral load is not routinely useful for predicting individual progression, although HPV16 shows a stronger genotype-linked association.',
        'Latency and Reactivation: a second HPV prevalence peak in older women may reflect reactivation of latent infection with immunosenescence, not necessarily new acquisition.',
        'CIN3 Progression: a historical untreated-cohort estimate of about 30% progressing to invasion over roughly 30 years does not justify observing CIN3 in practice.',
        'Screening in the Young: cytology screening under age 25 has limited effectiveness because transient infection and regressive low-grade lesions are common.',
        'CIN2 versus CIN3: CIN2 is biologically heterogeneous with meaningful regression, whereas CIN3 is a direct precursor that is generally treated.',
        'Genotype Is Not Destiny: most infections with any type clear; persistence plus host factors determine the small group that progresses.',
        'Causal Association: HPV is necessary for nearly all cervical squamous cancers, but infection is common and cancer is rare.',
      ],
      table: {
        head: ['Feature', 'Carcinogenic HPV', 'Low-Risk HPV'],
        rows: [
          [
            'Representative types',
            '16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68',
            '6 and 11 are the classic examples',
          ],
          [
            'Clinical associations',
            'CIN2/3, AIS, cervical cancer and some anogenital/oropharyngeal cancers',
            'Condyloma acuminata and recurrent respiratory papillomatosis',
          ],
          [
            'E6/E7 activity',
            'Potent interference with p53 and pRb pathways',
            'Much weaker transforming activity',
          ],
          [
            'Persistence',
            'Persistent infection is the major risk state for cancer',
            'Usually productive and transient; malignant progression is uncommon',
          ],
          [
            'Wart association',
            'Not the classic cause of benign genital warts',
            'HPV6/11 cause most genital warts',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: a single positive HPV test is not persistent infection; persistence of the same carcinogenic type is the risk state that matters.',
        'HPV16 carries the highest per-infection progression risk; HPV18 is the type most linked to adenocarcinoma.',
      ],
      trap: {
        title: 'Examiner trap - treating the 30% CIN3 figure as a reason to observe',
        body: 'That is a long-term untreated historical cohort estimate. Histologically confirmed CIN3 is a direct cancer precursor and is generally treated, except in specific situations such as pregnancy where treatment is deferred.',
      },
    },
    {
      id: 'cofactors-persistence-immune-escape',
      heading: 'Cofactors, Immune Escape & Determinants of Persistence',
      intro:
        'Persistent carcinogenic HPV is necessary but not sufficient for cervical cancer. Smoking, hormonal and reproductive exposure, and immunosuppression modify local immune surveillance and the probability that an infection persists and progresses.',
      bullets: [
        'Tobacco: smoking is associated with squamous cervical and vulvar carcinoma; proposed mechanisms include altered local epithelial immunity and reduced Langerhans cell antigen presentation.',
        'Histology Specificity: the smoking association is stronger for squamous carcinoma than for adenocarcinoma and varies between studies.',
        'Pregnancy and Hormones: condylomata may enlarge during pregnancy; young age at first full-term birth and high parity are epidemiological cofactors.',
        'Oral Contraceptives: long-term use is associated with a modestly increased risk that declines after cessation; this is an association, not an individual deterministic cause.',
        'HIV and Transplant: HIV, solid-organ transplantation and systemic immunosuppression increase persistent HPV infection and cervical precancer risk.',
        'Relative-Risk Caveat: a handwritten estimate of about a 16-fold risk in some immunosuppressed groups lacks a specified population and endpoint; do not quote it as a universal multiplier.',
        'Immune Escape: E5 and E6/E7 interfere with antigen presentation and interferon signalling, favouring persistence in the basal reservoir.',
        'Central Message: persistence is the necessary biological state; immune status, smoking and reproductive factors shift the probability of progression.',
        'Reversibility: smoking cessation and immune reconstitution reduce risk but do not erase prior HPV exposure or existing lesions.',
      ],
      table: {
        head: ['Cofactor', 'Proposed Mechanism', 'Clinical Implication'],
        rows: [
          [
            'Tobacco smoking',
            'Altered local epithelial immunity and reduced Langerhans cell antigen presentation',
            'Stronger association with squamous carcinoma than adenocarcinoma; cessation reduces risk.',
          ],
          [
            'Pregnancy and parity',
            'Hormonal and immunological change; young age at first birth and high parity are epidemiological cofactors',
            'Condylomata may enlarge in pregnancy; parity is a population-level risk marker, not a diagnosis.',
          ],
          [
            'Long-term oral contraceptives',
            'Prolonged hormonal exposure',
            'Modest associated risk that declines after cessation; not an individual deterministic cause.',
          ],
          [
            'HIV and transplantation',
            'Impaired cell-mediated immunity with reduced viral clearance',
            'Higher persistence and precancer risk; earlier start and shorter intervals in special-population guidance.',
          ],
          [
            'Latent infection and immunosenescence',
            'Possible reactivation of latent HPV with declining immunity',
            'Explains part of the second prevalence peak in older women; not proven for every positive test.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: persistence plus impaired local immunity is the engine of progression; a transient positive test in an immunocompetent woman is usually not.',
        'Immunosuppression changes the screening interval and the threshold for investigation - it does not change the definition of persistence.',
      ],
      trap: {
        title: 'Examiner trap - quoting the 16-fold immunosuppression figure as universal',
        body: 'The handwritten number has no defined population or endpoint. Use the qualitative principle - immunosuppression raises persistence and precancer risk - and follow the relevant special-population guideline.',
      },
    },
    {
      id: 'vaccine-platform-products',
      heading: 'Prophylactic Vaccines: L1 VLP Platform & Product Coverage',
      intro:
        'Licensed HPV vaccines are recombinant subunit vaccines. L1 capsid protein self-assembles into empty virus-like particles that present repetitive epitopes, generating strong type-specific neutralising antibodies - but no viral genome, so they cannot infect or transform cells.',
      flow: [
        'Recombinant L1 major capsid protein is expressed in a heterologous system',
        'Self-assembly into empty virus-like particles (VLPs)',
        'No viral DNA · non-infectious and non-oncogenic',
        'Repetitive capsid array stimulates strong B-cell and neutralising antibody responses',
        'Antibodies transudate to the cervical epithelium and block vaccine-type entry',
        'Reduced vaccine-type persistent infection and vaccine-type CIN/cancer',
      ],
      bullets: [
        'Platform: recombinant L1 protein self-assembled into VLPs; the particles mimic the capsid surface but contain no genome.',
        'Immunology: the repetitive VLP structure produces high titres of type-specific neutralising IgG that block viral entry into basal cells.',
        'Bivalent - Cervarix: HPV16 and 18; no coverage of wart-associated types 6 and 11.',
        'Quadrivalent - Gardasil: HPV6, 11, 16 and 18; adds prevention of most anogenital warts.',
        'Nonavalent - Gardasil 9: HPV6, 11, 16, 18, 31, 33, 45, 52 and 58; five additional carcinogenic types beyond the quadrivalent vaccine.',
        'Population Impact: the nonavalent vaccine could prevent approximately 90% of cervical cancers at population level when coverage is high and vaccination precedes exposure - not 90% protection for every individual.',
        'Herd Effect: high coverage reduces circulating vaccine-type HPV and indirectly protects some unvaccinated people, including males in population programmes.',
        'Prophylactic Only: vaccination does not clear existing HPV, regress CIN, or treat genital warts or invasive cancer.',
        'Product Choice: national programmes choose products by availability, WHO prequalification, regulatory approval, procurement and cost.',
      ],
      table: {
        head: ['Vaccine', 'HPV Types Covered', 'Main Advantage / Limitation'],
        rows: [
          [
            'Cervarix (bivalent)',
            '16, 18',
            'Targets the two dominant carcinogenic types; no wart coverage.',
          ],
          [
            'Gardasil (quadrivalent)',
            '6, 11, 16, 18',
            'Adds prevention of most HPV6/11 genital warts.',
          ],
          [
            'Gardasil 9 (nonavalent)',
            '6, 11, 16, 18, 31, 33, 45, 52, 58',
            'Broadest coverage of the three familiar products; still not every carcinogenic type.',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: VLPs are empty L1 capsids - antigenic but non-infectious and non-oncogenic; they prevent infection rather than treat it.',
        'Cervarix = 2 types; Gardasil = 4 types; Gardasil 9 = 9 types. The extra five are 31, 33, 45, 52 and 58.',
      ],
      trap: {
        title: 'Examiner trap - calling Gardasil 9 a nine-dose vaccine',
        body: 'Nonavalent means nine genotypes, not nine doses. It covers 6, 11, 16, 18, 31, 33, 45, 52 and 58 in the usual schedule.',
      },
      traps: [
        {
          title: '• Assuming vaccination treats an existing HPV infection or CIN.',
        },
        {
          title: '• Forgetting that bivalent and quadrivalent vaccines do not cover the same wart types.',
        },
      ],
    },
    {
      id: 'vaccine-schedules-safety-screening',
      heading: 'Vaccine Schedules, Safety & Screening After Vaccination',
      intro:
        'Dose recommendations are date-stamped policy, not timeless biology. WHO 2022 offered reduced-dose options, SAGE in October 2026 reinforced a single dose for girls aged 9-14, and immunocompromised people remain on a multi-dose pathway pending the 2027 consolidated position paper.',
      flow: [
        'Ask three questions · what guideline, what age at first dose, what immune status',
        'Immunocompetent girls 9-14 · single dose is the most efficient schedule after the 2026 SAGE update',
        'Immunocompetent up to age 30 · a single dose can be used under the October 2026 WHO communication',
        'Older or catch-up · follow national policy and product label; two doses are commonly used',
        'Immunocompromised or HIV · at least two doses, and three where feasible',
      ],
      bullets: [
        'WHO 2022 Position Paper: girls 9-14 and women 15-20 could receive one or two doses; women older than 21 received two doses generally six months apart.',
        'Immunocompromised 2022: at least two doses, and three doses where feasible; this group was never included in single-dose simplification.',
        'SAGE October 2026: a single-dose schedule for girls aged 9-14 is the most efficient way to achieve high coverage, and a single dose can be used up to age 30.',
        'Pending Guidance: WHO states that a revised consolidated position paper is expected in 2027; until then follow current national immunisation policy.',
        'Historical ACIP Pattern: two doses when the series began before the 15th birthday, three doses when it began at or after 15 - useful for older exam questions but not the current WHO universal rule.',
        'Efficacy Duration: follow-up studies show sustained protection for at least 10 years, with antibody levels above post-natural-infection levels beyond 12 years in the studies available.',
        'Safety: local injection-site pain, redness and swelling, transient headache or fever; syncope can occur in adolescents, so give seated and observe briefly.',
        'Contraindication: severe allergic reaction to a previous dose or vaccine component; pregnancy is a precaution rather than an indication for termination after inadvertent administration.',
        'Infertility Myth: reviewed evidence does not support concerns about infertility or premature ovarian insufficiency.',
        'Screening Continues: vaccinated people still need routine screening because coverage is incomplete, prior infection is possible and HPV-independent lesions exist.',
      ],
      table: {
        head: ['Source / Date', 'Immunocompetent People', 'Immunocompromised / HIV'],
        rows: [
          [
            'WHO 2022 position paper',
            '9-14: one or two doses; 15-20: one or two doses; >21: two doses about 6 months apart',
            'At least 2 doses; 3 where feasible',
          ],
          [
            'Bhatla 2025 summary',
            'Reports reduced-dose options and two doses for age 21 and above',
            'Describes 3 doses (0, 1-2 and 6 months) at the time of writing',
          ],
          [
            'WHO SAGE October 2026',
            'One dose is most efficient for girls 9-14; one dose can be used up to age 30',
            'Minimum 2 doses and, where feasible, 3 doses',
          ],
          [
            'Historical ACIP / label teaching',
            '2 doses if started before 15; 3 doses if started at or after 15',
            '3 doses',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: a dose question is unanswerable without guideline, age at first dose and immune status - state all three.',
        'Immunocompromised patients and people living with HIV are never automatically moved to a one-dose pathway.',
      ],
      trap: {
        title: 'Examiner trap - presenting the 2022 schedule as the final WHO position',
        body: 'WHO 2022 allowed one or two doses in the main target ages; SAGE in October 2026 strengthened the single-dose recommendation for girls 9-14 up to age 30. A consolidated position paper is expected in 2027.',
      },
      traps: [
        {
          title: '• Recommending vaccination as treatment for a woman with known CIN2/3.',
        },
        {
          title: '• Advising that screening can stop after vaccination.',
        },
        {
          title: '• Treating inadvertent vaccination in pregnancy as grounds for termination.',
        },
      ],
    },
    {
      id: 'who-90-70-90-elimination',
      heading: 'WHO 90-70-90 & the Elimination Threshold',
      intro:
        'The WHO Global Strategy treats cervical cancer elimination as a public-health problem defined by incidence, not as viral eradication. Three pillars - vaccination, screening and treatment - must each reach high coverage for the incidence threshold to be met.',
      flow: [
        'Primary prevention · 90% of girls fully vaccinated by age 15',
        'Secondary prevention · 70% of women screened with a high-performance test at ages 35 and 45',
        'Tertiary care · 90% of women with precancer treated and 90% with invasive cancer managed',
        'Population effect · reduced new infection, detection and treatment of prevalent lesions',
        'Elimination · cervical cancer incidence falls below 4 new cases per 100,000 women per year',
      ],
      bullets: [
        'Vaccination Target: 90% of girls fully vaccinated with HPV vaccine by age 15, delivered mainly through adolescent immunisation systems.',
        'Screening Target: 70% of women screened with a high-performance test by age 35 and again by age 45.',
        'Treatment Target: 90% of women with cervical precancer treated and 90% of women with invasive cancer receiving appropriate management and care.',
        'Third 90 Is Broader: it covers access, diagnosis, referral, treatment completion and ongoing care, not just a procedure count.',
        'Elimination Definition: fewer than 4 new cervical cancer cases per 100,000 women per year - an incidence threshold, not eradication.',
        'Why All Three Pillars: vaccination prevents new infection but does not remove existing lesions or cover every type; screening finds prevalent disease; treatment prevents progression.',
        'Screening Must Continue: vaccinated cohorts still require screening for decades because prevalent precancer and non-vaccine-type disease persist.',
        'Programme Reality: coverage, recall systems, colposcopy access and treatment capacity determine whether the targets translate into incidence reduction.',
      ],
      table: {
        head: ['Pillar', '2030 Target', 'What It Delivers'],
        rows: [
          [
            'Vaccination',
            '90% of girls fully vaccinated by age 15',
            'Reduced new vaccine-type infection and eventual reduction in precancer',
          ],
          [
            'Screening',
            '70% screened with a high-performance test at ages 35 and 45',
            'Detection and referral of prevalent high-grade lesions and early cancer',
          ],
          [
            'Treatment and care',
            '90% of precancer treated; 90% of invasive cancer managed',
            'Prevention of progression and appropriate cancer care along the pathway',
          ],
          [
            'Elimination threshold',
            'Fewer than 4 new cases per 100,000 women per year',
            'Public-health elimination, not viral eradication',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: 90-70-90 = 90% vaccinated by 15, 70% screened at 35 and 45, 90% of precancer treated and 90% of invasive cancer managed.',
        'Elimination means incidence below 4 per 100,000 per year; it does not mean cervical cancer has disappeared or that screening stops.',
      ],
      trap: {
        title: 'Examiner trap - equating elimination with eradication',
        body: 'Elimination is a defined incidence threshold of fewer than 4 new cases per 100,000 women per year. HPV and cervical cancer continue to occur, so vaccination, screening and treatment all remain necessary.',
      },
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-two rapid-fire points to lock in before the exam.',
      pearls: [
        'HPV is a small, non-enveloped, circular dsDNA virus with an icosahedral capsid.',
        'More than 200 HPV genotypes are recognised; about 12-14 are carcinogenic.',
        'HPV16 is Alpha-9; HPV18 is Alpha-7.',
        'HPV16 and 18 account for approximately 78% of cervical cancers.',
        'HPV18 is disproportionately associated with cervical adenocarcinoma.',
        'E6 binds E6AP, a ubiquitin ligase, and drives proteasomal degradation of p53.',
        'E6 increases hTERT transcription and telomerase activity.',
        'E7 binds and inactivates pRb, releasing E2F and driving S-phase entry.',
        'E2 normally restrains E6/E7; integration-associated E2 disruption derepresses them.',
        'Integration is common but not obligatory in cervical cancer.',
        'Diffuse block p16 positivity reflects pRb pathway disruption.',
        'About 90% of incident HPV infections clear within 2 years.',
        'Persistent carcinogenic infection, not a single positive test, is the risk state.',
        'HPV6 and HPV11 are low-risk wart-associated types.',
        'L1 is the major capsid protein and the VLP vaccine antigen; L2 is minor.',
        'VLPs contain no viral DNA and cannot replicate or transform cells.',
        'Cervarix = 16/18; Gardasil = 6/11/16/18; Gardasil 9 adds 31/33/45/52/58.',
        'HPV vaccines are prophylactic, not therapeutic.',
        'Vaccination before sexual exposure gives the greatest benefit, but catch-up still helps.',
        'WHO 2022: one or two doses for ages 9-20; two doses above 21; at least two, preferably three, if immunocompromised.',
        'WHO SAGE October 2026: single dose is most efficient for girls 9-14 and can be used up to age 30; revised position paper expected 2027.',
        'WHO 90-70-90: 90% vaccinated by 15; 70% screened at 35 and 45; 90% precancer treated and 90% invasive cancer managed; elimination is under 4 per 100,000 per year.',
      ],
      traps: [
        {
          title: '• Reversing E6 and E7 targets - E6 is p53, E7 is pRb.',
        },
        {
          title: '• Confusing L1 and L2 - L1 is the major capsid protein and vaccine antigen.',
        },
        {
          title: '• Claiming integration is required in every cervical cancer.',
        },
        {
          title: '• Naming HPV6/11 as the main cervical cancer types.',
        },
        {
          title: '• Reading Gardasil 9 as nine doses rather than nine genotypes.',
        },
        {
          title: '• Treating a positive HPV test as a cancer diagnosis.',
        },
        {
          title: '• Using vaccination to treat established HPV, CIN or warts.',
        },
        {
          title: '• Telling a vaccinated woman she can stop screening.',
        },
        {
          title: '• Answering a dose question without stating guideline, age at first dose and immune status.',
        },
        {
          title: '• Applying the 2026 single-dose update automatically to immunocompromised patients or people living with HIV.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm8-f1',
      front: 'Describe the basic structure of HPV.',
      back: 'A small, non-enveloped virus with a circular double-stranded DNA genome and an icosahedral capsid. L1 is the major capsid protein and L2 the minor capsid protein.',
    },
    {
      id: 'm8-f2',
      front: 'Which genotypes represent the Alpha-9 and Alpha-7 HPV species groups?',
      back: 'HPV16 is the key Alpha-9 type; HPV18 is the key Alpha-7 type. HPV16 dominates squamous carcinoma, while HPV18 has a strong association with cervical adenocarcinoma.',
    },
    {
      id: 'm8-f3',
      front: 'What is the major tumour-suppressor target of high-risk HPV E6 and how is it inactivated?',
      back: 'p53. E6 recruits the E6-associated protein (E6AP), a ubiquitin ligase, promoting ubiquitination and proteasomal degradation of p53, so DNA-damage arrest and apoptosis are weakened.',
    },
    {
      id: 'm8-f4',
      front: 'How does high-risk HPV E6 affect telomeres and cellular lifespan?',
      back: 'E6 increases transcription of hTERT, the telomerase catalytic subunit, raising telomerase activity. Telomere maintenance bypasses replicative senescence and supports cellular immortalisation.',
    },
    {
      id: 'm8-f5',
      front: 'What is the principal target of high-risk HPV E7 and what is the downstream effect?',
      back: 'E7 binds and functionally inactivates pRb, releasing E2F transcription factors. The cell enters S phase inappropriately, driving proliferation and genomic instability.',
    },
    {
      id: 'm8-f6',
      front: 'Why does p16 immunohistochemistry mark transforming HPV infection?',
      back: 'pRb pathway disruption by E7 produces compensatory p16INK4a overexpression. Diffuse block-positive p16 is therefore a surrogate marker of a transforming high-risk HPV lesion in the right histological context.',
    },
    {
      id: 'm8-f7',
      front: 'What is the role of E2 and what happens when integration disrupts it?',
      back: 'E2 regulates viral transcription and normally restrains E6/E7 expression. Integration may delete or disrupt E2, removing that restraint and allowing persistent E6/E7 overexpression.',
    },
    {
      id: 'm8-f8',
      front: 'Is viral integration required for cervical cancer?',
      back: 'No. Integration is common in high-grade lesions and cancers and is an important progression mechanism, but some cancers retain episomal or mixed integrated and episomal viral DNA.',
    },
    {
      id: 'm8-f9',
      front: 'What is a virus-like particle and why is it safe as a vaccine?',
      back: 'Recombinant L1 protein self-assembles into an empty capsid that mimics HPV surface structure but contains no viral genome. It is non-infectious and non-oncogenic yet strongly immunogenic.',
    },
    {
      id: 'm8-f10',
      front: 'State the HPV types covered by Cervarix, Gardasil and Gardasil 9.',
      back: 'Cervarix (bivalent) = 16, 18. Gardasil (quadrivalent) = 6, 11, 16, 18. Gardasil 9 (nonavalent) = 6, 11, 16, 18, 31, 33, 45, 52, 58.',
    },
    {
      id: 'm8-f11',
      front: 'Why is HPV vaccination prophylactic rather than therapeutic?',
      back: 'The VLP antibody response blocks new viral entry but cannot clear an established infection or regress an existing CIN lesion, genital wart or invasive cancer.',
    },
    {
      id: 'm8-f12',
      front: 'Why must vaccinated women continue cervical screening?',
      back: 'Vaccines do not cover every carcinogenic type, a woman may have been infected before vaccination, coverage may be incomplete, and HPV-independent lesions can occur.',
    },
    {
      id: 'm8-f13',
      front: 'Summarise the WHO 2022 HPV vaccine dose recommendations.',
      back: 'Ages 9-14 and 15-20: one or two doses. Older than 21: two doses about six months apart. Immunocompromised or HIV: at least two doses and three where feasible.',
    },
    {
      id: 'm8-f14',
      front: 'What did the October 2026 WHO SAGE update conclude about single-dose HPV vaccination?',
      back: 'A single dose is the most efficient schedule for girls aged 9-14 and can be used up to age 30. Immunocompromised people still need at least two, preferably three, doses; a consolidated position paper is expected in 2027.',
    },
    {
      id: 'm8-f15',
      front: 'State the WHO 90-70-90 targets and the elimination threshold.',
      back: '90% of girls vaccinated by age 15; 70% of women screened with a high-performance test at ages 35 and 45; 90% of precancer treated and 90% of invasive cancer managed. Elimination is under 4 new cases per 100,000 women per year.',
    },
  ],

  mcqs: [
    {
      id: 'm8-q1',
      stem: 'A 27-year-old woman has a cervical biopsy showing high-grade dysplasia. Which molecular interaction best explains the loss of p53 function in this lesion?',
      options: [
        'E7 binding and inactivation of pRb',
        'E6 forming a complex with E6AP and promoting p53 degradation',
        'L1 self-assembly into virus-like particles',
        'E2 enhancing E6/E7 transcription',
      ],
      answerIndex: 1,
      explanation:
        'High-risk E6 binds the cellular ubiquitin ligase E6AP, producing ubiquitination and proteasomal degradation of p53. E7 acts on pRb, L1 is a capsid protein and E2 restrains rather than enhances E6/E7.',
    },
    {
      id: 'm8-q2',
      stem: 'A researcher studies a cervical cancer cell line and finds that E7 is overexpressed while p53 is still detectable. Which downstream effect is most directly attributable to E7?',
      options: [
        'Telomerase activation through hTERT transcription',
        'Proteasomal degradation of p53',
        'Release of E2F transcription factors after pRb inactivation',
        'Assembly of the viral capsid',
      ],
      answerIndex: 2,
      explanation:
        'E7 binds and functionally inactivates pRb, releasing E2F and driving inappropriate S-phase entry. hTERT activation and p53 degradation are E6 functions; capsid assembly involves L1 and L2.',
    },
    {
      id: 'm8-q3',
      stem: 'A 34-year-old woman is HPV16 positive with NILM cytology. Her friend is HPV positive for a non-16/18 carcinogenic type with NILM cytology. Why is the first result managed more aggressively?',
      options: [
        'HPV16 carries a higher per-infection risk of persistence and CIN3+ than other carcinogenic types',
        'HPV16 always causes adenocarcinoma',
        'Non-16/18 types are low-risk wart viruses',
        'HPV16 positivity proves invasive cancer',
      ],
      answerIndex: 0,
      explanation:
        'HPV16 is the most potent carcinogenic genotype, with the highest per-infection progression risk. Non-16/18 carcinogenic types are not low-risk wart viruses, and neither result is a cancer diagnosis.',
    },
    {
      id: 'm8-q4',
      stem: 'A 22-year-old woman asks whether the HPV vaccine can cure the HPV infection she was diagnosed with last year. What is the correct counselling?',
      options: [
        'The vaccine will clear the infection within six months',
        'The vaccine treats CIN2 but not CIN3',
        'The vaccine replaces the need for colposcopy',
        'The vaccine prevents new vaccine-type infection but does not treat established infection or lesions',
      ],
      answerIndex: 3,
      explanation:
        'Prophylactic L1-VLP vaccines generate neutralising antibodies that block new infection. They do not clear existing HPV, regress CIN or treat warts or cancer, and they do not replace indicated colposcopy.',
    },
    {
      id: 'm8-q5',
      stem: 'A national programme wants the broadest coverage of carcinogenic HPV types among the three familiar vaccines. Which product and type list is correct?',
      options: [
        'Cervarix - 16, 18',
        'Gardasil 9 - 6, 11, 16, 18, 31, 33, 45, 52, 58',
        'Gardasil - 6, 11, 16, 18, 31, 33',
        'Cervarix - 6, 11, 16, 18',
      ],
      answerIndex: 1,
      explanation:
        'Gardasil 9 is nonavalent and covers 6, 11, 16, 18, 31, 33, 45, 52 and 58. Cervarix is bivalent 16/18 and Gardasil is quadrivalent 6/11/16/18.',
    },
    {
      id: 'm8-q6',
      stem: 'A 13-year-old immunocompetent girl presents for HPV vaccination under the October 2026 WHO SAGE advice. What is the most efficient recommended schedule?',
      options: [
        'Three doses at 0, 1-2 and 6 months',
        'Two doses six months apart',
        'A single dose',
        'No vaccination until age 18',
      ],
      answerIndex: 2,
      explanation:
        'SAGE concluded in October 2026 that a single dose is the most efficient schedule for girls aged 9-14, and a single dose can be used up to age 30. The three-dose schedule applies to immunocompromised patients.',
    },
    {
      id: 'm8-q7',
      stem: 'A 26-year-old woman with well-controlled HIV attends for HPV vaccination. Which schedule does current WHO guidance support?',
      options: [
        'At least two doses, and three where feasible',
        'A single dose, as for immunocompetent adolescents',
        'No vaccination because she is HPV positive',
        'One dose followed by screening only',
      ],
      answerIndex: 0,
      explanation:
        'WHO continues to state that immunocompromised people and people living with HIV need at least two doses and, where feasible, three. The single-dose simplification is not automatically extended to this group.',
    },
    {
      id: 'm8-q8',
      stem: 'A 45-year-old woman had a normal HPV test 4 years ago and completed HPV vaccination as an adolescent. She asks whether she still needs screening. What is the correct advice?',
      options: [
        'Screening can stop because she was vaccinated before sexual debut',
        'Screening is only needed if she develops symptoms',
        'A single cytology test at age 50 is sufficient',
        'She should continue routine screening because vaccine coverage is incomplete and prior infection is possible',
      ],
      answerIndex: 3,
      explanation:
        'Vaccination is primary prevention and does not cover every carcinogenic type; prior infection and incomplete vaccination are also possible. Screening remains necessary according to the national programme.',
    },
    {
      id: 'm8-q9',
      stem: 'A public-health team is asked to define cervical cancer elimination under the WHO strategy. Which statement is correct?',
      options: [
        'Elimination means no HPV infections remain in the population',
        'Elimination means fewer than 4 new cervical cancer cases per 100,000 women per year',
        'Elimination means 90% of women have had a hysterectomy',
        'Elimination means screening can be withdrawn once vaccination coverage reaches 90%',
      ],
      answerIndex: 1,
      explanation:
        'WHO defines elimination as an incidence below 4 new cases per 100,000 women per year. It is a public-health threshold, not viral eradication, and all three pillars continue.',
    },
    {
      id: 'm8-q10',
      stem: 'A 38-year-old woman has a cervical lesion in which the viral genome is integrated and E2 is deleted. Which consequence is most likely?',
      options: [
        'Reduced E6/E7 expression and lesion regression',
        'Loss of L1 capsid protein with no effect on oncogene expression',
        'Derepression of E6/E7 with increased transforming drive',
        'Immediate clearance of all HPV DNA from the cervix',
      ],
      answerIndex: 2,
      explanation:
        'E2 normally restrains E6/E7 transcription. Integration that disrupts E2 removes this restraint, producing persistent E6/E7 overexpression and a stronger transforming drive. Integration is common but not universal.',
    },
  ],
};
