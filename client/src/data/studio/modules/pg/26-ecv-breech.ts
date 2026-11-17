import type { StudioModule } from '@/data/studio/types';

/**
 * PG · Module 26 - External Cephalic Version & Breech Presentation
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten intrapartum notes (obygn 2 pdf, pages 29-36)
 * and organised around RCOG Green-top Guidelines 20a and 20b.
 *
 * Covers:
 * - Breech types and associated concerns
 * - Why ECV is offered, and why it is an option not an obligation
 * - Timing in nulliparous and multiparous women
 * - Predictors of success and failure
 * - Pre-procedure assessment and the required setting
 * - Beta-agonist tocolysis
 * - How ECV is performed and when to stop
 * - Post-procedure monitoring and anti-D
 * - Contraindications and persistent breech management
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const ECV_BREECH_MODULE: StudioModule = {
  id: 'pg-mod-26-ecv-breech',
  track: 'NEET_PG',
  title: 'ECV & Breech Presentation: RCOG GTG 20a/20b',
  shortTitle: 'ECV & Breech',
  summary:
    'Complete PG clinical revision module on external cephalic version and breech presentation following RCOG Green-top Guidelines 20a and 20b. Features frank, complete and footling breech definitions, the benefits and limits of ECV, timing from 36+0 weeks in nulliparous and 37+0 weeks in multiparous women, predictors of success such as multiparity, an unengaged breech, adequate liquor and a posterior placenta, pre-procedure ultrasound and CTG, the need for urgent caesarean capability, beta-agonist tocolysis with terbutaline or salbutamol, the four-attempts-in-ten-minutes memory rule and when to stop, post-procedure monitoring, anti-D for Rh-negative unsensitised women with fetomaternal haemorrhage assessment, contraindications, and the informed choice between planned caesarean and a protocol-led vaginal breech birth, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    '36+0 versus 37+0, tocolysis, anti-D and the persistent breech choice.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'RCOG GTG 20a/20b',
    'Frank Breech',
    'Complete Breech',
    'Footling Breech',
    'ECV 36+0 / 37+0',
    'Multiparity Predictor',
    'Terbutaline 250 mcg',
    'Four Attempts Rule',
    'Anti-D After ECV',
    'Kleihauer',
    'ECV Contraindications',
    'Vaginal Breech Birth',
  ],
  sourceTag:
    'Handwritten intrapartum revision (obygn 2 pdf, pp. 29-36) • RCOG Green-top Guidelines 20a and 20b',
  updatedAtISO: '2026-11-14T16:15:00.000Z',
  notes: [
    {
      id: 'breech-types',
      heading: 'Breech Presentation: Definition and Types',
      intro:
        'Breech presentation occurs when the fetal buttocks or feet present at the pelvic inlet rather than the head. It is common earlier in pregnancy, but most fetuses turn cephalic before term.',
      flow: [
        'Confirm breech presentation by ultrasound',
        'Identify the type: frank, complete, footling/incomplete or kneeling',
        'Assess gestational age and whether spontaneous version is still possible',
        'Consider cord prolapse, head entrapment and birth trauma risk',
        'Discuss ECV and birth options',
        'Document the plan and the setting for birth',
      ],
      bullets: [
        'Frank Breech: hips flexed, knees extended; buttocks present and feet lie near the head.',
        'Complete Breech: hips and knees flexed; buttocks and feet present.',
        'Footling/Incomplete Breech: one or both feet lie below the buttocks and may present first.',
        'Kneeling Breech: uncommon.',
        'Concerns: cord prolapse, head entrapment, birth trauma and difficulty with delivery of the after-coming head.',
        'Spontaneous Version: most fetuses turn cephalic before term.',
      ],
      table: {
        head: ['Type', 'Hips', 'Knees', 'Presenting part'],
        rows: [
          ['Frank', 'Flexed', 'Extended', 'Buttocks; feet near head'],
          ['Complete', 'Flexed', 'Flexed', 'Buttocks and feet'],
          ['Footling/incomplete', 'Variable', 'Variable', 'One or both feet below buttocks'],
          ['Kneeling', 'Variable', 'Variable', 'Knees; uncommon'],
        ],
      },
      pearls: [
        'Golden Pearl: frank breech has flexed hips and extended knees.',
        'Footling breech carries a higher risk of cord prolapse.',
        'Most breech presentations earlier in pregnancy turn cephalic before term.',
      ],
      trap: {
        title: 'Examiner trap - confusing frank and complete breech',
        body: 'Frank breech: hips flexed, knees extended. Complete breech: hips and knees both flexed, with buttocks and feet presenting.',
      },
      traps: [
        {
          title: '• Missing a footling presentation and its cord prolapse risk.',
        },
        {
          title: '• Assuming a breech at 32 weeks will persist to term.',
        },
        {
          title: '• Planning birth without confirming presentation by ultrasound.',
        },
      ],
    },
    {
      id: 'why-ecv',
      heading: 'Why Offer External Cephalic Version?',
      intro:
        'ECV is a manoeuvre in which an experienced clinician applies pressure through the maternal abdomen to turn a breech or transverse fetus into a cephalic presentation. It is an option, not an obligation, and the discussion must include success, discomfort and rare complications.',
      flow: [
        'Explain that ECV aims to reduce persistent breech at birth',
        'Explain that it may reduce breech-related caesarean birth',
        'Discuss the chance of success and the possibility of spontaneous version',
        'Explain discomfort during the procedure',
        'Explain rare complications such as abruption, bleeding and emergency delivery',
        'Explain that a caesarean may still be needed',
        'Obtain informed consent',
      ],
      bullets: [
        'Benefit One: reduces persistent breech presentation at birth.',
        'Benefit Two: reduces the likelihood of planned caesarean attributable to breech presentation.',
        'Benefit Three: may reduce some risks associated with vaginal breech birth.',
        'Not Obligatory: ECV is an option, not an obligation.',
        'Counselling: explain the chance of success, discomfort, rare complications and the possibility that caesarean may still be needed.',
        'Failure: a failed attempt may still be followed by spontaneous cephalic version before birth.',
      ],
      table: {
        head: ['Benefit', 'Caveat'],
        rows: [
          ['Reduces persistent breech at birth', 'Success is not guaranteed'],
          ['Reduces breech-related planned caesarean', 'A caesarean may still be needed'],
          ['May reduce some vaginal breech birth risks', 'Rare complications include abruption and emergency delivery'],
        ],
      },
      pearls: [
        'Golden Pearl: ECV reduces persistent breech at term and breech-related caesarean birth.',
        'ECV is an option, not an obligation.',
        'A failed attempt does not exclude later spontaneous version.',
      ],
      trap: {
        title: 'Examiner trap - presenting ECV as mandatory',
        body: 'ECV is offered after informed discussion. The patient may decline, and a caesarean may still be required for obstetric reasons or if version fails.',
      },
      traps: [
        {
          title: '• Omitting the possibility of emergency caesarean from consent.',
        },
        {
          title: '• Promising success.',
        },
        {
          title: '• Forgetting that spontaneous version can still occur.',
        },
      ],
    },
    {
      id: 'timing',
      heading: 'Timing of ECV',
      intro:
        'Timing balances spontaneous version, the risk of preterm birth if a complication occurs and the chance of successful version. The notes use 36+0 weeks for nulliparous women and 37+0 weeks for multiparous women.',
      flow: [
        'Nulliparous · offer from 36+0 weeks',
        'Multiparous · offer from 37+0 weeks',
        'Balance spontaneous version against preterm delivery risk',
        'Follow the current RCOG guideline and local pathway',
        'Do not perform routinely before 36 weeks in uncomplicated singleton pregnancy',
        'Confirm presentation by ultrasound before the attempt',
        'Document the timing and consent',
      ],
      bullets: [
        'Nulliparous Timing: offer from 36+0 weeks.',
        'Multiparous Timing: offer from 37+0 weeks.',
        'Rationale: balance spontaneous version, preterm birth risk if a complication occurs and success chance.',
        'Local Pathway: exact timing follows the current RCOG guideline and unit policy.',
        'Before 36 Weeks: ECV is not routinely performed before 36 weeks in otherwise uncomplicated singleton pregnancies.',
      ],
      table: {
        head: ['Parity', 'Offer ECV from'],
        rows: [
          ['Nulliparous', '36+0 weeks'],
          ['Multiparous', '37+0 weeks'],
          ['Before 36 weeks', 'Not routine in uncomplicated singleton pregnancy'],
        ],
      },
      pearls: [
        'Golden Pearl: source timing is 36+0 weeks in nulliparous and 37+0 weeks in multiparous women.',
        'Timing trades spontaneous version against preterm delivery risk.',
        'Follow the current local pathway.',
      ],
      trap: {
        title: 'Examiner trap - offering ECV at 34 weeks routinely',
        body: 'ECV is not routinely performed before 36 weeks in otherwise uncomplicated singleton pregnancies. Earlier attempted version risks preterm delivery if a complication occurs, while many fetuses would still turn spontaneously.',
      },
      traps: [
        {
          title: '• Using the same timing for nulliparous and multiparous women.',
        },
        {
          title: '• Attempting ECV before 36 weeks without a specific indication.',
        },
        {
          title: '• Forgetting ultrasound confirmation of presentation.',
        },
      ],
    },
    {
      id: 'predictors',
      heading: 'Predictors of Success',
      intro:
        'No single predictor is absolute. Multiparity, an unengaged breech, adequate amniotic fluid and a posterior placenta favour success; nulliparity, an engaged breech and low fluid reduce it.',
      flow: [
        'Assess parity',
        'Assess whether the breech is engaged or mobile',
        'Assess amniotic fluid volume',
        'Note placental site',
        'Assess fetal head palpability and maternal abdominal wall',
        'Counsel that no predictor is absolute',
        'Proceed with a safe attempt if appropriate',
      ],
      bullets: [
        'Favourable: multiparity.',
        'Favourable: unengaged breech or mobile presenting part.',
        'Favourable: adequate amniotic fluid.',
        'Favourable: posterior placenta, often easier for palpating fetal parts.',
        'Favourable: a fetal head that is readily palpable and can be guided.',
        'Favourable: a maternal abdominal wall that allows good palpation.',
        'Favourable: complete breech may be more favourable than a deeply engaged frank breech in some series.',
        'Unfavourable: nulliparity.',
        'Unfavourable: engaged breech.',
        'Unfavourable: low amniotic fluid.',
        'Unfavourable: anterior placenta in some circumstances.',
        'Unfavourable: higher maternal BMI or a tense abdominal wall may make palpation difficult.',
        'Unfavourable: uterine abnormality or fetal position that limits mobility.',
        'No Absolute Predictor: a failed attempt may still be followed by spontaneous cephalic version.',
      ],
      table: {
        head: ['Favours success', 'Reduces success'],
        rows: [
          ['Multiparity', 'Nulliparity'],
          ['Unengaged/mobile breech', 'Engaged breech'],
          ['Adequate amniotic fluid', 'Low amniotic fluid'],
          ['Posterior placenta (often)', 'Anterior placenta (sometimes)'],
          ['Easily palpable head', 'Tense abdominal wall/high BMI'],
          ['No uterine abnormality', 'Uterine abnormality limiting mobility'],
        ],
      },
      pearls: [
        'Golden Pearl: multiparity, unengaged breech and adequate liquor favour success.',
        'No single predictor is absolute.',
        'A failed attempt does not exclude later spontaneous version.',
      ],
      trap: {
        title: 'Examiner trap - treating an engaged breech as an absolute contraindication',
        body: 'An engaged breech reduces the chance of success but is not an absolute contraindication. Assess the whole picture and the woman\u2019s preferences.',
      },
      traps: [
        {
          title: '• Promising success because the patient is multiparous.',
        },
        {
          title: '• Ignoring low amniotic fluid.',
        },
        {
          title: '• Failing to reassess presentation after a failed attempt.',
        },
      ],
    },
    {
      id: 'pre-procedure',
      heading: 'Pre-Procedure Assessment and Setting',
      intro:
        'Before ECV, confirm the pregnancy and presentation, assess fetal and maternal status, review contraindications and obtain informed consent. Perform the procedure where ultrasound, fetal monitoring and urgent caesarean delivery are available.',
      flow: [
        'Confirm singleton pregnancy and breech presentation by ultrasound',
        'Assess fetal position, placental site, amniotic fluid and gross anatomy',
        'Review growth, fetal wellbeing and any independent caesarean indication',
        'Review maternal history, blood group/Rh status and contraindications',
        'Obtain informed consent',
        'Obtain pre-procedure CTG according to gestation and protocol',
        'Perform ECV with ultrasound, monitoring and urgent theatre access',
      ],
      bullets: [
        'Confirm: singleton pregnancy and breech presentation by ultrasound.',
        'Assess: fetal position, placental site, amniotic fluid and gross anatomy as appropriate.',
        'Review: growth, fetal wellbeing and any indication for caesarean independent of presentation.',
        'Maternal Review: history, obstetric history, blood group/Rh status and contraindications.',
        'Consent: explain discomfort, failure, transient fetal heart rate changes, placental abruption/bleeding, membrane rupture and rare emergency caesarean.',
        'Pre-Procedure CTG: according to gestation and unit protocol.',
        'Setting: ultrasound, fetal monitoring and access to urgent caesarean delivery.',
        'Do Not Attempt: when the fetus is compromised or vaginal birth is contraindicated for another reason.',
      ],
      table: {
        head: ['Pre-ECV step', 'Detail'],
        rows: [
          ['Confirm', 'Singleton breech by ultrasound'],
          ['Assess', 'Position, placenta, liquor, anatomy, growth and wellbeing'],
          ['Review', 'Maternal history, Rh status, contraindications'],
          ['Consent', 'Success, discomfort, complications, emergency caesarean'],
          ['Monitor', 'Pre-procedure CTG per protocol'],
          ['Setting', 'Ultrasound, monitoring, urgent theatre access'],
        ],
      },
      pearls: [
        'Golden Pearl: ECV requires ultrasound, fetal monitoring and access to urgent caesarean delivery.',
        'Do not attempt ECV when the fetus is compromised.',
        'Confirm singleton pregnancy and breech presentation before starting.',
      ],
      trap: {
        title: 'Examiner trap - performing ECV in a setting without theatre access',
        body: 'Rare complications such as abruption, persistent bradycardia or membrane rupture may require immediate delivery. ECV must take place where ultrasound, fetal monitoring and urgent caesarean capability are available.',
      },
      traps: [
        {
          title: '• Skipping pre-procedure ultrasound.',
        },
        {
          title: '• Attempting ECV with a non-reassuring fetal status.',
        },
        {
          title: '• Omitting Rh status from the checklist.',
        },
      ],
    },
    {
      id: 'tocolysis',
      heading: 'Tocolysis: Beta-Agonists',
      intro:
        'A beta-agonist tocolytic relaxes the uterus and can increase the likelihood of successful ECV. Terbutaline and salbutamol are the agents mentioned in the notes; exact drug, route, dose and monitoring must follow the approved local ECV protocol.',
      flow: [
        'Assess maternal pulse, blood pressure and contraindications',
        'Choose the local beta-agonist regimen',
        'Example: subcutaneous terbutaline 0.25 mg (250 micrograms)',
        'Example: IV salbutamol according to local protocol',
        'Monitor for maternal tremor, palpitations and tachycardia',
        'Watch for hyperglycaemia and rarely pulmonary oedema',
        'Consider regional analgesia only in selected cases',
      ],
      bullets: [
        'Mechanism: beta-agonist tocolysis relaxes the uterus and can increase success.',
        'Agents: salbutamol and terbutaline.',
        'Example Regimen: subcutaneous terbutaline 0.25 mg (250 micrograms).',
        'Alternative: IV salbutamol according to local protocol.',
        'Local Protocol: exact drug, route, dose and monitoring must follow the approved pathway and patient contraindications.',
        'Maternal Effects: tremor, palpitations, tachycardia and hyperglycaemia.',
        'Rare Effects: pulmonary oedema or significant cardiovascular effects.',
        'Assessment: maternal pulse, blood pressure and contraindications.',
        'Regional Analgesia: not required routinely; may be considered in selected cases such as repeat attempts or when discomfort limits the procedure.',
      ],
      table: {
        head: ['Agent', 'Example', 'Key caution'],
        rows: [
          ['Terbutaline', '0.25 mg (250 micrograms) subcutaneously per local protocol', 'Tremor, tachycardia, hyperglycaemia'],
          ['Salbutamol', 'IV per local protocol', 'Palpitations, pulmonary oedema (rare)'],
          ['Regional analgesia', 'Selected cases only', 'Not routine'],
        ],
      },
      pearls: [
        'Golden Pearl: beta-agonist tocolysis with terbutaline or salbutamol improves success in suitable patients.',
        'Check maternal pulse, blood pressure and contraindications before tocolysis.',
        'Regional analgesia is not routine for ECV.',
      ],
      trap: {
        title: 'Examiner trap - giving beta-agonist tocolysis without checking maternal contraindications',
        body: 'Beta-agonists can cause tachycardia, tremor, hyperglycaemia and rarely pulmonary oedema or significant cardiovascular effects. Assess maternal pulse, blood pressure and contraindications first.',
      },
      traps: [
        {
          title: '• Using a dose that does not match the local protocol.',
        },
        {
          title: '• Ignoring maternal tachycardia or palpitations.',
        },
        {
          title: '• Treating regional analgesia as routine.',
        },
      ],
    },
    {
      id: 'procedure',
      heading: 'How ECV Is Performed',
      intro:
        'Ultrasound confirms fetal lie and monitors progress. Gentle pressure elevates the breech from the pelvis and guides the fetus into a forward or backward roll. Forceful or prolonged manipulation is avoided.',
      flow: [
        'Confirm lie with ultrasound',
        'Apply gentle pressure to elevate the breech from the pelvis',
        'Guide the fetus into a forward or backward roll',
        'Monitor fetal heart rate during and after the attempt',
        'Avoid forceful or prolonged manipulation',
        'Stop for significant pain, persistent bradycardia, bleeding, abruption, membrane rupture or other concern',
        'Reassess presentation by ultrasound',
      ],
      bullets: [
        'Ultrasound: confirm fetal lie and monitor progress.',
        'Technique: gentle pressure elevates the breech and guides a forward or backward roll.',
        'Force: avoid forceful or prolonged manipulation.',
        'Monitoring: monitor fetal heart rate during and after the attempt.',
        'Stop: for significant maternal pain, persistent fetal bradycardia, bleeding, suspected abruption, membrane rupture or other concern.',
        'Attempts Rule: the notes quote a maximum of four attempts within about ten minutes as a local/protocol memory rule.',
        'Not Universal: this is not a mandatory target; stop earlier if maternal tolerance, fetal heart rate or circumstances warrant it.',
        'Goal: safe version, not reaching a maximum number of attempts.',
      ],
      table: {
        head: ['Step', 'Detail'],
        rows: [
          ['Image', 'Confirm lie and monitor progress'],
          ['Lift', 'Elevate the breech from the pelvis'],
          ['Roll', 'Guide a forward or backward roll'],
          ['Monitor', 'Fetal heart rate during and after'],
          ['Stop', 'Pain, bradycardia, bleeding, abruption, rupture or concern'],
        ],
      },
      pearls: [
        'Golden Pearl: the goal is safe version, not reaching a maximum number of attempts.',
        'The four-attempts-in-ten-minutes figure is a protocol memory rule, not a target to persist despite warning signs.',
        'Stop for persistent fetal bradycardia, significant pain or bleeding.',
      ],
      trap: {
        title: 'Examiner trap - persisting through four attempts despite warning signs',
        body: 'The four-attempts/ten-minute figure is a local protocol memory aid. Stop earlier for maternal intolerance, persistent fetal bradycardia, bleeding, suspected abruption or membrane rupture.',
      },
      traps: [
        {
          title: '• Using forceful or prolonged manipulation.',
        },
        {
          title: '• Ignoring persistent fetal bradycardia.',
        },
        {
          title: '• Continuing after membrane rupture.',
        },
      ],
    },
    {
      id: 'post-procedure',
      heading: 'Post-Procedure Monitoring and Anti-D',
      intro:
        'After ECV, monitor the fetal heart rate until reassuring, reassess presentation and evaluate for bleeding, pain, contractions, membrane rupture or reduced fetal movements. Rh-negative unsensitised women need anti-D according to the local sensitising-event protocol.',
      flow: [
        'Perform CTG for the duration required by local protocol',
        'Reassess fetal presentation by ultrasound',
        'Check for bleeding, pain, contractions, membrane rupture or reduced movements',
        'Give clear return precautions',
        'For Rh-negative unsensitised women, offer anti-D',
        'The notes cite 500 IU, but dose varies by gestation, product and protocol',
        'Assess fetomaternal haemorrhage with Kleihauer or equivalent where indicated',
      ],
      bullets: [
        'Monitoring: CTG for the duration required by local protocol and until reassuring.',
        'Reassess: fetal presentation by ultrasound.',
        'Evaluate: vaginal bleeding, abdominal pain, contractions, membrane rupture or reduced fetal movements.',
        'Return Precautions: give clear instructions.',
        'Anti-D: offer to Rh-negative, non-sensitised patients after ECV according to the national/local sensitising-event protocol.',
        'Dose: the notes cite 500 IU, a familiar UK dose in some gestational contexts; dose varies by gestational age, product and national protocol.',
        'FMH Assessment: a Kleihauer-Betke test or other fetomaternal haemorrhage assessment may be needed after the relevant gestational threshold to determine whether additional anti-D is required.',
        'Do Not Fix: do not apply a fixed dose without checking local policy and gestational age.',
        'Transient Bradycardia: relatively common and often resolves.',
        'Persistent Bradycardia/Abruption: persistent bradycardia, abruption, significant bleeding, membrane rupture or sustained abnormal CTG require urgent assessment and possible emergency delivery.',
      ],
      table: {
        head: ['Post-ECV issue', 'Action'],
        rows: [
          ['Fetal monitoring', 'CTG until reassuring per local protocol'],
          ['Presentation', 'Reassess by ultrasound'],
          ['Symptoms', 'Bleeding, pain, contractions, rupture, reduced movements'],
          ['Rh-negative unsensitised', 'Anti-D per local protocol; assess FMH where indicated'],
          ['Persistent bradycardia/abruption', 'Urgent assessment and possible emergency delivery'],
        ],
      },
      pearls: [
        'Golden Pearl: Rh-negative unsensitised women should receive anti-D after ECV according to local policy.',
        'Assess fetomaternal haemorrhage where indicated rather than assuming a fixed dose is enough.',
        'Persistent fetal bradycardia after ECV requires urgent assessment.',
      ],
      trap: {
        title: 'Examiner trap - giving a fixed anti-D dose without checking gestation or FMH',
        body: 'The cited 500 IU is a familiar UK dose in some contexts, but dose varies by gestational age, product and national protocol. Assess fetomaternal haemorrhage where indicated and follow local policy.',
      },
      traps: [
        {
          title: '• Forgetting anti-D in an Rh-negative unsensitised patient.',
        },
        {
          title: '• Discharging before CTG is reassuring.',
        },
        {
          title: '• Ignoring reduced fetal movements after ECV.',
        },
      ],
    },
    {
      id: 'contraindications',
      heading: 'Contraindications and When Not to Attempt ECV',
      intro:
        'Do not perform ECV when there is a clear contraindication to vaginal birth or a condition requiring caesarean regardless of presentation. Other reasons to defer or avoid are guideline- and case-dependent.',
      flow: [
        'Identify any absolute contraindication to vaginal birth',
        'Exclude placenta praevia covering the os',
        'Assess fetal heart rate and fetal status',
        'Assess for recent bleeding or suspected abruption',
        'Assess membranes and liquor volume',
        'Assess maternal stability and pre-eclampsia severity',
        'Individualise previous caesarean and multiple pregnancy',
      ],
      bullets: [
        'Absolute Context: do not perform ECV when there is a clear contraindication to vaginal birth or a condition requiring caesarean regardless of presentation.',
        'Example: placenta praevia covering the os.',
        'Fetal Status: abnormal fetal heart rate or non-reassuring fetal status.',
        'Bleeding: significant recent vaginal bleeding or suspected placental abruption.',
        'Membranes: ruptured membranes, particularly when fluid is low and the fetus is not mobile.',
        'Maternal: severe pre-eclampsia or maternal instability where risk/benefit is unfavourable.',
        'Fetal/Uterine: major fetal anomaly or uterine abnormality that makes version inappropriate, depending on the situation.',
        'Multiple Pregnancy: except in selected circumstances such as management of the second twin by an experienced specialist.',
        'Consent: maternal refusal or inability to provide informed consent.',
        'Previous Caesarean: not automatically an absolute contraindication in an otherwise suitable singleton pregnancy; assess uterine scar history and local expertise.',
        'Case-Dependent: the exact list is guideline- and case-dependent.',
      ],
      table: {
        head: ['Situation', 'ECV consideration'],
        rows: [
          ['Placenta praevia covering the os', 'Do not attempt'],
          ['Non-reassuring fetal status', 'Avoid/defer'],
          ['Recent bleeding or suspected abruption', 'Avoid'],
          ['Ruptured membranes with low fluid', 'Avoid'],
          ['Severe pre-eclampsia/maternal instability', 'Individualise; often avoid'],
          ['Previous caesarean', 'Not automatically absolute; assess scar and expertise'],
          ['Multiple pregnancy', 'Selected specialist circumstances only'],
          ['Maternal refusal', 'Do not proceed'],
        ],
      },
      pearls: [
        'Golden Pearl: placenta praevia covering the os is a clear reason not to attempt ECV.',
        'A previous caesarean is not automatically an absolute contraindication.',
        'Maternal refusal or inability to consent means no procedure.',
      ],
      trap: {
        title: 'Examiner trap - calling every previous caesarean an absolute contraindication to ECV',
        body: 'A previous caesarean is not automatically absolute in an otherwise suitable singleton pregnancy. Assess uterine scar history, local expertise and the individual risk-benefit.',
      },
      traps: [
        {
          title: '• Attempting ECV with placenta praevia covering the os.',
        },
        {
          title: '• Ignoring ruptured membranes and low fluid.',
        },
        {
          title: '• Proceeding without informed consent.',
        },
      ],
    },
    {
      id: 'persistent-breech',
      heading: 'Management If Breech Persists',
      intro:
        'If breech persists, the options are planned caesarean, planned vaginal breech birth in a carefully selected patient and suitably staffed unit, or intrapartum caesarean if labour or fetal/maternal status makes vaginal birth unsuitable.',
      flow: [
        'Confirm persistent breech after the ECV window',
        'Assess breech type, fetal size and head attitude',
        'Assess gestational age, pelvic adequacy and contraindications',
        'Confirm availability of an experienced vaginal breech team',
        'Discuss planned caesarean versus planned vaginal breech birth',
        'Explain maternal surgical risks and future pregnancy implications',
        'Plan intrapartum caesarean capability and continuous monitoring',
      ],
      bullets: [
        'Option One: planned caesarean birth.',
        'Option Two: planned vaginal breech birth in a carefully selected patient and suitably staffed unit with an experienced clinician.',
        'Option Three: intrapartum caesarean if labour or fetal/maternal status makes vaginal birth unsuitable.',
        'Breech Factors: breech type, fetal size and head attitude.',
        'Obstetric Factors: gestational age, labour progress and maternal/fetal wellbeing.',
        'Pelvis: adequacy and absence of contraindication to vaginal birth.',
        'Preference: patient preference and availability of an experienced vaginal breech team.',
        'Local Protocol: continuous fetal monitoring, assisted delivery of the after-coming head and immediate caesarean capability.',
        'Caesarean Trade-Off: planned caesarean reduces some short-term perinatal risks compared with planned vaginal breech birth in many settings, but has maternal surgical risks and implications for future pregnancies.',
        'Do Not Improvise: planned vaginal breech birth should not be attempted without trained staff and a clear protocol.',
      ],
      table: {
        head: ['Option', 'Requirement'],
        rows: [
          ['Planned caesarean', 'Discussed with maternal risks and future pregnancy implications'],
          ['Planned vaginal breech birth', 'Selected patient, experienced team, clear protocol, monitoring and theatre access'],
          ['Intrapartum caesarean', 'Labour or fetal/maternal status makes vaginal birth unsuitable'],
        ],
      },
      pearls: [
        'Golden Pearl: persistent breech requires informed discussion of planned caesarean versus selected, protocol-led vaginal breech birth.',
        'Planned caesarean reduces some short-term perinatal risks but carries maternal surgical risks.',
        'Vaginal breech birth should not be improvised.',
      ],
      trap: {
        title: 'Examiner trap - offering vaginal breech birth without an experienced team',
        body: 'Planned vaginal breech birth is appropriate only in a carefully selected patient, in a suitably staffed unit, with an experienced clinician and a clear protocol including immediate caesarean capability.',
      },
      traps: [
        {
          title: '• Improvising vaginal breech birth without trained staff.',
        },
        {
          title: '• Ignoring maternal surgical risks of caesarean.',
        },
        {
          title: '• Failing to plan for immediate caesarean capability.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty rapid-fire points to lock in before the exam.',
      pearls: [
        'ECV is offered to reduce persistent breech at term and breech-related caesarean birth.',
        'Frank breech: hips flexed, knees extended.',
        'Complete breech: hips and knees flexed.',
        'Footling breech: one or both feet below the buttocks.',
        'Source timing: 36+0 weeks nulliparous; 37+0 weeks multiparous.',
        'Multiparity, unengaged breech and adequate liquor favour success.',
        'Posterior placenta is often easier for palpation.',
        'Nulliparity, engaged breech and low fluid reduce success.',
        'Beta-agonist tocolysis with terbutaline or salbutamol improves success in suitable patients.',
        'Terbutaline example: 0.25 mg (250 micrograms) subcutaneously per protocol.',
        'ECV requires ultrasound, fetal monitoring and access to urgent caesarean.',
        'Stop for persistent fetal bradycardia, significant pain, bleeding, suspected abruption or membrane rupture.',
        'The four-attempts/ten-minute rule is a protocol memory aid, not a target.',
        'Rh-negative unsensitised women should receive anti-D after ECV according to local policy.',
        'Assess fetomaternal haemorrhage where indicated.',
        'A previous caesarean is not automatically an absolute contraindication.',
        'Placenta praevia covering the os is a clear reason not to attempt ECV.',
        'Persistent breech requires informed discussion of caesarean versus vaginal breech birth.',
        'Planned caesarean reduces some short-term perinatal risks but has maternal risks.',
        'Vaginal breech birth should be protocol-led and never improvised.',
      ],
      traps: [
        {
          title: '• Offering ECV before 36 weeks routinely.',
        },
        {
          title: '• Promising success in a multiparous patient.',
        },
        {
          title: '• Performing ECV without theatre access.',
        },
        {
          title: '• Persisting through attempts despite warning signs.',
        },
        {
          title: '• Forgetting anti-D after ECV.',
        },
        {
          title: '• Treating previous caesarean as an absolute contraindication.',
        },
        {
          title: '• Attempting ECV with placenta praevia covering the os.',
        },
        {
          title: '• Improvising vaginal breech birth.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm26-f1',
      front: 'Define the three main breech types.',
      back: 'Frank: hips flexed, knees extended. Complete: hips and knees flexed, buttocks and feet present. Footling/incomplete: one or both feet lie below the buttocks and may present first.',
    },
    {
      id: 'm26-f2',
      front: 'What are the benefits of ECV?',
      back: 'It reduces persistent breech presentation at birth, reduces breech-related planned caesarean birth and may reduce some risks of vaginal breech birth. It is an option, not an obligation.',
    },
    {
      id: 'm26-f3',
      front: 'When is ECV offered in nulliparous and multiparous women?',
      back: 'From 36+0 weeks in nulliparous women and from 37+0 weeks in multiparous women, balancing spontaneous version against preterm delivery risk.',
    },
    {
      id: 'm26-f4',
      front: 'Which factors favour successful ECV?',
      back: 'Multiparity, unengaged/mobile breech, adequate amniotic fluid, posterior placenta, an easily palpable head, a favourable abdominal wall and, in some series, complete breech.',
    },
    {
      id: 'm26-f5',
      front: 'Which factors reduce the chance of successful ECV?',
      back: 'Nulliparity, engaged breech, low amniotic fluid, anterior placenta in some cases, high maternal BMI or tense abdominal wall, and uterine abnormality limiting mobility.',
    },
    {
      id: 'm26-f6',
      front: 'What must be available wherever ECV is performed?',
      back: 'Ultrasound, fetal monitoring and access to urgent caesarean delivery, because abruption, persistent bradycardia or membrane rupture may require immediate delivery.',
    },
    {
      id: 'm26-f7',
      front: 'Which tocolytics are used for ECV, and what is an example regimen?',
      back: 'Beta-agonists: subcutaneous terbutaline 0.25 mg (250 micrograms) or IV salbutamol according to local protocol. Monitor for tremor, palpitations, tachycardia and hyperglycaemia.',
    },
    {
      id: 'm26-f8',
      front: 'What is the four-attempts-in-ten-minutes rule?',
      back: 'A local/protocol memory rule from the notes, not a mandatory target. Stop earlier for maternal intolerance, persistent fetal bradycardia, bleeding, suspected abruption or membrane rupture.',
    },
    {
      id: 'm26-f9',
      front: 'When should ECV be stopped?',
      back: 'For significant maternal pain, persistent fetal bradycardia, bleeding, suspected abruption, membrane rupture or any other concern. The goal is safe version, not a maximum number of attempts.',
    },
    {
      id: 'm26-f10',
      front: 'What monitoring is needed after ECV?',
      back: 'CTG until reassuring per local protocol, ultrasound reassessment of presentation, and evaluation for bleeding, pain, contractions, membrane rupture or reduced fetal movements.',
    },
    {
      id: 'm26-f11',
      front: 'What is the anti-D approach after ECV?',
      back: 'Offer anti-D to Rh-negative, non-sensitised women according to the local sensitising-event protocol. The notes cite 500 IU, but dose varies by gestation and product; assess fetomaternal haemorrhage where indicated.',
    },
    {
      id: 'm26-f12',
      front: 'List contraindications or reasons to avoid ECV.',
      back: 'Any contraindication to vaginal birth or need for caesarean regardless of presentation (e.g. placenta praevia covering the os), non-reassuring fetal status, recent bleeding/abruption, ruptured membranes with low fluid, severe pre-eclampsia/maternal instability, major fetal anomaly, selected multiple pregnancy, and maternal refusal.',
    },
    {
      id: 'm26-f13',
      front: 'Is a previous caesarean an absolute contraindication to ECV?',
      back: 'No. It is not automatically absolute in an otherwise suitable singleton pregnancy. Assess uterine scar history, local expertise and individual risk-benefit.',
    },
    {
      id: 'm26-f14',
      front: 'What are the options if breech persists?',
      back: 'Planned caesarean, planned vaginal breech birth in a carefully selected patient with an experienced team and protocol, or intrapartum caesarean if labour or fetal/maternal status makes vaginal birth unsuitable.',
    },
    {
      id: 'm26-f15',
      front: 'What are the trade-offs of planned caesarean for persistent breech?',
      back: 'It reduces some short-term perinatal risks compared with planned vaginal breech birth in many settings, but carries maternal surgical risks and implications for future pregnancies.',
    },
  ],

  mcqs: [
    {
      id: 'm26-q1',
      stem: 'A nulliparous woman at 36+2 weeks has a frank breech. When should ECV be offered?',
      options: ['Now, from 36+0 weeks', 'At 34 weeks', 'At 39 weeks', 'Only in labour'],
      answerIndex: 0,
      explanation:
        'In the notes, ECV is offered from 36+0 weeks in nulliparous women and from 37+0 weeks in multiparous women. It is not routinely performed before 36 weeks in uncomplicated singleton pregnancy.',
    },
    {
      id: 'm26-q2',
      stem: 'Which combination most favours successful ECV?',
      options: [
        'Nulliparity, engaged breech, low liquor',
        'Multiparity, unengaged breech, adequate liquor',
        'Anterior placenta, tense abdominal wall, high BMI',
        'Uterine anomaly, engaged breech, oligohydramnios',
      ],
      answerIndex: 1,
      explanation:
        'Multiparity, an unengaged breech and adequate amniotic fluid favour success. Nulliparity, engagement, low fluid, a tense abdominal wall and uterine abnormality reduce it.',
    },
    {
      id: 'm26-q3',
      stem: 'Which tocolytic regimen is given as an example for ECV?',
      options: [
        'Subcutaneous terbutaline 0.25 mg (250 micrograms)',
        'Intramuscular progesterone 400 mg',
        'Oral nifedipine 20 mg',
        'IV oxytocin infusion',
      ],
      answerIndex: 0,
      explanation:
        'The notes cite subcutaneous terbutaline 0.25 mg (250 micrograms) or IV salbutamol according to local protocol. Exact drug, route, dose and monitoring follow the approved ECV pathway.',
    },
    {
      id: 'm26-q4',
      stem: 'During ECV, the fetal heart rate becomes persistently bradycardic. What should be done?',
      options: [
        'Continue until four attempts are completed',
        'Stop the attempt and assess urgently, with possible emergency delivery',
        'Give another dose of terbutaline and continue',
        'Ignore it if the mother is comfortable',
      ],
      answerIndex: 1,
      explanation:
        'Persistent fetal bradycardia is a reason to stop. The four-attempt rule is a protocol memory aid, not a target to persist through warning signs. Urgent assessment and possible emergency delivery are needed.',
    },
    {
      id: 'm26-q5',
      stem: 'A Rh-negative unsensitised woman undergoes successful ECV. What is required?',
      options: [
        'No additional treatment',
        'Anti-D according to the local sensitising-event protocol, with FMH assessment where indicated',
        'Immediate caesarean',
        'Lifelong anti-D',
      ],
      answerIndex: 1,
      explanation:
        'Offer anti-D after ECV according to local policy. The notes cite 500 IU, but dose varies by gestation and product; assess fetomaternal haemorrhage with Kleihauer or equivalent where indicated.',
    },
    {
      id: 'm26-q6',
      stem: 'Which finding is a clear reason not to attempt ECV?',
      options: [
        'Previous caesarean section',
        'Placenta praevia covering the os',
        'Multiparity',
        'Posterior placenta',
      ],
      answerIndex: 1,
      explanation:
        'Placenta praevia covering the os is a contraindication to vaginal birth and a clear reason not to attempt ECV. A previous caesarean is not automatically an absolute contraindication.',
    },
    {
      id: 'm26-q7',
      stem: 'What does the four-attempts-in-ten-minutes figure mean?',
      options: [
        'A mandatory target for every ECV',
        'A local/protocol memory rule; stop earlier if warning signs occur',
        'The number of ECVs allowed per pregnancy',
        'The number of CTGs required after ECV',
      ],
      answerIndex: 1,
      explanation:
        'The notes quote a maximum of four attempts within about ten minutes as a local/protocol memory rule. It is not a universal mandatory target, and the attempt should stop earlier for maternal or fetal concerns.',
    },
    {
      id: 'm26-q8',
      stem: 'A woman at 37+3 weeks, para 1, has a persistent breech after ECV. What is the appropriate approach?',
      options: [
        'Immediate vaginal breech delivery without discussion',
        'Informed discussion of planned caesarean versus planned vaginal breech birth in an appropriate unit',
        'Repeat ECV weekly until 42 weeks',
        'No discussion until labour',
      ],
      answerIndex: 1,
      explanation:
        'Persistent breech requires informed discussion of planned caesarean versus planned vaginal breech birth in a carefully selected patient, suitably staffed unit and experienced team with a clear protocol.',
    },
    {
      id: 'm26-q9',
      stem: 'Which statement about planned caesarean for persistent breech is correct?',
      options: [
        'It has no maternal risks',
        'It reduces some short-term perinatal risks but carries maternal surgical risks and future pregnancy implications',
        'It is the only legal option',
        'It eliminates all neonatal risk',
      ],
      answerIndex: 1,
      explanation:
        'Planned caesarean reduces some short-term perinatal risks compared with planned vaginal breech birth in many settings, but has maternal surgical risks and implications for future pregnancies.',
    },
    {
      id: 'm26-q10',
      stem: 'What is the first step before attempting ECV?',
      options: [
        'Give oxytocin',
        'Confirm singleton pregnancy and breech presentation by ultrasound and assess fetal/maternal status',
        'Rupture the membranes',
        'Perform an immediate caesarean',
      ],
      answerIndex: 1,
      explanation:
        'Before ECV, confirm singleton pregnancy and breech presentation by ultrasound, assess position, placental site, liquor, growth and wellbeing, review contraindications, obtain consent and perform a pre-procedure CTG.',
    },
  ],
};
