import Link from "next/link";
import { componentLabel, type ComponentEntry } from "@/lib/registry";

export function ComponentCard({ entry }: { entry: ComponentEntry }) {
  return (
    <Link
      href={`/components/${entry.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#cbbfe3] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:translate-y-0"
    >
      <div className="relative flex aspect-[16/9] items-end justify-center gap-[2%] overflow-hidden bg-[#f6f2fd] px-[8%] pb-[17%]">
        <span aria-hidden className="font-display text-[clamp(2.4rem,7.5vw,4.25rem)] leading-[0.72] tracking-[0.06em] text-brand">
          LOFISTACK
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/thumbs/cat-reveal-hero-sitter.webp"
          alt=""
          width={380}
          height={432}
          className="h-[calc(clamp(2.4rem,7.5vw,4.25rem)*0.8)] w-auto origin-bottom transition-transform duration-500 group-hover:-rotate-3"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold tracking-wide text-brand/70 uppercase">{componentLabel(entry)}</p>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-brand">{entry.name}</h3>
          <span className="shrink-0 rounded-full bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand">{entry.category}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{entry.summary}</p>
        <span className="mt-auto pt-2 text-sm font-medium text-brand">
          View component <span aria-hidden className="inline-block transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
