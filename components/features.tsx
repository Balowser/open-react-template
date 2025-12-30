import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              Alles, was Ihr Verein braucht
            </h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-2">
            {/* Feature 1: Fahrzeugverwaltung */}
            <article data-aos="fade-up">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                <svg
                  className="h-6 w-6 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Fahrzeugverwaltung
              </h3>
              <p className="mb-4 text-indigo-200/65">
                Alle Ihre Busse auf einen Blick. Automatische Erinnerung an TÜV und Wartungen. Digitales Fahrtenbuch – einfach am Handy ausfüllen. Mängelmeldungen mit Foto direkt aus dem Fahrzeug.
              </p>
              <ul className="space-y-2 text-sm text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Alle Busse auf einen Blick</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Automatische TÜV-Erinnerungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Digitales Fahrtenbuch am Handy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Mängelmeldungen mit Foto</span>
                </li>
              </ul>
            </article>

            {/* Feature 2: Fahrereinteilung */}
            <article data-aos="fade-up" data-aos-delay={100}>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                <svg
                  className="h-6 w-6 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Fahrereinteilung leicht gemacht
              </h3>
              <p className="mb-4 text-indigo-200/65">
                Wer hat wann Zeit? Fahrer tragen selbst ihre Verfügbarkeit ein. Übersichtlicher Wochenplan – wer fährt welchen Bus? Automatische Prüfung: Sind P-Schein und G25 noch gültig? Benachrichtigungen direkt aufs Handy.
              </p>
              <ul className="space-y-2 text-sm text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Fahrer tragen Verfügbarkeit selbst ein</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Übersichtlicher Wochenplan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Automatische P-Schein & G25 Prüfung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Handy-Benachrichtigungen</span>
                </li>
              </ul>
            </article>

            {/* Feature 3: Wartung & Sicherheit */}
            <article data-aos="fade-up" data-aos-delay={200}>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                <svg
                  className="h-6 w-6 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Wartung & Sicherheit
              </h3>
              <p className="mb-4 text-indigo-200/65">
                Nie wieder TÜV vergessen – Sie werden rechtzeitig erinnert. Tägliche Abfahrtskontrolle am Tablet oder Smartphone. Alle Wartungen und Reparaturen dokumentiert. Rechnungen hochladen und archivieren.
              </p>
              <ul className="space-y-2 text-sm text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Rechtzeitige TÜV-Erinnerungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Digitale Abfahrtskontrolle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Wartungshistorie komplett</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Rechnungs-Archiv</span>
                </li>
              </ul>
            </article>

            {/* Feature 4: Für jeden Verein die richtige Größe */}
            <article data-aos="fade-up" data-aos-delay={300}>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                <svg
                  className="h-6 w-6 fill-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
              </div>
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                Für jeden Verein die richtige Größe
              </h3>
              <p className="mb-4 text-indigo-200/65">
                Basis-Tarif perfekt für kleine Vereine (bis 2 Fahrzeuge). Premium-Tarif mit unbegrenzt vielen Fahrzeugen und Fahrern. Seniorenfreundlich: Große Schriften, klare Bedienung. Funktioniert überall: Am Computer, Tablet und Smartphone.
              </p>
              <ul className="space-y-2 text-sm text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Basis-Tarif für kleine Vereine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Premium für unbegrenzte Fahrzeuge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Seniorenfreundliche Bedienung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-indigo-500">✓</span>
                  <span>Auf allen Geräten nutzbar</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
