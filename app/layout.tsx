import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "MULTITÂCHE - Artisan dans le bâtiment dans le Grésivaudan",
  description:
    "Plomberie, électricité, peinture et climatisation : une seule équipe pour toute votre rénovation dans le Grésivaudan (Villard-Bonnot, Brignoud, Froges, Crolles, Le Versoud).",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="font-sans antialiased" suppressHydrationWarning>
      <body
        className="bg-[#e8efe4] text-[#1f3021] selection:bg-[#f1b82d]/30"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
