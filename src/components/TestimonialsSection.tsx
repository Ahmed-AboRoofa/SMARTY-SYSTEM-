import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
  lang: Language;
  themeColor: ThemeColor;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  lang,
  themeColor,
}) => {
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50/70 dark:bg-neutral-900/50 border-t border-neutral-200/60 dark:border-neutral-800">
      <div id="testimonials-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div id="testimonials-header" className="text-center max-w-3xl mx-auto mb-16">
          <span
            id="testimonials-badge"
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${theme.badgeBg} ${theme.badgeText}`}
          >
            {isAr ? 'قصص النجاح وآراء الشركاء' : 'Client Success Stories'}
          </span>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4"
          >
            {isAr ? 'ثقة شركائنا هي وسام فخرنا الأكبر' : 'Trusted by Visionary Founders & High-Growth Brands'}
          </h2>
          <p
            id="testimonials-desc"
            className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed"
          >
            {isAr
              ? 'نعمل جنباً إلى جنب مع نخبة من المؤسسات ورواد الأعمال لتحقيق قفزات رقمية نوعية.'
              : 'Real outcomes and genuine testimonials from executives who transformed their web strategy with us.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          id="testimonials-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => {
            const name = isAr ? item.nameAr : item.nameEn;
            const role = isAr ? item.roleAr : item.roleEn;
            const company = isAr ? item.companyAr : item.companyEn;
            const quote = isAr ? item.quoteAr : item.quoteEn;

            return (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="p-8 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  {/* Stars Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-neutral-300 dark:text-neutral-700" />
                  </div>

                  {/* Quote text */}
                  <p
                    id={`testimonial-quote-${item.id}`}
                    className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6"
                  >
                    "{quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100 dark:border-neutral-750">
                  <img
                    src={item.avatar}
                    alt={name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200 dark:border-neutral-700 shadow-2xs"
                  />
                  <div>
                    <span
                      id={`testimonial-author-${item.id}`}
                      className="text-xs font-extrabold text-neutral-900 dark:text-white block"
                    >
                      {name}
                    </span>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                      {role} — {company}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
