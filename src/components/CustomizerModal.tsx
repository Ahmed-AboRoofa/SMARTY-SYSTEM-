import React, { useState } from 'react';
import { X, Check, RotateCcw, Copy, CheckCheck, Sliders, Palette } from 'lucide-react';
import { SiteCustomization, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteCustomization;
  onUpdateConfig: (newConfig: SiteCustomization) => void;
  lang: Language;
  onReset: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  lang,
  onReset,
}) => {
  if (!isOpen) return null;

  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);

  const colors: Array<{ id: ThemeColor; nameAr: string; nameEn: string; bg: string }> = [
    { id: 'emerald', nameAr: 'أخضر زمردي', nameEn: 'Emerald Green', bg: 'bg-emerald-600' },
    { id: 'blue', nameAr: 'أزرق ملكي', nameEn: 'Royal Blue', bg: 'bg-blue-600' },
    { id: 'purple', nameAr: 'بنفسجي عصري', nameEn: 'Violet Purple', bg: 'bg-purple-600' },
    { id: 'amber', nameAr: 'ذهبي راقٍ', nameEn: 'Warm Amber', bg: 'bg-amber-600' },
    { id: 'rose', nameAr: 'وردي وقرمزي', nameEn: 'Rose Red', bg: 'bg-rose-600' },
  ];

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="customizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="customizer-modal-card"
        className="w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {isAr ? 'تخصيص هوية ومحتوى الموقع' : 'Live Website Customizer'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {isAr ? 'عدّل بيانات الموقع وألوانه للمعاينة الفورية' : 'Update details & color palette in real-time'}
              </p>
            </div>
          </div>
          <button
            id="customizer-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-5">
          {/* Color Palette Selector */}
          <div>
            <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-2 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-neutral-500" />
              {isAr ? 'اللون الأساسي للعلامة التجارية:' : 'Primary Brand Accent Color:'}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {colors.map((c) => (
                <button
                  key={c.id}
                  id={`color-picker-${c.id}`}
                  onClick={() => onUpdateConfig({ ...config, primaryColor: c.id })}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                    config.primaryColor === c.id
                      ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800 ring-2 ring-neutral-400'
                      : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full ${c.bg} flex items-center justify-center text-white`}>
                    {config.primaryColor === c.id && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className="text-[10px] text-neutral-600 dark:text-neutral-400 font-medium truncate w-full text-center">
                    {isAr ? c.nameAr.split(' ')[0] : c.nameEn.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Site Name */}
          <div>
            <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1">
              {isAr ? 'اسم الموقع أو الشركة:' : 'Site / Brand Name:'}
            </label>
            <input
              id="custom-input-sitename"
              type="text"
              value={config.siteName}
              onChange={(e) => onUpdateConfig({ ...config, siteName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1">
              {isAr ? 'شعار الموقع (Slogan):' : 'Tagline / Slogan:'}
            </label>
            <input
              id="custom-input-tagline"
              type="text"
              value={config.tagline}
              onChange={(e) => onUpdateConfig({ ...config, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                {isAr ? 'البريد الإلكتروني:' : 'Contact Email:'}
              </label>
              <input
                id="custom-input-email"
                type="email"
                value={config.contactEmail}
                onChange={(e) => onUpdateConfig({ ...config, contactEmail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                {isAr ? 'رقم الواتساب:' : 'WhatsApp Number:'}
              </label>
              <input
                id="custom-input-whatsapp"
                type="text"
                value={config.whatsappNumber}
                onChange={(e) => onUpdateConfig({ ...config, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
          <button
            id="customizer-reset-btn"
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isAr ? 'إعادة ضبط للافتراضي' : 'Reset Defaults'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              id="customizer-copy-btn"
              onClick={handleCopyJson}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الإعدادات' : 'Copy Config')}</span>
            </button>
            <button
              id="customizer-apply-btn"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold hover:opacity-90"
            >
              {isAr ? 'تم وحفظ' : 'Done & Apply'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
