export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12">
            <h1
              className="pb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl lg:text-6xl"
              data-aos="fade-up"
            >
              Ihr Bürgerbus. Einfach organisiert.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-xl leading-relaxed text-gray-300 md:text-2xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Die übersichtliche Software für Ihren Verein. Fahrzeuge verwalten, Fahrer einteilen, Wartungen im Blick behalten – alles an einem Ort.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    Kostenlos testen
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn inline-flex w-full items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-8 py-4 text-base font-medium text-gray-200 backdrop-blur-sm transition-all hover:border-gray-600 hover:bg-gray-800 sm:w-auto"
                    href="#0"
                  >
                    Demo ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
