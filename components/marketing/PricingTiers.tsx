"use client";
import Link from "next/link";
import { useState } from "react";
import { tiers } from "@/lib/site";

const fmt = (n: number) => n.toLocaleString("en-US");

export function PricingTiers() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="vm-stack" style={{ gap: "var(--v1)" }}>
      <div className="vm-row" style={{ justifyContent: "center" }}>
        <div className="vm-seg" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
          <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly</button>
        </div>
        <span className="vm-badge vm-badge--accent">Save 2 months</span>
      </div>
      <div className="vm-cells" style={{ ["--cols" as string]: 4 }}>
        {tiers.map((t) => {
          const perMonth = yearly ? Math.round(t.yearly / 12) : t.monthly;
          return (
            <div key={t.name} className="vm-stack" style={{ gap: "var(--g2)", position: "relative", background: t.featured ? "var(--card)" : undefined, boxShadow: t.featured ? "inset 0 0 0 2px var(--accent)" : undefined }}>
              <div className="vm-row vm-row--between">
                <h3 className="type-md">{t.name}</h3>
                {t.featured && <span className="vm-badge vm-badge--accent">Most popular</span>}
              </div>
              <div>
                <p><span className="type-xl" style={{ fontSize: "2.75rem" }}>${perMonth}</span> <span className="muted type-sm">{t.monthly === 0 ? "forever" : "per month"}</span></p>
                <p className="type-xs muted" style={{ minHeight: "1.5em" }}>
                  {t.monthly === 0 ? "No card required" : yearly ? `billed $${fmt(t.yearly)} annually — save $${fmt(t.monthly * 12 - t.yearly)}` : "billed monthly"}
                </p>
              </div>
              <p className="type-sm muted">{t.blurb}</p>
              <Link href={t.href} className={`vm-btn vm-btn--block ${t.featured ? "vm-btn--accent" : t.monthly === 0 ? "vm-btn--ghost" : ""}`}>{t.cta}</Link>
              <ul className="vm-check type-sm">{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          );
        })}
      </div>
      <div className="vm-plate vm-plate--inset vm-row vm-row--between">
        <div>
          <h3 className="type-md">Enterprise</h3>
          <p className="type-sm muted">Unlimited projects, custom credit volume, SSO, and a dedicated success manager.</p>
        </div>
        <a className="vm-btn vm-btn--ghost" href="mailto:support@visimatrix.com?subject=Enterprise%20plan">Talk to sales →</a>
      </div>
    </div>
  );
}
