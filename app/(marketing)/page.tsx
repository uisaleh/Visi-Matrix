import Link from "next/link";
import { Section } from "@/components/marketing/Section";
import { ProviderChips } from "@/components/marketing/ProviderChips";
import { VisibilityScoreMock, ScoreByProviderMock, ReportsMock, AnalysisMock } from "@/components/marketing/Mocks";
import { PricingTiers } from "@/components/marketing/PricingTiers";
import { Faq } from "@/components/marketing/Faq";
import { homeFeatures, steps, stats } from "@/lib/site";
import { posts } from "@/lib/blog";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="vm-section vm-section--hero">
        <div className="vm-split" style={{ alignItems: "center" }}>
          <div>
            <p className="vm-eyebrow">AI visibility platform</p>
            <h1 className="type-2xl balance">See how AI talks about your brand</h1>
            <p className="type-md-sm muted" style={{ marginTop: "var(--v1)", maxWidth: "36rem" }}>
              VisiMatrix helps brands improve AI visibility by tracking how ChatGPT, Gemini, Claude, Perplexity, and other AI assistants mention, recommend, and cite your brand — while monitoring competitors and AI search performance.
            </p>
            <div className="vm-row" style={{ marginTop: "var(--v1\\.5)" }}>
              <Link href="/register" className="vm-btn vm-btn--accent">Start free — no card required</Link>
              <Link href="/prices" className="vm-btn vm-btn--ghost">View pricing</Link>
            </div>
            <p className="type-xs muted" style={{ marginTop: "var(--g1\\.5)" }}>Free plan includes 50 monthly credits and up to 1 project.</p>
          </div>
          <div className="vm-dots" style={{ padding: "var(--v1\\.5) var(--g2)" }}>
            <VisibilityScoreMock />
          </div>
        </div>
      </section>

      {/* Providers strip */}
      <section className="vm-section" style={{ paddingBlock: "var(--v1)" }}>
        <div className="vm-row vm-row--between" style={{ gap: "var(--g2)" }}>
          <p className="vm-eyebrow" style={{ margin: 0 }}>Tracking answers across 7 AI assistants</p>
          <ProviderChips />
        </div>
      </section>

      {/* Score by provider */}
      <Section>
        <div className="vm-split">
          <div>
            <p className="vm-eyebrow">Score by AI provider</p>
            <h2 className="type-lg balance">ChatGPT, Gemini, and Perplexity don’t agree — now you can see why</h2>
            <p className="muted" style={{ marginTop: "var(--v6_12)" }}>Every provider reads the web differently. VisiMatrix breaks your visibility score down provider by provider, so you know exactly which one already recommends you and which one barely knows you exist.</p>
            <ul className="vm-check type-sm" style={{ marginTop: "var(--v1)" }}>
              <li>Score, mention rate, and average rank per provider</li>
              <li>Positive sentiment tracked separately from raw mentions</li>
              <li>Spot the one provider that would move your overall score the most</li>
            </ul>
          </div>
          <ScoreByProviderMock />
        </div>
      </Section>

      {/* Reports table */}
      <Section eyebrow="Every analysis, in one table" title="Filter hundreds of reports down to the ones that matter" lede="Every prompt VisiMatrix sends to every provider becomes a row you can filter by provider or mention status, then open to see exactly what the AI said.">
        <ReportsMock />
      </Section>

      {/* Analysis detail */}
      <Section>
        <div className="vm-split vm-split--rev">
          <AnalysisMock />
          <div>
            <p className="vm-eyebrow">Analysis detail</p>
            <h2 className="type-lg balance">From a single answer to a full action plan</h2>
            <p className="muted" style={{ marginTop: "var(--v6_12)" }}>Open any report to see your score, rank, and every competitor the AI mentioned in the same breath — then get AI-written recommendations for closing the gap, from citation-ready copy to the exact content to publish next.</p>
            <ul className="vm-check type-sm" style={{ marginTop: "var(--v1)" }}>
              <li>Competitors detected and ranked alongside your brand</li>
              <li>Recommendations and content suggestions written for the prompt</li>
              <li>A strategy summary you can hand straight to your content team</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Features grid */}
      <Section eyebrow="Features" title="Everything you need to win AI answers" lede="AI assistants are the new front page. VisiMatrix shows you what they say about you — and what to do about it.">
        <div className="vm-cells" style={{ ["--cols" as string]: 3 }}>
          {homeFeatures.map((f, i) => (
            <div key={f.title}>
              <p className="mono type-xs muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="type-md" style={{ marginTop: "var(--g1)" }}>{f.title}</h3>
              <p className="type-sm muted" style={{ marginTop: "var(--g0\\.75)" }}>{f.body}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "var(--v1)" }}><Link href="/features" className="vm-btn-text">See all features →</Link></p>
      </Section>

      {/* How it works */}
      <Section eyebrow="How it works" title="From setup to insight in minutes" variant="card">
        <div className="vm-cells" style={{ ["--cols" as string]: 3, background: "var(--bg)" }}>
          {steps.map((s, i) => (
            <div key={s.title}>
              <span className="vm-avatar vm-avatar--sq mono">{i + 1}</span>
              <h3 className="type-md" style={{ marginTop: "var(--g2)" }}>{s.title}</h3>
              <p className="type-sm muted" style={{ marginTop: "var(--g0\\.75)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section eyebrow="Pricing" title="Simple plans that scale with your visibility" lede="Every analysis spends credits per prompt and provider. Pick the plan that matches how many brands you track and how often you analyze." center>
        <PricingTiers />
      </Section>

      {/* Stats */}
      <section className="vm-section vm-section--flush">
        <div className="vm-cells vm-cells--bleed" style={{ ["--cols" as string]: 3, borderTop: 0 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ padding: "var(--v1\\.5) var(--v1\\.5)", borderBottom: 0 }}>
              <p className="type-xl">{s.value}</p>
              <p className="type-sm muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <Section>
        <div className="vm-row vm-row--between" style={{ marginBottom: "var(--v1)" }}>
          <div><p className="vm-eyebrow">Blog</p><h2 className="type-lg">Latest from the blog</h2></div>
          <Link href="/blog" className="vm-btn-text">All posts →</Link>
        </div>
        <div className="vm-cells" style={{ ["--cols" as string]: 3 }}>
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="vm-stack" style={{ gap: "var(--g1)" }}>
              <span className="mono type-xs muted">{p.date}</span>
              <h3 className="type-md">{p.title}</h3>
              <p className="type-sm muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="vm-split vm-split--even" style={{ alignItems: "start" }}>
          <div><p className="vm-eyebrow">FAQ</p><h2 className="type-lg">Frequently asked questions</h2></div>
          <Faq />
        </div>
      </Section>

      {/* CTA */}
      <section className="vm-section vm-dots" style={{ textAlign: "center", paddingBlock: "var(--v4\\.5)" }}>
        <div style={{ background: "var(--bg)", display: "inline-block", padding: "var(--v1) var(--v2)", border: "1px solid var(--rule)" }}>
          <h2 className="type-lg">Know what AI says about you</h2>
          <p className="muted" style={{ marginTop: "var(--g1)" }}>Create your first project free and run your first analysis today.</p>
          <div className="vm-row" style={{ justifyContent: "center", marginTop: "var(--v1)" }}>
            <Link href="/register" className="vm-btn vm-btn--accent">Get started free</Link>
            <Link href="/contact" className="vm-btn vm-btn--ghost">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
