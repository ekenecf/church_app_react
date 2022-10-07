import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { GetMemberDetail } from '../Redux/MemberApi';

import '../css/style.css';

export default function MemberDetail() {
  const { memberDetail } = useSelector((state) => state.MemberDataReducer);
  const location = useLocation();
  const { memberid } = location.state || {};

  console.log(memberid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMemberDetail(memberid));
  }, [dispatch]);

  return (
    <div className="MemberDetail">
      <div className="member-image">
        <img
          src={memberDetail.picture}
          alt="Member-img"
        />
      </div>
      <p>
        Member Name:
        {' '}
        {memberDetail.name}
      </p>
      <p>
        Month and year of birth:
        {' '}
        {memberDetail.birthday}
      </p>
      <p>
        Distance:
        {' '}
        {memberDetail.distance === true ? 'true' : 'false'}
      </p>
      <p>
        Occupation:
        {' '}
        {memberDetail.occupation}
      </p>
      <p>
        Contact detail:
        {' '}
        {memberDetail.phone_number}
      </p>
      <p>
        Post Held:
        {' '}
        {memberDetail.post_held}
      </p>

      <button type="button">
        <NavLink to="/Members"> Back to Member page</NavLink>
      </button>
    </div>
  );
}
