// Content for the marketing site, taken from visimatrix.com (October 2026).
// Edit copy here; pages only arrange it.

export const SUPPORT_EMAIL = "support@visimatrix.com";

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/prices", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const footerNav = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/prices", label: "Pricing" },
      { href: "/docs", label: "Docs" },
      { href: "/login", label: "Sign in" },
      { href: "/register", label: "Create account" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms-and-conditions", label: "Terms & conditions" },
      { href: "/refund-policy", label: "Refund policy" },
    ],
  },
];

export const tagline =
  "VisiMatrix helps brands improve AI visibility by tracking how ChatGPT, Gemini, Claude, Perplexity, and other AI assistants mention, recommend, and cite your brand — while monitoring competitors and AI search performance.";

export const providers = [
  { name: "ChatGPT", vendor: "OpenAI" },
  { name: "Gemini", vendor: "Google" },
  { name: "Claude", vendor: "Anthropic" },
  { name: "Perplexity", vendor: "Perplexity" },
  { name: "DeepSeek", vendor: "DeepSeek" },
  { name: "Mistral", vendor: "Le Chat" },
  { name: "Grok", vendor: "xAI" },
];

// Sample figures shown in the marketing mock-ups (as on the live homepage).
export const providerScores = [
  { provider: "Le Chat (Mistral)", score: 19, mention: "19.4%", rank: "#1.67", positive: "0.0%" },
  { provider: "Gemini (Google)", score: 17, mention: "22.6%", rank: "#1.67", positive: "0.0%" },
  { provider: "DeepSeek", score: 16, mention: "20.0%", rank: "#1.4", positive: "0.0%" },
  { provider: "ChatGPT (OpenAI)", score: 15, mention: "19.4%", rank: "#1.33", positive: "0.0%" },
  { provider: "Perplexity", score: 11, mention: "19.4%", rank: "#1.5", positive: "0.0%" },
  { provider: "Grok (xAI)", score: 10, mention: "16.1%", rank: "#1.75", positive: "0.0%" },
];

export const sampleReports = [
  { prompt: "I need an enterprise-grade AI analytics tool, but I am price-sensitive; what do you suggest?", provider: "DeepSeek", score: 0, mentioned: false, rank: "—", competitors: 7, citations: 0, scanned: "Jul 26, 2026 21:26" },
  { prompt: "Is there a budget-friendly way to track brand mentions in LLMs without an enterprise subscription?", provider: "DeepSeek", score: 0, mentioned: false, rank: "—", competitors: 6, citations: 0, scanned: "Jul 26, 2026 21:26" },
  { prompt: "Does your software offer integration to track our visibility score automatically?", provider: "DeepSeek", score: 0, mentioned: false, rank: "—", competitors: 2, citations: 0, scanned: "Jul 26, 2026 21:26" },
  { prompt: "Is VisiMatrix a better choice than Semrush for analyzing AI-generated search traffic?", provider: "DeepSeek", score: 65, mentioned: true, rank: "2", competitors: 7, citations: 1, scanned: "Jul 26, 2026 21:26" },
  { prompt: "Which AI monitoring software is best for agencies on a limited monthly budget?", provider: "DeepSeek", score: 0, mentioned: false, rank: "—", competitors: 6, citations: 0, scanned: "Jul 26, 2026 21:26" },
  { prompt: "Do you have any affordable AI tracking tools for a startup with a small marketing budget?", provider: "DeepSeek", score: 0, mentioned: false, rank: "—", competitors: 6, citations: 0, scanned: "Jul 26, 2026 21:27" },
];

export const homeFeatures = [
  { title: "Visibility score", body: "One score per project that combines mention rate, average rank, sentiment, and citations — tracked over time, per provider." },
  { title: "Mentions & sentiment", body: "See every answer where your brand appears, how it is ranked, and whether the AI speaks about you positively or negatively." },
  { title: "Competitor share of voice", body: "Track competitors in the same prompts and see who wins each answer, prompt by prompt and provider by provider." },
  { title: "Citations & sources", body: "Find out which domains AI assistants cite when they talk about your market — and where your own site shows up." },
  { title: "Prompt library", body: "Build prompts from templates or your own questions, organized by intent: comparisons, alternatives, features, budgets, and more." },
  { title: "Scheduled analyses", body: "Run analyses manually or on a weekly, daily, or hourly schedule and get a fresh snapshot of your AI visibility automatically." },
  { title: "Site Audit", body: "A crawl of your own site: which AI crawlers can access it, schema markup coverage, and a citability score for every page." },
  { title: "Citation gap analysis", body: "See exactly which domains cite your competitors but not you — a concrete outreach target list, generated automatically." },
  { title: "Competitive Intelligence", body: "Benchmark your site against competitors, monitor their page changes, and find content topics they cover that you don’t. Paid plans." },
];

