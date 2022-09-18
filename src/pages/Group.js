import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllGroups, DeleteGroup } from '../Redux/GroupApi';
import { GetUserDetail } from '../Redux/Api';
import '../css/style.css';

function Group() {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.GroupDataReducer);
  const { users } = useSelector((state) => state.UserDataReducer);

  useEffect(() => {
    dispatch(GetAllGroups());
    dispatch(GetUserDetail());
  }, [dispatch]);

  const handleDelGroup = (id) => {
    dispatch(DeleteGroup(users[1].id, id));
  };

  return (
    <div className="AdminDashboard">
      <h1>
        All groups
      </h1>
      {
        groups.length
          ? groups.map((group) => (
            <div key={group.id}>
              <div>{group.name}</div>
              <div>{group.detail}</div>
              <button
                type="button"
                onClick={() => handleDelGroup(group.id)}
              >
                Delete Group
              </button>
            </div>
          ))
          : <div>No added group </div>
      }
    </div>
  );
}

export default Group;
