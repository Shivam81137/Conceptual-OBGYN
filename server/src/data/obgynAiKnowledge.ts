/**
 * Curated OBGYN clinical vault for POST /api/v1/ai/obgyn-assist.
 * ---------------------------------------------------------------------------
 * This is the offline brain of the studio. When GEMINI_API_KEY is configured the
 * service prefers live model output and falls back here on any failure; without a
 * key (fresh clone, hackathon demo, flaky wifi) every starter query still gets a
 * genuinely exam-worthy, fully structured answer.
 *
 * Content rules mirror the system instruction: depth is split by track (UG =
 * NCERT + Dutta core; PG = Williams/Shaw + FOGSI/RCOG/ACOG/FIGO), sections are
 * 🎯 pearl / 🧠 core / ⚡ trap, and every number that examiners love is bolded.
 */

export type ObgynTrack = 'UG' | 'PG';

import { EXTRA_OBGYN_TOPICS } from './obgynAiKnowledgeExtra.js';

export type ObgynTopicId =
  | 'partograph'
  | 'preeclampsia'
  | 'pph'
  | 'aph'
  | 'figo'
  | 'axis'
  | 'ectopic'
  | 'shoulder'
  | 'pcos'
  | 'fibroid'
  | 'gdm';

export interface ObgynTopic {
  id: ObgynTopicId;
  label: string;
  /** Lowercase literal matchers; ≤ 4 chars are matched with word boundaries. */
  matchers: readonly string[];
  pearl: Record<ObgynTrack, string>;
  body: Record<ObgynTrack, string>;
  /** Markdown table: Rapid-fire question | Reveal (shared across tracks). */
  flashcardDeck: string;
  flashcardTrap: string;
  followUps: Record<ObgynTrack, readonly string[]>;
  sourceTag: Record<ObgynTrack, string>;
}

/* ------------------------------------------------------------ shared copy --- */

const SECTION_CORE = '🧠 **Core Clinical Concept / Summary**';
const SECTION_TRAP = '⚡ **Rapid Recall & Exam Trap**';

/* =====================================================================
   1 · PARTOGRAPH
   ===================================================================== */

const partographPlotTable = `| Parameter | Plotted every |
| --- | --- |
| Fetal heart rate (per minute) | **30 min** |
| Contractions (duration x number per 10 min) | **30 min** |
| Cervical dilatation (cm) | **4 h** (active phase) |
| Descent of the presenting part | **4 h** |
| Blood pressure and pulse | **2 h** |
| Temperature | **2 h** |
| Urine (volume, protein, ketones) | Whenever passed |`;

const partographCore = `**What it is**

A single-page graphic record of labour — fetal condition, labour progress and maternal vitals plotted against time, so deterioration is seen on paper **before** it is felt at the bedside.

${partographPlotTable}

**The three landmarks on the dilatation curve**

- **Latent phase (up to 4 cm):** slow and variable; the WHO simplified partograph no longer plots it — only a *prolonged* latent phase matters.
- **Alert line:** drawn from 4 cm assuming a minimum of **1 cm/hour** of dilatation.
- **Action line:** drawn **4 hours to the right of the alert line** — crossing it means progress is unacceptable and you must act, not observe.`;

const partographTrapUG = `- Curve **right of the alert line** = the wake-up call (reassess); **action line** crossed = the red flag.
- A partograph protects two people at once: **the mother from obstructed labour and the fetus from hypoxia** — that dual framing earns marks.
- Examiner favourite: cervical dilatation is plotted **4-hourly** (not hourly) once in the active phase.`;

const partographTrapPG = `- The **4-hour rule**: crossing the alert line buys you a 4-hour decision window before the action line is crossed — that is the transfer/referral budget in resource-limited settings.
- **Philpott's partograph** introduced the alert/action lines; the **WHO simplified partograph** dropped latent-phase plotting and re-anchored FHR monitoring to 30-minute blocks.
- Action-line crossing is not just inertia — exclude **obstruction** (moulding, caput succedaneum, Bandl's ring, asynclitism) before augmenting; augmenting an obstructed labour risks **uterine rupture**.
- **Slow-progress checklist** (examined as a list): inadequate uterine activity (commonest), malposition/malpresentation, cephalopelvic disproportion, full bladder, dehydration, cervical dystocia.`;

const partographBody = (track: ObgynTrack): string =>
  `${SECTION_CORE}\n\n${partographCore}\n\n${SECTION_TRAP}\n\n${track === 'UG' ? partographTrapUG : partographTrapPG}`;

