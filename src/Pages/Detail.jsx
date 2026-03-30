import React from "react";
import { useParams, Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Detail() {
  const { id } = useParams();

  const projects = [
    {
      id: "1",
      title: "Projet 1 - Site e-commerce",
      image: project1,
      description:
        "Ce projet est une plateforme e-commerce moderne permettant aux utilisateurs d’acheter des produits en ligne.",
      features: [
        "Catalogue dynamique",
        "Panier interactif",
        "Paiement sécurisé avec Stripe",
        "Interface responsive",
      ],
      tech: ["React", "Stripe", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: "2",
      title: "Projet 2 - Application React",
      image: project2,
      description:
        "Application web pour gérer les tâches quotidiennes avec synchronisation en temps réel.",
      features: [
        "Ajout / suppression de tâches",
        "Marquer comme complété",
        "Firebase en temps réel",
      ],
      tech: ["React", "Firebase", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: "3",
      title: "Projet 3 - Portfolio personnel",
      image: project3,
      description:
        "Portfolio moderne pour présenter mes compétences et projets.",
      features: [
        "Animations modernes",
        "Responsive design",
        "Navigation fluide",
      ],
      tech: ["React", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <section className="detail">
      <Link to="/" className="back-btn">⬅ Retour</Link>

      <div className="detail-container">
        <img src={project.image} alt={project.title} />

        <div className="detail-content">
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <h3>Fonctionnalités :</h3>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          <h3>Technologies :</h3>
          <div className="tech">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          <div className="buttons">
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}