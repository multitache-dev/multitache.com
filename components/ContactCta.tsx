"use client";

import React from "react";
import Link from "next/link";

export default function ContactCta() {
  return (
    <section id="contact" className="w-full py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#e8f0e5] to-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[28px] sm:rounded-[34px] bg-[#cad8c5] p-8 sm:p-12 md:p-14 text-center shadow-sm border border-[#c4d6bd]/60">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1f3021] tracking-tight mb-3">
          Nous contacter
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#2f4231] max-w-lg mx-auto font-medium leading-relaxed mb-6">
          Une question, un projet ou une urgence ? Écrivez-nous : votre message
          part directement à l&apos;artisan concerné.
        </p>

        <div>
          <Link
            href="/contact"
            className="inline-block bg-[#316bb3] hover:bg-[#255894] text-white font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Accéder au formulaire de contact
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
