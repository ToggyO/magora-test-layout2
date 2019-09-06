import axios from 'axios';
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
    // const tokenData = {
    //   accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4ODM5Qjc0Nzg5QURFNEYzNEQ4NjU0MjZCNzRCMzQ3OUU0N0EyREMiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbl9pZCI6IjhmZGYzMTIxNGRkMDRkOGJiYTI1ZThlMWQzYzY1NTQ5IiwidXNlcl9pZCI6IjllMzQ2NTgxOGRiNTQ2NTJhNmE5MGNhYzE3Y2ZmOTFjIiwicGVybWlzc2lvbnMiOiJJZGVhQ3JlYXRlLElkZWFTdXBwb3J0LExvY2F0aW9uVXBkYXRlLEdyYW50QXBwbHkiLCJleHAiOjE1NjczOTc5NjIsImlzcyI6Imh0dHA6Ly9kZXYudHJpYnVzLm9yZy9hcGkiLCJhdWQiOiJodHRwOi8vZGV2LnRyaWJ1cy5vcmcifQ.QKvb-J-O0l1V5wiL2164T3qYvPVICkMPC0D1DPnCNJgrTM-FZCGiyoYq6cLKuyWdB_nX1FXCJTJfwFAGSNEJt-9co7gkzL_-rwJcrboNMhdxMDQg8YaYCWW79TmEDiAf39ys1MbiFNYoSgyBQ6oiUYIKEWYbu-deD-xLF-qzR7cqM9ru_0Kxz-gMx4w6YGLs_hcUlJf2yHwkH-ezQlAi6AEvYzN_ZVq79qTS9fAZ6F7oR4959sKXnEbX8Ed2E3JfvC7qxOwTqHR28clhxpqU1ujI8pdUJKnh3waZZCseuwXNKhL0PhLJonYy2TmWG45UPAyRt13IxcwQ6skAKBgwIw",
    //   accessTokenExpire:"2019-09-02T04:19:22.3366904Z",
    //   refreshToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4ODM5Qjc0Nzg5QURFNEYzNEQ4NjU0MjZCNzRCMzQ3OUU0N0EyREMiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbl9pZCI6ImM0YWUwNWQ2OWE5MjQwOTNiMDk5Yjk2YWY2NTVjNjE3IiwidXNlcl9pZCI6IjllMzQ2NTgxOGRiNTQ2NTJhNmE5MGNhYzE3Y2ZmOTFjIiwiZXhwIjoxNTY5OTg2MzYyLCJpc3MiOiJodHRwOi8vZGV2LnRyaWJ1cy5vcmcvYXBpIiwiYXVkIjoiaHR0cDovL2Rldi50cmlidXMub3JnIn0.L5XwBUq-ycAnarmsu3nK6byoBC_M0ruUJtp4xX1R4Jcn-L-IE8MX8vPEg-ePqS1jz_2jEPTYbXLzIngkFuq0d1lGDmk66AWVXPsPiGJ7v6s7FZM-Zcq0_kByrAT54UWuiUJpiDCF8Lz8IbfoHndtzFBlO-9XdNV-2wHGnC_FvvBja_wxh2YxXUNscRRJGLFpUcRaRSomjUIcuSdd99ul2Rr6Ci-TRmX5P_YIf9RDv9Q_hFRdTEVePlBlP1YdAFw2fzY38k-6j38_cYWnmwXZyPwd47uyIqv6c3ixQ-Wv1ruR44VhUQZ5IG9voPWqV0mvxd8FvfNrJ-smE4r_-M-uQQ"
    // };
    const tokenData = getFromLocalState('TOKEN_INFO');

    return refreshTokenData(tokenData).then(tokenData => {
        axios
          .get(URL, {
            headers: {
              Authorization: `Bearer ${tokenData.accessToken}`,
            },
          })
          .then(res => {
            const {data = {}} = res;
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
          })
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

    const URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.USERS}`;
    // const tokenData = getFromLocalState('TOKEN_INFO');
    // refreshTokenData(tokenData);

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


export const createResourceId = (file) => (
  dispatch => {
    dispatch(requestUserById());
    const URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.RESOURCES}`;
    const tokenData = getFromLocalState('TOKEN_INFO');

    return refreshTokenData(tokenData).then(tokenData => {
      axios
        .post(URL, {
          contentType: 'image/png'
        },
      {
        headers: {
          Authorization: `Bearer ${tokenData.accessToken}`,
        }
      })
        .then(res => {
          const { data = {} } = res;
          if (data && data.code === 'success') {
            imageUrlToAmazon(data.data.url, file)
              .then(() => dispatch(profileLoaderFalse()));
            return data.data.id;
          }
        })
        .then(resourceId => dispatch(updateUserAvatar(resourceId)))
        .catch(error => console.log(error))
    })
  }
);


const imageUrlToAmazon = (url, file) => {
  return axios
    .put(url, file, {
      headers: {
        'Content-type': 'image/png'
      }
    })
    .then(() => console.log('Successfully loaded'))
    .catch(() => console.log('Load failed'))
};





// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/ideas
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/engagements
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/events
// https://dev.tribus.org/api/v0.7/users/06d56750-643a-425a-8c80-ed325e21e33f/engagements?Page=2&PageSize=9
