import * as axios from "axios";
import {makeRequestString, mergeQueryUrlWithHistory} from "../../../Libs/additionalSortingFunctions";

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
  // debugger;
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

  console.log(data);

  let key = Math.random()*100000;
  lastKey = key;

  return (dispatch) => {
    dispatch(requestData());

    let requestString = makeRequestString(mergeQueryUrlWithHistory(data, queries));

    const BASE_URL = `https://dev.tribus.org/api/v0.7/${projectType}?`;
    let Url = `${BASE_URL}&PageSize=9${requestString}`;

    return axios.get(Url)
      .then(res => {
        if (lastKey === key) {
          dispatch(receiveData(res))
        }
      })
      .catch( error => console.log(error))
  };
};


















// let petition = queryString.petition || data.petition;
// let crowdfunding = queryString.crowdfunding || data.crowdfunding;
// let volunteering = queryString.volunteering || data.volunteering;
// let benefit = queryString.benefits || data.benefits;
// let category = queryString.category || data.category;
// let sort = queryString.sort || data.sort;
// let page = queryString.page || data.currentPage;
// let creator = queryString.creator || data.creator;
// let eventType = queryString.type || data.type;
// let startDate = queryString.startDate || data.startDate;
// let endDate = queryString.endDate || data.endDate;
//
// let petitionReq = petition ? '&Petitions=true' : '';
// let crowdfundingReq = crowdfunding ? '&Crowdfunding=true' : '';
// let volunteeringReq = volunteering ? '&Volunteering=true' : '';
// let benefitReq = benefit ? `&Benefit=${benefit}` : '';
// let categoryReq = category ? `&Category=${category}` : '';
// let sortReq = sort ? `&Sort=${sort}` : '';
// let creatorReq = creator ? `&Creator=${creator}` : '';
// let startDateReq = startDate ? `&StartDate=${startDate}` : '';
// let endDateReq = endDate ? `&endDate=${endDate}` : '';
// let typeReq = eventType ? `&Type=${eventType}` : '';
// let Url = `${BASE_URL}Page=${page}&PageSize=9${typeReq}${creatorReq}${petitionReq}${crowdfundingReq}${volunteeringReq}${benefitReq}${categoryReq}${sortReq}${startDateReq}${endDateReq}`;



// export const getProjects = (page, benefit, category, sort, petition, crowdfunding, volunteering) => {
//   return (dispatch) => {
//     dispatch(requestData());
//
//     const BASE_URL = 'https://dev.tribus.org/api/v0.7/ideas?';
//     let petitionReq = petition ? '&Petitions=true' : '';
//     let crowdfundingReq = crowdfunding ? '&Crowdfunding=true' : '';
//     let volunteeringReq = volunteering ? '&Volunteering=true' : '';
//     let benefitReq = benefit ? `&Benefit=${benefit}` : '';
//     let categoryReq = category ? `&Category=${category}` : '';
//     let sortReq = sort ? `&sort=${sort}` : '';
//     let Url = `${BASE_URL}Page=${page}&PageSize=9${petitionReq}${crowdfundingReq}${volunteeringReq}${benefitReq}${categoryReq}${sortReq}`;
//
//     return axios.get(Url)
//       .then(res => dispatch(receiveData(res)))
//       .catch( error => console.log(error))
//   };
// };
//
//
// export const getGrants = (page, benefit, category, sort, creator) => {
//   return (dispatch) => {
//     dispatch(requestData());
//
//     const BASE_URL = 'https://dev.tribus.org/api/v0.7/grants?';
//     let creatorReq = creator ? `&Creator=${creator}` : '';
//     let benefitReq = benefit ? `&Benefit=${benefit}` : '';
//     let categoryReq = category ? `&Category=${category}` : '';
//     let sortReq = sort ? `&sort=${sort}` : '';
//     let Url = `${BASE_URL}Page=${page}&PageSize=9${creatorReq}${benefitReq}${categoryReq}${sortReq}`;
//
//     return axios.get(Url)
//       .then(res => dispatch(receiveData(res)))
//       .catch( error => console.log(error))
//   };
// };
//
//
// export const getEvents = (page, benefit, category, sort, eventType, startDate, endDate) => {
//   return (dispatch) => {
//     dispatch(requestData());
//
//     const BASE_URL = 'https://dev.tribus.org/api/v0.7/events?';
//     let startDateReq = startDate ? `&StartDate=${startDate}` : '';
//     let endDateReq = endDate ? `&StartDate=${endDate}` : '';
//     let typeReq = eventType ? `&Type=${eventType}` : '';
//     let benefitReq = benefit ? `&Benefit=${benefit}` : '';
//     let categoryReq = category ? `&Category=${category}` : '';
//     let sortReq = sort ? `&sort=${sort}` : '';
//     let Url = `${BASE_URL}Page=${page}&PageSize=9${typeReq}${benefitReq}${categoryReq}${sortReq}${startDateReq}${endDateReq}`;
//
//     return axios.get(Url)
//       .then(res => dispatch(receiveData(res)))
//       .catch( error => console.log(error))
//   };
// };

// https://dev.tribus.org/api/v0.7/ideas?Page=1&PageSize=9&Benefit=18a2be21-93e8-40b0-ba05-2bf236e4bceb&Category=18a2be21-93e8-40b0-ba05-2bf236e4bceb&sort=createDate
// https://dev.tribus.org/api/v0.7/ideas?Petitions=true&Crowdfunding=true&Volunteering=true&Benefit=4b614b50-d789-4ed0-a0ca-40f000cd066d&Category=26124a02-7bf1-4458-8708-3f4e73deb22f&sort=createDate
