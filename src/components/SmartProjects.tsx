import React, { useState } from 'react';
import {
  MapPin,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '../data/smartSystemData';
import { Language } from '../types';

interface SmartProjectsProps {
  lang: Language;
  onOpenContact: () => void;
}

export const SmartProjects: React.FC<SmartProjectsProps> = ({
  lang,
  onOpenContact,
}) => {
  const isAr = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ShowcaseProject | null>(null);

  const categories = [
    { id: 'all', labelAr: 'جميع المشاريع', labelEn: 'All Projects' },
    { id: 'residential', labelAr: 'فلل ومنازل سكنية', labelEn: 'Luxury Residential' },
    { id: 'hospitality', labelAr: 'فنادق ومنتجعات', labelEn: 'Hotels & Resorts' },
    { id: 'commercial', labelAr: 'مباني إدارية وتجارية', labelEn: 'Commercial & Corporate' },
    { id: 'cinema', labelAr: 'سينما منزلية', labelEn: 'Home Cinema' },
  ];

  const filteredProjects = SHOWCASE_PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'residential' && p.id === 'proj-1') return true;
    if (selectedCategory === 'hospitality' && p.id === 'proj-2') return true;
    if (selectedCategory === 'commercial' && p.id === 'proj-3') return true;
    if (selectedCategory === 'cinema' && p.id === 'proj-4') return true;
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'سجل المشاريع والإنجازات' : 'Delivered Smart Projects Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'نماذج من مشاريعنا المنفذة' : 'Our Completed Smart Projects'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'شاهد كيف حوّلنا الفلل الراقية والمقرات الإدارية والفنادق إلى بيئات ذكية متكاملة'
              : 'Explore how we turned luxury residences, enterprise HQs, and hotels into state-of-the-art smart environments.'}
          </p>
        </div>

        {/* Harmonious Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#0088cc] to-[#7928ca] text-white shadow-md'
                  : 'bg-white/90 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-700 border border-slate-200/70 dark:border-neutral-700/60'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProjectModal(proj)}
              className="group bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xs rounded-3xl overflow-hidden border border-slate-200/80 dark:border-neutral-800 hover:border-[#0088cc] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/9 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={proj.image}
                  alt={isAr ? proj.titleAr : proj.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 start-4">
                  <span className="px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold">
                    {isAr ? proj.categoryAr : proj.categoryEn}
                  </span>
                </div>

                <div className="absolute bottom-4 start-4 flex items-center gap-1.5 text-xs text-white/90 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{isAr ? proj.locationAr : proj.locationEn}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-black text-neutral-900 dark:text-white mb-2 group-hover:text-[#0088cc] transition-colors">
                    {isAr ? proj.titleAr : proj.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {isAr ? proj.descAr : proj.descEn}
                  </p>

                  {/* Systems tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.systemsUsed.map((sys, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results footer */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{isAr ? proj.resultsAr : proj.resultsEn}</span>
                  </div>

                  <span className="text-[#0088cc] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>{isAr ? 'تفاصيل' : 'View'}</span>
                    {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
            onClick={() => setActiveProjectModal(null)}
          >
            <div
              className="bg-white dark:bg-neutral-900 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/9">
                <img
                  src={activeProjectModal.image}
                  alt={isAr ? activeProjectModal.titleAr : activeProjectModal.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-bold text-[#0088cc]">
                    {isAr ? activeProjectModal.categoryAr : activeProjectModal.categoryEn}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {isAr ? activeProjectModal.locationAr : activeProjectModal.locationEn}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-3">
                  {isAr ? activeProjectModal.titleAr : activeProjectModal.titleEn}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {isAr ? activeProjectModal.descAr : activeProjectModal.descEn}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isAr ? activeProjectModal.resultsAr : activeProjectModal.resultsEn}</span>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-700 dark:text-neutral-300"
                  >
                    {isAr ? 'إغلاق' : 'Close'}
                  </button>
                  <button
                    onClick={() => {
                      setActiveProjectModal(null);
                      onOpenContact();
                    }}
                    className="px-6 py-2.5 rounded-xl text-white text-xs font-bold shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #0088cc, #8A2BE2)',
                    }}
                  >
                    {isAr ? 'أرغب في نظام مماثل' : 'Request Similar Setup'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
