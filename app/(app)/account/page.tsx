import { TopBar } from "@/components/app/AppShell";
import { user } from "@/lib/app-data";

export const metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <>
      <TopBar crumbs={[{ label: "Account" }]} />
      <div className="vm-content" style={{ maxWidth: 760 }}>
        <div className="vm-page-head"><div><h1>Account</h1><p>Manage your profile and sign-in details.</p></div></div>
        <section className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Profile</span></div>
          <form className="vm-stack" style={{ gap: "var(--g2)", padding: "var(--g2)" }}>
            <label className="vm-field"><span className="vm-label">Full name <span className="req">*</span></span><input className="vm-input" defaultValue={user.name} placeholder="Jane Doe" /></label>
            <label className="vm-field"><span className="vm-label">Email</span><input className="vm-input" defaultValue={user.email} readOnly style={{ background: "var(--card)" }} /></label>
            <div><button className="vm-btn vm-btn--accent vm-btn--sm" type="button">Save changes</button></div>
          </form>
        </section>
        <section className="vm-plate vm-plate--flush">
          <div className="vm-plate__head"><span className="vm-eyebrow">Password</span></div>
          <form className="vm-stack" style={{ gap: "var(--g2)", padding: "var(--g2)" }}>
            <label className="vm-field"><span className="vm-label">Current password <span className="req">*</span></span><input className="vm-input" type="password" autoComplete="current-password" /></label>
            <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
              <label className="vm-field"><span className="vm-label">New password <span className="req">*</span></span><input className="vm-input" type="password" placeholder="At least 8 characters" autoComplete="new-password" /></label>
              <label className="vm-field"><span className="vm-label">Confirm new password <span className="req">*</span></span><input className="vm-input" type="password" autoComplete="new-password" /></label>
            </div>
            <div><button className="vm-btn vm-btn--sm" type="button">Update password</button></div>
          </form>
        </section>
      </div>
    </>
  );
}
