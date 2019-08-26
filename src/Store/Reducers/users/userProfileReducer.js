import { USER_PROFILE } from '../../Actions/users/actionUsers';

let InitialState = {
  userInfo: {},
  ideas: {},
  engagements: {},
  events: {},
  loading: false,
  error: false
};


const userProfileReducer = (state = InitialState, action) => {
  switch(action.type) {
    case USER_PROFILE.REQUEST_USER:
      return {
        ...state,
        loading: true,
        error: false
      };
    case USER_PROFILE.RECEIVE_USER:
      debugger;
      return {
        ...state,
        loading: false,
        [action.payload.key]: action.payload.data,
        // [`${action.payload.key}DataIs`]: true,
      };
    case USER_PROFILE.REQUEST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    case USER_PROFILE.STATE_PROFILE_CLEANING:
      return {
        ...InitialState
      };
    default:
      return state;
  }
};

export default userProfileReducer;
