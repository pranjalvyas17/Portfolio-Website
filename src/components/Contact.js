import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiSend } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading";
import { profile, socials } from "../data/portfolio";
import { easeOut, fadeUp, staggerContainer, viewportOnce } from "../utils/motion";

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for non-secure contexts (e.g. testing on a LAN IP).
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await copyText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="email-card">
      <span className="email-card__label">Email</span>
      <a href={`mailto:${profile.email}`} className="email-card__address">
        {profile.email}
      </a>
      <div className="email-card__actions">
        <button type="button" className="copy-btn" onClick={handleCopy} aria-label="Copy email address">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "copied" : "copy"}
              className={`copy-btn__inner ${copied ? "is-copied" : ""}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
            >
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              {copied ? "Copied!" : "Copy"}
            </motion.span>
          </AnimatePresence>
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </div>
    </div>
  );
}

// No backend: the form composes a pre-filled email in the visitor's mail app.
function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name").trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${data.get("message").trim()}\n\n— ${name}${data.get("email") ? ` (${data.get("email")})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span className="field__label">Name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="field">
          <span className="field__label">Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label className="field">
        <span className="field__label">Message</span>
        <textarea name="message" rows="5" placeholder="Tell me about your idea, role or project…" required />
      </label>
      <div className="contact-form__footer">
        <button type="submit" className="btn btn--primary btn--md">
          <span>Send Message</span>
          <FiSend className="btn__icon btn__icon--end" aria-hidden="true" />
        </button>
        <span className="contact-form__hint">Opens your email app with the message ready to send.</span>
      </div>
    </form>
  );
}

const Contact = () => {
  const links = socials.filter((s) => s.label !== "Email");

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          id="contact-title"
          align="center"
          title={
            <>
              Let's build something <span className="text-gradient">meaningful.</span>
            </>
          }
          description="I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
        />

        <motion.div
          className="contact__panel"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <motion.div
            className="contact__info"
            variants={staggerContainer(0.08, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p className="contact__availability" variants={fadeUp}>
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </motion.p>
            <motion.div variants={fadeUp}>
              <CopyEmail />
            </motion.div>
            <motion.ul className="contact__links" variants={fadeUp}>
              {links.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} className="contact-link" target="_blank" rel="noopener noreferrer">
                    <span className="contact-link__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="contact-link__text">
                      <strong>{label}</strong>
                      <small>{handle}</small>
                    </span>
                    <FiArrowUpRight className="contact-link__arrow" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
