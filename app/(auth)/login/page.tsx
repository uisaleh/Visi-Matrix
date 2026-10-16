import type { Metadata } from "next";
import Link from "next/link";
import { PasswordField } from "../PasswordField";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <div className="vm-stack" style={{ gap: "var(--v1)" }}>
      <div>
        <p className="vm-eyebrow">Sign in</p>
        <h1 className="type-lg">Welcome back</h1>
        <p className="muted" style={{ marginTop: 6 }}>Sign in to track your AI visibility.</p>
      </div>
      <form className="vm-stack" style={{ gap: "var(--g2)" }} action="/projects">
        <label className="vm-field"><span className="vm-label">Email <span className="req">*</span></span><input className="vm-input" type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
        <label className="vm-field">
          <span className="vm-row vm-row--between"><span className="vm-label">Password <span className="req">*</span></span><Link href="/forgot-password" className="vm-btn-text type-xs">Forgot password?</Link></span>
          <PasswordField />
        </label>
        <button className="vm-btn vm-btn--accent vm-btn--block" type="submit">Sign in</button>
      </form>
      <p className="type-sm muted">Don&apos;t have an account? <Link href="/register" className="vm-btn-text">Sign up</Link></p>
    </div>
  );
}
