"use client";
import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen place-items-center bg-slate-950 px-5 text-white">
          <div className="max-w-xl text-center">
            <p className="eyebrow text-blue-300">Something went wrong</p>
            <h1 className="mt-5 text-4xl font-black">The page encountered an unexpected error.</h1>
            <p className="mt-5 leading-7 text-slate-300">Try loading the page again. If the problem continues, return to the homepage.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={reset} className="action-button-primary"><RefreshCw size={18} />Try again</button>
              <Link href="/" className="action-button-light"><Home size={18} />Return home</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
