export const profile = {
  name: "Um-e-Kalsoum Asif",
  title: "Computer Science Student · Software Engineer",
  location: "Toronto, Ontario",
  email: "asif.kalsoum@gmail.com",
  github: "https://github.com/um-e-kalsoum",
  linkedin: "https://www.linkedin.com/in/um-e-kalsoum-asif-393701316/",
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Web Developer & Designer",
    company: "Dairy Modernization",
    period: "Dec 2025 – Jan 2026",
    bullets: [
      "Independently designed and developed a full public-facing website for a government-funded national dairy initiative.",
      "Built and customized a WordPress platform tailored to farmers, researchers, policymakers, and industry partners.",
      "Delivered a scalable digital hub designed to support a multi-year agricultural innovation project, built so non-technical stakeholders can easily update content.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "University of Guelph OVC",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Led the end-to-end redesign and modernization of a molecular biology resource website used by researchers.",
      "Designed and implemented responsive mockups and full-stack prototypes using HTML, CSS, and JavaScript.",
      "Structured large volumes of scientific content to improve discoverability, produced technical documentation, and conducted client training sessions.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Guelph Cyber Security Society",
    period: "Sep 2025 – Present",
    bullets: [
      "Designed visual assets including social media graphics and event promotions.",
      "Collaborated with the executive team on consistent branding aligned with the society's identity, increasing event visibility and member engagement.",
    ],
  },
  {
    role: "Hackathon Organizer",
    company: "Google Developer Groups",
    period: "Sep 2024 – Present",
    bullets: [
      "Drove sponsorship strategy for GDG initiatives by researching potential partners and aligning proposals.",
      "Built and sustained relationships with external organizations to ensure consistent funding and financial sustainability.",
    ],
  },
];

export const education = {
  school: "University of Guelph",
  degree: "Bachelor of Computing, Computer Science",
  detail:
    "Specialization in Cybersecurity with a minor in Mathematics.",
  period: "2024 – 2028",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
};

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


export const leadership = [
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

export const skills: Record<string, string[]> = {
  Languages: ["Bash", "C", "HTML/CSS", "Java", "JavaScript", "Python", "SQL", "TypeScript"],
  "Frameworks & Libraries": ["FastAPI", "JUnit", "MediaPipe", "Next.js", "Node.js", "OpenCV", "Pandas", "React", "scikit-learn", "Tailwind CSS"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  "Tools & Platforms": ["Bitbucket", "Confluence", "Docker", "Git", "Jenkins", "Jira", "Linux", "Tableau", "WordPress"],
};