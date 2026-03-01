import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Home() {
  const writing = getContent("writing").slice(0, 5);
  const projects = getContent("projects").slice(0, 4);

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-medium tracking-tight">Nikhil Kumar</h1>
        <p
          className="mt-4 text-lg leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          Builder, writer, chef, teacher. Working at the intersection of
          technology, art, and culture. Co-founder of{" "}
          <a href="https://5x5.studio" className="underline">
            5x5 Collective
          </a>
          .
        </p>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: "var(--color-muted)" }}
          >
            Recent Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm no-underline"
            style={{ color: "var(--color-muted)" }}
          >
            All →
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {writing.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Essays coming soon.
            </p>
          ) : (
            writing.map((post) => (
              <Link
                key={post.slug}
                href={post.external_url || `/writing/${post.slug}`}
                className="flex items-baseline justify-between gap-4 no-underline group"
              >
                <span className="group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </span>
                <time
                  className="shrink-0 text-sm tabular-nums"
                  style={{ color: "var(--color-muted)" }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </time>
              </Link>
            ))
          )}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: "var(--color-muted)" }}
          >
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-sm no-underline"
            style={{ color: "var(--color-muted)" }}
          >
            All →
          </Link>
        </div>
        <div className="mt-4 space-y-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.external_url || `/work/${project.slug}`}
              className="block no-underline group"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </span>
                <time
                  className="shrink-0 text-sm tabular-nums"
                  style={{ color: "var(--color-muted)" }}
                >
                  {new Date(project.date).getFullYear()}
                </time>
              </div>
              {project.description && (
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  {project.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
