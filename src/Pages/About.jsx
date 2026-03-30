import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
           <h2>Qui suis-je ?</h2>

        
        {/* Texte */}
        <div className="about-text">
          <h3>Je suis Kardiata sow, conceptrice web .</h3>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="contact-btn">Contactez-moi</button>
        </div>

        {/* Compétences */}
        <div className="skills">
          <h3>Voici ce que je sais faire</h3>

          <div className="skill">
            <span>HTML et CSS</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}>85%</div>
            </div>
          </div>

          <div className="skill">
            <span>Python</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "70%" }}>70%</div>
            </div>
          </div>

          <div className="skill">
            <span>React</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "98%" }}>98%</div>
            </div>
          </div>

          <div className="skill">
            <span>Figma</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "91%" }}>91%</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}