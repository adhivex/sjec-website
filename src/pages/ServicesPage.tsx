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
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Engineering Disciplines"
        title="Industrial Electrical &amp; Instrumentation Services"
        description="Turnkey electrical erection, precision instrumentation, cable tray networks, automated Robo Lab installations, and skilled industrial manpower."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Quick Navigation Anchor Bar */}
      <div className="bg-navy border-b border-navy-light/40 sticky top-[60px] sm:top-[68px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-2.5 flex items-center gap-2 sm:gap-4 no-scrollbar">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold flex-shrink-0 mr-1">
            Quick Jump:
          </span>
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="text-xs font-semibold text-gray-200 hover:text-gold uppercase tracking-wider px-3 py-1 rounded bg-navy-dark/80 border border-navy-light/30 flex-shrink-0 transition-colors whitespace-nowrap"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services List - Alternating Deep Dive Layout */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {SERVICES.map((service: Service, index: number) => {
            const Icon = iconMap[service.iconName] || Zap;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 -mt-16"
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Category Marker */}
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-sm bg-navy-dark text-gold shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
                        Discipline 0{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-navy font-heading tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate text-base sm:text-lg leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Documented Capabilities Checklist */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-navy mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-0.5 bg-gold inline-block"></span>
                      Documented Scope &amp; Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.capabilities.map((cap: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal bg-offwhite p-2.5 rounded-sm border border-border-light">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Execution Highlights */}
                  <div className="p-4 bg-navy-surface/20 border-l-4 border-gold rounded-sm text-xs sm:text-sm text-navy font-medium">
                    <div className="font-bold uppercase tracking-wider text-navy mb-1">Execution Standard</div>
                    <ul className="space-y-1 text-slate list-disc list-inside">
                      {service.executionHighlights.map((hl: string, j: number) => (
                        <li key={j}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Enquiry CTA */}
                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      to="/contact"
                      className="btn-gold text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <span>Enquire for {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/projects"
                      className="text-xs font-bold uppercase tracking-wider text-navy hover:text-gold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Related Projects</span>
                      <span className="text-gold">›</span>
                    </Link>
                  </div>
                </div>

                {/* Image Showcase */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-sm overflow-hidden border-2 border-border shadow-card group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/95 p-3 rounded-sm border border-border-navy text-white text-xs flex items-center justify-between">
                      <span className="font-bold uppercase text-gold">{service.title} Scope</span>
                      <span className="font-mono text-gray-400">Verified Technical Execution</span>
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
