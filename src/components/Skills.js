import React from "react";
import { FaCode, FaPython, FaLink } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        {/* Web Dev */}
        <div className="skill-card">
          <div className="card-inner">

            <div className="card-front">
              <FaCode size={40} />
              <h3>Web Development</h3>
            </div>

            <div className="card-back">
              <p>
                Strong understanding of frontend development using HTML, CSS, and React. 
                Able to build responsive and modern UI.
              </p>
            </div>

          </div>
        </div>

        {/* Python */}
        <div className="skill-card">
          <div className="card-inner">

            <div className="card-front">
              <FaPython size={40} />
              <h3>Python</h3>
            </div>

            <div className="card-back">
              <p>
                Comfortable with problem solving, scripting, and basic data structures 
                using Python.
              </p>
            </div>

          </div>
        </div>

        {/* Blockchain */}
        <div className="skill-card">
          <div className="card-inner">

            <div className="card-front">
              <FaLink size={40} />
              <h3>Blockchain</h3>
            </div>

            <div className="card-back">
              <p>
                Basic knowledge of blockchain concepts, smart contracts, and decentralized systems.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;