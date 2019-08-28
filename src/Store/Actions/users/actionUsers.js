import * as axios from 'axios';
import { REQUEST_ULR, KEYWORD } from '../../../Constants';
import { getFromLocalState } from '../../../Libs/localStorage';


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


const requestUserFailure = () => ({
  type: USER_PROFILE.REQUEST_USER_FAILURE,
});


export const stateProfileCleaning = () => ({
  type: USER_PROFILE.STATE_PROFILE_CLEANING,
});


export const profileErrorCleaning = () => ({
  type: USER_PROFILE.PROFILE_ERROR_CLEANING,
});


export const userProfileEdit = (payload) => ({
  type: USER_PROFILE.USER_PROFILE_EDIT,
  payload,
});


export const getUserDataProfile = (userId, path, projectType, pathname, queries) => (
  dispatch => {
    dispatch(requestUserById());

    const URL = `${REQUEST_ULR.CORS_BASE_URL}/${path}/${userId}${projectType && projectType !== KEYWORD.ABOUT ? `/${projectType}?PageSize=9&Page=${pathname === projectType ? queries.page || 1 : 1}` : ''}`;

    return axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${getFromLocalState('TOKEN_INFO').accessToken}`,
        },
      })
      .then(res => {
        const { data = {} } = res;
        if (data && data.code === 'success') {
          dispatch(receiveUserById(data.data, projectType || KEYWORD.USER_INFO));
        }
      })
      .catch(() => {
        dispatch(requestUserFailure());
      });
  }
);


export const getUserDataProfileForEdit = (key) => (
  dispatch => {
    dispatch(requestUserById());

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
        dispatch(requestUserFailure());
      });
  }
);

// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/ideas
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/engagements
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/events
// https://dev.tribus.org/api/v0.7/users/06d56750-643a-425a-8c80-ed325e21e33f/engagements?Page=2&PageSize=9
