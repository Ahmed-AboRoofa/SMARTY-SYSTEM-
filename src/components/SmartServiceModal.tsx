import React from 'react';
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Send,
  MessageSquare
} from 'lucide-react';
import { SmartService } from '../data/smartSystemData';
import { Language } from '../types';

interface SmartServiceModalProps {
  service: SmartService | null;
  lang: Language;
  onClose: () => void;
  onRequestQuote: (srv: SmartService) => void;
}

export const SmartServiceModal: React.FC<SmartServiceModalProps> = ({
  service,
  lang,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;
  const isAr = lang === 'ar';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Realistic Illustrative Photo Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0 bg-neutral-900">
          <img
            src={service.image}
            alt={isAr ? service.titleAr : service.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Subtle vignette gradient for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

          {/* Top Row: Tag & Close Button */}
          <div className="absolute top-4 start-4 end-4 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-neutral-900/90 text-[#0088cc] shadow-md backdrop-blur-xs border border-white/20">
              {service.badge || (isAr ? 'نظام ذكي معتمد' : 'Certified Smart System')}
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-white bg-black/40 hover:bg-black/70 backdrop-blur-xs transition-colors border border-white/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Row inside banner: Service Title and Subtitle */}
          <div className="absolute bottom-4 start-4 end-4 z-10 text-white">
            <h3 className="text-xl sm:text-2xl font-black drop-shadow-md">
              {isAr ? service.titleAr : service.titleEn}
            </h3>
            <span className="text-xs sm:text-sm text-sky-200 font-medium block mt-1 drop-shadow-xs">
              {isAr ? service.subEn : service.titleAr}
            </span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
              {isAr ? 'نظرة عامة على النظام' : 'System Overview'}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {isAr ? service.descAr : service.descEn}
            </p>
          </div>

          {/* Key Features Bullet Points */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-3">
              {isAr ? 'الميزات والمواصفات الفنية' : 'Key Engineering Features'}
            </h4>
            <div className="space-y-2">
              {(isAr ? service.featuresAr : service.featuresEn).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust guarantee inside modal */}
          <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/50 flex items-center gap-3 text-xs text-[#0088cc] dark:text-sky-300">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span>
              {isAr
                ? 'ضمان شامل مع دعم فني وصيانة دورية مجدولة لجميع مكونات هذا النظام.'
                : 'Comprehensive hardware warranty with periodic preventive maintenance support.'}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>

          <div className="flex gap-2">
            <a
              href={`https://wa.me/971505158304?text=${encodeURIComponent(
                isAr
                  ? `مرحباً، أستفسر عن خدمة: ${service.titleAr}`
                  : `Hello, I'm inquiring about: ${service.titleEn}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(service);
              }}
              className="px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-md transition-all hover:opacity-95"
              style={{
                background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
              }}
            >
              {isAr ? 'طلب عرض سعر لهذا النظام' : 'Request Proposal'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
