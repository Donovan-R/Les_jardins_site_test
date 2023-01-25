import React from 'react';
import Agree from './Agree';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3>remplissez le formulaire ci-dessous pour vous inscrire :</h3>
      <div className='formContainer'>
        <form action='' onSubmit={handleSubmit}>
          <div className='formRow'>
            <label htmlFor='lastname'>Nom</label>
            <input type='text' className='formInput' />
          </div>
          <div className='formRow'>
            <label htmlFor='firstname'>Prénom</label>
            <input type='text' className='formInput' />
          </div>
          <div className='formRow'>
            <label htmlFor='tel'>Téléphone</label>
            <input type='tel' className='formInput' />
          </div>
          <div className='formRow'>
            <label htmlFor='mail'>email</label>
            <input
              type='email'
              className='formInput'
              placeholder='example@mail'
            />
          </div>
          <div className='formRow'>
            <label htmlFor='adress'>Adresse</label>
            <input type='text' className='formInput' />
          </div>

          <div className='formRow'>
            <label htmlFor='password'>mot de passe</label>
            <input type='password' name='password' id={new Date().getTime()} />
          </div>
          <div className='formRow'>
            <label htmlFor='passwors'>vérification du mot de passe</label>
            <input type='password' name='password' id={new Date().getTime()} />
          </div>
          <div className='formRow'>
            <label htmlFor='comment'>commentaires</label>
            <textarea type='textarea' name='comment' />
          </div>
          <Agree />
        </form>
      </div>
    </>
  );
};

export default Form;
