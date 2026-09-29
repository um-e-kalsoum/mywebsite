"use client";

import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DevpostIcon, GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/data";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* Groups projects by category, keeping the order in which each category first appears. */
function groupByCategory(projects: Project[]) {
  const groups = new Map<string, number[]>();
  projects.forEach((p, i) => groups.set(p.category, [...(groups.get(p.category) ?? []), i]));
  return [...groups.entries()];
}

function Screenshot({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] w-full max-w-[280px] shrink-0 overflow-hidden rounded-md border border-subtle bg-[repeating-linear-gradient(135deg,var(--grid-line)_0_1px,transparent_1px_10px)]">
      {project.image ? (
        <Image src={project.image} alt={`${project.name} screenshot`} fill sizes="280px" className="object-cover" />
      ) : (
        <span aria-hidden className="absolute inset-0 grid place-items-center font-serif text-3xl font-semibold text-accent italic">
          {project.name[0]}
        </span>
      )}
    </div>
  );
}

function LinkButton({ href, primary, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-colors ${
        primary
          ? "border-foreground bg-foreground text-background hover:border-accent hover:bg-accent"
          : "border-subtle bg-background hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </a>
  );
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState(0);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const groups = groupByCategory(projects);
  const project = projects[selected];

  if (!project) return null;

  // The first link that's filled in gets the solid button.
  const primary = (["site", "github", "devpost", "demo"] as const).find((k) => project[k]);

  return (
    <div className="overflow-hidden rounded-lg border border-subtle bg-background">
      <div className="flex items-center gap-1.5 border-b border-subtle px-3 py-2 text-xs text-muted">
        <span className="size-2.5 rounded-full bg-accent" />
        <span className="size-2.5 rounded-full bg-subtle" />
        <span className="size-2.5 rounded-full bg-subtle" />
        <span className="ml-2 truncate">~/um-e-kalsoum/projects</span>
      </div>

      <div className="grid md:h-[440px] md:grid-cols-[240px_1fr]">
        <nav
          aria-label="Projects"
          className="scroll-thin flex max-h-56 flex-col gap-px overflow-y-auto border-b border-subtle p-2 text-[13px] md:max-h-none md:border-r md:border-b-0"
        >
          <span className="px-2 py-1 text-muted">projects/</span>
          {groups.map(([category, indexes]) => {
            const open = !collapsed[category];
            return (
              <div key={category} className="flex flex-col gap-px">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setCollapsed((c) => ({ ...c, [category]: open }))}
                  className="flex items-center gap-1.5 rounded px-2 py-1 text-left hover:bg-accent/5"
                >
                  <span aria-hidden className={`w-3 text-accent transition-transform ${open ? "" : "-rotate-90"}`}>
                    ▾
                  </span>
                  {category}/
                  <span className="ml-auto text-[11px] text-muted">{indexes.length}</span>
                </button>
                {open && (
                  <ul className="flex flex-col gap-px pl-2.5">
                    {indexes.map((i, j) => (
                      <li key={projects[i].name}>
                        <button
                          type="button"
                          aria-current={i === selected ? "true" : undefined}
                          onClick={() => setSelected(i)}
                          className={`flex w-full items-center gap-1.5 rounded py-1 pr-2 pl-1.5 text-left transition-colors ${
                            i === selected ? "bg-accent/10 text-accent" : "text-muted hover:text-foreground"
                          }`}
                        >
                          <span aria-hidden className="shrink-0 text-subtle">
                            {j === indexes.length - 1 ? "└" : "├"}
                          </span>
                          <span className="truncate">{slug(projects[i].name)}/</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <article aria-live="polite" className="scroll-thin flex min-w-0 flex-col gap-3 overflow-y-auto p-5">
          <span className="text-xs text-muted">
            projects/{slug(project.category)}/{slug(project.name)}/README.md
          </span>
          <Screenshot project={project} />
          <div>
            <h3 className="font-semibold tracking-tight">{project.name}</h3>
            <p className="text-sm text-muted">{project.tagline}</p>
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">{project.description}</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li key={tech} className="rounded border border-subtle px-1.5 py-0.5 text-[11px] text-muted">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {project.site && (
              <LinkButton href={project.site} primary={primary === "site"}>
                <Globe className="size-3.5" aria-hidden />
                Live site
              </LinkButton>
            )}
            {project.github && (
              <LinkButton href={project.github} primary={primary === "github"}>
                <GithubIcon className="size-3.5" />
                GitHub
              </LinkButton>
            )}
            {project.devpost && (
              <LinkButton href={project.devpost} primary={primary === "devpost"}>
                <DevpostIcon className="size-3.5" />
                Devpost
              </LinkButton>
            )}
            {project.demo && (
              <LinkButton href={project.demo} primary={primary === "demo"}>
                <ExternalLink className="size-3.5" aria-hidden />
                Demo
              </LinkButton>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
