"use client";

import type { CSSProperties } from "react";
import { useMemo } from "react";
import type { TooltipDict } from "@/lib/types";

type CodeViewerProps = {
  code: string;
  tooltips: TooltipDict;
  highlightLines?: number[];
  identifierSourceCode?: string;
};

type Segment = {
  text: string;
  tooltipToken?: string;
  identifier?: string;
  comment?: "marker" | "text";
};

const keywordTokens = new Set([
  "local",
  "function",
  "if",
  "then",
  "end",
  "while",
  "for",
  "do",
  "return",
  "not",
  "and",
  "or",
  "wait",
]);

const eventTokens = new Set([":Connect", "Touched", "TouchEnded"]);

const dataTokens = new Set([
  "Humanoid",
  "Transparency",
  "CanCollide",
  "CFrame",
  "Color3.new",
  "leaderstats",
  "IntValue",
  "JumpPower",
  "PlayerGui",
  "TextLabel",
  "Sound",
  "PointLight",
]);

const luaKeywords = new Set([
  "and",
  "break",
  "do",
  "else",
  "elseif",
  "end",
  "false",
  "for",
  "function",
  "if",
  "in",
  "local",
  "nil",
  "not",
  "or",
  "repeat",
  "return",
  "then",
  "true",
  "until",
  "while",
]);

const luaGlobals = new Set([
  "game",
  "script",
  "workspace",
  "math",
  "Instance",
  "Color3",
  "CFrame",
  "UDim2",
  "Vector3",
  "print",
  "pairs",
  "ipairs",
  "tonumber",
  "tostring",
  "wait",
]);

const userIdentifierPalette = [
  "#fda4af",
  "#fdba74",
  "#fde047",
  "#86efac",
  "#67e8f9",
  "#93c5fd",
  "#c4b5fd",
  "#f9a8d4",
  "#f0abfc",
  "#a7f3d0",
];

const commentMarkerTooltip =
  "Komentář: vše za -- na tomto řádku je poznámka pro člověka. Hra to nespustí jako kód.";

function isWordToken(token: string) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(token);
}

function isWordChar(char: string | undefined) {
  return Boolean(char && /[A-Za-z0-9_]/.test(char));
}

function getTokenClass(token: string) {
  if (keywordTokens.has(token)) {
    return "text-sky-300";
  }

  if (eventTokens.has(token)) {
    return "text-amber-300";
  }

  if (dataTokens.has(token)) {
    return "text-emerald-300";
  }

  return "text-violet-300";
}

function parseParameterList(raw: string) {
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => item !== "...");
}

function collectUserIdentifiers(code: string) {
  const normalized = code
    .replace(/\r\n/g, "\n")
    .replace(/--\[\[[\s\S]*?\]\]/g, " ")
    .replace(/--.*$/gm, " ")
    .replace(/\"(?:\\.|[^\"\\])*\"|'(?:\\.|[^'\\])*'/g, " ");

  const found: string[] = [];
  const seen = new Set<string>();

  const add = (name: string) => {
    if (!isWordToken(name)) {
      return;
    }

    if (luaKeywords.has(name) || luaGlobals.has(name) || seen.has(name)) {
      return;
    }

    seen.add(name);
    found.push(name);
  };

  let match: RegExpExecArray | null;

  const localFunctionPattern = /\blocal\s+function\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)/g;
  while ((match = localFunctionPattern.exec(normalized))) {
    add(match[1]);
    parseParameterList(match[2]).forEach(add);
  }

  const namedFunctionPattern = /\bfunction\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)/g;
  while ((match = namedFunctionPattern.exec(normalized))) {
    add(match[1]);
    parseParameterList(match[2]).forEach(add);
  }

  const anonymousFunctionPattern = /\bfunction\s*\(([^)]*)\)/g;
  while ((match = anonymousFunctionPattern.exec(normalized))) {
    parseParameterList(match[1]).forEach(add);
  }

  const localAssignPattern = /\blocal\s+([A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*)\s*=/g;
  while ((match = localAssignPattern.exec(normalized))) {
    match[1]
      .split(",")
      .map((item) => item.trim())
      .forEach(add);
  }

  const forNumberPattern = /\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s*=/g;
  while ((match = forNumberPattern.exec(normalized))) {
    add(match[1]);
  }

  const forInPattern = /\bfor\s+([A-Za-z_][A-Za-z0-9_]*)(?:\s*,\s*([A-Za-z_][A-Za-z0-9_]*))?\s+in\b/g;
  while ((match = forInPattern.exec(normalized))) {
    add(match[1]);
    if (match[2]) {
      add(match[2]);
    }
  }

  return found;
}

