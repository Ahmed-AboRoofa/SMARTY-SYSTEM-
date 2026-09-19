import React from 'react';
import { WebsiteCategory, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface TemplateSwitcherProps {
  currentCategory: WebsiteCategory;
  onSelectCategory: (cat: WebsiteCategory) => void;
  lang: Language;
  themeColor: ThemeColor;
}

export const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({
  currentCategory,
  onSelectCategory,
  lang,
  themeColor,
}) => {
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  const templates: Array<{
    id: WebsiteCategory;
    icon: string;
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
    isFavorite?: boolean;
  }> = [
    {
      id: 'smart-system',
      icon: '⚡',
      titleAr: 'الأنظمة الذكية Smart System',
      titleEn: 'Smart System Automation',
      descAr: 'الموقع المفضل: أتمتة منازل، كاميرات، تحكم، وصوتيات',
      descEn: 'Preferred: Smart automation, CCTV, climate & sound',
      isFavorite: true,
    },
    {
      id: 'agency',
      icon: '🏢',
      titleAr: 'شركة رقمية وبرمجيات',
      titleEn: 'Digital Agency & Tech',
      descAr: 'خدمات ويب، منصات سحابية، استشارات تقنية',
      descEn: 'Web development, SaaS, tech solutions',
    },
    {
      id: 'portfolio',
      icon: '💼',
      titleAr: 'معرض أعمال شخصي',
      titleEn: 'Personal Portfolio',
      descAr: 'مهندس، مصمم، مستقل، سيرة ذاتية',
      descEn: 'Developer, designer, freelancer CV',
    },
    {
      id: 'ecommerce',
      icon: '🛍️',
      titleAr: 'متجر إلكتروني',
      titleEn: 'E-commerce Brand',
      descAr: 'منتجات فاخرة، سلة تسوق، دفع إلكتروني',
      descEn: 'Curated goods, express checkout',
    },
    {
      id: 'restaurant',
      icon: '🍽️',
      titleAr: 'مطعم ومقهى راقي',
      titleEn: 'Gourmet Restaurant',
      descAr: 'قائمة طعام، حجز طاولات، مناسبات خاصة',
      descEn: 'Chef specials, table booking',
    },
    {
      id: 'consulting',
      icon: '📊',
      titleAr: 'استشارات وأعمال',
      titleEn: 'Corporate Advisory',
      descAr: 'خطط استراتيجية، دراسات جدوى، حوكمة',
      descEn: 'Strategic planning, financial valuation',
    },
  ];

  return (
    <section id="template-switcher-section" className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        id="template-switcher-card"
        className="rounded-2xl p-2.5 sm:p-3 bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 backdrop-blur-md shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-2 px-2 pt-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span id="switcher-header-title" className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
              {isAr ? 'اختر نوع موقعك المفضل لمعاينة المحتوى مباشرة:' : 'Select your desired website profile to preview live:'}
            </span>
          </div>
          <span id="switcher-header-hint" className="text-[11px] text-neutral-500 dark:text-neutral-400">
            {isAr ? 'يتغير المحتوى، الخدمات، والأسعار تلقائياً' : 'Dynamically updates layout, services, and plans'}
          </span>
        </div>

        <div
          id="template-buttons-grid"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {templates.map((tpl) => {
            const isSelected = currentCategory === tpl.id;
            return (
              <button
                key={tpl.id}
                id={`template-switch-btn-${tpl.id}`}
                onClick={() => onSelectCategory(tpl.id)}
                className={`relative flex flex-col text-start p-3 rounded-xl transition-all duration-200 border text-xs ${
                  isSelected
                    ? `${theme.lightBg} border-${themeColor}-400/80 dark:border-${themeColor}-500/80 shadow-xs ring-1 ring-${themeColor}-500/30`
                    : 'bg-white dark:bg-neutral-800/80 border-neutral-200 dark:border-neutral-700/60 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">{tpl.icon}</span>
                    {tpl.isFavorite && (
                      <span
                        title={isAr ? 'الموقع المفضل' : 'Favorite Website'}
                        className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                      >
                        ⭐ {isAr ? 'المفضل' : 'Favorite'}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <span
                      id={`template-active-badge-${tpl.id}`}
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white ${theme.primaryBg}`}
                    >
                      {isAr ? 'نشط' : 'Active'}
                    </span>
                  )}
                </div>
                <span className="font-bold text-neutral-900 dark:text-white leading-tight mb-0.5">
                  {isAr ? tpl.titleAr : tpl.titleEn}
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                  {isAr ? tpl.descAr : tpl.descEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
