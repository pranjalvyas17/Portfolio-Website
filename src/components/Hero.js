import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";
import Button from "./ui/Button";
import { profile, RESUME_FILENAME, RESUME_URL } from "../data/portfolio";
import { blurUp, easeOut, fadeUp, staggerContainer } from "../utils/motion";

const ROLE_INTERVAL = 2800;

function RotatingRole({ roles }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), ROLE_INTERVAL);
    return () => clearInterval(id);
  }, [roles.length, reduceMotion]);

  return (
    <span className="role-rotator" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          className="role-rotator__word"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="role-rotator__caret" />
    </span>
  );
}

function CodeWindow() {
  return (
    <div className="code-window">
      <div className="code-window__bar">
        <span className="code-window__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="code-window__file">developer.js</span>
      </div>
      <pre className="code-window__body">
        <code>
          <span className="tok-c">{"// hello, world"}</span>
          {"\n"}
          <span className="tok-k">const</span> <span className="tok-v">developer</span> = {"{"}
          {"\n  "}
          <span className="tok-p">name</span>: <span className="tok-s">"Pranjal Vyas"</span>,
          {"\n  "}
          <span className="tok-p">education</span>: <span className="tok-s">"B.Tech CSE"</span>,
          {"\n  "}
          <span className="tok-p">focus</span>: [<span className="tok-s">"Web Dev"</span>, <span className="tok-s">"Blockchain"</span>],
          {"\n  "}
          <span className="tok-p">stack</span>: [<span className="tok-s">"React"</span>, <span className="tok-s">"JavaScript"</span>, <span className="tok-s">"Python"</span>],
          {"\n  "}
          <span className="tok-p">location</span>: <span className="tok-s">"India"</span>,
          {"\n  "}
          <span className="tok-p">openToWork</span>: <span className="tok-k">true</span>,
          {"\n"}
          {"};"}
          {"\n\n"}
          <span className="tok-v">developer</span>.<span className="tok-f">build</span>(<span className="tok-s">"something meaningful"</span>);
          <span className="code-window__cursor" aria-hidden="true" />
        </code>
      </pre>
    </div>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const frame = useRef(0);
  const reduceMotion = useReducedMotion();

  // Pointer-following light: CSS variables only, throttled to one write per frame.
  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--hx", `${clientX - rect.left}px`);
      el.style.setProperty("--hy", `${clientY - rect.top}px`);
    });
  };

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <section className="hero" id="home" ref={heroRef} onPointerMove={handlePointerMove} aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__spot" />
      </div>

      <div className="hero__inner container">
        <motion.div
          className="hero__content"
          variants={staggerContainer(0.12, 0.25)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={fadeUp}>
            <span className="status-dot" aria-hidden="true" />
            {profile.tagline}
          </motion.p>

          <h1 className="hero__title" id="hero-title">
            <motion.span className="hero__hello" variants={blurUp}>
              Hello, I'm
            </motion.span>
            <motion.span
              className="hero__name"
              variants={{
                hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)", y: 20 },
                visible: {
                  opacity: 1,
                  clipPath: "inset(0 0 0% 0)",
                  y: 0,
                  transition: { duration: 0.9, ease: easeOut },
                },
              }}
            >
              {profile.name}
            </motion.span>
          </h1>

          <motion.p className="hero__role" variants={fadeUp}>
            <span className="hero__prompt" aria-hidden="true">
              &gt;
            </span>
            <span className="sr-only">{profile.roles.join(", ")}</span>
            <RotatingRole roles={profile.roles} />
          </motion.p>

          <motion.p className="hero__lead" variants={fadeUp}>
            {profile.statement} I craft responsive, high-performance web applications with React and explore how
            decentralized systems can shape the next generation of the web.
          </motion.p>

          <motion.div className="hero__ctas" variants={staggerContainer(0.08)}>
            <motion.div variants={fadeUp}>
              <Button to="projects" icon={FiArrowRight}>
                View My Work
              </Button>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button href={RESUME_URL} download={RESUME_FILENAME} variant="secondary" icon={FiDownload}>
                Download Resume
              </Button>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                to="contact"
                href="#contact"
                smooth={reduceMotion ? false : "easeInOutQuart"}
                duration={reduceMotion ? 0 : 800}
                className="text-link"
              >
                Let's Connect <FiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: easeOut }}
          aria-hidden="true"
        >
          <CodeWindow />
          <span className="floating-badge floating-badge--a">
            <span className="floating-badge__dot" /> React
          </span>
          <span className="floating-badge floating-badge--b">
            <span className="floating-badge__dot floating-badge__dot--violet" /> Blockchain
          </span>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