export const PARTOGRAPH = {
  id: 'partograph',
  label: 'Partograph — plot, lines and the 4-hour rule',
  matchers: ['partograph', 'partogram', 'cervicograph', 'labour graph', 'labor graph'],
} as const;

/* =====================================================================
   2 · PREECLAMPSIA / ECLAMPSIA
   ===================================================================== */

const preeclampsiaDefinition = `**Define it in one line** — the examiner's favourite opening:

- **Gestational hypertension:** new BP of **≥ 140/90 mmHg** after 20 weeks, with *no* proteinuria or organ dysfunction.
- **Preeclampsia:** that hypertension **plus** proteinuria (≥ 300 mg/24 h or protein/creatinine ratio ≥ 0.3) **or** maternal organ dysfunction (kidney, liver, blood, brain, lungs).
- **Eclampsia:** a tonic-clonic seizure in a woman with preeclampsia, with no other cause.

**Severe features — the thresholds that change management**

- BP **≥ 160/110 mmHg** on two readings 15 min apart.
- Platelets **< 1,00,000/µL**; transaminases **≥ 2×** normal or right-upper-quadrant/epigastric pain.
- Creatinine **> 1.1 mg/dL** or doubled; urine output **< 500 mL/24 h**.
- Pulmonary oedema; new cerebral or visual symptoms (headache, flashes, blurred vision).`;

const mgso4Table = `| Step | Pritchard regimen | Zuspan regimen |
| --- | --- | --- |
| Loading | **4 g IV + 10 g IM** (5 g in each buttock) | **4 g IV** over 10–15 min |
| Maintenance | **5 g IM** deep in alternate buttock every 4 h | **1 g/hour IV** infusion |
| Continue for | **24 h** after delivery or the last fit | **24 h** after delivery or the last fit |`;

const preeclampsiaMgso4 = `**MgSO4 — the single most examined protocol**

${mgso4Table}

**Monitoring (hourly, by the bedside nurse)**

- **Deep tendon reflexes** present
- **Respiratory rate > 12/min**
- **Urine output > 30 mL/h**

**Toxicity marches in a fixed order:** loss of deep tendon reflexes → respiratory depression → cardiac arrest. Stop the infusion and give the antidote immediately: **calcium gluconate 10%, 10 mL IV slowly**.`;

const preeclampsiaTrapUG = `- Preeclampsia is a **multisystem disease, not a blood-pressure number** — look for the organ that is complaining.
- MgSO4 prevents and controls fits; it does **not** lower blood pressure — that is a separate drug (labetalol/nifedipine).
- The only definitive cure is **delivery** — every management answer ends there.`;

const preeclampsiaTrapPG = `- **Aspirin prophylaxis:** start **75–150 mg from 12–16 weeks** in high-risk women (previous preeclampsia, chronic hypertension, diabetes, twins, autoimmune disease).
- **Timing of delivery:** preeclampsia without severe features — deliver by **37 weeks**; with severe features — stabilise and deliver from **34 weeks**; earlier only if mother or fetus deteriorates.
- **HELLP** is a variant, not a separate disease: haemolysis (LDH ≥ 600 U/L, schistocytes), elevated liver enzymes (≥ 2×), low platelets (< 1,00,000/µL).
- It can strike **postpartum, up to 6 weeks** — a severe headache on day 3 after delivery is not always "just ergometrine".
- Taught serum levels: therapeutic **4–7 mEq/L**; reflexes lost around 8–10; respiratory depression 10–13; arrest > 13.`;

const preeclampsiaBody = (track: ObgynTrack): string =>
  `${SECTION_CORE}\n\n${preeclampsiaDefinition}\n\n${preeclampsiaMgso4}\n\n${SECTION_TRAP}\n\n${track === 'UG' ? preeclampsiaTrapUG : preeclampsiaTrapPG}`;

/* =====================================================================
   3 · PPH
   ===================================================================== */

