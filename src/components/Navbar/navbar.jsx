import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-glass">
        <div className="logo">AAO</div>
        <div className="links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;