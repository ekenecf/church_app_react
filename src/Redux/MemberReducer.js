import ActionTypes from './ActionTypes';

const initialState = {
  members: [],
  loading: false,
  error: false,
  memberDetail: [],
};

const MemberDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.FETCH_MEMBER_DATA:
      return {
        ...state, members: payload, loading: false,
      };
    case ActionTypes.FETCH_MEMBER_DETAILS:
      console.log(state);
      return {
        ...state, memberDetail: payload,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default MemberDataReducer;
