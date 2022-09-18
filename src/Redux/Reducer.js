import ActionTypes from './ActionTypes';

const initialState = {
  users: [],
  loading: false,
  error: false,
  response: '',
};

const UserDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.USER_LOGIN:
      return {
        ...state, response: payload,
      };
    case ActionTypes.GET_USER:
      return {
        ...state, users: payload, loading: false,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default UserDataReducer;
