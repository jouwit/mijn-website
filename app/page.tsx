"use client";

import { useState, type FormEvent } from "react";
import Header from "../components/Header";

const services = [
{
    number: "01",
    icon: "🌐",
    title: "Websitebeheer & Onderhoud",
    description:
      "Betrouwbaar beheer, technische updates, snelle probleemoplossing en optimalisatie zodat jouw bestaande website altijd veilig en goed blijft werken.",
    tags: ["Onderhoud", "Updates & Security", "Probleemoplossing"],
    href: "/diensten/websites",
  },
  {
    number: "02",
    icon: "💻",
    title: "Computerhulp & Laptop Service",
    description:
      "Snelle en betrouwbare hulp aan huis of op locatie voor al je computer- en laptop-problemen, trage systemen en installaties.",
    tags: ["Trage PC opschonen", "APK", "Installatie"],
    href: "/diensten/computerhulp",
  },
  {
    number: "03",
    icon: "🛠",
    title: "Advies & Probleemoplossing",
    description:
      "Persoonlijk advies bij de aankoop van nieuwe hardware, randapparatuur (printers/wifi) en hulp bij dataoverdracht of back-ups.",
    tags: ["Hardware advies", "Wifi & Printers", "Back-up"],
    href: "/diensten/advies",
  },
  {
    number: "04",
    icon: "☁",
    title: "Zakelijke IT & Cloud (M365)",
    description:
      "Voor kleine ondernemers en zzp'ers bieden we optioneel ook beheer op maat voor Microsoft 365, Azure en moderne Security.",
    tags: ["Microsoft 365", "Security", "Azure"],
    href: "/diensten/zakelijk",
  },
];

