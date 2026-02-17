import checklistsRaw from "@/data/checklists.json";
import bonusChallengesRaw from "@/data/bonus-challenges.json";
import prefabsRaw from "@/data/prefabs.json";
import prefabCodesRaw from "@/data/prefab-codes.json";
import prefabStepsRaw from "@/data/prefab-steps.json";
import tooltipsRaw from "@/data/tooltips.json";
import type {
  BonusChallenge,
  ChecklistsData,
  PrefabCode,
  PrefabMeta,
  PrefabStepsData,
  TooltipDict,
} from "@/lib/types";

export const checklists = checklistsRaw as ChecklistsData;
export const bonusChallenges = bonusChallengesRaw as BonusChallenge[];
export const prefabs = prefabsRaw as PrefabMeta[];
export const prefabCodes = prefabCodesRaw as PrefabCode[];
export const prefabSteps = prefabStepsRaw as PrefabStepsData;
export const tooltips = tooltipsRaw as TooltipDict;

export const difficultyOrder: Record<PrefabMeta["difficulty"], number> = {
  lehke: 1,
  stredni: 2,
  pokrocile: 3,
};

export const difficultyLabel: Record<PrefabMeta["difficulty"], string> = {
  lehke: "Lehké",
  stredni: "Střední",
  pokrocile: "Pokročilé",
};

export function getPrefabById(id: string): PrefabMeta | undefined {
  return prefabs.find((prefab) => prefab.id === id);
}

export function getPrefabCodeById(id: string): PrefabCode | undefined {
  return prefabCodes.find((item) => item.prefabId === id);
}

export function getPrefabStepsById(id: string) {
  return prefabSteps[id] ?? [];
}

export function getUsedInLabel(usedIn: string): string {
  if (usedIn === "ukol-1") return "Úkol 1";
  if (usedIn === "ukol-2") return "Úkol 2";
  if (usedIn === "lava-rising") return "Lava Rising";
  if (usedIn === "key-hunt") return "Key Hunt";
  if (usedIn === "bonus") return "Bonus";
  return usedIn;
}
