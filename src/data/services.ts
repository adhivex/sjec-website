import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: "electrical",
    slug: "electrical",
    title: "Electrical Engineering",
    shortDesc: "Comprehensive HT/LT electrical erection, transformer installation, panel rooms, cable systems, and equipment commissioning.",
    fullDesc: "SJEC delivers end-to-end industrial electrical engineering solutions tailored for heavy process plants. Our capabilities range from high-voltage switchyard equipment and power transformers to motor control centers (MCC), HT/LT cable networks, and final testing & commissioning under stringent quality standards.",
    iconName: "Zap",
    capabilities: [
      "Electrical erection and commissioning",
      "HT/LT panel installation and integration",
      "Installation of electrical equipment including power transformers and generators",
      "Cable tray fabrication and support installation",
      "HT/LT cable laying, megger testing, and termination",
      "LT/HT motor testing and commissioning",
      "Street-light and high mast pole erection",
      "Specialized electrical manpower deployment"
    ],
    executionHighlights: [
      "Turnkey Substation & Transformer Erection (up to 33kV / 132kV auxiliary)",
      "Motor Control Center (MCC) & Power Control Center (PCC) Panel Setup",
      "Megger Insulation Resistance Testing & Phase Balancing",
      "High-precision cable glanding and ferrule identification"
    ],
    image: "/images/hero-substation.jpg"
  },
  {
    id: "instrumentation",
    slug: "instrumentation",
    title: "Instrumentation",
    shortDesc: "Precision instrument erection, multi-parameter calibration, loop testing, field sensor integration, and instrument panels.",
    fullDesc: "Our instrumentation division provides complete lifecycle support for process measurement, control loops, and field instrumentation in complex industrial environments. We ensure that every sensor, transmitter, control valve, and analyzer is installed, tubed, wired, and calibrated to exact process tolerances.",
    iconName: "Sliders",
    capabilities: [
      "Instrument panel erection and commissioning",
      "Multi-parameter field instrument calibration",
      "Field instrument erection and mechanical impulse piping",
      "PLC system installation, wiring, and commissioning",
      "Lab automation and analyzer setup",
      "Complete Robo Lab erection and integration work",
      "Dedicated instrument cable tray installation",
      "Signal cable laying, shielding, and termination",
      "Skilled and technical instrumentation manpower supply"
    ],
    executionHighlights: [
      "Complete Process Loop Checking & Signal Validation",
      "Transmitter, RTD, Thermocouple, and Pressure Gauge Calibration",
      "Instrument Air Header & Stainless Steel Impulse Line Hookup",
      "Distributed I/O Rack Termination & Shield Grounding"
    ],
    image: "/images/panel-room-mcc.jpg"
  },
  {
    id: "erection-commissioning",
    slug: "erection-commissioning",
    title: "Erection & Commissioning",
    shortDesc: "Heavy industrial equipment placement, alignment, cold & hot testing, and turnkey commissioning for plant units.",
    fullDesc: "We provide structured erection and commissioning services for critical plant machinery including kilns, vertical roller mills (VRM), material handling drives, power distribution units, and high-mast lighting installations. Our engineering protocols guarantee safe rigging, accurate alignment, and seamless system startup.",
    iconName: "Cog",
    capabilities: [
      "Heavy equipment rigging, lifting, and placement (Hydra 12 MT & 20 MT)",
      "Power transformer, generator, and auxiliary system erection",
      "Drive unit and LT/HT motor alignment and dry run testing",
      "Substation switchgear placement and bus duct installation",
      "High mast illumination towers and street light pole erection",
      "Cold no-load testing and hot load commissioning assistance",
      "Pre-commissioning checklist verification and safety signoffs"
    ],
    executionHighlights: [
      "Rigorous Lifting Plans & Multi-ton Hydra Crane Execution",
      "Precision Motor-Pump & Motor-Gearbox Shaft Alignment",
      "Substation Switchgear Interlock & Protection Relay Checks",
      "Zero-downtime cutover and hot commissioning supervision"
    ],
    image: "/images/plant-cement-mill.jpg"
  },
  {
    id: "cable-systems",
    slug: "cable-systems",
    title: "Cable Systems",
    shortDesc: "Engineered cable tray fabrication, heavy HT/LT cable pulling, ladder routing, dressing, and terminal connections.",
    fullDesc: "SJEC manages high-volume cable system installations across complex industrial layouts. From fabricating custom perforated and ladder-type cable trays to pulling high-tension power cables through underground trenches, pipe racks, and overhead structures, our teams maintain strict bend radiuses and clean dressing.",
    iconName: "Layers",
    capabilities: [
      "Perforated and ladder-type cable tray fabrication on site",
      "Structural cable tray support erection and galvanization touchups",
      "HT/LT power cable pulling and secure clamping",
      "Control and instrumentation shielded cable routing",
      "Hydraulic crimping and heavy-duty terminal lugging",
      "Automated ferrule printing and wire identification",
      "High-voltage Megger insulation and continuity testing"
    ],
    executionHighlights: [
      "Thousands of meters of cable laid across Kiln, Silo, and Mill sections",
      "Segregation of HT, LT, Control, and Signal conduits for EMI mitigation",
      "Standardized heat-shrink and cold-shrink termination kits",
      "Robust fire-stop and penetration sealing at switchroom entries"
    ],
    image: "/images/cable-tray-install.jpg"
  },
  {
    id: "automation-plc",
    slug: "automation-plc",
    title: "Automation & PLC",
    shortDesc: "PLC cabinet installation, automated laboratory systems, Robo Lab erection, and SCADA process integration.",
    fullDesc: "Modern industrial plants rely on automated process management to maximize yield and safety. SJEC excels in the physical erection, marshalling, wiring, and loop commissioning of programmable logic controllers (PLC), remote I/O modules, and specialized robotic laboratory facilities.",
    iconName: "Cpu",
    capabilities: [
      "PLC panel and marshalling rack erection",
      "Complete Robo Lab mechanical & electrical erection work",
      "Laboratory automated sample transport & analyzer integration",
      "Field bus, Profibus, Modbus, and Ethernet industrial cabling",
      "Signal loop checking and point-to-point verification",
      "Control desk and SCADA workstation installation",
      "Interposing relay logic and emergency shutdown wiring"
    ],
    executionHighlights: [
      "Full Robo Lab Setup for automated quality sampling in cement plants",
      "Marshalling cabinet cross-wiring with ferrule precision",
      "Loop testing from field transmitters to central DCS/PLC I/O cards",
      "Uninterruptible Power Supply (UPS) control power integration"
    ],
    image: "/images/panel-room-mcc.jpg"
  },
  {
    id: "industrial-manpower",
    slug: "industrial-manpower",
    title: "Industrial Manpower",
    shortDesc: "Deployment of qualified electrical supervisors, certified cable jointers, instrument technicians, and skilled riggers.",
    fullDesc: "Having the right technical talent on the job site is paramount to timely project handover. SJEC deploys certified, site-tested electrical and instrumentation personnel capable of executing tasks under strict safety protocols and technical supervisor guidance.",
    iconName: "Users",
    capabilities: [
      "Qualified Electrical Project Managers & Site-in-Charge engineers",
      "Certified HT/LT Cable Jointers and Termination Specialists",
      "Skilled Instrument Calibration & Loop Testing Technicians",
      "Experienced Panel Fitters, Fabricators, and Certified Welders",
      "Industrial Riggers and Heavy Lifting Equipment Operators",
      "Trained safety supervisors and Zero Harm compliance stewards",
      "Scalable manpower deployment for planned plant shutdowns"
    ],
    executionHighlights: [
      "Rapid mobilization for plant shutdown maintenance and revamping",
      "All technicians trained in industrial PPE and site electrical hazards",
      "Continuous on-site supervision by AMIE / B.Tech qualified managers",
      "Strict adherence to statutory safety and welfare standards"
    ],
    image: "/images/plant-steel-dri.jpg"
  }
];
