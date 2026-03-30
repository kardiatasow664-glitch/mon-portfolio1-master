import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Texte */}
        <div className="hero-text">
          <h1>BONJOUR JE SUIS KARDIATA SOW !</h1>
          
          <p> Je transforme des idées complexes en interfaces élégantes, rapides et mémorables. Du code au pixel, du montage à l'écran — j'assure.</p>

        </div>

        {/* Image */}
        <div className="hero-image">
          <img src={profile} alt="Photo de profil" />
        </div>

      </div>
    </section>
  );
}