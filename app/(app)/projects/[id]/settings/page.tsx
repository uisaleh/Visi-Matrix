import { getProject } from "@/lib/app-data";

export const metadata = { title: "Settings" };

export default async function Settings({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProject(id);
  const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="vm-plate vm-plate--flush"><div className="vm-plate__head"><span className="vm-eyebrow">{title}</span></div><div className="vm-stack" style={{ gap: "var(--g2)", padding: "var(--g2)" }}>{children}</div></section>
  );
  return (
    <div className="vm-content" style={{ maxWidth: 920 }}>
      <Block title="Project details">
        <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
          <label className="vm-field"><span className="vm-label">Project name <span className="req">*</span></span><input className="vm-input" defaultValue={p.name} /></label>
          <label className="vm-field"><span className="vm-label">Website URL <span className="req">*</span></span><div style={{ display: "flex" }}><span className="vm-input" style={{ width: "auto", background: "var(--card)", borderRight: 0, color: "var(--text-sec)" }}>https://</span><input className="vm-input" defaultValue={p.url} /></div></label>
          <label className="vm-field"><span className="vm-label">Industry</span><input className="vm-input" defaultValue={p.industry} /></label>
          <label className="vm-field"><span className="vm-label">Country</span><input className="vm-input" defaultValue={p.country} /></label>
        </div>
        <div><button className="vm-btn vm-btn--accent vm-btn--sm">Save changes</button></div>
      </Block>
      <section className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Brands &amp; competitors</span><button className="vm-btn vm-btn--ghost vm-btn--xs">Add competitor</button></div>
        <ul>
          <li className="vm-row vm-row--between" style={{ padding: "12px var(--g2)", borderBottom: "1px solid var(--rule)", background: "var(--accent-wash)" }}>
            <span><span>{p.name}</span> <span className="vm-badge vm-badge--accent">Your brand</span><br /><span className="type-xs muted mono">{p.url} · {p.url}</span></span>
            <button className="vm-btn-quaternary type-sm">Edit</button>
          </li>
          {p.competitors.map((c) => (
            <li key={c} className="vm-row vm-row--between" style={{ padding: "12px var(--g2)", borderBottom: "1px solid var(--rule)" }}>
              <span>{c}<br /><span className="type-xs muted">No aliases</span></span>
              <span className="vm-row"><button className="vm-btn-quaternary type-sm">Edit</button><button className="vm-btn-quaternary type-sm">Remove</button></span>
            </li>))}
        </ul>
      </section>
      <Block title="Analysis schedule">
        <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
          <label className="vm-field"><span className="vm-label">Frequency</span><select className="vm-select" defaultValue={p.frequency}><option>Daily</option><option>Weekly</option><option>Monthly</option></select><span className="vm-help">How often every active prompt is re-analyzed automatically.</span></label>
          <label className="vm-field"><span className="vm-label">Analyze limit</span><input className="vm-input" type="number" placeholder="Unlimited" /><span className="vm-help">Stop after this many total scans (3 run so far). Blank = unlimited.</span></label>
        </div>
        <p className="type-sm muted">Next scheduled run: Sep 18, 2026 12:05. Each analysis queries every configured AI provider.</p>
        <div><button className="vm-btn vm-btn--sm">Save schedule</button></div>
      </Block>
      <div className="vm-cells" style={{ ["--cols" as string]: 2 }}>
        <div className="vm-stack" style={{ gap: "var(--g1)" }}><p className="vm-eyebrow" style={{ margin: 0 }}>Pause</p><p className="type-sm muted">Pausing stops all analyses — scheduled and manual — while keeping the project editable and its plan slot. Resume any time.</p><div><button className="vm-btn vm-btn--ghost vm-btn--sm">Pause project</button></div></div>
        <div className="vm-stack" style={{ gap: "var(--g1)" }}><p className="vm-eyebrow" style={{ margin: 0 }}>Archive</p><p className="type-sm muted">Archiving stops all scans and makes the project read-only. It no longer counts toward your plan&apos;s project limit; unarchive whenever a slot is free.</p><div><button className="vm-btn vm-btn--ghost vm-btn--sm">Archive project</button></div></div>
      </div>
      <section className="vm-plate" style={{ borderColor: "var(--ansi-red)" }}>
        <div className="vm-row vm-row--between">
          <div><p className="vm-eyebrow" style={{ marginBottom: 6 }}>Danger zone</p><p className="type-sm muted">Deleting a project permanently removes its prompts, scans, and history.</p></div>
          <button className="vm-btn vm-btn--ghost vm-btn--sm" style={{ color: "var(--ansi-red)", borderColor: "var(--ansi-red)" }}>Delete project</button>
        </div>
      </section>
    </div>
  );
}
