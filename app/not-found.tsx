import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-5 text-white">
      <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="relative max-w-2xl text-center">
        <p className="text-8xl font-black tracking-[-0.08em] text-gradient sm:text-9xl">404</p>
        <h1 className="mt-5 text-4xl font-black sm:text-5xl">This page could not be found.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">The address may have changed, or the page may no longer exist. Return to the portfolio and continue exploring.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="action-button-primary"><Home size={18} />Return home</Link>
          <Link href="/#projects" className="action-button-outline"><ArrowLeft size={18} />View projects</Link>
        </div>
      </div>
    </main>
  );
}
