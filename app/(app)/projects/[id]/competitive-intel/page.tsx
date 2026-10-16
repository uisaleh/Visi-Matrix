import { Empty } from "@/components/app/Stat";
import { benchmark, changes } from "@/lib/app-data";

export const metadata = { title: "Competitive Intel" };

export default function CompetitiveIntel() {
  return (
    <div className="vm-content">
      <div className="vm-page-head"><div><h1>Competitive Intel</h1><p>Deterministic, crawl-based comparisons against your tracked competitors — no AI cost.</p></div></div>
      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Website benchmark</span></div>
        <div className="vm-table-wrap"><table className="vm-table">
          <thead><tr><th>Brand</th><th className="num">Pages</th><th className="num">Avg score</th><th className="num">Schema %</th><th className="num">Avg words</th><th className="num">Avg links/page</th><th className="num">FAQ pages</th></tr></thead>
          <tbody>{benchmark.map((b) => (
            <tr key={b.brand} style={b.you ? { background: "var(--accent-wash)" } : undefined}>
              <td>{b.brand}{b.you && <span className="type-xs muted"> (you)</span>}</td>
              <td className="num">{b.pages}</td><td className="num">{b.score === null ? "—" : `${b.score}/100`}</td><td className="num">{b.schema}</td>
              <td className="num">{b.words ?? "—"}</td><td className="num">{b.links ?? "—"}</td><td className="num">{b.faq}</td>
            </tr>))}
          </tbody>
        </table></div>
      </div>
      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Change monitor</span><select className="vm-select" style={{ width: "auto", padding: "4px 8px", fontSize: ".8125rem" }}><option>Your site</option>{benchmark.slice(1).map((b) => <option key={b.brand}>{b.brand}</option>)}</select></div>
        <div className="vm-table-wrap"><table className="vm-table">
          <thead><tr><th>Page</th><th>Change</th><th>Detected</th></tr></thead>
          <tbody>{changes.map((c, i) => (
            <tr key={i}><td className="mono type-sm">{c.page}</td><td>{c.change === "ADDED" ? <span className="vm-badge vm-badge--yes vm-badge--mono">Added</span> : <span className="vm-badge vm-badge--mono">Content changed</span>}</td><td className="mono type-xs muted" style={{ whiteSpace: "nowrap" }}>{c.detected}</td></tr>))}
          </tbody>
        </table></div>
      </div>
      <div className="vm-plate vm-plate--flush">
        <div className="vm-plate__head"><span className="vm-eyebrow">Content / topic gap</span><span className="type-xs muted">Topics competitors cover that don&apos;t appear on yours</span></div>
        <Empty title="No content gap detected" body="Either there isn't enough crawl data yet, or you're already covering these topics." />
      </div>
    </div>
  );
}
