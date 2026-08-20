"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

/**
 * Badge Avis Google — fixé en bas à droite, suit le scroll,
 * renvoie vers la section #avis au clic.
 */
export default function GoogleReviewsBadge() {
  return (
    <Link
      href="#avis"
      aria-label="Voir les avis Google"
      className={[
        /* Position fixe bas-gauche, au-dessus de tout */
        "fixed bottom-6 left-6 z-50",
        /* Carte blanche arrondie avec ombre portée */
        "bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#d6e2cf]",
        /* Mise en page interne */
        "inline-flex items-center gap-3",
        /* Interaction */
        "cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
        "transition-all duration-200",
      ].join(" ")}
    >
      {/* Pastille note jaune */}
      <div className="bg-[#f1b82d] text-[#1f3021] font-extrabold text-sm w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs">
        4.8
      </div>

      {/* Étoiles + libellé */}
      <div className="flex flex-col items-start leading-none">
        {/* 5 étoiles */}
        <div className="flex items-center gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="fill-[#f1b82d] text-[#f1b82d]"
            />
          ))}
        </div>
        <span className="text-xs font-semibold text-[#1f3021]">
          Avis Google
        </span>
        <span className="text-[11px] text-neutral-500">27 avis clients</span>
      </div>
    </Link>
  );
}
