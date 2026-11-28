import type { Metadata } from "next";
import Header from "../../../components/Header";

export const metadata: Metadata = {
  title: "Wat kost een laptop opschonen? Uitleg & richtprijzen | Jouw IT",
  description:
    "Benieuwd naar de kosten voor het opschonen van een trage laptop? Lees wat een professionele opschoonbeurt inhoudt, wat het kost (€ 45/uur, no cure no pay) en hoe wij helpen in Almelo, Enschede en Twente.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wat kost een laptop opschonen? Uitleg, richtprijzen & tips (2026)",
  description:
    "Uitleg over de kosten van een laptop opschonen, wat er tijdens een onderhoudsbeurt gebeurt en wanneer opschonen slimmer is dan vervangen.",
  datePublished: "2026-11-28",
  author: {
    "@type": "Organization",
    name: "Jouw IT",
    url: "https://jouwit.nl",
  },
  publisher: {
    "@type": "Organization",
    name: "Jouw IT",
    logo: {
      "@type": "ImageObject",
      url: "https://jouwit.nl/logo-jouw-it.png",
    },
  },
};

export default function LaptopOpschonenKostenPost() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Header />

      {/* ARTIKEL HEADER */}
      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span>/</span>
            <a href="/blog" className="transition hover:text-white">
              Blog
            </a>
            <span>/</span>
            <span className="text-blue-400">Laptop opschonen kosten</span>
          </div>

          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <span>Computerhulp &amp; Laptop Service</span>
            <span>•</span>
            <span>28 november 2026</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Wat kost een laptop opschonen? Uitleg, richtprijzen &amp; tips
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Doet je laptop er minuten over om op te starten of loopt je browser
            steeds vast? Vaak hoef je helemaal geen dure nieuwe laptop te kopen
            en is een grondige opschoonbeurt voldoende. Dit kun je verwachten qua
            aanpak en kosten.
          </p>
        </div>
      </section>

      {/* ARTIKEL INHOUD */}
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 leading-8 text-slate-700">
          {/* SAMENVATTINGSBLOK */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Kort samengevat
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              Bij Jouw IT betaal je voor het opschonen van een laptop of pc een
              helder uurtarief van € 45 per uur (inclusief btw). Een complete
              opschoonbeurt duurt gemiddeld 1 tot 1,5 uur, met no cure, no pay
              garantie.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Waarom wordt een laptop na verloop van tijd zo traag?
            </h2>
            <p>
              Zelfs een goede Windows-laptop verliest na een paar jaar snelheid.
              Dat komt meestal niet doordat de laptop &ldquo;versleten&rdquo; is,
              maar door een optelsom van onzichtbare vervuiling op de achtergrond:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>
                <strong>Opstartprogramma&apos;s:</strong> Veel software zet
                zichzelf automatisch aan bij het opstarten van Windows, waardoor
                het werkgeheugen direct volloopt.
              </li>
              <li>
                <strong>Overbodige software &amp; browser-extensies:</strong>{" "}
                Oude toolbars, proefversies en ongewenste pop-ups vertragen je
                internetbrowser en maken het systeem onoverzichtelijk.
              </li>
              <li>
                <strong>Achterstallige Windows- &amp; driver-updates:</strong>{" "}
                Vastgelopen updates zorgen ervoor dat je processor continu op de
                achtergrond blijft zoeken.
              </li>
              <li>
                <strong>Volle opslagschijf:</strong> Tijdelijke systeem- en
                updatebestanden nemen vaak tientallen gigabytes onnodig in.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wat gebeurt er tijdens een grondige opschoonbeurt?
            </h2>
            <p>
              Wanneer wij je laptop opschonen — bij je thuis in Almelo,
              Enschede of elders in Twente, of via hulp op afstand — lopen we
              het hele systeem stap voor stap na zonder dat je persoonlijke
              foto&apos;s of documenten verloren gaan:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>
                Verwijderen van overbodige programma&apos;s, adware en
                schadelijke bestanden.
              </li>
              <li>
                Opschonen van opstartitems zodat Windows weer vlot opstart.
              </li>
              <li>
                Controleren en bijwerken van Windows 10/11 en belangrijke
                stuurprogramma&apos;s.
              </li>
              <li>
                Opschonen van je internetbrowser (Edge, Chrome of Firefox) en
                controleren van je virusbeveiliging.
              </li>
              <li>
                Praktisch advies als bijvoorbeeld een SSD-upgrade of nieuwe
                laptop wél verstandiger is.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wat zijn de kosten voor het opschonen van een laptop?
            </h2>
            <p>
              Bij veel computerwinkels betaal je een vast pakketbedrag van € 75
              tot € 120 en ben je je laptop meerdere dagen kwijt. Bij{" "}
              <strong className="text-slate-900">Jouw IT</strong> pakken we dat
              persoonlijker en transparanter aan:
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                  <span>Uurtarief computerhulp &amp; opschonen</span>
                  <strong className="text-slate-900">
                    € 45 per uur (incl. btw)
                  </strong>
                </li>
                <li className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                  <span>Gemiddelde duur laptop opschonen</span>
                  <strong className="text-slate-900">1 tot 1,5 uur</strong>
                </li>
                <li className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                  <span>Beschikbaarheid</span>
                  <strong className="text-slate-900">
                    Ma–vr 18:00–00:00 &amp; za–zo 08:00–18:00
                  </strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Zekerheid</span>
                  <strong className="text-slate-900">No cure, no pay</strong>
                </li>
              </ul>
            </div>
            <p>
              Blijkt tijdens de controle dat je laptop hardwarematig echt aan
              vervanging toe is? Dan zeggen we dat eerlijk vooraf en helpen we je
              graag met onafhankelijk aankoopadvies. Bekijk ook onze{" "}
              <a
                href="/tarieven"
                className="font-semibold text-blue-700 underline hover:text-blue-800"
              >
                volledige tarievenpagina
              </a>
              .
            </p>
          </section>

          {/* CTA BLOK */}
          <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-xl shadow-blue-900/15 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              Hulp nodig in Almelo, Enschede of Twente?
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Laat je trage laptop weer soepel werken.
            </h2>
            <p className="mt-4 leading-7 text-blue-100">
              Geen dagen wachten bij een winkel: wij komen bij je langs in de
              avonduren of in het weekend — of helpen je direct op afstand.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Afspraak maken →
              </a>
              <a
                href="/diensten/computerhulp"
                className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Meer over computerhulp
              </a>
            </div>
          </div>
        </div>
      </article>

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
              <a href="/blog" className="hover:text-white">
                Blog
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