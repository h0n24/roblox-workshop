import type { Level } from "@/lib/types";

export type LevelRouteSlug = "zacatecnik" | "pokrocily";

export const levelRouteByLevel: Record<Level, LevelRouteSlug> = {
  beginner: "zacatecnik",
  advanced: "pokrocily",
};

export const levelByRoute: Record<LevelRouteSlug, Level> = {
  zacatecnik: "beginner",
  pokrocily: "advanced",
};

export function isLevelRouteSlug(value: string): value is LevelRouteSlug {
  return value === "zacatecnik" || value === "pokrocily";
}

export function getLevelFromRouteSlug(slug: string): Level | null {
  if (!isLevelRouteSlug(slug)) {
    return null;
  }

  return levelByRoute[slug];
}

export function getLevelRouteSlug(level: Level): LevelRouteSlug {
  return levelRouteByLevel[level];
}

export function getLevelFromPathname(pathname: string): Level | null {
  const [firstSegment] = pathname.split("/").filter(Boolean);
  if (!firstSegment || !isLevelRouteSlug(firstSegment)) {
    return null;
  }

  return levelByRoute[firstSegment];
}

export function withLevelPath(pathname: string, level: Level): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length > 0 && isLevelRouteSlug(segments[0])) {
    segments.shift();
  }

  const levelSegment = getLevelRouteSlug(level);
  const nextSegments = [levelSegment, ...segments];
  return `/${nextSegments.join("/")}`;
}
