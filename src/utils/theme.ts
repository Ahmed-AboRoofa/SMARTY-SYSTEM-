import { ThemeColor } from '../types';

export const THEME_CONFIGS: Record<
  ThemeColor,
  {
    nameAr: string;
    nameEn: string;
    primaryBg: string;
    primaryHover: string;
    primaryText: string;
    badgeBg: string;
    badgeText: string;
    gradientFrom: string;
    gradientTo: string;
    ring: string;
    border: string;
    lightBg: string;
  }
> = {
  emerald: {
    nameAr: 'زمردي وأخضر راقٍ',
    nameEn: 'Emerald & Sage',
    primaryBg: 'bg-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    primaryText: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-500',
    ring: 'focus:ring-emerald-500',
    border: 'border-emerald-200 dark:border-emerald-800',
    lightBg: 'bg-emerald-50/60 dark:bg-emerald-950/20',
  },
  blue: {
    nameAr: 'أزرق ملكي وياقوتي',
    nameEn: 'Royal Sapphire',
    primaryBg: 'bg-blue-600',
    primaryHover: 'hover:bg-blue-700',
    primaryText: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/50',
    badgeText: 'text-blue-700 dark:text-blue-300',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-500',
    ring: 'focus:ring-blue-500',
    border: 'border-blue-200 dark:border-blue-800',
    lightBg: 'bg-blue-50/60 dark:bg-blue-950/20',
  },
  purple: {
    nameAr: 'بنفسجي عصري وإبداعي',
    nameEn: 'Modern Violet',
    primaryBg: 'bg-purple-600',
    primaryHover: 'hover:bg-purple-700',
    primaryText: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-50 dark:bg-purple-950/50',
    badgeText: 'text-purple-700 dark:text-purple-300',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-violet-500',
    ring: 'focus:ring-purple-500',
    border: 'border-purple-200 dark:border-purple-800',
    lightBg: 'bg-purple-50/60 dark:bg-purple-950/20',
  },
  amber: {
    nameAr: 'ذهبي وعسلي فخم',
    nameEn: 'Amber & Gold',
    primaryBg: 'bg-amber-600',
    primaryHover: 'hover:bg-amber-700',
    primaryText: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/50',
    badgeText: 'text-amber-700 dark:text-amber-300',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-orange-500',
    ring: 'focus:ring-amber-500',
    border: 'border-amber-200 dark:border-amber-800',
    lightBg: 'bg-amber-50/60 dark:bg-amber-950/20',
  },
  rose: {
    nameAr: 'وردي وقرمزي جذاب',
    nameEn: 'Rose & Crimson',
    primaryBg: 'bg-rose-600',
    primaryHover: 'hover:bg-rose-700',
    primaryText: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/50',
    badgeText: 'text-rose-700 dark:text-rose-300',
    gradientFrom: 'from-rose-600',
    gradientTo: 'to-pink-500',
    ring: 'focus:ring-rose-500',
    border: 'border-rose-200 dark:border-rose-800',
    lightBg: 'bg-rose-50/60 dark:bg-rose-950/20',
  },
};
