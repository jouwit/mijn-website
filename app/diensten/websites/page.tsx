import type { Metadata } from "next";
import Header from "../../../components/Header";

export const metadata: Metadata = {
  title: "Websitebeheer & Onderhoud in Almelo, Enschede & Twente",
  description:
    "Technisch websitebeheer, updates, beveiliging, back-ups en snelle probleemoplossing voor bestaande websites in Almelo, Enschede en Twente. Doorlopend beheer of hulp op uurbasis.",
};

const deliverables = [
  {
    icon: "🔄",
    title: "Technisch Onderhoud & Updates",
    description:
      "Regelmatige updates van je CMS (zoals WordPress), thema's en plug-ins zodat je website soepel blijft draaien en niet veroudert.",
  },
  {
    icon: "🛠",
    title: "Storingen & Foutmeldingen Oplossen",
    description:
      "Werkt een contactformulier niet meer, is de lay-out versprongen of geeft je site een foutmelding? We zoeken de oorzaak en lossen het op.",
  },
  {
    icon: "🔒",
    title: "Beveiliging & Back-ups",
    description:
      "Controle op SSL-certificaten (het groene slotje), spambeveiliging en regelmatige back-ups zodat je nooit gegevens kwijtraakt.",
  },
  {
    icon: "⚡",
    title: "Snelheid & Prestaties",
    description:
      "Optimalisatie van laadtijden en afbeeldingen zodat bezoekers op zowel mobiel als computer een snelle ervaring hebben.",
  },
  {
    icon: "🌐",
    title: "Domeinnaam, DNS & Hosting Hulp",
    description:
      "Hulp bij DNS-instellingen, e-mailkoppelingen (SPF/DKIM/DMARC) of het verhuizen van je bestaande website naar een snellere host.",
  },
  {
    icon: "✏️",
    title: "Kleine Tekst- & Beeldwijzigingen",
    description:
      "Geen tijd of zin om zelf teksten, openingstijden of foto's aan te passen? Stuur het door en wij verwerken het netjes op je site.",
  },
];

const steps = [
  {
    number: "01",
    title: "Stuur je vraag of probleem door",
    description:
      "Geef via het contactformulier aan om welke website het gaat en waar je tegenaan loopt of hulp bij zoekt.",
  },
  {
    number: "02",
    title: "Snelle check & helder voorstel",
    description:
      "We bekijken de situatie op afstand (of op locatie in Twente) en geven vooraf eerlijk aan wat er nodig is en wat het kost.",
  },
  {
    number: "03",
    title: "Oplossing & zorgeloos beheer",
    description:
      "We verhelpen het probleem of richten het periodieke onderhoud voor je in, zodat jouw website weer betrouwbaar online staat.",
  },
];

export default function WebsitesDienstPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* CENTRALE HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span>/</span>
            <a href="/#diensten" className="transition hover:text-white">
              Diensten
            </a>
            <span>/</span>
            <span className="text-blue-400">Websitebeheer &amp; Onderhoud</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold tracking-wider text-blue-200">
                DIENST 01 • BESTAANDE WEBSITES IN ALMELO, ENSCHEDE &amp; TWENTE
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Websitebeheer &amp;{" "}
              <span className="text-blue-400">Probleemoplossing.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Heb je al een website, maar loop je vast met updates,
              foutmeldingen, beveiliging of domeininstellingen? Jouw IT neemt het
              technische websitebeheer en onderhoud voor ondernemers in Almelo,
              Enschede en Twente uit handen — als vast maandelijks beheer of
              voor losse probleemoplossing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Hulp bij jouw website aanvragen →
              </a>

              <a
                href="/tarieven"
                className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Bekijk tarieven &amp; pakketten
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ Updates, beveiliging &amp; back-ups</span>
              <span>✓ Snelle hulp bij storingen</span>
              <span>✓ Vast beheer of los uurtarief</span>
              <span>✓ Onderhoud buiten piekuren mogelijk</span>
            </div>
          </div>
        </div>
      </section>

      {/* WAT WE DOEN */}
      <section id="wat-we-doen" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Onderhoud &amp; Support
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Waarmee we jouw website ondersteunen
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Geen ingewikkeld webdesign-traject, maar praktische technische hulp
              en betrouwbaar beheer voor je bestaande site.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* TRANSPARANTIE OVER BEHEER & KOSTEN */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Flexibel geregeld
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Doorlopend websitebeheer of losse hulp per uur
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Wil je volledig ontzorgd worden met periodieke updates,
                  monitoring, back-ups en kleine wijzigingen? Kies dan voor ons
                  vaste maandelijkse websitebeheer (
                  <strong className="text-slate-900">€ 400 per maand</strong>).
                  Heb je alleen incidenteel hulp nodig bij een foutmelding of
                  DNS-instelling? Dan rekenen we gewoon{" "}
                  <strong className="text-slate-900">€ 45 per uur</strong>.
                </p>
              </div>
              <a
                href="/tarieven"
                className="shrink-0 rounded-xl bg-blue-700 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Alle tarieven bekijken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Werkwijze
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              In 3 stappen geregeld
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="inline-block rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
                  Stap {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOK */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-blue-700 p-8 text-white shadow-2xl shadow-blue-900/15 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                  Direct hulp nodig?
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Laat je website weer zonder zorgen draaien.
                </h2>
                <p className="mt-5 leading-8 text-blue-100">
                  Of het nu gaat om een eenmalige foutmelding of doorlopend
                  onderhoud in Almelo, Enschede en Twente: neem gerust contact op
                  voor eerlijk advies.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    Neem contact op →
                  </a>
                  <a
                    href="/tarieven"
                    className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Tarieven bekijken
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">
                <p className="font-semibold">Openingstijden &amp; Bereikbaarheid</p>
                <ul className="mt-4 space-y-2 text-sm text-blue-100">
                  <li className="flex justify-between gap-4">
                    <span>Maandag t/m vrijdag:</span>
                    <span className="font-medium text-white">
                      18:00 – 00:00 uur
                    </span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Zaterdag &amp; zondag:</span>
                    <span className="font-medium text-white">
                      08:00 – 18:00 uur
                    </span>
                  </li>
                </ul>
                <p className="mt-4 border-t border-white/15 pt-4 text-xs text-blue-200">
                  Onderhoud of werkzaamheden in de nacht nodig (bijv. om
                  bezoekers niet te hinderen)? Dat is enkel mogelijk in overleg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row">
            <div>
              <p className="text-xl font-bold">
                Jouw <span className="text-blue-400">IT</span>
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Websitebeheer • Computerhulp • Laptop Service • Advies
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <a href="/#diensten" className="hover:text-white">
                Diensten
              </a>
              <a href="/tarieven" className="hover:text-white">
                Tarieven
              </a>
              <a href="/#expertise" className="hover:text-white">
                Expertise
              </a>
              <a href="/#over" className="hover:text-white">
                Over ons
              </a>
              <a href="/#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-slate-500 md:flex-row">
            <p>© 2026 Jouw IT. Alle rechten voorbehouden.</p>
            <p>Websitebeheer • Computerhulp • Laptop Service • IT-Advies</p>
          </div>
        </div>
      </footer>
    </main>
  );
}