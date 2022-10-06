import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { GetAllMembers } from '../Redux/MemberApi';

export default function MemberGroup() {
  const dispatch = useDispatch();
  const { members, loading, error } = useSelector((state) => state.MemberDataReducer);
  const location = useLocation();
  const { groupId } = location.state || {};

  console.log(members);
  console.log(groupId);

  useEffect(() => {
    dispatch(GetAllMembers());
  }, [dispatch]);

  let pageDetail;
  if (loading) {
    pageDetail = <ClipLoader color="#000" size={150} />;
  }

  if (error) {
    pageDetail = 'Kindly refresh the page or contact the site manager';
  }

  return (
    <div className="AdminDashboard">
      <h2>ALL MEMBERS THAT BELONGS TO THIS GROUP</h2>

      {
        members.length ? members.map((member) => (member.group_id === groupId
          ? (
            <div key={member.id}>
              <div>
                <p>
                  Name:
                  {member.name}
                </p>
              </div>
              <div>
                <p>
                  Occupation:
                  {member.occupation}
                </p>
              </div>
              <div>
                <p>
                  Month and Day of birth:
                  {member.birthday}
                </p>
                {' '}
              </div>
              <div>
                <p>
                  Distance:
                  {member.distance === true ? 'true' : 'false'}
                </p>
                {' '}
              </div>
              <div>
                <p>
                  Phone Number:
                  {member.phone_number}
                </p>
              </div>
              <div>
                {' '}
                <img src={member.picture} alt="memberPhoto" />
                {' '}
              </div>
              <div>
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
