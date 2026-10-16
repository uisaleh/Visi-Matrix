"use client";
import { useState } from "react";
import { Modal } from "./Overlay";
import { providers } from "@/lib/site";

export function RunAnalysisButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="vm-btn vm-btn--accent vm-btn--sm" onClick={() => setOpen(true)}>Run Analysis</button>
      <Modal open={open} onClose={() => setOpen(false)} title="Run analysis" sub="Each active prompt is sent to each selected provider. 1 credit per prompt per provider."
        footer={<><button className="vm-btn vm-btn--ghost vm-btn--sm" onClick={() => setOpen(false)}>Cancel</button><button className="vm-btn vm-btn--accent vm-btn--sm">Run · 308 credits</button></>}>
        <div className="vm-row">{providers.map((x) => (<label key={x.name} className="vm-chip"><input type="checkbox" defaultChecked style={{ accentColor: "var(--accent)" }} /> {x.name}</label>))}</div>
        <p className="type-sm muted">44 active prompts × 7 providers = 308 credits. Credits are only charged for successful queries.</p>
      </Modal>
    </>
  );
}
