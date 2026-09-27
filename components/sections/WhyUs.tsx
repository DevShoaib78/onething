"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { WHY, CONTACT } from "@/lib/content";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Corners } from "../ui/Corners";
import { Button } from "../ui/Button";

const EXPO = [0.16, 1, 0.3, 1] as const;

// The old way vs ours. Each card shows the problem, a line strikes it out as it scrolls in,
// and the fix rises underneath in orange.
function Card({ w, i }: { w: (typeof WHY)[number]; i: number }) {
  // The trigger sits on the card: the strike and the orange panel start at zero size.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  return (
    <Reveal delay={i * 0.07} className="h-full">
      <div ref={ref} className="relative flex h-full flex-col bg-card">
        <Corners />
        <div className="p-[30px] pb-8 lg:min-h-[228px]">
          <p className="text-tiny text-dim">Bottleneck /{String(i + 1).padStart(2, "0")}/</p>
          <p className="mt-5 font-display text-[21px] font-semibold uppercase leading-[1.1] tracking-[-0.04em] text-white/45">
            {/* the strike is a background line, so it runs through every wrapped line of the title */}
            <span
              className="bg-[linear-gradient(#f97316,#f97316)] bg-no-repeat [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
              style={{
                backgroundPosition: "0 55%",
                backgroundSize: inView ? "100% 2px" : "0% 2px",
                transition: `background-size 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.1}s`,
              }}
            >
              {w.problem}
            </span>
          </p>
          <p className="mt-3 text-[15px] leading-[1.45] text-white/40">{w.problemBody}</p>
        </div>
        <div className="relative flex-1 overflow-hidden border-t border-line">
          <motion.span
            aria-hidden
            className="absolute inset-0 origin-bottom bg-accent"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : undefined}
            transition={{ duration: 0.9, ease: EXPO, delay: 0.7 + i * 0.1 }}
          />
          <motion.div className="relative p-[30px] text-ink" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.7, ease: EXPO, delay: 1 + i * 0.1 }}>
            <p className="text-tiny">The fix</p>
            <h3 className="mt-5 font-display text-[23px] font-bold uppercase leading-[1.05] tracking-[-0.045em]">{w.fix}</h3>
            <p className="mt-3 text-[15px] leading-[1.45] text-ink/80">{w.fixBody}</p>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
}

export function WhyUs() {
  return (
    <Section id="why" label="Why Onething">
      <SectionHead
        tag="Why us"
        lit={7}
        title="The old way vs ours"
        note="Most agencies are built to maximize billable hours. We are built to maximize your speed to market."
      />
      <div className="mt-[50px] grid gap-[10px] md:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Card key={w.problem} w={w} i={i} />
        ))}
      </div>
      <Reveal className="mt-[50px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[20.8px] uppercase leading-[1.1] tracking-[-0.04em]">Speed is leverage.</p>
        <Button href={CONTACT.whatsapp} variant="ghost">
          Book a slot
        </Button>
      </Reveal>
    </Section>
  );
}
