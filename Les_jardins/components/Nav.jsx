import React, { useState, useEffect, useRef } from 'react';
import { linksPublic, linksPrivate } from '../src/data';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '.././assets/logo.png';
const role = localStorage.getItem('role');
console.log(role);
const Navbar = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (isOpen) {
      contRef.current.style.height = linksHeight + 'px';
    } else {
      contRef.current.style.height = '0px';
    }
  }, [isOpen]);

  const disconnectUser = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img className='logo' src={logo} alt='logo jardins'></img>
            <button className='nav-toggle' onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
          <div className='links-container' ref={contRef}>
            {!token ? (
              <ul className='links' ref={linksRef}>
                {linksPublic.map((link) => {
                  const { id, text, url } = link;
                  return (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className='links' ref={linksRef}>
                {linksPrivate.map((link) => {
                  const { id, text, url } = link;
                  return (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  );
                })}
                {role == 1 && (
                  <li>
                    <Link to='/dashboard'>Espace admin</Link>
                  </li>
                )}
                <li>
                  <Link to='/' onClick={disconnectUser}>
                    se déconnecter
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
