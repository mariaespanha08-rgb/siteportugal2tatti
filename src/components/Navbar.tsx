import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.services, href: '#servicos' },
    { name: t.gallery, href: '#galeria' },
    { name: t.about, href: '#sobre' },
    { name: t.training, href: '#formacao' },
    { name: t.instagram, href: '#instagram' },
    { name: t.reviews, href: '#avaliacoes' },
    { name: t.studio, href: '#studio' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6EFE4]/95 backdrop-blur-md border-b border-[#C9A24D]/40 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a
          href="#"
          className="flex flex-col group transition-transform duration-300 hover:scale-[1.01] shrink-0"
        >
          <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-wide font-normal text-[#C9A24D] leading-none group-hover:text-[#9A7B2F] transition-colors">
            {siteData.brand.name}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-sans text-[#4A3426]/80 mt-1">
            {siteData.brand.tagline}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs tracking-wider uppercase font-medium text-[#4A3426]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#C9A24D] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24D] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Language Switcher + Book Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Language Switcher Button */}
          <div className="inline-flex border border-[#C9A24D]/50 bg-[#F6EFE4] p-0.5 text-[11px] font-sans font-medium tracking-wider">
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                language === 'pt'
                  ? 'bg-[#C9A24D] text-[#3A2A1F] font-bold'
                  : 'text-[#4A3426]/75 hover:text-[#C9A24D]'
              }`}
              title="Português de Portugal"
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-[#C9A24D] text-[#3A2A1F] font-bold'
                  : 'text-[#4A3426]/75 hover:text-[#C9A24D]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          <a
            href={siteData.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2.5 text-xs tracking-[0.14em] font-semibold text-[#3A2A1F] inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.book}</span>
          </a>
        </div>

        {/* Mobile Controls: Language Toggle + Quick Book + Hamburger */}
        <div className="flex sm:hidden items-center gap-1.5">
          {/* Mobile Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-1 text-[11px] font-bold font-sans tracking-wider border border-[#C9A24D]/60 text-[#4A3426] bg-[#EBDCC6]/60 flex items-center gap-1"
            aria-label="Alternar idioma / Switch language"
          >
            <Globe className="w-3 h-3 text-[#C9A24D]" />
            <span>{language.toUpperCase()}</span>
          </button>

          <a
            href={siteData.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-2.5 py-1.5 text-[10px] font-semibold text-[#3A2A1F] tracking-wider"
          >
            {t.book}
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#4A3426] hover:text-[#C9A24D] transition-colors border border-[#C9A24D]/30"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-50 lg:hidden bg-[#F6EFE4] border-b border-[#C9A24D]/50 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            {/* Language Selector Inside Mobile Menu */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#C9A24D]/30 text-xs text-[#4A3426]">
              <span className="font-medium flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#C9A24D]" />
                <span>Idioma / Language</span>
              </span>
              <div className="inline-flex border border-[#C9A24D]/60 p-0.5 bg-[#EBDCC6]/40">
                <button
                  type="button"
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 font-bold ${
                    language === 'pt' ? 'bg-[#C9A24D] text-[#3A2A1F]' : 'text-[#4A3426]'
                  }`}
                >
                  Português
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 font-bold ${
                    language === 'en' ? 'bg-[#C9A24D] text-[#3A2A1F]' : 'text-[#4A3426]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold uppercase tracking-widest text-[#4A3426] hover:text-[#C9A24D] py-2 border-b border-[#C9A24D]/15 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href={siteData.links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold w-full py-3.5 text-xs tracking-widest uppercase font-semibold text-center block text-[#3A2A1F]"
                >
                  {t.bookAppointment}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
