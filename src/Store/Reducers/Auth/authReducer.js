import { AUTH } from '../../Actions/Auth/actionAuth';


let InitialState = {
  authLoader: false,
  regLoader: false,
  isAuth: false,
};


const authReducer = (state = InitialState, action) => {
  switch(action.type) {
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        authLoader: true
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        authLoader: false,
        isAuth: true
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        authLoader: false
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
    case AUTH.REG_REQUEST:
      return {
        ...state,
        regLoader: true
      };
    case AUTH.REG_RESPONSE:
      return {
        ...state,
        regLoader: false
      };
    default:
      return state;
  }
};

export default authReducer;
