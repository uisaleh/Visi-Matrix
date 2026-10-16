import type { ReactNode } from "react";

export function Stat({ label, value, sub }: { label: string; value: ReactNode; sub?: ReactNode }) {
  return (
    <div className="vm-kpi">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      {sub && <div className="type-xs muted" style={{ marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

export function Empty({ title, body }: { title: string; body?: string }) {
  return (
    <div className="vm-empty vm-dots" style={{ border: "1px dashed var(--rule-strong)", margin: "var(--g2)" }}>
      <div style={{ background: "var(--bg)", display: "inline-block", padding: "var(--g1\\.5) var(--g2)" }}>
        <p>{title}</p>{body && <p className="type-sm muted" style={{ marginTop: 4, maxWidth: "44ch" }}>{body}</p>}
      </div>
    </div>
  );
}

export function Yes({ v }: { v: boolean | null }) {
  if (v === null) return <span className="muted">—</span>;
  return v ? <span className="vm-badge vm-badge--yes">Yes</span> : <span className="vm-badge vm-badge--no">No</span>;
}
