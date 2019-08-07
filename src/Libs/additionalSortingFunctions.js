// import {parse, stringify} from "qs";
// import history from "../history";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import React from "react";
import {parse} from "qs";


export const  makeQueryString = (obj) => {
  let queryString = '';
  Object.keys(obj).forEach(key => {
    if (obj[key]) {
      return queryString += `&${key}=${obj[key]}`;
    } else {
      return queryString
    }
  });
  return `?${queryString.slice(1)}`;
};


export const renderingProjects = (data) => {
  if (!(data.length === 0)) {
    return data.map((item, i) => <ProjectCard key={item.idea.id} item={item}/>);
  } else {
    return <h1
      style={
        {
          padding: '20px 35px',
          width: '100%',
          borderRadius: '5px',
          fontSize: 28,
          color: '#fff',
          fontWeight: '700',
          backgroundColor: '#4ccceb',
          textAlign: 'center'
        }
      }
    >
      Projects not found
    </h1>
  }
};


export const renderOptions = (items) => {
  // console.log(items);
  return items.map(item => ({ value: item.id, label: item.name}));
};


export const receivingData = (location, getProjects, data) => {
  const queryString = parse( location.search, { ignoreQueryPrefix: true });
  getProjects(
    queryString.page || data.currentPage,
    queryString.benefits || data.history.benefits,
    queryString.category || data.history.category,
    queryString.sort || data.history.sort,
    queryString.petition || data.history.petition,
    queryString.crowdfunding || data.history.crowdfunding,
    queryString.volunteering || data.history.volunteering);
};












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