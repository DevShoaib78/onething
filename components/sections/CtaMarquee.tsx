import { CONTACT } from "@/lib/content";
import { Arrow } from "../ui/Arrow";

// A full-width ticker. Hovering floods the band orange and turns the type black.
export function CtaMarquee() {
  const items = Array.from({ length: 6 });
  return (
    <section aria-label="Start a project" className="border-t border-line">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden py-6 transition-colors duration-500 ease-out-expo hover:bg-accent lg:py-[26px]"
        aria-label="Start a project with Onething on WhatsApp"
      >
        <div className="marquee-track flex w-max" style={{ ["--marquee-duration" as string]: "28s" }} aria-hidden>
          {items.map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-[0.5em] pr-[0.5em] font-display text-[clamp(48px,6.2vw,90px)] font-bold uppercase leading-none tracking-[-0.05em] text-white transition-colors duration-500 group-hover:text-ink"
            >
              <Arrow size={64} className="h-[0.62em] w-[0.62em]" />
              Start a project
            </span>
          ))}
        </div>
      </a>
    </section>
  );
}
