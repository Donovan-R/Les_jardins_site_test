import React, { useState } from 'react';

const Agree = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  // When the button is clicked
  const btnHandler = () => {
    alert('votre demande a été prise en compte');
  };

  return (
    <div className='agreeBox'>
      <div className='agreeCont'>
        <div>
          <input
            type='checkbox'
            id='agree'
            name='agree'
            onChange={checkboxHandler}
          />
          <label htmlFor='agree'>
            {' '}
            En cochant cette case <b> j'accepte </b> le règlement
          </label>
        </div>

        {/* Don't miss the exclamation mark* */}
        <button disabled={!agree} className='btn' onClick={btnHandler}>
          S'inscrire
        </button>
      </div>
    </div>
  );
};

export default Agree;
