import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-lg font-medium no-underline">
        Nikhil Kumar
      </Link>
      <div className="flex gap-6 text-sm" style={{ color: "var(--color-muted)" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="no-underline transition-colors hover:text-[var(--color-text)]"
            style={{ color: "inherit" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
