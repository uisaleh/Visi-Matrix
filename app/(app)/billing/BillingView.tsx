"use client";
import { useState } from "react";
import { Stat } from "@/components/app/Stat";
import { plans, transactions, workspace } from "@/lib/app-data";

export function BillingView() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="vm-content">
      <div className="vm-page-head">
        <div><h1>Billing &amp; credits</h1><p>1 credit = 1 prompt sent to 1 AI provider. Credits are only charged for successful queries.</p></div>
        <button className="vm-btn vm-btn--ghost vm-btn--sm">Manage billing</button>
      </div>
      <div className="vm-cells" style={{ ["--cols" as string]: 4 }}>
        <div style={{ background: "var(--accent-wash)" }}><Stat label="Credit balance" value={workspace.credits.toLocaleString()} /></div>
        <div><Stat label="Plan" value={workspace.plan} /></div>
        <div><Stat label="Billing" value={workspace.billing} /></div>
        <div><Stat label="Renews" value={workspace.renews} /></div>
      </div>
      <section className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Plans</span>
          <div className="vm-seg" role="group"><button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button><button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly</button></div>
        </div>
        <div className="vm-cells vm-cells--bleed" style={{ ["--cols" as string]: 4, borderTop: 0 }}>
          {plans.map((p) => {
            const current = p.name === workspace.plan;
            return (
              <div key={p.name} className="vm-stack" style={{ gap: "var(--g1)", borderBottom: 0, ...(current ? { boxShadow: "inset 0 0 0 2px var(--accent)", background: "var(--card)" } : {}) }}>
                <div className="vm-row vm-row--between"><p className="type-md">{p.name}</p>{current && <span className="vm-badge vm-badge--accent">Current</span>}</div>
                <p><span className="type-lg">${yearly ? p.yearly.toLocaleString() : p.monthly}</span> <span className="type-sm muted">{p.yearly ? (yearly ? "/ year" : "/ month") : ""}</span></p>
                {p.save && yearly ? <p className="type-xs ink-accent">Save ${p.save}</p> : <p className="type-xs">&nbsp;</p>}
                <ul className="vm-check type-sm"><li>{p.projects} projects</li><li>{p.members} members</li><li>{p.credits} credits / month</li></ul>
                {current
                  ? <button className="vm-btn vm-btn--accent vm-btn--sm">{yearly ? "Switch to yearly" : "Current plan"}</button>
                  : <><button className="vm-btn vm-btn--sm" disabled>Not available</button>{p.name !== "Free" && <p className="type-xs muted">Downgrades aren&apos;t available.</p>}</>}
              </div>
            );
          })}
        </div>
        <div className="vm-row vm-row--between" style={{ padding: "var(--g2)", borderTop: "1px solid var(--rule)" }}>
          <div><p>Enterprise</p><p className="type-sm muted">Custom volume, SSO, and a dedicated manager. No online checkout — email us and we&apos;ll set it up.</p></div>
          <a className="vm-btn vm-btn--ghost vm-btn--sm" href="mailto:support@visimatrix.com?subject=Enterprise%20plan">Contact sales</a>
        </div>
      </section>
      <section className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Custom domain</span><span className="type-xs muted">White-label reports for clients</span></div>
        <form className="vm-row" style={{ padding: "var(--g2)", alignItems: "flex-end" }}>
          <label className="vm-field" style={{ flex: 1, minWidth: 240 }}><span className="vm-label">Domain</span><input className="vm-input" placeholder="clients.youragency.com" /></label>
          <button className="vm-btn vm-btn--sm" type="button">Save</button>
        </form>
      </section>
      <section className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Transaction history</span></div>
        <div className="vm-table-wrap"><table className="vm-table">
          <thead><tr><th>Date</th><th className="num">Amount</th><th>Reason</th><th>Note</th></tr></thead>
          <tbody>{transactions.map((t, i) => (
            <tr key={i}><td className="mono type-xs" style={{ whiteSpace: "nowrap" }}>{t.date}</td>
              <td className={`num mono ${t.amount > 0 ? "vm-delta-up" : ""}`}>{t.amount > 0 ? `+${t.amount.toLocaleString()}` : t.amount}</td>
              <td><span className={`vm-badge ${t.amount > 0 ? "vm-badge--yes" : ""}`}>{t.reason}</span></td><td className="type-sm muted">{t.note}</td></tr>))}
          </tbody>
        </table></div>
      </section>
    </div>
  );
}
