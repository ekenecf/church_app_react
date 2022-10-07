import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { GetUserDetail } from '../Redux/Api';
import '../css/style.css';

function AdminDashboard() {
  const getResponse = sessionStorage.getItem('serverResponse');

  const { loading, users } = useSelector((state) => state.UserDataReducer);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const adminUser = { ...users[0] };

  const handleLogout = () => {
    sessionStorage.removeItem('serverResponse');
    Navigate('/');
  };

  useEffect(() => {
    dispatch(GetUserDetail());
  }, [dispatch]);

  if (loading) {
    <div className="AdminDashboard">Please Wait a moment</div>;
  }

  let feedback = '';
  if (getResponse !== '200') {
    feedback = 'You are not authorized to visit this page';
  }

  if (getResponse === '200') {
    return (
      <div className="AdminDashboard">
        <h2> Welcome to admin dashboard</h2>

        <NavLink to="/CreateGroup" state={{ adminId: adminUser.id }}>
          <p>Create Group</p>
        </NavLink>

        <NavLink to="/CreateEvent" state={{ adminId: adminUser.id }}>
          <p>Create Event</p>
        </NavLink>

        <NavLink to="/CreateMember" state={{ adminId: adminUser.id }}>
          <p>Create Member</p>
        </NavLink>

        <button
          type="button"
          onClick={() => handleLogout()}
        >
          Log out
        </button>
      </div>
    );
  }
  return (
    <div className="AdminDashboard">
      {feedback}
    </div>
  );
}

export default AdminDashboard;
