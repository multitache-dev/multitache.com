"use client";

import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Contactez-nous",
      description: "Remplissez un formulaire sur notre site Internet ou contactez l'un de nos conseillers directement par téléphone.",
    },
    {
      id: 2,
      title: "Nous vous accompagnons",
      description: "Votre interlocuteur unique réalise votre devis sous 48h. Il vous apporte conseil et expertise tout au long de votre projet.",
    },
    {
      id: 3,
      title: "Démarrons vos travaux",
      description: "Après validation de votre projet, nos professionnels qualifiés interviennent chez vous avec soin et rigueur.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3021] tracking-tight mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-[#4f6452] text-lg max-w-2xl mx-auto">
            Un processus simple et transparent pour vous garantir une rénovation sereine et réussie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column: Visual */}
          <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
             <div className="relative h-[400px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100">
               <iframe
                 width="100%"
                 height="100%"
                 title="Carte de l'entreprise Multitâche"
                 frameBorder="0"
                 scrolling="no"
                 marginHeight={0}
                 marginWidth={0}
                 src="https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=7%20Chem.%20des%20Roseaux,%2038190%20Villard-Bonnot,%20France+(MULTIT%C3%82CHE)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                 className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
               />
             </div>
             
             {/* Floating Accent Card with Address */}
             <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-[#2563B0] text-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[280px] sm:max-w-xs z-10 transform transition-transform duration-500 hover:-translate-y-2">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
                  Multitâche
                </h3>
                <p className="text-blue-100 text-sm font-medium">
                  7 Chem. des Roseaux,<br />
                  38190 Villard-Bonnot, France
                </p>
             </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative order-1 lg:order-2 lg:pl-10">
            {/* The vertical line */}
            <div className="absolute left-[27px] sm:left-[31px] top-6 bottom-6 w-[2px] bg-neutral-200" />

            <div className="space-y-12 relative z-10">
              {steps.map((step) => (
                <div key={step.id} className="relative flex gap-6 sm:gap-8 items-start group cursor-default">
                  {/* Step Number Bubble */}
                  <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#f1b82d] rounded-full flex items-center justify-center font-extrabold text-xl sm:text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e0aa24] z-10 ring-8 ring-white">
                     {step.id}
                  </div>

                  {/* Step Content */}
                  <div className="pt-2 sm:pt-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#1f3021] mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#2563B0]">
                      {step.title}
                    </h4>
                    <p className="text-base sm:text-lg text-[#4f6452] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to action button under timeline */}
            <div className="mt-14 ml-[78px] sm:ml-[96px]">
               <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#1f3021] text-white rounded-full font-bold shadow-lg hover:bg-[#2563B0] transition-colors hover:shadow-xl transform hover:-translate-y-1 duration-300 uppercase tracking-wide text-sm">
                 Démarrer mon projet
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