const pphCore = `**Think 4 Ts — why she is bleeding**

- **Tone** — uterine atony, the commonest cause by far.
- **Trauma** — genital lacerations, uterine rupture, inversion.
- **Tissue** — retained placenta or clots.
- **Thrombin** — coagulopathy, pre-existing or consumptive.

**Stepwise escalation — the protocol examiners want in order**

1. **Call for help + time zero:** activate the PPH team, two wide-bore IVs, cross-match blood, send coagulation.
2. **ABC and assess:** pulse, BP, shock index; palpate uterine tone; inspect for lacerations and retained tissue.
3. **Uterotonics:** oxytocin **10 IU IM/IV** slowly, then **20–40 IU** in 500 mL infusion; methylergometrine **0.2 mg IM** (avoid in hypertension); carboprost **250 µg IM** every 15 min, max **2 mg** (avoid in asthma); misoprostol **800 µg** sublingual.
4. **Tranexamic acid 1 g IV** over 10 min **within 3 h of birth**; repeat once if bleeding continues after 30 min.
5. **Mechanical control:** bimanual compression → intrauterine balloon (**Bakri, ≤ 500 mL**) → compression sutures (B-Lynch).
6. **Surgical escalation:** stepwise devascularisation → internal iliac ligation → peripartum hysterectomy — never delay definitive control.
7. **Monitor:** urine output, repeat haemoglobin, treat DIC; record estimated blood loss for the case sheet.`;

const pphBody = (track: ObgynTrack): string =>
  `${SECTION_CORE}\n\n${pphCore}\n\n${SECTION_TRAP}\n\n${
    track === 'UG'
      ? `- Atonic sequence in one breath: **call for help → rub up the uterus + oxytocin → TXA 1 g IV within 3 h → tamponade → surgery.**
- Uterotonics are not interchangeable: methylergometrine is banned in **hypertension**, carboprost in **asthma**.
- Quantify the loss: **≥ 500 mL** after vaginal birth, **≥ 1000 mL** after caesarean = PPH.`
      : `- Give **tranexamic acid 1 g IV within 3 h** of birth at the FIRST sign of PPH — before hunting for the cause (WOMAN trial logic).
- Favourite trap: a relaxed uterus with continuing bleeding = **missed trauma or coagulopathy** — re-examine the genital tract before adding drugs.
- Keep uterotonics running while the **Bakri balloon** is inflated; document the fill volume.
- Watch for dilutional coagulopathy — early **1:1:1** blood product thinking saves lives in major PPH.`
  }`;

export const PPH = {
  id: 'pph',
  label: 'Postpartum haemorrhage — stepwise management',
  matchers: ['pph', 'postpartum haemorrhage', 'postpartum hemorrhage', 'atonic', 'uterine atony', 'third stage of labour', 'third-stage', 'tranexamic', 'txa'],
} as const;

/* =====================================================================
   4 · APH — PLACENTA PREVIA vs ABRUPTIO
   ===================================================================== */

const aphTable = `| Feature | Placenta previa | Abruptio placentae |
| --- | --- | --- |
| Bleeding | **Painless, bright red, recurrent** | **Painful, dark, continuous**; often concealed |
| Uterine tone | Soft, relaxed, non-tender | **Woody-hard, tender, irritable** |
| Fetal part | Malpresentation + high head common | Usually cephalic; fetal distress common |
| Risk profile | Prior LSCS, multiparity, assisted conception | Chronic HTN, preeclampsia, trauma, past abruption |
| Imaging | **TVS: placenta overlying the internal os** | Retroplacental haematoma (± normal scan) |
| First move | **No PV examination**; assess bleeding + fetal status | ABC, IV access, cross-match + coagulation |
| Signature complication | PPH, placenta accreta spectrum, preterm birth | **DIC**, renal failure, Couvelaire uterus |`;

const aphBody = (track: ObgynTrack): string =>
  `${SECTION_CORE}\n\n${aphTable}\n\n**Clinical anchors**

- Previa = implantation in the lower segment over or near the os; abruptio = premature separation of a normally implanted placenta.
- Both threaten mother and fetus — cross-match blood and ready the resuscitation bay before reaching for imaging.
- Ultrasound anchors the diagnosis, but **a normal scan never fully excludes abruptio**.

${SECTION_TRAP}\n\n${
    track === 'UG'
      ? `- The two-line answer: **painless bright-red bleeding + soft uterus = previa; painful dark bleeding + hard tender uterus = abruptio.**
- Never do a **digital vaginal examination** before localising the placenta — it can convert warning bleeding into torrential haemorrhage.
- Most feared complication of abruptio = **DIC**; of previa = postpartum haemorrhage and accreta.`
      : `- **Couvelaire uterus** (uteroplacental apoplexy): blood extravasated into the myometrium — a bruised, boggy uterus at caesarean.
- **Blakeley's rule of thumb:** a single PV examination in suspected previa can turn a warning haemorrhage into a catastrophic one — defer to TVS.
- **Pain and shock out of proportion to visible bleeding = concealed abruption** — think retroplacental clot.
- Prior LSCS with the placenta over the scar → evaluate for **placenta accreta spectrum** before delivery.`
  }`;

