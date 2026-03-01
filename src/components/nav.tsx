"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border)" }}>
      <Link 
        href="/" 
        className="text-lg font-medium no-underline"
        style={{ 
          fontFamily: "'Crimson Pro', Georgia, serif",
          color: "var(--color-text)"
        }}
      >
        Nikhil Kumar
      </Link>
      <div 
        className="flex gap-6 text-sm" 
        style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "var(--color-muted)"
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="no-underline transition-colors"
            style={{ 
              color: hoveredLink === link.href ? "var(--color-text)" : "inherit",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center"
            }}
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
