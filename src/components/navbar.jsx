import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        🐾 <span>PawConnect</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BrowsePets">Browse Pets</Link></li>
        <li><Link to="/">Post a Pet</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li>☰</li>
      </ul>
    </nav>
  );
};

export default Navbar;
