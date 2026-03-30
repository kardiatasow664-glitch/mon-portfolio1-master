import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <div className="contact-card">
        <form className="contact-form">
          <label>
            Nom :
            <input type="text" placeholder="Votre nom" required />
          </label>
          <label>
            Email :
            <input type="email" placeholder="Votre email" required />
          </label>
          <label>
            Message :
            <textarea placeholder="Votre message" rows="5" required></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info">
          <p>Email : monemail@example.com</p>
          <p>Téléphone : 77 997 85 79</p>
          <p>Adresse : Thies, Mbour3</p>
        </div>
      </div>
    </section>
  );
}