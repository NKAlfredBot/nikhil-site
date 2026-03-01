import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Nikhil Kumar",
  description: "Builder, writer, chef, teacher. Working at the intersection of technology, art, and culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="mx-auto max-w-2xl px-8 py-10 md:px-6 md:py-16">
          <Nav />
          <main className="mt-10">{children}</main>
        </div>
        <footer className="page-footer">
          <p className="footer-note">
            This site is aware that it is a site. It tries not to make a big deal about it.
          </p>
        </footer>
      </body>
    </html>
  );
}
