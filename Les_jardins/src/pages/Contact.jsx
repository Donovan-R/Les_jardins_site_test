import React from "react";
import { Link } from "react-router-dom";
import reglement from ".././assets/Jardins-reglement-interieur.pdf";

const Contact = () => {
  return (
    <section className="section">
      <h2>Contact</h2>
      <h4>
        Prêt à cultiver votre jardin? Remplissez le formulaire ci-dessous pour
        vous inscrire dans notre liste d'attente. Nous vous recontacterons pour
        savoir si vous êtes toujours intéressé, le moment venu.
      </h4>
      <p>
        avant tout, pensez à consulter notre réglement intérieur{" "}
        <a href={reglement}>ici</a>
      </p>
      <div className="contactForm">
        <form action=""></form>
      </div>
      <Link to="/">retour à l'accueil</Link>
      <span className="goUp">
        <a href="#">haut de page</a>
      </span>
    </section>
  );
};

export default Contact;
