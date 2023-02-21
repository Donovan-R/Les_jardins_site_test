import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import Alert from '../components/Alert';

const Dashboard = ({ alert, showAlert, token }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  let newUsers = [...users];
  const url = 'http://localhost:5000/api/v1/dash';

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
      console.log(error);
      showAlert(error, 'danger', true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
  return (
    <section className='section'>
      <h3>attention toutes les modifications sont définitives</h3>
      <table className='usersTable'>
        <thead>
          <tr>
            <th colspan='5'>Tableau des utilisateurs</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>nom</th>
            <th>prénom</th>
            <th>téléphone</th>
            <th>adresse électronique</th>
            <th>rôle</th>
          </tr>
        </thead>
        <tbody>
          {newUsers.map((user) => {
            const { user_id, firstname, lastname, role_id, email, mobile } =
              user;
            return (
              <tr key={user_id}>
                <td>{lastname}</td>
                <td>{firstname}</td>
                <td>{mobile}</td>
                <td>{email} </td>
                <td>{role_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Dashboard;
