import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const targetGroups = [
  {
    icon: (
      <svg
        className="h-10 w-10 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Für Vereinsvorstände",
    description:
      "Behalten Sie den Überblick über Ihre gesamte Flotte. Sehen Sie auf einen Blick: Welche Wartungen stehen an? Wo gibt es Engpässe? Alle wichtigen Kennzahlen immer aktuell.",
  },
  {
    icon: (
      <svg
        className="h-10 w-10 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Für Fahrdienstkoordinatoren",
    description:
      "Schichten planen war noch nie so einfach. Sehen Sie direkt, wer verfügbar ist und ob alle Papiere gültig sind. Keine Telefonlisten mehr – alles digital und aktuell.",
  },
  {
    icon: (
      <svg
        className="h-10 w-10 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    title: "Für Fahrer",
    description:
      "Einfach am Handy: Verfügbarkeit eintragen, Abfahrtskontrolle ausfüllen, Mängel mit Foto melden. Fertig in 2 Minuten. Keine komplizierten Formulare mehr.",
  },
];

export default function TargetGroupsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Für wen ist BusLotse?
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {targetGroups.map((group, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <div className="mb-4">{group.icon}</div>
                <CardTitle className="text-xl">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{group.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

