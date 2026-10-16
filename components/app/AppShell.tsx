"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { workspace, user } from "@/lib/app-data";
import * as I from "./Icons";

const nav = [
  { href: "/projects", label: "Projects", icon: I.IconGrid },
  { href: "/billing", label: "Billing & credits", icon: I.IconCard },
  { href: "/members", label: "Members", icon: I.IconUsers },
];

/** Global app frame: workspace switcher + nav on the left, page on the right. */
export function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <div className="vm-app">
      <aside className="vm-sidebar" aria-label="App navigation">
        <div className="vm-sidebar__top"><Logo href="/projects" /></div>
        <div className="vm-sidebar__section">
          <button type="button" className="vm-switcher" aria-label="Switch workspace">
            <span className="vm-avatar vm-avatar--sq">{workspace.name[0]}</span>
            <span style={{ minWidth: 0, flex: 1 }}>
              <span style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{workspace.name}</span>
              <span className="vm-badge vm-badge--accent" style={{ marginTop: 2 }}>{workspace.plan}</span>
            </span>
            <I.IconSwap />
          </button>
        </div>
        <nav className="vm-sidebar__section" aria-label="Workspace">
          {nav.map((n) => {
            const Icon = n.icon;
            const on = path === n.href || path.startsWith(n.href + "/");
            return <Link key={n.href} href={n.href} className="vm-side-link" aria-current={on ? "page" : undefined}><Icon />{n.label}</Link>;
          })}
        </nav>
        <div className="vm-sidebar__foot vm-stack" style={{ gap: "var(--g1\\.5)" }}>
          <div className="vm-row vm-row--between type-xs"><span className="muted">Credit balance</span><span className="mono">{workspace.credits.toLocaleString()}</span></div>
          <Link href="/account" className="vm-row" style={{ flexWrap: "nowrap" }}>
            <span className="vm-avatar">{user.initials}</span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span className="type-sm" style={{ display: "block" }}>{user.name}</span>
              <span className="type-xs muted" style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.email}</span>
            </span>
          </Link>
          <div className="vm-row vm-row--between">
            <Link href="/account" className="vm-side-link" style={{ padding: "4px 0" }} aria-current={path === "/account" ? "page" : undefined}><I.IconCog />Account</Link>
            <div className="vm-row" style={{ flexWrap: "nowrap" }}><ThemeToggle /><Link href="/login" className="vm-btn-quaternary type-sm">Sign out</Link></div>
          </div>
        </div>
      </aside>
      <div className="vm-main">{children}</div>
    </div>
  );
}

/** Sticky page top bar: breadcrumbs left, actions right. */
export function TopBar({ crumbs, actions }: { crumbs: { label: string; href?: string }[]; actions?: ReactNode }) {
  return (
    <div className="vm-topbar">
      <nav className="vm-crumbs" aria-label="Breadcrumb">
        <span className="vm-app-mobilebar"><Logo href="/projects" /></span>
        {crumbs.map((c, i) => (
          <span key={i} className="vm-row" style={{ gap: 8, flexWrap: "nowrap" }}>
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? <Link href={c.href}>{c.label}</Link> : <strong>{c.label}</strong>}
          </span>
        ))}
      </nav>
      <div className="vm-row" style={{ flexWrap: "nowrap" }}>{actions}</div>
    </div>
  );
}

export function PageHead({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: ReactNode; children?: ReactNode }) {
  return (
    <div className="vm-page-head">
      <div>
        {eyebrow && <p className="vm-eyebrow" style={{ marginBottom: 8 }}>{eyebrow}</p>}
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
      {children && <div className="vm-row">{children}</div>}
    </div>
  );
}
