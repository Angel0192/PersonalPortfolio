import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-glass">
        {/* Logo */}
        <div className="logo">AAOL</div>

        {/* NavBar Links*/}
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href='#experience'>Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;