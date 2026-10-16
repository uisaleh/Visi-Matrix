import { TopBar } from "@/components/app/AppShell";
import { ProjectTabs } from "@/components/app/ProjectTabs";
import { RunAnalysisButton } from "@/components/app/RunAnalysis";
import { getProject, projects } from "@/lib/app-data";

export const generateStaticParams = () => projects.map((p) => ({ id: p.id }));

export default async function ProjectLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProject(id);
  return (
    <>
      <TopBar crumbs={[{ label: "Projects", href: "/projects" }, { label: p.name }]} actions={<RunAnalysisButton />} />
      <div className="vm-content" style={{ paddingBottom: 0, gap: "var(--g1\\.5)" }}>
        <div className="vm-row" style={{ flexWrap: "nowrap" }}>
          <span className="vm-avatar vm-avatar--sq" style={{ width: 36, height: 36, fontSize: "1rem" }}>{p.name[0]}</span>
          <div><h1 className="type-md-lg" style={{ fontSize: "1.5rem" }}>{p.name}</h1><p className="type-sm muted mono">{p.url}</p></div>
        </div>
        <ProjectTabs id={p.id} />
      </div>
      {children}
    </>
  );
}
