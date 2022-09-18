import ActionTypes from './ActionTypes';

export const setLoadingData = () => ({
  type: ActionTypes.FETCH_DATA_LOADING,
});

export const setDataError = (error) => ({
  type: ActionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const setEventData = (data) => ({
  type: ActionTypes.FETCH_EVENT_DATA,
  payload: data,
});

export const setMemberData = (data) => ({
  type: ActionTypes.FETCH_MEMBER_DATA,
  payload: data,
});

export const setMemberDetailData = (data) => ({
  type: ActionTypes.FETCH_MEMBER_DETAILS,
  payload: data,
});

export const setUserDetailData = (data) => ({
  type: ActionTypes.FETCH_USER_DETAIL,
  payload: data,
});

export const sortData = (data) => ({
  type: ActionTypes.SORT_DATA,
  payload: data,
});

export const addMember = (data) => ({
  type: ActionTypes.ADD_MEMBER,
  payload: data,
});

export const removeMember = (data) => ({
  type: ActionTypes.REMOVE_MEMBER,
  payload: data,
});

export const addEvent = (data) => ({
  type: ActionTypes.ADD_EVENT,
  payload: data,
});

export const addGroup = (data) => ({
  type: ActionTypes.ADD_GROUP,
  payload: data,
});

export const removeGroup = (id) => ({
  type: ActionTypes.REMOVE_GROUP,
  payload: id,
});

export const allGroups = (data) => ({
  type: ActionTypes.ALL_GROUPS,
  payload: data,
});

export const createUser = (data) => ({
  type: ActionTypes.CREATE_USER,
  payload: data,
});

export const GetUser = (data) => ({
  type: ActionTypes.GET_USER,
  payload: data,
});

export const GetUserLogin = (data) => ({
  type: ActionTypes.USER_LOGIN,
  payload: data,
});
