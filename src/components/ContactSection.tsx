import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Language, ThemeColor, WebsiteCategory, PricingTier } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface ContactSectionProps {
  lang: Language;
  themeColor: ThemeColor;
  currentCategory: WebsiteCategory;
  selectedPlan?: PricingTier | null;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  themeColor,
  currentCategory,
  selectedPlan,
  contactEmail,
  contactPhone,
  whatsappNumber,
}) => {
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: currentCategory,
    budget: 'standard',
    message: selectedPlan
      ? isAr
        ? `أود الاستفسار بخصوص ${selectedPlan.nameAr}`
        : `I would like to inquire about the ${selectedPlan.nameEn} plan`
      : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = isAr
      ? `مرحباً، أود الاستفسار عن تصميم وتطوير موقع ويب جديد.`
      : `Hello! I would like to inquire about designing and developing a new website.`;
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50/70 dark:bg-neutral-900/50 border-t border-neutral-200/60 dark:border-neutral-800">
      <div id="contact-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span
                id="contact-badge"
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${theme.badgeBg} ${theme.badgeText}`}
              >
                {isAr ? 'تواصل واستشارة مجانية' : 'Direct Consultation'}
              </span>
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4"
              >
                {isAr ? 'لنبدأ في بناء موقعك القادم اليوم' : 'Let’s Bring Your Vision To Life Today'}
              </h2>
              <p
                id="contact-desc"
                className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-8"
              >
                {isAr
                  ? 'سواء كنت تبدأ من الصفر أو ترغب في إعادة تصميم موقعك الحالي، خبراؤنا مستعدون لتقديم تحليل فني مجاني وعرض أسعار واضح خلال 24 ساعة.'
                  : 'Whether you are launching from scratch or redesigning an existing presence, our engineers provide complimentary roadmapping within 24 hours.'}
              </p>

              {/* Contact Direct Cards */}
              <div className="space-y-4 mb-8">
                <a
                  id="contact-channel-whatsapp"
                  onClick={handleWhatsAppRedirect}
                  className="p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 shadow-2xs flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                      {isAr ? 'محادثة مباشرة عبر واتساب' : 'Instant WhatsApp Chat'}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                      {whatsappNumber}
                    </span>
                  </div>
                </a>

                <a
                  id="contact-channel-email"
                  href={`mailto:${contactEmail}`}
                  className="p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 shadow-2xs flex items-center gap-4 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                      {isAr ? 'البريد الإلكتروني الرسمي' : 'Official Business Email'}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                      {contactEmail}
                    </span>
                  </div>
                </a>

                <div
                  id="contact-channel-phone"
                  className="p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 shadow-2xs flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                      {isAr ? 'ساعات العمل والدعم' : 'Response & Working Hours'}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {isAr ? 'الأحد - الخميس (9:00 ص - 6:00 م)' : 'Sun - Thu (9:00 AM - 6:00 PM)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-3">
              <Sparkles className="w-5 h-5 shrink-0" />
              <span>
                {isAr
                  ? 'استشارة أولية مجانية مدتها 30 دقيقة لمناقشة المتطلبات الفنية والجدول الزمني.'
                  : 'Complimentary 30-minute discovery call to clarify technical scope and deliverables.'}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-card"
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xl relative"
            >
              {isSubmitted ? (
                <div id="contact-success-box" className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-2">
                    {isAr ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
                    {isAr
                      ? 'شكراً لتواصلك معنا. سيقوم أحد مستشارينا الفنيين بالتواصل معك عبر الواتساب أو البريد الإلكتروني خلال ساعات العمل.'
                      : 'Thank you for reaching out. One of our lead engineers will contact you via WhatsApp or Email within a few hours.'}
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: currentCategory,
                        budget: 'standard',
                        message: '',
                      });
                    }}
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white ${theme.primaryBg}`}
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form id="project-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                    {isAr ? 'نموذج طلب المشروع أو الاستشارة' : 'Project Consultation Form'}
                  </h3>

                  {selectedPlan && (
                    <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-700/50 text-xs flex items-center justify-between">
                      <span className="text-neutral-600 dark:text-neutral-300">
                        {isAr ? 'الباقة المحددة:' : 'Selected Plan:'}{' '}
                        <strong>{isAr ? selectedPlan.nameAr : selectedPlan.nameEn}</strong>
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="form-input-name"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                      >
                        {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? 'مثال: أحمد السعيد' : 'e.g. John Doe'}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-input-email"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                      >
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        id="form-input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="form-input-phone"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                      >
                        {isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                      </label>
                      <input
                        id="form-input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="form-select-type"
                        className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                      >
                        {isAr ? 'نوع المشروع' : 'Project Nature'}
                      </label>
                      <select
                        id="form-select-type"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value as WebsiteCategory })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="agency">{isAr ? 'موقع شركة / تعريفي' : 'Corporate / Company'}</option>
                        <option value="ecommerce">{isAr ? 'متجر إلكتروني' : 'E-commerce Shop'}</option>
                        <option value="portfolio">{isAr ? 'معرض أعمال شخصي' : 'Personal Portfolio'}</option>
                        <option value="restaurant">{isAr ? 'مطعم / مقهى' : 'Restaurant / Cafe'}</option>
                        <option value="consulting">{isAr ? 'استشارات / خدمات مالية' : 'Consulting / Advisory'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="form-input-message"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {isAr ? 'تفاصيل فكرتك أو متطلباتك' : 'Tell Us About Your Project & Goals'}
                    </label>
                    <textarea
                      id="form-input-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isAr
                          ? 'صف بإيجاز ما ترغب في إنجازه، الميزات الرئيسية، أو أي روابط لمواقع تعجبك...'
                          : 'Briefly describe your objectives, desired features, or reference links...'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    className={`w-full py-4 rounded-xl text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 ${theme.primaryBg} ${theme.primaryHover}`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال طلب الاستشارة وعرض السعر' : 'Send Inquiry & Get Free Proposal'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
