import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GiBirdHouse } from 'react-icons/gi';

const Ressources = () => {
  return (
    <section className='section'>
      <h2>Ressources</h2>
      <h4>page dédiée au partage de ressouces liées au jardinage</h4>
      <Link to='/'>
        <span className='backHome'>
          <GiBirdHouse />
        </span>
      </Link>

      <a href='#' className='goUp'>
        <FaRegPaperPlane />
      </a>
    </section>
  );
};

export default Ressources;
