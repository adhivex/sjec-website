import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
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

      {/* 2. Who We Are / About Intro (01) */}
      <AboutIntro />

      {/* 3. Industries We Serve (02) */}
      <IndustryGrid />

      {/* 4. Engineering & Execution Capabilities (03) */}
      <ServicesOverview />

      {/* 5. Selected Project Experience (04) */}
      <ProjectShowcase />

      {/* 6. Site Photography Strip (Curated Real Execution Imagery) */}
      <section className="bg-navy-dark py-20 sm:py-28 border-b border-border-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-navy-deep px-2.5 py-1 bg-gold rounded-sm">
              05
            </span>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase">
              VISUAL EVIDENCE // AUTHENTIC SITE PHOTOGRAPHY
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
                Authentic Site Execution
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300 font-sans">
                On-site photographs documenting heavy transformer erection, DRI panel room setups, and pre-commissioning testing.
              </p>
            </div>

            <Link
              to="/gallery"
              className="btn-gold text-xs px-6 py-3.5 font-bold uppercase tracking-wider inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore Filterable Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical Structured 6-Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeGalleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-72 rounded-sm overflow-hidden border border-border-navy shadow-xl cursor-pointer bg-navy-deep transition-all duration-300 hover:border-gold"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-navy-dark/90 text-gold border border-gold/30">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-3 right-3 p-1.5 rounded-sm bg-navy-dark/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gold" />
                </div>

                {/* Title and details at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-sm font-bold uppercase tracking-wide group-hover:text-gold transition-colors line-clamp-1 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox for gallery preview */}
        <LightboxModal
          items={homeGalleryItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : homeGalleryItems.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev < homeGalleryItems.length - 1 ? prev + 1 : 0))}
        />
      </section>

      {/* 7. Safety & Quality (06) */}
      <SafetyQualitySection />

      {/* 8. Capabilities / Tooling (07) */}
      <CapabilitiesPreview />

      {/* 9. Team / Governance (08) */}
      <TeamPreview />

      {/* 10. Final Project Enquiry CTA */}
      <CTASection />
    </div>
  );
};
