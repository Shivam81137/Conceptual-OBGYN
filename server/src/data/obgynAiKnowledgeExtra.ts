import type { ObgynTopic } from './obgynAiKnowledge.js';

/**
 * Second wave of curated teaching content.
 * ---------------------------------------------------------------------------
 * The original vault covered six topics. These five cover the emergencies and
 * endocrine/general gynaecology questions students ask most often, so a burst
 * that outruns the live providers still returns a real answer rather than a
 * generic framework. Content follows the same evidence rules as the core vault:
 * guideline thresholds, exact doses, standard nomenclature, no invented facts.
 */

const CORE = '🧠 **Core Clinical Concept / Summary**';
const TRAP = '⚡ **Rapid Recall & Exam Trap**';

/* =====================================================================
   7 · ECTOPIC PREGNANCY
   ===================================================================== */

const ectopicBodyUG = `${CORE}

**Definition** — implantation of the blastocyst outside the uterine cavity. The **ampulla (≈70%)** is the commonest site, then isthmus, fimbria and cornua; ovarian, cervical and abdominal gestations are rare.

**Why it matters** — the tube cannot accommodate a growing gestation. Trophoblast invades the wall → rupture → haemorrhagic shock. Ectopic pregnancy remains a leading cause of first-trimester maternal death.

**Classic triad** — amenorrhoea (6-8 weeks) + unilateral lower abdominal pain + slight vaginal bleeding. Rupture adds shoulder-tip pain, dizziness, tachycardia and rebound tenderness.

**Diagnosis**
- **Transvaginal ultrasound (TVS) + serial β-hCG** are the two tests that matter. An empty uterus with an adnexal mass or free fluid is suspicious.
- A β-hCG that rises by **less than 66% in 48 h** (or plateaus) points away from a normal intrauterine pregnancy.
- **Progesterone < 5 ng/mL** supports a non-viable pregnancy but does not localise it.

**Management**
- **Stable, unruptured, small, no fetal cardiac activity** → **methotrexate 50 mg/m² IM** (single dose) with β-hCG follow-up on days 4 and 7. Criteria: β-hCG < 5,000 IU/L, mass < 4 cm, haemodynamically stable, normal renal and liver function.
- **Ruptured or unstable** → resuscitation and **surgery**: salpingectomy (especially when the contralateral tube is healthy) or salpingostomy when fertility preservation is critical.
- **Expectant** management only for a small, resolving ectopic with a low and falling β-hCG.

${TRAP}

- **Methotrexate is not for the unstable patient** — rupture is a surgical emergency.
- After methotrexate, a **> 15% fall in β-hCG between day 4 and day 7** is the expected response; otherwise a second dose may be needed.
- **No intrauterine sac + a positive pregnancy test** = ectopic until proven otherwise; never discharge without a follow-up plan.
- Risk factors: PID, previous ectopic, tubal surgery or sterilisation, IUCD in situ, IVF, smoking.`;

