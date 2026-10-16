import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/Section";
import { AnalysisMock } from "@/components/marketing/Mocks";
import { ProviderChips } from "@/components/marketing/ProviderChips";
import { allFeatures, scoringSignals, journeyStages } from "@/lib/site";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <>
      <Section as="h1" variant="hero" eyebrow="Features" title="Everything you need to win AI answers" lede="AI assistants are the new front page. VisiMatrix shows you exactly what they say about your brand — and what to do about it — across every major provider." />
      <section className="vm-section vm-section--flush">
        <div className="vm-cells vm-cells--bleed" style={{ ["--cols" as string]: 2, borderTop: 0 }}>
          {allFeatures.map((f, i) => (
            <div key={f.title} style={{ padding: "var(--v1\\.5)" }}>
              <p className="mono type-xs muted">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="type-md" style={{ marginTop: "var(--g1)" }}>{f.title}</h2>
              <p className="type-sm muted" style={{ marginTop: "var(--g1)", maxWidth: "52ch" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Section>
        <div className="vm-split">
          <div>
            <p className="vm-eyebrow">Recommendations</p>
            <h2 className="type-lg balance">From a single answer to a concrete next step</h2>
            <p className="muted" style={{ marginTop: "var(--v6_12)" }}>Every analysis comes with AI-written recommendations for closing the gap — from citation-ready copy to the exact content to publish next — right alongside your score, rank, and the competitors the AI mentioned in the same breath.</p>
            <ul className="vm-check type-sm" style={{ marginTop: "var(--v1)" }}>
              <li>Generated automatically as part of every analysis — nothing extra to run</li>
              <li>Concrete, specific actions: content ideas, comparison pages, and messaging fixes, not generic advice</li>
              <li>Shown right next to the score, rank, and competitors detected in that same response</li>
            </ul>
          </div>
          <AnalysisMock />
        </div>
      </Section>
      <Section eyebrow="How it’s calculated" title="How visibility scoring works" lede="The visibility score is a weighted composite of four signals collected during each analysis.">
        <div className="vm-cells" style={{ ["--cols" as string]: 4 }}>
          {scoringSignals.map((s) => (<div key={s.title}><h3 className="type-md">{s.title}</h3><p className="type-sm muted" style={{ marginTop: "var(--g1)" }}>{s.body}</p></div>))}
        </div>
      </Section>
      <Section eyebrow="Buyer journey" title="See where AI introduces you first" lede="Every prompt already carries an intent. VisiMatrix maps that intent onto four funnel stages and shows your mention rate at each one — automatically, with nothing new to configure." variant="card">
        <div className="vm-cells" style={{ ["--cols" as string]: 4, background: "var(--bg)" }}>
          {journeyStages.map((s, i) => (
            <div key={s.title}>
              <p className="mono type-xs muted">Stage {i + 1}</p>
              <h3 className="type-md" style={{ marginTop: "var(--g1)" }}>{s.title}</h3>
              <p className="type-sm muted" style={{ marginTop: "var(--g1)" }}>{s.body}</p>
              <div className="vm-bar vm-bar--accent" style={{ marginTop: "var(--g2)" }}><span style={{ width: `${[18, 32, 46, 24][i]}%` }} /></div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Coverage" title="Supported AI providers" lede="VisiMatrix currently queries 7 AI assistants. We continuously monitor the landscape and add new providers as they gain adoption among buyers and decision-makers.">
        <ProviderChips />
        <div className="vm-row" style={{ marginTop: "var(--v2)" }}>
          <Link href="/register" className="vm-btn vm-btn--accent">Start free</Link>
          <Link href="/prices" className="vm-btn vm-btn--ghost">Compare plans</Link>
        </div>
      </Section>
    </>
  );
}
