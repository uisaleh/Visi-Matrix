import { readLegal } from "@/lib/markdown";

export function LegalPage({ slug }: { slug: string }) {
  const { title, intro, body } = readLegal(slug);
  return (
    <>
      <section className="vm-section vm-section--hero">
        <div className="vm-head" style={{ marginBottom: 0 }}>
          <p className="vm-eyebrow">Legal</p>
          <h1 className="type-xl">{title}</h1>
          <p className="lede">{intro}</p>
        </div>
      </section>
      <section className="vm-section"><article className="vm-prose">{body}</article></section>
    </>
  );
}
