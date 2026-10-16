// Blog index as published on visimatrix.com/blog. Bodies come from the CMS in
// production; `body` here is a sample used to render the post template.

export type Post = { slug: string; title: string; excerpt: string; date: string; author: string; cover?: string };

export const posts: Post[] = [
  { slug: "improve-brand-visibility-in-ai-search-engines", title: "How to Improve Brand Visibility in AI Search Engines", excerpt: "Learn how to improve brand visibility in AI search engines: what AI visibility is, why to track it, the best AI visibility products, and how to monitor it.", date: "October 10, 2026", author: "Saleh Ahmed", cover: "https://storage.visimatrix.com/blog/covers/a980e6b4-7977-444f-9745-9bb788931727.png" },
  { slug: "how-ai-search-is-changing-seo-2026", title: "How AI Search Is Changing SEO in 2026", excerpt: "See how AI search is changing SEO in 2026 and what to do about it. A step-by-step plan with Google Search Console, Semrush, Rank Math, and VisiMatrix.", date: "October 10, 2026", author: "Saleh Ahmed" },
  { slug: "ai-visibility-audit-checklist", title: "AI Visibility Audit Checklist", excerpt: "Use this practical AI Visibility Audit Checklist to evaluate how your brand appears across ChatGPT, Gemini, Claude, Perplexity, and other AI platforms. Discover visibility gaps, track competitors, analyze brand mentions and recommendations, and identify actionable ways to improve your AI search presence.", date: "August 26, 2026", author: "VisiMatrix" },
  { slug: "how-to-measure-ai-share-of-voice", title: "How to Measure AI Share of Voice", excerpt: "Learn how to measure AI Share of Voice and understand how often your brand appears, gets recommended, and competes with other brands across AI platforms like ChatGPT, Gemini, Claude, and Perplexity.", date: "August 25, 2026", author: "VisiMatrix" },
  { slug: "15-ways-to-improve-ai-visibility", title: "15 Ways to Improve AI Visibility", excerpt: "AI search is changing how customers discover brands. Learn 15 practical ways to improve your AI visibility, strengthen your brand presence, get mentioned more often in AI-generated answers, and stay ahead of competitors.", date: "August 25, 2026", author: "VisiMatrix" },
  { slug: "how-chatgpt-chooses-which-brands-to-recommend", title: "How ChatGPT Chooses Which Brands to Recommend (2026 Guide)", excerpt: "Discover how ChatGPT chooses which brands to recommend, what influences AI-generated answers, and how your business can improve AI Visibility with VisiMatrix.", date: "August 4, 2026", author: "VisiMatrix" },
  { slug: "ai-visibility-vs-seo", title: "AI Visibility vs SEO: What's the Difference? (2026 Guide)", excerpt: "Learn the difference between AI Visibility and SEO. Discover how businesses can optimize for AI assistants like ChatGPT, Claude, Gemini, and improve brand recommendations in AI search.", date: "July 23, 2026", author: "VisiMatrix" },
  { slug: "what-is-ai-visibility-the-complete-beginner-s-guide-2026", title: "What Is AI Visibility? The Complete Beginner’s Guide 2026", excerpt: "Learn what AI Visibility is, why it matters, how ChatGPT and other AI assistants recommend brands, and practical ways to improve your presence in AI-generated answers.", date: "July 23, 2026", author: "VisiMatrix" },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
