import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <ul>
        <NavLink to="/">
          <li> HOME </li>
          <hr />
        </NavLink>

        <NavLink to="/doctors">
          <li> ALL DOCTORS </li>
          <hr />
        </NavLink>

        <NavLink to="/about">
          <li> ABOUT </li>
          <hr />
        </NavLink>

        <NavLink to="/contact">
          <li> CONTACT </li>
          <hr />
        </NavLink>
      </ul>

      <div>
        <button> Create Account </button>
      </div>
    </div>
  );
};

export default Navbar;