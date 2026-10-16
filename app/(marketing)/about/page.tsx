import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/Section";

export const metadata: Metadata = { title: "About us" };

const principles = [
  { t: "Measure before you optimize", b: "You cannot improve a channel you cannot see. Visibility comes first." },
  { t: "Track the whole market", b: "Your score only means something next to your competitors’ share of voice." },
  { t: "Sources are strategy", b: "AI assistants lean on a small set of citations — knowing which ones is half the battle." },
];

export default function AboutPage() {
  return (
    <>
      <Section as="h1" variant="hero" eyebrow="About us" title="AI answers are the new search results" lede="Buyers increasingly ask ChatGPT, Gemini, Claude, and Perplexity instead of searching. We built VisiMatrix so brands can see — and shape — what those assistants say about them." />
      <Section>
        <div className="vm-split vm-split--even" style={{ alignItems: "start" }}>
          <div><p className="vm-eyebrow">Why we exist</p><h2 className="type-lg">Ten blue links are fading</h2></div>
          <div className="vm-stack" style={{ gap: "var(--v6_12)" }}>
            <p className="serif-body" style={{ fontSize: "1.25rem", lineHeight: 1.45 }}>For twenty years, brands optimized for ten blue links. That playbook is fading: when a buyer asks an AI assistant for “the best tool for X”, there is one answer, a couple of named brands, and a handful of cited sources. If you are not in that answer, you are invisible — and until now there was no reliable way to even know.</p>
            <p className="muted">VisiMatrix makes AI visibility measurable. We ask the assistants the same questions your buyers ask, then score every answer: were you mentioned, how were you ranked, what was the sentiment, and which sources did the AI cite.</p>
          </div>
        </div>
      </Section>
      <Section eyebrow="What we believe" title="The principles behind every score">
        <div className="vm-cells" style={{ ["--cols" as string]: 3 }}>
          {principles.map((p, i) => (<div key={p.t}><p className="mono type-xs muted">{String(i + 1).padStart(2, "0")}</p><h3 className="type-md" style={{ marginTop: "var(--g1)" }}>{p.t}</h3><p className="type-sm muted" style={{ marginTop: "var(--g1)" }}>{p.b}</p></div>))}
        </div>
      </Section>
      <Section eyebrow="Where we are today" title="Built for teams that already live in AI answers" lede="VisiMatrix tracks 7 AI providers across scheduled or on-demand analyses, with visibility scoring, competitor share of voice, sentiment, and citation analysis built in. Teams from solo founders to agencies managing dozens of client brands use it to stay in the answer.">
        <div className="vm-plate vm-plate--inset vm-row vm-row--between">
          <p>Questions, ideas, or feedback? We read everything.</p>
          <Link href="/contact" className="vm-btn vm-btn--ghost">Get in touch →</Link>
        </div>
      </Section>
    </>
  );
}
