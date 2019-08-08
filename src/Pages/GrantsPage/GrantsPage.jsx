import React, {useEffect, useState} from 'react';
import './GrantsPage.sass';
import GrantSearch from "./GrantSearch/GrantSearch";
import GrantProjects from "./GrantProjects/GrantProjects";
import {bindActionCreators} from "redux";
import {
  getProjects,
  projectsSortValues
} from "../../Store/Actions/projectSearchPage/actionFetchProjectsData";
import {
  getBenefitsOptions,
  getCategoriesOptions
} from '../../Store/Actions/projectSearchPage/actionGetSortOptions';
import {connect} from "react-redux";
import {receivingData} from "../../Libs/additionalSortingFunctions";
import ProjectSearchEmpty from "../FindProjects/ProjectSearch/ProjectSearchEmpty";
import CommunityProjectsEmpty from "../FindProjects/CommunityProjects/CommunityProjectsEmpty";
import ProjectSearch from "../FindProjects/ProjectSearch/ProjectSearch";
import {getGrants} from "../../Store/Actions/grantsPage/actionFetchGrantsData";


const GrantsPage = (props) => {

  const {
    fetchedGrantsData,
    fetchedProjectsOptions,
    location,
    getGrants,
    projectsSortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
  } = props;

  const [initialize, setInitialize] = useState(false);

  useEffect( () => {
    window.scrollTo(0, 0);

    let categoriesOptions = getCategoriesOptions();
    let benefitsOptions = getBenefitsOptions();
    // let grantsData = receivingData(location, getGrants, fetchedGrantsData);

    Promise.all([
      categoriesOptions,
      benefitsOptions,
      // grantsData
    ]).then(() => setInitialize(true));
  },[]);


  if(!initialize) {
    return (
      <>
        {/*<ProjectSearchEmpty />*/}
        {/*<CommunityProjectsEmpty projectsData={fetchedProjectsData}/>*/}
      </>
    )
  } else {
    return (
      <>
        <GrantSearch
          grantsData={fetchedGrantsData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getGrants}
          projectsSortValues={projectsSortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
        />
        {/*<GrantProjects*/}
        {/*  grantsData={fetchedGrantsData}*/}
        {/*  optionsData={fetchedProjectsOptions}*/}
        {/*  location={location}*/}
        {/*  getProjects={getGrants}*/}
        {/*  projectsSortValues={projectsSortValues}*/}
        {/*  getCategoriesOptions={getCategoriesOptions}*/}
        {/*  getBenefitsOptions={getBenefitsOptions}*/}
        {/*  history={history}*/}
        {/*/>*/}
      </>
    )
  }
};


let mapStateToProps = ({ fetchedGrantsData, fetchedProjectsOptions, }) => ({ fetchedGrantsData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getProjects: bindActionCreators(getProjects, dispatch),
    projectsSortValues: bindActionCreators(projectsSortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(GrantsPage);