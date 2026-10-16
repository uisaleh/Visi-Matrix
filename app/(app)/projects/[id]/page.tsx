import Link from "next/link";
import { Stat } from "@/components/app/Stat";
import { getProject, overview, providerScores, journey, promptTotals } from "@/lib/app-data";

export const metadata = { title: "Overview" };

export default async function Overview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProject(id);
  return (
    <div className="vm-content">
      <div className="vm-cells" style={{ ["--cols" as string]: 4 }}>
        <div><Stat label="Active prompts" value={promptTotals.active} /></div>
        <div><Stat label="Competitors tracked" value={p.competitors.length} /></div>
        <div><Stat label="Analysis runs" value={p.analyses.toLocaleString()} /></div>
        <div>
          <div className="vm-kpi"><div className="label">Last analysis</div></div>
          <Link href={`/projects/${p.id}/reports`} className="vm-badge vm-badge--yes" style={{ marginTop: 10 }}>{overview.lastAnalysis.status}</Link>
          <p className="type-xs muted" style={{ marginTop: 8 }}>{overview.lastAnalysis.detail}</p>
        </div>
      </div>

      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Visibility score</span><span className="type-xs muted">{overview.snapshot}</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "var(--v1\\.5)", alignItems: "center", padding: "var(--g2) var(--v1)" }}>
          <div className="vm-score" style={{ ["--v" as string]: overview.score, width: 148, height: 148 }}>
            <div style={{ width: 124, height: 124 }}><div><strong>{overview.score}%</strong><span className="type-xs muted">score</span></div></div>
          </div>
          <table className="vm-table">
            <thead><tr><th>Signal</th><th className="num">Value</th><th className="num">Weight</th></tr></thead>
            <tbody>{overview.components.map((c) => (
              <tr key={c.label}><td>{c.label}</td><td className="num mono">{c.value}</td><td className="num"><span className="vm-weight">{c.weight}%</span></td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>

      <div className="vm-split vm-split--rev" style={{ alignItems: "stretch", gap: "var(--g2)" }}>
        <div className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Score by AI provider</span></div>
          <div className="vm-table-wrap"><table className="vm-table">
            <thead><tr><th>Provider</th><th className="num">Score</th><th className="num">Mention rate</th><th className="num">Avg rank</th><th className="num">Positive</th></tr></thead>
            <tbody>{providerScores.map((r) => (
              <tr key={r.provider}>
                <td>{r.provider}</td>
                <td className="num" style={{ minWidth: 120 }}><div className="vm-row" style={{ flexWrap: "nowrap", justifyContent: "flex-end" }}><div className="vm-bar vm-bar--accent" style={{ width: 60 }}><span style={{ width: `${r.score}%` }} /></div><span className="mono">{r.score}</span></div></td>
                <td className="num">{r.mention}</td><td className="num">{r.rank}</td><td className="num">{r.positive}</td>
              </tr>))}
            </tbody>
          </table></div>
        </div>
        <div className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Score trend</span><span className="type-xs muted">{overview.trend.length} daily snapshots · latest {overview.trend.at(-1)}</span></div>
          <div style={{ padding: "var(--g2)" }}>
            <div className="vm-spark" style={{ height: 200 }}>{overview.trend.map((v, i) => <span key={i} className={i === overview.trend.length - 1 ? "on" : undefined} style={{ height: `${v * 2.5}%` }} />)}</div>
            <div className="vm-row vm-row--between type-xs muted mono" style={{ marginTop: 8 }}><span>Aug 28</span><span>Sep 4</span></div>
          </div>
        </div>
      </div>

      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Buyer journey</span><span className="type-xs muted">Mention rate by funnel stage</span></div>
        <div className="vm-cells vm-cells--bleed" style={{ ["--cols" as string]: 4, borderTop: 0 }}>
          {journey.map((j, i) => (
            <div key={j.stage} style={{ borderBottom: 0 }}>
              <p className="mono type-xs muted">0{i + 1}</p><p style={{ marginTop: 4 }}>{j.stage}</p>
              <p className="type-lg">{j.rate}%</p>
              <div className="vm-bar vm-bar--accent" style={{ marginTop: 6 }}><span style={{ width: `${j.rate}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
