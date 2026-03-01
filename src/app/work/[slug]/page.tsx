import { getContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getContent("projects").map((p) => ({ slug: p.slug }));
}

export default async function WorkProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = getContent("projects");
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="space-y-8">
      <header>
        <Link
          href="/work"
          className="no-underline text-sm"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--color-faint)" }}
        >
          ← Work
        </Link>
        <h1 className="text-3xl mt-4" style={{ fontWeight: 500, lineHeight: 1.3 }}>
          {project.title}
        </h1>
        {project.date && (
          <time
            className="block mt-2"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-faint)" }}
          >
            {new Date(project.date).getFullYear()}
          </time>
        )}
      </header>

      <div
        className="space-y-5 leading-relaxed"
        style={{ maxWidth: "640px" }}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(project.body) }}
      />
    </article>
  );
}

function renderMarkdown(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("# ")) return `<h2 style="font-size:1.4rem;font-weight:500;margin-top:1.5em">${trimmed.slice(2)}</h2>`;
      if (trimmed.startsWith("## ")) return `<h2 style="font-size:1.4rem;font-weight:500;margin-top:1.5em">${trimmed.slice(3)}</h2>`;
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
