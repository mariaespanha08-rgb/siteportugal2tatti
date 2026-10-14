import { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].floatingCta;

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the initial hero view
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Agendamento rápido"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <a
        href={siteData.links.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold px-3.5 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.16em] font-semibold text-[#3A2A1F] flex items-center gap-2 sm:gap-2.5 shadow-2xl cursor-pointer hover:scale-105"
        title="Agendar o seu horário online"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-[#9A7B2F] opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 bg-[#4A3426]"></span>
        </span>
        <Calendar className="w-4 h-4 text-[#3A2A1F]" />
        <span>{t.book}</span>
        <Sparkles className="w-3.5 h-3.5 text-[#3A2A1F]" />
      </a>
    </aside>
  );
}
