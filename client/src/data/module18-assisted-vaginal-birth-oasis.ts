import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 18 - Assisted Vaginal Birth & OASIS (RCOG GTG 26 & 29)
 * ---------------------------------------------------------------------------
 * Distilled from handwritten clinical revision (PDF pp. 61-91) with RCOG
 * Green-top Guidelines No. 26 and No. 29, FIGO 2025 and IUGA 2026 updates.
 *
 * Covers:
 * - Assisted vaginal birth, instruments and indications
 * - Outlet, low, mid-cavity and high classification by station and rotation
 * - Prerequisites and safety checks before applying an instrument
 * - Vacuum versus forceps, cup placement and stopping rules
 * - Episiotomy, perineal protection and the ANODE trial
 * - OASIS anatomy, degrees and the Sultan classification
 * - Repair principles, postoperative care, follow-up and future pregnancy
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const AVB_OASIS_MODULE: StudioModule = {
  id: 'pg-mod-18-assisted-vaginal-birth-oasis',
  track: 'NEET_PG',
  title: 'Assisted Vaginal Birth & OASIS: RCOG GTG 26 & 29',
  shortTitle: 'Assisted Vaginal Birth & OASIS',
  summary:
    'Complete PG clinical revision module on assisted vaginal birth and obstetric anal sphincter injury following RCOG Green-top Guidelines No. 26 and No. 29, with FIGO 2025 and IUGA 2026 updates. Features outlet, low, mid-cavity and high classification, the prerequisites checklist, vacuum versus forceps complications, flexion-point placement, the three-pull, two-pop-off and twenty-minute stopping rules, mediolateral episiotomy at 60 degrees, the ANODE single 1.2 g co-amoxiclav dose, Sultan 3a to 3c and fourth-degree grading, separate end-to-end IAS repair, no figure-of-eight sutures, six to twelve week follow-up and future pregnancy counselling, 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Station classification, stopping rules, Sultan grading and repair.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 55,
  tags: [
    'RCOG GTG 26',
    'RCOG GTG 29',
    'Outlet vs Mid-Cavity',
    'Vacuum vs Forceps',
    'Three Pulls Rule',
    'Flexion Point',
    'ANODE Trial',
    'Mediolateral Episiotomy',
    'Sultan 3a-3c',
    'IAS End-to-End',
    'No Figure-of-Eight',
    '6-12 Week Follow-Up',
  ],
  sourceTag:
    'Handwritten clinical revision (pp. 61-91) • RCOG GTG 26 (2020) • RCOG GTG 29 • FIGO 2025 • IUGA 2026',
  updatedAtISO: '2026-11-14T13:00:00.000Z',
  notes: [
    {
      id: 'avb-framework',
      heading: 'Assisted Vaginal Birth: Role, Instruments & Indications',
      intro:
        'Assisted vaginal birth uses vacuum or forceps to deliver the fetal head. It can expedite birth in the second stage and avoid a second-stage caesarean when the circumstances are suitable and the operator has the required skills.',
      flow: [
        'Assess maternal and fetal condition and progress in the second stage',
        'Confirm that vaginal birth is achievable more safely and promptly than caesarean',
        'Select vacuum or forceps according to position, station and operator skill',
        'Confirm consent and the availability of theatre and neonatal support',
        'Apply the instrument with a clear stop rule',
        'Reassess descent with every pull and abandon if there is no progress',
        'Document the procedure, outcome and any perineal trauma',
      ],
      bullets: [
        'Definition: vaginal birth using an instrument to assist delivery of the fetal head.',
        'Vacuum: a cup applied to the fetal scalp, with traction coordinated with contractions and maternal pushing.',
        'Forceps: paired blades applied around the fetal head, followed by traction and, in selected procedures, rotation by a trained operator.',
        'Fetal Indication: suspected fetal compromise when vaginal birth is judged achievable more safely and promptly than caesarean.',
        'Prolonged Second Stage: inadequate descent or rotation despite appropriate contractions and pushing.',
        'Maternal Indication: exhaustion, inability to push effectively or a condition in which prolonged active pushing is undesirable.',
        'Malposition: selected persistent occipito-posterior or transverse positions when the head is sufficiently low and a skilled operator is available.',
        'No Automatic Indication: the decision balances maternal and fetal condition, progress, station, position, predicted success, skills and informed preference.',
        'Failed AVB: the risk of a failed instrument birth followed by caesarean must be weighed against the risks of AVB itself.',
        'Second-Stage Caesarean: the alternative of a caesarean without an instrument attempt must also be considered.',
        'Consent: explain the indication, instrument, likelihood of success, possibility of failure and emergency caesarean, and relevant maternal and neonatal risks.',
        'Skill: rotational procedures require specific competence and should not be attempted without it.',
      ],
      table: {
        head: ['Domain', 'Key Point'],
        rows: [
          [
            'Vacuum',
            'Cup on the fetal scalp; traction coordinated with contractions and maternal effort',
          ],
          [
            'Forceps',
            'Paired blades around the fetal head; traction and selected rotation by a trained operator',
          ],
          [
            'Fetal indication',
            'Suspected compromise when vaginal birth is safer and faster than caesarean',
          ],
          [
            'Prolonged second stage',
            'Failure of descent or rotation despite adequate contractions and pushing',
          ],
          [
            'Maternal indication',
            'Exhaustion or a condition in which prolonged pushing is undesirable',
          ],
          [
            'Malposition',
            'Selected occipito-posterior or transverse positions with a low head and skilled operator',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: assisted vaginal birth is vacuum or forceps delivery of the fetal head.',
        'The main indications are fetal compromise, prolonged second stage and a maternal need to shorten pushing.',
        'There is no single indication that automatically mandates an instrument; individualise.',
      ],
      trap: {
        title: 'Examiner trap - assuming every assisted birth is for fetal distress',
        body: 'Fetal compromise is only one indication. Prolonged second stage, failure of descent or rotation, maternal exhaustion and selected malposition are equally important.',
      },
      traps: [
        {
          title: '• Forgetting maternal exhaustion as an indication.',
        },
        {
          title: '• Attempting rotational forceps without specific competence.',
        },
        {
          title: '• Ignoring the risk of a failed instrument birth.',
        },
      ],
    },
    {
      id: 'level-classification',
      heading: 'Outlet, Low, Mid-Cavity & High: Station Classification',
      intro:
        'The level of an assisted birth is defined by the leading point of the fetal skull relative to the ischial spines and pelvic floor, together with the degree of rotation. Record the actual station, position and rotation rather than relying on the word low.',
      flow: [
        'Identify the leading point of the fetal skull',
        'Relate it to the ischial spines and the pelvic floor',
        'Measure the degree of rotation',
        'Classify as outlet, low, mid-cavity or high',
        'Subdivide low into non-rotational and rotational',
        'Document station, position and rotation explicitly',
      ],
      bullets: [
        'Outlet Criteria: fetal scalp visible at the introitus without separating the labia.',
        'Outlet Position: fetal skull has reached the pelvic floor and the head is at or on the perineum.',
        'Outlet Rotation: sagittal suture in an anteroposterior, left or right occipito-anterior or occipito-posterior position, with rotation not exceeding 45 degrees.',
        'Low Cavity: leading point at station +2 or lower but the head is not yet on the pelvic floor.',
        'Low Non-Rotational: rotation of 45 degrees or less.',
        'Low Rotational: rotation greater than 45 degrees.',
        'Mid-Cavity: the head is engaged but the leading point remains above +2 station.',
        'Mid-Cavity Notes: the supplied notes describe a leading skull point around station 0 to +1 cm and no more than one-fifth of the head palpable abdominally.',
        'High Cavity: the head is not engaged and remains above the ischial spines.',
        'High Instrument Birth: not recommended in contemporary routine practice.',
        'Documentation: record station, rotation, position and relation to the pelvic floor, not just the category name.',
        'Clinical Trap: severe caput and moulding can create a false impression of a lower station.',
      ],
      table: {
        head: ['Level', 'Defining Features'],
        rows: [
          [
            'Outlet',
            'Scalp visible without separating labia; skull on pelvic floor; head at or on perineum; rotation 45 degrees or less',
          ],
          [
            'Low, non-rotational',
            'Leading point at +2 or lower, not on pelvic floor; rotation 45 degrees or less',
          ],
          [
            'Low, rotational',
            'Leading point at +2 or lower, not on pelvic floor; rotation greater than 45 degrees',
          ],
          [
            'Mid-cavity',
            'Head engaged but leading point above +2; notes describe around 0 to +1 with no more than one-fifth palpable',
          ],
          [
            'High',
            'Head unengaged above the ischial spines; not recommended in routine practice',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: outlet means the scalp is visible, the skull is on the pelvic floor and rotation is 45 degrees or less.',
        'Low cavity is station +2 or lower but not on the pelvic floor; rotational means more than 45 degrees.',
        'Mid-cavity is an engaged head with the leading point above +2.',
      ],
      trap: {
        title: 'Examiner trap - defining low only by the word low',
        body: 'Low cavity requires the leading point at +2 or lower but not on the pelvic floor. It is then subdivided by rotation: 45 degrees or less is non-rotational, more than 45 degrees is rotational.',
      },
      traps: [
        {
          title: '• Calling a +1 station low cavity.',
        },
        {
          title: '• Forgetting to subdivide low into rotational and non-rotational.',
        },
        {
          title: '• Attempting high forceps.',
        },
      ],
    },
    {
      id: 'prerequisites',
      heading: 'Prerequisites & Safety Checks Before Applying an Instrument',
      intro:
        'Do not proceed until the operator has systematically confirmed the indication, consent, full dilatation, ruptured membranes, engagement, exact position and station, pelvic adequacy, empty bladder, analgesia, equipment, skilled assistance, neonatal support, caesarean backup and a stop rule.',
      flow: [
        'Confirm a clear indication and informed consent',
        'Confirm full cervical dilatation and ruptured membranes',
        'Confirm the head is engaged with no suspected obstruction',
        'Identify exact position, attitude and station; use ultrasound if uncertain',
        'Assess caput and moulding and pelvic adequacy',
        'Empty the bladder and ensure adequate analgesia',
        'Confirm instrument, skilled operator, assistant, neonatal team and theatre backup',
        'Agree the stop rule and the plan after failure before the first pull',
      ],
      bullets: [
        'Indication: a clear reason to expedite vaginal birth.',
        'Consent: a process, not merely a signature, covering success, failure, caesarean and maternal/neonatal risks.',
        'Cervix: full dilatation.',
        'Membranes: ruptured.',
        'Engagement: fetal head engaged with no suspected cephalopelvic disproportion or mechanical obstruction.',
        'Position: exact fetal head position, attitude and station identified.',
        'Ultrasound: use intrapartum ultrasound where available and appropriate; it improves position diagnosis before forceps application.',
        'Caput and Moulding: assess them because severe caput or moulding can mimic a lower station.',
        'Pelvis: clinically adequate for the proposed procedure.',
        'Bladder: emptied, with catheterisation if necessary.',
        'Analgesia: adequate analgesia or anaesthesia appropriate to the procedure.',
        'Equipment: correct instrument, assembled, functioning and immediately available.',
        'Operator: skilled and competent in the chosen instrument; rotational procedures require specific expertise.',
        'Team: assistant and maternal monitoring available.',
        'Neonatal Support: personnel able to assess and resuscitate the newborn present or immediately available.',
        'Backup: facilities for urgent caesarean birth and anaesthesia available if the attempt fails.',
        'Stop Rule: a plan for what happens after failure agreed before the first pull.',
        'Escalation: if an essential prerequisite is not met, reconsider the route of birth or obtain senior help rather than making an unsafe attempt.',
      ],
      table: {
        head: ['Domain', 'Prerequisite'],
        rows: [
          [
            'Decision',
            'Clear indication, informed consent and a documented discussion of alternatives',
          ],
          [
            'Obstetric readiness',
            'Full dilatation, ruptured membranes, engaged head and no suspected obstruction',
          ],
          [
            'Diagnosis',
            'Exact position, attitude and station; ultrasound if uncertain; caput and moulding assessed',
          ],
          [
            'Maternal preparation',
            'Adequate pelvis, empty bladder and appropriate analgesia or anaesthesia',
          ],
          [
            'Operator and team',
            'Skilled operator, assistant, neonatal resuscitation support and urgent caesarean backup',
          ],
          [
            'Safety plan',
            'Stop rule and alternative birth plan agreed before the first pull',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: full dilatation, ruptured membranes, engaged head and an empty bladder are core prerequisites.',
        'Intrapartum ultrasound improves position diagnosis before forceps application.',
        'Agree the stop rule before the first pull.',
      ],
      trap: {
        title: 'Examiner trap - proceeding without theatre or neonatal backup',
        body: 'An assisted birth requires immediate access to caesarean birth, anaesthesia and neonatal resuscitation. If these are not available, the attempt is unsafe.',
      },
      traps: [
        {
          title: '• Applying an instrument with a partially dilated cervix.',
        },
        {
          title: '• Ignoring severe caput and moulding when assessing station.',
        },
        {
          title: '• Starting traction without a stop rule.',
        },
      ],
    },
    {
      id: 'instrument-choice',
      heading: 'Vacuum vs Forceps, Cup Placement & Stopping Rules',
      intro:
        'Vacuum generally causes less maternal perineal trauma but more scalp trauma, while forceps generally cause more maternal perineal and sphincter injury but fewer scalp complications. The vacuum cup belongs at the flexion point, and every attempt needs a strict stopping rule.',
      flow: [
        'Choose the instrument according to position, station, fetal condition and operator skill',
        'For vacuum · place the cup over the flexion point',
        'Confirm no maternal tissue is trapped beneath the cup',
        'Apply traction in the direction of the pelvic curve with each contraction',
        'Reassess descent with every pull',
        'Stop for three pulls without descent, two pop-offs or twenty minutes',
        'For forceps · stop if application is difficult or there is no progressive descent',
        'Abandon the attempt and proceed to the safest alternative birth route',
      ],
      bullets: [
        'Vacuum Maternal Advantage: usually less perineal trauma and a lower risk of severe perineal injury when either instrument is appropriate.',
        'Vacuum Scalp Trauma: chignon, cephalohaematoma, scalp laceration and, rarely, subgaleal haemorrhage.',
        'Vacuum Other Effects: retinal haemorrhage and neonatal jaundice may occur more often than after forceps.',
        'Vacuum Failure: higher risk of failed extraction in some circumstances; sequential instruments add morbidity.',
        'Vacuum Contraindications: face presentation and an unengaged head.',
        'Vacuum Cautions: avoid with a fetal bleeding disorder or significant bone demineralisation; forceps may be preferable if otherwise suitable.',
        'Vacuum Prematurity: generally contraindicated before 34 completed weeks because of fetal injury risk; use caution at 34 to 36 weeks.',
        'Forceps Success: often higher than vacuum when correctly selected and applied.',
        'Forceps Advantage: useful when rapid delivery is required and in selected malpositions or rotational procedures by a trained operator.',
        'Forceps Fetal Advantage: may be preferred when a fetal bleeding disorder or fragile bones is suspected.',
        'Forceps Trauma: more maternal vaginal, perineal and pelvic-floor trauma, with a higher OASI risk.',
        'Forceps Neonatal Effects: facial marks, bruising, facial nerve injury and rare skull injury.',
        'Flexion Point: approximately 3 cm anterior to the posterior fontanelle and 6 cm posterior to the anterior fontanelle.',
        'Traction: apply in the direction of the pelvic curve, coordinated with contractions, avoiding jerking or shearing.',
        'Vacuum Stop Rule: three pulls without descent, two cup detachments, or twenty minutes of application.',
        'Vacuum Early Stop: minimal or no descent with the first two pulls, incorrect application, significant displacement or suspected injury.',
        'Forceps Stop Rule: no progressive descent with each pull, or three pulls of correctly applied forceps without progressive descent and birth not imminent.',
        'Forceps Application Failure: stop if blades cannot be applied easily, handles do not approximate or application is incorrect; do not force the handles to meet.',
        'Sequential Instruments: not routine; associated with increased maternal and neonatal trauma and generally avoided.',
        'After Failure: reassess promptly and proceed to the safest alternative; do not repeat a failed manoeuvre.',
      ],
      table: {
        head: ['Feature', 'Vacuum', 'Forceps'],
        rows: [
          [
            'Maternal perineal trauma',
            'Usually lower',
            'Usually higher',
          ],
          [
            'OASI risk',
            'Generally lower',
            'Generally higher',
          ],
          [
            'Scalp trauma',
            'More characteristic: chignon, cephalohaematoma, subgaleal haemorrhage',
            'Less characteristic',
          ],
          [
            'Facial marks or nerve injury',
            'Less characteristic',
            'More characteristic',
          ],
          [
            'Application',
            'Cup at the flexion point on the sagittal suture',
            'Blades around the fetal head',
          ],
          [
            'Stopping rule',
            'Three pulls without descent, two pop-offs or twenty minutes',
            'No progressive descent, or three pulls without descent when birth is not imminent',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: vacuum causes less maternal trauma but more scalp trauma; forceps cause more maternal trauma but fewer scalp complications.',
        'The flexion point is 3 cm anterior to the posterior fontanelle and 6 cm posterior to the anterior fontanelle.',
        'Stop vacuum after three pulls without descent, two pop-offs or twenty minutes.',
      ],
      trap: {
        title: 'Examiner trap - continuing after two pop-offs because descent is occurring',
        body: 'Two cup detachments are a stopping rule. Sequential or prolonged attempts increase maternal and neonatal trauma; reassess and move to the safest alternative.',
      },
      traps: [
        {
          title: '• Using vacuum for a face presentation or unengaged head.',
        },
        {
          title: '• Forcing forceps handles to meet.',
        },
        {
          title: '• Routinely using vacuum then forceps sequentially.',
        },
      ],
    },
    {
      id: 'perineal-protection',
      heading: 'Episiotomy, Perineal Protection & the ANODE Trial',
      intro:
        'Routine episiotomy is not recommended for every assisted birth. When episiotomy is indicated, a mediolateral incision at about 60 degrees from the midline reduces OASI risk compared with a midline cut. ANODE supports a single dose of intravenous co-amoxiclav after operative vaginal birth.',
      flow: [
        'Decide whether episiotomy is clinically indicated',
        'If indicated · perform a mediolateral episiotomy at crowning',
        'Aim for about 60 degrees from the midline while the perineum is distended',
        'Support the perineum and control delivery of the head',
        'Give a single 1.2 g intravenous dose of co-amoxiclav after assisted birth',
        'Check allergy status and use the local alternative if needed',
        'Document the episiotomy type, angle and antibiotic timing',
      ],
      bullets: [
        'No Routine Episiotomy: routine episiotomy for every assisted vaginal birth is not recommended.',
        'Decision: base it on parity, instrument, perineal distension and perceived risk of severe trauma.',
        'Type: when episiotomy is indicated during assisted birth, use a mediolateral rather than a midline incision.',
        'Why Mediolateral: a midline episiotomy increases the risk of extension into the anal sphincter.',
        'Timing: make the incision when the fetal head distends the perineum or is crowning.',
        'Angle: aim for approximately 60 degrees away from the midline at the time of cutting.',
        'Recoil: the angle narrows as tissue recoils after birth, so plan the cut at the correct angle while the perineum is distended.',
        'Perineal Support: controlled delivery of the head, manual support and warm compresses may reduce OASI risk.',
        'Second Clinician: consider a second skilled clinician for perineal protection in complex births.',
        'Prior OASIS: a previous OASIS alone is not an indication for routine episiotomy in a later pregnancy.',
        'ANODE Design: multicentre randomised placebo-controlled trial in 27 UK obstetric units.',
        'ANODE Population: 3,427 women randomised after operative vaginal birth at 36 weeks or later.',
        'ANODE Intervention: a single intravenous dose of amoxicillin plus clavulanic acid after operative vaginal birth.',
        'ANODE Dose: FIGO specifies a single 1.2 g intravenous dose, subject to local policy and allergy status.',
        'ANODE Result: confirmed or suspected maternal infection within 6 weeks occurred in 11 percent versus 19 percent.',
        'ANODE Effect: relative risk 0.58, 95 percent confidence interval 0.49 to 0.69.',
        'ANODE Interpretation: give one prophylactic dose after AVB; routine repeated doses or pre-birth dosing for this indication alone are not supported.',
        'Not GBS Prophylaxis: ANODE prophylaxis is against maternal infection after AVB and is separate from intrapartum GBS prophylaxis.',
      ],
      table: {
        head: ['Topic', 'Practice Point'],
        rows: [
          [
            'Routine episiotomy',
            'Not recommended for every assisted vaginal birth',
          ],
          [
            'Type when indicated',
            'Mediolateral, not midline, to reduce OASI risk',
          ],
          [
            'Timing and angle',
            'At crowning, aiming for about 60 degrees from the midline while the perineum is distended',
          ],
          [
            'Perineal protection',
            'Controlled head delivery, manual support and warm compresses',
          ],
          [
            'ANODE intervention',
            'Single 1.2 g intravenous co-amoxiclav after operative vaginal birth',
          ],
          [
            'ANODE result',
            'Maternal infection 11 percent versus 19 percent; RR 0.58, 95 percent CI 0.49 to 0.69',
          ],
          [
            'ANODE caveat',
            'Check penicillin allergy; one dose only; separate from GBS prophylaxis',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: if episiotomy is needed during assisted birth, use a mediolateral cut at about 60 degrees.',
        'ANODE supports a single 1.2 g intravenous dose of co-amoxiclav after operative vaginal birth.',
        'Routine episiotomy for every assisted birth is not recommended.',
      ],
      trap: {
        title: 'Examiner trap - performing a midline episiotomy to prevent OASI',
        body: 'A midline episiotomy increases the risk of extension into the anal sphincter. When episiotomy is indicated during assisted birth, use a mediolateral incision at about 60 degrees from the midline.',
      },
      traps: [
        {
          title: '• Cutting a midline episiotomy for a forceps birth.',
        },
        {
          title: '• Giving repeated co-amoxiclav doses instead of the single ANODE dose.',
        },
        {
          title: '• Confusing ANODE prophylaxis with GBS prophylaxis.',
        },
      ],
    },
    {
      id: 'oasis-classification',
      heading: 'OASIS: Anatomy, Degrees & Sultan Classification',
      intro:
        'Obstetric anal sphincter injury means third- or fourth-degree perineal trauma involving the external anal sphincter, internal anal sphincter and, in fourth-degree tears, the anorectal mucosa. Accurate classification depends on identifying each structure separately.',
      flow: [
        'Explain the examination and obtain consent',
        'Ensure adequate analgesia, lighting, exposure and positioning',
        'Inspect the vaginal walls, fourchette, perineal body and anal verge',
        'Identify the apex and full extent of the tear',
        'Perform a rectal examination when required or when a tear is suspected',
        'Assess the external anal sphincter, internal anal sphincter and anorectal mucosa',
        'Classify using the Sultan system and document the structures involved',
      ],
      bullets: [
        'First Degree: injury to perineal skin and/or vaginal mucosa only.',
        'Second Degree: injury to perineal muscles but not the anal sphincter.',
        'Third Degree: injury involving the anal sphincter complex, with or without the internal anal sphincter.',
        'Fourth Degree: injury involving the anal sphincter complex and the anorectal mucosa.',
        '3a: less than 50 percent of the thickness of the external anal sphincter is torn.',
        '3b: more than 50 percent of the thickness of the external anal sphincter is torn.',
        '3c: both the external and internal anal sphincters are torn.',
        '4th: external anal sphincter, internal anal sphincter and anorectal mucosa are torn.',
        'Classification Caution: if it is difficult to distinguish 3a from 3b, classify conservatively as 3b.',
        'Fourth-Degree Caution: do not call a tear fourth degree unless the anorectal mucosa is involved.',
        'EAS: striated skeletal muscle under voluntary control; disruption may impair squeeze and cause urgency or incontinence.',
        'IAS: smooth muscle under involuntary control; it contributes substantially to resting anal tone, so injury may cause passive leakage, soiling or flatal incontinence.',
        'Anorectal Mucosa: involvement makes the injury fourth degree.',
        'Anatomical Trap: the superficial transverse perineal muscle can be mistaken for the external anal sphincter.',
        'Examination Clues: EAS looks like red raw meat and contracts voluntarily; IAS is paler and smoother and cannot be voluntarily contracted.',
        'Buttonhole Tear: consider an isolated rectal buttonhole tear because an intact perineal surface does not always exclude deeper injury.',
        'Uncertain Anatomy: obtain senior or specialist help rather than guessing.',
      ],
      table: {
        head: ['Grade or Structure', 'Definition'],
        rows: [
          [
            'First degree',
            'Perineal skin and/or vaginal mucosa only',
          ],
          [
            'Second degree',
            'Perineal muscles, not the anal sphincter',
          ],
          [
            'Third degree',
            'Anal sphincter complex, with or without the internal anal sphincter',
          ],
          [
            '3a',
            'Less than 50 percent of external anal sphincter thickness torn',
          ],
          [
            '3b',
            'More than 50 percent of external anal sphincter thickness torn',
          ],
          [
            '3c',
            'External and internal anal sphincters both torn',
          ],
          [
            'Fourth degree',
            'External anal sphincter, internal anal sphincter and anorectal mucosa torn',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: 3a is under half the EAS, 3b is over half, 3c adds the IAS and fourth degree adds the anorectal mucosa.',
        'If unsure between 3a and 3b, classify as 3b.',
        'The IAS is paler, smoother and cannot be voluntarily contracted.',
      ],
      trap: {
        title: 'Examiner trap - calling a tear fourth degree without mucosal involvement',
        body: 'Fourth degree requires the anorectal mucosa to be torn in addition to the external and internal anal sphincters. A 3c tear involves both sphincters but spares the mucosa.',
      },
      traps: [
        {
          title: '• Under-classifying a borderline 3a as less severe instead of 3b.',
        },
        {
          title: '• Mistaking the superficial transverse perineal muscle for the EAS.',
        },
        {
          title: '• Missing a rectal buttonhole tear because the perineum looks intact.',
        },
      ],
    },
    {
      id: 'repair-followup',
      heading: 'Repair Principles, Postoperative Care & Future Pregnancy',
      intro:
        'All third- and fourth-degree tears should be repaired by a trained clinician, usually in theatre under regional or general anaesthesia. Each layer is repaired separately, figure-of-eight sutures are avoided, and follow-up at 6 to 12 weeks assesses sphincter function and future birth options.',
      flow: [
        'Repair in theatre with adequate anaesthesia, lighting and asepsis',
        'Identify the full extent of injury before starting',
        'Repair the anorectal mucosa without figure-of-eight sutures',
        'Repair the IAS separately end-to-end; never overlap it',
        'Repair partial EAS end-to-end; full-thickness EAS end-to-end or overlap',
        'Reconstruct the perineal body and check haemostasis',
        'Perform a rectal check after repair and remove any misplaced suture',
        'Give antibiotics, analgesia and laxatives, then follow up at 6 to 12 weeks',
      ],
      bullets: [
        'Operator: repair by a clinician trained and competent in OASI repair, or a trainee under direct specialist supervision.',
        'Setting: usually an operating theatre under regional or general anaesthesia for exposure, relaxation, lighting and asepsis.',
        'Delivery-Room Repair: exceptional, only with adequate conditions and senior agreement.',
        'Timing: repair as soon as possible; a short delay with a trained operator may be safer than an inadequate repair if bleeding is controlled.',
        'Consent: document the injury, repair, benefits, risks, alternatives and possible longer-term symptoms.',
        'Anorectal Mucosa: repair with continuous or interrupted sutures; RCOG describes 3-0 polyglactin.',
        'No Figure-of-Eight: avoid figure-of-eight sutures because they can compromise blood supply and cause ischaemia.',
        'IAS Repair: identify the IAS separately and repair end-to-end with interrupted mattress sutures.',
        'Never Overlap IAS: its thin smooth muscle can tear under tension with overlap.',
        'Partial EAS: 3a and some 3b tears are partial thickness; use end-to-end approximation, not overlap.',
        'Full-Thickness EAS: some 3b, 3c and fourth-degree tears may use end-to-end or overlap repair by a trained clinician.',
        'Suture Material: 3-0 PDS or 2-0 polyglactin for EAS and IAS repair, depending on tissue and local protocol.',
        'Perineal Body: reconstruct the remaining layers anatomically, avoiding dead space and tension.',
        'Rectal Check: perform a final rectal examination after repair to detect any suture through the anorectal mucosa.',
        'Antibiotics: give broad-spectrum intravenous prophylaxis according to the local OASI protocol; IUGA 2026 recommends within 1 hour before repair.',
        'Analgesia and Laxatives: provide adequate analgesia and stool softeners; do not routinely add a bulking agent unless specifically indicated.',
        'Catheter: maintain until recovery from anaesthesia and return of mobility or voiding, according to the local pathway.',
        'Physiotherapy: offer pelvic floor physiotherapy according to the local pathway.',
        'Follow-Up: RCOG recommends review at approximately 6 to 12 weeks with a clinician experienced in OASI or pelvic floor care.',
        'Follow-Up Content: ask about perineal pain, wound healing, dyspareunia, urinary symptoms, fecal urgency, flatal incontinence and fecal incontinence.',
        'Specialist Referral: persistent pain, bowel symptoms, wound complications or suspected sphincter dysfunction warrant referral.',
        'Investigations: endoanal ultrasound and anorectal manometry may be used when symptoms or findings indicate.',
        'Future Pregnancy: a previous OASIS does not automatically mandate caesarean birth.',
        'Future Vaginal Birth: if asymptomatic with reassuring sphincter assessment, planned vaginal birth may be reasonable after counselling.',
        'Future Caesarean: ongoing anal incontinence or abnormal endoanal ultrasound or manometry warrants discussion of elective caesarean birth.',
        'No Routine Episiotomy: do not perform prophylactic episiotomy solely because of a previous OASIS.',
      ],
      table: {
        head: ['Layer or Issue', 'Repair and Follow-Up'],
        rows: [
          [
            'Anorectal mucosa',
            'Continuous or interrupted repair; 3-0 polyglactin described; no figure-of-eight',
          ],
          [
            'Internal anal sphincter',
            'Separate end-to-end interrupted or mattress repair; never overlap',
          ],
          [
            'Partial-thickness EAS',
            'End-to-end approximation only',
          ],
          [
            'Full-thickness EAS',
            'End-to-end or overlap repair by a trained clinician',
          ],
          [
            'Post-repair check',
            'Rectal examination to exclude a misplaced suture through the mucosa',
          ],
          [
            'Postoperative care',
            'Broad-spectrum IV antibiotics, analgesia, laxatives, catheter and pelvic floor physiotherapy',
          ],
          [
            'Follow-up',
            '6 to 12 weeks; ask about pain, dyspareunia and bowel symptoms; refer if abnormal',
          ],
          [
            'Future pregnancy',
            'Individualise; asymptomatic with reassuring assessment may allow vaginal birth; symptoms or abnormal tests prompt caesarean discussion',
          ],
        ],
      },
      pearls: [
        'Golden Pearl: repair the IAS separately end-to-end and never overlap it.',
        'Avoid figure-of-eight sutures in the sphincter and anorectal mucosa.',
        'Follow up at 6 to 12 weeks and ask specifically about bowel symptoms.',
      ],
      trap: {
        title: 'Examiner trap - overlapping a partial-thickness EAS tear',
        body: 'Overlap repair is only possible and appropriate for a full-thickness EAS tear. Partial-thickness 3a and some 3b tears require end-to-end approximation.',
      },
      traps: [
        {
          title: '• Overlapping the internal anal sphincter.',
        },
        {
          title: '• Using figure-of-eight sutures in the sphincter.',
        },
        {
          title: '• Recommending caesarean automatically for every previous OASIS.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-five rapid-fire points to lock in before the exam.',
      pearls: [
        'AVB means vacuum or forceps assisted vaginal birth.',
        'Indications include fetal compromise, prolonged second stage and maternal need to shorten pushing.',
        'Confirm full dilatation, ruptured membranes, engagement, position, station, adequate pelvis, empty bladder, analgesia, consent and backup.',
        'Outlet means scalp visible, skull on pelvic floor and rotation 45 degrees or less.',
        'Low cavity is +2 or lower but not on the pelvic floor.',
        'Low rotational means more than 45 degrees of rotation.',
        'Mid-cavity is an engaged head with the leading point above +2.',
        'High forceps is not recommended.',
        'Vacuum causes less maternal perineal trauma but more scalp trauma.',
        'Forceps cause more maternal perineal and OASI trauma but fewer scalp complications.',
        'The flexion point is 3 cm anterior to the posterior fontanelle and 6 cm posterior to the anterior fontanelle.',
        'Stop vacuum after three pulls without descent, two pop-offs or twenty minutes.',
        'Stop forceps after three pulls without progressive descent when birth is not imminent.',
        'Do not use sequential instruments routinely.',
        'Routine episiotomy for every AVB is not recommended.',
        'If episiotomy is needed, use a mediolateral cut at about 60 degrees at crowning.',
        'ANODE used a single 1.2 g intravenous dose of co-amoxiclav after AVB.',
        'ANODE reduced maternal infection from 19 percent to 11 percent, RR 0.58.',
        'OASIS is third- or fourth-degree perineal trauma involving the anal sphincter complex.',
        '3a is under 50 percent EAS, 3b is over 50 percent EAS and 3c adds the IAS.',
        'Fourth degree adds the anorectal mucosa.',
        'If unsure between 3a and 3b, classify as 3b.',
        'Repair the IAS separately end-to-end and never overlap it.',
        'Avoid figure-of-eight sutures because of tissue ischaemia.',
        'Follow up at 6 to 12 weeks and individualise future birth after counselling.',
      ],
      traps: [
        {
          title: '• Calling a +1 station low cavity.',
        },
        {
          title: '• Attempting high forceps.',
        },
        {
          title: '• Proceeding without theatre or neonatal backup.',
        },
        {
          title: '• Using vacuum for a face presentation.',
        },
        {
          title: '• Forcing forceps handles to meet.',
        },
        {
          title: '• Continuing after two vacuum pop-offs.',
        },
        {
          title: '• Performing a midline episiotomy.',
        },
        {
          title: '• Confusing ANODE prophylaxis with GBS prophylaxis.',
        },
        {
          title: '• Under-classifying a borderline 3a tear.',
        },
        {
          title: '• Calling a 3c tear fourth degree.',
        },
        {
          title: '• Overlapping a partial EAS tear or the IAS.',
        },
        {
          title: '• Mandating caesarean for every previous OASIS.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm18-f1',
      front: 'What defines an outlet assisted vaginal birth?',
      back: 'Fetal scalp visible at the introitus without separating the labia, skull on the pelvic floor, head at or on the perineum and rotation of 45 degrees or less.',
    },
    {
      id: 'm18-f2',
      front: 'What defines a low-cavity assisted birth?',
      back: 'Leading point at station +2 or lower but not on the pelvic floor. Non-rotational is 45 degrees or less; rotational is more than 45 degrees.',
    },
    {
      id: 'm18-f3',
      front: 'What defines a mid-cavity assisted birth?',
      back: 'The head is engaged but the leading point remains above +2 station. The notes describe around 0 to +1 with no more than one-fifth palpable abdominally.',
    },
    {
      id: 'm18-f4',
      front: 'Which prerequisites must be confirmed before applying an instrument?',
      back: 'Indication, consent, full dilatation, ruptured membranes, engaged head, exact position and station, adequate pelvis, empty bladder, analgesia, skilled operator, neonatal support, caesarean backup and a stop rule.',
    },
    {
      id: 'm18-f5',
      front: 'Where is the vacuum flexion point?',
      back: 'About 3 cm anterior to the posterior fontanelle and 6 cm posterior to the anterior fontanelle, on the sagittal suture.',
    },
    {
      id: 'm18-f6',
      front: 'What are the vacuum stopping rules?',
      back: 'Three pulls without descent, two cup pop-offs or twenty minutes of application. Stop earlier for no descent, incorrect application or suspected injury.',
    },
    {
      id: 'm18-f7',
      front: 'What are the forceps stopping rules?',
      back: 'No progressive descent with each pull, or three pulls of correctly applied forceps without progressive descent when birth is not imminent. Stop if application is difficult.',
    },
    {
      id: 'm18-f8',
      front: 'How do vacuum and forceps complications differ?',
      back: 'Vacuum causes less maternal perineal trauma but more scalp trauma such as chignon and cephalohaematoma. Forceps cause more maternal and OASI trauma but fewer scalp complications.',
    },
    {
      id: 'm18-f9',
      front: 'What does the ANODE trial recommend after assisted vaginal birth?',
      back: 'A single 1.2 g intravenous dose of co-amoxiclav. Maternal infection fell from 19 percent to 11 percent, RR 0.58 with 95 percent CI 0.49 to 0.69.',
    },
    {
      id: 'm18-f10',
      front: 'When episiotomy is indicated during assisted birth, what type and angle are used?',
      back: 'A mediolateral episiotomy at crowning, aiming for about 60 degrees from the midline while the perineum is distended.',
    },
    {
      id: 'm18-f11',
      front: 'How are third-degree tears subclassified?',
      back: '3a is less than 50 percent EAS thickness, 3b is more than 50 percent EAS and 3c involves both EAS and IAS. Fourth degree adds the anorectal mucosa.',
    },
    {
      id: 'm18-f12',
      front: 'What if it is difficult to distinguish 3a from 3b?',
      back: 'Classify conservatively as 3b rather than underestimating the injury.',
    },
    {
      id: 'm18-f13',
      front: 'How is the internal anal sphincter repaired?',
      back: 'Separately, end-to-end, with interrupted mattress sutures. Never overlap the IAS because its thin smooth muscle can tear under tension.',
    },
    {
      id: 'm18-f14',
      front: 'Which suture technique should be avoided in OASI repair?',
      back: 'Figure-of-eight sutures, because they can compromise blood supply and cause tissue ischaemia. A final rectal check is still required.',
    },
    {
      id: 'm18-f15',
      front: 'What follow-up and future-pregnancy advice applies after OASIS?',
      back: 'Review at 6 to 12 weeks and ask about pain, dyspareunia and bowel symptoms. Previous OASIS does not mandate caesarean; symptoms or abnormal testing prompt discussion of elective caesarean.',
    },
  ],

  mcqs: [
    {
      id: 'm18-q1',
      stem: 'A nulliparous woman at full dilatation has the fetal scalp visible at the introitus without separating the labia, the skull on the pelvic floor and rotation of 30 degrees. How is this assisted birth classified?',
      options: [
        'Outlet',
        'Low rotational',
        'Mid-cavity',
        'High',
      ],
      answerIndex: 0,
      explanation:
        'Visible scalp, skull on the pelvic floor, head at the perineum and rotation of 45 degrees or less define an outlet procedure.',
    },
    {
      id: 'm18-q2',
      stem: 'A woman has a leading point at station +1, the head is engaged and no more than one-fifth is palpable abdominally. How is this classified?',
      options: [
        'Outlet',
        'Mid-cavity',
        'Low non-rotational',
        'High',
      ],
      answerIndex: 1,
      explanation:
        'An engaged head with the leading point above +2 is mid-cavity. The notes describe around 0 to +1 station with no more than one-fifth palpable abdominally.',
    },
    {
      id: 'm18-q3',
      stem: 'After two vacuum cup detachments, the fetal head has not descended. What is the most appropriate action?',
      options: [
        'Continue for up to twenty minutes',
        'Apply forceps sequentially without reassessment',
        'Stop the vacuum attempt and proceed to the safest alternative birth route',
        'Increase traction force with the next contraction',
      ],
      answerIndex: 2,
      explanation:
        'Two pop-offs are a stopping rule. Reassess promptly and proceed to the safest alternative; sequential instruments are not routine and add morbidity.',
    },
    {
      id: 'm18-q4',
      stem: 'Which statement best compares vacuum and forceps?',
      options: [
        'Vacuum causes more OASI than forceps',
        'Forceps cause more scalp trauma than vacuum',
        'Both have identical complication profiles',
        'Vacuum causes less maternal perineal trauma but more scalp trauma than forceps',
      ],
      answerIndex: 3,
      explanation:
        'Vacuum is generally associated with less maternal perineal trauma but more scalp trauma such as chignon and cephalohaematoma. Forceps carry more maternal and OASI trauma.',
    },
    {
      id: 'm18-q5',
      stem: 'A forceps birth is planned. Which episiotomy practice is correct if episiotomy is indicated?',
      options: [
        'Routine midline episiotomy in every forceps birth',
        'Mediolateral episiotomy after delivery of the head',
        'Mediolateral episiotomy at crowning, aiming for about 60 degrees from the midline',
        'No episiotomy under any circumstances',
      ],
      answerIndex: 2,
      explanation:
        'Routine episiotomy is not recommended. When indicated, use a mediolateral incision at crowning, aiming for about 60 degrees from the midline while the perineum is distended.',
    },
    {
      id: 'm18-q6',
      stem: 'What does the ANODE trial support after operative vaginal birth?',
      options: [
        'A five-day course of oral antibiotics',
        'A single 1.2 g intravenous dose of co-amoxiclav',
        'Routine vaginal chlorhexidine',
        'No antibiotic prophylaxis at all',
      ],
      answerIndex: 1,
      explanation:
        'ANODE supports a single intravenous dose of amoxicillin-clavulanate, 1.2 g, after operative vaginal birth, subject to allergy status and local policy.',
    },
    {
      id: 'm18-q7',
      stem: 'A tear involves 40 percent of the external anal sphincter thickness. How is it classified?',
      options: [
        '3a',
        '3b',
        '3c',
        'Fourth degree',
      ],
      answerIndex: 0,
      explanation:
        'A tear of less than 50 percent of the external anal sphincter thickness is 3a. More than 50 percent is 3b.',
    },
    {
      id: 'm18-q8',
      stem: 'A tear involves both anal sphincters and the anorectal mucosa. What is the correct classification?',
      options: [
        '3a',
        '3b',
        '3c',
        'Fourth degree',
      ],
      answerIndex: 3,
      explanation:
        'Involvement of the external anal sphincter, internal anal sphincter and anorectal mucosa defines a fourth-degree tear. A 3c tear spares the mucosa.',
    },
    {
      id: 'm18-q9',
      stem: 'Which repair technique is correct for the internal anal sphincter?',
      options: [
        'Overlap repair with figure-of-eight sutures',
        'Overlap repair with interrupted sutures',
        'Separate end-to-end repair with interrupted mattress sutures',
        'Leave the IAS unrepaired and repair only the EAS',
      ],
      answerIndex: 2,
      explanation:
        'The IAS is repaired separately, end-to-end, with interrupted mattress sutures. It should never be overlapped, and figure-of-eight sutures are avoided.',
    },
    {
      id: 'm18-q10',
      stem: 'A woman had a fourth-degree tear 2 years ago. She is now asymptomatic and her sphincter assessment is reassuring. What is the most appropriate advice about future birth?',
      options: [
        'Elective caesarean is mandatory for all previous OASIS',
        'Routine prophylactic episiotomy should be planned',
        'Vaginal birth is contraindicated regardless of symptoms',
        'Planned vaginal birth may be a reasonable option after counselling and shared decision-making',
      ],
      answerIndex: 3,
      explanation:
        'A previous OASIS does not automatically mandate caesarean birth. If the woman is asymptomatic with reassuring sphincter assessment, planned vaginal birth may be reasonable after counselling.',
    },
  ],
};
