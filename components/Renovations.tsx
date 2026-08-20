"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RenovationCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const renovationItems: RenovationCardProps[] = [
  {
    title: "PLOMBERIE & SALLE DE BAINS",
    imageSrc: "/images/hands_plumbing.jpg",
    link: "#contact",
  },
  {
    title: "ÉLECTRICITÉ & SANITAIRES",
    imageSrc: "/images/hands_electrician.jpg",
    link: "#contact",
  },
  {
    title: "PEINTURE & FINITIONS",
    imageSrc: "/images/hands_painting.jpg",
    link: "#contact",
  },
  {
    title: "CLIMATISATION & POMPE À CHALEUR",
    imageSrc: "/images/hands_ac_heat_pump.jpg",
    link: "#contact",
  },
];

export default function Renovations() {
  return (
    <section id="renovations" className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="mb-10 sm:mb-12">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3021] tracking-tight mb-3">
          Nos rénovations
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#3d5040] max-w-3xl">
          Quatre grandes familles de travaux. Choisissez la vôtre pour découvrir
          les prestations et les chantiers déjà réalisés.
        </p>
      </div>

      {/* 4 Cards Grid - Added 'group/grid' for the blur siblings effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 group/grid">
        {renovationItems.map((item, index) => (
          <div
            key={index}
            className="group/card relative h-[380px] sm:h-[420px] rounded-[28px] overflow-hidden border border-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.08)] transition-all duration-300 ease-out transform flex flex-col justify-between p-6 group-hover/grid:blur-[4px] group-hover/grid:scale-[0.98] hover:!blur-none hover:!scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.20)] hover:z-10"
          >
            {/* Background Image */}
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out"
            />

            {/* Gradient for text readability (green filter removed) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70 pointer-events-none" />

            {/* Top Title */}
            <div className="relative z-10 text-center pt-2">
              <h3 className="text-white font-bold text-base sm:text-lg tracking-wider uppercase drop-shadow-md leading-snug">
                {item.title}
              </h3>
            </div>

            {/* Bottom Button: En savoir + */}
            <div className="relative z-10 flex justify-start">
              <Link
                href={item.link}
                className="inline-flex items-center gap-2.5 bg-[#316bb3] hover:bg-[#255894] text-white pl-1.5 pr-4 py-1.5 rounded-full text-xs font-semibold shadow-md transition-all group-hover:shadow-lg"
              >
                <span className="w-6 h-6 rounded-full bg-[#f1b82d] flex items-center justify-center text-[#1f3021] shrink-0">
                  <ArrowRight size={13} strokeWidth={2.5} />
                </span>
                <span>En savoir +</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
