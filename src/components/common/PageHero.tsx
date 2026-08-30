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
  bgImage = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
}) => {
  return (
    <section className="relative bg-navy-dark text-white pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-navy-light/30">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-dark/95 to-navy/90"></div>
        <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-gold/10 text-gold border border-gold/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-tight font-heading max-w-4xl text-white">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>

        {/* Decorative Gold Accent Bar */}
        <div className="mt-6 flex items-center gap-1.5">
          <span className="h-1 w-16 bg-gold rounded-full"></span>
          <span className="h-1 w-3 bg-white/40 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};
