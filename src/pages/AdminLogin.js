import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postUserLogin } from '../Redux/Api';
import '../css/style.css';

const AdminLogin = () => {
  const Navigate = useNavigate();
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

  const { response } = useSelector((state) => state.UserDataReducer);
  console.log('Admin login response', response);

  if (response === 200) {
    Navigate('/AdminDashboard');
    sessionStorage.setItem('serverResponse', response);
  }

  let message = '';
  if (response === 401) {
    message = 'User does not exist';
  }

  return (
    <div className="AdminLogin">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email here" required />
        <input type="password" name="password" placeholder="password" required />
        <button type="submit">Add</button>
        <br />
        {message}
      </form>
    </div>
  );
};

export default AdminLogin;
