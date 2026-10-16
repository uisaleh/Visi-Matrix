import { Stat } from "@/components/app/Stat";
import { audit } from "@/lib/app-data";

export const metadata = { title: "Site Audit" };

export default function SiteAudit() {
  return (
    <div className="vm-content">
      <div className="vm-page-head">
        <div><h1>Site Audit</h1><p>A deterministic crawl of your own site — AI crawler access, schema coverage, and page citability.</p></div>
        <button className="vm-btn vm-btn--sm">Run audit now</button>
      </div>
      <div className="vm-cells" style={{ ["--cols" as string]: 4 }}>
        <div><Stat label="Pages crawled" value={audit.pagesCrawled} /></div>
        <div><Stat label="Robots.txt" value={<span className="vm-badge vm-badge--yes" style={{ fontSize: ".875rem" }}>{audit.robots}</span>} /></div>
        <div><Stat label="Sitemap" value={<span className="vm-badge vm-badge--yes" style={{ fontSize: ".875rem" }}>{audit.sitemap}</span>} /></div>
        <div><Stat label="Last crawled" value={<span className="type-md">{audit.lastCrawled}</span>} /></div>
      </div>
      <div className="vm-split" style={{ alignItems: "start", gap: "var(--g2)" }}>
        <div className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">AI crawler access</span></div>
          <table className="vm-table">
            <thead><tr><th>AI crawler</th><th>Access</th><th>Changed</th></tr></thead>
            <tbody>{audit.crawlers.map((c) => (
              <tr key={c.bot}><td className="mono type-sm">{c.bot}</td><td>{c.allowed ? <span className="vm-badge vm-badge--yes">Allowed</span> : <span className="vm-badge vm-badge--neg">Blocked</span>}</td><td className="muted">—</td></tr>))}
            </tbody>
          </table>
        </div>
        <div className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Pages</span><select className="vm-select" style={{ width: "auto", padding: "4px 8px", fontSize: ".8125rem" }}><option>All pages</option><option>Orphan pages</option><option>Missing schema</option></select></div>
          <div className="vm-table-wrap"><table className="vm-table">
            <thead><tr><th>Page</th><th>Citability score</th><th className="num">Schema types</th><th>Orphan</th><th>Last crawled</th><th /></tr></thead>
            <tbody>{audit.pages.map((a) => (
              <tr key={a.path}>
                <td className="mono type-sm">{a.path}</td>
                <td style={{ minWidth: 150 }}><div className="vm-row" style={{ flexWrap: "nowrap" }}><div className="vm-bar vm-bar--accent" style={{ flex: 1 }}><span style={{ width: `${a.score}%` }} /></div><span className="mono type-xs">{a.score}/100</span></div></td>
                <td className="num">{a.schema}</td><td className="muted">{a.orphan ? "Yes" : "—"}</td>
                <td className="mono type-xs muted" style={{ whiteSpace: "nowrap" }}>{a.crawled}</td>
                <td><button className="vm-btn-text type-sm">Details</button></td>
              </tr>))}
            </tbody>
          </table></div>
        </div>
      </div>
    </div>
  );
}
