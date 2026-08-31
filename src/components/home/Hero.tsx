import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ShieldCheck, Zap, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('company-intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] xl:min-h-[92vh] flex items-center bg-navy-deep text-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16">
      {/* Background Industrial Plant Execution Photography (Local asset, high visual fidelity) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg-plant.jpg"
          alt="Heavy Industrial Plant Execution Environment"
          className="w-full h-full object-cover object-center filter contrast-115 brightness-90"
        />
        
        {/* Layered Gradients: Deep Navy to Right Image Reveal */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-dark/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80"></div>
        
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 opacity-10 blueprint-grid-dark pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center w-full">
          
          {/* Left Column (~55% width, lg:col-span-7): Typography & Positioning Statement */}
          <div className="lg:col-span-7 w-full min-w-0 space-y-5 sm:space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs font-bold tracking-[0.18em] uppercase font-mono backdrop-blur-md shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></span>
              <span className="truncate">INDUSTRIAL ELECTRICAL &amp; INSTRUMENTATION</span>
            </div>

            {/* Main Headline (Refined Modern Industrial Typography - Semi-Bold 600) */}
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-semibold tracking-tight uppercase leading-[1.10] font-heading max-w-sm sm:max-w-md lg:max-w-[380px] xl:max-w-[420px]">
              <span className="text-white block">INDUSTRIAL</span>
              <span className="text-white block">EXPERTISE.</span>
              <span className="text-gold block">RELIABLE</span>
              <span className="text-gold block">EXECUTION.</span>
            </h1>

            {/* Supporting Copy (Manrope) */}
            <p className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed max-w-xl font-sans font-normal">
              Electrical, instrumentation, erection and commissioning solutions for demanding industrial environments.
            </p>

            {/* Engineering Capability Strip (01 / HT-LT ELECTRICAL, 02 / PROCESS INSTRUMENTATION, 03 / ZERO HARM COMMITMENT) */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-gray-200 w-full">
              <div className="p-2.5 sm:p-3 bg-navy-dark/85 rounded-sm border border-white/10 flex items-center gap-2 min-w-0 w-full overflow-hidden shadow-sm">
                <Zap className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] xl:text-[10px] font-mono text-gold block font-bold leading-none">01 //</span>
                  <span className="font-bold tracking-wide uppercase text-[10px] sm:text-[10.5px] xl:text-xs block mt-0.5 truncate sm:whitespace-normal">HT-LT ELECTRICAL</span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 bg-navy-dark/85 rounded-sm border border-white/10 flex items-center gap-2 min-w-0 w-full overflow-hidden shadow-sm">
                <Activity className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] xl:text-[10px] font-mono text-gold block font-bold leading-none">02 //</span>
                  <span className="font-bold tracking-wide uppercase text-[10px] sm:text-[10.5px] xl:text-xs block mt-0.5 truncate sm:whitespace-normal">PROCESS INSTRUMENTATION</span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 bg-navy-dark/85 rounded-sm border border-gold/40 flex items-center gap-2 min-w-0 w-full overflow-hidden shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] xl:text-[10px] font-mono text-gold block font-bold leading-none">03 //</span>
                  <span className="font-bold text-gold tracking-wide uppercase text-[10px] sm:text-[10.5px] xl:text-xs block mt-0.5 truncate sm:whitespace-normal">ZERO HARM COMMITMENT</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/services"
                className="btn-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl flex-shrink-0"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="btn-outline-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

          </div>

          {/* Right Column (~45% width, lg:col-span-5): Framed Industrial Substation Feature */}
          <div className="lg:col-span-5 w-full min-w-0 relative hidden lg:block">
            <div className="relative w-full max-w-full rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl bg-navy-dark group">
              {/* Contained local substation photo with proper responsive constraints */}
              <img
                src="/images/hero-substation.jpg"
                alt="Industrial substation erection and electrical construction"
                className="w-full h-[360px] lg:h-[380px] xl:h-[420px] 2xl:h-[460px] max-w-full object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent pointer-events-none"></div>

              {/* Technical Marker on Image (Top Left) */}
              <div className="absolute top-3 left-3 bg-navy-deep/90 text-gold text-[9px] xl:text-[10px] font-mono font-bold px-2.5 py-1 rounded-sm border border-gold/30 backdrop-blur-sm max-w-[calc(100%-24px)] truncate">
                FIELD ERECTION // HT/LT SUBSTATION
              </div>

              {/* Bottom Spec Information Bar */}
              <div className="absolute bottom-3 left-3 right-3 bg-navy-deep/95 border border-border-navy p-3 rounded-sm backdrop-blur-md">
                <div className="flex items-center justify-between gap-2 min-w-0">
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] font-mono text-gold uppercase tracking-wider">COMMISSIONING STANDARD</div>
                    <div className="text-[11px] xl:text-xs font-bold uppercase text-white font-heading mt-0.5 truncate">
                      Disciplined Turnkey Project Execution
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[9px] xl:text-[10px] font-mono font-bold text-gold px-1.5 py-0.5 rounded bg-navy-surface">
                      CORE PLANTS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-gray-300 hover:text-gold flex flex-col items-center gap-1 text-xs uppercase tracking-widest transition-colors focus:outline-none"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] text-gray-400 font-mono font-semibold">SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
      </button>
    </section>
  );
};
