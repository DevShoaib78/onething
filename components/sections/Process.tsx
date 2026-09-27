import { siNextdotjs, siReact, siTypescript, siFlutter, siNodedotjs, siTailwindcss, siFigma } from "simple-icons";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Corners } from "../ui/Corners";
import { ProcessSteps } from "./ProcessSteps";

const STACK = [siNextdotjs, siReact, siTypescript, siFlutter, siNodedotjs, siTailwindcss, siFigma];

export function Process() {
  return (
    <Section id="process" label="Process">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-20">
        <div className="flex flex-col justify-between gap-12">
          <SectionHead
            tag="Method"
            lit={6}
            stacked
            title="How it works"
            note="Four steps from idea to launch. A simple, transparent sprint where you see the product move every week, with no surprises."
          />
          <Reveal>
            <p className="text-tiny text-muted">Our tech stack</p>
            <ul className="mt-5 flex flex-wrap">
              {STACK.map((icon) => (
                <li key={icon.slug} className="group relative grid h-[65px] w-[65px] place-items-center bg-card" title={icon.title}>
                  <Corners />
                  <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" className="text-white/80 transition-colors duration-300 group-hover:text-accent" role="img" aria-label={icon.title}>
                    <path d={icon.path} />
                  </svg>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <ProcessSteps />
      </div>
    </Section>
  );
}