export const APH = {
  id: 'aph',
  label: 'Placenta previa vs abruptio placentae — comparison table',
  matchers: ['placenta previa', 'placenta praevia', 'previa', 'abruptio', 'abruption', 'antepartum haemorrhage', 'antepartum hemorrhage', 'aph'],
} as const;

/* =====================================================================
   5 · FIGO 2023 ENDOMETRIAL STAGING
   ===================================================================== */

const figoTable = `| Stage | Extent |
| --- | --- |
| **IA** | Non-aggressive histology, < 50% myometrial invasion (or endometrium only) |
| **IB** | Non-aggressive histology, ≥ 50% myometrial invasion |
| **IC** | Aggressive histology (p53abn, serous, clear cell) confined to the uterus |
| **IIA** | Invasion of the cervical stroma |
| **IIB** | **Substantial lymphovascular space invasion (LVSI)** |
| **IIIA** | Serosa and/or adnexal involvement |
| **IIIB** | Vaginal and/or parametrial involvement |
| **IIIC1 / IIIC2** | Pelvic lymph nodes / para-aortic lymph nodes |
| **IVA / IVB** | Bladder or bowel mucosa / distant metastasis (includes inguinal nodes) |`;

const figoMolecular = `**Molecular classes — POLE → MMRd → NSMP → p53abn**

- **POLEmut** — ultra-mutated, immune-hot, best prognosis; often de-escalated.
- **MMRd** — mismatch-repair deficient; immunotherapy-responsive.
- **NSMP** — no specific molecular profile; the "average" group.
- **p53abn** — the most aggressive; drives adjuvant treatment intensity.`;

const figoBody = (track: ObgynTrack): string =>
  `${SECTION_CORE}\n\n${figoTable}\n\n${figoMolecular}\n\n${SECTION_TRAP}\n\n${
    track === 'UG'
      ? `- Skeleton first: **I = confined to uterus, II = cervix or substantial LVSI, III = local spread or nodes, IV = bladder/bowel or distant spread.**
- IA vs IB hides in one number: **50% myometrial invasion**.
- **IIIC splits by node station** — pelvic = IIIC1, para-aortic = IIIC2.`
      : `- **Substantial LVSI alone upgrades to IIB** — it changes adjuvant planning even for a uterus-confined tumour.
- **POLEmut** confined to the uterus collapses to stage **IAm** whatever the anatomical stage; non-metastatic **p53abn** is written **IICm**.
- Any **cervical stromal invasion** moves surgical planning from simple to radical territory.
- Molecular stage (the "m" suffix) can *override* the anatomical stage — the exam loves that inversion.`
  }`;

export const FIGO = {
  id: 'figo',
  label: 'FIGO 2023 endometrial cancer staging',
  matchers: ['figo', 'endometrial', 'endometrium'],
} as const;

/* =====================================================================
   6 · MENSTRUAL HORMONAL AXIS
   ===================================================================== */

const axisTable = `| Phase | Dominant hormone | Endometrium |
| --- | --- | --- |
| Follicular | Oestrogen rising (FSH-driven recruitment) | Proliferative |
| Mid-cycle | Oestrogen peak → **LH surge ≈ 36 h pre-ovulation** | Proliferative → secretory switch |
| Luteal | **Progesterone peaks ≈ day 21** | Secretory |
| Menses | All hormones at nadir | Menstrual shedding |`;

const axisBody = (track: ObgynTrack): string =>
  `${SECTION_CORE}\n\n${axisTable}\n\n**The HPO axis in one pass**

- **Hypothalamus:** pulsatile GnRH from the arcuate nucleus sets the rhythm.
- **Anterior pituitary:** FSH recruits follicles; LH triggers ovulation and forms the corpus luteum.
- **Follicular phase:** oestrogen from the dominant follicle thickens the endometrium (proliferative phase).
- **Mid-cycle:** sustained high oestrogen flips the axis to *positive* feedback → LH surge ≈ 36 h before ovulation.
- **Luteal phase:** progesterone peaks ≈ day 21; no implantation → corpus luteum regresses → menses.

${SECTION_TRAP}\n\n${
    track === 'UG'
      ? `- **Ovulation is 14 days BEFORE the next period** — the luteal phase is fixed; cycle-length variation lives entirely in the follicular phase.
- Sustained-low oestrogen keeps the axis suppressed; only *sustained-high* oestrogen triggers the LH surge — the feedback flip is the classic examiner trap.
- Progesterone = **secretory** endometrium; oestrogen = **proliferative** — one hormone, one effect, no mixing.`
      : `- **Anovulation** (PCOD, perimenopause) → unopposed oestrogen → endometrial hyperplasia and AUB-O.
