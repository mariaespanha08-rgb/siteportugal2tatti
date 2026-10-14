import { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { siteData, GalleryItem } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].gallery;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (prev) => (prev! - 1 + siteData.gallery.length) % siteData.gallery.length
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % siteData.gallery.length);
    }
  };

  return (
    <section id="galeria" className="py-24 md:py-32 bg-[#F6EFE4] text-[#3A2A1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-[#C9A24D]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A24D] font-medium">
              {t.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-[#C9A24D]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3A2A1F] tracking-tight leading-tight">
            {t.titleStart}
            <span className="italic font-normal text-gold-gradient">{t.titleItalic}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4A3426]/80 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Gallery Grid (3 columns desktop, 2 columns mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {siteData.gallery.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer bg-[#EBDCC6] border border-[#C9A24D]/50 hover:border-[#C9A24D] overflow-hidden aspect-[4/5] shadow-sm transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Shimmer/Gold Border Hover Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#E8D08A] transition-colors duration-300 pointer-events-none" />

              {/* Clean Luxury Hover Overlay with No Title */}
              <div className="absolute inset-0 bg-[#4A3426]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="p-2 sm:p-2.5 bg-[#4A3426]/80 border border-[#C9A24D] text-[#E8D08A] shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Primary CTA */}
        <div className="mt-14 text-center">
          <a
            href={siteData.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg text-[#3A2A1F]"
          >
            <Sparkles className="w-4 h-4 text-[#3A2A1F]" />
            <span>{t.cta}</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <LightboxModal
          images={siteData.gallery}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
