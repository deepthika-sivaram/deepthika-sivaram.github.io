particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      move: { enable: false } // Particles stay still
    },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
    retina_detect: true
  });
  