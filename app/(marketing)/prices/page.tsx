import type { Metadata } from "next";
import { Section } from "@/components/marketing/Section";
import { PricingTiers } from "@/components/marketing/PricingTiers";
import { Faq } from "@/components/marketing/Faq";

export const metadata: Metadata = { title: "Pricing" };

const matrix: [string, string, string, string, string][] = [
  ["Projects", "1", "5", "10", "30"],
  ["Members", "1", "5", "10", "30"],
  ["Credits / month", "50", "2,000", "6,000", "15,000"],
  ["AI providers", "4", "7", "7", "7"],
  ["Visibility score & mentions", "✓", "✓", "✓", "✓"],
  ["Competitor tracking", "✓", "✓", "✓", "✓"],
  ["Citations & source analysis", "—", "—", "✓", "✓"],
  ["Site Audit pages / crawl", "10", "25", "50", "100"],
  ["Citation gap & domain explorer", "—", "—", "✓", "✓"],
  ["Competitive Intelligence", "—", "2 competitors", "5 competitors", "10 competitors"],
  ["Buyer journey & opportunity finder", "—", "—", "✓", "✓"],
  ["Priority support", "—", "—", "✓", "✓"],
];

export default function PricesPage() {
  return (
    <>
      <Section as="h1" variant="hero" eyebrow="Pricing" title="Simple plans that scale with your visibility" lede="Every analysis spends credits per prompt and provider. Pick the plan that matches how many brands you track and how often you analyze." center>
        <PricingTiers />
      </Section>
      <Section eyebrow="Compare" title="Compare all features">
        <div className="vm-plate vm-plate--flush vm-table-wrap">
          <table className="vm-table">
            <thead><tr><th>Feature</th><th>Free</th><th>Starter</th><th style={{ color: "var(--fg)" }}>Pro</th><th>Agency</th></tr></thead>
            <tbody>{matrix.map((r) => (<tr key={r[0]}>{r.map((c, i) => <td key={i} className={i ? "mono" : undefined} style={i === 3 ? { background: "var(--accent-wash)" } : undefined}>{c}</td>)}</tr>))}</tbody>
          </table>
        </div>
      </Section>
      <Section>
        <div className="vm-split vm-split--even" style={{ alignItems: "start" }}>
          <div><p className="vm-eyebrow">FAQ</p><h2 className="type-lg">Questions about plans</h2><p className="muted" style={{ marginTop: "var(--g1)" }}>Payments are handled by Paddle, our Merchant of Record.</p></div>
          <Faq />
        </div>
      </Section>
    </>
  );
}
