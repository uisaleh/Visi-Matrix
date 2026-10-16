"use client";
import { useState } from "react";
import { Drawer } from "@/components/app/Overlay";
import { Yes } from "@/components/app/Stat";
import { reports, reportDetail, type Report } from "@/lib/app-data";
import { providers } from "@/lib/site";

export function ReportsView() {
  const [prov, setProv] = useState("All providers");
  const [ment, setMent] = useState("Mentioned or not");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Report | null>(null);
  const [tab, setTab] = useState<"overview" | "insights">("overview");
  const rows = reports.filter((r) =>
    (prov === "All providers" || r.provider === prov) &&
    (ment === "Mentioned or not" || (ment === "Mentioned" ? r.mentioned : r.mentioned === false)) &&
    r.prompt.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="vm-content">
      <div className="vm-toolbar">
        <select className="vm-select" value={prov} onChange={(e) => setProv(e.target.value)} aria-label="Provider"><option>All providers</option>{providers.map((p) => <option key={p.name}>{p.name}</option>)}</select>
        <select className="vm-select" value={ment} onChange={(e) => setMent(e.target.value)} aria-label="Mentioned"><option>Mentioned or not</option><option>Mentioned</option><option>Not mentioned</option></select>
        <input className="vm-input" placeholder="Search prompts" value={q} onChange={(e) => setQ(e.target.value)} style={{ minWidth: 240 }} />
      </div>
      <div className="vm-plate vm-plate--flush">
        <div className="vm-table-wrap"><table className="vm-table">
          <thead><tr><th>Prompt</th><th>Provider</th><th className="num">Score</th><th>Mentioned</th><th className="num">Rank</th><th className="num">Competitors</th><th className="num">Citations</th><th>Scanned</th><th /></tr></thead>
          <tbody>{rows.map((r) => (
            <tr key={r.id}>
              <td style={{ minWidth: 320 }}>{r.prompt}</td>
              <td><span className="vm-badge">{r.provider}</span></td>
              <td className="num">{r.score ?? "—"}</td><td><Yes v={r.mentioned} /></td>
              <td className="num">{r.rank ?? "—"}</td><td className="num">{r.competitors}</td><td className="num">{r.citations}</td>
              <td className="mono type-xs muted" style={{ whiteSpace: "nowrap" }}>{r.scanned}</td>
              <td><button className="vm-btn vm-btn--ghost vm-btn--xs" onClick={() => { setOpen(r); setTab("overview"); }} style={{ whiteSpace: "nowrap" }}>Report Details</button></td>
            </tr>))}
          </tbody>
        </table></div>
        <div className="vm-row vm-row--between" style={{ padding: "var(--g1) var(--g1\\.5)", borderTop: "1px solid var(--rule)" }}>
          <span className="type-xs muted">Page 1 of 72</span>
          <div className="vm-row"><button className="vm-btn vm-btn--ghost vm-btn--xs" disabled>Previous</button>{[1, 2].map((n) => <button key={n} className={`vm-btn vm-btn--xs ${n === 1 ? "" : "vm-btn--ghost"}`}>{n}</button>)}<span className="muted">…</span><button className="vm-btn vm-btn--ghost vm-btn--xs">72</button><button className="vm-btn vm-btn--ghost vm-btn--xs">Next</button></div>
        </div>
      </div>

      <Drawer open={!!open} onClose={() => setOpen(null)} title="Analyzed report" actions={<button className="vm-btn vm-btn--ghost vm-btn--sm">Download PDF</button>}>
        {open && (
          <>
            <nav className="vm-tabs" style={{ padding: "0 var(--g2)" }}>
              <a href="#" aria-current={tab === "overview" ? "page" : undefined} onClick={(e) => { e.preventDefault(); setTab("overview"); }}>Overview</a>
              <a href="#" aria-current={tab === "insights" ? "page" : undefined} onClick={(e) => { e.preventDefault(); setTab("insights"); }}>Citations &amp; insights</a>
            </nav>
            {tab === "overview" ? (
              <div className="vm-stack" style={{ gap: "var(--g2)", padding: "var(--g2)" }}>
                <div className="vm-plate vm-plate--inset">
                  <p className="vm-eyebrow">Prompt</p>
                  <p>{open.prompt}</p>
                  <p className="type-xs muted" style={{ marginTop: 8 }}><span className="vm-badge">{open.provider}</span> <span className="mono">{open.scanned}</span></p>
                </div>
                <div className="vm-cells" style={{ ["--cols" as string]: 2 }}>
                  <div><div className="vm-kpi"><div className="label">Visibility score</div><div className="value">{open.score ?? "—"}</div></div></div>
                  <div><div className="vm-kpi"><div className="label">Brand mentioned</div></div><div style={{ marginTop: 10 }}><Yes v={open.mentioned} /></div></div>
                  <div><div className="vm-kpi"><div className="label">Rank position</div><div className="value">{open.rank ?? "—"}</div></div></div>
                  <div><div className="vm-kpi"><div className="label">Average rank</div><div className="value">{open.rank ?? "—"}</div></div></div>
                </div>
                <div className="vm-plate vm-plate--flush">
                  <div className="vm-plate__head"><span className="vm-eyebrow">Competitors detected</span></div>
                  <ul style={{ padding: "var(--g1) var(--g2)" }}>{reportDetail.competitorsDetected.map((c) => <li key={c.name} className="vm-row vm-row--between" style={{ padding: "6px 0" }}><span>{c.name}</span><span className="mono muted">#{c.rank}</span></li>)}</ul>
                </div>
              </div>
            ) : (
              <div className="vm-stack" style={{ gap: "var(--g2)", padding: "var(--g2)" }}>
                <div><p className="vm-eyebrow">Recommendations</p><ul className="vm-check type-sm">{reportDetail.recommendations.map((r) => <li key={r}>{r}</li>)}</ul></div>
                <div><p className="vm-eyebrow">Content suggestions</p><ul className="vm-check vm-check--muted type-sm">{reportDetail.contentSuggestions.map((r) => <li key={r}>{r}</li>)}</ul></div>
                <div className="vm-plate vm-plate--accent"><p className="vm-eyebrow">Strategy</p><p className="type-sm">{reportDetail.strategy}</p></div>
              </div>
            )}
          </>
        )}
      </Drawer>
    </div>
  );
}
