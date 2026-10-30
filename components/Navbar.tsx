"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./ui/logo";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services & réalisations", href: "/services", isSpecial: true },
  { label: "Avis", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname.startsWith("/services")) {
      e.preventDefault();
      window.history.replaceState(null, "", "/services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isItemActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.isSpecial) return pathname.startsWith("/services") || pathname.startsWith("/realisations");
    return false;
  };

  return (
    <header className="w-full py-3 px-4 sm:px-8 lg:px-12 bg-[#dfead8] relative z-30 shadow-xs border-b border-[#cedec5]">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-[#1f3021]">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.isSpecial ? handleServicesClick : undefined}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  active ? "bg-[#c9dbbf] text-[#1f3021] font-semibold shadow-2xs" : "hover:bg-[#c9dbbf]/70 text-[#293d2c]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="bg-[#f1b82d] hover:bg-[#e0aa24] text-[#1f3021] font-semibold text-sm px-5 py-2.5 rounded-full shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1f3021] hover:bg-[#c9dbbf]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#dfead8] backdrop-blur-md rounded-2xl shadow-lg border border-[#cedec5] flex flex-col space-y-3">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.isSpecial ? handleServicesClick : () => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  active ? "bg-[#c9dbbf] text-[#1f3021] font-semibold" : "text-[#293d2c] hover:bg-[#c9dbbf]/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
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
