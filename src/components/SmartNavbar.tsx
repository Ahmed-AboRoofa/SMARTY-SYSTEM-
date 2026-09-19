import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Phone,
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  Sliders,
  ShieldCheck,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';
import { SmartLogo } from './SmartLogo';

interface SmartNavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenDemo: () => void;
}

export const SmartNavbar: React.FC<SmartNavbarProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleTheme,
  onOpenDemo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelAr: 'من نحن', labelEn: 'About Us' },
    { href: '#services', labelAr: 'خدماتنا', labelEn: 'Services' },
    { href: '#simulator', labelAr: 'تجربة النظام', labelEn: 'Live Controller' },
    { href: '#process', labelAr: 'خطوات العمل', labelEn: 'Work Process' },
    { href: '#projects', labelAr: 'مشاريعنا', labelEn: 'Projects' },
    { href: '#contact', labelAr: 'تواصل معنا', labelEn: 'Contact Us' },
  ];

  return (
    <header
      id="smart-main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-200 dark:border-neutral-800'
          : 'bg-white dark:bg-neutral-900 shadow-sm py-4 border-b border-neutral-100 dark:border-neutral-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="smart-logo-link"
            href="#"
            className="flex items-center group focus:outline-none"
          >
            <SmartLogo size="md" lang={lang} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#0088cc] dark:hover:text-[#0088cc] transition-colors"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Phone Hotlines Dropdown */}
            <div className="relative">
              <button
                id="phone-dropdown-toggle"
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                title={isAr ? 'أرقام الاتصال المباشرة' : 'Direct Phone Hotlines'}
              >
                <Phone className="w-3.5 h-3.5 text-[#0088cc]" />
                <span className="hidden sm:inline">{isAr ? 'اتصل بنا' : 'Call Us'}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {phoneDropdownOpen && (
                <div
                  className={`absolute mt-2 w-64 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800 p-3 z-50 ${
                    isAr ? 'left-0' : 'right-0'
                  }`}
                >
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2 px-2">
                    {isAr ? 'خطوط الاتصال وخدمة العملاء' : 'Hotlines & Support'}
                  </span>
                  <a
                    href="tel:+971523066013"
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-emerald-50 dark:hover:bg-neutral-800 transition-colors text-xs font-semibold text-neutral-800 dark:text-neutral-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">🇦🇪</span>
                      <div>
                        <div className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                          <span>{isAr ? 'الإمارات - الخط الرئيسي (مبيعات/استشارات)' : 'UAE Primary Line (Sales/Consultation)'}</span>
                          <span className="px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[9px] font-bold">
                            {isAr ? 'الأساسي' : 'Primary'}
                          </span>
                        </div>
                        <div className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 direction-ltr font-bold">
                          +971 52 306 6013
                        </div>
                      </div>
                    </div>
                    <Phone className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600" />
                  </a>

                  <a
                    href="tel:+971505158304"
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-sky-50 dark:hover:bg-neutral-800 transition-colors text-xs font-semibold text-neutral-800 dark:text-neutral-200 group mt-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">🇦🇪</span>
                      <div>
                        <div className="font-bold text-neutral-900 dark:text-white">
                          {isAr ? 'الإمارات - الخط الثاني (دعم واستفسارات)' : 'UAE Secondary Line (Support)'}
                        </div>
                        <div className="font-mono text-[11px] text-[#0088cc] direction-ltr">
                          +971 50 515 8304
                        </div>
                      </div>
                    </div>
                    <Phone className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0088cc]" />
                  </a>
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-xs font-bold flex items-center gap-1"
              title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-4 h-4 text-neutral-500" />
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={isDark ? 'الوضع النهاري' : 'الوضع الليلي'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </button>

            {/* Direct WhatsApp Action Button (Static at beginning of page - Primary Number) */}
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/971523066013?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xs hover:shadow-sm active:scale-95 ring-1 ring-emerald-400/30"
              title={isAr ? 'محادثة مباشرة عبر واتساب الرئيسي (+971 52 306 6013)' : 'Primary WhatsApp Direct (+971 52 306 6013)'}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
            </a>

            {/* Primary Gradient Contact Button */}
            <a
              id="header-contact-btn"
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
              }}
            >
              <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl text-sm font-bold text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2">
              {/* WhatsApp 1 (Primary) */}
              <a
                href="https://wa.me/971523066013?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'واتساب الرئيسي: 6013 306 52 971+' : 'Primary WhatsApp: +971 52 306 6013'}</span>
              </a>

              {/* WhatsApp 2 (Secondary) */}
              <a
                href="https://wa.me/971505158304?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'واتساب 2: 8304 515 50 971+' : 'WhatsApp 2: +971 50 515 8304'}</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+971523066013"
                  className="py-2.5 px-2 rounded-xl bg-emerald-50 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>اتصال: 6013 306 52+</span>
                </a>
                <a
                  href="tel:+971505158304"
                  className="py-2.5 px-2 rounded-xl bg-sky-50 dark:bg-neutral-800 text-[#0088cc] text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>اتصال: 8304 515 50+</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-white text-center text-xs font-bold shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
                }}
              >
                {isAr ? 'تواصل معنا الآن' : 'Contact Us Now'}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
