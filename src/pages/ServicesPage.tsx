import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { SERVICES } from '../data/services';
import type { Service } from '../types';
import {
  Zap,
  Sliders,
  Cog,
  Layers,
  Cpu,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Sliders,
  Cog,
  Layers,
  Cpu,
  Users,
};

export const ServicesPage: React.FC = () => {
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
        badge="Engineering Disciplines"
        title="Industrial Electrical &amp; Instrumentation Services"
        description="Turnkey electrical erection, precision instrumentation, cable tray networks, automated Robo Lab installations, and skilled industrial manpower."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Quick Navigation Anchor Bar */}
      <div className="bg-navy-dark/95 border-b border-border-navy sticky top-[56px] sm:top-[64px] z-30 shadow-lg backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-2.5 flex items-center gap-2 sm:gap-3 no-scrollbar">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-gold flex-shrink-0 mr-1">
            DISCIPLINE JUMP:
          </span>
          {SERVICES.map((s, idx) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="text-[11px] sm:text-xs font-bold text-gray-300 hover:text-gold uppercase tracking-wider px-3 py-1 rounded-sm bg-navy-surface border border-navy-light/30 flex-shrink-0 transition-colors whitespace-nowrap"
            >
              0{idx + 1} // {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services List - Alternating Industrial Layout */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {SERVICES.map((service: Service, index: number) => {
            const Icon = iconMap[service.iconName] || Zap;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-16 -mt-16"
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-5 sm:space-y-6 min-w-0 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Category Marker */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-sm bg-navy-surface border border-gold/40 text-gold shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest block">
                        DISCIPLINE 0{index + 1} //
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-semibold uppercase text-white font-heading tracking-tight mt-0.5">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {service.fullDesc}
                  </p>

                  {/* Documented Capabilities Checklist */}
                  <div className="pt-2">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-gold mb-3 flex items-center gap-2">
                      <span className="w-2 h-0.5 bg-gold inline-block"></span>
                      Documented Scope &amp; Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.capabilities.map((cap: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200 bg-navy-surface/50 p-2.5 rounded-sm border border-navy-light/30">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Execution Highlights */}
                  <div className="p-4 bg-navy-surface/80 border-l-4 border-gold rounded-sm text-xs sm:text-sm text-gray-200">
                    <div className="font-mono font-bold uppercase tracking-wider text-gold text-[10px] mb-1">Execution Standards</div>
                    <ul className="space-y-1 text-gray-300 list-disc list-inside">
                      {service.executionHighlights.map((hl: string, j: number) => (
                        <li key={j}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Enquiry CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="btn-gold text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2 group shadow-md"
                    >
                      <span>Enquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/projects"
                      className="btn-outline-white text-xs px-5 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      <span>Related Projects</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </Link>
                  </div>
                </div>

                {/* Framed Industrial Image Showcase */}
                <div className={`lg:col-span-5 min-w-0 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-full rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl bg-navy-dark group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent"></div>
                    
                    {/* Top spec tag */}
                    <div className="absolute top-3 left-3 bg-navy-deep/90 text-gold text-[9px] font-mono font-bold px-2.5 py-1 rounded-sm border border-gold/30 backdrop-blur-sm">
                      FIELD SPEC // 0{index + 1}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-navy-deep/95 p-3 rounded-sm border border-border-navy text-white text-xs flex items-center justify-between backdrop-blur-md">
                      <span className="font-bold uppercase text-gold text-xs font-heading">{service.title} Scope</span>
                      <span className="font-mono text-gray-400 text-[10px]">Verified Execution</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
