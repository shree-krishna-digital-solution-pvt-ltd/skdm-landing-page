import React from 'react';

// Google 4-Color Flat Icon
export const GoogleFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

// Google Maps 4-Color Pin Flat Icon
export const GoogleMapsFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 4C15.716 4 9 10.716 9 19c0 10.45 13.064 23.473 14.28 24.66a1 1 0 0 0 1.44 0C25.936 42.473 39 29.45 39 19c0-8.284-6.716-15-15-15z"
      fill="#EA4335"
    />
    <path
      d="M24 26a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
      fill="#FFFFFF"
    />
    <circle cx="24" cy="19" r="4.5" fill="#4285F4" />
    <path
      d="M33.5 19c0 6.5-6.5 15.5-9.5 19.5 0 0 2-3 4-7.5s5.5-8.5 5.5-12z"
      fill="#FBBC04"
      opacity="0.3"
    />
  </svg>
);

// Flat Colorful Target / Lead Generation Ads Icon
export const AdsTargetFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="14" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="8" fill="#4338CA" />
    <circle cx="24" cy="24" r="3.5" fill="#38BDF8" />
    <path
      d="M35 13L25.5 22.5M35 13H28M35 13V20"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Flat Speedometer / Performance Lighthouse Score 99 Icon
export const PerformanceFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="#ECFDF5" />
    <path
      d="M12 28C12 21.3726 17.3726 16 24 16C30.6274 16 36 21.3726 36 28"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M24 24L31 19"
      stroke="#047857"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="28" r="3" fill="#065F46" />
    <circle cx="16" cy="28" r="1.5" fill="#10B981" />
    <circle cx="24" cy="18" r="1.5" fill="#10B981" />
    <circle cx="32" cy="28" r="1.5" fill="#10B981" />
  </svg>
);

// Flat Trend Growth Badge Icon
export const TrendUpFlatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 17L9 11L13 15L21 7"
      stroke="#16A34A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 7H21V14"
      stroke="#16A34A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Flat Phone Call Icon (Local Lead / Volume)
export const PhoneFlatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#DCFCE7" />
    <path
      d="M8.5 7.5C8.5 7.5 9 6.5 10 7C11 7.5 11.5 8.5 11 9.5C10.5 10.5 10.5 11 11.5 12.5C12.5 14 13 13.5 14 13C15 12.5 16 13 16.5 14C17 15 16 15.5 16 15.5C14.5 17 11 16.5 9 14.5C7 12.5 6.5 9 8.5 7.5Z"
      fill="#16A34A"
    />
  </svg>
);

// Industry Icons for Trust Bar
export const HealthcareFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FEE2E2" />
    <path d="M12 7V17M7 12H17" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const RealEstateFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FEF3C7" />
    <path d="M6 18V10L12 5L18 10V18H6Z" fill="#D97706" />
    <path d="M10 18V13H14V18" fill="#FEF3C7" />
  </svg>
);

export const HospitalityFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#E0E7FF" />
    <path d="M6 10H18V17C18 17.5 17.5 18 17 18H7C6.5 18 6 17.5 6 17V10Z" fill="#4F46E5" />
    <path d="M9 7C9 7 9.5 8 10.5 8C11.5 8 12 7 12 7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 7C13 7 13.5 8 14.5 8C15.5 8 16 7 16 7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const EducationFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#EDE9FE" />
    <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#7C3AED" />
    <path d="M6 10.5V15C6 16.5 8.7 18 12 18C15.3 18 18 16.5 18 15V10.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 9V14" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LocalBusinessFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#F0FDF4" />
    <path d="M5 9L6.5 4H17.5L19 9V10C19 11.1 18.1 12 17 12C15.9 12 15 11.1 15 10C15 11.1 14.1 12 13 12C11.9 12 11 11.1 11 10C11 11.1 10.1 12 9 12C7.9 12 7 11.1 7 10C7 11.1 6.1 12 5 12V9Z" fill="#059669" />
    <path d="M6 12V18H18V12" stroke="#059669" strokeWidth="1.5" />
  </svg>
);
