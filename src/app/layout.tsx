import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Nikhil Kumar",
  description: "Personal site of Nikhil Kumar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">
          <Nav />
          <main className="mt-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
