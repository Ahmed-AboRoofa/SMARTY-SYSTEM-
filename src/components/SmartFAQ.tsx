import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  MessageSquare
} from 'lucide-react';
import { FAQS } from '../data/smartSystemData';
import { Language } from '../types';

interface SmartFAQProps {
  lang: Language;
}

export const SmartFAQ: React.FC<SmartFAQProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter((f) => {
    const q = isAr ? f.qAr : f.qEn;
    const a = isAr ? f.aAr : f.aEn;
    return (
      q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section id="faq" className="py-24 bg-slate-50/70 dark:bg-neutral-900/50 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'الأسئلة الشائعة والإجابات الفنية' : 'Frequently Asked Technical Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'إجابات شاملة ومفصلة حول تركيب وتشغيل وضمان أنظمة Smart System'
              : 'Detailed answers regarding retrofitting, warranty, security, and smart automation.'}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-neutral-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث في الأسئلة الشائعة (تكسير، إنترنت، ضمان، فنادق...)' : 'Search FAQ (retrofitting, internet, warranty, hotel)...'}
            className="w-full ps-10 pe-4 py-3.5 rounded-2xl border border-slate-200/80 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/90 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0088cc] shadow-xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0088cc] bg-sky-50/40 dark:bg-neutral-900/90 shadow-sm'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-start flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#0088cc]' : 'text-neutral-400'}`} />
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">
                      {isAr ? faq.qAr : faq.qEn}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#0088cc] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60">
                    {isAr ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-start">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
              {isAr ? 'هل لديك استفسار آخر غير مذكور هنا؟' : 'Have another specific question?'}
            </h4>
            <span className="text-xs text-neutral-500">
              {isAr ? 'مهندسونا مستعدون للإجابة على جميع الاستفسارات الفنية والمعمارية.' : 'Our automation specialists are on call.'}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://wa.me/971523066013?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shrink-0 transition-colors shadow-xs ring-1 ring-emerald-400/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'واتساب الرئيسي (6013 306 52)' : 'Primary WhatsApp (52 306 6013)'}</span>
            </a>
            <a
              href="https://wa.me/971505158304?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-2 shrink-0 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'واتساب 2 (8304 515 50)' : 'WhatsApp 2 (50 515 8304)'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
