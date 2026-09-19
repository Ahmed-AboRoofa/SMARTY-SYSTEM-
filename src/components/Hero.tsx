import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Users,
} from 'lucide-react';
import { TemplateData, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface HeroProps {
  data: TemplateData;
  lang: Language;
  themeColor: ThemeColor;
  onOpenContact: () => void;
  onExploreWork: () => void;
  customHeadline?: string;
  customSubheadline?: string;
}

export const Hero: React.FC<HeroProps> = ({
  data,
  lang,
  themeColor,
  onOpenContact,
  onExploreWork,
  customHeadline,
  customSubheadline,
}) => {
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  const headline = customHeadline || (isAr ? data.heroHeadlineAr : data.heroHeadlineEn);
  const subheadline = customSubheadline || (isAr ? data.heroSubheadlineAr : data.heroSubheadlineEn);
  const badge = isAr ? data.badgeAr : data.badgeEn;
  const ctaPrimary = isAr ? data.ctaPrimaryAr : data.ctaPrimaryEn;
  const ctaSecondary = isAr ? data.ctaSecondaryAr : data.ctaSecondaryEn;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 transition-colors"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        id="hero-ambient-glow"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-transparent blur-3xl opacity-70"
      />

      <div id="hero-main-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Text Column (7 cols) */}
          <motion.div
            id="hero-text-column"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Pill Badge */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border ${theme.badgeBg} ${theme.border} ${theme.badgeText} shadow-2xs`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.18] sm:leading-[1.15] mb-6"
            >
              {headline}
            </h1>

            {/* Subheadline description */}
            <p
              id="hero-subheadline"
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8"
            >
              {subheadline}
            </p>

            {/* CTAs */}
            <div
              id="hero-cta-group"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                id="hero-primary-cta"
                onClick={onOpenContact}
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5 ${theme.primaryBg} ${theme.primaryHover}`}
              >
                <span>{ctaPrimary}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm font-semibold transition-all shadow-2xs"
              >
                <span>{ctaSecondary}</span>
              </button>
            </div>

            {/* Trust checkmarks */}
            <div
              id="hero-trust-indicators"
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 dark:text-neutral-400 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {isAr ? 'تصميم متجاوب 100%' : '100% Mobile Responsive'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {isAr ? 'متوافق مع محركات البحث SEO' : 'SEO & Core Web Vitals Ready'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {isAr ? 'دعم فني وضمان استمرارية' : '24/7 Ongoing Tech Support'}
              </span>
            </div>
          </motion.div>

          {/* Right / Visual Interactive Showcase Column (5 cols) */}
          <motion.div
            id="hero-visual-column"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Mockup Frame */}
            <div
              id="hero-mockup-frame"
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl p-4 sm:p-5 relative"
            >
              {/* Top Window Bar */}
              <div
                id="hero-mockup-titlebar"
                className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-4"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  https://your-domain.com
                </div>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>99/100</span>
                </div>
              </div>

              {/* Mockup Content Visual */}
              <div id="hero-mockup-content" className="space-y-4">
                {/* Simulated Hero Inside */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/60 dark:to-neutral-800/30 border border-neutral-200/60 dark:border-neutral-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      {isAr ? 'لوحة القيادة المباشرة' : 'Live Dashboard'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium">
                      {isAr ? 'محدث للتو' : 'Live'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                        {isAr ? 'الزيارات الشهرية' : 'Monthly Visits'}
                      </span>
                      <span className="text-base font-extrabold text-neutral-900 dark:text-white">
                        48,520
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold block">
                        ↑ +32.4%
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                        {isAr ? 'معدل التحويل' : 'Conversion Rate'}
                      </span>
                      <span className="text-base font-extrabold text-neutral-900 dark:text-white">
                        4.85%
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold block">
                        ↑ +1.2%
                      </span>
                    </div>
                  </div>

                  {/* Micro Visual Chart Bar */}
                  <div className="h-14 flex items-end gap-1.5 pt-2 px-1">
                    {[35, 55, 45, 75, 60, 90, 80, 100, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          backgroundColor:
                            i === 7 ? 'rgb(16, 185, 129)' : 'rgba(156, 163, 175, 0.3)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Social Proof Pill */}
                <div
                  id="hero-floating-proof"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold text-xs">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                        {isAr ? 'تقييم ممتاز 4.9 من 5' : 'Rated 4.9 / 5.0'}
                      </span>
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        {isAr ? 'من أكثر من 180 عميل معتمد' : 'From 180+ verified clients'}
                      </span>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=60&auto=format&fit=crop"
                      alt="client"
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full border-2 border-white dark:border-neutral-800 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&auto=format&fit=crop"
                      alt="client"
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full border-2 border-white dark:border-neutral-800 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=60&auto=format&fit=crop"
                      alt="client"
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full border-2 border-white dark:border-neutral-800 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Metric Stats Counters Row */}
        <div
          id="hero-stats-row"
          className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {data.stats.map((stat, idx) => (
            <div key={idx} id={`hero-stat-card-${idx}`} className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                {isAr ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
