import { readFile } from "node:fs/promises";
import path from "node:path";
import type { CodeFile } from "@/components/site/CodeTabs";
import { highlight } from "@/lib/highlight";

const SOURCE_DIR = path.join(process.cwd(), "src/components/cat-reveal-hero");
const IMPORT_DIR = "src/components/cat-reveal-hero";

const USAGE = `import { CatRevealHero } from "@/components/cat-reveal-hero";

export default function Home() {
  return (
    <CatRevealHero
      companyName="Lofistack"
      eyebrow="90 Day Build Challenge"
      tagline="Ship calm, considered products — one component at a time."
    />
  );
}
`;

/** Large data files are copyable in full but only previewed. */
function previewOf(code: string, maxLines = 18, maxCols = 140) {
  const lines = code.split("\n");
  const shown = lines
    .slice(0, maxLines)
    .map((l) => (l.length > maxCols ? `${l.slice(0, maxCols)}…"],` : l));
  return `${shown.join("\n")}\n\n// … ${(code.length / 1024).toFixed(0)} KB of artwork path data — use “Copy” to get the full file.\n`;
}

export async function loadFiles(): Promise<CodeFile[]> {
  const files: { name: string; preview?: boolean; note?: string }[] = [
    { name: "CatRevealHero.tsx" },
    { name: "BlackCat.tsx" },
    {
      name: "catArt.ts",
      preview: true,
      note: "Artwork data — the preview is shortened, but Copy copies the complete file.",
    },
    { name: "index.ts" },
  ];
  const usage: CodeFile = { name: "Usage.tsx", code: USAGE, html: await highlight(USAGE) };
  const sources = await Promise.all(
    files.map(async (f) => {
      const code = await readFile(path.join(SOURCE_DIR, f.name), "utf8");
      return {
        name: f.name,
        code,
        html: await highlight(f.preview ? previewOf(code) : code),
        note: f.note ?? `${IMPORT_DIR}/${f.name}`,
      };
    }),
  );
  return [usage, ...sources];
}

