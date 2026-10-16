"use client";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="vm-plate vm-plate--inset"><p className="vm-eyebrow">Message sent</p><p>Thanks — we usually reply within one business day.</p></div>;
  return (
    <form className="vm-plate vm-stack" style={{ gap: "var(--g2)" }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="vm-grid" style={{ ["--cols" as string]: 2 }}>
        <label className="vm-field"><span className="vm-label">Your name <span className="req">*</span></span><input className="vm-input" name="name" placeholder="Jane Doe" required /></label>
        <label className="vm-field"><span className="vm-label">Email <span className="req">*</span></span><input className="vm-input" type="email" name="email" placeholder="you@company.com" required /></label>
      </div>
      <label className="vm-field"><span className="vm-label">Subject</span><input className="vm-input" name="subject" placeholder="How can we help?" /></label>
      <label className="vm-field"><span className="vm-label">Message</span><textarea className="vm-textarea" name="message" placeholder="Tell us a bit about what you need…" /></label>
      <div><button className="vm-btn vm-btn--accent" type="submit">Send message</button></div>
    </form>
  );
}
