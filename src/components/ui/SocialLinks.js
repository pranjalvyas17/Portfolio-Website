import { socials } from "../../data/portfolio";

export default function SocialLinks({ className = "", include = ["GitHub", "LinkedIn", "Email"] }) {
  const items = socials.filter((s) => include.includes(s.label));

  return (
    <ul className={`social-links ${className}`.trim()}>
      {items.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              className="social-links__item"
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
