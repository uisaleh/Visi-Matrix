"use client";
import { useMemo, useState } from "react";
import { Modal, Switch } from "@/components/app/Overlay";
import { prompts as seed, promptTotals } from "@/lib/app-data";

const intentClass: Record<string, string> = { Budget: "vm-badge--accent", Comparison: "vm-badge--yes" };

export function PromptsView() {
  const [rows, setRows] = useState(seed);
  const [q, setQ] = useState("");
  const [add, setAdd] = useState(false);
  const [opps, setOpps] = useState(false);
  const shown = useMemo(() => rows.filter((r) => r.text.toLowerCase().includes(q.toLowerCase())), [rows, q]);
  return (
    <div className="vm-content">
      <div className="vm-toolbar">
        <input className="vm-input" placeholder="Search prompts" value={q} onChange={(e) => setQ(e.target.value)} style={{ minWidth: 260 }} />
        <span className="vm-badge vm-badge--yes">{promptTotals.active} Active of {promptTotals.total}</span>
        <span style={{ marginLeft: "auto" }} />
        <button className="vm-btn vm-btn--ghost vm-btn--sm" onClick={() => setOpps(true)}>Find opportunities</button>
        <button className="vm-btn vm-btn--sm" onClick={() => setAdd(true)}>Add prompts</button>
      </div>
      <div className="vm-plate vm-plate--flush vm-table-wrap">
        <table className="vm-table">
          <thead><tr><th>Prompt</th><th>Intent</th><th>Category</th><th>Active</th></tr></thead>
          <tbody>{shown.map((r) => (
            <tr key={r.id}>
              <td style={{ minWidth: 340 }}>{r.text}</td>
              <td><span className={`vm-badge ${intentClass[r.intent] ?? ""}`}>{r.intent}</span></td>
              <td className="type-sm muted">{r.category}</td>
              <td><Switch label={`Toggle ${r.text}`} checked={r.active} onChange={(v) => setRows(rows.map((x) => (x.id === r.id ? { ...x, active: v } : x)))} /></td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <Modal open={add} onClose={() => setAdd(false)} title="Add prompts" sub="The exact questions your buyers ask AI assistants — one per line."
        footer={<><button className="vm-btn vm-btn--ghost vm-btn--sm" onClick={() => setAdd(false)}>Cancel</button><button className="vm-btn vm-btn--accent vm-btn--sm">Add prompts</button></>}>
        <label className="vm-field"><span className="vm-label">Prompts <span className="req">*</span></span><textarea className="vm-textarea" placeholder={"Best school management software\nAffordable school ERP in Bangladesh"} /></label>
        <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
          <label className="vm-field"><span className="vm-label">Category</span><input className="vm-input" placeholder="Education" /></label>
          <label className="vm-field"><span className="vm-label">Intent</span><select className="vm-select"><option>General</option><option>Budget</option><option>Alternative</option><option>Comparison</option><option>Feature</option><option>Location</option></select></label>
        </div>
      </Modal>
      <Modal open={opps} onClose={() => setOpps(false)} title="Prompt opportunities" sub="Topic keywords from your and your competitors’ crawled pages. No AI call, no credits.">
        <ul className="vm-stack">{["AI citation tracking for agencies", "VisiMatrix vs Semrush AI toolkit", "LLM share of voice dashboard", "Generative engine optimization tools"].map((s) => (
          <li key={s} className="vm-row vm-row--between" style={{ padding: "8px 0", borderBottom: "1px solid var(--rule)" }}><span className="type-sm">{s}</span><button className="vm-btn vm-btn--ghost vm-btn--xs">Add</button></li>))}
        </ul>
      </Modal>
    </div>
  );
}