- A **progesterone challenge bleed** confirms oestrogen priming plus a patent outflow tract in secondary amenorrhoea.
- Recurrently short cycles signal a **short follicular phase** (diminished ovarian reserve), not a short luteal phase — the trap that catches PG candidates.
- First-line fertility drug mechanics build on the same axis: clomiphene blocks oestrogen feedback → lifts FSH → recruits follicles.`
  }`;

export const AXIS = {
  id: 'axis',
  label: 'Menstrual hormonal axis — HPO loop & phases',
  matchers: ['menstrual', 'hormonal axis', 'hpo axis', 'ovulation', 'lh surge', 'menstruation', 'gametogenesis', 'oogenesis', 'menstrual cycle'],
} as const;

/* =====================================================================
   TOPIC REGISTRY
   ===================================================================== */

const CORE_OBGYN_TOPICS: readonly ObgynTopic[] = [
  {
    id: 'partograph',
    label: PARTOGRAPH.label,
    matchers: PARTOGRAPH.matchers,
    pearl: {
      UG: 'Plot cervical dilatation against time: crossing the **alert line** is your wake-up call, crossing the **action line** (4 h to its right) means labour is failing to progress and you must act — not watch.',
      PG: 'The alert line encodes **1 cm/hour**; the action line sits **4 hours** to its right. Crossing the action line means intervention — think inadequate uterine activity first and obstruction second.',
    },
    body: { UG: partographBody('UG'), PG: partographBody('PG') },
    flashcardDeck: `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Curve shifts right of the alert line — what does it mean? | Progress slower than **1 cm/hour** — reassess before intervening |
| 2 | Where is the action line drawn? | **4 hours to the right** of the alert line |
| 3 | How often is cervical dilatation plotted in the active phase? | Every **4 hours** |
| 4 | Which phase was dropped from the WHO simplified partograph? | The **latent phase** |
| 5 | Commonest cause of slow progress? | Inadequate uterine activity (hypocontractile labour) |`,
    flashcardTrap: 'Trap: slow progress is not always inertia — moulding and caput mean obstruction until proven otherwise.',
    followUps: {
      UG: ['What exactly are the alert and action lines?', 'Which partograph parameters are recorded every 30 minutes?', 'When does a partograph mandate immediate referral?'],
      PG: ['Action line crossed — augmentation vs caesarean: how do you decide?', 'Differentiate uterine inertia from obstruction at the bedside', 'WHO simplified partograph — what changed and why?'],
    },
    sourceTag: {
      UG: 'Synthesized for NEET UG • NCERT + Dutta aligned',
      PG: 'Synthesized for NEET PG • Williams 26e & WHO Labour Care Guide aligned',
    },
  },
  {
    id: 'preeclampsia',
    label: 'Preeclampsia & eclampsia — thresholds and MgSO4',
    matchers: ['pre-eclampsia', 'preeclampsia', 'preeclamptic', 'eclampsia', 'pih', 'toxaemia', 'toxemia', 'hellp', 'magnesium sulphate', 'magnesium sulfate', 'mgso4'],
    pearl: {
      UG: 'New BP ≥ 140/90 after 20 weeks WITH proteinuria or organ dysfunction = preeclampsia; **MgSO4** prevents and controls fits, and the only definitive cure is **delivery**.',
      PG: 'MgSO4 toxicity marches in a fixed order — **loss of deep tendon reflexes → respiratory depression → cardiac arrest**; antidote **calcium gluconate 10%**. Check reflexes, respiratory rate and urine output every hour.',
    },
    body: { UG: preeclampsiaBody('UG'), PG: preeclampsiaBody('PG') },
    flashcardDeck: `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Pritchard loading dose of MgSO4? | **4 g IV + 10 g IM** (5 g in each buttock) |
| 2 | Zuspan maintenance? | **1 g/hour IV** infusion |
| 3 | Earliest sign of magnesium toxicity? | Loss of **deep tendon reflexes** |
| 4 | Antidote for MgSO4 toxicity? | **Calcium gluconate 10%**, 10 mL IV slowly |
| 5 | How long is MgSO4 continued after delivery or the last fit? | **24 hours** |`,
    flashcardTrap: 'Trap: MgSO4 controls fits but does not lower BP — antihypertensives are a separate decision (labetalol/nifedipine/hydralazine).',
    followUps: {
      UG: ['What are the severe features of preeclampsia?', 'Write the MgSO4 monitoring checklist', 'Why is delivery the only definitive cure?'],
      PG: ['Preeclampsia with severe features at 33 weeks — stabilise or deliver?', 'Aspirin prophylaxis: who, when, what dose?', 'HELLP vs severe preeclampsia — does the difference change management?'],
    },
    sourceTag: {
      UG: 'Synthesized for NEET UG • NCERT + Dutta aligned',
      PG: 'Synthesized for NEET PG • Williams 26e, RCOG GTG 21 & FOGSI aligned',
    },
  },
  {
    id: 'pph',
    label: 'Postpartum haemorrhage — stepwise protocol',
    matchers: PPH.matchers,
    pearl: {
      UG: 'Atonic sequence: call for help → rub up the uterus + oxytocin → tranexamic acid 1 g IV within 3 h → escalate mechanically and surgically without delay.',
      PG: 'Give **tranexamic acid 1 g IV within 3 h** of birth at the FIRST sign of PPH — before hunting for the cause. Carboprost is contraindicated in asthma; methylergometrine in hypertension.',
    },
    body: { UG: pphBody('UG'), PG: pphBody('PG') },
    flashcardDeck: `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Dose and window for tranexamic acid in PPH? | **1 g IV** over 10 min **within 3 h** of birth |
| 2 | Uterotonic contraindicated in asthma? | **Carboprost** (PGF2α) |
| 3 | Uterotonic contraindicated in hypertension? | **Methylergometrine** |
| 4 | Bakri balloon maximum fill? | **≈ 500 mL** — tamponade, not distension |
| 5 | The four Ts of PPH? | Tone, Trauma, Tissue, Thrombin |`,
    flashcardTrap: 'Trap: ongoing bleeding with a well-contracted uterus = missed genital trauma or coagulopathy — re-examine before adding drugs.',
    followUps: {
      UG: ['Which uterotonic for which contraindication — quick table?', 'How do you quantify and record blood loss?', 'When does PPH become "major" and what changes?'],
      PG: ['Bakri balloon not controlling bleeding at 500 mL — next two steps?', 'Massive transfusion protocol logic in obstetric haemorrhage', 'Secondary PPH — causes and timing?'],
    },
    sourceTag: {
      UG: 'Synthesized for NEET UG • Dutta + FOGSI PPH bundle aligned',
      PG: 'Synthesized for NEET PG • Williams 26e, RCOG GTG 52 & WOMAN trial aligned',
    },
  },
  {
    id: 'aph',
    label: 'Placenta previa vs abruptio placentae',
    matchers: APH.matchers,
    pearl: {
      UG: 'Painless bright-red bleeding with a **soft, relaxed uterus** points to placenta previa — never examine vaginally before localising the placenta. **Painful dark bleeding with a hard, tender uterus** points to abruptio placentae.',
      PG: 'Previa: painless bright-red bleeding, soft uterus, malpresentation — no PV exam, confirm with TVS. Abruptio: painful dark bleeding, woody-hard uterus — screen coagulation early, **DIC is the killer**.',
    },
    body: { UG: aphBody('UG'), PG: aphBody('PG') },
    flashcardDeck: `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Which pelvic examination is contraindicated in suspected previa — and why? | Digital vaginal exam — it can provoke torrential haemorrhage; localise with TVS first |
| 2 | Which uterine finding separates abruptio from previa? | **Woody-hard, tender uterus** in abruption; soft in previa |
| 3 | Most feared haematological complication of abruption? | **DIC** — screen coagulation in every significant abruption |
| 4 | Couvelaire uterus — what is it? | Uteroplacental apoplexy: blood extravasated into the myometrium |
| 5 | Does a normal ultrasound exclude abruption? | **No** — abruption is a clinical diagnosis |`,
    flashcardTrap: 'Trap: shock out of proportion to visible bleeding = concealed abruption — the bleeding you cannot see is the one that kills.',
    followUps: {
      UG: ['Why is PV examination dangerous in previa?', 'Most common cause of bleeding in late pregnancy — previa or abruption?', 'How do risk factors differ between the two?'],
      PG: ['Couvelaire uterus at caesarean — immediate steps?', 'Placenta accreta spectrum: diagnosis and delivery planning', 'Concealed abruption with fetal distress — decision sequence?'],
    },
    sourceTag: {
      UG: 'Synthesized for NEET UG • Dutta (Basic) APH chapter aligned',
      PG: 'Synthesized for NEET PG • Williams 26e, RCOG GTG 63 & FOGSI aligned',
    },
  },
  {
    id: 'figo',
    label: 'FIGO 2023 endometrial cancer staging',
    matchers: FIGO.matchers,
    pearl: {
      UG: 'Skeleton first: **I = confined to the uterus** (IA/IB by myometrial invasion), **II = cervix or substantial LVSI**, **III = local spread or nodes**, **IV = bladder/bowel or distant spread**.',
      PG: 'FIGO 2023 pairs anatomy with molecular class — **substantial LVSI alone upgrades to IIB**, **POLEmut** behaves like low-risk disease and **p53abn** is the most aggressive.',
    },
    body: { UG: figoBody('UG'), PG: figoBody('PG') },
    flashcardDeck: `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Which single FIGO 2023 feature upgrades to Stage IIB? | **Substantial LVSI** alone |
| 2 | What defines Stage IC? | Aggressive histology confined to the uterus |
| 3 | Split of Stage IIIC? | IIIC1 pelvic nodes; IIIC2 para-aortic nodes |
| 4 | What is new in Stage IVB? | Distant metastasis — explicitly including inguinal nodes |
| 5 | Best and worst molecular classes? | **POLEmut** best; **p53abn** worst |`,
    flashcardTrap: 'Trap: the molecular suffix (IAm/IICm) can override the anatomical stage — POLEmut collapses to IAm, non-metastatic p53abn is IICm.',
    followUps: {
      UG: ['Draw the four-stage skeleton in one line each', 'What does the "m" suffix in stage IAm mean?', 'Why does IIIC split into C1 and C2?'],
      PG: ['Adjuvant therapy decisions by molecular class — the 2023 shift', 'Substantial vs focal LVSI — how is it reported?', 'Sentinel node biopsy vs full lymphadenectomy in 2023 staging?'],
    },
    sourceTag: {
      UG: 'Synthesized for NEET UG • Dutta (Basic) oncology aligned',
      PG: 'Synthesized for NEET PG • FIGO 2023 (Berek et al.) & Shaw 18e aligned',
    },
  },
  {
    id: 'axis',
    label: 'Menstrual hormonal axis — HPO loop',
    matchers: AXIS.matchers,
    pearl: {
      UG: 'Ovulation happens **14 days BEFORE the next period** — the luteal phase is fixed at ~14 days, so cycle-length variation lives in the follicular phase.',
      PG: 'Two feedbacks rule the axis: sustained-low oestrogen keeps GnRH suppressed, while **sustained-high oestrogen flips to positive feedback → LH surge ≈ 36 h before ovulation**.',
    },
    body: { UG: axisBody('UG'), PG: axisBody('PG') },
    flashcardDeck: `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | LH surge → ovulation interval? | **≈ 36 h** from surge onset |
| 2 | Why does cycle length vary while the luteal phase does not? | Follicular phase varies; luteal phase is fixed at ~14 days |
| 3 | Which feedback switch triggers the LH surge? | **Sustained high oestrogen** → positive feedback |
| 4 | Peak progesterone day in a 28-day cycle? | **≈ Day 21** |
| 5 | What sets the rhythm of the entire cycle? | Pulsatile **GnRH** from the arcuate nucleus |`,
    flashcardTrap: 'Trap: oestrogen swings between negative and positive feedback — the sign of the feedback depends on the level and duration, not the hormone.',
    followUps: {
      UG: ['Name the four phases with their dominant hormone', 'What happens to the endometrium in each phase?', 'Where do FSH and LH act — one line each?'],
      PG: ['Anovulatory AUB — why does unopposed oestrogen cause hyperplasia?', 'Progesterone challenge test — what does a bleed prove?', 'Short cycles: follicular or luteal problem?'],
    },
    sourceTag: {
      UG: 'Synthesized for NEET UG • NCERT XI Human Reproduction aligned',
      PG: 'Synthesized for NEET PG • Williams 26e neuroendocrinology & Shaw 18e aligned',
    },
  },
];

