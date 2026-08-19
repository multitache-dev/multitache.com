"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-3 px-4 sm:px-8 lg:px-12 bg-white relative z-30 shadow-sm border-b border-neutral-200">
      <div className="flex items-center justify-between w-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-[#1f3021]">
          <Link
            href="/"
            className="px-4 py-1.5 rounded-full bg-[#d6e2cf] text-[#1f3021] font-semibold transition-colors shadow-2xs"
          >
            Accueil
          </Link>
          <Link
            href="#renovations"
            className="px-4 py-1.5 rounded-full hover:bg-[#dce7d7]/60 text-[#293d2c] transition-colors"
          >
            Services & réalisations
          </Link>
          <Link
            href="#avis"
            className="px-4 py-1.5 rounded-full hover:bg-[#dce7d7]/60 text-[#293d2c] transition-colors"
          >
            Avis
          </Link>
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-full hover:bg-[#dce7d7]/60 text-[#293d2c] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="bg-[#f1b82d] hover:bg-[#e0aa24] text-[#1f3021] font-semibold text-sm px-5 py-2.5 rounded-full shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1f3021] hover:bg-[#dce7d7]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-[#d6e2cf] flex flex-col space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-lg bg-[#d6e2cf] text-[#1f3021] font-semibold"
          >
            Accueil
          </Link>
          <Link
            href="#renovations"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-lg text-[#293d2c] hover:bg-[#e8efe4]"
          >
            Services & réalisations
          </Link>
          <Link
            href="#avis"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-lg text-[#293d2c] hover:bg-[#e8efe4]"
          >
            Avis
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-lg text-[#293d2c] hover:bg-[#e8efe4]"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center bg-[#f1b82d] text-[#1f3021] font-semibold py-2.5 rounded-full shadow-xs"
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