const ectopicBodyPG = `${CORE}

**Definition and sites** — implantation outside the endometrial cavity. **Ampullary (≈70%)** > isthmic > fimbrial > cornual; ovarian, cervical, caesarean-scar and abdominal pregnancies are rare but carry the highest morbidity.

**Risk factors** — pelvic inflammatory disease/chlamydia, previous ectopic, tubal surgery or sterilisation, IUCD in situ, assisted conception, smoking, endometriosis.

**Diagnosis**
- **Transvaginal ultrasound (TVS) + quantitative β-hCG**: empty uterus with an adnexal mass ± free fluid. The **discriminatory zone (≈1,500-3,000 IU/L)** is the β-hCG above which an intrauterine sac should be visible.
- **Serial β-hCG at 48 h**: a rise below the expected doubling, or a plateau, is suspicious; a fall suggests a failing pregnancy.
- **Progesterone < 5 ng/mL** favours a non-viable pregnancy but does not distinguish intrauterine from ectopic.
- **Pregnancy of unknown location (PUL)** — no intrauterine or extrauterine gestation on TVS. Follow β-hCG to a diagnosis; never assume it is normal.

**Management — decided by stability, not by β-hCG alone**
- **Expectant**: small, unruptured, low and falling β-hCG, reliable follow-up.
- **Medical**: **methotrexate 50 mg/m² IM** for a stable patient with β-hCG < 5,000 IU/L, mass < 4 cm, no fetal cardiac activity and normal renal, hepatic and haematological function. Check β-hCG on days 4 and 7.
- **Surgical**: laparoscopy/laparotomy for rupture, instability, methotrexate contraindication or failed medical management. **Salpingectomy** is preferred when the contralateral tube is healthy; **salpingostomy** is reserved for fertility-preserving need, with β-hCG follow-up for persistent trophoblast.
- **Anti-D** immunoglobulin for Rh-negative women after surgical management.

**Methotrexate contraindications** — breastfeeding, immunodeficiency, renal or hepatic impairment, blood dyscrasia, active pulmonary disease, peptic ulcer, and any haemodynamic instability.

${TRAP}

- The triad is a **screening prompt, not a diagnosis** — a normal examination does not exclude ectopic.
- Do not give methotrexate before confirming renal and liver function; avoid folate supplements and NSAIDs during treatment.
- **Shoulder-tip pain** suggests haemoperitoneum — escalate immediately.
- A **caesarean-scar ectopic** is not a tubal ectopic: it needs specialist management (methotrexate ± uterine artery embolisation or laparoscopic resection), never simple curettage.`;

const ectopicDeck = `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Commonest site of ectopic pregnancy? | **Ampulla** (≈70%) |
| 2 | Diagnostic pair? | **TVS + serial β-hCG** |
| 3 | Discriminatory zone? | ≈**1,500-3,000 IU/L** |
| 4 | Methotrexate criteria? | Stable, **< 5,000 IU/L**, mass **< 4 cm**, no cardiac activity |
| 5 | Ruptured ectopic? | Resuscitation + **surgery** (salpingectomy) |`;

export const ECTOPIC: ObgynTopic = {
  id: 'ectopic',
  label: 'Ectopic pregnancy — diagnosis and methotrexate criteria',
  matchers: ['ectopic', 'tubal pregnancy', 'tubal gestation', 'salpingectomy', 'salpingostomy', 'pregnancy of unknown location', 'pul'],
  pearl: {
    UG: 'Any woman of reproductive age with amenorrhoea, abdominal pain and vaginal bleeding has an **ectopic pregnancy until proven otherwise** — TVS plus serial β-hCG is the diagnostic pair, and a ruptured ectopic is a surgical emergency.',
    PG: 'A **discriminatory β-hCG of 1,500-3,000 IU/L** with an empty uterus is suspicious; a rise **< 66% over 48 h** supports ectopic. Methotrexate **50 mg/m² IM** only in a stable patient with β-hCG < 5,000, mass < 4 cm and no cardiac activity.',
  },
  body: { UG: ectopicBodyUG, PG: ectopicBodyPG },
  flashcardDeck: ectopicDeck,
  flashcardTrap: 'Trap: methotrexate never replaces surgery in the unstable patient — rupture is a surgical emergency.',
  followUps: {
    UG: ['How do you interpret a β-hCG that is not doubling?', 'What are the criteria for methotrexate?', 'Why is the ampulla the commonest site?'],
    PG: ['PUL with a plateauing β-hCG — next step?', 'Salpingostomy vs salpingectomy — how do you choose?', 'Caesarean-scar ectopic — management options'],
  },
  sourceTag: {
    UG: 'Synthesized for UG • Dutta + NCERT aligned',
    PG: 'Synthesized for PG • Williams 26e, RCOG GTG 21 & FOGSI aligned',
  },
};

/* =====================================================================
   8 · SHOULDER DYSTOCIA
   ===================================================================== */

