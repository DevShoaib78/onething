"use client";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useLoader } from "../providers/LoaderProvider";

const WORD = "ONETHING STUDIO";
const EXPO = [0.16, 1, 0.3, 1] as const;
const QUART = [0.76, 0, 0.24, 1] as const;

// Letters rise out of a blur one after another (the stagger draws a curve across the word),
// hold, then drift up while the whole panel lifts away to reveal the hero.
export function Preloader() {
  const { setReady } = useLoader();
  const lenis = useLenis();
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setPhase("out"), reduced ? 300 : 2300);
    const t2 = setTimeout(() => setReady(true), reduced ? 300 : 2450);
    const t3 = setTimeout(() => setPhase("gone"), reduced ? 900 : 3500);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [setReady]);

  useEffect(() => {
    if (!lenis) return;
    if (phase === "in") lenis.stop();
    else lenis.start();
  }, [lenis, phase]);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
          initial={{ y: 0 }}
          animate={phase === "out" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 1.05, ease: QUART, delay: phase === "out" ? 0.1 : 0 }}
          aria-hidden
        >
          <motion.div
            className="flex whitespace-pre font-display text-[clamp(38px,5.2vw,76px)] font-bold uppercase leading-none tracking-[-0.045em]"
            animate={phase === "out" ? { y: -70, opacity: 0.35, filter: "blur(6px)" } : { y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: QUART }}
          >
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 260, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.25 + i * 0.055, duration: 1.1, ease: EXPO }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
            <motion.span
              className="ml-[0.06em] inline-block h-[0.2em] w-[0.2em] self-end bg-accent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.35, duration: 0.5, ease: EXPO }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
