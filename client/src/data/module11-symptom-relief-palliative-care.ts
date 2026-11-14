import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 11 - Symptom Relief, Cancer Pain Ladder & Palliative Care
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 110-120) with the
 * ESGO/ESTRO/ESP cervical-cancer guideline, the ESGO resource-stratified
 * guidance and ASCO/ESMO cancer-pain principles.
 *
 * Covers:
 * - Early integrated palliative care and the symptom burden of advanced cancer
 * - Multidimensional pain assessment: ESAS-r, POS/IPOS and ECS-CP
 * - The analgesic ladder, opioid initiation, titration and breakthrough dosing
 * - Opioid selection in renal impairment, fentanyl and methadone safety
 * - Opioid-induced constipation, PAMORAs, nausea and delirium
 * - OIH, cancer-related neuropathic pain and malignant psoas syndrome
 * - Non-pain palliation: bleeding, obstruction, lymphoedema and renal failure
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Educational material only: dose figures are source-note teaching values and
 * must never be used as stand-alone opioid prescriptions.
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const SYMPTOM_RELIEF_PALLIATIVE_CARE_MODULE: StudioModule = {
  id: 'pg-mod-11-symptom-relief-palliative-care',
  track: 'NEET_PG',
  title: 'Symptom Relief, Cancer Pain Ladder & Palliative Care',
  shortTitle: 'Symptom Relief & Palliative Care',
  summary:
    'Complete PG clinical revision module on symptom relief and palliative care in gynaecological oncology. Features early integrated palliative care, ESAS-r, POS/IPOS and ECS-CP assessment, the analgesic ladder, oral morphine titration, breakthrough-dose conventions, opioid selection in renal impairment, PAMORAs for opioid-induced constipation, OIH versus tolerance versus progression, cancer neuropathic pain, malignant psoas syndrome, non-pain palliation, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Early palliative care, the pain ladder, breakthrough dosing and OIH.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 50,
  tags: [
    'Early Integrated Palliative Care',
    'ESAS-r 9 Symptoms',
    'POS/IPOS Scoring',
    'ECS-CP N-I-P-A-C',
    'Analgesic Ladder',
    'Oral Morphine Titration',
    'Breakthrough Dose Fractions',
    'Opioids in Renal Impairment',
    'PAMORAs & Constipation',
    'OIH vs Tolerance',
    'Cancer Neuropathic Pain',
    'Malignant Psoas Syndrome',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 110-120) • ESGO/ESTRO/ESP cervical cancer • ESGO resource-stratified 2025 • ASCO/ESMO cancer pain',
  updatedAtISO: '2026-11-14T09:00:00.000Z',
  notes: [
    {
      id: 'palliative-care-framework',
      heading: 'Early Integrated Palliative Care: The Modern Framework',
      intro:
        'Palliative care in gynaecological oncology begins early, runs alongside disease-directed treatment and addresses physical, psychological, social and spiritual needs. It is a care approach, not a place, and it is not synonymous with stopping anticancer treatment or with the final days of life.',
      flow: [
        'Recognise advanced or incurable disease · do not wait for anticancer treatment to stop',
        'Integrate · embed palliative care alongside surgery, chemotherapy, radiotherapy or maintenance therapy',
        'Assess · map pain, lymphoedema, obstruction, bleeding, renal failure, fistulae, cachexia and distress',
        'Plan · build a multidisciplinary symptom plan with the patient and family',
        'Deliver · use the least burdensome effective intervention and reassess benefit',
        'Escalate · recognise the terminal phase and shift goals explicitly to comfort',
      ],
      bullets: [
        'ESGO Position: the ESGO/ESTRO/ESP cervical-cancer guideline states that early palliative care should be integrated with oncological treatment for advanced cervical cancer.',
        'Definition: palliative care relieves symptoms, preserves function and quality of life, supports psychological, social and spiritual needs and helps patients and families make informed decisions.',
        'Multidisciplinary Team: gynaecological oncology, palliative medicine, pain medicine or anaesthesia, radiation oncology, nursing, physiotherapy, social work and spiritual care.',
        'Advanced Cervical Cancer Burdens: pain including neuropathic pelvic pain, lower-limb lymphoedema, malignant intestinal obstruction, vaginal bleeding, malodorous discharge, obstructive renal failure, fistulae, cachexia and fatigue.',
        'First-Line Strong Opioid: oral morphine is the first-choice strong opioid for moderate-to-severe cancer pain when the oral route is suitable.',
        'Alternative Routes: transdermal or subcutaneous opioids may be needed with bowel obstruction, swallowing difficulty, renal failure or unacceptable toxicity.',
        'Neuropathic Adjuvants: gabapentin, pregabalin, duloxetine and tricyclic antidepressants are used when a neuropathic component is present.',
        'Interventional Options: severe refractory pelvic pain may benefit from a plexus block or spinal/neuraxial analgesia; palliative external-beam radiotherapy can relieve painful pelvic progression and bone metastases.',
        'Resource-Stratified Guidance: where a specialist palliative team is unavailable, involve pain-management teams, social services and other professionals; virtual consultation and training are encouraged.',
        'Patient Education: explain that opioids are used for pain and breathlessness, address addiction misconceptions and teach caregivers about adverse effects and rescue dosing.',
        'Quality Marker: a CT performed within 30 days of death is a possible marker of burdensome end-of-life care, but it is context-dependent and not a stand-alone quality metric.',
        'Transition to the Last Days: recognise poor performance status, anorexia, breathlessness, cough and abdominal distension, and document goals of care.',
      ],
      table: {
        head: ['Palliative Domain', 'Typical Problem', 'Example Intervention'],
        rows: [
          [
            'Pain',
            'Neuropathic pelvic pain, bone metastases, psoas invasion',
            'Opioid plus neuropathic adjuvant; palliative radiotherapy; plexus block',
          ],
          [
            'Lymphatic',
            'Lower-limb lymphoedema after lymphadenectomy or nodal irradiation',
            'Skin care, infection prevention, compression, manual lymphatic drainage',
          ],
          [
            'Gastrointestinal',
            'Malignant bowel obstruction, nausea, constipation',
            'Antiemetic, antisecretory, analgesic and individualised bowel strategy',
          ],
          [
            'Bleeding',
            'Vaginal bleeding from necrotic tumour',
            'Palliative radiotherapy, tranexamic acid, packing, selective embolisation',
          ],
          [
            'Discharge',
            'Malodorous necrotic vaginal discharge',
            'Vaginal hygiene and irrigation; selected topical antimicrobial treatment',
          ],
          [
            'Renal',
            'Obstructive uropathy and uraemia',
            'Ureteric stent or nephrostomy only after goals-of-care assessment',
          ],
          [
            'Fistulae',
            'Vesicovaginal or rectovaginal fistula',
            'Wound and skin care, containment, symptom control, selected diversion',
          ],
          [
            'Constitutional',
            'Cachexia, fatigue, anorexia',
            'Nutritional support where useful, symptom control, energy conservation',
          ],
          [
            'Psychosocial',
            'Anxiety, depression, isolation, spiritual distress',
            'Counselling, social work, family support, spiritual care according to preference',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: palliative care is introduced early and concurrently with anticancer treatment, not after it fails.',
        'Oral morphine is the first-choice strong opioid for moderate-to-severe cancer pain when the oral route is suitable.',
        'Where a specialist palliative team is unavailable, involve pain teams, social services and other professionals rather than leaving symptoms unmanaged.',
      ],
      trap: {
        title: 'Examiner trap - equating palliative care with terminal care',
        body: 'Palliative care is appropriate from the diagnosis of advanced or incurable disease and can continue during active chemotherapy, radiotherapy or maintenance treatment. Deferring it until the last days of life is a common and harmful error.',
      },
      traps: [
        {
          title: '• Waiting for anticancer treatment to stop before referring to palliative care.',
        },
        {
          title: '• Treating palliative care as a single specialty rather than a multidisciplinary approach.',
        },
        {
          title: '• Assuming a palliative care referral means the patient has been told to stop treatment.',
        },
      ],
    },
    {
      id: 'pain-assessment-tools',
      heading: 'Multidimensional Pain Assessment: ESAS-r, POS/IPOS & ECS-CP',
      intro:
        'Cancer pain is multidimensional. A complete assessment records mechanism, intensity, site, radiation, onset, duration, triggers, breakthrough episodes, functional effect, previous treatment and adverse effects, then adds emotional, social, cognitive and spiritual context. Three tools dominate: ESAS-r for symptom intensity, POS/IPOS for broader palliative outcomes and ECS-CP for pain complexity.',
      flow: [
        'Characterise the pain · mechanism, site, radiation, timing, triggers, function and prior treatment',
        'Screen the whole symptom burden · ESAS-r, nine symptoms each rated 0-10',
        'Assess broader needs · POS or IPOS for physical, emotional, spiritual, information and support concerns',
        'Classify complexity · ECS-CP records mechanism, incident pain, psychological distress, addictive behaviour and cognition',
        'Look for reversible causes and red flags · fracture, cord compression, obstruction, infection, renal failure',
        'Reassess at a defined interval · repeat the same tools to show improvement, stability or deterioration',
      ],
      bullets: [
        'ESAS-r: the standard version rates nine symptoms from 0 to 10 - pain, tiredness, drowsiness, nausea, lack of appetite, depression, anxiety, shortness of breath and overall wellbeing.',
        'ESAS-r Scoring: 0 generally means no symptom and 10 the worst possible intensity; the patient self-reports whenever possible and a proxy is documented as such.',
        'ESAS-r Limitation: it is a symptom-severity profile, not a diagnostic test, and it does not identify the cause of pain, delirium or dyspnoea.',
        'POS: the original Palliative Care Outcome Scale has 10 scored items using five response categories from 0 to 4, giving a total profile score of 0 to 40.',
        'POS Domains: physical symptoms, emotional, psychological and spiritual concerns, and whether the patient has adequate information and support.',
        'IPOS: the Integrated Palliative care Outcome Scale has 10 questions comprising 17 scored items, with a total ranging from 0 to 68; some items are excluded from the total under official scoring rules.',
        'ECS-CP: the Edmonton Classification System for Cancer Pain classifies five features that predict difficulty achieving analgesia and is not a pain-intensity scale.',
        'ECS-CP Mechanism (N): N0 no pain syndrome, Nc nociceptive, Ne neuropathic, Nx insufficient information; when mechanisms coexist the neuropathic component determines the classification.',
        'ECS-CP Incident Pain (I): Io absent, Ii present, Ix insufficient; incident pain is a transient moderate-to-severe flare over background pain no worse than moderate.',
        'ECS-CP Psychological Distress (P): Po absent, Pp present, Px insufficient; distress includes physical, psychological, social, spiritual or practical suffering that impairs coping.',
        'ECS-CP Addictive Behaviour (A): Ao absent, Aa present, Ax insufficient; a remote history of substance use alone does not establish current addictive behaviour.',
        'ECS-CP Cognitive Function (C): Co no impairment, Ci partial impairment affecting reporting, Cu severe impairment or unresponsiveness preventing a meaningful history, Cx insufficient.',
        'Profile Notation: an ECS-CP profile records one response in each domain, for example N__ / I__ / P__ / A__ / C__, and is repeated if the clinical situation changes.',
        'Red Flags: new back pain with neurological signs, suspected cord compression, fracture, obstruction, infection or metabolic crisis require urgent assessment rather than tool completion alone.',
      ],
      table: {
        head: ['Tool', 'Main Purpose', 'Structure / Output'],
        rows: [
          [
            'ESAS-r',
            'Patient-rated symptom intensity',
            '9 symptom ratings, each 0-10; repeated profile',
          ],
          [
            'POS',
            'Multidimensional palliative outcome',
            '10 items scored 0-4; total 0-40',
          ],
          [
            'IPOS',
            'Integrated palliative outcome',
            '10 questions / 17 scored items; total 0-68',
          ],
          [
            'ECS-CP',
            'Classifies pain complexity',
            'N-I-P-A-C categorical profile, not an intensity scale',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: ESAS-r measures symptom intensity, POS/IPOS measures multidimensional outcomes and ECS-CP classifies pain complexity.',
        'When nociceptive and neuropathic mechanisms coexist, the neuropathic mechanism drives the ECS-CP classification.',
        'A remote history of substance use is not the same as current addictive behaviour.',
      ],
      trap: {
        title: 'Examiner trap - treating ESAS, POS and ECS-CP as interchangeable',
        body: 'ESAS-r is a nine-item symptom-intensity profile scored 0-10. POS/IPOS measure broader palliative outcomes and support needs. ECS-CP is a five-domain categorical classification of pain complexity. Each answers a different question.',
      },
      traps: [
        {
          title: '• Calling ECS-CP a pain score out of 10 or out of 40.',
        },
        {
          title: '• Forgetting that ESAS-r has nine symptoms, not ten.',
        },
        {
          title: '• Recording a proxy ESAS-r without documenting that it was a proxy report.',
        },
      ],
    },
    {
      id: 'analgesic-ladder',
      heading: 'The Analgesic Ladder: Non-Opioids, Opioid Initiation & Titration',
      intro:
        'The ladder is a framework for matching analgesia to pain severity and mechanism, not a rigid staircase. Non-opioids and adjuvants remain important at every step, and the commonest error is escalating opioids without reassessing the cause of pain or adding the right co-analgesic.',
      flow: [
        'Step 1 · non-opioid for mild pain: paracetamol or an NSAID when not contraindicated',
        'Add a targeted co-analgesic · corticosteroid for inflammatory or oedematous pain, neuropathic agent for nerve pain',
        'Step 2 · weak opioid such as codeine for mild-to-moderate pain, recognising CYP2D6 variability',
        'Step 3 · strong opioid for moderate-to-severe pain: oral immediate-release morphine is standard first choice',
        'Titrate · start at an individually selected low dose, reassess early and adjust to effect and adverse effects',
        'Stabilise · once the 24-hour requirement is stable, convert to an extended-release background preparation with immediate-release rescue',
        'Rotate or refer · if pain is refractory or adverse effects are unacceptable, rotate the opioid or involve specialist palliative or pain care',
      ],
      bullets: [
        'Step 1 Non-Opioids: paracetamol and NSAIDs are useful for bone and soft-tissue pain when renal, gastric, cardiovascular and bleeding risks allow.',
        'Localised Pain: local anaesthetic or nerve blockade may be considered when pain follows a specific nerve distribution.',
        'Corticosteroids: may help selected inflammatory, oedematous or psoas-related pain under specialist direction; the handwritten dose annotation is not reproducible and is not carried forward.',
        'Raising the Pain Threshold: sleeplessness, depression, anxiety, uncertainty and isolation amplify suffering; counselling, reassurance, relaxation and exploring the pain narrative are therapeutic.',
        'Weak versus Strong: codeine is a weak opioid prodrug requiring CYP2D6 conversion to morphine, so response varies; morphine is the established strong opioid.',
        'Avoid Stacking: do not casually combine low- and high-potency opioids; choose a coherent regimen with a clear indication.',
        'Regular Dosing: give opioids at intervals appropriate to the formulation rather than waiting for pain to become severe.',
        'Immediate Release: used during dose finding because onset and peak are faster; the handwritten note quotes a peak around 30 minutes, which is approximate and formulation-dependent.',
        'Modified Release: takes several hours to reach peak effect and is not the preferred method for initial titration when pain is unstable or rapidly changing.',
        'Morphine Pharmacology: immediate-release morphine has a half-life of about four hours, and the notes describe four-hourly scheduling.',
        'Subcutaneous Route: subcutaneous morphine is a practical parenteral option when the oral route is unsuitable and is generally preferable to painful intramuscular injection in palliative care.',
        'Route Conversion: parenteral morphine is broadly one-half to one-third of the oral dose as a rough teaching concept; exact conversion requires local tables and clinical context.',
        'IV versus SC: intravenous morphine does not necessarily provide a major advantage over the subcutaneous route for many palliative patients.',
        'ASCO Principles: start at the lowest dose likely to achieve acceptable analgesia, use immediate-release opioid with early reassessment, continue beneficial non-opioids, educate about adverse effects and consider rotation when pain is refractory.',
        'Oxycodone Note Range: the handwritten notes quote 5-20 mg every 4-6 hours; this is a source-note range, not a universal starting prescription, and tolerance, route, organ function and age must be considered.',
      ],
      table: {
        head: ['Step', 'Typical Agent', 'Teaching Point'],
        rows: [
          [
            'Step 1 - mild pain',
            'Paracetamol, NSAID',
            'Continue at higher steps when beneficial and safe',
          ],
          [
            'Step 2 - mild to moderate',
            'Codeine',
            'Weak opioid prodrug; CYP2D6 variability alters response',
          ],
          [
            'Step 3 - moderate to severe',
            'Oral immediate-release morphine',
            'Standard first-choice strong opioid when the oral route is suitable',
          ],
          [
            'Step 4 - refractory or neuropathic',
            'Opioid plus adjuvant, block or radiotherapy',
            'Reassess mechanism before escalating the opioid',
          ],
          [
            'Stable background',
            'Extended-release morphine',
            'Convert only after the 24-hour requirement is stable; keep immediate-release rescue',
          ],
          [
            'Route failure',
            'Subcutaneous morphine',
            'Preferred over intramuscular injection in palliative care',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: oral immediate-release morphine is the standard first-choice strong opioid for moderate-to-severe cancer pain when the oral route is suitable.',
        'Start low, reassess early and titrate; do not begin with a modified-release preparation while pain is unstable.',
        'Subcutaneous is generally preferred over intramuscular injection in palliative care.',
      ],
      trap: {
        title: 'Examiner trap - starting a modified-release opioid for unstable pain',
        body: 'Extended-release preparations are for stable background pain after the daily requirement has been established. Initial titration uses an immediate-release opioid with early reassessment and an appropriate rescue dose.',
      },
      traps: [
        {
          title: '• Escalating the opioid without reassessing the pain mechanism.',
        },
        {
          title: '• Quoting the handwritten oxycodone 5-20 mg range as a universal starting dose.',
        },
        {
          title: '• Using intramuscular morphine when the subcutaneous route is available.',
        },
      ],
    },
    {
      id: 'breakthrough-and-opioid-choice',
      heading: 'Breakthrough Dosing, Opioid Selection & Renal Impairment',
      intro:
        'Breakthrough pain is a transient flare over otherwise controlled background pain. The rescue dose is a fraction of the total daily opioid, but different guidelines quote different fractions, and opioid selection changes substantially in renal impairment, swallowing difficulty and unstable pain.',
      flow: [
        'Confirm the background is controlled · persistent uncontrolled pain needs baseline reassessment, not more rescue doses',
        'Characterise the episode · spontaneous or incident, trigger, duration and severity',
        'Give an immediate-release rescue dose · use the fraction specified by the relevant guideline',
        'Reassess · analgesia, sedation, respiration, bowel function and the number of rescue doses used',
        'If rescue is frequent · recalculate the baseline requirement and re-examine the pain mechanism',
        'Select the opioid and route · account for renal and hepatic function, swallowing, bowel function and tolerance',
      ],
      bullets: [
        'Breakthrough Pain: a transient exacerbation over relatively controlled background pain; it may be spontaneous or predictable and triggered by movement, defaecation, urination or a procedure.',
        'Handwritten Rescue Rule: approximately one-sixth to one-tenth (1/6-1/10) of the total 24-hour opioid dose.',
        'ESMO Rescue Rule: commonly 10-15 percent of the total daily opioid dose.',
        'ASCO Rescue Rule: immediate-release rescue opioid at 5-20 percent of the daily morphine-equivalent dose for patients on around-the-clock opioids.',
        'Interpretation: these are educational percentage ranges used by different guidance documents, not interchangeable fixed prescriptions; do not combine them mechanically.',
        'Frequent Rescue: more than occasional rescue use should trigger reassessment of the baseline regimen and the cause of breakthrough pain.',
        'Morphine: standard strong opioid; morphine-3-glucuronide and morphine-6-glucuronide can accumulate in renal impairment and contribute to neurotoxicity or prolonged opioid effects.',
        'Oxycodone: strong opioid alternative; renal impairment still requires careful titration and frequent monitoring, and it is not risk-free.',
        'Hydromorphone: alternative strong opioid; its metabolite may accumulate in renal dysfunction, so titrate carefully and monitor.',
        'Fentanyl: potent, highly lipid-soluble mu agonist available as a transdermal patch and transmucosal products; it has no clinically important active renally cleared metabolite, so it may be considered in renal impairment with continued monitoring.',
        'Fentanyl Patch Safety: delayed onset and offset mean the patch is only for opioid-tolerant patients with stable requirements, never for opioid-naive patients or rapid titration.',
        'Transmucosal Fentanyl: reserved for breakthrough cancer pain in appropriately opioid-tolerant patients and is product-specific; it is not a general substitute for immediate-release oral morphine.',
        'Methadone: mu agonist with NMDA-antagonist and monoamine reuptake effects; long and variable half-life, delayed accumulation, non-linear conversion, drug interactions and QT prolongation or torsades risk require specialist initiation and ECG where appropriate.',
        'Pethidine: generally avoided for ongoing cancer pain because normeperidine accumulates and causes neuroexcitation, agitation or seizures, particularly in renal impairment.',
        'Codeine and Tramadol: codeine is a CYP2D6 prodrug with variable response; tramadol has mu-opioid and serotonergic or noradrenergic actions, lowers the seizure threshold and risks serotonin toxicity.',
        'ASCO Renal Advice: avoid morphine, meperidine, codeine and tramadol in significant renal impairment when alternatives are available.',
        'Mixed-Mechanism Opioids: the notes quote tramadol 300-400 mg/day and tapentadol 500-600 mg/day; these are historical source-note figures, not endorsed maxima, and product limits, renal and hepatic function, age, seizure risk and serotonergic interactions must be checked.',
        'Cannabinoids and Ketamine: evidence for cannabinoids in cancer pain is limited and formulations vary; ketamine is a specialist NMDA antagonist for selected refractory or central sensitisation states with psychotomimetic and cardiovascular effects.',
        'Buprenorphine: a partial mu agonist available transdermally and sublingually; formulation, opioid tolerance and clinical context determine suitability.',
      ],
      table: {
        head: ['Source', 'Rescue Dose Convention'],
        rows: [
          [
            'Handwritten notes, p. 113',
            'Approximately 1/6-1/10 of the total 24-hour opioid dose',
          ],
          [
            'ESMO cancer-pain guidance',
            'Commonly 10-15 percent of the total daily dose',
          ],
          [
            'ASCO cancer-pain guideline',
            '5-20 percent of the daily morphine-equivalent dose',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: know which source a question is testing - 1/6-1/10 in the notes, 10-15 percent in ESMO and 5-20 percent in ASCO.',
        'Transdermal fentanyl is a maintenance route for stable, opioid-tolerant patients and is never a rapid titration tool.',
        'Pethidine is a poor choice for chronic cancer pain because normeperidine causes neurotoxicity.',
      ],
      trap: {
        title: 'Examiner trap - treating one breakthrough percentage as universally mandated',
        body: 'The handwritten notes, ESMO and ASCO quote different rescue fractions. Answer according to the named guidance, and remember that any single figure is a starting point that must be individualised to tolerance, formulation, age, organ function and local protocol.',
      },
      traps: [
        {
          title: '• Using a fentanyl patch to titrate pain rapidly in an opioid-naive patient.',
        },
        {
          title: '• Assuming fentanyl, methadone, oxycodone or hydromorphone are entirely renal-safe.',
        },
        {
          title: '• Giving transmucosal fentanyl as a routine rescue medicine to any patient.',
        },
        {
          title: '• Quoting tramadol or tapentadol note ranges as safe maximum daily doses.',
        },
      ],
    },
    {
      id: 'opioid-adverse-effects',
      heading: 'Opioid-Induced Constipation, PAMORAs, Nausea & Delirium',
      intro:
        'Opioids reduce propulsive motility, delay gastric emptying, reduce secretion and increase sphincter tone, so constipation persists throughout treatment rather than settling with time. Prevention is expected; PAMORAs are a targeted escalation for constipation that persists despite an adequate laxative regimen.',
      flow: [
        'Take a baseline bowel history · stool frequency, consistency, straining, abdominal pain, vomiting and last bowel movement',
        'Examine when indicated · assess for faecal impaction, obstruction and an acute abdomen',
        'Exclude red flags · malignant bowel obstruction, ileus, ascites and disease progression are not routine constipation',
        'Start prophylaxis with regular opioids · a stimulant laxative such as senna with or without a stool softener',
        'Optimise · add an osmotic agent such as polyethylene glycol according to local protocol and reassess',
        'Escalate to a PAMORA only if opioid-induced constipation persists despite laxatives and obstruction has been excluded',
        'Monitor · response, adverse effects, renal adjustment and product-specific interactions',
      ],
      bullets: [
        'Mechanism: peripheral mu-opioid receptors in the gut reduce propulsive motility, delay gastric emptying, reduce intestinal secretion and increase sphincter tone.',
        'Assessment: ask about baseline bowel habit, stool consistency, straining, abdominal pain, nausea, vomiting and the last bowel movement; review constipating drugs, hydration, mobility, intake and metabolic causes.',
        'Do Not Assume: not all abdominal distension is opioid constipation - malignant bowel obstruction, ileus, ascites and progression must be considered.',
        'Prevention: start a preventive bowel regimen when regular opioid therapy begins unless contraindicated.',
        'First-Line Laxatives: a stimulant such as senna, with or without a stool softener, is commonly used; an osmotic agent such as polyethylene glycol may be added or used according to local protocols.',
        'Treatment Target: soft, formed bowel movements without straining, with reassessment rather than unchecked constipation.',
        'Bulk-Forming Agents: may be unhelpful or worsen symptoms with low fluid intake, poor motility or obstruction risk.',
        'PAMORAs: peripherally acting mu-opioid receptor antagonists include methylnaltrexone (often subcutaneous), naloxegol (oral) and naldemedine (oral).',
        'PAMORA Mechanism: they antagonise peripheral mu-opioid receptors and can improve opioid-induced constipation while generally preserving central analgesia.',
        'PAMORA Indication: consider when opioid-induced constipation persists despite an appropriate conventional laxative regimen and other causes have been assessed.',
        'PAMORA Contraindication: avoid in known or suspected mechanical bowel obstruction; use caution where bowel-wall integrity is compromised or perforation risk is elevated.',
        'PAMORA Variability: methylnaltrexone, naloxegol and naldemedine are not interchangeable in dose, route, renal adjustment or interactions; check product information.',
        'Nausea and Vomiting: assess for constipation, gastric stasis, bowel obstruction, other medication effects, metabolic disturbance and progressive cancer before adding an antiemetic.',
        'Delirium: altered mental status in advanced cancer is multifactorial - opioid toxicity, infection, dehydration, hypoxia, renal failure, electrolyte abnormalities, drug interactions and disease progression.',
        'Naloxone: an emergency reversal agent for clinically significant opioid-induced respiratory or central nervous system depression, not a routine treatment for constipation or ordinary drowsiness; reversal can precipitate acute pain and withdrawal.',
      ],
      table: {
        head: ['Step', 'Action'],
        rows: [
          [
            'Step 1',
            'Take a baseline bowel history and identify obstruction or impaction red flags',
          ],
          [
            'Step 2',
            'Begin a prophylactic bowel regimen when a regular opioid is started',
          ],
          [
            'Step 3',
            'Titrate a stimulant laxative and add an osmotic laxative as clinically appropriate',
          ],
          [
            'Step 4',
            'If constipation persists, reassess causes and adherence; consider a PAMORA if opioid-induced constipation is likely',
          ],
          [
            'Step 5',
            'Do not use a PAMORA in known or suspected mechanical bowel obstruction; consider bowel-wall integrity and perforation risk',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: start bowel prophylaxis with the first regular opioid rather than waiting for constipation to develop.',
        'PAMORAs treat opioid-induced constipation but are avoided in known or suspected mechanical bowel obstruction.',
        'Naloxone is for significant respiratory or CNS depression, not for routine drowsiness or constipation.',
      ],
      trap: {
        title: 'Examiner trap - giving a PAMORA before excluding obstruction',
        body: 'A distended, painful abdomen in a patient on opioids may be malignant bowel obstruction, ileus or progression rather than simple constipation. Exclude obstruction and assess bowel-wall integrity before considering methylnaltrexone, naloxegol or naldemedine.',
      },
      traps: [
        {
          title: '• Prescribing a PAMORA for suspected mechanical bowel obstruction.',
        },
        {
          title: '• Advising bulk-forming fibre alone in a dehydrated patient with poor motility.',
        },
        {
          title: '• Using naloxone to treat ordinary opioid-related drowsiness.',
        },
        {
          title: '• Treating delirium as pure opioid toxicity without looking for infection, dehydration or uraemia.',
        },
      ],
    },
    {
      id: 'oih-neuropathic-psoas',
      heading: 'OIH, Cancer Neuropathic Pain & Malignant Psoas Syndrome',
      intro:
        'When pain worsens despite escalating opioids, the reflex increase in dose is often wrong. Opioid-induced hyperalgesia, tolerance, withdrawal, neurotoxicity and disease progression produce different patterns, and cancer-related neuropathic pain usually needs an adjuvant rather than more opioid alone.',
      flow: [
        'Reassess the disease · new metastasis, fracture, infection, obstruction, cord or plexus compression',
        'Review the medication history · missed doses, absorption, interactions, recent reductions and rescue use',
        'Differentiate the syndrome · tolerance, OIH, withdrawal, neurotoxicity or progression',
        'Identify a neuropathic or incident component · use the ECS-CP domains if helpful',
        'Choose a targeted response · treat the cause, optimise or rotate the opioid, add an adjuvant, use radiotherapy or a block',
        'Involve specialist palliative or pain care early for refractory or complex presentations',
      ],
      bullets: [
        'OIH Definition: opioid-induced hyperalgesia is a paradoxical increase in pain sensitivity associated with opioid exposure, with pain that may become diffuse or spread beyond the original territory.',
        'OIH Mechanism: neuroadaptive changes and opioid metabolites are implicated; hypersensitivity to normally painful stimuli is described.',
        'Tolerance versus OIH: tolerance is a reduced response to a given opioid dose, whereas OIH is a paradoxical increase in pain sensitivity in which escalation may worsen the problem.',
        'Alternatives to Consider: disease progression, withdrawal after abrupt reduction or interruption, neuropathic pain and opioid-induced neurotoxicity.',
        'OIH Management: there is no single definitive bedside test; use history, examination, disease status and medication review, then consider cautious opioid reduction, rotation, NMDA-modulating approaches such as methadone or ketamine, or co-analgesics.',
        'Safety: avoid abrupt discontinuation in a physically dependent patient.',
        'CRNP Mechanisms: direct tumour invasion or compression of nerve roots, plexus or peripheral nerves; bone metastases; chemotherapy-associated peripheral neuropathy; radiation plexopathy or fibrosis; post-surgical nerve injury or neuroma.',
        'CRNP Prevalence: the handwritten notes quote around 40 percent; this is a source-note estimate that varies with cancer type, stage, definition and assessment method.',
        'CRNP Clues: burning, electric-shock or shooting pain, tingling, numbness, dysaesthesia, allodynia, hyperalgesia, dermatomal or plexus distribution, and coexisting weakness or sensory loss.',
        'CRNP Management: treat the cause when feasible, use an opioid for moderate or severe pain but do not rely on escalation alone, and add gabapentin, pregabalin, duloxetine or a tricyclic antidepressant according to age, renal function, falls risk, cognition, cardiac history and interactions.',
        'Corticosteroids: may be considered for selected tumour-related oedema or nerve compression under specialist direction; they are not a universal neuropathic analgesic.',
        'Interventional Care: nerve or plexus blocks and spinal analgesia may be considered for severe refractory pain.',
        'Malignant Psoas Syndrome: a rare, difficult pain syndrome from malignant infiltration of the psoas or iliopsoas muscle and adjacent lumbar plexus structures.',
        'MPS Pattern: deep ipsilateral back, flank, lower abdominal, groin or thigh pain; painful fixed flexion of the hip or inability to extend it; pain worse with passive hip extension; impaired gait.',
        'MPS Neurology: ipsilateral proximal lumbosacral or lumbar plexopathy may cause neuropathic symptoms, sensory disturbance or weakness; CT, MRI or pathology shows psoas invasion.',
        'MPS Mechanism: deep somatic nociceptive pain from muscle invasion, inflammation and spasm combines with peripheral neuropathic pain from plexus injury, so it is often refractory to routine analgesia.',
        'MPS Management: multimodal and individualised - strong opioid with rescue, neuropathic adjuvants, NSAID or corticosteroid only when indicated and safe, muscle spasm treatment, palliative radiotherapy, image-guided nerve or plexus block, physiotherapy, positioning, walking aids and multidisciplinary involvement.',
      ],
      table: {
        head: ['Condition', 'Key Feature'],
        rows: [
          [
            'Tolerance',
            'Less analgesia from the same opioid dose; may need dose or regimen reassessment',
          ],
          [
            'Opioid-induced hyperalgesia',
            'Paradoxical increased pain sensitivity, sometimes diffuse or outside the original area',
          ],
          [
            'Disease progression',
            'Pain changes because the tumour or a complication has progressed',
          ],
          [
            'Withdrawal',
            'Pain plus autonomic or behavioural features after abrupt reduction or interruption',
          ],
          [
            'Neurotoxicity',
            'Sedation, confusion, hallucinations, myoclonus, delirium or seizures; may coexist with hyperalgesia',
          ],
          [
            'Malignant psoas syndrome',
            'Deep ipsilateral pain, painful flexed hip, worse on extension, lumbar plexopathy and psoas invasion',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: OIH is not tolerance - more opioid may worsen paradoxical hyperalgesia, so reassess before escalating.',
        'Neuropathic cancer pain usually needs an opioid plus gabapentin, pregabalin, duloxetine or a tricyclic antidepressant.',
        'Malignant psoas syndrome combines somatic muscle pain with lumbar plexopathy and needs multimodal care.',
      ],
      trap: {
        title: 'Examiner trap - escalating the opioid in suspected OIH',
        body: 'Rising pain with rising opioid dose can be tolerance, progression, withdrawal, neurotoxicity or OIH. In OIH, escalation may worsen sensitisation. Reassess the disease and medication history, then consider cautious reduction, rotation or an NMDA-modulating strategy with specialist input.',
      },
      traps: [
        {
          title: '• Calling every rising opioid requirement opioid-induced hyperalgesia.',
        },
        {
          title: '• Abruptly stopping opioids in a physically dependent patient.',
        },
        {
          title: '• Treating malignant psoas syndrome as simple musculoskeletal back pain.',
        },
        {
          title: '• Relying on opioid escalation alone for a neuropathic mechanism.',
        },
      ],
    },
    {
      id: 'non-pain-palliation',
      heading: 'Non-Pain Palliation: Bleeding, Obstruction, Lymphoedema & Renal Failure',
      intro:
        'Advanced gynaecological cancer produces problems that analgesia alone cannot solve. Each intervention must be matched to prognosis, performance status, prior treatment and the patient goals, because a technically feasible procedure is not always a beneficial one.',
      flow: [
        'Identify the dominant problem · bleeding, obstruction, lymphoedema, fistula, renal failure or malodour',
        'Assess goals, prognosis and performance status · establish what the patient values',
        'Choose the least burdensome effective option · consider non-invasive measures first where appropriate',
        'Involve the multidisciplinary team · palliative medicine, radiation oncology, interventional radiology, nursing and allied health',
        'Deliver and reassess · continue only if the intervention produces meaningful benefit',
      ],
      bullets: [
        'Palliative Radiotherapy: external-beam radiotherapy can relieve painful pelvic progression and bone metastases when feasible, taking prognosis, performance status, symptoms, prior radiation and ability to attend into account.',
        'Hypofractionation: shorter palliative schedules may be appropriate in selected advanced disease; the exact regimen is radiation-oncology dependent.',
        'Lymphoedema: can follow lymphadenectomy, nodal irradiation or tumour-related lymphatic obstruction; management includes skin care, infection prevention, compression and specialist physiotherapy or manual lymphatic drainage.',
        'Lymphoedema Expectations: chronic lymphoedema may not be fully reversible, so early recognition and consistent therapy matter.',
        'Malignant Bowel Obstruction: symptom-oriented multidisciplinary care with a parenteral route when needed; antiemetic, antisecretory, analgesic and bowel-emptying strategies are individualised.',
        'MBO Surgery: only for selected patients after assessing performance status, disease pattern and likely benefit.',
        'MBO Nutrition: parenteral nutrition or fluids are not automatically beneficial at the end of life; discuss comfort, goals and likely benefit with the patient.',
        'Vaginal Bleeding: options include palliative radiotherapy, tranexamic acid, vaginal packing and selective arterial embolisation depending on severity and local resources.',
        'Major Haemorrhage: requires urgent multidisciplinary management and may need comfort-focused emergency measures consistent with the goals of care.',
        'Malodorous Discharge: necrotic tumour may cause malodour; vaginal hygiene and irrigation with selected topical antimicrobial treatment may be considered by the treating team.',
        'Obstructive Renal Failure: pelvic tumour may compress ureters and cause hydronephrosis, uraemia, pruritus, dyspnoea, delirium and worsened pain.',
        'Renal Decompression: a ureteric stent or percutaneous nephrostomy may be considered after evaluating performance status, prognosis, symptoms, renal function and patient goals, weighing procedural burden and complication risk against anticipated benefit.',
        'Fistulae, Cachexia and Fatigue: address with a multidisciplinary team including symptom control, wound and skin care, nutritional support where useful, psychological support, social work, family and caregiver support and spiritual care according to preference.',
      ],
      table: {
        head: ['Problem', 'Options', 'Caution'],
        rows: [
          [
            'Painful pelvic progression or bone metastasis',
            'Palliative external-beam radiotherapy; hypofractionated schedule in selected patients',
            'Consider prior radiotherapy, performance status, prognosis and ability to attend',
          ],
          [
            'Lower-limb lymphoedema',
            'Skin care, infection prevention, compression, manual lymphatic drainage',
            'May not be fully reversible; needs consistent specialist therapy',
          ],
          [
            'Malignant bowel obstruction',
            'Antiemetic, antisecretory, analgesic and individualised bowel strategy; surgery in selected patients',
            'Parenteral nutrition or fluids are not automatically beneficial at the end of life',
          ],
          [
            'Vaginal bleeding',
            'Palliative radiotherapy, tranexamic acid, packing, selective arterial embolisation',
            'Major haemorrhage needs urgent multidisciplinary and goals-consistent care',
          ],
          [
            'Obstructive renal failure',
            'Ureteric stent or percutaneous nephrostomy after goals assessment',
            'Weigh procedural burden and complications against expected benefit',
          ],
          [
            'Malodorous discharge',
            'Vaginal hygiene and irrigation; selected topical antimicrobials',
            'Address patient dignity and caregiver support',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: palliative radiotherapy treats symptoms, not the cancer - the decision depends on prognosis, performance status and prior radiotherapy.',
        'Parenteral nutrition and fluids are not automatically beneficial at the end of life.',
        'A feasible stent or nephrostomy still requires a goals-of-care discussion before insertion.',
      ],
      trap: {
        title: 'Examiner trap - assuming every obstruction or renal failure must be decompressed',
        body: 'Intervention in advanced cancer is judged by meaningful benefit against procedural burden. Performance status, prognosis, symptoms, prior treatment and patient goals determine whether surgery, stenting, nephrostomy or comfort-focused care is appropriate.',
      },
      traps: [
        {
          title: '• Offering palliative radiotherapy without considering prior radiation and performance status.',
        },
        {
          title: '• Treating malignant bowel obstruction with routine laxatives and oral intake.',
        },
        {
          title: '• Inserting a nephrostomy without discussing goals of care.',
        },
        {
          title: '• Assuming lymphoedema will resolve completely with compression alone.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'Palliative care is introduced early and runs alongside anticancer treatment.',
        'Palliative care is not the same as end-of-life care.',
        'ESAS-r assesses nine symptoms, each rated 0-10.',
        'ESAS-r symptoms: pain, tiredness, drowsiness, nausea, appetite, depression, anxiety, breathlessness and wellbeing.',
        'POS has 10 items scored 0-4 with a total of 0-40.',
        'IPOS has 17 scored items with a total of 0-68.',
        'ECS-CP domains are N-I-P-A-C: mechanism, incident pain, psychological distress, addictive behaviour and cognition.',
        'ECS-CP classifies pain complexity, not pain intensity.',
        'Oral immediate-release morphine is the standard first-choice strong opioid when the oral route is suitable.',
        'Start low, reassess early and titrate; avoid modified-release opioids for unstable pain.',
        'Breakthrough dose in the notes is 1/6-1/10 of the 24-hour opioid dose.',
        'ESMO quotes 10-15 percent and ASCO quotes 5-20 percent for rescue dosing.',
        'Frequent rescue doses mean the baseline regimen needs reassessment.',
        'Parenteral morphine is roughly one-half to one-third of the oral dose as a teaching concept.',
        'Subcutaneous morphine is generally preferred over intramuscular injection in palliative care.',
        'Morphine metabolites accumulate in renal impairment and can cause neurotoxicity.',
        'Avoid morphine, codeine, pethidine and tramadol in significant renal impairment when alternatives exist.',
        'Fentanyl may be considered in renal impairment but still requires monitoring.',
        'Transdermal fentanyl is only for opioid-tolerant patients with stable requirements.',
        'Methadone has NMDA-antagonist activity but a long variable half-life and QT-prolongation risk.',
        'Pethidine is avoided because normeperidine causes neurotoxicity.',
        'Start bowel prophylaxis with the first regular opioid.',
        'PAMORAs are avoided in known or suspected mechanical bowel obstruction.',
        'OIH is paradoxical hyperalgesia, not tolerance; escalation may worsen it.',
        'Neuropathic cancer pain needs gabapentin, pregabalin, duloxetine or a tricyclic antidepressant alongside the opioid.',
      ],
      traps: [
        {
          title: '• Equating palliative care with terminal care or stopping treatment.',
        },
        {
          title: '• Confusing ESAS-r, POS/IPOS and ECS-CP.',
        },
        {
          title: '• Quoting one breakthrough percentage as universally mandated.',
        },
        {
          title: '• Using a fentanyl patch for rapid titration or in an opioid-naive patient.',
        },
        {
          title: '• Treating methadone as a simple morphine conversion.',
        },
        {
          title: '• Giving a PAMORA before excluding mechanical bowel obstruction.',
        },
        {
          title: '• Calling every rising opioid requirement OIH.',
        },
        {
          title: '• Assuming all alternative opioids are safe in renal failure.',
        },
        {
          title: '• Using naloxone for routine drowsiness rather than significant respiratory or CNS depression.',
        },
        {
          title: '• Decompressing every obstruction or hydronephrosis without a goals-of-care discussion.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm11-f1',
      front: 'What is the core principle of early integrated palliative care in advanced cervical cancer?',
      back: 'Palliative care is introduced early and delivered alongside anticancer treatment, addressing physical, psychological, social and spiritual needs. It is not limited to the final days of life or to stopping treatment.',
    },
    {
      id: 'm11-f2',
      front: 'Which nine symptoms does ESAS-r assess?',
      back: 'Pain, tiredness, drowsiness, nausea, lack of appetite, depression, anxiety, shortness of breath and overall wellbeing. Each is rated from 0 to 10.',
    },
    {
      id: 'm11-f3',
      front: 'How do POS and IPOS differ in structure?',
      back: 'POS has 10 scored items using five response categories from 0 to 4, total 0-40. IPOS has 10 questions with 17 scored items, total 0-68; some items are excluded from the total.',
    },
    {
      id: 'm11-f4',
      front: 'What are the five ECS-CP domains?',
      back: 'Mechanism (N), incident pain (I), psychological distress (P), addictive behaviour (A) and cognitive function (C). It classifies pain complexity, not pain intensity.',
    },
    {
      id: 'm11-f5',
      front: 'What is the first-choice strong opioid for moderate-to-severe cancer pain when the oral route is suitable?',
      back: 'Oral immediate-release morphine. Start at an individually selected low dose, reassess early and titrate to effect and adverse effects.',
    },
    {
      id: 'm11-f6',
      front: 'What rescue dose do the handwritten notes quote for breakthrough pain?',
      back: 'Approximately one-sixth to one-tenth (1/6-1/10) of the total 24-hour opioid dose.',
    },
    {
      id: 'm11-f7',
      front: 'How do ESMO and ASCO breakthrough-dose ranges differ from the notes?',
      back: 'ESMO commonly quotes 10-15 percent of the total daily opioid dose, and ASCO quotes 5-20 percent of the daily morphine-equivalent dose. These are guideline ranges, not interchangeable prescriptions.',
    },
    {
      id: 'm11-f8',
      front: 'Why is transdermal fentanyl unsuitable for rapid titration?',
      back: 'Onset and offset are delayed and the effect persists after patch removal. It is only for opioid-tolerant patients with stable requirements, not opioid-naive patients or unstable pain.',
    },
    {
      id: 'm11-f9',
      front: 'Which opioids should be avoided in significant renal impairment when alternatives exist?',
      back: 'ASCO advises avoiding morphine, meperidine, codeine and tramadol because of active or neurotoxic metabolite accumulation. Fentanyl may be considered, with continued monitoring.',
    },
    {
      id: 'm11-f10',
      front: 'What makes methadone a specialist opioid?',
      back: 'It has mu-agonist and NMDA-antagonist activity, but a long and variable half-life, delayed accumulation, non-linear conversion, drug interactions and QT-prolongation or torsades risk.',
    },
    {
      id: 'm11-f11',
      front: 'Why is pethidine avoided for ongoing cancer pain?',
      back: 'Normeperidine accumulates, especially in renal impairment, and causes neuroexcitation, agitation or seizures. Pethidine also has a short duration and is unsuitable for ongoing oral use.',
    },
    {
      id: 'm11-f12',
      front: 'How is opioid-induced constipation prevented and escalated?',
      back: 'Start a stimulant laxative such as senna with or without a stool softener when regular opioids begin, add an osmotic agent as needed, and consider a PAMORA only if constipation persists and obstruction is excluded.',
    },
    {
      id: 'm11-f13',
      front: 'When are PAMORAs contraindicated or avoided?',
      back: 'In known or suspected mechanical bowel obstruction. Use caution where bowel-wall integrity is compromised or perforation risk is elevated, and check product-specific renal and interaction information.',
    },
    {
      id: 'm11-f14',
      front: 'How does opioid-induced hyperalgesia differ from tolerance?',
      back: 'Tolerance is reduced analgesia from the same dose. OIH is paradoxical increased pain sensitivity, sometimes diffuse or outside the original area, and escalating the opioid may worsen it.',
    },
    {
      id: 'm11-f15',
      front: 'What is malignant psoas syndrome and how does it present?',
      back: 'Malignant infiltration of psoas and lumbar plexus causing deep ipsilateral back, flank, groin or thigh pain, a painful flexed hip worse on extension, gait impairment and lumbosacral plexopathy. Management is multimodal.',
    },
  ],

  mcqs: [
    {
      id: 'm11-q1',
      stem: 'A 58-year-old woman with stage IVB cervical cancer has severe pelvic pain and is starting chemotherapy. Her performance status is good. What is the most appropriate palliative approach?',
      options: [
        'Defer palliative care until chemotherapy is completed',
        'Integrate palliative care now alongside oncological treatment, with a structured symptom plan',
        'Refer only for terminal care when treatment stops',
        'Avoid opioids because they may interact with chemotherapy',
      ],
      answerIndex: 1,
      explanation:
        'ESGO/ESTRO/ESP guidance supports early integrated palliative care for advanced cervical cancer, delivered alongside disease-directed treatment. Palliative care is not deferred until treatment stops and is not limited to terminal care.',
    },
    {
      id: 'm11-q2',
      stem: 'A patient completes ESAS-r. Which set correctly describes the tool?',
      options: [
        'Nine symptoms each rated 0-10, including pain, tiredness, drowsiness and wellbeing',
        'Seventeen items with a total score of 0-68',
        'Five categorical domains including mechanism and incident pain',
        'Ten items scored 0-4 with a total of 0-40',
      ],
      answerIndex: 0,
      explanation:
        'ESAS-r assesses nine common symptoms, each rated 0-10. IPOS has 17 scored items, POS has 10 items scored 0-4, and the five-domain categorical tool is ECS-CP.',
    },
    {
      id: 'm11-q3',
      stem: 'A patient on regular oral morphine has pain well controlled at rest but severe pain on dressing changes. What is the most appropriate immediate management?',
      options: [
        'Increase the modified-release background dose substantially',
        'Stop morphine and start a fentanyl patch',
        'Give an immediate-release rescue dose before the trigger and reassess the baseline regimen',
        'Add a PAMORA',
      ],
      answerIndex: 2,
      explanation:
        'This is incident or breakthrough pain. An immediate-release rescue dose timed before the predictable trigger is appropriate, and frequent episodes should prompt reassessment of the background regimen and pain mechanism.',
    },
    {
      id: 'm11-q4',
      stem: 'A patient with renal impairment needs a strong opioid. Which statement best reflects current guidance?',
      options: [
        'Morphine is preferred because it is the standard first-line opioid',
        'Pethidine is a safe alternative because it is short-acting',
        'Codeine is ideal because it is a weak opioid',
        'Morphine, codeine, pethidine and tramadol should be avoided when alternatives exist; fentanyl may be considered with monitoring',
      ],
      answerIndex: 3,
      explanation:
        'Active or neurotoxic metabolites accumulate in renal impairment. ASCO advises avoiding morphine, meperidine, codeine and tramadol when alternatives exist. Fentanyl has no clinically important active renally cleared metabolite but still requires monitoring.',
    },
    {
      id: 'm11-q5',
      stem: 'A patient with advanced ovarian cancer has a distended, painful abdomen, vomiting and no bowel movement for four days while taking regular opioids. What should be done before considering a PAMORA?',
      options: [
        'Give methylnaltrexone immediately because constipation is likely',
        'Assess for mechanical bowel obstruction and an acute abdomen',
        'Increase the opioid dose',
        'Start bulk-forming fibre',
      ],
      answerIndex: 1,
      explanation:
        'PAMORAs are avoided in known or suspected mechanical bowel obstruction. Distension, vomiting and absolute constipation require assessment for obstruction, ileus or progression before escalating laxative therapy.',
    },
    {
      id: 'm11-q6',
      stem: 'A patient on long-standing opioids reports that pain is becoming more diffuse and sensitive to light touch despite dose escalation. Which explanation is most consistent with opioid-induced hyperalgesia?',
      options: [
        'Reduced response to the same dose with a need for higher doses',
        'Autonomic features after abrupt dose reduction',
        'Paradoxical increased pain sensitivity associated with opioid exposure',
        'New pain caused by tumour progression',
      ],
      answerIndex: 2,
      explanation:
        'OIH is paradoxical increased pain sensitivity, sometimes diffuse or outside the original territory, and escalation may worsen it. Tolerance is reduced response to the same dose, and withdrawal follows abrupt reduction.',
    },
    {
      id: 'm11-q7',
      stem: 'A 61-year-old woman with cervical cancer has deep right groin and thigh pain, holds her hip flexed and cannot extend it. CT shows psoas invasion. Which syndrome is most likely?',
      options: [
        'Malignant psoas syndrome',
        'Sacroiliac joint dysfunction',
        'Trochanteric bursitis',
        'Lumbar disc prolapse without tumour involvement',
      ],
      answerIndex: 0,
      explanation:
        'Malignant psoas syndrome combines psoas muscle invasion with lumbar plexus involvement, producing deep ipsilateral pain, a painful flexed hip worse on extension and neuropathic features. Management is multimodal.',
    },
    {
      id: 'm11-q8',
      stem: 'A patient with cancer-related neuropathic pain is already on an adequate opioid but remains distressed by burning and shooting pain. What is the best next step?',
      options: [
        'Double the opioid dose immediately',
        'Stop the opioid and start paracetamol alone',
        'Add a neuropathic adjuvant such as gabapentin, pregabalin, duloxetine or a tricyclic antidepressant',
        'Start a fentanyl patch for rapid relief',
      ],
      answerIndex: 2,
      explanation:
        'Neuropathic pain often responds poorly to opioids alone. ESGO supports adding gabapentin, pregabalin, duloxetine or a tricyclic antidepressant, with dose selection guided by age, renal function, falls risk, cognition and interactions.',
    },
    {
      id: 'm11-q9',
      stem: 'A patient asks why a fentanyl patch cannot be used to control pain that fluctuates hour to hour. Which explanation is correct?',
      options: [
        'The patch is too weak for cancer pain',
        'The patch has delayed onset and offset and is only for opioid-tolerant patients with stable requirements',
        'The patch causes immediate respiratory depression in all patients',
        'The patch is preferred for rapid titration in opioid-naive patients',
      ],
      answerIndex: 1,
      explanation:
        'Transdermal fentanyl is a maintenance formulation for stable, opioid-tolerant patients. Delayed onset and offset make it unsuitable for rapid titration or unstable pain, and it is not for opioid-naive patients.',
    },
    {
      id: 'm11-q10',
      stem: 'A patient with malignant bowel obstruction and advanced disease is deteriorating. Which principle should guide decisions about surgery, stenting and parenteral fluids?',
      options: [
        'All obstructions should be surgically relieved regardless of performance status',
        'Parenteral nutrition is always beneficial at the end of life',
        'Fluids should be withheld from all palliative patients',
        'Interventions are chosen by matching likely meaningful benefit against procedural burden, prognosis and patient goals',
      ],
      answerIndex: 3,
      explanation:
        'Management of malignant bowel obstruction is symptom-oriented and individualised. Surgery is only for selected patients, and parenteral nutrition or fluids are not automatically beneficial at the end of life. Goals, prognosis and performance status guide care.',
    },
  ],
};
