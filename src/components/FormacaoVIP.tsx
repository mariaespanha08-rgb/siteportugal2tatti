import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Maximize2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import LightboxModal from './LightboxModal';

export default function FormacaoVIP() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { language } = useLanguage();
  const t = translations[language].formacao;

  const images = siteData.formacao.images;

  // Auto-scroll logic (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleLightboxPrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  const handleLightboxNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! + 1) % images.length);
    }
  };

  return (
    <section id="formacao" className="py-24 md:py-32 bg-[#F6EFE4] text-[#3A2A1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            {t.titleEnd}
          </h2>

          <p className="text-sm sm:text-base text-[#4A3426]/85 font-light leading-relaxed">
            {t.subtitle}
          </p>

          <div className="bg-[#EBDCC6]/50 border border-[#C9A24D]/35 p-4 sm:p-5 max-w-2xl mx-auto text-xs sm:text-sm text-[#4A3426]/85 font-light">
            <p>{t.supportText}</p>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs tracking-widest uppercase text-[#4A3426]/70 font-sans">
              {t.galleryLabel} ({images.length})
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 border border-[#C9A24D] bg-[#EBDCC6]/60 hover:bg-[#C9A24D] hover:text-[#3A2A1F] text-[#4A3426] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-[#C9A24D] bg-[#EBDCC6]/60 hover:bg-[#C9A24D] hover:text-[#3A2A1F] text-[#4A3426] transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Display Grid / Slider View */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {images.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className={`relative group cursor-pointer bg-[#EBDCC6] border transition-all duration-300 overflow-hidden aspect-[3/4] ${
                  idx === currentIndex
                    ? 'border-[#C9A24D] ring-2 ring-[#C9A24D]/50 shadow-md'
                    : 'border-[#C9A24D]/40 hover:border-[#C9A24D]'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-[#4A3426]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="p-2 bg-[#4A3426]/80 border border-[#C9A24D] text-[#E8D08A] shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights summary pills */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {t.benefits.map((benefit, idx) => (
              <div key={idx} className="p-4 bg-[#EBDCC6]/40 border border-[#C9A24D]/40">
                <span className="font-serif text-xl sm:text-2xl text-[#3A2A1F] block">
                  {benefit.title}
                </span>
                <span className="text-xs text-[#4A3426]/75 uppercase tracking-wider block mt-1">
                  {benefit.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Section CTA - Strictly Instagram per PRD Rule */}
          <div className="mt-12 text-center space-y-3">
            <a
              href={siteData.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg text-[#3A2A1F]"
            >
              <Instagram className="w-4 h-4 text-[#3A2A1F]" />
              <span>{t.cta}</span>
            </a>

            <p className="text-xs text-[#4A3426]/70 italic max-w-md mx-auto">
              {t.subtext}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox for Formação VIP */}
      {selectedPhotoIndex !== null && (
        <LightboxModal
          images={images}
          currentIndex={selectedPhotoIndex}
          isOpen={selectedPhotoIndex !== null}
          onClose={closeLightbox}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}
    </section>
  );
}
