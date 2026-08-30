import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SJECLogo } from './SJECLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Safety & Quality', path: '/safety-quality' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isNavActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const headerBgClass = isScrolled
    ? 'bg-navy-deep/95 backdrop-blur-md border-b border-navy-light/30 shadow-xl py-2.5'
    : 'bg-gradient-to-b from-navy-deep/95 via-navy-deep/60 to-transparent py-3 sm:py-4 border-b border-white/5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official SJEC Logo (Locked Artwork) */}
          <Link
            to="/"
            className="flex-shrink-0 group focus:outline-none focus:ring-1 focus:ring-gold/60 rounded p-1 bg-white/95 hover:bg-white rounded-sm shadow-sm transition-all"
            aria-label="SJEC Home"
          >
            <SJECLogo height={isScrolled ? 42 : 48} />
          </Link>

          {/* Desktop Navigation Bar */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isNavActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-[12.5px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 rounded-sm font-sans ${
                    active
                      ? 'text-gold bg-gold/10 border-b-2 border-gold font-extrabold'
                      : 'text-gray-200 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Tablet/Medium Navigation (Compact Text) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isNavActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2 py-1.5 text-[11.5px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 rounded-sm font-sans ${
                    active
                      ? 'text-gold bg-gold/10 border-b-2 border-gold'
                      : 'text-gray-200 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="btn-gold text-xs px-5 py-2.5 uppercase font-bold tracking-wider flex items-center gap-2 group shadow-md"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-gold text-navy-dark rounded-sm hover:bg-gold-light transition-colors"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-gold hover:bg-white/5 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Full Screen Navigation Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-navy-deep border-b border-border-navy shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-4 pb-8 space-y-1 max-h-[85vh] overflow-y-auto blueprint-grid-dark">
            {navLinks.map((link, idx) => {
              const active = isNavActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3.5 text-sm font-bold tracking-wider uppercase rounded-sm transition-colors font-sans ${
                    active
                      ? 'text-gold bg-gold/15 border-l-4 border-gold'
                      : 'text-gray-200 hover:text-gold hover:bg-navy-surface'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-gold/60">0{idx + 1}</span>
                </Link>
              );
            })}
            <div className="pt-6 mt-4 border-t border-navy-light/30">
              <Link
                to="/contact"
                className="w-full btn-gold py-4 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
