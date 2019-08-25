import * as axios from "axios";
import {makeRequestString, mergeQueryUrlWithHistory} from "../../../Libs/additionalSortingFunctions";
import {REQUEST_ULR} from "../../../Constants";


export const FETCHED_PROJECTS_DATA = {
  REQUEST_PROJECTS: 'REQUEST_PROJECTS',
  RECEIVE_PROJECTS: 'RECEIVE_PROJECTS',
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES',
  SET_CURRENT_PAGES: 'SET_CURRENT_PAGE',
  PROJECT_SORT_CHECKBOX_VALUES: 'PROJECT_SORT_CHECKBOX_VALUES',
  DATA_CLEANING: 'DATA_CLEANING',
  DATE_PICK: 'DATE_PICK',
};

const requestData = () => {
  return {
    type: FETCHED_PROJECTS_DATA.REQUEST_PROJECTS,
  }
};

const receiveData = (projects) => {
  return {
    type: FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS,
    payload: projects.data.data,
  }
};

export const sortValues = (value, name) => {
  return {
    type: FETCHED_PROJECTS_DATA.PROJECT_SORT_VALUES,
    payload: {
      value,
      name
    }
  }
};

export const projectsSortCheckboxValues = (name, value) => {
  return {
    type: FETCHED_PROJECTS_DATA.PROJECT_SORT_CHECKBOX_VALUES,
    payload: {
      name,
      value
    }
  }
};

export const stateItemsCleaning = () => {

  return {
    type: FETCHED_PROJECTS_DATA.DATA_CLEANING,
  }
};

export const datePick = (date, name) => {
  return {
    type: FETCHED_PROJECTS_DATA.DATE_PICK,
    payload: {
      date,
      name
    }
  }
};


let lastKey;

export const getDataFromServer = (data, queries, projectType) => { // projectType
  // = ideas || grants || events

  let key = Math.random()*100000;
  lastKey = key;

  return (dispatch) => {
    dispatch(requestData());

    let requestString = makeRequestString(mergeQueryUrlWithHistory(data, queries));

    let Url = `${REQUEST_ULR.BASE_URL}/${projectType}?&PageSize=9${requestString}`;

    return axios.get(Url)
      .then(res => {
        if (lastKey === key) {
          dispatch(receiveData(res))
        }
      })
      .catch( error => console.log(error))
  };
};








// https://dev.tribus.org/api/v0.7/ideas?Page=1&PageSize=9&Benefit=18a2be21-93e8-40b0-ba05-2bf236e4bceb&Category=18a2be21-93e8-40b0-ba05-2bf236e4bceb&sort=createDate
// https://dev.tribus.org/api/v0.7/ideas?Petitions=true&Crowdfunding=true&Volunteering=true&Benefit=4b614b50-d789-4ed0-a0ca-40f000cd066d&Category=26124a02-7bf1-4458-8708-3f4e73deb22f&sort=createDate
