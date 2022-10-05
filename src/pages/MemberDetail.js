import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetMemberDetail } from '../Redux/MemberApi';

import '../css/style.css';

export default function MemberDetail() {
  const { memberDetail } = useSelector((state) => state.MemberDataReducer);

  console.log(memberDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMemberDetail());
  }, [dispatch]);

  return (
    <div className="MemberDetail">
      Member MemberDetail
    </div>
  );
}
