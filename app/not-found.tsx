import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h1 className="text-2xl font-black text-slate-900">Stránka nenalezena</h1>
      <p className="mt-2 text-sm text-slate-700">Zkus se vrátit do seznamu kódů nebo na domovskou stránku.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Link href="/zacatecnik" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Domů
        </Link>
        <Link href="/zacatecnik/kody" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
          Kódy
        </Link>
      </div>
    </div>
  );
}
