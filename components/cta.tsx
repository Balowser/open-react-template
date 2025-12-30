import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="pb-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl"
              data-aos="fade-up"
            >
              Bereit für weniger Papierkram?
            </h2>
            <p
              className="mb-10 text-lg text-gray-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Starten Sie noch heute – in 5 Minuten eingerichtet, keine Vorkenntnisse nötig.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="group mb-4 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl sm:mb-0 sm:w-auto"
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
                  className="inline-flex w-full items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-8 py-4 text-base font-medium text-gray-200 backdrop-blur-sm transition-all hover:border-gray-600 hover:bg-gray-800 sm:w-auto"
                  href="#0"
                >
                  Demo ansehen
                </a>
              </div>
            </div>
            {/* Trust badges */}
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>14 Tage kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>Jederzeit kündbar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>Keine Kreditkarte nötig</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>DSGVO-konform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
