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
        {/* 2. Hero (Image 3 / screenshot) */}
        <Hero />

        {/* 3. Nos Rénovations (Image 2) */}
        <Renovations />

        {/* 4. Qui Sommes-Nous & Carte (Image 3) */}
        <AboutMap />

        {/* 5. Comment ça marche */}
        <HowItWorks />

        {/* 6. Nos Dernières Réalisations (Image 4) */}
        <Realisations />

        {/* 6. Contact CTA (Image 5) */}
        <ContactCta />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
