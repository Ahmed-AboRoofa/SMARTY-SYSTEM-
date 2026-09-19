import React, { useState } from 'react';
import {
  ClipboardList,
  PlayCircle,
  FileCode,
  Cpu,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/smartSystemData';
import { Language } from '../types';

interface SmartProcessProps {
  lang: Language;
}

export const SmartProcess: React.FC<SmartProcessProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardList':
        return <ClipboardList className="w-6 h-6" />;
      case 'PlayCircle':
        return <PlayCircle className="w-6 h-6" />;
      case 'FileCode':
        return <FileCode className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="process"
      className="py-24 bg-slate-50/70 dark:bg-neutral-900/50 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'آلية العمل والتسليم الهندسي' : 'Engineering Workflow & Milestones'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'مراحل تنفيذ المشروع' : 'Our Project Execution Process'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'منهجية هندسية احترافية من 5 خطوات لضمان أعلى مستويات الدقة ورضا العملاء'
              : 'A structured 5-step engineering methodology guaranteeing turnkey precision.'}
          </p>
        </div>

        {/* 5 Steps Grid (Matching user's exact steps-container & step-item CSS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {PROCESS_STEPS.map((step) => {
            const isExpanded = expandedStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setExpandedStep(isExpanded ? null : step.step)}
                className={`relative bg-white/95 dark:bg-neutral-900/80 backdrop-blur-xs p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#0088cc] shadow-lg ring-1 ring-[#0088cc]/30 -translate-y-1'
                    : 'border-slate-200/80 dark:border-neutral-800 shadow-xs hover:border-[#0088cc]/50 hover:shadow-md'
                }`}
              >
                {/* Big Watermark Step Number (User requirement) */}
                <span className="absolute top-3.5 end-4 text-3xl sm:text-4xl font-black text-[#8A2BE2] opacity-20 select-none font-mono">
                  {step.step}
                </span>

                <div>
                  {/* Step Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-neutral-800 text-[#0088cc] flex items-center justify-center mb-4 shadow-xs">
                    {getStepIcon(step.icon)}
                  </div>

                  {/* Step Title (Exact user prompt text) */}
                  <h4 className="text-base font-bold text-[#0088cc] mb-2 leading-snug">
                    {isAr ? step.titleAr : step.titleEn}
                  </h4>

                  {/* Step Main Desc */}
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </div>

                {/* Sub Details toggle */}
                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center justify-between text-[11px] font-bold text-neutral-500">
                    <span>{isAr ? 'تفاصيل المرحلة' : 'Stage Highlights'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>

                  {isExpanded && (
                    <ul className="mt-2.5 space-y-1.5 text-[11px] text-neutral-600 dark:text-neutral-400">
                      {(isAr ? step.detailsAr : step.detailsEn).map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Guarantee Card */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50/70 dark:bg-neutral-900 border border-sky-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0088cc] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white block">
                {isAr ? 'التزام بالمواعيد والمخططات التنفيذية بنسبة 100%' : '100% On-Time Delivery & Blueprint Compliance'}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {isAr
                  ? 'نوفر تقارير مرحلية دورية للمالك والمكتب الاستشاري حتى اكتمال التسليم النهائي.'
                  : 'Periodic milestone reports submitted to client and consulting engineer through final handover.'}
              </span>
            </div>
          </div>

          <a
            href="#calculator"
            className="px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold shrink-0 hover:opacity-90"
          >
            {isAr ? 'احسب تكلفة مشروعك الآن' : 'Estimate Project Cost'}
          </a>
        </div>

      </div>
    </section>
  );
};
