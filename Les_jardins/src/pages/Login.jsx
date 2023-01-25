import React, { useState } from 'react';
import { GiBirdHouse } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [passwordType, setPasswordType] = useState('password');
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
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

  const connectClick = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h2>connexion</h2>
      <div className='formEntire'>
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
              <span className='showPassword'>
                {passwordType === 'password' ? (
                  <AiFillEye onClick={togglePassword} />
                ) : (
                  <AiFillEyeInvisible onClick={togglePassword} />
                )}
              </span>
            </div>
            <div className='agreeCont'>
              <button type='submit' onClick={connectClick}>
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