/** Core vault (six topics) + the 2026 extra wave (ectopic, shoulder, PCOS, fibroids, GDM). */
export const OBGYN_TOPICS: readonly ObgynTopic[] = [...CORE_OBGYN_TOPICS, ...EXTRA_OBGYN_TOPICS];

/* =====================================================================
   MATCHING & SCAFFOLDING
   ===================================================================== */

const matches = (haystack: string, matcher: string): boolean => {
  if (matcher.length <= 4) return new RegExp(`(^|[^a-z])${matcher}([^a-z]|$)`).test(haystack);
  return haystack.includes(matcher);
};

/** Best topic for the (lowercased) haystack, weighting the primary matcher highest. */
export const detectObgynTopic = (haystack: string): ObgynTopic | null => {
  const text = haystack.toLowerCase();
  let best: ObgynTopic | null = null;
  let bestScore = 0;

  for (const topic of OBGYN_TOPICS) {
    let score = 0;
    topic.matchers.forEach((matcher, index) => {
      if (!matches(text, matcher)) return;
      /* The first matcher is the topic's identity term (e.g. "pcos"); it must
         outrank generic symptom words such as "ovulation" or "menstrual". */
      if (index === 0) score += 5;
      else score += matcher.length >= 8 ? 2 : 1;
    });
    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  }

  return best;
};

