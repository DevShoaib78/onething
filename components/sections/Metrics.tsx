"use client";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/content";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
}

// Four numbers that count up when they arrive, suffix in orange, tally marks top right.
export function Metrics() {
  return (
    <section aria-label="Numbers" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <div className="grid grid-cols-2 border-x border-line lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <div key={m.label} className="flex min-h-[214px] flex-col justify-between border-line p-[30px] [&:not(:first-child)]:border-l max-lg:[&:nth-child(3)]:border-l-0 max-lg:[&:nth-child(n+3)]:border-t">
              <div className="flex items-center justify-between">
                <span className="text-tiny text-muted">/{String(i + 1).padStart(2, "0")}/</span>
                <span className="flex gap-[3px]" aria-hidden>
                  {Array.from({ length: i + 1 }).map((_, k) => (
                    <i key={k} className="block h-[10px] w-[2px] bg-accent" />
                  ))}
                </span>
              </div>
              <div>
                <p className="font-display text-[clamp(34px,4.3vw,62px)] font-bold uppercase leading-[1.1] tracking-[-0.05em] whitespace-nowrap">
                  {m.prefix}
                  <Count to={m.value} />
                  <span className="text-accent">{m.suffix}</span>
                </p>
                <p className="mt-2 text-h6">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
