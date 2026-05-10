import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Hello, I'm <span className="name">Pranjal Vyas</span></h1>

      <p>BTech CSE | Developer | Blockchain Enthusiast</p>

      <a href="/Pranjal_Resume.pdf" download className="resume-btn">Download Resume</a>
    </section>
  );
}

export default Hero;