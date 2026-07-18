export const site = {
  name: "One Better Labs",
  shortName: "OB Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://onebetterlabs.co.uk",
  email: process.env.CONTACT_EMAIL ?? "john@onebetterlabs.co.uk",
  description: "Building AI products that help people make one better decision.",
};

export const navigation = [
  { label: "Products", href: "/products" },
  { label: "Our Philosophy", href: "/#philosophy" },
  { label: "Our Story", href: "/our-story" },
  { label: "Updates", href: "/updates" },
  { label: "Contact", href: "/contact" },
];

export type Product = {
  slug: "cueiq" | "arlo" | "echo";
  name: string;
  number: string;
  positioning: string;
  promise: string;
  summary: string;
  status: string;
  audience: string;
  problem: string;
  approach: string;
  capabilities: string[];
  principles: { title: string; text: string }[];
};

export const products: Product[] = [
  {
    slug: "cueiq",
    name: "CueIQ",
    number: "01",
    positioning: "The world’s simplest and smartest AI pool coach.",
    promise: "Make one better decision every visit.",
    summary: "Helping pool players read the table, understand their options and practise with purpose through clear AI-assisted coaching.",
    status: "In development",
    audience: "For curious pool players who want to understand why a shot is right—not just be told where to aim.",
    problem: "A pool table presents dozens of connected decisions. Most tools isolate technique from the patterns and choices that shape a full visit.",
    approach: "CueIQ is being designed to turn the whole table into a learning moment, with explanations that build pattern recognition over time.",
    capabilities: ["Analyse a table from a photo", "Surface available shots and problem balls", "Explain recommended decisions", "Practise with interactive drills", "Visualise ball paths", "Learn patterns, not isolated shots"],
    principles: [{ title: "Explain, don’t prescribe", text: "Every recommendation should build understanding." }, { title: "See the whole visit", text: "One shot only makes sense in the pattern around it." }, { title: "Practice with purpose", text: "Turn insight into focused, repeatable improvement." }],
  },
  {
    slug: "arlo",
    name: "Arlo",
    number: "02",
    positioning: "An AI companion designed to remember who you are when you’ve forgotten.",
    promise: "Feel understood. Take one tiny step. Come back tomorrow.",
    summary: "Gentle conversational support for people with ADHD, designed to reduce friction without adding another system to manage.",
    status: "In development · Early testing",
    audience: "For people with ADHD who need practical support that adapts to the day they are actually having.",
    problem: "Traditional productivity tools often ask for planning, upkeep and attention before they can help—the exact resources that may already be stretched.",
    approach: "Arlo explores how natural conversation, memory and gentle prompts can make the next useful step feel smaller and more possible.",
    capabilities: ["Natural, low-friction conversation", "Helpful context and memory", "Gentle reminders", "Small, manageable next steps", "Support without judgement", "A calmer return after time away"],
    principles: [{ title: "Meet people where they are", text: "No guilt, streaks or pressure to perform." }, { title: "Make the next step smaller", text: "Progress starts with something that feels possible." }, { title: "Remember with care", text: "Context should create ease, with trust at the centre." }],
  },
  {
    slug: "echo",
    name: "Echo",
    number: "03",
    positioning: "AI marketing that starts with what you already know.",
    promise: "Turn what you know into marketing that sounds like you.",
    summary: "A content and campaign platform helping creators and small businesses turn real expertise into consistent, useful marketing.",
    status: "In development",
    audience: "For creators and small businesses with valuable knowledge, but not the time or headspace for a constant content treadmill.",
    problem: "Marketing often begins with a blank page and a demand to be everywhere. Good ideas get buried beneath planning, repurposing and coordination.",
    approach: "Echo is designed to capture what users know, shape it into useful content and keep them in control through an approval-first workflow.",
    capabilities: ["Capture knowledge and lived experience", "Find useful content angles", "Shape ideas into clear drafts", "Connect content into campaigns", "Preserve a recognisable voice", "Review and approve before anything moves"],
    principles: [{ title: "Start with substance", text: "Useful marketing begins with real knowledge." }, { title: "Keep the human voice", text: "Clarity and consistency without flattening personality." }, { title: "Approval first", text: "People remain in control of what represents them." }],
  },
];

export const principles = [
  { title: "Human First", text: "Empathy, inclusivity and real-world impact.", icon: "human" },
  { title: "One Better", text: "Small improvements create meaningful change.", icon: "progress" },
  { title: "Trust & Quality", text: "Secure, reliable and built to last.", icon: "trust" },
];

export const updates = [
  { slug: "building-in-public", category: "Development note", title: "Building One Better Labs in the open", excerpt: "An introduction to the problems we care about, the products taking shape, and how we plan to share the journey honestly.", body: ["One Better Labs is at the beginning of its journey. CueIQ, Arlo and Echo are all in development, shaped by different real-world problems but connected by one product philosophy.", "This journal will be where we share thoughtful progress: what we are exploring, what we learn, and what changes as the products move closer to people.", "There are no invented launch dates or polished success stories here. Just useful products being built with care, one better decision at a time."] },
  { slug: "one-shared-philosophy", category: "Product thinking", title: "Three products, one shared philosophy", excerpt: "Why pool coaching, ADHD support and human-sounding marketing belong in the same product family.", body: ["At first glance, a pool coach, an ADHD companion and a marketing platform may look unrelated. The connection is the moment each person faces too much information and needs a clearer next step.", "CueIQ brings clarity to the table. Arlo makes a next action feel manageable. Echo turns scattered knowledge into consistent action.", "Different contexts, same ambition: reduce cognitive load and help someone make one better decision."] },
  { slug: "what-in-development-means", category: "Studio note", title: "What “in development” means here", excerpt: "A straightforward note on product status, honest communication and why we will not race ahead of the work.", body: ["All three OB Labs products are currently in development. That phrase matters: capabilities described on this site are a direction for the products, not a claim that every feature is publicly available today.", "We will update product status as testing progresses. Until then, we would rather be precise about where the work stands than manufacture momentum."] },
];
