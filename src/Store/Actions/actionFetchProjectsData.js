import axios from "axios";

export const FETCHED_PROJECTS_DATA = {
  REQUEST_PROJECTS: 'REQUEST_PROJECTS',
  RECEIVE_PROJECTS: 'RECEIVE_PROJECTS',
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES'
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


export const getProjects = (page, pageSize) => {
  return (dispatch) => {
    dispatch(requestProjects());
    return axios.get(`https://dev.tribus.org/api/v0.7/ideas?Page=${page}&PageSize=${pageSize}&States=IDEA`)
      .then(res => dispatch(receiveProjects(res)))
  };
};

