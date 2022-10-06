import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetAllGroups } from '../Redux/GroupApi';
import { GetUserDetail } from '../Redux/Api';
import '../css/style.css';

function Group() {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.GroupDataReducer);
  const { users } = useSelector((state) => state.UserDataReducer);
  const getResponse = sessionStorage.getItem('serverResponse');

  useEffect(() => {
    dispatch(GetAllGroups());
    dispatch(GetUserDetail());
  }, [dispatch]);

  const user = { ...users[0] };

  console.log(user.id);

  return (
    <div className="AdminDashboard">
      <h1>
        All groups
      </h1>
      {
        groups.length
          ? groups.map((group) => (
            <div key={group.id}>
              <NavLink to="/MemberGroup" state={{ groupId: group.id }}>
                <div>{group.name}</div>
                <div>{group.detail}</div>
              </NavLink>
              {
                getResponse
                  ? (
                    <>
                      <button type="button">
                        <NavLink to="/AdminDashboard"> Back to AdminDashboard </NavLink>
                      </button>
                    </>
                  )
                  : null
              }
              <button type="button">
                <NavLink to="/"> Back to Home </NavLink>
              </button>

            </div>
          ))
          : <div>No added group </div>
      }
    </div>
  );
}

export default Group;
