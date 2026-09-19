import React from 'react';
import {
  ShieldCheck,
  Zap,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface AboutSectionProps {
  lang: Language;
  themeColor: ThemeColor;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  themeColor,
  onOpenContact,
}) => {
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  const values = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      titleAr: 'سرعة وكفاءة تقنية فائقة',
      titleEn: 'Blazing Fast Performance',
      descAr: 'نحرص على أن تحمل صفحاتك في أجزاء من الثانية لخفض معدل الارتداد ومضاعفة التفاعل.',
      descEn: 'Sub-second page loads engineered to keep visitors hooked and boost conversion.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      titleAr: 'حماية وأمان موثوق 100%',
      titleEn: 'Enterprise-Grade Security',
      descAr: 'شهادات أمان SSL وتشفير سحابي متكامل يضمن سلامة بياناتك ومعاملات زوارك المالية.',
      descEn: 'SSL encryption, automated backups, and rigorous cyber standards guarding your data.',
    },
    {
      icon: <Award className="w-5 h-5 text-blue-500" />,
      titleAr: 'جودة وتصميم لا يقبل المساومة',
      titleEn: 'Pixel-Perfect Craftsmanship',
      descAr: 'كل عنصر وتفاعل يتم اختباره بعناية ليعكس هوية راقية تليق بمكانتك في السوق.',
      descEn: 'Meticulously crafted components and fluid micro-interactions elevating your presence.',
    },
    {
      icon: <Users className="w-5 h-5 text-purple-500" />,
      titleAr: 'شراكة ودعم دائم بعد الإطلاق',
      titleEn: 'Dedicated Post-Launch Support',
      descAr: 'لا تنتهي علاقتنا بمجرد التسليم، بل نوفر دعماً مستمراً وتحديثات تقنية دورية.',
      descEn: 'We stand by our work with proactive maintenance, security patches, and consulting.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50/50 dark:bg-neutral-900/40 border-y border-neutral-200/60 dark:border-neutral-800">
      <div id="about-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Story / Banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Our Team"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  {isAr ? 'قصة الشغف والابتكار' : 'Our Passion & Journey'}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
                  {isAr ? 'نؤمن بأن الويب هو واجهة مستقبلك' : 'We Believe The Web Is Your Future Frontline'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md">
                  {isAr
                    ? 'منذ تأسيسنا، رافقنا أكثر من 200 شركة ومستقل في بناء منصات رقمية حققت أثرًا حقيقيًا وأرباحًا مستدامة.'
                    : 'Over 200+ brands and creators have trusted our technical expertise to build scalable, high-yielding web assets.'}
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              id="about-experience-pill"
              className="absolute -bottom-6 start-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-4 shadow-xl flex items-center gap-3.5"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl ${theme.primaryBg}`}>
                +12
              </div>
              <div>
                <span className="text-sm font-extrabold text-neutral-900 dark:text-white block">
                  {isAr ? 'عاماً من التميز الرقمي' : 'Years of Digital Craft'}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isAr ? 'معايير عالمية وخبرة محلية' : 'Global Standards & Local Trust'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Content */}
          <div className="lg:col-span-6 flex flex-col">
            <span
              id="about-badge"
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-fit ${theme.badgeBg} ${theme.badgeText}`}
            >
              {isAr ? 'لماذا تختارنا لمشروعك؟' : 'Why Choose Us'}
            </span>

            <h2
              id="about-title"
              className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-5 leading-tight"
            >
              {isAr
                ? 'لا نبني مجرد صفحات ويب، بل نبني أصولاً رقمية تنمو مع طموحاتك'
                : 'We Do Not Just Build Web Pages; We Build Scalable Digital Growth Assets'}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              {isAr
                ? 'ندرك أن موقعك هو الواجهة الأولى التي يلتقي بها عملاؤك، لذلك ندمج بين أحدث لغات البرمجة، خوادم الاستضافة السريعة، وأعلى معايير الحماية لنضمن لك تفوقاً دائماً على منافسيك.'
                : 'Your digital footprint forms the bedrock of customer perception. We fuse bleeding-edge frameworks, high-availability architecture, and conversion science to ensure sustainable market leadership.'}
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  id={`about-val-item-${idx}`}
                  className="p-3.5 rounded-xl bg-white dark:bg-neutral-800/60 border border-neutral-200/70 dark:border-neutral-700/60 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {val.icon}
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                      {isAr ? val.titleAr : val.titleEn}
                    </h4>
                  </div>
                  <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {isAr ? val.descAr : val.descEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                id="about-discuss-btn"
                onClick={onOpenContact}
                className={`px-6 py-3 rounded-xl text-white text-xs font-bold shadow-md transition-all ${theme.primaryBg} ${theme.primaryHover}`}
              >
                {isAr ? 'ناقش فكرة مشروعك معنا' : 'Discuss Your Project Today'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
