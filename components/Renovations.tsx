import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const renovationItems = [
  {
    title: "PLOMBERIE",
    imageSrc: "/images/Pompe à chaleur + chauffe eau thermodynamique.jpg",
    link: "/services#plomberie",
  },
  {
    title: "CLIMATISATION",
    imageSrc: "/images/Clim.jpg",
    link: "/services#climatisation",
  },
  {
    title: "ÉLECTRICITÉ",
    imageSrc: "/images/Tableau 2.jpg",
    link: "/services#electricite",
  },
  {
    title: "MENUISERIE",
    imageSrc: "/images/Porte fenêtre.jpg",
    link: "/services#menuiserie",
  },
  {
    title: "PEINTURE & FINITION",
    imageSrc: "/images/Peinture.jpg",
    link: "/services#peinture",
  },
];

export default function Renovations() {
  return (
    <section id="renovations" className="w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10 sm:mb-12">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3021] tracking-tight mb-3">
          Nos rénovations
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#3d5040] max-w-3xl">
          Cinq grands domaines de travaux. Choisissez le vôtre pour découvrir les prestations et les chantiers déjà réalisés.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        {renovationItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group/card relative h-[360px] sm:h-[400px] rounded-[24px] overflow-hidden border border-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.08)] transition-all duration-300 ease-out transform flex flex-col justify-between p-5 hover:scale-105 hover:shadow-[0_15px_30px_rgba(34,197,94,0.20)] hover:z-10 cursor-pointer"
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/75 pointer-events-none" />

            <div className="relative z-10 text-center pt-1">
              <h3 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase drop-shadow-md leading-snug">
                {item.title}
              </h3>
            </div>

            <div className="relative z-10 flex justify-start">
              <span className="inline-flex items-center gap-2 bg-[#316bb3] hover:bg-[#255894] text-white pl-1.5 pr-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold shadow-md transition-all group-hover:shadow-lg">
                <span className="w-5 h-5 rounded-full bg-[#f1b82d] flex items-center justify-center text-[#1f3021] shrink-0">
                  <ArrowRight size={11} strokeWidth={2.5} />
                </span>
                <span>En savoir +</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
