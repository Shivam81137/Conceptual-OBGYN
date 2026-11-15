import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 25 - Shoulder Dystocia (RCOG Green-top Guideline No. 42)
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten intrapartum notes (obygn 2 pdf, pages 17-28)
 * and updated where the 2026 RCOG revision supersedes older estimated-fetal-
 * weight rules carried in those notes.
 *
 * Covers:
 * - Definition, mechanism and the turtle sign
 * - Maternal and neonatal morbidity
 * - Risk factors, prediction limits and current counselling
 * - Preparation, recognition and the call-for-help sequence
 * - McRoberts and suprapubic pressure
 * - Internal rotation: Rubin and Woods screw
 * - Posterior arm delivery and the all-fours position
 * - Last-resort manoeuvres and documentation
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const SHOULDER_DYSTOCIA_MODULE: StudioModule = {
  id: 'pg-mod-25-shoulder-dystocia',
  track: 'NEET_PG',
  title: 'Shoulder Dystocia: RCOG GTG 42',
  shortTitle: 'Shoulder Dystocia',
  summary:
    'Complete PG clinical revision module on shoulder dystocia following RCOG Green-top Guideline No. 42 with the 2026 update. Features the definition as failure of shoulder delivery after the head with gentle axial traction requiring additional manoeuvres, the turtle sign, Erb palsy C5-C6 and Klumpke injury, why most cases cannot be predicted, the historical 4.5 kg diabetic and 5.0 kg non-diabetic thresholds and why they are no longer automatic rules, the 2026 individualised discussion when EFW exceeds about 4,000 g from 36 weeks, call for help and stop pushing, McRoberts plus suprapubic pressure as first-line, never using fundal pressure, episiotomy for access rather than release, Rubin and Woods screw internal rotation, posterior arm delivery, all-fours, Zavanelli, cleidotomy and symphysiotomy as last-resort procedures, and contemporaneous documentation with neonatal and parental follow-up, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'McRoberts plus suprapubic pressure, no fundal pressure, and the 2026 update.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 42',
    'Turtle Sign',
    'Erb Palsy C5-C6',
    'Risk Prediction Limits',
    '2026 EFW Update',
    'Call for Help',
    'McRoberts',
    'Suprapubic Pressure',
    'No Fundal Pressure',
    'Rubin & Woods Screw',
    'Posterior Arm',
    'Zavanelli / Cleidotomy',
  ],
  sourceTag:
    'Handwritten intrapartum revision (obygn 2 pdf, pp. 17-28) • RCOG Green-top Guideline No. 42, 2026 update',
  updatedAtISO: '2026-11-14T16:00:00.000Z',
  notes: [
    {
      id: 'definition-mechanism',
      heading: 'Definition, Mechanism and the Turtle Sign',
      intro:
        'Shoulder dystocia is a complication of vaginal cephalic birth in which, after delivery of the fetal head, the shoulders fail to deliver with gentle axial traction and require additional obstetric manoeuvres. It is a clinical emergency, not a radiographic diagnosis.',
      flow: [
        'Fetal head delivers',
        'Gentle axial traction fails to deliver the shoulders',
        'Anterior shoulder impacts behind the symphysis pubis, or less commonly the posterior shoulder impacts the sacral promontory',
        'Normal restitution/external rotation may be absent',
        'The head may retract against the perineum (turtle sign)',
        'The head-to-body interval prolongs and chest/cord compression may impair oxygenation',
        'Additional manoeuvres are required',
      ],
      bullets: [
        'Definition: failure of shoulder delivery after the head with gentle axial traction, requiring additional obstetric manoeuvres.',
        'Anterior Impaction: the anterior shoulder becomes impacted behind the maternal symphysis pubis.',
        'Posterior Impaction: less commonly, the posterior shoulder impacts against the sacral promontory.',
        'Restitution: normal restitution/external rotation may be absent.',
        'Turtle Sign: the delivered head retracts tightly against the perineum after emerging rather than remaining delivered.',
        'Warning Sign: the turtle sign is a warning, not a substitute for assessing whether the shoulders are actually impacted.',
        'Head-to-Body Interval: prolonged, with fetal chest compression and cord compression potentially impairing ventilation and oxygenation.',
      ],
      table: {
        head: ['Feature', 'Detail'],
        rows: [
          ['Definition', 'Shoulders fail to deliver with gentle axial traction after the head'],
          ['Common impaction', 'Anterior shoulder behind the symphysis pubis'],
          ['Less common impaction', 'Posterior shoulder against the sacral promontory'],
          ['Turtle sign', 'Head retracts against the perineum'],
          ['Risk if prolonged', 'Chest/cord compression and impaired oxygenation'],
        ],
      },
      pearls: [
        'Golden Pearl: shoulder dystocia is diagnosed clinically when gentle axial traction fails and manoeuvres are needed.',
        'The turtle sign is a warning, not proof of impaction.',
        'Prolongation of the head-to-body interval threatens fetal oxygenation.',
      ],
      trap: {
        title: 'Examiner trap - treating the turtle sign as the diagnosis',
        body: 'The turtle sign is a warning sign. The diagnosis is failure of shoulder delivery with gentle axial traction requiring additional manoeuvres.',
      },
      traps: [
        {
          title: '• Waiting for the turtle sign instead of recognising failed delivery.',
        },
        {
          title: '• Using strong traction to force delivery.',
        },
        {
          title: '• Forgetting that the posterior shoulder can impact.',
        },
      ],
    },
    {
      id: 'morbidity',
      heading: 'Maternal and Neonatal Morbidity',
      intro:
        'Shoulder dystocia can injure the brachial plexus, fracture the clavicle or humerus and cause hypoxic-ischaemic injury. Maternal trauma and psychological harm are also important.',
      flow: [
        'Recognise the risk of brachial plexus injury',
        'Assess for clavicle or humeral fracture',
        'Consider hypoxic-ischaemic injury, seizures or death in severe cases',
        'Assess maternal blood loss and genital tract trauma',
        'Document carefully and avoid blaming traction retrospectively',
        'Arrange neonatal and maternal follow-up',
        'Debrief the parents in clear, non-blaming language',
      ],
      bullets: [
        'Brachial Plexus Injury: includes Erb palsy, predominantly C5-C6, and Klumpke-type lower plexus injury, which is less common.',
        'Fractures: clavicle or humeral fracture.',
        'Hypoxia: hypoxic-ischaemic injury, seizures or death in severe cases.',
        'BPI Prognosis: many neonatal BPI cases improve, but permanent disability can occur.',
        'BPI Without Dystocia: a brachial plexus injury may also occur without a documented shoulder dystocia.',
        'Maternal Haemorrhage: postpartum haemorrhage due to uterine atony or trauma.',
        'Maternal Trauma: third-/fourth-degree perineal injury, vaginal tears and cervical laceration.',
        'Psychological Harm: psychological trauma and fear of subsequent birth.',
        'Documentation Caveat: the presence of an injury does not by itself prove that excessive traction occurred.',
        'Contemporaneous Record: careful contemporaneous documentation is essential.',
      ],
      table: {
        head: ['Neonatal', 'Maternal'],
        rows: [
          ['Brachial plexus injury (Erb C5-C6; Klumpke less common)', 'Postpartum haemorrhage'],
          ['Clavicle or humeral fracture', 'Third-/fourth-degree perineal injury'],
          ['Hypoxic-ischaemic injury, seizures, death', 'Vaginal or cervical laceration'],
          ['Many BPI cases improve; permanent disability possible', 'Psychological trauma and fear of future birth'],
        ],
      },
      pearls: [
        'Golden Pearl: Erb palsy classically involves C5-C6.',
        'A brachial plexus injury can occur without documented shoulder dystocia.',
        'Injury alone does not prove excessive traction; contemporaneous records matter.',
      ],
      trap: {
        title: 'Examiner trap - equating neonatal injury with excessive traction',
        body: 'Brachial plexus injury can occur without documented shoulder dystocia, and the presence of injury does not by itself prove that excessive traction was used. Careful documentation and review are essential.',
      },
      traps: [
        {
          title: '• Missing a clavicle or humeral fracture.',
        },
        {
          title: '• Focusing only on the baby and missing maternal trauma.',
        },
        {
          title: '• Blaming the clinician from the injury alone.',
        },
      ],
    },
    {
      id: 'risk-prediction',
      heading: 'Risk Factors and Prediction',
      intro:
        'Risk factors include macrosomia, diabetes, previous shoulder dystocia, obesity, excessive gestational weight gain and a prolonged second stage or assisted birth. Most cases cannot be predicted reliably before birth, and ultrasound estimated fetal weight has meaningful error.',
      flow: [
        'Identify risk factors and discuss intrapartum contingency',
        'Recognise that most cases occur without predictable risk',
        'Interpret ultrasound EFW with its error, especially at high weights',
        'Use the historical 4.5 kg and 5.0 kg figures as context, not automatic rules',
        'From 36 weeks, discuss individualised options when EFW is above about 4,000 g',
        'Consider diabetes, prior history, EFW accuracy, preferences and local guidance',
        'Do not assume a prior shoulder dystocia mandates caesarean',
      ],
      bullets: [
        'Fetal Macrosomia: large-for-gestational-age fetus.',
        'Maternal Diabetes: pre-existing or gestational.',
        'Previous Shoulder Dystocia: an important recurrence risk factor.',
        'Maternal Obesity: and excessive gestational weight gain.',
        'Labour Factors: prolonged second stage, arrest of descent or assisted vaginal birth.',
        'Prediction Limit: most shoulder dystocia cases cannot be predicted reliably before birth.',
        'Size Paradox: many affected babies are not extremely large, and many large babies deliver without shoulder dystocia.',
        'EFW Error: ultrasound estimated fetal weight has meaningful error, particularly at high weights.',
        'Risk Factor Role: prompt preparedness and an informed birth discussion, not certainty.',
        'Historical Thresholds: older notes quote considering planned caesarean above 4.5 kg in diabetes and above 5.0 kg without diabetes.',
        'Not Universal: these values are not a diagnostic definition and should not be treated as universal automatic rules.',
        '2026 Counselling: individualised discussion of expectant management, induction and planned caesarean, particularly when ultrasound suggests a fetus above about 4,000 g from 36 weeks onward.',
        'Individualise: consider diabetes status, prior obstetric history, EFW accuracy, maternal preferences and local guidance.',
        'Prior Dystocia: does not mean every subsequent birth must be by caesarean; discuss recurrence risk and the circumstances of the previous event.',
      ],
      table: {
        head: ['Risk factor', 'Clinical use'],
        rows: [
          ['Macrosomia/LGA', 'Prepare for possible dystocia; poor prediction'],
          ['Diabetes', 'Increases risk; discuss birth options individually'],
          ['Previous shoulder dystocia', 'Recurrence risk; individualised discussion, not automatic caesarean'],
          ['Obesity/excess weight gain', 'Contributes to risk'],
          ['Prolonged second stage/assisted birth', 'Intrapartum risk marker'],
          ['EFW above about 4,000 g from 36 weeks', '2026 RCOG: individualised discussion of options'],
        ],
      },
      pearls: [
        'Golden Pearl: risk factors are not sufficiently predictive to identify every case.',
        'The historical 4.5 kg diabetic and 5.0 kg non-diabetic figures are not automatic contemporary rules.',
        'A prior shoulder dystocia does not mandate caesarean for every subsequent birth.',
      ],
      trap: {
        title: 'Examiner trap - applying the old 4.5 kg and 5.0 kg cut-offs as automatic caesarean rules',
        body: 'The 2026 RCOG update emphasises individualised counselling, including when EFW is above about 4,000 g from 36 weeks. Diabetes status, prior history, EFW accuracy and patient preference all matter.',
      },
      traps: [
        {
          title: '• Reassuring because the baby is not macrosomic.',
        },
        {
          title: '• Treating a previous dystocia as an automatic caesarean.',
        },
        {
          title: '• Quoting the old weight cut-offs as universal rules.',
        },
      ],
    },
    {
      id: 'preparation-recognition',
      heading: 'Preparation and Recognition',
      intro:
        'Preparedness is the strongest practical defence. Identify risk factors, ensure staff training and a clear call-for-help system, and use a systematic manoeuvre sequence once shoulder dystocia is recognised.',
      flow: [
        'Identify risk factors and discuss contingency before birth',
        'Ensure staff training and a clear call-for-help system',
        'Have a stepwise manoeuvre protocol available',
        'For high-risk birth, ensure staffing and neonatal resuscitation capability',
        'Recognise failed delivery with gentle axial traction',
        'Call for help clearly and note the time of head delivery',
        'Ask the mother to stop pushing briefly if it helps; avoid unnecessary delay',
      ],
      bullets: [
        'Before Birth: identify risk factors and discuss intrapartum contingency where appropriate.',
        'Training: ensure staff training, a clear call-for-help system and availability of a stepwise manoeuvre protocol.',
        'High-Risk Birth: ensure appropriate staffing and neonatal resuscitation capability.',
        'Recognition: recognise that the shoulders have not delivered with gentle axial traction.',
        'Call for Help: summon the senior obstetrician, midwife, anaesthetist, neonatal team and additional staff.',
        'Timing: note the time of head delivery and announce the emergency.',
        'Pushing: ask the mother to stop pushing briefly if this helps facilitate manoeuvres; avoid unnecessary delay.',
        'No Fundal Pressure: do not apply fundal pressure.',
        'No Excessive Traction: avoid excessive downward, lateral or rotational traction on the fetal head/neck.',
        'Systematic Sequence: move promptly from one manoeuvre to the next if unsuccessful.',
      ],
      table: {
        head: ['Action', 'Detail'],
        rows: [
          ['Call for help', 'Senior obstetrician, midwife, anaesthetist, neonatal team'],
          ['Note the time', 'Head delivery and head-to-body interval'],
          ['Stop pushing briefly', 'If it helps facilitate manoeuvres'],
          ['Avoid', 'Fundal pressure and excessive traction'],
          ['Proceed', 'Systematic stepwise manoeuvre sequence'],
        ],
      },
      pearls: [
        'Golden Pearl: call for help early and record the time of head delivery.',
        'Never use fundal pressure.',
        'Avoid excessive downward, lateral or rotational traction on the fetal neck.',
      ],
      trap: {
        title: 'Examiner trap - continuing traction instead of moving through the manoeuvre sequence',
        body: 'Ineffective traction should not be continued. Move promptly through a systematic sequence while avoiding fundal pressure and excessive neck traction.',
      },
      traps: [
        {
          title: '• Delaying the call for help.',
        },
        {
          title: '• Applying fundal pressure.',
        },
        {
          title: '• Continuing strong traction between manoeuvres.',
        },
      ],
    },
    {
      id: 'first-line-manoeuvres',
      heading: 'First-Line External Manoeuvres',
      intro:
        'McRoberts and suprapubic pressure are the initial external manoeuvres, usually combined. They are designed to release the anterior shoulder or reduce the bisacromial diameter without fundal pressure.',
      flow: [
        'Perform McRoberts: hyperflex the maternal hips, knees toward the abdomen',
        'This straightens the lumbosacral angle and rotates the symphysis pubis cephalad',
        'Add suprapubic pressure just above the pubic bone',
        'Direct pressure to dislodge/adduct the impacted shoulder',
        'Use continuous or rocking pressure according to protocol',
        'Do not use fundal pressure',
        'If unsuccessful, proceed promptly to internal manoeuvres',
      ],
      bullets: [
        'McRoberts: hyperflex the maternal hips, bringing the knees toward the abdomen.',
        'McRoberts Mechanism: straightens the lumbosacral angle and rotates the symphysis pubis cephalad, potentially releasing the anterior shoulder.',
        'McRoberts Role: first-line and performed with coordinated assistance.',
        'Suprapubic Pressure: apply just above the maternal pubic bone, directed to dislodge/adduct the impacted fetal shoulder and reduce the bisacromial diameter.',
        'Pressure Style: continuous or rocking according to protocol and circumstances.',
        'Combination: suprapubic pressure may be combined with McRoberts.',
        'Never Fundal: fundal pressure can worsen impaction and increase the risk of uterine rupture or fetal injury.',
        'Episiotomy Caveat: episiotomy does not release a bony shoulder impaction.',
        'Episiotomy Role: may be considered to create access for internal manoeuvres if the perineum limits access.',
        'Not Routine: perform episiotomy only when needed, not as a routine first manoeuvre for every case.',
      ],
      table: {
        head: ['Manoeuvre', 'Mechanism', 'Key point'],
        rows: [
          ['McRoberts', 'Straightens lumbosacral angle; rotates symphysis cephalad', 'First-line; hyperflex hips'],
          ['Suprapubic pressure', 'Dislodges/adducts anterior shoulder; reduces bisacromial diameter', 'Just above pubic bone; combine with McRoberts'],
          ['Fundal pressure', 'Worsens impaction', 'Never use'],
          ['Episiotomy', 'Creates access; does not release bony impaction', 'Only when needed for access'],
        ],
      },
      pearls: [
        'Golden Pearl: McRoberts plus suprapubic pressure are the initial external manoeuvres.',
        'Fundal pressure is contraindicated because it worsens impaction.',
        'Episiotomy improves access but does not release the shoulder.',
      ],
      trap: {
        title: 'Examiner trap - using fundal pressure to push the shoulder out',
        body: 'Fundal pressure can worsen impaction and increase the risk of uterine rupture and fetal injury. It is never part of shoulder dystocia management.',
      },
      traps: [
        {
          title: '• Performing a routine episiotomy instead of McRoberts.',
        },
        {
          title: '• Applying pressure over the fundus.',
        },
        {
          title: '• Using suprapubic pressure far above the pubic bone.',
        },
      ],
    },
    {
      id: 'internal-rotation',
      heading: 'Internal Rotational Manoeuvres: Rubin and Woods Screw',
      intro:
        'Internal rotational manoeuvres rotate the shoulders into a more favourable oblique diameter and/or release the impacted shoulder. They require training and adequate access.',
      flow: [
        'Ensure adequate access and consider episiotomy only if needed',
        'Apply pressure to the posterior aspect of the anterior shoulder (Rubin)',
        'Adduct the shoulder girdle and rotate it toward an oblique diameter',
        'Apply pressure to the anterior surface of the posterior shoulder (Woods screw)',
        'Rotate the fetus like a screw',
        'Reverse Woods screw applies pressure in the opposite direction',
        'Do not twist the neck; use controlled pressure on the shoulder girdle',
      ],
      bullets: [
        'Rubin Manoeuvre: apply pressure to the posterior aspect of the anterior shoulder, or the appropriate surface according to technique, to adduct the shoulder girdle and rotate it toward an oblique diameter.',
        'Woods Screw: apply pressure to the anterior surface of the posterior shoulder to rotate the fetus like a screw.',
        'Reverse Woods Screw: apply pressure in the opposite direction to achieve rotation.',
        'Clinical Principle: do not continue ineffective traction.',
        'Controlled Pressure: use pressure on the fetal shoulder girdle rather than twisting the neck.',
        'Combination: internal rotation may be combined with a change in maternal position.',
        'Training: these manoeuvres require training and adequate access.',
      ],
      table: {
        head: ['Manoeuvre', 'Pressure point', 'Effect'],
        rows: [
          ['Rubin', 'Posterior aspect of anterior shoulder', 'Adducts and rotates shoulder girdle to oblique diameter'],
          ['Woods screw', 'Anterior surface of posterior shoulder', 'Rotates fetus like a screw'],
          ['Reverse Woods screw', 'Opposite direction', 'Rotates the other way'],
        ],
      },
      pearls: [
        'Golden Pearl: Rubin and Woods screw rotate the shoulder girdle; they do not involve twisting the neck.',
        'Controlled pressure on the shoulder girdle is safer than continued traction.',
        'Internal rotation may be combined with a change in maternal position.',
      ],
      trap: {
        title: 'Examiner trap - rotating the fetal head or neck instead of the shoulder girdle',
        body: 'Internal rotational manoeuvres apply controlled pressure to the fetal shoulder girdle. Twisting the neck risks injury and does not relieve the bony impaction.',
      },
      traps: [
        {
          title: '• Twisting the neck during internal rotation.',
        },
        {
          title: '• Continuing ineffective traction before trying rotation.',
        },
        {
          title: '• Forgetting that adequate access is required.',
        },
      ],
    },
    {
      id: 'posterior-arm',
      heading: 'Delivery of the Posterior Arm',
      intro:
        'The posterior arm manoeuvre reduces the shoulder-to-shoulder (bisacromial) diameter by bringing the posterior arm across the fetal chest and out of the vagina. It is a highly effective manoeuvre when performed correctly.',
      flow: [
        'Identify the posterior arm in the sacral hollow',
        'Follow the arm to the elbow',
        'Flex the elbow if necessary',
        'Sweep the forearm across the fetal chest/face',
        'Deliver the hand and arm over the perineum',
        'Avoid pulling on the humerus in a way that may cause fracture',
        'Once delivered, the bisacromial diameter is reduced and the anterior shoulder may release',
      ],
      bullets: [
        'Identify: locate the posterior arm in the sacral hollow.',
        'Follow: trace the arm to the elbow.',
        'Flex: flex the elbow if necessary.',
        'Sweep: bring the forearm across the fetal chest/face and deliver the hand and arm over the perineum.',
        'Avoid: do not pull on the humerus in a way that may cause fracture.',
        'Technique: use controlled movement and follow the limb anatomy.',
        'Effect: delivery reduces the bisacromial diameter and may release the anterior shoulder.',
      ],
      table: {
        head: ['Step', 'Action'],
        rows: [
          ['Locate', 'Posterior arm in the sacral hollow'],
          ['Trace', 'Follow to the elbow'],
          ['Flex', 'Flex the elbow if needed'],
          ['Deliver', 'Sweep forearm across chest/face and out over the perineum'],
          ['Avoid', 'Pulling the humerus in a fracture-prone direction'],
        ],
      },
      pearls: [
        'Golden Pearl: posterior arm delivery reduces the bisacromial diameter.',
        'Follow the limb anatomy and avoid forcible humeral traction.',
        'It can release the anterior shoulder once the arm is delivered.',
      ],
      trap: {
        title: 'Examiner trap - pulling the posterior arm by the humerus',
        body: 'Forcible traction on the humerus can fracture it. Identify the arm, flex the elbow, sweep the forearm across the chest and deliver it with controlled movement.',
      },
      traps: [
        {
          title: '• Pulling the arm without flexing the elbow.',
        },
        {
          title: '• Failing to identify the posterior arm in the sacral hollow.',
        },
        {
          title: '• Using uncontrolled force on the humerus.',
        },
      ],
    },
    {
      id: 'all-fours',
      heading: 'All-Fours / Gaskin Position',
      intro:
        'Changing the mother to hands-and-knees can alter pelvic dimensions and assist delivery. It may be useful when the mother is mobile and there is no contraindication to repositioning.',
      flow: [
        'Assess whether the mother can safely reposition',
        'Turn to hands-and-knees if feasible',
        'Continue manoeuvres with the changed pelvic geometry',
        'Recognise that regional anaesthesia, monitoring or limited mobility may make it difficult',
        'Do not let repositioning delay effective manoeuvres in a deteriorating situation',
      ],
      bullets: [
        'Mechanism: changing to hands-and-knees can alter pelvic dimensions and assist delivery.',
        'Suitable Patient: mobile mother with no contraindication to repositioning.',
        'Limitations: regional anaesthesia, monitoring or limited mobility may make it difficult.',
        'Timing: should not delay effective manoeuvres in a deteriorating situation.',
        'Use: an adjunct, not a substitute for definitive manoeuvres.',
      ],
      table: {
        head: ['Advantage', 'Limitation'],
        rows: [
          ['May alter pelvic dimensions', 'Difficult with regional anaesthesia or monitoring'],
          ['Useful in a mobile patient', 'Limited mobility can prevent repositioning'],
          ['Can be combined with other manoeuvres', 'Must not delay definitive care'],
        ],
      },
      pearls: [
        'Golden Pearl: all-fours may help in a suitable patient but should not delay effective manoeuvres.',
        'Regional anaesthesia and monitoring can make repositioning difficult.',
        'It is an adjunct, not a definitive rescue on its own.',
      ],
      trap: {
        title: 'Examiner trap - spending time repositioning a deteriorating patient',
        body: 'All-fours may assist in a mobile patient, but it must not delay internal manoeuvres or other definitive care when the situation is deteriorating.',
      },
      traps: [
        {
          title: '• Attempting all-fours when mobility or monitoring prevents it.',
        },
        {
          title: '• Delaying definitive manoeuvres for repositioning.',
        },
        {
          title: '• Treating all-fours as sufficient on its own.',
        },
      ],
    },
    {
      id: 'last-resort',
      heading: 'Last-Resort Manoeuvres',
      intro:
        'Zavanelli, cleidotomy and symphysiotomy are rare, high-risk rescue procedures used only after standard manoeuvres have failed and with senior expertise.',
      flow: [
        'Confirm that standard manoeuvres have failed',
        'Assemble urgent senior obstetric, anaesthetic and theatre support',
        'Zavanelli · flex and replace the head, then immediate caesarean',
        'Cleidotomy · divide/fracture the clavicle to reduce shoulder width',
        'Symphysiotomy · divide the symphysis pubis in exceptional contexts',
        'Consider posterior axillary traction only by trained teams per local protocol',
        'Choose according to anatomy, operator skill and manoeuvres already attempted',
      ],
      bullets: [
        'Zavanelli: the fetal head is flexed and replaced into the vagina/uterus, followed by immediate caesarean delivery.',
        'Zavanelli Requirements: urgent senior operator, anaesthesia and theatre support.',
        'Zavanelli Risk: maternal and fetal risks are substantial; it is a rescue option, not routine care.',
        'Cleidotomy: deliberate division/fracture of the fetal clavicle to reduce shoulder width.',
        'Cleidotomy Use: rarely performed; risks fetal injury and is a last-resort manoeuvre.',
        'Symphysiotomy: surgical division of the symphysis pubis, used in exceptional contexts where caesarean is not feasible and expertise exists.',
        'Symphysiotomy Setting: not a routine manoeuvre in modern high-resource obstetric settings.',
        'Other Rescue: posterior axillary traction may be used by trained teams according to local protocol.',
        'Choice: depends on anatomy, operator skill and the sequence already attempted.',
      ],
      table: {
        head: ['Procedure', 'What it does', 'Key caveat'],
        rows: [
          ['Zavanelli', 'Replaces the head, then immediate caesarean', 'Substantial maternal/fetal risk; rescue only'],
          ['Cleidotomy', 'Divides/fractures fetal clavicle', 'Rare; fetal injury; last resort'],
          ['Symphysiotomy', 'Divides symphysis pubis', 'Exceptional; not routine in high-resource settings'],
          ['Posterior axillary traction', 'Traction technique for trained teams', 'Follow local protocol'],
        ],
      },
      pearls: [
        'Golden Pearl: Zavanelli, cleidotomy and symphysiotomy are rare last-resort procedures.',
        'Zavanelli requires immediate caesarean capability and senior support.',
        'Symphysiotomy is not routine in modern high-resource obstetrics.',
      ],
      trap: {
        title: 'Examiner trap - listing last-resort procedures as first-line options',
        body: 'These procedures carry major maternal and fetal risks and are used only after standard manoeuvres fail, with senior expertise and, for Zavanelli, immediate theatre support.',
      },
      traps: [
        {
          title: '• Performing cleidotomy before standard manoeuvres.',
        },
        {
          title: '• Attempting Zavanelli without theatre support.',
        },
        {
          title: '• Treating symphysiotomy as routine care.',
        },
      ],
    },
    {
      id: 'documentation-follow-up',
      heading: 'Documentation and Post-Event Care',
      intro:
        'Contemporaneous documentation is essential for clinical care, parents and later review. After birth, examine both mother and baby, explain what happened and plan follow-up.',
      flow: [
        'Record time of head and body delivery and the head-to-body interval',
        'Record fetal position and which shoulder was impacted if known',
        'Record staff present and time help was called',
        'Record manoeuvres, order and success or failure of each',
        'Record direction/type of traction and whether episiotomy was performed',
        'Record Apgar scores, cord gases and neonatal resuscitation',
        'Record maternal blood loss, perineal injury, repair and complications',
      ],
      bullets: [
        'Timing: time of head delivery and body delivery; head-to-body interval.',
        'Position: fetal position and which shoulder was impacted, if known.',
        'Staff: who was present and when help was called.',
        'Manoeuvres: attempted and their order, including whether each was successful.',
        'Traction: direction/type and whether episiotomy was performed.',
        'Neonatal: Apgar scores, cord gases where available and resuscitation.',
        'Maternal: blood loss, perineal injury, repair and postpartum complications.',
        'Neonatal Examination: arm movement, asymmetry, clavicle/humeral fracture and respiratory/neurological issues.',
        'Paediatric Follow-Up: arrange assessment and follow-up if BPI or fracture is suspected.',
        'Maternal Examination: haemorrhage and genital tract trauma, including OASIS assessment.',
        'Parental Explanation: explain in clear, non-blaming language and offer debrief.',
        'Future Pregnancy: review recurrence risk and birth options.',
        'Team Review: participate in structured review and training.',
      ],
      table: {
        head: ['Document', 'Why'],
        rows: [
          ['Head-to-body interval', 'Objective timeline'],
          ['Position and impacted shoulder', 'Explains mechanism'],
          ['Staff and call time', 'Team response record'],
          ['Manoeuvres and order', 'Shows systematic care'],
          ['Traction and episiotomy', 'Procedure detail'],
          ['Apgar, cord gases, resuscitation', 'Neonatal outcome'],
          ['Maternal blood loss and trauma', 'Maternal safety and follow-up'],
        ],
      },
      pearls: [
        'Golden Pearl: document the head-to-body interval, manoeuvres, order and outcomes contemporaneously.',
        'Examine the neonate for arm movement, asymmetry and fracture.',
        'Explain the event to parents in clear, non-blaming language and offer debrief.',
      ],
      trap: {
        title: 'Examiner trap - writing a retrospective summary without the manoeuvre sequence',
        body: 'The record should show the time of head delivery, call for help, each manoeuvre in order, traction used, episiotomy, neonatal condition and maternal trauma. A vague summary is poor documentation and poor defence.',
      },
      traps: [
        {
          title: '• Omitting the head-to-body interval.',
        },
        {
          title: '• Failing to record which manoeuvres were attempted.',
        },
        {
          title: '• Not arranging neonatal or maternal follow-up.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'Shoulder dystocia is failure of shoulder delivery after the head with gentle axial traction requiring additional manoeuvres.',
        'The anterior shoulder commonly impacts behind the symphysis pubis.',
        'Turtle sign = head retracts against the perineum.',
        'Turtle sign is a warning, not the diagnosis itself.',
        'Erb palsy classically involves C5-C6.',
        'Klumpke-type lower plexus injury is less common.',
        'BPI can occur without documented shoulder dystocia.',
        'Most cases cannot be predicted reliably before birth.',
        'The historical 4.5 kg diabetic and 5.0 kg non-diabetic cut-offs are not automatic contemporary rules.',
        'The 2026 update emphasises individualised discussion above about 4,000 g from 36 weeks.',
        'McRoberts plus suprapubic pressure are the initial external manoeuvres.',
        'Never use fundal pressure.',
        'Episiotomy improves access but does not release the shoulder.',
        'Rubin and Woods screw rotate the shoulder girdle.',
        'Posterior arm delivery reduces the bisacromial diameter.',
        'All-fours may help in a suitable patient.',
        'Zavanelli, cleidotomy and symphysiotomy are rare last-resort procedures.',
        'Document the head-to-body interval and manoeuvre sequence.',
        'Examine the neonate for BPI and fracture.',
        'Debrief the parents and review recurrence risk.',
      ],
      traps: [
        {
          title: '• Applying fundal pressure.',
        },
        {
          title: '• Continuing strong traction between manoeuvres.',
        },
        {
          title: '• Performing routine episiotomy instead of McRoberts.',
        },
        {
          title: '• Twisting the fetal neck during internal rotation.',
        },
        {
          title: '• Pulling the posterior arm by the humerus.',
        },
        {
          title: '• Delaying definitive manoeuvres for all-fours.',
        },
        {
          title: '• Treating last-resort procedures as first-line.',
        },
        {
          title: '• Omitting contemporaneous documentation.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm25-f1',
      front: 'Define shoulder dystocia.',
      back: 'A complication of vaginal cephalic birth in which, after delivery of the fetal head, the shoulders fail to deliver with gentle axial traction and require additional obstetric manoeuvres.',
    },
    {
      id: 'm25-f2',
      front: 'What is the turtle sign?',
      back: 'The delivered head retracts tightly against the perineum after emerging rather than remaining delivered. It is a warning sign, not a substitute for assessing impaction.',
    },
    {
      id: 'm25-f3',
      front: 'Which brachial plexus roots are classically involved in Erb palsy?',
      back: 'C5-C6. Klumpke-type lower plexus injury is less common.',
    },
    {
      id: 'm25-f4',
      front: 'Can shoulder dystocia be reliably predicted?',
      back: 'No. Most cases cannot be predicted before birth, many affected babies are not macrosomic, and ultrasound EFW has meaningful error, especially at high weights.',
    },
    {
      id: 'm25-f5',
      front: 'What do the 2026 RCOG updates say about the old 4.5 kg and 5.0 kg thresholds?',
      back: 'They are historical context, not universal automatic caesarean rules. Current counselling is individualised, particularly when EFW is above about 4,000 g from 36 weeks onward.',
    },
    {
      id: 'm25-f6',
      front: 'What are the first-line external manoeuvres for shoulder dystocia?',
      back: 'McRoberts manoeuvre plus suprapubic pressure. McRoberts hyperflexes the hips; suprapubic pressure dislodges/adducts the impacted shoulder.',
    },
    {
      id: 'm25-f7',
      front: 'Why is fundal pressure contraindicated?',
      back: 'It can worsen impaction and increase the risk of uterine rupture and fetal injury. It is never used in shoulder dystocia.',
    },
    {
      id: 'm25-f8',
      front: 'What is the role of episiotomy in shoulder dystocia?',
      back: 'It does not release a bony shoulder impaction. It may be considered to create access for internal manoeuvres when the perineum limits access, not as a routine first manoeuvre.',
    },
    {
      id: 'm25-f9',
      front: 'Describe the Rubin and Woods screw manoeuvres.',
      back: 'Rubin applies pressure to the posterior aspect of the anterior shoulder to adduct and rotate the shoulder girdle. Woods screw applies pressure to the anterior surface of the posterior shoulder to rotate the fetus like a screw; reverse Woods screw uses the opposite direction.',
    },
    {
      id: 'm25-f10',
      front: 'How does posterior arm delivery help?',
      back: 'It reduces the shoulder-to-shoulder (bisacromial) diameter by bringing the posterior arm across the fetal chest and out of the vagina, which may release the anterior shoulder.',
    },
    {
      id: 'm25-f11',
      front: 'When may the all-fours position be used?',
      back: 'In a mobile mother with no contraindication to repositioning. It may alter pelvic dimensions but must not delay effective manoeuvres; regional anaesthesia or monitoring may limit it.',
    },
    {
      id: 'm25-f12',
      front: 'What is the Zavanelli manoeuvre?',
      back: 'The fetal head is flexed and replaced into the vagina/uterus, followed by immediate caesarean delivery. It requires urgent senior, anaesthetic and theatre support and is a last-resort rescue.',
    },
    {
      id: 'm25-f13',
      front: 'What are cleidotomy and symphysiotomy?',
      back: 'Cleidotomy is deliberate division/fracture of the fetal clavicle to reduce shoulder width. Symphysiotomy is surgical division of the symphysis pubis. Both are rare last-resort procedures.',
    },
    {
      id: 'm25-f14',
      front: 'What must be documented after shoulder dystocia?',
      back: 'Head-to-body interval, position and impacted shoulder, staff present and call time, manoeuvres in order and success, traction and episiotomy, Apgar/cord gases/resuscitation, and maternal blood loss and trauma.',
    },
    {
      id: 'm25-f15',
      front: 'What follow-up is needed after shoulder dystocia?',
      back: 'Neonatal examination for arm movement, asymmetry and fracture with paediatric follow-up if needed; maternal examination for haemorrhage and OASIS; parental debrief; recurrence-risk counselling; and team review.',
    },
  ],

  mcqs: [
    {
      id: 'm25-q1',
      stem: 'After delivery of the fetal head, gentle axial traction fails to deliver the shoulders and the head retracts against the perineum. What is the diagnosis?',
      options: ['Breech presentation', 'Shoulder dystocia', 'Cord prolapse', 'Uterine rupture'],
      answerIndex: 1,
      explanation:
        'Failure of shoulder delivery after the head with gentle axial traction, requiring additional manoeuvres, defines shoulder dystocia. The retracting head is the turtle sign.',
    },
    {
      id: 'm25-q2',
      stem: 'Which manoeuvre must NEVER be used in shoulder dystocia?',
      options: ['McRoberts', 'Suprapubic pressure', 'Fundal pressure', 'Posterior arm delivery'],
      answerIndex: 2,
      explanation:
        'Fundal pressure can worsen impaction and increase the risk of uterine rupture and fetal injury. It is never part of shoulder dystocia management.',
    },
    {
      id: 'm25-q3',
      stem: 'What is the correct sequence of first-line external manoeuvres?',
      options: [
        'Fundal pressure then episiotomy',
        'McRoberts plus suprapubic pressure',
        'Zavanelli then cleidotomy',
        'Symphysiotomy then all-fours',
      ],
      answerIndex: 1,
      explanation:
        'McRoberts and suprapubic pressure are the initial external manoeuvres, usually combined. Episiotomy does not release a bony impaction and last-resort procedures are not first-line.',
    },
    {
      id: 'm25-q4',
      stem: 'A 24-year-old primigravida has an EFW of 4.2 kg at 37 weeks and no diabetes. What is the current RCOG 2026 approach?',
      options: [
        'Automatic caesarean because EFW exceeds 4.0 kg',
        'Individualised discussion of expectant management, induction and planned caesarean',
        'No discussion is needed because shoulder dystocia cannot occur below 4.5 kg',
        'Immediate induction at 34 weeks',
      ],
      answerIndex: 1,
      explanation:
        'The 2026 update emphasises individualised discussion when EFW is above about 4,000 g from 36 weeks, considering diabetes status, prior history, EFW accuracy, preferences and local guidance. The old 4.5/5.0 kg figures are not automatic rules.',
    },
    {
      id: 'm25-q5',
      stem: 'Which nerve roots are classically affected in Erb palsy?',
      options: ['C5-C6', 'C7-T1', 'L2-L4', 'S2-S4'],
      answerIndex: 0,
      explanation:
        'Erb palsy classically involves C5-C6. Klumpke-type lower plexus injury (C7-T1) is less common.',
    },
    {
      id: 'm25-q6',
      stem: 'What does the Rubin manoeuvre do?',
      options: [
        'Applies pressure to the posterior aspect of the anterior shoulder to adduct and rotate the shoulder girdle',
        'Applies fundal pressure to push the fetus down',
        'Replaces the fetal head for immediate caesarean',
        'Divides the fetal clavicle',
      ],
      answerIndex: 0,
      explanation:
        'Rubin applies pressure to the posterior aspect of the anterior shoulder to adduct the shoulder girdle and rotate it toward an oblique diameter. Woods screw acts on the posterior shoulder.',
    },
    {
      id: 'm25-q7',
      stem: 'Why does posterior arm delivery help relieve shoulder dystocia?',
      options: [
        'It fractures the clavicle',
        'It reduces the bisacromial diameter',
        'It increases uterine contractions',
        'It rotates the fetal head',
      ],
      answerIndex: 1,
      explanation:
        'Delivering the posterior arm brings it across the fetal chest and out, reducing the shoulder-to-shoulder (bisacromial) diameter and potentially releasing the anterior shoulder.',
    },
    {
      id: 'm25-q8',
      stem: 'What is the Zavanelli manoeuvre?',
      options: [
        'Delivery of the posterior arm',
        'Replacement of the fetal head followed by immediate caesarean',
        'Division of the symphysis pubis',
        'Suprapubic pressure',
      ],
      answerIndex: 1,
      explanation:
        'Zavanelli flexes and replaces the fetal head into the vagina/uterus, followed by immediate caesarean delivery. It is a last-resort rescue requiring senior, anaesthetic and theatre support.',
    },
    {
      id: 'm25-q9',
      stem: 'A baby develops arm weakness after shoulder dystocia. Which statement is correct?',
      options: [
        'The injury proves excessive traction was used',
        'Brachial plexus injury can occur without documented shoulder dystocia and does not by itself prove excessive traction',
        'BPI never improves',
        'No follow-up is needed if the clavicle is intact',
      ],
      answerIndex: 1,
      explanation:
        'Brachial plexus injury can occur without documented shoulder dystocia, and injury alone does not prove excessive traction. Many cases improve, but permanent disability can occur and follow-up is needed.',
    },
    {
      id: 'm25-q10',
      stem: 'Which documentation item is most important immediately after shoulder dystocia?',
      options: [
        'The mother\u2019s prepregnancy weight only',
        'The head-to-body interval and the manoeuvres attempted in order',
        'The colour of the amniotic fluid only',
        'The time of the next prenatal visit',
      ],
      answerIndex: 1,
      explanation:
        'Contemporaneous documentation should include the head-to-body interval, staff and call time, manoeuvres in order and their success, traction/episiotomy, neonatal condition and maternal trauma.',
    },
  ],
};
