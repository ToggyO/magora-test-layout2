// import {stringify} from "qs";


export function sortingHelpers() {


  function receivingData() {

  }


  function makeQueryString(obj) {
    let queryString = '';
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        return queryString += `&${key}=${obj[key]}`;
      } else {
        return queryString
      }
    });
    return `?${queryString.slice(1)}`;
  }

}














// export const makeQueryString = (obj) => {
//   let queryString = '';
//   Object.keys(obj).forEach(key => {
//     if (obj[key]) {
//       return queryString += `&${key}=${obj[key]}`;
//     } else {
//       return queryString
//     }
//   });
//   return `?${queryString.slice(1)}`;
// };