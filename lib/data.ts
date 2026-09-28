/*
 * All site content lives here. To add an entry, copy the TEMPLATE block above a
 * list, paste it into the list, and fill it in. To remove one, delete its block.
 * Order in each list is the order on the page.
 */

export const profile = {
  name: "Um-e-Kalsoum Asif",
  title: "Computer Science Student · Software Engineer",
  location: "Toronto, Ontario",
  email: "uasif@uoguelph.ca",
  github: "https://github.com/um-e-kalsoum",
  linkedin: "https://www.linkedin.com/in/um-e-kalsoum-asif-393701316/",
};

/* ---------------------------------------------------------------- Experience */

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string; // leave "" to hide
  period: string;
};

/* TEMPLATE
  {
    role: "",
    company: "",
    location: "",
    period: "",
  },
*/
export const experience: ExperienceEntry[] = [
  {
    role: "Web Developer & Designer",
    company: "Dairy Modernization",
    location: "", // TODO: add location
    period: "Dec 2025 – Jan 2026",
  },
  {
    role: "Software Developer Intern",
    company: "University of Guelph OVC",
    location: "Guelph, Ontario",
    period: "Sep 2025 – Dec 2025",
  },
  {
    role: "Graphic Designer",
    company: "Guelph Cyber Security Society",
    location: "Guelph, Ontario",
    period: "Sep 2025 – Present",
  },
  {
    role: "Hackathon Organizer",
    company: "Google Developer Groups",
    location: "Guelph, Ontario",
    period: "Sep 2024 – Present",
  },
];

/* ------------------------------------------------------------------ Projects */

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
};

/* TEMPLATE
  {
    name: "",
    tagline: "",
    description: "",
    tech: ["", ""],
    link: "https://github.com/um-e-kalsoum/",
  },
*/
export const projects: Project[] = [
  {
    name: "Signify",
    tagline: "Real-time ASL interpreter",
    description:
      "Hand gesture recognition system that translates sign language to text in real time, with accessibility features like light/dark modes and adjustable text sizes.",
    tech: ["Python", "MediaPipe", "OpenCV", "scikit-learn", "React", "Vite", "Tailwind CSS"],
    link: "https://github.com/um-e-kalsoum/technova2025",
  },
  {
    name: "BeautyHackxs",
    tagline: "Upload, analyze, and choose smarter ingredients",
    description:
      "Full-stack app enabling barcode scanning of beauty products with AI-powered ingredient analysis and secure user authentication.",
    tech: ["React", "HTML/CSS", "SQL", "phpMyAdmin", "XAMPP", "Gemini AI"],
    link: "https://github.com/um-e-kalsoum/beautyhackxsfinal",
  },
  {
    name: "Online Analysis Tools Redesign",
    tagline: "Molecular biology resources, modernized",
    description:
      "Redesign of Dr. Kropinski's molecular biology educational site, with a rebuilt front end for improved usability, accessibility, and technical documentation.",
    tech: ["HTML5", "CSS"],
    link: "https://github.com/um-e-kalsoum/OATredesign",
  },
  {
    name: "Treasure Runner",
    tagline: "Terminal-based puzzle adventure",
    description:
      "Puzzle adventure game built with a C engine and a Python curses interface, featuring interactive elements and persistent player statistics.",
    tech: ["C", "Python", "curses"],
    link: "https://github.com/um-e-kalsoum/Treasure-Runner",
  },
];

/* ----------------------------------------------------------------- Education */

export type EducationEntry = {
  school: string;
  degree: string;
  detail: string; // leave "" to hide
  period: string;
};

/* TEMPLATE
  {
    school: "",
    degree: "",
    detail: "",
    period: "",
  },
*/
export const education: EducationEntry[] = [
  {
    school: "University of Guelph",
    degree: "Bachelor of Computing, Computer Science",
    detail: "Specialization in Cybersecurity with a minor in Mathematics.",
    period: "2024 – 2028",
  },
];

/* ---------------------------------------------------------------- Leadership */

export type LeadershipEntry = {
  name: string;
  org: string;
  description: string;
};

/* TEMPLATE
  {
    name: "",
    org: "",
    description: "",
  },
*/
export const leadership: LeadershipEntry[] = [
  {
    name: "gryphCTF",
    org: "Guelph Cyber Security Society",
    description:
      "Organized the University of Guelph's first capture-the-flag competition with a $1,000+ prize pool, then wrote the official walkthrough covering each challenge's vulnerability and exploitation technique.",
  },
  {
    name: "Hackathon Organizer",
    org: "Google Developer Groups",
    description:
      "Led sponsorship research and partner relationships to keep student hackathons funded. Co-built BeautyHackxs, a GDGHacks '25 winner.",
  },
];

/* -------------------------------------------------------------------- Skills */

/* TEMPLATE: add a group as a new line, or add items to an existing group
  "Group name": ["", ""],
*/
export const skills: Record<string, string[]> = {
  Languages: ["Bash", "C", "HTML/CSS", "Java", "JavaScript", "Python", "SQL", "TypeScript"],
  "Frameworks & Libraries": ["FastAPI", "JUnit", "MediaPipe", "Next.js", "Node.js", "OpenCV", "Pandas", "React", "scikit-learn", "Tailwind CSS"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  "Tools & Platforms": ["Bitbucket", "Confluence", "Docker", "Git", "Jenkins", "Jira", "Linux", "Tableau", "WordPress"],
};

/* ------------------------------------------------------------------- Contact */

export type ContactLink = {
  label: string; // short key shown on the left, e.g. "email"
  display: string; // text shown to visitors
  href: string;
};

/* TEMPLATE
  {
    label: "",
    display: "",
    href: "https://",
  },
*/
export const contactLinks: ContactLink[] = [
  { label: "email", display: profile.email, href: `mailto:${profile.email}` },
  { label: "github", display: "github.com/um-e-kalsoum", href: profile.github },
  { label: "linkedin", display: "linkedin.com/in/um-e-kalsoum-asif", href: profile.linkedin },
];
