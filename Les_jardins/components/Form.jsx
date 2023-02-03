import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';
import Agree from './Agree';

const Form = ({ alert, showAlert, setToken }) => {
  const [user, setUser] = useState({
    lastname: '',
    firstname: '',
    mobile: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/register',
        user
      );
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate('/todo');
    } catch (error) {
      showAlert(error.response.data.msg, 'danger', true);
    }
  };

  return (
    <>
      <h3>remplissez le formulaire ci-dessous pour vous inscrire :</h3>
      <div className='formContainer'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <form action='' onSubmit={handleSubmit}>
          <div className='formRow'>
            <label htmlFor='lastname'>Nom</label>
            <input
              type='text'
              className='formInput'
              name='lastname'
              placeholder='nom'
              value={user.lastname}
              onChange={handleChange}
            />
          </div>
          <div className='formRow'>
            <label htmlFor='firstname'>Prénom</label>
            <input
              type='text'
              className='formInput'
              name='firstname'
              placeholder='prénom'
              value={user.firstname}
              onChange={handleChange}
            />
          </div>
          <div className='formRow'>
            <label htmlFor='mobile'>Téléphone</label>
            <input
              type='tel'
              className='formInput'
              name='mobile'
              placeholder='061011121314'
              value={user.mobile}
              onChange={handleChange}
            />
          </div>
          <div className='formRow'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              className='formInput'
              placeholder='example@mail'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className='formRow'></div>

          <div className='formRow'>
            <label htmlFor='password'>mot de passe</label>
            <input
              type='password'
              name='password'
              placeholder='mot de passe'
              value={user.password}
              onChange={handleChange}
            />
          </div>
          {/* <div className='formRow'>
            <label htmlFor='checkedPassword'>
              vérification du mot de passe
            </label>
            <input
              type='password'
              name='checkedPassword'
              placeholder='saisissez le même mot de passe'
            />
          </div> */}
          <div className='formRow'>
            <label htmlFor='comment'>commentaires</label>
            <textarea
              type='textarea'
              name='comments'
              placeholder="besoin de nous en dire plus ? c'est ici "
            />
          </div>
          <Agree />
        </form>
      </div>
    </>
  );
};

export default Form;
