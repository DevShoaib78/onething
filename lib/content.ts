// All site copy in one place. Every project, claim and testimonial here is real:
// projects and testimonials come from the approved Onething promo (2026-09-26),
// positioning from the capability brochure and the live onething.studio.

export const CONTACT = {
  email: "shoaib@onething.studio",
  phone: "+91 7032141356",
  tel: "tel:+917032141356",
  whatsapp: "https://wa.me/917032141356",
  mailto: "mailto:shoaib@onething.studio?subject=New%20project%20for%20Onething",
};

export const NAV = [
  { label: "Index", href: "#top" },
  { label: "Shipped", href: "#work" },
  { label: "Capabilities", href: "#services" },
  { label: "Method", href: "#process" },
  { label: "Answers", href: "#faqs" },
];

export const HERO = {
  badge: "Booking new builds",
  line1: "A studio built for",
  line2: "ambitious founders",
  lead: "We design and build websites, web apps, mobile apps and MVPs that go from idea to launch in",
  leadStrong: "1 to 4 weeks.",
  leadTail: "Full focus, one clear outcome.",
  proofTitle: "20+ products live",
  proofSub: "Founders from multiple countries",
};

// The ticker under the hero, as on the original onething.studio.
export const TICKER = ["Ideate", "Build", "Ship", "Iterate"];

export const ABOUT =
  "Onething is a rapid digital product studio. We cut every idea down to what proves it, give it our full focus, and ship it live in weeks, not quarters. The people you talk to are the people building it.";

export type CaseStudy = {
  name: string;
  category: string;
  summary: string;
  url: string;
  image: string;
};

// In his order.
export const CASE_STUDIES: CaseStudy[] = [
  { name: "Souq-E-Deccan", category: "Event booking", summary: "Stall booking platform for a heritage market", url: "https://www.souqedeccan.com", image: "/work/souq.webp" },
  { name: "Brandqraft", category: "Agency platform", summary: "Branding and growth agency, built to win clients", url: "https://brandqraft.co", image: "/work/brandqraft.webp" },
  { name: "Skinature", category: "E-commerce", summary: "Skincare store brought back to life", url: "https://www.skinature.org", image: "/work/skinature.webp" },
  { name: "ScrapKart", category: "B2B marketplace", summary: "India's industrial scrap exchange", url: "https://www.scrapkart.app", image: "/work/scrapkart-main.webp" },
  { name: "Hyderabad Hustlers", category: "Media", summary: "Stories of the people moving Hyderabad forward", url: "https://www.hyderabadhustlers.com", image: "/work/hh.webp" },
  { name: "Eat Good Club", category: "Food & brand", summary: "Healthy food brand, from menu to order", url: "https://www.eatgoodclub.com", image: "/work/egc.webp" },
  { name: "CyFi", category: "Cybersecurity", summary: "Cybersecurity firm in Saudi Arabia", url: "https://cyfi.sa", image: "/work/cyfi.webp" },
  { name: "Draftroom", category: "Video studio", summary: "Video editing and content production", url: "https://draftroom.biz", image: "/work/draftroom.webp" },
  { name: "Ambliq Solutions", category: "AI product", summary: "AI receptionist that never misses a call", url: "https://www.ambliqsolutions.com", image: "/work/ambliq.webp" },
  { name: "Chipzenix", category: "Semiconductors", summary: "VLSI and embedded engineering", url: "https://chipzenix.vercel.app", image: "/work/chipzenix.webp" },
];

export type Service = {
  title: string;
  body: string;
  offers: string[];
  visual: { kind: "image"; src: string; alt: string } | { kind: "phones"; srcs: string[] };
};

export const SERVICES: Service[] = [
  {
    title: "Websites",
    body: "Sites that do a job for the business: convert, explain, sell, book. Built around your goals, not a template's.",
    offers: ["Marketing sites", "Portfolios", "E-commerce", "Booking flows", "SEO, GEO & AEO"],
    visual: { kind: "image", src: "/work/chipzenix-view.webp", alt: "Chipzenix website, built by Onething" },
  },
  {
    title: "Web apps",
    body: "Dashboards, portals, internal tools, marketplaces and SaaS. The software your operation runs on.",
    offers: ["Dashboards", "Portals", "Marketplaces", "SaaS"],
    visual: { kind: "image", src: "/work/scrapkart-app.webp", alt: "ScrapKart B2B scrap marketplace web app, built by Onething" },
  },
  {
    title: "Mobile apps",
    body: "From app idea to something people can install and use, without months of unnecessary development.",
    offers: ["iOS & Android", "Flutter", "Customer apps", "Partner apps"],
    visual: { kind: "phones", srcs: ["/work/aa-home.webp", "/work/fixit-home.webp"] },
  },
  {
    title: "MVPs",
    body: "The smallest useful version of the product, in real hands early, so you learn from users instead of guessing.",
    offers: ["Scope cutting", "Prototype", "Launch", "Handover"],
    visual: { kind: "image", src: "/work/leeza.webp", alt: "Leeza AI, an MVP built by Onething" },
  },
  {
    title: "AI & automation",
    body: "If your team keeps doing it, a system should. We automate the repeating work behind the product.",
    offers: ["Lead capture", "Support workflows", "Document processing", "Reporting"],
    visual: { kind: "image", src: "/work/ambliq-view.webp", alt: "Ambliq AI receptionist, built by Onething" },
  },
];

