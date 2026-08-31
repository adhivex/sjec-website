import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AboutIntro: React.FC = () => {
  return (
    <section id="company-intro" className="bg-white py-20 sm:py-28 border-b border-border relative overflow-hidden">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 opacity-40 blueprint-grid pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
            01
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-navy uppercase">
            WHO WE ARE // CORPORATE OVERVIEW
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-navy/20 to-transparent"></span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Bold Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-navy font-heading leading-[1.1] tracking-tight">
              Engineering &amp; Construction For Industrial Infrastructure
            </h2>

            <div className="space-y-4 text-slate text-base sm:text-lg leading-relaxed font-sans">
              <p>
                Sai Jagannath Engineering &amp; Construction (SJEC) operates as a high-reliability industrial execution contractor specializing in turnkey electrical erection, high-voltage substations, field instrumentation, and automated plant commissioning.
              </p>
              <p>
                The organization&apos;s journey began under <strong className="text-navy font-bold">M/S Sri Jagannath in 2005</strong>, delivering specialized electrical maintenance services. From <strong className="text-navy font-bold">2013 onwards</strong>, SJEC consolidated and expanded its project capabilities, executing large-scale projects across major Cement, Steel, DRI, and Pellet plants in eastern India.
              </p>
            </div>

            {/* Technical Chronology Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-light">
              <div className="p-4 rounded-sm bg-offwhite border-l-4 border-gold shadow-sm">
                <div className="text-[11px] font-mono font-bold text-gold uppercase">FOUNDATIONAL INCEPTION</div>
                <div className="text-xl font-black text-navy font-heading mt-0.5">2005</div>
                <div className="text-xs text-slate mt-1">M/S Sri Jagannath electrical maintenance &amp; services</div>
              </div>

              <div className="p-4 rounded-sm bg-offwhite border-l-4 border-navy shadow-sm">
                <div className="text-[11px] font-mono font-bold text-navy uppercase">TURNKEY INDUSTRIAL SCALE</div>
                <div className="text-xl font-black text-navy font-heading mt-0.5">2013 — Present</div>
                <div className="text-xs text-slate mt-1">Turnkey electrical erection, Robo Lab automation &amp; commissioning</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                to="/about"
                className="btn-navy text-xs px-7 py-4 inline-flex items-center gap-2 group shadow-sm"
              >
                <span>Discover Our Heritage &amp; Team</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Layered Project Image with Technical Metadata Overlay */}
          <div className="lg:col-span-5 relative lg:mt-4">
            <div className="relative rounded-sm overflow-hidden border-2 border-border shadow-card group">
              <img
                src="/images/plant-cement-mill.jpg"
                alt="SJEC Industrial Substation & Cable Execution"
                className="w-full h-[460px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent"></div>

              {/* Technical Annotation on Image */}
              <div className="absolute top-4 left-4 bg-navy-dark/90 text-gold text-[10px] font-mono font-bold px-2.5 py-1 rounded-sm border border-gold/30">
                FIELD SPEC // HT/LT ERECTION
              </div>

              {/* Bottom Project Metadata Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/95 border border-border-navy p-4 rounded-sm backdrop-blur-md">
                <div className="flex items-center justify-between text-white text-xs">
                  <div>
                    <div className="text-[10px] font-mono text-gold uppercase tracking-wider">PROJECT POSITIONING</div>
                    <div className="text-sm font-bold uppercase font-heading mt-0.5">Core Process Plant Execution</div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">EST. 2005</span>
                </div>
              </div>
            </div>

            {/* Asymmetrical Floating Engineering Badge (Contained within column) */}
            <div className="absolute -bottom-3 right-3 sm:right-4 bg-gold text-navy-dark p-3.5 rounded-sm shadow-xl border-2 border-white max-w-[200px] hidden sm:block z-20">
              <div className="text-[9px] font-extrabold uppercase font-mono tracking-wider">SAFETY COMMITMENT</div>
              <div className="text-xs font-black uppercase mt-0.5 leading-tight font-heading">
                Zero Harm Culture On Every Plant Site
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
