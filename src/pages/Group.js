import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { GetAllGroups } from '../Redux/GroupApi';
import '../css/style.css';

function Group() {
  const dispatch = useDispatch();
  const { groups, loading, error } = useSelector((state) => state.GroupDataReducer);
  const getResponse = sessionStorage.getItem('serverResponse');

  useEffect(() => {
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
    <div className="all_groups">
      <h1>
        All groups
      </h1>
      {
        groups.length
          ? groups.map((group) => (
            <div className="group" key={group.id}>
              <NavLink to="/MemberGroup" state={{ groupId: group.id }}>
                <div className="member_group_name_detail">
                  <p>
                    Group Name:
                    {' '}
                    {' '}
                    {group.name}
                  </p>
                  <p>
                    Brief info:
                    {' '}
                    {group.detail}
                  </p>
                </div>
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
          : null
      }
      <div>{pageDetail}</div>
    </div>
  );
}
export default Group;
