import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

export const AboutIntro: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Facts */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-navy/10 text-navy border border-navy/20">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>WHO WE ARE</span>
            </div>

            {/* Main Section Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy uppercase tracking-tight leading-tight font-heading">
              Engineering &amp; Execution for Industrial Infrastructure
            </h2>

            {/* Factual Narrative */}
            <div className="space-y-4 text-slate text-base sm:text-lg leading-relaxed">
              <p>
                Sai Jagannath Engineering &amp; Construction (SJEC) is an established industrial contractor specializing in turnkey electrical erection, high-voltage substations, field instrumentation, and automated control systems.
              </p>
              <p>
                Our foundational journey began with <strong className="text-navy font-semibold">M/S Sri Jagannath in 2005</strong>, delivering dedicated electrical maintenance and technical support. Expanding operations from <strong className="text-navy font-semibold">2013 onwards</strong>, the organization has consistently executed large-scale industrial projects across Cement, Steel, DRI, and Pellet plants.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-charcoal">HT/LT Switchgear &amp; Substation Erection</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-charcoal">Precision Instrument Loop Calibration</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-charcoal">Complete Robo Lab Automation Setup</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-charcoal">Strict Zero Harm Site Compliance</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="btn-navy text-sm px-6 py-3.5 inline-flex items-center gap-2 group shadow-sm hover:bg-navy-surface"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
              </Link>
            </div>

          </div>

          {/* Right Column: Large Project Image with Floating Technical Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border-2 border-border shadow-card group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80"
                alt="SJEC Industrial Plant Cable & Electrical Execution"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>
              
              {/* Bottom overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/95 border border-border-navy p-4 rounded-sm backdrop-blur-sm">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs text-gold uppercase font-bold tracking-wider">Industrial Milestone</div>
                    <div className="text-sm font-extrabold uppercase">Executing Core Industrial Projects</div>
                  </div>
                  <span className="text-xs font-mono text-gray-400">Since 2005</span>
                </div>
              </div>
            </div>

            {/* Floating Gold Year Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-3 bg-gold text-navy-dark p-4 rounded-sm shadow-xl border-2 border-white">
              <Calendar className="w-6 h-6 text-navy-dark" />
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest leading-none">Established</div>
                <div className="text-xl font-black leading-tight">2005 / 2013</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
