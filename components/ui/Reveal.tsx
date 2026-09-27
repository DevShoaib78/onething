"use client";
import { motion, type HTMLMotionProps } from "motion/react";
import { useLoader } from "../providers/LoaderProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = HTMLMotionProps<"div"> & { delay?: number; y?: number; gated?: boolean };

// Fade-up used across the page: y 24 -> 0 over 0.9s on the reference's expo-out curve.
// `gated` elements wait for the preloader to leave instead of the viewport.
export function Reveal({ delay = 0, y = 24, gated = false, children, ...rest }: Props) {
  const { ready } = useLoader();
  const target = { opacity: 1, y: 0, transition: { delay, duration: 0.9, ease: EASE } };
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...(gated ? { animate: ready ? target : undefined } : { whileInView: target, viewport: { once: true, margin: "0px 0px -8% 0px" } })}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
