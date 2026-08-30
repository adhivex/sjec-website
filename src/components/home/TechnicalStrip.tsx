import React from 'react';
import { Zap, Sliders, Cog, HardHat } from 'lucide-react';

export const TechnicalStrip: React.FC = () => {
  const items = [
    { title: 'Electrical', icon: Zap, desc: 'HT/LT Panels & Transformers' },
    { title: 'Instrumentation', icon: Sliders, desc: 'Calibration & Field Sensors' },
    { title: 'Erection & Commissioning', icon: Cog, desc: 'Plant Machinery & Drives' },
    { title: 'Industrial Execution', icon: HardHat, desc: 'Zero Harm Project Handover' },
  ];

  return (
    <section id="technical-strip" className="bg-navy border-b border-navy-light/40 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-navy-light/30">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="py-6 px-4 flex items-center gap-4 group hover:bg-navy-surface/50 transition-colors">
                <div className="p-3 rounded-sm bg-navy-dark border border-gold/30 text-gold group-hover:scale-110 group-hover:border-gold transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
