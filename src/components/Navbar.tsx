import React, { useState, useEffect } from 'react';
import {
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Sliders,
  Sparkles,
  PhoneCall,
  ChevronDown,
} from 'lucide-react';
import { Language, WebsiteCategory, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';
import { SmartLogo } from './SmartLogo';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  currentCategory: WebsiteCategory;
  onSelectCategory: (cat: WebsiteCategory) => void;
  onOpenCustomizer: () => void;
  onOpenContact: () => void;
  siteName: string;
  themeColor: ThemeColor;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleTheme,
  currentCategory,
  onSelectCategory,
  onOpenCustomizer,
  onOpenContact,
  siteName,
  themeColor,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const theme = THEME_CONFIGS[themeColor];
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#services', labelAr: 'الخدمات', labelEn: 'Services' },
    { href: '#portfolio', labelAr: 'الأعمال', labelEn: 'Portfolio' },
    { href: '#about', labelAr: 'من نحن', labelEn: 'About' },
    { href: '#pricing', labelAr: 'الأسعار', labelEn: 'Pricing' },
    { href: '#faq', labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ' },
    { href: '#contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  const categories: Array<{ id: WebsiteCategory; nameAr: string; nameEn: string; icon: string }> = [
    { id: 'smart-system', nameAr: 'الأنظمة الذكية Smart System', nameEn: 'Smart System', icon: '⚡' },
    { id: 'agency', nameAr: 'شركة رقمية وبرمجية', nameEn: 'Digital Agency', icon: '🏢' },
    { id: 'portfolio', nameAr: 'معرض أعمال شخصي', nameEn: 'Personal Portfolio', icon: '💼' },
    { id: 'ecommerce', nameAr: 'متجر إلكتروني', nameEn: 'E-commerce Store', icon: '🛍️' },
    { id: 'restaurant', nameAr: 'مطعم ومقهى راقي', nameEn: 'Gourmet Restaurant', icon: '🍽️' },
    { id: 'consulting', nameAr: 'استشارات وأعمال', nameEn: 'Advisory & Strategy', icon: '📊' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div id="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="navbar-inner" className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            {currentCategory === 'smart-system' ? (
              <SmartLogo size="md" lang={lang} />
            ) : (
              <>
                <div
                  id="brand-logo-icon"
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-md transition-transform group-hover:scale-105 ${theme.primaryBg}`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <div id="brand-text-container" className="flex flex-col">
                  <span
                    id="brand-site-title"
                    className="text-lg font-extrabold tracking-tight text-neutral-900 dark:text-white group-hover:opacity-90"
                  >
                    {siteName}
                  </span>
                  <span
                    id="brand-site-subtitle"
                    className="text-xs text-neutral-500 dark:text-neutral-400 font-medium"
                  >
                    {isAr ? 'موقع ويب متكامل وتفاعلي' : 'Modern Web Platform'}
                  </span>
                </div>
              </>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.href.replace('#', '')}`}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div id="navbar-desktop-actions" className="hidden lg:flex items-center gap-2">
            {/* Category Template Picker */}
            <div id="category-dropdown-container" className="relative">
              <button
                id="category-dropdown-btn"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all shadow-2xs"
                title={isAr ? 'تغيير نموذج الموقع' : 'Switch Website Model'}
              >
                <span>{categories.find((c) => c.id === currentCategory)?.icon}</span>
                <span>
                  {isAr
                    ? categories.find((c) => c.id === currentCategory)?.nameAr
                    : categories.find((c) => c.id === currentCategory)?.nameEn}
                </span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {categoryDropdownOpen && (
                <div
                  id="category-dropdown-menu"
                  className="absolute top-full mt-2 w-56 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl py-1.5 z-50 transition-all"
                  style={{ [isAr ? 'right' : 'left']: 0 }}
                >
                  <div className="px-3 py-1 text-[11px] font-semibold text-neutral-400 uppercase">
                    {isAr ? 'اختر نمط الموقع' : 'Select Website Type'}
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      id={`template-option-${cat.id}`}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setCategoryDropdownOpen(false);
                      }}
                      className={`w-full text-start px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                        currentCategory === cat.id
                          ? 'bg-neutral-100 dark:bg-neutral-800 font-bold text-neutral-900 dark:text-white'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                      }`}
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span>{isAr ? cat.nameAr : cat.nameEn}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Customizer Drawer Trigger */}
            <button
              id="open-customizer-btn"
              onClick={onOpenCustomizer}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={isAr ? 'تخصيص الموقع والألوان' : 'Customize Website & Colors'}
              aria-label="Customize"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Language Switcher */}
            <button
              id="language-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={isAr ? 'تبديل للإنجليزية' : 'Switch to Arabic'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={isDark ? (isAr ? 'الوضع المضيء' : 'Light Mode') : (isAr ? 'الوضع الليلي' : 'Dark Mode')}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA Button */}
            <button
              id="navbar-cta-btn"
              onClick={onOpenContact}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5 ${theme.primaryBg} ${theme.primaryHover}`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isAr ? 'ابدأ مشروعك' : 'Get Started'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div id="mobile-menu-actions" className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-customizer-btn"
              onClick={onOpenCustomizer}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Customize"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              id="mobile-lang-btn"
              onClick={onToggleLang}
              className="px-2 py-1 text-xs font-bold rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>
            <button
              id="mobile-theme-btn"
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.href.replace('#', '')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </div>

          {/* Mobile Categories Selector */}
          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 mb-4">
            <span className="block text-xs font-semibold text-neutral-400 mb-2">
              {isAr ? 'نوع وتخصص الموقع:' : 'Website Category:'}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`mobile-cat-select-${cat.id}`}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-start px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 ${
                    currentCategory === cat.id
                      ? `${theme.primaryBg} text-white font-bold`
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="truncate">{isAr ? cat.nameAr : cat.nameEn}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            id="mobile-menu-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className={`w-full py-3 rounded-xl text-white text-sm font-bold shadow-md text-center flex items-center justify-center gap-2 ${theme.primaryBg}`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>{isAr ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}</span>
          </button>
        </div>
      )}
    </header>
  );
};
