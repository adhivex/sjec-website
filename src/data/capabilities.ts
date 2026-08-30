import type { CapabilityItem } from '../types';

export const CAPABILITIES: CapabilityItem[] = [
  // LIFTING & HANDLING
  {
    name: "Hydra 20 MT Crane",
    category: "lifting",
    categoryLabel: "Lifting & Handling",
    description: "20 Metric Ton heavy-duty hydraulic crane for large transformer placement, switchgear positioning, and high-level structural erection.",
    application: "Heavy electrical substation and drive unit rigging"
  },
  {
    name: "Hydra 12 MT Crane",
    category: "lifting",
    categoryLabel: "Lifting & Handling",
    description: "12 Metric Ton hydraulic mobile crane for versatile equipment handling, high mast pole raising, and cable drum positioning.",
    application: "Material offloading, cable tray erection, and panel placement"
  },
  {
    name: "JCB Excavator / Loader",
    category: "lifting",
    categoryLabel: "Lifting & Handling",
    description: "Earthmoving and site preparation machinery for underground cable trench excavation and substation yard civil readiness.",
    application: "Underground cable trenching and earth pit preparation"
  },
  {
    name: "Industrial Chain Blocks & Pulley Systems",
    category: "lifting",
    categoryLabel: "Lifting & Handling",
    description: "Heavy capacity geared chain pulley blocks for millimeter-precise alignment in confined electrical room spaces.",
    application: "MCC panel maneuvering and transformer positioning"
  },
  {
    name: "Certified Lifting Belts, Slings & D-Shackles",
    category: "lifting",
    categoryLabel: "Lifting & Handling",
    description: "Proof-load certified synthetic webbing slings, steel wire slings, and alloy steel D-shackles adhering to safety standards.",
    application: "Damage-free rigging of sensitive electrical switchgear"
  },

  // ELECTRICAL TESTING
  {
    name: "1000V High Voltage Megger",
    category: "testing",
    categoryLabel: "Electrical Testing",
    description: "Precision insulation resistance testing instrument for high-voltage power cables, HT switchgear, and step-up transformers.",
    application: "Pre-commissioning HT insulation verification"
  },
  {
    name: "500V Low Voltage Megger",
    category: "testing",
    categoryLabel: "Electrical Testing",
    description: "Insulation testing equipment for LT power feeders, control circuitry, and distribution boards.",
    application: "LT feeder and motor winding insulation measurement"
  },
  {
    name: "Digital Multimeters & Clamp Meters",
    category: "testing",
    categoryLabel: "Electrical Testing",
    description: "High-precision digital meters for AC/DC voltage, current, resistance, capacitance, and frequency measurement.",
    application: "Panel troubleshooting and phase parameter validation"
  },
  {
    name: "Electrical Continuity Testers",
    category: "testing",
    categoryLabel: "Electrical Testing",
    description: "Specialized point-to-point continuity buzzers and test leads for high-density marshalling and cable core verification.",
    application: "Instrumentation loop check and control wiring validation"
  },

  // FABRICATION
  {
    name: "Industrial Welding Rectifiers",
    category: "fabrication",
    categoryLabel: "Fabrication",
    description: "Heavy-duty DC welding machines for robust structural welding, tray bracket fabrication, and earth grid bonding.",
    application: "Cable tray support structures and structural earthing"
  },
  {
    name: "Chopping & Cutting Equipment",
    category: "fabrication",
    categoryLabel: "Fabrication",
    description: "High-torque abrasive chop saws and motorized metal cutting units for rapid steel angle, channel, and tray sizing.",
    application: "Structural tray fabrication and on-site support modification"
  },
  {
    name: "Angle Grinders & Surface Preparation Sets",
    category: "fabrication",
    categoryLabel: "Fabrication",
    description: "Variable-speed electric grinding machines for weld de-burring, edge smoothing, and galvanization prep.",
    application: "Weld cleanup, plate beveling, and tray edge deburring"
  },

  // CABLE INSTALLATION
  {
    name: "Hydraulic Crimping Tools",
    category: "cable",
    categoryLabel: "Cable Installation",
    description: "High-pressure hydraulic crimping heads for heavy gauge copper and aluminum cable lugs up to 630 sq.mm.",
    application: "HT/LT power cable terminal compression"
  },
  {
    name: "Manual Ratchet Crimpers",
    category: "cable",
    categoryLabel: "Cable Installation",
    description: "Precision calibrated ratchet hand tools for control cable pin, ring, and fork lug terminations.",
    application: "Control cabinet and instrumentation terminations"
  },
  {
    name: "Industrial Wire Strippers & Cable Cutters",
    category: "cable",
    categoryLabel: "Cable Installation",
    description: "Specialized sheath stripping tools and armored cable ratcheting shears ensuring core conductor integrity.",
    application: "Damage-free multi-core cable peeling and glanding"
  },
  {
    name: "Automated Electronic Ferrule Printing Machines",
    category: "cable",
    categoryLabel: "Cable Installation",
    description: "Microprocessor-controlled thermal transfer marker printers for indelible wire and cable core identification sleeves.",
    application: "Standardized panel wiring numbering and DCS I/O mapping"
  },

  // SITE EQUIPMENT
  {
    name: "Heavy-Duty Hammer Drills",
    category: "site",
    categoryLabel: "Site Equipment",
    description: "Pneumatic rotary hammer drills for concrete anchor fastening, wall penetrations, and tray bracket anchoring.",
    application: "Concrete foundation anchor bolting"
  },
  {
    name: "Precision Stand & Magnetic Drills",
    category: "site",
    categoryLabel: "Site Equipment",
    description: "Magnetic base core drill presses for accurate hole cutting in structural steel beams and thick busbars.",
    application: "On-site structural steel hole drilling and busbar punching"
  },
  {
    name: "Manual Drills & Hand Tools",
    category: "site",
    categoryLabel: "Site Equipment",
    description: "Comprehensive sets of industrial spanners, torque wrenches, socket sets, and insulated electricians' tools.",
    application: "Equipment bolting and mechanical torque adherence"
  },
  {
    name: "Industrial High-Volume Air Blowers",
    category: "site",
    categoryLabel: "Site Equipment",
    description: "High-velocity electric blowers and suction cleaners for switchgear room de-dusting and conduit clearing.",
    application: "Panel de-dusting prior to energization and commissioning"
  },

  // SAFETY & HANDLING
  {
    name: "HT High Voltage Protective Gloves",
    category: "safety",
    categoryLabel: "Safety & Handling",
    description: "Dielectric insulating rubber safety gloves tested for high-voltage operational safety and live terminal work.",
    application: "HT substation testing and energized switchyard safety"
  },
  {
    name: "Comprehensive Site PPE Sets",
    category: "safety",
    categoryLabel: "Safety & Handling",
    description: "Industrial safety helmets, high-visibility reflective vests, steel-toe electrical hazard safety footwear, and eye protection.",
    application: "Mandatory site-wide workforce protection"
  }
];

export const CAPABILITY_CATEGORIES = [
  { key: 'all', label: 'All Equipment' },
  { key: 'lifting', label: 'Lifting & Handling' },
  { key: 'testing', label: 'Electrical Testing' },
  { key: 'fabrication', label: 'Fabrication' },
  { key: 'cable', label: 'Cable Installation' },
  { key: 'site', label: 'Site Equipment' },
  { key: 'safety', label: 'Safety & Handling' },
];
