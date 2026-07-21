export default function Loading() {
  return (
    <main className="relative grid min-h-screen overflow-hidden bg-slate-950 px-5 text-white">
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-sm place-items-center self-center text-center">
        <div className="loading-logo relative grid h-24 w-24 place-items-center rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-3xl font-black shadow-2xl shadow-blue-600/30">
          KS
          <span className="absolute -inset-2 -z-10 rounded-[2rem] border border-blue-400/30" />
        </div>

        <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-slate-300">
          Building the experience
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Loading projects, engineering decisions, and product details.
        </p>

        <div className="mt-7 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="loading-progress h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
        </div>
      </div>
    </main>
  );
}
