'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  metrics: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'seo',
    name: 'SEO Optimization',
    description: 'Data-driven search engine optimization and Google Local 3-Pack authority that drives consistent organic traffic and qualified inbound calls.',
    image: '/service-seo.jpg',
    metrics: '+210% Organic Traffic Growth',
  },
  {
    id: 'web',
    name: 'Website Development',
    description: 'Custom, lightning-fast mobile-responsive websites engineered with modern architectures for maximum speed, security, and conversion.',
    image: '/service-web.jpg',
    metrics: '99 Google Lighthouse Performance',
  },
  {
    id: 'app',
    name: 'App Development',
    description: 'Scalable iOS and Android mobile applications crafted with intuitive UI/UX and seamless cloud integrations to engage and retain your customers.',
    image: '/service-web.jpg',
    metrics: 'Cross-Platform Native Speed',
  },
  {
    id: 'social',
    name: 'Social Media Marketing',
    description: 'Strategic content creation, community engagement, and high-impact social campaigns across Instagram, LinkedIn, and Meta that amplify brand authority.',
    image: '/service-seo.jpg',
    metrics: '4.5x Social Engagement Lift',
  },
  {
    id: 'ppc',
    name: 'Pay Per Click',
    description: 'Precision-targeted Google Ads & Meta advertising funnels built to capture high-intent buyers with optimal cost-per-lead and verified ROAS.',
    image: '/service-seo.jpg',
    metrics: '3.8x Average Campaign ROAS',
  },
  {
    id: 'pr',
    name: 'PR and Ads Marketing',
    description: 'Comprehensive digital PR distribution, media outreach, and omnichannel sponsored placements that elevate brand credibility on national outlets.',
    image: '/service-web.jpg',
    metrics: 'Top Tier Publications & Reach',
  },
];

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>('seo');

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* ========================================================= */}
      {/* 1. Top Counter / Stats Strip (Clean White Daylight Theme) */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e7490] tracking-tight">
                6 +
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
                Years Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e7490] tracking-tight">
                5,000 +
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
                Project Completed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e7490] tracking-tight">
                3,000 +
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
                Satisfied Clients
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e7490] tracking-tight">
                10 Lakh+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
                Paid Leads Generated
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. "The Services, We Provide" (Clean Daylight White Theme) */}
      {/* ========================================================= */}
      <section id="services" className="relative w-full py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
        
        {/* Soft daylight ambient background blurs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* ===================================================== */}
            {/* LEFT COLUMN: Heading & Interactive Service Card       */}
            {/* ===================================================== */}
            <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
              
              {/* Heading with Hand-Drawn Orange Wave Accent */}
              <div className="mb-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <span className="relative inline-block">
                    The Services,
                    {/* Hand-drawn smooth curved orange underline accent */}
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-3 text-orange-500"
                      viewBox="0 0 140 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10C24 4 48 4 70 8C92 12 116 12 138 6"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{' '}
                  <span className="text-slate-900">We Provide</span>
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
                We provide a comprehensive range of solutions designed to address your unique business challenges and drive meaningful growth.
              </p>

              {/* Dynamic Service Visual Showcase Card */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-200/70 bg-white group">
                
                {/* Dotted amber circle accent on bottom-left */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-dashed border-amber-400/80 pointer-events-none z-20" />

                {/* Service Visual Image */}
                <div className="relative w-full h-[280px] sm:h-[350px]">
                  <Image
                    src={activeService.image}
                    alt={activeService.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay at bottom for crisp text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                </div>

                {/* Active Service Info Banner inside Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-semibold mb-1.5 backdrop-blur-xs">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>{activeService.metrics}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeService.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-md mt-1">
                      {activeService.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm transition-all self-start sm:self-end shrink-0"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

            {/* ===================================================== */}
            {/* RIGHT COLUMN: Interactive Service Menu List           */}
            {/* Clean daylight list with subtle dividers              */}
            {/* ===================================================== */}
            <div className="lg:col-span-6 flex flex-col w-full divide-y divide-slate-200 pt-4 lg:pt-0">
              
              {servicesData.map((service) => {
                const isActive = activeServiceId === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    onMouseEnter={() => setActiveServiceId(service.id)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group transition-all duration-200"
                  >
                    <span
                      className={`text-lg sm:text-xl lg:text-2xl tracking-tight transition-colors duration-200 ${
                        isActive
                          ? 'text-slate-900 font-extrabold'
                          : 'text-slate-600 group-hover:text-slate-900 font-medium'
                      }`}
                    >
                      {service.name}
                    </span>

                    {/* Active Indicator: Glowing Red/Orange Dot */}
                    <div className="flex items-center gap-3">
                      {isActive ? (
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 shadow-sm shadow-red-500/80"></span>
                        </span>
                      ) : (
                        <span className="w-3 h-3 rounded-full bg-transparent group-hover:bg-slate-300 transition-colors" />
                      )}
                    </div>
                  </button>
                );
              })}

            </div>

          </div>
        </div>

        {/* Decorative Grid Sphere Icon at Bottom Right */}
        <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-8 pointer-events-none opacity-80 text-orange-500">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="24" cy="24" rx="10" ry="20" stroke="currentColor" strokeWidth="2" />
            <path d="M4 24H44" stroke="currentColor" strokeWidth="2" />
            <path d="M8 14H40" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 34H40" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

      </section>

    </div>
  );
}
