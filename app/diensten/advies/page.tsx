import type { Metadata } from "next";
import Header from "../../../components/Header";

export const metadata: Metadata = {
  title: "Onafhankelijk IT-Advies & Probleemoplossing in Twente",
  description:
    "Eerlijk aankoopadvies voor laptops, thuisnetwerk & wifi verbeteren en slimme back-upoplossingen in Almelo, Enschede en Twente. In begrijpelijke taal.",
};

const deliverables = [
  {
    icon: "💻",
    title: "Onafhankelijk Aankoopadvies",
    description:
      "Op zoek naar een nieuwe laptop, desktop, monitor of printer? We adviseren eerlijk op basis van jouw gebruik en budget — zonder verkooppraatjes.",
  },
  {
    icon: "📶",
    title: "Wifi & Thuisnetwerk Verbeteren",
    description:
      "Slecht bereik op zolder, op kantoor of in de tuin? We brengen je netwerk in kaart en adviseren of installeren een stabiele wifi-oplossing (zoals Mesh).",
  },
  {
    icon: "☁️",
    title: "Slimme Back-up & Cloudopslag",
    description:
      "Voorkom dat je belangrijke documenten of dierbare foto's kwijtraakt. We richten een overzichtelijke back-up in (lokaal of in de cloud).",
  },
  {
    icon: "🔐",
    title: "Online Veiligheid & Wachtwoordbeheer",
    description:
      "Hulp bij het veilig instellen van tweestapsverificatie (2FA), wachtwoordmanagers en het herkennen van phishing of verdachte berichten.",
  },
  {
    icon: "🖥️",
    title: "Thuiswerkplek & Kantoor Inrichten",
    description:
      "Advies en installatie voor een ergonomische en betrouwbare werkplek met docking station, extra schermen, zakelijke e-mail en randapparatuur.",
  },
  {
    icon: "🧩",
    title: "Second Opinion & Softwarekeuze",
    description:
      "Twijfel je over een dure reparatieofferte of welk software- of Microsoft 365-pakket het beste past bij jouw situatie? Wij kijken eerlijk met je mee.",
  },
];

const steps = [
  {
    number: "01",
    title: "Deel je vraag of situatie",
    description:
      "Vertel ons via het contactformulier waar je over twijfelt, wat je wilt aanschaffen of welk probleem je wilt oplossen.",
  },
  {
    number: "02",
    title: "Eerlijk & begrijpelijk advies",
    description:
      "We denken met je mee in gewone mensentaal en geven concrete aanbevelingen die echt passen bij jouw wensen en budget.",
  },
  {
    number: "03",
    title: "Hulp bij aanschaf & installatie",
    description:
      "Wil je dat we de nieuwe apparatuur of instellingen ook direct voor je aansluiten en gebruiksklaar maken? Dat regelen we meteen.",
  },
];

export default function AdviesDienstPage() {
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
            <span className="text-blue-400">
              Advies &amp; Probleemoplossing
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold tracking-wider text-blue-200">
                DIENST 03 • EERLIJK IT-ADVIES IN ALMELO, ENSCHEDE &amp; TWENTE
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Advies &amp;{" "}
              <span className="text-blue-400">Probleemoplossing.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Zie je door de bomen het bos niet meer bij het kiezen van een
              nieuwe laptop, hapert je wifi steeds of wil je jouw bestanden en
              werkplek beter beveiligen? Jouw IT geeft onafhankelijk en
              praktisch IT-advies aan particulieren en ondernemers in Twente —
              zonder onnodige kosten of ingewikkelde vaktermen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Vraag persoonlijk advies aan →
              </a>

              <a
                href="/tarieven"
                className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Bekijk onze tarieven
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ 100% onafhankelijk advies</span>
              <span>✓ Gewoon in begrijpelijke taal</span>
              <span>✓ Ook hulp bij installatie</span>
              <span>✓ Lokaal in Almelo, Enschede &amp; Twente</span>
            </div>
          </div>
        </div>
      </section>

      {/* WAT WE DOEN */}
      <section id="wat-we-doen" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Meedenken &amp; Oplossen
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Waarmee we je kunnen adviseren
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Of je nu een nieuwe aankoop plant of een hardnekkig probleem in
              huis of op je werkplek wilt oplossen: wij zorgen voor een helder
              antwoord.
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
              Van vraag naar oplossing in 3 stappen
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
                  Even sparren?
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Stel je vraag en ontvang eerlijk advies.
                </h2>
                <p className="mt-5 leading-8 text-blue-100">
                  Twijfel je voor een aankoop of loop je ergens tegenaan? Stuur
                  gerust een berichtje — we denken graag met je mee in Almelo,
                  Enschede en omgeving.
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
                  Werkzaamheden in de nacht nodig (bijv. voor zakelijk onderhoud
                  of spoed)? Dat is enkel mogelijk in overleg.
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