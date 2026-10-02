'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight,
  MessageCircle,
  Clock
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 bg-slate-50 overflow-hidden border-t border-slate-200">
      
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready To Scale Your Brand? <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Let&apos;s Discuss Your Growth.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Book a complimentary growth strategy consultation with our Andheri, Mumbai digital marketing specialists.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Value Prop (Left) + Relevant Image Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Why Choose Us (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick Consultation Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600">
                  <TrendingUp className="w-4 h-4" />
                </span>
                What You Get In This Consultation
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Free Audit:</strong> We analyze your Google Ads, SEO, and social footprint before the call.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Milestone-Based Growth Plan:</strong> Clear projection of CPA reduction and lead volume increase.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Senior Strategist Meeting:</strong> Speak directly with senior digital experts in Andheri West.</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              
              {/* Phone */}
              <a 
                href="tel:+917021390953"
                className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Direct Phone / WhatsApp</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">+91 70213 90953</div>
                  <div className="text-xs text-slate-500">Mon - Sat: 10:00 AM - 7:30 PM</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:shreekrishnadigital09@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Official Email</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">shreekrishnadigital09@gmail.com</div>
                  <div className="text-xs text-slate-500">Replies within 2 business hours</div>
                </div>
              </a>

              {/* Office Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Agency Headquarters</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug mt-0.5">
                    102 B Mohid Heights, Suresh Nagar, RTO Road, Opp. MHADA Signal, Near Kokilaben Hospital, Andheri West, Mumbai - 400053
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Relevant Image Showcase (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60 group">
              
              {/* Relevant Agency Consultation Workspace Image */}
              <Image
                src="/hero-agency-workspace.jpg"
                alt="Shree Krishna Digital Agency Marketing Consultation in Andheri Mumbai"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>Andheri West, Mumbai</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-md">
                  <Clock className="w-3 h-3" />
                  <span>Mon - Sat Live</span>
                </div>
              </div>

              {/* Bottom Card Content over image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Meet Our Marketing Team In Person
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                      Visit our office at Mohid Heights, Andheri West or initiate an instant WhatsApp strategy call.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/917021390953"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/30 shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
