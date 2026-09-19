import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Building,
  ShieldCheck,
  Headphones,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface SmartContactProps {
  lang: Language;
  preselectedService?: string;
  preselectedProperty?: string;
  preselectedEstimate?: string;
}

const SERVICE_NAMES: Record<string, { ar: string; en: string }> = {
  all: { ar: 'حلول ذكية متكاملة (أتمتة شاملة)', en: 'Full Turnkey Smart Home & Automation' },
  'home-automation': { ar: 'أتمتة المنازل والفنادق الذكية', en: 'Smart Home & Hotel Automation' },
  lighting: { ar: 'الإنارة الذكية ومفاتيح المشاهد اللمسية', en: 'Smart Lighting & Scene Touch Panels' },
  'smart-lighting-switches': { ar: 'الإنارة الذكية ومفاتيح المشاهد اللمسية', en: 'Smart Lighting & Scene Touch Panels' },
  cctv: { ar: 'أنظمة المراقبة والكاميرات الذكية (CCTV)', en: 'Smart CCTV & Surveillance Systems' },
  locks: { ar: 'الأقفال وأجهزة الدخول الذكية', en: 'Smart Door Locks & Access Control' },
  alarm: { ar: 'أنظمة الإنذار والحماية ضد السرقة', en: 'Burglar & Intrusion Alarm Systems' },
  intercom: { ar: 'الانتركم والبدالة والاتصال الداخلي', en: 'Smart Video Intercom & IP PBX' },
  curtains: { ar: 'الستائر الذكية والتحكم الحركي', en: 'Smart Curtains & Motorized Blinds' },
  network: { ar: 'تمديدات الشبكات وتكنولوجيا المعلومات', en: 'Structured Cabling & IT Networks' },
  cinema: { ar: 'السينما المنزلية والأنظمة الصوتية المتعددة', en: 'Home Cinema & Multi-Room Audio' },
};

const PROPERTY_NAMES: Record<string, { ar: string; en: string }> = {
  villa: { ar: 'فيلا سكنية فاخرة', en: 'Luxury Villa' },
  apartment: { ar: 'شقة / بنتهاوس', en: 'Apartment / Penthouse' },
  hotel: { ar: 'فندق / مشروع سياحي', en: 'Hotel / Hospitality' },
  office: { ar: 'مبنى إداري / شركات', en: 'Commercial / Office' },
  other: { ar: 'عقار آخر', en: 'Other Property' },
};

const PRIMARY_WHATSAPP = '971523066013';
const PRIMARY_WHATSAPP_DISPLAY = '+971 52 306 6013';
const SECONDARY_WHATSAPP = '971505158304';
const SECONDARY_WHATSAPP_DISPLAY = '+971 50 515 8304';

// Number 1 is now the Primary number
const UAE_WHATSAPP_1 = PRIMARY_WHATSAPP;
const UAE_WHATSAPP_1_DISPLAY = PRIMARY_WHATSAPP_DISPLAY;
const UAE_WHATSAPP_2 = SECONDARY_WHATSAPP;
const UAE_WHATSAPP_2_DISPLAY = SECONDARY_WHATSAPP_DISPLAY;

// Backwards compatibility alias
const DEDICATED_WHATSAPP_NUMBER = PRIMARY_WHATSAPP;
const DEDICATED_WHATSAPP_DISPLAY = PRIMARY_WHATSAPP_DISPLAY;

