"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { mainNav } from "@/lib/site";

export function SiteHeader() {
  const path = usePathname();
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <header className="vm-header">
      <Logo />
      <nav className="vm-nav" aria-label="Main">
        {mainNav.map((l) => (
          <Link key={l.href} href={l.href} className="vm-nav__link" aria-current={isActive(l.href) ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="vm-header__actions">
        <ThemeToggle />
        <Link href="/login" className="vm-nav__link hide-sm">Sign in</Link>
        <Link href="/register" className="vm-btn vm-btn--accent vm-btn--sm">Get started</Link>
        <details className="vm-menu">
          <summary className="vm-icon-btn" aria-label="Open menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </summary>
          <div className="vm-menu__panel">
            {mainNav.map((l) => (<Link key={l.href} href={l.href}>{l.label}</Link>))}
            <Link href="/login">Sign in</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
