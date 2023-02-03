import React, { useState } from 'react';

const Agree = (handleSubmit) => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
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
        <button disabled={!agree} className='btn'>
          S'inscrire
        </button>
      </div>
    </div>
  );
};

export default Agree;
