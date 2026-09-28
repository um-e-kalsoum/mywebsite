import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { IrisText } from "@/components/iris-text";
import { BloomRose, MathLab, Results } from "@/components/math";
import { education, experience, leadership, profile, projects, skills } from "@/lib/data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SYMBOLS: Record<string, string> = {
  Experience: "Σ", Education: "ε", Projects: "∫",
  Leadership: "∇", Skills: "λ", "Math Lab": "∮",
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
      <p className="mb-3 font-mono text-sm text-accent">
        <IrisText text="f(x) = computer science + cybersecurity + math" />
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">
        <IrisText text={profile.name} />
      </h1>
      <p className="mt-2 text-muted">
        <IrisText text={profile.title} />
      </p>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
        <MapPin className="size-3.5" aria-hidden />
        <IrisText text={profile.location} />
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
    </header>
  );
}

function Experience() {
  return (
    <section id="experience" className="axis pt-8">
      <SectionHeading title="Experience" />
      <div className="max-w-2xl space-y-10">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">
                <IrisText text={job.role} />
              </h3>
              <span className="font-mono text-xs text-muted">
                <IrisText text={job.period} />
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              <IrisText text={job.company} />
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground/75">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden className="select-none text-subtle">
                    ·
                  </span>
                  <IrisText text={bullet} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="axis pt-8">
      <SectionHeading title="Education" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-medium">
          <IrisText text={education.school} />
        </h3>
        <span className="font-mono text-xs text-muted">
          <IrisText text={education.period} />
        </span>
      </div>
      <p className="mt-0.5 text-sm text-muted">
        <IrisText text={education.degree} />
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/75">
        <IrisText text={education.detail} />
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="axis pt-8">
      <SectionHeading title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-subtle bg-background/60 p-5 transition-colors hover:border-foreground/40"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium">
                <IrisText text={project.name} />
              </h3>
              <ArrowUpRight
                aria-hidden
                className="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </div>
            <p className="mt-0.5 text-sm text-muted">
              <IrisText text={project.tagline} />
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              <IrisText text={project.description} />
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-subtle px-1.5 py-0.5 font-mono text-[11px] text-muted"
                >
                  <IrisText text={tech} />
                </li>
              ))}
            </ul>
          </a>
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
            <h3 className="font-medium"><IrisText text={l.name} /></h3>
            <p className="mt-0.5 text-sm text-muted"><IrisText text={l.org} /></p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75"><IrisText text={l.description} /></p>
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

function MathSection() {
  return (
    <section id="math-lab" className="axis pt-8">
      <SectionHeading title="Math Lab" />
      <p className="mb-8 max-w-lg text-sm text-muted">Calculus 2 and 3 ideas, drawn live. Drag the sliders.</p>
      <MathLab />
      <Results />
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-subtle pt-8 pb-4 text-sm text-muted">
      <p className="flex flex-wrap gap-x-1.5">
        <IrisText text="Reach out if you'd like to connect, discuss opportunities, or collaborate on projects at" />
        <a
          href={`mailto:${profile.email}`}
          className="text-foreground underline decoration-subtle underline-offset-4 transition-colors hover:decoration-foreground"
        >
          <IrisText text={profile.email} />
        </a>
      </p>
      <p aria-label="Q.E.D." className="mt-6 text-right text-lg text-accent">∎</p>
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
        <Education />
        <Projects />
        <Leadership />
        <Skills />
        <MathSection />
        <Footer />
      </div>
    </main>
  );
}
