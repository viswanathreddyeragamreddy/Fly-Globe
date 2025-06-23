import React from 'react';
import './Navbar.css';
import ukFlag from '../assets/uk-flag.png'; // save flag image here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fly <strong>Globe</strong></div>
      
      <ul className="nav-links">
        <li>Home</li>
        <li>First</li>
        <li>Business</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="nav-actions">
        <div className="language">
          <img src={ukFlag} alt="UK Flag" />
          <span>UK | ENG ⌄</span>
        </div>
        <button className="nav-btn login">Login</button>
        <button className="nav-btn signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
