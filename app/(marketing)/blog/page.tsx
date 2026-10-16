import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/Section";
import { posts } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <Section as="h1" variant="hero" eyebrow="Blog" title="Insights on AI visibility" lede="Guides, research, and product news on AI visibility — how brands get mentioned, ranked, and cited by ChatGPT, Gemini, Claude, Perplexity, Grok, Mistral and DeepSeek." />
      <section className="vm-section">
        <Link href={`/blog/${lead.slug}`} className="vm-plate vm-split" style={{ padding: 0, gap: 0 }}>
          <div className="vm-dots" style={{ minHeight: 260, borderRight: "1px solid var(--rule)", display: "grid", placeItems: "center" }}>
            <span className="vm-badge vm-badge--accent">Latest</span>
          </div>
          <div style={{ padding: "var(--v1\\.5)" }}>
            <p className="mono type-xs muted">{lead.date} · {lead.author}</p>
            <h2 className="type-lg" style={{ marginTop: "var(--g1)" }}>{lead.title}</h2>
            <p className="muted" style={{ marginTop: "var(--g1)" }}>{lead.excerpt}</p>
            <p style={{ marginTop: "var(--v1)" }}><span className="vm-btn-text">Read article →</span></p>
          </div>
        </Link>
      </section>
      <section className="vm-section vm-section--flush">
        <div className="vm-cells vm-cells--bleed" style={{ ["--cols" as string]: 3, borderTop: 0 }}>
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="vm-stack" style={{ gap: "var(--g1)", padding: "var(--v1\\.5)" }}>
              <span className="mono type-xs muted">{p.date} · {p.author}</span>
              <h2 className="type-md">{p.title}</h2>
              <p className="type-sm muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
