import React from 'react';

interface SmartLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'horizontal';
  showSubtitle?: boolean;
  subtitleAr?: string;
  subtitleEn?: string;
  lang?: 'ar' | 'en';
}

export const SmartLogo: React.FC<SmartLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showSubtitle = true,
  subtitleAr = 'الأنظمة الذكية والمتقدمة',
  subtitleEn = 'Advanced Smart Systems',
  lang = 'ar',
}) => {
  const isAr = lang === 'ar';

  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-4xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // SVG House Emblem with Wi-Fi Arcs matching the official brand logo
  const Emblem = (
    <div className={`relative ${currentSize.icon} shrink-0 select-none`}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="smartLogoHouseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a73e8" />
            <stop offset="60%" stopColor="#0088cc" />
            <stop offset="100%" stopColor="#00a8e8" />
          </linearGradient>

          <linearGradient id="smartLogoArcInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a2be2" />
            <stop offset="100%" stopColor="#9d4edd" />
          </linearGradient>

          <linearGradient id="smartLogoArcMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0088cc" />
            <stop offset="100%" stopColor="#00b4d8" />
          </linearGradient>

          <linearGradient id="smartLogoArcOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7928ca" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          <mask id="smartLogoCutout">
            <rect width="500" height="500" fill="#ffffff" />
            <circle cx="145" cy="380" r="165" fill="#000000" />
          </mask>
        </defs>

        {/* House Silhouette */}
        <path
          d="
            M 250 45
            L 380 152
            V 85
            H 404
            V 172
            L 435 197
            A 10 10 0 0 1 426 212
            H 395
            V 375
            A 22 22 0 0 1 373 397
            H 127
            A 22 22 0 0 1 105 375
            V 212
            H 74
            A 10 10 0 0 1 65 197
            L 250 45
            Z
          "
          fill="url(#smartLogoHouseGrad)"
          mask="url(#smartLogoCutout)"
        />

        {/* Wi-Fi Arcs radiating from bottom-left */}
        {/* Outer Arc - Purple */}
        <path
          d="
            M 145 238
            A 147 147 0 0 1 292 385
            H 254
            A 109 109 0 0 0 145 276
            Z
          "
          fill="url(#smartLogoArcOuter)"
        />

        {/* Middle Arc - Sky Blue */}
        <path
          d="
            M 145 291
            A 94 94 0 0 1 239 385
            H 203
            A 58 58 0 0 0 145 327
            Z
          "
          fill="url(#smartLogoArcMid)"
        />

        {/* Inner Arc - Magenta/Purple Dot */}
        <path
          d="
            M 145 343
            A 42 42 0 0 1 187 385
            H 145
            Z
          "
          fill="url(#smartLogoArcInner)"
        />
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{Emblem}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        {Emblem}
        <div className="flex flex-col items-center">
          <div className={`${currentSize.text} font-black tracking-tight flex items-center gap-1.5`}>
            <span className="text-neutral-800 dark:text-white font-extrabold">Smart</span>
            <span className="text-[#0088cc] font-extrabold">System</span>
          </div>
          {showSubtitle && (
            <span className={`${currentSize.sub} font-medium text-neutral-500 dark:text-neutral-400 tracking-wider`}>
              {isAr ? subtitleAr : subtitleEn}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant (default for Navbar and Headers)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Emblem}
      <div className="flex flex-col">
        <div className={`${currentSize.text} font-black tracking-tight leading-none flex items-center gap-1`}>
          <span className="text-neutral-800 dark:text-white font-extrabold">Smart</span>
          <span className="text-[#0088cc] font-extrabold">System</span>
        </div>
        {showSubtitle && (
          <span className={`${currentSize.sub} font-semibold text-neutral-500 dark:text-neutral-400 mt-1`}>
            {isAr ? subtitleAr : subtitleEn}
          </span>
        )}
      </div>
    </div>
  );
};
