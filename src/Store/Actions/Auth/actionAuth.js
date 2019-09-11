import { reset } from 'redux-form';
import { modalClose, modalOpen } from '../modal/actionModal';
import { ERROR_CODES, REQUEST_ULR } from '../../../Constants';
import { writeToLocalState } from '../../../Libs/localStorage';
/* eslint-disable import/no-cycle */
import { responseError } from '../../../Libs/HelperFunctions';
import { instance } from '../../../Libs/axiosClient';
/* eslint-enable import/no-cycle */


export const AUTH = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  IS_AUTH_INIT: 'IS_AUTH_INIT',
  LOG_OUT: 'LOG_OUT',
  REG_REQUEST: 'REG_REQUEST',
  REG_RESPONSE: 'REG_RESPONSE',
  UPDATE_USERS_INFO: 'UPDATE_USERS_INFO',
};


const loginRequest = () => ({
  type: AUTH.LOGIN_REQUEST,
});


const loginSuccess = (tokens, user) => ({
  type: AUTH.LOGIN_SUCCESS,
  payload: {
    tokens,
    user,
  },
});


const loginFailure = () => ({
  type: AUTH.LOGIN_FAILURE,
});


export const isAuthInit = (tokens, user) => ({
  type: AUTH.IS_AUTH_INIT,
  payload: {
    tokens,
    user,
  },
});


export const logOut = () => ({
  type: AUTH.LOG_OUT,
});


const regLoaderTrue = () => ({
  type: AUTH.REG_REQUEST,
});


const regLoaderFalse = () => ({
  type: AUTH.REG_RESPONSE,
});


export const updateUIWithUsersInfo = (payload) => ({
  type: AUTH.UPDATE_USERS_INFO,
  payload,
});


/* eslint-disable */
export const authRequest = (values) => (
  (dispatch) => {
    dispatch(loginRequest());

    const requestBody = {
      login: values.email,
      password: values.password,
      meta: {
        deviceId: 'string',
        versionApp: 'string',
        platform: 'string',
      },
    };

    return instance.post(`/${REQUEST_ULR.AUTH_TOKEN}`, requestBody)
      .then(res => {
        if (res.code === 'success') {
          dispatch(modalClose());

          const { data = {} } = res;
          const { authInfo = {}, ...tokensInfo } = data;

          writeToLocalState('TOKEN_INFO', tokensInfo);
          writeToLocalState('USER_INFO', authInfo.profile);
          dispatch(loginSuccess(tokensInfo, authInfo.profile));
        }
      })
      .catch(error => {
        dispatch(loginFailure());
        dispatch(responseError(error, ERROR_CODES));
      });
  }
);


export const regRequest = (values) => (
  (dispatch) => {
    dispatch(regLoaderTrue());

    const requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      password: values.password,
      // phone: '001174951234567',
      organizationName: values.communityName ? values.communityName : '',
      location: {
        areaName: '7-9 Fullerton Street',
        stateName: 'Woollahra',
        stateAbbreviation: 'NSW',
      },
      verifyInfo: {
        returnUrl: '/',
      },
      role: values.role,
    };

    return instance.post(`/${REQUEST_ULR.USERS}`, requestBody)
      .then(res => {
        if (res.code === 'success') {
          dispatch(reset('registration'));
          dispatch(regLoaderFalse());
          dispatch(modalOpen('regSuccess'));
        }
      })
      .catch(error => {
        if (!error) {
          return null;
        }

        dispatch(regLoaderFalse());
        dispatch(responseError(error, ERROR_CODES));
      });
  }
);


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
//   email: 'User doesn't exist or password is wrong',
//   password: 'User doesn't exist or password is wrong'
// });


// export const authRequest = (values) => (
//   (dispatch) => {
//     dispatch(loginRequest());
//
//     const requestBody = {
//       login: values.email,
//       password: values.password,
//       meta: {
//         deviceId: 'string',
//         versionApp: 'string',
//         platform: 'string',
//       },
//     };
//
//     return instance.post(`/${REQUEST_ULR.AUTH_TOKEN}`, requestBody)
//       .then(res => {
//         if (res.code === 'success') {
//           dispatch(modalClose());
//
//           const { data = {} } = res;
//           const { authInfo = {}, ...tokensInfo } = data;
//
//           writeToLocalState('TOKEN_INFO', tokensInfo);
//           writeToLocalState('USER_INFO', authInfo.profile);
//           dispatch(loginSuccess(tokensInfo, authInfo.profile));
//         }
//       })
//       .catch(error => {
//         dispatch(loginFailure());
//         dispatch(responseError(error, ERROR_CODES));
//       });
//   }
// );
//
//
// export const regRequest = (values) => (
//   (dispatch) => {
//     dispatch(regLoaderTrue());
//
//     const requestBody = {
//       firstName: values.firstName,
//       lastName: values.lastName,
//       address: values.address,
//       email: values.email,
//       password: values.password,
//       // phone: '001174951234567',
//       organizationName: values.communityName ? values.communityName : '',
//       location: {
//         areaName: '7-9 Fullerton Street',
//         stateName: 'Woollahra',
//         stateAbbreviation: 'NSW',
//       },
//       verifyInfo: {
//         returnUrl: '/',
//       },
//       role: values.role,
//     };
//
//     return instance.post(`/${REQUEST_ULR.USERS}`, requestBody)
//       .then(res => {
//         if (res.code === 'success') {
//           dispatch(reset('registration'));
//           dispatch(regLoaderFalse());
//           dispatch(modalOpen('regSuccess'));
//         }
//       })
//       .catch(error => {
//         if (!error) {
//           return null;
//         }
//
//         dispatch(regLoaderFalse());
//         dispatch(responseError(error, ERROR_CODES));
//       });
//   }
// );