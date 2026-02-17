"use client";

import { useMemo, useState } from "react";
import { CodeStepPlayer } from "@/components/code-step-player";
import { CodeViewer } from "@/components/code-viewer";
import { difficultyLabel, getUsedInLabel } from "@/lib/data";
import { useLevel } from "@/lib/use-level";
import type {
  PrefabCode,
  PrefabMeta,
  PrefabStep,
  TooltipDict,
} from "@/lib/types";

type PrefabDetailClientProps = {
  prefab: PrefabMeta;
  code?: PrefabCode;
  steps: PrefabStep[];
  tooltips: TooltipDict;
};

export function PrefabDetailClient({
  prefab,
  code,
  steps,
  tooltips,
}: PrefabDetailClientProps) {
  const { level } = useLevel();
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle");

  const blockedByLevel =
    level === "beginner" && prefab.difficulty === "pokrocile";

  const difficultyText = useMemo(
    () => `Obtížnost: ${difficultyLabel[prefab.difficulty]}`,
    [prefab.difficulty],
  );
  const conceptsText = useMemo(
    () => `Pojmy: ${prefab.concepts.join(", ")}`,
    [prefab.concepts],
  );

  async function copyCode() {
    if (!code) {
      return;
    }

    try {
      await navigator.clipboard.writeText(code.code);
      setCopyState("done");
      window.setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 1500);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
          {difficultyLabel[prefab.difficulty]}
        </p>
        <h1 className="text-2xl font-black text-slate-900">{prefab.title}</h1>
        <p className="mt-1 text-sm text-slate-600">{prefab.subtitle}</p>
        <p className="mt-2 text-sm text-slate-700">{difficultyText}</p>
        <p className="text-sm text-slate-700">{conceptsText}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {prefab.usedIn.map((item) => (
            <span
              key={`${prefab.id}-${item}`}
              className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700"
            >
              {getUsedInLabel(item)}
            </span>
          ))}
        </div>
      </section>

      {blockedByLevel ? (
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-slate-800">
          Tento kód je pokročilý a v režimu Začátečník je schovaný. Přepnout
          úroveň můžeš nahoře v menu.
        </section>
      ) : (
        <>
          <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black text-slate-900">Finální kód</h2>
              <button
                type="button"
                onClick={copyCode}
                disabled={!code}
                className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 disabled:opacity-40"
              >
                {copyState === "done"
                  ? "Zkopírováno"
                  : copyState === "error"
                    ? "Chyba kopírování"
                    : "Kopírovat kód"}
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Najeď myší na podtržené slovo nebo na -- v komentáři a uvidíš krátké vysvětlení.
            </p>

            {code ? (
              <CodeViewer code={code.code} tooltips={tooltips} />
            ) : (
              <div className="rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
                Kód pro tento prefab zatím není připravený.
              </div>
            )}
          </section>

          <CodeStepPlayer
            steps={steps}
            tooltips={tooltips}
            identifierSourceCode={code?.code}
          />
        </>
      )}
    </div>
  );
}