const shoulderBodyUG = `${CORE}

**Definition** — failure to deliver the shoulders after the head has delivered, requiring additional manoeuvres. It is a **bony obstruction**, not a soft-tissue problem.

**Recognise it** — the head retracts against the perineum (the "turtle sign"), the chin cannot be delivered, and the anterior shoulder is impacted behind the symphysis pubis.

**Risk factors** — macrosomia, gestational diabetes, maternal obesity, previous shoulder dystocia, prolonged second stage, instrumental delivery, post-term pregnancy. Most cases occur in babies of normal weight, so anticipation is imperfect.

**Management — HELPERR, in order**
1. **H** — call for **Help** (obstetrician, anaesthetist, paediatrician, extra nurses).
2. **E** — **Evaluate for episiotomy** (only if it improves access; it does not relieve the bony obstruction by itself).
3. **L** — **Legs**: **McRoberts** position (hyperflex and abduct the hips) — the single most effective first manoeuvre.
4. **P** — **suprapubic pressure** (Rubin I), continuous or rocking, never fundal pressure.
5. **E** — **Enter** internal manoeuvres: **Rubin II** (push the posterior shoulder toward the chest) and the **Woods screw** (rotate the posterior shoulder 180°).
6. **R** — **Remove the posterior arm** (deliver the forearm across the chest).
7. **R** — **Roll** the mother onto all fours (Gaskin manoeuvre).

**What not to do** — **fundal pressure** (uterine rupture) and **excessive traction** (brachial plexus injury, clavicle fracture).

**After delivery** — examine for **Erb's palsy (C5-C6)**, clavicle fracture, perineal tears and postpartum haemorrhage; document each manoeuvre and its timing.

${TRAP}

- **McRoberts + suprapubic pressure** resolves most cases — know it as the first-line pair.
- **Episiotomy does not relieve shoulder dystocia**; it only creates room for internal manoeuvres.
- **Posterior-arm delivery** is the most effective manoeuvre when the first two fail.
- **Fundal pressure is contraindicated** — it worsens impaction and can rupture the uterus.`;

const shoulderBodyPG = `${CORE}

**Definition** — failure to deliver the shoulders after the head, requiring additional manoeuvres. Incidence ≈ 0.6% of vaginal births; it is a **bony impaction** of the anterior shoulder behind the symphysis.

**Recognition** — turtle sign, failure of the chin to deliver, inability to deliver the anterior shoulder with routine traction. Never apply strong traction to "see if it comes".

**Risk factors** — macrosomia, GDM, maternal obesity, previous shoulder dystocia (recurrence ≈ 10-15%), prolonged second stage, instrumental delivery, post-term pregnancy. Over half occur in normal-birth-weight infants.

**Management — HELPERR**
- **Help** — call the team and start the clock.
- **Evaluate for episiotomy** — only to create room for internal manoeuvres.
- **Legs (McRoberts)** — hyperflex and abduct the hips; first-line, effective in most cases.
- **suprapubic Pressure (Rubin I)** — push the anterior shoulder toward the fetal chest.
- **Enter** — **Rubin II** and the **Woods screw** (180° rotation of the posterior shoulder).
- **Remove the posterior arm** — deliver the forearm across the chest; highly effective.
- **Roll** — all-fours (Gaskin) position.

**Avoid** — fundal pressure (uterine rupture) and excessive lateral flexion/traction (brachial plexus injury).

**Complications** — fetal: **Erb's palsy (C5-C6)**, clavicle/humerus fracture, hypoxic-ischaemic injury; maternal: PPH, third/fourth-degree tears, symphyseal separation.

**Documentation** — which shoulder was anterior, the time of head delivery, each manoeuvre and its timing, cord gases if obtained, and the team present.

${TRAP}

- **Most shoulder dystocia occurs in normal-weight babies** — estimated fetal weight cannot exclude it.
- The **posterior arm** is the rescue manoeuvre; know its technique and the risk of fracture.
- **Fundal pressure is never the answer** — it increases impaction and rupture risk.
- Erb's palsy is usually **transient**, but document and refer for physiotherapy.`;

