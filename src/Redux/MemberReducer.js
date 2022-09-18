import ActionTypes from './ActionTypes';

const initialState = {
  members: [],
  loading: false,
  error: false,
  memberDetail: [],
  // groupId: [],
};

const MemberDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.FETCH_MEMBER_DATA:
      console.log(state);
      return {
        ...state, groups: payload, loading: false,
      };
    case ActionTypes.REMOVE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== payload),
        loading: false,
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
