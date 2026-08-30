import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Award, ArrowRight } from 'lucide-react';
import { TEAM } from '../../data/team';

export const TeamPreview: React.FC = () => {
  const advisors = TEAM.filter(t => t.department === 'advisory' || t.department === 'independent');
  const projectManagers = TEAM.filter(t => t.department === 'project-management');

  return (
    <section className="bg-offwhite py-20 sm:py-28 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
            07
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-navy uppercase">
            GOVERNANCE // ADVISORY BOARD &amp; PROJECT COMMAND
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-navy/20 to-transparent"></span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-navy font-heading leading-tight tracking-tight">
              Experienced Project Leadership
            </h2>
            <p className="mt-4 text-slate text-base sm:text-lg leading-relaxed font-sans">
              Guided by veteran industrial advisors from SAIL and Tata Growth Shop, supported by certified project engineers with decades of field commissioning experience.
            </p>
          </div>

          <Link
            to="/about"
            className="btn-navy text-xs px-6 py-3.5 inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <span>Full Organizational Hierarchy</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

        {/* Advisory Board (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advisors.map((adv, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border hover:border-gold rounded-sm p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-navy/10 text-navy border border-navy/20">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    {adv.department === 'independent' ? 'Technical Advisor' : 'Strategic Advisor'}
                  </span>
                  <span className="text-xs font-mono text-gray-400">ADVISORY</span>
                </div>

                <h3 className="text-xl font-extrabold uppercase tracking-tight text-navy group-hover:text-navy-surface font-heading">
                  {adv.name}
                </h3>
                <div className="text-xs font-bold font-mono text-gold mt-1">
                  {adv.qualification}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate leading-relaxed font-sans">
                  {adv.experienceHighlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-light text-[11px] font-bold uppercase tracking-wider text-navy flex items-center justify-between font-sans">
                <span>{adv.role}</span>
                <UserCheck className="w-4 h-4 text-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Execution Managers Box */}
        <div className="bg-navy-deep text-white rounded-sm p-7 sm:p-10 border border-border-navy shadow-2xl">
          <div className="border-b border-navy-light/40 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">
                SITE COMMAND &amp; EXECUTION
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white font-heading mt-0.5">
                Qualified Project Managers (AMIE / B.Tech)
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-400">ENGINEERING LEADERSHIP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {projectManagers.map((pm, i) => (
              <div key={i} className="bg-navy-surface/50 border border-navy-light/30 p-5 rounded-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase font-heading">{pm.name}</h4>
                  <span className="text-[10px] font-mono font-bold text-gold px-2 py-0.5 rounded bg-navy-dark">
                    {pm.qualification}
                  </span>
                </div>
                <div className="text-xs text-gray-300 font-semibold mt-1 font-sans">{pm.role}</div>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed font-sans">{pm.experienceHighlight}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
