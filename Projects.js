import React from 'react';
import './Projects.css';
import Airbnb from "./airbnb.png"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <img src={Airbnb} alt="Project" />
        <h3>Airbnb Clone</h3>
        <p>Simple React clone of a Airbnb</p>
        <a href="/">Live Demo</a>
        <a href="/">GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
