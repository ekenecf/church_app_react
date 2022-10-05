import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
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
      {memberDetail.name}

      <button type='button'>Back to Member page</button>
    </div>
  );
}
