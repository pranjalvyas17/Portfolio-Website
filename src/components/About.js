import React from 'react';
import { Link } from "react-scroll";
import myPhoto from './profile.png'; // Direct import


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Side: Profile Image */}
        <div className="about-image-wrapper">
          {/* Note: Ensure profile.png is in your PUBLIC folder */}
        <img src={myPhoto} alt="Pranjal Vyas" className="profile-img-png" />
        </div>
        
        {/* Right Side: Bio and Buttons */}
        <div className="about-text-content">
          <h2 className="glow-text">About Me</h2>
          <p>
            I'm <strong>Pranjal Vyas</strong>, a B.Tech CSE student specializing in 
            Blockchain and Web Development. I enjoy creating high-performance 
            web applications with a focus on modern UI/UX and decentralized systems.
          </p>
          <p>
            With a strong foundation in React and CSS, I strive to build digital 
            experiences that are not only functional but also visually engaging.
          </p>
          
          <div className="about-buttons">
            <Link to="contact" smooth={true} duration={500} offset={-70}>
  <button className="contact-btn">Hire Me</button>
</Link>
            <a href="/Pranjal_Resume.pdf" download className="resume-btn">Resume</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;