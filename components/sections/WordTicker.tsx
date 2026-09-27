import { TICKER } from "@/lib/content";

// Ideate, build, ship, iterate: the loop from the original onething.studio, set as an endless band
// with the brand's orange square between the words.
export function WordTicker() {
  const run = Array.from({ length: 6 }).flatMap(() => TICKER);
  return (
    <section aria-label={TICKER.join(", ")} className="border-y border-line bg-ink-deep">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <div className="overflow-hidden border-x border-line">
          <ul className="marquee-track flex w-max items-center" style={{ ["--marquee-duration" as string]: "38s" }} aria-hidden>
            {[...run, ...run].map((w, i) => (
              <li key={i} className="flex h-[81px] items-center">
                <span
                  className="px-8 font-display text-[34px] font-extrabold uppercase leading-none tracking-[-0.05em] text-white"
                >
                  {w}
                </span>
                <i className="block h-[9px] w-[9px] bg-accent" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
