export type ComponentEntry = {
  slug: string;
  name: string;
  summary: string;
  /** Challenge week the component was shipped in. */
  week: number;
  /** Position within that week (1-based). */
  number: number;
  category: "Hero" | "Navigation" | "Content" | "Form" | "Feedback";
  tags: string[];
  addedOn: string;
};

/** Every component in the library. Add new entries here — each gets its own /components/<slug>/ page. */
export const COMPONENTS: ComponentEntry[] = [
  {
    slug: "cat-reveal-hero",
    name: "Cat Reveal Hero",
    summary:
      "A hero banner where a hand-drawn black cat walks in from the left, reveals the company name letter by letter behind it, then sits down at the end of the name.",
    week: 1,
    number: 1,
    category: "Hero",
    tags: ["Animation", "SVG rig", "Responsive", "Reduced motion"],
    addedOn: "2026-10-02",
  },
];

export const getComponent = (slug: string) => COMPONENTS.find((c) => c.slug === slug);

export const componentLabel = (c: Pick<ComponentEntry, "week" | "number">) =>
  `Week ${c.week} · Component ${String(c.number).padStart(2, "0")}`;

/** Components grouped by week, in order. */
export function byWeek() {
  const weeks = new Map<number, ComponentEntry[]>();
  for (const c of [...COMPONENTS].sort((a, b) => a.week - b.week || a.number - b.number)) {
    weeks.set(c.week, [...(weeks.get(c.week) ?? []), c]);
  }
  return [...weeks.entries()].map(([week, items]) => ({ week, items }));
}
