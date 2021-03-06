import { AUTH } from '../../Actions/Auth/actionAuth';


const InitialState = {
  authLoader: false,
  regLoader: false,
  isAuth: false,
  me: {},
  tokens: {},
};


const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        authLoader: true,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        authLoader: false,
        isAuth: true,
        me: action.payload.user,
        tokens: action.payload.tokens,
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        authLoader: false,
      };
    case AUTH.IS_AUTH_INIT:
      return {
        ...state,
        isAuth: true,
        me: action.payload.user,
        tokens: action.payload.tokens,
      };
    case AUTH.LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };
    case AUTH.REG_REQUEST:
      return {
        ...state,
        regLoader: true,
      };
    case AUTH.REG_RESPONSE:
      return {
        ...state,
        regLoader: false,
      };
    case AUTH.UPDATE_USERS_INFO:
      return {
        ...state,
        me: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
