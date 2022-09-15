import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postUserLogin } from '../Redux/Api';
// import { useNavigate } from 'react-router-dom';
import '../css/style.css';

const AdminLogin = () => {
//   const Navigate = useNavigate()
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const loginUser = {
      email: email.value,
      password: password.value,
    };
    dispatch(postUserLogin(loginUser));
    email.value = '';
    password.value = '';
  };

  return (
    <div className="AdminLogin">
      <h2>Admin Login</h2>
      <form className="d_flex_r" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email here" required />
        <input type="password" name="password" placeholder="password" required />
        <NavLink to="/AdminDashboard">
          <button type="submit">Add</button>
        </NavLink>
      </form>
    </div>
  );
};

export default AdminLogin;
