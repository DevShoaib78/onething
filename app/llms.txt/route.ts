// llms.txt: a plain-text brief for AI answer engines (GEO), generated from the same content as the page.
import { CASE_STUDIES, CONTACT, FAQS, INCLUDED, PROCESS, SERVICES, TESTIMONIALS } from "@/lib/content";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "## What we build",
    ...SERVICES.map((s) => `- ${s.title}: ${s.body} (${s.offers.join(", ")})`),
    "",
    "## Included with every build",
    ...INCLUDED.map((x) => `- ${x.title}: ${x.body}`),
    "",
    "## How we work",
    ...PROCESS.map((p) => `- ${p.when}, ${p.title}: ${p.body}`),
    "",
    "## Products we shipped (live)",
    ...CASE_STUDIES.map((c) => `- [${c.name}](${c.url}): ${c.category}. ${c.summary}.`),
    "",
    "## What founders say",
    ...TESTIMONIALS.map((t) => `- "${t.quote}" (${t.name}, ${t.role})`),
    "",
    "## Questions and answers",
    ...Object.values(FAQS)
      .flat()
      .flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## Contact",
    `- Email: ${CONTACT.email}`,
    `- Phone and WhatsApp: ${CONTACT.phone}`,
    `- Website: ${SITE.url}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
