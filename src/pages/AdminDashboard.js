import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetUserDetail } from '../Redux/Api';
import '../css/style.css';

function AdminDashboard() {
  const getResponse = sessionStorage.getItem('serverResponse');

  const { loading, users } = useSelector((state) => state.UserDataReducer);
  const dispatch = useDispatch();

  const adminUser = { ...users[0] };

  const handleLogout = () => sessionStorage.removeItem('serverResponse');

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

  console.log('check adminUser', adminUser.id);

  if (getResponse === '200') {
    return (
      <div className="AdminDashboard">
        Welcome to admin dashboard

        <NavLink to="/CreateGroup" state={{ adminId: adminUser.id }}>
          <div>Create Group</div>
        </NavLink>

        <NavLink to="/CreateEvent">
          <div>Create Event</div>
        </NavLink>

        <NavLink to="/CreateMember" state={{ adminId: adminUser.id }}>
          <div>Create Member</div>
        </NavLink>

        <button
          type="button"
          onClick={() => handleLogout}
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
