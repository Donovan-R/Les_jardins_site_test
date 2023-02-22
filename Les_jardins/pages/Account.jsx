import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import Alert from '../components/Alert';

const Account = ({ alert, showAlert, token }) => {
  const [userInfos, setUserInfos] = useState({
    lastname: '',
    firstname: '',
    email: '',
    mobile: '',
  });
  const [loading, setLoading] = useState(true);
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
      setUserInfos({
        lastname: user[0].lastname,
        firstname: user[0].firstname,
        email: user[0].email,
        mobile: user[0].mobile,
      });
      setLoading(false);
      // setNewUserInfos(userInfos);
    } catch (error) {
      console.log(error);
      showAlert(error, 'danger', true);
    }
  };

  useEffect(() => {
    getUserAccount();
  }, [token]);

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
      showAlert('vos informations ont été modifiées', 'success', true);
    } catch (error) {
      console.log(error);
      showAlert(error, 'danger', true);
    }
  };

  if (loading) {
    <p>chargement en cours</p>;
  } else {
    return (
      <>
        <div>
          <h2>
            voici vos informations personnelles {userInfos.firstname}{' '}
            {userInfos.lastname}:
          </h2>
        </div>
        <section className='section'>
          <div className='alertSection'>
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          </div>
          <form className='userInfos'>
            <div className='userInfo'>
              <p>mon nom : {userInfos.lastname}</p>
              <input
                value={userInfos.lastname}
                name='lastname'
                type='text'
                placeholder='nouvelle valeur'
                onChange={(e) =>
                  setUserInfos({ ...userInfos, lastname: e.target.value })
                }
              />
            </div>
            <div className='userInfo'>
              <p>mon prénom : {userInfos.firstname}</p>
              <input
                value={userInfos.firstname}
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
              <p>mon adress électronique : {userInfos.email}</p>
              <input
                value={userInfos.email}
                name='email'
                type='mail'
                placeholder='nouvelle valeur'
                onChange={(e) =>
                  setUserInfos({ ...userInfos, email: e.target.value })
                }
              />
            </div>
            <div className='userInfo'>
              <p>mon numéro de téléphone : {userInfos.mobile}</p>
              <input
                value={userInfos.mobile}
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
          </form>
        </section>
      </>
    );
  }
};

export default Account;
