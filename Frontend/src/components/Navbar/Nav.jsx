import React from 'react';
import '../../styles/Navbar/Nav.css';

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-icon">IdeaFlow</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
