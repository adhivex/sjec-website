import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';

export const IndustryGrid: React.FC = () => {
  const featuredCement = INDUSTRIES.find(i => i.id === 'cement-plants') || INDUSTRIES[1];
  const featuredSteel = INDUSTRIES.find(i => i.id === 'steel-plants') || INDUSTRIES[0];
  const otherIndustries = INDUSTRIES.filter(i => i.id !== 'cement-plants' && i.id !== 'steel-plants');

  return (
    <section className="bg-offwhite py-20 sm:py-28 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number & Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-gold px-2.5 py-1 bg-navy-dark rounded-sm">
            02
          </span>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-navy uppercase">
            WHERE WE WORK // CORE INDUSTRIAL SECTORS
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-navy/20 to-transparent"></span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-navy font-heading leading-tight tracking-tight">
              Sectors Built for Demanding Execution
            </h2>
            <p className="mt-3 text-slate text-sm sm:text-base leading-relaxed font-sans font-normal">
              Our engineering footprint spans heavy industrial facilities where thermal stresses, high voltage loads, and continuous operations require uncompromising precision.
            </p>
          </div>

          <Link
            to="/industries"
            className="btn-navy text-xs px-6 py-3.5 inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <span>All Industry Sectors</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Large Hero Card 1: Cement Plants (7 cols) */}
          <div className="lg:col-span-7">
            <Link
              to="/industries"
              className="group relative h-[380px] sm:h-[460px] rounded-sm overflow-hidden border-2 border-border hover:border-gold shadow-card transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 bg-navy-deep block"
            >
              <img
                src={featuredCement.image}
                alt={featuredCement.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest px-2.5 py-1 bg-navy-dark/90 rounded border border-gold/30">
                    SECTOR // 01 FEATURED
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-gold text-navy-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white font-heading">
                  {featuredCement.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 max-w-xl font-sans font-normal">
                  {featuredCement.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-gold">
                  <span>• 2,000 to 4,500+ TPD Plants</span>
                  <span>• Robo Lab Automation</span>
                  <span>• VRM Drives</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Large Hero Card 2: Steel & DRI Plants (5 cols) */}
          <div className="lg:col-span-5">
            <Link
              to="/industries"
              className="group relative h-[380px] sm:h-[460px] rounded-sm overflow-hidden border-2 border-border hover:border-gold shadow-card transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 bg-navy-deep block"
            >
              <img
                src={featuredSteel.image}
                alt={featuredSteel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest px-2.5 py-1 bg-navy-dark/90 rounded border border-gold/30">
                    SECTOR // 02 FEATURED
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-gold text-navy-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white font-heading">
                  {featuredSteel.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 font-sans">
                  {featuredSteel.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-gold">
                  <span>• Rolling Mill Drives</span>
                  <span>• 33kV Substation Setup</span>
                </div>
              </div>
            </Link>
          </div>

          {/* 4 Secondary Sector Cards in a 4-col layout */}
          {otherIndustries.map((ind, idx) => (
            <div key={ind.id} className="lg:col-span-3 sm:col-span-6">
              <Link
                to="/industries"
                className="group relative h-[260px] rounded-sm overflow-hidden border border-border hover:border-gold shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-end p-5 bg-navy-dark block"
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent"></div>

                <div className="relative z-10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-gold uppercase">
                      0{idx + 3} // SECTOR
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-lg font-bold uppercase text-white font-heading group-hover:text-gold transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-1 font-sans">
                    {ind.subtitle}
                  </p>
                </div>
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
