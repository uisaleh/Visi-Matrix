import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Blog", description: post?.excerpt };
}

/** Post template. In production the body comes from the CMS; the sample below shows every element styled. */
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);
  return (
    <>
      <section className="vm-section vm-section--hero">
        <div style={{ maxWidth: "52rem" }}>
          <p className="vm-eyebrow"><Link href="/blog">Blog</Link></p>
          <h1 className="type-xl balance">{post.title}</h1>
          <p className="mono type-xs muted" style={{ marginTop: "var(--v1)" }}>{post.date} · {post.author}</p>
        </div>
      </section>
      <section className="vm-section">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 260px", gap: "var(--v2)" }} className="vm-post-grid">
          <article className="vm-prose">
            <p className="type-md-sm">{post.excerpt}</p>
            <p>Ask ChatGPT “what’s the best tool for X” in your category and read the answer slowly. Is your brand in it? Is it described the way you’d describe it? Or does the answer name three competitors and move on?</p>
            <h2>What is AI visibility?</h2>
            <p>AI visibility is how often, how prominently and how accurately your brand appears in answers from AI search engines and assistants such as ChatGPT, Gemini, Claude, Perplexity, Microsoft Copilot and Google AI Overviews.</p>
            <ul>
              <li>Are you mentioned? When someone asks a question you should be part of, does the answer name you at all?</li>
              <li>Where are you placed? First recommendation, or fifth in a list of five?</li>
              <li>Are you cited? Does the assistant link to your website, or to someone else’s article about you?</li>
            </ul>
            <blockquote><strong>Quick tip:</strong> AI answers vary from one run to the next. One screenshot proves very little — check the same set of questions repeatedly and look at the pattern.</blockquote>
            <h3>What AI visibility products track</h3>
            <table>
              <thead><tr><th>Feature</th><th>What it tells you</th></tr></thead>
              <tbody>
                <tr><td>Prompt tracking</td><td>Whether you appear for specific questions, checked on a schedule</td></tr>
                <tr><td>Mention and rank</td><td>If you were named, and where you appeared in the answer</td></tr>
                <tr><td>Citations and sources</td><td>Which websites the AI relied on, and which it cited for competitors but not you</td></tr>
              </tbody>
            </table>
          </article>
          <aside className="vm-stack" style={{ gap: "var(--g2)", alignSelf: "start", position: "sticky", top: "calc(var(--site-header-height) + 20px)" }}>
            <div className="vm-plate vm-plate--inset">
              <p className="vm-eyebrow">Try VisiMatrix</p>
              <p className="type-sm muted">See what 7 AI assistants say about your brand. Free plan, no card.</p>
              <Link href="/register" className="vm-btn vm-btn--accent vm-btn--sm" style={{ marginTop: "var(--g2)" }}>Start free</Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="vm-section">
        <p className="vm-eyebrow">Keep reading</p>
        <div className="vm-cells" style={{ ["--cols" as string]: 3 }}>
          {more.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="vm-stack" style={{ gap: "var(--g1)" }}>
              <span className="mono type-xs muted">{p.date}</span>
              <h3 className="type-md">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
