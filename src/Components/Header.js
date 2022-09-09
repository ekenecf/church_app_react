import React from 'react';
import '../css/style.css';
import Logo from '../assets/download_st_charles.jpg';

const Header = () => (
  <header>
    <nav className="header">
      <img src={Logo} alt="patron saint" />
      <ul className="Lists">
        <li>Home</li>
        <li>Events</li>
        <li>Members</li>
      </ul>
    </nav>
  </header>
);

export default Header;
