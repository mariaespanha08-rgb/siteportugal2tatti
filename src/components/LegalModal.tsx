import { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const { language } = useLanguage();
  const t = translations[language].legalModal;

  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t.privacyTitle : t.termsTitle;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative bg-[#F6EFE4] text-[#3A2A1F] border-2 border-[#C9A24D] max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#C9A24D]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#C9A24D]/15 border border-[#C9A24D]/40 text-[#9A7B2F]">
              {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#3A2A1F]">{title}</h3>
              <p className="text-xs uppercase tracking-wider text-[#4A3426]/70">
                {siteData.brand.name} • {siteData.location.city}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#C9A24D]/40 hover:bg-[#C9A24D] hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-5 pr-2 space-y-4 text-xs sm:text-sm text-[#4A3426]/85 font-light leading-relaxed">
          {isPrivacy ? (
            <>
              <p>{t.privacyP1}</p>
              <h4 className="font-serif text-base font-semibold text-[#3A2A1F] pt-2">
                {t.privacyH1}
              </h4>
              <p>{t.privacyP2}</p>
              <h4 className="font-serif text-base font-semibold text-[#3A2A1F] pt-2">
                {t.privacyH2}
              </h4>
              <p>{t.privacyP3}</p>
              <h4 className="font-serif text-base font-semibold text-[#3A2A1F] pt-2">
                {t.privacyH3}
              </h4>
              <p>{t.privacyP4}</p>
              <div className="p-3 bg-[#EBDCC6]/50 border border-[#C9A24D]/30 text-xs">
                <strong>Responsável / Controller:</strong> {siteData.legal.companyName} | {siteData.legal.fullAddress}
              </div>
            </>
          ) : (
            <>
              <p>{t.termsP1}</p>
              <h4 className="font-serif text-base font-semibold text-[#3A2A1F] pt-2">
                {t.termsH1}
              </h4>
              <p>{t.termsP2}</p>
              <h4 className="font-serif text-base font-semibold text-[#3A2A1F] pt-2">
                {t.termsH2}
              </h4>
              <p>{t.termsP3}</p>
              <h4 className="font-serif text-base font-semibold text-[#3A2A1F] pt-2">
                {t.termsH3}
              </h4>
              <p>{t.termsP4}</p>
              <div className="p-3 bg-[#EBDCC6]/50 border border-[#C9A24D]/30 text-xs">
                {translations[language].footer.ral}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#C9A24D]/30 flex justify-end">
          <button
            onClick={onClose}
            className="btn-gold px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#3A2A1F]"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
