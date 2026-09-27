"use client";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { SERVICES, CONTACT, type Service } from "@/lib/content";
import { SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const EXPO = [0.16, 1, 0.3, 1] as const;
const COLLAPSED = 120;
const GAP = 10;
const N = SERVICES.length;

const num = (i: number) => `/${String(i + 1).padStart(2, "0")}/`;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative inline-flex h-8 items-center border border-line px-3 text-tiny text-muted">
      <i className="absolute -left-px -top-px h-[5px] w-[5px] border-l border-t border-white/60" />
      <i className="absolute -right-px -top-px h-[5px] w-[5px] border-r border-t border-white/60" />
      <i className="absolute -bottom-px -left-px h-[5px] w-[5px] border-b border-l border-white/60" />
      <i className="absolute -bottom-px -right-px h-[5px] w-[5px] border-b border-r border-white/60" />
      {children}
    </li>
  );
}

function Phone({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative aspect-[9/19.5] w-[42%] max-w-[190px] overflow-hidden rounded-[26px] border-[5px] border-[#1c1c1c] bg-black shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${className}`}>
      <Image src={src} alt="Mobile app screen built by Onething" fill sizes="220px" className="object-cover object-top" />
    </div>
  );
}

function Visual({ s }: { s: Service }) {
  if (s.visual.kind === "phones") {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(249,115,22,0.18),transparent_65%),#0e0e0e]">
        <div className="absolute inset-0 flex items-center justify-center gap-[7%] px-[8%]">
          <Phone src={s.visual.srcs[0]} className="-translate-y-5" />
          <Phone src={s.visual.srcs[1]} className="translate-y-5" />
        </div>
      </div>
    );
  }
  return <Image src={s.visual.src} alt={s.visual.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-left-top opacity-85" />;
}

function Details({ s, i, compact = false }: { s: Service; i: number; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col justify-between gap-10 p-[30px]">
      <div>
        {!compact && (
          <>
            <p className="text-tiny text-muted">{num(i)}</p>
            <h3 className="text-h3 mt-6">{s.title}</h3>
          </>
        )}
        <p className={`${compact ? "" : "mt-[10px]"} max-w-[384px] text-[16px] leading-[1.4] text-muted`}>{s.body}</p>
      </div>
      <div>
        <p className="text-tiny text-dim">What we offer</p>
        <ul className="mt-[14px] flex max-w-[384px] flex-wrap gap-[10px]">
          {s.offers.map((o) => (
            <Chip key={o}>{o}</Chip>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Desktop: the section pins and the panels open one after another as you scroll.
// The open panel widens and clips its content into view; the rest are 120px columns.
function Pinned() {
  const track = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [active, setActive] = useState(0);
  const [openW, setOpenW] = useState(760);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N * 0.999))));
  });

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setOpenW(e.contentRect.width - (N - 1) * (COLLAPSED + GAP)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Clicking a panel scrolls to the point where it opens.
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    lenis?.scrollTo(top + span * ((i + 0.5) / N), { duration: 1.2 });
  };

  return (
    <div ref={track} className="relative hidden xl:block" style={{ height: `calc(100svh + ${N - 1} * 55svh)` }}>
      <div className="sticky top-[78px] flex h-[calc(100svh-78px)] flex-col justify-center">
        <SectionHead
          tag="Capabilities"
          lit={4}
          title="What we build"
          note="Described by what it has to do for you, not by the technology underneath. Every build starts with the scope in writing."
        />
        <div ref={row} className="mt-[44px] flex h-[min(500px,calc(100svh-330px))] gap-[10px]">
          {SERVICES.map((s, i) => {
            const open = i === active;
            return (
              <motion.div
                key={s.title}
                className={`relative overflow-hidden border border-line bg-card ${open ? "" : "cursor-pointer hover:bg-white/[0.04]"}`}
                animate={{ width: open ? openW : COLLAPSED }}
                initial={false}
                transition={{ duration: 0.9, ease: EXPO }}
                onClick={() => go(i)}
                role="button"
                tabIndex={open ? -1 : 0}
                aria-expanded={open}
                aria-label={s.title}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(i)}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 flex"
                  style={{ width: openW }}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ duration: open ? 0.6 : 0.25, delay: open ? 0.2 : 0 }}
                >
                  <div className="w-1/2">
                    <Details s={s} i={i} />
                  </div>
                  <div className="relative w-1/2 border-l border-black">
                    <Visual s={s} />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-between py-[30px]"
                  animate={{ opacity: open ? 0 : 1 }}
                  transition={{ duration: open ? 0.2 : 0.5, delay: open ? 0 : 0.35 }}
                  aria-hidden
                >
                  <span className="text-tiny text-muted">{num(i)}</span>
                  <span className="text-h3 rotate-180 [writing-mode:vertical-rl]">{s.title}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        {/* scroll position through the five capabilities */}
        <div className="mt-6 flex gap-[6px]" aria-hidden>
          {SERVICES.map((s, i) => (
            <span key={s.title} className={`h-[2px] flex-1 transition-colors duration-500 ${i <= active ? "bg-accent" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile: every card opens by itself as it scrolls into view.
function Stacked() {
  return (
    <div className="xl:hidden">
      <SectionHead
        tag="Capabilities"
        lit={4}
        title="What we build"
        note="Described by what it has to do for you, not by the technology underneath. Every build starts with the scope in writing."
      />
      <div className="mt-[40px] flex flex-col gap-[10px]">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="border border-line bg-card">
            <div className="flex items-center gap-4 p-5">
              <span className="text-tiny text-muted">{num(i)}</span>
              <span className="text-h3">{s.title}</span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "auto", opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -35% 0px" }}
              transition={{ duration: 0.8, ease: EXPO }}
              className="overflow-hidden"
            >
              <div className="-mt-[30px]">
                <Details s={s} i={i} compact />
              </div>
              <div className="relative aspect-[4/3] border-t border-black">
                <Visual s={s} />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" aria-label="Capabilities" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <div className="border-x border-line px-5 py-20 lg:px-10 lg:py-[100px] xl:py-[40px]">
          <Pinned />
          <Stacked />
          <Reveal className="mt-[50px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between xl:mb-[60px]">
            <p className="font-display text-[20.8px] uppercase leading-[1.1] tracking-[-0.04em]">Not sure which one fits? Let&apos;s talk.</p>
            <Button href={CONTACT.whatsapp} variant="ghost">
              Get in touch
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
