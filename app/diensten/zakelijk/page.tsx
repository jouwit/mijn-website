import type { Metadata } from "next";
import Header from "../../../components/Header";

export const metadata: Metadata = {
  title: "Zakelijke IT & Microsoft 365 Beheer (ZZP & Klein MKB)",
  description:
    "Professioneel Microsoft 365 beheer, moderne beveiliging (MFA) en zakelijke e-mail voor zzp'ers en ondernemers in Twente. Onderhoud buiten kantoortijden mogelijk.",
};

const deliverables = [
  {
    icon: "📧",
    title: "Microsoft 365 Beheer & Inrichting",
    description:
      "Professionele zakelijke e-mail op je eigen domein, Teams, SharePoint en OneDrive netjes ingericht en beheerd voor jou en je collega's.",
  },
  {
    icon: "🛡️",
    title: "Modern Security & MFA",
    description:
      "Beveiliging van bedrijfsaccounts met meervoudige verificatie (MFA), Conditional Access, anti-phishing en veilige e-mailinstellingen (SPF/DKIM/DMARC).",
  },
  {
    icon: "☁️",
    title: "Microsoft Azure & Cloud Advies",
    description:
      "Ondersteuning bij cloudomgevingen, toegangsbeheer (Entra ID) en het slim en kostenefficiënt inrichten van je zakelijke IT-infrastructuur.",
  },
  {
    icon: "💻",
    title: "Zakelijke Werkplekken & Intune",
    description:
      "Nieuwe zakelijke laptops gebruiksklaar maken, beheren via Microsoft Intune en zorgen dat apparaten voldoen aan beveiligingsrichtlijnen.",
  },
  {
    icon: "🔄",
    title: "E-mail & Data Migraties",
    description:
      "Zorgeloos overstappen van losse webmail of een oude provider naar Microsoft 365 zonder verlies van e-mails, agenda's of bestanden.",
  },
  {
    icon: "🌙",
    title: "Onderhoud Buiten Kantoortijden",
    description:
      "Migraties of ingrijpende wijzigingen nodig zonder dat je werkdag stilvalt? Wij voeren werkzaamheden uit in de avond, het weekend of in overleg 's nachts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Kennismaking & inventarisatie",
    description:
      "We bespreken hoe je huidige zakelijke IT, e-mail en beveiliging zijn ingericht en waar je tegenaan loopt.",
  },
  {
    number: "02",
    title: "Helder plan op maat",
    description:
      "Je krijgt een concreet en transparant voorstel zonder overbodige licenties — afgestemd op de schaal van jouw onderneming.",
  },
  {
    number: "03",
    title: "Uitvoering & doorlopende support",
    description:
      "We richten alles veilig in (buiten kantooruren indien gewenst) en blijven je vaste aanspreekpunt voor vragen en beheer.",
  },
];

export default function ZakelijkDienstPage() {
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
              Zakelijke IT &amp; Cloud (M365)
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold tracking-wider text-blue-200">
                DIENST 04 • VOOR ZZP&apos;ERS &amp; KLEIN MKB IN TWENTE
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Zakelijke IT &amp;{" "}
              <span className="text-blue-400">Cloud (M365).</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Als zzp&apos;er of kleine ondernemer wil je kunnen vertrouwen op
              veilige zakelijke e-mail, goed ingerichte cloudopslag en moderne
              beveiliging — zonder vast te zitten aan logge IT-contracten. Met
              professionele 2e lijn IT-expertise helpt Jouw IT je vooruit.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Zakelijke IT bespreken →
              </a>

              <a
                href="#wat-we-doen"
                className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Bekijk zakelijke oplossingen
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ Microsoft 365 &amp; Entra ID</span>
              <span>✓ Modern Security &amp; MFA</span>
              <span>✓ 2e lijn IT-expertise</span>
              <span>✓ Onderhoud buiten kantoortijden mogelijk</span>
            </div>
          </div>
        </div>
      </section>

      {/* WAT WE DOEN */}
      <section id="wat-we-doen" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Cloud &amp; Beveiliging
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Zakelijke ondersteuning op maat
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Van een veilige start met Microsoft 365 tot het opschonen en
              beveiligen van een bestaande zakelijke omgeving.
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
              Persoonlijk en flexibel geregeld
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
                  Zakelijk sparringpartner nodig?
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Maak jouw zakelijke IT veilig en zorgeloos.
                </h2>
                <p className="mt-5 leading-8 text-blue-100">
                  Neem vrijblijvend contact op om de mogelijkheden voor jouw
                  onderneming in Almelo of omgeving te bespreken.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    Neem contact op →
                  </a>
                  <a
                    href="/#diensten"
                    className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Alle diensten bekijken
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
                  Zakelijke migraties of werkzaamheden in de nacht nodig zodat je
                  overdag door kunt werken? Dat is enkel mogelijk in overleg.
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