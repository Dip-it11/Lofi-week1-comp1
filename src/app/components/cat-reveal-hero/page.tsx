import type { Metadata } from "next";
import { componentLabel, getComponent } from "@/lib/registry";
import { loadFiles } from "./loadFiles";
import { PageView } from "./PageView";

const entry = getComponent("cat-reveal-hero")!;

export const metadata: Metadata = {
  title: `${entry.name} — ${componentLabel(entry)}`,
  description: entry.summary,
};

export default async function CatRevealHeroPage() {
  return <PageView files={await loadFiles()} />;
}
