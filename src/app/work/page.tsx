import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Work() {
  const projects = getContent("projects");

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-medium tracking-tight">Work</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.slug} className="group">
            <Link
              href={project.external_url || `/work/${project.slug}`}
              className="no-underline block"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h2>
                {project.date && (
                  <time
                    className="shrink-0 text-sm tabular-nums"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {new Date(project.date).getFullYear()}
                  </time>
                )}
              </div>
              {project.description && (
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {project.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
