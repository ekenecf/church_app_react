import React from 'react';
import { useSelector } from 'react-redux';
// import postUserLogin from '../Redux/Api';
import '../css/style.css';

function AdminDashboard() {
  const response = useSelector((state) => state.UserDataReducer);
  // const dispatch = useDispatch();
  console.log('In the admin dashboard', response);
  // console.log("In the admin dashboard loading", response);
  // useEffect(() => {
  //   dispatch(postUserLogin());
  // }, []);

  if (response) {
    return (
      <div className="AdminDashboard">
        loading please wait
      </div>
    );
  }
}

export default AdminDashboard;
