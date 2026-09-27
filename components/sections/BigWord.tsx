"use client";
import { motion, useInView } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

const WORD = "ONETHING STUDIO";

// The footer's oversized wordmark, sized to span its column exactly, letters rising in one after another.
// The trigger sits on the line itself: the letters start clipped, so they can't observe themselves.
export function BigWord() {
  const ref = useRef<HTMLParagraphElement>(null);
  const measure = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState(150);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  useLayoutEffect(() => {
    const el = ref.current;
    const m = measure.current;
    if (!el || !m) return;
    const fit = () => {
      const w = m.getBoundingClientRect().width; // width of the word at 100px
      if (w) setSize(Math.floor((el.clientWidth / w) * 100 * 0.995));
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const type = "font-display font-bold uppercase tracking-[-0.06em] whitespace-pre";
  return (
    <div className="relative mt-24 overflow-hidden">
      <span ref={measure} aria-hidden className={`invisible absolute left-0 top-0 text-[100px] ${type}`}>
        {WORD}
      </span>
      <p ref={ref} aria-label="Onething Studio" className={`flex overflow-hidden leading-[0.9] text-[#3d3d3d] ${type}`} style={{ fontSize: size }}>
        {WORD.split("").map((ch, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block pb-[0.06em]"
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : undefined}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.035 }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
