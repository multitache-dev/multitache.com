import Image from "next/image";

export default function AboutMap() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-32"
    >
      {/* Grid Pattern Overlay (Inspiration Image 1) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91384 0 2.45351 0.539673 2.45351 1.22676C2.45351 1.91384 1.91384 2.45351 1.22676 2.45351C0.539673 2.45351 0 1.91384 0 1.22676C0 0.539673 0.539673 0 1.22676 0Z' fill='%231f3021' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* ── Left Column: Text (Inspiration Image 2 & 1) ── */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-serif text-lg tracking-wide text-[#3d5040] italic md:text-xl">
            Un habitat beau, fonctionnel et durable.
          </p>

          <h2 className="mb-8 font-serif text-4xl leading-[1.15] text-[#1f3021] sm:text-5xl lg:text-[3.5rem]">
            Rénovez votre bien, <br />
            <span className="font-light italic">selon vos envies !</span>
          </h2>

          <div className="mb-10 max-w-lg space-y-4 text-base leading-relaxed font-light text-[#4f6452] sm:text-lg">
            <p>
              Depuis 2003, <strong className="font-semibold text-[#1f3021]">Multitâche</strong>{" "}
              accompagne les particuliers dans leurs travaux de rénovation et intervient dans
              l'ensemble du <strong className="font-semibold text-[#1f3021]">Grésivaudan</strong>.
            </p>
            <p>
              Un seul interlocuteur du premier coup de fil à la remise des clés, un devis clair et
              personnalisé, et des chantiers irréprochables.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-block rounded-xl border border-[#1f3021] px-8 py-3.5 font-medium tracking-wide text-[#1f3021] transition-colors duration-300 hover:bg-[#1f3021] hover:text-white"
            >
              Je veux rénover un bien
            </a>
          </div>
        </div>

        {/* ── Right Column: Bento Photo Collage (Inspiration Image 2) ── */}
        <div className="relative flex h-[500px] w-full gap-4 sm:gap-6 md:h-[600px] lg:h-[700px]">
          {/* Left Col of Collage */}
          <div className="flex h-full w-1/2 flex-col gap-4 pt-10 sm:gap-6 lg:pt-20">
            <div className="group relative w-full flex-grow overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl sm:rounded-[3rem]">
              <Image
                src="/images/hands_electrician.jpg"
                alt="Electricité"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[35%] w-full overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src="/images/hands_painting.jpg"
                alt="Peinture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Col of Collage */}
          <div className="flex h-full w-1/2 flex-col gap-4 pb-10 sm:gap-6 lg:pb-20">
            <div className="group relative h-[45%] w-full overflow-hidden rounded-t-full rounded-b-[2rem] border-4 border-white shadow-lg sm:rounded-b-[3rem]">
              <Image
                src="/images/hands_ac_heat_pump.jpg"
                alt="Climatisation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group relative w-full flex-grow overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl sm:rounded-[3rem]">
              <Image
                src="/images/hands_plumbing.jpg"
                alt="Plomberie"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
