import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../data/company';
import { TEAM } from '../data/team';
import {
  Target,
  Compass,
  CheckCircle2,
  Briefcase,
  Scale,
  Calendar,
  Layers,
  Wrench
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const advisors = TEAM.filter(t => t.department === 'advisory' || t.department === 'independent');
  const partners = TEAM.filter(t => t.department === 'leadership');
  const projectManagers = TEAM.filter(t => t.department === 'project-management');
  const siteInCharge = TEAM.filter(t => t.department === 'site-in-charge');
  const supervisors = TEAM.filter(t => t.department === 'supervisors');
  const legalAdvisors = TEAM.filter(t => t.department === 'legal');

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Corporate Profile"
        title="About Sai Jagannath Engineering & Construction"
        description="A legacy of electrical and instrumentation engineering excellence, built on technical precision, client trust, and disciplined site execution."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 1. Our Story & Historical Milestones */}
      <section className="py-16 sm:py-20 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-navy/10 text-navy border border-navy/20">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Our Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-navy tracking-tight leading-tight font-heading">
                {COMPANY_INFO.story.heading}
              </h2>

              <div className="space-y-4 text-slate text-base sm:text-lg leading-relaxed">
                {COMPANY_INFO.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Factual Highlights Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-light">
                <div className="p-4 rounded-sm bg-offwhite border border-border flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy uppercase">2005 Inception</h4>
                    <p className="text-xs text-slate mt-0.5">Foundational operations established under M/S Sri Jagannath.</p>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-offwhite border border-border flex items-start gap-3">
                  <Layers className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy uppercase">2013 Expansion</h4>
                    <p className="text-xs text-slate mt-0.5">Consolidated turnkey industrial electrical &amp; instrumentation services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-sm overflow-hidden border-2 border-border shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Plant Execution"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-dark text-white p-6 rounded-sm border-2 border-gold/40 shadow-2xl max-w-xs hidden sm:block">
                <div className="text-xs font-bold uppercase tracking-wider text-gold">Positioning Statement</div>
                <div className="text-sm font-bold uppercase mt-1 leading-snug">
                  {COMPANY_INFO.businessPositioning}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-sm border border-border shadow-card flex flex-col justify-between group hover:border-gold/60 transition-colors">
              <div>
                <div className="p-3.5 rounded-sm bg-navy-dark text-gold w-fit mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-navy tracking-tight font-heading">
                  {COMPANY_INFO.mission.title}
                </h3>
                <p className="mt-4 text-slate text-base leading-relaxed">
                  {COMPANY_INFO.mission.statement}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Disciplined Engineering Execution</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-navy-dark text-white p-8 sm:p-10 rounded-sm border border-border-navy shadow-xl flex flex-col justify-between group hover:border-gold/60 transition-colors">
              <div>
                <div className="p-3.5 rounded-sm bg-gold text-navy-dark w-fit mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight font-heading">
                  {COMPANY_INFO.vision.title}
                </h3>
                <p className="mt-4 text-gray-300 text-base leading-relaxed">
                  {COMPANY_INFO.vision.statement}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-light/30 text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Honest, Reliable Plant Partnership</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Corporate Values */}
      <section className="py-16 sm:py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Guiding Principles"
            title="Corporate Values"
            subtitle="The foundational engineering ethics and operational standards that define every SJEC project."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((val) => (
              <div
                key={val.number}
                className="p-6 rounded-sm bg-offwhite border border-border hover:border-gold/60 transition-all shadow-sm hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
                      {val.number}
                    </span>
                    <span className="text-xs font-mono text-gray-400 uppercase">CORE VALUE</span>
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-navy font-heading">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Organization & Team Hierarchy */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="People &amp; Governance"
            title="Advisory Board &amp; Project Leadership"
            subtitle="Led by veteran industrial advisors and qualified engineering project managers."
            align="center"
          />

          {/* Senior Strategic Advisors */}
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-6 flex items-center gap-2">
              <span className="w-3 h-1 bg-gold inline-block"></span>
              Senior Strategic &amp; Technical Advisors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((adv, idx) => (
                <div key={idx} className="bg-white border-2 border-border p-6 rounded-sm shadow-card">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold">
                    {adv.department === 'independent' ? 'Independent Technical Advisor' : 'Strategic Advisor'}
                  </div>
                  <h4 className="text-lg font-bold uppercase text-navy mt-1 font-heading">
                    {adv.name}
                  </h4>
                  <div className="text-xs font-semibold text-slate mt-0.5">
                    {adv.qualification}
                  </div>
                  <p className="mt-4 text-xs text-slate leading-relaxed">
                    {adv.experienceHighlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Proprietor & Partners */}
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-6 flex items-center gap-2">
              <span className="w-3 h-1 bg-gold inline-block"></span>
              Proprietor &amp; Managing Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-navy-dark text-white p-6 rounded-sm border border-border-navy shadow-xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold">Executive Leadership</div>
                  <h4 className="text-lg font-bold uppercase text-white mt-1 font-heading">
                    {partner.name}
                  </h4>
                  <div className="text-xs font-semibold text-gray-300 mt-0.5">
                    {partner.role}
                  </div>
                  <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                    {partner.experienceHighlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Managers */}
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-6 flex items-center gap-2">
              <span className="w-3 h-1 bg-gold inline-block"></span>
              Engineering Project Managers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectManagers.map((pm, idx) => (
                <div key={idx} className="bg-white border border-border p-5 rounded-sm shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase text-navy font-heading">{pm.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-gold px-2 py-0.5 bg-navy-dark rounded-sm">
                      {pm.qualification}
                    </span>
                  </div>
                  <div className="text-xs text-slate font-medium mt-1">{pm.role}</div>
                  <p className="mt-2 text-xs text-slate">{pm.experienceHighlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Site-in-Charge & Supervisors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Site In-Charge */}
            <div className="bg-white border border-border p-6 rounded-sm shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gold" />
                Site-in-Charge Engineers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteInCharge.map((sic, i) => (
                  <div key={i} className="p-2.5 rounded bg-offwhite border border-border-light text-xs font-semibold text-charcoal flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span>{sic.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Supervisors */}
            <div className="bg-white border border-border p-6 rounded-sm shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-gold" />
                Execution &amp; Testing Supervisors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supervisors.map((sup, i) => (
                  <div key={i} className="p-2.5 rounded bg-offwhite border border-border-light text-xs flex flex-col justify-center">
                    <div className="font-bold text-navy">{sup.name}</div>
                    <div className="text-[10.5px] text-slate">{sup.role}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Legal & Statutory Advisory */}
          <div className="bg-navy-surface/40 border border-navy-light/30 p-6 rounded-sm">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-gold" />
              Legal &amp; Statutory Compliance Advisors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {legalAdvisors.map((leg, idx) => (
                <div key={idx} className="bg-white p-4 rounded-sm border border-border text-xs">
                  <div className="font-bold uppercase text-navy text-sm">{leg.name}</div>
                  <div className="text-gold font-semibold mt-0.5">{leg.qualification}</div>
                  <p className="text-slate mt-1.5">{leg.experienceHighlight}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
