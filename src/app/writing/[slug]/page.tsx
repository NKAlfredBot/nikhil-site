import { getContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getContent("writing").map((post) => ({ slug: post.slug }));
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getContent("writing");
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      <header>
        <Link
          href="/writing"
          className="no-underline text-sm"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-faint)" }}
        >
          ← Writing
        </Link>
        <h1 className="text-3xl mt-4" style={{ fontWeight: 500, lineHeight: 1.3 }}>
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-4">
          <time
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-faint)" }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.tags && (
            <div className="flex gap-2">
              {(post.tags as string[]).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                    color: "var(--color-accent)",
                    background: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                    padding: "2px 8px",
                    borderRadius: "2px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div
        className="space-y-5 leading-relaxed"
        style={{ maxWidth: "640px" }}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
      />

      {post.external_url && (
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-muted)" }}>
          Originally published on{" "}
          <a href={post.external_url}>Substack</a>.
        </p>
      )}
    </article>
  );
}

function renderMarkdown(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("# ")) return `<h1 style="font-size:2rem;font-weight:500;margin-top:1.5em">${trimmed.slice(2)}</h1>`;
      if (trimmed.startsWith("## ")) return `<h2 style="font-size:1.4rem;font-weight:500;margin-top:1.5em">${trimmed.slice(3)}</h2>`;
      if (trimmed.startsWith("### ")) return `<h3 style="font-size:1.15rem;font-weight:500;margin-top:1.2em">${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").map(l => `<li>${inlineMarkdown(l.replace(/^[-*]\s+/, ""))}</li>`).join("");
        return `<ul style="padding-left:1.5em;list-style:disc">${items}</ul>`;
      }
      return `<p>${inlineMarkdown(trimmed.replace(/\n/g, " "))}</p>`;
    })
    .join("\n");
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code style="font-family:var(--font-mono);font-size:0.85em;background:var(--color-bg-alt);padding:1px 4px;border-radius:2px">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}
