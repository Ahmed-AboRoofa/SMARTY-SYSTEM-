import React from 'react';

export const SmartWatermarkBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Repeating subtle SVG watermark grid pattern across entire viewport */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045] dark:opacity-[0.055] text-slate-700 dark:text-sky-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="smart-watermark-pattern"
            width="380"
            height="380"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-20 190 190)"
          >
            {/* House Emblem */}
            <g transform="translate(65, 45) scale(0.42)">
              {/* House Silhouette */}
              <path
                d="M 250 45 L 380 152 V 85 H 404 V 172 L 435 197 A 10 10 0 0 1 426 212 H 395 V 375 A 22 22 0 0 1 373 397 H 127 A 22 22 0 0 1 105 375 V 212 H 74 A 10 10 0 0 1 65 197 L 250 45 Z"
                fill="currentColor"
              />
              {/* Signal Arcs */}
              <path
                d="M 145 238 A 147 147 0 0 1 292 385 H 254 A 109 109 0 0 0 145 276 Z"
                fill="currentColor"
              />
              <path
                d="M 145 288 A 97 97 0 0 1 242 385 H 204 A 59 59 0 0 0 145 326 Z"
                fill="currentColor"
              />
              <circle cx="145" cy="385" r="28" fill="currentColor" />

              {/* Watermark Brand Text underneath emblem */}
              <text
                x="250"
                y="465"
                textAnchor="middle"
                fontSize="40"
                fontWeight="900"
                letterSpacing="4"
                fill="currentColor"
              >
                SMART SYSTEM
              </text>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smart-watermark-pattern)" />
      </svg>

      {/* Large Featured Ambient Watermarks positioned diagonally */}
      {/* Top Right Ambient Large Emblem */}
      <div className="absolute -top-16 -right-20 sm:-right-12 w-[36rem] h-[36rem] opacity-[0.05] dark:opacity-[0.06] text-[#0088cc] -rotate-12 blur-[0.3px]">
        <svg viewBox="0 0 500 500" className="w-full h-full" fill="currentColor">
          <path d="M 250 45 L 380 152 V 85 H 404 V 172 L 435 197 A 10 10 0 0 1 426 212 H 395 V 375 A 22 22 0 0 1 373 397 H 127 A 22 22 0 0 1 105 375 V 212 H 74 A 10 10 0 0 1 65 197 L 250 45 Z" />
          <path d="M 145 238 A 147 147 0 0 1 292 385 H 254 A 109 109 0 0 0 145 276 Z" />
          <path d="M 145 288 A 97 97 0 0 1 242 385 H 204 A 59 59 0 0 0 145 326 Z" />
          <circle cx="145" cy="385" r="28" />
        </svg>
      </div>

      {/* Mid Left Ambient Large Emblem */}
      <div className="absolute top-[38%] -left-28 sm:-left-16 w-[44rem] h-[44rem] opacity-[0.045] dark:opacity-[0.055] text-[#7928ca] rotate-12 blur-[0.3px]">
        <svg viewBox="0 0 500 500" className="w-full h-full" fill="currentColor">
          <path d="M 250 45 L 380 152 V 85 H 404 V 172 L 435 197 A 10 10 0 0 1 426 212 H 395 V 375 A 22 22 0 0 1 373 397 H 127 A 22 22 0 0 1 105 375 V 212 H 74 A 10 10 0 0 1 65 197 L 250 45 Z" />
          <path d="M 145 238 A 147 147 0 0 1 292 385 H 254 A 109 109 0 0 0 145 276 Z" />
          <path d="M 145 288 A 97 97 0 0 1 242 385 H 204 A 59 59 0 0 0 145 326 Z" />
          <circle cx="145" cy="385" r="28" />
        </svg>
      </div>

      {/* Bottom Right Ambient Large Emblem */}
      <div className="absolute bottom-[8%] -right-24 sm:-right-16 w-[40rem] h-[40rem] opacity-[0.05] dark:opacity-[0.06] text-[#0088cc] -rotate-6 blur-[0.3px]">
        <svg viewBox="0 0 500 500" className="w-full h-full" fill="currentColor">
          <path d="M 250 45 L 380 152 V 85 H 404 V 172 L 435 197 A 10 10 0 0 1 426 212 H 395 V 375 A 22 22 0 0 1 373 397 H 127 A 22 22 0 0 1 105 375 V 212 H 74 A 10 10 0 0 1 65 197 L 250 45 Z" />
          <path d="M 145 238 A 147 147 0 0 1 292 385 H 254 A 109 109 0 0 0 145 276 Z" />
          <path d="M 145 288 A 97 97 0 0 1 242 385 H 204 A 59 59 0 0 0 145 326 Z" />
          <circle cx="145" cy="385" r="28" />
        </svg>
      </div>
    </div>
  );
};
