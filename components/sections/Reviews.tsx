import { TESTIMONIALS, CONTACT } from "@/lib/content";
import { Section, SectionHead } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stars } from "../ui/Stars";
import { Button } from "../ui/Button";

function Quote({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 14" fill="currentColor" className={className} aria-hidden>
      <path d="M0 14V8.2C0 3.6 2.3.9 6.4 0l.8 1.6C5 2.3 3.9 3.8 3.8 6H7v8H0zm10.2 0V8.2c0-4.6 2.3-7.3 6.4-8.2l.8 1.6c-2.2.7-3.3 2.2-3.4 4.4h3.2v8h-7z" />
    </svg>
  );
}

// Left panel art: a dot grid in perspective with one oversized orange quote mark lit from below.
function PanelArt() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-[#0d0d0d]">
      <div
        className="absolute inset-x-[-40%] bottom-[-10%] h-[80%] opacity-60 [transform:perspective(600px)_rotateX(58deg)]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to top, #000 10%, transparent 85%)",
        }}
      />
      <div className="absolute bottom-[8%] left-1/2 h-[55%] w-[90%] -translate-x-1/2 rounded-full bg-accent/25 blur-[70px]" />
      <Quote className="absolute right-[-6%] top-[18%] w-[70%] text-accent opacity-90 drop-shadow-[0_20px_60px_rgba(249,115,22,0.45)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,13,0.2),rgba(13,13,13,0.1)_40%,rgba(13,13,13,0.85))]" />
    </div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" label="Founder stories">
      <SectionHead
        tag="Reviews"
        lit={8}
        title="Founder stories"
        note="What founders say once the product is live. Exactly as they wrote it."
      />
      <div className="mt-[50px] grid gap-[10px] lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-0 xl:grid-cols-[427px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-[98px] lg:self-start">
          <Reveal className="relative flex min-h-[480px] flex-col justify-between overflow-hidden p-[30px] lg:h-[569px]">
            <PanelArt />
            <div className="relative">
              <Stars />
              <p className="mt-[10px] text-h6">Founders from multiple countries</p>
            </div>
            <div className="relative">
              <p className="font-display text-[34px] font-bold uppercase leading-[1.02] tracking-[-0.05em]">
                Unedited.
                <br />
                <span className="text-dim">In their</span>
                <br />
                own words.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-[10px] sm:grid-cols-2 lg:gap-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.06} className="flex flex-col justify-between gap-8 bg-card p-[30px] transition-colors duration-500 hover:bg-white/[0.04] lg:min-h-[285px]">
              <div>
                <Quote className="w-[18px] text-accent" />
                <blockquote className="mt-6 font-display text-[18px] font-medium leading-[1.45] tracking-[-0.03em]">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
              <div className="border-t border-line pt-5">
                <p className="text-h6">{t.name}</p>
                <p className="mt-2 text-tiny leading-[1.3] text-muted">{t.role}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.06} className="flex flex-col justify-between gap-8 bg-accent p-[30px] text-ink lg:min-h-[285px]">
            <p className="font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.05em]">Your story could be next.</p>
            <Button href={CONTACT.whatsapp} className="self-start">
              Start a project
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
