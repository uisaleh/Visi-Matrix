import type { Metadata } from "next";
import Link from "next/link";
import { PasswordField } from "../PasswordField";

export const metadata: Metadata = { title: "Create account" };

export default function RegisterPage() {
  return (
    <div className="vm-stack" style={{ gap: "var(--v1)" }}>
      <div>
        <p className="vm-eyebrow">Create account</p>
        <h1 className="type-lg">Start tracking for free</h1>
        <p className="muted" style={{ marginTop: 6 }}>50 credits a month and 1 project. No card required.</p>
      </div>
      <form className="vm-stack" style={{ gap: "var(--g2)" }} action="/projects">
        <label className="vm-field"><span className="vm-label">Your name <span className="req">*</span></span><input className="vm-input" name="name" placeholder="Jane Doe" autoComplete="name" required /></label>
        <label className="vm-field"><span className="vm-label">Workspace name</span><input className="vm-input" name="workspace" placeholder="Acme Inc." /><span className="vm-help">You can invite teammates later.</span></label>
        <label className="vm-field"><span className="vm-label">Email <span className="req">*</span></span><input className="vm-input" type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
        <label className="vm-field"><span className="vm-label">Password <span className="req">*</span></span><PasswordField autoComplete="new-password" /><span className="vm-help">At least 8 characters.</span></label>
        <button className="vm-btn vm-btn--accent vm-btn--block" type="submit">Create account</button>
        <p className="type-xs muted">By creating an account you agree to the <Link href="/terms-and-conditions" className="vm-btn-text">Terms</Link> and <Link href="/privacy-policy" className="vm-btn-text">Privacy policy</Link>.</p>
      </form>
      <p className="type-sm muted">Already have an account? <Link href="/login" className="vm-btn-text">Sign in</Link></p>
    </div>
  );
}
