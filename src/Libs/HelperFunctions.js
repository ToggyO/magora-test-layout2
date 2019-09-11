import React from 'react';
import { SubmissionError } from 'redux-form';
import { parse } from 'qs';
import axios from 'axios';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import GrantCard from '../Components/GrantCard/GrantCard';
import EventCard from '../Components/EventCard/EventCard';
import { KEYWORD, REQUEST_ULR } from '../Constants';
import { clearLocalState, writeToLocalState } from './localStorage';
/* eslint-disable import/no-cycle */
import { logOut } from '../Store/Actions/Auth/actionAuth';
// import { errorWrapperTrue } from '../Store/Actions/error/actionError';
// import history from '../history';
// import { modalOpen } from '../Store/Actions/modal/actionModal';
/* eslint-enable import/no-cycle */


/* eslint-disable */
export const makeQueryString = (obj) => {
  let queryString = '';
  Object.keys(obj).forEach(key => {
    if (key === 'page') {
      queryString += `&${key}=1`;
    } else if (obj[key]) {
      queryString += `&${key}=${obj[key]}`;
    } else {
      return queryString;
    }
    return queryString;
  });
  return `?${queryString.slice(1)}`;
};


export const renderingProjects = (data, component) => {
  if (!(data.length === 0)) {
    return data.map(item => {
      switch (component) {
        case KEYWORD.IDEAS:
          return <ProjectCard key={item.idea.id} item={item}/>;
        case KEYWORD.GRANTS:
          return <GrantCard key={item.grant.id} item={item}/>;
        case KEYWORD.EVENTS:
          return <EventCard key={item.event.id} item={item}/>;
        case KEYWORD.ENGAGEMENT:
          return <ProjectCard key={item.idea.id} item={item}/>;
        default:
          return null;
      }
    });
  }
  return <h1
    style={style}
  >
    Projects not found
  </h1>;
};


export const mapQueryParamsToState = (string, func) => {
  Object.keys(string).forEach(key => {
    if (string[key]) {
      return func(string[key], key);
    }
  });
};


export const makeRequestString = (obj) => {
  let reqString = '';
  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      reqString += `&${key[0].toUpperCase()}${key.slice(1)}=${obj[key]}`;
    }
    return reqString;
  });
  return reqString;
};


export const mergeQueryUrlWithHistory = (data, queries) => {
  const obj = {};
  Object.keys(data).forEach(key => {
    if (queries[key]) {
      obj[key] = queries[key];
    } else {
      obj[key] = data[key];
    }
  });
  return obj;
};


export const parseQueryString = (location) => {
  return parse(location, { ignoreQueryPrefix: true });
};


export const parseRouteString = (location) => {
  const routeString = location.slice(1).split('/');
  for (let i = 0; i < routeString.length; i++) {
    return routeString[routeString.length - 1];
  }
};


export const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};


export const responseError = (res, errorCodes) => {
    const { data = {} } = res;
    const { errors = {} } = data;

    const errorObj = {};
    errors.forEach(item => {
      if (item.field) {
        let firstLetterToLowerCase = `${item.field[0].toLowerCase()}${item.field.slice(1)}`;
        if (firstLetterToLowerCase === 'location.areaName'
          || 'location.stateName'
          || 'location.stateAbbreviation') {
          firstLetterToLowerCase = 'address';
        }
        errorObj[firstLetterToLowerCase] = errorCodes[item.code];
      } else if (errorCodes[item.code]) {
        errorObj._error = errorCodes[item.code];
      } else {
        errorObj._error = item.message;
      }
    });
    throw new SubmissionError(errorObj);
};


export const isAuthFalse = () => (
  (dispatch) => {
    clearLocalState('TOKEN_INFO');
    clearLocalState('USER_INFO');
    dispatch(logOut());
  }
);


