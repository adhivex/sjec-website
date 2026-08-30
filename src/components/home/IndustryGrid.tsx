import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';
import { SectionHeader } from '../common/SectionHeader';

export const IndustryGrid: React.FC = () => {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Core Sectors"
          title="Industries We Serve"
          subtitle="Our experience spans demanding industrial environments where safety, technical precision and reliable execution are essential."
          align="center"
        />

        {/* 6 Industry Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind, index) => (
            <Link
              key={ind.id}
              to={`/industries`}
              className="group relative bg-white rounded-sm border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:border-gold transition-all duration-300 flex flex-col"
            >
              {/* Card Image with Overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-navy-dark">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
                
                {/* Sector Index Marker */}
                <div className="absolute top-3 left-3 bg-navy-dark/90 text-gold text-xs font-mono font-bold px-2.5 py-1 rounded-sm border border-border-navy">
                  0{index + 1}
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-gold/90 text-navy-dark flex items-center justify-center transform translate-y-1 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-gold transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Subtitle pill */}
                <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-gray-300 line-clamp-1">
                  {ind.subtitle}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-navy group-hover:text-gold transition-colors font-heading">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold transition-colors">
                  <span>Explore Sector Capabilities</span>
                  <span className="text-gold font-bold">›</span>
                </div>
              </div>

              {/* Bottom Gold Accent Line on hover */}
              <div className="h-1 w-0 group-hover:w-full bg-gold transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="btn-navy text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>View All Industry Solutions</span>
            <ArrowUpRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

      </div>
    </section>
  );
};
