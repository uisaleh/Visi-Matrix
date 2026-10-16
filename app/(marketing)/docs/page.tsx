import type { Metadata } from "next";

export const metadata: Metadata = { title: "Documentation" };

const sections: { id: string; title: string; body: (string | string[])[] }[] = [
  { id: "projects", title: "Projects", body: ["A project represents a brand or domain you want to track. Each project has a name, a website URL, the brand name and its aliases (e.g. “VisiMatrix” and “visimatrix.com”), and up to 5 competitors you want to compare against.", "Projects are isolated from each other. Scans, scores, reports, and settings are scoped to a single project. You can create as many projects as your plan allows."] },
  { id: "prompts", title: "Prompts", body: ["A prompt is a question or instruction sent to an AI assistant. Prompts represent real-world queries your buyers use — for example, “What is the best project management tool for small teams?”", "You can write custom prompts or choose from our prompt library, which includes templates organized by intent: comparisons, alternatives, feature questions, budget inquiries, and more. Each prompt can be reused across multiple projects and scans."] },
  { id: "scans", title: "Scans & credits", body: ["A scan is a batch of prompts sent to one or more AI providers. When you run a scan, each prompt is sent to each selected provider. The results are collected, analyzed, and presented in the project dashboard.", "Credits are the unit of consumption: 1 credit = 1 prompt sent to 1 AI provider. For example, a scan of 10 prompts across 5 providers uses 50 credits. Credits reset each billing cycle. Unused credits do not roll over. You can purchase additional credit packs at any time from the billing page."] },
  { id: "score", title: "Visibility score", body: ["Each project has a visibility score (0–100) that is recalculated after every scan. The score combines:", ["Mention rate — how often your brand appears in answers", "Average rank — your brand’s position in AI responses", "Sentiment — the tone of AI answers mentioning your brand", "Citations — how often your sources are referenced"], "Scores are tracked over time so you can see improvement (or decline) after taking action on your content, SEO, or brand strategy."] },
  { id: "providers", title: "AI providers", body: ["VisiMatrix queries major AI assistants, including ChatGPT, Gemini, Claude, Perplexity, DeepSeek, Mistral and Grok. Each provider may produce different answers for the same prompt; we capture and compare all of them so you get the full picture of your AI visibility.", "Provider availability, API terms, and rate limits may change. We update our provider list as the landscape evolves."] },
  { id: "competitors", title: "Competitor tracking", body: ["Every project can track up to 5 competitors. When a scan runs, the same prompts are evaluated for your brand and each competitor. You can see who is mentioned most, who ranks highest, and whose sentiment is trending best — per provider and overall."] },
  { id: "reports", title: "Reports & exports", body: ["Scan results are available in the project dashboard as charts, tables, and per-provider breakdowns. You can view historical trends, compare competitors, and dive into individual answer details including full AI responses and cited sources.", "Reports can be exported for offline analysis or sharing with stakeholders. Export formats include CSV and PDF."] },
  { id: "workspaces", title: "Workspaces & members", body: ["A workspace is your team’s shared environment. Workspaces contain all projects, members, and billing information. Workspace roles control access: owners can manage billing and membership, while members can view and run scans on shared projects.", "Each plan has a member limit. Upgrade your plan to invite more team members."] },
  { id: "billing", title: "Billing & plans", body: ["VisiMatrix offers monthly and annual billing. Annual plans save roughly 17% compared to monthly. All plans include a set number of projects, members, and monthly credits.", "We use Paddle as our payment processor and Merchant of Record. All charges, taxes, and receipts are handled by Paddle. You can view your plan, change billing frequency, and download invoices from the billing page.", "Need more than the Agency plan? Contact us for custom enterprise pricing."] },
  { id: "support", title: "Support", body: ["Priority support is included in the Pro plan and above. All users can reach us at support@visimatrix.com. We typically respond within one business day."] },
];

export default function DocsPage() {
  return (
    <>
      <section className="vm-section vm-section--hero">
        <div className="vm-head" style={{ marginBottom: 0 }}>
          <p className="vm-eyebrow">Documentation</p>
          <h1 className="type-xl">How VisiMatrix works</h1>
          <p className="lede">Everything you need to know about tracking, scoring, and improving your AI visibility.</p>
        </div>
      </section>
      <section className="vm-section vm-section--flush">
        <div className="vm-docs">
          <nav className="vm-docs__toc" aria-label="On this page">
            <p className="vm-eyebrow">On this page</p>
            {sections.map((s, i) => (<a key={s.id} href={`#${s.id}`}><span className="mono muted">{String(i + 1).padStart(2, "0")}</span> {s.title}</a>))}
          </nav>
          <div className="vm-prose" style={{ padding: "var(--v1\\.5)" }}>
            {sections.map((s) => (
              <div key={s.id} id={s.id} style={{ scrollMarginTop: 80 }}>
                <h2>{s.title}</h2>
                {s.body.map((b, i) => Array.isArray(b) ? <ul key={i} style={{ marginTop: "var(--v6_12)" }}>{b.map((li) => <li key={li}><span>{li}</span></li>)}</ul> : <p key={i} style={{ marginTop: "var(--v6_12)" }}>{b}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
