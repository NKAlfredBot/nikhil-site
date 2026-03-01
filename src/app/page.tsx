import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Home() {
  const posts = getContent("writing").slice(0, 3);
  const projects = getContent("projects").slice(0, 3);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-medium tracking-tight">Nikhil Kumar</h1>
        <p className="mt-4 leading-relaxed" style={{ color: "var(--color-muted)" }}>
          Co-founder of <a href="https://5x5.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">5x5 Collective</a>, artist-in-residence at <a href="https://www.blackbrickproject.com/studios" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">Black Brick Project</a>. NYU ITP grad exploring biodesign, technology, and culture. Former chef, teacher, and fullstack human.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "var(--color-muted)" }}>
          Recent Writing
        </h2>
        <div className="space-y-3">
          {posts.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Essays coming soon.
            </p>
          ) : (
            posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={post.external_url || `/writing/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 no-underline"
                >
                  <h3 className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h3>
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
              </article>
            ))
          )}
        </div>
        <div className="mt-4">
          <Link
            href="/writing"
            className="text-sm hover:text-[var(--color-accent)] transition-colors"
            style={{ color: "var(--color-muted)" }}
          >
            View all writing →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "var(--color-muted)" }}>
          Selected Work
        </h2>
        <div className="space-y-4">
          {projects.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Projects coming soon.
            </p>
          ) : (
            projects.map((project) => (
              <article key={project.slug} className="group space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium">
                    {project.external_url ? (
                      <a
                        href={project.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:text-[var(--color-accent)] transition-colors"
                      >
                        {project.title}
                      </Link>
                    )}
                  </h3>
                  <time
                    className="shrink-0 text-sm tabular-nums"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {new Date(project.date).getFullYear()}
                  </time>
                </div>
                {project.description && (
                  <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {project.description}
                  </p>
                )}
              </article>
            ))
          )}
        </div>
        <div className="mt-4">
          <Link
            href="/work"
            className="text-sm hover:text-[var(--color-accent)] transition-colors"
            style={{ color: "var(--color-muted)" }}
          >
            View all work →
          </Link>
        </div>
      </section>
    </div>
  );
}
