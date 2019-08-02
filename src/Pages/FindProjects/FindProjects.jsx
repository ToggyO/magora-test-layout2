import React, { useEffect } from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";
import history from "../../history";
import {bindActionCreators} from "redux";
import {getOptions} from "../../Store/Actions/actionGetSortOptions";
import {projectsSortValues} from "../../Store/Actions/actionFetchProjectsData";
import {connect} from "react-redux";



const FindProjects = (props) => {


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
