import type { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "High Voltage Power Transformer Erection",
    category: "ELECTRICAL",
    location: "Industrial Substation Site",
    description: "Rigging, positioning, and bushing installation for heavy step-up power transformer with precision oil filtration setup.",
    image: "/images/hero-substation.jpg"
  },
  {
    id: "gal-2",
    title: "DRI Kiln MCC & Control Panel Room",
    category: "PANEL ROOMS",
    location: "500 TPD DRI Plant",
    description: "Complete Motor Control Center (MCC) lineup with compartmentalized feeder breakers and busbar trunking.",
    image: "/images/panel-room-mcc.jpg"
  },
  {
    id: "gal-3",
    title: "Heavy Duty Multi-Tier Cable Tray Routing",
    category: "CABLE & TRAY",
    location: "Cement Plant Pipe Rack",
    description: "Perforated and ladder-type galvanized cable trays carrying segregated HT, LT, and control cable banks across plant structures.",
    image: "/images/cable-tray-install.jpg"
  },
  {
    id: "gal-4",
    title: "Vertical Roller Mill (VRM) Drive Electricals",
    category: "PLANT EXECUTION",
    location: "Cement Grinding Facility",
    description: "Large medium-voltage slip-ring motor cabling, liquid resistance starter hookup, and auxiliary lube system instrumentation.",
    image: "/images/plant-cement-mill.jpg"
  },
  {
    id: "gal-5",
    title: "Automated Robo Lab & Quality Analyzer System",
    category: "INSTRUMENTATION",
    location: "Cement Works Quality Lab",
    description: "Robotic sample handling automation, pneumatic sample tube routing, and DCS analyzer interface wiring.",
    image: "/images/hero-bg-plant.jpg"
  },
  {
    id: "gal-6",
    title: "Direct Reduced Iron (DRI) Rotary Kiln Electrification",
    category: "PLANT EXECUTION",
    location: "500 TPD DRI Site",
    description: "Rotary kiln main and auxiliary drive motor cabling, ESP transformer-rectifier controls, and off-gas instrumentation.",
    image: "/images/plant-steel-dri.jpg"
  },
  {
    id: "gal-7",
    title: "Cement Silo & Pre-Heater Tower Cable Laying",
    category: "CABLE & TRAY",
    location: "Kaplish Cement Works",
    description: "Vertical cable riser installation with heavy-duty cleats and vibration-proof stainless steel strapping up to 80m elevation.",
    image: "/images/cable-tray-install.jpg"
  },
  {
    id: "gal-8",
    title: "Plant Energization & Dielectric Safety Protocol",
    category: "SAFETY",
    location: "Substation Yard",
    description: "Engineers conducting 1000V Megger insulation testing with calibrated PPE, safety barricades, and lock-out permits.",
    image: "/images/hero-substation.jpg"
  },
  {
    id: "gal-9",
    title: "Marshalling Cabinet & PLC Loop Termination",
    category: "INSTRUMENTATION",
    location: "Pellet Plant Control Room",
    description: "High-density terminal block dressing with thermal transfer printed ferrules and screened instrumentation signal cables.",
    image: "/images/panel-room-mcc.jpg"
  },
  {
    id: "gal-10",
    title: "Power Control Center (PCC) Air Circuit Breakers",
    category: "PANEL ROOMS",
    location: "Rolling Mill Substation",
    description: "415V 4000A draw-out Air Circuit Breaker (ACB) testing, busbar torque verification, and trip relay calibration.",
    image: "/images/panel-room-mcc.jpg"
  },
  {
    id: "gal-11",
    title: "HT 33kV Cable Glanding & Heat-Shrink Kits",
    category: "ELECTRICAL",
    location: "Captive Substation Yard",
    description: "Cross-linked polyethylene (XLPE) 33kV armored cable end termination using certified stress-control heat shrink boots.",
    image: "/images/hero-substation.jpg"
  },
  {
    id: "gal-12",
    title: "Daily Site Safety Briefing & Zero Harm Protocols",
    category: "SAFETY",
    location: "DRI Project Site",
    description: "Pre-shift toolbox talk covering crane lifting radius clearance, confined space procedures, and high-voltage line safety.",
    image: "/images/hero-bg-plant.jpg"
  }
];

export const GALLERY_CATEGORIES = [
  'ALL',
  'ELECTRICAL',
  'INSTRUMENTATION',
  'CABLE & TRAY',
  'PANEL ROOMS',
  'PLANT EXECUTION',
  'SAFETY'
] as const;
