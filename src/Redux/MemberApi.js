import axios from 'axios';
import {
  addMember, removeMember, setMemberData, setLoadingData, setDataError, setMemberDetailData,
} from './Actions';

const MEMBERURL = 'http://127.0.0.1:3000/users';

export const postMember = (member, userid, groupId) => (dispatch) => {
  dispatch(setLoadingData());
  const config = {
    headers: {
      'content-type': 'multipart/formData',
    },
  };
  axios.post(`${MEMBERURL}/${userid}/groups/${groupId}/members`, member, config)
    .then((res) => {
      console.log('Expecting res', res);
      dispatch(addMember(res));
    }).catch((error) => {
      console.log('Catch error', error);
    });
};

const GETMEMBER = 'http://127.0.0.1:3000/members';
export const GetAllMembers = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(GETMEMBER)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setMemberData(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};

const DELMEMBER = 'http://127.0.0.1:3000/users';
export const DeleteMember = (userid, groupId, memberid) => (dispatch) => {
  axios.delete(`${DELMEMBER}/${userid}/groups/${groupId}/members/${memberid}`)
    .then((response) => {
      dispatch(removeMember(response));
    });
};

const GETMEMBERDetail = 'http://127.0.0.1:3000/members';

export const GetMemberDetail = (id) => (dispatch) => {
  dispatch(setLoadingData());
  fetch(`${GETMEMBERDetail}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setMemberDetailData(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};
