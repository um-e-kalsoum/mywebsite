"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["leadership", "Leadership"],
  ["skills", "Skills"],
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
      <nav aria-label="Sections" className="mx-auto flex max-w-4xl items-center gap-1 overflow-x-auto py-3 pr-16 pl-6 font-code text-[13px]">
        <a
          href="#top"
          aria-label="Um-e-Kalsoum Asif, back to top"
          className="mr-3 shrink-0 font-serif text-lg leading-none italic transition-colors hover:text-accent"
        >
          U<span className="mx-px not-italic text-accent">∪</span>A
        </a>
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
