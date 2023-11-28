
import React from 'react';
import { Link } from 'react-router-dom';
import './CreativeNavbar.css'; 
import logoImage from './LogoImage/logo-home1.svg'; 

const CreativeNavbar = () => {
  return (
    <nav className="creative-navbar">
     <div className="logo">
        <Link to="/">
          <img src={logoImage} alt = "Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/department" className="nav-link">
            Department
          </Link>
        </li>
        <li>
          <Link to="/counter" className="nav-link">
            Employee
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CreativeNavbar;