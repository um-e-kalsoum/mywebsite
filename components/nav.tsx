"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["leadership", "Leadership"],
  ["skills", "Skills"],
  ["contact", "Contact"],
] as const;

function linkClass(id: string, active: boolean) {
  const base = "shrink-0 rounded px-2.5 py-1 transition-colors";
  if (id === "contact") {
    return `${base} ${active ? "bg-accent text-background" : "text-accent hover:bg-accent/10"}`;
  }
  return `${base} ${active ? "bg-foreground text-background" : "text-muted hover:text-foreground"}`;
}

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
      {/* Logo | links | toggle. Side columns share the leftover space equally so the links stay centered. */}
      <div className="mx-auto grid max-w-4xl grid-cols-[minmax(max-content,1fr)_minmax(0,auto)_minmax(max-content,1fr)] items-center gap-3 px-6 py-2.5">
        <a
          href="#top"
          aria-label="Um-e-Kalsoum Asif, back to top"
          className="justify-self-start font-serif text-lg leading-none italic transition-colors hover:text-accent"
        >
          <span className="not-italic text-accent">{"{"}</span>U<span className="mr-0.5 not-italic">,</span>A
          <span className="not-italic text-accent">{"}"}</span>
        </a>
        <nav
          aria-label="Sections"
          className="flex min-w-0 items-center justify-center-safe gap-1 overflow-x-auto font-code text-[13px]"
        >
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={linkClass(id, active === id)}
            >
              {label}
            </a>
          ))}
        </nav>
        <ThemeToggle className="justify-self-end" />
      </div>
    </header>
  );
}
