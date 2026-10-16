"use client";
import { useState } from "react";

export function PasswordField({ name = "password", autoComplete = "current-password" }: { name?: string; autoComplete?: string }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <input className="vm-input" type={show ? "text" : "password"} name={name} placeholder="••••••••" autoComplete={autoComplete} required minLength={8} style={{ paddingRight: 64 }} />
      <button type="button" className="vm-btn-quaternary type-xs" onClick={() => setShow(!show)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)" }} aria-label={show ? "Hide password" : "Show password"}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
