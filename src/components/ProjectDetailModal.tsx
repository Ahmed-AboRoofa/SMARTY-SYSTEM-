import React from 'react';
import { X, CheckCircle2, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
  themeColor: ThemeColor;
  onRequestSimilar: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  lang,
  themeColor,
  onRequestSimilar,
}) => {
  if (!project) return null;

  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];
  const title = isAr ? project.titleAr : project.titleEn;
  const desc = isAr ? project.descAr : project.descEn;
  const client = isAr ? project.clientAr : project.clientEn;
  const metrics = isAr ? project.metricsAr : project.metricsEn;
  const categoryName = isAr ? project.categoryNameAr : project.categoryNameEn;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 end-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-md"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-16/9 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img
            src={project.image}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 start-4">
            <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-bold">
              {categoryName}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-1">
                {isAr ? 'العميل أو الجهة:' : 'Client / Organization:'} <strong className="text-neutral-800 dark:text-neutral-200">{client}</strong>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                {title}
              </h2>
            </div>
            <div className={`px-4 py-2 rounded-xl text-xs font-bold ${theme.badgeBg} ${theme.primaryText}`}>
              {metrics}
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            {desc}
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2.5">
              {isAr ? 'التقنيات المستخدمة في المشروع' : 'Technologies & Architecture Used'}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium border border-neutral-200 dark:border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <button
              id="modal-request-similar-btn"
              onClick={() => {
                onRequestSimilar(project);
                onClose();
              }}
              className={`flex-1 py-3.5 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md ${theme.primaryBg} ${theme.primaryHover}`}
            >
              <span>{isAr ? 'أرغب في تنفيذ مشروع مماثل' : 'Request a Similar Project'}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
            <button
              id="modal-dismiss-btn"
              onClick={onClose}
              className="px-6 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
