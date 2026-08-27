"use client";

import React from "react";
import Image from "next/image";

interface RealisationItem {
  title: string;
  imageSrc: string;
  description: string;
}

const realisations: RealisationItem[] = [
  {
    title: "Douche italienne sur mesure — Villard-Bonnot",
    imageSrc: "/images/Douche 2.jpg",
    description:
      "Rénovation complète de la salle d'eau : création d'une douche italienne moderne avec faïence grand format et niche encastrée.",
  },
  {
    title: "Habillage mural tasseaux — Froges",
    imageSrc: "/images/Finition murale (habillage bois).jpg",
    description:
      "Pose d'un revêtement mural décoratif en tasseaux de bois naturel et finitions de peinture assorties.",
  },
  {
    title: "Pompe à chaleur & Chauffe-eau — Le Versoud",
    imageSrc: "/images/Pompe à chaleur Air-Eau.jpg",
    description:
      "Installation d'une pompe à chaleur réversible et d'un chauffe-eau thermodynamique pour un confort optimal.",
  },
];

export default function Realisations() {
  return (
    <section className="w-full py-8 md:py-16 px-4 sm:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Big Card Container */}
        <div className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 shadow-sm border border-[#bbcda8]/60">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1f3021] tracking-tight mb-2">
            Nos dernières réalisations
          </h2>
          <p className="text-sm sm:text-base text-[#4f6452]">
            Trois chantiers récents, expliqués en deux lignes.
          </p>
        </div>

        {/* 3 Realisations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {realisations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image with rounded corners */}
              <div className="relative h-56 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border border-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.08)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.20)] transition-all duration-300">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#1f3021] mt-4 mb-2 group-hover:text-[#316bb3] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4f6452] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
