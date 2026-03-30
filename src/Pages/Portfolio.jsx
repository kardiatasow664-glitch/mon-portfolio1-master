import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="project-card">
          <img src={project1} alt="Projet 1" />
          <h3>Projet 1 - Site e-commerce</h3>
          <p>Un site e-commerce moderne avec React et Stripe.</p>
        </div>

        <div className="project-card">
          <img src={project2} alt="Projet 2" />
          <h3>Projet 2 - Application React</h3>
          <p>Application web pour gérer des tâches avec React et Firebase.</p>
        </div>
        
        <div className="project-card">
          <img src={project3} alt="Projet 3" />
          <h3>Projet 3 - Portfolio personnel</h3>
          <p>Portfolio personnel avec animations et responsive design.</p>
        </div>
      </div>
    </section>
  );
}