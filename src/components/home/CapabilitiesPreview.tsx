import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, Zap, Truck, Hammer, Scissors, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const CapabilitiesPreview: React.FC = () => {
  const categoryHighlights = [
    {
      category: "Lifting & Handling",
      icon: Truck,
      items: ["Hydra 20 MT Crane", "Hydra 12 MT Crane", "JCB Excavator / Loader", "Chain Pulley Blocks"],
      count: "5 Equipment Units"
    },
    {
      category: "Electrical Testing",
      icon: Zap,
      items: ["1000V High Voltage Megger", "500V Low Voltage Megger", "Digital Multimeters", "Continuity Testers"],
      count: "Calibrated Instruments"
    },
    {
      category: "Fabrication & Cutting",
      icon: Hammer,
      items: ["Welding Rectifiers", "Abrasive Chop Saws", "Angle Grinders", "Surface Prep Sets"],
      count: "Workshop & Site Tools"
    },
    {
      category: "Cable & Termination",
      icon: Scissors,
      items: ["Hydraulic Crimping Tools", "Manual Ratchet Crimpers", "Wire Strippers", "Ferrule Printers"],
      count: "Up to 630 sq.mm"
    },
    {
      category: "Site & Drilling Tools",
      icon: Wrench,
      items: ["Heavy Hammer Drills", "Stand & Magnetic Drills", "Hand Tool Sets", "Industrial Air Blowers"],
      count: "Standardized Kits"
    },
    {
      category: "Safety & Handling",
      icon: Shield,
      items: ["HT Protective Gloves", "Lifting Slings & Shackles", "Dielectric PPE", "Barricading Gear"],
      count: "Zero Harm Adherence"
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Machinery &amp; Tooling"
          title="Resources That Support Execution"
          subtitle="Documented industrial equipment, high-voltage testing instruments, heavy mobile cranes, and specialized cable installation tools."
          align="center"
        />

        {/* 6 Equipment Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoryHighlights.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-offwhite border border-border hover:border-gold/60 rounded-sm p-6 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-sm bg-navy-dark text-gold group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate/70 uppercase px-2 py-0.5 rounded bg-white border border-border">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-tight text-navy group-hover:text-navy-surface font-heading">
                    {cat.category}
                  </h3>

                  <ul className="mt-4 space-y-2 text-xs text-charcoal">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-border-light text-right">
                  <Link
                    to="/capabilities"
                    className="text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Capabilities Page */}
        <div className="mt-12 text-center">
          <Link
            to="/capabilities"
            className="btn-navy text-xs px-8 py-3.5 font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Explore Complete Equipment Inventory &amp; Testing Capabilities</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

      </div>
    </section>
  );
};
