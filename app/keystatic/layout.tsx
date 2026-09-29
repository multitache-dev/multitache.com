import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import KeystaticApp from "./keystatic";

export default function RootLayout() {
  return (
    <div className="relative min-h-screen">
      <KeystaticApp />
      <Link
        href="/"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Retour au site
      </Link>
    </div>
  );
}
