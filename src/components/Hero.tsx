import { MapPin, Calendar, ArrowRight, Award, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#F6EFE4] overflow-hidden">
      {/* Decorative Subtle Floating Sparkles / Particles */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-24 left-[15%] text-[#C9A24D]/30 text-lg animate-float-particle">✦</span>
        <span className="absolute top-1/3 right-[10%] text-[#C9A24D]/25 text-sm animate-float-particle" style={{ animationDelay: '1.5s' }}>✧</span>
        <span className="absolute bottom-20 left-[25%] text-[#C9A24D]/20 text-xs animate-float-particle" style={{ animationDelay: '3s' }}>✦</span>
        <span className="absolute top-2/3 right-[28%] text-[#C9A24D]/30 text-base animate-float-particle" style={{ animationDelay: '4.5s' }}>✧</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Photo FIRST: Início antes do texto */}
          <div className="lg:col-span-5 flex justify-center order-1">
            <div className="relative max-w-[280px] xs:max-w-[320px] sm:max-w-md w-full my-3 sm:my-0">
              {/* Back offset decorative gold frame */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 border-2 border-[#C9A24D] pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative z-10 bg-[#EBDCC6] border border-[#C9A24D] shadow-xl overflow-hidden aspect-[3/4]">
                <img
                  src={siteData.hero.image}
                  alt="Tatiane Santos - Especialista em Russian Manicure e Formadora"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle Luxury Gradient Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#4A3426]/90 via-[#4A3426]/40 to-transparent text-[#F6EFE4]">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#E8D08A] block">
                    Russian Manicure Master
                  </span>
                  <span className="font-serif text-base sm:text-lg tracking-wide text-white">
                    Tatiane Santos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy & CTAs SECOND (directly after photo) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 md:space-y-8 order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#C9A24D]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#C9A24D]">
                {t.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#3A2A1F] leading-[1.14] tracking-tight">
              {t.titleStart}
              <span className="italic font-normal text-gold-gradient">{t.titleItalic}</span>
              {t.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#4A3426]/85 font-light leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={siteData.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] font-semibold text-center inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#3A2A1F]" />
                <span>{t.bookCta}</span>
              </a>

              <a
                href="#servicos"
                className="btn-secondary-beige w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.14em] font-medium text-center inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.servicesCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A24D]" />
              </a>
            </div>

            {/* Location Cards & Trust Badges */}
            <div className="pt-4 border-t border-[#C9A24D]/30 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Location 1 */}
                <div className="bg-[#EBDCC6]/50 border border-[#C9A24D]/40 p-3 sm:p-3.5 flex items-center gap-3">
                  <div className="p-2 bg-[#C9A24D]/15 border border-[#C9A24D]/40 text-[#C9A24D] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#4A3426]/60">
                      {t.locationLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#3A2A1F]">
                      {siteData.location.short}
                    </span>
                  </div>
                </div>

                {/* Location 2 - Clickable */}
                <a
                  href={siteData.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EBDCC6]/50 border border-[#C9A24D]/40 p-3 sm:p-3.5 flex items-center gap-3 hover:bg-[#EBDCC6] hover:border-[#C9A24D] transition-all group"
                  title="Abrir no Google Maps"
                >
                  <div className="p-2 bg-[#C9A24D]/15 border border-[#C9A24D]/40 text-[#C9A24D] shrink-0 group-hover:bg-[#C9A24D] group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#4A3426]/60 group-hover:text-[#C9A24D]">
                      {t.addressLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#3A2A1F] truncate block">
                      {siteData.location.address}
                    </span>
                  </div>
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#4A3426]/80 pt-1">
                <div className="inline-flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5 text-[#C9A24D]" />
                  <span>{t.badgeExp}</span>
                </div>
                <span className="text-[#C9A24D]/50 select-none">·</span>
                <div className="inline-flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A24D]" />
                  <span>{t.badgeTraining}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
