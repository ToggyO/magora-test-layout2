import * as axios from "axios";

export const AUTH = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  IS_AUTH_INIT: 'IS_AUTH_INIT',
  LOG_OUT: 'LOG_OUT',
};


const loginRequest = () => {
  return {
    type: AUTH.LOGIN_REQUEST
  }
};


const loginSuccess = () => {
  return {
    type: AUTH.LOGIN_SUCCESS,
  }
};


const loginFailure = () => {
  return {
    type: AUTH.LOGIN_FAILURE,
  }
};


export const isAuthInit = () => {
  return {
    type: AUTH.IS_AUTH_INIT
  }
};


export const logOut = () => {
  return {
    type: AUTH.LOG_OUT
  }
};


export const authRequest = (values) => {

  return (dispatch) => {
    dispatch(loginRequest());

    let requestBody = {
      login: values.email,
      password: values.password,
      meta: {
        deviceId: "string",
        versionApp: "string",
        platform: "string"
      }
    };
    let BASE_URL = `http://localhost:3000/api/v0.7/auth/token`;

    return axios.post(BASE_URL, requestBody,
      // {
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // }
    )
      .then(res => {

        if (res.data.code === 'success'){
          dispatch(loginSuccess());

          let tokenInfo = JSON.stringify({
            accessToken: res.data.data.accessToken,
            accessTokenExpire: res.data.data.accessTokenExpire,
            refreshToken: res.data.data.refreshToken,
          });
          let userInfo = JSON.stringify(res.data.data.authInfo.profile);
          localStorage.setItem('TOKEN_INFO', tokenInfo);
          localStorage.setItem('USER_INFO', userInfo);

        } else {
          dispatch(loginFailure());
        }

      })
      .catch( error => console.log(error))
  }
};