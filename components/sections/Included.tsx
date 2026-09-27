import { INCLUDED } from "@/lib/content";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Corners } from "../ui/Corners";

const ICONS: Record<(typeof INCLUDED)[number]["icon"], React.ReactNode> = {
  rocket: <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2m-.5-4.5L12 17c4.5-2 8-6.5 8-13-6.5 0-11 3.5-13 8l1.5 1.5zM15 9h.01" />,
  layout: <path d="M4 4h16v7H4zM4 15h7v5H4zM15 15h5v5h-5z" />,
  pen: <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18M2 2l7.6 7.6M11 13a2 2 0 100-4 2 2 0 000 4z" />,
  repeat: <path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3" />,
  database: <path d="M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />,
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
};

// What every build comes with, from the original site's "What we ship".
// The icon is drawn large into the card itself; on hover the card floods orange.
export function Included() {
  return (
    <Section id="included" label="What every build includes">
      <SectionHead
        tag="With every build"
        lit={5}
        title="Built in, every time"
        note="Everything you need to go to market comes standard. No add-ons to unlock, no fine print."
      />
      <div className="mt-[50px] grid gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
        {INCLUDED.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.06}>
            <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden bg-card p-[30px]">
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-accent transition-[height] duration-700 ease-out-expo group-hover:h-full" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="absolute -bottom-8 -right-8 h-[210px] w-[210px] text-accent/[0.18] transition-[transform,color] duration-700 ease-out-expo group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-[-8deg] group-hover:text-ink/30"
              >
                {ICONS[item.icon]}
              </svg>
              <Corners />
              <div className="relative flex items-center gap-3">
                <span className="text-tiny text-accent transition-colors duration-500 group-hover:text-ink">/{String(i + 1).padStart(2, "0")}/</span>
                <span className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-ink/20" />
              </div>
              <h3 className="text-h3 relative mt-auto max-w-[260px] pt-16 text-[24px] transition-colors duration-500 group-hover:text-ink">{item.title}</h3>
              <p className="relative mt-3 max-w-[300px] text-[15.5px] leading-[1.45] text-muted transition-colors duration-500 group-hover:text-ink/80">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
