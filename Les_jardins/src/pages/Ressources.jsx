import React from "react";
import { Link } from "react-router-dom";

const Ressources = () => {
  return (
    <section className="section">
      <h2>Ressources</h2>
      <h4>page dédiée au partage de ressouces liées au jardinage</h4>
      <Link to="/">retour à l'accueil</Link>
    </section>
  );
};

export default Ressources;
