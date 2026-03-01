import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Work() {
  const projects = getContent("projects");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium tracking-tight">Work</h1>
      {projects.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          Selected projects — coming soon.
        </p>
      ) : (
        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.slug} className="group space-y-2">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-medium">
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
                </h2>
                <time
                  className="shrink-0 text-sm tabular-nums"
                  style={{ color: "var(--color-muted)" }}
                >
                  {new Date(project.date).getFullYear()}
                </time>
              </div>
              {project.description && (
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {project.description}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
