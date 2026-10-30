import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#d6e2cf] bg-white px-4 pt-12 pb-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
        {/* Col 1: Multitâche */}
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1f3021]">Multitâche</h3>
          <p className="max-w-xs text-xs leading-relaxed text-[#4f6452]">
            Plomberie, électricité, peinture et climatisation à Villard-Bonnot et dans tout le
            Grésivaudan.
          </p>
        </div>

        {/* Col 2: Contact */}
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1f3021]">Contact</h3>
          <div className="space-y-1 text-xs text-[#4f6452]">
            <p>Villard-Bonnot (38190)</p>
            <p>
              <a href="tel:0400000000" className="transition-colors hover:text-[#2563B0]">
                04 00 00 00 00
              </a>
            </p>
            <p>
              <a
                href="mailto:contact@multitache.com"
                className="transition-colors hover:text-[#2563B0]"
              >
                contact@multitache.com
              </a>
            </p>
          </div>
        </div>

        {/* Col 3: Navigation */}
        <div>
          <h3 className="mb-3 text-sm font-bold text-[#1f3021]">Navigation</h3>
          <ul className="space-y-1 text-xs text-[#4f6452]">
            <li>
              <Link href="#renovations" className="transition-colors hover:text-[#2563B0]">
                Nos services
              </Link>
            </li>
            <li>
              <Link href="#avis" className="transition-colors hover:text-[#2563B0]">
                Avis clients
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition-colors hover:text-[#2563B0]">
                Demande de devis
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition-colors hover:text-[#2563B0]">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/keystatic"
                className="text-neutral-400 transition-colors hover:text-[#2563B0]"
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
