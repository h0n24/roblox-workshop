"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CodeViewer } from "@/components/code-viewer";
import type { PrefabStep, TooltipDict } from "@/lib/types";

type CodeStepPlayerProps = {
  steps: PrefabStep[];
  tooltips: TooltipDict;
  identifierSourceCode?: string;
};

const speedOptions = [
  { label: "1x", value: 1 },
  { label: "1.5x", value: 1.5 },
  { label: "2x", value: 2 },
];

export function CodeStepPlayer({
  steps,
  tooltips,
  identifierSourceCode,
}: CodeStepPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const hasSteps = steps.length > 0;

  useEffect(() => {
    if (!hasSteps || !isPlaying) {
      return;
    }

    const delay = Math.max(700, Math.round(2200 / speed));
    const timer = window.setInterval(() => {
      setCurrentIndex((current) => {
        if (current >= steps.length - 1) {
          window.clearInterval(timer);
          setIsPlaying(false);
          return current;
        }

        return current + 1;
      });
    }, delay);

    return () => {
      window.clearInterval(timer);
    };
  }, [hasSteps, isPlaying, speed, steps.length]);

  const step = useMemo(() => {
    if (!hasSteps) {
      return null;
    }

    return steps[currentIndex];
  }, [currentIndex, hasSteps, steps]);
  const stableIdentifierSourceCode = useMemo(() => {
    if (identifierSourceCode) {
      return identifierSourceCode;
    }

    return steps[steps.length - 1]?.code;
  }, [identifierSourceCode, steps]);

  useEffect(() => {
    if (!hasSteps || !isPlaying) {
      return;
    }

    wrapperRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [hasSteps, isPlaying]);

  if (!hasSteps) {
    return null;
  }

  return (
    <div ref={wrapperRef} className="min-h-screen scroll-mt-24">
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Přehrávač kroků</h3>
            <p className="text-sm text-slate-700">
              Krok {currentIndex + 1}/{steps.length}: {step?.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setCurrentIndex((current) => Math.max(0, current - 1));
              }}
              disabled={currentIndex === 0}
              className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 disabled:opacity-40"
            >
              Zpět
            </button>

            <button
              type="button"
              onClick={() => {
                if (currentIndex >= steps.length - 1) {
                  setCurrentIndex(0);
                }
                setIsPlaying((current) => !current);
              }}
              className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white hover:bg-slate-700"
            >
              {isPlaying ? "Pauza" : "Přehrát"}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setCurrentIndex((current) => Math.min(steps.length - 1, current + 1));
              }}
              disabled={currentIndex === steps.length - 1}
              className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 disabled:opacity-40"
            >
              Další
            </button>

            <select
              value={speed}
              onChange={(event) => setSpeed(Number(event.target.value))}
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700"
            >
              {speedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Rychlost {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
          <p className="font-semibold">Co udělat:</p>
          <p>{step?.what}</p>
        </div>

        {step ? (
          <CodeViewer
            code={step.code}
            tooltips={tooltips}
            highlightLines={step.focusLines}
            identifierSourceCode={stableIdentifierSourceCode}
          />
        ) : null}
      </section>
    </div>
  );
}
