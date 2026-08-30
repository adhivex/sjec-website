import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ShieldCheck, Zap, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('technical-strip');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center bg-navy-deep text-white overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Background Industrial Photography with Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
          alt="Industrial Electrical & Instrumentation Execution"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
        />
        {/* Layered dark navy gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-dark/95 to-navy/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/60"></div>
        {/* Subtle engineering grid texture */}
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="max-w-3xl">
          
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-sm bg-navy-dark/80 border border-gold/40 text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span>{COMPANY_INFO.businessPositioning}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.1] font-heading text-white">
            Industrial Expertise.{' '}
            <span className="text-gold block sm:inline">Reliable Execution.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl font-normal">
            {COMPANY_INFO.subheadline}
          </p>

          {/* Trust Highlights */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-navy-light/40 max-w-xl text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gold flex-shrink-0" />
              <span>HT/LT Electrical</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Process Instrumentation</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Zero Harm Ethos</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/services"
              className="btn-gold px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="btn-outline-white px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
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
        <span className="text-[10px] text-gray-400 font-semibold">Scroll Down</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-gold" />
      </button>
    </section>
  );
};
