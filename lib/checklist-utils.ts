import type { ChecklistItem, Level } from "@/lib/types";

export function getVisibleItems(items: ChecklistItem[], level: Level) {
  if (level === "beginner") {
    return items.filter((item) => item.kind !== "extra");
  }

  return items;
}

export function getPoints(items: ChecklistItem[], checkedState: Record<string, boolean>) {
  return items.reduce((total, item) => {
    return checkedState[item.id] ? total + item.points : total;
  }, 0);
}

export function getMaxPoints(items: ChecklistItem[]) {
  return items.reduce((total, item) => total + item.points, 0);
}

export function getCompletedCount(items: ChecklistItem[], checkedState: Record<string, boolean>) {
  return items.reduce((total, item) => {
    return checkedState[item.id] ? total + 1 : total;
  }, 0);
}

export function getProgressPercent(done: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return Math.round((done / total) * 100);
}
