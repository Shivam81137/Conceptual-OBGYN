import type { StudioModule } from '@/data/revisionStudio';

/**
 * PG · Module 22 - Gynae-Oncology Surgical Complications, PK/PD & Modern RT
 * ---------------------------------------------------------------------------
 * Distilled from the handwritten gynaecological oncology notes (cancer pdf,
 * pages 132-136). Numeric thresholds are revision aids; real management is
 * individualised to haemodynamic state, anatomy, imaging and microbiology.
 *
 * Covers:
 * - Vascular injury: recognition, pressure, controlled exposure and repair
 * - Lymphocele, chylous ascites and pelvic abscess
 * - Nerve, bowel and ureteric complications
 * - The Bricker ileal conduit
 * - ERAS and preoperative fasting
 * - Glasgow Prognostic Score and modified GPS
 * - Pharmacokinetics/pharmacodynamics and Calvert carboplatin dosing
 * - IMRT, SIB, IGRT, adaptive RT, SBRT and MR-Linac
 * - Golden pearls and examiner traps for NEET PG / SS
 *
 * Offline-first: every note, table, flashcard and MCQ ships in the client bundle.
 */

export const GYNAE_ONCO_COMPLICATIONS_PKPD_RT_MODULE: StudioModule = {
  id: 'pg-mod-22-gynae-onco-complications-pkpd-modern-rt',
  track: 'NEET_PG',
  title: 'Gynae-Oncology Complications, PK/PD & Modern RT',
  shortTitle: 'Gynae-Onco Complications & RT',
  summary:
    'Complete PG revision module on gynaecological oncology surgical complications, clinical pharmacology and modern radiotherapy. Features the immediate response to major pelvic vascular injury with direct pressure and controlled proximal/distal control rather than blind clamping, lymphocele assessment and stepwise drainage, chylous ascites with a triglyceride clue above about 200 mg/dL and an MCT-based stepwise pathway, pelvic abscess antibiotics plus source control, nerve, bowel and ureteric injury, the Bricker ileal conduit, ERAS fasting principles, conventional GPS versus modified GPS, pharmacokinetic terms and the Calvert formula carboplatin dose = target AUC x (GFR + 25), and IMRT, SIB, IGRT, adaptive RT, SBRT and MR-Linac, with 15 active-recall flashcards and 10 clinical vignette MCQs.',
  tagline:
    'Direct pressure, the 200 mg/dL clue, Calvert AUC and the RT alphabet.',
  highYield: true,
  weightage: 'Very High Yield',
  durationMinutes: 40,
  tags: [
    'Major Vascular Injury',
    'Lymphocele',
    'Chylous Ascites',
    'Pelvic Abscess',
    'Ureteric Injury',
    'Bricker Conduit',
    'ERAS Fasting',
    'GPS vs mGPS',
    'Calvert Formula',
    'Carboplatin AUC',
    'IMRT / SIB / IGRT',
    'SBRT & MR-Linac',
  ],
  sourceTag:
    'Handwritten gynaecological oncology revision (cancer pdf, pp. 132-136) • ERAS principles • Calvert dosing • Modern radiotherapy platforms',
  updatedAtISO: '2026-11-14T15:15:00.000Z',
  notes: [
    {
      id: 'vascular-injury',
      heading: 'Vascular Injury in Gynaecological Oncology Surgery',
      intro:
        'Pelvic lymphadenectomy, radical hysterectomy, debulking surgery and retroperitoneal dissection place major vessels at risk. Important structures include the external and common iliac arteries and veins, internal iliac vessels, inferior vena cava and aorta.',
      flow: [
        'Announce the injury and call senior surgical, anaesthetic and vascular help early',
        'Apply direct pressure with a swab or atraumatic vascular sponge',
        'Avoid blind clamping in the retroperitoneum',
        'Maintain exposure and obtain proximal and distal control under direct vision',
        'Activate the major haemorrhage protocol where indicated',
        'Identify the vessel and size/type of injury; repair or graft as needed',
        'Reassess distal perfusion, haemostasis and associated ureteric or bowel injury',
      ],
      bullets: [
        'Direct Laceration: scissors, energy devices, needles or traction.',
        'Avulsion: a small branch can tear during nodal dissection.',
        'Thermal Injury: may not bleed immediately and can cause delayed necrosis or thrombosis.',
        'Compression/Clamp Injury: especially when anatomy is distorted by tumour, adhesions or prior surgery.',
        'First Action: announce the injury and call for senior surgical, anaesthetic and vascular assistance early.',
        'Pressure: apply direct pressure with a swab or atraumatic vascular sponge.',
        'No Blind Clamping: the ureter, artery, vein and nerve may lie close together in the retroperitoneum.',
        'Exposure: maintain the field and obtain proximal and distal vascular control under direct vision when appropriate.',
        'Haemorrhage Protocol: large-bore access, blood products, coagulation support, warming and calcium monitoring according to local protocol.',
        'Repair: identify the vessel and the size/type of injury; options include vascular suturing, patch repair or grafting by an experienced vascular surgeon.',
        'Reassess: distal perfusion, venous return, haemostasis and the possibility of associated ureteric or bowel injury.',
        'Document: record the event and arrange surveillance for thrombosis, bleeding, limb ischaemia or venous obstruction.',
        'IVC Injury: can cause rapid, life-threatening haemorrhage; pressure and controlled exposure are essential.',
        'External Iliac Vein: major blood loss and postoperative venous thrombosis or limb swelling.',
        'Arterial Injury: limb ischaemia, pseudoaneurysm or delayed haemorrhage.',
        'Delayed Complications: not every postoperative vascular event is an intraoperative laceration; pseudoaneurysm, thrombosis and venous thromboembolism need separate evaluation.',
      ],
      table: {
        head: ['Step', 'Action'],
        rows: [
          ['Call for help', 'Senior surgeon, anaesthetist and vascular surgeon early'],
          ['Temporary control', 'Direct pressure with swab or atraumatic vascular sponge'],
          ['Exposure', 'Proximal and distal control under direct vision'],
          ['Resuscitation', 'Major haemorrhage protocol, blood products, warming, calcium'],
          ['Definitive repair', 'Suture, patch or graft by an experienced vascular surgeon'],
          ['Reassess', 'Distal perfusion, haemostasis, ureter and bowel'],
        ],
      },
      pearls: [
        'Golden Pearl: major pelvic bleeding is controlled with pressure and planned exposure, not blind clamping.',
        'Call for vascular help early rather than after prolonged attempts at local control.',
        'Reassess the ureter and bowel after any major vascular repair.',
      ],
      trap: {
        title: 'Examiner trap - blind clamping in a bloody retroperitoneum',
        body: 'The ureter, iliac artery, iliac vein and nerves are close together. Blind clamping can convert a repairable venous injury into a ureteric or arterial catastrophe. Use pressure, then controlled exposure.',
      },
      traps: [
        {
          title: '• Placing a clamp blindly in a pooled retroperitoneal haematoma.',
        },
        {
          title: '• Forgetting the major haemorrhage protocol and calcium monitoring.',
        },
        {
          title: '• Attributing all delayed vascular problems to intraoperative laceration.',
        },
      ],
    },
    {
      id: 'lymphocele',
      heading: 'Lymphocele After Pelvic or Para-Aortic Lymphadenectomy',
      intro:
        'A lymphocele is a collection of lymphatic fluid in a potential space after lymphatic channels are divided during nodal surgery. It is common after pelvic and para-aortic lymphadenectomy, and many are asymptomatic and resolve without intervention.',
      flow: [
        'Recognise an incidental or symptomatic fluid collection after nodal surgery',
        'Image with ultrasound or CT to define size, site and relation to ureter/vessels',
        'Check renal function if ureteric compression is possible',
        'Exclude haematoma, urinoma, abscess, recurrence or seroma',
        'Small and asymptomatic · observe',
        'Symptomatic, enlarging or compressive · image-guided drainage',
        'Persistent or infected · sclerotherapy, embolisation, fenestration or culture-directed care',
      ],
      bullets: [
        'Presentation: often detected incidentally on ultrasound or CT.',
        'Symptoms: pelvic pressure, pain, fever or urinary symptoms if large or infected.',
        'Ureteric Compression: may cause hydronephrosis.',
        'Iliac Vein Compression: may cause unilateral leg swelling or contribute to thrombosis.',
        'Infection: fever, leukocytosis and rim enhancement or inflammatory change on imaging.',
        'Assessment: ultrasound or CT defines size, site, relation to ureter/vessels and features of infection.',
        'Renal Function: check if ureteric compression is possible.',
        'Differential: haematoma, urinoma, abscess, tumour recurrence or seroma.',
        'Small Asymptomatic: observation and clinical follow-up.',
        'Symptomatic/Compressive: image-guided drainage may be appropriate.',
        'Persistent/Recurrent: catheter drainage with sclerotherapy, lymphatic embolisation or surgical fenestration in selected cases.',
        'Infected: obtain cultures, give appropriate antibiotics and drain when clinically indicated.',
      ],
      table: {
        head: ['Scenario', 'Management'],
        rows: [
          ['Small, asymptomatic', 'Observe with clinical follow-up'],
          ['Large, symptomatic or compressive', 'Image-guided drainage'],
          ['Persistent or recurrent', 'Sclerotherapy, lymphatic embolisation or surgical fenestration'],
          ['Infected', 'Cultures, antibiotics and drainage when indicated'],
          ['Uncertain diagnosis', 'Exclude haematoma, urinoma, abscess, recurrence and seroma'],
        ],
      },
      pearls: [
        'Golden Pearl: most lymphoceles are asymptomatic and need no intervention.',
        'A lymphocele can compress the ureter or iliac vein, so check renal function and leg swelling.',
        'Infection changes the management to cultures, antibiotics and drainage.',
      ],
      trap: {
        title: 'Examiner trap - draining every postoperative fluid collection',
        body: 'Small asymptomatic lymphoceles are observed. Intervention is reserved for symptomatic, enlarging, compressive, infected or persistent collections, and the differential includes urinoma, abscess and recurrence.',
      },
      traps: [
        {
          title: '• Intervening on an incidental small lymphocele.',
        },
        {
          title: '• Missing hydronephrosis from ureteric compression.',
        },
        {
          title: '• Treating an infected collection without cultures or drainage.',
        },
      ],
    },
    {
      id: 'chylous-ascites',
      heading: 'Chylous Ascites & Chylous Leak',
      intro:
        'Chylous ascites is accumulation of lipid-rich lymph in the peritoneal cavity, often due to injury or disruption of lymphatic channels around the para-aortic or pelvic vessels. Management is stepwise and tailored to output and nutritional status.',
      flow: [
        'Recognise milky or opalescent drain fluid or ascites, especially after enteral fat',
        'Confirm biochemically with a fluid triglyceride above about 200 mg/dL',
        'Exclude infection, urine, pus and enteric leak',
        'Monitor output, weight, electrolytes, albumin, lymphocytes and nutrition',
        'Start a low-fat diet with medium-chain triglycerides',
        'Escalate to dietetic input, enteral nutrition or TPN for high-output leak',
        'Consider octreotide, lymphangiography with embolisation or operative ligation if persistent',
      ],
      bullets: [
        'Clue: milky or opalescent drain fluid or ascites, especially after enteral fat intake.',
        'Symptoms: abdominal distension, pain, poor oral intake or a prolonged high-output drain.',
        'Consequences: nutritional depletion, protein loss, lymphocyte loss and electrolyte disturbance in persistent cases.',
        'Biochemistry: ascitic or drain-fluid triglyceride above approximately 200 mg/dL is a commonly used diagnostic threshold.',
        'Interpretation: interpret with the laboratory method and clinical picture; chylomicrons may be used where confirmation is needed.',
        'Exclude Mimics: infection, urine, pus or enteric leak can also produce cloudy fluid.',
        'Monitor: drain output, weight, electrolytes, albumin, lymphocyte count and nutritional status.',
        'Diet: low-fat diet with medium-chain triglycerides, because MCTs are absorbed predominantly into the portal circulation rather than intestinal lymphatics.',
        'High-Output/Persistent: specialist dietetic input, an enteral nutrition strategy and sometimes total parenteral nutrition.',
        'Octreotide: may be considered in selected persistent cases; evidence and protocols vary.',
        'Refractory Leak: consider lymphangiography with embolisation or operative ligation of the leaking channel.',
        'Threshold Caveat: the triglyceride threshold is a diagnostic clue, not an intervention threshold.',
        'Do Not Delay: do not delay resuscitation or nutritional support while waiting for a number in a clinically unwell patient.',
      ],
      table: {
        head: ['Step', 'Intervention'],
        rows: [
          ['Confirm', 'Milky fluid plus triglyceride above about 200 mg/dL'],
          ['Exclude', 'Infection, urine, pus and enteric leak'],
          ['Monitor', 'Output, weight, electrolytes, albumin, lymphocytes, nutrition'],
          ['Diet', 'Low-fat with medium-chain triglycerides'],
          ['Escalate', 'Dietitian, enteral nutrition or TPN for high output'],
          ['Refractory', 'Octreotide, lymphangiography with embolisation or operative ligation'],
        ],
      },
      pearls: [
        'Golden Pearl: a drain-fluid triglyceride above about 200 mg/dL supports chylous ascites.',
        'Medium-chain triglycerides are absorbed into the portal circulation, bypassing intestinal lymphatics.',
        'The triglyceride number is a diagnostic clue, not a reason to delay resuscitation.',
      ],
      trap: {
        title: 'Examiner trap - treating every cloudy drain as chylous ascites',
        body: 'Infection, urine, pus and enteric contents can all make drain fluid cloudy. Confirm with biochemistry and the clinical picture, and exclude the dangerous mimics.',
      },
      traps: [
        {
          title: '• Waiting for a triglyceride result before resuscitating an unwell patient.',
        },
        {
          title: '• Using a normal-fat diet for a chylous leak.',
        },
        {
          title: '• Missing an enteric or urinary leak because the fluid looked milky.',
        },
      ],
    },
    {
      id: 'pelvic-abscess',
      heading: 'Pelvic Abscess & Postoperative Infection',
      intro:
        'A pelvic abscess may follow hysterectomy, bowel surgery, lymphadenectomy, tumour debulking or an infected lymphocele. The priorities are recognising sepsis, starting empiric antibiotics promptly and achieving source control when a drainable collection or ongoing contamination is present.',
      flow: [
        'Assess haemodynamic status and sepsis criteria immediately',
        'Send CBC, renal/liver profile, CRP, lactate and blood cultures as indicated',
        'Image with CT to identify collection, gas, bowel leak or urinary leak',
        'Start empiric IV antibiotics promptly in sepsis',
        'Tailor antibiotics to cultures, local resistance and source',
        'Drain accessible collections by image guidance',
        'Re-explore surgically if percutaneous drainage is unsuitable or there is peritonitis, leak or uncontrolled sepsis',
      ],
      bullets: [
        'Presentation: fever, pelvic or abdominal pain, tachycardia, malaise, ileus, purulent discharge or wound infection.',
        'Sepsis Without Signs: sepsis may be present without a dramatic local examination finding.',
        'Immediate Assessment: haemodynamic status and sepsis criteria.',
        'Laboratory: CBC, renal/liver profile, CRP, lactate if indicated and blood cultures in suspected sepsis.',
        'Imaging: CT abdomen/pelvis is often useful to identify collection, gas, bowel leak or urinary leak.',
        'Sources: consider urine, bowel, wound and vaginal cuff.',
        'Antibiotics: start empiric IV antibiotics promptly in sepsis, then tailor to culture results, local resistance and source.',
        'Source Control: essential when there is a drainable collection, bowel leak, infected prosthesis or ongoing contamination.',
        'Percutaneous Drainage: often preferred for accessible collections.',
        'Surgery: considered when percutaneous drainage is unsuitable or unsuccessful, there is generalised peritonitis, bowel injury/leak, necrotic tissue or uncontrolled sepsis.',
        'Size Bands as Memory Aid: collections below 2 cm may sometimes be treated with antibiotics alone; 2-7 cm may be considered for antibiotics plus image-guided drainage; very large collections (e.g. above 7 cm) often require drainage or operative consideration.',
        'Not Universal: clinical stability, accessibility, multiloculation, sepsis, anatomy and response determine management.',
      ],
      table: {
        head: ['Collection size (memory aid)', 'Typical consideration'],
        rows: [
          ['Below 2 cm', 'Antibiotics alone may sometimes suffice'],
          ['About 2-7 cm', 'Antibiotics plus image-guided drainage may be considered'],
          ['Above 7 cm', 'Drainage or operative consideration often needed'],
          ['Any size with sepsis or leak', 'Source control is the priority; size alone does not decide'],
        ],
      },
      pearls: [
        'Golden Pearl: antibiotics plus source control, not antibiotics alone, for a drainable infected collection.',
        'Collection size is a memory aid; clinical stability and accessibility matter more.',
        'Sepsis can be present without a dramatic pelvic examination.',
      ],
      trap: {
        title: 'Examiner trap - letting collection size dictate management',
        body: 'The 2 cm and 7 cm bands are approximate aids. A small collection with uncontrolled sepsis or a bowel leak still needs source control, while a larger stable collection may be managed differently depending on accessibility and response.',
      },
      traps: [
        {
          title: '• Delaying antibiotics while waiting for imaging.',
        },
        {
          title: '• Treating a drainable abscess with antibiotics alone.',
        },
        {
          title: '• Missing a bowel or urinary leak as the source.',
        },
      ],
    },
    {
      id: 'nerve-bowel-ureter',
      heading: 'Nerve, Bowel & Urological Complications',
      intro:
        'Pelvic oncological surgery can injure nerves, bowel and ureters. Prevention depends on anatomical identification and careful dissection; recognition may be immediate or delayed, especially after thermal injury.',
      flow: [
        'Identify genitofemoral, ilioinguinal and iliohypogastric nerves during dissection',
        'Avoid blind energy application and suture entrapment',
        'Recognise bowel injury intraoperatively, including subtle thermal damage',
        'Repair or resect/diverge bowel according to site, extent and contamination',
        'Identify the ureter before ligation or division in distorted anatomy',
        'Suspect delayed ureteric injury with flank pain, fever, urinoma, ileus or watery vaginal leak',
        'Investigate with CT urogram, cystoscopy/retrograde studies and urology input',
      ],
      bullets: [
        'Nerve Injury: genitofemoral, ilioinguinal and iliohypogastric nerves may be injured by traction, transection, thermal injury, suture entrapment or scar.',
        'Nerve Symptoms: burning pain, dysaesthesia, numbness or radiating pain over the groin, labia, suprapubic region or upper medial thigh, depending on the nerve.',
        'Nerve Prevention: anatomical identification, careful dissection and avoiding blind energy application.',
        'Persistent Neuropathic Pain: examination, pain mapping and consideration of nerve block or specialist referral.',
        'Bowel Risk: rectum and sigmoid in pelvic sidewall, posterior cul-de-sac and deep endometriosis/tumour dissection; small bowel during adhesiolysis or trocar entry.',
        'Bowel Recognition: recognise injury intraoperatively when possible and evaluate thermal injuries carefully because damage may be delayed.',
        'Bowel Management: primary repair to resection/diversion depending on site, extent, tissue quality, contamination and patient condition.',
        'Ureteric Risk: radical hysterectomy, lymphadenectomy, distorted anatomy, previous pelvic surgery and extensive endometriosis.',
        'Ureteric Injury Types: transection, ligation, devascularisation or thermal damage.',
        'Delayed Ureteric Injury: consider with postoperative flank pain, fever, urinoma, ileus, rising creatinine or watery vaginal leakage.',
        'Ureteric Investigation: CT urogram, cystoscopy/retrograde studies and specialist urology input.',
      ],
      table: {
        head: ['Structure', 'Injury clue', 'Key action'],
        rows: [
          ['Ilioinguinal/iliohypogastric nerve', 'Groin/labial/suprapubic burning or dysaesthesia', 'Map, consider block, specialist referral'],
          ['Genitofemoral nerve', 'Upper medial thigh/groin pain', 'Anatomical assessment and neuropathic care'],
          ['Bowel', 'Enteric contents, unexpected ileus, sepsis', 'Repair or resection/diversion; do not miss thermal injury'],
          ['Ureter', 'Flank pain, fever, urinoma, watery vaginal leak, rising creatinine', 'CT urogram and urology involvement'],
        ],
      },
      pearls: [
        'Golden Pearl: a watery vaginal leak after pelvic surgery is a ureteric injury until proved otherwise.',
        'Thermal bowel injury may declare itself late; inspect carefully.',
        'Nerve-sparing starts with identifying the nerve before using energy.',
      ],
      trap: {
        title: 'Examiner trap - attributing postoperative flank pain and fever to infection alone',
        body: 'A ureteric injury can present with flank pain, fever, urinoma, ileus, rising creatinine or watery vaginal leakage. Imaging and urology input are needed before assuming a simple urinary infection.',
      },
      traps: [
        {
          title: '• Using blind energy near the pelvic sidewall.',
        },
        {
          title: '• Ignoring a delayed thermal bowel injury.',
        },
        {
          title: '• Missing a ureteric injury because the patient was treated for UTI.',
        },
      ],
    },
    {
      id: 'bricker-conduit',
      heading: 'Bricker Ileal Conduit (Non-Continent Urinary Diversion)',
      intro:
        'A Bricker ileal conduit is an incontinent urinary diversion commonly used after cystectomy or selected pelvic exenteration. A short distal ileal segment is isolated, ureters are implanted into it, and urine drains continuously into an external appliance.',
      flow: [
        'Isolate a short segment of distal ileum, commonly about 15-20 cm',
        'Take the segment proximal to the ileocaecal valve, the notes citing about 15 cm from the valve',
        'Restore bowel continuity with an ileo-ileal anastomosis',
        'Implant the ureters into the isolated ileal segment',
        'Bring the distal end to the abdominal wall as a stoma',
        'Fit an external appliance; there is no voluntary continence',
        'Monitor urine output, renal function, electrolytes and stoma viability',
      ],
      bullets: [
        'Segment: a short segment of distal ileum, commonly around 15-20 cm.',
        'Position: taken proximal to the ileocaecal valve; the notes cite approximately 15 cm from the valve.',
        'Variation: exact length and position are determined by anatomy and surgical plan.',
        'Continuity: restored by an ileo-ileal anastomosis.',
        'Ureters: implanted into the isolated ileal segment.',
        'Stoma: the distal end is brought to the abdominal wall.',
        'Continence: none; urine drains continuously into an external appliance.',
        'Early Complications: urine leak, ileus, bowel anastomotic leak, wound infection, stoma ischaemia/retraction and ureteroileal leak.',
        'Late Complications: ureteroenteric stricture, hydronephrosis, recurrent infection, stones, parastomal hernia, stomal stenosis, renal function decline and metabolic acidosis.',
        'Metabolic Acidosis: due to bowel contact with urine.',
        'Care: monitor urine output, renal function, electrolytes and stoma viability.',
        'Education: stoma nurse education and appliance fitting are essential.',
        'Red Flags: evaluate fever, flank pain, reduced conduit output or rising creatinine promptly.',
      ],
      table: {
        head: ['Aspect', 'Detail'],
        rows: [
          ['Bowel segment', 'Distal ileum, about 15-20 cm, roughly 15 cm from ileocaecal valve'],
          ['Continuity', 'Ileo-ileal anastomosis'],
          ['Ureters', 'Implanted into the isolated ileal segment'],
          ['Continence', 'None; external appliance'],
          ['Early complications', 'Leak, ileus, anastomotic leak, stoma ischaemia, wound infection'],
          ['Late complications', 'Stricture, stones, infection, hernia, metabolic acidosis'],
        ],
      },
      pearls: [
        'Golden Pearl: the Bricker conduit is incontinent; urine drains continuously into an appliance.',
        'Metabolic acidosis is a late consequence of urine contact with bowel.',
        'Reduced conduit output with flank pain or rising creatinine suggests obstruction or leak.',
      ],
      trap: {
        title: 'Examiner trap - describing the Bricker conduit as a continent diversion',
        body: 'There is no voluntary continence mechanism. The ureters drain into an isolated ileal segment that opens as a stoma, and the patient wears an external appliance.',
      },
      traps: [
        {
          title: '• Claiming the patient voids normally after a Bricker conduit.',
        },
        {
          title: '• Forgetting metabolic acidosis and renal function surveillance.',
        },
        {
          title: '• Ignoring stoma ischaemia in the early postoperative period.',
        },
      ],
    },
    {
      id: 'eras-fasting',
      heading: 'ERAS and Preoperative Fasting',
      intro:
        'Enhanced Recovery After Surgery is a coordinated perioperative pathway that reduces surgical stress, complications and length of stay. It is not simply short fasting; it includes counselling, nutrition, multimodal analgesia, normothermia, early mobilisation and early feeding.',
      flow: [
        'Preoperative counselling and nutrition optimisation',
        'Clear fluids generally until 2 hours before anaesthesia',
        'Light meal or non-human milk generally at least 6 hours',
        'Fatty, fried or meat-containing meal may need 8 hours or longer',
        'Follow local anaesthetic guidance for the exact policy',
        'Use multimodal opioid-sparing analgesia and minimally invasive surgery where appropriate',
        'Maintain normothermia, early mobilisation and early feeding; avoid unnecessary tubes and drains',
      ],
      bullets: [
        'ERAS Elements: preoperative counselling, nutrition optimisation, multimodal analgesia, minimally invasive surgery where appropriate, normothermia, early mobilisation, early feeding and avoidance of unnecessary tubes/drains.',
        'Clear Fluids: may generally be allowed until 2 hours before anaesthesia in appropriately selected adults.',
        'Light Meal/Non-Human Milk: generally at least 6 hours.',
        'Fatty/Fried/Meat Meal: may require 8 hours or longer.',
        'Local Guidance: the anaesthetic department policy governs the exact fasting schedule.',
        'Exceptions: delayed gastric emptying, bowel obstruction, significant reflux/aspiration risk, pregnancy in some circumstances, emergency surgery and other high-risk conditions.',
        'Carbohydrate Drinks: may be used in selected ERAS pathways, but assess diabetes, gastroparesis and aspiration risk.',
        'Not Just Fasting: ERAS also covers fluid management, opioid-sparing analgesia, prevention of hypothermia, mobilisation and nutrition.',
        'Normothermia: maintain perioperative normothermia with active warming and temperature monitoring; the notes use an operating-room temperature of at least about 21 degrees C as a practical reminder.',
      ],
      table: {
        head: ['Intake', 'Typical minimum fasting interval'],
        rows: [
          ['Clear fluids', 'Until 2 hours before anaesthesia'],
          ['Light meal or non-human milk', 'At least 6 hours'],
          ['Fatty, fried or meat-containing meal', '8 hours or longer'],
          ['High aspiration risk', 'Individualised; local anaesthetic guidance'],
        ],
      },
      pearls: [
        'Golden Pearl: clear fluids 2 hours, light meal 6 hours in suitable elective patients.',
        'ERAS is a whole pathway, not just a shorter fast.',
        'Aspiration risk overrides the standard fasting schedule.',
      ],
      trap: {
        title: 'Examiner trap - applying the 2/6/8-hour rule to every patient',
        body: 'Delayed gastric emptying, bowel obstruction, significant reflux, emergency surgery and other high-risk conditions need individualised fasting. The standard schedule applies only to appropriately selected elective patients.',
      },
      traps: [
        {
          title: '• Fasting a bowel-obstruction patient by the routine schedule.',
        },
        {
          title: '• Calling ERAS merely a short fast.',
        },
        {
          title: '• Ignoring aspiration risk when allowing clear fluids.',
        },
      ],
    },
    {
      id: 'gps-mgps',
      heading: 'Glasgow Prognostic Score (GPS) and Modified GPS',
      intro:
        'GPS is an inflammation-based prognostic score using C-reactive protein and serum albumin. It reflects systemic inflammation and nutritional/inflammatory burden in some oncology settings, but it is not a stand-alone diagnostic test and does not replace tumour staging.',
      flow: [
        'Measure CRP and serum albumin',
        'Apply the conventional GPS if that is the version asked',
        'Score 0 · CRP not elevated and albumin at least 35 g/L',
        'Score 1 · one of the two abnormalities',
        'Score 2 · CRP above 10 mg/L and albumin below 35 g/L',
        'For mGPS, ignore albumin when CRP is 10 mg/L or lower',
        'Check which version the question is using',
      ],
      bullets: [
        'Conventional GPS Score 0: CRP commonly 10 mg/L or lower and albumin at least 35 g/L.',
        'Conventional GPS Score 1: one of the two abnormalities is present.',
        'Conventional GPS Score 2: CRP above 10 mg/L and albumin below 35 g/L.',
        'mGPS Score 0: CRP 10 mg/L or lower, irrespective of albumin.',
        'mGPS Score 1: CRP above 10 mg/L and albumin at least 35 g/L.',
        'mGPS Score 2: CRP above 10 mg/L and albumin below 35 g/L.',
        'Key Difference: a low albumin alone gives GPS 1 but mGPS 0 when CRP is not elevated.',
        'Interpretation: a marker of systemic inflammation and nutritional/inflammatory burden, not a stand-alone diagnosis.',
        'Staging: GPS does not replace tumour staging.',
      ],
      table: {
        head: ['Score', 'Conventional GPS', 'Modified GPS'],
        rows: [
          ['0', 'CRP 10 mg/L or lower and albumin at least 35 g/L', 'CRP 10 mg/L or lower, irrespective of albumin'],
          ['1', 'One abnormality present', 'CRP above 10 mg/L and albumin at least 35 g/L'],
          ['2', 'CRP above 10 mg/L and albumin below 35 g/L', 'CRP above 10 mg/L and albumin below 35 g/L'],
        ],
      },
      pearls: [
        'Golden Pearl: low albumin alone is GPS 1 but mGPS 0 when CRP is normal.',
        'GPS uses CRP and albumin; it is a prognostic marker, not a staging scan.',
        'Always check whether the question asks for GPS or mGPS.',
      ],
      trap: {
        title: 'Examiner trap - mixing conventional GPS with mGPS',
        body: 'The two scores handle an isolated low albumin differently. In conventional GPS it scores 1; in mGPS a normal CRP keeps the score at 0.',
      },
      traps: [
        {
          title: '• Giving mGPS 1 for isolated low albumin with normal CRP.',
        },
        {
          title: '• Using GPS as a substitute for staging.',
        },
        {
          title: '• Forgetting to state which score version is being used.',
        },
      ],
    },
    {
      id: 'pk-pd-calvert',
      heading: 'Pharmacokinetics, Pharmacodynamics & Carboplatin AUC Dosing',
      intro:
        'Pharmacokinetics describes what the body does to a drug: absorption, distribution, metabolism and excretion. Pharmacodynamics describes what the drug does to the body: target interaction, dose-response, efficacy and toxicity. Carboplatin is dosed by target AUC because exposure is strongly related to renal clearance and myelosuppression.',
      flow: [
        'Define the PK parameters: Cmax, Tmax, AUC, clearance, half-life and volume of distribution',
        'Define PD as target interaction, dose-response, efficacy and toxicity',
        'Choose the target carboplatin AUC for the regimen and context',
        'Use an accepted measured or estimated GFR in mL/min',
        'Calculate dose in mg as target AUC x (GFR + 25)',
        'Apply the institution GFR method, dose cap and renal-function rules',
        'Do not substitute an unverified creatinine estimate or arbitrary BSA dose',
      ],
      bullets: [
        'Cmax: maximum plasma concentration.',
        'Tmax: time to reach Cmax.',
        'AUC: area under the plasma concentration-time curve; systemic drug exposure over time.',
        'Clearance: volume of plasma cleared of drug per unit time.',
        'Half-Life: time for plasma concentration to fall by 50 percent during the relevant elimination phase.',
        'Volume of Distribution: theoretical volume relating the amount of drug in the body to plasma concentration.',
        'Calvert Formula: carboplatin dose in mg = target AUC x (GFR + 25).',
        'Target AUC: chosen according to regimen and clinical context.',
        'GFR: measured or estimated renal filtration in mL/min using an accepted method.',
        'The 25: represents non-renal clearance in the formula.',
        'Units: dose is expressed in mg, not mg/m2.',
        'Institutional Rules: use the accepted GFR method, dose cap policy and renal-function rules.',
        'Do Not: substitute an unverified creatinine estimate or manually apply an arbitrary body-surface-area dose.',
        'AUC Is Not Cmax: two patients can receive different milligram doses for the same target AUC because their renal clearances differ.',
        'Targeted Agents: monoclonal antibodies and small-molecule agents have different PK profiles; toxicities may be immune-mediated, infusion-related, target-related or off-target.',
        'Do Not Assume: not all adverse effects are dose-independent, and renal/hepatic dysfunction can alter exposure.',
        'Induction: initial treatment intended to reduce tumour burden before the next planned phase.',
        'Neoadjuvant: systemic treatment before definitive local therapy, often surgery, to shrink or downstage.',
        'Adjuvant: treatment after definitive local therapy to reduce recurrence risk from microscopic residual disease.',
        'Consolidation: additional treatment after an initial response/remission to deepen or prolong disease control.',
        'Intensification: escalation of treatment intensity in a defined protocol; meaning varies by disease and regimen.',
        'Concurrent Chemoradiation: systemic agent given during radiotherapy to radiosensitise tumour cells and improve local control when evidence supports it.',
        'Cytotoxic Toxicity: peripheral neuropathy (notably taxanes and platinum), myelosuppression, mucositis, nausea and organ-specific toxicity.',
      ],
      table: {
        head: ['Term', 'Meaning'],
        rows: [
          ['Cmax', 'Maximum plasma concentration'],
          ['Tmax', 'Time to Cmax'],
          ['AUC', 'Area under the concentration-time curve (systemic exposure)'],
          ['Clearance', 'Volume of plasma cleared per unit time'],
          ['Half-life', 'Time for concentration to fall by 50%'],
          ['Volume of distribution', 'Theoretical volume relating body amount to plasma concentration'],
          ['Calvert dose', 'Target AUC x (GFR + 25), expressed in mg'],
        ],
      },
      pearls: [
        'Golden Pearl: carboplatin dose (mg) = target AUC x (GFR + 25).',
        'AUC measures exposure, not peak concentration.',
        'The 25 in the Calvert formula represents non-renal clearance.',
      ],
      trap: {
        title: 'Examiner trap - dosing carboplatin by body surface area or an unverified creatinine estimate',
        body: 'Carboplatin is dosed to a target AUC using an accepted GFR method and the Calvert formula. An arbitrary mg/m2 dose or an unverified creatinine estimate can cause under- or overexposure and severe myelosuppression.',
      },
      traps: [
        {
          title: '• Writing the Calvert dose in mg/m2.',
        },
        {
          title: '• Confusing AUC with Cmax.',
        },
        {
          title: '• Using a creatinine estimate the institution has not validated for dosing.',
        },
      ],
    },
    {
      id: 'modern-radiotherapy',
      heading: 'Modern Radiotherapy in Gynaecological Cancer',
      intro:
        'Modern radiotherapy separates four ideas that are easy to blur: shaping dose (IMRT), boosting a subvolume in the same fractions (SIB), verifying position (IGRT), changing the plan as anatomy changes (adaptive RT), and delivering very high dose per fraction with extreme precision (SBRT). MR-Linac adds MRI guidance and online adaptation.',
      flow: [
        'IMRT shapes dose around the target while reducing organs-at-risk dose',
        'SIB delivers a higher dose to a subvolume in the same treatment fractions',
        'IGRT verifies patient setup and target position at or near each session',
        'Adaptive RT re-plans when anatomy changes during the course',
        'SBRT delivers high dose per fraction in few fractions with high precision',
        'MR-Linac integrates MRI with a linear accelerator for online visualisation',
        'Each platform still depends on good planning, immobilisation and organ-at-risk constraints',
      ],
      bullets: [
        'IMRT: multiple beamlets with varying intensity shape dose around the target while reducing dose to organs at risk such as bowel, bladder, rectum, kidneys and bone marrow.',
        'IMRT Toxicity: can reduce toxicity compared with less conformal techniques in suitable settings.',
        'SIB: a higher dose per fraction is delivered to a selected subvolume while a lower dose is delivered to the broader target during the same fractions.',
        'SIB Planning: planned into the IMRT/VMAT dose distribution rather than delivered as a separate sequential boost.',
        'IGRT: imaging at or near each treatment session verifies patient setup and target position.',
        'IGRT Modalities: cone-beam CT, kV imaging, ultrasound or other systems according to the machine and site.',
        'IGRT Limit: reduces geometric uncertainty but does not eliminate the need for good planning and immobilisation.',
        'Adaptive RT: re-plans or modifies treatment when anatomy changes, such as tumour regression, bladder/rectal filling, weight loss or organ movement.',
        'Adaptive Timing: online during the session or offline between sessions.',
        'SBRT/SABR: high dose per fraction in a small number of fractions with high geometric precision.',
        'SBRT Requirements: careful immobilisation, image guidance and motion management.',
        'SBRT Use: selected oligometastatic, recurrent or small-volume targets; not appropriate for every pelvic tumour or organ-at-risk geometry.',
        'MR-Linac: integrates magnetic resonance imaging with a linear accelerator.',
        'MR-Linac Advantage: high soft-tissue contrast and online visualisation of target and nearby organs during treatment.',
        'MR-Linac Adaptation: can support online adaptive replanning and gating/tracking in selected cases.',
        'MR-Linac Caveat: it is a specialised platform; it does not make every treatment automatically more effective, and planning and organ-at-risk constraints still apply.',
      ],
      table: {
        head: ['Technique', 'Core idea', 'Key exam point'],
        rows: [
          ['IMRT', 'Intensity-modulated beamlets shape dose', 'Target coverage with lower organ-at-risk dose'],
          ['SIB', 'Different dose per fraction to subvolumes', 'Boost in the same fractions, not sequential'],
          ['IGRT', 'Imaging at treatment to verify position', 'Reduces geometric uncertainty; planning still matters'],
          ['Adaptive RT', 'Re-plan when anatomy changes', 'Online or offline adaptation'],
          ['SBRT/SABR', 'High dose per fraction, few fractions', 'Precision, immobilisation and motion management'],
          ['MR-Linac', 'MRI plus linear accelerator', 'Soft-tissue guidance and online adaptation'],
        ],
      },
      pearls: [
        'Golden Pearl: IMRT modulates dose intensity; SIB delivers a higher dose to a subvolume in the same fractions.',
        'IGRT verifies position; adaptive RT changes the plan; SBRT is highly precise high-dose treatment.',
        'MR-Linac adds MRI guidance and online adaptation, not automatic superiority.',
      ],
      trap: {
        title: 'Examiner trap - confusing SIB with a sequential boost',
        body: 'SIB is planned into the same IMRT/VMAT fractions, with a higher dose per fraction to a selected subvolume. A sequential boost is delivered as a separate later phase.',
      },
      traps: [
        {
          title: '• Describing IGRT as a re-planning technique.',
        },
        {
          title: '• Offering SBRT to every pelvic tumour.',
        },
        {
          title: '• Assuming MR-Linac removes the need for organ-at-risk constraints.',
        },
      ],
    },
    {
      id: 'last-minute-pearls-and-examiner-traps',
      heading: 'Last-Minute Examination Pearls & Examiner Traps',
      intro: 'Twenty-four rapid-fire points to lock in before the exam.',
      pearls: [
        'Major bleeding: direct pressure, call for vascular help, controlled exposure and proximal/distal control.',
        'Avoid blind clamping in the retroperitoneum.',
        'IVC injury can cause rapid life-threatening haemorrhage.',
        'Lymphocele: postoperative lymphatic collection; treat only if symptomatic, compressive, infected or persistent.',
        'A lymphocele can cause hydronephrosis or iliac vein compression.',
        'Chylous ascites: milky fluid; triglyceride above about 200 mg/dL is a diagnostic clue.',
        'MCTs are absorbed into the portal circulation, bypassing intestinal lymphatics.',
        'The triglyceride threshold is not an intervention threshold.',
        'Pelvic abscess: antibiotics plus source control; size alone does not dictate management.',
        'The 2 cm and 7 cm abscess bands are memory aids, not universal rules.',
        'A watery vaginal leak after pelvic surgery suggests ureteric injury.',
        'Thermal bowel injury may present late.',
        'Bricker conduit: isolated distal ileal segment with ileo-ileal continuity and a stoma appliance.',
        'The Bricker conduit is incontinent and can cause metabolic acidosis.',
        'ERAS fasting: clear fluids 2 hours, light meal 6 hours in suitable elective patients.',
        'ERAS is a whole pathway, not merely short fasting.',
        'GPS and mGPS use CRP and albumin but handle isolated low albumin differently.',
        'Low albumin alone: GPS 1, mGPS 0.',
        'Carboplatin dose (mg) = target AUC x (GFR + 25).',
        'The Calvert dose is in mg, not mg/m2.',
        'IMRT modulates dose intensity around the target.',
        'SIB boosts a subvolume in the same fractions.',
        'IGRT verifies position; adaptive RT changes the plan.',
        'SBRT is precise high-dose treatment; MR-Linac adds MRI guidance.',
      ],
      traps: [
        {
          title: '• Blind clamping in a pelvic haematoma.',
        },
        {
          title: '• Draining every asymptomatic lymphocele.',
        },
        {
          title: '• Treating cloudy drain fluid as chylous without excluding leak or infection.',
        },
        {
          title: '• Using abscess size as the sole management criterion.',
        },
        {
          title: '• Missing a ureteric injury after a watery vaginal leak.',
        },
        {
          title: '• Calling the Bricker conduit continent.',
        },
        {
          title: '• Applying routine fasting rules to an obstructed or high-risk patient.',
        },
        {
          title: '• Mixing conventional GPS with mGPS.',
        },
        {
          title: '• Dosing carboplatin in mg/m2.',
        },
        {
          title: '• Confusing SIB with a sequential boost.',
        },
        {
          title: '• Treating IGRT as adaptive replanning.',
        },
        {
          title: '• Assuming MR-Linac guarantees better outcomes.',
        },
      ],
    },
  ],

  flashcards: [
    {
      id: 'm22-f1',
      front: 'What is the immediate first step in a major pelvic vascular injury?',
      back: 'Announce the injury, call for senior surgical, anaesthetic and vascular help, and apply direct pressure with a swab or atraumatic vascular sponge. Avoid blind clamping.',
    },
    {
      id: 'm22-f2',
      front: 'Why is blind clamping dangerous in the retroperitoneum?',
      back: 'The ureter, iliac artery, iliac vein and nerves lie close together. Blind clamping can cause ureteric, arterial or venous injury. Obtain controlled proximal and distal exposure instead.',
    },
    {
      id: 'm22-f3',
      front: 'When does a lymphocele need intervention?',
      back: 'When it is symptomatic, enlarging, compressive, infected or persistent. Small asymptomatic collections are observed.',
    },
    {
      id: 'm22-f4',
      front: 'What fluid triglyceride level supports chylous ascites?',
      back: 'Above approximately 200 mg/dL is a commonly used diagnostic threshold, interpreted with the laboratory method and clinical picture. It is a clue, not an intervention threshold.',
    },
    {
      id: 'm22-f5',
      front: 'Why are medium-chain triglycerides used in chylous ascites?',
      back: 'MCTs are absorbed predominantly into the portal circulation rather than intestinal lymphatics, reducing chylous flow.',
    },
    {
      id: 'm22-f6',
      front: 'What are the management priorities in a pelvic abscess?',
      back: 'Prompt empiric IV antibiotics in sepsis, then culture-directed therapy, plus source control by image-guided drainage or surgery when a drainable collection, leak or uncontrolled sepsis is present.',
    },
    {
      id: 'm22-f7',
      front: 'Which nerve injuries can follow lower pelvic surgery, and what symptoms do they cause?',
      back: 'Genitofemoral, ilioinguinal and iliohypogastric injuries can cause burning pain, dysaesthesia, numbness or radiating pain over the groin, labia, suprapubic area or upper medial thigh.',
    },
    {
      id: 'm22-f8',
      front: 'What is the basic construction of a Bricker ileal conduit?',
      back: 'A 15-20 cm distal ileal segment is isolated, bowel continuity is restored by ileo-ileal anastomosis, ureters are implanted into the segment, and the distal end forms an incontinent stoma.',
    },
    {
      id: 'm22-f9',
      front: 'State the typical ERAS fasting intervals for elective adults.',
      back: 'Clear fluids until 2 hours before anaesthesia; a light meal or non-human milk at least 6 hours; fatty, fried or meat-containing meals 8 hours or longer. Individualise high-risk patients.',
    },
    {
      id: 'm22-f10',
      front: 'How does conventional GPS differ from mGPS when CRP is normal and albumin is low?',
      back: 'Conventional GPS scores 1 (one abnormality). mGPS scores 0 because albumin is ignored when CRP is 10 mg/L or lower.',
    },
    {
      id: 'm22-f11',
      front: 'Write the Calvert formula for carboplatin.',
      back: 'Carboplatin dose (mg) = target AUC x (GFR + 25). Use an accepted GFR method and institutional dose-cap rules; the dose is in mg, not mg/m2.',
    },
    {
      id: 'm22-f12',
      front: 'What does AUC represent, and how does it differ from Cmax?',
      back: 'AUC is the area under the plasma concentration-time curve, representing systemic exposure over time. Cmax is the maximum plasma concentration.',
    },
    {
      id: 'm22-f13',
      front: 'What is the difference between IMRT and SIB?',
      back: 'IMRT uses multiple beamlets of varying intensity to shape dose around the target. SIB delivers a higher dose per fraction to a selected subvolume within the same IMRT/VMAT fractions, rather than as a separate sequential boost.',
    },
    {
      id: 'm22-f14',
      front: 'What does IGRT do, and what does it not do?',
      back: 'IGRT verifies patient setup and target position at or near each treatment using cone-beam CT, kV imaging, ultrasound or other systems. It reduces geometric uncertainty but does not replace good planning and immobilisation.',
    },
    {
      id: 'm22-f15',
      front: 'What is the role of SBRT and MR-Linac in gynaecological oncology?',
      back: 'SBRT delivers high dose per fraction in few fractions with high precision for selected oligometastatic, recurrent or small-volume targets. MR-Linac adds MRI guidance and online adaptive replanning in selected cases.',
    },
  ],

  mcqs: [
    {
      id: 'm22-q1',
      stem: 'During pelvic lymphadenectomy, a sudden profuse bleed occurs from the retroperitoneum. What is the most appropriate immediate action?',
      options: [
        'Blindly clamp the bleeding point and continue dissection',
        'Apply direct pressure, call for senior and vascular help, and obtain controlled proximal/distal exposure',
        'Pack the abdomen and transfer to the ward',
        'Start systemic thrombolysis',
      ],
      answerIndex: 1,
      explanation:
        'The immediate response is to announce the injury, call for senior surgical, anaesthetic and vascular help, apply direct pressure with a swab or atraumatic vascular sponge, and obtain controlled proximal and distal vascular control. Blind clamping risks ureteric, arterial and nerve injury.',
    },
    {
      id: 'm22-q2',
      stem: 'A woman develops a 5 cm pelvic fluid collection after lymphadenectomy. She is afebrile, asymptomatic and has normal renal function. What is the best initial management?',
      options: [
        'Immediate open surgical drainage',
        'Observation with clinical follow-up',
        'Systemic chemotherapy',
        'Bilateral ureteric stenting',
      ],
      answerIndex: 1,
      explanation:
        'Small, asymptomatic lymphoceles are observed. Intervention is reserved for symptomatic, enlarging, compressive, infected or persistent collections.',
    },
    {
      id: 'm22-q3',
      stem: 'A postoperative drain produces milky fluid. Which finding best supports chylous ascites?',
      options: [
        'Fluid triglyceride above about 200 mg/dL',
        'Fluid creatinine equal to serum creatinine',
        'Positive urine culture',
        'Fluid bilirubin above serum bilirubin',
      ],
      answerIndex: 0,
      explanation:
        'A drain-fluid triglyceride above approximately 200 mg/dL is a commonly used diagnostic threshold for chylous ascites. Fluid creatinine equal to serum suggests a urinoma; bilirubin suggests a biliary/enteric leak.',
    },
    {
      id: 'm22-q4',
      stem: 'A patient with a pelvic abscess is septic with a 4 cm collection. What is the most appropriate principle of management?',
      options: [
        'Antibiotics alone because the collection is under 7 cm',
        'Antibiotics plus source control, with image-guided drainage if accessible',
        'Observation until the collection exceeds 7 cm',
        'Immediate radiotherapy',
      ],
      answerIndex: 1,
      explanation:
        'Sepsis and a drainable collection require prompt antibiotics plus source control. The 2 cm and 7 cm bands are memory aids; clinical stability, accessibility and response determine management.',
    },
    {
      id: 'm22-q5',
      stem: 'Which statement about a Bricker ileal conduit is correct?',
      options: [
        'It provides voluntary urinary continence',
        'It uses an isolated distal ileal segment with ureters implanted and an external stoma appliance',
        'It uses the sigmoid colon and avoids a stoma',
        'It requires bilateral nephrostomies permanently',
      ],
      answerIndex: 1,
      explanation:
        'A Bricker conduit is an incontinent diversion using an isolated distal ileal segment (about 15-20 cm). Ureters are implanted into it, bowel continuity is restored, and urine drains continuously into an external appliance.',
    },
    {
      id: 'm22-q6',
      stem: 'In an elective adult with no aspiration risk, what is the standard ERAS clear-fluid fasting interval?',
      options: ['2 hours', '4 hours', '6 hours', '8 hours'],
      answerIndex: 0,
      explanation:
        'Clear fluids may generally be allowed until 2 hours before anaesthesia. A light meal or non-human milk needs at least 6 hours, and fatty/meat meals may need 8 hours or longer.',
    },
    {
      id: 'm22-q7',
      stem: 'A patient has CRP of 5 mg/L and albumin of 30 g/L. What are the conventional GPS and mGPS scores?',
      options: [
        'GPS 0, mGPS 0',
        'GPS 1, mGPS 0',
        'GPS 1, mGPS 1',
        'GPS 2, mGPS 2',
      ],
      answerIndex: 1,
      explanation:
        'Conventional GPS scores 1 because albumin is below 35 g/L even though CRP is normal. mGPS scores 0 because albumin is ignored when CRP is 10 mg/L or lower.',
    },
    {
      id: 'm22-q8',
      stem: 'Using the Calvert formula, what is the carboplatin dose for a target AUC of 5 and a GFR of 60 mL/min?',
      options: ['300 mg', '425 mg', '500 mg', '600 mg'],
      answerIndex: 1,
      explanation:
        'Dose = target AUC x (GFR + 25) = 5 x (60 + 25) = 5 x 85 = 425 mg. The result is expressed in mg, not mg/m2.',
    },
    {
      id: 'm22-q9',
      stem: 'Which radiotherapy technique delivers a higher dose per fraction to a selected subvolume during the same treatment fractions as the broader target?',
      options: ['Sequential boost', 'Simultaneous integrated boost (SIB)', 'IGRT', 'Brachytherapy alone'],
      answerIndex: 1,
      explanation:
        'SIB is planned into the IMRT/VMAT distribution and delivers a higher dose per fraction to a subvolume while the broader target receives a lower dose, all in the same fractions. A sequential boost is a separate later phase.',
    },
    {
      id: 'm22-q10',
      stem: 'Which statement about MR-Linac is correct?',
      options: [
        'It eliminates the need for organ-at-risk constraints',
        'It integrates MRI with a linear accelerator and can support online adaptive replanning',
        'It is a form of brachytherapy',
        'It delivers treatment without image guidance',
      ],
      answerIndex: 1,
      explanation:
        'MR-Linac integrates MRI with a linear accelerator, providing high soft-tissue contrast and online visualisation, and can support online adaptive replanning and gating/tracking. It does not remove the need for planning and organ-at-risk constraints.',
    },
  ],
};
