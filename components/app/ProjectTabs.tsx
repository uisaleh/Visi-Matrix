"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { seg: "", label: "Overview" },
  { seg: "/prompts", label: "Prompts" },
  { seg: "/reports", label: "Analyzed Reports" },
  { seg: "/site-audit", label: "Site Audit" },
  { seg: "/citations", label: "Citations" },
  { seg: "/competitive-intel", label: "Competitive Intel" },
  { seg: "/settings", label: "Settings" },
];

export function ProjectTabs({ id }: { id: string }) {
  const path = usePathname();
  const base = `/projects/${id}`;
  return (
    <nav className="vm-tabs" aria-label="Project sections">
      {tabs.map((t) => {
        const href = base + t.seg;
        const on = t.seg === "" ? path === base : path.startsWith(href);
        return <Link key={t.seg} href={href} aria-current={on ? "page" : undefined}>{t.label}</Link>;
      })}
    </nav>
  );
}
