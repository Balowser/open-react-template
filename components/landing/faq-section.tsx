import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "Wir helfen Ihnen gerne! Per E-Mail oder Telefon – auf Deutsch und verständlich erklärt. Bei Premium-Tarifen haben Sie Prioritäts-Support. Unser deutscher Support steht Ihnen bei Fragen zur Verfügung.",
  },
  {
    question: "Sind meine Daten sicher?",
    answer:
      "Absolut! Ihre Daten werden verschlüsselt in Deutschland gespeichert. Wir erfüllen alle DSGVO-Anforderungen und machen regelmäßige Backups. Ihre Daten bleiben in Deutschland und werden mit 256-Bit Verschlüsselung geschützt.",
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

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Antworten auf die wichtigsten Fragen
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