const shoulderDeck = `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | First two manoeuvres? | **McRoberts + suprapubic pressure** |
| 2 | What does HELPERR stand for? | Help, Evaluate episiotomy, Legs, suprapubic Pressure, Enter, Remove posterior arm, Roll |
| 3 | Forbidden manoeuvre? | **Fundal pressure** |
| 4 | Commonest fetal injury? | **Brachial plexus injury (Erb's palsy, C5-C6)** |
| 5 | Role of episiotomy? | Creates room for internal manoeuvres; it does **not** relieve the bony obstruction |`;

export const SHOULDER: ObgynTopic = {
  id: 'shoulder',
  label: 'Shoulder dystocia — HELPERR manoeuvres',
  matchers: ['shoulder dystocia', 'mcroberts', 'helpperr', 'impacted shoulders', 'brachial plexus', 'erb palsy', 'woods screw'],
  pearl: {
    UG: 'Shoulder dystocia is a **bone** problem: call for help, use **McRoberts**, then **suprapubic pressure** — and never fundal pressure.',
    PG: 'Run **HELPERR** in order. Most cases resolve with McRoberts + suprapubic pressure; the posterior arm is the rescue manoeuvre. Fundal pressure and excessive traction cause uterine rupture and brachial plexus injury.',
  },
  body: { UG: shoulderBodyUG, PG: shoulderBodyPG },
  flashcardDeck: shoulderDeck,
  flashcardTrap: 'Trap: more babies with shoulder dystocia are normal weight than macrosomic — never rely on estimated fetal weight to exclude it.',
  followUps: {
    UG: ['What is the McRoberts manoeuvre?', 'Why is fundal pressure dangerous?', 'What is Erb palsy?'],
    PG: ['HELPERR step by step', 'Posterior-arm delivery — technique and risks', 'How do you document shoulder dystocia?'],
  },
  sourceTag: {
    UG: 'Synthesized for UG • Dutta + NCERT aligned',
    PG: 'Synthesized for PG • RCOG GTG 42, ACOG & Williams aligned',
  },
};

/* =====================================================================
   9 · PCOS
   ===================================================================== */

const pcosBodyUG = `${CORE}

**Definition** — a common endocrine disorder of reproductive-age women, diagnosed by the **Rotterdam criteria**: two of three —
1. **Oligo- or anovulation** (cycles > 35 days or fewer than 8 per year).
2. **Clinical or biochemical hyperandrogenism** (hirsutism, acne, elevated testosterone).
3. **Polycystic ovaries on ultrasound** — ≥ 12 follicles of 2-9 mm in one ovary, or ovarian volume ≥ 10 mL.
Other causes (thyroid disease, hyperprolactinaemia, congenital adrenal hyperplasia, Cushing syndrome) must be excluded.

**Why it happens** — insulin resistance → hyperinsulinaemia → increased ovarian androgen production and lower SHBG → more free testosterone. LH tends to be high relative to FSH, but an LH:FSH ratio is **not** required for diagnosis.

**How it presents** — irregular periods, hirsutism, acne, infertility, weight gain, acanthosis nigricans (a marker of insulin resistance).

**Management — by goal**
- **Lifestyle and weight loss** (5-10% of body weight) restores ovulation in many women and underpins every other treatment.
- **Cycle regulation and endometrial protection**: combined oral contraceptive pill or cyclical progestin. Unopposed oestrogen from anovulation raises **endometrial cancer** risk.
- **Ovulation induction**: **letrozole** is first-line (higher live-birth rate than clomiphene); clomiphene is an alternative. Metformin helps insulin resistance and may restore cycles.
- **Hirsutism**: cosmetic measures plus anti-androgens (spironolactone), always with contraception.

${TRAP}

- **Rotterdam needs 2 of 3** — polycystic ovaries alone do not make PCOS (many healthy women have them).
- **Letrozole is first-line**, not clomiphene — a favourite recent-guideline question.
- Unopposed oestrogen → **endometrial hyperplasia/cancer**; every anovulatory patient needs endometrial protection.
- Screen for **type 2 diabetes, dyslipidaemia and hypertension** — PCOS is a metabolic disorder, not just an infertility problem.`;

