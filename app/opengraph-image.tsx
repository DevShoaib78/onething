import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The link preview for WhatsApp, Telegram, LinkedIn, X and search, generated at build time.
// Everything important sits in the centre: WhatsApp sometimes shows a square crop from the middle.
export const alt = "Onething Studio: websites, apps and MVPs from idea to launch in 1 to 4 weeks";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [manrope, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Manrope-ExtraBold.ttf")),
    readFile(join(process.cwd(), "public/brand/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const slats = Array.from({ length: 60 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(249,115,22,0.28), #0a0a0a 70%)",
          fontFamily: "Manrope",
          position: "relative",
        }}
      >
        {/* orange slats along the foot, echoing the hero */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 150, display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 8 }}>
          {slats.map((_, i) => {
            const k = Math.abs(Math.sin(i * 0.23 + 0.6)) * (1 - Math.abs(i - 29.5) / 40);
            return <div key={i} style={{ width: 8, height: 14 + Math.round(120 * k), background: "#f97316", opacity: 0.18 + 0.7 * k, borderRadius: 4 }} />;
          })}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={430} height={127} alt="" />
        <div style={{ marginTop: 44, display: "flex", flexDirection: "column", alignItems: "center", color: "#fff" }}>
          <div style={{ fontSize: 54, letterSpacing: -2.5, lineHeight: 1.05 }}>A STUDIO BUILT FOR</div>
          <div style={{ fontSize: 54, letterSpacing: -2.5, lineHeight: 1.05, color: "#8a8a8a" }}>AMBITIOUS FOUNDERS</div>
          <div style={{ marginTop: 22, fontSize: 26, letterSpacing: -0.5, color: "rgba(255,255,255,0.75)" }}>Websites, apps and MVPs. Idea to launch in 1 to 4 weeks.</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Manrope", data: manrope, weight: 800, style: "normal" }] },
  );
}
