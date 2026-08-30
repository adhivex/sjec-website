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
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Industrial Sectors"
        title="Industries We Serve"
        description="Delivering heavy electrical, instrumentation, and plant automation solutions across demanding core industrial environments."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* Quick Navigation Anchor Bar */}
      <div className="bg-navy border-b border-navy-light/40 sticky top-[60px] sm:top-[68px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-2.5 flex items-center gap-2 sm:gap-4 no-scrollbar">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold flex-shrink-0 mr-1">
            Sectors:
          </span>
          {INDUSTRIES.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.slug}`}
              className="text-xs font-semibold text-gray-200 hover:text-gold uppercase tracking-wider px-3 py-1 rounded bg-navy-dark/80 border border-navy-light/30 flex-shrink-0 transition-colors whitespace-nowrap"
            >
              {ind.title}
            </a>
          ))}
        </div>
      </div>

      {/* Intro Overview */}
      <section className="py-12 bg-offwhite border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-navy font-heading">
            Tailored Engineering for Demanding Process Environments
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate leading-relaxed">
            Every industrial sector operates with distinct electrical loads, hazardous area classifications, process control loops, and environmental conditions. SJEC engineers bring deep domain expertise to ensure resilient installations.
          </p>
        </div>
      </section>

      {/* 6 Industry Sections */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {INDUSTRIES.map((industry: Industry, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={industry.id}
                id={industry.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-16 -mt-16"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-sm overflow-hidden border-2 border-border shadow-card group">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-gold text-navy-dark text-xs font-black px-3 py-1 rounded-sm uppercase tracking-wider">
                      Sector 0{index + 1}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs text-gold uppercase font-bold tracking-wider">{industry.subtitle}</div>
                      <div className="text-lg font-extrabold uppercase font-heading">{industry.title}</div>
                    </div>
                  </div>
                </div>

                {/* Content & Scope */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Industrial Sector</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-navy font-heading mt-1">
                      {industry.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate mt-0.5">{industry.subtitle}</p>
                  </div>

                  <p className="text-slate text-base leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Key Execution Focus */}
                  <div className="bg-offwhite p-5 rounded-sm border border-border space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy flex items-center gap-2">
                      <Zap className="w-4 h-4 text-gold" />
                      Key Execution Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.keyExecutionFocus.map((focus: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typical Project Scope */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">
                      Typical Execution Scope
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate">
                      {industry.typicalScope.map((scope: string, j: number) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="btn-navy text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <span>Discuss {industry.title} Project</span>
                      <ArrowRight className="w-4 h-4 text-gold" />
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