const pcosBodyPG = `${CORE}

**Definition** — a polygenic endocrine-metabolic syndrome. Diagnosis remains **2 of 3 Rotterdam criteria** after exclusion of other causes: oligo/anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology (PCOM).

**PCOM on ultrasound** — the 2023 ESHRE guideline uses **≥ 20 follicles per ovary** (2-9 mm) or ovarian volume **≥ 10 mL** on transvaginal ultrasound; the older Rotterdam threshold was ≥ 12 follicles. AMH may support the diagnosis but is not a substitute for the full criteria.

**Pathophysiology** — insulin resistance → hyperinsulinaemia → increased ovarian androgen synthesis and reduced SHBG → free testosterone rises. LH pulsatility increases; the LH:FSH ratio is supportive but not diagnostic.

**Clinical spectrum** — irregular cycles, hirsutism, acne, androgenetic alopecia, infertility, obesity, acanthosis nigricans, obstructive sleep apnoea.

**Management**
- **Lifestyle**: 5-10% weight loss restores ovulation and improves metabolic markers.
- **Endometrial protection**: combined OCP or cyclical progestin; unopposed oestrogen causes hyperplasia and cancer.
- **Ovulation induction**: **letrozole** first-line; clomiphene; metformin as adjunct (especially with insulin resistance); gonadotropins; laparoscopic ovarian drilling; IVF if needed.
- **Hyperandrogenism**: combined OCP first-line; add spironolactone (with contraception) for hirsutism.
- **Metabolic**: screen for impaired glucose tolerance/type 2 diabetes, dyslipidaemia, hypertension and OSA.

**Long-term risks** — type 2 diabetes, endometrial cancer, cardiovascular disease, subfertility, pregnancy complications (GDM, preeclampsia).

${TRAP}

- **Letrozole beats clomiphene** for live birth — the headline change in modern PCOS care.
- PCOM is **common in normal women**; never diagnose PCOS on ultrasound alone.
- **Endometrial protection is mandatory** in anovulatory PCOS, even when fertility is not the concern.
- Anti-androgens such as spironolactone are **teratogenic** — contraception is mandatory.`;

const pcosDeck = `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Rotterdam criteria? | 2 of 3: oligo/anovulation, hyperandrogenism, PCOM |
| 2 | First-line ovulation induction? | **Letrozole** |
| 3 | Endometrial risk? | Unopposed oestrogen → **hyperplasia/cancer** |
| 4 | Insulin-sensitising drug? | **Metformin** (adjunct) |
| 5 | PCOM on ultrasound (2023 ESHRE)? | **≥ 20 follicles/ovary** or volume **≥ 10 mL** |`;

export const PCOS: ObgynTopic = {
  id: 'pcos',
  label: 'PCOS — Rotterdam criteria and management',
  matchers: ['pcos', 'polycystic ovary', 'polycystic ovarian', 'polycystic', 'rotterdam criteria', 'hyperandrogenism'],
  pearl: {
    UG: 'PCOS is **2 of 3 Rotterdam criteria** — oligo/anovulation, hyperandrogenism, polycystic ovaries — after excluding other causes. **Letrozole** is first-line for ovulation induction.',
    PG: 'Insulin resistance drives ovarian androgen production. **Letrozole** is first-line for ovulation induction, and every patient needs **endometrial protection** plus screening for dysglycaemia and dyslipidaemia.',
  },
  body: { UG: pcosBodyUG, PG: pcosBodyPG },
  flashcardDeck: pcosDeck,
  flashcardTrap: 'Trap: polycystic ovaries on ultrasound are common in normal women — they are not sufficient for the diagnosis.',
  followUps: {
    UG: ['What are the Rotterdam criteria?', 'Why does PCOS cause hirsutism?', 'How does weight loss help PCOS?'],
    PG: ['Letrozole vs clomiphene — the evidence', 'How do you protect the endometrium in PCOS?', 'PCOS in pregnancy — what are the risks?'],
  },
  sourceTag: {
    UG: 'Synthesized for UG • Dutta + NCERT aligned',
    PG: 'Synthesized for PG • ESHRE 2023, Williams & Shaw aligned',
  },
};

