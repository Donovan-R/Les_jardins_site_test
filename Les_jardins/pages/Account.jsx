import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import Alert from '../components/Alert';
const token = localStorage.getItem('token');

const Account = ({ alert, showAlert }) => {
  const [userInfos, setUserInfos] = useState([]);
  // const [newUserInfos, setNewUserInfos] = useState([]);

  const url = 'http://localhost:5000/api/v1/account';

  const getUserAccount = async () => {
    try {
      const {
        data: { user: user },
      } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUserInfos(user[0]);
      // setNewUserInfos(userInfos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserAccount();
  }, []);

  const { firstname, lastname, email, mobile } = userInfos;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInfos);
    try {
      await axios.put(
        url,
        { userInfos },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
      showAlert(error, 'danger', true);
    }
  };

  if (token) {
    return (
      <>
        <div>
          <h2>
            voici vos informations personnelles {firstname} {lastname}:
          </h2>
        </div>
        <section className='section'>
          <div className='alertSection'>
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          </div>
          <div className='userInfos'>
            <div className='userInfo'>
              <p>mon nom : {lastname}</p>
              <input
                defaultValue={lastname}
                name='lastname'
                type='text'
                placeholder='nouvelle valeur'
                onChange={(e) =>
                  setUserInfos({ ...userInfos, lastname: e.target.value })
                }
              />
            </div>
            <div className='userInfo'>
              <p>mon prénom : {firstname}</p>
              <input
                defaultValue={firstname}
                name='firtsname'
                type='text'
                placeholder='nouvelle valeur'
                onChange={(e) =>
                  setUserInfos({
                    ...userInfos,
                    firstname: e.target.value,
                  })
                }
              />
            </div>
            <div className='userInfo'>
              <p>mon adress électronique : {email}</p>
              <input
                defaultValue={email}
                name='email'
                type='mail'
                placeholder='nouvelle valeur'
                onChange={(e) =>
                  setUserInfos({ ...userInfos, email: e.target.value })
                }
              />
            </div>
            <div className='userInfo'>
              <p>mon numéro de téléphone : {mobile}</p>
              <input
                defaultValue={mobile}
                name='mobile'
                type='tel'
                placeholder='nouvelle valeur'
                onChange={(e) =>
                  setUserInfos({ ...userInfos, mobile: e.target.value })
                }
              />
            </div>
            <div>
              <button onClick={handleSubmit}>modifier</button>
            </div>
            <div className='passwordToSet'>
              <label htmlFor='originalpassword'>
                saisissez votre mot de passe actuel
              </label>
              <input type='password' name='originalPassword' />
              <label htmlFor='newPassword'>
                saisissez votre nouveau mot de passe
              </label>
              <input type='password' className='newPassword' />
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Account;
