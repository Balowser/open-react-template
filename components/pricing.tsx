export default function Pricing() {
  const plans = [
    {
      name: "Basis",
      price: "9",
      period: "pro Monat",
      subtext: "Perfekt für kleine Vereine",
      badge: "Für Starter",
      features: [
        "Bis 2 Fahrzeuge",
        "Bis 8 Fahrer",
        "Alle Grundfunktionen",
        "Wartungsverwaltung",
        "Digitale Abfahrtskontrolle",
        "E-Mail Support",
        "DSGVO-konform",
      ],
      cta: "Jetzt starten",
      popular: false,
    },
    {
      name: "Premium",
      price: "29",
      period: "pro Monat",
      subtext: "Für wachsende Vereine",
      badge: "Beliebt",
      features: [
        "Unbegrenzt Fahrzeuge",
        "Unbegrenzt Fahrer",
        "Alle Funktionen",
        "Automatische Dienstplanung",
        "Erweiterte Berichte",
        "Prioritäts-Support",
        "Telefon-Support",
      ],
      cta: "Jetzt starten",
      popular: true,
    },
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
              Einfache, faire Preise
            </h2>
            <p
              className="text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              14 Tage kostenlos testen – keine Kreditkarte nötig
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border p-8 backdrop-blur-sm ${
                  plan.popular
                    ? "border-indigo-500/50 bg-gray-900/70 shadow-lg shadow-indigo-500/10"
                    : "border-gray-800 bg-gray-900/50"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-indigo-500 px-4 py-1 text-sm font-medium text-white">
                      {plan.badge}
                    </span>
                  </div>
                )}
                {!plan.popular && (
                  <div className="mb-4">
                    <span className="rounded-full bg-gray-800/40 px-3 py-1 text-sm text-indigo-200/65">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="mb-2 font-nacelle text-2xl font-semibold text-gray-200">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-indigo-200/65">{plan.subtext}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-200">
                      {plan.price}€
                    </span>
                    <span className="text-indigo-200/65">{plan.period}</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 fill-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="text-indigo-200/65">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#0"
                  className={`block w-full rounded-lg px-6 py-3 text-center font-medium transition-all ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border border-gray-700 bg-gray-800/50 text-gray-200 hover:border-gray-600 hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Trial notice */}
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-indigo-200/65">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>14 Tage kostenlos testen</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>Keine Kreditkarte erforderlich</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

