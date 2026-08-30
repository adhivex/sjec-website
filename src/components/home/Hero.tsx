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
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center bg-navy-deep text-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background Industrial Plant Execution Photography (No watermarks, high visual fidelity) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=90"
          alt="Heavy Industrial Electrical & Process Instrumentation Site"
          className="w-full h-full object-cover object-center filter contrast-115 brightness-90"
        />
        
        {/* Layered Gradients: Deep Navy to Right Image Reveal */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80"></div>
        
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 opacity-10 blueprint-grid-dark pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Typography & Positioning Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>INDUSTRIAL ELECTRICAL &amp; INSTRUMENTATION</span>
            </div>

            {/* Main Headline (Sora ExtraBold) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[1.06] font-heading">
              <span className="text-white block">INDUSTRIAL EXPERTISE.</span>
              <span className="text-gold block mt-1">RELIABLE EXECUTION.</span>
            </h1>

            {/* Supporting Copy (Manrope) */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl font-sans font-normal">
              Electrical, instrumentation, erection and commissioning solutions for demanding industrial environments.
            </p>

            {/* Engineering Capability Strip (01 / HT-LT ELECTRICAL, 02 / PROCESS INSTRUMENTATION, 03 / ZERO HARM COMMITMENT) */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-gray-200">
              <div className="p-3 bg-navy-dark/80 rounded-sm border border-white/10 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-gold block font-bold">01 //</span>
                  <span className="font-bold tracking-wide uppercase">HT-LT ELECTRICAL</span>
                </div>
              </div>

              <div className="p-3 bg-navy-dark/80 rounded-sm border border-white/10 flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-gold block font-bold">02 //</span>
                  <span className="font-bold tracking-wide uppercase">PROCESS INSTRUMENTATION</span>
                </div>
              </div>

              <div className="p-3 bg-navy-dark/80 rounded-sm border border-gold/40 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-gold block font-bold">03 //</span>
                  <span className="font-bold text-gold tracking-wide uppercase">ZERO HARM COMMITMENT</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/services"
                className="btn-gold px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="btn-outline-white px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Large Architectural Plant Feature */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-sm overflow-hidden border-2 border-border-navy shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial Substation Erection"
                className="w-full h-[480px] object-cover filter contrast-115 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent"></div>

              {/* Technical Marker on Image */}
              <div className="absolute top-4 left-4 bg-navy-deep/90 text-gold text-[10px] font-mono font-bold px-3 py-1 rounded-sm border border-gold/30">
                FIELD ERECTION // HT/LT SUBSTATION
              </div>

              {/* Bottom Technical Spec */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/95 border border-border-navy p-4 rounded-sm">
                <div className="text-[10px] font-mono text-gold uppercase tracking-wider">COMMISSIONING STANDARD</div>
                <div className="text-xs font-bold uppercase text-white font-heading mt-0.5">
                  Disciplined Turnkey Project Execution
                </div>
              </div>
            </div>

            {/* Asymmetric Floating Accent Badge */}
            <div className="absolute -bottom-4 -left-6 bg-gold text-navy-dark p-3.5 rounded-sm shadow-xl border-2 border-white max-w-[200px]">
              <div className="text-[10px] font-extrabold uppercase font-mono tracking-wider">PROVEN CAPABILITY</div>
              <div className="text-xs font-black uppercase mt-0.5 leading-tight font-heading">
                Cement, Steel &amp; DRI Plants
              </div>
            </div>
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
