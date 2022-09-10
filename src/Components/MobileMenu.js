import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';

function MobileMenu(props) {
  const { CancelMenu } = props;

  return (
    <div className="mobile">
      <ul className="Mobile-List">
        <li>Home</li>
        <li>Events</li>
        <li>Members</li>
      </ul>
      <div className="cancel" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>X</div>
    </div>
  );
}

MobileMenu.propTypes = {
  CancelMenu: PropTypes.func.isRequired,
};
export default MobileMenu;
