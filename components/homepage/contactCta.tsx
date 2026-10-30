import Link from "next/link";

export default function ContactCta() {
  return (
    <section id="contact" className="w-full bg-transparent px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[28px] border border-[#a8be95]/70 bg-[#bbcda8] p-8 text-center shadow-sm sm:rounded-[34px] sm:p-12 md:p-14">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1f3021] sm:text-3xl md:text-4xl">
            Nous contacter
          </h2>

          <p className="mx-auto mb-6 max-w-lg text-xs leading-relaxed font-medium text-[#2f4231] sm:text-sm md:text-base">
            Une question, un projet ou une urgence ? Écrivez-nous : votre message part directement à
            l&apos;artisan concerné.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-block transform rounded-full bg-[#316bb3] px-6 py-3 text-xs font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#255894] sm:px-8 sm:text-sm"
            >
              Accéder au formulaire de contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
