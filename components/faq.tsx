"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Brauche ich technisches Wissen?",
      answer:
        "Nein! BusLotse ist so einfach wie Online-Banking. Wenn Sie E-Mails schreiben können, können Sie auch BusLotse bedienen. Die Bedienung ist selbsterklärend und intuitiv.",
    },
    {
      question: "Funktioniert es auch auf meinem Handy?",
      answer:
        "Ja! BusLotse funktioniert auf Computern, Tablets und Smartphones – egal ob Apple oder Android. Sie brauchen nur einen Internet-Browser.",
    },
    {
      question: "Was ist, wenn ich Hilfe brauche?",
      answer:
        "Wir helfen Ihnen gerne! Per E-Mail oder Telefon – auf Deutsch und verständlich erklärt. Bei Premium-Tarifen haben Sie Prioritäts-Support.",
    },
    {
      question: "Sind meine Daten sicher?",
      answer:
        "Absolut! Ihre Daten werden verschlüsselt in Deutschland gespeichert. Wir erfüllen alle DSGVO-Anforderungen und machen regelmäßige Backups.",
    },
    {
      question: "Kann ich erst mal testen?",
      answer:
        "Klar! 14 Tage kostenlos, ohne Kreditkarte. Einfach anmelden und alle Funktionen ausprobieren. Keine automatische Verlängerung.",
    },
    {
      question: "Was passiert mit meinen Daten, wenn ich kündige?",
      answer:
        "Sie können Ihre Daten jederzeit exportieren. Nach der Kündigung werden alle Daten nach 30 Tagen endgültig gelöscht. Sie behalten die volle Kontrolle.",
    },
    {
      question: "Wie schnell kann ich starten?",
      answer:
        "In 5 Minuten! Einfach registrieren, Verein anlegen und loslegen. Die erste Fahrzeuganlage dauert keine 2 Minuten.",
    },
    {
      question: "Gibt es Schulungen oder Anleitungen?",
      answer:
        "Ja! Wir bieten Video-Anleitungen und eine ausführliche Hilfe-Seite. Für Premium-Kunden gibt es auf Wunsch auch persönliche Einführungen per Video-Call.",
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
              Häufig gestellte Fragen
            </h2>
            <p
              className="text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Antworten auf die wichtigsten Fragen
            </p>
          </div>

          {/* FAQ items */}
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative mb-4 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200">
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 fill-indigo-500 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-indigo-200/65">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