export const OBGYN_VAULT_LABELS: readonly string[] = OBGYN_TOPICS.map((topic) => topic.label);

/** Filenames that hint at preeclampsia lecture notes (curated-answer shortcut). */
export const PREECLAMPSIA_FILENAME_RE = /(pre[-_ ]?eclampsia|preeclampsia|\bpih\b|toxaemia|toxemia)/i;

export const OBGYN_SCAFFOLD_PEARL =
  'Frame the topic the clinical way: **definition → classification → classical sign → first-line management** — in that order, every time.';

export const OBGYN_SCAFFOLD_FOLLOW_UPS: Record<ObgynTrack, readonly string[]> = {
  UG: ['Explain the menstrual hormonal axis in UG depth', 'Placenta previa vs abruptio — the two-line differentiation', 'What is recorded on a partograph every 30 minutes?'],
  PG: ['PPH stepwise management protocol with doses', 'FIGO 2023 endometrial staging summary', 'MgSO4 toxicity — order of signs and antidote'],
};

export const buildObgynScaffoldBody = (topic: string, track: ObgynTrack): string => {
  const subject = topic.trim().length > 0 ? topic.trim() : 'this topic';
  const vaultList = OBGYN_VAULT_LABELS.map((label) => `- ${label}.`).join('\n');

  return `${SECTION_CORE}

**Structure "${subject}" the examiner's way**

- **Definition** — one line, with the threshold that defines it (age, weeks, cut-off).
- **Classification** — reproduce the exam-relevant system as a two-column table.
- **Classical sign** — the single most specific finding and its nearest differential.
- **Management** — first-line → escalate → definitive, always with doses and timings.

**Curated vault in this build**

${vaultList}

${SECTION_TRAP}

- Flip the track toggle and ask again to compare NCERT depth against Williams depth — same facts, different altitude.
- Convert whatever you already know into **three viva questions** before reading further; patches stick only where questions are asked first.

*Track in focus: ${track === 'UG' ? 'NEET UG - NCERT + core concepts' : 'NEET PG - Williams, Shaw & guidelines'}.*`;
};

