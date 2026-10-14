import { useState } from 'react';
import { Instagram, ArrowUp, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F6EFE4] text-[#4A3426]/75 border-t border-[#C9A24D]/50 pt-16 pb-12 relative text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        {/* Linha 1: Marca + Instagram + Botão Discreto Agendar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="#" className="font-serif text-2xl text-[#C9A24D] tracking-wide hover:text-[#9A7B2F] transition-colors">
            {siteData.brand.name}
          </a>

          <div className="flex items-center gap-4">
            <a
              href={siteData.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#C9A24D]/40 text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#3A2A1F] transition-colors"
              aria-label="Instagram de Tatiane Santos Beauty"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={siteData.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[11px] uppercase tracking-widest font-semibold border border-[#C9A24D] text-[#3A2A1F] bg-[#C9A24D]/15 hover:bg-[#C9A24D] hover:text-[#3A2A1F] transition-all inline-flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3 text-[#C9A24D]" />
              <span>{navT.book}</span>
            </a>
          </div>
        </div>

        {/* Linha 2: Dados da Profissional */}
        <div className="text-[12px] text-[#4A3426]/80 font-sans tracking-wide">
          <span>{siteData.legal.companyName}</span>
          <span className="mx-2 text-[#C9A24D]">|</span>
          <span>Morada: {siteData.legal.fullAddress}</span>
        </div>

        {/* Linha 3: Resolução Alternativa de Litígios (RAL) */}
        <p className="text-[11px] sm:text-[12px] max-w-xl text-[#4A3426]/70 leading-relaxed">
          {t.ral}
        </p>

        {/* Linha 4: Links Institucionais (Modais) */}
        <div className="flex items-center justify-center gap-3 text-[12px] font-medium text-[#4A3426]/80">
          <button
            type="button"
            onClick={() => setLegalModalType('privacy')}
            className="hover:text-[#C9A24D] hover:underline transition-colors cursor-pointer"
          >
            {t.privacy}
          </button>
          <span className="text-[#C9A24D]">·</span>
          <button
            type="button"
            onClick={() => setLegalModalType('terms')}
            className="hover:text-[#C9A24D] hover:underline transition-colors cursor-pointer"
          >
            {t.terms}
          </button>
        </div>

        {/* Linha 5: Livro de Reclamações Eletrónico */}
        <div className="pt-2">
          <a
            href={siteData.links.livroReclamacoes}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Livro de Reclamações Eletrónico"
            className="inline-block transition-all duration-300 opacity-65 hover:opacity-100 grayscale-[0.4] hover:grayscale-0"
          >
            <svg
              className="w-24 sm:w-28 h-auto border border-[#C9A24D]/30 p-1 bg-white"
              viewBox="0 0 240 70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="240" height="70" fill="#ffffff" />
              <rect x="6" y="6" width="228" height="58" fill="none" stroke="#C9A24D" strokeWidth="1.5" />
              <text x="120" y="30" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#3A2A1F" textAnchor="middle" letterSpacing="1">
                LIVRO DE RECLAMAÇÕES
              </text>
              <text x="120" y="48" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#9A7B2F" textAnchor="middle" letterSpacing="2">
                ELETRÓNICO
              </text>
            </svg>
          </a>
        </div>

        {/* Linha Final: Copyright & Voltar ao Topo */}
        <div className="w-full pt-6 border-t border-[#C9A24D]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#4A3426]/60">
          <span>
            © 2026 {siteData.brand.name} Beauty. {t.rights}
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C9A24D] text-[#3A2A1F] hover:bg-[#C9A24D] hover:text-white transition-all text-[11px] uppercase tracking-wider font-medium cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
}
