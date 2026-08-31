import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Zap, Hammer, ArrowRight } from 'lucide-react';

export const CapabilitiesPreview: React.FC = () => {
  const engineeringResources = [
    {
      category: "LIFTING & RIGGING",
      icon: Truck,
      highlight: "Heavy Mobilization",
      items: [
        "Hydra 20 MT Heavy Hydraulic Crane",
        "Hydra 12 MT Mobile Site Crane",
        "JCB Excavator / Earthmoving Loader",
        "Geared Chain Blocks & Pulley Sets",
        "Certified Webbing Slings & D-Shackles"
      ]
    },
    {
      category: "ELECTRICAL TESTING",
      icon: Zap,
      highlight: "High-Voltage Precision",
      items: [
        "1000V High Voltage Megger Tester",
        "500V Low Voltage Megger Tester",
        "Calibrated Digital Multimeters & Clamps",
        "Point-to-Point Continuity Buzzers"
      ]
    },
    {
      category: "FABRICATION & TERMINATION",
      icon: Hammer,
      highlight: "On-Site Structural Tooling",
      items: [
        "Industrial DC Welding Rectifiers",
        "Abrasive Metal Chop & Cutting Saws",
        "Heavy Hydraulic Crimpers (up to 630 sq.mm)",
        "Microprocessor Ferrule Marker Printers",
        "Rotary Hammer & Magnetic Core Drills"
      ]
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
            06
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-navy uppercase">
            RESOURCES // TOOLING &amp; MACHINERY
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-navy/20 to-transparent"></span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-navy font-heading leading-tight tracking-tight">
              Resources That Support Execution
            </h2>
            <p className="mt-3 text-slate text-sm sm:text-base leading-relaxed font-sans font-normal">
              Mobilized with dedicated multi-ton mobile cranes, certified high-voltage insulation testing instruments, and precision cable termination tooling.
            </p>
          </div>

          <Link
            to="/capabilities"
            className="btn-navy text-xs px-6 py-3.5 inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <span>Full Tooling Inventory &amp; Table</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

        {/* 3 Large Engineering Resource Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engineeringResources.map((res, index) => {
            const Icon = res.icon;
            return (
              <div
                key={index}
                className="bg-offwhite border-2 border-border hover:border-gold rounded-sm p-7 sm:p-9 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-sm bg-navy-dark text-gold group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate/70 uppercase px-2.5 py-1 rounded bg-white border border-border">
                      {res.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold uppercase text-navy font-heading group-hover:text-navy-surface transition-colors">
                    {res.category}
                  </h3>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-charcoal font-sans">
                    {res.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border-light text-right">
                  <Link
                    to="/capabilities"
                    className="text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold inline-flex items-center gap-1 transition-colors font-sans"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
