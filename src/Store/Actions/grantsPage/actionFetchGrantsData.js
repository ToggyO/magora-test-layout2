import * as axios from "axios";

export const FETCHED_GRANTS_DATA = {
  REQUEST_GRANTS: 'REQUEST_GRANTS',
  RECEIVE_GRANTS: 'RECEIVE_GRANTS',
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES',
  PROJECT_SORT_CHECKBOX_VALUES: 'PROJECT_SORT_CHECKBOX_VALUES',
};

const requestGrants = () => {
  return {
    type: FETCHED_GRANTS_DATA.REQUEST_GRANTS,
  }
};

const receiveGrants = (projects) => {
  return {
    type: FETCHED_GRANTS_DATA.RECEIVE_GRANTS,
    payload: projects.data.data,
  }
};

export const projectsSortValues = (value, name) => {
  return {
    type: FETCHED_GRANTS_DATA.PROJECT_SORT_VALUES,
    payload: {
      value,
      name
    }
  }
};


export const getGrants = (page, benefit, category, sort, creator) => {
  return (dispatch) => {
    dispatch(requestGrants());

    const BASE_URL = 'https://dev.tribus.org/api/v0.7/grants?';
    let creatorReq = creator ? `&Creator=${creator}` : '';
    let benefitReq = benefit ? `&Benefit=${benefit}` : '';
    let categoryReq = category ? `&Category=${category}` : '';
    let sortReq = sort ? `&sort=${sort}` : '';
    let Url = `${BASE_URL}Page=${page}&PageSize=9${creatorReq}${benefitReq}${categoryReq}${sortReq}`;

    return axios.get(Url)
      .then(res => dispatch(receiveGrants(res)))
      .catch( error => console.log(error))
  };
};

// https://dev.tribus.org/api/v0.7/grants?Page=1&PageSize=9&Creator=COUNCIL&Benefit=4b614b50-d789-4ed0-a0ca-40f000cd066d&Category=26124a02-7bf1-4458-8708-3f4e73deb22f&sort=createDate