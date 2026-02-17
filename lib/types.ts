export type Level = "beginner" | "advanced";

export type ItemKind = "process" | "base" | "extra";

export type Difficulty = "lehke" | "stredni" | "pokrocile";

export interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  kind: ItemKind;
}

export interface ChecklistSection {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistTask {
  id: string;
  title: string;
  goal: string;
  sections: ChecklistSection[];
}

export interface ChecklistsData {
  task1: ChecklistTask;
  task2: ChecklistTask;
}

export interface BonusChallenge {
  id: "lava-rising" | "key-hunt";
  title: string;
  core: ChecklistItem[];
  bonus: ChecklistItem[];
}

export interface PrefabMeta {
  id: string;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  usedIn: string[];
  concepts: string[];
  source: "animace.rbxl" | "zebricek.rbxl" | "template" | string;
  scriptName: string;
}

export interface PrefabCode {
  prefabId: string;
  source: "animace.rbxl" | "zebricek.rbxl" | "template" | string;
  code: string;
}

export interface PrefabStep {
  id: string;
  title: string;
  what: string;
  code: string;
  focusLines: number[];
}

export type PrefabStepsData = Record<string, PrefabStep[]>;

export type TooltipDict = Record<string, string>;
