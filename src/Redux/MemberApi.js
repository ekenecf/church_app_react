import {
  addMember, removeMember, setMemberData, setLoadingData, setDataError,
} from './Actions';

const MEMBERURL = 'https://stcharlescyon.herokuapp.com/users';

export const postMember = (members, userid) => (dispatch) => {
  dispatch(setLoadingData());
  fetch(`${MEMBERURL}/${userid}/members`, {
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
export default postGroup;

const GETGROUP = 'https://stcharlescyon.herokuapp.com/groups';
export const GetAllGroups = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(GETGROUP)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(allGroups(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};

const DELGROUP = 'https://stcharlescyon.herokuapp.com/users';

export const DeleteGroup = (userid, groupid) => (dispatch) => {
  fetch(`${DELGROUP}/${userid}/groups/${groupid}`, {
    method: 'DELETE',
    body: JSON.stringify((userid, groupid)),
  })
    .then(() => {
      dispatch(removeGroup(groupid));
    });
};
