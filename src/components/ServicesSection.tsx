import React from 'react';
import {
  Globe,
  ShoppingBag,
  Palette,
  TrendingUp,
  Code2,
  Database,
  Zap,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headphones,
  UtensilsCrossed,
  Coffee,
  Sparkles,
  Heart,
  Briefcase,
  Shield,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface ServicesSectionProps {
  services: ServiceItem[];
  lang: Language;
  themeColor: ThemeColor;
  onSelectService: (service: ServiceItem) => void;
}

// Icon mapping helper
const renderIcon = (name: string, className: string) => {
  switch (name) {
    case 'Globe':
      return <Globe className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Code2':
      return <Code2 className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Truck':
      return <Truck className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'RefreshCw':
      return <RefreshCw className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Coffee':
      return <Coffee className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  lang,
  themeColor,
  onSelectService,
}) => {
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  return (
    <section id="services" className="py-20 bg-neutral-50/70 dark:bg-neutral-900/40 border-y border-neutral-200/60 dark:border-neutral-800">
      <div id="services-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div id="services-header-box" className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="services-subtitle-badge"
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${theme.badgeBg} ${theme.badgeText}`}
          >
            {isAr ? 'الخدمات والمزايا' : 'Services & Core Solutions'}
          </span>
          <h2
            id="services-main-title"
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4"
          >
            {isAr ? 'حلول مصممة بعناية لتحقيق نتائج استثنائية' : 'Bespoke Solutions Engineered For Real Results'}
          </h2>
          <p
            id="services-desc"
            className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed"
          >
            {isAr
              ? 'نجمع بين أحدث التقنيات البرمجية وأفضل ممارسات التصميم والتسويق لتقديم تجربة تخدم أهدافك وتفوق توقعات عملائك.'
              : 'Blending contemporary design aesthetics with scalable engineering to deliver platforms that delight users and drive growth.'}
          </p>
        </div>

        {/* Services Grid */}
        <div id="services-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const title = isAr ? service.titleAr : service.titleEn;
            const desc = isAr ? service.descAr : service.descEn;
            const tags = isAr ? service.tagsAr : service.tagsEn;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Service Icon */}
                  <div
                    id={`service-icon-${service.id}`}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${theme.badgeBg} ${theme.primaryText} group-hover:${theme.primaryBg} group-hover:text-white`}
                  >
                    {renderIcon(service.icon, 'w-6 h-6')}
                  </div>

                  {/* Title & Description */}
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-lg font-bold text-neutral-900 dark:text-white mb-2.5 leading-snug group-hover:text-neutral-950 dark:group-hover:text-white"
                  >
                    {title}
                  </h3>
                  <p
                    id={`service-desc-${service.id}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6"
                  >
                    {desc}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-700/50 text-neutral-600 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <button
                    id={`service-btn-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${theme.primaryText} group-hover:underline focus:outline-none`}
                  >
                    <span>{isAr ? 'طلب هذه الخدمة' : 'Request Service'}</span>
                    {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
