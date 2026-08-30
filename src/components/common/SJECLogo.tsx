import React from 'react';

interface SJECLogoProps {
  variant?: 'full' | 'compact' | 'mark' | 'stacked';
  theme?: 'dark' | 'light';
  className?: string;
  height?: number | string;
}

export const SJECLogo: React.FC<SJECLogoProps> = ({
  variant = 'compact',
  theme = 'light',
  className = '',
  height = 48,
}) => {
  const isDarkBg = theme === 'dark';
  const navyColor = isDarkBg ? '#FFFFFF' : '#082B57';
  const subNavyColor = isDarkBg ? '#98A2B3' : '#041B38';
  const goldColor = '#D49A16';
  const lightGold = '#E7B83E';
  const wheelFill = isDarkBg ? '#041B38' : '#FFFFFF';
  const wheelBorder = goldColor;

  // MARK ONLY (Industrial Wheel + SJ Monogram)
  const renderMark = (size = 44) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="SJEC Monogram"
    >
      {/* Outer Industrial Gear Teeth / Ring */}
      <circle cx="50" cy="50" r="46" stroke={wheelBorder} strokeWidth="3.5" fill={wheelFill} />
      <circle cx="50" cy="50" r="41" stroke={navyColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      
      {/* 8 Industrial Gear Cogs */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect
          key={i}
          x="46.5"
          y="1"
          width="7"
          height="6"
          rx="1.5"
          fill={goldColor}
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* Inner Wheel Rim */}
      <circle cx="50" cy="50" r="37" fill={isDarkBg ? '#082B57' : '#F7F8FA'} stroke={goldColor} strokeWidth="2" />

      {/* Mechanical Wheel Spokes (Subtle) */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="16"
          stroke={goldColor}
          strokeWidth="1.2"
          opacity="0.35"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* Monogram Background Center Hub */}
      <circle cx="50" cy="50" r="28" fill={isDarkBg ? '#041B38' : '#082B57'} />
      <circle cx="50" cy="50" r="27" stroke={lightGold} strokeWidth="1.2" />

      {/* 'S' and 'J' Bold Industrial Stylized Monogram */}
      <g transform="translate(23, 22) scale(0.54)">
        {/* Letter 'S' in Gold */}
        <path
          d="M 40 16 C 36 12, 22 10, 15 17 C 8 24, 10 32, 19 35 L 35 40 C 46 44, 48 54, 43 63 C 37 72, 22 74, 12 68 C 6 64, 4 58, 4 58 L 14 51 C 14 51, 16 57, 24 60 C 31 63, 37 57, 36 52 C 35 47, 30 44, 21 41 L 11 37 C 1 33, -1 22, 5 13 C 13 2, 31 1, 44 8 Z"
          fill={goldColor}
        />
        {/* Letter 'J' in White / Light Gold interlocking */}
        <path
          d="M 68 8 L 84 8 L 84 54 C 84 68, 73 78, 55 78 C 42 78, 33 73, 31 68 L 40 58 C 43 62, 48 65, 56 65 C 64 65, 68 60, 68 52 Z"
          fill={isDarkBg ? '#FFFFFF' : '#E7B83E'}
        />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{renderMark(typeof height === 'number' ? height : 44)}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {renderMark(64)}
        <div className="mt-3">
          <div
            className="font-extrabold tracking-wider text-xl leading-none uppercase"
            style={{ color: navyColor, fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            SAI JAGANNATH
          </div>
          <div
            className="text-[10px] font-bold tracking-[0.25em] uppercase mt-1"
            style={{ color: goldColor }}
          >
            ENGINEERING &amp; CONSTRUCTION
          </div>
          <div
            className="text-[8px] font-semibold tracking-[0.2em] uppercase mt-1.5 px-2.5 py-0.5 rounded-full inline-block border"
            style={{
              borderColor: isDarkBg ? 'rgba(212, 154, 22, 0.4)' : 'rgba(8, 43, 87, 0.2)',
              color: isDarkBg ? '#E7B83E' : '#082B57',
              backgroundColor: isDarkBg ? 'rgba(4, 27, 56, 0.6)' : 'rgba(247, 248, 250, 0.8)',
            }}
          >
            POWERED BY FAITH CONNECTED BY TRUST
          </div>
        </div>
      </div>
    );
  }

  // Full & Compact Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {renderMark(variant === 'compact' ? 42 : 50)}
      <div className="flex flex-col justify-center select-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-extrabold tracking-wider text-lg sm:text-xl leading-none uppercase"
            style={{ color: navyColor, fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            SAI JAGANNATH
          </span>
          <span
            className="text-xs font-black tracking-widest px-1.5 py-0.5 rounded bg-gold/15 text-gold border border-gold/30 uppercase"
          >
            SJEC
          </span>
        </div>
        <div
          className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.22em] uppercase mt-0.5"
          style={{ color: goldColor }}
        >
          ENGINEERING &amp; CONSTRUCTION
        </div>
        {variant === 'full' && (
          <div
            className="text-[7.5px] sm:text-[8px] font-semibold tracking-[0.18em] uppercase mt-0.5 opacity-90"
            style={{ color: subNavyColor }}
          >
            POWERED BY FAITH CONNECTED BY TRUST
          </div>
        )}
      </div>
    </div>
  );
};