/* =====================================================================
   10 · UTERINE FIBROIDS
   ===================================================================== */

const fibroidBodyUG = `${CORE}

**Definition** — benign monoclonal tumours of uterine smooth muscle (leiomyomas), driven by oestrogen and progesterone. They are the commonest pelvic tumour in women and shrink after menopause.

**Classification by site**
- **Submucosal** — bulges into the cavity; causes the most **bleeding** and **infertility**.
- **Intramural** — within the myometrium; bulk symptoms and heavy periods.
- **Subserosal** — bulges outward; pressure symptoms, rarely bleeding.

**Symptoms** — heavy or prolonged periods with anaemia, pelvic pain or pressure, urinary frequency, constipation, infertility or recurrent pregnancy loss (especially submucosal), dyspareunia.

**Diagnosis** — **pelvic ultrasound** first-line; MRI for mapping before surgery; hysteroscopy for submucosal fibroids.

**Management — tailor to symptoms and fertility**
- **Asymptomatic** → observe.
- **Bleeding**: tranexamic acid or NSAIDs during menses, combined OCP, progestins (including LNG-IUS), GnRH agonists (3-6 months, pre-operative).
- **Surgery**: **myomectomy** for fertility preservation; **hysterectomy** for completed family with disabling symptoms; hysteroscopic resection for submucosal fibroids.
- **Non-surgical**: uterine artery embolisation; MRI-guided focused ultrasound.

${TRAP}

- **Submucosal** fibroids cause infertility and the heaviest bleeding — location matters more than size.
- Fibroids are **not** a cause of postmenopausal bleeding until proven otherwise — investigate the endometrium.
- GnRH agonists **shrink** fibroids but cause a hypo-oestrogenic state; use for a limited pre-operative period.
- **Myomectomy, not hysterectomy**, when fertility is desired — counsel about recurrence.`;

const fibroidBodyPG = `${CORE}

**Definition** — benign leiomyomas of the myometrium, oestrogen- and progesterone-responsive. **FIGO classification (0-8)** describes location: 0 = intracavitary pedunculated, 1 = < 50% intramural, 2 = ≥ 50% intramural, 3 = contacts endometrium, 4 = intramural, 5 = ≥ 50% subserosal, 6 = < 50% subserosal, 7 = pedunculated subserosal, 8 = cervical/parasitic.

**Clinical** — abnormal uterine bleeding (especially FIGO 0-2), bulk symptoms, infertility, recurrent pregnancy loss, pain. **Red degeneration** in pregnancy causes acute pain and fever.

**Diagnosis** — pelvic ultrasound first-line; MRI for mapping and to distinguish from adenomyosis; hysteroscopy for cavity assessment; saline infusion sonography for submucosal lesions.

**Management**
- **Observation** if asymptomatic.
- **Medical**: tranexamic acid/NSAIDs for bleeding; LNG-IUS; combined OCP; progestins; **GnRH agonist 3-6 months pre-operatively** to shrink and correct anaemia (expect a initial flare); ulipristal acetate (liver monitoring).
- **Surgical**: **hysteroscopic myomectomy** for FIGO 0-2; laparoscopic/abdominal myomectomy for larger or intramural lesions; **hysterectomy** for completed family.
- **Interventional**: uterine artery embolisation; MRI-guided focused ultrasound.

**Fertility counselling** — myomectomy improves cavity distortion but carries adhesion and recurrence risk; hysterectomy is definitive.

${TRAP}

- **Submucosal (FIGO 0-2)** fibroids are the fertility and bleeding culprits.
- **Postmenopausal bleeding is never assumed to be a fibroid** — exclude endometrial cancer.
- GnRH agonists cause a **flare** before shrinkage; ulipristal requires liver monitoring.
- **Morcellation** of an unsuspected sarcoma is a recognised risk — counsel and select carefully.`;

