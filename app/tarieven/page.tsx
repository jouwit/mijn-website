import type { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Tarieven Computerhulp & Websitebeheer | Jouw IT (Almelo & Twente)",
  description:
    "Heldere en transparante tarieven van Jouw IT in Almelo, Enschede en Twente: computerhulp aan huis (€ 45/uur, no cure no pay) en websitebeheer (€ 400/maand).",
};

export default function TarievenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-300">
            Transparante Prijzen • Almelo, Enschede &amp; Twente
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Heldere tarieven, geen verrassingen.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Eerlijke prijzen van Jouw IT voor computerhulp, laptop opschonen,
            IT-advies en websitebeheer in Almelo, Enschede en omgeving.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Kaart 1: Computerhulp */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Particulier &amp; Klein Zakelijk
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Computerhulp &amp; Service
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Hulp aan huis of op afstand in Twente voor al je computer- en
                  laptopproblemen, opschonen, advies en installaties.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="text-3xl font-extrabold text-slate-900">
                    € 45
                    <span className="text-sm font-normal text-slate-500">
                      {" "}
                      / uur
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Inclusief btw (voorrijkosten in overleg)
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    ✓ Laptop of PC opschonen &amp; APK
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Trage systemen versnellen &amp; opschonen
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Wifi, printer, back-up &amp; aankoopadvies
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ No cure, no pay garantie
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href="/#contact"
                  className="block w-full rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
                >
                  Direct hulp aanvragen →
                </a>
              </div>
            </div>

            {/* Kaart 2: Websitebeheer (Uitgelicht) */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-blue-600 bg-blue-50/50 p-8 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                Populair voor ondernemers
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Zakelijk &amp; ZZP
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Websitebeheer Maandpakket
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Volledig ontzorgd technisch beheer, onderhoud, beveiliging en
                  snelle probleemoplossing voor je bestaande website.
                </p>
                <div className="mt-6 border-t border-blue-100 pt-6">
                  <p className="text-3xl font-extrabold text-slate-900">
                    € 400
                    <span className="text-sm font-normal text-slate-500">
                      {" "}
                      / maand
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Exclusief btw, maandelijks opzegbaar
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    ✓ Doorlopend onderhoud &amp; beveiligingsupdates
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Snelle hulp bij storingen &amp; foutmeldingen
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Back-ups, DNS &amp; hosting-ondersteuning
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Inclusief tekst- en inhoudswijzigingen
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href="/#contact"
                  className="block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Pakket starten →
                </a>
              </div>
            </div>
          </div>

          {/* EXTRA TOELICHTING */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="text-xl font-bold text-slate-900">
              Veelgestelde vragen over kosten
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Wat kost het opschonen van een laptop?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Een laptop opschonen of PC-APK valt onder ons uurtarief van{" "}
                  <strong className="text-slate-900">€ 45 per uur</strong> en
                  kost meestal gemiddeld 1 tot 1,5 uur, afhankelijk van de staat
                  van het systeem. Lukt het niet om het probleem te verhelpen? Dan
                  betaal je niets (no cure, no pay).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Hoe werkt zakelijke IT &amp; Microsoft 365?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Voor zakelijke ondersteuning, Microsoft 365 werkplekken of
                  migraties rekenen we óf het uurtarief van{" "}
                  <strong className="text-slate-900">€ 80 per uur</strong> óf een
                  vooraf afgesproken projectprijs — zonder logge
                  jaarcontracten. Bekijk ook{" "}
                  <a
                    href="/diensten/zakelijk"
                    className="font-semibold text-blue-700 underline hover:text-blue-800"
                  >
                    Zakelijke IT &amp; Cloud
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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