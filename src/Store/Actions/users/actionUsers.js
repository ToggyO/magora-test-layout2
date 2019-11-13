import axios from 'axios';
import { instance } from '../../../Libs/axiosClient';
import { REQUEST_ULR, KEYWORD, ERROR_CODES } from '../../../Constants';
import { writeToLocalState } from '../../../Libs/localStorage';
import { errorWrapperTrue } from '../error/actionError';
import { updateUIWithUsersInfo } from '../Auth/actionAuth';
import { responseError } from '../../../Libs/HelperFunctions';
import { modalClose } from '../modal/actionModal';


/* eslint-disable */
export const USER_PROFILE = {
  REQUEST_USER: 'REQUEST_USER',
  RECEIVE_USER: 'RECEIVE_USER',
  REQUEST_USER_FAILURE: 'REQUEST_USER_FAILURE',
  STATE_PROFILE_CLEANING: 'STATE_PROFILE_CLEANING',
  PROFILE_ERROR_CLEANING: 'PROFILE_ERROR_CLEANING',
  USER_PROFILE_EDIT: 'USER_PROFILE_EDIT',
  PROFILE_LOADER_FALSE: 'PROFILE_LOADER_FALSE',
  UPDATE_USER_AVATAR: 'UPDATE_USER_AVATAR',
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


const updateUserAvatar = (payload) => ({
  type: USER_PROFILE.UPDATE_USER_AVATAR,
  payload,
});


export const getUserDataProfile = (userId, path, projectType, pathname, queries) => (
  dispatch => {
    dispatch(requestUserById());
    const URL = `/${path}/${userId}${projectType && projectType !== KEYWORD.ABOUT ? `/${projectType}?PageSize=9&Page=${pathname === projectType ? queries.page || 1 : 1}` : ''}`;

    return instance
      .get(URL)
      .then(res => {
        const {data = {}} = res;
        if (data && res.code === 'success') {
          dispatch(receiveUserById(data, projectType || KEYWORD.USER_INFO));
        }
      })
      .catch(() => {
        dispatch(errorWrapperTrue());
      });
  }
);


export const getUserDataProfileForEdit = (key) => (
  dispatch => {
    const URL = `/${REQUEST_ULR.PROFILES}/me`;

    return instance
      .get(URL, {
        headers: {
          isAuth: true
        }
      })
      .then(res => {
        const { data = {} } = res;

        dispatch(receiveUserById(data, key));
        dispatch(updateUIWithUsersInfo(data));

        writeToLocalState('USER_INFO', data);
      })
      .catch(error => {
        if (!error) {
          return null;
        }

        dispatch(errorWrapperTrue());
      })
  }
);


export const putUserData = (body) => (
  dispatch => {
    dispatch(requestUserById());

    const parseAddress = body.address.replace(/\s/g, '');
    const parseAddressToLocation = parseAddress.split(',');

    const requestBody = {
      resourceId: body.resourceId || null,
      ageBracketsId: null,
      location: {
        areaName: parseAddressToLocation[0],
        stateName: parseAddressToLocation[1],
        stateAbbreviation: parseAddressToLocation[2],
        // areaName: '7-9 Fullerton Street',
        // stateName: 'Woollahra', New South Wales
        // stateAbbreviation: 'NSW',
      },
      firstName: body.firstName || null,
      lastName: body.lastName || null,
      address: parseAddress || null,
      email: body.email || null,
      phone: body.phone || null,
      website: body.website || null,
      facebookLink: body.facebookLink || null,
      googlePlusLink: body.googlePlusLink || null,
      instagramLink: body.instagramLink || null,
      linkedInLink: body.linkedInLink || null,
      pinterestLink: body.pinterestLink || null,
      twitterLink: body.twitterLink || null,
      youTubeLink: body.youTubeLink || null,
      about: body.about || null,
      organizationName: null,
    };

    const URL = `/${REQUEST_ULR.USERS}`;

    return instance
      .put(URL, requestBody, {
        headers: {
          isAuth: true
        }
      })
      .then(res => {
        const {data = {}} = res;
        if (data && res.code === 'success') {
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
        return dispatch(responseError(error, ERROR_CODES));
      });
  }
);


export const createResourceId = (file) => (
  async dispatch => {
    dispatch(requestUserById());
    const URL = `/${REQUEST_ULR.RESOURCES}`;

    try {
      const res = await instance.post(URL, {
          contentType: 'image/png'
        },
        {
          headers: {
            isAuth: true
          }
        });
      const { data = {} } = res;
      await imageUrlToAmazon(data.url, file);
      await dispatch(updateUserAvatar(data.id));
      await dispatch(profileLoaderFalse());
    } catch (e) {
      dispatch(errorWrapperTrue());
      dispatch(modalClose());
    }
  }
);


const imageUrlToAmazon = (url, file) => {
  return axios
    .put(url, file, {
      headers: {
        'Content-type': 'image/png'
      }
    })
    // .then(() => console.log('Successfully loaded'))
    // .catch(() => console.log('Load failed'))
};


// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/ideas
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/engagements
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/events
// https://dev.tribus.org/api/v0.7/users/06d56750-643a-425a-8c80-ed325e21e33f/engagements?Page=2&PageSize=9
