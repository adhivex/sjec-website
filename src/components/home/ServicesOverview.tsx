import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Sliders, Cog, Layers, Cpu, Users } from 'lucide-react';
import { SERVICES } from '../../data/services';

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
    <section className="bg-white py-20 sm:py-28 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
            03
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-navy uppercase">
            WHAT WE DO // ENGINEERING &amp; EXECUTION CAPABILITIES
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-navy/20 to-transparent"></span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-navy font-heading leading-tight tracking-tight">
              Disciplined Technical Disciplines
            </h2>
            <p className="mt-3 text-slate text-sm sm:text-base leading-relaxed font-sans font-normal">
              From power transformer rigging and HT switchgear setup to multi-parameter instrument calibration and automated Robo Lab installations.
            </p>
          </div>

          <Link
            to="/services"
            className="btn-gold text-xs px-6 py-3.5 inline-flex items-center gap-2 self-start lg:self-auto shadow-md"
          >
            <span>Explore Full Scope Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Disciplines Technical Matrix (2 Columns of 3 Editorial Rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {SERVICES.map((srv, index) => {
            const Icon = iconMap[srv.iconName] || Zap;
            return (
              <div
                key={srv.id}
                className="bg-offwhite border-2 border-border hover:border-gold/70 rounded-sm p-7 sm:p-9 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top Corner Technical Index */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-sm bg-navy-dark text-gold group-hover:bg-gold group-hover:text-navy-dark transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-gold tracking-widest uppercase block">
                        DISCIPLINE 0{index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold uppercase text-navy font-heading group-hover:text-navy-surface transition-colors mt-0.5">
                        {srv.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-slate text-sm sm:text-base leading-relaxed font-sans">
                  {srv.shortDesc}
                </p>

                {/* Profile-supported Capability Checklist */}
                <div className="mt-6 pt-5 border-t border-border-light space-y-2">
                  <div className="text-[11px] font-mono font-bold text-navy uppercase tracking-wider mb-2">
                    CORE CAPABILITY HIGHLIGHTS:
                  </div>
                  {srv.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal font-sans">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-7 pt-4 border-t border-border-light flex items-center justify-between">
                  <Link
                    to={`/services#${srv.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold inline-flex items-center gap-1.5 transition-colors font-sans"
                  >
                    <span>View Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">VERIFIED SCOPE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
