import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, Check } from 'lucide-react';
import { SAFETY_QUALITY_INFO } from '../../data/safetyQuality';

export const SafetyQualitySection: React.FC = () => {
  const { safety, quality } = SAFETY_QUALITY_INFO;

  return (
    <section className="bg-navy-deep text-white py-20 sm:py-28 border-b border-border-navy relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-navy-deep px-2.5 py-1 bg-gold rounded-sm">
            05
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase">
            SAFETY &amp; QUALITY // ZERO HARM FRAMEWORK
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white font-heading leading-tight tracking-tight">
            Safety. Quality. Responsibility.
          </h2>
          <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Our non-negotiable operational ethos: zero compromise on personnel health, dielectric safety protocols, and calibrated engineering precision.
          </p>
        </div>

        {/* 2-Column Deep Navy Technical Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Zero Harm Safety Commitment (6 cols) */}
          <div className="lg:col-span-6 bg-navy-dark border-2 border-gold/40 rounded-sm p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-gold/15 border border-gold/40 text-gold text-xs font-bold font-mono uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>ZERO HARM COMMITMENT</span>
                </div>
                <span className="text-xs font-mono text-gray-400">ON-SITE SAFETY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-heading">
                {safety.headline}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {safety.description}
              </p>

              {/* Safety Principles List */}
              <div className="space-y-3 pt-4 border-t border-navy-light/30">
                {safety.principles.slice(0, 4).map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-bold">{p.title}:</strong>{' '}
                      <span className="text-gray-300">{p.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-light/30 relative z-10">
              <Link
                to="/safety-quality"
                className="btn-gold text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Read Full Safety Protocols</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: 5 Quality Pillars (6 cols) */}
          <div className="lg:col-span-6 bg-navy-surface/50 border border-border-navy rounded-sm p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-navy-dark border border-white/20 text-gray-200 text-xs font-bold font-mono uppercase tracking-wider">
                  <Award className="w-4 h-4 text-gold" />
                  <span>5-STAGE QUALITY SYSTEM</span>
                </div>
                <span className="text-xs font-mono text-gray-400">QA / QC RIGOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-heading">
                {quality.headline}
              </h3>

              {/* 5 Quality Pillars */}
              <div className="mt-6 space-y-3 pt-2">
                {quality.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-3.5 rounded-sm bg-navy-deep/70 border border-navy-light/30 hover:border-gold/50 transition-colors flex items-start gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-gold px-2 py-0.5 bg-navy-dark rounded-sm">
                      {pillar.number}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase text-white font-heading">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-gray-300 mt-0.5 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-light/30">
              <Link
                to="/safety-quality"
                className="btn-outline-white text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Explore Quality Verification Stages</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
