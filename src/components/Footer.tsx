import React, { useState } from 'react';
import { Sparkles, Send, Heart } from 'lucide-react';
import { Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';
import { SmartLogo } from './SmartLogo';

interface FooterProps {
  siteName: string;
  tagline: string;
  lang: Language;
  themeColor: ThemeColor;
  contactEmail: string;
  contactPhone: string;
}

export const Footer: React.FC<FooterProps> = ({
  siteName,
  tagline,
  lang,
  themeColor,
  contactEmail,
  contactPhone,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
  };

  return (
    <footer
      id="main-footer"
      className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800 transition-colors"
    >
      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            {siteName.includes('Smart System') ? (
              <div className="mb-4">
                <SmartLogo size="md" lang={lang} />
              </div>
            ) : (
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold ${theme.primaryBg}`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold text-white">{siteName}</span>
              </div>
            )}
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 max-w-sm">
              {tagline}
            </p>
            <div className="text-xs text-neutral-400 space-y-1">
              <div>{isAr ? 'البريد:' : 'Email:'} <span className="text-white font-mono">{contactEmail}</span></div>
              <div>{isAr ? 'الهاتف:' : 'Phone:'} <span className="text-white font-mono">{contactPhone}</span></div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {isAr ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {isAr ? 'خدماتنا' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {isAr ? 'معرض الأعمال' : 'Portfolio'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {isAr ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {isAr ? 'باقات الأسعار' : 'Pricing'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {isAr ? 'تواصل معنا' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions (2 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {isAr ? 'الحلول والتقنيات' : 'Tech & Stacks'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>{isAr ? 'تطوير تطبيقات الويب السريعة (Next.js)' : 'Next.js & React Web Apps'}</li>
              <li>{isAr ? 'المتاجر الإلكترونية وبوابات الدفع' : 'High-Converting E-commerce'}</li>
              <li>{isAr ? 'تصميم تجربة وواجهة المستخدم (UI/UX)' : 'Bespoke UI/UX Design Systems'}</li>
              <li>{isAr ? 'تحسين محركات البحث وسرعة التصفح' : 'Core Web Vitals & Technical SEO'}</li>
              <li>{isAr ? 'الاستضافة السحابية والنسخ الاحتياطي' : 'Cloud Architecture & Security'}</li>
            </ul>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {isAr ? 'النشرة البريدية' : 'Stay Connected'}
            </h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              {isAr
                ? 'اشترك ليصلك أحدث المقالات والنصائح في تطوير الأعمال والتسويق الرقمي.'
                : 'Subscribe to receive latest trends in digital strategy, web design, and conversion.'}
            </p>

            {newsletterSent ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-medium">
                {isAr ? 'شكراً لاشتراكك في نشرتنا!' : 'Thank you for subscribing!'}
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  id="footer-newsletter-input"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={isAr ? 'بريدك الإلكتروني...' : 'your@email.com'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  id="footer-newsletter-btn"
                  type="submit"
                  className={`w-full py-2.5 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${theme.primaryBg} ${theme.primaryHover}`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isAr ? 'اشتراك' : 'Subscribe'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {siteName}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-2">
            <span>{isAr ? 'صُمم بعناية وتفانٍ' : 'Crafted with precision'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
