/*
 * All site content lives here. To add an entry, copy the TEMPLATE block above a
 * list, paste it into the list, and fill it in. To remove one, delete its block.
 * Order in each list is the order on the page.
 */

export const profile = {
  name: "Um-e-Kalsoum Asif",
  title: "Computer Science Student",
  location: "Toronto, Ontario",
  email: "kalsoumasif1@gmail.com",
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
     16:9 images fit best (e.g. 1600x900). Leave "" for a placeholder. */
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
    tagline: "Breaking down barriers, one sign at a time.",
    description:
      "Real-time sign language interpreter using computer vision and machine learning to translate hand gestures into text for accessible communication.",
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
    tagline: "Know what’s in your beauty products.",
    description:
      "Full-stack beauty app that scans product barcodes, analyzes ingredient data, flags potentially harmful ingredients, and gives users a quick, clear safety breakdown.",
    tech: ["Gemini AI", "SQL", "phpMyAdmin", "XAMPP", "React", "Javascript", "HTML/CSS"],
    image: "/logos/beauty-hack-project.png",
    site: "",
    github: "https://github.com/um-e-kalsoum/beautyhackxsfinal",
    devpost: "https://devpost.com/software/beautyhackxs",
    demo: "",
  },
  {
    name: "Online Analysis Tools Rebuild",
    category: "client-work",
    tagline: "25 years of molecular biology, rebuilt for today.",
    description:
      "Rebuilt a 25-year-old molecular biology site with Dr. Andrew Kropinski, preserving scientific accuracy while improving usability, accessibility, documentation, and maintainability.",
    tech: ["Javascript" , "HTML5/CSS"],
    image: "/logos/oat-project.png",
    site: "https://molbiol-tools.ca/", // TODO: add the live site URL
    github: "https://github.com/um-e-kalsoum/OATredesign",
    devpost: "",
    demo: "",
  },
  {
    name: "Dairy Modernization",
    category: "client-work",
    tagline: "Building digital tools around real industry needs.",
    description:
      "Collaborated with 5+ non-technical stakeholders to turn their needs into website features and workflows, then trained them to manage the platform independently.",
    tech: ["Wordpress"],
    image: "/logos/dairy-mod-project.png",
    site: "https://www.dairymodernization.ca/", // TODO: add the live site URL
    github: "",
    devpost: "",
    demo: "",
  },
  {
    name: "Treasure Runner",
    category: "personal",
    tagline: "A terminal-first take on puzzle games.",
    description:
      "Built a terminal puzzle game with a C engine and Python interface, including room traversal, portals, object interactions, and persistent player progress.",
    tech: ["C", "Python", "curses", "JSON", "Docker", "Make"],
    image: "/logos/terminal-project.png",
    site: "",
    github: "https://github.com/um-e-kalsoum/Treasure-Runner",
    devpost: "",
    demo: "https://www.youtube.com/watch?v=g0Vms24-Zxg",
  },
];

/* ----------------------------------------------------------------- Education */

export type EducationEntry = {
  degree: string;
  school: string;
  location: string; // leave "" to hide
  period: string;
  detail: string; // extra line under the school, e.g. specialization and minor. "" to hide
  /* School logo. Put the image in public/logos/ and write its path, e.g. "/logos/uoguelph.png".
     Square images look best. Leave "" to show the school's initials. */
  logo: string;
};

/* TEMPLATE
  {
    degree: "",
    school: "",
    location: "",
    period: "",
    detail: "",
    logo: "",
  },
*/
export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computing Co-op, Computer Science",
    school: "University of Guelph",
    location: "Guelph, ON",
    period: "Expected 2029",
    detail: "Cybersecurity specialization & Mathematics minor",
    logo: "/logos/uofg.png",
  },
];

/* ---------------------------------------------------------------- Leadership */

export type LeadershipEntry = {
  org: string; // club or organization, shown as the card title
  role: string; // your role(s), e.g. "gryphCTF Organizer · Graphic Designer"
  description: string;
  period: string;
  /* Club logo or photo. Put the image in public/logos/ and write its path, e.g. "/logos/gcss.png".
     Square images look best. Leave "" to show the club's initials. */
  logo: string;
  website: string; // club website; leave "" to hide the button
};

/* TEMPLATE
  {
    org: "",
    role: "",
    description: "",
    period: "",
    logo: "",
    website: "https://",
  },
*/
export const leadership: LeadershipEntry[] = [
  {
    org: "Guelph Cyber Security Society",
    role: "Marketing & Events",
    description:
      "Helped grow a 100+ member cybersecurity community through marketing, outreach, and events that regularly brought in 80+ students",
    period: "September 2025 – Present",
    logo: "/logos/gcss-logo.png",
    website: "https://guelphcss.com/", // TODO: add the club website
  },
  {
    org: "Google Developer Groups",
    role: "Hackathon Organizer",
    description:
      "Helped bring in 5+ sponsors for GDGHacks 2026 by reaching out to companies, pitching the event, and managing sponsor relationships",
    period: "September 2025 – April 2026",
    logo: "/logos/gdg-logo.png",
    website: "https://www.gdgguelph.com/", // TODO: add the club website
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
  "Tools & Platforms": ["Bitbucket", "Confluence", "Docker", "Git", "Jenkins", "Jira", "Linux", "Make", "Tableau", "WordPress"],
};

/* ------------------------------------------------------------------- Contact */

export type ContactLink = {
  label: string; // small heading on the card; "email", "github" and "linkedin" get their own icons, anything else gets a globe
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
