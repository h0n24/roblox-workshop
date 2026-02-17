import Link from "next/link";
import { LevelSelector } from "@/components/level-selector";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black text-slate-900">Roblox Workshop</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Tahle webovka je pomocník k workshopu. Najdeš tu checklisty úkolů a
          hotové prefaby, které můžeš hned použít v Roblox Studiu.
        </p>

        <div className="mt-4">
          <LevelSelector />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
            Část 1
          </p>
          <h2 className="mt-1 text-xl font-black text-slate-900">
            Checklisty úkolů
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Odškrtni, co už máš hotové. Body a progress se ukládají automaticky
            v prohlížeči.
          </p>
          <Link
            href="/checklist/1"
            className="mt-4 inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Otevřít checklist
          </Link>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
            Část 2
          </p>
          <h2 className="mt-1 text-xl font-black text-slate-900">
            Kódy prefabu
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Vyber prefab, zkopíruj kód a projdi si animovaný přehrávač, jak kód
            vznikal krok za krokem.
          </p>
          <Link
            href="/kody"
            className="mt-4 inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
          >
            Otevřít kódy
          </Link>
        </article>
      </section>
    </div>
  );
}
