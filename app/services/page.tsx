import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/footer";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import ServicesContent from "@/components/services/ServicesContent";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Réalisations | MULTITÂCHE - Artisans dans le Grésivaudan",
  description:
    "Plomberie, climatisation, électricité, menuiserie et peinture : une équipe d'artisans qualifiés pour vos rénovations dans le Grésivaudan.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#1f3021]">
      <GoogleReviewsBadge />
      <Navbar />

      <main className="flex-1 pb-16 bg-gradient-to-b from-[#dfead8] via-[#edf4e9] via-40% to-white">
        {/* Hero d'en-tête */}
        <div className="w-full pt-8 pb-4 md:pt-10 md:pb-6 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Fil d'Ariane */}
            <nav className="inline-flex items-center gap-1.5 text-xs text-[#293d2c] font-medium mb-3 bg-white/70 backdrop-blur-xs px-3.5 py-1 rounded-full border border-[#cedec5]">
              <Link href="/" className="hover:text-[#2563b0] transition-colors">
                Accueil
              </Link>
              <ChevronRight size={12} className="text-[#4f6452]" />
              <span className="text-[#1f3021] font-semibold">Services & réalisations</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3021] tracking-tight leading-[1.15] mb-3">
              Nos Services & <span className="text-[#2563b0]">Réalisations</span>
            </h1>

            <p className="text-sm sm:text-base text-[#314634] max-w-xl mx-auto leading-relaxed mb-5">
              Découvrez nos prestations artisanales et nos chantiers réalisés à Villard-Bonnot et dans tout le Grésivaudan.
            </p>

            <div className="flex items-center justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#f1b82d] hover:bg-[#e0aa24] text-[#1f3021] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* 5 catégories en carrousel interactif */}
        <ServicesContent />
      </main>

      <Footer />
    </div>
  );
}
