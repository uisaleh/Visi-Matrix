import { providerScores, sampleReports } from "@/lib/site";

/** Product mock-ups drawn with the design system instead of screenshots. */
export function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="vm-window">
      <div className="vm-window__bar">
        <span className="vm-window__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="vm-window__url">{url}</span>
      </div>
      {children}
    </div>
  );
}

export function VisibilityScoreMock() {
  const rows = [
    ["Mention rate", "19.6%", 20],
    ["Average rank", "#1.65", 62],
    ["Positive sentiment", "0.0%", 2],
    ["Citations", "8.1%", 8],
  ] as const;
  return (
    <BrowserFrame url="app.visimatrix.com/projects/acme">
      <div style={{ padding: "var(--g2)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--g2)", alignItems: "center" }}>
        <div className="vm-score" style={{ ["--v" as string]: 15 }}>
          <div><div><strong>15</strong><span className="type-xs muted">of 100</span></div></div>
        </div>
        <div className="vm-stack" style={{ gap: "var(--g1\\.5)" }}>
          {rows.map(([k, v, w]) => (
            <div key={k}>
              <div className="vm-row vm-row--between type-sm"><span className="muted">{k}</span><span className="mono">{v}</span></div>
              <div className="vm-bar vm-bar--accent" style={{ marginTop: 6 }}><span style={{ width: `${w}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="vm-row vm-row--between" style={{ padding: "var(--g1) var(--g2)", borderTop: "1px solid var(--rule)" }}>
        <span className="type-xs muted">Snapshot from Jul 26, 2026</span>
        <span className="vm-badge vm-badge--yes">+30 vs previous snapshot</span>
      </div>
    </BrowserFrame>
  );
}

export function ScoreByProviderMock() {
  return (
    <div className="vm-plate vm-plate--flush">
      <div className="vm-plate__head"><span className="vm-eyebrow">Score by AI provider</span><span className="type-xs muted">6 providers</span></div>
      <div className="vm-table-wrap">
        <table className="vm-table">
          <thead><tr><th>Provider</th><th className="num">Score</th><th className="num">Mention rate</th><th className="num">Avg rank</th><th className="num">Positive</th></tr></thead>
          <tbody>
            {providerScores.map((r, i) => (
              <tr key={r.provider}>
                <td>{r.provider}{i === 0 && <span className="vm-badge vm-badge--accent" style={{ marginLeft: 8 }}>Top</span>}</td>
                <td className="num">{r.score}</td><td className="num">{r.mention}</td><td className="num">{r.rank}</td><td className="num">{r.positive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ReportsMock({ rows = 6 }: { rows?: number }) {
  return (
    <BrowserFrame url="app.visimatrix.com/projects/acme/reports">
      <div className="vm-toolbar" style={{ padding: "var(--g1) var(--g1\\.5)", borderBottom: "1px solid var(--rule)" }}>
        <span className="vm-chip">All providers</span><span className="vm-chip">Mentioned: any</span>
        <span className="type-xs muted" style={{ marginLeft: "auto" }}>517 reports</span>
      </div>
      <div className="vm-table-wrap">
        <table className="vm-table">
          <thead><tr><th>Prompt</th><th>Provider</th><th className="num">Score</th><th>Mentioned</th><th className="num">Rank</th><th className="num">Competitors</th><th className="num">Citations</th><th>Scanned</th></tr></thead>
          <tbody>
            {sampleReports.slice(0, rows).map((r) => (
              <tr key={r.prompt}>
                <td style={{ minWidth: 280 }}>{r.prompt}</td>
                <td><span className="vm-badge">{r.provider}</span></td>
                <td className="num">{r.score}</td>
                <td>{r.mentioned ? <span className="vm-badge vm-badge--yes">Yes</span> : <span className="vm-badge vm-badge--no">No</span>}</td>
                <td className="num">{r.rank}</td><td className="num">{r.competitors}</td><td className="num">{r.citations}</td>
                <td className="mono type-xs muted" style={{ whiteSpace: "nowrap" }}>{r.scanned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function AnalysisMock() {
  const competitors = [["HubSpot", 1], ["Semrush", 3], ["Ahrefs", 4], ["Profound", 5]] as const;
  return (
    <div className="vm-cells" style={{ ["--cols" as string]: 2 }}>
      <div>
        <p className="vm-eyebrow">Analysis detail</p>
        <div className="vm-row" style={{ gap: "var(--g2)", alignItems: "flex-end" }}>
          <div className="vm-kpi"><div className="label">Score</div><div className="value">65</div></div>
          <div className="vm-kpi"><div className="label">Rank</div><div className="value">#2</div></div>
          <div className="vm-kpi"><div className="label">Mentioned</div><div className="value"><span className="vm-badge vm-badge--yes">Yes</span></div></div>
        </div>
        <p className="type-sm muted" style={{ marginTop: "var(--g2)" }}>“Is VisiMatrix a better choice than Semrush for analyzing AI-generated search traffic?” · DeepSeek</p>
      </div>
      <div>
        <p className="vm-eyebrow">Competitors in the same answer</p>
        <ul className="vm-stack">
          {competitors.map(([n, r]) => (
            <li key={n} className="vm-row vm-row--between type-sm"><span>{n}</span><span className="mono muted">#{r}</span></li>
          ))}
        </ul>
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <p className="vm-eyebrow">Recommendations</p>
        <ul className="vm-check type-sm">
          <li>Publish a “VisiMatrix vs Semrush AI Toolkit” comparison page with pricing and provider coverage side by side.</li>
          <li>Add citation-ready copy to the pricing page: “Track 7 AI assistants from $24/month.”</li>
          <li>Pitch two budget-tool roundups that DeepSeek cited for competitors but not for you.</li>
        </ul>
      </div>
    </div>
  );
}