// From the original site's "What we ship".
export const INCLUDED = [
  { title: "MVP development", body: "Full-stack development of your minimum viable product in 1 to 4 weeks, tailored to your scope.", icon: "rocket" },
  { title: "Product strategy", body: "Defining the one thing that matters. Feature prioritization and roadmap planning.", icon: "layout" },
  { title: "Rapid prototyping", body: "Clickable designs to validate concepts with investors or users before building.", icon: "pen" },
  { title: "Post-launch support", body: "Weekly sprints to iterate on user feedback after the initial launch.", icon: "repeat" },
  { title: "Tech stack setup", body: "Scalable architecture on modern, industry-standard frameworks that grow with you.", icon: "database" },
  { title: "Code handover", body: "Clean, documented code ownership. No lock-ins. You own everything.", icon: "code" },
] as const;

export const PROCESS = [
  {
    when: "Day 1 to 3",
    title: "Deep dive",
    body: "We learn the business, the users and the constraints, then cut the scope to what proves the idea. You get the scope in plain language before any work begins.",
    includes: ["Discovery call", "Scope in writing", "Quotation", "Timeline"],
  },
  {
    when: "Week 1",
    title: "Prototype",
    body: "The full flow, designed and clickable, before a line of production code. Cheap to change your mind here, so this is where we do it.",
    includes: ["User flows", "Interface design", "Clickable prototype", "Review"],
  },
  {
    when: "Week 2 to 3",
    title: "Build",
    body: "Rapid development against a live URL you can open any day. Regular pushes, and a direct line to the person writing the code.",
    includes: ["Live URL", "Regular pushes", "Real content", "QA"],
  },
  {
    when: "Week 4",
    title: "Launch",
    body: "Production deployment, analytics, and the keys handed over. Code, design files and accounts, all in your name.",
    includes: ["Deployment", "Analytics", "Documentation", "Full handover"],
  },
];

// The old way vs ours, after the live site's comparison.
export const WHY = [
  {
    problem: "Fractured focus",
    problemBody: "Your product gets whatever attention is left after everyone else's.",
    fix: "Full focus",
    fixBody: "While we build yours, a dedicated team owns it end to end. The people you talk to are the people building it.",
  },
  {
    problem: "The black box",
    problemBody: "Radio silence for weeks. Then a demo that misses the mark.",
    fix: "Radical transparency",
    fixBody: "Regular pushes and a live URL from early on. You watch the product evolve in real time.",
  },
  {
    problem: "Feature bloat",
    problemBody: "Over-engineering features that users might not even want.",
    fix: "Ruthless MVP",
    fixBody: "We build only what is needed to validate. Anything version one does not need gets cut before it costs you.",
  },
  {
    problem: "Locked in",
    problemBody: "The work ships, but the code, the keys and the knowledge stay with the agency.",
    fix: "You own everything",
    fixBody: "Clean, documented code, design files, infrastructure and accounts, all handed over in your name.",
  },
];

export type Testimonial = { quote: string; name: string; role: string };

