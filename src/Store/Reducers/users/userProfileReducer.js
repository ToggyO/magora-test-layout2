import { USER_PROFILE } from '../../Actions/users/users';

let InitialState = {
  userInfo: {},
  projects: [],
  grants: [],
  events: [],
  loading: false,
  isUserData: false,
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
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isUserData: true,
      };
    case USER_PROFILE.REQUEST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    case USER_PROFILE.STATE_PROFILE_CLEANING:
      return {
        userInfo: {},
        projects: [],
        grants: [],
        events: [],
        loading: false,
        isUserData: false,
        error: false
      };
    default:
      return state;
  }
};

export default userProfileReducer;
