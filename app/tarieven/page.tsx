import Header from "../../components/Header";

export default function TarievenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-300">
            Transparante Prijzen
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Heldere tarieven, geen verrassingen.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Eerlijke prijzen voor computerhulp, laptop service en websitebeheer in Enschede en omgeving.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* Kaart 1: Computerhulp */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Particulier</p>
                <h3 className="mt-2 text-2xl font-bold">Computerhulp & Service</h3>
                <p className="mt-4 text-sm text-slate-500 leading-6">
                  Hulp aan huis of op locatie voor al je computer- en laptop-problemen, opschonen en installaties.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="text-3xl font-extrabold text-slate-900">€ 45<span className="text-sm font-normal text-slate-500"> / uur</span></p>
                  <p className="mt-1 text-xs text-slate-400">Inclusief btw (voorrijkosten in overleg)</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">✓ PC & Laptop APK / Opschonen</li>
                  <li className="flex items-center gap-2">✓ Trage systemen versnellen</li>
                  <li className="flex items-center gap-2">✓ Wifi & printer installatie</li>
                  <li className="flex items-center gap-2">✓ No cure, no pay garantie</li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="/#contact" className="block w-full rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600">
                  Direct hulp aanvragen
                </a>
              </div>
            </div>

            {/* Kaart 2: Websitebeheer (Uitgelicht) */}
            <div className="rounded-3xl border-2 border-blue-600 bg-blue-50/50 p-8 shadow-lg flex flex-col justify-between relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                Populair voor ondernemers
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Zakelijk & ZZP</p>
                <h3 className="mt-2 text-2xl font-bold">Websitebeheer Maandpakket</h3>
                <p className="mt-4 text-sm text-slate-600 leading-6">
                  Zorgeloos je website up-to-date, veilig en snel gehost, inclusief kleine tekst- of wijzigingsverzoeken.
                </p>
                <div className="mt-6 border-t border-blue-100 pt-6">
                  <p className="text-3xl font-extrabold text-slate-900">€ 35<span className="text-sm font-normal text-slate-500"> / maand</span></p>
                  <p className="mt-1 text-xs text-slate-500">Exclusief btw, maandelijks opzegbaar</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">✓ Veilige webhosting inbegrepen</li>
                  <li className="flex items-center gap-2">✓ Wekelijkse beveiligingsupdates</li>
                  <li className="flex items-center gap-2">✓ Inclusief kleine tekstwijzigingen</li>
                  <li className="flex items-center gap-2">✓ Persoonlijk contact & advies</li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="/#contact" className="block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700">
                  Pakket starten
                </a>
              </div>
            </div>

            {/* Kaart 3: Maatwerk Websites */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Webdesign</p>
                <h3 className="mt-2 text-2xl font-bold">Nieuwe Website</h3>
                <p className="mt-4 text-sm text-slate-500 leading-6">
                  Een complete, professionele website die perfect werkt op zowel mobiel als desktop.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="text-3xl font-extrabold text-slate-900">Vanaf € 499</p>
                  <p className="mt-1 text-xs text-slate-400">Eenmalige investering op maat</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">✓ Modern en uniek webdesign</li>
                  <li className="flex items-center gap-2">✓ Volledig mobielvriendelijk (responsive)</li>
                  <li className="flex items-center gap-2">✓ Inclusief contactformulier</li>
                  <li className="flex items-center gap-2">✓ Basis SEO-optimalisatie</li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="/#contact" className="block w-full rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600">
                  Offerte aanvragen
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}