// Wording exactly as approved for the promo, in his final order.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "From a simple scope document to a fully implemented app, they handled it all. They understood our vision, executed it phase by phase, and turned our ideas into a working product.",
    name: "Zeeshan",
    role: "Founder, AdvanceAILab, Canada",
  },
  {
    quote:
      "Every corner of the website breathes Hyderabad. From the seamless stall bookings to the way it presents our heritage, it built our brand and took Souq-E-Deccan to a much wider audience.",
    name: "Team Souq-E-Deccan",
    role: "Souq-E-Deccan",
  },
  {
    quote:
      "Shoaib offers great flexibility and agility while working on projects in terms of scope and also timeline. Does not create barriers to updates or changes and gets them done. Its a breeze working with Shoaib and output is always high quality. If its not, he is always happy to improvise. Fantastic experience.",
    name: "Brandqraft Team",
    role: "Branding, Digital Marketing and Business Scaling Agency",
  },
  {
    quote:
      "We had a slide deck, wireframes and an idea. Onething built our entire MVP in 3 weeks! The UI and UX were an absolute masterpiece.",
    name: "Ibrahim",
    role: "Founder, Leeza AI",
  },
  {
    quote:
      "The design feels so beautiful! It truly captures the brand's essence, and it brought Skinature back to life, running better than ever before.",
    name: "Adnan Touseef & Hina Mushfiq",
    role: "Co-founders, Skinature",
  },
  {
    quote: "The design of the product was so good! And the functionalities were developed really well!",
    name: "Muzammil",
    role: "Founder, ScrapKart",
  },
  {
    quote:
      "Onething is the best agency I've ever worked with, and one of its best qualities is crafting great user interfaces!",
    name: "Shoaib Khan",
    role: "Co-founder, Hyderabad Hustlers",
  },
  {
    quote:
      "Loved the work! Just had to give some basic info and Shoaib took care of everything, work was really awesome and quick! Really appreciate it. Would 100% recommend it to everyone",
    name: "Imran",
    role: "Founder, Draftroom",
  },
  {
    quote:
      "Thank you so much! It looks great.. behtreeeen hai jaisa mai imagine kari thi usse bhi kafi better hai and I really appreciate all the effort you've put into it!",
    name: "Syeda Sumaiyah",
    role: "Founder, Eat Good Club",
  },
];

export const METRICS = [
  { value: 20, suffix: "+", label: "Products live" },
  { value: 4, prefix: "1-", suffix: "wk", label: "Idea to launch" },
  { value: 100, suffix: "%", label: "Code ownership" },
  { value: 0, suffix: "", label: "Lock-ins" },
];

export const ENGAGEMENTS = [
  {
    name: "Quick build",
    blurb: "A landing page, a pitch prototype, or an automation that removes a weekly chore.",
    time: "Days",
    unit: "",
    includes: ["One focused deliverable", "Custom, on-brand design", "Live URL", "Fully responsive", "Handover"],
    featured: false,
  },
  {
    name: "The sprint",
    blurb: "A launch-ready MVP, a production website, or a web app with real users behind it.",
    time: "1-4",
    unit: "weeks",
    includes: ["Deep dive and scope", "Clickable prototype", "Build on a live URL", "Launch and analytics", "Code and keys in your name"],
    featured: true,
  },
  {
    name: "Platform",
    blurb: "Real backends, several user roles, money moving through them. Bigger scope, same weekly rhythm.",
    time: "4+",
    unit: "weeks",
    includes: ["Phased roadmap", "Multi-role apps", "Payments and admin", "Weekly releases", "Ongoing partnership"],
    featured: false,
  },
];

export const ADDON = { label: "Add AI & automation", item: "AI and automation layer" };

export const FAQS = {
  Projects: [
    {
      q: "How does the process work?",
      a: "Four steps. A deep dive to cut the scope, a clickable prototype in week one, the build on a live URL, then launch and handover. You know the scope before any work begins.",
    },
    {
      q: "How long does a project take?",
      a: "Scope decides the timeline; the pace does not change. Small builds take days, most MVPs and production websites take 1 to 4 weeks, and larger platforms run longer on the same weekly rhythm.",
    },
    {
      q: "How much does a project cost?",
      a: "The price is decided over a call or a meeting, once we understand what you need. We send the quotation, and work starts once it is agreed.",
    },
    {
      q: "What do you build?",
      a: "Websites, web apps, mobile apps and MVPs, plus the AI and automation work that sits behind them. Described by what it has to do for you, not by the technology underneath.",
    },
    {
      q: "Can you work with our existing brand or code?",
      a: "Yes. We can build on your brand system and extend an existing codebase, or start clean if that is faster for what version one needs.",
    },
  ],
  "Working together": [
    {
      q: "How much attention will my project get?",
      a: "Full attention. While we are building your product, a dedicated team owns it end to end, and you talk directly to the people designing and writing it.",
    },
    {
      q: "How will I see progress?",
      a: "A live URL from early on and regular pushes you can open and click through. You see it move, not a status update.",
    },
    {
      q: "Who owns the code?",
      a: "You do. Source code, design files, infrastructure and accounts are all handed over in your name at launch.",
    },
    {
      q: "Do you support the product after launch?",
      a: "Yes. Real usage tells you what to fix, cut and build next, and we can keep shipping in weekly sprints.",
    },
    {
      q: "How do we start?",
      a: "Message us on WhatsApp, call +91 7032141356, or email shoaib@onething.studio. We set up a call, and you have the scope within days.",
    },
  ],
};
