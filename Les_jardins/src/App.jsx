import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavShared from '../pages/NavShared';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Plantations from '../pages/Plantations';
import SinglePlant from '../pages/SinglePlant';
import ProtectedRoute from '../pages/ProtectedRoute';
import Login from '../pages/Login';
import Tasks from '../pages/Tasks';
import Tools from '../pages/tools';
import Ressources from '../pages/Ressources';
import Error from '../pages/Error';
const getToken = () => {
  return localStorage.getItem('token') ? localStorage.getItem('token') : '';
};

const userName = localStorage.getItem('user');

const App = () => {
  const [alert, setAlert] = useState({ msg: '', type: '', show: false });
  const [token, setToken] = useState(getToken());

  const showAlert = (msg = '', type = '', show = false) => {
    setAlert({
      msg,
      type,
      show,
    });
  };

  return (
    <Router>
      <h1>Les jardins de l'Autour</h1>
      <Routes>
        <Route
          path='/'
          element={<NavShared token={token} setToken={setToken} />}
        >
          <Route index element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/plantations' element={<Plantations />}></Route>
          <Route path='/plantations/:id' element={<SinglePlant />} />
          <Route
            path='/contact'
            element={
              <Contact
                alert={alert}
                showAlert={showAlert}
                setToken={setToken}
              />
            }
          ></Route>
          <Route
            path='/ressources'
            element={
              <Ressources
                alert={alert}
                showAlert={showAlert}
                setToken={setToken}
              />
            }
          >
            {/* <Route path='/ressources/tools' element={<tools />}></Route> */}
          </Route>
          <Route
            path='/login'
            element={
              <Login alert={alert} showAlert={showAlert} setToken={setToken} />
            }
          >
            {' '}
          </Route>

          <Route
            path='/todo'
            element={
              <ProtectedRoute token={token}>
                <Tasks alert={alert} showAlert={showAlert} token={token} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/tools'
            element={
              <ProtectedRoute token={token}>
                <Tools alert={alert} showAlert={showAlert} token={token} />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
