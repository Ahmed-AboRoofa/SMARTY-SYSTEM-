import React from 'react';
import {
  ShieldCheck,
  Zap,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Sliders,
  Award,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { SmartLogo } from './SmartLogo';

interface SmartAboutProps {
  lang: Language;
  onExploreServices: () => void;
}

export const SmartAbout: React.FC<SmartAboutProps> = ({ lang, onExploreServices }) => {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: Zap,
      titleAr: 'تحكم شامل بالوظائف الكهربائية',
      titleEn: 'Total Electrical & Climate Control',
      descAr: 'تحكم دقيق وفوري بجميع خطوط الإضاءة، التكييف، الستائر الكهربائية، وسيناريوهات التشغيل الموفرة للطاقة.',
      descEn: 'Precision control over all lighting circuits, HVAC temperature, motorized curtains, and custom energy-saving scenes.',
      color: 'text-[#0088cc]',
      bg: 'bg-sky-50 dark:bg-sky-950/40'
    },
    {
      icon: ShieldCheck,
      titleAr: 'أمان متكامل وسلامة على مدار الساعة',
      titleEn: '24/7 Security & Intrusion Safety',
      descAr: 'حماية المنشأة عبر كاميرات المراقبة، أجهزة الإنذار ضد السرقة، وأقفال الأبواب الذكية بالبصمة مع إشعارات فورية.',
      descEn: 'Comprehensive protection combining CCTV cameras, burglar alarm sensors, and biometric door locks with live alerts.',
      color: 'text-[#8A2BE2]',
      bg: 'bg-purple-50 dark:bg-purple-950/40'
    },
    {
      icon: Smartphone,
      titleAr: 'تحكم سلس عن بُعد عبر الهاتف',
      titleEn: 'Intuitive Remote Smartphone App',
      descAr: 'تطبيق موحد وسهل يتيح لك فتح الأبواب للزوار، مراقبة الكاميرات، وضبط التكييف من أي مكان حول العالم.',
      descEn: 'A unified, user-friendly mobile application allowing you to unlock doors, view cameras, and tune climate globally.',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/40'
    },
    {
      icon: Layers,
      titleAr: 'حلول سلكية ولاسلكية مرنة',
      titleEn: 'Wired & Wireless Architecture',
      descAr: 'نوفر تقنيات KNX للمباني قيد الإنشاء، وحلول Zigbee 3.0 اللاسلكية للمنازل القائمة بدون الحاجة لأي تكسير.',
      descEn: 'Offering KNX standard automation for buildings under construction, and wireless Zigbee 3.0 without altering walls.',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/40'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'من نحن ورؤيتنا الهندسية' : 'About Our Engineering Vision'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'عن Smart System للأنظمة المتقدمة' : 'About Smart System Advanced Solutions'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />
        </div>

        {/* User's Exact About Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            {isAr ? (
              <>
                تقدم <strong className="text-neutral-900 dark:text-white font-extrabold text-[#0088cc]">Smart System</strong> حلول متكاملة في التحكم الذكي بجميع الوظائف الكهربائية في المنازل والمباني؛ من الإضاءة والصوتيات إلى الستائر والتحكم بالمناخ (التكييف)، بالإضافة إلى أنظمة الأمان والسينما المنزلية للمنشآت السكنية والتجارية. تتيح تقنياتنا سهولة الوصول والتحكم عن بُعد عبر الهواتف الذكية مع التركيز على السلامة وتوفير الطاقة.
              </>
            ) : (
              <>
                <strong className="text-neutral-900 dark:text-white font-extrabold text-[#0088cc]">Smart System</strong> delivers fully integrated smart automation solutions for all electrical and environmental functions across homes and commercial buildings. From precision lighting and multi-room audio to motorized curtains, HVAC climate management, comprehensive security systems, and private home cinema acoustics. Our technologies ensure effortless remote access via mobile apps while prioritizing maximum occupant safety and energy efficiency.
              </>
            )}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/80 backdrop-blur-xs border border-slate-200/80 dark:border-neutral-800 hover:border-[#0088cc]/60 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.bg} ${pillar.color} shadow-xs`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2.5 leading-snug">
                  {isAr ? pillar.titleAr : pillar.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {isAr ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 border border-white/10">
              <Award className="w-8 h-8 text-amber-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">
                {isAr ? 'مهندسون معتمدون وضمان شامل يصل حتى 5 سنوات' : 'Certified Engineers & Up to 5-Year Full Warranty'}
              </h4>
              <p className="text-xs text-sky-200 mt-1 max-w-xl">
                {isAr
                  ? 'نضمن توريد وتركيب المنتجات الأصلية وفق معايير الجودة العالمية مع توفير دعم فني وزيارات صيانة دورية مجدولة.'
                  : 'We supply authentic hardware adhering to international safety standards, supported by 24/7 technical hotlines.'}
              </p>
            </div>
          </div>

          <button
            onClick={onExploreServices}
            className="px-6 py-3 rounded-xl bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100 transition-colors shrink-0 shadow"
          >
            {isAr ? 'استعراض الأنظمة والخدمات' : 'Explore All Smart Systems'}
          </button>
        </div>
      </div>
    </section>
  );
};
