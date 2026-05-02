import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects(){
 return(

 <section className="projects" id="projects">

 <h2>Projects</h2>

 <div className="project-container">

 <div className="card">
 <h3>Internskill</h3>
 <p>Virtual Internship Portal with skill tracking and incentives system using Blockchain</p>
 <a href="https://pranjalvyas17.github.io/INTERNSKILL/" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
 </div>

 <div className="card">
 <h3>Portfolio Website</h3>
 <p>A modern and responsive personal portfolio website built with React.js, showcases to highlight my work in web development, Python, and blockchain.</p>
 <a href="https://pranjalvyas17.github.io/INTERNSKILL/" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
 </div>

 </div>

 </section>

 )
}

export default Projects;