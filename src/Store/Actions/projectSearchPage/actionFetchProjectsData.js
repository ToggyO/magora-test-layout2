import axios from "axios";

export const FETCHED_PROJECTS_DATA = {
  REQUEST_PROJECTS: 'REQUEST_PROJECTS',
  RECEIVE_PROJECTS: 'RECEIVE_PROJECTS',
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES',
  SET_CURRENT_PAGES: 'SET_CURRENT_PAGE',
  PROJECT_SORT_CHECKBOX_VALUES: 'PROJECT_SORT_CHECKBOX_VALUES',
  // UPLOAD_SORT_VALUES: 'UPLOAD_SORT_VALUES'
};

// const requestProjects = () => {
//   return {
//     type: FETCHED_PROJECTS_DATA.REQUEST_PROJECTS,
//   }
// };

const receiveProjects = (projects) => {
  return {
    type: FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS,
    payload: projects.data.data,
  }
};

export const projectsSortValues = (value, name) => {
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

// export const uploadSortValuesToState = (sort, category, benefits) => {
//   return {
//     type: FETCHED_PROJECTS_DATA.UPLOAD_SORT_VALUES,
//     payload: {
//       sort,
//       category,
//       benefits
//     }
//   }
// };


export const getProjects = (page, benefit, category, sort, petition, crowdfunding, volunteering) => {
  return (dispatch) => {

    const BASE_URL = 'https://dev.tribus.org/api/v0.7/ideas?';
    let petitionReq = petition ? '&Petitions=true' : '';
    let crowdfundingReq = crowdfunding ? '&Crowdfunding=true' : '';
    let volunteeringReq = volunteering ? '&Volunteering=true' : '';
    let benefitReq = benefit ? `&Benefit=${benefit}` : '';
    let categoryReq = category ? `&Category=${category}` : '';
    let sortReq = sort ? `&sort=${sort}` : '';
    let Url = `${BASE_URL}Page=${page}&PageSize=9${petitionReq}${crowdfundingReq}${volunteeringReq}${benefitReq}${categoryReq}${sortReq}`;

    axios.get(Url)
      .then(res => dispatch(receiveProjects(res)))
      .catch( error => console.log(error))
  };
};

// https://dev.tribus.org/api/v0.7/ideas?Page=1&PageSize=9&Benefit=18a2be21-93e8-40b0-ba05-2bf236e4bceb&Category=18a2be21-93e8-40b0-ba05-2bf236e4bceb&sort=createDate
// https://dev.tribus.org/api/v0.7/ideas?Petitions=true&Crowdfunding=true&Volunteering=true&Benefit=4b614b50-d789-4ed0-a0ca-40f000cd066d&Category=26124a02-7bf1-4458-8708-3f4e73deb22f&sort=createDate