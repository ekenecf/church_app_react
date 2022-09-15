import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import { NavLink } from 'react-router-dom';

function MobileMenu(props) {
  const { CancelMenu } = props;

  return (
    <div className="mobile">
      <div className="Mobile-List">
        <NavLink to="/">
          <div role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Home</div>
        </NavLink>
        <NavLink to="/Events">
          <div role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Events</div>
        </NavLink>
        <NavLink to="/Members">
          <div className="link-remove" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Members</div>
        </NavLink>
        <NavLink to="/AdminLogin">
          <div className="link-remove" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Admin Login</div>
        </NavLink>
      </div>
      <div className="cancel" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>X</div>
    </div>
  );
}

MobileMenu.propTypes = {
  CancelMenu: PropTypes.func.isRequired,
};
export default MobileMenu;
