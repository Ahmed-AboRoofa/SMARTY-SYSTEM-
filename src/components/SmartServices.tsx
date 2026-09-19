import React from 'react';
import {
  Home,
  Video,
  Lock,
  Bell,
  PhoneCall,
  Layers,
  Network,
  Film,
  ArrowLeft,
  ArrowRight,
  Info,
  Sparkles,
  Sliders,
  Lightbulb
} from 'lucide-react';
import { SmartService } from '../data/smartSystemData';
import { Language } from '../types';

interface SmartServicesProps {
  services: SmartService[];
  lang: Language;
  onSelectService: (service: SmartService) => void;
  onRequestQuoteForService: (service: SmartService) => void;
}

export const SmartServices: React.FC<SmartServicesProps> = ({
  services,
  lang,
  onSelectService,
  onRequestQuoteForService,
}) => {
  const isAr = lang === 'ar';

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Sliders':
      case 'Lightbulb':
        return <Sliders className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'Lock':
        return <Lock className="w-6 h-6" />;
      case 'Bell':
        return <Bell className="w-6 h-6" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Network':
        return <Network className="w-6 h-6" />;
      case 'Film':
        return <Film className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-slate-50/70 dark:bg-neutral-900/50 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'حلول وأنظمة ذكية متكاملة' : 'Integrated Smart Systems & Modules'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'خدماتنا والأنظمة الذكية' : 'Our Services & Smart Systems'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'حلول أتمتة وتحكم شاملة مصممة بأعلى مواصفات الجودة لراحتك وأمانك التام'
              : 'End-to-end automation, smart security, and low-current engineering tailored to perfection.'}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              onClick={() => onSelectService(srv)}
              className="group relative bg-white dark:bg-neutral-800/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-200/80 dark:border-neutral-700/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* Illustrative Image Header */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <img
                  src={srv.image}
                  alt={isAr ? srv.titleAr : srv.titleEn}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Gradient shade for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Badge if available */}
                {srv.badge && (
                  <div className="absolute top-3 end-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 dark:bg-neutral-900/95 text-[#0088cc] dark:text-sky-300 shadow-md backdrop-blur-xs border border-white/20">
                      {srv.badge}
                    </span>
                  </div>
                )}

                {/* Overlaid System Icon Badge & Protocol */}
                <div className="absolute bottom-3 start-3 end-3 z-10 flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white/95 dark:bg-neutral-900/95 text-[#0088cc] shadow-lg flex items-center justify-center backdrop-blur-xs group-hover:bg-[#0088cc] group-hover:text-white transition-colors duration-300">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
                    {srv.protocols[0] || 'Smart System'}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-[#0088cc] transition-colors leading-snug">
                    {isAr ? srv.titleAr : srv.titleEn}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-[11px] font-semibold text-[#0088cc] dark:text-sky-400 mb-2.5 leading-tight">
                    {isAr ? srv.subEn : srv.titleAr}
                  </div>

                  {/* Description excerpt */}
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2 mb-3">
                    {isAr ? srv.descAr : srv.descEn}
                  </p>

                  {/* Supported Protocols Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {srv.protocols.slice(0, 3).map((proto, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer actions */}
                <div className="pt-3.5 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between mt-2">
                  <span className="text-[11px] font-bold text-[#0088cc] flex items-center gap-1 group-hover:underline">
                    <Info className="w-3.5 h-3.5" />
                    <span>{isAr ? 'عرض التفاصيل' : 'Details'}</span>
                  </span>

                  <button
                    id={`quote-btn-${srv.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestQuoteForService(srv);
                    }}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-700 hover:bg-[#0088cc] hover:text-white dark:hover:bg-[#0088cc] transition-colors"
                  >
                    {isAr ? 'طلب عرض' : 'Get Quote'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call-To-Action */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3">
            {isAr
              ? 'هل تحتاج إلى استشارة هندسية خاصة لمشروعك السكني أو التجاري؟'
              : 'Need a customized engineering consultation for your residence or commercial facility?'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
            }}
          >
            <span>{isAr ? 'تحدث مباشرة مع مهندسينا الآن' : 'Speak with Our Engineers Now'}</span>
            {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
        </div>

      </div>
    </section>
  );
};
