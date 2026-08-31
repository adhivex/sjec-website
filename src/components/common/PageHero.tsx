import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; path?: string }[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  breadcrumbs = [],
  bgImage = "/images/hero-bg-plant.jpg",
}) => {
  return (
    <section className="relative bg-navy-deep text-white pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden border-b border-border-navy">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-dark/90"></div>
        <div className="absolute inset-0 opacity-10 blueprint-grid-dark pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-5 flex-wrap" aria-label="Breadcrumb">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="w-3.5 h-3.5 text-gold" />
            <span>HOME</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors uppercase">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold font-bold uppercase">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Technical Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 rounded-sm bg-navy-surface/90 border border-gold/40 text-gold text-xs font-bold tracking-[0.18em] uppercase font-mono backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></span>
            <span>{badge}</span>
          </div>
        )}

        {/* Title (Sora SemiBold, Controlled & Clean) */}
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-tight uppercase leading-[1.12] font-heading max-w-3xl text-white">
          {title}
        </h1>

        {/* Description (Manrope) */}
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-sans font-normal">
          {description}
        </p>

        {/* Decorative Gold Accent Bar */}
        <div className="mt-5 flex items-center gap-1.5">
          <span className="h-0.5 w-12 bg-gold rounded-full"></span>
          <span className="h-0.5 w-2 bg-white/40 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};
