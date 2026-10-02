'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Why should I choose your agency or freelancer or in-house stream for my business?',
    answer: 'We offer a skilled, transparent, and results-driven team that adapts to your needs. Whether you’re a startup or enterprise, our personalized approach ensures your goals are met with measurable outcomes.',
  },
  {
    id: 2,
    question: 'I have been burned by SEO agencies before. How are you different?',
    answer: 'Unlike agencies that rely on vanity metrics or black-hat shortcuts, SKDM focuses on real bottom-line revenue. We provide transparent keyword tracking, verified Google Local 3-Pack authority, and detailed weekly KPI reporting.',
  },
  {
    id: 3,
    question: 'How quickly can I expect the results?',
    answer: 'Paid advertising (Google & Meta Ads) drives qualified inbound leads within 48 to 72 hours of launch. Organic SEO typically shows substantial ranking growth and call volume acceleration within 60 to 90 days.',
  },
  {
    id: 4,
    question: 'What is your pricing? I am scared of hidden costs.',
    answer: 'We operate with 100% transparent, milestone-based pricing with zero hidden fees. You receive a clear scope of work and budget breakdown before any project kickoff.',
  },
  {
    id: 5,
    question: 'Why are my Instagram posts getting zero engagement?',
    answer: 'Social algorithms prioritize high-retention video, shareable carousels, and active community interaction over static graphics. We revitalize your content strategy to match real algorithmic engagement signals.',
  },
  {
    id: 6,
    question: 'Do you work with local businesses or just big brands?',
    answer: 'We work with businesses of all sizes—from local clinics, real estate firms, and hospitality venues to high-growth brands and established multi-location enterprises.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Daylight ambient background lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          
          {/* Heading with Hand-Drawn Orange Wave Accent */}
          <div className="mb-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="relative inline-block">
                Frequently Asked
                {/* Curved orange wave underline accent */}
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
              Questions
            </h2>
          </div>

          {/* Subtitle with accent dot */}
          <div className="flex items-center justify-center gap-2 max-w-xl">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Here, you&apos;ll find answers to the most common questions. If you need further assistance, feel free to reach out!
            </p>
            <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0 shadow-xs" />
          </div>

        </div>

        {/* Content Layout: Left Image + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Meeting Image */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
            <Image
              src="/faq-meeting.jpg"
              alt="Shree Krishna Digital Marketing Strategy Consulting Meeting"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>

          {/* Right Column: FAQ Accordion List on White Background */}
          <div className="lg:col-span-7 flex flex-col w-full divide-y divide-slate-200">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-start justify-between gap-4 text-left group transition-colors"
                  >
                    <span className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                      isOpen ? 'text-orange-600 font-bold' : 'text-slate-800 group-hover:text-orange-600'
                    }`}>
                      {faq.question}
                    </span>

                    <span className={`p-1 rounded-full transition-colors shrink-0 mt-0.5 ${
                      isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-500'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-48 opacity-100 mt-2.5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
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
