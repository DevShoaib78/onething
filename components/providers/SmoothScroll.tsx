"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

// In-page anchors go through Lenis so they glide instead of jumping.
function AnchorLinks() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      const target = href === "#top" ? 0 : (document.querySelector(href) as HTMLElement | null);
      if (target === null) return;
      lenis.scrollTo(target, { offset: href === "#top" ? 0 : -78, duration: 1.4 });
      history.replaceState(null, "", href === "#top" ? location.pathname : href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1, anchors: false }}>
      <AnchorLinks />
      {children}
    </ReactLenis>
  );
}
