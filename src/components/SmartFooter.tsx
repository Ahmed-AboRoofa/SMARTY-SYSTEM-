import React from 'react';
import {
  Cpu,
  Phone,
  Mail,
  MapPin,
  Heart,
  MessageSquare,
  ShieldCheck,
  ArrowUp
} from 'lucide-react';
import { Language } from '../types';
import { SmartLogo } from './SmartLogo';

interface SmartFooterProps {
  lang: Language;
}

export const SmartFooter: React.FC<SmartFooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="smart-footer"
      className="bg-[#1a252f] text-white pt-12 pb-12 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stationary End-of-Page Quick Contact Dock (Non-floating) */}
        <div
          id="footer-stationary-quick-dock"
          className="mb-14 p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-start">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                {isAr ? 'تواصل فوري ومباشر مع المهندسين' : 'Instant Engineering Consultation & Inquiries'}
              </h3>
            </div>
            <p className="text-xs text-neutral-400">
              {isAr
                ? 'فريقنا الهندسي جاهز للرد على استفساراتك، تقديم عروض الأسعار، وتحديد مواعيد المعاينة الميدانية'
                : 'Our smart engineering team is ready to assist with quotations, technical specifications, and site surveys'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            {/* WhatsApp Line 1 (Primary) */}
            <a
              id="footer-whatsapp-btn-1"
              href="https://wa.me/971523066013?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95 ring-1 ring-emerald-400/40"
              title={isAr ? 'محادثة واتساب الرئيسي (+971 52 306 6013)' : 'Primary WhatsApp Line (+971 52 306 6013)'}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'واتساب الرئيسي' : 'Primary WhatsApp'}</span>
              <span className="font-mono text-[11px] opacity-90 font-bold" dir="ltr">
                +971 52 306 6013
              </span>
            </a>

            {/* WhatsApp Line 2 (Secondary) */}
            <a
              id="footer-whatsapp-btn-2"
              href="https://wa.me/971505158304?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
              title={isAr ? 'محادثة واتساب 2 (+971 50 515 8304)' : 'WhatsApp Line 2 (+971 50 515 8304)'}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'واتساب 2' : 'WhatsApp 2'}</span>
              <span className="font-mono text-[11px] opacity-90" dir="ltr">
                +971 50 515 8304
              </span>
            </a>

            {/* Direct Phone UAE */}
            <a
              id="footer-phone-btn"
              href="tel:+971523066013"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
              title={isAr ? 'اتصال هاتفي مباشر' : 'Direct Phone Call'}
            >
              <Phone className="w-4 h-4" />
              <span>{isAr ? 'اتصال مباشر' : 'Direct Call'}</span>
            </a>

            {/* Static Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all text-xs font-bold"
              title={isAr ? 'الرجوع لأعلى الصفحة' : 'Back to Top'}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">{isAr ? 'للأعلى' : 'Top'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <SmartLogo size="md" lang={lang} />

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {isAr
                ? 'الرواد في تصميم وتنفيذ وتوريد أنظمة المنازل والفنادق الذكية، المراقبة الأمنية CCTV، أجهزة الدخول البيومترية، والسينما المنزلية الفاخرة.'
                : 'Pioneering turnkey smart automation, hotel guestroom energy management, biometric security, and Dolby Atmos private home cinema.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/971523066013"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-white text-xs ring-1 ring-emerald-500/40"
                title="WhatsApp UAE Primary (+971 52 306 6013)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971505158304"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-teal-600 transition-colors flex items-center justify-center text-white text-xs"
                title="WhatsApp UAE Secondary (+971 50 515 8304)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+971523066013"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-white text-xs"
                title="Direct Call UAE Primary (+971 52 306 6013)"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="tel:+971505158304"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-[#0088cc] transition-colors flex items-center justify-center text-white text-xs"
                title="Direct Call UAE Secondary (+971 50 515 8304)"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@smartsystem.com"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-[#0088cc] transition-colors flex items-center justify-center text-white text-xs"
                title="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0088cc]">
              {isAr ? 'الأنظمة والخدمات' : 'Smart Solutions'}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {isAr ? 'أتمتة المنازل والفنادق' : 'Home & Hotel Automation'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {isAr ? 'كاميرات المراقبة (CCTV)' : 'CCTV Surveillance'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {isAr ? 'الأقفال وأجهزة الدخول الذكية' : 'Smart Door Locks'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {isAr ? 'أنظمة الإنذار ضد السرقة' : 'Burglar Alarms'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {isAr ? 'الستائر والسينما المنزلية' : 'Curtains & Home Cinema'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#8A2BE2]">
              {isAr ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {isAr ? 'عن الشركة' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">
                  {isAr ? 'تجربة النظام' : 'Live Simulator'}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {isAr ? 'خطوات العمل' : 'Work Process'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {isAr ? 'مشاريعنا' : 'Our Projects'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {isAr ? 'الأسئلة الشائعة' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Hotlines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
              {isAr ? 'أرقام الاتصال المباشرة' : 'Direct Hotlines'}
            </h4>
            <div className="space-y-3 text-xs">
              {/* UAE Line 1 (Primary) */}
              <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60 ring-1 ring-emerald-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-emerald-400 font-bold">
                    {isAr ? 'الإمارات - الخط الرئيسي (مبيعات واستشارات):' : 'UAE Primary Line (Sales & Inquiries):'}
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
                    {isAr ? 'الأساسي' : 'Primary'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+971523066013"
                    className="font-mono font-bold text-white hover:text-emerald-400 direction-ltr text-sm"
                  >
                    +971 52 306 6013
                  </a>
                  <a
                    href="https://wa.me/971523066013"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold hover:bg-emerald-500/30"
                  >
                    واتساب
                  </a>
                </div>
              </div>

              {/* UAE Line 2 (Secondary) */}
              <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                <span className="text-[10px] text-sky-400 font-bold block mb-1">
                  {isAr ? 'الإمارات - الخط الثاني (دعم وخدمة عملاء):' : 'UAE Secondary Line (Support):'}
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+971505158304"
                    className="font-mono font-bold text-white hover:text-sky-400 direction-ltr text-sm"
                  >
                    +971 50 515 8304
                  </a>
                  <a
                    href="https://wa.me/971505158304"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-[10px] font-bold hover:bg-sky-500/30"
                  >
                    واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Matching user's exact footer tag: جميع الحقوق محفوظة © 2026 Smart System | الأنظمة الذكية) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            {isAr
              ? 'جميع الحقوق محفوظة © 2026 Smart System | الأنظمة الذكية للأنظمة والأنظمة المتقدمة'
              : 'All rights reserved © 2026 Smart System | Advanced Smart Systems'}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs"
          >
            <span>{isAr ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
