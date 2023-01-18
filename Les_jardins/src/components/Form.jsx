import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='formContainer'>
      <h2>remplissez le formulaire ci-dessous pour vous inscrire</h2>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='lastname'>Nom</label>
          <input type='text' className='formInput' />
        </div>
        <div>
          <label htmlFor='firstname'>Prénom</label>
          <input type='text' className='formInput' />
        </div>
        <div>
          <label htmlFor='tel'>Tééléphone</label>
          <input type='tel' className='formInput' />
        </div>
        <div>
          <label htmlFor='adress'>Adresse</label>
          <input type='text' className='formInput' />
        </div>
        <div>
          <label htmlFor='mail'>email</label>
          <input type='email' className='formInput' />
        </div>
        <button type='submit'>S'inscrire</button>
      </form>
    </div>
  );
};

export default Form;
