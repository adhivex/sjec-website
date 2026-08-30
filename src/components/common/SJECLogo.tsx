import React from 'react';

interface SJECLogoProps {
  className?: string;
  height?: number | string;
  theme?: 'dark' | 'light';
  variant?: 'compact' | 'full' | 'mark' | 'stacked';
}

export const SJECLogo: React.FC<SJECLogoProps> = ({
  className = '',
  height = 46,
}) => {
  // Use the official uploaded brand asset directly
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/SJEC-Official-Logo.png"
        alt="Sai Jagannath Engineering & Construction - Official Brand Logo"
        style={{ height: typeof height === 'number' ? `${height}px` : height, width: 'auto' }}
        className="object-contain max-h-[64px] transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );
};
