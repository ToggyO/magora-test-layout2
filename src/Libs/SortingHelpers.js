// import {stringify} from "qs";


export const makeQueryString = (obj) => {
  let queryString = '';
  // queryString += stringify(obj, {strictNullHandling: true, skipNulls: false});

  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      return queryString += `&${key}=${obj[key]}`;
    } else {
      return queryString
    }
  });
  return `?${queryString.slice(1)}`;
};