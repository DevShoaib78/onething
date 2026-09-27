"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ENGAGEMENTS, ADDON, CONTACT } from "@/lib/content";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Corners } from "../ui/Corners";

function PlusCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 5v6M5 8h6" />
    </svg>
  );
}

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="relative flex h-[54px] w-full items-center justify-between bg-card px-[15px] text-left text-[14.4px] tracking-[-0.02em]"
    >
      <Corners />
      {label}
      <span className={`relative h-6 w-10 transition-colors duration-300 ${on ? "bg-accent" : "bg-white/[0.06]"}`}>
        <span
          className={`absolute left-1 top-1 h-4 w-4 transition-transform duration-500 ease-out-expo ${on ? "translate-x-4 bg-ink" : "bg-white"}`}
        />
      </span>
    </button>
  );
}

function Plan({ p, i }: { p: (typeof ENGAGEMENTS)[number]; i: number }) {
  const [addon, setAddon] = useState(false);
  return (
    <Reveal delay={i * 0.06} className="relative flex flex-col overflow-hidden bg-card p-[30px]">
      {p.featured && (
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_70%_100%,rgba(249,115,22,0.22),transparent_70%)]" />
      )}
      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-display text-[20.8px] font-medium uppercase leading-[1.1] tracking-[-0.04em]">{p.name}</h3>
        {p.featured && (
          <span className="relative inline-flex h-[30px] items-center bg-card px-[15px] text-tiny">
            <Corners />
            Our signature
          </span>
        )}
      </div>
      <p className="relative mt-[14px] max-w-[280px] text-[14.4px] leading-[1.25] text-muted">{p.blurb}</p>
      <p className="relative mt-10 flex items-baseline gap-1">
        <span className="font-display text-[40px] font-bold leading-none tracking-[-0.05em]">{p.time}</span>
        {p.unit && <span className="text-[14.4px]">/{p.unit}</span>}
      </p>
      <div className="relative mt-[25px]">
        <Toggle on={addon} onClick={() => setAddon((v) => !v)} label={ADDON.label} />
      </div>
      <p className="relative mt-[25px] text-h6">What&apos;s included</p>
      <ul className="relative mt-[18px] flex flex-1 flex-col gap-4">
        {p.includes.map((x) => (
          <li key={x} className="flex items-center gap-[10px] text-[14.4px]">
            <PlusCircle />
            {x}
          </li>
        ))}
        <AnimatePresence initial={false}>
          {addon && (
            <motion.li
              initial={{ opacity: 0, height: 0, x: -10 }}
              animate={{ opacity: 1, height: "auto", x: 0 }}
              exit={{ opacity: 0, height: 0, x: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-[10px] text-[14.4px] text-accent"
            >
              <PlusCircle />
              {ADDON.item}
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
      <Button href={CONTACT.whatsapp} arrow={false} variant={p.featured ? "light" : "ghost"} className="relative mt-10 w-full">
        Start a project
      </Button>
    </Reveal>
  );
}

export function Engagements() {
  return (
    <Section id="engagements" label="Engagements">
      <SectionHead
        tag="Engagements"
        lit={9}
        title="Scope sets the pace"
        note="Scope decides the timeline; the pace does not change. Pricing is set together on a call, and the quotation comes before any work begins."
      />
      <div className="mt-[50px] grid gap-[10px] lg:grid-cols-3 lg:gap-0">
        {ENGAGEMENTS.map((p, i) => (
          <Plan key={p.name} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
