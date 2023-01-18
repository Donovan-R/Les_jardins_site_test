import React from 'react';
import { Link } from 'react-router-dom';
import reglement from '.././assets/Jardins-reglement-interieur.pdf';
import Form from '../components/Form';

const Contact = () => {
  return (
    <section className='section'>
      <h2>Contact</h2>
      <h4>
        Prêt à cultiver votre jardin? Remplissez le formulaire ci-dessous pour
        vous inscrire dans notre liste d'attente. Nous vous recontacterons pour
        savoir si vous êtes toujours intéressé, le moment venu.
      </h4>
      <p>
        avant tout, pensez à consulter notre réglement intérieur{' '}
        <a href={reglement}>ici</a>
      </p>
      <Form />
      <Link to='/'>retour à l'accueil</Link>

      <a href='#' className='goUp'>
        haut de page
      </a>
    </section>
  );
};

export default Contact;
