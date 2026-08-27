"use client";

import React, { useRef, useEffect, useState } from "react";
import { Phone, ClipboardList, HardHat } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Phone,
    label: "Étape 1",
    title: "Prise de contact",
    description:
      "Appelez-nous ou remplissez le formulaire. Un artisan échange avec vous pour cadrer votre projet — gratuitement et sans engagement.",
    tag: "Premier contact",
    accent: "#bbcda8",
    accentText: "#2e4a2f",
    position: "top", // above the wave
  },
  {
    id: 2,
    icon: ClipboardList,
    label: "Étape 2",
    title: "Devis & planification",
    description:
      "Votre interlocuteur unique se déplace, chiffre chaque poste et vous remet un devis détaillé. Planning et matériaux validés ensemble.",
    tag: "Devis sur mesure",
    accent: "#2563B0",
    accentText: "#ffffff",
    position: "bottom", // below the wave
  },
  {
    id: 3,
    icon: HardHat,
    label: "Étape 3",
    title: "Travaux & remise des clés",
    description:
      "Nos artisans interviennent à la date convenue. Chantier rangé chaque soir. Réception signée uniquement quand vous êtes pleinement satisfait.",
    tag: "Satisfaction garantie",
    accent: "#f1b82d",
    accentText: "#1f3021",
    position: "top", // above the wave
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return visible;
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<HTMLElement>, index * 180);
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : step.position === "top"
          ? "translateY(-24px)"
          : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Content card — positioned above or below */}
      {step.position === "top" ? (
        <>
          {/* Card above */}
          <div className="group w-full max-w-[260px] bg-white rounded-[22px] p-6 border border-[#e5edd9] shadow-[0_4px_24px_rgba(31,48,33,0.08)] hover:shadow-[0_8px_36px_rgba(31,48,33,0.14)] hover:border-[#bbcda8] transition-all duration-400 mb-6">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
              style={{
                background: `${step.accent}22`,
                color: step.accentText === "#ffffff" ? step.accent : step.accentText,
                border: `1px solid ${step.accent}44`,
              }}
            >
              {step.label}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-[#1f3021] mb-2 leading-snug">
              {step.title}
            </h3>
            <div className="w-8 h-[2.5px] rounded-full mb-3" style={{ background: step.accent }} />
            <p className="text-sm text-[#3d5040] leading-relaxed mb-4">{step.description}</p>
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                background: `${step.accent}15`,
                color: step.accentText === "#ffffff" ? step.accent : step.accentText,
              }}
            >
              ✓ {step.tag}
            </span>
          </div>

          {/* Dot node */}
          <div className="relative flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white z-10"
              style={{ background: step.accent }}
            >
              <Icon size={22} strokeWidth={1.8} style={{ color: step.accentText }} />
            </div>
          </div>

          {/* Spacer for bottom row */}
          <div className="flex-1" />
        </>
      ) : (
        <>
          {/* Dot node */}
          <div className="relative flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white z-10"
              style={{ background: step.accent }}
            >
              <Icon size={22} strokeWidth={1.8} style={{ color: step.accentText }} />
            </div>
          </div>

          {/* Card below */}
          <div className="group w-full max-w-[260px] bg-white rounded-[22px] p-6 border border-[#e5edd9] shadow-[0_4px_24px_rgba(31,48,33,0.08)] hover:shadow-[0_8px_36px_rgba(31,48,33,0.14)] hover:border-[#bbcda8] transition-all duration-400 mt-6">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
              style={{
                background: `${step.accent}22`,
                color: step.accentText === "#ffffff" ? step.accent : step.accentText,
                border: `1px solid ${step.accent}44`,
              }}
            >
              {step.label}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-[#1f3021] mb-2 leading-snug">
              {step.title}
            </h3>
            <div className="w-8 h-[2.5px] rounded-full mb-3" style={{ background: step.accent }} />
            <p className="text-sm text-[#3d5040] leading-relaxed mb-4">{step.description}</p>
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                background: `${step.accent}15`,
                color: step.accentText === "#ffffff" ? step.accent : step.accentText,
              }}
            >
              ✓ {step.tag}
            </span>
          </div>

          <div className="flex-1" />
        </>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionVisible(true); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#4f6452] bg-[#eef5e8] border border-[#bbcda8]/50 px-4 py-1.5 rounded-full mb-5">
            Notre processus
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f3021] tracking-tight mb-4 leading-tight">
            Comment ça marche ?
          </h2>
          <p className="text-[#4f6452] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            De votre premier appel jusqu'à la remise des clés — un parcours fluide, transparent, et pensé pour votre sérénité.
          </p>
        </div>

        {/* ── Desktop: wave timeline ── */}
        <div className="hidden md:block">
          {/* SVG Wave connecting the 3 dots */}
          <div className="relative w-full" style={{ height: 520 }}>
            <svg
              viewBox="0 0 900 200"
              preserveAspectRatio="none"
              className="absolute inset-x-0 w-full pointer-events-none"
              style={{ top: "50%", transform: "translateY(-50%)", height: 200 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bbcda8" />
                  <stop offset="50%" stopColor="#2563B0" />
                  <stop offset="100%" stopColor="#f1b82d" />
                </linearGradient>
              </defs>
              {/* Wavy path passing through the 3 dot positions: ~150, 450, 750 */}
              <path
                d="M 150 100 C 260 40, 340 160, 450 100 C 560 40, 640 160, 750 100"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 5"
              />
            </svg>

            {/* 3 columns absolutely aligned with the wave dots */}
            <div className="absolute inset-0 grid grid-cols-3">
              {steps.map((step, i) => (
                <StepCard key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical stack ── */}
        <div className="md:hidden flex flex-col gap-8 relative">
          {/* Vertical wavy SVG */}
          <div className="absolute left-7 top-7 bottom-7 w-8 pointer-events-none">
            <svg
              viewBox="0 0 32 600"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGradV" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#bbcda8" />
                  <stop offset="50%" stopColor="#2563B0" />
                  <stop offset="100%" stopColor="#f1b82d" />
                </linearGradient>
              </defs>
              <path
                d="M 16 0 C 4 60, 28 120, 16 180 C 4 240, 28 300, 16 360 C 4 420, 28 480, 16 600"
                fill="none"
                stroke="url(#waveGradV)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 5"
              />
            </svg>
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            const mobileRef = useRef<HTMLDivElement>(null);
            const mobileVisible = useInView(mobileRef as React.RefObject<HTMLElement>, i * 180);

            return (
              <div
                key={step.id}
                ref={mobileRef}
                className="flex items-start gap-5 pl-1"
                style={{
                  opacity: mobileVisible ? 1 : 0,
                  transform: mobileVisible ? "translateX(0)" : "translateX(-16px)",
                  transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {/* Dot */}
                <div
                  className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-md ring-4 ring-white z-10"
                  style={{ background: step.accent }}
                >
                  <Icon size={22} strokeWidth={1.8} style={{ color: step.accentText }} />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-[20px] p-5 border border-[#e5edd9] shadow-[0_2px_16px_rgba(31,48,33,0.08)]">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3"
                    style={{
                      background: `${step.accent}22`,
                      color: step.accentText === "#ffffff" ? step.accent : step.accentText,
                    }}
                  >
                    {step.label}
                  </span>
                  <h3 className="text-base font-extrabold text-[#1f3021] mb-2">{step.title}</h3>
                  <div className="w-7 h-[2px] rounded-full mb-2.5" style={{ background: step.accent }} />
                  <p className="text-sm text-[#3d5040] leading-relaxed mb-3">{step.description}</p>
                  <span className="text-[10px] font-bold text-[#4f6452]">✓ {step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
