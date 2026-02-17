"use client";

import { useCallback, useEffect, useState } from "react";
import { readLevelFromStorage, STORAGE_KEYS, writeLevelToStorage } from "@/lib/storage";
import type { Level } from "@/lib/types";

const LEVEL_EVENT_NAME = "rw-level-change";

export function useLevel() {
  const [level, setLevelState] = useState<Level>("beginner");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLevelState(readLevelFromStorage());
    setReady(true);
  }, []);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEYS.level) {
        return;
      }

      setLevelState(readLevelFromStorage());
    };

    const onCustomChange = () => {
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
