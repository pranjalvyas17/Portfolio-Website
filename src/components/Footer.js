import { animateScroll } from "react-scroll";
import { useReducedMotion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import SocialLinks from "./ui/SocialLinks";
import { profile } from "../data/portfolio";

function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__tagline">{profile.tagline}</span>
        </div>

        <SocialLinks className="footer__social" />

        <div className="footer__meta">
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <button
            type="button"
            className="footer__top"
            onClick={() => animateScroll.scrollToTop({ duration: reduceMotion ? 0 : 800, smooth: "easeInOutQuart" })}
          >
            Back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
