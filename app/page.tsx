import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { CopyButton } from "@/components/copy-button";
import { IrisText } from "@/components/iris-text";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { BloomRose } from "@/components/math";
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
      </div>
      <p aria-label="Q.E.D." className="-mt-6 text-right font-serif text-xl text-accent">∎</p>
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
              <span className="font-code text-xs text-muted tabular-nums sm:pt-1">{job.period}</span>
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
      <div className="max-w-2xl space-y-8">
        {education.map((ed) => (
          <article key={`${ed.school}-${ed.degree}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold tracking-tight">
                {ed.school}
              </h3>
              <span className="font-code text-xs text-muted tabular-nums">
                {ed.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              {ed.degree}
            </p>
            {ed.detail && (
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {ed.detail}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="axis pt-8">
      <SectionHeading title="Leadership" />
      <div className="grid gap-4 sm:grid-cols-2">
        {leadership.map((l) => (
          <article key={l.name} className="rounded-lg border border-subtle bg-background/60 p-5">
            <h3 className="font-semibold tracking-tight">{l.name}</h3>
            <p className="mt-0.5 text-sm text-muted">{l.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">{l.description}</p>
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

function Contact() {
  return (
    <section id="contact" className="axis pt-8">
      <SectionHeading title="Contact" />
      <p className="font-serif text-3xl text-balance italic sm:text-4xl">
        ∀ idea, <span className="text-accent">∃</span> a conversation.
      </p>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
        For every idea there&apos;s a conversation worth having. Reach out to connect, discuss
        opportunities, or collaborate on a project. Email is the fastest way to reach me.
      </p>
      <ul className="mt-8 max-w-xl divide-y divide-subtle border-y border-subtle font-code text-sm">
        {contactLinks.map((link) => {
          const isMail = link.href.startsWith("mailto:");
          return (
            <li key={link.label} className="flex items-center gap-4 py-3">
              <span className="w-20 shrink-0 text-accent">{link.label}</span>
              <a
                href={link.href}
                {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex min-w-0 flex-1 items-center justify-between gap-3 transition-colors hover:text-accent"
              >
                <span className="truncate">{link.display}</span>
                <ArrowUpRight
                  aria-hidden
                  className="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
              {isMail && <CopyButton value={link.href.slice("mailto:".length)} label={link.label} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex items-baseline justify-between border-t border-subtle pt-6 pb-4 font-code text-xs text-muted">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span aria-label="Q.E.D." className="font-serif text-lg text-accent">∎</span>
    </footer>
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
        <Footer />
      </div>
    </main>
  );
}
