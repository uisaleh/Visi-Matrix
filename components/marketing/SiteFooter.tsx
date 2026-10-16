import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerNav, tagline, SUPPORT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="vm-footer">
      <div className="vm-footer__grid">
        <div className="vm-stack" style={{ gap: "var(--g2)", maxWidth: "26rem" }}>
          <Logo />
          <p className="type-sm muted">{tagline}</p>
        </div>
        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="vm-footer__h">{col.title}</h3>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href} className="vm-footer__link">{l.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="vm-footer__legal">
        <span>© 2026 VisiMatrix. All rights reserved.</span>
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </div>
    </footer>
  );
}
