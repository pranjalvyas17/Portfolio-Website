import { forwardRef, useCallback, useRef } from "react";
import { motion } from "framer-motion";

// Card with a cursor-following light and border glow.
// Pointer position is written straight to CSS variables, so moving the mouse never re-renders React.
// Hover lift goes through Framer (`whileHover`) because Framer owns this element's inline transform.
const SpotlightCard = forwardRef(function SpotlightCard(
  { as = "div", className = "", lift = 4, children, ...rest },
  forwardedRef
) {
  const innerRef = useRef(null);
  const MotionTag = motion[as];

  const setRefs = useCallback(
    (node) => {
      innerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  const handlePointerMove = (event) => {
    const el = innerRef.current;
    if (!el || event.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <MotionTag
      ref={setRefs}
      className={`spotlight ${className}`.trim()}
      onPointerMove={handlePointerMove}
      whileHover={lift ? { y: -lift, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default SpotlightCard;
