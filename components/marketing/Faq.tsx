import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <div className="vm-faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
