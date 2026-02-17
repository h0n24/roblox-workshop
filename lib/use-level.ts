"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLevelFromPathname } from "@/lib/level-route";
import { readLevelFromStorage, STORAGE_KEYS, writeLevelToStorage } from "@/lib/storage";
import type { Level } from "@/lib/types";

const LEVEL_EVENT_NAME = "rw-level-change";

export function useLevel() {
  const pathname = usePathname();
  const routeLevel = getLevelFromPathname(pathname);
  const [level, setLevelState] = useState<Level>(routeLevel ?? "beginner");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (routeLevel) {
      setLevelState(routeLevel);
      writeLevelToStorage(routeLevel);
    } else {
      setLevelState(readLevelFromStorage());
    }
    setReady(true);
  }, [routeLevel]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEYS.level) {
        return;
      }

      if (getLevelFromPathname(window.location.pathname)) {
        return;
      }

      setLevelState(readLevelFromStorage());
    };

    const onCustomChange = () => {
      if (getLevelFromPathname(window.location.pathname)) {
        return;
      }

      setLevelState(readLevelFromStorage());
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(LEVEL_EVENT_NAME, onCustomChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(LEVEL_EVENT_NAME, onCustomChange);
    };
  }, []);

  const setLevel = useCallback((nextLevel: Level) => {
    setLevelState(nextLevel);
    writeLevelToStorage(nextLevel);
    window.dispatchEvent(new Event(LEVEL_EVENT_NAME));
  }, []);

  return { level, setLevel, ready };
}
