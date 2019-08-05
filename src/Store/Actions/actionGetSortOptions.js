import axios from "axios";


export const SORT_OPTIONS = {
  REQUEST_OPTIONS: 'REQUEST_OPTIONS',
  RECEIVE_CATEGORIES_OPTIONS: 'RECEIVE_CATEGORIES_OPTIONS',
  RECEIVE_BENEFITS_OPTIONS: 'RECEIVE_BENEFITS_OPTIONS',
};

const requestOptions = () => {
  debugger;
  return {
    type: SORT_OPTIONS.REQUEST_OPTIONS,
  }
};

const  receiveCategoriesOptions = (categories) => {
debugger;
  return {
    type: SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS,
    payload: categories.data.data,
  }
};

// const  receiveBenefitsOptions = (benefits) => {
//   return {
//     type: SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS,
//     payload: benefits.data.data
//   }
// };

export const getOptions = () => {
  debugger;
  return (dispatch) => {
    dispatch(requestOptions());
    return (
      axios.get('https://dev.tribus.org/api/v0.7/categories')
        .then(res => dispatch(receiveCategoriesOptions(res)))
    )

      // axios.get('https://dev.tribus.org/api/v0.7/benefits')
      //   .then(res => dispatch(receiveBenefitsOptions(res)))
  }
};