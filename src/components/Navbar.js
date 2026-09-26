import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navItems, profile, RESUME_FILENAME, RESUME_URL } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import { easeOut } from "../utils/motion";

const sectionIds = navItems.map((item) => item.id);

function Navbar() {
  const active = useActiveSection(sectionIds);
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape or when growing past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const scrollProps = {
    smooth: reduceMotion ? false : "easeInOutQuart",
    duration: reduceMotion ? 0 : 800,
  };

  return (
    <motion.header
      className={`navbar ${scrolled || menuOpen ? "navbar--scrolled" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      <nav className="navbar__inner container" aria-label="Primary">
        <Link to="home" href="#home" className="navbar__brand" {...scrollProps} onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="navbar__name">{profile.name}</span>
        </Link>

        <ul className="navbar__links">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                href={`#${id}`}
                className={`navbar__link ${active === id ? "is-active" : ""}`}
                aria-current={active === id ? "true" : undefined}
                {...scrollProps}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="navbar__pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="navbar__label">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a href={RESUME_URL} download={RESUME_FILENAME} className="navbar__resume">
            Resume <FiDownload aria-hidden="true" />
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <motion.ul
              className="mobile-menu__list container"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navItems.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3, ease: easeOut }}
                >
                  <Link
                    to={id}
                    href={`#${id}`}
                    className={`mobile-menu__link ${active === id ? "is-active" : ""}`}
                    aria-current={active === id ? "true" : undefined}
                    onClick={() => setMenuOpen(false)}
                    {...scrollProps}
                  >
                    <span className="mobile-menu__index">0{i + 1}</span>
                    {label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}>
                <a href={RESUME_URL} download={RESUME_FILENAME} className="mobile-menu__link">
                  <span className="mobile-menu__index">CV</span>
                  Resume <FiDownload aria-hidden="true" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="navbar__progress" style={{ scaleX: progress }} aria-hidden="true" />
    </motion.header>
  );
}

export default Navbar;
