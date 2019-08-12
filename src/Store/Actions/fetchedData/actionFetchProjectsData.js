import * as axios from "axios";

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
  debugger;
  return {
    type: FETCHED_PROJECTS_DATA.DATE_PICK,
    payload: {
      date,
      name
    }
  }
};


export const getDataFromServer = (data, queryString, projectType) => { // projectType
  // = ideas || grants || events

  return (dispatch) => {
    dispatch(requestData());


    let stateSimplify = (data) => {

    };

    let petition = queryString.petition || data.history.petition;
    let crowdfunding = queryString.crowdfunding || data.history.crowdfunding;
    let volunteering = queryString.volunteering || data.history.volunteering;
    let benefit = queryString.benefits || data.history.benefits;
    let category = queryString.category || data.history.category;
    let sort = queryString.sort || data.history.sort;
    let page = queryString.page || data.currentPage;
    let creator = queryString.creator || data.history.creator;
    let eventType = queryString.type || data.history.eventType;
    let startDate = queryString.startDate || data.history.startDate;
    let endDate = queryString.endDate || data.history.endDate;

    const BASE_URL = `https://dev.tribus.org/api/v0.7/${projectType}?`;
    let petitionReq = petition ? '&Petitions=true' : '';
    let crowdfundingReq = crowdfunding ? '&Crowdfunding=true' : '';
    let volunteeringReq = volunteering ? '&Volunteering=true' : '';
    let benefitReq = benefit ? `&Benefit=${benefit}` : '';
    let categoryReq = category ? `&Category=${category}` : '';
    let sortReq = sort ? `&sort=${sort}` : '';
    let creatorReq = creator ? `&Creator=${creator}` : '';
    let startDateReq = startDate ? `&StartDate=${startDate}` : '';
    let endDateReq = endDate ? `&endDate=${endDate}` : '';
    let typeReq = eventType ? `&Type=${eventType}` : '';

    let Url = `${BASE_URL}Page=${page}&PageSize=9${typeReq}${creatorReq}${petitionReq}${crowdfundingReq}${volunteeringReq}${benefitReq}${categoryReq}${sortReq}${startDateReq}${endDateReq}`;

    return axios.get(Url)
      .then(res => dispatch(receiveData(res)))
      .catch( error => console.log(error))
  };
};




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
