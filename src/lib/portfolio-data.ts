/**
 * ─────────────────────────────────────────────────────────────
 * PORTFOLIO CONTENT — EDIT EVERYTHING HERE
 * Replace every [YOUR ...] placeholder with your real details.
 * No other file needs to change to personalise this portfolio.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "[YOUR NAME]",
  tagline: "[YOUR TAGLINE]",
  role: "[YOUR ROLE]",
  location: "[YOUR LOCATION]",
  availability: "Open to opportunities",
  about: [
    "[YOUR ABOUT LINE 1 — who you are and what you build.]",
    "[YOUR ABOUT LINE 2 — your core technical interests and the stack you enjoy.]",
    "[YOUR ABOUT LINE 3 — your strengths: problem solving, clean architecture, collaboration.]",
    "[YOUR ABOUT LINE 4 — your career goal and the kind of team you want to join.]",
    "[YOUR ABOUT LINE 5 — a personal note: what drives you outside of code.]",
  ],
  resumeUrl: "[YOUR RESUME LINK]",
};

export const contact = {
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  github: "[YOUR GITHUB]",
  linkedin: "[YOUR LINKEDIN]",
  extra: [
    { label: "Portfolio", value: "[YOUR WEBSITE]" },
    { label: "LeetCode", value: "[YOUR LEETCODE]" },
  ],
};

export const stats = [
  { value: "[X]+", label: "Projects shipped" },
  { value: "[X]+", label: "Years learning" },
  { value: "[X]", label: "Internships" },
  { value: "[X]+", label: "Technologies" },
];

/** Grouped skills. `level` (0–100) drives the progress indicator. */
export const skillGroups = [
  {
    title: "Core Strengths",
    highlight: true,
    skills: [
      { name: "[YOUR TOP SKILL]", level: 92 },
      { name: "[YOUR SKILL]", level: 88 },
      { name: "[YOUR SKILL]", level: 84 },
    ],
  },
  {
    title: "Frontend",
    highlight: false,
    skills: [
      { name: "[YOUR SKILL]", level: 80 },
      { name: "[YOUR SKILL]", level: 76 },
      { name: "[YOUR SKILL]", level: 70 },
    ],
  },
  {
    title: "Backend & Data",
    highlight: false,
    skills: [
      { name: "[YOUR SKILL]", level: 74 },
      { name: "[YOUR SKILL]", level: 68 },
      { name: "[YOUR SKILL]", level: 62 },
    ],
  },
  {
    title: "Tools & Practices",
    highlight: false,
    skills: [
      { name: "[YOUR SKILL]", level: 78 },
      { name: "[YOUR SKILL]", level: 72 },
      { name: "[YOUR SKILL]", level: 66 },
    ],
  },
];

/** Badge strip shown next to the skill cards. */
export const skillBadges = [
  "[YOUR SKILL]",
  "[YOUR SKILL]",
  "[YOUR SKILL]",
  "[YOUR SKILL]",
  "[YOUR SKILL]",
  "[YOUR SKILL]",
  "[YOUR SKILL]",
  "[YOUR SKILL]",
];

export const education = [
  {
    degree: "[YOUR DEGREE]",
    institution: "[YOUR COLLEGE]",
    duration: "[YEAR – YEAR]",
    detail: "[RELEVANT INFORMATION — specialisation, CGPA/percentage, key coursework.]",
    marks: "[CGPA / %]",
  },
  {
    degree: "[YOUR HIGHER SECONDARY]",
    institution: "[YOUR SCHOOL]",
    duration: "[YEAR – YEAR]",
    detail: "[RELEVANT INFORMATION — stream, achievements.]",
    marks: "[CGPA / %]",
  },
  {
    degree: "[YOUR SECONDARY]",
    institution: "[YOUR SCHOOL]",
    duration: "[YEAR – YEAR]",
    detail: "[RELEVANT INFORMATION]",
    marks: "[CGPA / %]",
  },
];

export const experience = [
  {
    role: "[YOUR ROLE — e.g. Frontend Developer Intern]",
    company: "[YOUR COMPANY]",
    duration: "[MONTH YEAR – MONTH YEAR]",
    type: "Internship",
    responsibilities: [
      "[RESPONSIBILITY — what you owned day to day.]",
      "[RESPONSIBILITY — the stack and systems you worked in.]",
    ],
    achievements: [
      "[ACHIEVEMENT — a measurable result, e.g. reduced load time by X%.]",
      "[ACHIEVEMENT — recognition, ownership or scale.]",
    ],
    stack: ["[TECH]", "[TECH]", "[TECH]"],
  },
  {
    role: "[YOUR ROLE — e.g. Technical Team Member]",
    company: "[YOUR ORGANISATION]",
    duration: "[MONTH YEAR – MONTH YEAR]",
    type: "Technical Role",
    responsibilities: [
      "[RESPONSIBILITY]",
      "[RESPONSIBILITY]",
    ],
    achievements: ["[ACHIEVEMENT]"],
    stack: ["[TECH]", "[TECH]"],
  },
];

export const projects = [
  {
    title: "[YOUR PROJECT 1]",
    description: "[SHORT DESCRIPTION — the problem it solves in one or two lines.]",
    tech: ["[TECH]", "[TECH]", "[TECH]"],
    features: ["[KEY FEATURE]", "[KEY FEATURE]", "[KEY FEATURE]"],
    link: "[YOUR PROJECT LINK]",
    repo: "[YOUR GITHUB REPO LINK]",
    category: "Personal",
    featured: true,
  },
  {
    title: "[YOUR PROJECT 2]",
    description: "[SHORT DESCRIPTION]",
    tech: ["[TECH]", "[TECH]"],
    features: ["[KEY FEATURE]", "[KEY FEATURE]"],
    link: "[YOUR PROJECT LINK]",
    repo: "[YOUR GITHUB REPO LINK]",
    category: "Academic",
    featured: false,
  },
  {
    title: "[YOUR PROJECT 3]",
    description: "[SHORT DESCRIPTION]",
    tech: ["[TECH]", "[TECH]"],
    features: ["[KEY FEATURE]", "[KEY FEATURE]"],
    link: "[YOUR PROJECT LINK]",
    repo: "[YOUR GITHUB REPO LINK]",
    category: "Technical",
    featured: false,
  },
  {
    title: "[YOUR PROJECT 4]",
    description: "[SHORT DESCRIPTION]",
    tech: ["[TECH]", "[TECH]"],
    features: ["[KEY FEATURE]", "[KEY FEATURE]"],
    link: "[YOUR PROJECT LINK]",
    repo: "[YOUR GITHUB REPO LINK]",
    category: "Personal",
    featured: false,
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