export const allFeatures = [
  { title: "Project & website management", body: "Add a project with a name and website URL. Track your brand under multiple aliases so mention detection is not fooled by spelling variants. Leave the industry blank and VisiMatrix fills it in once it finishes analyzing your site, and it adds likely competitors automatically from your site’s own content — edit the list any time." },
  { title: "Visibility score", body: "A single, normalized score (0–100) per project that measures how prominently your brand appears across all tracked AI assistants. The score factors mention rate, average rank, sentiment polarity, and citation depth — tracked over time so you can see your trend at a glance." },
  { title: "Mentions & sentiment", body: "Every AI answer mentioning your brand is captured. See exactly how each assistant ranks you, whether the tone is positive, neutral, or negative, and how that sentiment shifts after you make changes to your content or SEO strategy." },
  { title: "Competitor share of voice", body: "Track competitors in the same prompts and compare who gets mentioned most often, who ranks first, and whose sentiment is trending up — prompt by prompt, provider by provider." },
  { title: "Citations & source analysis", body: "Know which domains and articles AI assistants cite when answering questions about your market. See whether your own site appears as a source and compare citation share against competitors." },
  { title: "Prompt library", body: "Choose from a library of prompt templates organized by buyer intent — comparisons, alternatives, feature deep-dives, budget questions, and more. Custom prompts let you ask the exact questions your customers ask." },
  { title: "Scheduled analyses", body: "Run analyses on demand or set automated weekly, daily, or hourly schedules. Get fresh visibility snapshots without manual effort. Credits are consumed per prompt per provider per analysis." },
  { title: "Multi-provider coverage", body: "Query all major AI assistants in a single analysis: ChatGPT, Gemini, Claude, Perplexity, DeepSeek, Mistral, Grok. Compare how each provider treats your brand and identify gaps per platform." },
  { title: "Historical trends & reporting", body: "Visibility data is stored historically so you can chart your score over weeks and months. Export reports to share with stakeholders or embed in your own dashboards." },
  { title: "Workspace collaboration", body: "Invite team members to your workspace. Assign roles, share projects, and view results together. Workspaces support from solo users up to agency-scale teams with 20+ members." },
  { title: "Site Audit", body: "A deterministic crawl of your own website. Checks whether GPTBot, ClaudeBot, PerplexityBot, and other AI crawlers can access your pages, audits schema markup coverage, maps internal linking (orphan pages, broken links), and scores every page on citability." },
  { title: "Citation gap & domain explorer", body: "See which domains cite your competitors far more often than they cite you, explore the full citation ecosystem for your category, and drill into the exact URLs driving AI answers — all computed from data you already collect." },
  { title: "AI-written recommendations", body: "Every analysis includes 3–5 concrete, AI-written recommendations — content ideas, comparison pages, messaging fixes — generated alongside your score, mentions, and competitor detection for that exact response." },
  { title: "Competitive Intelligence", body: "On paid plans, the crawler extends to your competitors’ sites too: benchmark pages, schema coverage, and citability score side by side, track their page changes, and surface content topics they cover that you don’t. Deterministic and crawl-based — no extra AI cost." },
  { title: "Buyer journey visibility", body: "Every prompt is mapped onto a funnel stage — Discovery, Research, Comparison, Decision — based on its intent, and your mention rate is computed at each one automatically. See whether AI assistants introduce your brand early or only once a buyer is already comparing options. Paid plans." },
  { title: "Prompt opportunity finder", body: "A deterministic prompt suggester that reads real topic keywords from your own and your competitors’ crawled pages, so new prompt ideas reflect what is actually on the sites — no AI call, no extra credits. Runs alongside the AI prompt generator as a free additional option. Paid plans." },
];

