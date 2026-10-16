import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VisibilityScoreMock } from "@/components/marketing/Mocks";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="vm-frame">
      <header className="vm-header">
        <Logo />
        <div className="vm-header__actions"><ThemeToggle /><Link href="/" className="vm-nav__link">Back to site</Link></div>
      </header>
      <div className="vm-auth">
        <div className="vm-auth__form">{children}</div>
        <aside className="vm-auth__aside">
          <div>
            <p className="vm-eyebrow">AI visibility platform</p>
            <p className="type-lg balance">Know what ChatGPT, Gemini and Claude say about your brand.</p>
          </div>
          <div className="vm-dots" style={{ padding: "var(--v1) var(--g2)" }}><VisibilityScoreMock /></div>
          <p className="type-xs muted">Free plan includes 50 monthly credits and up to 1 project.</p>
        </aside>
      </div>
    </div>
  );
}
