import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Logo from "components/ui/logo";

export default function Hero() {
  return (
    <section className="hero-v-shape relative flex h-[90vh] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      {/* ── Background Video — plein écran, avec léger overlay sombre ── */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <div className="relative z-10 mx-auto -mt-16 flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        {/* Logo principal centré */}
        <div className="hero-logo-anim mb-8 drop-shadow-xl md:mb-10">
          <Logo size="xl" />
        </div>

        {/* H1 */}
        <h1
          className="hero-title mb-5 w-full text-3xl leading-[1.18] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
        >
          <span className="block">MULTITÂCHE, artisan dans le</span>
          <span className="block">bâtiment</span>
          <span className="hero-subtitle-span mt-1 block text-[#2563B0]">dans le Grésivaudan</span>
        </h1>

        {/* Sous-titre */}
        <p
          className="hero-desc-anim mx-auto mb-9 max-w-xl text-sm leading-relaxed text-neutral-100 sm:text-base md:text-lg"
          style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.9))" }}
        >
          Plomberie, électricité, peinture et climatisation : une seule équipe pour toute votre
          rénovation.
        </p>

        {/* Boutons CTA */}
        <div className="hero-btns-anim flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#contact"
            className="transform rounded-full bg-[#2563B0] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1d4f96] sm:text-base"
          >
            Demander un devis gratuit
          </Link>

          <Link
            href="#contact"
            className="transform rounded-full bg-[#f1b82d] px-7 py-3.5 text-sm font-semibold text-[#1f3021] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e0aa24] sm:text-base"
          >
            Nous contacter
          </Link>

          <Link
            href="#avis"
            className="transform rounded-full border border-neutral-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#1a2e1c] shadow-xs backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white sm:text-base"
          >
            Laisser un avis
          </Link>
        </div>
      </div>

      {/* Bouncing down arrow positioned near the vertex */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 animate-bounce md:bottom-5">
        <ChevronDown size={32} className="text-[#2563B0] drop-shadow-md" />
      </div>
    </section>
  );
}
