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
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Big Card Container */}
        <div className="rounded-[32px] border border-[#bbcda8]/60 bg-white p-6 shadow-sm sm:rounded-[36px] sm:p-10 md:p-12">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="section-title mb-2 text-2xl font-extrabold tracking-tight text-[#1f3021] sm:text-3xl md:text-4xl">
              Nos dernières réalisations
            </h2>
            <p className="text-sm text-[#4f6452] sm:text-base">
              Trois chantiers récents, expliqués en deux lignes.
            </p>
          </div>

          {/* 3 Realisations Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {realisations.map((item, index) => (
              <div key={index} className="group flex cursor-pointer flex-col">
                {/* Image with rounded corners */}
                <div className="relative h-56 overflow-hidden rounded-2xl border border-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.08)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.20)] sm:h-64 sm:rounded-3xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 mb-2 text-base font-bold text-[#1f3021] transition-colors group-hover:text-[#316bb3] sm:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[#4f6452] sm:text-sm">
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
