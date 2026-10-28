"use client";

import { useEffect } from "react";

/**
 * Observe tous les h2.section-title dans le DOM et
 * ajoute la classe CSS "anim-in" quand ils entrent dans le viewport.
 */
export default function SectionTitleObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("h2.section-title");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
