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
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-navy-deep text-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Typography & Positioning Statement */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs font-bold tracking-[0.2em] uppercase font-mono backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>INDUSTRIAL ELECTRICAL &amp; INSTRUMENTATION</span>
            </div>

            {/* Main Headline (Sora ExtraBold) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[1.06] font-heading">
              <span className="text-white block">INDUSTRIAL EXPERTISE.</span>
              <span className="text-gold block mt-1">RELIABLE EXECUTION.</span>
            </h1>

            {/* Supporting Copy (Manrope) */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-2xl font-sans font-normal">
              Electrical, instrumentation, erection and commissioning solutions for demanding industrial environments.
            </p>

            {/* Engineering Capability Strip (01 / HT-LT ELECTRICAL, 02 / PROCESS INSTRUMENTATION, 03 / ZERO HARM COMMITMENT) */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-200">
              <div className="p-3 bg-navy-dark/85 rounded-sm border border-white/10 flex items-center gap-2.5 shadow-sm">
                <Zap className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-gold block font-bold">01 //</span>
                  <span className="font-bold tracking-wide uppercase text-[11px] sm:text-xs">HT-LT ELECTRICAL</span>
                </div>
              </div>

              <div className="p-3 bg-navy-dark/85 rounded-sm border border-white/10 flex items-center gap-2.5 shadow-sm">
                <Activity className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-gold block font-bold">02 //</span>
                  <span className="font-bold tracking-wide uppercase text-[11px] sm:text-xs">PROCESS INSTRUMENTATION</span>
                </div>
              </div>

              <div className="p-3 bg-navy-dark/85 rounded-sm border border-gold/40 flex items-center gap-2.5 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-gold block font-bold">03 //</span>
                  <span className="font-bold text-gold tracking-wide uppercase text-[11px] sm:text-xs">ZERO HARM COMMITMENT</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/services"
                className="btn-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="btn-outline-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Framed Industrial Substation Feature */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl bg-navy-dark group">
              {/* Reliable local substation photo with proper aspect ratio */}
              <img
                src="/images/hero-substation.jpg"
                alt="Industrial substation erection and electrical construction"
                className="w-full h-[400px] xl:h-[440px] object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent"></div>

              {/* Technical Marker on Image (Top Left) */}
              <div className="absolute top-3.5 left-3.5 bg-navy-deep/90 text-gold text-[10px] font-mono font-bold px-3 py-1 rounded-sm border border-gold/30 backdrop-blur-sm">
                FIELD ERECTION // HT/LT SUBSTATION
              </div>

              {/* Bottom Spec Information Bar */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-navy-deep/95 border border-border-navy p-3.5 rounded-sm backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-gold uppercase tracking-wider">COMMISSIONING STANDARD</div>
                    <div className="text-xs font-bold uppercase text-white font-heading mt-0.5">
                      Disciplined Turnkey Project Execution
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-gold px-2 py-0.5 rounded bg-navy-surface">
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-gray-300 hover:text-gold flex flex-col items-center gap-1 text-xs uppercase tracking-widest transition-colors focus:outline-none"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] text-gray-400 font-mono font-semibold">SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
      </button>
    </section>
  );
};
