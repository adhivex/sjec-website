import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { SAFETY_QUALITY_INFO } from '../data/safetyQuality';
import {
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Award
} from 'lucide-react';

export const SafetyQualityPage: React.FC = () => {
  const { safety, quality } = SAFETY_QUALITY_INFO;

  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Zero Harm &amp; QA/QC"
        title="Safety &amp; Quality Excellence"
        description="Our non-negotiable commitment to safe site practices, Zero Harm objectives, and disciplined 5-stage quality assurance."
        breadcrumbs={[{ label: 'Safety & Quality' }]}
      />

      {/* 1. Safety Section (Zero Harm) */}
      <section className="py-16 sm:py-24 border-b border-border-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs font-bold font-mono uppercase tracking-[0.18em]">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{safety.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white tracking-tight font-heading">
                {safety.headline}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-gray-300 font-sans">
                {safety.subheadline}
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                {safety.description}
              </p>

              <div className="p-4 bg-navy-surface/80 border-l-4 border-gold rounded-sm text-xs sm:text-sm text-gray-200">
                <strong className="block text-gold font-mono font-bold uppercase tracking-wider text-[11px] mb-1">
                  On-Site Safety Mandate
                </strong>
                Every worker, engineer, and subcontractor undergoes safety induction prior to accessing energized electrical panels, cable trenches, or elevated plant structures.
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <div className="relative w-full rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl bg-navy-dark group">
                <img
                  src="/images/hero-substation.jpg"
                  alt="SJEC Industrial Safety Protocol"
                  className="w-full h-[380px] sm:h-[420px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent"></div>
                <div className="absolute -bottom-3 right-3 sm:right-4 bg-navy-deep text-white p-4 rounded-sm border border-gold/40 shadow-xl max-w-xs hidden sm:block z-20">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gold font-mono">Safety Culture</div>
                  <div className="text-xs font-bold uppercase mt-0.5">Zero Harm to Personnel &amp; Equipment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safety.principles.map((principle: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className="p-6 rounded-sm bg-navy-dark border border-border-navy hover:border-gold/60 transition-all shadow-xl"
              >
                <div className="p-3 rounded-sm bg-navy-surface text-gold w-fit mb-4 border border-gold/30">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold uppercase text-white font-heading">
                  {principle.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-normal">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Safety Rules Checklist */}
          <div className="mt-12 bg-navy-surface/50 text-white p-6 sm:p-8 rounded-sm border border-border-navy">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-gold inline-block"></span>
              Core Site Safety Regulations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-200">
              {safety.safetyRules.map((rule: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 bg-navy-deep/80 p-3 rounded-sm border border-navy-light/20">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Quality Management (5 Pillars & 5 Stages) */}
      <section className="py-16 sm:py-24 bg-navy-dark border-b border-border-navy relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs font-bold font-mono uppercase tracking-[0.18em] mb-4">
              <Award className="w-4 h-4 text-gold" />
              <span>QA / QC FRAMEWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white font-heading tracking-tight">
              Quality Built Into Every Stage of Execution
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans font-normal">
              Our disciplined quality management framework ensures high precision and reliable plant operation from raw fabrication to energization.
            </p>
          </div>

          {/* 5 Quality Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {quality.pillars.map((pillar: { number: string; title: string; description: string }) => (
              <div
                key={pillar.number}
                className="bg-navy-surface/60 p-6 rounded-sm border border-border-navy hover:border-gold/60 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-deep rounded-sm border border-gold/30">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">QUALITY PILLAR</span>
                  </div>
                  <h3 className="text-base font-semibold uppercase tracking-tight text-white font-heading">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 5 Stages of Quality Inspection */}
          <div className="bg-navy-surface/40 p-6 sm:p-10 rounded-sm border border-border-navy shadow-2xl">
            <div className="mb-8">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">EXECUTION PIPELINE</span>
              <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white font-heading mt-1">
                5 Stages of Project Quality Verification
              </h3>
            </div>

            <div className="space-y-3">
              {quality.qualityStages.map((stg: { stage: string; name: string; details: string }, i: number) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-sm bg-navy-deep/80 border border-navy-light/20 hover:border-gold/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="text-xs font-mono font-bold text-gold px-3 py-1 bg-navy-surface rounded-sm border border-gold/30 flex-shrink-0">
                      {stg.stage}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold uppercase text-white">
                        {stg.name}
                      </h4>
                      <p className="text-xs text-gray-300 mt-0.5">{stg.details}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gold font-bold uppercase flex-shrink-0 self-end sm:self-center">
                    Verified Checklist
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
