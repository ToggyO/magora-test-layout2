import * as axios from 'axios';
import { REQUEST_ULR, KEYWORD, ERROR_CODES } from '../../../Constants';
import { getFromLocalState, writeToLocalState } from '../../../Libs/localStorage';
import { errorWrapperTrue } from '../error/actionError';
import { updateUIWithUsersInfo } from '../Auth/actionAuth';
// import { modalOpen } from '../modal/actionModal';
import { refreshTokenData, responseError } from '../../../Libs/HelperFunctions';
// import history from '../../../history';


/* eslint-disable */
export const USER_PROFILE = {
  REQUEST_USER: 'REQUEST_USER',
  RECEIVE_USER: 'RECEIVE_USER',
  REQUEST_USER_FAILURE: 'REQUEST_USER_FAILURE',
  STATE_PROFILE_CLEANING: 'STATE_PROFILE_CLEANING',
  PROFILE_ERROR_CLEANING: 'PROFILE_ERROR_CLEANING',
  USER_PROFILE_EDIT: 'USER_PROFILE_EDIT',
  PROFILE_LOADER_FALSE: 'PROFILE_LOADER_FALSE',
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


export const stateProfileCleaning = () => ({
  type: USER_PROFILE.STATE_PROFILE_CLEANING,
});


const profileLoaderFalse = () => ({
  type: USER_PROFILE.PROFILE_LOADER_FALSE,
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
    const URL = `${REQUEST_ULR.CORS_BASE_URL}/profiles/me`;
    const tokenData = getFromLocalState('TOKEN_INFO');
    refreshTokenData(tokenData);

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
          dispatch(updateUIWithUsersInfo(data.data));
          writeToLocalState('USER_INFO', data.data);
        }
      })
      .catch(error => {
        if (!error) {
          return null;
        }
        dispatch(errorWrapperTrue());
      });
  }
);


export const putUserData = (body) => (
  dispatch => {
    dispatch(requestUserById());

    const parseAddress = body.address.replace(/\s/g, '');
    const parseAddressToLocation = parseAddress.split(',');

    const requestBody = {
      resourceId: null,
      ageBracketsId: null,
      location: {
        areaName: parseAddressToLocation[0],
        stateName: parseAddressToLocation[1],
        stateAbbreviation: parseAddressToLocation[2],
        // areaName: '7-9 Fullerton Street',
        // stateName: 'Woollahra', New South Wales
        // stateAbbreviation: 'NSW',
      },
      firstName: body.firstName,
      lastName: body.lastName,
      address: parseAddress,
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

    const URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.USERS}`;
    const tokenData = getFromLocalState('TOKEN_INFO');
    refreshTokenData(tokenData);

    return axios
      .put(URL, requestBody, {
        headers: {
          Authorization: `Bearer ${getFromLocalState('TOKEN_INFO').accessToken}`,
        },
      })
      .then(res => {
        const { data = {} } = res;
        if (data && data.code === 'success') {
          console.log('Successfully updated');
          dispatch(getUserDataProfileForEdit(KEYWORD.EDIT_INFO));
          dispatch(profileLoaderFalse());
        }
      })
      .catch(error => {
        if (!error) {
          return null;
        }
        dispatch(profileLoaderFalse());
        return dispatch(responseError(error.response, ERROR_CODES));
      });
  }
);

// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/ideas
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/engagements
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/events
// https://dev.tribus.org/api/v0.7/users/06d56750-643a-425a-8c80-ed325e21e33f/engagements?Page=2&PageSize=9
