import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface FAQSectionProps {
  faqs: FAQItem[];
  lang: Language;
  themeColor: ThemeColor;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, lang, themeColor }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-neutral-900 transition-colors">
      <div id="faq-container" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div id="faq-header" className="text-center mb-14">
          <span
            id="faq-badge"
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${theme.badgeBg} ${theme.badgeText}`}
          >
            {isAr ? 'الأسئلة المتكررة' : 'Common Questions'}
          </span>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4"
          >
            {isAr ? 'إجابات واضحة على كل ما يدور في ذهنك' : 'Frequently Asked Questions & Clarifications'}
          </h2>
          <p
            id="faq-desc"
            className="text-neutral-600 dark:text-neutral-400 text-base"
          >
            {isAr
              ? 'هل لديك استفسار محدد؟ جمعنا لك أكثر الأسئلة شيوعاً حول مراحل العمل والأسعار والتقنية.'
              : 'Everything you need to know about project timelines, technical stacks, deliverables, and billing.'}
          </p>
        </div>

        {/* Accordion List */}
        <div id="faq-accordion-list" className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const question = isAr ? faq.questionAr : faq.questionEn;
            const answer = isAr ? faq.answerAr : faq.answerEn;
            const category = isAr ? faq.categoryAr : faq.categoryEn;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-50/80 dark:bg-neutral-800/80 border-neutral-300 dark:border-neutral-700 shadow-xs'
                    : 'bg-white dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                      {category}
                    </span>
                    <span
                      id={`faq-question-${faq.id}`}
                      className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white"
                    >
                      {question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-neutral-200 dark:bg-neutral-700' : 'bg-neutral-100 dark:bg-neutral-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-150 dark:border-neutral-750"
                  >
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
