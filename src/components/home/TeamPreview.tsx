import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Award, ArrowRight } from 'lucide-react';
import { TEAM } from '../../data/team';
import { SectionHeader } from '../common/SectionHeader';

export const TeamPreview: React.FC = () => {
  const advisors = TEAM.filter(t => t.department === 'advisory' || t.department === 'independent');
  const projectManagers = TEAM.filter(t => t.department === 'project-management');

  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Leadership &amp; Advisory"
          title="Experienced Project Leadership"
          subtitle="Guided by veteran industrial advisors from SAIL and Tata Growth Shop, alongside experienced engineering managers."
          align="center"
        />

        {/* Advisory & Senior Governance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {advisors.map((adv, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border hover:border-gold/60 rounded-sm p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-navy/10 text-navy border border-navy/20">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    {adv.department === 'independent' ? 'Technical Advisor' : 'Strategic Advisor'}
                  </span>
                  <span className="text-xs font-mono text-gray-400">BOARD</span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-wide text-navy group-hover:text-navy-surface font-heading">
                  {adv.name}
                </h3>
                <div className="text-xs font-semibold text-gold mt-0.5">
                  {adv.qualification}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate leading-relaxed">
                  {adv.experienceHighlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-light text-[11px] font-bold uppercase tracking-wider text-navy flex items-center justify-between">
                <span>{adv.role}</span>
                <UserCheck className="w-4 h-4 text-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Managers & Operational Leadership Highlight */}
        <div className="bg-navy-dark text-white rounded-sm p-6 sm:p-8 border border-border-navy shadow-xl">
          <div className="md:flex md:items-center md:justify-between border-b border-navy-light/40 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Engineering Command</span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white font-heading mt-1">
                Project Execution Managers &amp; Partners
              </h3>
            </div>
            <Link
              to="/about"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light inline-flex items-center gap-1.5"
            >
              <span>View Full Organization Structure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectManagers.map((pm, i) => (
              <div key={i} className="bg-navy-surface/60 border border-navy-light/30 p-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase">{pm.name}</h4>
                  <span className="text-[10px] font-mono font-semibold text-gold px-2 py-0.5 rounded bg-navy-deep">
                    {pm.qualification}
                  </span>
                </div>
                <div className="text-xs text-gray-300 font-medium mt-1">{pm.role}</div>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2">{pm.experienceHighlight}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
