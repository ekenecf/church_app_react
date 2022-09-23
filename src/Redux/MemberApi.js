import {
  addMember, removeMember, setMemberData, setLoadingData, setDataError,
} from './Actions';

const MEMBERURL = 'https://stcharlescyon.herokuapp.com/users';

export const postMember = (members, userid, groupId) => (dispatch) => {
  dispatch(setLoadingData());
  fetch(`${MEMBERURL}/${userid}/groups/${groupId}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((members)),
  }).then((res) => {
    console.log(res);
    dispatch(addMember(res));
  }).catch((error) => {
    dispatch(setDataError());
    console.log(error);
  });
};

const GETMEMBER = 'https://stcharlescyon.herokuapp.com/members';
export const GetAllMembers = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(GETMEMBER)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setMemberData(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};

const DELMEMBER = 'https://stcharlescyon.herokuapp.com/users';

export const DeleteMember = (userid, memberid) => (dispatch) => {
  fetch(`${DELMEMBER}/${userid}/members/${memberid}`, {
    method: 'DELETE',
    body: JSON.stringify((userid, memberid)),
  })
    .then(() => {
      dispatch(removeMember(memberid));
    });
};
