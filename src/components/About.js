import { motion } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiCode, FiDownload, FiMapPin, FiUser } from "react-icons/fi";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import profilePhoto from "../assets/profile.webp";
import { aboutFacts, focusAreas, profile, RESUME_FILENAME, RESUME_URL } from "../data/portfolio";
import { easeOut, fadeUp, staggerContainer, viewportOnce } from "../utils/motion";

const factIcons = {
  Education: FiBookOpen,
  Focus: FiCode,
  "Current Role": FiUser,
  Location: FiMapPin,
};

const About = () => {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <motion.figure
          className="about__portrait"
          initial={{ opacity: 0, y: 32, clipPath: "inset(8% 8% 8% 8% round 28px)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: easeOut }}
        >
          <div className="about__photo-frame">
            <img
              src={profilePhoto}
              alt="Portrait of Pranjal Vyas"
              className="about__photo"
              width="720"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <span className="about__photo-tag">~/pranjal-vyas</span>
          </div>
          <figcaption className="about__status">
            <span className="status-dot" aria-hidden="true" />
            <span>
              <strong>{profile.availability}</strong>
              <small>Internships · Collaborations</small>
            </span>
          </figcaption>
        </motion.figure>

        <div className="about__content">
          <SectionHeading
            index="01"
            eyebrow="About"
            id="about-title"
            title={
              <>
                Engineering thoughtful, <span className="text-gradient">modern web</span> experiences.
              </>
            }
          />

          <motion.div
            className="about__copy"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp}>
              I'm <strong>Pranjal Vyas</strong>, a B.Tech CSE student specializing in Blockchain and Web Development. I
              enjoy creating high-performance web applications with a focus on modern UI/UX and decentralized systems.
            </motion.p>
            <motion.p variants={fadeUp}>
              With a strong foundation in React and CSS, I strive to build digital experiences that are not only
              functional but also visually engaging — and I'm always learning the next technology that helps me build
              better, real-world products.
            </motion.p>
          </motion.div>

          <motion.ul
            className="about__facts"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {aboutFacts.map(({ label, value }) => {
              const Icon = factIcons[label] || FiCode;
              return (
                <SpotlightCard as="li" key={label} className="fact-card" variants={fadeUp}>
                  <Icon className="fact-card__icon" aria-hidden="true" />
                  <span className="fact-card__label">{label}</span>
                  <span className="fact-card__value">{value}</span>
                </SpotlightCard>
              );
            })}
          </motion.ul>

          <motion.ul
            className="chip-list"
            aria-label="What I focus on"
            variants={staggerContainer(0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {focusAreas.map((area) => (
              <motion.li key={area} className="chip" variants={fadeUp}>
                {area}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="about__actions"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Button to="contact" icon={FiArrowRight}>
              Hire Me
            </Button>
            <Button href={RESUME_URL} download={RESUME_FILENAME} variant="secondary" icon={FiDownload}>
              Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
