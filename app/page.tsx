import { ArrowUpRight, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { IrisText } from "@/components/iris-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { BloomRose, MiniRose } from "@/components/math";
import { ProjectExplorer } from "@/components/project-explorer";
import { contactLinks, education, experience, leadership, profile, projects, skills } from "@/lib/data";

const SYMBOLS: Record<string, string> = {
  Experience: "Σ", Projects: "∫", Education: "ε",
  Leadership: "∇", Skills: "λ", Contact: "∴",
};

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span aria-hidden className="mr-2.5 text-sm normal-case text-accent">{SYMBOLS[title]}</span>
      <IrisText text={title} />
    </h2>
  );
}

function Header() {
  return (
    <header>
      <p className="mb-2 font-serif text-lg">
        <span className="font-medium tracking-wide [font-variant:small-caps]">Definition 1.1</span>{" "}
        <span className="italic text-muted">(the author).</span>
      </p>
      <h1 className="font-serif text-5xl leading-[1.02] font-semibold text-balance italic md:text-6xl">
        <IrisText text={profile.name} />
      </h1>
      
      <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-code text-sm text-muted">
        <span>
          <span className="mr-2 text-accent">role</span>
          <IrisText text={profile.title} />
        </span>
        <span>
          <span className="mr-2 text-accent">loc</span>
          <IrisText text={profile.location} />
        </span>
      </p>
      <div className="mt-5 flex items-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-5" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-muted transition-colors hover:text-foreground"
        >
          <Mail className="size-5" />
        </a>
        <span aria-label="Q.E.D." className="ml-auto font-serif text-xl leading-none text-accent">∎</span>
      </div>
    </header>
  );
}

/* "University of Guelph OVC" -> "UG": first letters of capitalized words, max two. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

/* A logo image fills the whole square; without one, a bordered box shows the company's initials. */
function CompanyLogo({ src, company }: { src: string; company: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${company} logo`}
        width={88}
        height={88}
        className="size-11 shrink-0 rounded object-cover"
      />
    );
  }
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded border border-subtle bg-background">
      <span aria-hidden className="text-[13px] font-medium text-muted">
        {initials(company)}
      </span>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="axis pt-8">
      <SectionHeading title="Experience" />
      <ol className="divide-y divide-subtle">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="flex items-start gap-4 py-4 first:pt-0"
          >
            <CompanyLogo src={job.logo} company={job.company} />
            <div className="grid min-w-0 flex-1 gap-x-6 gap-y-0.5 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">{job.role}</h3>
                <p className="text-[13px] text-muted">
                  <span className="text-accent">@</span> {job.company}
                  {job.location && ` · ${job.location}`}
                </p>
              </div>
              <span className="mt-1.5 font-code text-xs text-muted tabular-nums sm:mt-0 sm:pt-1">{job.period}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="axis pt-8">
      <SectionHeading title="Projects" />
      <ProjectExplorer projects={projects} />
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="axis pt-8">
      <SectionHeading title="Education" />
      <ol className="divide-y divide-subtle">
        {education.map((ed) => (
          <li key={`${ed.school}-${ed.degree}`} className="flex items-start gap-4 py-4 first:pt-0">
            <CompanyLogo src={ed.logo} company={ed.school} />
            <div className="grid min-w-0 flex-1 gap-x-6 gap-y-0.5 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">{ed.degree}</h3>
                <p className="text-[13px] text-muted">
                  <span className="text-accent">@</span> {ed.school}
                  {ed.location && ` · ${ed.location}`}
                </p>
                {ed.detail && <p className="text-[13px] text-muted">{ed.detail}</p>}
              </div>
              <span className="mt-1.5 font-code text-xs text-muted tabular-nums sm:mt-0 sm:pt-1">{ed.period}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="axis pt-8">
      <SectionHeading title="Leadership" />
      <div className="grid gap-4 sm:grid-cols-2">
        {leadership.map((l) => (
          <article key={`${l.org}-${l.role}`} className="flex flex-col rounded-lg border border-subtle bg-background/60">
            <div className="flex items-center gap-3 px-5 pt-5">
              <CompanyLogo src={l.logo} company={l.org} />
              <div className="min-w-0">
                <h3 className="font-semibold tracking-tight">{l.org}</h3>
                <p className="text-[13px] text-muted">{l.role}</p>
              </div>
            </div>
            <p className="flex-1 px-5 py-4 text-sm leading-relaxed text-foreground/75">{l.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-subtle px-5 py-3">
              {l.website ? (
                <a
                  href={l.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-subtle bg-background px-2.5 py-1 text-xs transition-colors hover:border-accent hover:text-accent"
                >
                  <Globe className="size-3.5" aria-hidden />
                  Club website
                </a>
              ) : (
                <span />
              )}
              <span className="text-xs text-muted tabular-nums">{l.period}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="axis pt-8">
      <SectionHeading title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-2 text-sm font-medium">{group}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <li key={s} className="rounded border border-subtle px-1.5 py-0.5 font-mono text-[11px] text-muted">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Picks an icon for a contact link from its label; anything unknown gets a globe. */
function ContactIcon({ label, className }: { label: string; className?: string }) {
  if (label === "email") return <Mail className={className} aria-hidden />;
  if (label === "github") return <GithubIcon className={className} />;
  if (label === "linkedin") return <LinkedinIcon className={className} />;
  return <Globe className={className} aria-hidden />;
}

function Contact() {
  return (
    <section id="contact" className="axis pt-8">
      <SectionHeading title="Contact" />
      <p className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
        ∀ idea, <span className="text-accent">∃</span> a conversation.
      </p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        For every idea, a conversation follows
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {contactLinks.map((link) => {
          const isMail = link.href.startsWith("mailto:");
          return (
            <li key={link.label}>
              <a
                href={link.href}
                {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex h-full items-center gap-3.5 rounded-lg border border-subtle bg-background/60 px-4 py-3 transition-colors hover:border-accent"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <ContactIcon label={link.label} className="size-4" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[11px] tracking-widest text-muted uppercase">{link.label}</span>
                  <span className="truncate text-sm transition-colors group-hover:text-accent">{link.display}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pt-24 pb-20">
      <div className="flex flex-col gap-24">
        <div id="top" className="grid items-center gap-6 md:min-h-[60vh] md:grid-cols-2">
          <Header />
          <BloomRose className="w-full" />
        </div>
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Skills />
        <Contact />
        <footer className="flex justify-end border-t border-subtle pt-6 text-xs text-muted">
          <p className="flex flex-wrap items-center justify-end gap-2.5">
            Computer Science
            <MiniRose k={3} className="size-[13px]" />
            Cybersecurity
            <MiniRose k={4} className="size-[13px]" />
            Mathematics
          </p>
        </footer>
      </div>
    </main>
  );
}
