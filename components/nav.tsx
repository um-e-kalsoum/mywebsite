"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

// [section id, label, symbol shown in the phone menu]
const LINKS = [
  ["experience", "Experience", "Σ"],
  ["projects", "Projects", "∫"],
  ["education", "Education", "ε"],
  ["leadership", "Leadership", "∇"],
  ["skills", "Skills", "λ"],
  ["contact", "Contact", "∴"],
] as const;

function linkClass(id: string, active: boolean) {
  const base = "shrink-0 rounded px-2.5 py-1 transition-colors";
  if (id === "contact") {
    return `${base} ${active ? "bg-accent text-background" : "text-accent hover:bg-accent/10"}`;
  }
  return `${base} ${active ? "bg-foreground text-background" : "text-muted hover:text-foreground"}`;
}

// Scroll to a section without putting "#id" in the URL.
// Ctrl/Cmd/middle clicks fall through to the href so "open in new tab" still works.
function scrollToSection(e: MouseEvent<HTMLAnchorElement>, id: string) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  if (id === "top") window.scrollTo({ top: 0 });
  else document.getElementById(id)?.scrollIntoView();
  // Clear any hash left over from arriving via an old link like /#contact.
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

export function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

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

  // Escape closes the phone menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-subtle bg-background/80 backdrop-blur">
      {/* Logo | links | toggle. Side columns share the leftover space equally so the links stay centered. */}
      <div className="mx-auto grid max-w-4xl grid-cols-[minmax(max-content,1fr)_minmax(0,auto)_minmax(max-content,1fr)] items-center gap-3 px-6 py-2.5">
        <a
          href="#top"
          onClick={(e) => {
            scrollToSection(e, "top");
            setOpen(false);
          }}
          aria-label="Um-e-Kalsoum Asif, back to top"
          className="justify-self-start font-serif text-lg leading-none italic transition-colors hover:text-accent"
        >
          <span className="not-italic text-accent">{"{"}</span>U<span className="mr-0.5 not-italic">,</span>A
          <span className="not-italic text-accent">{"}"}</span>
        </a>

        {/* Desktop and tablet: links in the bar */}
        <nav
          aria-label="Sections"
          className="hidden min-w-0 items-center justify-center-safe gap-1 overflow-x-auto font-code text-[13px] md:flex"
        >
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              aria-current={active === id ? "true" : undefined}
              className={linkClass(id, active === id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          {/* Phones: the links move into a drop-down menu */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="phone-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`rounded-md border bg-background p-2 transition-colors md:hidden ${
              open ? "border-accent text-accent" : "border-subtle text-muted hover:text-foreground"
            }`}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <>
          {/* Tapping the dimmed page closes the menu. */}
          <div aria-hidden className="absolute inset-x-0 top-full h-dvh bg-black/20 md:hidden" onClick={() => setOpen(false)} />
          <nav id="phone-menu" aria-label="Sections" className="relative border-t border-subtle bg-background md:hidden">
            <ul className="divide-y divide-subtle font-code text-sm">
              {LINKS.map(([id, label, symbol]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      scrollToSection(e, id);
                      setOpen(false);
                    }}
                    aria-current={active === id ? "true" : undefined}
                    className={`flex items-center gap-3 px-6 py-3 transition-colors hover:bg-accent/10 ${
                      id === "contact" || active === id ? "text-accent" : "text-foreground"
                    }`}
                  >
                    <span aria-hidden className="w-4 text-center font-serif text-base text-accent">
                      {symbol}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
