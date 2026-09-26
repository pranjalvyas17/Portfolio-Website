// Single source of truth for portfolio content.
// Edit text, links, skills and projects here — components only handle presentation.

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiReact, SiJavascript, SiHtml5, SiCss, SiPython, SiGit } from "react-icons/si";
import { TbLink } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import internskillPreview from "../assets/internskill.webp";
import portfolioPreview from "../assets/portfolio.webp";

export const RESUME_URL = `${process.env.PUBLIC_URL}/Pranjal_Resume.pdf`;
export const RESUME_FILENAME = "Pranjal_Vyas_Resume.pdf";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Pranjal Vyas",
  initials: "PV",
  tagline: "B.Tech CSE • Developer • Blockchain Enthusiast",
  statement: "Building modern digital experiences with code.",
  roles: ["Frontend Developer", "React Developer", "Blockchain Enthusiast", "Creative Technologist"],
  email: "pranjalvyas2024@gmail.com",
  location: "India",
  availability: "Open to opportunities",
};

export const socials = [
  { label: "GitHub", handle: "@pranjalvyas17", href: "https://github.com/pranjalvyas17", icon: FaGithub },
  {
    label: "LinkedIn",
    handle: "Pranjal Vyas",
    href: "https://www.linkedin.com/in/pranjal-vyas-17-05-06-",
    icon: FaLinkedinIn,
  },
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
];

export const aboutFacts = [
  { label: "Education", value: "B.Tech CSE" },
  { label: "Focus", value: "Web Development / Blockchain" },
  { label: "Current Role", value: "Student Developer" },
  { label: "Location", value: profile.location },
];

export const focusAreas = [
  "Building web applications",
  "Modern frontend development",
  "Blockchain & decentralized systems",
  "Problem solving",
  "Learning new technologies",
  "Shipping real-world projects",
];

export const skillCategories = ["All", "Frontend", "Programming", "Blockchain", "Tools"];

// `color` tints the icon on hover. `note` marks skills that are still at a foundational level.
export const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    description: "Component-driven interfaces with hooks and reusable patterns — this portfolio is built with it.",
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: SiHtml5,
    color: "#F06529",
    description: "Semantic, accessible markup as the foundation of every interface I build.",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: SiCss,
    color: "#8B7CF6",
    description: "Responsive layouts with Flexbox and Grid, motion and modern, polished UI styling.",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: "ES6+, DOM manipulation and the interaction logic behind modern web apps.",
  },
  {
    name: "Python",
    category: "Programming",
    icon: SiPython,
    color: "#5A9FD4",
    description: "Problem solving, scripting and working with core data structures.",
  },
  {
    name: "Blockchain",
    category: "Blockchain",
    icon: TbLink,
    color: "#818CF8",
    note: "Foundations",
    description: "Blockchain concepts, smart contracts and decentralized systems — my specialization track.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: SiGit,
    color: "#F05032",
    description: "Version control, repositories and publishing projects with GitHub Pages.",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: VscVscode,
    color: "#3BA7F5",
    description: "My daily editor for writing, debugging and shipping code.",
  },
];

// Add new projects here. `live`, `github` and `image` are optional.
export const projects = [
  {
    title: "InternSkill",
    featured: true,
    description:
      "A virtual internship portal with skill tracking and an incentives system built around blockchain — helping interns track skills, earn incentives and build careers.",
    technologies: ["HTML", "CSS", "JavaScript", "Blockchain"],
    github: "https://github.com/pranjalvyas17/INTERNSKILL",
    live: "https://pranjalvyas17.github.io/INTERNSKILL/",
    image: internskillPreview,
    imageAlt: "InternSkill landing page — Virtual Internship Portal",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio built with React.js to showcase my work in web development, Python and blockchain.",
    technologies: ["React", "JavaScript", "CSS", "Framer Motion"],
    github: "https://github.com/pranjalvyas17/Portfolio-Website",
    live: "https://pranjal-portfolio-website.vercel.app/",
    image: portfolioPreview,
    imageAlt: "Pranjal Vyas portfolio website hero section",
  },
];
