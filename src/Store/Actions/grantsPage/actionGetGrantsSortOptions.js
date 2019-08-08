// import * as axios from 'axios';
//
//
// export const SORT_OPTIONS = {
//   REQUEST_CATEGORIES_OPTIONS: 'REQUEST_CATEGORIES_OPTIONS',
//   REQUEST_BENEFITS_OPTIONS: 'REQUEST_BENEFITS_OPTIONS',
//   RECEIVE_CATEGORIES_OPTIONS: 'RECEIVE_CATEGORIES_OPTIONS',
//   RECEIVE_BENEFITS_OPTIONS: 'RECEIVE_BENEFITS_OPTIONS',
// };
//
// const requestCategoriesOptions = () => {
//   return {
//     type: SORT_OPTIONS.REQUEST_CATEGORIES_OPTIONS,
//   }
// };
//
// const requestBenefitsOptions = () => {
//   return {
//     type: SORT_OPTIONS.REQUEST_BENEFITS_OPTIONS,
//   }
// };
//
// const  receiveCategoriesOptions = (categories) => {
//   return {
//     type: SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS,
//     payload: categories.data.data,
//   }
// };
//
// const  receiveBenefitsOptions = (benefits) => {
//   return {
//     type: SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS,
//     payload: benefits.data.data
//   }
// };
//
// export const getCategoriesOptions = () => {
//   // debugger;
//   return (dispatch) => {
//     dispatch(requestCategoriesOptions());
//     return axios.get('https://dev.tribus.org/api/v0.7/categories')
//       .then(res => dispatch(receiveCategoriesOptions(res)));
//   }
// };
//
// export const getBenefitsOptions = () => {
//   return (dispatch) => {
//     dispatch(requestBenefitsOptions());
//     return axios.get('https://dev.tribus.org/api/v0.7/benefits')
//       .then(res => dispatch(receiveBenefitsOptions(res)));
//   }
// };