// Navbar.jsx
import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; // Import your CSS file
import { useAuth } from '../store/auth';
const Navbar = () => {
  const {isLoggedIn} = useAuth();
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Your Logo</a>
      </div>
      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/service">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {isLoggedIn ? <li><NavLink to="/logout">Logout</NavLink></li>:
        <>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        </>
        
        }
      
        
      </ul>
    </nav>
  );
};  //if we habe token(isLoggedIN= true) then show lougout or else register and login

export default Navbar;