const fibroidDeck = `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Which fibroid causes the most bleeding/infertility? | **Submucosal** |
| 2 | First-line imaging? | **Pelvic ultrasound** |
| 3 | Pre-operative medical shrinker? | **GnRH agonist** (3-6 months) |
| 4 | Surgery for fertility preservation? | **Myomectomy** |
| 5 | FIGO types amenable to hysteroscopic resection? | **Type 0-2** (submucosal) |`;

export const FIBROID: ObgynTopic = {
  id: 'fibroid',
  label: 'Uterine fibroids — classification and treatment',
  matchers: ['fibroid', 'leiomyoma', 'myomectomy', 'uterine myoma', 'submucosal fibroid', 'subserosal fibroid'],
  pearl: {
    UG: 'Fibroids are **oestrogen-dependent benign leiomyomas**; **submucosal** fibroids cause the most bleeding and infertility. Ultrasound is first-line and treatment depends on symptoms and fertility plans.',
    PG: 'Classify with **FIGO 0-8**. Submucosal lesions distort the cavity and cause AUB/infertility. GnRH agonists shrink pre-operatively but cause an initial flare; myomectomy preserves fertility at the cost of recurrence.',
  },
  body: { UG: fibroidBodyUG, PG: fibroidBodyPG },
  flashcardDeck: fibroidDeck,
  flashcardTrap: 'Trap: fibroids do not cause postmenopausal bleeding — investigate the endometrium.',
  followUps: {
    UG: ['Submucosal vs intramural fibroids — why does location matter?', 'What are the treatment options for heavy bleeding?', 'When is myomectomy preferred over hysterectomy?'],
    PG: ['FIGO fibroid classification 0-8', 'GnRH agonist before myomectomy — benefits and limits', 'UAE vs myomectomy — how do you counsel?'],
  },
  sourceTag: {
    UG: 'Synthesized for UG • Dutta + NCERT aligned',
    PG: 'Synthesized for PG • Williams 26e, FIGO & RCOG aligned',
  },
};

/* =====================================================================
   11 · GESTATIONAL DIABETES
   ===================================================================== */

const gdmBodyUG = `${CORE}

**Definition** — carbohydrate intolerance of variable severity with onset or first recognition during pregnancy. It excludes pre-existing type 1 or type 2 diabetes.

**Why it matters** — maternal glucose crosses the placenta → fetal hyperinsulinaemia → **macrosomia**, shoulder dystocia, neonatal hypoglycaemia, polycythaemia and hyperbilirubinaemia. The mother risks preeclampsia, operative delivery and later type 2 diabetes.

**Screening and diagnosis**
- Screen at **24-28 weeks** with a **75 g OGTT**.
- **WHO/IADPSG thresholds**: fasting **≥ 92 mg/dL**, 1 h **≥ 180 mg/dL**, 2 h **≥ 153 mg/dL** — **one** abnormal value is enough.
- **DIPSI** (India): a 2 h plasma glucose **≥ 140 mg/dL** after 75 g glucose.

**Management**
- **Medical nutrition therapy + exercise** first, with home glucose monitoring.
- **Targets**: fasting < 95 mg/dL, 1 h < 140 mg/dL, 2 h < 120 mg/dL.
- **Pharmacotherapy** if targets are missed: **insulin** is standard; metformin is widely used (including in India).
- **Delivery timing** is individualised — earlier for macrosomia, poor control or preeclampsia.

${TRAP}

- **One abnormal OGTT value** diagnoses GDM under IADPSG/WHO — do not wait for two.
- GDM is **not** pre-existing diabetes; overt diabetes is a fasting ≥ 126 mg/dL or random ≥ 200 mg/dL with symptoms.
- **Neonatal hypoglycaemia** is the classic newborn complication — the baby was used to high glucose and high insulin.
- **Postpartum**: reclassify with a 75 g OGTT at 6-12 weeks; lifelong type 2 diabetes risk.`;

