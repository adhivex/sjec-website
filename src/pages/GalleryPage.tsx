import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { CTASection } from '../components/common/CTASection';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import type { GalleryItem } from '../types';
import { LightboxModal } from '../components/common/LightboxModal';
import { Eye, Tag, MapPin } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filteredItems: GalleryItem[] = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item: GalleryItem) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Page Hero */}
      <PageHero
        badge="Site Visuals"
        title="Project Execution Gallery"
        description="Authentic industrial photographs highlighting high-voltage transformer rigging, DRI panel rooms, multi-tier cable tray networks, and Zero Harm safety practices."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* Filterable Gallery Grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid-dark"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat: string) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 border font-sans ${
                    isActive
                      ? 'bg-gold text-navy-dark border-gold shadow-md font-extrabold'
                      : 'bg-navy-surface/60 text-gray-300 border-navy-light/40 hover:text-white hover:border-gold/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Structured Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: GalleryItem, index: number) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-72 rounded-sm overflow-hidden border border-border-navy shadow-2xl hover:border-gold cursor-pointer transition-all duration-300 bg-navy-dark flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-dark/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-navy-deep/90 text-gold border border-gold/30">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3 right-3 z-10 p-2 rounded-sm bg-navy-deep/80 text-white opacity-0 group-hover:opacity-100 group-hover:bg-gold group-hover:text-navy-dark transition-all">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Title & Description */}
                <div className="relative z-10 p-5 text-white">
                  {item.location && (
                    <div className="flex items-center gap-1 text-[11px] text-gold font-mono mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide group-hover:text-gold transition-colors line-clamp-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 line-clamp-2 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
      />

      {/* CTA */}
      <CTASection />
    </div>
  );
};
