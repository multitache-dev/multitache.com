import Link from "next/link";
import { Star } from "lucide-react";

export default function GoogleReviewsBadge() {
  return (
    <Link
      href="/#avis"
      aria-label="Voir les avis Google"
      className="fixed bottom-6 left-6 z-50 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#d6e2cf] inline-flex items-center gap-3 cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
    >
      <div className="bg-[#f1b82d] text-[#1f3021] font-extrabold text-sm w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-2xs">
        4.8
      </div>

      <div className="flex flex-col items-start leading-none">
        <div className="flex items-center gap-0.5 mb-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={12} className="fill-[#f1b82d] text-[#f1b82d]" />
          ))}
        </div>
        <span className="text-xs font-semibold text-[#1f3021]">Avis Google</span>
        <span className="text-[11px] text-neutral-500">27 avis clients</span>
      </div>
    </Link>
  );
}