export const refreshTokenData = (tokenData) => {
  const URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.AUTH_TOKEN}`;
  const dateNow = new Date().toISOString();

  // tokenData = {
  //   accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4ODM5Qjc0Nzg5QURFNEYzNEQ4NjU0MjZCNzRCMzQ3OUU0N0EyREMiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbl9pZCI6IjhmZGYzMTIxNGRkMDRkOGJiYTI1ZThlMWQzYzY1NTQ5IiwidXNlcl9pZCI6IjllMzQ2NTgxOGRiNTQ2NTJhNmE5MGNhYzE3Y2ZmOTFjIiwicGVybWlzc2lvbnMiOiJJZGVhQ3JlYXRlLElkZWFTdXBwb3J0LExvY2F0aW9uVXBkYXRlLEdyYW50QXBwbHkiLCJleHAiOjE1NjczOTc5NjIsImlzcyI6Imh0dHA6Ly9kZXYudHJpYnVzLm9yZy9hcGkiLCJhdWQiOiJodHRwOi8vZGV2LnRyaWJ1cy5vcmcifQ.QKvb-J-O0l1V5wiL2164T3qYvPVICkMPC0D1DPnCNJgrTM-FZCGiyoYq6cLKuyWdB_nX1FXCJTJfwFAGSNEJt-9co7gkzL_-rwJcrboNMhdxMDQg8YaYCWW79TmEDiAf39ys1MbiFNYoSgyBQ6oiUYIKEWYbu-deD-xLF-qzR7cqM9ru_0Kxz-gMx4w6YGLs_hcUlJf2yHwkH-ezQlAi6AEvYzN_ZVq79qTS9fAZ6F7oR4959sKXnEbX8Ed2E3JfvC7qxOwTqHR28clhxpqU1ujI8pdUJKnh3waZZCseuwXNKhL0PhLJonYy2TmWG45UPAyRt13IxcwQ6skAKBgwIw",
  //   accessTokenExpire:"2019-09-02T04:19:22.3366904Z",
  //   refreshToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4ODM5Qjc0Nzg5QURFNEYzNEQ4NjU0MjZCNzRCMzQ3OUU0N0EyREMiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbl9pZCI6ImM0YWUwNWQ2OWE5MjQwOTNiMDk5Yjk2YWY2NTVjNjE3IiwidXNlcl9pZCI6IjllMzQ2NTgxOGRiNTQ2NTJhNmE5MGNhYzE3Y2ZmOTFjIiwiZXhwIjoxNTY5OTg2MzYyLCJpc3MiOiJodHRwOi8vZGV2LnRyaWJ1cy5vcmcvYXBpIiwiYXVkIjoiaHR0cDovL2Rldi50cmlidXMub3JnIn0.L5XwBUq-ycAnarmsu3nK6byoBC_M0ruUJtp4xX1R4Jcn-L-IE8MX8vPEg-ePqS1jz_2jEPTYbXLzIngkFuq0d1lGDmk66AWVXPsPiGJ7v6s7FZM-Zcq0_kByrAT54UWuiUJpiDCF8Lz8IbfoHndtzFBlO-9XdNV-2wHGnC_FvvBja_wxh2YxXUNscRRJGLFpUcRaRSomjUIcuSdd99ul2Rr6Ci-TRmX5P_YIf9RDv9Q_hFRdTEVePlBlP1YdAFw2fzY38k-6j38_cYWnmwXZyPwd47uyIqv6c3ixQ-Wv1ruR44VhUQZ5IG9voPWqV0mvxd8FvfNrJ-smE4r_-M-uQQ"
  // }

  return new Promise(async (resolve, reject) => {
    if (tokenData && tokenData.accessTokenExpire <= dateNow) {
      try {
        const res = await axios.put(URL, {refreshToken: tokenData.refreshToken});
        const { data = {} } = res;
        if (data && data.code === 'success') {
          writeToLocalState('TOKEN_INFO', data.data);
          resolve(data.data);
        }
      } catch (error) {
        reject(error);
      }
    } else {
      return resolve(tokenData);
    }
  });
};


// Projects Not Found Style
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 35px',
  width: '100%',
  height: 100,
  borderRadius: '2px',
  fontSize: 28,
  color: '#313131',
  fontWeight: '700',
  borderBottom: '2px solid #808080',
};


// export const receivingProjectsData = (location, asyncActionCreator, data) => {
//
//   const queryString = parse( location.search, { ignoreQueryPrefix: true });
//   asyncActionCreator(
//     queryString.page || data.currentPage,
//     queryString.benefits || data.history.benefits,
//     queryString.category || data.history.category,
//     queryString.sort || data.history.sort,
//     queryString.petition || data.history.petition,
//     queryString.crowdfunding || data.history.crowdfunding,
//     queryString.volunteering || data.history.volunteering
//   );
// };
//
//
// export const receivingGrantsData = (location, asyncActionCreator, data) => {
//   const queryString = parse( location.search, { ignoreQueryPrefix: true });
//   asyncActionCreator(
//     queryString.page || data.currentPage,
//     queryString.benefits || data.history.benefits,
//     queryString.category || data.history.category,
//     queryString.sort || data.history.sort,
//     queryString.creator || data.history.creator,
//   );
// };
//
//
// export const receivingEventsData = (location, asyncActionCreator, data) => {
//   const queryString = parse( location.search, { ignoreQueryPrefix: true });
//   asyncActionCreator(
//     queryString.page || data.currentPage,
//     queryString.benefits || data.history.benefits,
//     queryString.category || data.history.category,
//     queryString.sort || data.history.sort,
//     queryString.type || data.history.eventType,
//     queryString.startDate || data.history.startDate,
//     queryString.endDate || data.history.endDate,
//   );
// };

// export const renderOptions = (items) => {
//   // console.log(items);
//   return items.map(item => ({ value: item.id, label: item.name}));
// };


// export const renderOptions = (items) => {
//   return new Promise(() => items.map(item => ({ value: item.id, label: item.name})))
// };


// export const onPageChanged = (page, location) => {
//   const parseString = parse( location.search, { ignoreQueryPrefix: true });
//   parseString.page = page;
//   history.push(`${location.pathname}?${stringify(parseString)}`);
// };


// export const renderingPagination = (totalItemCount, pageSize, currentPage, someProps) => {
//   let pagesCount = Math.ceil(totalItemCount / pageSize);
//   let pages = [ ];
//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i);
//   }
//   return pages.map( (page, i) => <span
//       className={ currentPage === page ? 'selectedPage' : '' }
//       onClick={ () => {onPageChanged(page, someProps)}
//       }
//       style={{marginLeft: 10}}
//       key={i}
//     >
//       {page}
//     </span>
//   )
// };

// export const refreshTokenData = (tokenData) => {
//   const URL = `${REQUEST_ULR.CORS_BASE_URL}/${REQUEST_ULR.AUTH_TOKEN}`;
//   const dateNow = new Date().toISOString();
//
//   return new Promise((resolve) => {
//     if (tokenData && tokenData.accessTokenExpire <= dateNow) {
//       debugger;
//       axios
//         .put(URL, {refreshToken: tokenData.refreshToken})
//         .then(res => {
//           const { data = {} } = res;
//           debugger;
//           if (data && data.code === 'success') {
//             writeToLocalState('TOKEN_INFO', data.data);
//             resolve(data.data);
//           }
//         })
//         .catch((error) => {
//           if (!error) {
//             return null;
//           }
//           const { data = {} } = error.response;
//           const { errors = {} } = data;
//           debugger;
//           errors.forEach(item => {
//             if (item.code === 'sec.access_token_invalid') {
//               dispatch(isAuthFalse());
//               history.push('/');
//               dispatch(modalOpen('signInModal'));
//             } else {
//               dispatch(errorWrapperTrue());
//             }
//           });
//         });
//     } else {
//       resolve(tokenData);
//     }
//   });
// };


// tokenData = {
//   accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4ODM5Qjc0Nzg5QURFNEYzNEQ4NjU0MjZCNzRCMzQ3OUU0N0EyREMiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbl9pZCI6IjhmZGYzMTIxNGRkMDRkOGJiYTI1ZThlMWQzYzY1NTQ5IiwidXNlcl9pZCI6IjllMzQ2NTgxOGRiNTQ2NTJhNmE5MGNhYzE3Y2ZmOTFjIiwicGVybWlzc2lvbnMiOiJJZGVhQ3JlYXRlLElkZWFTdXBwb3J0LExvY2F0aW9uVXBkYXRlLEdyYW50QXBwbHkiLCJleHAiOjE1NjczOTc5NjIsImlzcyI6Imh0dHA6Ly9kZXYudHJpYnVzLm9yZy9hcGkiLCJhdWQiOiJodHRwOi8vZGV2LnRyaWJ1cy5vcmcifQ.QKvb-J-O0l1V5wiL2164T3qYvPVICkMPC0D1DPnCNJgrTM-FZCGiyoYq6cLKuyWdB_nX1FXCJTJfwFAGSNEJt-9co7gkzL_-rwJcrboNMhdxMDQg8YaYCWW79TmEDiAf39ys1MbiFNYoSgyBQ6oiUYIKEWYbu-deD-xLF-qzR7cqM9ru_0Kxz-gMx4w6YGLs_hcUlJf2yHwkH-ezQlAi6AEvYzN_ZVq79qTS9fAZ6F7oR4959sKXnEbX8Ed2E3JfvC7qxOwTqHR28clhxpqU1ujI8pdUJKnh3waZZCseuwXNKhL0PhLJonYy2TmWG45UPAyRt13IxcwQ6skAKBgwIw",
//   accessTokenExpire:"2019-09-02T04:19:22.3366904Z",
//   refreshToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4ODM5Qjc0Nzg5QURFNEYzNEQ4NjU0MjZCNzRCMzQ3OUU0N0EyREMiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbl9pZCI6ImM0YWUwNWQ2OWE5MjQwOTNiMDk5Yjk2YWY2NTVjNjE3IiwidXNlcl9pZCI6IjllMzQ2NTgxOGRiNTQ2NTJhNmE5MGNhYzE3Y2ZmOTFjIiwiZXhwIjoxNTY5OTg2MzYyLCJpc3MiOiJodHRwOi8vZGV2LnRyaWJ1cy5vcmcvYXBpIiwiYXVkIjoiaHR0cDovL2Rldi50cmlidXMub3JnIn0.L5XwBUq-ycAnarmsu3nK6byoBC_M0ruUJtp4xX1R4Jcn-L-IE8MX8vPEg-ePqS1jz_2jEPTYbXLzIngkFuq0d1lGDmk66AWVXPsPiGJ7v6s7FZM-Zcq0_kByrAT54UWuiUJpiDCF8Lz8IbfoHndtzFBlO-9XdNV-2wHGnC_FvvBja_wxh2YxXUNscRRJGLFpUcRaRSomjUIcuSdd99ul2Rr6Ci-TRmX5P_YIf9RDv9Q_hFRdTEVePlBlP1YdAFw2fzY38k-6j38_cYWnmwXZyPwd47uyIqv6c3ixQ-Wv1ruR44VhUQZ5IG9voPWqV0mvxd8FvfNrJ-smE4r_-M-uQQ"
// }