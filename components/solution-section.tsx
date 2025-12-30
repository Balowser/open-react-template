export default function SolutionSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="pb-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl"
              data-aos="fade-up"
            >
              Mit BusLotse wird alles einfacher
            </h2>
            <p
              className="text-lg text-gray-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Ohne Papierkram, ohne Chaos, ohne technisches Vorwissen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

