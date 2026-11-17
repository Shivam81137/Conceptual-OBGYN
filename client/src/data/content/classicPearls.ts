/**
 * Classical OBGYN pearls
 * ---------------------------------------------------------------------------
 * A curated, faculty-style revision bank of timeless teaching points: classic
 * signs and eponyms, first-line drugs, defining thresholds and exam traps.
 *
 * Rules for this file:
 *   · one self-contained fact per line (readable in two lines on the card);
 *   · every number, dose and cut-off is a mainstream textbook / guideline value;
 *   · no hedging, no trivia that varies between editions;
 *   · tags stay short and upper-case to match the card's chip.
 *
 * The card rotates through the whole bank with a persisted shuffle-bag
 * (`lib/pearlRotation.ts`), so a line is never repeated until every pearl has
 * been shown once — then the bag refills and cycles again.
 */

export interface ClassicPearl {
  readonly id: string;
  readonly text: string;
  readonly tag: string;
}

export const CLASSIC_PEARLS: readonly ClassicPearl[] = [
  /* ------------------------------------------------------------- obstetrics */
  {
    id: 'bishop-score',
    text: 'Bishop score ≥ 8 indicates a favourable cervix — induction is likely to succeed.',
    tag: 'OBSTETRICS',
  },
  {
    id: 'mgso4-toxicity',
    text: 'Loss of deep tendon reflexes precedes MgSO4 respiratory depression — antidote: calcium gluconate 10%.',
    tag: 'TOXICITY',
  },
  {
    id: 'hellp-triplet',
    text: 'Platelets < 1 lakh with rising LDH in severe preeclampsia means HELLP — stabilise, then deliver.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'figo-cervix-iib',
    text: 'Parametrial spread in cervical carcinoma upgrades to FIGO IIB — chemoradiation, not surgery.',
    tag: 'ONCOLOGY',
  },
  {
    id: 'placenta-praevia',
    text: 'Painless bright-red bleeding with a soft uterus is placenta praevia — never do a PV exam before localisation.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'abruption',
    text: 'Painful dark bleeding with a woody-hard uterus is abruption — a normal scan does not exclude it.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'partograph-lines',
    text: 'Partograph alert line = 1 cm/h from 4 cm; the action line sits 4 h to its right.',
    tag: 'LABOUR',
  },
  {
    id: 'shoulder-dystocia',
    text: 'Shoulder dystocia: McRoberts plus suprapubic pressure first — never fundal pressure.',
    tag: 'EMERGENCY',
  },
  {
    id: 'pph-threshold',
    text: 'PPH is ≥ 500 mL after vaginal birth or ≥ 1,000 mL after caesarean — give TXA 1 g IV within 3 h.',
    tag: 'EMERGENCY',
  },
  {
    id: 'ectopic-methotrexate',
    text: 'Methotrexate 50 mg/m² IM for ectopic if stable, β-hCG < 5,000 IU/L, mass < 4 cm, no cardiac activity.',
    tag: 'EMERGENCY',
  },
  {
    id: 'gdm-ogtt',
    text: 'GDM: 75 g OGTT at 24–28 weeks — fasting ≥ 92, 1 h ≥ 180 or 2 h ≥ 153 mg/dL; any one diagnoses.',
    tag: 'SCREENING',
  },
  {
    id: 'mgso4-not-pph',
    text: 'MgSO4 prevents and treats eclamptic fits — it is not an antihypertensive and has no role in PPH.',
    tag: 'PHARMACOLOGY',
  },
  {
    id: 'pritchard',
    text: 'Pritchard regimen: 4 g IV plus 10 g IM loading, then 5 g IM every 4 h.',
    tag: 'PHARMACOLOGY',
  },
  {
    id: 'zuspan',
    text: 'Zuspan regimen: 4 g IV loading dose, then a 1 g/hour infusion.',
    tag: 'PHARMACOLOGY',
  },
  {
    id: 'mgso4-monitoring',
    text: 'MgSO4 monitoring: reflexes present, respiratory rate ≥ 16/min, urine output ≥ 30 mL/h.',
    tag: 'TOXICITY',
  },
  {
    id: 'antenatal-steroids',
    text: 'Antenatal steroids before 34 weeks — dexamethasone 6 mg IM 12-hourly × 4 — cut RDS and IVH.',
    tag: 'OBSTETRICS',
  },
  {
    id: 'fhr-baseline',
    text: 'Fetal heart baseline is 110–160 bpm; below 110 is bradycardia and above 160 is tachycardia.',
    tag: 'FETAL',
  },
  {
    id: 'decelerations',
    text: 'Late decelerations reflect uteroplacental insufficiency; variable decelerations reflect cord compression.',
    tag: 'FETAL',
  },
  {
    id: 'oligohydramnios',
    text: 'Oligohydramnios = AFI ≤ 5 cm or deepest vertical pocket < 2 cm.',
    tag: 'FETAL',
  },
  {
    id: 'polyhydramnios',
    text: 'Polyhydramnios = AFI ≥ 25 cm or deepest vertical pocket ≥ 8 cm.',
    tag: 'FETAL',
  },
  {
    id: 'anti-d',
    text: 'Rh-negative mother: anti-D 300 µg IM at 28 weeks and within 72 h of delivery.',
    tag: 'OBSTETRICS',
  },
  {
    id: 'ecv-breech',
    text: 'Breech at term: offer external cephalic version from 36–37 weeks if there is no contraindication.',
    tag: 'LABOUR',
  },
  {
    id: 'vbac',
    text: 'VBAC suits a previous lower-segment caesarean with no other scar; induction raises rupture risk.',
    tag: 'LABOUR',
  },
  {
    id: 'gestational-hypertension',
    text: 'Gestational hypertension = BP ≥ 140/90 after 20 weeks without proteinuria or organ dysfunction.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'preeclampsia-definition',
    text: 'Preeclampsia = BP ≥ 140/90 after 20 weeks plus proteinuria or maternal organ dysfunction.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'preeclampsia-severe-timing',
    text: 'Preeclampsia with severe features at ≥ 34 weeks means delivery; below 34 weeks, stabilise first.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'placenta-accreta',
    text: 'Placenta praevia with a prior caesarean raises accreta risk — plan delivery in a specialist centre.',
    tag: 'HIGH-RISK OB',
  },
  {
    id: 'uterine-inversion',
    text: 'Uterine inversion: replace the uterus before removing the placenta — never deliver it first.',
    tag: 'EMERGENCY',
  },
  {
    id: 'naegele',
    text: "Naegele's rule: EDD = first day of LMP + 280 days (LMP − 3 months + 7 days + 1 year).",
    tag: 'OBSTETRICS',
  },
  {
    id: 'crl-dating',
    text: 'Crown–rump length at 7–13 weeks is the most accurate single measure of gestational age.',
    tag: 'OBSTETRICS',
  },
  {
    id: 'folic-acid',
    text: 'Folic acid 400 µg daily from 3 months before conception reduces neural tube defects.',
    tag: 'PREVENTION',
  },
  {
    id: 'gbs-prophylaxis',
    text: 'Group B Streptococcus colonisation in labour → intrapartum penicillin prophylaxis.',
    tag: 'OBSTETRICS',
  },
  {
    id: 'puerperal-endometritis',
    text: 'Puerperal endometritis: postpartum fever with uterine tenderness — cover anaerobes and Gram-negatives.',
    tag: 'OBSTETRICS',
  },
  {
    id: 'amniotic-fluid-embolism',
    text: 'Amniotic fluid embolism: sudden hypoxia, hypotension and coagulopathy — supportive care only.',
    tag: 'EMERGENCY',
  },
  {
    id: 'bandl-ring',
    text: "Bandl's ring in obstructed labour signals impending uterine rupture — deliver without delay.",
    tag: 'LABOUR',
  },

  /* ------------------------------------------------------------ gynaecology */
  {
    id: 'pcos-rotterdam',
    text: 'Rotterdam PCOS = 2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovarian morphology.',
    tag: 'GYNAECOLOGY',
  },
  {
    id: 'letrozole-first-line',
    text: 'Letrozole is first-line ovulation induction in PCOS — superior live birth to clomiphene.',
    tag: 'PHARMACOLOGY',
  },
  {
    id: 'hydatidiform-mole',
    text: "Complete mole: 'snowstorm' ultrasound and markedly raised β-hCG — evacuate and follow serial hCG.",
    tag: 'ONCOLOGY',
  },
  {
    id: 'hegar-sign',
    text: "Hegar's sign — softening of the lower uterine segment — is a classical early pregnancy sign.",
    tag: 'CLASSIC SIGNS',
  },
  {
    id: 'chadwick-sign',
    text: "Chadwick's sign — a bluish-violet cervix and vagina — reflects venous congestion in early pregnancy.",
    tag: 'CLASSIC SIGNS',
  },
  {
    id: 'goodell-sign',
    text: "Goodell's sign — cervical softening — appears from about 6 weeks of pregnancy.",
    tag: 'CLASSIC SIGNS',
  },
  {
    id: 'piskacek-sign',
    text: "Piskacek's sign: asymmetrical uterine enlargement over the implantation cornu in early pregnancy.",
    tag: 'CLASSIC SIGNS',
  },
  {
    id: 'cullen-sign',
    text: "Cullen's sign — periumbilical bruising — signals retroperitoneal bleeding, classically a ruptured ectopic.",
    tag: 'CLASSIC SIGNS',
  },
  {
    id: 'asherman',
    text: 'Asherman syndrome: intrauterine adhesions after curettage cause amenorrhoea and infertility.',
    tag: 'GYNAECOLOGY',
  },
  {
    id: 'sheehan',
    text: 'Sheehan syndrome: postpartum pituitary necrosis after major haemorrhage — failure to lactate, then amenorrhoea.',
    tag: 'CLASSIC SIGNS',
  },
  {
    id: 'turner',
    text: 'Turner syndrome (45,X): primary amenorrhoea, streak gonads, short stature and a webbed neck.',
    tag: 'REPRODUCTIVE',
  },
  {
    id: 'mullerian-agenesis',
    text: 'Müllerian agenesis: 46,XX with normal ovaries but an absent uterus and a short blind vagina.',
    tag: 'REPRODUCTIVE',
  },
  {
    id: 'androgen-insensitivity',
    text: 'Androgen insensitivity: 46,XY with testes, a blind vagina and no uterus — testosterone normal or high.',
    tag: 'REPRODUCTIVE',
  },
  {
    id: 'postmenopausal-bleeding',
    text: 'Postmenopausal bleeding is endometrial cancer until proven otherwise — image and biopsy.',
    tag: 'ONCOLOGY',
  },
  {
    id: 'fibroid-submucosal',
    text: 'Submucosal fibroids (FIGO 0–2) cause the most bleeding and infertility; myomectomy preserves fertility.',
    tag: 'GYNAECOLOGY',
  },
  {
    id: 'gnrh-fibroids',
    text: 'GnRH agonists shrink fibroids before surgery but create a reversible hypo-oestrogenic state.',
    tag: 'PHARMACOLOGY',
  },
  {
    id: 'endometriosis',
    text: 'Endometriosis: dysmenorrhoea, dyspareunia and infertility — laparoscopy is the diagnostic gold standard.',
    tag: 'GYNAECOLOGY',
  },
  {
    id: 'adenomyosis',
    text: 'Adenomyosis gives a bulky, boggy, tender uterus with heavy periods and a thickened junctional zone.',
    tag: 'GYNAECOLOGY',
  },
  {
    id: 'copper-iud-ec',
    text: 'A copper IUD is the most effective emergency contraception, licensed up to 5 days after unprotected sex.',
    tag: 'CONTRACEPTION',
  },
  {
    id: 'coc-migraine-aura',
    text: 'Combined oral contraceptives are contraindicated in migraine with aura — the stroke risk is too high.',
    tag: 'CONTRACEPTION',
  },
  {
    id: 'unopposed-oestrogen',
    text: 'Unopposed oestrogen raises endometrial cancer risk — add a progestogen in any woman with a uterus.',
    tag: 'PHARMACOLOGY',
  },
  {
    id: 'ovarian-torsion',
    text: 'Ovarian torsion: sudden severe unilateral pain — detorse and conserve the ovary unless frankly necrotic.',
    tag: 'EMERGENCY',
  },
  {
    id: 'krukenberg',
    text: 'Krukenberg tumour: bilateral signet-ring ovarian metastases, classically from a gastric primary.',
    tag: 'ONCOLOGY',
  },
  {
    id: 'meigs',
    text: 'Meigs syndrome: benign ovarian fibroma with ascites and pleural effusion — resolves after excision.',
    tag: 'ONCOLOGY',
  },
  {
    id: 'pid',
    text: 'PID: lower abdominal pain with cervical motion tenderness — cover gonorrhoea, chlamydia and anaerobes.',
    tag: 'INFECTION',
  },
  {
    id: 'chlamydia',
    text: 'Chlamydia is the commonest bacterial STI; treat with doxycycline and trace and treat all contacts.',
    tag: 'INFECTION',
  },
  {
    id: 'bartholin-abscess',
    text: 'A Bartholin abscess needs incision and drainage; antibiotics alone will not resolve it.',
    tag: 'GYNAECOLOGY',
  },
  {
    id: 'ohss',
    text: 'Ovarian hyperstimulation syndrome: third-space fluid shift after ovulation induction — severe cases thrombose.',
    tag: 'REPRODUCTIVE',
  },
  {
    id: 'beta-hcg-doubling',
    text: 'In early pregnancy β-hCG should roughly double every 48 h; a slower rise suggests an abnormal pregnancy.',
    tag: 'REPRODUCTIVE',
  },
  {
    id: 'hpv-vaccine',
    text: 'HPV 16 and 18 cause about 70% of cervical cancers — vaccination before sexual exposure prevents most.',
    tag: 'PREVENTION',
  },
];

/** Fast id → pearl lookup used by the rotation engine. */
export const PEARL_BY_ID: ReadonlyMap<string, ClassicPearl> = new Map(
  CLASSIC_PEARLS.map((pearl) => [pearl.id, pearl]),
);
