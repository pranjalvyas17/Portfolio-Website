import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { projects, socials } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/motion";

const github = socials.find((s) => s.label === "GitHub");

const hostOf = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return "";
  }
};

function ProjectPreview({ project }) {
  const { image, imageAlt, title, live } = project;

  return (
    <div className="project-card__media">
      <div className="browser">
        <div className="browser__bar" aria-hidden="true">
          <span className="code-window__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser__url">{live ? hostOf(live) : title}</span>
        </div>
        <div className="browser__viewport">
          {image ? (
            <img src={image} alt={imageAlt || `${title} preview`} loading="lazy" decoding="async" width="1200" height="750" />
          ) : (
            <div className="browser__placeholder" aria-hidden="true">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { title, description, technologies, github: repo, live, featured } = project;

  return (
    <SpotlightCard
      as="article"
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      variants={fadeUp}
      aria-labelledby={`project-${index}`}
    >
      <ProjectPreview project={project} />

      <div className="project-card__body">
        <p className="project-card__kicker">
          <span>{String(index + 1).padStart(2, "0")}</span>
          {featured ? "Featured project" : "Project"}
        </p>
        <h3 className="project-card__title" id={`project-${index}`}>
          {title}
        </h3>
        <p className="project-card__desc">{description}</p>

        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {live && (
            <Button href={live} external size="sm" icon={FiArrowUpRight} aria-label={`${title} live demo (opens in a new tab)`}>
              Live Demo
            </Button>
          )}
          {repo && (
            <Button
              href={repo}
              external
              size="sm"
              variant="ghost"
              icon={FaGithub}
              iconPosition="start"
              aria-label={`${title} source code on GitHub (opens in a new tab)`}
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          id="projects-title"
          title="Selected work."
          description="A few things I've designed and built — from a blockchain-powered internship platform to the site you're looking at."
        />

        <motion.div
          className="projects__grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          {github && (
            <SpotlightCard
              as="a"
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card project-card--cta"
              variants={fadeUp}
            >
              <FaGithub className="project-card__cta-icon" aria-hidden="true" />
              <span className="project-card__kicker">More on GitHub</span>
              <span className="project-card__title">Explore more of my code and experiments.</span>
              <span className="text-link">
                github.com/pranjalvyas17 <FiArrowUpRight aria-hidden="true" />
              </span>
            </SpotlightCard>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
