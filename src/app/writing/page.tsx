import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Writing() {
  const posts = getContent("writing");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium tracking-tight">Writing</h1>
      {posts.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          Essays coming soon — porting from Substack.
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link
                href={post.external_url || `/writing/${post.slug}`}
                className="no-underline"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h2>
                  <time
                    className="shrink-0 text-sm tabular-nums"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </time>
                </div>
                {post.description && (
                  <p className="mt-1 text-sm" style={{ color: "var(--color-muted)" }}>
                    {post.description}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
