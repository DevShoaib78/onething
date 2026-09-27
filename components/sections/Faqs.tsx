"use client";
import { useState } from "react";
import { FAQS } from "@/lib/content";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Corners } from "../ui/Corners";
import { Collapse, PlusMinus } from "../ui/Accordion";

type Tab = keyof typeof FAQS;
const TABS = Object.keys(FAQS) as Tab[];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Both tabs and every answer are rendered into the HTML; the inactive tab is only hidden.
export function Faqs() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [open, setOpen] = useState(-1);

  return (
    <Section id="faqs" label="Questions and answers">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:gap-16 xl:gap-20">
        <SectionHead tag="Answers" lit={10} stacked title="Answers" note="Answers to the most common questions about how we work, what it costs and how long it takes." />
        <Reveal>
          <div className="grid grid-cols-2 gap-[10px]" role="tablist" aria-label="Question topics">
            {TABS.map((t) => {
              const active = t === tab;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  id={`tab-${slug(t)}`}
                  aria-selected={active}
                  aria-controls={`panel-${slug(t)}`}
                  onClick={() => {
                    setTab(t);
                    setOpen(-1);
                  }}
                  className="group relative h-10 overflow-hidden bg-panel"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-0 bg-accent transition-[height] duration-500 ease-out-expo ${active ? "h-full" : "h-px group-hover:h-full"}`}
                  />
                  {!active && <Corners />}
                  <span className={`relative text-tiny transition-colors duration-300 ${active ? "text-ink" : "text-white group-hover:text-ink"}`}>{t}</span>
                </button>
              );
            })}
          </div>
          <div className="relative mt-[10px]">
            <Corners />
            {TABS.map((t) => (
              <ul key={t} id={`panel-${slug(t)}`} role="tabpanel" aria-labelledby={`tab-${slug(t)}`} hidden={t !== tab} className="fade-up">
                {FAQS[t].map((f, i) => {
                  const isOpen = t === tab && open === i;
                  const id = `faq-${slug(t)}-${i}`;
                  return (
                    <li key={f.q} className="border-b border-ink bg-card last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="flex min-h-[70px] w-full items-center justify-between gap-6 px-[25px] py-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={id}
                      >
                        <h3 className="text-h6 leading-[1.2]">{f.q}</h3>
                        <PlusMinus open={isOpen} />
                      </button>
                      <Collapse open={isOpen} id={id}>
                        <p className="px-[25px] pb-6 text-[16px] leading-[1.4] text-muted">{f.a}</p>
                      </Collapse>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
