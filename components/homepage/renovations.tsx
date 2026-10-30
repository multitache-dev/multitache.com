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
    title: "PLOMBERIE",
    imageSrc: "/images/Pompe à chaleur + chauffe eau thermodynamique.jpg",
    link: "#contact",
  },
  {
    title: "CLIMATISATION",
    imageSrc: "/images/Clim.jpg",
    link: "#contact",
  },
  {
    title: "ÉLECTRICITÉ",
    imageSrc: "/images/Tableau 2.jpg",
    link: "#contact",
  },
  {
    title: "MENUISERIE",
    imageSrc: "/images/Porte fenêtre.jpg",
    link: "#contact",
  },
  {
    title: "PEINTURE & FINITION",
    imageSrc: "/images/Peinture.jpg",
    link: "#contact",
  },
];

export default function Renovations() {
  return (
    <section id="renovations" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-20">
      {/* Header section */}
      <div className="mb-10 sm:mb-12">
        <h2 className="section-title mb-3 text-3xl font-extrabold tracking-tight text-[#1f3021] sm:text-4xl md:text-5xl">
          Nos rénovations
        </h2>
        <p className="max-w-3xl text-sm text-[#3d5040] sm:text-base md:text-lg">
          Cinq grands domaines de travaux. Choisissez le vôtre pour découvrir les prestations et les
          chantiers déjà réalisés.
        </p>
      </div>

      {/* 5 Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {renovationItems.map((item, index) => (
          <div
            key={index}
            className="group/card relative flex h-[360px] transform cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] border border-green-500/10 p-5 shadow-[0_0_15px_rgba(34,197,94,0.08)] transition-all duration-300 ease-out hover:z-10 hover:scale-105 hover:shadow-[0_15px_30px_rgba(34,197,94,0.20)] sm:h-[400px]"
          >
            {/* Background Image */}
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out"
            />

            {/* Gradient for text readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/75" />

            {/* Top Title */}
            <div className="relative z-10 pt-1 text-center">
              <h3 className="text-sm leading-snug font-bold tracking-wider text-white uppercase drop-shadow-md sm:text-base">
                {item.title}
              </h3>
            </div>

            {/* Bottom Button: En savoir + */}
            <div className="relative z-10 flex justify-start">
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 rounded-full bg-[#316bb3] py-1 pr-3.5 pl-1.5 text-[11px] font-semibold text-white shadow-md transition-all group-hover:shadow-lg hover:bg-[#255894] sm:text-xs"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1b82d] text-[#1f3021]">
                  <ArrowRight size={11} strokeWidth={2.5} />
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
