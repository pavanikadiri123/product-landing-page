import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo"><i>LifeSync Hub</i></h1>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#product">Products</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