export const SmartContact: React.FC<SmartContactProps> = ({
  lang,
  preselectedService,
  preselectedProperty,
  preselectedEstimate,
}) => {
  const isAr = lang === 'ar';

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [property, setProperty] = useState(preselectedProperty || 'villa');
  const [service, setService] = useState(preselectedService || 'all');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync props if changed externally (e.g. from service cards or calculator)
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedProperty) {
      setProperty(preselectedProperty);
    }
  }, [preselectedProperty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;
    setIsSubmitted(true);
  };

  /**
   * Generates a customized WhatsApp link dynamically based on the user's chosen service
   * and any entered form details, routed to +971505158304
   */
  const customWhatsAppUrl = useMemo(() => {
    const selectedServiceName = SERVICE_NAMES[service]?.[isAr ? 'ar' : 'en'] || service;
    const selectedPropertyName = PROPERTY_NAMES[property]?.[isAr ? 'ar' : 'en'] || property;

    const lines: string[] = [];

    if (isAr) {
      lines.push(`مرحباً Smart System 👋`);
      lines.push(`أرغب في الاستفسار والحصول على استشارة هندسية وعرض أسعار بخصوص:`);
      lines.push(`🔹 الخدمة المطلوبة: ${selectedServiceName}`);
      if (property) {
        lines.push(`🏢 نوع العقار: ${selectedPropertyName}`);
      }
      if (preselectedEstimate) {
        lines.push(`💰 التقدير المحسوب: ${preselectedEstimate}`);
      }
      if (fullName.trim()) {
        lines.push(`👤 الاسم: ${fullName.trim()}`);
      }
      if (phoneNumber.trim()) {
        lines.push(`📱 رقم الهاتف: ${phoneNumber.trim()}`);
      }
      if (email.trim()) {
        lines.push(`📧 البريد: ${email.trim()}`);
      }
      if (message.trim()) {
        lines.push(`📝 ملاحظات وتفاصيل المشروع: ${message.trim()}`);
      }
      lines.push(``);
      lines.push(`أرجو تزويدي بالحلول المناسبة والمخطط الهندسي.`);
    } else {
      lines.push(`Hello Smart System team 👋`);
      lines.push(`I would like to inquire and request an engineering consultation and quote regarding:`);
      lines.push(`🔹 Selected Service: ${selectedServiceName}`);
      if (property) {
        lines.push(`🏢 Property Type: ${selectedPropertyName}`);
      }
      if (preselectedEstimate) {
        lines.push(`💰 Estimated Cost: ${preselectedEstimate}`);
      }
      if (fullName.trim()) {
        lines.push(`👤 Full Name: ${fullName.trim()}`);
      }
      if (phoneNumber.trim()) {
        lines.push(`📱 Phone: ${phoneNumber.trim()}`);
      }
      if (email.trim()) {
        lines.push(`📧 Email: ${email.trim()}`);
      }
      if (message.trim()) {
        lines.push(`📝 Project Notes: ${message.trim()}`);
      }
      lines.push(``);
      lines.push(`Please provide me with technical recommendations and proposal.`);
    }

    const messageText = lines.join('\n');
    return `https://wa.me/${DEDICATED_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
  }, [service, property, preselectedEstimate, fullName, phoneNumber, email, message, isAr]);

  const getCustomWhatsAppUrl = () => customWhatsAppUrl;

  const handleOpenCustomWhatsApp = () => {
    window.open(customWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = (target: 'uae1' | 'uae2') => {
    const num = target === 'uae1' ? UAE_WHATSAPP_1 : UAE_WHATSAPP_2;
    const selectedServiceName = SERVICE_NAMES[service]?.[isAr ? 'ar' : 'en'] || service;
    const text = isAr
      ? `مرحباً Smart System، أرغب في استشارة هندسية وعرض أسعار بخصوص: ${selectedServiceName}.`
      : `Hello Smart System, I would like an engineering consultation regarding: ${selectedServiceName}.`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const currentServiceName = SERVICE_NAMES[service]?.[isAr ? 'ar' : 'en'] || service;

  return (
    <section id="contact" className="py-24 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <Headphones className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'استشارات فورية ومعاينة مجانية' : 'Direct Engineering Consultation'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'تواصل معنا واستشر مهندسينا' : 'Contact Us & Engineering Consultation'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'فريقنا الهندسي جاهز للرد على استفساراتك وتقديم المعاينة الميدانية والتصميم التنفيذي'
              : 'Our engineering team is ready to answer inquiries and schedule site visits.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* UAE Line 1 Card */}
            <div className="bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xs rounded-3xl p-6 border border-slate-200/80 dark:border-neutral-800 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🇦🇪</span>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                      {isAr ? 'فرع الإمارات (الخط الأول - واتساب واستشارات)' : 'UAE Line 1 (Consultation & WhatsApp)'}
                    </h4>
                    <span className="text-xs text-neutral-500">{isAr ? 'المهندس المختص بالاستشارات الفنية' : 'Chief Automation Engineer'}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  {isAr ? 'واتساب متاح' : 'WhatsApp Ready'}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0088cc]" />
                  <span className="font-medium">{isAr ? 'اتصال هاتفي:' : 'Direct Call:'}</span>
                  <a href={`tel:+${UAE_WHATSAPP_1}`} className="font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:text-[#0088cc] direction-ltr">
                    {UAE_WHATSAPP_1_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">{isAr ? 'واتساب مباشر:' : 'Direct WhatsApp:'}</span>
                  <a
                    href={`https://wa.me/${UAE_WHATSAPP_1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline direction-ltr"
                  >
                    {UAE_WHATSAPP_1_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0088cc]" />
                  <a href="mailto:info@smartsystem.com" className="font-mono font-medium hover:text-[#0088cc]">
                    info@smartsystem.com
                  </a>
                </div>
              </div>

              <a
                id="uae-office-whatsapp-link-1"
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? `محادثة واتساب مخصصة (${UAE_WHATSAPP_1_DISPLAY})` : `Custom WhatsApp (${UAE_WHATSAPP_1_DISPLAY})`}</span>
              </a>
            </div>

            {/* UAE Line 2 Card */}
            <div className="bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xs rounded-3xl p-6 border border-slate-200/80 dark:border-neutral-800 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🇦🇪</span>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                      {isAr ? 'فرع الإمارات (الخط الثاني - المبيعات والدعم)' : 'UAE Line 2 (Sales & Technical Support)'}
                    </h4>
                    <span className="text-xs text-neutral-500">{isAr ? 'خدمة العملاء وعروض الأسعار' : 'Quotations & Client Support'}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-[#0088cc] text-[10px] font-bold">
                  {isAr ? 'واتساب متاح' : 'WhatsApp Ready'}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0088cc]" />
                  <span className="font-medium">{isAr ? 'اتصال هاتفي:' : 'Direct Call:'}</span>
                  <a href={`tel:+${UAE_WHATSAPP_2}`} className="font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:text-[#0088cc] direction-ltr">
                    {UAE_WHATSAPP_2_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">{isAr ? 'واتساب مباشر:' : 'Direct WhatsApp:'}</span>
                  <a
                    href={`https://wa.me/${UAE_WHATSAPP_2}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline direction-ltr"
                  >
                    {UAE_WHATSAPP_2_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0088cc]" />
                  <a href="mailto:info@smartsystem.com" className="font-mono font-medium hover:text-[#0088cc]">
                    info@smartsystem.com
                  </a>
                </div>
              </div>

              <button
                id="uae-office-whatsapp-link-2"
                onClick={() => handleDirectWhatsApp('uae2')}
                className="mt-4 w-full py-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/40 text-[#0088cc] dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#0088cc]" />
                <span>{isAr ? `محادثة واتساب مباشرة (${UAE_WHATSAPP_2_DISPLAY})` : `WhatsApp Direct (${UAE_WHATSAPP_2_DISPLAY})`}</span>
              </button>
            </div>

            {/* Guarantees Box */}
            <div className="p-5 rounded-3xl bg-neutral-900 text-white shadow-lg space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs font-bold">
                  {isAr ? 'زيارة ميدانية مجانية لفحص وتخطيط الموقع' : 'Free On-Site Survey & Blueprint Consultation'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-bold">
                  {isAr ? 'رد واستجابة هندسية خلال أقل من ساعة' : 'Rapid Response Under 60 Minutes'}
                </span>
              </div>
            </div>

          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-neutral-800 shadow-xl">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {isAr ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? 'شكراً لتواصلك مع Smart System. تم تسجيل طلبك بخصوص الخدمة المحددة. يمكنك أيضاً تسريع الاستشارة والتواصل الفوري مع مهندسنا عبر واتساب أدناه:'
                    : 'Thank you for reaching out to Smart System. Your inquiry has been logged. You can also accelerate your consultation via WhatsApp below:'}
                </p>

                {/* Direct WhatsApp Callout in Success State */}
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 max-w-md mx-auto text-center space-y-2.5">
                  <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-200">
                    {isAr ? '🚀 محادثة واتساب فورية بالخدمة التي اخترتها:' : '🚀 Instant WhatsApp with your selected service:'}
                  </div>
                  <div className="text-[11px] text-emerald-700 dark:text-emerald-300 font-bold">
                    {currentServiceName}
                  </div>
                  <a
                    id="contact-success-whatsapp-link"
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{isAr ? `فتح واتساب الآن (${DEDICATED_WHATSAPP_DISPLAY})` : `Open WhatsApp Now (${DEDICATED_WHATSAPP_DISPLAY})`}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white text-xs font-bold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    {isAr ? 'إرسال استفسار آخر' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-black text-neutral-900 dark:text-white mb-1">
                    {isAr ? 'طلب عرض سعر / حجز موعد معاينة' : 'Request a Proposal / Site Survey'}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {isAr ? 'املأ النموذج وسنتواصل معك فوراً أو راسلنا بالخدمة مباشرة على واتساب' : 'Fill out the form or chat directly with your selected service on WhatsApp'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isAr ? 'مثال: م. أحمد السعيد' : 'e.g. John Doe'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      {isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder={isAr ? '+971 52 306 6013 أو +971 50 ...' : '+971 52 306 6013 or +971 50 ...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      {isAr ? 'نوع العقار' : 'Property Type'}
                    </label>
                    <select
                      value={property}
                      onChange={(e) => setProperty(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                    >
                      <option value="villa">{isAr ? 'فيلا سكنية فاخرة' : 'Luxury Villa'}</option>
                      <option value="apartment">{isAr ? 'شقة / بنتهاوس' : 'Apartment / Penthouse'}</option>
                      <option value="hotel">{isAr ? 'فندق / مشروع سياحي' : 'Hotel / Hospitality'}</option>
                      <option value="office">{isAr ? 'مبنى إداري / شركات' : 'Commercial / Office'}</option>
                      <option value="other">{isAr ? 'أخرى' : 'Other'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300">
                      {isAr ? 'الخدمة أو النظام المطلوب (تتضمن تلقائياً في رسالة الواتساب) *' : 'Target System (Included in WhatsApp message) *'}
                    </label>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {isAr ? 'مربوط بواتساب' : 'WhatsApp Ready'}
                    </span>
                  </div>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                  >
                    <option value="all">{isAr ? 'حلول ذكية متكاملة (أتمتة شاملة)' : 'Full Turnkey Smart Home'}</option>
                    <option value="home-automation">{isAr ? 'أتمتة المنازل والفنادق الذكية' : 'Home & Hotel Automation'}</option>
                    <option value="lighting">{isAr ? 'الإنارة الذكية ومفاتيح المشاهد اللمسية' : 'Smart Lighting & Touch Panels'}</option>
                    <option value="cctv">{isAr ? 'أنظمة المراقبة (CCTV)' : 'CCTV Surveillance'}</option>
                    <option value="locks">{isAr ? 'الأقفال وأجهزة الدخول الذكية' : 'Smart Door Locks'}</option>
                    <option value="alarm">{isAr ? 'أنظمة الإنذار ضد السرقة' : 'Burglar Alarms'}</option>
                    <option value="intercom">{isAr ? 'الانتركم البدال الذكي' : 'Video Intercom & IP Phone'}</option>
                    <option value="curtains">{isAr ? 'الستائر الذكية Automations' : 'Smart Curtains'}</option>
                    <option value="network">{isAr ? 'الشبكات وتكنولوجيا المعلومات' : 'Network & Cabling'}</option>
                    <option value="cinema">{isAr ? 'السينما المنزلية والصوتيات' : 'Home Cinema & Audio'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    {isAr ? 'تفاصيل إضافية عن المشروع أو الاستفسار' : 'Additional Project Notes'}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isAr
                        ? 'اذكر عدد الغرف، حالة البناء (قيد الإنشاء أم مكتمل)، وأي تفاصيل ترغب بها...'
                        : 'Mention number of rooms, construction status, or custom requests...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                  />
                </div>

                {/* Custom WhatsApp Live Action Card */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>{isAr ? 'رابط واتساب مخصص تلقائياً:' : 'Dynamic WhatsApp Link:'}</span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400 direction-ltr">
                      {DEDICATED_WHATSAPP_DISPLAY}
                    </span>
                  </div>

                  <div className="text-[11px] text-neutral-600 dark:text-neutral-300 bg-white/80 dark:bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800 flex items-start gap-2">
                    <span className="shrink-0 text-emerald-600 font-bold">💬</span>
                    <p className="line-clamp-2 leading-relaxed">
                      {isAr
                        ? `رسالة مجهزة تلقائياً تتضمن خدمة: "${currentServiceName}" مع نوع العقار والبيانات المدخلة.`
                        : `Auto-generated message includes: "${currentServiceName}" along with property type and entered details.`}
                    </p>
                  </div>

                  <a
                    id="contact-form-whatsapp-link"
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>
                      {isAr
                        ? `إرسال الاستفسار مباشرة عبر واتساب بالخدمة المحددة`
                        : `Send Instant WhatsApp with Selected Service`}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Main Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95"
                  style={{
                    background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال طلب العرض والاستشارة الهندسية' : 'Submit Engineering Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
