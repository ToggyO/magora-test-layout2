import {REQUEST_ULR} from "../../../Constants/endpoints";
import * as axios from "axios";
import {getFromLocalState} from "../../../Libs/localStorage";


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


const receiveUserById = (data) => {
  return {
    type: USER_PROFILE.RECEIVE_USER,
    payload: data,
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


export const getUserProfile = (userId) => {
  return dispatch => {
    dispatch(requestUserById());

    return axios.get(`${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.USERS}/${userId}`,{
        headers: {
          Authorization: "Bearer " + getFromLocalState('TOKEN_INFO')
        }
      })
      .then(res => {

        const { data = {} } = res;
        if (data && data.code === 'success') {
          dispatch(receiveUserById(data.data));
        }
      })
      .catch(() => {
        dispatch(requestUserFailure());

      })
  }
};



// https://dev.tribus.org/api/v0.7/users/1e2d1cce-42a8-48fe-a59d-084f387b09ac