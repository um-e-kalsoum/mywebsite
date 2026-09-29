/*
 * All site content lives here. To add an entry, copy the TEMPLATE block above a
 * list, paste it into the list, and fill it in. To remove one, delete its block.
 * Order in each list is the order on the page.
 */

export const profile = {
  name: "Um-e-Kalsoum Asif",
  title: "Computer Science Student",
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
  /* Company logo. Put the image in public/logos/ and write its path, e.g. "/logos/kenna.png".
     Square images look best (PNG or SVG, at least 96x96). Leave "" to show the company's initials. */
  logo: string;
};

/* TEMPLATE
  {
    role: "",
    company: "",
    location: "",
    period: "",
    logo: "",
  },
*/
export const experience: ExperienceEntry[] = [
  {
    role: "Application Developer",
    company: "Kenna",
    location: "Mississauga, ON",
    period: "May 2026 – Present",
    logo: "/logos/kenna-logo.png",
  },
  {
    role: "Software Developer Intern",
    company: "Dairy Modernization",
    location: "Guelph, ON",
    period: "January 2026 – February 2026",
    logo: "/logos/dairy-mod-logo.jpg",
  },
  {
    role: "Software Engineer Intern",
    company: "University of Guelph OVC",
    location: "Guelph, ON",
    period: "September 2025 – December 2025",
    logo: "/logos/ovc-logo.png",
  },
];

/* ------------------------------------------------------------------ Projects */

export type Project = {
  name: string;
  /* Folder the project sits in, e.g. "hackathons". Projects with the same category are grouped
     together; folders appear in the order their first project appears in this list. */
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  /* Screenshot. Put the image in public/projects/ and write its path, e.g. "/projects/signify.png".
     16:10 images fit best. Leave "" for a placeholder. */
  image: string;
  // Links. Leave any of these "" and its button is hidden. The first one filled in is highlighted.
  site: string; // the live website you built (mainly for client work)
  github: string;
  devpost: string;
  demo: string;
};

/* TEMPLATES: copy the one for the folder you want into the list below.
   To start a new folder, use any template and change `category` to the new folder's name.

  --- hackathons/ ---
  {
    name: "",
    category: "hackathons",
    tagline: "",
    description: "",
    tech: ["", ""],
    image: "",
    site: "",
    github: "https://github.com/um-e-kalsoum/",
    devpost: "https://devpost.com/software/",
    demo: "",
  },

  --- client-work/ ---
  {
    name: "",
    category: "client-work",
    tagline: "",
    description: "",
    tech: ["", ""],
    image: "",
    site: "https://",
    github: "",
    devpost: "",
    demo: "",
  },

  --- personal/ ---
  {
    name: "",
    category: "personal",
    tagline: "",
    description: "",
    tech: ["", ""],
    image: "",
    site: "",
    github: "https://github.com/um-e-kalsoum/",
    devpost: "",
    demo: "",
  },
*/
export const projects: Project[] = [
  {
    name: "Signify",
    category: "hackathons",
    tagline: "Real-time ASL interpreter",
    description:
      "Hand gesture recognition system that translates sign language to text in real time, with accessibility features like light/dark modes and adjustable text sizes.",
    tech: ["Python", "MediaPipe", "OpenCV", "scikit-learn", "React", "Vite", "Tailwind CSS"],
    image: "/logos/signify-project.png",
    site: "",
    github: "https://github.com/um-e-kalsoum/technova2025",
    devpost: "https://devpost.com/software/signify-nve5tj",
    demo: "",
  },
  {
    name: "BeautyHackxs",
    category: "hackathons",
    tagline: "Upload, analyze, and choose smarter ingredients",
    description:
      "Full-stack app enabling barcode scanning of beauty products with AI-powered ingredient analysis and secure user authentication.",
    tech: ["React", "HTML/CSS", "SQL", "phpMyAdmin", "XAMPP", "Gemini AI"],
    image: "/logos/bhack-project.png",
    site: "",
    github: "https://github.com/um-e-kalsoum/beautyhackxsfinal",
    devpost: "https://devpost.com/software/beautyhackxs",
    demo: "",
  },
  {
    name: "Online Analysis Tools Rebuild",
    category: "client-work",
    tagline: "Molecular biology resources, modernized",
    description:
      "Redesign of Dr. Kropinski's molecular biology educational site, with a rebuilt front end for improved usability, accessibility, and technical documentation.",
    tech: ["HTML5", "CSS"],
    image: "/logos/oat-project.png",
    site: "https://molbiol-tools.ca/", // TODO: add the live site URL
    github: "https://github.com/um-e-kalsoum/OATredesign",
    devpost: "",
    demo: "",
  },
  {
    name: "Dairy Modernization",
    category: "client-work",
    tagline: "Molecular biology resources, modernized",
    description:
      "Redesign of Dr. Kropinski's molecular biology educational site, with a rebuilt front end for improved usability, accessibility, and technical documentation.",
    tech: ["HTML5", "CSS"],
    image: "/logos/dairy-mod-project.png",
    site: "https://www.dairymodernization.ca/", // TODO: add the live site URL
    github: "",
    devpost: "",
    demo: "",
  },
  {
    name: "Treasure Runner",
    category: "personal",
    tagline: "Terminal-based puzzle adventure",
    description:
      "Puzzle adventure game built with a C engine and a Python curses interface, featuring interactive elements and persistent player statistics.",
    tech: ["C", "Python", "curses"],
    image: "",
    site: "",
    github: "https://github.com/um-e-kalsoum/Treasure-Runner",
    devpost: "",
    demo: "",
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
