"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const nav = [
  { href: "#map", label: "Map" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/** Stays pinned to the top; the name appears once the big one scrolls away. */
export default function Header() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-name");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setShowName(!entry.isIntersecting), {
      rootMargin: "-56px 0px 0px 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex h-14 max-w-plate items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href="#top"
          className="relative flex min-w-0 items-center"
          aria-label={`${profile.name}, back to top`}
        >
          <span
            className={`whitespace-nowrap font-display text-[18px] leading-none transition-all duration-300 ${
              showName ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
            }`}
          >
            {profile.name}
          </span>
          <span
            className={`absolute left-0 hidden whitespace-nowrap font-mono text-[12px] text-ink-muted transition-opacity duration-300 sm:block ${
              showName ? "opacity-0" : "opacity-100"
            }`}
          >
            {profile.now.map((n) => n.label).join("  ·  ")}
          </span>
        </a>
        <nav aria-label="Sections" className="flex items-center gap-4 text-[14px] sm:gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-ink-muted transition-colors hover:text-ink ${
                n.href === "#map" || n.href === "#projects" ? "hidden sm:inline" : ""
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="rounded-[3px] border border-ink/25 px-2.5 py-1 text-ink transition-colors hover:border-pine hover:text-pine"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
