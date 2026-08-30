import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "jk-cement-cuttack",
    title: "J.K. Cement Works OGU",
    client: "J.K. Cement Works",
    location: "OGU, Cuttack, Odisha",
    plantType: "Cement Grinding Unit (OGU)",
    category: "cement",
    capacity: "2,000 TPD",
    period: "2018 to March 2019",
    scopeSummary: "Complete electrical erection, HT/LT panel installations, cable tray networks, and motor commissioning for 2,000 TPD grinding facility.",
    deliverables: [
      "HT/LT electrical panel installation and integration",
      "Power transformer and switchgear erection",
      "Perforated and ladder-type cable tray installation",
      "HT/LT power and control cable laying and terminations",
      "Grinding mill motor testing and dry run commissioning",
      "Plant street lighting and high mast pole setup"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true
  },
  {
    id: "bangur-cement-cuttack",
    title: "Bangur Cement Grinding Unit",
    client: "Bangur Cement",
    location: "OGU, Cuttack, Odisha",
    plantType: "Cement Grinding Unit (OGU)",
    category: "cement",
    capacity: "4,500 TPD",
    period: "March 2019 to March 2020",
    scopeSummary: "Turnkey electrical and instrumentation execution for a mega 4,500 TPD grinding plant including Robo Lab and VRM electricals.",
    deliverables: [
      "Major HT/LT MCC panel room erection and bus duct connection",
      "Robo Lab automation system mechanical and electrical installation",
      "Vertical Roller Mill (VRM) drive and auxiliary motor testing",
      "Heavy HT cable laying and termination across Silo and Packing Plant",
      "Field instrumentation loop checking and transmitter calibration",
      "Comprehensive earth pit grid setup and lightning protection"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true
  },
  {
    id: "dalmia-cement-cuttack",
    title: "Dalmia Cement Kaplish Works",
    client: "Dalmia Cement",
    location: "Kaplish Cement Works, Cuttack, Odisha",
    plantType: "Cement Plant",
    category: "cement",
    capacity: "3,000 TPD",
    period: "November 2020 to March 2021",
    scopeSummary: "Execution of plant electrical revamping, cable tray structural erection, panel integration, and pre-commissioning testing.",
    deliverables: [
      "HT/LT panel erection and internal wiring verification",
      "Fabrication and erection of cable tray supports across mill section",
      "Laying and ferrule termination of power, control, and signal cables",
      "1000V/500V Megger insulation resistance testing",
      "Motor solo-run testing and interlock confirmation"
    ],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true
  },
  {
    id: "rungta-mines-dri",
    title: "Rungta Mines DRI Project",
    client: "Rungta Mines Limited",
    location: "Dhenkanal, Odisha",
    plantType: "Direct Reduced Iron (DRI) Plant",
    category: "steel-dri",
    capacity: "500 TPD",
    period: "April 2019 to January 2020",
    scopeSummary: "Complete electrical & instrumentation turnkey execution for 500 TPD Sponge Iron rotary kiln and ESP system.",
    deliverables: [
      "Rotary kiln main drive, auxiliary drive, and MCC panel room installation",
      "Electrostatic Precipitator (ESP) electrical cabling and TR panel erection",
      "Kiln temperature, pressure, and gas flow instrumentation calibration",
      "Cable tray erection and high-voltage power cable pulling",
      "Substation switchyard auxiliary connections and testing"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true
  },
  {
    id: "rungta-mines-pellet",
    title: "Rungta Mines Pellet Project",
    client: "Rungta Mines Limited",
    location: "Dhenkanal, Odisha",
    plantType: "Iron Ore Pellet Plant",
    category: "pellet",
    capacity: "4,000 MT",
    period: "September 2022 to March 2023",
    scopeSummary: "Large-scale electrical infrastructure, induration furnace cabling, PLC panels, and field instrumentation.",
    deliverables: [
      "4,000 MT Pellet induration machine drive power distribution",
      "Disc pelletizer and slurry pump electrical panel commissioning",
      "Control room PLC and marshalling cabinet wiring and loop checking",
      "Thousands of meters of multi-core instrumentation and power cabling",
      "Complete lighting installation and emergency illumination"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true
  },
  {
    id: "nipl-dri-1",
    title: "NIPL DRI Phase 1",
    client: "NIPL",
    location: "Kandra, Jharkhand",
    plantType: "DRI (Sponge Iron) Plant 1",
    category: "steel-dri",
    capacity: "500 TPD",
    period: "October 2020 to March 2021",
    scopeSummary: "Electrification, MCC panel installation, and instrumentation loop testing for 500 TPD DRI unit 1.",
    deliverables: [
      "DRI 1 rotary kiln drive alignment and electrical testing",
      "HT/LT panel erection, busbar connection, and earthing",
      "Cable tray fabrication and cable laying along kiln line",
      "Instrumentation sensor hookup and transmitter calibration",
      "Final cold run and hot commissioning assistance"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false
  },
  {
    id: "nipl-dri-2",
    title: "NIPL DRI Phase 2",
    client: "NIPL",
    location: "Kandra, Jharkhand",
    plantType: "DRI (Sponge Iron) Plant 2",
    category: "steel-dri",
    capacity: "500 TPD",
    period: "2021 to 2022",
    scopeSummary: "Phase 2 expansion execution for 500 TPD DRI plant, expanding power distribution and automation controls.",
    deliverables: [
      "Turnkey electrical erection for second 500 TPD rotary kiln line",
      "Integration with existing plant power substation and distribution grid",
      "Field instrumentation impulse line piping and signal terminations",
      "HT motor testing, insulation resistance validation, and commissioning",
      "Zero-harm safety supervision during concurrent plant operations"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false
  }
];

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'cement', label: 'Cement Plants' },
  { key: 'steel-dri', label: 'Steel & DRI Plants' },
  { key: 'pellet', label: 'Pellet Plants' },
];
