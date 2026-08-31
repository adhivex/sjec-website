import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { INDUSTRIES } from '../data/industries';
import type { Industry } from '../types';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();

  useEffect(() => {
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [slug]);

  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Industrial Sectors"
        title="Industries We Serve"
        description="Delivering heavy electrical, instrumentation, and plant automation solutions across demanding core industrial environments."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* Quick Navigation Anchor Bar */}
      <div className="bg-navy-dark/95 border-b border-border-navy sticky top-[56px] sm:top-[64px] z-30 shadow-lg backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-2.5 flex items-center gap-2 sm:gap-3 no-scrollbar">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-gold flex-shrink-0 mr-1">
            SECTOR JUMP:
          </span>
          {INDUSTRIES.map((ind, idx) => (
            <a
              key={ind.id}
              href={`#${ind.slug}`}
              className="text-[11px] sm:text-xs font-bold text-gray-300 hover:text-gold uppercase tracking-wider px-3 py-1 rounded-sm bg-navy-surface border border-navy-light/30 flex-shrink-0 transition-colors whitespace-nowrap"
            >
              0{idx + 1} // {ind.title}
            </a>
          ))}
        </div>
      </div>

      {/* 6 Industry Sections */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {INDUSTRIES.map((industry: Industry, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={industry.id}
                id={industry.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-16 -mt-16"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 min-w-0 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative w-full rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl bg-navy-dark group">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent"></div>
                    
                    {/* Top spec tag */}
                    <div className="absolute top-3 left-3 bg-navy-deep/90 text-gold text-[9px] font-mono font-bold px-2.5 py-1 rounded-sm border border-gold/30 backdrop-blur-sm">
                      SECTOR 0{index + 1} // CORE
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-navy-deep/95 p-3 rounded-sm border border-border-navy text-white text-xs backdrop-blur-md">
                      <div className="text-[10px] text-gold uppercase font-mono font-bold">{industry.subtitle}</div>
                      <div className="text-sm font-bold uppercase font-heading text-white mt-0.5">{industry.title}</div>
                    </div>
                  </div>
                </div>

                {/* Content & Scope */}
                <div className={`lg:col-span-7 space-y-5 sm:space-y-6 min-w-0 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">
                      INDUSTRIAL SECTOR 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold uppercase text-white font-heading tracking-tight mt-1">
                      {industry.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-gray-400 mt-1">{industry.subtitle}</p>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {industry.description}
                  </p>

                  {/* Key Execution Focus */}
                  <div className="bg-navy-surface/60 p-4 sm:p-5 rounded-sm border border-navy-light/30 space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-gold" />
                      Key Execution Focus
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.keyExecutionFocus.map((focus: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                          <span className="leading-snug">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typical Project Scope */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-2.5">
                      Typical Execution Scope
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
                      {industry.typicalScope.map((scope: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 bg-navy-surface/30 p-2.5 rounded-sm border border-navy-light/20">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="btn-gold text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2 group shadow-md"
                    >
                      <span>Discuss {industry.title} Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/projects"
                      className="btn-outline-white text-xs px-5 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      <span>View Sector Projects</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
