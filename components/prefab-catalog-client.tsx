"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  difficultyLabel,
  difficultyOrder,
  getUsedInLabel,
  prefabs,
} from "@/lib/data";
import { useLevel } from "@/lib/use-level";
import type { Difficulty } from "@/lib/types";

type DifficultyFilter = "all" | Difficulty;

function DifficultyPill({ difficulty }: { difficulty: Difficulty }) {
  const styleByDifficulty: Record<Difficulty, string> = {
    lehke: "bg-emerald-100 text-emerald-800",
    stredni: "bg-amber-100 text-amber-800",
    pokrocile: "bg-rose-100 text-rose-800",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-bold ${styleByDifficulty[difficulty]}`}
    >
      {difficultyLabel[difficulty]}
    </span>
  );
}

export function PrefabCatalogClient() {
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");
  const [search, setSearch] = useState("");
  const { level } = useLevel();

  const visiblePrefabs = useMemo(() => {
    const trimmedSearch = search.trim();
    const hasSearch = trimmedSearch.length > 0;
    const q = trimmedSearch.toLowerCase();

    return prefabs
      .filter((prefab) => {
        if (
          difficultyFilter !== "all" &&
          prefab.difficulty !== difficultyFilter
        ) {
          return false;
        }

        if (
          difficultyFilter === "all" &&
          level === "beginner" &&
          !hasSearch &&
          prefab.difficulty !== "lehke"
        ) {
          return false;
        }

        if (!hasSearch) {
          return true;
        }

        return (
          prefab.title.toLowerCase().includes(q) ||
          prefab.subtitle.toLowerCase().includes(q) ||
          prefab.concepts.some((concept) =>
            concept.toLowerCase().includes(q),
          ) ||
          prefab.id.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        const byDifficulty =
          difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        if (byDifficulty !== 0) {
          return byDifficulty;
        }

        return a.title.localeCompare(b.title);
      });
  }, [difficultyFilter, level, search]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900">Prefab kódy</h1>
        <p className="mt-2 text-sm text-slate-700">
          Vyber kód, zkopíruj ho do Roblox Studia a projdi si kroky v
          přehrávači.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-slate-600">Hledat</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="např. coin, checkpoint"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-slate-600">
              Obtížnost
            </span>
            <select
              value={difficultyFilter}
              onChange={(event) =>
                setDifficultyFilter(event.target.value as DifficultyFilter)
              }
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2"
            >
              <option value="all">Vše</option>
              <option value="lehke">Lehké</option>
              <option value="stredni">Střední</option>
              <option value="pokrocile">Pokročilé</option>
            </select>
          </label>
        </div>

        <div className="rounded-xl pt-3 text-xs text-slate-400">
          <p className="font-semibold">
            Aktivní úroveň: {level === "beginner" ? "začátečník" : "pokročilý"}
          </p>
          {level === "beginner" ? (
            <p className="mt-1 text-xs">
              V režimu „Vše“ vidíš jen lehké prefaby. Přes filtr obtížnosti nebo
              hledání uvidíš i další.
            </p>
          ) : null}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visiblePrefabs.map((prefab) => (
          <Link
            key={prefab.id}
            href={`/kody/${prefab.id}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <article className="flex h-full flex-col">
              <div className="mb-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    {prefab.title}

                    <span className="float-right">
                      <DifficultyPill difficulty={prefab.difficulty} />
                    </span>
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {prefab.subtitle}
                  </p>
                </div>
              </div>

              {level !== "beginner" ? (
                <>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {prefab.usedIn.map((item) => (
                      <span
                        key={`${prefab.id}-${item}`}
                        className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700"
                      >
                        {getUsedInLabel(item)}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-700">
                    <span className="font-semibold">Pojmy:</span>{" "}
                    {prefab.concepts.slice(0, 4).join(", ")}
                  </p>
                </>
              ) : null}
            </article>
          </Link>
        ))}
      </section>

      {visiblePrefabs.length === 0 ? (
        <div className="rounded-2xl border border-slate-300 bg-white p-6 text-center text-sm text-slate-700">
          Pro tento filtr není žádný prefab.
        </div>
      ) : null}
    </div>
  );
}
