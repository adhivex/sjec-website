import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Execute Your Next Industrial Project?",
  subtitle = "Partner with Sai Jagannath Engineering & Construction for reliable electrical erection, precision instrumentation, and safety-first project execution.",
}) => {
  return (
    <section className="relative bg-navy-deep text-white py-16 sm:py-24 overflow-hidden border-t border-b border-border-navy">
      {/* Background industrial graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg-plant.jpg"
          alt="Industrial Execution"
          className="w-full h-full object-cover opacity-15 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-dark/90"></div>
        <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-10 lg:gap-14">
          
          <div className="max-w-2xl space-y-4 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-[0.18em] rounded-sm bg-navy-surface/90 text-gold border border-gold/40">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></span>
              <span>PROJECT CONSULTATION // RFQ</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold uppercase leading-[1.12] font-heading text-white tracking-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans font-normal">
              {subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-gray-300 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Zero Harm Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Core Plant Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Turnkey Commissioning</span>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="btn-gold px-6 sm:px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Submit Project Enquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="btn-outline-white px-6 sm:px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
