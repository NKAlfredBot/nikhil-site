import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Home() {
  const posts = getContent("writing").slice(0, 3);
  const projects = getContent("projects").slice(0, 3);

  return (
    <>
      <div className="page-header">
        <h1>Nikhil Kumar</h1>
        <p>Fullstack Human · Artist · Technologist</p>
      </div>

      <div className="space-y-12 mt-12">
        <section>
          <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Co-founder of <a href="https://5x5.studio" target="_blank" rel="noopener noreferrer">5x5 Collective</a>, artist-in-residence at <a href="https://www.blackbrickproject.com/studios" target="_blank" rel="noopener noreferrer">Black Brick Project</a>. NYU ITP grad exploring biodesign, technology, and culture. Former chef, teacher, and fullstack human.
          </p>
        </section>

        <section>
          <div className="component-label">Recent Writing</div>
          <div className="space-y-3">
            {posts.length === 0 ? (
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                Essays coming soon.
              </p>
            ) : (
              posts.map((post, index) => (
                <article key={post.slug} className="group flex items-start gap-4">
                  <span 
                    className="text-mono shrink-0 font-medium"
                    style={{ 
                      color: "var(--dfw-blue)",
                      fontSize: "0.7rem"
                    }}
                  >
                    [{index + 1}]
                  </span>
                  <div className="flex-1">
                    <Link
                      href={post.external_url || `/writing/${post.slug}`}
                      className="group flex flex-col gap-1 no-underline"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 
                          className="font-medium transition-colors group-hover:text-[var(--dfw-blue)]"
                          style={{ color: "var(--color-text)" }}
                        >
                          {post.title}
                        </h3>
                        <time
                          className="shrink-0 text-sm tabular-nums text-mono"
                          style={{ 
                            color: "var(--color-muted)",
                            fontSize: "0.7rem"
                          }}
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                        </time>
                      </div>
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
          <div className="mt-4">
            <Link
              href="/writing"
              className="text-sm transition-colors hover:text-[var(--dfw-blue)]"
              style={{ color: "var(--color-muted)" }}
            >
              View all writing →
            </Link>
          </div>
        </section>

        <section>
          <div className="component-label">Selected Work</div>
          <div className="space-y-4">
            {projects.length === 0 ? (
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                Projects coming soon.
              </p>
            ) : (
              projects.map((project) => (
                <article key={project.slug} className="meta-card group">
                  <span className="meta-card-version">
                    {new Date(project.date).getFullYear()}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg">
                      {project.external_url ? (
                        <a
                          href={project.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-[var(--dfw-blue)]"
                          style={{ color: "var(--color-text)" }}
                        >
                          {project.title}
                        </a>
                      ) : (
                        <Link
                          href={`/work/${project.slug}`}
                          className="transition-colors hover:text-[var(--dfw-blue)]"
                          style={{ color: "var(--color-text)" }}
                        >
                          {project.title}
                        </Link>
                      )}
                    </h3>
                    {project.description && (
                      <p 
                        className="text-sm leading-relaxed" 
                        style={{ color: "var(--dfw-text-secondary)" }}
                      >
                        {project.description}
                      </p>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
          <div className="mt-4">
            <Link
              href="/work"
              className="text-sm transition-colors hover:text-[var(--dfw-blue)]"
              style={{ color: "var(--color-muted)" }}
            >
              View all work →
            </Link>
          </div>
        </section>

        <section className="border-t pt-6" style={{ borderColor: "var(--color-border)", borderStyle: "dashed" }}>
          <p 
            className="text-sm leading-relaxed" 
            style={{ 
              color: "var(--dfw-text-tertiary)",
              fontStyle: "italic",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            This site exists in that peculiar space between portfolio and personal archive—
            neither quite professional enough to impress nor quite personal enough to be 
            interesting, but perhaps that tension is itself the point.<sup style={{ fontSize: "0.7em" }}>*</sup>
          </p>
          <p 
            className="text-xs mt-2" 
            style={{ 
              color: "var(--dfw-text-tertiary)",
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            * The author is aware this kind of self-conscious meta-commentary can feel precious. 
            That's a valid criticism.
          </p>
        </section>
      </div>
    </>
  );
}
