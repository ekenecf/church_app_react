import React, { useState } from 'react';
import '../css/style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/download_st_charles.jpg';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [toggle, settoggle] = useState(false);

  const handlemenu = () => {
    settoggle(!toggle);
    return toggle;
  };

  return (
    <header>
      <nav className="header">
        <img src={Logo} alt="patron saint" />
        <ul className="Lists">
          <li>Home</li>
          <li>Events</li>
          <li>Members</li>
        </ul>
        <div className="hamburger">
          <div role="button" tabIndex={0} onClick={handlemenu} onKeyDown={handlemenu}>
            {
              toggle ? '' : <GiHamburgerMenu />
            }
          </div>
        </div>
      </nav>
      {
        toggle
          ? (
            <div className="MobileContainer">
              <MobileMenu CancelMenu={handlemenu} />
            </div>
          )
          : null
      }
    </header>
  );
};
export default Header;
