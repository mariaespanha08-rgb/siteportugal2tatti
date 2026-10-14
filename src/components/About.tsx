import { Calendar, Quote, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="sobre" className="py-20 sm:py-28 md:py-32 wood-texture text-[#F6EFE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Photo FIRST: Início antes do texto em todos os ecrãs */}
          <div className="lg:col-span-5 flex justify-center order-1">
            <div className="relative max-w-[280px] xs:max-w-[320px] sm:max-w-md w-full my-3 sm:my-0">
              {/* Offset Gold Frame */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 border-2 border-[#C9A24D] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 bg-[#3A2A1F] border border-[#C9A24D] overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src={siteData.about.image}
                  alt="Tatiane Santos - Especialista em Russian Manicure"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Brand Tag Badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-[#3A2A1F]/90 backdrop-blur-sm border border-[#C9A24D]/50 p-2.5 sm:p-3 text-center">
                  <span className="font-serif text-sm sm:text-base text-[#E8D08A] tracking-wider block">
                    Tatiane Santos
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[#EBDCC6]/70 block font-sans">
                    {siteData.brand.tagline}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Authority SECOND: Logo após a foto */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-8 order-2">
            {/* Header */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-[#C9A24D]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#E8D08A] font-medium">
                  {t.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                {t.title}
              </h2>

              <p className="text-sm sm:text-base text-[#EBDCC6]/85 font-light leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Featured Quote with Gold Serif styling */}
            <div className="relative p-5 sm:p-7 bg-[#3A2A1F]/90 border border-[#C9A24D]/50">
              <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A24D]/40 mb-2" />
              <blockquote className="font-serif italic text-base sm:text-lg md:text-xl text-[#F6EFE4] leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="mt-3 text-right">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans text-[#E8D08A]">
                  — {t.author}
                </span>
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-[#EBDCC6]/85 font-light leading-relaxed">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
            </div>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 border-t border-[#C9A24D]/30 text-xs text-[#EBDCC6]">
              {t.proofs.map((proof, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24D] shrink-0" />
                  <span>{proof}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={siteData.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg text-[#3A2A1F]"
              >
                <Calendar className="w-4 h-4 text-[#3A2A1F]" />
                <span>{t.cta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
