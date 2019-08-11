// import * as axios from "axios";
//
// export const FETCHED_EVENTS_DATA = {
//   REQUEST_EVENTS: 'REQUEST_EVENTS',
//   RECEIVE_EVENTS: 'RECEIVE_EVENTS',
//   EVENTS_SORT_VALUES: 'EVENTS_SORT_VALUES',
// };
//
// const requestGrants = () => {
//   return {
//     type: FETCHED_EVENTS_DATA.REQUEST_EVENTS,
//   }
// };
//
// const receiveGrants = (projects) => {
//   return {
//     type: FETCHED_EVENTS_DATA.RECEIVE_EVENTS,
//     payload: projects.data.data,
//   }
// };
//
// export const eventsSortValues = (value, name) => {
//   return {
//     type: FETCHED_EVENTS_DATA.EVENTS_SORT_VALUES,
//     payload: {
//       value,
//       name
//     }
//   }
// };
//
//
// export const getEvents = (page, benefit, category, sort, eventType, startDate, endDate) => {
//   return (dispatch) => {
//     dispatch(requestGrants());
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
//       .then(res => dispatch(receiveGrants(res)))
//       .catch( error => console.log(error))
//   };
// };
//
// // https://dev.tribus.org/api/v0.7/events?Page=1&PageSize=9&Type=PAID&Benefit=4b614b50-d789-4ed0-a0ca-40f000cd066d&Category=26124a02-7bf1-4458-8708-3f4e73deb22f&StartDate=2019-08-09T08%3A24%3A46.131Z&EndDate=2019-08-09T08%3A25%3A22.933Z&sort=createDate
