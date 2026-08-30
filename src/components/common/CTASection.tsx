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
    <section className="relative bg-navy-deep text-white py-20 sm:py-28 overflow-hidden border-t border-b border-border-navy">
      {/* Background industrial graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
          alt="Industrial Execution"
          className="w-full h-full object-cover opacity-15 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-dark/90"></div>
        <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-12">
          
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold font-mono uppercase tracking-[0.2em] rounded-sm bg-gold/15 text-gold border border-gold/40">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
              <span>PROJECT CONSULTATION // RFQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.1] font-heading text-white">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans font-normal">
              {subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-300 font-sans">
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

          <div className="mt-10 lg:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="btn-gold px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Submit Project Enquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="btn-outline-white px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
