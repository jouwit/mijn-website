import Image from "next/image";

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white overflow-hidden">
      {/* Sfeervolle achtergrond effecten */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-xl text-center">
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-blue-200">
            WEBSITE BINNENKORT ONLINE
          </span>
        </div>

        {/* Titel */}
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          We bouwen aan iets <span className="text-blue-400">moois.</span>
        </h1>

        {/* Omschrijving */}
        <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          Jouw IT wordt dé lokale partner in Almelo en omgeving voor websitebeheer, computerhulp en deskundig advies. Even geduld nog, we zijn bijna klaar!
        </p>

        {/* Box met info */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold text-white">Wat kun je straks verwachten?</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">✓ Professioneel websitebeheer & webdesign</li>
            <li className="flex items-center gap-2">✓ Snelle computerhulp & laptop service aan huis</li>
            <li className="flex items-center gap-2">✓ Eerlijk advies over hardware, wifi en printers</li>
          </ul>
        </div>

        {/* Footer tekst */}
        <p className="mt-12 text-xs text-slate-500">
          © 2026 Jouw IT • Gevestigd te Almelo
        </p>
      </div>
    </main>
  );
}