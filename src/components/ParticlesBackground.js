import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // This should be run only once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

const options = {
    fullScreen: { 
      enable: true, 
      zIndex: -1 
    },
    background: {
      color: {
        value: "transparent", // Change this to transparent so the CSS body color shows through
      },
    },
    // ... your other particles settings
    
    fpsLimit: 120,
    background: { color: { value: "#0d1117" } }, 
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { enable: true, speed: 2, direction: "none", outModes: { default: "out" } },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};

export default ParticlesBackground;