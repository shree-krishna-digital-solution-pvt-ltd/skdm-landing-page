'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Official Logo from public folder (Only logo image, no extra text around) */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo-C6brZTHT.png"
            alt="Shree Krishna Digital Solutions"
            width={200}
            height={60}
            priority
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        {/* Center: Desktop Nav Links (No dropdowns, includes FAQ button) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">
          <a href="#about" className="hover:text-orange-500 transition-colors py-2">
            Company
          </a>

          <a href="#services" className="hover:text-orange-500 transition-colors py-2">
            Services
          </a>

          <a href="#products" className="hover:text-orange-500 transition-colors py-2">
            Products
          </a>

          <a href="#faq" className="hover:text-orange-500 transition-colors py-2 font-semibold text-slate-800">
            FAQ
          </a>

          <a href="#contact" className="hover:text-orange-500 transition-colors py-2">
            Contact Us
          </a>
        </nav>

        {/* Right: Rounded Pill Button "Get Quote" */}
        <div className="flex items-center gap-3">
          <a
            href="#get-quote"
            id="nav-get-quote"
            className="inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full border border-slate-700 text-slate-900 font-semibold text-sm hover:border-orange-500 hover:text-orange-600 transition-all group shadow-2xs"
          >
            <span>Get Quote</span>
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Company
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Services
          </a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Products
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-semibold border-b border-slate-100">
            FAQ
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
