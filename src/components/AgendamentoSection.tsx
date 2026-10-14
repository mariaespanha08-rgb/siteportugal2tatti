import { MessageSquareWarning, CreditCard, AlertCircle, Calendar, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function AgendamentoSection() {
  const { language } = useLanguage();
  const t = translations[language].agendamento;

  const ruleIcons = [
    <MessageSquareWarning className="w-5 h-5 text-[#C9A24D]" />,
    <CreditCard className="w-5 h-5 text-[#C9A24D]" />,
    <AlertCircle className="w-5 h-5 text-[#C9A24D]" />,
  ];

  return (
    <section id="agendamento" className="py-24 md:py-32 bg-[#F6EFE4] text-[#3A2A1F] relative">
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

        {/* 3 Educational Rule Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.rules.map((rule, idx) => (
            <div
              key={rule.id}
              className="bg-[#EBDCC6]/60 border border-[#C9A24D]/50 p-6 flex flex-col justify-between hover:border-[#C9A24D] transition-colors relative"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#9A7B2F]">
                  {ruleIcons[idx]}
                  <span className="text-[11px] uppercase tracking-wider font-semibold">
                    {rule.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#3A2A1F]">
                  {rule.title}
                </h3>
                <div className="text-xs sm:text-sm text-[#4A3426]/85 font-light leading-relaxed space-y-2">
                  <p>{rule.text}</p>
                  {rule.detail && (
                    <div className="p-2.5 bg-[#F6EFE4] border border-[#C9A24D]/40 text-xs font-medium text-[#3A2A1F] space-y-1">
                      {rule.detail.map((d, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{d.label}</span>
                          <span className="font-serif font-bold text-[#9A7B2F]">{d.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Notice */}
        <div className="max-w-2xl mx-auto text-center mb-10 px-4">
          <p className="text-xs sm:text-sm text-[#4A3426]/75 italic font-light">
            {t.closing}
          </p>
        </div>

        {/* Large Primary Booking Button */}
        <div className="text-center">
          <a
            href={siteData.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base tracking-[0.18em] font-bold inline-flex items-center justify-center gap-3 shadow-xl text-[#3A2A1F] transition-all hover:scale-[1.02]"
          >
            <Calendar className="w-5 h-5 text-[#3A2A1F]" />
            <span>{t.cta}</span>
            <Sparkles className="w-4 h-4 text-[#3A2A1F]" />
          </a>
        </div>
      </div>
    </section>
  );
}
