"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { NAV, CONTACT } from "@/lib/content";
import { Button } from "../ui/Button";
import { RollText } from "../ui/RollText";
import { Corners } from "../ui/Corners";
import { useLoader } from "../providers/LoaderProvider";

const EXPO = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const { ready } = useLoader();
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease: EXPO, delay: 0.25 }}
      >
        <nav className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-4 lg:h-[78px] lg:px-10" aria-label="Primary">
          <a href="#top" className="relative block h-[30px] w-[102px] lg:h-[36px] lg:w-[122px]" aria-label="Onething Studio, back to top">
            <Image src="/brand/logo.png" alt="Onething Studio" fill sizes="122px" className="object-contain object-left" priority />
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            {NAV.map((item, i) => (
              <li key={item.href} className="flex items-center">
                {i > 0 && <span className="px-[22px] text-[13px] text-white/30">/</span>}
                <a href={item.href} className="group text-h6 text-[14px] font-semibold tracking-[-0.01em] text-white">
                  <RollText>{item.label}</RollText>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={CONTACT.whatsapp} size="sm" arrow={false}>
              Book a slot
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center bg-panel lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Corners />
            <span className="relative block h-[8px] w-[16px]">
              <span className={`absolute left-0 top-0 h-px w-full bg-white transition-transform duration-500 ease-out-expo ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-full bg-white transition-transform duration-500 ease-out-expo ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-[64px] z-40 flex flex-col justify-between bg-ink px-4 pb-8 pt-10 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-[44px] font-bold uppercase leading-[1.05] tracking-[-0.045em]"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.7, ease: EXPO, delay: 0.15 + i * 0.05 }}
                  >
                    <span className="mr-3 align-top text-tiny text-muted">/0{i + 1}/</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-3">
              <Button href={CONTACT.whatsapp}>Book a slot</Button>
              <a href={CONTACT.mailto} className="text-tiny text-muted">
                {CONTACT.email}
              </a>
              <a href={CONTACT.tel} className="text-tiny text-muted">
                {CONTACT.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
