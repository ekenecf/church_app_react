import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { postGroup } from '../Redux/GroupApi';

function CreateGroup() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { adminId } = location.state || {};
  console.log('Admin ID', adminId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, detail } = e.target.elements;
    const createdGroup = {
      name: name.value,
      detail: detail.value,
    };
    dispatch(postGroup(createdGroup, adminId));
    Navigate('/AdminDashboard');
    name.value = '';
    detail.value = '';
  };

  return (

    <div className="AdminDashboard">
      <h2>Create group</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name of group here" required />
        <input type="text" name="detail" placeholder="Brief detail of group" required />
        <button type="submit">Add</button>
      </form>
      <button type="button">
        <NavLink to="/AdminDashboard">Back to AdminDashboard </NavLink>
      </button>
    </div>
  );
}

export default CreateGroup;
