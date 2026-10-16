import { Empty } from "@/components/app/Stat";
import { shareOfVoice } from "@/lib/app-data";

export const metadata = { title: "Citations" };

export default function Citations() {
  return (
    <div className="vm-content">
      <div className="vm-page-head"><div><h1>Citations</h1><p>Where AI assistants find their information, and where competitors get cited that you don&apos;t.</p></div></div>
      <div className="vm-split vm-split--even" style={{ alignItems: "start", gap: "var(--g2)" }}>
        <div className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Share of voice</span></div>
          <table className="vm-table">
            <thead><tr><th>Brand</th><th className="num">Mention rate</th><th className="num">Avg rank</th><th className="num">Mentions</th></tr></thead>
            <tbody>{shareOfVoice.map((s) => (
              <tr key={s.brand} style={s.you ? { background: "var(--accent-wash)" } : undefined}><td>{s.brand}{s.you && <span className="type-xs muted"> (you)</span>}</td><td className="num">{s.rate}</td><td className="num">{s.rank}</td><td className="num">{s.mentions}</td></tr>))}
            </tbody>
          </table>
        </div>
        <div className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Citation share — last 30 days</span></div>
          <Empty title="No citations yet" body="Citations appear here once scans start recording sources." />
        </div>
      </div>
      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Citation gap</span><span className="type-xs muted">Outreach targets · no AI call needed</span></div>
        <Empty title="No citation gap detected" body="Either there isn't enough competitor citation data yet, or you're already keeping pace." />
      </div>
      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Citation domain explorer</span></div>
        <Empty title="No domains cited yet" />
      </div>
    </div>
  );
}
