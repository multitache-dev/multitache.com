"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "components/ui/logo";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { href: "#renovations", label: "Services & réalisations" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full border-b border-[#cedec5] bg-[#dfead8] px-4 py-3 shadow-xs sm:px-8 lg:px-12">
      <div className="flex w-full items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden items-center space-x-1 text-sm font-medium text-[#1f3021] sm:space-x-2 md:flex">
          <Link
            href="/"
            className="rounded-full bg-[#c9dbbf] px-4 py-1.5 font-semibold text-[#1f3021] shadow-2xs transition-colors"
          >
            Accueil
          </Link>
          {navigationItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-1.5 text-[#293d2c] transition-colors hover:bg-[#c9dbbf]/70"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden items-center md:flex">
          <Link
            href="#contact"
            className="transform rounded-full bg-[#f1b82d] px-5 py-2.5 text-sm font-semibold text-[#1f3021] shadow-xs transition-all hover:-translate-y-0.5 hover:bg-[#e0aa24]"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[#1f3021] hover:bg-[#c9dbbf] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="mt-3 flex flex-col space-y-3 rounded-2xl border border-[#cedec5] bg-[#dfead8] p-4 shadow-lg backdrop-blur-md md:hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg bg-[#c9dbbf] px-4 py-2 font-semibold text-[#1f3021]"
          >
            Accueil
          </Link>
          {navigationItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-2 text-[#293d2c] hover:bg-[#c9dbbf]/70"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full bg-[#f1b82d] py-2.5 text-center font-semibold text-[#1f3021] shadow-xs"
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
