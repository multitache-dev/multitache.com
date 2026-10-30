import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const realisations = [
  {
    title: "Douche italienne sur mesure",
    imageSrc: "/images/Douche 2.jpg",
    description: "Rénovation complète de la salle d'eau : faïence grand format et niche encastrée sur mesure.",
    tag: "Villard-Bonnot",
  },
  {
    title: "Habillage mural tasseaux",
    imageSrc: "/images/Finition murale (habillage bois).jpg",
    description: "Revêtement mural décoratif en tasseaux de bois naturel et finitions de peinture assorties.",
    tag: "Froges",
  },
  {
    title: "Pompe à chaleur & Chauffe-eau",
    imageSrc: "/images/Pompe à chaleur Air-Eau.jpg",
    description: "PAC réversible et chauffe-eau thermodynamique pour un confort énergétique optimal.",
    tag: "Le Versoud",
  },
];

export default function Realisations() {
  const [first, ...rest] = realisations;

  return (
    <section className="w-full py-10 md:py-20 px-4 sm:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3021] tracking-tight mb-3">
            Les dernières réalisations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#3d5040] max-w-2xl leading-relaxed">
            Du projet à la clé — découvrez nos chantiers récents dans le Grésivaudan.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 0 — Large left */}
          <Link
            href="/services#realisations"
            className="group relative rounded-[24px] overflow-hidden md:row-span-2 h-72 md:h-full min-h-[360px]"
          >
            <Image
              src={first.imageSrc}
              alt={first.title}
              fill
              className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f3021]/80 via-[#1f3021]/20 to-transparent" />
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1f3021] text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
              {first.tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-1">
                {first.title}
              </h3>
              <p className="text-white/75 text-xs leading-relaxed hidden sm:block">
                {first.description}
              </p>
            </div>
          </Link>

          {/* Cards 1 & 2 — Stacked right */}
          {rest.map((item, i) => (
            <Link
              key={i}
              href="/services#realisations"
              className="group relative rounded-[24px] overflow-hidden h-56 md:h-auto"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3021]/75 via-[#1f3021]/15 to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1f3021] text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                {item.tag}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-white font-bold text-base md:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-[20px] border border-[#bbcda8]/60 px-6 py-4">
          <p className="text-sm text-[#4f6452] text-center sm:text-left">
            <span className="font-bold text-[#1f3021]">+50 chantiers</span> réalisés en Grésivaudan — artisanat local, qualité certifiée.
          </p>
          <Link
            href="/services#realisations"
            className="inline-flex items-center gap-2 bg-[#1f3021] hover:bg-[#316bb3] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-300 shrink-0"
          >
            Découvrir toutes nos réalisations
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
