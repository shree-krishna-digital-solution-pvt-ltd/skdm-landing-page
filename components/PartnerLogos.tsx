import React from 'react';

// Peacock Feather SVG for SKD Logo
export const PeacockFeatherIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer feather eye */}
    <ellipse cx="32" cy="22" rx="14" ry="18" fill="#0284C7" />
    <ellipse cx="32" cy="22" rx="11" ry="14" fill="#0D9488" />
    <ellipse cx="32" cy="22" rx="8" ry="10" fill="#EAB308" />
    <ellipse cx="32" cy="22" rx="5" ry="6" fill="#1E3A8A" />
    <circle cx="32" cy="21" rx="2.5" ry="3" fill="#38BDF8" />
    {/* Feather shaft and plumes */}
    <path d="M32 40V62" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 30C22 36 14 46 16 56M32 30C42 36 50 46 48 56" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <path d="M32 36C26 42 20 50 22 58M32 36C38 42 44 50 42 58" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
  </svg>
);

// Meta Logo
export const MetaLogo = ({ className = "h-6" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg className="h-6 w-8" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.2 2C4.8 2 2 5.6 2 10s2.8 8 6.2 8c2.9 0 5-2.2 6.8-5.3l1-1.7 1 1.7c1.8 3.1 3.9 5.3 6.8 5.3 3.4 0 6.2-3.6 6.2-8s-2.8-8-6.2-8c-2.9 0-5 2.2-6.8 5.3l-1 1.7-1-1.7C13.2 4.2 11.1 2 8.2 2zm0 3.2c1.8 0 3.3 1.9 4.7 4.8-1.4 2.9-2.9 4.8-4.7 4.8-1.8 0-3.2-2.1-3.2-4.8s1.4-4.8 3.2-4.8zm15.6 0c1.8 0 3.2 2.1 3.2 4.8s-1.4 4.8-3.2 4.8c-1.8 0-3.3-1.9-4.7-4.8 1.4-2.9 2.9-4.8 4.7-4.8z"
        fill="#0081FB"
      />
    </svg>
    <span className="font-semibold text-lg tracking-tight text-slate-800">Meta</span>
  </div>
);

// PhonePe Logo
export const PhonePeLogo = ({ className = "h-6" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <div className="w-7 h-7 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-bold text-sm shadow-2xs">
      पे
    </div>
    <span className="font-bold text-lg tracking-tight text-[#5f259f]">PhonePe</span>
  </div>
);

// Razorpay Logo
export const RazorpayLogo = ({ className = "h-6" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <svg className="w-5 h-6" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5 2.5L7.5 16.5H14L4 26.5L16.5 12H10.5L21.5 2.5Z"
        fill="#0C2340"
      />
      <path
        d="M17.5 2.5L5.5 14.5H12L2 24.5L14.5 10H8.5L17.5 2.5Z"
        fill="#0284C7"
      />
    </svg>
    <span className="font-extrabold text-lg tracking-tight text-[#0C2340] italic">Razorpay</span>
  </div>
);

// Google Logo
export const GoogleLogo = ({ className = "h-6" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-1.5 ${className}`}>
    <span className="font-semibold text-xl tracking-tight text-[#4285F4]">G</span>
    <span className="font-semibold text-xl tracking-tight text-[#EA4335]">o</span>
    <span className="font-semibold text-xl tracking-tight text-[#FBBC05]">o</span>
    <span className="font-semibold text-xl tracking-tight text-[#4285F4]">g</span>
    <span className="font-semibold text-xl tracking-tight text-[#34A853]">l</span>
    <span className="font-semibold text-xl tracking-tight text-[#EA4335]">e</span>
  </div>
);

// Google Ads Logo
export const GoogleAdsLogo = ({ className = "h-6" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.2 9.5C10.5 5 4.8 3.5 0.3 6.2C-4.2 8.9 -5.7 14.6 -3 19.1L8.5 39C11.2 43.5 16.9 45 21.4 42.3C25.9 39.6 27.4 33.9 24.7 29.4L13.2 9.5Z"
        fill="#FBBC04"
        transform="translate(14,0)"
      />
      <path
        d="M33.2 9.5C30.5 5 24.8 3.5 20.3 6.2C15.8 8.9 14.3 14.6 17 19.1L28.5 39C31.2 43.5 36.9 45 41.4 42.3C45.9 39.6 47.4 33.9 44.7 29.4L33.2 9.5Z"
        fill="#4285F4"
      />
      <circle cx="16" cy="35" r="7" fill="#34A853" />
    </svg>
    <span className="font-semibold text-base text-slate-700">Google Ads</span>
  </div>
);
