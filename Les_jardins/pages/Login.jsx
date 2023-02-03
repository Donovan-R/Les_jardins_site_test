import React, { useState } from 'react';
import { GiBirdHouse } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Alert from '../components/Alert';
import axios from 'axios';

const Login = ({ alert, showAlert, setToken }) => {
  //* changer password type
  const [passwordType, setPasswordType] = useState('password');
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  //* gérer l'user
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const connectUser = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/login',
        user
      );

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', user.email);
      // localStorage.setItem('username', user.firstname)
      setToken(data.token);
      navigate('/todo');
    } catch (error) {
      showAlert('invalide', 'danger', true);
      localStorage.removeItem('token');
    }
  };

  return (
    <>
      <h2>connexion</h2>
      <div className='formEntire'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Veuillez vous connecter pour accèder à votre espace</h3>
        <div className='formContainer'>
          <form action='' onSubmit={handleSubmit}>
            <div className='formRow'>
              <label htmlFor='email'>email</label>
              <input
                type='mail'
                className='formInput'
                name='email'
                value={user.email}
                onChange={handleChange}
                placeholder='exemple@mail.com'
              />
            </div>
            <div className='formRow'>
              <label htmlFor='password'>mot de passe</label>
              <input
                type={passwordType}
                onChange={handleChange}
                value={user.password}
                name='password'
                className='formInput'
                placeholder='mot de passe'
              />
              <i className='showPassword'>
                {passwordType === 'password' ? (
                  <AiFillEye onClick={togglePassword} />
                ) : (
                  <AiFillEyeInvisible onClick={togglePassword} />
                )}
              </i>
            </div>
            <div className='agreeCont'>
              <button type='submit' onClick={connectUser}>
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
      <Link to='/'>
        <span className='backHome'>
          <GiBirdHouse />
        </span>
      </Link>
    </>
  );
};

export default Login;
