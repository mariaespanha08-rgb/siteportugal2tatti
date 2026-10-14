import { Instagram, Calendar, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function InstagramSection() {
  const { language } = useLanguage();
  const t = translations[language].instagram;

  return (
    <section id="instagram" className="py-24 md:py-32 wood-texture text-[#F6EFE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="max-w-xl mx-auto">
          {/* Instagram Profile Header Card */}
          <div className="bg-[#3A2A1F]/90 border border-[#C9A24D]/50 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4 text-center sm:text-left">
              {/* Avatar with gold ring */}
              <div className="relative p-0.5 border-2 border-[#C9A24D] bg-[#4A3426] shrink-0">
                <img
                  src={siteData.hero.image}
                  alt="Tatiane Santos Instagram"
                  className="w-14 h-14 object-cover"
                />
              </div>

              <div>
                <span className="font-serif text-lg text-white font-medium block">
                  Tatiane Santos Beauty
                </span>
                <span className="text-xs text-[#E8D08A] tracking-wider font-sans block">
                  {siteData.brand.instagramHandle}
                </span>
                <span className="text-[11px] text-[#EBDCC6]/60 tracking-wide font-sans block mt-0.5">
                  {siteData.brand.tagline}
                </span>
              </div>
            </div>

            <a
              href={siteData.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#3A2A1F] inline-flex items-center gap-2 shrink-0"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{t.follow}</span>
            </a>
          </div>

          {/* Official Instagram Reel Embed Player (Without cover or overlay) */}
          <div className="relative border-2 border-[#C9A24D] bg-[#2A1E17] shadow-2xl mx-auto max-w-[400px] overflow-hidden">
            <iframe
              src={siteData.links.instagramReelEmbed}
              className="w-full h-[580px] sm:h-[620px] border-0"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              title="Instagram Reel Tatiane Santos Beauty"
            ></iframe>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteData.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-wood px-6 py-3.5 text-xs tracking-widest uppercase font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Instagram className="w-4 h-4 text-[#E8D08A]" />
              <span>{t.followAccount}</span>
              <ExternalLink className="w-3 h-3 text-[#E8D08A]/70" />
            </a>

            <a
              href={siteData.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-3.5 text-xs tracking-widest uppercase font-semibold inline-flex items-center justify-center gap-2 text-[#3A2A1F] w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-[#3A2A1F]" />
              <span>{t.book}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
