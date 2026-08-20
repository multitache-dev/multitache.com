"use client";

import React from "react";
import Link from "next/link";
import { Phone, Send, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="hero-v-shape relative w-full h-[90vh] min-h-[600px] overflow-hidden flex flex-col items-center justify-center">
      {/* ── Background Video — plein écran, avec léger overlay sombre ── */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-5xl mx-auto -mt-16">
        {/* Logo principal centré */}
        <div className="mb-8 md:mb-10 drop-shadow-xl hero-logo-anim">
          <Logo size="xl" />
        </div>

        {/* H1 */}
        <h1
          className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] mb-5 w-full"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
        >
          <span className="block">MULTITÂCHE, artisan dans le</span>
          <span className="block">bâtiment</span>
          <span className="hero-subtitle-span block mt-1 text-[#2563B0]">
            à Villard-Bonnot
          </span>
        </h1>

        {/* Sous-titre */}
        <p
          className="text-sm sm:text-base md:text-lg text-neutral-100 max-w-xl mx-auto leading-relaxed mb-9 hero-desc-anim"
          style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.9))" }}
        >
          Plomberie, électricité, peinture et climatisation : une seule équipe
          pour toute votre rénovation.
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 hero-btns-anim">
          <Link
            href="#contact"
            className="bg-[#2563B0] hover:bg-[#1d4f96] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Demander un devis gratuit
          </Link>

          <Link
            href="#contact"
            className="bg-[#f1b82d] hover:bg-[#e0aa24] text-[#1f3021] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Nous contacter
          </Link>

          <Link
            href="#avis"
            className="bg-white/80 backdrop-blur-xs hover:bg-white text-[#1a2e1c] border border-neutral-300 hover:border-neutral-400 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            Laisser un avis
          </Link>
        </div>
      </div>

      {/* Bouncing down arrow positioned near the vertex */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
        <ChevronDown size={32} className="text-[#2563B0] drop-shadow-md" />
      </div>
    </section>
  );
}
