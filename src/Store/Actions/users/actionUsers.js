import * as axios from 'axios';
// import { SubmissionError } from 'redux-form';
import { REQUEST_ULR, KEYWORD } from '../../../Constants';
import { getFromLocalState } from '../../../Libs/localStorage';
import { errorWrapperTrue } from '../error/actionError';


export const USER_PROFILE = {
  REQUEST_USER: 'REQUEST_USER',
  RECEIVE_USER: 'RECEIVE_USER',
  REQUEST_USER_FAILURE: 'REQUEST_USER_FAILURE',
  STATE_PROFILE_CLEANING: 'STATE_PROFILE_CLEANING',
  PROFILE_ERROR_CLEANING: 'PROFILE_ERROR_CLEANING',
  USER_PROFILE_EDIT: 'USER_PROFILE_EDIT',
};


const requestUserById = () => ({
  type: USER_PROFILE.REQUEST_USER,
});


const receiveUserById = (data, key) => ({
  type: USER_PROFILE.RECEIVE_USER,
  payload: {
    data,
    key,
  },
});


// const requestUserFailure = () => ({
//   type: USER_PROFILE.REQUEST_USER_FAILURE,
// });


export const stateProfileCleaning = () => ({
  type: USER_PROFILE.STATE_PROFILE_CLEANING,
});


export const profileErrorCleaning = () => ({
  type: USER_PROFILE.PROFILE_ERROR_CLEANING,
});


export const getUserDataProfile = (userId, path, projectType, pathname, queries) => (
  dispatch => {
    // dispatch(requestUserById());

    const URL = `${REQUEST_ULR.CORS_BASE_URL}/${path}/${userId}${projectType && projectType !== KEYWORD.ABOUT ? `/${projectType}?PageSize=9&Page=${pathname === projectType ? queries.page || 1 : 1}` : ''}`;
    const token = getFromLocalState('TOKEN_INFO') && getFromLocalState('TOKEN_INFO').accessToken;

    return axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        const { data = {} } = res;
        if (data && data.code === 'success') {
          dispatch(receiveUserById(data.data, projectType || KEYWORD.USER_INFO));
        }
      })
      .catch(() => {
        dispatch(errorWrapperTrue());
      });
  }
);


export const getUserDataProfileForEdit = (key) => (
  dispatch => {
    // dispatch(requestUserById());

    const URL = `${REQUEST_ULR.CORS_BASE_URL}/profiles/me`;

    return axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${getFromLocalState('TOKEN_INFO').accessToken}`,
        },
      })
      .then(res => {
        const { data = {} } = res;
        if (data && data.code === 'success') {
          dispatch(receiveUserById(data.data, key));
        }
      })
      .catch(() => {
        dispatch(errorWrapperTrue());
      });
  }
);

/* eslint-disable */
export const putUserData = (body) => (
  dispatch => {
    dispatch(requestUserById());

    // const parseAddress = body.address.split(',');
    const requestBody = {
      resourceId: null,
      ageBracketsId: null,
      location: {
        areaName: '7-9 Fullerton Street',
        stateName: 'Woollahra',
        stateAbbreviation: 'NSW',
      },
      firstName: body.firstName,
      lastName: body.lastName,
      address: body.address,
      email: body.email,
      phone: body.phone,
      website: null,
      facebookLink: null,
      googlePlusLink: null,
      instagramLink: null,
      linkedInLink: null,
      pinterestLink: null,
      twitterLink: null,
      youTubeLink: null,
      about: null,
      organizationName: null,
    };
    // console.log(requestBody);

    const URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.USERS}`;
    const token = getFromLocalState('TOKEN_INFO').accessToken;

    return axios
      .put(URL, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        const { data = {} } = res;
        if (data && data.code === 'success') {
          console.log('Successfully updated');
          console.log(res);
        }
      })
      .catch(error => {
        console.log(error);
        //   if (!error) {
      //     return null;
      //   }
      //
      //   // dispatch(regLoaderFalse());
      //   const errorCodes = {
      //     'common.field_min': 'Field has symbols less than needed',
      //     'common.field_max': ' Field can’t be empty',
      //     'common.field_phone': 'Field has symbols more than needed',
      //     'common.field_not_null': 'Field can’n be null',
      //     'common.field_not_blank': 'Field can’t be empty',
      //   };
      //
      //   const { data = {} } = error.response;
      //   const { errors = {} } = data;
      //
      //   const errorObj = {};
      //   errors.forEach(item => {
      //     if (item.field) {
      //       const firstLetterToLowerCase = `${item.field[0].toLowerCase()}${item.field.slice(1)}`;
      //       errorObj[firstLetterToLowerCase] = errorCodes[item.code];
      //     } else if (errorCodes[item.code]) {
      //       errorObj._error = errorCodes[item.code];
      //     } else {
      //       errorObj._error = item.message;
      //     }
      //   });
      //   throw new SubmissionError(errorObj);
      });
  }
);

// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/ideas
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/engagements
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/events
// https://dev.tribus.org/api/v0.7/users/06d56750-643a-425a-8c80-ed325e21e33f/engagements?Page=2&PageSize=9
