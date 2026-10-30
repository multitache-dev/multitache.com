"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Wind,
  Zap,
  Hammer,
  Paintbrush,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

export type CategoryName =
  | "PLOMBERIE"
  | "CLIMATISATION"
  | "ÉLECTRICITÉ"
  | "MENUISERIE"
  | "PEINTURE & FINITION";

interface RealisationPhoto {
  title: string;
  location: string;
  imageSrc: string;
  caption: string;
}

interface CategoryData {
  name: CategoryName;
  hash: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  shortDescription: string;
  bullets: string[];
  photos: RealisationPhoto[];
}

const CATEGORIES: CategoryData[] = [
  {
    name: "PLOMBERIE",
    hash: "plomberie",
    icon: Wrench,
    shortDescription:
      "Rénovation complète de salle de bain, installation d'équipements sanitaires et dépannage rapide.",
    bullets: [
      "Création de douches à l'italienne & faïence grand format",
      "Pose de meubles vasques, robinetteries et WC suspendus",
      "Remplacement et détartrage de chauffe-eau thermodynamique & électrique",
      "Réseau d'alimentation (cuivre, multicouche) et évacuation",
      "Recherche et réparation de fuites d'eau",
    ],
    photos: [
      {
        title: "Douche à l'italienne moderne",
        location: "Villard-Bonnot",
        imageSrc: "/images/Douche 2.jpg",
        caption: "Receveur extra-plat et faïence grand format",
      },
      {
        title: "Meuble vasque suspendu",
        location: "Saint-Martin-d'Uriage",
        imageSrc: "/images/Vasque.jpg",
        caption: "Raccordements sanitaires encastrés et miroir LED",
      },
      {
        title: "Chauffe-eau thermodynamique",
        location: "Le Versoud",
        imageSrc: "/images/Pompe à chaleur + chauffe eau thermodynamique.jpg",
        caption: "Installation éco-performante et raccordements",
      },
    ],
  },
  {
    name: "CLIMATISATION",
    hash: "climatisation",
    icon: Wind,
    shortDescription:
      "Systèmes de climatisation réversible et pompes à chaleur pour un confort optimal en toute saison.",
    bullets: [
      "Pose de climatiseurs réversibles monosplit et multisplit",
      "Installation de pompes à chaleur (PAC) Air-Air et Air-Eau",
      "Remplacement d'anciennes chaudières fioul / gaz",
      "Entretien annuel, nettoyage et contrôle des fluides",
      "Programmation domotique et pilotage à distance",
    ],
    photos: [
      {
        title: "Climatisation réversible split",
        location: "Crolles",
        imageSrc: "/images/Clim.jpg",
        caption: "Unité murale silencieuse et discrète",
      },
      {
        title: "Pompe à chaleur Air-Eau",
        location: "Le Versoud",
        imageSrc: "/images/Pompe à chaleur Air-Eau.jpg",
        caption: "Remplacement chaudière fioul haute efficacité",
      },
    ],
  },
  {
    name: "ÉLECTRICITÉ",
    hash: "electricite",
    icon: Zap,
    shortDescription:
      "Mise aux normes NF C 15-100, réfection complète de tableaux et installations électriques fiables.",
    bullets: [
      "Remplacement et mise en sécurité des tableaux électriques",
      "Câblage complet en rénovation ou extension",
      "Installation d'éclairages LED intérieurs et extérieurs",
      "Pose d'appareillage (prises, interrupteurs, circuits dédiés)",
      "Vérification d'installation et passage Consuel",
    ],
    photos: [
      {
        title: "Tableau électrique divisionnaire",
        location: "Saint-Ismier",
        imageSrc: "/images/Tableau 2.jpg",
        caption: "Mise aux normes NF C 15-100 et protection parafoudre",
      },
      {
        title: "Rénovation distribution électrique",
        location: "Villard-Bonnot",
        imageSrc: "/images/Tableau 1.jpg",
        caption: "Repérage des circuits et disjoncteurs différentiels",
      },
    ],
  },
  {
    name: "MENUISERIE",
    hash: "menuiserie",
    icon: Hammer,
    shortDescription:
      "Pose d'ouvertures isolantes, habillages en bois contemporains, parquets et agencements sur-mesure.",
    bullets: [
      "Pose de fenêtres, baies vitrées PVC/Aluminium et portes d'entrée",
      "Habillage mural décoratif en tasseaux de bois et feutrine",
      "Pose de parquet massif collé, contrecollé et stratifié",
      "Rénovation contemporaine et habillage d'escaliers",
      "Création de placards et rangements intégrés",
    ],
    photos: [
      {
        title: "Habillage mural en tasseaux de chêne",
        location: "Froges",
        imageSrc: "/images/Finition murale (habillage bois).jpg",
        caption: "Agencement décoratif et absorption acoustique",
      },
      {
        title: "Parquet en chêne massif",
        location: "Meylan",
        imageSrc: "/images/Parquet massif.jpg",
        caption: "Pose collée finition brossée huilée",
      },
      {
        title: "Menuiseries et portes fenêtres",
        location: "Froges",
        imageSrc: "/images/Porte fenêtre.jpg",
        caption: "Isolation thermique et apport de lumière",
      },
      {
        title: "Habillage d'escalier contemporain",
        location: "Crolles",
        imageSrc: "/images/Habillage escalier.jpg",
        caption: "Rénovation marches et contremarches en chêne",
      },
    ],
  },
  {
    name: "PEINTURE & FINITION",
    hash: "peinture",
    icon: Paintbrush,
    shortDescription:
      "Préparation méticuleuse des supports, cloisons placoplâtre, carrelage et peintures intérieures soignées.",
    bullets: [
      "Doublages thermiques, cloisons placoplâtre et faux plafonds",
      "Ratissage intégral et lissage parfait des murs",
      "Peintures intérieures (velours, mates, satinées) sans solvant A+",
      "Pose de carrelage grand format et faïence murale",
      "Reprises après dégâts des eaux et finitions de boiseries",
    ],
    photos: [
      {
        title: "Peinture intérieure & ratissage",
        location: "Villard-Bonnot",
        imageSrc: "/images/Peinture.jpg",
        caption: "Lissage complet et peinture velours dépolluante",
      },
      {
        title: "Carrelage grand format 60x120",
        location: "Domène",
        imageSrc: "/images/Carrelage 2.jpg",
        caption: "Pose collée au sol avec joints hydrofuges fins",
      },
      {
        title: "Faïence décorative salle de bain",
        location: "Villard-Bonnot",
        imageSrc: "/images/Carrelage 1.JPG",
        caption: "Habillage mural soigné et étanchéité sous carrelage",
      },
    ],
  },
];

