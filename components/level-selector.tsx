"use client";

import { useLevel } from "@/lib/use-level";
import type { Level } from "@/lib/types";

type LevelSelectorProps = {
  showLabel?: boolean;
  className?: string;
};

function LevelButton({
  value,
  currentLevel,
  label,
  onClick,
}: {
  value: Level;
  currentLevel: Level;
  label: string;
  onClick: (nextLevel: Level) => void;
}) {
  const isActive = value === currentLevel;

  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        isActive
          ? "bg-emerald-600 text-white"
          : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

export function LevelSelector({ showLabel = true, className = "" }: LevelSelectorProps) {
  const { level, setLevel } = useLevel();

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {showLabel ? <p className="text-sm font-medium text-slate-700">Moje úroveň:</p> : null}
      <div className="flex items-center gap-2">
        <LevelButton value="beginner" currentLevel={level} label="Začátečník" onClick={setLevel} />
        <LevelButton value="advanced" currentLevel={level} label="Pokročilý" onClick={setLevel} />
      </div>
    </div>
  );
}
