import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, Check } from 'lucide-react';
import { SAFETY_QUALITY_INFO } from '../../data/safetyQuality';
import { SectionHeader } from '../common/SectionHeader';

export const SafetyQualitySection: React.FC = () => {
  const { safety, quality } = SAFETY_QUALITY_INFO;

  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Core Pillars"
          title="Safety &amp; Quality Excellence"
          subtitle="Committed to safe project execution, zero harm, and defect-free engineering delivery across every industrial plant site."
          align="center"
        />

        {/* 2-Column Split: Left Safety (Zero Harm), Right Quality (5 Pillars) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Safety & Zero Harm */}
          <div className="bg-navy-dark text-white rounded-sm p-8 sm:p-10 border border-border-navy shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none grid-pattern"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>{safety.badge}</span>
                </div>
                <span className="text-xs font-mono text-gray-400 uppercase">SAFETY COMMITMENT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-heading">
                {safety.headline}
              </h3>
              <p className="text-sm font-semibold text-gold mt-1">
                {safety.subheadline}
              </p>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {safety.description}
              </p>

              {/* Safety Rules Checklist */}
              <div className="mt-6 space-y-3 pt-4 border-t border-navy-light/30">
                {safety.principles.slice(0, 4).map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-semibold">{p.title}:</strong>{' '}
                      <span className="text-gray-300">{p.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-light/30">
              <Link
                to="/safety-quality"
                className="btn-gold text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Read Safety Protocols</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quality Built Into Every Stage */}
          <div className="bg-white rounded-sm p-8 sm:p-10 border border-border shadow-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy/10 border border-navy/20 text-navy text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-navy" />
                  <span>Quality Assurance</span>
                </div>
                <span className="text-xs font-mono text-slate/60 uppercase">ENGINEERING RIGOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy font-heading">
                {quality.headline}
              </h3>
              <p className="text-sm font-semibold text-slate mt-1">
                {quality.subheadline}
              </p>

              {/* 5 Quality Pillars List */}
              <div className="mt-6 space-y-3 pt-4 border-t border-border-light">
                {quality.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-3 rounded-sm bg-offwhite border border-border-light hover:border-gold/50 transition-colors flex items-start gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-gold px-2 py-0.5 bg-navy-dark rounded-sm">
                      {pillar.number}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase text-navy">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate mt-0.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border-light">
              <Link
                to="/safety-quality"
                className="btn-navy text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Explore Quality Stages</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
