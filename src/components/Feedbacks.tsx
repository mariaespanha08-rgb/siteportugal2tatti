import { Star, Quote, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Feedbacks() {
  const { language } = useLanguage();
  const t = translations[language].feedbacks;

  return (
    <section id="avaliacoes" className="py-24 md:py-32 bg-[#F6EFE4] text-[#3A2A1F] relative">
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

        {/* Testimonials 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#EBDCC6]/60 border border-[#C9A24D]/50 p-6 sm:p-7 flex flex-col justify-between hover:border-[#C9A24D] hover:bg-[#EBDCC6]/90 transition-all duration-300 relative group shadow-sm"
            >
              <div>
                {/* 5 Gold Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C9A24D]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A24D] stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C9A24D]/30 group-hover:text-[#C9A24D]/60 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-base sm:text-lg text-[#3A2A1F] leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-[#C9A24D]/30">
                <div className="font-sans font-semibold text-sm text-[#3A2A1F]">
                  {item.name}
                </div>
                <div className="text-xs text-[#9A7B2F] uppercase tracking-wider font-sans mt-0.5">
                  {item.service}
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
    </section>
  );
}
