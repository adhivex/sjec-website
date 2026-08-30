import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-sm border ${
          dark
            ? 'text-gold bg-gold/10 border-gold/30'
            : 'text-navy-primary bg-navy-primary/10 border-navy-primary/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight uppercase font-heading ${
        dark ? 'text-white' : 'text-navy-primary'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-gray-300' : 'text-slate'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-1 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1 w-12 bg-gold rounded-full"></span>
        <span className="h-1 w-2 bg-navy-light rounded-full"></span>
      </div>
    </div>
  );
};
