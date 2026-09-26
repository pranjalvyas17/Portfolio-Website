import { memo, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "framer-motion";

// Ambient, low-contrast constellation behind the page.
// Kept deliberately sparse and slow so it never competes with content.
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: !reduceMotion, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.25, color: "#38BDF8" } },
        },
      },
      particles: {
        color: { value: ["#94A3B8", "#38BDF8", "#818CF8"] },
        links: {
          enable: true,
          color: "#94A3B8",
          distance: 140,
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: !reduceMotion,
          speed: 0.35,
          direction: "none",
          outModes: { default: "out" },
        },
        number: { value: 55, density: { enable: true, width: 1400, height: 900 } },
        opacity: { value: { min: 0.15, max: 0.45 } },
        shape: { type: "circle" },
        size: { value: { min: 0.6, max: 1.8 } },
      },
    }),
    [reduceMotion]
  );

  if (!init) return null;

  return <Particles id="tsparticles" className="particles-layer" options={options} />;
};

export default memo(ParticlesBackground);
