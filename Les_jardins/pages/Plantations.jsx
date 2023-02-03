import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GiArtilleryShell, GiBirdHouse } from 'react-icons/gi';
import { vegetables } from '../src/data';

const Plantation = () => {
  return (
    <section className='section'>
      <h2>Plantations</h2>
      <p>
        Ici vous trouverez un tableau non exhaustif des plantations au potager.
      </p>

      <div className='vegetablesTab'>
        {vegetables.map((vegetable) => {
          const { id, name, img, plantation, recolte } = vegetable;
          return (
            <article className='vegetableCard' key={id}>
              <h2>{name}</h2>
              <img src={img} alt={name} />
              <p>plantation : {plantation}</p>
              <p>récolte : {recolte}</p>
            </article>
          );
        })}
      </div>

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

export default Plantation;
