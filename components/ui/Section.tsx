import { Reveal } from "./Reveal";
import { SectionTag } from "./SectionTag";

// The page frame: a 1360px column with hairline sides, hairline between sections.
export function Section({
  id,
  children,
  className = "",
  inner = "px-5 py-20 lg:px-10 lg:py-[100px]",
  label,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  inner?: string;
  label?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`border-t border-line ${className}`}>
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <div className={`border-x border-line ${inner}`}>{children}</div>
      </div>
    </section>
  );
}

// Tag, big uppercase title on the left, a short note on the right.
export function SectionHead({
  tag,
  lit,
  title,
  note,
  stacked = false,
}: {
  tag: string;
  lit: number;
  title: React.ReactNode;
  note?: React.ReactNode;
  stacked?: boolean;
}) {
  return (
    <div>
      <Reveal>
        <SectionTag label={tag} lit={lit} />
      </Reveal>
      <div className={`mt-5 flex flex-col gap-5 ${stacked ? "" : "lg:flex-row lg:items-end lg:justify-between"}`}>
        <Reveal delay={0.06}>
          <h2 className="text-h2 max-w-[640px]">{title}</h2>
        </Reveal>
        {note && (
          <Reveal delay={0.12} className={stacked ? "max-w-[360px]" : "max-w-[320px]"}>
            <p className="text-[16px] leading-[1.4] text-muted">{note}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
