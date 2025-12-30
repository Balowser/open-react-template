export default function WhyChooseUs() {
  const advantages = [
    {
      icon: (
        <svg
          className="h-6 w-6 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Einfach zu bedienen",
      text: "Keine Schulung nötig – sofort loslegen. Funktioniert auf jedem Gerät. Große Schrift, klare Buttons. Deutscher Support bei Fragen.",
      bullets: [
        "Keine Schulung nötig",
        "Auf jedem Gerät",
        "Große Schrift & klare Buttons",
        "Deutscher Support",
      ],
    },
    {
      icon: (
        <svg
          className="h-6 w-6 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Speziell für Bürgerbusvereine",
      text: "Entwickelt von jemandem, der Ihre Bedürfnisse kennt. Alle wichtigen Funktionen an einem Ort. Erfüllt rechtliche Anforderungen (TÜV, Führerscheine, etc.). Ihre Daten bleiben in Deutschland.",
      bullets: [
        "Entwickelt für Ihre Bedürfnisse",
        "Alle Funktionen an einem Ort",
        "Erfüllt rechtliche Anforderungen",
        "Daten bleiben in Deutschland",
      ],
    },
    {
      icon: (
        <svg
          className="h-6 w-6 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.38-1.9 1.38-1.61 0-2.5-.83-2.6-2.05h-2.2c.09 2.19 1.9 3.42 4.8 3.9V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
      title: "Fair & Transparent",
      text: "Kleine Vereine zahlen weniger. Keine versteckten Kosten. 14 Tage kostenlos testen. Monatlich kündbar.",
      bullets: [
        "Faire Preise für kleine Vereine",
        "Keine versteckten Kosten",
        "14 Tage gratis testen",
        "Monatlich kündbar",
      ],
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
              Gemacht für Bürgerbus-Vereine
            </h2>
            <p
              className="text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Drei gute Gründe für BusLotse
            </p>
          </div>

          {/* Advantages grid */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-3">
            {advantages.map((advantage, index) => (
              <article
                key={index}
                className="relative rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                  {advantage.icon}
                </div>
                <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                  {advantage.title}
                </h3>
                <p className="mb-4 text-indigo-200/65">{advantage.text}</p>
                <ul className="space-y-2 text-sm text-indigo-200/65">
                  {advantage.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-indigo-500">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

