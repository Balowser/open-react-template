import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
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
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "Fahrzeugverwaltung",
    description:
      "Alle Ihre Busse auf einen Blick. Automatische Erinnerung an TÜV und Wartungen. Digitales Fahrtenbuch – einfach am Handy ausfüllen. Mängelmeldungen mit Foto direkt aus dem Fahrzeug.",
    features: [
      "Alle Busse auf einen Blick",
      "Automatische TÜV-Erinnerungen",
      "Digitales Fahrtenbuch am Handy",
      "Mängelmeldungen mit Foto",
    ],
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Fahrereinteilung leicht gemacht",
    description:
      "Wer hat wann Zeit? Fahrer tragen selbst ihre Verfügbarkeit ein. Übersichtlicher Wochenplan – wer fährt welchen Bus? Automatische Prüfung: Sind P-Schein und G25 noch gültig? Benachrichtigungen direkt aufs Handy.",
    features: [
      "Fahrer tragen Verfügbarkeit selbst ein",
      "Übersichtlicher Wochenplan",
      "Automatische P-Schein & G25 Prüfung",
      "Handy-Benachrichtigungen",
    ],
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Wartung & Sicherheit",
    description:
      "Nie wieder TÜV vergessen – Sie werden rechtzeitig erinnert. Tägliche Abfahrtskontrolle am Tablet oder Smartphone. Alle Wartungen und Reparaturen dokumentiert. Rechnungen hochladen und archivieren.",
    features: [
      "Rechtzeitige TÜV-Erinnerungen",
      "Digitale Abfahrtskontrolle",
      "Wartungshistorie komplett",
      "Rechnungs-Archiv",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alles, was Ihr Verein braucht
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-green-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

