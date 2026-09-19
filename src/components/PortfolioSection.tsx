import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectItem, Language, ThemeColor } from '../types';
import { THEME_CONFIGS } from '../utils/theme';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  lang: Language;
  themeColor: ThemeColor;
  onViewProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  lang,
  themeColor,
  onViewProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const isAr = lang === 'ar';
  const theme = THEME_CONFIGS[themeColor];

  // Extract unique categories
  const categories = [
    { id: 'all', nameAr: 'جميع الأعمال', nameEn: 'All Projects' },
    ...Array.from(new Set(projects.map((p) => p.category))).map((cat) => {
      const sample = projects.find((p) => p.category === cat);
      return {
        id: cat,
        nameAr: sample?.categoryNameAr || cat,
        nameEn: sample?.categoryNameEn || cat,
      };
    }),
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-neutral-900 transition-colors">
      <div id="portfolio-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div id="portfolio-header" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span
              id="portfolio-badge"
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${theme.badgeBg} ${theme.badgeText}`}
            >
              {isAr ? 'معرض الأعمال والنماذج' : 'Portfolio & Real Work'}
            </span>
            <h2
              id="portfolio-title"
              className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight"
            >
              {isAr ? 'مشاريع حية صنعت فارقاً حقيقياً' : 'Impactful Projects That Drive Measurable Success'}
            </h2>
          </div>

          {/* Filter Pills */}
          <div id="portfolio-filter-group" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`portfolio-filter-btn-${cat.id}`}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === cat.id
                    ? `${theme.primaryBg} text-white shadow-sm`
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {isAr ? cat.nameAr : cat.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = isAr ? project.titleAr : project.titleEn;
            const desc = isAr ? project.descAr : project.descEn;
            const client = isAr ? project.clientAr : project.clientEn;
            const metrics = isAr ? project.metricsAr : project.metricsEn;
            const categoryName = isAr ? project.categoryNameAr : project.categoryNameEn;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onViewProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  <img
                    src={project.image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1">
                      {isAr ? 'عرض تفاصيل المشروع' : 'View Project Details'}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <span
                    id={`project-tag-${project.id}`}
                    className="absolute top-3 start-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-[11px] font-bold text-neutral-800 dark:text-neutral-200 shadow-xs"
                  >
                    {categoryName}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                      <span>{client}</span>
                      <span className={`font-semibold ${theme.primaryText}`}>{metrics}</span>
                    </div>

                    <h3
                      id={`project-title-${project.id}`}
                      className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-neutral-950 dark:group-hover:text-white mb-2"
                    >
                      {title}
                    </h3>
                    <p
                      id={`project-desc-${project.id}`}
                      className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 leading-relaxed"
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/60 dark:border-neutral-700/60">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
