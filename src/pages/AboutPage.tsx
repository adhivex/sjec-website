import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../data/company';
import { TEAM } from '../data/team';
import {
  Target,
  Compass,
  CheckCircle2,
  Briefcase,
  Scale,
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
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Corporate Profile"
        title="About Sai Jagannath Engineering & Construction"
        description="A legacy of electrical and instrumentation engineering excellence, built on technical precision, client trust, and disciplined site execution."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 1. Our Story & Historical Milestones */}
      <section className="py-20 sm:py-28 border-b border-border-navy bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-navy-deep px-2.5 py-1 bg-gold rounded-sm">
              01
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase">
              HERITAGE // CHRONOLOGY
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6 min-w-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white font-heading leading-tight tracking-tight">
                {COMPANY_INFO.story.heading}
              </h2>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                {COMPANY_INFO.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Chronology Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-navy-light/30">
                <div className="p-4 rounded-sm bg-navy-surface/70 border-l-4 border-gold shadow-md">
                  <div className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider">FOUNDATIONAL INCEPTION</div>
                  <div className="text-xl font-bold text-white font-heading mt-0.5">2005</div>
                  <div className="text-xs text-gray-300 mt-1 font-sans">M/S Sri Jagannath foundational electrical services.</div>
                </div>

                <div className="p-4 rounded-sm bg-navy-surface/70 border-l-4 border-white/60 shadow-md">
                  <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">TURNKEY INDUSTRIAL SCALE</div>
                  <div className="text-xl font-bold text-white font-heading mt-0.5">2013 — Present</div>
                  <div className="text-xs text-gray-300 mt-1 font-sans">Turnkey industrial electrical &amp; instrumentation projects.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <div className="relative w-full rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl bg-navy-dark group">
                <img
                  src="/images/plant-steel-dri.jpg"
                  alt="Industrial Plant Execution"
                  className="w-full h-[380px] sm:h-[440px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-navy-deep/90 text-gold text-[9px] font-mono font-bold px-2.5 py-1 rounded-sm border border-gold/30">
                  ESTABLISHED 2005 // INDUSTRIAL EPC
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 sm:py-28 bg-navy-dark border-b border-border-navy relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-navy-surface/60 p-8 sm:p-10 rounded-sm border-2 border-border-navy shadow-xl flex flex-col justify-between group hover:border-gold/60 transition-colors">
              <div>
                <div className="p-3.5 rounded-sm bg-navy-deep text-gold w-fit mb-6 shadow-sm border border-gold/30">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white tracking-tight font-heading">
                  {COMPANY_INFO.mission.title}
                </h3>
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                  {COMPANY_INFO.mission.statement}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-light/30 text-xs font-mono font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Disciplined Engineering Execution</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-navy-surface/60 p-8 sm:p-10 rounded-sm border-2 border-border-navy shadow-xl flex flex-col justify-between group hover:border-gold/60 transition-colors">
              <div>
                <div className="p-3.5 rounded-sm bg-gold text-navy-dark w-fit mb-6 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white tracking-tight font-heading">
                  {COMPANY_INFO.vision.title}
                </h3>
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                  {COMPANY_INFO.vision.statement}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-light/30 text-xs font-mono font-bold uppercase tracking-wider text-gold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Honest, Reliable Plant Partnership</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Corporate Values */}
      <section className="py-20 sm:py-28 bg-navy-deep border-b border-border-navy relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-navy-deep px-2.5 py-1 bg-gold rounded-sm">
              02
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase">
              ETHOS // CORPORATE VALUES
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white font-heading leading-tight tracking-tight mb-12">
            Guiding Corporate Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((val) => (
              <div
                key={val.number}
                className="p-6 rounded-sm bg-navy-dark border border-border-navy hover:border-gold/60 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-surface rounded-sm border border-gold/30">
                      {val.number}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">VALUE PILLAR</span>
                  </div>
                  <h3 className="text-lg font-semibold uppercase tracking-tight text-white font-heading">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Organization & Team Hierarchy */}
      <section className="py-20 sm:py-28 bg-navy-dark border-b border-border-navy relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-navy-deep px-2.5 py-1 bg-gold rounded-sm">
              03
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase">
              GOVERNANCE // ADVISORY &amp; EXECUTION TEAMS
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-white font-heading leading-tight tracking-tight mb-12">
            Leadership &amp; Organization
          </h2>

          {/* Senior Strategic Advisors */}
          <div className="mb-14">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-6 flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-gold inline-block"></span>
              Senior Strategic &amp; Technical Advisors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((adv, idx) => (
                <div key={idx} className="bg-navy-surface/60 border border-border-navy p-6 rounded-sm shadow-lg hover:border-gold/50 transition-colors">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold">
                    {adv.department === 'independent' ? 'Independent Technical Advisor' : 'Strategic Advisor'}
                  </div>
                  <h4 className="text-lg font-semibold uppercase text-white mt-1 font-heading">
                    {adv.name}
                  </h4>
                  <div className="text-xs font-mono text-gray-300 mt-0.5">
                    {adv.qualification}
                  </div>
                  <p className="mt-3 text-xs text-gray-300 leading-relaxed font-sans font-normal">
                    {adv.experienceHighlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Proprietor & Partners */}
          <div className="mb-14">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-6 flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-gold inline-block"></span>
              Proprietor &amp; Managing Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-navy-deep text-white p-6 rounded-sm border border-gold/40 shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold">Executive Leadership</div>
                  <h4 className="text-lg font-semibold uppercase text-white mt-1 font-heading">
                    {partner.name}
                  </h4>
                  <div className="text-xs font-mono text-gray-300 mt-0.5">
                    {partner.role}
                  </div>
                  <p className="mt-3 text-xs text-gray-400 leading-relaxed font-sans font-normal">
                    {partner.experienceHighlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Managers */}
          <div className="mb-14">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-6 flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-gold inline-block"></span>
              Engineering Project Managers (AMIE / B.Tech)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectManagers.map((pm, idx) => (
                <div key={idx} className="bg-navy-surface/50 border border-border-navy p-5 rounded-sm shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold uppercase text-white font-heading">{pm.name}</h4>
                    <span className="text-[9px] font-mono font-bold text-gold px-2 py-0.5 bg-navy-deep rounded-sm border border-gold/30">
                      {pm.qualification}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1 font-sans">{pm.role}</div>
                  <p className="mt-2 text-xs text-gray-300 font-sans font-normal">{pm.experienceHighlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Site-in-Charge & Supervisors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            
            {/* Site In-Charge */}
            <div className="bg-navy-surface/50 border border-border-navy p-6 rounded-sm shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gold" />
                Site-in-Charge Engineers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {siteInCharge.map((sic, i) => (
                  <div key={i} className="p-2.5 rounded-sm bg-navy-deep/80 border border-navy-light/20 text-xs font-bold text-gray-200 flex items-center gap-2 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    <span>{sic.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Supervisors */}
            <div className="bg-navy-surface/50 border border-border-navy p-6 rounded-sm shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-gold" />
                Execution &amp; Testing Supervisors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {supervisors.map((sup, i) => (
                  <div key={i} className="p-2.5 rounded-sm bg-navy-deep/80 border border-navy-light/20 text-xs flex flex-col justify-center font-sans">
                    <div className="font-bold text-white">{sup.name}</div>
                    <div className="text-[10px] text-gray-400 font-mono">{sup.role}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Legal Advisors */}
          <div className="bg-navy-surface/40 border border-navy-light/30 p-6 rounded-sm">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-gold" />
              Legal &amp; Statutory Compliance Advisors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {legalAdvisors.map((leg, idx) => (
                <div key={idx} className="bg-navy-deep p-4 rounded-sm border border-border-navy text-xs font-sans">
                  <div className="font-bold uppercase text-white text-sm font-heading">{leg.name}</div>
                  <div className="text-gold font-mono font-bold text-[11px] mt-0.5">{leg.qualification}</div>
                  <p className="text-gray-300 mt-1.5 leading-relaxed">{leg.experienceHighlight}</p>
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
