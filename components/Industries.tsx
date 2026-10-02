'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

const industries: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: '/industry-healthcare.jpg',
    description: 'Accelerating patient appointments and clinic authority with specialized medical SEO and local growth campaigns.',
    tag: 'Clinics & Hospitals',
  },
  {
    id: 'education',
    name: 'Education',
    image: '/industry-education.jpg',
    description: 'Scaling student admissions and course enrollments through high-converting omnichannel lead funnels.',
    tag: 'Institutes & EdTech',
  },
  {
    id: 'resorts',
    name: 'Resorts & Villa',
    image: '/industry-resorts.jpg',
    description: 'Transforming hospitality experiences with cutting-edge digital solutions for luxury resorts and private villas.',
    tag: 'Luxury Escapes',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Catering',
    image: '/industry-catering.jpg',
    description: 'Driving high-ticket banquet bookings and brand prestige for gourmet catering, wedding venues, and fine dining.',
    tag: 'Banquets & Dining',
  },
];

export default function Industries() {
  const [hoveredId, setHoveredId] = useState<string | null>('resorts');

  return (
    <section id="industries" className="relative w-full py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          
          {/* Heading with Hand-Drawn Orange Wave Accent */}
          <div className="mb-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="relative inline-block">
                Industries,
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
              <span className="text-slate-900">We Serve</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            We provide a comprehensive range of solutions designed to address your unique business challenges and drive meaningful growth.
          </p>

        </div>

        {/* Carousel / Cards Grid Container with Left & Right Arrow Accents */}
        <div className="relative w-full">
          
          {/* Left Arrow Button */}
          <button 
            aria-label="Previous industry"
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            aria-label="Next industry"
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {industries.map((item) => {
              const isHovered = hoveredId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(item.id)}
                  className="group relative h-[360px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-t from-black/95 via-black/75 to-black/40 opacity-100'
                        : 'bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90'
                    }`}
                  />

                  {/* Active Red Dot Indicator on Top Right (as seen in screenshot) */}
                  {isHovered && (
                    <div className="absolute top-5 right-5 z-20">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-md shadow-red-500/80"></span>
                      </span>
                    </div>
                  )}

                  {/* Content Container (Pinned to Bottom) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col items-center text-center transition-all duration-300">
                    
                    {/* Industry Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h3>

                    {/* 2-Line Description (Visible on Hover / Active) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isHovered
                          ? 'max-h-24 opacity-100 mt-1'
                          : 'max-h-0 sm:max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-slate-200 leading-snug line-clamp-2 font-normal">
                        {item.description}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
