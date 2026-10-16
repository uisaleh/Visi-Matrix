// Sample data for the app screens, modelled on the live VisiMatrix workspace (Oct 2026).
// Replace with API calls; components only read these shapes.

export const workspace = { name: "VisiMatrix Pro", plan: "Agency", credits: 4606, billing: "Monthly", renews: "Aug 29, 2027" };
export const user = { name: "Manik Mia", email: "owner@visimatrix.com", initials: "M" };

export type Project = {
  id: string; name: string; url: string; frequency: "Daily" | "Weekly" | "Monthly";
  prompts: number; analyses: number; competitors: string[]; industry: string; country: string;
};

export const projects: Project[] = [
  { id: "visimatrix", name: "VisiMatrix", url: "visimatrix.com", frequency: "Weekly", prompts: 44, analyses: 1439, competitors: ["BrightEdge", "Searchmetrics", "Semrush", "Moz", "seoClarity", "Conductor"], industry: "Marketing Analytics", country: "United States" },
  { id: "bidyangon", name: "Bidyangon", url: "bidyangon.com", frequency: "Weekly", prompts: 0, analyses: 0, competitors: ["Shikkhok", "EduERP", "SchoolBD", "Campus360", "Teachmint", "Edumate", "MySchool", "Fedena"], industry: "School Management", country: "Bangladesh" },
];
export const getProject = (id: string) => projects.find((p) => p.id === id) ?? projects[0];

export const overview = {
  lastAnalysis: { status: "Done", detail: "0/0 queries · about 1 month ago" },
  score: 20,
  components: [
    { label: "Mention rate", value: "29.6%", weight: 40 },
    { label: "Average rank", value: "#1.79", weight: 30 },
    { label: "Positive sentiment", value: "0.0%", weight: 20 },
    { label: "Own-site citations", value: "1.9%", weight: 10 },
  ],
  snapshot: "Snapshot from Sep 4, 2026 · +4 vs previous",
  trend: [9, 11, 14, 13, 16, 15, 16, 20],
};

export const providerScores = [
  { provider: "Le Chat (Mistral)", score: 38, mention: "42.9%", rank: "#2", positive: "0.0%" },
  { provider: "Grok (xAI)", score: 31, mention: "33.3%", rank: "#1.5", positive: "0.0%" },
  { provider: "Gemini (Google)", score: 28, mention: "30.8%", rank: "#1.75", positive: "0.0%" },
  { provider: "ChatGPT (OpenAI)", score: 23, mention: "37.5%", rank: "#1.67", positive: "0.0%" },
  { provider: "Claude (Anthropic)", score: 6, mention: "28.6%", rank: "#2", positive: "0.0%" },
  { provider: "Perplexity", score: 0, mention: "0.0%", rank: "—", positive: "0.0%" },
  { provider: "DeepSeek", score: 0, mention: "0.0%", rank: "—", positive: "0.0%" },
];

export const journey = [
  { stage: "Discovery", rate: 18 },
  { stage: "Research", rate: 26 },
  { stage: "Comparison", rate: 61 },
  { stage: "Decision", rate: 22 },
];

export type Prompt = { id: string; text: string; intent: string; category: string; active: boolean };
const P: [string, string, string][] = [
  ["Is there a free or low-cost marketing analytics software worth trying?", "Budget", "Marketing Analytics"],
  ["What's a good affordable marketing analytics software?", "Budget", "Marketing Analytics"],
  ["What are the best alternatives to Conductor?", "Alternative", "Marketing Analytics"],
  ["What are the best alternatives to seoClarity?", "Alternative", "Marketing Analytics"],
  ["What are the best alternatives to Moz?", "Alternative", "Marketing Analytics"],
  ["What are the best alternatives to Semrush?", "Alternative", "Marketing Analytics"],
  ["How does BrightEdge compare to Searchmetrics?", "Comparison", "Marketing Analytics"],
  ["VisiMatrix vs BrightEdge — which one is better?", "Comparison", "Marketing Analytics"],
  ["Which marketing analytics software would you recommend for someone just starting out?", "General", "Marketing Analytics"],
  ["What is AI Visibility? Suggest Some AI visibility tools", "General", "—"],
  ["I need an enterprise-grade AI analytics tool, but I am price-sensitive; what do you suggest?", "Budget", "Market Intelligence"],
  ["Is there a budget-friendly way to track brand mentions in LLMs without an enterprise subscription?", "Budget", "Brand Tracking"],
  ["Can you suggest some tools similar to seoClarity that specialize in AI visibility?", "Alternative", "SEO"],
  ["We need to monitor sentiment about our new product line inside generative AI summaries.", "Feature", "Sentiment Analysis"],
  ["Does any tool allow me to see how my brand ranks in ChatGPT compared to my competitors?", "Feature", "Market Intelligence"],
  ["Should I choose seoClarity or VisiMatrix for managing our AI brand presence?", "Comparison", "SEO"],
];
export const prompts: Prompt[] = P.map(([text, intent, category], i) => ({ id: `p${i}`, text, intent, category, active: true }));
export const promptTotals = { active: 44, total: 44 };

