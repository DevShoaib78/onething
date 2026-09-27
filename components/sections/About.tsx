"use client";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { ABOUT } from "@/lib/content";
import { Section } from "../ui/Section";
import { SectionTag } from "../ui/SectionTag";
import { Reveal } from "../ui/Reveal";

function Word({ word, progress, range, lit }: { word: string; progress: MotionValue<number>; range: [number, number]; lit: boolean }) {
  const color = useTransform(progress, range, ["#787878", "#ffffff"]);
  return (
    <span className="mr-[0.26em] inline-block">
      <motion.span style={{ color: lit ? "#ffffff" : color }}>{word}</motion.span>
    </span>
  );
}

// The statement lights up word by word as it scrolls through the viewport.
export function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = ABOUT.split(" ");
  return (
    <Section id="about" label="About Onething" inner="px-5 py-20 lg:px-10 lg:py-[100px]">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <SectionTag label="About" lit={2} />
        </Reveal>
        <p
          ref={ref}
          className="mt-6 max-w-[900px] font-display text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.12] tracking-[-0.045em]"
        >
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} lit={i === 0} />
          ))}
        </p>
      </div>
    </Section>
  );
}
