import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./styles.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MULTITÂCHE - Artisan dans le bâtiment dans le Grésivaudan",
  description:
    "Plomberie, électricité, peinture et climatisation : une seule équipe pour toute votre rénovation dans le Grésivaudan (Villard-Bonnot, Brignoud, Froges, Crolles, Le Versoud).",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={cn("font-sans antialiased", jakarta.variable)}>
      <body className="bg-[#e8efe4] text-[#1f3021] selection:bg-[#f1b82d]/30">
        {children}
      </body>
    </html>
  );
}
