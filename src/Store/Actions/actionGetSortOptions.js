import axios from "axios";


export const SORT_OPTIONS = {
  RECEIVE_CATEGORIES_OPTIONS: 'RECEIVE_CATEGORIES_OPTIONS',
  RECEIVE_BENEFITS_OPTIONS: 'RECEIVE_BENEFITS_OPTIONS',
};

const  receiveCategoriesOptions = (categories) => {
  return {
    type: SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS,
    payload: categories.data.data,
  }
};

const  receiveBenefitsOptions = (benefits) => {
  return {
    type: SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS,
    payload: benefits.data.data
  }
};

export const getOptions = () => {
  return (dispatch) => {
    axios.get('https://dev.tribus.org/api/v0.7/categories')
      .then(res => dispatch(receiveCategoriesOptions(res)));
    axios.get('https://dev.tribus.org/api/v0.7/benefits')
      .then(res => dispatch(receiveBenefitsOptions(res)));

  }
};