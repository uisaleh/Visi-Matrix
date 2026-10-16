"use client";
import { useEffect, type ReactNode } from "react";

/** Centered modal — square plate on a dimmed backdrop. */
export function Modal({ open, onClose, title, sub, children, footer }: { open: boolean; onClose: () => void; title: string; sub?: string; children: ReactNode; footer?: ReactNode }) {
  useEsc(open, onClose);
  if (!open) return null;
  return (
    <div className="vm-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="vm-modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="vm-modal__head"><div><h2 className="type-md">{title}</h2>{sub && <p className="type-sm muted" style={{ marginTop: 4 }}>{sub}</p>}</div><button className="vm-icon-btn" onClick={onClose} aria-label="Close">✕</button></div>
        <div className="vm-modal__body">{children}</div>
        {footer && <div className="vm-modal__foot">{footer}</div>}
      </div>
    </div>
  );
}

/** Right-hand drawer, 560px — used for report details. */
export function Drawer({ open, onClose, title, actions, children }: { open: boolean; onClose: () => void; title: string; actions?: ReactNode; children: ReactNode }) {
  useEsc(open, onClose);
  if (!open) return null;
  return (
    <div className="vm-overlay vm-overlay--drawer" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="vm-drawer" role="dialog" aria-modal="true" aria-label={title}>
        <div className="vm-modal__head"><h2 className="type-md">{title}</h2><div className="vm-row" style={{ flexWrap: "nowrap" }}>{actions}<button className="vm-icon-btn" onClick={onClose} aria-label="Close">✕</button></div></div>
        <div className="vm-drawer__body">{children}</div>
      </aside>
    </div>
  );
}

export function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return <button type="button" role="switch" aria-checked={checked} aria-label={label} className="vm-switch" onClick={() => onChange(!checked)}><span /></button>;
}

function useEsc(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
}
