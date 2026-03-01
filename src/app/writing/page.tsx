import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Writing() {
  const posts = getContent("writing");

  return (
    <>
      <div className="page-header">
        <h1>Writing</h1>
        <p>Essays · Notes · Digressions</p>
      </div>

      <div className="space-y-6 mt-12">
        {posts.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Essays coming soon — porting from Substack.
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <article 
                key={post.slug} 
                className="group hover:opacity-100"
                style={{
                  paddingLeft: "3em",
                  position: "relative" as const,
                  opacity: 0.7,
                  transition: "opacity 0.3s ease"
                }}
              >
                <span 
                  style={{
                    position: "absolute" as const,
                    left: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: "var(--dfw-blue)",
                    fontSize: "0.9rem"
                  }}
                >
                  {index + 1}.
                </span>
                <Link
                  href={post.external_url || `/writing/${post.slug}`}
                  className="no-underline"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 
                        className="font-medium transition-colors group-hover:text-[var(--dfw-blue)]"
                        style={{ color: "var(--color-text)" }}
                      >
                        {post.title}
                      </h2>
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
                          day: "numeric"
                        })}
                      </time>
                    </div>
                    {post.description && (
                      <p 
                        className="mt-1 text-sm" 
                        style={{ color: "var(--color-muted)" }}
                      >
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
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
            The endnote format—borrowed from Wallace's obsessive annotation style—
            attempts to make visible the architecture of thought, the way one idea 
            leads to another and then another, recursively, until you've forgotten 
            where you started.
          </p>
        </div>
      </div>
    </>
  );
}