export default function Home() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      naam: formData.get("naam"),
      email: formData.get("email"),
      onderwerp: formData.get("onderwerp"),
      bericht: formData.get("bericht"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* CENTRALE HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-36">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold tracking-wider text-blue-200">
                LOKALE COMPUTERHULP & WEBSITEBEHEER IN ENCHEDE & OMGEVING
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Persoonlijke IT-hulp en websites die jouw organisatie{" "}
              <span className="text-blue-400">laten groeien.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Hulp nodig met je computer of laptop, een professionele website
              laten beheren, of betrouwbaar IT-advies? Jouw IT staat klaar voor
              particulieren en ondernemers in Twente.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Direct contact opnemen →
              </a>

              <a
                href="#diensten"
                className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
              >
                Bekijk onze diensten
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>✓ Websitebeheer</span>
              <span>✓ Computerhulp aan huis</span>
              <span>✓ Laptop & PC service</span>
              <span>✓ Deskundig advies</span>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-9">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Jouw IT Service Desk
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Snel, betrouwbaar en dichtbij
                  </p>
                </div>
                <div className="rounded-lg bg-blue-500/20 px-3 py-2 text-xs font-semibold text-blue-300">
                  LOKAAL
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["🌐", "Websitebeheer", "Hosting & Design"],
                  ["💻", "Computerhulp", "APK & Opschonen"],
                  ["🛠", "Advies", "Hardware & Wifi"],
                  ["☁", "Zakelijk", "M365 & Cloud"],
                ].map(([icon, title, subtitle]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-blue-400/50 hover:bg-blue-500/10"
                  >
                    <div className="mb-5 text-3xl text-blue-400">{icon}</div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    Persoonlijke Service
                  </span>
                  <span className="text-xs text-blue-300">2e Lijn Expertise</span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-full rounded-full bg-blue-500" />
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  Jarenlange ervaring in professionele IT-ondersteuning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STRIP */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-9 text-sm font-bold text-slate-500 md:justify-between">
          <span className="text-lg text-slate-800">Jouw IT</span>
          <span>WEBSITEBEHEER</span>
          <span>COMPUTERHULP</span>
          <span>LAPTOP SERVICE</span>
          <span>HARDWARE ADVIES</span>
          <span>MICROSOFT 365</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="diensten" className="scroll-mt-24 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Wat wij doen
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Onze diensten
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Van websitebeheer en computerhulp aan huis tot deskundig IT-advies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    {service.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-4 min-h-32 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 font-semibold text-blue-700">
                  Ontdek de dienst →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="scroll-mt-24 bg-slate-950 py-28 text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Onze expertise
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Eerlijk advies en betrouwbare computerhulp.
            </h2>

            <p className="mt-7 leading-8 text-slate-400">
              Of het nu gaat om een trage laptop die opgeschoond moet worden, een
              nieuwe printer die gekoppeld moet worden, of een strakke website:
              je krijgt altijd deskundige hulp met een persoonlijke aanpak.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Neem contact op →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["01", "Website Service", "Hosting, onderhoud en beheer"],
              ["02", "PC & Laptop APK", "Opschonen, snelheid en updates"],
              ["03", "Hulp aan Huis", "Installatie van wifi, printers en randapparatuur"],
              ["04", "Zakelijke Extra's", "Microsoft 365, Azure en Security voor MKB"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
              >
                <p className="mb-8 text-sm font-bold text-blue-400">
                  {number}
                </p>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="over" className="scroll-mt-24 bg-slate-50 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-slate-900 p-10 text-white md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Jouw IT
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Technologie die voor je werkt, zonder gedoe.
            </h2>
            <p className="mt-6 leading-8 text-blue-100">
              Met een achtergrond in professionele IT-ondersteuning zorgen we
              ervoor dat jouw computer, laptop of website altijd optimaal
              presteert.
            </p>
            <div className="mt-10 h-1 w-20 rounded-full bg-blue-300" />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Over ons
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              Jouw vaste aanspreekpunt voor al je computer- en webzaken.
            </h2>
            <div className="mt-7 space-y-5 leading-8 text-slate-600">
              <p>
                Jouw IT richt zich primair op particulieren en kleinschalige
                ondernemers die op zoek zijn naar eerlijk advies, snelle
                computerhulp en professioneel websitebeheer.
              </p>
              <p>
                Geen moeilijke vaktermen, maar heldere communicatie en oplossingen
                die direct resultaat opleveren. Heeft jouw kleine onderneming
                toch behoefte aan geavanceerdere cloud-oplossingen zoals Microsoft
                365 of Azure? Ook dan staan we voor je klaar.
              </p>
              <p>
                Ons uitgangspunt is helder: technologie moet werken, zodat jij
                zonder zorgen kunt internetten en werken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / VEELGESTELDE VRAGEN */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto mb-16 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Vragen & Antwoorden
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Veelgestelde vragen
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              Antwoorden op de meest gestelde vragen over onze computerhulp, websitebeheer en werkwijze.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                vraag: "Wat zijn jullie openingstijden en bereikbaarheid?",
                antwoord:
                  "We zijn doordeweeks (maandag t/m vrijdag) bereikbaar en beschikbaar van 18:00 tot 00:00 uur en in het weekend (zaterdag en zondag) van 08:00 tot 18:00 uur. Moeten er werkzaamheden in de nacht worden uitgevoerd? Dan kan dat enkel in overleg.",
              },
              {
                vraag: "Wat zijn jullie werkgebieden voor computerhulp?",
                antwoord:
                  "Wij zijn gevestigd in Almelo en bieden computerhulp aan huis en op locatie in de hele regio Twente (o.a. Enschede, Hengelo, Lonneker en Glanerbrug).",
              },
              {
                vraag: "Wat betekent 'No cure, no pay' bij computerhulp?",
                antwoord:
                  "Dit betekent dat als we het probleem met je computer of laptop echt niet kunnen oplossen, je ook geen kosten betaalt voor de reparatiepoging. Eerlijkheid en transparantie staan voorop.",
              },
              {
                vraag: "Regelen jullie ook hosting en onderhoud voor mijn bestaande website?",
                antwoord:
                  "Jazeker. Wij nemen het technische beheer, updates, beveiliging en eventuele hosting van je bestaande website uit handen, en lossen storingen of foutmeldingen snel voor je op.",
              },
              {
                vraag: "Kan ik ook geholpen worden met Microsoft 365 of Azure?",
                antwoord:
                  "Jazeker! Naast particuliere computerhulp en websites hebben we professionele achtergrondkennis (2e lijn IT-support) in Microsoft 365, Azure en Security voor kleinschalige ondernemers en zzp'ers.",
              },
              {
                vraag: "Hoe snel kunnen jullie langskomen bij een computerprobleem?",
                antwoord:
                  "Meestal kunnen we binnen 24 tot 48 uur een afspraak inplannen, afhankelijk van de urgentie. Soms kunnen we kleine problemen of vragen zelfs op afstand oplossen.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.vraag}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.antwoord}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-blue-700 shadow-2xl shadow-blue-900/15">
            <div className="grid md:grid-cols-2">
              <div className="p-8 text-white md:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                  Contact
                </p>
                <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  Hulp nodig met je computer of website? Neem contact op!
                </h2>
                <p className="mt-7 leading-8 text-blue-100">
                  Heb je een vraag over computerhulp, wil je jouw website laten
                  beheren of advies over hardware? Stuur ons direct een bericht.
                </p>
                <div className="mt-10 space-y-4">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-5">
                    <p className="font-semibold">Jouw IT</p>
                    <p className="mt-2 text-sm text-blue-100">
                      Websitebeheer, computerhulp, laptop service en IT-advies
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-white/10 p-5">
                    <p className="font-semibold">Openingstijden</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-blue-100">
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
                    <p className="mt-3 border-t border-white/15 pt-3 text-xs text-blue-200">
                      Werkzaamheden in de nacht zijn enkel mogelijk in overleg.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 md:p-14">
                <h3 className="mb-7 text-2xl font-bold text-slate-900">
                  Stuur ons een bericht
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="naam"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Naam *
                    </label>
                    <input
                      id="naam"
                      name="naam"
                      type="text"
                      required
                      placeholder="Je naam"
                      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      E-mailadres *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="naam@voorbeeld.nl"
                      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="onderwerp"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Onderwerp *
                    </label>
                    <input
                      id="onderwerp"
                      name="onderwerp"
                      type="text"
                      required
                      placeholder="Bijv. Computerhulp / Websitebeheer"
                      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bericht"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={5}
                      required
                      minLength={10}
                      placeholder="Vertel ons waar we je mee kunnen helpen..."
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
                  >
                    {status === "sending" ? "Verzenden..." : "Bericht verzenden →"}
                  </button>

                  {status === "success" && (
                    <p className="rounded-xl bg-green-50 p-3 text-sm font-medium text-green-700">
                      Bedankt! Je bericht is verzonden. We nemen snel contact met je op.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700">
                      Er ging iets mis bij het verzenden. Probeer het later opnieuw.
                    </p>
                  )}

                  <p className="text-xs text-slate-500">
                    * Verplichte velden. We reageren zo snel mogelijk op je bericht.
                  </p>
                </form>
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
              <a href="#diensten" className="hover:text-white">
                Diensten
              </a>
              <a href="#expertise" className="hover:text-white">
                Expertise
              </a>
              <a href="#over" className="hover:text-white">
                Over ons
              </a>
              <a href="#contact" className="hover:text-white">
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