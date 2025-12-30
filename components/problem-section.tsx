export default function ProblemSection() {
  const problems = [
    "Zettelwirtschaft bei Fahrtenbüchern und TÜV-Terminen",
    "Unübersichtliche Excel-Tabellen für die Fahrereinteilung",
    "Vergessene Wartungstermine und abgelaufene Führerscheine",
    "Telefonketten, um Fahrer für die nächste Woche zu finden",
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
              Kennen Sie das?
            </h2>
          </div>

          {/* Problems list */}
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 fill-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-200">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