/* =====================================================================
   DOCUMENT (PDF / TXT) HEURISTICS
   ===================================================================== */

export const DOC_SENTENCE_MIN_CHARS = 55;

export const DOC_SENTENCE_SPLIT = /(?<=[.!?;])\s+(?=[A-Z0-9(])/;

export const DOC_NUMERIC_RE = /\b\d+(?:[.,]\d+)?\s?(?:%|mg|g|mcg|µg|ml|ML|mL|IU|iu|hours?|weeks?|days?|min|cm|mm)\b/;

export const DOC_NUMERIC_GLOBAL_RE = /\b\d+(?:[.,]\d+)?\s?(?:%|mg|g|mcg|µg|ml|ML|mL|IU|iu|hours?|weeks?|days?|min|cm|mm)\b/gi;

export const DOC_STOPWORDS = new Set([
  'the', 'and', 'with', 'from', 'that', 'this', 'these', 'those', 'into', 'after', 'before', 'during', 'should',
  'would', 'could', 'must', 'are', 'was', 'were', 'been', 'have', 'has', 'had', 'its', 'in', 'on', 'of', 'or',
  'as', 'at', 'to', 'for', 'by', 'not', 'but', 'can', 'may', 'most', 'more', 'than', 'then', 'there', 'their',
  'which', 'when', 'while', 'also', 'per', 'use', 'used', 'using', 'give', 'given', 'upto', 'about', 'each',
]);

/** Distractor pool when a document's own keywords run dry. */
export const COMMON_OBGYN_TERMS: readonly string[] = [
  'uterus', 'placenta', 'cervix', 'ovary', 'preeclampsia', 'haemorrhage', 'oxytocin', 'tranexamic acid',
  'magnesium sulphate', 'endometrium', 'progesterone', 'oestrogen', 'misoprostol', 'carboprost', 'labetalol',
];
