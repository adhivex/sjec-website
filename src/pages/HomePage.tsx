import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { TechnicalStrip } from '../components/home/TechnicalStrip';
import { AboutIntro } from '../components/home/AboutIntro';
import { IndustryGrid } from '../components/home/IndustryGrid';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { ProjectShowcase } from '../components/home/ProjectShowcase';
import { SafetyQualitySection } from '../components/home/SafetyQualitySection';
import { CapabilitiesPreview } from '../components/home/CapabilitiesPreview';
import { TeamPreview } from '../components/home/TeamPreview';
import { CTASection } from '../components/common/CTASection';
import { GALLERY_ITEMS } from '../data/gallery';
import { LightboxModal } from '../components/common/LightboxModal';
import { ArrowRight, Eye, Tag } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const homeGalleryItems = GALLERY_ITEMS.slice(0, 6);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Technical Strip */}
      <TechnicalStrip />

      {/* 3. Who We Are / About Intro */}
      <AboutIntro />

      {/* 4. Industries We Serve */}
      <IndustryGrid />

      {/* 5. Engineering & Execution Capabilities */}
      <ServicesOverview />

      {/* 6. Selected Project Experience */}
      <ProjectShowcase />

      {/* 7. Project Photography Strip (Curated Real Execution Imagery) */}
      <section className="bg-navy py-16 sm:py-20 border-b border-navy-light/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.2em] rounded-sm bg-gold/15 text-gold border border-gold/30">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Visual Field Evidence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white font-heading">
                Authentic Site Execution
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl">
                On-site photographs showing transformer erection, DRI panel rooms, cable tray networks, and high-mast installations.
              </p>
            </div>

            <Link
              to="/gallery"
              className="mt-4 md:mt-0 btn-gold text-xs px-5 py-2.5 font-bold uppercase tracking-wider inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {homeGalleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 rounded-sm overflow-hidden border border-border-navy shadow-lg cursor-pointer bg-navy-dark"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-navy-dark/90 text-gold border border-gold/30">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-3 right-3 p-1.5 rounded-sm bg-navy-dark/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gold" />
                </div>

                {/* Title and details at bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-sm font-bold uppercase tracking-wide group-hover:text-gold transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox for homepage gallery preview */}
        <LightboxModal
          items={homeGalleryItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : homeGalleryItems.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev < homeGalleryItems.length - 1 ? prev + 1 : 0))}
        />
      </section>

      {/* 8. Safety & Quality (Zero Harm + 5 Pillars) */}
      <SafetyQualitySection />

      {/* 9. Capabilities / Equipment */}
      <CapabilitiesPreview />

      {/* 10. Team / Leadership */}
      <TeamPreview />

      {/* 11. Final Project Enquiry CTA */}
      <CTASection />
    </div>
  );
};
