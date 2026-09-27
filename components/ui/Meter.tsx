"use client";
import { motion } from "motion/react";

// Ten thin bars; the first `lit` of them fill orange one after another when scrolled into view.
export function Meter({ lit = 1 }: { lit?: number }) {
  return (
    <span className="flex h-[10px] items-center gap-[2px]" aria-hidden>
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.i
          key={i}
          className="block h-[10px] w-[2px]"
          initial={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          whileInView={i < lit ? { backgroundColor: "#f97316" } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.07, duration: 0.2 }}
        />
      ))}
    </span>
  );
}