const gdmBodyPG = `${CORE}

**Definition** — hyperglycaemia first recognised in pregnancy, excluding overt pre-existing diabetes. Risk factors: obesity, previous GDM, family history, PCOS, advanced maternal age, South Asian ethnicity.

**Pathophysiology** — human placental lactogen, cortisol and progesterone increase insulin resistance through the second trimester; β-cell reserve determines whether hyperglycaemia emerges.

**Screening** — risk-factor-based or universal, at 24-28 weeks. **IADPSG/WHO 75 g OGTT**: fasting ≥ 92, 1 h ≥ 180, 2 h ≥ 153 mg/dL (any one). **DIPSI**: 2 h ≥ 140 mg/dL. The older Carpenter-Coustan thresholds differ — quote the protocol your institution uses.

**Management**
- **Nutrition and exercise** first; home monitoring (fasting and postprandial).
- **Targets**: fasting < 95, 1 h < 140, 2 h < 120 mg/dL.
- **Pharmacotherapy**: insulin is the standard; metformin improves outcomes in many settings and is continued in some protocols; glyburide is used in selected settings.
- **Fetal surveillance** and growth scans; delivery timing individualised (earlier with macrosomia, poor control, preeclampsia).
- **Postpartum**: stop insulin, monitor glucose, and perform a 75 g OGTT at 6-12 weeks; lifelong lifestyle follow-up.

**Complications** — macrosomia, shoulder dystocia, birth trauma, neonatal hypoglycaemia, hyperbilirubinaemia, respiratory distress; maternal preeclampsia, operative delivery, future type 2 diabetes.

${TRAP}

- **One abnormal value is enough** under IADPSG/WHO; the two-value rule belongs to a different protocol.
- Do not treat **overt diabetes** as GDM — it needs pre-pregnancy planning and tighter control.
- **Neonatal hypoglycaemia** is the exam favourite; watch the baby, not just the mother.
- GDM is a **window into future type 2 diabetes** — arrange postpartum reclassification.`;

const gdmDeck = `| # | Rapid-fire question | Reveal |
| --- | --- | --- |
| 1 | Screening window? | **24-28 weeks** |
| 2 | IADPSG fasting threshold? | **≥ 92 mg/dL** |
| 3 | 2 h threshold? | **≥ 153 mg/dL** |
| 4 | Target fasting glucose? | **< 95 mg/dL** |
| 5 | Classic neonatal complication? | **Hypoglycaemia** |`;

export const GDM: ObgynTopic = {
  id: 'gdm',
  label: 'Gestational diabetes — OGTT thresholds and targets',
  matchers: ['gestational diabetes', 'gdm', 'ogtt', 'diabetes in pregnancy', 'dipsi', 'hyperglycaemia in pregnancy'],
  pearl: {
    UG: 'GDM is **glucose intolerance first recognised in pregnancy**, screened at **24-28 weeks** with a 75 g OGTT. Diet and exercise come first; insulin if targets are missed.',
    PG: 'IADPSG/WHO 75 g OGTT: fasting ≥ 92, 1 h ≥ 180, 2 h ≥ 153 mg/dL — **any one** value diagnoses GDM. Target fasting < 95, 1 h < 140, 2 h < 120 mg/dL; reclassify postpartum.',
  },
  body: { UG: gdmBodyUG, PG: gdmBodyPG },
  flashcardDeck: gdmDeck,
  flashcardTrap: 'Trap: one abnormal value is enough under IADPSG/WHO — the older two-value rule belongs to a different protocol.',
  followUps: {
    UG: ['What are the OGTT thresholds for GDM?', 'Why does the newborn become hypoglycaemic?', 'When is insulin started?'],
    PG: ['IADPSG vs DIPSI — which do you use?', 'Metformin vs insulin in GDM', 'Delivery timing in GDM on insulin'],
  },
  sourceTag: {
    UG: 'Synthesized for UG • Dutta + NCERT aligned',
    PG: 'Synthesized for PG • WHO 2013, FIGO & Dutta aligned',
  },
};

export const EXTRA_OBGYN_TOPICS: readonly ObgynTopic[] = [
  ECTOPIC,
  SHOULDER,
  PCOS,
  FIBROID,
  GDM,
];
