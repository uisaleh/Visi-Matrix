import Link from "next/link";
import { TopBar, PageHead } from "@/components/app/AppShell";
import { Stat } from "@/components/app/Stat";
import { NewProjectButton } from "@/components/app/NewProject";
import { projects, workspace } from "@/lib/app-data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const prompts = projects.reduce((s, p) => s + p.prompts, 0);
  const analyses = projects.reduce((s, p) => s + p.analyses, 0);
  return (
    <>
      <TopBar crumbs={[{ label: workspace.name }, { label: "Projects" }]} actions={<NewProjectButton />} />
      <div className="vm-content">
        <PageHead title="Projects" sub="Each project tracks one website across AI assistants." />
        <div className="vm-cells" style={{ ["--cols" as string]: 3 }}>
          <div><Stat label="Active projects" value={projects.length} /></div>
          <div><Stat label="Prompts tracked" value={prompts} /></div>
          <div><Stat label="Analyses run" value={analyses.toLocaleString()} /></div>
        </div>
        <div className="vm-grid" style={{ ["--cols" as string]: 3 }}>
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`} className="vm-plate vm-plate--flush">
              <div className="vm-plate__head" style={{ alignItems: "flex-start" }}>
                <div className="vm-row" style={{ flexWrap: "nowrap", minWidth: 0 }}>
                  <span className="vm-avatar vm-avatar--sq" style={{ width: 32, height: 32 }}>{p.name[0]}</span>
                  <div style={{ minWidth: 0 }}><h2 className="type-md" style={{ fontSize: "1.125rem" }}>{p.name}</h2><p className="type-xs muted mono">{p.url}</p></div>
                </div>
                <span className="vm-badge">{p.frequency}</span>
              </div>
              <div className="vm-cells vm-cells--bleed" style={{ ["--cols" as string]: 3, borderTop: 0 }}>
                <div style={{ borderBottom: 0 }}><p className="type-lg">{p.prompts}</p><p className="type-xs muted">Prompts</p></div>
                <div style={{ borderBottom: 0 }}><p className="type-lg">{p.analyses.toLocaleString()}</p><p className="type-xs muted">Analyses</p></div>
                <div style={{ borderBottom: 0 }}><p className="type-lg">{p.competitors.length}</p><p className="type-xs muted">Competitors</p></div>
              </div>
              <div className="type-xs muted" style={{ padding: "var(--g1) var(--g2)", borderTop: "1px solid var(--rule)" }}>{p.frequency} scans</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
