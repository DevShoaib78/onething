"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CASE_STUDIES, CONTACT, type CaseStudy } from "@/lib/content";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Badge, ArrowBox } from "../ui/Badge";
import { Button } from "../ui/Button";

const N = CASE_STUDIES.length;

// Each card pins under the navbar and the next one slides over it; covered cards shrink back,
// dim, and fade out entirely once two more are on top, so the browser never composites more
// than three cards at a time. Everything animated is transform or opacity only.
function Card({ item, index, progress, drift }: { item: CaseStudy; index: number; progress: MotionValue<number>; drift: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], drift ? ["0%", "-22%"] : ["0%", "0%"]);
  const start = index / N;
  const step = 1 / N;
  const last = index === N - 1;
  // Scroll-linked ranges must stay inside [0, 1] or the animation is rejected; clamp them all.
  const at = (v: number) => Math.min(1, Math.max(0, v));
  const buried = index < N - 2; // only cards with two more on top ever fade out
  const scale = useTransform(progress, [at(start), at(start + 2 * step)], [1, last ? 1 : 0.94]);
  const dim = useTransform(progress, [at(start), at(start + step)], [0, last ? 0 : 0.6]);
  const opacity = useTransform(progress, buried ? [at(start + 2 * step), at(start + 2.4 * step)] : [0, 1], buried ? [1, 0] : [1, 1]);

  return (
    <div className="sticky top-[76px] pb-[10px] lg:top-[98px]">
      <motion.a
        ref={ref}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale, opacity, transformOrigin: "50% 0%" }}
        className="group relative block aspect-[4/5] max-h-[calc(100svh-110px)] w-full overflow-hidden bg-panel will-change-transform [contain:paint] sm:aspect-auto sm:h-[min(720px,calc(100svh-130px))]"
        aria-label={`${item.name}: ${item.summary}. Opens the live site.`}
      >
        <motion.div className="absolute inset-x-0 top-0 h-[130%] will-change-transform" style={{ y }}>
          <Image
            src={item.image}
            alt={`${item.name} website, designed and built by Onething`}
            fill
            sizes="(min-width: 1440px) 1280px, (min-width: 640px) 90vw, 100vw"
            className="object-cover object-top"
            priority={index < 2}
          />
        </motion.div>
        <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.4),transparent_20%,transparent_55%,rgba(10,10,10,0.95))]" />
        <motion.span aria-hidden className="absolute inset-0 bg-ink" style={{ opacity: dim }} />

        <div className="absolute inset-x-5 top-5 flex items-start justify-between">
          <Badge>/{String(index + 1).padStart(2, "0")}/</Badge>
          <Badge>{item.category}</Badge>
        </div>
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6">
          <div>
            <h3 className="text-h3">{item.name}</h3>
            <p className="mt-2 text-[14.4px] leading-[1.3] text-white/70">{item.summary}</p>
          </div>
          <ArrowBox />
        </div>
      </motion.a>
    </div>
  );
}

export function CaseStudies() {
  const stack = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stack, offset: ["start start", "end end"] });
  // Image drift is a desktop nicety; on touch screens it only costs frames.
  const [drift, setDrift] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setDrift(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  return (
    <Section id="work" label="Shipped work">
      <SectionHead tag="Selected work" lit={3} title="Shipped & live" note="Real products for real founders, all live today. Every card opens the site we built." />
      <div ref={stack} className="relative mt-[50px]">
        {CASE_STUDIES.map((c, i) => (
          <Card key={c.name} item={c} index={i} progress={scrollYProgress} drift={drift} />
        ))}
      </div>
      <Reveal className="mt-[40px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[20.8px] uppercase leading-[1.1] tracking-[-0.04em]">Yours could be next.</p>
        <Button href={CONTACT.whatsapp} variant="ghost">
          Book a slot
        </Button>
      </Reveal>
    </Section>
  );
}
