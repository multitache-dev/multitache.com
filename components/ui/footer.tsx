import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#d6e2cf] pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        {/* Col 1: Multitâche */}
        <div>
          <h3 className="font-bold text-sm text-[#1f3021] mb-3">Multitâche</h3>
          <p className="text-xs text-[#4f6452] leading-relaxed max-w-xs">
            Plomberie, électricité, peinture et climatisation à Villard-Bonnot et dans tout le
            Grésivaudan.
          </p>
        </div>

        {/* Col 2: Contact */}
        <div>
          <h3 className="font-bold text-sm text-[#1f3021] mb-3">Contact</h3>
          <div className="space-y-1 text-xs text-[#4f6452]">
            <p>Villard-Bonnot (38190)</p>
            <p>
              <a href="tel:0400000000" className="hover:text-[#2563B0] transition-colors">
                04 00 00 00 00
              </a>
            </p>
            <p>
              <a
                href="mailto:contact@multitache.com"
                className="hover:text-[#2563B0] transition-colors"
              >
                contact@multitache.com
              </a>
            </p>
          </div>
        </div>

        {/* Col 3: Navigation */}
        <div>
          <h3 className="font-bold text-sm text-[#1f3021] mb-3">Navigation</h3>
          <ul className="space-y-1 text-xs text-[#4f6452]">
            <li>
              <Link href="#renovations" className="hover:text-[#2563B0] transition-colors">
                Nos services
              </Link>
            </li>
            <li>
              <Link href="#avis" className="hover:text-[#2563B0] transition-colors">
                Avis clients
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#2563B0] transition-colors">
                Demande de devis
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#2563B0] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/keystatic"
                className="hover:text-[#2563B0] transition-colors text-neutral-400"
              >
                Espace admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
