import React, { useEffect } from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";
import history from "../../history";
import {bindActionCreators} from "redux";
import {getOptions} from "../../Store/Actions/actionGetSortOptions";
import {projectsSortValues} from "../../Store/Actions/actionFetchProjectsData";
import {connect} from "react-redux";
import {parse} from "qs";


const FindProjects = (props) => {

  const BASE_URL = '/projectSearch';
  const sortOptions  = props.fetchedProjectsData.history;

  useEffect( () => {
    history.push(`${BASE_URL}${makeQueryString(sortOptions)}`);
    const qS = parse( props.location.search, { ignoreQueryPrefix: true });
    console.log(qS);
    this.props.getProjects( qS.page || this.data.currentPage, this.data.pageSize,);

  },[]);

  const makeQueryString = (obj) => {
    let queryString = '?';
    Object.keys(obj).forEach(key => {
      debugger;
      if (obj[key]) {
        return queryString += `&${key}=${obj[key]}`;
      } else {
        return queryString
      }
    });
    console.log(queryString);
  };

  return (
    <>
      <ProjectSearch {...props}/>
      <CommunityProjects {...props}/>
    </>
  )
};

let mapStateToProps = ({ fetchedProjectsData, }) => ({ fetchedProjectsData, });

let mapDispatchToProps = (dispatch) => {
  return {
    projectsSortValues: bindActionCreators(projectsSortValues, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(FindProjects);
