import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";

/** Minimal markdown for legal pages: #/##/### headings, "- " lists, paragraphs, bare emails linked. */
const linkify = (t: string): ReactNode[] =>
  t.split(/([\w.+-]+@[\w-]+\.[\w.]+?)(?=[.,;:]?(?:\s|$))/g).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

export function readLegal(slug: string) {
  const src = fs.readFileSync(path.join(process.cwd(), "content/legal", `${slug}.md`), "utf8");
  const lines = src.split("\n").filter((l) => l.trim());
  const title = lines[0].replace(/^#\s+/, "");
  const intro = lines[1];
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) blocks.push(<ul key={`ul${blocks.length}`}>{list.map((li, i) => <li key={i}><span>{linkify(li)}</span></li>)}</ul>);
    list = [];
  };
  lines.slice(2).forEach((l, i) => {
    if (l.startsWith("- ")) return list.push(l.slice(2));
    flush();
    if (l.startsWith("### ")) blocks.push(<h3 key={i}>{l.slice(4)}</h3>);
    else if (l.startsWith("## ")) blocks.push(<h2 key={i}>{l.slice(3)}</h2>);
    else blocks.push(<p key={i}>{linkify(l)}</p>);
  });
  flush();
  return { title, intro, body: blocks };
}
