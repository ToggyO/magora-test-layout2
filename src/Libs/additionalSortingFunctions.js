import React from 'react';
import { parse } from 'qs';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import GrantCard from '../Components/GrantCard/GrantCard';
import EventCard from '../Components/EventCard/EventCard';
import { KEYWORD } from '../Constants';


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
