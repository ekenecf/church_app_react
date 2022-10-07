import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { GetAllMembers } from '../Redux/MemberApi';
import { GetAllGroups } from '../Redux/GroupApi';

export default function MemberGroup() {
  const dispatch = useDispatch();
  const { members, loading, error } = useSelector((state) => state.MemberDataReducer);
  const { groups } = useSelector((state) => state.GroupDataReducer);

  const location = useLocation();
  const { groupId } = location.state || {};

  const groupInfo = groups.filter((group) => group.id === groupId);

  useEffect(() => {
    dispatch(GetAllMembers());
    dispatch(GetAllGroups());
  }, [dispatch]);

  let pageDetail;
  if (loading) {
    pageDetail = <ClipLoader color="#000" size={150} />;
  }

  if (error) {
    pageDetail = 'Kindly refresh the page or contact the site manager';
  }

  return (
    <div className="member_group">
      <h2>
        ALL MEMBERS THAT BELONGS TO
        {' '}
        {' '}
        {
        groupInfo.map((group) => group.name.toUpperCase())
        }
      </h2>
      {
        members.length ? members.map((member) => (member.group_id === groupId
          ? (
            <div className="member_group_info" key={member.id}>
              <div className="member_group_image">
                {' '}
                <img src={member.picture} alt="memberPhoto" />
                {' '}
              </div>
              <div className="member_group_name">
                <p>
                  Name:
                  {member.name}
                </p>

                <p>
                  Position:
                  {member.post_held}
                </p>
              </div>
            </div>
          ) : null)) : null
      }
      <div>{pageDetail}</div>
      <button type="button">
        <NavLink to="/Groups"> Back to Group Page</NavLink>
      </button>
    </div>
  );
}