export const scoringSignals = [
  { title: "Mention rate", body: "What fraction of prompts trigger an answer that names your brand." },
  { title: "Average rank", body: "Where your brand appears in the AI's answer (first, second, not mentioned, etc.)." },
  { title: "Sentiment polarity", body: "How positively or negatively the AI language model frames your brand." },
  { title: "Citation depth", body: "How often authoritative sources mentioning your brand are cited in answers." },
];

export const journeyStages = [
  { title: "Discovery", body: "General and location prompts — the first mention that puts you on a buyer’s radar." },
  { title: "Research", body: "Feature-focused prompts — where a buyer learns what your product actually does." },
  { title: "Comparison", body: "Comparison and alternative prompts — where you are weighed directly against competitors." },
  { title: "Decision", body: "Budget and pricing prompts — the final nudge before a buyer chooses." },
];

export const steps = [
  { title: "Add your project", body: "Point VisiMatrix at your website, name your brand and its aliases, and add the competitors you care about." },
  { title: "Pick your prompts", body: "Choose the real-world questions buyers ask AI assistants — from our library or written by you." },
  { title: "Analyze and improve", body: "VisiMatrix queries every provider, scores the answers, and shows you exactly where to win more mentions." },
];

export type Tier = {
  name: string;
  monthly: number;
  yearly: number; // per year
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Free", monthly: 0, yearly: 0, blurb: "Try AI visibility tracking on your first sites.", cta: "Start for free", href: "/register",
    features: ["1 project", "1 member", "50 credits / month", "4 AI providers (Grok, Mistral, DeepSeek, Perplexity)", "Visibility score & mentions", "Competitor tracking", "Site Audit — up to 10 pages/crawl"],
  },
  {
    name: "Starter", monthly: 29, yearly: 290, blurb: "For small teams tracking a handful of brands.", cta: "Choose Starter", href: "/register?plan=starter",
    features: ["5 projects", "5 members", "2,000 credits / month", "All 7 AI providers", "Visibility score & mentions", "Competitor tracking", "Site Audit — up to 25 pages/crawl", "Competitive Intelligence — 2 competitors crawled"],
  },
  {
    name: "Pro", monthly: 79, yearly: 790, blurb: "For growing brands that live in AI answers.", cta: "Choose Pro", href: "/register?plan=pro", featured: true,
    features: ["10 projects", "10 members", "6,000 credits / month", "All 7 AI providers", "Visibility score & mentions", "Competitor tracking", "Citations & source analysis", "Site Audit — up to 50 pages/crawl", "Citation gap & domain explorer", "Competitive Intelligence — 5 competitors crawled", "Buyer journey & opportunity finder", "Priority support"],
  },
  {
    name: "Agency", monthly: 199, yearly: 1990, blurb: "For agencies managing many client brands.", cta: "Choose Agency", href: "/register?plan=agency",
    features: ["30 projects", "30 members", "15,000 credits / month", "All 7 AI providers", "Visibility score & mentions", "Competitor tracking", "Citations & source analysis", "Site Audit — up to 100 pages/crawl", "Citation gap & domain explorer", "Competitive Intelligence — 10 competitors crawled", "Buyer journey & opportunity finder", "Priority support"],
  },
];

export const faqs = [
  { q: "What is a credit?", a: "One credit is one prompt sent to one AI provider. An analysis of 10 prompts across 5 providers spends 50 credits. Plans refill credits monthly, and you can buy add-on credits any time." },
  { q: "Which AI assistants do you track?", a: "We currently query ChatGPT, Gemini, Claude, Perplexity, DeepSeek, Mistral, Grok — and we add new providers as they become relevant to buyers." },
  { q: "Do I need to connect my website?", a: "No. VisiMatrix works from the outside in: we ask AI assistants the questions your buyers ask and analyze the answers. There is nothing to install." },
  { q: "Can I cancel any time?", a: "Yes. Plans are month-to-month and you can cancel from the billing page whenever you like. See our refund policy for details." },
];

export const stats = [
  { value: "2,400+", label: "Users tracking their AI visibility" },
  { value: "3,100+", label: "Projects monitored" },
  { value: "480+", label: "5-star reviews" },
];
