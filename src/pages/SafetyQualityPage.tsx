import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { SAFETY_QUALITY_INFO } from '../data/safetyQuality';
import {
  ShieldCheck,
  CheckCircle2,
  HardHat
} from 'lucide-react';

export const SafetyQualityPage: React.FC = () => {
  const { safety, quality } = SAFETY_QUALITY_INFO;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Zero Harm &amp; QA/QC"
        title="Safety &amp; Quality Excellence"
        description="Our non-negotiable commitment to safe site practices, Zero Harm objectives, and disciplined 5-stage quality assurance."
        breadcrumbs={[{ label: 'Safety & Quality' }]}
      />

      {/* 1. Safety Section (Zero Harm) */}
      <section className="py-16 sm:py-20 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-gold/15 text-gold border border-gold/40">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>{safety.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-navy tracking-tight font-heading">
                {safety.headline}
              </h2>
              <p className="text-base font-semibold text-slate">
                {safety.subheadline}
              </p>

              <p className="text-slate text-base sm:text-lg leading-relaxed">
                {safety.description}
              </p>

              <div className="p-4 bg-navy-surface/30 border-l-4 border-gold rounded-sm text-xs sm:text-sm text-navy">
                <strong className="block text-navy font-bold uppercase tracking-wide mb-1">
                  On-Site Safety Mandate
                </strong>
                Every worker, engineer, and subcontractor undergoes safety induction prior to accessing energized electrical panels, cable trenches, or elevated plant structures.
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-sm overflow-hidden border-2 border-border shadow-card">
                <img
                  src="/images/hero-substation.jpg"
                  alt="SJEC Industrial Safety Protocol"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-3 right-3 sm:right-4 bg-navy-dark text-white p-4 rounded-sm border border-border-navy shadow-xl max-w-xs hidden sm:block z-20">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gold font-mono">Safety Culture</div>
                <div className="text-xs font-bold uppercase mt-0.5">Zero Harm to Personnel &amp; Equipment</div>
              </div>
            </div>
          </div>

          {/* Safety Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safety.principles.map((principle: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className="p-6 rounded-sm bg-offwhite border border-border hover:border-gold/60 transition-all shadow-sm"
              >
                <div className="p-3 rounded-sm bg-navy-dark text-gold w-fit mb-4">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase text-navy font-heading">
                  {principle.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Safety Rules Checklist */}
          <div className="mt-12 bg-navy-dark text-white p-8 rounded-sm border border-border-navy">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-gold inline-block"></span>
              Core Site Safety Regulations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-200">
              {safety.safetyRules.map((rule: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 bg-navy-surface/50 p-3 rounded-sm border border-navy-light/30">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Quality Management (5 Pillars & 5 Stages) */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="QA / QC Framework"
            title="Quality Built Into Every Stage of Execution"
            subtitle="Our disciplined quality management framework ensures high precision and reliable plant operation from raw fabrication to energization."
            align="center"
          />

          {/* 5 Quality Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {quality.pillars.map((pillar: { number: string; title: string; description: string }) => (
              <div
                key={pillar.number}
                className="bg-white p-6 rounded-sm border border-border hover:border-gold/60 transition-all shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-mono text-gray-400 uppercase">QUALITY PILLAR</span>
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-navy font-heading">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 5 Stages of Quality Inspection */}
          <div className="bg-white p-8 sm:p-10 rounded-sm border border-border shadow-card">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Execution Pipeline</span>
              <h3 className="text-2xl font-extrabold uppercase text-navy font-heading mt-1">
                5 Stages of Project Quality Verification
              </h3>
            </div>

            <div className="space-y-4">
              {quality.qualityStages.map((stg: { stage: string; name: string; details: string }, i: number) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-sm bg-offwhite border border-border hover:border-gold/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="text-xs font-mono font-bold text-navy px-3 py-1 bg-navy/10 rounded-sm flex-shrink-0">
                      {stg.stage}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold uppercase text-navy">
                        {stg.name}
                      </h4>
                      <p className="text-xs text-slate mt-0.5">{stg.details}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-gold font-bold uppercase flex-shrink-0 self-end sm:self-center">
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
