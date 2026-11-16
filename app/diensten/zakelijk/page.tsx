import Header from "../../../components/Header";

export default function ZakelijkDienst() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-300">
            Dienst 04
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Zakelijke IT & Cloud (M365)
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Professionele ondersteuning op maat voor zzp&apos;ers en kleine ondernemingen in Microsoft 365, Azure en Security.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold">Moderne IT voor kleine ondernemingen</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Hoewel onze focus ligt op particulieren en websitebeheer, ondersteunen we kleinschalige ondernemers met dezelfde professionele standaarden. Denk aan een strak ingerichte Microsoft 365-omgeving, veilige e-mail, cloudopslag en basisservice op het gebied van IT-security.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Microsoft 365</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Zakelijk e-mailen onder je eigen domeinnaam, Teams, SharePoint en Office-apps betrouwbaar ingericht.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-blue-700">Security & Back-up</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Beveiliging van bedrijfsdata en gebruikersaccounts tegen moderne dreigingen.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Behoefte aan zakelijke IT-ondersteuning?</h3>
              <p className="mt-1 text-sm text-slate-600">Ontdek wat we voor jouw onderneming kunnen betekenen.</p>
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