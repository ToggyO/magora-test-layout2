import {REQUEST_ULR} from "../../../Constants";
import * as axios from "axios";
import {getFromLocalState} from "../../../Libs/localStorage";
import {KEYWORD} from "../../../Constants";


export const USER_PROFILE = {
  REQUEST_USER: 'REQUEST_USER',
  RECEIVE_USER: 'RECEIVE_USER',
  REQUEST_USER_FAILURE: 'REQUEST_USER_FAILURE',
  STATE_PROFILE_CLEANING: 'STATE_PROFILE_CLEANING',
};


const requestUserById = () => {
  return {
    type: USER_PROFILE.REQUEST_USER
  }
};


const receiveUserById = (data, key) => {
  return {
    type: USER_PROFILE.RECEIVE_USER,
    payload: {
      data,
      key
    }
  }
};


const requestUserFailure = () => {
  return {
    type: USER_PROFILE.REQUEST_USER_FAILURE
  }
};


export const stateProfileCleaning = () => {
  return {
    type: USER_PROFILE.STATE_PROFILE_CLEANING
  }
};


export const getUserDataProfile = (userId, projectType, data, queries) => {
  return dispatch => {
    dispatch(requestUserById());

    let URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.USERS}/${userId}${projectType && queries.tab !== KEYWORD.ABOUT ? `/${queries.tab || projectType}?PageSize=9&Page=${queries.page || 1}` : ''}`;

    return axios
      .get( URL,{
        headers: {
          Authorization: "Bearer " + getFromLocalState('TOKEN_INFO')
        }
      })
      .then(res => {

        const { data = {} } = res;
        if (data && data.code === 'success') {
          dispatch(receiveUserById(data.data, projectType || KEYWORD.USER_INFO));
        }
      })
      .catch(() => {
        dispatch(requestUserFailure());
      })
  }
};


// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/ideas
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/engagements
// https://dev.tribus.org/api/v0.7/users/fefa53cb-faf0-4d6d-b0c2-84001c077efb/events
// https://dev.tribus.org/api/v0.7/users/06d56750-643a-425a-8c80-ed325e21e33f/engagements?Page=2&PageSize=9