const REASSURANCE_ITEMS = [
  { icon: ShieldCheck, label: "Garantie Décennale" },
  { icon: Users, label: "Un interlocuteur unique" },
  { icon: Clock, label: "Devis gratuit sous 48h" },
  { icon: MapPin, label: "Grésivaudan & environs" },
];

export default function ServicesContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"right" | "left">("right");
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  const total = CATEGORIES.length;

  const goToPrevious = useCallback(() => {
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setAnimKey((k) => k + 1);
  }, [total]);

  const goToNext = useCallback(() => {
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    setAnimKey((k) => k + 1);
  }, [total]);

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setAnimKey((k) => k + 1);
  };

  // Synchronisation avec l'ancre URL : scroll uniquement si un hash est présent
  useEffect(() => {
    const applyHash = (hash: string) => {
      if (!hash) return;
      const matchIndex = CATEGORIES.findIndex(
        (c) => c.hash === hash || c.name.toLowerCase() === hash
      );
      if (matchIndex === -1) return;

      setSlideDirection(matchIndex > 0 ? "right" : "left");
      setCurrentIndex(matchIndex);
      setAnimKey((k) => k + 1);

      setTimeout(() => {
        if (cardContainerRef.current) {
          const navbarHeight = 85;
          const topPosition =
            cardContainerRef.current.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

          window.scrollTo({
            top: Math.max(0, topPosition),
            behavior: "smooth",
          });
        }
      }, 120);
    };

    applyHash(window.location.hash.replace("#", "").toLowerCase());

    const handleHashChange = () => {
      applyHash(window.location.hash.replace("#", "").toLowerCase());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Met à jour l'URL discrètement UNIQUEMENT si l'utilisateur navigue (évite replaceState au montage)
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    window.history.replaceState(null, "", `#${CATEGORIES[currentIndex].hash}`);
  }, [currentIndex]);

  // Raccourcis clavier ← / →
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Swipe tactile mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    touchStartX.current = null;
  };

  const currentCategory = CATEGORIES[currentIndex];
  const prevCategory = CATEGORIES[currentIndex === 0 ? total - 1 : currentIndex - 1];
  const nextCategory = CATEGORIES[currentIndex === total - 1 ? 0 : currentIndex + 1];
  const CurrentIcon = currentCategory.icon;
  const navBtnClass =
    "flex absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#2563b0] text-[#1f3021] hover:text-white border border-[#cedec5] shadow-md hover:shadow-xl items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      {/* 1. Barrette de réassurance */}
      <div className="mb-8 bg-white/90 backdrop-blur-xs rounded-2xl p-3 sm:p-4 border border-[#cedec5] shadow-2xs flex flex-wrap items-center justify-around gap-3 text-xs sm:text-sm text-[#1f3021]">
        {REASSURANCE_ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={18} className="text-[#2563b0] shrink-0" />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>

      {/* 2. Carte principale du Carrousel */}
      <div
        ref={cardContainerRef}
        className="relative scroll-mt-24 md:scroll-mt-32"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Ancres invisibles pour le scroll natif */}
        {CATEGORIES.map((c) => (
          <span key={c.hash} id={c.hash} className="absolute -top-24 md:-top-28 block pointer-events-none" />
        ))}

        {/* Flèches latérales */}
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Catégorie précédente"
          className={`${navBtnClass} -left-3 sm:-left-5 lg:-left-6`}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Catégorie suivante"
          className={`${navBtnClass} -right-3 sm:-right-5 lg:-right-6`}
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide active */}
        <div
          key={`${currentCategory.name}-${animKey}`}
          className={`bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 border border-[#bbcda8]/60 shadow-xs ${
            slideDirection === "right" ? "carousel-slide-right" : "carousel-slide-left"
          }`}
        >
          {/* Header de la slide */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#dde8d5]">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#dfead8] flex items-center justify-center text-[#2563b0] shrink-0 shadow-2xs">
                <CurrentIcon size={26} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563b0]">
                  Domaine {currentIndex + 1} sur {total}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f3021] tracking-tight">
                  {currentCategory.name}
                </h2>
              </div>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f1b82d] hover:bg-[#e0aa24] text-[#1f3021] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition-all transform hover:-translate-y-0.5 shrink-0 self-start sm:self-auto"
            >
              <span>Demander un devis en {currentCategory.name.toLowerCase()}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Corps de la slide */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Prestations (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-[#3d5040] leading-relaxed mb-6 font-medium">
                  {currentCategory.shortDescription}
                </p>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1f3021]">
                    Prestations régulières :
                  </h3>
                  <ul className="space-y-2.5">
                    {currentCategory.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2f4231] font-medium">
                        <CheckCircle2 size={16} className="text-[#2563b0] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 hidden lg:block">
                <p className="text-xs text-[#4f6452] mb-3">
                  Besoin d&apos;un conseil ou d&apos;une intervention dans le Grésivaudan ?
                </p>
                <Link
                  href="/#contact"
                  className="text-xs font-bold text-[#2563b0] hover:text-[#1d4f96] inline-flex items-center gap-1.5"
                >
                  <span>Écrire à notre artisan référent</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Photos (8 cols) */}
            <div className="lg:col-span-8">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1f3021]">
                  Chantiers récents en {currentCategory.name.toLowerCase()} :
                </h3>
                <span className="text-xs text-[#4f6452] font-medium">
                  {currentCategory.photos.length} photos
                </span>
              </div>

              <div
                className={`grid gap-4 sm:gap-5 ${
                  currentCategory.photos.length <= 2 || currentCategory.photos.length === 4
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                }`}
              >
                {currentCategory.photos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    className="group rounded-2xl overflow-hidden bg-neutral-50 border border-[#cedec5] shadow-2xs hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-200">
                      <Image
                        src={photo.imageSrc}
                        alt={photo.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium">
                          <MapPin size={10} className="text-[#f1b82d]" />
                          {photo.location}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1f3021] leading-snug group-hover:text-[#2563b0] transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-[11px] text-[#4f6452] mt-1 line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination basse */}
          <div className="mt-8 pt-6 border-t border-[#dde8d5] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1f3021] hover:text-[#2563b0] transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Précédent :</span>
              <span>{prevCategory.name}</span>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  aria-label={`Aller au domaine ${cat.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#2563b0]"
                      : "w-2.5 bg-[#bbcda8] hover:bg-[#2563b0]/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1f3021] hover:text-[#2563b0] transition-colors cursor-pointer"
            >
              <span>{nextCategory.name}</span>
              <span className="hidden sm:inline">: Suivant</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
