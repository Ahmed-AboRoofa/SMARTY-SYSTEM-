import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Thermometer,
  Video,
  Play,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Phone
} from 'lucide-react';
import { Language } from '../types';
import { SmartLogo } from './SmartLogo';

interface SmartHeroProps {
  lang: Language;
  onExploreServices: () => void;
  onOpenContact: () => void;
}

export const SmartHero: React.FC<SmartHeroProps> = ({
  lang,
  onExploreServices,
  onOpenContact,
}) => {
  const isAr = lang === 'ar';

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-neutral-50 dark:from-neutral-900/60 dark:via-neutral-950 dark:to-neutral-900"
    >
      {/* Ambient decorative glow */}
      <div className="absolute top-10 start-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-sky-400/10 via-purple-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-start">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-[#0088cc] dark:text-sky-300 text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>
                {isAr
                  ? 'الريادة في أنظمة الأتمتة والتحكم الذكي'
                  : 'Pioneering Smart Home & Hotel Automation'}
              </span>
            </div>

            {/* Main Headline (Exact text from user) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.25] mb-6">
              {isAr ? (
                <>
                  حلول مبتكرة وذكية <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088cc] to-[#8A2BE2]">
                    لمنزلك ومؤسستك
                  </span>
                </>
              ) : (
                <>
                  Innovative & Smart Solutions <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088cc] to-[#8A2BE2]">
                    For Homes & Enterprises
                  </span>
                </>
              )}
            </h1>

            {/* Subheadline (Exact text from user) */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {isAr
                ? 'نحن ندمج أحدث أنظمة الأتمتة والتحكم الذكي لنمنحك الراحة، الأمان، وتوفير الطاقة بلمسة واحدة.'
                : 'Integrating state-of-the-art automation and smart control systems to deliver ultimate comfort, ironclad security, and energy savings with a single touch.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreServices();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white text-sm font-extrabold shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
                }}
              >
                <span>{isAr ? 'استكشف خدماتنا' : 'Explore Our Services'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl border-2 border-neutral-800 dark:border-neutral-300 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all text-sm font-extrabold flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-sky-50 dark:bg-neutral-800 text-[#0088cc] dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-neutral-700 transition-all text-xs font-bold flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isAr ? 'تجربة النظام الحي' : 'Try Live Simulator'}</span>
              </a>
            </div>

            {/* Stationary Quick Contact Buttons (Beginning of Page - Non-floating) */}
            <div
              id="hero-quick-contact-dock"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10 p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800 shadow-xs"
            >
              <div className="flex items-center gap-1.5 px-2 text-xs font-bold text-neutral-600 dark:text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isAr ? 'قنوات الاتصال المباشر:' : 'Direct Quick Access:'}</span>
              </div>

              {/* Direct WhatsApp Line 1 (Primary) */}
              <a
                id="hero-quick-whatsapp-1"
                href="https://wa.me/971523066013?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm active:scale-95 ring-1 ring-emerald-400/30"
                title={isAr ? 'الخط الأساسي - محادثة مباشرة عبر واتساب' : 'Primary WhatsApp Line'}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'واتساب الرئيسي' : 'Primary WhatsApp'}</span>
                <span className="font-mono text-[11px] opacity-95 ltr:inline rtl:inline font-bold" dir="ltr">
                  +971 52 306 6013
                </span>
              </a>

              {/* Direct WhatsApp Line 2 (Secondary) */}
              <a
                id="hero-quick-whatsapp-2"
                href="https://wa.me/971505158304?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Smart%20System%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm active:scale-95"
                title={isAr ? 'الخط الثاني - محادثة مباشرة عبر واتساب' : 'Direct WhatsApp Line 2'}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'واتساب 2' : 'WhatsApp 2'}</span>
                <span className="font-mono text-[11px] opacity-95 ltr:inline rtl:inline" dir="ltr">
                  +971 50 515 8304
                </span>
              </a>

              {/* Direct Phone UAE (Primary) */}
              <a
                id="hero-quick-phone"
                href="tel:+971523066013"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-bold transition-all shadow-xs active:scale-95"
                title={isAr ? 'اتصال مباشر بالرقم الأساسي' : 'Direct Phone Call'}
              >
                <Phone className="w-3.5 h-3.5 text-[#0088cc]" />
                <span>{isAr ? 'اتصال مباشر' : 'Direct Call'}</span>
              </a>
            </div>

            {/* Value Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">+850</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isAr ? 'منزل وفيلا ذكية' : 'Smart Residences'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#0088cc]">35%</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isAr ? 'توفير استهلاك الطاقة' : 'Energy Savings'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#8A2BE2]">24/7</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isAr ? 'مراقبة ودعم فني' : 'Support & Monitoring'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isAr ? 'أجهزة أصلية معتمدة' : 'Certified Protocols'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800 backdrop-blur-md">
              {/* Header inside phone mockup card */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <SmartLogo variant="icon-only" size="sm" lang={lang} />
                  <div>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                      {isAr ? 'لوحة تحكم Smart System' : 'Smart System Hub'}
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      {isAr ? 'متصل ومحمي بنجاح' : 'Online & Encrypted'}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[10px] font-mono font-bold text-neutral-600 dark:text-neutral-300">
                  SmartOS v3.4
                </span>
              </div>

              {/* Status Grid in Mockup */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {/* Climate */}
                <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-neutral-800/70 border border-sky-100 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <Thermometer className="w-4 h-4 text-[#0088cc]" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-200 dark:bg-sky-900/60 text-[#0088cc] dark:text-sky-300">
                      {isAr ? 'تبريد' : 'Cooling'}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-neutral-900 dark:text-white">22°C</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {isAr ? 'تكييف الصالة الرئيسية' : 'Living Area AC'}
                  </div>
                </div>

                {/* Lock */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-neutral-800/70 border border-emerald-100 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                      {isAr ? 'مؤمن' : 'Secured'}
                    </span>
                  </div>
                  <div className="text-xs font-black text-neutral-900 dark:text-white mt-1.5">
                    {isAr ? 'الباب الرئيسي' : 'Main Entrance'}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {isAr ? 'قفل بيومتري نشط' : 'Biometric Active'}
                  </div>
                </div>

                {/* CCTV Cameras */}
                <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-neutral-800/70 border border-purple-100 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <Video className="w-4 h-4 text-[#8A2BE2]" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-200 dark:bg-purple-900/60 text-[#8A2BE2] dark:text-purple-300">
                      4K Color
                    </span>
                  </div>
                  <div className="text-xs font-black text-neutral-900 dark:text-white mt-1.5">
                    {isAr ? '4 كاميرات نشطة' : '4 Cameras Active'}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {isAr ? 'تسجيل ذكي AI' : 'AI Recording'}
                  </div>
                </div>

                {/* Lighting Scene */}
                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-neutral-800/70 border border-amber-100 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                      {isAr ? 'مشهد دافئ' : 'Warm Scene'}
                    </span>
                  </div>
                  <div className="text-xs font-black text-neutral-900 dark:text-white mt-1.5">
                    {isAr ? 'الإضاءة والمشاهد' : 'Living Lighting'}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {isAr ? 'سطوع 80% أوتوماتيكي' : 'Auto 80% Dim'}
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Feature Bar */}
              <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                    {isAr ? 'حماية الإنذار ضد السرقة:' : 'Intrusion Alarm System:'}
                  </span>
                </div>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {isAr ? 'مفعّل بالكامل' : 'Armed & Ready'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
