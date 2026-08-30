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
    <section className="relative bg-navy-dark text-white py-16 sm:py-20 overflow-hidden border-t border-b border-navy-light/30">
      {/* Background industrial graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
          alt="Industrial Execution"
          className="w-full h-full object-cover opacity-15 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-dark/95 to-navy/90"></div>
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-8">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-gold/15 text-gold border border-gold/30">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
              <span>Project Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight font-heading text-white">
              {title}
            </h2>

            <p className="mt-4 text-base text-gray-300 leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Zero Harm Safety Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Proven Process Plant Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Qualified AMIE/B.Tech Engineers</span>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="btn-gold px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Submit Project Enquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="btn-outline-white px-6 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Portfolio</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
