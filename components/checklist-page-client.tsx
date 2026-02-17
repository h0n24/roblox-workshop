"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { bonusChallenges, checklists } from "@/lib/data";
import {
  getCompletedCount,
  getMaxPoints,
  getPoints,
  getProgressPercent,
  getVisibleItems,
} from "@/lib/checklist-utils";
import {
  readJsonFromStorage,
  STORAGE_KEYS,
  writeJsonToStorage,
} from "@/lib/storage";
import { withLevelPath } from "@/lib/level-route";
import { useLevel } from "@/lib/use-level";
import type { ChecklistItem } from "@/lib/types";

type TaskKey = keyof typeof checklists;

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-emerald-500 transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function ItemRow({
  item,
  checked,
  onToggle,
}: {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 hover:border-emerald-300">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
      />
      <div className="flex-1">
        <p className="mt-1 text-sm font-medium text-slate-800">{item.text}</p>
      </div>
      <p className="whitespace-nowrap rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">
        +{item.points}
      </p>
    </label>
  );
}

export function ChecklistPageClient({ taskKey }: { taskKey: TaskKey }) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [checkedBonusItems, setCheckedBonusItems] = useState<
    Record<string, boolean>
  >({});
  const [storageReady, setStorageReady] = useState(false);

  const { level, ready: levelReady } = useLevel();

  useEffect(() => {
    setCheckedItems(
      readJsonFromStorage<Record<string, boolean>>(STORAGE_KEYS.checklist, {}),
    );
    setCheckedBonusItems(
      readJsonFromStorage<Record<string, boolean>>(
        STORAGE_KEYS.bonusChecklist,
        {},
      ),
    );
    setStorageReady(true);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    writeJsonToStorage(STORAGE_KEYS.checklist, checkedItems);
  }, [checkedItems, storageReady]);

  useEffect(() => {
    if (!storageReady) return;
    writeJsonToStorage(STORAGE_KEYS.bonusChecklist, checkedBonusItems);
  }, [checkedBonusItems, storageReady]);

  const task = checklists[taskKey];

  const visibleSections = useMemo(() => {
    return task.sections.map((section) => ({
      ...section,
      items: getVisibleItems(section.items, level),
    }));
  }, [level, task.sections]);

  const allVisibleItems = useMemo(
    () => visibleSections.flatMap((section) => section.items),
    [visibleSections],
  );
  const nonEmptySections = useMemo(
    () => visibleSections.filter((section) => section.items.length > 0),
    [visibleSections],
  );
  const hiddenSectionsCount = visibleSections.length - nonEmptySections.length;
  const doneItems = getCompletedCount(allVisibleItems, checkedItems);
  const maxItems = allVisibleItems.length;
  const taskPoints = getPoints(allVisibleItems, checkedItems);
  const taskMaxPoints = getMaxPoints(allVisibleItems);
  const taskProgress = getProgressPercent(doneItems, maxItems);
  const hasOverHalfChecked = maxItems > 0 && doneItems > maxItems / 2;
  const showBeginnerPrompt =
    level === "beginner" &&
    hasOverHalfChecked &&
    (hiddenSectionsCount > 0 || taskKey === "task2");
  const task1Href = withLevelPath("/checklist/1", level);
  const task2Href = withLevelPath("/checklist/2", level);
  const kodyHref = withLevelPath("/kody", level);

  return (
    <div className="space-y-6">
      <section className="rounded-2xlp-5">
        <h1 className="text-2xl font-black text-slate-900">
          Checklist workshopu
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-700">
          Odškrtávej kroky, sbírej body a sleduj progress. V režimu Začátečník
          jsou schované pokročilé části.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-4 sm:grid-cols-2">
          <Link
            href={task1Href}
            className={`rounded-xl px-4 py-3 text-left transition ${
              taskKey === "task1"
                ? "bg-slate-600 text-white"
                : "bg-slate-300 text-slate-900 hover:bg-slate-400"
            }`}
          >
            <p className="text-sm font-semibold">Úkol 1</p>
            <p className="text-xs opacity-80">Cesta za pokladem</p>
          </Link>
          <Link
            href={task2Href}
            className={`rounded-xl px-4 py-3 text-left transition ${
              taskKey === "task2"
                ? "bg-slate-600 text-white"
                : "bg-slate-300 text-slate-900 hover:bg-slate-400"
            }`}
          >
            <p className="text-sm font-semibold">Úkol 2</p>
            <p className="text-xs opacity-80">Temple Escape</p>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-900">{task.title}</h2>
            <p className="mt-1 text-sm text-slate-700">{task.goal}</p>
            {levelReady ? (
              <p className="mt-2 text-xs font-semibold text-emerald-700">
                Úroveň: {level === "beginner" ? "Začátečník" : "Pokročilý"}
              </p>
            ) : null}
          </div>

          <div className="rounded-xl bg-slate-100 px-4 py-3 text-right">
            <p className="text-xs font-semibold text-slate-600">
              Body hlavního úkolu
            </p>
            <p className="text-xl font-black text-slate-900">
              {taskPoints}/{taskMaxPoints}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex justify-between text-xs font-semibold text-slate-600">
            <span>
              Splněno {doneItems} z {maxItems}
            </span>
            <span>{taskProgress}%</span>
          </div>
          <ProgressBar percent={taskProgress} />
        </div>
      </section>

      <section className="space-y-4">
        {nonEmptySections.map((section) => {
          const sectionDone = getCompletedCount(section.items, checkedItems);
          const sectionTotal = section.items.length;
          const sectionProgress = getProgressPercent(sectionDone, sectionTotal);
          const sectionPoints = getPoints(section.items, checkedItems);
          const sectionMax = getMaxPoints(section.items);

          return (
            <article
              key={section.id}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {section.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    Splněno {sectionDone}/{sectionTotal}
                  </p>
                </div>
                <p className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  {sectionPoints}/{sectionMax} bodu
                </p>
              </div>

              <div className="mb-3">
                <ProgressBar percent={sectionProgress} />
              </div>

              <div className="space-y-2">
                {section.items.map((item) => (
                  <ItemRow
                    key={item.id}
                    item={item}
                    checked={Boolean(checkedItems[item.id])}
                    onToggle={() => {
                      setCheckedItems((current) => ({
                        ...current,
                        [item.id]: !current[item.id],
                      }));
                    }}
                  />
                ))}
              </div>
            </article>
          );
        })}
      </section>

      {showBeginnerPrompt ? (
        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-5 shadow-sm">
          <h2 className="text-xl font-black text-slate-900">Co dál</h2>
          <p className="mt-1 text-sm text-slate-700">
            Skvělá práce, základ máš hotový. Teď si otevři prefab kódy a vyzkoušej
            alespoň jeden nápad ve své mapě.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Když budeš chtít větší výzvu, nahoře přepni úroveň na Pokročilý a
            odemkni další kroky i bonusové části.
          </p>
          <Link
            href={kodyHref}
            className="mt-4 inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
          >
            Otevřít kódy
          </Link>
        </section>
      ) : null}

      {taskKey === "task2" && level !== "beginner" ? (
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 shadow-sm">
          <h2 className="text-xl font-black text-slate-900">
            Bonus pro šikovné studenty
          </h2>
          <p className="mt-1 text-sm text-slate-700">
            Tyhle challenge mají oddělené skóre. Nepřičítají se do hlavního
            skóre Úkolu 2.
          </p>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {bonusChallenges.map((challenge) => {
              const corePoints = getPoints(challenge.core, checkedBonusItems);
              const coreMax = getMaxPoints(challenge.core);
              const bonusPoints = getPoints(
                challenge.bonus,
                checkedBonusItems,
              );
              const bonusMax = getMaxPoints(challenge.bonus);

              return (
                <article
                  key={challenge.id}
                  className="rounded-2xl border border-amber-200 bg-white p-4"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      {challenge.title}
                    </h3>
                    <div className="text-right text-xs font-semibold text-slate-700">
                      <p>
                        Core {corePoints}/{coreMax}
                      </p>
                      <p>
                        Bonus {bonusPoints}/{bonusMax}
                      </p>
                    </div>
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Core
                  </p>
                  <div className="space-y-2">
                    {challenge.core.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        checked={Boolean(checkedBonusItems[item.id])}
                        onToggle={() => {
                          setCheckedBonusItems((current) => ({
                            ...current,
                            [item.id]: !current[item.id],
                          }));
                        }}
                      />
                    ))}
                  </div>

                  <p className="mb-2 mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Bonus
                  </p>
                  <div className="space-y-2">
                    {challenge.bonus.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item}
                        checked={Boolean(checkedBonusItems[item.id])}
                        onToggle={() => {
                          setCheckedBonusItems((current) => ({
                            ...current,
                            [item.id]: !current[item.id],
                          }));
                        }}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}
