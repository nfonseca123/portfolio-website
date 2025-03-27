// src/components/nav/Navbar.tsx

import React from 'react';
import './NavBar.css';  // Import the CSS file

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
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
