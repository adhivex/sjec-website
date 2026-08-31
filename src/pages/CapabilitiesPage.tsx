import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { CAPABILITIES, CAPABILITY_CATEGORIES } from '../data/capabilities';
import type { CapabilityItem } from '../types';
import { CheckCircle2, Table } from 'lucide-react';

export const CapabilitiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showTable, setShowTable] = useState<boolean>(false);

  const filteredItems: CapabilityItem[] = activeCategory === 'all'
    ? CAPABILITIES
    : CAPABILITIES.filter((item: CapabilityItem) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Tooling &amp; Machinery"
        title="Resources That Support Execution"
        description="Documented inventory of heavy mobile cranes, calibrated high-voltage electrical testing instruments, fabrication equipment, and cable installation tools."
        breadcrumbs={[{ label: 'Capabilities' }]}
      />

      {/* Equipment Showcase Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {CAPABILITY_CATEGORIES.map((cat: { key: string; label: string }) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border font-sans ${
                      isActive
                        ? 'bg-gold text-navy-dark border-gold shadow-md font-extrabold'
                        : 'bg-navy-surface/60 text-gray-300 border-navy-light/40 hover:text-white hover:border-gold/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* View Toggle */}
            <button
              type="button"
              onClick={() => setShowTable(!showTable)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold bg-navy-surface border border-gold/40 hover:bg-gold/15 rounded-sm inline-flex items-center gap-2 transition-colors"
            >
              <Table className="w-4 h-4 text-gold" />
              <span>{showTable ? 'Switch to Grid View' : 'View Full Equipment Table'}</span>
            </button>

          </div>

          {/* Grid View */}
          {!showTable ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item: CapabilityItem, index: number) => (
                <div
                  key={index}
                  className="bg-navy-dark border border-border-navy hover:border-gold/60 rounded-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-navy-surface text-gold border border-gold/30">
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-gray-400">#0{index + 1}</span>
                    </div>

                    <h2 className="text-lg font-semibold uppercase text-white group-hover:text-gold transition-colors font-heading">
                      {item.name}
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-light/30">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold mb-1">
                      Key Application
                    </div>
                    <div className="text-xs font-medium text-gray-200 flex items-start gap-1.5 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item.application}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto bg-navy-dark border border-border-navy rounded-sm shadow-2xl">
              <table className="min-w-full divide-y divide-border-navy text-left text-xs sm:text-sm font-sans">
                <thead className="bg-navy-deep text-white uppercase text-[10px] font-mono tracking-wider font-bold">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Equipment / Tool Name</th>
                    <th className="py-3.5 px-4 sm:px-6">Discipline</th>
                    <th className="py-3.5 px-4 sm:px-6">Specification &amp; Description</th>
                    <th className="py-3.5 px-4 sm:px-6">Site Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-light/20 text-gray-300">
                  {filteredItems.map((item: CapabilityItem, idx: number) => (
                    <tr key={idx} className="hover:bg-navy-surface/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-navy-surface text-gold font-mono font-semibold text-xs border border-gold/20">
                          {item.categoryLabel}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 leading-relaxed">
                        {item.description}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-gray-200 font-medium">
                        {item.application}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
