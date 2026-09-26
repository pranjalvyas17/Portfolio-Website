import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function SectionHeading({ index, eyebrow, title, description, align = "left", id }) {
  return (
    <motion.header
      className={`section-heading section-heading--${align}`}
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.p className="eyebrow" variants={fadeUp}>
        {index && <span className="eyebrow__index">{index}</span>}
        {eyebrow}
      </motion.p>
      <motion.h2 className="section-title" id={id} variants={fadeUp}>
        {title}
      </motion.h2>
      {description && (
        <motion.p className="section-description" variants={fadeUp}>
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
