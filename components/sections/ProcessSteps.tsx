"use client";
import { useState } from "react";
import { PROCESS } from "@/lib/content";
import { Corners } from "../ui/Corners";
import { Collapse, PlusMinus } from "../ui/Accordion";
import { Reveal } from "../ui/Reveal";

// One step open at a time, the first open by default.
export function ProcessSteps() {
  const [open, setOpen] = useState(0);
  return (
    <div className="relative flex flex-col gap-[10px]">
      {PROCESS.map((step, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={step.title} delay={i * 0.06}>
            <div className="relative bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-[30px] py-[26px] text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-[15px]">
                  <span className="relative inline-flex h-6 items-center px-3 text-tiny text-muted">
                    <Corners />/{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h3">{step.title}</span>
                </span>
                <span className="flex items-center gap-5">
                  <span className="hidden text-tiny text-dim sm:inline">{step.when}</span>
                  <PlusMinus open={isOpen} />
                </span>
              </button>
              <Collapse open={isOpen}>
                <div className="px-[30px] pb-[30px]">
                  <p className="max-w-[540px] text-[16px] leading-[1.4] text-muted">{step.body}</p>
                  <p className="mt-5 text-tiny text-dim">What this includes</p>
                  <ul className="mt-[14px] flex flex-wrap gap-2">
                    {step.includes.map((x) => (
                      <li key={x} className="relative inline-flex h-[30px] items-center px-[15px] text-tiny text-muted">
                        <Corners />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
