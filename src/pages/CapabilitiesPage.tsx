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
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        badge="Tooling &amp; Machinery"
        title="Resources That Support Execution"
        description="Documented inventory of heavy mobile cranes, calibrated high-voltage electrical testing instruments, fabrication equipment, and cable installation tools."
        breadcrumbs={[{ label: 'Capabilities' }]}
      />

      {/* Equipment Showcase Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border ${
                      isActive
                        ? 'bg-navy-dark text-gold border-gold shadow-md'
                        : 'bg-offwhite text-slate border-border hover:border-gold hover:text-navy'
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
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy bg-offwhite border border-border hover:border-gold rounded-sm inline-flex items-center gap-2"
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
                  className="bg-white border border-border hover:border-gold rounded-sm p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-navy/10 text-navy border border-navy/20">
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-gray-400">#0{index + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold uppercase text-navy group-hover:text-navy-surface font-heading">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-light">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gold mb-1">
                      Key Application
                    </div>
                    <div className="text-xs font-medium text-charcoal flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item.application}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto bg-white border border-border rounded-sm shadow-card">
              <table className="min-w-full divide-y divide-border text-left text-xs sm:text-sm">
                <thead className="bg-navy-dark text-white uppercase text-[11px] tracking-wider font-bold">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Equipment / Tool Name</th>
                    <th className="py-3.5 px-4 sm:px-6">Discipline</th>
                    <th className="py-3.5 px-4 sm:px-6">Specification &amp; Description</th>
                    <th className="py-3.5 px-4 sm:px-6">Site Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light text-slate">
                  {filteredItems.map((item: CapabilityItem, idx: number) => (
                    <tr key={idx} className="hover:bg-offwhite transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-navy/10 text-navy font-semibold text-xs">
                          {item.categoryLabel}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 leading-relaxed">
                        {item.description}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-charcoal font-medium">
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
