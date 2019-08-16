import { AUTH } from '../../Actions/Auth/actionAuth';


let InitialState = {
  loading: false,
  isAuth: false,
};


const authReducer = (state = InitialState, action) => {
  switch(action.type) {
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      };
    case AUTH.IS_AUTH_INIT:
      return {
        ...state,
        isAuth: true
      };
    case AUTH.LOG_OUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};

export default authReducer;