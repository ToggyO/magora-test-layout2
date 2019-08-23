import * as axios from "axios";
import { SubmissionError } from 'redux-form';
import {modalClose, modalOpen} from "../modal/actionModal";
import {reset} from 'redux-form';
import {REQUEST_ULR} from "../../../Constants";
import {writeToLocalState} from "../../../Libs/localStorage";


export const AUTH = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  IS_AUTH_INIT: 'IS_AUTH_INIT',
  LOG_OUT: 'LOG_OUT',
  REG_REQUEST: 'REG_REQUEST',
  REG_RESPONSE: 'REG_RESPONSE',
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


const regLoaderTrue = () => {
  return {
    type: AUTH.REG_REQUEST,
  }
};


const regLoaderFalse = () => {
  return {
    type: AUTH.REG_RESPONSE,
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

    return axios.post(`${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.AUTH_TOKEN}`, requestBody,
    )
      .then(res => {
        if (res.data.code === 'success'){
          dispatch(loginSuccess());
          dispatch(modalClose());

          const { data = {} } = res.data;
          const { authInfo = {}, ...tokensInfo} = data;

          writeToLocalState('TOKEN_INFO', tokensInfo);
          writeToLocalState('USER_INFO', authInfo.profile);
        }
      })
      .catch( error => {
        dispatch(loginFailure());
        debugger;
        const errorCodes = {
          'sec.invalid_auth_data': `User doesn't exist or password is wrong`,
          'sec.login_should_be_confirmed': 'Please confirm your account',
          'sec.user_blocked': 'Your account is blocked',
        };

        const { data = {} } = error.response;
        const { errors = {} } = data;

        let errorObj = {};
        errors.forEach(item => {
          if (item.field) {
            let firstLetterToLowerCase = `${item.field[0].toLowerCase()}${item.field.slice(1)}`;
            errorObj[firstLetterToLowerCase] = errorCodes[item.code];
          } else if(errorCodes[item.code]) {
            errorObj._error = errorCodes[item.code];
          } else {
            errorObj._error = item.message;
          }
        });
      throw new SubmissionError(errorObj);
    })
  }
};


export const regRequest = (values) => {
  return (dispatch) => {
    dispatch(regLoaderTrue());

    let requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      password: values.password,
      // phone: '001174951234567',
      organizationName: values.communityName ? values.communityName : '',
      location: {
        areaName: "7-9 Fullerton Street",
        stateName: "Woollahra",
        stateAbbreviation: "NSW"
      },
      verifyInfo: {
        returnUrl: "/"
      },
      role: values.role
    };

    return axios.post(`${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.USERS}`, requestBody)
      .then(res => {
        if (res.data.code === 'success') {
          dispatch(reset('registration'));
          dispatch(regLoaderFalse());
          dispatch(modalOpen('regSuccess'));
        }
      })
      .catch( error => {
        // debugger;
        if (!error) {
          return null;
        }

        dispatch(regLoaderFalse());
        const errorCodes = {
          'common.field_min': `Field has symbols less than needed`,
          'common.field_max': ' Field can’t be empty',
          'common.field_phone': 'Field has symbols more than needed',
          'common.field_not_null': 'Field can’n be null',
          'common.field_not_blank': 'Field can’t be empty',
        };

        const { data = {} } = error.response;
        const { errors = {} } = data;

        let errorObj = {};
        errors.forEach(item => {
          if (item.field) {
            let firstLetterToLowerCase = `${item.field[0].toLowerCase()}${item.field.slice(1)}`;
            errorObj[firstLetterToLowerCase] = errorCodes[item.code];
          } else if(errorCodes[item.code]) {
            errorObj._error = errorCodes[item.code];
          } else {
            errorObj._error = item.message;
          }
        });
        throw new SubmissionError(errorObj);
      });
  }


};





//  if(item.field === null) {
//    return errorObj._error = errorCodes.INVALID_AUTH_DATA;
//  } else {
//  debugger;
//    let firstLetterToLowerCase = `${item.field[0].toLowerCase()}${item.field.slice(1)}`;
//    return errorObj[firstLetterToLowerCase]= `${item.field} invalid`;
//  }
// });
// console.log(errorObj);



// throw new SubmissionError({
//   _error: error.response.data.message ,
//   email: "User doesn't exist or password is wrong",
//   password: "User doesn't exist or password is wrong"
// });
