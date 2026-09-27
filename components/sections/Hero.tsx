"use client";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HERO, CONTACT } from "@/lib/content";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionTag } from "../ui/SectionTag";
import { Stars } from "../ui/Stars";
import { WordTicker } from "./WordTicker";
import { useLoader } from "../providers/LoaderProvider";

const MicroSlats = dynamic(() => import("../reactbits/MicroSlats"), { ssr: false });

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { ready } = useLoader();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <header id="top" ref={ref} className="relative pt-[64px] lg:pt-0">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <div className="relative flex min-h-[680px] flex-col justify-between overflow-hidden border-x border-line bg-ink lg:h-[calc(100svh-81px)] lg:max-h-[980px] lg:min-h-[700px]">
          <motion.div
            className="absolute inset-0"
            style={{ y: sceneY }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={ready ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {ready && (
            <MicroSlats
              preset="swell"
              color="#f97316"
              glintColor="#ffd9b8"
              backgroundColor="#0a0a0a"
              slatWidth={10}
              slatHeight={26}
              gap={3}
              cursorSize={46}
              glint={1.05}
              contrast={1.5}
              introDuration={1.8}
            />
            )}
          </motion.div>
          {/* keep the copy readable over the scene */}
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.45)_38%,transparent_60%)] max-lg:bg-[linear-gradient(180deg,rgba(10,10,10,0.35),rgba(10,10,10,0.2)_40%,rgba(10,10,10,0.9)_78%)]" />
          <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(transparent,#0a0a0a)]" />

          <div className="pointer-events-none relative px-5 pt-16 lg:px-10 lg:pt-[150px]">
            <Reveal gated delay={0.06}>
              <SectionTag label={HERO.badge} lit={1} />
            </Reveal>
            <Reveal gated delay={0.12} className="mt-5">
              <h1 className="max-w-[1000px] font-display text-[clamp(40px,5.7vw,82px)] font-bold uppercase leading-[1.08] tracking-[-0.045em]">
                {HERO.line1}
                <br />
                <span className="text-dim">{HERO.line2}</span>
              </h1>
            </Reveal>
          </div>

          <div className="pointer-events-none relative flex flex-col gap-10 px-5 pb-10 pt-40 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:pb-[50px] lg:pt-16">
            <div className="max-w-[500px]">
              <Reveal gated delay={0.18}>
                <p className="text-[17.6px] leading-[1.4] tracking-[-0.02em] text-muted">
                  {HERO.lead} <span className="text-white">{HERO.leadStrong}</span> {HERO.leadTail}
                </p>
              </Reveal>
              <Reveal gated delay={0.24} className="pointer-events-auto mt-6 flex flex-wrap gap-[10px]">
                <Button href={CONTACT.whatsapp}>Book a slot</Button>
                <Button href="#work" variant="ghost">
                  See what we shipped
                </Button>
              </Reveal>
            </div>
            <Reveal gated delay={0.27} className="lg:pr-10">
              <Stars />
              <p className="mt-[10px] text-h6 text-white">{HERO.proofTitle}</p>
              <p className="mt-[9px] text-tiny text-muted">{HERO.proofSub}</p>
            </Reveal>
          </div>
        </div>
      </div>
      <WordTicker />
    </header>
  );
}
