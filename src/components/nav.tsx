import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <nav className="flex items-center justify-between pb-6" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <Link
        href="/"
        className="no-underline text-lg"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--color-text)" }}
      >
        Nikhil Kumar
      </Link>
      <div className="flex gap-5" style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="no-underline transition-colors"
            style={{ color: "var(--color-muted)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
