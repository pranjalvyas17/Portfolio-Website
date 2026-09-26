import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { skillCategories, skills } from "../data/portfolio";
import { easeOut, fadeUp, staggerContainer, viewportOnce } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeOut } },
};

function SkillCard({ skill }) {
  const { name, category, icon: Icon, color, description, note } = skill;

  return (
    <SpotlightCard
      as="li"
      layout
      className="skill-card"
      style={{ "--brand": color }}
      variants={cardVariants}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
    >
      <div className="skill-card__top">
        <span className="skill-card__icon">
          <Icon aria-hidden="true" />
        </span>
        <span className="skill-card__category">{category}</span>
      </div>
      <h3 className="skill-card__name">
        {name}
        {note && <span className="skill-card__note">{note}</span>}
      </h3>
      <p className="skill-card__desc">{description}</p>
    </SpotlightCard>
  );
}

function Skills() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          id="skills-title"
          title="A focused, growing toolkit."
          description="The languages, frameworks and tools I use to turn ideas into working products — from interface to version control."
        />

        <motion.div
          className="filter-bar"
          role="group"
          aria-label="Filter skills by category"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <LayoutGroup id="skill-filter">
            {skillCategories.map((category) => {
              const isActive = filter === category;
              const count =
                category === "All" ? skills.length : skills.filter((s) => s.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  className={`filter-bar__btn ${isActive ? "is-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => setFilter(category)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="filter-bar__pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="filter-bar__label">
                    {category}
                    <span className="filter-bar__count">{count}</span>
                  </span>
                </button>
              );
            })}
          </LayoutGroup>
        </motion.div>

        <motion.ul
          className="skills__grid"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

export default Skills;
