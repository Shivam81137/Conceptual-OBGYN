import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 15 - Umbilical Cord Prolapse (RCOG GTG 50)
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 57-68) with RCOG
 * Green-top Guideline No. 50.
 *
 * Covers:
 * - Cord presentation versus occult and overt cord prolapse
 * - Fetal and pregnancy risk factors plus iatrogenic triggers
 * - Antenatal and intrapartum prevention, including the ARM rule
 * - Diagnosis from sudden bradycardia or variable decelerations after ROM
 * - Immediate decompression: call for help, manual elevation and positioning
 * - Bladder filling, cord handling and selected tocolysis
 * - Category 1 versus Category 2 caesarean birth and vaginal birth criteria
 * - Community transfer, threshold of viability and clinical governance
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const UMBILICAL_CORD_PROLAPSE_MODULE: StudioModule = {
  id: 'pg-mod-15-umbilical-cord-prolapse',
  track: 'NEET_PG',
  title: 'Umbilical Cord Prolapse (UCP): RCOG GTG 50',
  shortTitle: 'Umbilical Cord Prolapse',
  summary:
    'Complete PG clinical revision module on umbilical cord prolapse following RCOG Green-top Guideline No. 50. Features cord presentation versus occult and overt prolapse, the 0.1 to 0.6 percent incidence and breech risk, fetal and iatrogenic risk factors, the avoid-ARM rule, diagnosis from sudden bradycardia after membrane rupture, immediate manual elevation and knee-chest positioning, bladder filling with 500 to 750 mL, Category 1 caesarean birth within 30 minutes, terbutaline 0.25 mg, community transfer positioning, paired cord gases, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Call for help, elevate the presenting part and deliver within 30 minutes.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 50',
    'Cord Presentation',
    'Occult vs Overt',
    'Risk Factors',
    'Avoid ARM',
    'Sudden Bradycardia',
    'Manual Elevation',
    'Knee-Chest Position',
    'Bladder Filling',
    'Category 1 CS',
    'Terbutaline 0.25 mg',
    'Paired Cord Gases',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 57-68) • RCOG Green-top Guideline No. 50',
  updatedAtISO: '2026-11-14T11:30:00.000Z',
  notes: [
    {
      id: 'definitions',
      heading: 'Cord Presentation vs Occult vs Overt Prolapse',
      intro:
        'Cord prolapse is descent of the umbilical cord through the cervix alongside or past the presenting part after rupture of membranes. Cord presentation describes the cord lying between the presenting part and the cervix, with or without ruptured membranes.',
      flow: [
        'Establish whether the membranes are intact or ruptured',
        'Locate the cord relative to the presenting part and cervix',
        'Intact membranes with cord below the presenting part · cord presentation',
        'Ruptured membranes with cord alongside the presenting part · occult prolapse',
        'Ruptured membranes with cord past the presenting part · overt prolapse',
        'Treat any palpable or visible cord after rupture as an obstetric emergency',
      ],
      bullets: [
        'Cord Presentation: the umbilical cord lies between the fetal presenting part and the cervix, with or without rupture of membranes.',
        'Cord Prolapse: the cord descends through the cervix alongside or past the presenting part after rupture of membranes.',
        'Overt Prolapse: the cord descends past the presenting part and may be visible at the introitus.',
        'Occult Prolapse: the cord lies alongside the presenting part and may not be visible; an abnormal fetal heart rate may be the only clue.',
        'Incidence: approximately 0.1 to 0.6 percent of pregnancies overall.',
        'Breech Risk: reported slightly above 1 percent in breech presentation.',
        'Mechanism: mechanical compression between the presenting part and maternal pelvis obstructs umbilical blood flow.',
        'Vasospasm: umbilical arterial vasospasm can further compromise circulation, especially with repeated handling of an exteriorised cord.',
        'Sequence: venous flow is impaired first, followed by arterial flow, fetal hypoxia and acidosis.',
        'Outcome: prolonged compression increases the risk of hypoxic-ischaemic injury or death.',
        'Key Distinction: cord presentation may occur with intact membranes; cord prolapse by definition follows membrane rupture.',
        'Clinical Implication: a normal fetal heart rate does not exclude occult prolapse, but routine vaginal examination is not required in every low-risk rupture of membranes.',
      ],
      table: {
        head: ['Entity', 'Definition & Clinical Clue'],
        rows: [
          [
            'Cord presentation',
            'Cord between the presenting part and cervix, with or without ruptured membranes',
          ],
          [
            'Overt prolapse',
            'Cord descends past the presenting part after membrane rupture; may be visible at the introitus',
          ],
          [
            'Occult prolapse',
            'Cord lies alongside the presenting part after membrane rupture; may be invisible with only fetal heart rate abnormality',
          ],
          [
            'Overall incidence',
            'Approximately 0.1 to 0.6 percent; slightly above 1 percent in breech presentation',
          ],
          [
            'Mechanism of compromise',
            'Cord compression between presenting part and pelvis plus umbilical vasospasm',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: cord presentation may occur with intact membranes; cord prolapse follows rupture of membranes.',
        'Overall incidence is approximately 0.1 to 0.6 percent and is higher in breech presentation.',
        'Occult prolapse may present only with an abnormal fetal heart rate pattern.',
      ],
      trap: {
        title: 'Examiner trap - using cord presentation and cord prolapse interchangeably',
        body: 'Cord presentation is the cord between the presenting part and cervix, with or without ruptured membranes. Cord prolapse requires rupture of membranes and describes descent alongside or past the presenting part.',
      },
      traps: [
        {
          title: '• Calling cord presentation a prolapse before membrane rupture.',
        },
        {
          title: '• Assuming a normal fetal heart rate excludes occult prolapse.',
        },
        {
          title: '• Forgetting that breech presentation carries a higher incidence.',
        },
      ],
    },
    {
      id: 'risk-factors',
      heading: 'Risk Factors: Fetal, Pregnancy & Iatrogenic',
      intro:
        'The dangerous combination is a cord that can descend through the potential space between a high or mobile presenting part and the cervix, especially when the membranes rupture. Malpresentation alone is not the whole story.',
      flow: [
        'Identify fetal and pregnancy factors · malpresentation, prematurity, polyhydramnios',
        'Identify iatrogenic factors · ARM with a high part, ECV, internal podalic version',
        'Assess the presenting part · engaged versus high or mobile',
        'Assess membrane status and the timing of rupture',
        'Escalate care when a high presenting part coexists with ruptured membranes',
        'Reassess presentation and fetal heart rate after any procedure that displaces the presenting part',
      ],
      bullets: [
        'Breech Presentation: the commonest malpresentation associated with cord prolapse.',
        'Lies: transverse, oblique or unstable lie all leave the presenting part high and the cord at risk.',
        'Prematurity: gestational age under 37 weeks, with a smaller presenting part and more room for the cord.',
        'Low Birthweight: under 2.5 kg is associated with a higher risk.',
        'Multiple Pregnancy: especially the second twin after delivery of the first.',
        'Congenital Fetal Anomaly: may alter presentation or the volume of liquor.',
        'Polyhydramnios: increased liquor volume and a high presenting part.',
        'Unengaged or High Presenting Part: the key anatomical precondition for descent of the cord.',
        'Multiparity: associated with a lax abdominal wall and unstable lie.',
        'Placental Factors: low-lying placenta or other factors preventing engagement.',
        'Iatrogenic - ARM: artificial rupture of membranes with a high or mobile presenting part is the classic preventable trigger.',
        'Iatrogenic - Manipulation: vaginal manipulation after membrane rupture and external cephalic version, particularly with unstable lie or ruptured membranes.',
        'Iatrogenic - Procedures: internal podalic version, stabilising induction in an unengaged presentation, intrauterine pressure catheter insertion and large balloon catheter procedures.',
        'Common Thread: any procedure that elevates or displaces the presenting part when the membranes are ruptured.',
      ],
      table: {
        head: ['Category', 'Risk Factors'],
        rows: [
          [
            'Fetal and pregnancy',
            'Breech, transverse, oblique or unstable lie; prematurity; low birthweight; multiple pregnancy especially second twin; fetal anomaly; polyhydramnios; high or unengaged presenting part; multiparity; low-lying placenta',
          ],
          [
            'Iatrogenic',
            'ARM with a high or mobile part; vaginal manipulation after rupture; ECV; internal podalic version; stabilising induction; intrauterine pressure catheter; large balloon catheter',
          ],
          [
            'Dangerous combination',
            'A high or mobile presenting part with ruptured membranes, allowing the cord to descend into the space above the cervix',
          ],
          [
            'Protective concept',
            'A well-applied presenting part and intact membranes reduce the risk of cord descent',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: the dangerous combination is a high or mobile presenting part plus ruptured membranes.',
        'Breech presentation is the classic malpresentation, and the second twin is a classic multiple-pregnancy risk.',
        'Any procedure that elevates the presenting part after membrane rupture can precipitate prolapse.',
      ],
      trap: {
        title: 'Examiner trap - listing malpresentation without the high presenting part',
        body: 'Malpresentation matters because it usually leaves the presenting part high or mobile. The cord descends through the space between that presenting part and the cervix when the membranes rupture.',
      },
      traps: [
        {
          title: '• Forgetting polyhydramnios and prematurity as risk factors.',
        },
        {
          title: '• Missing the second twin as a high-risk moment.',
        },
        {
          title: '• Performing ARM with a high mobile presenting part.',
        },
      ],
    },
    {
      id: 'prevention',
      heading: 'Prevention: Antenatal & Intrapartum Rules',
      intro:
        'Routine ultrasound screening for cord presentation is not recommended because sensitivity and specificity are inadequate. Prevention therefore relies on selective imaging, careful counselling and avoiding procedures that displace a high presenting part after membrane rupture.',
      flow: [
        'Do not use routine ultrasound to screen for cord presentation',
        'Consider selective ultrasound for a term breech when planning vaginal birth',
        'Discuss admission after 37+0 weeks for persistent transverse, oblique or unstable lie',
        'Admit non-cephalic presentation with preterm prelabour rupture of membranes',
        'Avoid ARM when the presenting part is high or mobile',
        'If ARM is essential, ensure immediate caesarean capability and theatre readiness',
        'Reassess presentation and fetal heart rate after any displacing procedure',
      ],
      bullets: [
        'Screening Caveat: routine antenatal ultrasound does not reliably predict cord prolapse and is not recommended as a screening test.',
        'Selective Imaging: ultrasound can be considered for a term breech presentation when vaginal birth is being planned.',
        'Admission Advice: discuss hospital admission after 37+0 weeks for persistent transverse, oblique or unstable lie.',
        'PPROM: non-cephalic presentation with preterm prelabour rupture of membranes generally requires inpatient care.',
        'Counselling: women with unstable lie should present urgently with labour or suspected rupture of membranes.',
        'ARM Rule: avoid artificial rupture of membranes if the presenting part is high or mobile.',
        'ARM Exception: if ARM is essential, ensure immediate caesarean capability and theatre arrangements are in place.',
        'Upward Pressure: avoid upward pressure on the presenting part during vaginal examination or procedures after rupture of membranes.',
        'Cord Palpation: do not rupture membranes when a cord is palpated below the presenting part.',
        'Reassessment: check presentation and fetal heart rate after procedures that may alter the presenting part.',
        'After Spontaneous ROM: assess the fetal heart rate promptly and perform vaginal examination when risk factors or fetal heart rate abnormalities are present.',
        'Low-Risk Caveat: do not perform routine vaginal examination solely to exclude prolapse in a low-risk woman with a normal fetal heart rate after spontaneous rupture.',
      ],
      table: {
        head: ['Setting', 'Prevention Rule'],
        rows: [
          [
            'Antenatal screening',
            'Routine ultrasound for cord presentation is not recommended because sensitivity and specificity are inadequate',
          ],
          [
            'Term breech',
            'Selective ultrasound may be considered when planning vaginal birth',
          ],
          [
            'Unstable lie',
            'Discuss admission after 37+0 weeks and urgent presentation with labour or suspected rupture',
          ],
          [
            'PPROM with non-cephalic presentation',
            'Generally requires inpatient care',
          ],
          [
            'Intrapartum',
            'Avoid ARM with a high or mobile presenting part; if essential, ensure immediate caesarean capability',
          ],
          [
            'After membrane rupture',
            'Assess fetal heart rate promptly; examine when risk factors or abnormalities are present',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: routine ultrasound does not reliably predict cord prolapse and is not a screening test.',
        'Avoid ARM when the presenting part is high or mobile.',
        'Discuss admission after 37+0 weeks for persistent transverse, oblique or unstable lie.',
      ],
      trap: {
        title: 'Examiner trap - ordering routine third-trimester ultrasound to prevent cord prolapse',
        body: 'Routine ultrasound screening for cord presentation has inadequate sensitivity and specificity. Selective imaging is reserved for situations such as a term breech when vaginal birth is planned.',
      },
      traps: [
        {
          title: '• Claiming routine ultrasound prevents cord prolapse.',
        },
        {
          title: '• Rupturing membranes to "assess" a high presenting part.',
        },
        {
          title: '• Discharging a non-cephalic PPROM from the antenatal clinic.',
        },
      ],
    },
    {
      id: 'diagnosis',
      heading: 'Diagnosis: Sudden Bradycardia After Membrane Rupture',
      intro:
        'The classic presentation is a sudden fetal bradycardia or recurrent variable decelerations immediately after spontaneous or artificial rupture of membranes. Visible or palpable cord confirms the diagnosis, but occult prolapse may present only with an abnormal trace.',
      flow: [
        'Suspect prolapse when bradycardia or variable decelerations follow membrane rupture',
        'Look for visible cord at the introitus',
        'Perform immediate speculum and digital vaginal examination',
        'If cord is felt or seen, declare an obstetric emergency',
        'Confirm the presenting part, cervical dilatation and cord position',
        'Document timings, findings, actions and neonatal condition',
      ],
      bullets: [
        'Classic Trigger: sudden fetal bradycardia after spontaneous or artificial rupture of membranes.',
        'Trace Pattern: recurrent variable decelerations or an acute fetal heart rate abnormality after rupture.',
        'Visible Cord: cord may be seen at the introitus in overt prolapse.',
        'Palpable Cord: digital examination may reveal the cord in the vagina or beside the presenting part.',
        'Occult Prolapse: the cord may not be visible or easily palpable; fetal heart rate abnormality is the presenting clue.',
        'Confirmation: immediate speculum examination and/or digital vaginal examination when prolapse is suspected.',
        'Emergency Declaration: if the cord is felt or seen, treat immediately as an obstetric emergency.',
        'Normal FHR Caveat: a normal fetal heart rate does not exclude occult prolapse, but routine vaginal examination is not required in every low-risk rupture.',
        'Documentation - Timing: time of membrane rupture and whether spontaneous or artificial; time of fetal heart rate abnormality.',
        'Documentation - Findings: time prolapse was suspected or confirmed, cord location, overt or occult, presenting part and dilatation.',
        'Documentation - Actions: every decompression measure and position used.',
        'Documentation - Outcome: time of decision, theatre arrival, birth, mode of birth and neonatal condition.',
      ],
      table: {
        head: ['Domain', 'Key Point'],
        rows: [
          [
            'Classic presentation',
            'Sudden bradycardia or recurrent variable decelerations immediately after membrane rupture',
          ],
          [
            'Visible or palpable cord',
            'Confirms the diagnosis and mandates immediate emergency management',
          ],
          [
            'Occult prolapse',
            'May be invisible; an abnormal fetal heart rate is the only clue',
          ],
          [
            'Examination',
            'Immediate speculum and/or digital vaginal examination when prolapse is suspected',
          ],
          [
            'Normal fetal heart rate',
            'Does not exclude occult prolapse, but does not mandate routine examination in low-risk rupture',
          ],
          [
            'Documentation',
            'Rupture time, trace abnormality, confirmation time, cord position, measures, decision-to-birth times and neonatal outcome',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: sudden bradycardia immediately after membrane rupture is cord prolapse until proven otherwise.',
        'Visible or palpable cord confirms the diagnosis and is an immediate obstetric emergency.',
        'Occult prolapse may present with fetal heart rate abnormality alone.',
      ],
      trap: {
        title: 'Examiner trap - waiting for the cord to become visible',
        body: 'Occult prolapse may never be visible. A sudden bradycardia or recurrent variable decelerations after membrane rupture should prompt immediate vaginal examination and emergency preparation.',
      },
      traps: [
        {
          title: '• Reassuring because the cord is not visible at the introitus.',
        },
        {
          title: '• Delaying examination until the next routine review.',
        },
        {
          title: '• Failing to document the time of membrane rupture.',
        },
      ],
    },
    {
      id: 'immediate-management',
      heading: 'Immediate Management: Elevate, Position, Call',
      intro:
        'Management is simultaneous, not sequential: call for help, elevate the presenting part, position the woman to reduce cord compression and prepare for the fastest safe birth. Every measure is an adjunct to delivery.',
      flow: [
        'Call for immediate obstetric, midwifery, anaesthetic, theatre and neonatal help',
        'Confirm fetal heart rate and apply continuous CTG while preparing for birth',
        'Insert a gloved hand and elevate the presenting part manually',
        'Position the woman knee-chest or in an exaggerated left lateral head-down position',
        'Minimise handling of the cord and never attempt to replace it',
        'Consider bladder filling if the diagnosis-to-birth interval will be prolonged',
        'Prepare for the fastest safe method of birth without delay',
      ],
      bullets: [
        'First Action: call for immediate obstetric, midwifery, anaesthetic, theatre and neonatal help.',
        'Fetal Monitoring: confirm the fetal heart rate and CTG while preparing for birth.',
        'Manual Elevation: insert a gloved hand vaginally and elevate the presenting part away from the cord.',
        'Maintain Elevation: keep pressure continuously until birth or until a more sustainable manoeuvre such as bladder filling is established.',
        'Avoid Overdisplacement: excessive upward displacement may worsen the prolapse.',
        'Handover: do not remove the elevating hand for another task unless a trained person takes over.',
        'Position - Knee-Chest: often face-down while awaiting birth.',
        'Position - Lateral: exaggerated left lateral or Sims position with head-down tilt and a pillow under the hip.',
        'Position Caveat: positioning is an adjunct and must not delay definitive birth.',
        'Bladder Filling: insert a Foley catheter and instil approximately 500 to 750 mL of sterile fluid, then clamp it.',
        'Bladder Emptying: empty the bladder immediately before attempting vaginal or caesarean birth.',
        'Cord Handling: do not replace the cord above the presenting part and avoid repeated handling because of vasospasm.',
        'Tocolysis: consider terbutaline 0.25 mg subcutaneously only if persistent fetal heart rate abnormality occurs while preparing for caesarean birth and delay is expected.',
        'Tocolysis Caveat: it is an adjunct, not definitive treatment, and must never delay birth.',
      ],
      table: {
        head: ['Measure', 'How To Do It & Caveat'],
        rows: [
          [
            'Call for help',
            'Obstetric, midwifery, anaesthetic, theatre and neonatal teams immediately',
          ],
          [
            'Manual elevation',
            'Gloved hand elevates the presenting part; maintain continuously until birth or handover',
          ],
          [
            'Knee-chest position',
            'Face-down while awaiting birth; effective if safe and practical',
          ],
          [
            'Exaggerated left lateral',
            'Head-down tilt with a pillow under the hip; practical for transfer',
          ],
          [
            'Bladder filling',
            'Foley with 500 to 750 mL sterile fluid, clamped; empty immediately before birth',
          ],
          [
            'Tocolysis',
            'Terbutaline 0.25 mg subcutaneously only for persistent abnormality with expected delay; never delay birth',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: call for help, elevate the presenting part manually and prepare for immediate birth.',
        'Bladder filling uses 500 to 750 mL and the bladder must be emptied before birth.',
        'Never attempt to replace the cord into the uterus.',
      ],
      trap: {
        title: 'Examiner trap - trying to push the cord back above the presenting part',
        body: 'Cord replacement is not recommended. Handling the exteriorised cord provokes vasospasm and wastes time. Elevate the presenting part and deliver.',
      },
      traps: [
        {
          title: '• Removing the elevating hand to write notes.',
        },
        {
          title: '• Leaving 700 mL in the bladder during caesarean birth.',
        },
        {
          title: '• Giving terbutaline instead of proceeding to birth.',
        },
      ],
    },
    {
      id: 'mode-of-birth',
      heading: 'Mode & Urgency of Birth: Category 1 vs Category 2',
      intro:
        'Caesarean birth is recommended when vaginal birth is not imminent. The urgency category is set by the fetal heart rate: suspicious or pathological traces demand Category 1 with birth within 30 minutes, while a normal trace permits Category 2 with continuous monitoring.',
      flow: [
        'Assess whether vaginal birth is immediately achievable and safe',
        'If not imminent, prepare for caesarean birth',
        'Suspicious or pathological fetal heart rate · Category 1, birth within 30 minutes',
        'Normal fetal heart rate · Category 2 with continuous CTG and readiness to reclassify',
        'If the trace deteriorates during Category 2 · convert to Category 1',
        'Arrange anaesthesia, consent and a neonatal resuscitation practitioner',
        'Obtain paired umbilical arterial and venous cord gases where feasible',
      ],
      bullets: [
        'Caesarean Indication: recommended when vaginal birth is not imminent.',
        'Category 1: cord prolapse with suspicious or pathological fetal heart rate; aim for birth within 30 minutes or less without compromising maternal safety.',
        'Category 2: a normal and reassuring fetal heart rate may allow Category 2 caesarean with continuous monitoring.',
        'Reclassification: if the fetal heart rate deteriorates during Category 2 preparation, convert to Category 1.',
        'Vaginal Birth Criteria: fully dilated cervix, low presenting part, imminent birth and operative vaginal birth that can be completed quickly and safely.',
        'Vaginal Birth Judgement: an experienced clinician may judge vaginal birth safer or faster than transfer to theatre.',
        'Vaginal Birth Caveat: do not attempt a difficult or uncertain instrumental birth that increases delay.',
        'Anaesthesia: technique is determined by urgency, maternal status, fetal status and existing anaesthesia.',
        'Consent: verbal consent may be appropriate in an immediate Category 1 emergency when written consent would cause delay; document the discussion.',
        'Neonatal Care: a practitioner competent in neonatal resuscitation should attend and assess the newborn promptly.',
        'Cord Gases: paired umbilical arterial and venous gases for pH and base excess should be obtained where feasible.',
        'Delayed Clamping: consider only when clinically appropriate; prioritise immediate resuscitation if the infant is compromised.',
      ],
      table: {
        head: ['Decision', 'Criteria & Target'],
        rows: [
          [
            'Category 1 caesarean',
            'Suspicious or pathological fetal heart rate; aim for birth within 30 minutes or less without compromising maternal safety',
          ],
          [
            'Category 2 caesarean',
            'Normal reassuring fetal heart rate; continuous CTG and immediate reclassification if deterioration',
          ],
          [
            'Vaginal birth',
            'Only if fully dilated, presenting part low, birth imminent and operative birth can be completed quickly and safely',
          ],
          [
            'Anaesthesia and consent',
            'Technique dictated by urgency and maternal/fetal status; verbal consent acceptable in an immediate emergency with documentation',
          ],
          [
            'Neonatal care',
            'Competent resuscitation practitioner present; paired cord gases where feasible; delayed clamping only if appropriate',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: suspicious or pathological fetal heart rate means Category 1 caesarean with birth within 30 minutes.',
        'A normal fetal heart rate may allow Category 2 caesarean with continuous monitoring.',
        'Vaginal birth is appropriate only when it is immediately achievable and safe.',
      ],
      trap: {
        title: 'Examiner trap - choosing Category 2 for a pathological trace',
        body: 'Cord prolapse with a suspicious or pathological fetal heart rate requires Category 1 caesarean, aiming for birth within 30 minutes. Category 2 applies only when the trace remains normal and reassuring.',
      },
      traps: [
        {
          title: '• Attempting a difficult instrumental birth to avoid theatre.',
        },
        {
          title: '• Delaying Category 1 surgery for written consent.',
        },
        {
          title: '• Forgetting paired umbilical cord gases.',
        },
      ],
    },
    {
      id: 'community-governance',
      heading: 'Community Transfer, Viability & Clinical Governance',
      intro:
        'Outside hospital, the priorities are immediate ambulance transfer, knee-chest positioning while waiting and an exaggerated Sims left lateral position during transport. Governance closes the loop with debrief, incident reporting and simulation training.',
      flow: [
        'Assess cord-prolapse risk when planning home or birth-centre care',
        'Call an emergency ambulance immediately for known prolapse outside hospital',
        'Advise knee-chest or face-down position while awaiting transfer',
        'Use exaggerated Sims left lateral with a hip pillow during ambulance transfer',
        'Maintain manual elevation only if it does not delay transfer',
        'Transfer to the nearest consultant-led obstetric unit unless birth is imminent',
        'Debrief the woman and team, document and submit an incident report',
      ],
      bullets: [
        'Place of Birth: midwives should assess cord-prolapse risk when women plan home birth or birth-centre care without immediate caesarean access.',
        'Risk Discussion: if the risk is significant, discuss consultant-led care and the safest place of birth.',
        'Out-of-Hospital Prolapse: call an emergency ambulance immediately.',
        'While Waiting: advise knee-chest or face-down position if feasible and safe.',
        'During Transfer: use exaggerated Sims left lateral with a pillow under the hip; knee-chest is not practical or safe during transport.',
        'Manual Elevation: maintain it only if a competent professional can do so without delaying transfer.',
        'Cord Handling: avoid unnecessary handling of the cord.',
        'Destination: transfer to the nearest consultant-led obstetric unit unless spontaneous vaginal birth is imminent.',
        'Team Readiness: community teams need a clear emergency call and transfer pathway, trained staff and appropriate equipment where local protocols permit.',
        'Viability Window: the handwritten notes identify 23+0 to 24+6 weeks as a period requiring expert discussion.',
        'Individualisation: management depends on gestational age, fetal and maternal condition, local neonatal capability and the wishes of the woman.',
        'Counselling: discuss continuation of pregnancy, neonatal resuscitation intentions and, where relevant, termination options in a non-directive manner.',
        'No Replacement: there is no evidence supporting replacement of a prolapsed cord into the uterus before or at the threshold of viability.',
        'Debrief: offer the woman and birth companions an opportunity to discuss events and explain the sequence and outcome.',
        'Governance: document the event, submit an incident report, conduct multidisciplinary review and maintain simulation training.',
      ],
      table: {
        head: ['Setting', 'Key Action'],
        rows: [
          [
            'Before labour',
            'Assess cord-prolapse risk for planned home or birth-centre birth; discuss consultant-led care if significant',
          ],
          [
            'Known prolapse outside hospital',
            'Call an emergency ambulance; knee-chest or face-down while waiting',
          ],
          [
            'Ambulance transfer',
            'Exaggerated Sims left lateral with a pillow under the hip; knee-chest is impractical in transit',
          ],
          [
            'Destination',
            'Nearest consultant-led obstetric unit unless spontaneous vaginal birth is imminent',
          ],
          [
            'Threshold of viability',
            'Individualise at 23+0 to 24+6 weeks with senior obstetric and neonatal input; no cord replacement',
          ],
          [
            'Governance',
            'Debrief, document, incident report, multidisciplinary review and simulation training',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: outside hospital, call an ambulance and use knee-chest while waiting, then exaggerated Sims left lateral in transit.',
        'Never replace a prolapsed cord into the uterus, including at the threshold of viability.',
        'Debrief, document and report the event as part of clinical governance.',
      ],
      trap: {
        title: 'Examiner trap - advising knee-chest during ambulance transfer',
        body: 'Knee-chest is useful while waiting at home but is not practical or safe during transport. Use an exaggerated Sims left lateral position with a pillow under the hip in the ambulance.',
      },
      traps: [
        {
          title: '• Delaying transfer to attempt cord replacement.',
        },
        {
          title: '• Keeping the woman knee-chest during ambulance transfer.',
        },
        {
          title: '• Omitting debrief and incident reporting.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'Cord prolapse occurs after membrane rupture.',
        'Cord presentation may occur with intact membranes.',
        'Overall incidence is approximately 0.1 to 0.6 percent.',
        'Breech presentation carries a reported incidence slightly above 1 percent.',
        'Routine antenatal ultrasound does not reliably predict cord prolapse.',
        'Discuss admission after 37+0 weeks for persistent transverse, oblique or unstable lie.',
        'Avoid ARM with a high or mobile presenting part.',
        'Sudden bradycardia after membrane rupture is the classic warning sign.',
        'Call for help immediately.',
        'Elevate the presenting part manually and continuously.',
        'Knee-chest or exaggerated left lateral head-down reduces compression.',
        'Never attempt to push the cord back into the uterus.',
        'Minimise handling of the exteriorised cord.',
        'Bladder filling uses 500 to 750 mL and is emptied before birth.',
        'Category 1 caesarean targets birth within 30 minutes or less.',
        'Category 2 is possible only if the fetal heart rate remains normal.',
        'Convert Category 2 to Category 1 if the trace deteriorates.',
        'Vaginal birth is appropriate only if immediately achievable and safe.',
        'Terbutaline 0.25 mg subcutaneously is a selected adjunct and must not delay birth.',
        'Community transfer uses knee-chest while waiting and exaggerated Sims left lateral in transit.',
        'Do not attempt cord replacement at or before viability.',
        'A practitioner competent in neonatal resuscitation should attend.',
        'Obtain paired umbilical arterial and venous cord gases where feasible.',
        'Debrief the woman and team after the event.',
        'Document and submit an incident report under local governance.',
      ],
      traps: [
        {
          title: '• Using cord presentation and cord prolapse interchangeably.',
        },
        {
          title: '• Reassuring because the cord is not visible.',
        },
        {
          title: '• Performing ARM with a high mobile presenting part.',
        },
        {
          title: '• Waiting for a second CTG before acting on sudden bradycardia.',
        },
        {
          title: '• Attempting to replace the prolapsed cord.',
        },
        {
          title: '• Removing the elevating hand to perform other tasks.',
        },
        {
          title: '• Forgetting to empty the bladder before birth.',
        },
        {
          title: '• Choosing Category 2 for a pathological trace.',
        },
        {
          title: '• Delaying caesarean birth for written consent in an immediate emergency.',
        },
        {
          title: '• Advising knee-chest during ambulance transfer.',
        },
        {
          title: '• Omitting paired cord gases and neonatal assessment.',
        },
        {
          title: '• Skipping debrief and incident reporting.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm15-f1',
      front: 'What is the difference between cord presentation and cord prolapse?',
      back: 'Cord presentation is the cord between the presenting part and cervix, with or without ruptured membranes. Cord prolapse is descent alongside or past the presenting part after membrane rupture.',
    },
    {
      id: 'm15-f2',
      front: 'What is the incidence of umbilical cord prolapse?',
      back: 'Approximately 0.1 to 0.6 percent overall. Breech presentation carries a higher reported incidence, slightly above 1 percent.',
    },
    {
      id: 'm15-f3',
      front: 'What is the classic fetal heart rate sign of cord prolapse?',
      back: 'Sudden fetal bradycardia immediately after spontaneous or artificial rupture of membranes, or recurrent variable decelerations after rupture.',
    },
    {
      id: 'm15-f4',
      front: 'What is the immediate first action in suspected cord prolapse?',
      back: 'Call for immediate obstetric, midwifery, anaesthetic, theatre and neonatal help while preparing for the fastest safe birth.',
    },
    {
      id: 'm15-f5',
      front: 'How is the presenting part kept off the cord?',
      back: 'Insert a gloved hand vaginally and elevate the presenting part continuously until birth or until another measure such as bladder filling takes over.',
    },
    {
      id: 'm15-f6',
      front: 'Which positions reduce cord compression?',
      back: 'Knee-chest or an exaggerated left lateral/Sims position with head-down tilt and a pillow under the hip. Positioning must not delay birth.',
    },
    {
      id: 'm15-f7',
      front: 'How is bladder filling performed in cord prolapse?',
      back: 'Insert a Foley catheter, instil 500 to 750 mL of sterile fluid and clamp it. Empty the bladder immediately before vaginal or caesarean birth.',
    },
    {
      id: 'm15-f8',
      front: 'Should a prolapsed cord be replaced into the uterus?',
      back: 'No. Never attempt to replace the cord above the presenting part. Handling provokes vasospasm and delays definitive birth.',
    },
    {
      id: 'm15-f9',
      front: 'What urgency of caesarean birth is required for a pathological trace?',
      back: 'Category 1 caesarean, aiming for birth within 30 minutes or less without compromising maternal safety.',
    },
    {
      id: 'm15-f10',
      front: 'When may Category 2 caesarean be appropriate in cord prolapse?',
      back: 'When the fetal heart rate is normal and remains reassuring, with continuous CTG. Convert to Category 1 if the trace deteriorates.',
    },
    {
      id: 'm15-f11',
      front: 'When is vaginal birth acceptable in cord prolapse?',
      back: 'Only when the cervix is fully dilated, the presenting part is low, birth is imminent and operative vaginal birth can be completed quickly and safely.',
    },
    {
      id: 'm15-f12',
      front: 'What is the role of terbutaline in cord prolapse?',
      back: 'Terbutaline 0.25 mg subcutaneously may be considered for persistent fetal heart rate abnormality while preparing for caesarean birth if delay is expected. It must not delay birth.',
    },
    {
      id: 'm15-f13',
      front: 'Which position is used during ambulance transfer?',
      back: 'Exaggerated Sims left lateral with a pillow under the hip. Knee-chest is used while waiting but is not practical or safe during transport.',
    },
    {
      id: 'm15-f14',
      front: 'Which procedures should be avoided with a high or mobile presenting part?',
      back: 'Artificial rupture of membranes. If ARM is essential, ensure immediate caesarean capability and theatre readiness, and avoid upward pressure on the presenting part.',
    },
    {
      id: 'm15-f15',
      front: 'What documentation and governance steps follow cord prolapse?',
      back: 'Record rupture and decision times, cord position, decompression measures and birth details; obtain paired cord gases; debrief the woman and team; document and submit an incident report.',
    },
  ],

  mcqs: [
    {
      id: 'm15-q1',
      stem: 'A woman at 39 weeks has a sudden fetal bradycardia immediately after artificial rupture of membranes. What is the most appropriate first action?',
      options: [
        'Reassure and repeat the CTG in 15 minutes',
        'Call for help, elevate the presenting part and prepare for immediate birth',
        'Start an oxytocin infusion to accelerate labour',
        'Perform a controlled cord traction',
      ],
      answerIndex: 1,
      explanation:
        'Sudden bradycardia after membrane rupture suggests cord prolapse. Call for immediate help, elevate the presenting part, position the woman and prepare for the fastest safe birth.',
    },
    {
      id: 'm15-q2',
      stem: 'Which statement best distinguishes cord presentation from cord prolapse?',
      options: [
        'Cord presentation always occurs after membrane rupture',
        'Cord prolapse can occur with intact membranes',
        'Cord presentation and prolapse are synonymous',
        'Cord presentation may occur with intact membranes, whereas prolapse follows membrane rupture',
      ],
      answerIndex: 3,
      explanation:
        'Cord presentation is the cord between the presenting part and cervix, with or without ruptured membranes. Cord prolapse is descent alongside or past the presenting part after membrane rupture.',
    },
    {
      id: 'm15-q3',
      stem: 'A woman at 38 weeks has a persistent transverse lie. What antenatal advice is most appropriate?',
      options: [
        'Discuss admission after 37+0 weeks and urgent presentation with labour or rupture of membranes',
        'Routine weekly ultrasound to screen for cord presentation',
        'Plan home birth because transverse lie is benign',
        'Perform elective ARM at 39 weeks in the clinic',
      ],
      answerIndex: 0,
      explanation:
        'Persistent transverse, oblique or unstable lie after 37+0 weeks warrants discussion of admission. Routine ultrasound does not reliably screen for cord presentation.',
    },
    {
      id: 'm15-q4',
      stem: 'A midwife cannot see the cord but the CTG shows recurrent variable decelerations after spontaneous rupture of membranes. What should be done?',
      options: [
        'Reassure because the cord is not visible',
        'Await the next routine vaginal examination',
        'Perform immediate vaginal examination and prepare for emergency birth',
        'Give a tocolytic and continue monitoring',
      ],
      answerIndex: 2,
      explanation:
        'Occult prolapse may not be visible. Variable decelerations after membrane rupture require immediate vaginal examination and emergency preparation.',
    },
    {
      id: 'm15-q5',
      stem: 'During preparation for caesarean birth, the team considers bladder filling. What volume is used and what must happen before birth?',
      options: [
        '100 to 200 mL, left in place during surgery',
        '500 to 750 mL, emptied immediately before birth',
        '1000 to 1500 mL, emptied after birth',
        '250 mL, clamped until the neonate is delivered',
      ],
      answerIndex: 1,
      explanation:
        'Instil approximately 500 to 750 mL of sterile fluid through a Foley catheter and clamp it. Empty the bladder immediately before vaginal or caesarean birth.',
    },
    {
      id: 'm15-q6',
      stem: 'A woman with cord prolapse has a pathological fetal heart rate. Which category and target apply?',
      options: [
        'Category 3 with delivery within 60 minutes',
        'Category 2 with delivery within 45 minutes',
        'Category 1 with birth within 30 minutes or less',
        'Vaginal birth regardless of cervical dilatation',
      ],
      answerIndex: 2,
      explanation:
        'Cord prolapse with a suspicious or pathological fetal heart rate requires Category 1 caesarean birth, aiming for birth within 30 minutes or less without compromising maternal safety.',
    },
    {
      id: 'm15-q7',
      stem: 'Which situation makes vaginal birth an acceptable option in cord prolapse?',
      options: [
        'Cervix 4 cm with a high presenting part',
        'Transverse lie with ruptured membranes',
        'Pathological fetal heart rate with a high head',
        'Fully dilated cervix, low presenting part and birth imminent with a quick safe operative vaginal birth',
      ],
      answerIndex: 3,
      explanation:
        'Vaginal birth is appropriate only when the cervix is fully dilated, the presenting part is low, birth is imminent and operative vaginal birth can be completed quickly and safely.',
    },
    {
      id: 'm15-q8',
      stem: 'A woman with known cord prolapse calls from home. Which instruction is correct while awaiting the ambulance?',
      options: [
        'Knee-chest or face-down position if feasible and safe',
        'Lie flat on her back and push',
        'Attempt to replace the cord herself',
        'Walk to the hospital to speed transfer',
      ],
      answerIndex: 0,
      explanation:
        'Call an emergency ambulance immediately and advise knee-chest or face-down positioning while waiting if feasible and safe. Avoid handling the cord.',
    },
    {
      id: 'm15-q9',
      stem: 'Which statement about terbutaline in cord prolapse is correct?',
      options: [
        'It is routine first-line treatment for every case',
        'It should be given instead of caesarean birth',
        'Terbutaline 0.25 mg subcutaneously is a selected adjunct and must not delay birth',
        'It is contraindicated in all obstetric emergencies',
      ],
      answerIndex: 2,
      explanation:
        'Terbutaline 0.25 mg subcutaneously may be considered for persistent fetal heart rate abnormality while preparing for caesarean birth if delay is expected. It is an adjunct and must never delay birth.',
    },
    {
      id: 'm15-q10',
      stem: 'After an emergency birth for cord prolapse, which combination best reflects good practice?',
      options: [
        'Discard the placenta without examination and omit documentation',
        'Obtain paired cord gases, assess the neonate, debrief the woman and submit an incident report',
        'Give antibiotics and discharge without review',
        'Delay neonatal resuscitation until cord gases are sent',
      ],
      answerIndex: 1,
      explanation:
        'Good practice includes paired umbilical arterial and venous cord gases where feasible, prompt neonatal assessment, debrief and incident reporting with multidisciplinary review.',
    },
  ],
};
