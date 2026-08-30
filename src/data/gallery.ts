import type { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "High Voltage Power Transformer Erection",
    category: "ELECTRICAL",
    location: "Industrial Substation Site",
    description: "Rigging, positioning, and bushing installation for heavy step-up power transformer with precision oil filtration setup.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-2",
    title: "DRI Kiln MCC & Control Panel Room",
    category: "PANEL ROOMS",
    location: "500 TPD DRI Plant",
    description: "Complete Motor Control Center (MCC) lineup with compartmentalized feeder breakers and busbar trunking.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-3",
    title: "Heavy Duty Multi-Tier Cable Tray Routing",
    category: "CABLE & TRAY",
    location: "Cement Plant Pipe Rack",
    description: "Perforated and ladder-type galvanized cable trays carrying segregated HT, LT, and control cable banks across plant structures.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-4",
    title: "Vertical Roller Mill (VRM) Drive Electricals",
    category: "PLANT EXECUTION",
    location: "Cement Grinding Facility",
    description: "Large medium-voltage slip-ring motor cabling, liquid resistance starter hookup, and auxiliary lube system instrumentation.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-5",
    title: "Automated Robo Lab & Quality Analyzer System",
    category: "INSTRUMENTATION",
    location: "Cement Works Quality Lab",
    description: "Robotic sample handling automation, pneumatic sample tube routing, and DCS analyzer interface wiring.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-6",
    title: "High Mast Illumination Pole Erection",
    category: "PLANT EXECUTION",
    location: "Industrial Raw Material Yard",
    description: "30-meter motorized lowering-head high mast lighting tower foundation anchoring, head-gear winch rigging, and floodlight wiring.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-7",
    title: "Cement Silo & Pre-Heater Tower Cable Laying",
    category: "CABLE & TRAY",
    location: "Kaplish Cement Works",
    description: "Vertical cable riser installation with heavy-duty cleats and vibration-proof stainless steel strapping up to 80m elevation.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-8",
    title: "Plant Energization & Dielectric Safety Protocol",
    category: "SAFETY",
    location: "Substation Yard",
    description: "Engineers conducting 1000V Megger insulation testing with calibrated PPE, safety barricades, and lock-out permits.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-9",
    title: "Marshalling Cabinet & PLC Loop Termination",
    category: "INSTRUMENTATION",
    location: "Pellet Plant Control Room",
    description: "High-density terminal block dressing with thermal transfer printed ferrules and screened instrumentation signal cables.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-10",
    title: "Power Control Center (PCC) Air Circuit Breakers",
    category: "PANEL ROOMS",
    location: "Rolling Mill Substation",
    description: "415V 4000A draw-out Air Circuit Breaker (ACB) testing, busbar torque verification, and trip relay calibration.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-11",
    title: "HT 33kV Cable Glanding & Heat-Shrink Kits",
    category: "ELECTRICAL",
    location: "Captive Substation Yard",
    description: "Cross-linked polyethylene (XLPE) 33kV armored cable end termination using certified stress-control heat shrink boots.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-12",
    title: "Daily Site Safety Briefing & Zero Harm Protocols",
    category: "SAFETY",
    location: "DRI Project Site",
    description: "Pre-shift toolbox talk covering crane lifting radius clearance, confined space procedures, and high-voltage line safety.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
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
