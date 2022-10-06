import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { DeleteMember, GetAllMembers } from '../Redux/MemberApi';
import { GetUserDetail } from '../Redux/Api';
import '../css/style.css';

export default function Members() {
  const dispatch = useDispatch();
  const { members, loading, error } = useSelector((state) => state.MemberDataReducer);
  const { users } = useSelector((state) => state.UserDataReducer);
  const getResponse = sessionStorage.getItem('serverResponse');

  const adminUser = { ...users[0] };

  useEffect(() => {
    dispatch(GetAllMembers());
    dispatch(GetUserDetail());
  }, [dispatch]);

  const handleDelete = (userid, groupId, memberid) => {
    dispatch(DeleteMember(userid, groupId, memberid));
    window.location.reload();
  };

  let pageDetail;
  if (loading) {
    pageDetail = <ClipLoader color="#000" size={150} />;
  }

  if (error) {
    pageDetail = 'Kindly refresh the page or contact the site manager';
  }

  return (
    <div className="Members">
      <div><h2>All members</h2></div>
      <div className="AllMabers">
        {
        members.length
          ? members.map((member) => (
            <div className="member_brief_detail" key={member.id}>
              <div className="member_image">
                {' '}
                <img src={member.picture} alt="memberPhoto" />
                {' '}
              </div>
              <div className="member_name">
                <p>
                  Name:
                  {member.name}
                </p>
              </div>
              <div className="member_post">
                <p>
                  Position:
                  {member.post_held}
                </p>
              </div>
              {getResponse
                ? (
                  <button
                    className="delete_button"
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

      <div>{pageDetail}</div>
    </div>
  );
}
