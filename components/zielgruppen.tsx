export default function Zielgruppen() {
  const targetGroups = [
    {
      icon: (
        <svg
          className="h-6 w-6 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
        </svg>
      ),
      title: "Für Vereinsvorstände",
      text: "Behalten Sie den Überblick über Ihre gesamte Flotte. Sehen Sie auf einen Blick: Welche Wartungen stehen an? Wo gibt es Engpässe? Alle wichtigen Kennzahlen immer aktuell.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </svg>
      ),
      title: "Für Fahrdienstkoordinatoren",
      text: "Schichten planen war noch nie so einfach. Sehen Sie direkt, wer verfügbar ist und ob alle Papiere gültig sind. Keine Telefonlisten mehr – alles digital und aktuell.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 fill-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      title: "Für Fahrer",
      text: "Einfach am Handy: Verfügbarkeit eintragen, Abfahrtskontrolle ausfüllen, Mängel mit Foto melden. Fertig in 2 Minuten. Keine komplizierten Formulare mehr.",
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
              Für wen ist BusLotse?
            </h2>
          </div>

          {/* Target groups grid */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-3">
            {targetGroups.map((group, index) => (
              <article
                key={index}
                className="relative rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                  {group.icon}
                </div>
                <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                  {group.title}
                </h3>
                <p className="text-indigo-200/65">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

