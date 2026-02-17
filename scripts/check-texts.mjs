import fs from "node:fs";
import path from "node:path";

const rootDirs = ["app", "components", "lib", "data"];
const extraFiles = ["README.md"];
const allowedExt = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);

const mojibakeChecks = [
  { label: "replacement character", regex: /\uFFFD/ },
  { label: "mojibake token (Ă)", regex: /Ă/ },
  { label: "mojibake token (Ä)", regex: /Ä/ },
  { label: "mojibake token (Ĺ)", regex: /Ĺ/ },
  { label: "mojibake token (â€)", regex: /â€/ },
  { label: "mojibake token (Ã)", regex: /Ã/ },
  { label: "mojibake token (Â)", regex: /Â/ },
];

const letterAroundQuestion = /[A-Za-zÀ-ž]\?[A-Za-zÀ-ž]/u;
const repeatedQuestion = /\?\?+/;

/** @typedef {{ file: string; where: string; message: string; sample?: string }} Issue */

/** @type {Issue[]} */
const issues = [];

function walkDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const abs = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(abs));
      continue;
    }

    if (allowedExt.has(path.extname(entry.name))) {
      files.push(abs);
    }
  }

  return files;
}

function addIssue(filePath, where, message, sample) {
  issues.push({
    file: filePath.replace(/\\/g, "/"),
    where,
    message,
    sample,
  });
}

function findLineNumber(content, index) {
  return content.slice(0, index).split("\n").length;
}

function checkRawContent(filePath, content) {
  for (const check of mojibakeChecks) {
    const match = check.regex.exec(content);
    if (!match) {
      continue;
    }

    const line = findLineNumber(content, match.index);
    const lineText = content.split("\n")[line - 1] ?? "";
    addIssue(filePath, `line ${line}`, check.label, lineText.trim());
  }
}

function checkSuspiciousQuestionInString(filePath, location, value) {
  if (letterAroundQuestion.test(value) || repeatedQuestion.test(value)) {
    addIssue(filePath, location, "suspicious '?' inside text", value);
  }
}

function checkJsonStrings(filePath, value, location = "$") {
  if (typeof value === "string") {
    checkSuspiciousQuestionInString(filePath, location, value);
    return;
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      checkJsonStrings(filePath, value[i], `${location}[${i}]`);
    }
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, next] of Object.entries(value)) {
      checkJsonStrings(filePath, next, `${location}.${key}`);
    }
  }
}

function checkMarkdownQuestions(filePath, content) {
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.includes("?")) {
      continue;
    }

    if (letterAroundQuestion.test(line) || repeatedQuestion.test(line)) {
      addIssue(filePath, `line ${i + 1}`, "suspicious '?' inside markdown text", line.trim());
    }
  }
}

function main() {
  const files = [];

  for (const dir of rootDirs) {
    files.push(...walkDir(dir));
  }

  for (const file of extraFiles) {
    if (fs.existsSync(file)) {
      files.push(file);
    }
  }

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");

    checkRawContent(filePath, content);

    if (filePath.endsWith(".json") && filePath.startsWith(`data${path.sep}`)) {
      try {
        const parsed = JSON.parse(content);
        checkJsonStrings(filePath, parsed);
      } catch (error) {
        addIssue(filePath, "json", `invalid JSON: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    if (filePath.endsWith(".md")) {
      checkMarkdownQuestions(filePath, content);
    }
  }

  if (issues.length > 0) {
    console.error(`Found ${issues.length} text-encoding/text-quality issue(s):`);
    for (const issue of issues) {
      console.error(`- ${issue.file} (${issue.where}): ${issue.message}`);
      if (issue.sample) {
        console.error(`  ${issue.sample}`);
      }
    }
    process.exit(1);
  }

  console.log("Text quality check passed (no mojibake or suspicious '?' patterns found).");
}

main();
