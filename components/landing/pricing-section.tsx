import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Basis",
    price: "9",
    period: "pro Monat",
    description: "Perfekt für kleine Vereine",
    badge: "Für Starter",
    popular: false,
    features: [
      "Bis 2 Fahrzeuge",
      "Bis 8 Fahrer",
      "Alle Grundfunktionen",
      "Wartungsverwaltung",
      "Digitale Abfahrtskontrolle",
      "E-Mail Support",
      "DSGVO-konform",
    ],
  },
  {
    name: "Premium",
    price: "29",
    period: "pro Monat",
    description: "Für wachsende Vereine",
    badge: "Beliebt",
    popular: true,
    features: [
      "Unbegrenzt Fahrzeuge",
      "Unbegrenzt Fahrer",
      "Alle Funktionen",
      "Automatische Dienstplanung",
      "Erweiterte Berichte",
      "Prioritäts-Support",
      "Telefon-Support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Einfache, faire Preise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            14 Tage kostenlos testen – keine Kreditkarte nötig
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-2 ${
                plan.popular
                  ? "border-indigo-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}
              {!plan.popular && (
                <CardHeader>
                  <span className="text-sm font-medium text-gray-500">
                    {plan.badge}
                  </span>
                </CardHeader>
              )}
              <CardHeader className={plan.popular ? "" : "pt-6"}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}€
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="#signup">Jetzt starten</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>14 Tage kostenlos testen</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Keine Kreditkarte erforderlich</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Jederzeit kündbar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

