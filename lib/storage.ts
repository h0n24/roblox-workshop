import type { Level } from "@/lib/types";

export const STORAGE_KEYS = {
  level: "rw-level-v1",
  checklist: "rw-checklist-v1",
  bonusChecklist: "rw-bonus-checklist-v1",
};

export function isLevel(value: string): value is Level {
  return value === "beginner" || value === "advanced";
}

export function readJsonFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJsonToStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function readLevelFromStorage(): Level {
  if (typeof window === "undefined") {
    return "beginner";
  }

  const raw = window.localStorage.getItem(STORAGE_KEYS.level);
  if (raw && isLevel(raw)) {
    return raw;
  }

  return "beginner";
}

export function writeLevelToStorage(level: Level) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEYS.level, level);
}
