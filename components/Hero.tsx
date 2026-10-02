'use client';

import React from 'react';
import Image from 'next/image';
import { 
  PeacockFeatherIcon,
  MetaLogo,
  PhonePeLogo,
  RazorpayLogo,
  GoogleLogo,
  GoogleAdsLogo
} from './PartnerLogos';

export default function Hero() {
  return (
    <div className="w-full flex flex-col relative">
      
      {/* ========================================================= */}
      {/* 1. Full-Width Cyber Network Hero Banner (Matching skdm.in) */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-950">
        
        {/* Full-Bleed Background Image: Edge-to-Edge Cyber Network Visual */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-digital-agency.jpg"
            alt="Shree Krishna Digital Marketing Agency Mumbai"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={95}
          />
          {/* Subtle directional vignette for text readability while keeping full network clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 via-50% to-transparent pointer-events-none" />
        </div>

        {/* Content Container (Directly merged with background, no card box) */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="max-w-2xl">
            
            {/* Main Headline (Reduced size, merged with background) */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-4">
              Accelerate Growth With{' '}
              <span className="text-[#38bdf8]">Top Digital Marketing</span>{' '}
              <span className="block mt-1">
                In <span className="text-[#f97316]">Andheri</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-7 font-normal max-w-xl">
              We are a leading digital marketing agency, dedicated to helping businesses thrive in the digital landscape. Our team of experts specializes in creating tailored strategies that drive results and elevate your brand&apos;s online presence.
            </p>

            {/* CTA Button: Pill with white border and orange circle icon */}
            <div>
              <a
                href="#contact"
                id="hero-get-quote-btn"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-black/60 hover:bg-black/90 text-white font-medium text-sm sm:text-base border border-white/80 transition-all duration-200 group shadow-lg backdrop-blur-xs"
              >
                <span>Get Quote</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-all">
                  <PeacockFeatherIcon className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* 2. Bottom "Our Trusted Partners" LIVE SCROLLING BELT       */}
      {/* ========================================================= */}
      <section className="w-full bg-white border-y border-slate-200 flex flex-col md:flex-row items-stretch relative z-20 shadow-xs overflow-hidden">
        
        {/* Left: Solid Orange Badge "Our Trusted Partners" */}
        <div className="bg-orange-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 flex flex-col items-center md:items-start justify-center text-center md:text-left shrink-0 z-20 shadow-md">
          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase leading-tight">
            Our Trusted
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase leading-tight">
            Partners
          </span>
        </div>

        {/* Right: Infinite Live Marquee Belt */}
        <div className="flex-1 overflow-hidden relative flex items-center py-4 bg-white">
          <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-belt flex items-center gap-12 sm:gap-16 px-6">
            
            {/* Set 1 */}
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <MetaLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <PhonePeLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <RazorpayLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleAdsLogo className="h-6" />
            </div>

            {/* Set 2 */}
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <MetaLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <PhonePeLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <RazorpayLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleAdsLogo className="h-6" />
            </div>

            {/* Set 3 */}
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <MetaLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <PhonePeLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <RazorpayLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleAdsLogo className="h-6" />
            </div>

          </div>
        </div>

        {/* Floating Peacock Chat Widget Badge */}
        <div className="absolute right-4 -top-8 sm:-top-9 z-30 pointer-events-auto">
          <button 
            aria-label="Chat with Shree Krishna Digital"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-amber-300 p-1 shadow-xl hover:scale-105 transition-transform flex items-center justify-center border-2 border-white"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11">
              <PeacockFeatherIcon className="w-full h-full drop-shadow-sm" />
            </div>
          </button>
        </div>

      </section>

    </div>
  );
}
