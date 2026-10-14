import { ShieldCheck, Sparkles, UserCheck, HeartHandshake, MapPin, Navigation, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function StudioSection() {
  const { language } = useLanguage();
  const t = translations[language].studio;

  const benefitIcons = [
    <ShieldCheck className="w-5 h-5 text-[#E8D08A]" />,
    <Sparkles className="w-5 h-5 text-[#E8D08A]" />,
    <UserCheck className="w-5 h-5 text-[#E8D08A]" />,
    <HeartHandshake className="w-5 h-5 text-[#E8D08A]" />,
  ];

  return (
    <section id="studio" className="py-24 md:py-32 wood-texture text-[#F6EFE4] relative">
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

        {/* Studio Photo Showcase with Offset Frame */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 border-2 border-[#C9A24D] pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 bg-[#3A2A1F] border border-[#C9A24D] overflow-hidden shadow-2xl">
            <img
              src={siteData.studio.image}
              alt="Studio Tatiane Santos Beauty em Seixal"
              className="w-full h-[320px] sm:h-[480px] md:h-[560px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#3A2A1F]/90 via-[#3A2A1F]/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E8D08A] block font-sans">
                  {t.exclusiveBadge}
                </span>
                <span className="font-serif text-xl sm:text-2xl text-white">
                  Amora • Cruz de Pau, Seixal
                </span>
              </div>
              <span className="text-xs text-[#EBDCC6]/80 font-sans tracking-wider">
                {t.byAppointment}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Benefits Cards (2x2 on mobile, 4 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {t.benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="bg-[#3A2A1F]/80 border border-[#C9A24D]/40 p-5 sm:p-6 flex flex-col justify-between hover:border-[#C9A24D] transition-all group"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-[#4A3426] border border-[#C9A24D]/40 inline-block text-[#C9A24D] group-hover:border-[#E8D08A] transition-colors">
                  {benefitIcons[idx]}
                </div>
                <h3 className="font-serif text-xl text-white group-hover:text-[#E8D08A] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#EBDCC6]/75 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Instagram Video & Location Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Integrated Instagram Post/Reel Video Embed */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[420px] bg-[#3A2A1F]/90 border-2 border-[#C9A24D] p-3 shadow-xl">
              <div className="text-center pb-2 mb-2 border-b border-[#C9A24D]/30">
                <span className="text-xs uppercase tracking-widest text-[#E8D08A] font-sans block">
                  {t.videoBadge}
                </span>
              </div>
              <iframe
                src={siteData.links.instagramPostStudioEmbed}
                className="w-full h-[460px] sm:h-[500px] border-0"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                title="Vídeo do Studio Tatiane Santos Beauty"
              ></iframe>
            </div>
          </div>

          {/* Location & Google Maps */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="bg-[#3A2A1F]/90 border border-[#C9A24D]/50 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#E8D08A]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-sans font-semibold">
                    {siteData.location.short}
                  </span>
                </div>
                <p className="font-serif text-lg sm:text-xl text-white">
                  {siteData.location.address}
                </p>
                <p className="text-xs text-[#EBDCC6]/70 font-sans">
                  {t.addressTip}
                </p>
              </div>

              <a
                href={siteData.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-5 py-3 text-xs tracking-wider uppercase font-semibold text-[#3A2A1F] inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.directionsButton}</span>
              </a>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="relative border-2 border-[#C9A24D] bg-[#2A1E17] shadow-xl overflow-hidden h-[380px] sm:h-[420px] w-full">
              <iframe
                src={siteData.links.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Tatiane Santos Beauty no Google Maps"
              ></iframe>
            </div>
          </div>
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
