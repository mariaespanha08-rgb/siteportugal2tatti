import { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const { language } = useLanguage();
  const t = translations[language].faq;

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 wood-texture text-[#F6EFE4] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          </h2>

          <p className="text-sm sm:text-base text-[#EBDCC6]/80 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14">
          {t.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#3A2A1F]/90 border border-[#C9A24D]/40 transition-all hover:border-[#C9A24D]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-[#C9A24D] text-sm tabular-nums">
                      {item.id < 10 ? `0${item.id}` : item.id}.
                    </span>
                    <span className="font-serif text-base sm:text-lg md:text-xl text-white font-medium">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 border border-[#C9A24D]/40 text-[#E8D08A] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C9A24D] text-[#3A2A1F]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#EBDCC6]/85 font-light leading-relaxed border-t border-[#C9A24D]/20 animate-in fade-in duration-200">
                    <p className="pl-5 sm:pl-6">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Primary CTA */}
        <div className="text-center">
          <a
            href={siteData.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg text-[#3A2A1F]"
          >
            <Calendar className="w-4 h-4 text-[#3A2A1F]" />
            <span>{t.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
