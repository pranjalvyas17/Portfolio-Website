import { Link as ScrollLink } from "react-scroll";
import { useReducedMotion } from "framer-motion";

// One button style for every CTA. Renders:
//  - a react-scroll link when `to` (section id) is given
//  - a regular anchor when `href` is given (external links, downloads, mailto)
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "end",
  external = false,
  className = "",
  children,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "start" && <Icon className="btn__icon" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "end" && <Icon className="btn__icon btn__icon--end" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <ScrollLink
        to={to}
        href={`#${to}`}
        smooth={reduceMotion ? false : "easeInOutQuart"}
        duration={reduceMotion ? 0 : 800}
        className={classes}
        {...rest}
      >
        {content}
      </ScrollLink>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {content}
    </a>
  );
}
