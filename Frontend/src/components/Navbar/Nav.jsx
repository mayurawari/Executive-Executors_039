import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../../styles/Navbar/Nav.css';
import { Home } from '../../pages/Home/Home';
import { Login } from '../../pages/Login/Login';
import { Signup } from '../../pages/Signup/Signup';
import { Aboutus } from '../../pages/About/About';
import { Contactus } from '../../pages/Contactus/Contact';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar ">
        <div className="nav-icon">IdeaFlow</div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/Aboutus" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link></li>
          <li><Link to="/Contactus" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </div>
    </>
  );
};
