import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrTrash } from 'react-icons/gr';
import { FaEdit } from 'react-icons/fa';
import Alert from '../components/Alert';

const Dashboard = ({ alert, showAlert, token }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userToEdit, setUserToEdit] = useState({
    lastname: '',
    firstname: '',
    mobile: '',
    email: '',
    role_id: '',
    user_id: '',
  });
  const [editId, setEditId] = useState('');

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
      showAlert(error, 'danger', true);
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
    }
  };

  const editUser = (id) => {
    let userFiltered = newUsers.filter((user) => user.user_id === id);
    setUserToEdit({
      lastname: userFiltered[0].lastname,
      firstname: userFiltered[0].firstname,
      mobile: userFiltered[0].mobile,
      email: userFiltered[0].email,
      role_id: userFiltered[0].role_id,
      user_id: userFiltered[0].user_id,
    });
    setEditId(id);

    userFiltered = null;
  };

  const validEditUser = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.log(error);
    }
    setUserToEdit({
      lastname: '',
      firstname: '',
      mobile: '',
      email: '',
      role_id: '',
      user_id: '',
    });
  };

  return (
    <section className='section'>
      <h3>attention toutes les modifications sont définitives</h3>
      <table className='usersTable'>
        <thead>
          <tr>
            <th colSpan='5'>Tableau des utilisateurs</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>nom</th>
            <th>prénom</th>
            <th>téléphone</th>
            <th>adresse électronique</th>
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
            } = user;
            return (
              <tr key={id}>
                <td>{lastname}</td>
                <td>{firstname}</td>
                <td>{mobile}</td>
                <td>{email} </td>
                <td>{role_id}</td>
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
      <hr />
      <h3>formulaire de modification de compte</h3>
      <form action='' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='lastname'
          value={userToEdit.lastname}
          onClick={(e) => e.preventDefault()}
          onChange={(e) =>
            setUserToEdit({ ...userToEdit, lastname: e.target.value })
          }
        />
        <input
          type='text'
          name='firstname'
          value={userToEdit.firstname}
          onClick={(e) => e.preventDefault()}
          onChange={(e) =>
            setUserToEdit({ ...userToEdit, firstname: e.target.value })
          }
        />
        <input
          type='text'
          name='mobile'
          value={userToEdit.mobile}
          onClick={(e) => e.preventDefault()}
          onChange={(e) =>
            setUserToEdit({ ...userToEdit, mobile: e.target.value })
          }
        />
        <input
          type='text'
          name='email'
          value={userToEdit.email}
          onClick={(e) => e.preventDefault()}
          onChange={(e) =>
            setUserToEdit({ ...userToEdit, email: e.target.value })
          }
        />
        <input
          type='text'
          name='role'
          value={userToEdit.role_id}
          onClick={(e) => e.preventDefault()}
          onChange={(e) =>
            setUserToEdit({ ...userToEdit, role_id: e.target.value })
          }
        />
        <button onClick={validEditUser}>valider</button>
      </form>
    </section>
  );
};

export default Dashboard;
