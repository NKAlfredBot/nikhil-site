import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Work() {
  const projects = getContent("projects");

  return (
    <>
      <div className="page-header">
        <h1>Work</h1>
        <p>Projects · Experiments · Collaborations</p>
      </div>

      <div className="space-y-6 mt-12">
        {projects.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Selected projects — coming soon.
          </p>
        ) : (
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.slug} className="meta-card group">
                <span className="meta-card-version">
                  v{new Date(project.date).getFullYear() % 100}.{new Date(project.date).getMonth() + 1}
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="font-medium text-xl">
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
                  </h2>
                  <div className="flex items-center gap-3">
                    <time
                      className="text-sm tabular-nums text-mono"
                      style={{ 
                        color: "var(--dfw-text-tertiary)",
                        fontSize: "0.7rem"
                      }}
                    >
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long"
                      })}
                    </time>
                  </div>
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
            ))}
          </div>
        )}
        
        <div 
          className="mt-8 pt-6 border-t" 
          style={{ 
            borderColor: "var(--color-border)", 
            borderStyle: "dashed" 
          }}
        >
          <p 
            className="text-sm leading-relaxed" 
            style={{ 
              color: "var(--dfw-text-tertiary)",
              fontStyle: "italic",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Each project card includes a version number—a nod to software's iterative 
            nature and a gentle reminder that all work is provisional, always subject 
            to revision, never quite finished.
          </p>
        </div>
      </div>
    </>
  );
}
