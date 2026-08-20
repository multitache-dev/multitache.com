import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Renovations from "@/components/Renovations";
import AboutMap from "@/components/AboutMap";
import Realisations from "@/components/Realisations";
import HowItWorks from "@/components/HowItWorks";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import SectionTitleObserver from "@/components/SectionTitleObserver";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col text-[#1f3021]">
      {/* Observer animations titres (client-only) */}
      <SectionTitleObserver />

      {/* Badge Avis Google fixé bas-droite (scroll-following) */}
      <GoogleReviewsBadge />

      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Dégradé continu : Vert sauge exact (#bbcda8) → transition douce → blanc pur */}
        <div className="w-full bg-gradient-to-b from-[#bbcda8] via-[#dde8d5] via-50% to-white">
          {/* 2. Hero */}
          <Hero />

          {/* 3. Nos Rénovations */}
          <Renovations />
        </div>

        {/* 4. Qui Sommes-Nous & Carte (Image 3) */}
        <AboutMap />

        {/* 5. Comment ça marche */}
        <HowItWorks />

        {/* 6. Zone Nos Dernières Réalisations + Contact CTA avec dégradé continu */}
        <div className="w-full bg-gradient-to-b from-white via-[#bbcda8]/40 via-45% to-white">
          {/* Nos Dernières Réalisations */}
          <Realisations />

          {/* Contact CTA */}
          <ContactCta />
        </div>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
