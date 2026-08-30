import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Sliders, Cog, Layers, Cpu, Users, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { SectionHeader } from '../common/SectionHeader';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Sliders,
  Cog,
  Layers,
  Cpu,
  Users,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Disciplines &amp; Scope"
          title="Engineering &amp; Execution Capabilities"
          subtitle="Delivering comprehensive electrical and instrumentation project scopes with disciplined engineering and turnkey reliability."
          align="center"
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv, index) => {
            const Icon = iconMap[srv.iconName] || Zap;
            return (
              <div
                key={srv.id}
                className="bg-white border border-border hover:border-gold/60 rounded-sm p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-navy-light/20 group-hover:bg-gold transition-colors"></div>

                <div>
                  {/* Icon & Category Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-sm bg-navy-dark text-gold group-hover:bg-gold group-hover:text-navy-dark transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate/60 group-hover:text-gold transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold uppercase tracking-tight text-navy group-hover:text-navy-surface font-heading">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Capability List Items (from factual profile) */}
                  <div className="mt-6 pt-4 border-t border-border-light space-y-2">
                    {srv.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="mt-8 pt-4 border-t border-border-light">
                  <Link
                    to={`/services`}
                    className="text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold flex items-center justify-between transition-colors"
                  >
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Services CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="btn-gold text-xs px-8 py-3.5 font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>View Full Service Catalog &amp; Technical Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
