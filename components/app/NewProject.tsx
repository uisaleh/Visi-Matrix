"use client";
import { useState } from "react";
import { Modal } from "./Overlay";

export function NewProjectButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="vm-btn vm-btn--accent vm-btn--sm" onClick={() => setOpen(true)}>New project</button>
      <Modal open={open} onClose={() => setOpen(false)} title="New project" sub="Track one website and its competitive set."
        footer={<><button className="vm-btn vm-btn--ghost vm-btn--sm" onClick={() => setOpen(false)}>Cancel</button><button className="vm-btn vm-btn--accent vm-btn--sm">Create project</button></>}>
        <label className="vm-field"><span className="vm-label">Project name <span className="req">*</span></span><input className="vm-input" placeholder="VisiMatrix" /><span className="vm-help">Also used as your own brand name for mention detection.</span></label>
        <label className="vm-field"><span className="vm-label">Website URL <span className="req">*</span></span>
          <div style={{ display: "flex" }}><span className="vm-input" style={{ width: "auto", background: "var(--card)", borderRight: 0, color: "var(--text-sec)" }}>https://</span><input className="vm-input" placeholder="visimatrix.com" /></div></label>
        <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
          <label className="vm-field"><span className="vm-label">Industry</span><input className="vm-input" placeholder="School Management" /></label>
          <label className="vm-field"><span className="vm-label">Country</span><input className="vm-input" placeholder="Select a country" list="vm-countries" /><datalist id="vm-countries"><option>Bangladesh</option><option>United States</option><option>United Kingdom</option><option>India</option></datalist></label>
        </div>
        <label className="vm-field"><span className="vm-label">Analyze frequency</span><select className="vm-select" defaultValue="Daily"><option>Daily</option><option>Weekly</option><option>Monthly</option></select><span className="vm-help">How often your prompts are analyzed. Also sets how many prompts the AI analysis generates.</span></label>
        <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
          <label className="vm-field"><span className="vm-label">Analyze limit</span><input className="vm-input" type="number" placeholder="Unlimited" /><span className="vm-help">Stop recurring scans after this many runs. Blank = as long as credits allow.</span></label>
          <label className="vm-field"><span className="vm-label">Analyze duration <span className="req">*</span></span><input className="vm-input" type="number" defaultValue={30} /><span className="vm-help">Days after creation the project keeps recurring.</span></label>
        </div>
      </Modal>
    </>
  );
}
