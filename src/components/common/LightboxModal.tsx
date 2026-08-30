import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0 || currentIndex < 0 || currentIndex >= items.length) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300">
      {/* Top Header Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
        <span className="text-xs font-mono text-gray-400 px-3 py-1.5 rounded-sm bg-navy-dark/80 border border-border-navy">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-sm bg-navy-dark/80 hover:bg-gold hover:text-navy-dark text-white border border-border-navy transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation: Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-sm bg-navy-dark/80 hover:bg-gold hover:text-navy-dark text-white border border-border-navy transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation: Next Button */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-sm bg-navy-dark/80 hover:bg-gold hover:text-navy-dark text-white border border-border-navy transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-sm border border-border-navy shadow-2xl bg-black max-h-[70vh] flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-w-full max-h-[70vh] object-contain transition-all duration-200"
          />
        </div>

        {/* Caption & Metadata Strip */}
        <div className="w-full mt-4 bg-navy-dark/90 border border-border-navy p-4 rounded-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
              {currentItem.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-gold/15 text-gold border border-gold/30">
                <Tag className="w-3 h-3" />
                {currentItem.category}
              </span>
              {currentItem.location && (
                <span className="inline-flex items-center gap-1 text-xs text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {currentItem.location}
                </span>
              )}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
