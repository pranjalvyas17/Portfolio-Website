import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm currently looking for new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            
            <div className="contact-links-list">
              <a href="mailto:pranjalvyas2024@gmail.com" className="contact-link-item">
                <FaEnvelope /> <span>Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/pranjal-vyas-17-05-06-" target="_blank" rel="noreferrer" className="contact-link-item">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/pranjalvyas17" target="_blank" rel="noreferrer" className="contact-link-item">
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;