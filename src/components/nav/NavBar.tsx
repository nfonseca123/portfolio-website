// src/components/nav/Navbar.tsx
import React, { useState } from 'react';
import './NavBar.css'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/Work">Work</a></li>
        <li><a href="/Skills">Skills</a></li>
        <li><a href="/Resources">Resources</a></li>
        <li><a href="/DeveloperSetup">Developer Setup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