function tokenizeCodePart(line: string, tooltipTokens: string[], tooltipSet: Set<string>) {
  const segments: Segment[] = [];
  let buffer = "";
  let cursor = 0;

  const flushBuffer = () => {
    if (!buffer) {
      return;
    }

    segments.push({ text: buffer });
    buffer = "";
  };

  while (cursor < line.length) {
    let matchedToken: string | null = null;

    for (const token of tooltipTokens) {
      if (!line.startsWith(token, cursor)) {
        continue;
      }

      if (isWordToken(token)) {
        const before = line[cursor - 1];
        const after = line[cursor + token.length];
        if (isWordChar(before) || isWordChar(after)) {
          continue;
        }
      }

      matchedToken = token;
      break;
    }

    if (matchedToken) {
      flushBuffer();
      segments.push({ text: matchedToken, tooltipToken: matchedToken });
      cursor += matchedToken.length;
      continue;
    }

    if (/[A-Za-z_]/.test(line[cursor] ?? "")) {
      flushBuffer();
      let wordEnd = cursor + 1;
      while (wordEnd < line.length && isWordChar(line[wordEnd])) {
        wordEnd += 1;
      }

      const identifier = line.slice(cursor, wordEnd);
      if (tooltipSet.has(identifier)) {
        segments.push({ text: identifier, tooltipToken: identifier });
      } else {
        segments.push({ text: identifier, identifier });
      }

      cursor = wordEnd;
      continue;
    }

    buffer += line[cursor];
    cursor += 1;
  }

  flushBuffer();
  return segments;
}

function findCommentStart(line: string) {
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let escaped = false;

  for (let i = 0; i < line.length - 1; i += 1) {
    const char = line[i];

    if (inSingleQuote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === "'") {
        inSingleQuote = false;
      }
      continue;
    }

    if (inDoubleQuote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === "\"") {
        inDoubleQuote = false;
      }
      continue;
    }

    if (char === "'") {
      inSingleQuote = true;
      continue;
    }

    if (char === "\"") {
      inDoubleQuote = true;
      continue;
    }

    if (char === "-" && line[i + 1] === "-") {
      return i;
    }
  }

  return -1;
}

function tokenizeLine(
  line: string,
  tooltipTokens: string[],
  tooltipSet: Set<string>,
  inBlockComment: boolean,
) {
  if (inBlockComment) {
    const blockEnd = line.indexOf("]]");

    if (blockEnd === -1) {
      return {
        segments: [{ text: line, comment: "text" as const }],
        nextInBlockComment: true,
      };
    }

    const segments: Segment[] = [{ text: line.slice(0, blockEnd + 2), comment: "text" }];
    const rest = line.slice(blockEnd + 2);
    if (rest) {
      segments.push(...tokenizeCodePart(rest, tooltipTokens, tooltipSet));
    }

    return { segments, nextInBlockComment: false };
  }

  const commentStart = findCommentStart(line);
  if (commentStart === -1) {
    return {
      segments: tokenizeCodePart(line, tooltipTokens, tooltipSet),
      nextInBlockComment: false,
    };
  }

  const codePart = line.slice(0, commentStart);
  const commentBody = line.slice(commentStart + 2);
  const segments: Segment[] = [
    ...tokenizeCodePart(codePart, tooltipTokens, tooltipSet),
    { text: "--", comment: "marker" },
    { text: commentBody, comment: "text" },
  ];

  const opensBlockComment = commentBody.startsWith("[[");
  const closesOnSameLine = opensBlockComment && commentBody.includes("]]", 2);

  return {
    segments,
    nextInBlockComment: opensBlockComment && !closesOnSameLine,
  };
}

