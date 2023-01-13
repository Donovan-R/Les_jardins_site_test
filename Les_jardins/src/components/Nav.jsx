import React, { useState, useEffect, useRef } from "react";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import logo from ".././assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (isOpen) {
      contRef.current.style.height = linksHeight + "px";
    } else {
      contRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img className="logo" src={logo} alt="logo jardins"></img>
            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={contRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <ul className="social-icons">
            {social.map((soc) => {
              const { id, url, icon } = soc;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
