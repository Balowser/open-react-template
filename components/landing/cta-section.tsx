import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-indigo-600 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bereit für weniger Papierkram?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
            Starten Sie noch heute – in 5 Minuten eingerichtet, keine
            Vorkenntnisse nötig.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full bg-white text-indigo-600 hover:bg-gray-50 sm:w-auto"
            >
              <Link href="#signup">Kostenlos testen</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="w-full border-2 border-white text-white hover:bg-indigo-700 sm:w-auto"
            >
              <Link href="#demo">Demo ansehen</Link>
            </Button>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-6 text-sm text-indigo-100">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
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
              <span>14 Tage kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
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
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
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
              <span>Keine Kreditkarte nötig</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
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
              <span>DSGVO-konform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

