import React from "react";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import email from "../assets/email.png";
import design from "../assets/design.png";

export default function Services() {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={web} alt="Développement Web" />
          <h3>Développement Web</h3>
          <p>Création de sites performants et modernes.</p>
        </div>

        <div className="service-card">
          <img src={mobile} alt="Mobile Development" />
          <h3>Mobile Development</h3>
          <p>Applications mobiles intuitives et performantes.</p>
        </div>

        <div className="service-card">
          <img src={email} alt="Email Development" />
          <h3>Email Development</h3>
          <p>Création de newsletters et campagnes emailing efficaces.</p>
        </div>

        <div className="service-card">
          <img src={design} alt="Web Design" />
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}