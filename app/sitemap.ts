import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Written out as a plain file by the static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/llms.txt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
