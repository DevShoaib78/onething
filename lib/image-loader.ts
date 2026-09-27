// Static export has no image server, so project screenshots ship in three pre-made widths:
// /work/640/, /work/1080/ and the original (1440). This picks the smallest one that covers
// the requested width; everything outside /work/ is served as is.
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/work/")) return src;
  if (width <= 640) return src.replace("/work/", "/work/640/");
  if (width <= 1080) return src.replace("/work/", "/work/1080/");
  return src;
}
