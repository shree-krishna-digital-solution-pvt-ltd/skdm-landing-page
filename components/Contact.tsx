'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowUpRight 
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Decent Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Get In Touch With Our Team
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Have a project in mind or want to grow your digital presence? Reach out to our team in Andheri West, Mumbai.
          </p>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Contact Details */}
          <div className="flex flex-col gap-5">
            
            {/* Phone & WhatsApp Card */}
            <a 
              href="tel:+917021390953"
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all group shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Phone / WhatsApp
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mt-0.5">
                  +91 70213 90953
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors shrink-0 mt-1" />
            </a>

            {/* Email Card */}
            <a 
              href="mailto:shreekrishnadigital09@gmail.com"
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all group shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Email Us
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5 break-all">
                  shreekrishnadigital09@gmail.com
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  We reply within 2 business hours
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0 mt-1" />
            </a>

            {/* Office Address Card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Head Office
                </div>
                <p className="text-sm font-medium text-slate-800 leading-relaxed mt-1">
                  102 B Mohid Heights, Suresh Nagar, RTO Road, Opp. MHADA Signal, Near Kokilaben Hospital, Andheri West, Mumbai - 400053
                </p>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/917021390953"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+917021390953"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Image Only (NO text on image, NO badges) */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/hero-agency-workspace.jpg"
                alt="Shree Krishna Digital Marketing Agency Andheri West Mumbai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
