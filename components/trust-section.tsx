export default function TrustSection() {
  const trustElements = [
    "Entwickelt in Deutschland",
    "DSGVO-konform",
    "Sichere Datenspeicherung",
    "Regelmäßige Backups",
    "Deutscher Support",
    "256-Bit Verschlüsselung",
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2
              className="pb-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl"
              data-aos="fade-up"
            >
              Vereine vertrauen auf BusLotse
            </h2>
            <p
              className="text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Sicherheit und Datenschutz haben oberste Priorität
            </p>
          </div>

          {/* Trust badges */}
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {trustElements.map((element, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <svg
                  className="h-8 w-8 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <p className="text-center text-sm font-medium text-gray-200">
                  {element}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