export function CodeViewer({
  code,
  tooltips,
  highlightLines = [],
  identifierSourceCode,
}: CodeViewerProps) {
  const tooltipTokens = useMemo(() => {
    return Object.keys(tooltips).sort((a, b) => b.length - a.length);
  }, [tooltips]);

  const tooltipSet = useMemo(() => new Set(Object.keys(tooltips)), [tooltips]);

  const userIdentifierStyles = useMemo(() => {
    const identifiers = collectUserIdentifiers(identifierSourceCode ?? code);
    const styles = new Map<string, CSSProperties>();

    identifiers.forEach((identifier, index) => {
      styles.set(identifier, {
        color: userIdentifierPalette[index % userIdentifierPalette.length],
      });
    });

    return styles;
  }, [code, identifierSourceCode]);

  const lines = useMemo(() => {
    return code.replace(/\r\n/g, "\n").split("\n");
  }, [code]);

  const tokenizedLines = useMemo(() => {
    let inBlockComment = false;

    return lines.map((line) => {
      const result = tokenizeLine(line, tooltipTokens, tooltipSet, inBlockComment);
      inBlockComment = result.nextInBlockComment;
      return result.segments;
    });
  }, [lines, tooltipSet, tooltipTokens]);

  const highlighted = useMemo(() => new Set(highlightLines), [highlightLines]);

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 text-slate-100">
      <pre className="min-w-full p-4 font-mono text-sm leading-6">
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const segments = tokenizedLines[index] ?? [];
          const isHighlighted = highlighted.has(lineNumber);

          return (
            <div
              key={`${lineNumber}-${line}`}
              className={`grid grid-cols-[2.75rem_minmax(0,1fr)] whitespace-pre ${
                isHighlighted ? "rounded bg-slate-800/90" : ""
              }`}
            >
              <span className="select-none pr-3 text-right text-sm leading-6 tabular-nums text-slate-500">
                {lineNumber}
              </span>
              <span className="leading-6">
                {segments.length === 0 ? (
                  "\u00A0"
                ) : (
                  segments.map((segment, segmentIndex) => {
                    if (segment.comment === "marker") {
                      return (
                        <span
                          key={`${lineNumber}-${segmentIndex}-comment-marker`}
                          className="cursor-help text-slate-400 underline decoration-dotted decoration-slate-500/80 underline-offset-4"
                          title={commentMarkerTooltip}
                        >
                          {segment.text}
                        </span>
                      );
                    }

                    if (segment.comment === "text") {
                      return (
                        <span key={`${lineNumber}-${segmentIndex}-comment`} className="text-slate-400">
                          {segment.text}
                        </span>
                      );
                    }

                    if (segment.identifier && userIdentifierStyles.has(segment.identifier)) {
                      return (
                        <span
                          key={`${lineNumber}-${segmentIndex}-${segment.identifier}`}
                          className="italic font-semibold"
                          style={userIdentifierStyles.get(segment.identifier)}
                        >
                          {segment.text}
                        </span>
                      );
                    }

                    if (!segment.tooltipToken) {
                      return <span key={`${lineNumber}-${segmentIndex}`}>{segment.text}</span>;
                    }

                    return (
                      <span
                        key={`${lineNumber}-${segmentIndex}-${segment.tooltipToken}`}
                        className={`${getTokenClass(segment.tooltipToken)} cursor-help font-semibold underline decoration-dotted decoration-slate-400/70 underline-offset-4`}
                        title={tooltips[segment.tooltipToken]}
                      >
                        {segment.text}
                      </span>
                    );
                  })
                )}
              </span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
