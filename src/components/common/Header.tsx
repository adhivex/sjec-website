import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { SJECLogo } from './SJECLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  const headerBgClass = isScrolled || !isHomePage
    ? 'bg-navy-dark/95 backdrop-blur-md border-b border-navy-light/30 shadow-lg py-2.5 sm:py-3'
    : 'bg-gradient-to-b from-navy-dark/90 via-navy-dark/40 to-transparent py-4 sm:py-5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-sm">
            <SJECLogo
              variant="compact"
              theme="dark"
              height={isScrolled ? 38 : 44}
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isNavActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-[13.5px] font-semibold tracking-wide uppercase transition-all duration-200 rounded-sm ${
                    active
                      ? 'text-gold bg-gold/10 font-bold border-b-2 border-gold'
                      : 'text-gray-200 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-gold text-xs px-5 py-2.5 uppercase font-bold tracking-wider flex items-center gap-2 group shadow-md"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-gold text-navy-dark rounded-sm hover:bg-gold-light transition-colors sm:inline-flex hidden"
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-navy-dark border-b border-border-navy shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => {
              const active = isNavActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors ${
                    active
                      ? 'text-gold bg-gold/15 border-l-4 border-gold font-bold'
                      : 'text-gray-200 hover:text-gold hover:bg-navy-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-3 border-t border-navy-light/30">
              <Link
                to="/contact"
                className="w-full btn-gold py-3 text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>contact@sjec.in</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
