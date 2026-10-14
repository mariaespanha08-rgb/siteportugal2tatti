import { useState } from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'unhas' | 'sobrancelhas'>('unhas');
  const { language } = useLanguage();
  const t = translations[language].services;

  const servicesList = activeTab === 'unhas' ? t.unhas : t.sobrancelhas;

  return (
    <section id="servicos" className="py-24 md:py-32 wood-texture text-[#F6EFE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-[#C9A24D]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D08A] font-medium">
              {t.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-[#C9A24D]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            {t.titleStart}
            <span className="italic font-normal text-gold-gradient">{t.titleItalic}</span>
            {t.titleEnd}
          </h2>

          <p className="text-sm sm:text-base text-[#EBDCC6]/80 font-light leading-relaxed">
            {t.subtitle}
          </p>

          {/* Tab Navigation: Square Corners */}
          <div className="pt-6 flex justify-center">
            <div className="inline-flex border border-[#C9A24D]/60 p-1 bg-[#3A2A1F]/70">
              <button
                type="button"
                onClick={() => setActiveTab('unhas')}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-widest font-medium transition-all ${
                  activeTab === 'unhas'
                    ? 'bg-[#C9A24D] text-[#3A2A1F] font-semibold shadow-inner'
                    : 'text-[#EBDCC6] hover:text-[#C9A24D]'
                }`}
              >
                {t.tabNails} ({t.unhas.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sobrancelhas')}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-widest font-medium transition-all ${
                  activeTab === 'sobrancelhas'
                    ? 'bg-[#C9A24D] text-[#3A2A1F] font-semibold shadow-inner'
                    : 'text-[#EBDCC6] hover:text-[#C9A24D]'
                }`}
              >
                {t.tabBrows} ({t.sobrancelhas.length})
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid (2 cols desktop, 1 col mobile) - strictly NO PHOTOS per PRD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-[#3A2A1F]/80 border border-[#C9A24D]/40 p-5 sm:p-6 flex flex-col justify-between hover:border-[#C9A24D] hover:bg-[#3A2A1F] transition-all group relative overflow-hidden"
            >
              {/* Subtle top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#E8D08A] transition-colors">
                    {service.name}
                  </h3>
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="font-serif text-lg sm:text-xl font-semibold text-[#E8D08A] tabular-nums whitespace-nowrap block">
                      {service.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#EBDCC6]/75 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Footer of Card: Duration + Mini Agendar Button */}
              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[#C9A24D]/25 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#EBDCC6]/60 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#C9A24D]" />
                  <span>{service.duration}</span>
                </div>

                <a
                  href={siteData.links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-wider uppercase font-semibold text-[#3A2A1F] bg-[#C9A24D] hover:bg-[#E8D08A] border border-[#C9A24D] transition-colors"
                >
                  <Calendar className="w-3 h-3 text-[#3A2A1F]" />
                  <span>{t.bookCard}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Note Below Services */}
        <div className="mt-8 text-center px-4">
          <p className="text-xs sm:text-sm text-[#EBDCC6]/65 italic font-light max-w-2xl mx-auto">
            {t.note}
          </p>
        </div>

        {/* Section Primary CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteData.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg text-[#3A2A1F]"
          >
            <Sparkles className="w-4 h-4 text-[#3A2A1F]" />
            <span>{t.sectionCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
