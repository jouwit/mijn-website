import Header from "../../../components/Header";

export default function AdviesDienst() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-300">
            Dienst 03
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Advies & Probleemoplossing
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Eerlijk en deskundig advies bij de aanschaf van hardware, randapparatuur en netwerkproblemen in huis.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold">Ondersteuning op locatie</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Werkt je wifi niet naar behoren, lukt het niet om een nieuwe printer te koppelen of wil je data veilig overzetten naar een nieuwe laptop? Wij bieden helder advies en praktische hulp aan huis in de regio Twente.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Wifi & Randapparatuur</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Installatie van routers, extenders, printers en het oplossen van verbindingsproblemen.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Data & Back-up</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Veilig overzetten van al je foto's en documenten en instellen van een betrouwbare back-up.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Vragen over hardware of wifi?</h3>
              <p className="mt-1 text-sm text-slate-600">Stel je vraag gerust via ons contactformulier.</p>
            </div>
            <a
              href="/#contact"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 whitespace-nowrap"
            >
              Direct contact →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}