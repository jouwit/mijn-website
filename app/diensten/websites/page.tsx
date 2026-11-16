import Header from "../../../components/Header";

export default function WebsitesDienst() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-300">
            Dienst 01
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Websitebeheer & Webdesign
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Jouw online visitekaartje altijd up-to-date, veilig en snel. Van een compleet nieuwe website tot zorgeloos onderhoud.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold">Wat houdt deze dienst in?</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Een website bouwen is één, maar hem veilig, snel en actueel houden is een tweede. Jouw IT helpt ondernemers en particulieren in Enschede en omgeving met professionele websites die indruk maken én goed scoren. Geen technische kopzorgen meer; wij regelen de hosting, beveiliging en eventuele tekstuele of visuele wijzigingen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Nieuwe Website / Webshop</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Modern webdesign dat er op zowel mobiel als desktop strak uitziet en direct klaar is voor gebruik.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Onderhoud & Beheer</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Regelmatige updates, beveiligingschecks, snelle hosting en kleine wijzigingen snel doorgevoerd.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Klaar voor een sterke online start?</h3>
              <p className="mt-1 text-sm text-slate-600">Neem contact op voor een vrijblijvend gesprek.</p>
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