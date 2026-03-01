import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Home() {
  const writing = getContent("writing").slice(0, 5);
  const projects = getContent("projects").slice(0, 4);

  return (
    <div className="space-y-14">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl" style={{ fontWeight: 500, letterSpacing: "0.01em" }}>
          Nikhil Kumar
        </h1>
        <p
          className="mt-4"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-faint)" }}
        >
          Fullstack Human · Artist · Technologist
        </p>
        <p className="mt-6 text-lg leading-relaxed mx-auto" style={{ maxWidth: "520px", color: "var(--color-muted)" }}>
          Co-founder of{" "}
          <a href="https://5x5.studio">5x5 Collective</a>,
          artist-in-residence at{" "}
          <a href="https://www.blackbrickproject.com/studios">Black Brick Project</a>.
          NYU ITP grad exploring biodesign, technology, and culture.
          Former chef, teacher, and fullstack human.
        </p>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <span className="label">Recent Writing</span>
          <Link
            href="/writing"
            className="no-underline"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-faint)" }}
          >
            View all writing →
          </Link>
        </div>
        <div className="space-y-4">
          {writing.map((post, i) => (
            <Link
              key={post.slug}
              href={post.external_url || `/writing/${post.slug}`}
              className="flex items-baseline gap-4 no-underline group"
            >
              <span className="fn-number">[{i + 1}]</span>
              <span className="flex-1 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: "var(--color-text)" }}>
                {post.title}
              </span>
              <time style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-faint)", flexShrink: 0 }}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
              </time>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <span className="label">Selected Work</span>
          <Link
            href="/work"
            className="no-underline"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-faint)" }}
          >
            View all work →
          </Link>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.external_url || `/work/${project.slug}`}
              className="meta-card block no-underline group"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="group-hover:text-[var(--color-accent)] transition-colors" style={{ fontWeight: 500, color: "var(--color-text)" }}>
                  {project.title}
                </h3>
                <time style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-faint)", flexShrink: 0 }}>
                  {new Date(project.date).getFullYear()}
                </time>
              </div>
              {project.description && (
                <p className="mt-2 text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}>
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
