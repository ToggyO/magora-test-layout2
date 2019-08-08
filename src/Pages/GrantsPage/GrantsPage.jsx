import React, {useEffect, useState} from 'react';
import './GrantsPage.sass';
import GrantSearch from "./GrantSearch/GrantSearch";
import GrantProjects from "./GrantProjects/GrantProjects";
import {bindActionCreators} from "redux";
import {
  getGrants,
  grantsSortValues
} from "../../Store/Actions/grantsPage/actionFetchGrantsData";
import {
  getBenefitsOptions,
  getCategoriesOptions
} from '../../Store/Actions/projectSearchPage/actionGetSortOptions';
import {connect} from "react-redux";
import {mapQueryParamsToState, receivingGrantsData} from "../../Libs/additionalSortingFunctions";
import {parse} from "qs";
import GrantSearchEmpty from "./GrantSearch/GrantSearchEmpty";



const GrantsPage = (props) => {

  const {
    fetchedGrantsData,
    fetchedProjectsOptions,
    location,
    getGrants,
    grantsSortValues,
    getCategoriesOptions,
    getBenefitsOptions,
    history,
  } = props;

  const [initialize, setInitialize] = useState(false);

  const parseString = parse( props.location.search, { ignoreQueryPrefix: true });

  useEffect( () => {
    window.scrollTo(0, 0);

    let categoriesOptions = getCategoriesOptions();
    let benefitsOptions = getBenefitsOptions();
    let grantsData = receivingGrantsData(location, getGrants, fetchedGrantsData);
    mapQueryParamsToState(parseString, grantsSortValues);

    Promise.all([
      categoriesOptions,
      benefitsOptions,
      grantsData
    ]).then(() => setInitialize(true));
  },[]);


  if(!initialize) {
    // console.log(initialize);
    return (
      <>
        <GrantSearchEmpty />
        {/*<CommunityProjectsEmpty projectsData={fetchedProjectsData}/>*/}
      </>
    )
  } else {
    // console.log(initialize);

    return (
      <>
        <GrantSearch
          grantsData={fetchedGrantsData}
          optionsData={fetchedProjectsOptions}
          location={location}
          getProjects={getGrants}
          sortValues={grantsSortValues}
          getCategoriesOptions={getCategoriesOptions}
          getBenefitsOptions={getBenefitsOptions}
          history={history}
          parseString={parseString}
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
        {/*parseString={parseString}*/}
        {/*/>*/}
      </>
    )
  }
};


let mapStateToProps = ({ fetchedGrantsData, fetchedProjectsOptions, }) => ({ fetchedGrantsData, fetchedProjectsOptions, });
let mapDispatchToProps = (dispatch) => {
  return {
    getGrants: bindActionCreators(getGrants, dispatch),
    grantsSortValues: bindActionCreators(grantsSortValues, dispatch),
    getCategoriesOptions: bindActionCreators(getCategoriesOptions, dispatch),
    getBenefitsOptions: bindActionCreators(getBenefitsOptions, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(GrantsPage);