import * as axios from 'axios';
import { makeRequestString, mergeQueryUrlWithHistory } from '../../../Libs/additionalSortingFunctions';
import { REQUEST_ULR } from '../../../Constants';


export const FETCHED_PROJECTS_DATA = {
  REQUEST_PROJECTS: 'REQUEST_PROJECTS',
  RECEIVE_PROJECTS: 'RECEIVE_PROJECTS',
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES',
  SET_CURRENT_PAGES: 'SET_CURRENT_PAGE',
  PROJECT_SORT_CHECKBOX_VALUES: 'PROJECT_SORT_CHECKBOX_VALUES',
  DATA_CLEANING: 'DATA_CLEANING',
  DATE_PICK: 'DATE_PICK',
  PROJECT_ERROR_CLEANING: 'PROJECT_ERROR_CLEANING',
};

const requestData = () => ({
  type: FETCHED_PROJECTS_DATA.REQUEST_PROJECTS,
});


const receiveData = (projects) => ({
  type: FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS,
  payload: projects.data.data,
});


export const sortValues = (value, name) => ({
  type: FETCHED_PROJECTS_DATA.PROJECT_SORT_VALUES,
  payload: {
    value,
    name,
  },
});


export const projectsSortCheckboxValues = (name, value) => ({
  type: FETCHED_PROJECTS_DATA.PROJECT_SORT_CHECKBOX_VALUES,
  payload: {
    name,
    value,
  },
});


export const stateItemsCleaning = () => ({
  type: FETCHED_PROJECTS_DATA.DATA_CLEANING,
});


export const datePick = (date, name) => ({
  type: FETCHED_PROJECTS_DATA.DATE_PICK,
  payload: {
    date,
    name,
  },
});


export const projectErrorCleaning = () => ({
  type: FETCHED_PROJECTS_DATA.PROJECT_ERROR_CLEANING,
});


let lastKey;

export const getDataFromServer = (data, queries, projectType) => { // projectType
  // = ideas || grants || events

  const key = Math.random() * 100000;
  lastKey = key;

  return (dispatch) => {
    dispatch(requestData());

    const requestString = makeRequestString(mergeQueryUrlWithHistory(data, queries));

    const Url = `${REQUEST_ULR.BASE_URL}/${projectType}?&PageSize=9${requestString}`;

    return axios.get(Url)
      .then(res => {
        if (lastKey === key) {
          dispatch(receiveData(res));
        }
      })
      .catch(() => {
        dispatch(requestUserFailure());
      });
  };
};


// https://dev.tribus.org/api/v0.7/ideas?Page=1&PageSize=9&Benefit=18a2be21-93e8-40b0-ba05-2bf236e4bceb&Category=18a2be21-93e8-40b0-ba05-2bf236e4bceb&sort=createDate
// https://dev.tribus.org/api/v0.7/ideas?Petitions=true&Crowdfunding=true&Volunteering=true&Benefit=4b614b50-d789-4ed0-a0ca-40f000cd066d&Category=26124a02-7bf1-4458-8708-3f4e73deb22f&sort=createDate
