import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { SJECLogo } from './SJECLogo';
import { COMPANY_INFO } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-deep text-white border-t border-border-navy relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Official Brand Identity & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group p-1.5 bg-white/95 hover:bg-white rounded-sm transition-all shadow-sm">
              <SJECLogo height={52} />
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md pt-2 font-sans">
              Sai Jagannath Engineering &amp; Construction provides industrial electrical erection, instrumentation calibration, substation setup, and turnkey plant execution across core process sectors.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface/80 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Zero Harm Commitment</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface/80 border border-white/20 text-gray-300 text-xs font-bold uppercase tracking-wider font-mono">
                <Award className="w-4 h-4 text-gold-light" />
                <span>Established 2005</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2 font-heading">
              <span className="w-2 h-0.5 bg-gold inline-block"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  About SJEC
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Services &amp; Scope
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/safety-quality" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Safety &amp; Quality
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Capabilities &amp; Tooling
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Site Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2 font-heading">
              <span className="w-2 h-0.5 bg-gold inline-block"></span>
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300 font-sans">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  HT/LT Electrical Panels
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Instrument Calibration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Transformer Erection
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Cable Tray Fabrication
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Robo Lab &amp; Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Industrial Manpower
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Public Business Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2 font-heading">
              <span className="w-2 h-0.5 bg-gold inline-block"></span>
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-gray-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.contact.address.displayFull}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-gold transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-400">{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full btn-gold text-xs py-2.5 px-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Official Tagline Banner */}
        <div className="mt-12 pt-6 border-t border-navy-light/30 flex items-center justify-between text-xs text-gray-300 font-mono">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs">
            POWERED BY FAITH CONNECTED BY TRUST
          </span>
          <span className="text-gray-400 hidden sm:inline">sjec.in</span>
        </div>

        {/* Refined Copyright Bar & ADHIVEX Development Credit */}
        <div className="mt-6 pt-6 border-t border-navy-light/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-400 gap-3 font-sans">
          <div>
            &copy; 2026 Sai Jagannath Engineering &amp; Construction. All Rights Reserved.
          </div>
          <div>
            Designed &amp; Developed by{' '}
            <a
              href="https://adhivex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gold font-semibold transition-colors underline decoration-gold/40 hover:decoration-gold"
            >
              ADHIVEX
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
