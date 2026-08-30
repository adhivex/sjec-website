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
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center bg-navy-deep text-white overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Industrial Plant Execution Photography (No watermarks, high visual fidelity) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=90"
          alt="Heavy Industrial Electrical & Process Instrumentation Site"
          className="w-full h-full object-cover object-center filter contrast-115 brightness-95"
        />
        
        {/* Layered Engineering Gradients (Keeping machinery and plant structure visible) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-dark/85 to-navy-deep/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80"></div>
        
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 opacity-15 blueprint-grid-dark pointer-events-none"></div>
      </div>

      {/* Engineering Technical Grid Lines (Subtle Framing) */}
      <div className="absolute inset-x-4 sm:inset-x-8 top-28 bottom-12 border border-white/10 pointer-events-none hidden md:block">
        {/* Top-left Coordinate */}
        <div className="absolute -top-2.5 left-6 bg-navy-deep px-2 text-[10px] font-mono text-gold tracking-widest uppercase">
          REF // SJEC-SYS-2026
        </div>
        {/* Top-right Lat/Lon */}
        <div className="absolute -top-2.5 right-6 bg-navy-deep px-2 text-[10px] font-mono text-gray-400 tracking-widest">
          LAT 20.4625° N / LON 85.8828° E
        </div>
        {/* Bottom-left Standard */}
        <div className="absolute -bottom-2.5 left-6 bg-navy-deep px-2 text-[10px] font-mono text-gray-400 tracking-widest uppercase">
          DISCIPLINE: HT/LT ELEC &amp; INST
        </div>
        {/* Bottom-right Status */}
        <div className="absolute -bottom-2.5 right-6 bg-navy-deep px-2 text-[10px] font-mono text-gold tracking-widest uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
          <span>EXECUTION READY</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="max-w-3xl">
          
          {/* Technical Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span>INDUSTRIAL ELECTRICAL &amp; INSTRUMENTATION</span>
          </div>

          {/* Main Headline (Sora ExtraBold) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[1.08] font-heading">
            <span className="text-white block">INDUSTRIAL EXPERTISE.</span>
            <span className="text-gold block mt-1">RELIABLE EXECUTION.</span>
          </h1>

          {/* Supporting Copy (Manrope) */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl font-sans font-normal">
            Electrical, instrumentation, erection and commissioning solutions for demanding industrial environments.
          </p>

          {/* Engineering Capability Strip (HT/LT Electrical, Process Instrumentation, Zero Harm Commitment) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-2xl text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2.5 bg-navy-dark/60 p-2.5 rounded-sm border border-white/10">
              <Zap className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="font-semibold tracking-wide">HT/LT Electrical</span>
            </div>
            <div className="flex items-center gap-2.5 bg-navy-dark/60 p-2.5 rounded-sm border border-white/10">
              <Activity className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="font-semibold tracking-wide">Process Instrumentation</span>
            </div>
            <div className="flex items-center gap-2.5 bg-navy-dark/60 p-2.5 rounded-sm border border-gold/30">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="font-bold text-gold tracking-wide">Zero Harm Commitment</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/services"
              className="btn-gold px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="btn-outline-white px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-gray-300 hover:text-gold flex flex-col items-center gap-1 text-xs uppercase tracking-widest transition-colors focus:outline-none"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] text-gray-400 font-mono font-semibold">SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
      </button>
    </section>
  );
};
