import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { SJECLogo } from './SJECLogo';
import { COMPANY_INFO } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white border-t border-border-navy relative overflow-hidden">
      {/* Subtle background industrial pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none grid-pattern"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand and Bio (2 cols wide on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <SJECLogo variant="compact" theme="dark" height={44} />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md pt-2">
              Sai Jagannath Engineering &amp; Construction delivers specialized industrial electrical, instrumentation, erection, and commissioning solutions for high-demand core process plants.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Zero Harm Safety Ethos</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-navy-surface border border-white/20 text-gray-300 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4 text-gold-light" />
                <span>Since 2005</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-gold inline-block"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                  Equipment &amp; Tools
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors inline-flex items-center gap-1.5 group">
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Project Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-gold inline-block"></span>
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/services/electrical" className="hover:text-gold transition-colors">
                  HT/LT Electrical Panels
                </Link>
              </li>
              <li>
                <Link to="/services/instrumentation" className="hover:text-gold transition-colors">
                  Instrument Calibration
                </Link>
              </li>
              <li>
                <Link to="/services/erection-commissioning" className="hover:text-gold transition-colors">
                  Transformer Erection
                </Link>
              </li>
              <li>
                <Link to="/services/cable-systems" className="hover:text-gold transition-colors">
                  Cable Tray Fabrication
                </Link>
              </li>
              <li>
                <Link to="/services/automation-plc" className="hover:text-gold transition-colors">
                  Robo Lab &amp; PLC Systems
                </Link>
              </li>
              <li>
                <Link to="/services/industrial-manpower" className="hover:text-gold transition-colors">
                  Industrial Manpower
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Public Business Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-gold inline-block"></span>
              Discuss Your Project
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
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
                <span className="text-gray-300">{COMPANY_INFO.contact.phone}</span>
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
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-6 border-t border-navy-light/30 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            &copy; 2026 Sai Jagannath Engineering &amp; Construction. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-gold font-mono tracking-wider">sjec.in</span>
            <span>|</span>
            <span>POWERED BY FAITH CONNECTED BY TRUST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
