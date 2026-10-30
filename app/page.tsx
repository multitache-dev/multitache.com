import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Renovations from "@/components/Renovations";
import AboutMap from "@/components/AboutMap";
import Realisations from "@/components/Realisations";
import HowItWorks from "@/components/HowItWorks";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/ui/footer";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import SectionTitleObserver from "@/components/SectionTitleObserver";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col text-[#1f3021]">
      <SectionTitleObserver />
      <GoogleReviewsBadge />
      <Navbar />

      <main className="flex-1">
        {/* Dégradé continu : Même couleur que le header (#dfead8) → vert doux → blanc pur */}
        <div className="w-full bg-gradient-to-b from-[#dfead8] via-[#edf4e9] via-50% to-white">
          <Hero />
          <Renovations />
        </div>

        <AboutMap />
        <HowItWorks />

        {/* Zone Dernières Réalisations + Contact CTA */}
        <div className="w-full bg-gradient-to-b from-white via-[#bbcda8]/40 via-45% to-white">
          <Realisations />
          <ContactCta />
        </div>
      </main>

      <Footer />
    </div>
  );
}
