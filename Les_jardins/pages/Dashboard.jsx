import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrTrash } from 'react-icons/gr';
import { FaEdit } from 'react-icons/fa';
import { GiButterflyWarning } from 'react-icons/gi';
import Alert from '../components/Alert';

const Dashboard = ({ alert, showAlert, token }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState({
    lastname: '',
    firstname: '',
    mobile: '',
    email: '',
    name: '',
    role_id: '',
    user_id: '',
  });

  let newUsers = [...users];
  const url = 'http://localhost:5000/api/v1/dash/';

  const getUsers = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setUsers(data.data);
      // setNewUserInfos(userInfos);
    } catch (error) {
      console.log(error.response.data);
      showAlert(error.reponse.data.msg, 'danger', true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      setUsers(users.filter((user) => user.user_id !== id));
      showAlert('utilisateur supprimé', 'danger', true);
      await axios.delete(`${url}${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.response.data);
      showAlert(error.reponse.data.msg, 'danger', true);
    }
  };

  const editUser = (id) => {
    setIsFormOpen(true);
    let userFiltered = newUsers.filter((user) => user.user_id === id);
    setUserToEdit({
      lastname: userFiltered[0].lastname,
      firstname: userFiltered[0].firstname,
      mobile: userFiltered[0].mobile,
      email: userFiltered[0].email,
      role_id: userFiltered[0].role_id,
      name: userFiltered[0].name,
      user_id: userFiltered[0].user_id,
    });
    console.log(userFiltered[0].name);
    userFiltered = null;
  };

  const validEditUser = async (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    const id = userToEdit.user_id;
    setUsers(
      newUsers.map((user) =>
        user.user_id === userToEdit.user_id ? (user = userToEdit) : user
      )
    );
    try {
      await axios.put(
        `${url}${id}`,
        { userToEdit },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      showAlert('utilisateur modifié avec succès', 'success', true);
    } catch (error) {
      console.log(error.response);
      showAlert(error.response.data.msg, 'danger', true);
    }
    setUserToEdit({
      lastname: '',
      firstname: '',
      mobile: '',
      email: '',
      role_id: '',
      name: '',
      user: '',
    });
  };

  return (
    <section className='dashboardSection'>
      <div className='alertSection'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>
      <h3 className='warningTitle'>
        <GiButterflyWarning /> Attention toutes les modifications sont
        définitives <GiButterflyWarning />
      </h3>
      <table className='usersTable'>
        <thead>
          <tr>
            <th colSpan='6'>Tableau des utilisateurs</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>nom</th>
            <th>prénom</th>
            <th>téléphone</th>
            <th className='optionalColumn'>adresse électronique</th>
            <th>rôle</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {newUsers.map((user) => {
            const {
              user_id: id,
              firstname,
              lastname,
              email,
              mobile,
              role_id,
              name,
            } = user;
            return (
              <tr key={id}>
                <td>{lastname}</td>
                <td>{firstname}</td>
                <td>{mobile}</td>
                <td className='optionalColumn'>{email} </td>
                <td>{name}</td>
                <td>
                  <button onClick={() => deleteUser(id)} className='deleteBtn'>
                    <GrTrash />
                  </button>
                  <button onClick={() => editUser(id)} className='editBtn'>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isFormOpen && (
        <div className='modifyUserForm'>
          <h3>formulaire de modification de compte</h3>
          <form className='formCont'>
            <label htmlFor='lastname'>Nom</label>
            <input
              className=''
              type='text'
              name='lastname'
              value={userToEdit.lastname}
              onClick={(e) => e.preventDefault()}
              onChange={(e) =>
                setUserToEdit({ ...userToEdit, lastname: e.target.value })
              }
            />
            <label htmlFor='fistname'>Prénom</label>
            <input
              type='text'
              name='firstname'
              value={userToEdit.firstname}
              onClick={(e) => e.preventDefault()}
              onChange={(e) =>
                setUserToEdit({ ...userToEdit, firstname: e.target.value })
              }
            />
            <label htmlFor='mobile'>téléphone</label>
            <input
              type='text'
              name='mobile'
              value={userToEdit.mobile}
              onClick={(e) => e.preventDefault()}
              onChange={(e) =>
                setUserToEdit({ ...userToEdit, mobile: e.target.value })
              }
            />
            <label htmlFor='email'>adresse électronique</label>
            <input
              type='text'
              name='email'
              value={userToEdit.email}
              onClick={(e) => e.preventDefault()}
              onChange={(e) =>
                setUserToEdit({ ...userToEdit, email: e.target.value })
              }
            />
            <label htmlFor='role'>rôle</label>
            <input
              type='text'
              name='role'
              value={userToEdit.role_id}
              onClick={(e) => e.preventDefault()}
              onChange={(e) =>
                setUserToEdit({ ...userToEdit, role_id: e.target.value })
              }
            />
            <div>
              <button onClick={validEditUser}>Valider</button>
              <button onClick={() => setIsFormOpen(false)}>Annuler</button>
            </div>
          </form>
          <div className='legend'>
            <thead>
              <tr>
                <th>attribution d'un rôle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>droit</th>
                <th>chiffre</th>
              </tr>
              <tr>
                <td>admin</td>
                <td>2</td>
              </tr>
              <tr>
                <td>user</td>
                <td>1</td>
              </tr>
            </tbody>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