export type Report = { id: string; prompt: string; provider: string; score: number | null; mentioned: boolean | null; rank: number | null; competitors: number; citations: number; scanned: string };
export const reports: Report[] = [
  { id: "r1", prompt: "I'm looking for a replacement for BrightEdge that handles AI citation tracking better.", provider: "Mistral", score: 0, mentioned: false, rank: null, competitors: 17, citations: 16, scanned: "Sep 3, 2026 23:15" },
  { id: "r2", prompt: "What are the best alternatives to Semrush if I specifically want to focus on AI search?", provider: "Mistral", score: 0, mentioned: false, rank: null, competitors: 17, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r3", prompt: "What is AI Visibility? Suggest Some AI visibility tools", provider: "Mistral", score: 0, mentioned: false, rank: null, competitors: 1, citations: 19, scanned: "Sep 3, 2026 23:15" },
  { id: "r4", prompt: "Can you recommend a platform that helps us measure our share of voice within AI search results?", provider: "Gemini", score: null, mentioned: null, rank: null, competitors: 0, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r5", prompt: "Are there any tools that provide analytics on brand sentiment inside generative AI responses?", provider: "Perplexity", score: 0, mentioned: false, rank: null, competitors: 6, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r6", prompt: "We need an alternative to Conductor for deep analysis of LLM response behavior.", provider: "Claude", score: 0, mentioned: false, rank: null, competitors: 7, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r7", prompt: "Should I choose seoClarity or VisiMatrix for managing our AI brand presence?", provider: "Mistral", score: 90, mentioned: true, rank: 2, competitors: 1, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r8", prompt: "Between Moz and VisiMatrix, which one offers better reporting on LLM mentions?", provider: "Grok", score: 95, mentioned: true, rank: 1, competitors: 6, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r9", prompt: "How does VisiMatrix stack up against Searchmetrics regarding prompt performance analytics?", provider: "Gemini", score: 90, mentioned: true, rank: 2, competitors: 2, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r10", prompt: "Should I choose seoClarity or VisiMatrix for managing our AI brand presence?", provider: "ChatGPT", score: 45, mentioned: true, rank: 2, competitors: 1, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r11", prompt: "Between Moz and VisiMatrix, which one offers better reporting on LLM mentions?", provider: "Mistral", score: 85, mentioned: true, rank: 2, competitors: 3, citations: 0, scanned: "Sep 3, 2026 23:15" },
  { id: "r12", prompt: "What is the best way to optimize our content so AI chatbots cite our company more often?", provider: "ChatGPT", score: 0, mentioned: false, rank: null, competitors: 0, citations: 0, scanned: "Sep 3, 2026 23:15" },
];

export const reportDetail = {
  competitorsDetected: [{ name: "SEOClarity", rank: 1 }],
  recommendations: [
    "Publish a 'VisiMatrix vs. SEOClarity' landing page that uses structured data (Schema.org) to explicitly define your AI-first value proposition for search crawlers.",
    "Develop a proprietary 'AI Presence Score' or metric that AI assistants can cite as a standard industry benchmark when discussing brand visibility.",
    "Target long-tail 'AI-native SEO' keywords in technical documentation to align your brand with the specific use cases highlighted in the comparison.",
    "Engage in third-party review sites and industry forums to increase high-authority mentions of VisiMatrix alongside established incumbents, as LLMs ingest this training data.",
  ],
  contentSuggestions: [
    "A 'VisiMatrix vs. Traditional SEO Suites' comparison guide that explicitly maps feature gaps between legacy tools and AI-native automation.",
    "A white paper or study on 'The Future of AI Brand Presence' that establishes your brand as the thought leader in AI-driven entity optimization.",
    "Case studies focusing on 'Time-to-Value' metrics, highlighting how lean teams replace manual SEO tasks with your AI workflows.",
    "A technical documentation page explaining your proprietary entity mapping technology to provide AI models with specific, indexable knowledge about your capabilities.",
  ],
  strategy:
    "To improve visibility, VisiMatrix must shift from competing on general SEO features to owning the category of 'AI-Native SEO Automation.' By creating comparison assets that force a contrast between 'manual enterprise workflows' and 'autonomous AI workflows,' you provide LLMs with the clear categorical distinction they need to classify your brand as the preferred solution for modern, high-efficiency teams.",
};

export const audit = {
  pagesCrawled: 18, robots: "Found", sitemap: "Found — 18 URLs", lastCrawled: "Sep 11, 2026 10:05",
  crawlers: [
    { bot: "GPTBot", allowed: false }, { bot: "OAI-SearchBot", allowed: true }, { bot: "ClaudeBot", allowed: false },
    { bot: "PerplexityBot", allowed: true }, { bot: "Google-Extended", allowed: false }, { bot: "Googlebot", allowed: true }, { bot: "Bingbot", allowed: true },
  ],
  pages: [
    { path: "/register", score: 25 }, { path: "/prices", score: 37 }, { path: "/login", score: 38 }, { path: "/contact", score: 47 },
    { path: "/features", score: 51 }, { path: "/terms-and-conditions", score: 51 }, { path: "/about", score: 53 }, { path: "/docs", score: 59 },
    { path: "/", score: 59 }, { path: "/blog", score: 59 }, { path: "/blog/how-to-measure-ai-share-of-voice", score: 59 }, { path: "/blog/how-chatgpt-chooses-which-brands-to-recommend", score: 67 },
  ].map((p) => ({ ...p, schema: 0, orphan: false, crawled: "Sep 11, 2026 10:05" })),
};

export const shareOfVoice = ["VisiMatrix", "BrightEdge", "Searchmetrics", "Semrush", "Moz", "seoClarity", "Conductor"].map((b, i) => ({ brand: b, you: i === 0, rate: "0.0%", rank: "—", mentions: 0 }));

export const benchmark = [
  { brand: "VisiMatrix", you: true, pages: 18, score: 52, schema: "0%", words: 814, links: 12.1, faq: 2 },
  { brand: "BrightEdge", pages: 18, score: 52, schema: "0%", words: 814, links: 12.1, faq: 2 },
  { brand: "Searchmetrics", pages: 18, score: 52, schema: "0%", words: 814, links: 12.1, faq: 2 },
  { brand: "Semrush", pages: 18, score: 52, schema: "0%", words: 814, links: 12.1, faq: 2 },
  { brand: "Moz", pages: 18, score: 52, schema: "0%", words: 814, links: 12.1, faq: 2 },
  { brand: "seoClarity", pages: 18, score: 52, schema: "0%", words: 814, links: 12.1, faq: 2 },
  { brand: "Conductor", pages: 0, score: null, schema: "—", words: null, links: null, faq: 0 },
];

export const changes = [
  { page: "/blog/what-is-ai-visibility-the-complete-beginner-s-guide-2026", change: "CONTENT", detected: "Sep 3, 2026 23:15" },
  { page: "/blog/ai-visibility-audit-checklist", change: "ADDED", detected: "Sep 3, 2026 23:15" },
  { page: "/blog/how-to-measure-ai-share-of-voice", change: "ADDED", detected: "Sep 3, 2026 23:15" },
  { page: "/blog/15-ways-to-improve-ai-visibility", change: "ADDED", detected: "Sep 3, 2026 23:15" },
  { page: "/blog", change: "CONTENT", detected: "Sep 3, 2026 23:15" },
  { page: "/blog/how-chatgpt-chooses-which-brands-to-recommend", change: "CONTENT", detected: "Aug 25, 2026 07:50" },
  { page: "/register", change: "ADDED", detected: "Aug 18, 2026 05:45" },
  { page: "/prices", change: "ADDED", detected: "Aug 18, 2026 05:45" },
];

export const roles = [
  { role: "Owner", body: "Full control, including billing. Set once at signup — can't be changed or removed." },
  { role: "Admin", body: "Manages projects and team members. Billing and plan changes stay owner-only." },
  { role: "Member", body: "Creates and edits projects, prompts, and scans." },
  { role: "Viewer", body: "Read-only access to every project in the workspace." },
  { role: "Client", body: "Read-only, limited to only the workspaces and projects they're granted below." },
];
export const members = [{ name: "Manik Mia", email: "owner@visimatrix.com", role: "Owner", access: "Every project", status: "Active", joined: "Jul 25, 2026" }];

export const plans = [
  { name: "Free", yearly: 0, monthly: 0, projects: 1, members: 1, credits: "50" },
  { name: "Starter", yearly: 290, monthly: 29, save: 58, projects: 5, members: 5, credits: "2,000" },
  { name: "Pro", yearly: 790, monthly: 79, save: 158, projects: 10, members: 10, credits: "6,000" },
  { name: "Agency", yearly: 1990, monthly: 199, save: 398, projects: 30, members: 20, credits: "15,000" },
];

export const transactions = [
  { date: "Sep 3, 2026 23:15", amount: -2, reason: "Query", note: "2 MISTRAL queries (scan run cmtlsci6a)" },
  { date: "Sep 3, 2026 23:15", amount: -1, reason: "Query", note: "1 GROK queries (scan run cmtlsci6a)" },
  { date: "Sep 3, 2026 23:15", amount: -1, reason: "Query", note: "1 PERPLEXITY queries (scan run cmtlsci6a)" },
  { date: "Sep 3, 2026 23:15", amount: -1, reason: "Query", note: "1 OPENAI queries (scan run cmtlsci6a)" },
  { date: "Sep 3, 2026 23:15", amount: -1, reason: "Query", note: "1 CLAUDE queries (scan run cmtlsci6a)" },
  { date: "Aug 25, 2026 07:55", amount: -10, reason: "Query", note: "10 DEEPSEEK queries (scan run cmt80ca0d)" },
  { date: "Aug 25, 2026 07:52", amount: -10, reason: "Query", note: "10 GROK queries (scan run cmt80ca0d)" },
  { date: "Aug 25, 2026 07:51", amount: -10, reason: "Query", note: "10 OPENAI queries (scan run cmt80ca0d)" },
  { date: "Aug 29, 2026 09:00", amount: 15000, reason: "Plan refill", note: "Agency plan — monthly credits" },
];
