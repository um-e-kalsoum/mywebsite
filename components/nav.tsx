"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["experience", "Experience"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["leadership", "Leadership"],
  ["skills", "Skills"],
  ["math-lab", "Math Lab"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-subtle bg-background/80 backdrop-blur">
      <nav aria-label="Sections" className="mx-auto flex max-w-4xl items-center gap-1 overflow-x-auto py-3 pr-16 pl-6 text-sm">
        <a href="#top" className="mr-3 shrink-0 font-mono text-muted transition-colors hover:text-foreground">uek</a>
        {LINKS.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            className={`shrink-0 rounded px-2.5 py-1 transition-colors ${
              active === id ? "bg-foreground text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
