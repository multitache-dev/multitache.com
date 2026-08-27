"use client";

import React from "react";
import Image from "next/image";

export default function AboutMap() {
  return (
    <section id="about" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Grid Pattern Overlay (Inspiration Image 1) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91384 0 2.45351 0.539673 2.45351 1.22676C2.45351 1.91384 1.91384 2.45351 1.22676 2.45351C0.539673 2.45351 0 1.91384 0 1.22676C0 0.539673 0.539673 0 1.22676 0Z' fill='%231f3021' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ── Left Column: Text (Inspiration Image 2 & 1) ── */}
        <div className="flex flex-col justify-center">
          <p className="text-[#3d5040] italic font-serif text-lg md:text-xl mb-4 tracking-wide">
            Un habitat beau, fonctionnel et durable.
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-[#1f3021] leading-[1.15] mb-8">
            Rénovez votre bien, <br />
            <span className="italic font-light">selon vos envies !</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#4f6452] leading-relaxed mb-10 max-w-lg font-light">
            <p>
              Depuis 2003, <strong className="font-semibold text-[#1f3021]">Multitâche</strong> accompagne les particuliers
              dans leurs travaux de rénovation et intervient dans l'ensemble du <strong className="font-semibold text-[#1f3021]">Grésivaudan</strong>.
            </p>
            <p>
              Un seul interlocuteur du premier coup de fil à la remise des clés,
              un devis clair et personnalisé, et des chantiers irréprochables.
            </p>
          </div>

          <div>
             <a href="#contact" className="inline-block border border-[#1f3021] text-[#1f3021] hover:bg-[#1f3021] hover:text-white transition-colors duration-300 px-8 py-3.5 rounded-xl font-medium tracking-wide">
               Je veux rénover un bien
             </a>
          </div>
        </div>

        {/* ── Right Column: Bento Photo Collage (Inspiration Image 2) ── */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex gap-4 sm:gap-6">
           
           {/* Left Col of Collage */}
           <div className="flex flex-col gap-4 sm:gap-6 w-1/2 h-full pt-10 lg:pt-20">
              <div className="relative w-full flex-grow rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                 <Image src="/images/hands_electrician.jpg" alt="Electricité" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative w-full h-[35%] rounded-full overflow-hidden shadow-lg border-4 border-white group">
                 <Image src="/images/hands_painting.jpg" alt="Peinture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
           </div>
           
           {/* Right Col of Collage */}
           <div className="flex flex-col gap-4 sm:gap-6 w-1/2 h-full pb-10 lg:pb-20">
              <div className="relative w-full h-[45%] rounded-t-full rounded-b-[2rem] sm:rounded-b-[3rem] overflow-hidden shadow-lg border-4 border-white group">
                 <Image src="/images/hands_ac_heat_pump.jpg" alt="Climatisation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative w-full flex-grow rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                 <Image src="/images/hands_plumbing.jpg" alt="Plomberie" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
           </div>
           
        </div>
      </div>
    </section>
  );
}
