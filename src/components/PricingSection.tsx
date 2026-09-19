import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { PricingTier, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface PricingSectionProps {
  pricing: PricingTier[];
  lang: Language;
  themeColor: ThemeColor;
  onSelectPlan: (plan: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  pricing,
  lang,
  themeColor,
  onSelectPlan,
}) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-neutral-900 transition-colors">
      <div id="pricing-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div id="pricing-header" className="text-center max-w-3xl mx-auto mb-12">
          <span
            id="pricing-badge"
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${theme.badgeBg} ${theme.badgeText}`}
          >
            {isAr ? 'خطط وباقات الاستثمار' : 'Transparent Pricing Plans'}
          </span>
          <h2
            id="pricing-title"
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4"
          >
            {isAr ? 'أسعار واضحة وباقات تناسب كل مراحل نموك' : 'Clear, Scalable Packages Built for Every Stage'}
          </h2>
          <p
            id="pricing-desc"
            className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-8"
          >
            {isAr
              ? 'اختر الباقة المناسبة لطموحك. جميع الباقات تشمل استضافة مجانية، دومين، شهادة أمان SSL، ودعماً تقنياً مباشراً.'
              : 'Zero hidden fees. Every package features enterprise SSD hosting, SSL certificate, responsive design, and dedicated support.'}
          </p>

          {/* Billing Cycle Toggle */}
          <div
            id="pricing-toggle-box"
            className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
          >
            <button
              id="billing-monthly-btn"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !isAnnual
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              {isAr ? 'دفع شهري / مرحلي' : 'Monthly / Milestone'}
            </button>
            <button
              id="billing-annual-btn"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isAnnual
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              <span>{isAr ? 'دفع سنوي' : 'Annual Billing'}</span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                {isAr ? 'وفر 20%' : 'Save 20%'}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          id="pricing-cards-grid"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${pricing.length > 2 ? '3' : '2'} gap-8 max-w-6xl mx-auto`}
        >
          {pricing.map((tier) => {
            const name = isAr ? tier.nameAr : tier.nameEn;
            const desc = isAr ? tier.descAr : tier.descEn;
            const features = isAr ? tier.featuresAr : tier.featuresEn;
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                id={`pricing-card-${tier.id}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? `bg-white dark:bg-neutral-800 border-2 border-${themeColor}-500 shadow-2xl scale-105 z-10`
                    : 'bg-neutral-50/70 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 shadow-xs hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div
                    id={`pricing-popular-badge-${tier.id}`}
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-extrabold text-white uppercase tracking-wider shadow-md flex items-center gap-1 ${theme.primaryBg}`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isAr ? 'الأكثر طلباً واختياراً' : 'Most Popular Choice'}</span>
                  </div>
                )}

                <div>
                  <h3
                    id={`pricing-name-${tier.id}`}
                    className="text-xl font-extrabold text-neutral-900 dark:text-white mb-2"
                  >
                    {name}
                  </h3>
                  <p
                    id={`pricing-desc-${tier.id}`}
                    className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed"
                  >
                    {desc}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {isAnnual
                        ? isAr
                          ? '/ شهرياً (تدفع سنوياً)'
                          : '/ month (billed yearly)'
                        : isAr
                        ? '/ شهرياً أو بالمشروع'
                        : '/ month or project'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white block uppercase tracking-wider">
                      {isAr ? 'ما تتضمنه هذه الباقة:' : 'What is included:'}
                    </span>
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  id={`pricing-select-btn-${tier.id}`}
                  onClick={() => onSelectPlan(tier)}
                  className={`w-full py-3.5 rounded-xl text-xs font-extrabold transition-all duration-200 shadow-sm ${
                    tier.popular
                      ? `${theme.primaryBg} ${theme.primaryHover} text-white shadow-md transform hover:-translate-y-0.5`
                      : 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-600'
                  }`}
                >
                  {isAr ? 'اختيار هذه الباقة' : 'Choose This Plan'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
