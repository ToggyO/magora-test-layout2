import axios from "axios";

export const FETCHED_PROJECTS_DATA = {
  REQUEST_PROJECTS: 'REQUEST_PROJECTS',
  RECEIVE_PROJECTS: 'RECEIVE_PROJECTS',
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES',
  SET_CURRENT_PAGES: 'SET_CURRENT_PAGE'
};

const requestProjects = () => {
  return {
    type: FETCHED_PROJECTS_DATA.REQUEST_PROJECTS,
  }
};

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


export const getProjects = (page, benefit, category, sort) => {
  return (dispatch) => {
    dispatch(requestProjects());
    const BASE_URL = 'https://dev.tribus.org/api/v0.7/ideas?';
    let benefitReq = benefit ? `&Benefit=${benefit}` : '';
    let categoryReq = category ? `&Category=${category}` : '';
    let sortReq = sort ? `&sort=${sort}` : '';
    let Url = `${BASE_URL}Page=${page}&PageSize=9${benefitReq}${categoryReq}${sortReq}`;
    return axios.get(Url)
      .then(res => dispatch(receiveProjects(res)))
  };
};

// https://dev.tribus.org/api/v0.7/ideas?Page=1&PageSize=9&Benefit=18a2be21-93e8-40b0-ba05-2bf236e4bceb&Category=18a2be21-93e8-40b0-ba05-2bf236e4bceb&sort=createDate
