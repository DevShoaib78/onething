// Search, social and structured-data settings. Everything is built from lib/content.ts,
// so the JSON-LD always matches what is on the page.
import { CASE_STUDIES, CONTACT, FAQS, PROCESS, SERVICES, INCLUDED } from "./content";

export const SITE = {
  url: "https://onething.studio",
  // Where the site is actually served from. Previews (og:image) must point at a live address, so on a
  // test deploy this follows the deploy URL; on production it is onething.studio.
  deployUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
    "https://onething.studio",
  name: "Onething Studio",
  title: "Onething Studio | Websites, Apps and MVPs in 1 to 4 Weeks",
  description:
    "Onething is a rapid digital product studio. We design and build websites, web apps, mobile apps, MVPs and AI automation for founders, from idea to launch in 1 to 4 weeks.",
  keywords: [
    "digital product studio",
    "MVP development agency",
    "build MVP in 4 weeks",
    "startup app development",
    "website design and development",
    "web app development",
    "mobile app development",
    "Flutter app development",
    "Next.js development agency",
    "AI automation agency",
    "SEO GEO AEO websites",
    "Onething Studio",
  ],
  locale: "en_US",
  ogAlt: "Onething Studio: websites, apps and MVPs from idea to launch in 1 to 4 weeks",
};

const ORG_ID = `${SITE.url}/#organization`;

export function jsonLd() {
  const faqs = Object.values(FAQS).flat();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: "Onething",
        url: SITE.url,
        logo: `${SITE.url}/brand/logo.png`,
        image: `${SITE.url}/og-image.png`,
        description: SITE.description,
        slogan: "A studio built for ambitious founders",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        priceRange: "Quoted per project",
        knowsAbout: [
          "Website design and development",
          "Web application development",
          "Mobile app development",
          "MVP development",
          "AI automation",
          "Search engine optimization",
          "Generative engine optimization",
          "Answer engine optimization",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT.email,
          telephone: CONTACT.phone,
          availableLanguage: ["English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "What we build",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body, serviceType: s.offers.join(", "), provider: { "@id": ORG_ID } },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": ORG_ID },
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/#work`,
        name: "Products shipped by Onething Studio",
        itemListElement: CASE_STUDIES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "CreativeWork", name: c.name, description: `${c.category}: ${c.summary}`, url: c.url, creator: { "@id": ORG_ID } },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${SITE.url}/#process`,
        name: "How Onething takes a product from idea to launch",
        totalTime: "P4W",
        step: PROCESS.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: `${p.when}: ${p.title}`, text: p.body })),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/#included`,
        name: "Included with every build",
        itemListElement: INCLUDED.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.title, description: x.body })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faqs`,
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
