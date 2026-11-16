import Header from "../../../components/Header";

export default function ComputerhulpDienst() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-300">
            Dienst 02
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Computerhulp & Laptop Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Is je pc of laptop opeens ontzettend traag, loop je vast met updates of start hij niet meer op? Wij lossen het op.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold">Snelle hulp bij computerproblemen</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Met jarenlange ervaring als 2e lijn support engineer weet ik precies waar computers en laptops tegenaan lopen. Van hardnekkige virussen en trage opstarttijden tot hardware-upgrades (zoals het plaatsen van een snelle SSD). Wij zorgen dat je apparatuur weer als een zonnetje loopt.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">APK & Opschonen</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Grondige opschoning van overbodige bestanden, verwijderen van malware en optimaliseren van de snelheid.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Reparatie & Upgrades</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Vervangen van defecte onderdelen of het upgraden van trage systemen met moderne onderdelen.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Hulp nodig met je computer?</h3>
              <p className="mt-1 text-sm text-slate-600">Laat het ons weten, we helpen je snel op pad.</p>
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