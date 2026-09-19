import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CustomizerModal } from './components/CustomizerModal';

// Dedicated Smart System Components
import { SmartNavbar } from './components/SmartNavbar';
import { SmartHero } from './components/SmartHero';
import { SmartAbout } from './components/SmartAbout';
import { SmartServices } from './components/SmartServices';
import { SmartSimulator } from './components/SmartSimulator';
import { SmartProcess } from './components/SmartProcess';
import { SmartProjects } from './components/SmartProjects';
import { SmartFAQ } from './components/SmartFAQ';
import { SmartContact } from './components/SmartContact';
import { SmartFooter } from './components/SmartFooter';
import { SmartServiceModal } from './components/SmartServiceModal';
import { SmartWatermarkBackground } from './components/SmartWatermarkBackground';
import { SMART_SERVICES, SmartService } from './data/smartSystemData';

import { TEMPLATES } from './data/templates';
import {
  Language,
  WebsiteCategory,
  ThemeColor,
  SiteCustomization,
  ProjectItem,
  PricingTier,
  ServiceItem,
} from './types';
import { THEME_CONFIGS } from './utils/theme';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isDark, setIsDark] = useState<boolean>(false);
  // Default to the dedicated 'smart-system' requested by user
  const [currentCategory, setCurrentCategory] = useState<WebsiteCategory>('smart-system');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingTier | null>(null);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);

  // Dedicated Smart System states
  const [selectedSmartService, setSelectedSmartService] = useState<SmartService | null>(null);

  const activeTemplate = TEMPLATES[currentCategory] || TEMPLATES['smart-system'];

  // Customization state
  const [customConfig, setCustomConfig] = useState<SiteCustomization>({
    siteName: activeTemplate.nameAr,
    tagline: activeTemplate.taglineAr,
    contactEmail: 'info@smartsystem.com',
    contactPhone: '+971 52 306 6013',
    whatsappNumber: '+971523066013',
    primaryColor: 'blue',
  });

  // When template changes, update siteName & tagline
  const handleSelectCategory = (cat: WebsiteCategory) => {
    setCurrentCategory(cat);
    const tpl = TEMPLATES[cat];
    if (tpl) {
      setCustomConfig((prev) => ({
        ...prev,
        siteName: lang === 'ar' ? tpl.nameAr : tpl.nameEn,
        tagline: lang === 'ar' ? tpl.taglineAr : tpl.taglineEn,
        primaryColor: cat === 'smart-system' ? 'blue' : prev.primaryColor,
      }));
    }
  };

  // Sync HTML lang and dir attributes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync Dark Mode class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleLang = () => {
    const nextLang: Language = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    setCustomConfig((prev) => ({
      ...prev,
      siteName: nextLang === 'ar' ? activeTemplate.nameAr : activeTemplate.nameEn,
      tagline: nextLang === 'ar' ? activeTemplate.taglineAr : activeTemplate.taglineEn,
    }));
  };

  const handleResetDefaults = () => {
    setCustomConfig({
      siteName: lang === 'ar' ? activeTemplate.nameAr : activeTemplate.nameEn,
      tagline: lang === 'ar' ? activeTemplate.taglineAr : activeTemplate.taglineEn,
      contactEmail: 'info@smartsystem.com',
      contactPhone: '+971 52 306 6013',
      whatsappNumber: '+971523066013',
      primaryColor: 'blue',
    });
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSimulator = () => {
    const simElem = document.getElementById('simulator');
    if (simElem) {
      simElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    scrollToContact();
  };

  const handleSelectPlan = (plan: PricingTier) => {
    setSelectedPlan(plan);
    scrollToContact();
  };

  const handleRequestQuoteForSmartService = (srv: SmartService) => {
    setSelectedSmartService(srv);
    scrollToContact();
  };

  const isSmartSystem = currentCategory === 'smart-system';

  return (
    <div
      id="app-root-wrapper"
      className="relative min-h-screen bg-slate-50/40 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-[#0088cc] selection:text-white overflow-x-hidden"
    >
      {/* Full-Page Faint Logo Watermark Layer */}
      <SmartWatermarkBackground />

      {/* Navigation Header */}
      {isSmartSystem ? (
        <SmartNavbar
          lang={lang}
          onToggleLang={handleToggleLang}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          onOpenDemo={scrollToSimulator}
        />
      ) : (
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          currentCategory={currentCategory}
          onSelectCategory={handleSelectCategory}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          onOpenContact={scrollToContact}
          siteName={customConfig.siteName}
          themeColor={customConfig.primaryColor}
        />
      )}

      {/* Main Content Area */}
      <main id="main-content">
        {isSmartSystem ? (
          /* ========================================================== */
          /* Dedicated SMART SYSTEM Experience                         */
          /* ========================================================== */
          <>
            {/* Hero Section */}
            <SmartHero
              lang={lang}
              onExploreServices={scrollToServices}
              onOpenContact={scrollToContact}
            />

            {/* About Section */}
            <SmartAbout
              lang={lang}
              onExploreServices={scrollToServices}
            />

            {/* 8 Smart Services Section */}
            <SmartServices
              services={SMART_SERVICES}
              lang={lang}
              onSelectService={(srv) => setSelectedSmartService(srv)}
              onRequestQuoteForService={handleRequestQuoteForSmartService}
            />

            {/* Interactive Live Smart Controller Simulator */}
            <SmartSimulator lang={lang} />

            {/* 5-Step Execution Process */}
            <SmartProcess lang={lang} />

            {/* Completed Projects Showcase */}
            <SmartProjects
              lang={lang}
              onOpenContact={scrollToContact}
            />

            {/* FAQ Accordion Section */}
            <SmartFAQ lang={lang} />

            {/* Contact & Engineering Consultation Section */}
            <SmartContact
              lang={lang}
              preselectedService={selectedSmartService?.id}
            />
          </>
        ) : (
          /* ========================================================== */
          /* Generic Multi-Profile Template Views (Agency, etc.)        */
          /* ========================================================== */
          <>
            <Hero
              data={activeTemplate}
              lang={lang}
              themeColor={customConfig.primaryColor}
              onOpenContact={scrollToContact}
              onExploreWork={() => {
                const p = document.getElementById('portfolio');
                if (p) p.scrollIntoView({ behavior: 'smooth' });
              }}
              customHeadline={lang === 'ar' ? activeTemplate.heroHeadlineAr : activeTemplate.heroHeadlineEn}
              customSubheadline={lang === 'ar' ? activeTemplate.heroSubheadlineAr : activeTemplate.heroSubheadlineEn}
            />

            <ServicesSection
              services={activeTemplate.services}
              lang={lang}
              themeColor={customConfig.primaryColor}
              onSelectService={handleSelectService}
            />

            <PortfolioSection
              projects={activeTemplate.projects}
              lang={lang}
              themeColor={customConfig.primaryColor}
              onViewProject={(proj) => setSelectedProject(proj)}
            />

            <AboutSection
              lang={lang}
              themeColor={customConfig.primaryColor}
              onOpenContact={scrollToContact}
            />

            <PricingSection
              pricing={activeTemplate.pricing}
              lang={lang}
              themeColor={customConfig.primaryColor}
              onSelectPlan={handleSelectPlan}
            />

            <TestimonialsSection
              testimonials={activeTemplate.testimonials}
              lang={lang}
              themeColor={customConfig.primaryColor}
            />

            <FAQSection
              faqs={activeTemplate.faqs}
              lang={lang}
              themeColor={customConfig.primaryColor}
            />

            <ContactSection
              lang={lang}
              themeColor={customConfig.primaryColor}
              currentCategory={currentCategory}
              selectedPlan={selectedPlan}
              contactEmail={customConfig.contactEmail}
              contactPhone={customConfig.contactPhone}
              whatsappNumber={customConfig.whatsappNumber}
            />
          </>
        )}
      </main>

      {/* Footer */}
      {isSmartSystem ? (
        <SmartFooter lang={lang} />
      ) : (
        <Footer
          siteName={customConfig.siteName}
          tagline={customConfig.tagline}
          lang={lang}
          themeColor={customConfig.primaryColor}
          contactEmail={customConfig.contactEmail}
          contactPhone={customConfig.contactPhone}
        />
      )}

      {/* Smart Service Detail Modal */}
      <SmartServiceModal
        service={selectedSmartService}
        lang={lang}
        onClose={() => setSelectedSmartService(null)}
        onRequestQuote={handleRequestQuoteForSmartService}
      />

      {/* Project Detail Modal for generic portfolio */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        themeColor={customConfig.primaryColor}
        onRequestSimilar={() => scrollToContact()}
      />

      {/* Live Customizer Modal */}
      <CustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={customConfig}
        onUpdateConfig={setCustomConfig}
        lang={lang}
        onReset={handleResetDefaults}
      />
    </div>
  );
}
