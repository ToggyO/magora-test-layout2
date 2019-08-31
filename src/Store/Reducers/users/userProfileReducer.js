import { USER_PROFILE } from '../../Actions/users/actionUsers';

const InitialState = {
  userInfo: {},
  ideas: {},
  engagements: {},
  events: {},
  loading: false,
  editInfo: {},
};


const userProfileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case USER_PROFILE.REQUEST_USER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_PROFILE.RECEIVE_USER:
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
        error: true,
      };
    case USER_PROFILE.STATE_PROFILE_CLEANING:
      return {
        ...InitialState,
      };
    case USER_PROFILE.PROFILE_ERROR_CLEANING:
      return {
        ...state,
        error: false,
      };
    case USER_PROFILE.PROFILE_LOADER_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
