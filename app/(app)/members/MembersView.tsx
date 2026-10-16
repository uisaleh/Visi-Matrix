"use client";
import { useState } from "react";
import { Modal } from "@/components/app/Overlay";
import { members, roles, projects, workspace } from "@/lib/app-data";

export function MembersView() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("Member");
  return (
    <div className="vm-content">
      <div className="vm-page-head">
        <div><h1>Members</h1><p>People with access to {workspace.name}.</p></div>
        <button className="vm-btn vm-btn--accent vm-btn--sm" onClick={() => setOpen(true)}>Add member</button>
      </div>
      <div className="vm-cells" style={{ ["--cols" as string]: 5 }}>
        {roles.map((r) => (<div key={r.role}><p className="vm-eyebrow" style={{ marginBottom: 8 }}>{r.role}</p><p className="type-sm muted">{r.body}</p></div>))}
      </div>
      <div className="vm-plate vm-plate--flush vm-table-wrap">
        <table className="vm-table">
          <thead><tr><th>Member</th><th>Role</th><th>Access</th><th>Status</th><th>Joined</th></tr></thead>
          <tbody>{members.map((m) => (
            <tr key={m.email}>
              <td><span className="vm-row" style={{ flexWrap: "nowrap" }}><span className="vm-avatar">{m.name[0]}</span><span>{m.name}<br /><span className="type-xs muted mono">{m.email}</span></span></span></td>
              <td><span className="vm-badge vm-badge--accent">{m.role}</span></td><td className="type-sm">{m.access}</td>
              <td><span className="vm-badge vm-badge--yes">{m.status}</span></td><td className="type-sm muted">{m.joined}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Add member" sub="They get an email invite to join this workspace."
        footer={<><button className="vm-btn vm-btn--ghost vm-btn--sm" onClick={() => setOpen(false)}>Cancel</button><button className="vm-btn vm-btn--accent vm-btn--sm">Send invite</button></>}>
        <label className="vm-field"><span className="vm-label">Email <span className="req">*</span></span><input className="vm-input" type="email" placeholder="teammate@company.com" /></label>
        <label className="vm-field"><span className="vm-label">Role</span><select className="vm-select" value={role} onChange={(e) => setRole(e.target.value)}>{roles.filter((r) => r.role !== "Owner").map((r) => <option key={r.role}>{r.role}</option>)}</select><span className="vm-help">{roles.find((r) => r.role === role)?.body}</span></label>
        {role === "Client" && (
          <fieldset className="vm-field" style={{ border: 0, padding: 0, margin: 0 }}><legend className="vm-label" style={{ marginBottom: 8 }}>Project access</legend>
            <div className="vm-row">{projects.map((p) => <label key={p.id} className="vm-chip"><input type="checkbox" style={{ accentColor: "var(--accent)" }} /> {p.name}</label>)}</div>
          </fieldset>)}
      </Modal>
    </div>
  );
}
