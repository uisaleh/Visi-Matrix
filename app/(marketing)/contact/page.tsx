import type { Metadata } from "next";
import { Section } from "@/components/marketing/Section";
import { ContactForm } from "./ContactForm";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section variant="hero">
      <div className="vm-split" style={{ alignItems: "start" }}>
        <div className="vm-stack" style={{ gap: "var(--v1)" }}>
          <div className="vm-head" style={{ marginBottom: 0 }}>
            <p className="vm-eyebrow">Contact</p>
            <h1 className="type-xl">Talk to us</h1>
            <p className="lede">Sales questions, support, feedback, or partnership ideas — we answer every message, usually within one business day.</p>
          </div>
          <p className="type-sm muted">Or write to us directly at <a className="vm-btn-text" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
          <div className="vm-plate vm-plate--hollow">
            <p className="vm-eyebrow">Enterprise</p>
            <p className="type-sm muted">Need unlimited projects, SSO, or custom credit volume? Mention “Enterprise” in your message and we’ll route it to the right person.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
