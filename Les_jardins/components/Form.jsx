import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';

const Form = ({ alert, showAlert, setToken }) => {
  const [user, setUser] = useState({
    lastname: '',
    firstname: '',
    mobile: '',
    email: '',
    password: '',
    comments: '',
    agree: false,
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSelectedFile = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const checkboxHandler = (e) => {
    setUser({ ...user, agree: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('justificatif', selectedFile);
    formData.append('lastname', user.lastname);
    formData.append('firstname', user.firstname);
    formData.append('mobile', user.mobile);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('comments', user.comments);
    formData.append('agree', user.agree);

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/register',
        formData
      );
      localStorage.setItem('token', data.token);
      setToken(data.token);

      navigate('/todo');
    } catch (error) {
      showAlert(error.response.data.msg, 'danger', true);
    }
  };

  // const [loaded, setLoaded] = useState(0);

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
          <div className='formRow justificatifRow'>
            <label htmlFor='justificatif'>
              joindre un justificatif de domicile
            </label>
            <input
              className='justificatifInput'
              type='file'
              name='justificatif'
              onChange={handleSelectedFile}
            />
          </div>
          <div className='formRow'>
            <label htmlFor='comment'>commentaires</label>
            <textarea
              type='textarea'
              name='comments'
              placeholder="besoin de nous en dire plus ? c'est ici "
              value={user.comments}
              onChange={handleChange}
            />
          </div>
          <div className='agreeBox'>
            <div className='agreeCont'>
              <div>
                <input
                  type='checkbox'
                  id='agree'
                  name='agree'
                  onChange={checkboxHandler}
                  value={user.agree}
                />
                <label htmlFor='agree'>
                  En cochant cette case <b> j'accepte </b> le règlement
                </label>
              </div>
              <button disabled={!user.agree} className='btn'>
                S'inscrire
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
