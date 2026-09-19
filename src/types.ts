export type Language = 'ar' | 'en';

export type WebsiteCategory = 'smart-system' | 'agency' | 'portfolio' | 'ecommerce' | 'restaurant' | 'consulting';

export type ThemeColor = 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  tagsAr: string[];
  tagsEn: string[];
}

export interface ProjectItem {
  id: string;
  titleAr: string;
  titleEn: string;
  category: string;
  categoryNameAr: string;
  categoryNameEn: string;
  descAr: string;
  descEn: string;
  image: string;
  clientAr: string;
  clientEn: string;
  metricsAr: string;
  metricsEn: string;
  tags: string[];
}

export interface PricingTier {
  id: string;
  nameAr: string;
  nameEn: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  descAr: string;
  descEn: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface TestimonialItem {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  companyAr: string;
  companyEn: string;
  quoteAr: string;
  quoteEn: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  categoryAr: string;
  categoryEn: string;
}

export interface TemplateData {
  id: WebsiteCategory;
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  heroHeadlineAr: string;
  heroHeadlineEn: string;
  heroSubheadlineAr: string;
  heroSubheadlineEn: string;
  ctaPrimaryAr: string;
  ctaPrimaryEn: string;
  ctaSecondaryAr: string;
  ctaSecondaryEn: string;
  badgeAr: string;
  badgeEn: string;
  stats: Array<{
    value: string;
    labelAr: string;
    labelEn: string;
  }>;
  services: ServiceItem[];
  projects: ProjectItem[];
  pricing: PricingTier[];
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
}

export interface SiteCustomization {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  primaryColor: ThemeColor;
}
