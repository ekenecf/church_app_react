import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DeleteMember, GetAllMembers } from '../Redux/MemberApi';
import { GetUserDetail } from '../Redux/Api';
import '../css/style.css';

export default function Members() {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.MemberDataReducer);
  const { users } = useSelector((state) => state.UserDataReducer);
  const getResponse = sessionStorage.getItem('serverResponse');

  console.log(members);

  const adminUser = { ...users[0] };
  console.log('admin ID', adminUser.id);

  useEffect(() => {
    dispatch(GetAllMembers());
    dispatch(GetUserDetail());
  }, [dispatch]);

  const handleDelete = (userid, groupId, memberid) => {
    dispatch(DeleteMember(userid, groupId, memberid));
    window.location.reload();
  };

  return (
    <div className="Members">
      <h2>All members</h2>

      {
        members.length
          ? members.map((member) => (
            <div key={member.id}>
              <div>{member.picture}</div>
              {getResponse
                ? (
                  <button
                    type="button"
                    onClick={() => handleDelete(adminUser.id, member.group_id, member.id)}
                  >
                    Delete Member
                  </button>
                ) : null}
              <button type="button">
                <NavLink to={`/Members/${member.id}`} state={{ memberid: member.id }}>Member detail</NavLink>
              </button>
              <button type="button">
                <NavLink to="/"> Back to Home </NavLink>
              </button>
              <button type="button">
                <NavLink to="/AdminDashboard">Back to AdminDashboard </NavLink>
              </button>
            </div>
          ))
          : <div>No Member</div>
      }
    </div>
  );
}
