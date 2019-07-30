import axios from "axios";

export const FETCHED_DATA = {
  FETCHED_PROJECTS: 'FETCHED_PROJECTS',
};


export const getAllProjects = () => {
  return (dispatch) => {
    axios.get('https://dev.tribus.org/api/v0.7/ideas?Page=1&PageSize=9&States=IDEA')
      .then(projects => {
        dispatch({
          type: FETCHED_DATA.FETCHED_PROJECTS,
          payload: projects.data.data,
        })
      })
  }
}